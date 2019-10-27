/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function () {
    const formulario = document.querySelector("form");
    const p2 = document.createElement("p2");
    formulario.appendChild(p2);
    const pedirInfo = document.createTextNode("Ahora te voy a solicitar la edad de los integrantes de tu grupo familiar: ");
    p2.appendChild(pedirInfo);
    p2.appendChild(document.createElement("br"));
    const numeroIntegrantes = Number(document.querySelector("#miembros-grupo-familiar").value);
    let cantidadIntegrantes;
    for (cantidadIntegrantes = 0; cantidadIntegrantes < numeroIntegrantes; cantidadIntegrantes++) {
        const labelNuevoIntegrante = document.createElement("label");
        labelNuevoIntegrante.textContent = `${cantidadIntegrantes + 1}. `;
        labelNuevoIntegrante.setAttribute("for", `integrante-${cantidadIntegrantes + 1}`);
        const edadNuevoIntegrante = document.createElement("input");
        edadNuevoIntegrante.setAttribute("id", `integrante-${cantidadIntegrantes + 1}`);
        edadNuevoIntegrante.setAttribute("type", "number");
        edadNuevoIntegrante.setAttribute("required", "");
        p2.appendChild(labelNuevoIntegrante);
        labelNuevoIntegrante.appendChild(edadNuevoIntegrante);
        p2.appendChild(document.createElement("br"));
    }
    const botonCalcular = document.createElement("button");
    botonCalcular.setAttribute("type", "button");
    botonCalcular.setAttribute("id", "calcular");
    botonCalcular.textContent = "Calcular";
    const botonEmpezarDeNuevo = document.createElement("button");
    botonEmpezarDeNuevo.setAttribute("type", "reset");
    botonEmpezarDeNuevo.setAttribute("id", "empezar-de-nuevo");
    botonEmpezarDeNuevo.textContent = "Empezar de nuevo";
    //p2.appendChild(document.createElement("br"));
    //document.querySelector(`#integrante-${cantidadIntegrantes}`).appendChild(document.createElement("br"));
    p2.appendChild(botonCalcular);
    p2.appendChild(botonEmpezarDeNuevo);
    const edadIntegrantes = [];
    let cuantosClickBotonCalcular = 0;
    document.querySelector("#calcular").onclick = function () {
        const p2 = document.querySelector("p2");
        if (cuantosClickBotonCalcular > 0) {
            p2.removeChild(document.querySelector("textarea"));
        }
        cuantosClickBotonCalcular++;
        for (let i = 0; i < cantidadIntegrantes; i++) {
            edadIntegrantes.push(Number(document.querySelector(`#integrante-${i + 1}`).value));
        }
        const mostrarDatos = document.createElement("textarea");
        //p2.removeChild(mostrarDatos);
        mostrarDatos.setAttribute("type", "text");
        mostrarDatos.setAttribute("id", "mostrar-datos")
        mostrarDatos.textContent = `El integrante de mayor edad tiene ${calcularMayorEdad(edadIntegrantes)} años. El de menor edad tiene ${calcularMenorEdad(edadIntegrantes)} años. La edad promedio de los integrantes es aproximadamente ${calcularPromedioEdades(edadIntegrantes)} años.`;
        if (cuantosClickBotonCalcular === 1 ? p2.appendChild(document.createElement("br")) : false);
        p2.appendChild(mostrarDatos);
    }
    document.querySelector("#empezar-de-nuevo").onclick = function () {
        formulario.removeChild(document.querySelector("p2"));
        document.querySelector("#miembros-grupo-familiar").value = "";
    }
    return false;
}

function calcularMayorEdad(edadIntegrantes) {
    let edadMayorIntegrante = edadIntegrantes[0];
    for (let i = 1; i <= edadIntegrantes.length; i++) {
        if (edadMayorIntegrante < edadIntegrantes[i] ? edadMayorIntegrante = edadIntegrantes[i] : false);
    }
    return edadMayorIntegrante;
}

function calcularMenorEdad(edadIntegrantes) {
    let edadMenorIntegrante = edadIntegrantes[0];
    for (let i = 1; i <= edadIntegrantes.length; i++) {
        if (edadMenorIntegrante > edadIntegrantes[i] ? edadMenorIntegrante = edadIntegrantes[i] : false);
    }
    return edadMenorIntegrante;
}

function calcularPromedioEdades(edadIntegrantes) {
    let sumaEdades = 0;
    for (let i = 0; i < edadIntegrantes.length; i++) {
        sumaEdades += edadIntegrantes[i];
    }
    return Math.floor(sumaEdades / edadIntegrantes.length);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
