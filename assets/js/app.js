function trello(){
  var container = document.getElementById("container");
  var btn= document.createElement("button");
  var input= document.createElement("input");
  var nodoText= document.createTextNode("Guardar");

  // atributos
  input.setAttribute("id", "valor");
  // nodos
  btn.appendChild(nodoText);
  container.appendChild(btn);
  container.appendChild(input);

btn.addEventListener("click", function(){
  var list=document.getElementById("valor").value;
  document.getElementById("valor").value="";
  var contiene=document.getElementById("contiene");
  var parrafo=document.createElement("p");
  var textNuevo= document.createTextNode(list);
  var add=document.createElement("a");
  add.setAttribute("href", "#");
  var textAdd=document.createTextNode("Añadir tarjeta");


  parrafo.appendChild(textNuevo);
  contiene.appendChild(parrafo);
  add.appendChild(textAdd);
  contiene.appendChild(add);

  add.addEventListener("click" , function(){
    var textArea=document.createElement("textArea");
    var add=document.createElement("a");
    add.setAttribute("href", "#");
    var textAdd=document.createTextNode("Añadir tarjeta");
    contiene.appendChild(textArea);
    contiene.appendChild(add);
  })

})
}
