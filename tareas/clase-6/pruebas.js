function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(0) === "La cantidad de integrantes ingresada debe ser mayor o igual a 1",
        "Validar cantidad integrantes no pudo validar que la cantidad de integrantes sea mayor o igual a 1"
    );
    console.assert(
        validarCantidadIntegrantes(110) === "La cantidad de integrantes ingresada supero el máximo establecido",
        "Validar cantidad integrantes no pudo validar que la cantidad de integrantes sea menor al máximo establecido"
    );
    console.assert(
        validarCantidadIntegrantes(5) === "",
        "Validar cantidad integrantes no pudo validar que se haya ingresado un valor correcto"
    );
}

probarValidarCantidadIntegrantes();