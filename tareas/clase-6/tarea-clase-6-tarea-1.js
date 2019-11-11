/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#siguiente-paso").onclick = function () {
    const $numeroIntegrantes = document.querySelector("#miembros-grupo-familiar");
    const cantidadIntegrantes = Number($numeroIntegrantes.value);
    limpiarErrores();
    if (validarVacio($numeroIntegrantes.value) === "") {
        if (validarCantidadIntegrantes(cantidadIntegrantes) !== "") {
            marcarComoError($numeroIntegrantes);
            mostrarErrorIntegrante(cantidadIntegrantes);
            return;
        }
    } else {
        marcarComoError($numeroIntegrantes);
        mostrarErrorVacio($numeroIntegrantes.value);
        return;
    }
    ocultar(document.querySelector("p1"));
    const p2 = document.querySelector("p2");
    const texto = document.querySelector("#texto-2");
    p2.style.display = "block";
    for (let i = 0; i < cantidadIntegrantes; i++) {
        texto.appendChild(document.createElement("br"));
        const labelNuevoIntegrante = document.createElement("label");
        labelNuevoIntegrante.textContent = `${i + 1}. `;
        labelNuevoIntegrante.setAttribute("for", `integrante-${i + 1}`);
        const edadNuevoIntegrante = document.createElement("input");
        edadNuevoIntegrante.setAttribute("id", `integrante-${i + 1}`);
        edadNuevoIntegrante.setAttribute("type", "number");
        texto.appendChild(labelNuevoIntegrante);
        labelNuevoIntegrante.appendChild(edadNuevoIntegrante);
    }

    document.querySelector("#calcular").onclick = function () {
        limpiarErrores();
        const edadIntegrantes = [];
        const $mostrarDatos = document.querySelector("#mostrar-datos");
        $mostrarDatos.style.display = "none";
        for (let i = 1; i <= cantidadIntegrantes; i++) {
            let $integrante = document.querySelector(`#integrante-${i}`);
            let edad = Number($integrante.value);
            $integrante.className = $integrante.className.replace(/\berror\b/g, "");
            edadIntegrantes.push(edad);
            if (validarVacio($integrante.value) === "") {
                if (validarEdadIntegrantes(edadIntegrantes[i - 1]) != "") {
                    marcarComoError($integrante);
                    mostrarErroresEdades(edad);
                }
            } else {
                marcarComoError($integrante);
                mostrarErrorVacio($integrante.value);
            }
        }
        const $errores = document.querySelector("#errores").textContent;
        if ($errores === "") {
            $mostrarDatos.textContent = `El integrante de mayor edad tiene ${calcularMayorEdad(edadIntegrantes)} años. El de menor edad tiene ${calcularMenorEdad(edadIntegrantes)} años. La edad promedio de los integrantes es aproximadamente ${calcularPromedioEdades(edadIntegrantes)} años.`;
            $mostrarDatos.style.display = "block";
        } else {
            return;
        }
    }
    document.querySelector("#empezar-de-nuevo").onclick = function () {
       window.location.href = "index-clase-6-tarea-1.html";
    }
}

function ocultar(valor) {
    valor.style.display = "none";
}

function marcarComoError(campo) {
    campo.className = "error";
}

function mostrarErrorIntegrante(valor) {
    const errores = document.querySelector("#errores");
    const li = document.createElement("li");
    li.textContent = validarCantidadIntegrantes(valor);
    errores.appendChild(li);
}

function mostrarErroresEdades(valor) {
    const errores = document.querySelector("#errores");
    const li = document.createElement("li");
    li.textContent = validarEdadIntegrantes(valor);
    errores.appendChild(li);
}

function mostrarErrorVacio(valor) {
    const errores = document.querySelector("#errores");
    const li = document.createElement("li");
    li.textContent = validarVacio(valor);
    errores.appendChild(li);
}

function limpiarErrores() {
    const errores = document.querySelector("#errores");
    errores.textContent = "";
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
    if (Number.isInteger(cantidadIntegrantes)) {
        if (Number(cantidadIntegrantes) < 2) {
            return "La cantidad de integrantes ingresada debe ser mayor a 1";
        }
        if (Number(cantidadIntegrantes) > 100) {
            return "La cantidad de integrantes ingresada superó el máximo establecido";
        }
    } else {
        return "La cantidad de integrantes ingresada es incorrecta. Debe ser un número entero.";
    }
    return "";
}

function validarEdadIntegrantes(edadIntegrantes) {
    if (Number.isInteger(edadIntegrantes)) {
        if (Number(edadIntegrantes) < 0) {
            return "La edad del integrante ingresada debe ser mayor o igual a 0";
        }
        if (Number(edadIntegrantes) > 120) {
            return "La edad del integrante ingresada superó el máximo establecido";
        }
    } else {
        return "La edad del integrante ingresada es incorrecta. Debe ser un número entero."
    }
    return "";
}

function validarVacio(input) {
    if (input === "") {
        return "Es necesario completar este campo";
    }
    return "";
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
