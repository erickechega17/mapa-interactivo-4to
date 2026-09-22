async function cargarDatos() {
  // En vez de fetch("datos.json"), le pedimos los datos al backend Flask
  const respuesta = await fetch("/api/lugares");
  const lugares = await respuesta.json();
  const menu = document.getElementById("menu");

  lugares.forEach(lugar => {
    const boton = document.createElement("button");
    boton.textContent = `${lugar.id}. ${lugar.nombre}`;
    boton.onclick = () => mostrarInfo(lugar);
    menu.appendChild(boton);
  });
}

function mostrarInfo(lugar) {
  document.getElementById("info-titulo").textContent = lugar.nombre;
  document.getElementById("info-descripcion").textContent = lugar.descripcion;
}

cargarDatos();