function add(){
  var texto = document.getElementById("comentario");  
  var nuevoTexto = texto.value; //rescatando el valor
  document.getElementById("comentario").value=""; // borrar comentario después de hacer click
//crear nuevos elementos
  var nContenedor = document.createElement("div");
  var nCaja= document.getElementById("caja2");
  var parrafo = document.createElement("p");
  var nodoText = document.createTextNode(nuevoTexto);
  //agregar elementos ya creados
  parrafo.appendChild(nodoText);
  nContenedor.appendChild(parrafo);
  nCaja.appendChild(nContenedor);
}
