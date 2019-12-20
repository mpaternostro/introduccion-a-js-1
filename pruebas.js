function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(1) === "La cantidad de integrantes ingresada debe ser mayor a 1",
        "Validar cantidad integrantes no pudo validar que la cantidad de integrantes sea mayor a 1"
    );
    console.assert(
        validarCantidadIntegrantes(110) === "La cantidad de integrantes ingresada superó el máximo establecido",
        "Validar cantidad integrantes no pudo validar que la cantidad de integrantes sea menor al máximo establecido"
    );
    console.assert(
        validarCantidadIntegrantes(3.5) === "La cantidad de integrantes ingresada es incorrecta. Debe ser un número entero.",
        "Validar cantidad integrantes no pudo validar si el número tiene decimales"
    );
    console.assert(
        validarCantidadIntegrantes(5) === "",
        "Validar cantidad integrantes no pudo validar que se haya ingresado un valor correcto"
    );
}

function probarValidarEdadIntegrantes(){
    console.assert(
        validarEdadIntegrantes(-3) === "La edad del integrante ingresada debe ser mayor o igual a 0",
        "Validar edad integrantes no pudo validar que la edad del integrante sea mayor o igual a 0"
    );
    console.assert(
        validarEdadIntegrantes(180) === "La edad del integrante ingresada superó el máximo establecido",
        "Validar edad integrantes no pudo validar que la edad del integrantes sea menor al máximo establecido"
    );
    console.assert(
        validarEdadIntegrantes(1.3) === "La edad del integrante ingresada es incorrecta. Debe ser un número entero.",
        "Validar edad integrantes no pudo validar si el número tiene decimales"
    );
    console.assert(
        validarEdadIntegrantes(19) === "",
        "Validar edad integrantes no pudo validar que se haya ingresado un valor correcto"
    );
}

function probarValidarVacio(){
    console.assert(
        validarVacio("") === "Es necesario completar este campo",
        "Validar vacío no pudo validar que el campo se encuentre vacío"
    );
    console.assert(
        validarVacio("13") === "",
        "Validar vacio no pudo validar si se ingreso algún valor en el campo cantidad de integrantes"
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdadIntegrantes();
probarValidarVacio();
