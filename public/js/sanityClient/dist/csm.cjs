"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var resolveEditInfo = require("./_chunks-cjs/resolveEditInfo.cjs");
const defaultUpdateFunction = (changed) => changed;
function applySourceDocuments(result, resultSourceMap, getCachedDocument, updateFn = defaultUpdateFunction, perspective = "raw") {
  if (!resultSourceMap) return result;
  if (perspective !== "published" && perspective !== "raw" && perspective !== "previewDrafts")
    throw new Error(`Unknown perspective "${perspective}"`);
  return resolveEditInfo.walkMap(JSON.parse(JSON.stringify(result)), (value, path) => {
    const resolveMappingResult = resolveEditInfo.resolveMapping(path, resultSourceMap);
    if (!resolveMappingResult)
      return value;
    const { mapping, pathSuffix } = resolveMappingResult;
    if (mapping.type !== "value" || mapping.source.type !== "documentValue")
      return value;
    const sourceDocument = resultSourceMap.documents[mapping.source.document], sourcePath = resultSourceMap.paths[mapping.source.path];
    if (sourceDocument) {
      const parsedPath = resolveEditInfo.parseJsonPath(sourcePath + pathSuffix), stringifiedPath = resolveEditInfo.toString(parsedPath);
      if (stringifiedPath === "_id")
        return value;
      let cachedDocument;
      if (perspective === "previewDrafts" ? (cachedDocument = getCachedDocument(
        sourceDocument._id.startsWith(resolveEditInfo.DRAFTS_PREFIX) ? sourceDocument : { ...sourceDocument, _id: `${resolveEditInfo.DRAFTS_PREFIX}${sourceDocument._id}}` }
      ), cachedDocument || (cachedDocument = getCachedDocument(
        sourceDocument._id.startsWith(resolveEditInfo.DRAFTS_PREFIX) ? { ...sourceDocument, _id: resolveEditInfo.getPublishedId(sourceDocument._id) } : sourceDocument
      )), cachedDocument && (cachedDocument = {
        ...cachedDocument,
        _id: resolveEditInfo.getPublishedId(sourceDocument._id),
        _originalId: sourceDocument._id
      })) : cachedDocument = getCachedDocument(sourceDocument), !cachedDocument)
        return value;
      const changedValue = cachedDocument ? resolveEditInfo.get(cachedDocument, stringifiedPath, value) : value;
      return value === changedValue ? value : updateFn(changedValue, {
        cachedDocument,
        previousValue: value,
        sourceDocument,
        sourcePath: parsedPath
      });
    }
    return value;
  });
}
function resolvedKeyedSourcePath(options) {
  const { keyedResultPath, pathSuffix, sourceBasePath } = options, inferredResultPath = pathSuffix === void 0 ? [] : resolveEditInfo.parseJsonPath(pathSuffix), inferredPath = keyedResultPath.slice(keyedResultPath.length - inferredResultPath.length), inferredPathSuffix = inferredPath.length ? resolveEditInfo.jsonPath(inferredPath).slice(1) : "";
  return resolveEditInfo.parseJsonPath(sourceBasePath + inferredPathSuffix);
}
function resolveEditUrl(options) {
  const { resultSourceMap, studioUrl } = options, resultPath = resolveEditInfo.studioPathToJsonPath(options.resultPath), editInfo = resolveEditInfo.resolveEditInfo({
    resultPath,
    resultSourceMap,
    studioUrl
  });
  if (editInfo)
    return resolveEditInfo.createEditUrl(editInfo);
}
exports.createEditUrl = resolveEditInfo.createEditUrl;
exports.getPublishedId = resolveEditInfo.getPublishedId;
exports.jsonPath = resolveEditInfo.jsonPath;
exports.jsonPathToStudioPath = resolveEditInfo.jsonPathToStudioPath;
exports.parseJsonPath = resolveEditInfo.parseJsonPath;
exports.resolveEditInfo = resolveEditInfo.resolveEditInfo;
exports.resolveMapping = resolveEditInfo.resolveMapping;
exports.studioPath = resolveEditInfo.studioPath;
exports.studioPathToJsonPath = resolveEditInfo.studioPathToJsonPath;
exports.walkMap = resolveEditInfo.walkMap;
exports.applySourceDocuments = applySourceDocuments;
exports.resolveEditUrl = resolveEditUrl;
exports.resolvedKeyedSourcePath = resolvedKeyedSourcePath;
//# sourceMappingURL=csm.cjs.map
