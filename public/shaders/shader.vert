precision mediump float;

attribute vec2 aTexCoordinate; // Input texture coordinates
attribute vec4 vPosition;      // Input vertex position

varying vec2 vTexCoordinate;   // Output texture coordinates for the fragment shader

void main() {
    vTexCoordinate = aTexCoordinate; // Pass the texture coordinates to the fragment shader
    gl_Position = vPosition;         // Set the position of the vertex
}
