const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reKeySegment = /_key\s*==\s*['"](.*)['"]/, reIndexTuple = /^\d*:\d*$/;
function isIndexSegment(segment) {
  return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
function isKeySegment(segment) {
  return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function isIndexTuple(segment) {
  if (typeof segment == "string" && reIndexTuple.test(segment))
    return !0;
  if (!Array.isArray(segment) || segment.length !== 2)
    return !1;
  const [from, to] = segment;
  return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
function get(obj, path, defaultVal) {
  const select = typeof path == "string" ? fromString(path) : path;
  if (!Array.isArray(select))
    throw new Error("Path must be an array or a string");
  let acc = obj;
  for (let i = 0; i < select.length; i++) {
    const segment = select[i];
    if (isIndexSegment(segment)) {
      if (!Array.isArray(acc))
        return defaultVal;
      acc = acc[segment];
    }
    if (isKeySegment(segment)) {
      if (!Array.isArray(acc))
        return defaultVal;
      acc = acc.find((item) => item._key === segment._key);
    }
    if (typeof segment == "string" && (acc = typeof acc == "object" && acc !== null ? acc[segment] : void 0), typeof acc > "u")
      return defaultVal;
  }
  return acc;
}
function toString(path) {
  if (!Array.isArray(path))
    throw new Error("Path is not an array");
  return path.reduce((target, segment, i) => {
    const segmentType = typeof segment;
    if (segmentType === "number")
      return `${target}[${segment}]`;
    if (segmentType === "string")
      return `${target}${i === 0 ? "" : "."}${segment}`;
    if (isKeySegment(segment) && segment._key)
      return `${target}[_key=="${segment._key}"]`;
    if (Array.isArray(segment)) {
      const [from, to] = segment;
      return `${target}[${from}:${to}]`;
    }
    throw new Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
  }, "");
}
function fromString(path) {
  if (typeof path != "string")
    throw new Error("Path is not a string");
  const segments = path.match(rePropName);
  if (!segments)
    throw new Error("Invalid path string");
  return segments.map(parsePathSegment);
}
function parsePathSegment(segment) {
  return isIndexSegment(segment) ? parseIndexSegment(segment) : isKeySegment(segment) ? parseKeySegment(segment) : isIndexTuple(segment) ? parseIndexTupleSegment(segment) : segment;
}
function parseIndexSegment(segment) {
  return Number(segment.replace(/[^\d]/g, ""));
}
function parseKeySegment(segment) {
  return { _key: segment.match(reKeySegment)[1] };
}
function parseIndexTupleSegment(segment) {
  const [from, to] = segment.split(":").map((seg) => seg === "" ? seg : Number(seg));
  return [from, to];
}
var studioPath = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  fromString,
  get,
  isIndexSegment,
  isIndexTuple,
  isKeySegment,
  reKeySegment,
  toString
});
const DRAFTS_PREFIX = "drafts.";
function getPublishedId(id) {
  return id.startsWith(DRAFTS_PREFIX) ? id.slice(DRAFTS_PREFIX.length) : id;
}
const ESCAPE = {
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "'": "\\'",
  "\\": "\\\\"
}, UNESCAPE = {
  "\\f": "\f",
  "\\n": `
`,
  "\\r": "\r",
  "\\t": "	",
  "\\'": "'",
  "\\\\": "\\"
};
function jsonPath(path) {
  return `$${path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key !== "" ? `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]` : `[${segment._index}]`).join("")}`;
}
function parseJsonPath(path) {
  const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
  let match;
  for (; (match = parseRe.exec(path)) !== null; ) {
    if (match[1] !== void 0) {
      const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => UNESCAPE[m]);
      parsed.push(key);
      continue;
    }
    if (match[2] !== void 0) {
      parsed.push(parseInt(match[2], 10));
      continue;
    }
    if (match[3] !== void 0) {
      const _key = match[3].replace(/\\(\\')/g, (m) => UNESCAPE[m]);
      parsed.push({
        _key,
        _index: -1
      });
      continue;
    }
  }
  return parsed;
}
function jsonPathToStudioPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._key !== "")
      return { _key: segment._key };
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function studioPathToJsonPath(path) {
  return (typeof path == "string" ? fromString(path) : path).map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (Array.isArray(segment))
      throw new Error(`IndexTuple segments aren't supported:${JSON.stringify(segment)}`);
    if (isContentSourceMapParsedPathKeyedSegment(segment))
      return segment;
    if (segment._key)
      return { _key: segment._key, _index: -1 };
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function isContentSourceMapParsedPathKeyedSegment(segment) {
  return typeof segment == "object" && "_key" in segment && "_index" in segment;
}
function jsonPathToMappingPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function resolveMapping(resultPath, csm) {
  if (!csm?.mappings)
    return;
  const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
  if (csm.mappings[resultMappingPath] !== void 0)
    return {
      mapping: csm.mappings[resultMappingPath],
      matchedPath: resultMappingPath,
      pathSuffix: ""
    };
  const mappings = Object.entries(csm.mappings).filter(([key]) => resultMappingPath.startsWith(key)).sort(([key1], [key2]) => key2.length - key1.length);
  if (mappings.length == 0)
    return;
  const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
  return { mapping, matchedPath, pathSuffix };
}
function isArray(value) {
  return value !== null && Array.isArray(value);
}
function isRecord(value) {
  return typeof value == "object" && value !== null;
}
function walkMap(value, mappingFn, path = []) {
  if (isArray(value))
    return value.map((v, idx) => {
      if (isRecord(v)) {
        const _key = v._key;
        if (typeof _key == "string")
          return walkMap(v, mappingFn, path.concat({ _key, _index: idx }));
      }
      return walkMap(v, mappingFn, path.concat(idx));
    });
  if (isRecord(value)) {
    if (value._type === "block" || value._type === "span") {
      const result = { ...value };
      return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
    }
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, walkMap(v, mappingFn, path.concat(k))])
    );
  }
  return mappingFn(value, path);
}
function createEditUrl(options) {
  const {
    baseUrl,
    workspace: _workspace = "default",
    tool: _tool = "default",
    id: _id,
    type,
    path,
    projectId,
    dataset
  } = options;
  if (!baseUrl)
    throw new Error("baseUrl is required");
  if (!path)
    throw new Error("path is required");
  if (!_id)
    throw new Error("id is required");
  if (baseUrl !== "/" && baseUrl.endsWith("/"))
    throw new Error("baseUrl must not end with a slash");
  const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
    baseUrl,
    id,
    type,
    path: stringifiedPath
  });
  workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), _id.startsWith(DRAFTS_PREFIX) && searchParams.set("isDraft", "");
  const segments = [baseUrl === "/" ? "" : baseUrl];
  workspace && segments.push(workspace);
  const routerParams = [
    "mode=presentation",
    `id=${id}`,
    `type=${type}`,
    `path=${encodeURIComponent(stringifiedPath)}`
  ];
  return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
}
function resolveEditInfo(options) {
  const { resultSourceMap: csm, resultPath } = options, { mapping, pathSuffix } = resolveMapping(resultPath, csm) || {};
  if (!mapping || mapping.source.type === "literal" || mapping.source.type === "unknown")
    return;
  const sourceDoc = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path];
  if (sourceDoc && sourcePath) {
    const { baseUrl, workspace, tool } = resolveStudioBaseRoute(
      typeof options.studioUrl == "function" ? options.studioUrl(sourceDoc) : options.studioUrl
    );
    if (!baseUrl) return;
    const { _id, _type, _projectId, _dataset } = sourceDoc;
    return {
      baseUrl,
      workspace,
      tool,
      id: _id,
      type: _type,
      path: parseJsonPath(sourcePath + pathSuffix),
      projectId: _projectId,
      dataset: _dataset
    };
  }
}
function resolveStudioBaseRoute(studioUrl) {
  let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
  return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? { baseUrl } : { ...studioUrl, baseUrl };
}
export {
  DRAFTS_PREFIX,
  createEditUrl,
  get,
  getPublishedId,
  jsonPath,
  jsonPathToStudioPath,
  parseJsonPath,
  reKeySegment,
  resolveEditInfo,
  resolveMapping,
  resolveStudioBaseRoute,
  studioPath,
  studioPathToJsonPath,
  toString,
  walkMap
};
//# sourceMappingURL=resolveEditInfo.js.map
