#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_resolutionNorm;
uniform vec2 u_texSize;
uniform vec2 u_texSizeNorm;
uniform sampler2D u_tex;


void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float imageAspect = (u_texSize.x / u_texSize.y);
    float canvasAspect = u_resolution.x / u_resolution.y;
    vec2 scaledUV;

    if (canvasAspect > imageAspect) {
        // float scale = u_resolution.y / u_texSizeY;
        // float scaledWidth = u_texSizeX * scale;
        // float xOffset = (u_resolution.x - scaledWidth) / 2.0;
        // scaledUV = (gl_FragCoord.xy - vec2(xOffset, 0.0)) / scaledWidth;
    } else {
        // float scale = u_resolution.x / u_texSizeX;
        // float scaledHeight = u_texSizeY * scale;
        // float yOffset = (u_resolution.y - scaledHeight) / 2.0;
        // scaledUV = (gl_FragCoord.xy - vec2(0.0, yOffset)) / scaledHeight;
    }

    vec4 texColor = texture2D(u_tex, uv.xy);
    gl_FragColor = texColor;
    // float dkjfslkdj = scaledUV.x * 0.00000000000000000000000000000000000005;
    // gl_FragColor = vec4(1.0, dkjfslkdj, 0.0, 1.0);
}
