function acharMaior(lista){   
    let maior = lista.reduce((acumulador, atual) => {
        return acumulador > atual ? acumulador : atual;
    });

    let posicao = lista.findIndex((element) => {
        return element == maior;
    });

    return [maior, posicao];
}

module.exports = acharMaior;