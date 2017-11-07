//crear variables para comentario, boton
var texto = document.getElementById("text");
var botton = document.getElementById ("boton");


function add(){
  var nuevoTexto = text.value; //rescatando el valor
  document.getElementById("text").value=""; // borrar comentario después de hacer click
//crear nuevos elementos
  var nContenedor = document.createElement("div");
  var nCaja= document.getElementById("newList");
  var parrafo = document.createElement("p");
  var nodoText = document.createTextNode(nuevoTexto);
  //agregar elementos ya creados
  parrafo.appendChild(nodoText);
  nContenedor.appendChild(parrafo);
  nCaja.appendChild(nContenedor);
