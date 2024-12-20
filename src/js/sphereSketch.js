import { sculptToMinimalRenderer } from "/js/shaderpark/shader-park-core.esm.js";

// console.log(ShaderPark);

export const spCode = `
reset();
// shine(0.8);

// setMaxIterations(10);

// // Configuración inicial
// let s = getSpace();
// let dotSize = pow(distance(s, mouseIntersection()) * 10, 20) + 0.1;
// let sc = getSpace();
// let scale = 5;
// let n = 0.025 * noise(scale * sc + time); // Movimiento basado en ruido




// // Colores dinámicos (de la segunda pieza)
// //let dynamiColor = vectorContourNoise(s * scale + time * 0.4, 0.02, 6) * 0.5 + 0.5;
// let dynamicColor = vec3(0.0, (noise(sc*50+(time*3)))*0.25, noise(sc*80 + time*5)*0.85);
// dynamicColor = pow(dynamicColor, vec3(0.7)); // Ajuste de intensidad


// // Aplicar color dinámico
// color(dynamicColor);

// // Efectos de material (de la segunda pieza)
// metal(10); // Acabado metálico
// //setMaxReflections(8); // Reflejos sutiles


// // Rotación y deformación

// reset();
// //let conto = getRayDirection().x * 10 * sin(time + scale);
// //rotateX(PI / 2 + conto);


// sphere(0.8 + n); // Esfera con tamaño dinámico


`;

let canvas = document.querySelector("#waterOrb");
// This converts your Shader Park code into a shader and renders it to the my-canvas element
sculptToMinimalRenderer(canvas, spCode);
