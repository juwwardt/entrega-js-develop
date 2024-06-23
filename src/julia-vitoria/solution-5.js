function ordenarValores(a, b, c){   
    let vetor = [a, b, c];
    let ordenado = [...vetor].sort((x, y) => x - y);

    return ordenado;
}

module.exports = ordenarValores;