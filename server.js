// const express = require("express");

// const app = express();
// const PORT = 3000;

// app.use(express.static("public"));

// app.post("/login", (req, res) => {
//     console.log("Llegó una petición a /login");

//     res.json({
//         mensaje: "Sí se conectó con server.js"
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Servidor activo en http://localhost:${PORT}`);
// });


const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const API_LOGIN_URL = "http://192.168.100.166:7001/api/login/";
const API_ROLES_URL = "http://192.168.100.166:7001/api/roles";
const API_USUARIOS_URL = "http://192.168.100.166:7001/api/usuarios";
const API_ZONAS_URL = "http://192.168.100.166:7001/api/zonas";
const API_HOTELES_URL = "http://192.168.100.166:7001/api/zonas";

const CREDENCIALES = {
    username: "victor@digital-solution.mx",
    password: "123456"
};

let cookieSesion = "";

app.post("/login", async (req, res) => {
    const respuestaApi = await fetch(API_LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(CREDENCIALES)
    });

    const setCookie = respuestaApi.headers.get("set-cookie");
    // const texto = await respuestaApi.text();

    if (setCookie) {
        cookieSesion = setCookie.split(";")[0];

        const token = cookieSesion.split("=")[1];

        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });
    }

    const texto = await respuestaApi.text();

    res.json({
        status: respuestaApi.status,
        ok: respuestaApi.ok,
        mensaje: respuestaApi.ok ? "Login exitoso" : "Login fallido",
        respuesta: texto,
        cookieGuardada: cookieSesion ? true : false
    });
});


app.get("/roles", async (req, res) => {
    const respuesta = await fetch(API_ROLES_URL, {
        method: "GET",
        headers: {
            Cookie: cookieSesion
        }
    });
    const texto = await respuesta.text();

    res.json({
        status: respuesta.status,
        ok: respuesta.ok,
        respuesta: texto
    });
});


app.get("/usuarios", async (req, res) => {
    const respuesta = await fetch(API_USUARIOS_URL, {
        method: "GET",
        headers: {
            Cookie: cookieSesion
        }
    });
    const texto = await respuesta.text();

    res.json({
        status: respuesta.status,
        ok: respuesta.ok,
        respuesta: texto
    });
});

app.get("/zonas", async (req, res) => {
    const respuesta = await fetch(API_ZONAS_URL, {
        method: "GET",
        headers: {
            Cookie: cookieSesion
        }
    });
    const texto = await respuesta.text();

    res.json({
        status: respuesta.status,
        ok: respuesta.ok,
        respuesta: texto
    });
});


app.get("/hoteles", async (req, res) => {
    const respuesta = await fetch(API_HOTELES_URL, {
        method: "GET",
        headers: {
            Cookie: cookieSesion
        }
    });
    const texto = await respuesta.text();

    res.json({
        status: respuesta.status,
        ok: respuesta.ok,
        respuesta: texto
    });
});



app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});