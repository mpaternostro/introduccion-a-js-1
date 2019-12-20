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
