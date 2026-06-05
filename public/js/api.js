// export async function login() {
//     const respuesta = await fetch("/login", {
//         method: "POST",
//         credentials: "include"
//     });

//     const data = await respuesta.json();

//     return data;
// }

// export async function obtenerRoles() {
//     const respuesta = await fetch("/roles", {
//         method: "GET",
//         credentials: "include"
//     });

//     const data = await respuesta.json();

//     return JSON.parse(data.respuesta);
// }

// export async function obtenerUsuarios() {
//     const respuesta = await fetch("/usuarios", {
//         method: "GET",
//         credentials: "include"
//     });

//     const data = await respuesta.json();

//     return JSON.parse(data.respuesta);
// }

// export async function obtenerZonas() {
//     const respuesta = await fetch("/zonas", {
//         method: "GET",
//         credentials: "include"
//     });

//     const data = await respuesta.json();

//     return JSON.parse(data.respuesta);
// }

// export async function obtenerHoteles() {
//     const respuesta = await fetch("/hoteles", {
//         method: "GET",
//         credentials: "include"
//     });

//     const data = await respuesta.json();

//     return JSON.parse(data.respuesta);
// }