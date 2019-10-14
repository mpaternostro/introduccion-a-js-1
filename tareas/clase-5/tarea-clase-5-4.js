/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

/* let i = 4;
document.querySelector("#boton-nuevo-campo").onclick = function () {
  const $li = document.createElement("li");
  const $numero = document.createElement("input")
  $numero.setAttribute("id", `numero-${i}`);
  $numero.setAttribute("type", "number");
  $numero.setAttribute("placeholder", "Ingrese un número");
  //console.log($numero);
  //console.log(document.querySelector("ol"));
  document.querySelector("ol").appendChild($li).appendChild($numero);
}
*/

document.querySelector("#realizar-calculos").onclick = function () {
  const numerosCargados = document.querySelectorAll("li");

  const arrayNumerosCargados = [];
  for(let i = 0; i < numerosCargados.length; i++){
    arrayNumerosCargados.push(Number(numerosCargados[i].innerText))
  }

  const $promedio = calcularPromedio(arrayNumerosCargados).toFixed(2);
  let $numeroMasPequenio = arrayNumerosCargados[0];
  let $numeroMasGrande = arrayNumerosCargados[0];
  let $numeroMasRepetido = calcularNumeroMasRepetido(arrayNumerosCargados);
  for (let i = 0; i < arrayNumerosCargados.length; i++) {
    if ($numeroMasPequenio > arrayNumerosCargados[i]) {
      $numeroMasPequenio = arrayNumerosCargados[i];
    }
    if ($numeroMasGrande < arrayNumerosCargados[i]) {
      $numeroMasGrande = arrayNumerosCargados[i];
    }
  }
  document.querySelector("#promedio").textContent = `El promedio es ${$promedio}`;
  document.querySelector("#numero-mas-pequenio").textContent = `El número mas pequeño es ${$numeroMasPequenio}`;
  document.querySelector("#numero-mas-grande").textContent = `El número mas grande es ${$numeroMasGrande}`;
  document.querySelector("#numero-mas-repetido").textContent = `El número mas repetido es ${$numeroMasRepetido}`;
}

function calcularPromedio(arrayDeNumeros){
  let sumaTotalNumeros = 0;
  for(let i = 0; i < arrayDeNumeros.length; i++){
    sumaTotalNumeros += Number(arrayDeNumeros[i]);
  }
  return sumaTotalNumeros / arrayDeNumeros.length;
}

function calcularNumeroMasRepetido(arrayDeNumeros) {
  let numeroMasRepetido = 0; // El numero X es el mas repetido
  let numeroMasRepetidoTantasVeces = 0; // El numero X se repitió tantas veces
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    let k = 0;
    for (let j = 0; j < arrayDeNumeros.length; j++) {
      if (arrayDeNumeros[j] === arrayDeNumeros[i]) {
        k++;
        if (numeroMasRepetidoTantasVeces < k) {
          numeroMasRepetido = arrayDeNumeros[j];
          numeroMasRepetidoTantasVeces = k;
        }
      }
    }
  }
  return numeroMasRepetido;
}
