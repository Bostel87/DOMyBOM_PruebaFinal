

//Creacion del JSON vacio
var EstudianteJSON = [];

//Creacion de funcion para registrar alumno y agregar a la tabla1
function clear(){
  document.getElementById("txtCod").value = "";
  document.getElementById("txtNom").value = "";
  document.getElementById("txtApe").value = "";
  document.getElementById("txtMate").value = "";
  document.getElementById("txtNota").value = "";

}
// funcion para registrar estudiante con EventListener
function registrarEstudiante(){
  document.getElementById("registrar").addEventListener("click", guardarEstudiante());
}

function guardarEstudiante(){
  var Estudiante = new Object();
  Estudiante.codigo = document.getElementById("txtCod").value;
  Estudiante.nombre = document.getElementById("txtNom").value;
  Estudiante.apellido = document.getElementById("txtApe").value;
  Estudiante.materia = document.getElementById("txtMate").value;
  Estudiante.nota = parseInt(document.getElementById("txtNota").value);
//Metodo push que sirve pra agregar a los estuantes al JSON
  EstudianteJSON.push(Estudiante);
//Agregar Objetos estudiantes al table
  var tabla = document.getElementById("tabla1");{
  var row = tabla.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
// Asignacion de los valores a las celdas
  cell1.innerHTML = Estudiante.codigo;
  cell2.innerHTML = Estudiante.nombre;
  cell3.innerHTML = Estudiante.apellido;
  cell4.innerHTML = Estudiante.materia;
  cell5.innerHTML = Estudiante.nota;
}
// funcion para boorar los inputs del formulario
clear();
}
// funcion para mostrar el promedio con event listener
function mostrarPromedio(){
  document.getElementById("mostrarP").addEventListener("click", calcularPromedio(EstudianteJSON));

}
// funcion para calcular el promedio general del JSON
function calcularPromedio(json) {

var acumulador = 0.0;
for (i = 0; i < json.length; i++) {
acumulador += json[i].nota;
}

var promedio = acumulador / json.length;


alert("La nota promedio es: " + promedio);


}
// funcion para recorrer y verificar la nota mayor del JSON
function leerNotaMayor(json){
  var nota1 = 0.0;
  var nota2 = 0.0;
  for (var i = 0; i < json.length; i++) {
    nota2 = json[i].nota;
    if (nota2 > nota1) {
      nota1 = nota2;
    }
  }
  alert("La nota Mayor es: "+ nota1);

}
// Funcion pra mostrar el mayor con EventListener
function mostrarMayor(){
  document.getElementById("mostrarNM").addEventListener("click", leerNotaMayor(EstudianteJSON));
}
// funcion para recorrer y verificar la nota menor del JSON
function leerNotaMenor(json){
  var nota1 = 0.0;
  var nota2 = 0.0;
  for (var i = 0; i < json.length; i++) {
    nota1 = json[i].nota;

    nota2 = json[i++].nota;

    if (nota2 < nota1) {
      nota2 = nota1;
    }
  }
  alert("La nota Menor es: "+ nota2);

}
// Funcion pra mostrar el menor con EventListener
function mostrarMenor(){
  document.getElementById('mostratNm').addEventListener("click",leerNotaMenor(EstudianteJSON));
}
