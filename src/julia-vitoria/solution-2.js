function qtdTruthy(lista){
    let count = 0;

    lista.forEach((element) => {
        if(element){
            count++;
        }
    });

    return count;
}

module.exports = qtdTruthy;