async function cargarDatos() {
  // En vez de fetch("datos.json"), le pedimos los datos al backend Flask
  const respuesta = await fetch("/api/lugares");
  const lugares = await respuesta.json();
  const menu = document.getElementById("menu");

  // AGREGO ESTO PARA LOS MARCADORES

  const mapaWrapper = document.getElementById("mapa-wrapper");
 
  lugares.forEach(lugar => {
    // Botón del menú (igual que antes)
    const boton = document.createElement("button");
    boton.textContent = `${lugar.id}. ${lugar.nombre}`;
    boton.dataset.id = lugar.id;
    boton.onclick = () => mostrarInfo(lugar);
    menu.appendChild(boton);
 
    // Marcador numerado sobre el mapa, posicionado con x/y del JSON
    const marcador = document.createElement("div");
    marcador.className = "marcador";
    marcador.textContent = lugar.id;
    marcador.dataset.id = lugar.id;
    marcador.style.left = `${lugar.x}%`;
    marcador.style.top = `${lugar.y}%`;
    marcador.onclick = () => mostrarInfo(lugar);
    mapaWrapper.appendChild(marcador);
  });
}
  // HASTA ACÁ


/*
  lugares.forEach(lugar => {
    const boton = document.createElement("button");
    boton.textContent = `${lugar.id}. ${lugar.nombre}`;
    boton.onclick = () => mostrarInfo(lugar);
    menu.appendChild(boton);
  });
*/


function mostrarInfo(lugar) {
  document.getElementById("info-titulo").textContent = lugar.nombre;
  document.getElementById("info-descripcion").textContent = lugar.descripcion;

  // AGREGO ESTO PARA LOS MARCADORES

  // Resalta el lugar seleccionado, tanto en el botón del menú
  // como en el marcador sobre el mapa
  document.querySelectorAll("#menu button, .marcador").forEach(el => {
    el.classList.toggle("activo", el.dataset.id == lugar.id);
  });

  // HASTA ACÁ

}

cargarDatos();