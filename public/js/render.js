// export function mostrarLogin(data) {
//     const resultado = document.getElementById("resultado");

//     resultado.textContent = JSON.stringify(data, null, 2);
// }

// export function mostrarRoles(roles) {
//     const resultado1 = document.getElementById("resultado1");

//     let html = "";

//     roles.forEach(rol => {
//         html += `
//             <div class="tarjeta">
//                 <span class="badge">ID: ${rol.id}</span>
//                 <p><strong>Nombre de rol:</strong> ${rol.nombre_rol}</p>
//                 <p><strong>Descripción:</strong> ${rol.comentario_rol}</p>
//             </div>
//         `;
//     });

//     resultado1.innerHTML = html;
// }

// export function mostrarUsuarios(usuarios) {
//     const resultado2 = document.getElementById("resultado2");

//     let html = "";

//     usuarios.forEach(usuario => {
//         html += `
//             <div class="tarjeta">
//                 <span class="badge">ID: ${usuario.id}</span>
//                 <p><strong>Última conexión:</strong> ${usuario.last_login ?? "Sin registro"}</p>
//                 <p><strong>Correo:</strong> ${usuario.correo_usuario}</p>
//                 <p><strong>ID Rol:</strong> ${usuario.id_rol}</p>
//                 <p><strong>Descripción:</strong> ${usuario.rol_descripcion}</p>
//                 <p><strong>Activo:</strong> ${usuario.is_active ? "Sí" : "No"}</p>
//             </div>
//         `;
//     });

//     resultado2.innerHTML = html;
// }

// export function mostrarZonas(zonas) {
//     const resultado3 = document.getElementById("resultado3");

//     let html = "";

//     zonas.forEach(zona => {
//         html += `
//             <div class="tarjeta">
//                 <span class="badge">ID: ${zona.id}</span>
//                 <p><strong>Nombre de la zona:</strong> ${zona.nombre_zona}</p>
//             </div>
//         `;
//     });

//     resultado3.innerHTML = html;
// }

// export function mostrarHoteles(hoteles) {
//     const resultado4 = document.getElementById("resultado4");

//     let html = "";

//     hoteles.forEach(hotel => {
//         html += `
//             <div class="tarjeta">
//                 <span class="badge">ID: ${hotel.id}</span>
//                 <p><strong>Nombre del hotel:</strong> ${hotel.nombre_hotel}</p>
//                 <p><strong>ID de la zona:</strong> ${hotel.id_zona}</p>
//             </div>
//         `
//     });

//     resultado4.innerHTML = html;
// }