import {
    login,
    obtenerRoles,
    obtenerUsuarios,
    obtenerZonas,
    obtenerHoteles
} from "./api.js";

import {
    mostrarLogin,
    mostrarRoles,
    mostrarUsuarios,
    mostrarZonas,
    mostrarHoteles
} from "./render.js";

async function iniciar() {
    const loginData = await login();

    mostrarLogin(loginData);

    if (loginData.cookieGuardada) {
        const roles = await obtenerRoles();
        mostrarRoles(roles);

        const usuarios = await obtenerUsuarios();
        mostrarUsuarios(usuarios);

        const zonas = await obtenerZonas();
        mostrarZonas(zonas);

        const hoteles = await obtenerHoteles();
        mostrarHoteles(hoteles);
    } else {
        document.getElementById("resultado1").textContent =
            "No se consultaron datos porque no se guardó la cookie.";
    }
}

iniciar();