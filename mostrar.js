const dato = localStorage.getItem("datoGuardado");
document.getElementById("resultado").textContent = dato || "No se escribió nada.";
