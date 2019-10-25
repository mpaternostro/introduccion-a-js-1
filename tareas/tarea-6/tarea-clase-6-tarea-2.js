/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual
de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario
anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let numeroIntegrante = 4;
let primerCalculo = false;

function calcular() {
    const informacion = document.querySelector("#informacion-ingresada");
    let arraySalarios = nuevoArraySalarios();
    informacion.textContent = `El mayor salario anual es $ ${mayorSalarioAnual(arraySalarios)}.\nEl menor salario anual es $ ${menorSalarioAnual(arraySalarios)}.\nEl salario anual promedio es $ ${salarioAnualPromedio(arraySalarios)}.\nEl salario mensual promedio es $ ${salarioMensualPromedio(salarioAnualPromedio(arraySalarios))}.`;
    document.querySelector("#ultimo-paso").style.display = "block";
}

document.querySelector("#boton-agregar-integrante").onclick = function () {
    const labelNuevoIntegrante = document.createElement("label");
    labelNuevoIntegrante.setAttribute("for", `integrante-${numeroIntegrante}`);
    labelNuevoIntegrante.textContent = `${numeroIntegrante}. `;
    const nuevoIntegrante = document.createElement("input");
    nuevoIntegrante.setAttribute("id", `integrante-${numeroIntegrante}`);
    nuevoIntegrante.setAttribute("type", "number");
    const integrantes = document.querySelector("#integrantes");
    integrantes.appendChild(labelNuevoIntegrante).appendChild(nuevoIntegrante);
    labelNuevoIntegrante.appendChild(document.createElement("br"));
    numeroIntegrante++;
}

document.querySelector("#boton-quitar-integrante").onclick = function () {
    const integrantes = document.querySelector("#integrantes");
    const ultimoLabel = integrantes.lastElementChild;
    integrantes.removeChild(ultimoLabel);
    numeroIntegrante--;
    if (primerCalculo === true) {
        calcular();
    }
}

document.querySelector("#calcular").onclick = function () {
    calcular();
    primerCalculo = true;
}

function nuevoArraySalarios() {
    let arraySalarios = [];
    let cantidadIntegrantes = document.querySelectorAll("input").length;
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        (document.querySelector(`#integrante-${i}`).value > 0 ? arraySalarios.push(Number(document.querySelector(`#integrante-${i}`).value)) : false);
    }
    return arraySalarios;
}

function mayorSalarioAnual(arraySalarios) {
    let salarioMasAlto = arraySalarios[0];
    for (let i = 1; i < arraySalarios.length; i++) {
        (salarioMasAlto < arraySalarios[i] ? salarioMasAlto = arraySalarios[i] : false);
    }
    return salarioMasAlto;
}

function menorSalarioAnual(arraySalarios) {
    let salarioMasBajo = arraySalarios[0];
    for (let i = 1; i < arraySalarios.length; i++) {
        (salarioMasBajo > arraySalarios[i] ? salarioMasBajo = arraySalarios[i] : false);
    }
    return salarioMasBajo;
}

function salarioAnualPromedio(arraySalarios) {
    let sumaSalarios = arraySalarios[0];
    for (let i = 1; i < arraySalarios.length; i++) {
        sumaSalarios += arraySalarios[i];
    }
    return Math.floor(sumaSalarios / arraySalarios.length);
}

function salarioMensualPromedio(salarioAnualPromedio) {
    return Math.floor(salarioAnualPromedio / 12);
}
