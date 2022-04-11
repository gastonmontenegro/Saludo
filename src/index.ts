let botonSaludo = document.getElementById("saludar");
botonSaludo?.addEventListener("click", funcionSaludo);

function funcionSaludo() {
  let mensaje = prompt("Ingrese Nombre");
  alert("Hola " + mensaje);
}
