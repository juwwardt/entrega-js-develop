function acharFatorial(N){  
    let fatorial = 1;

    if(N == 0){
        return fatorial = 1;
    }

    for(let i = 1; i <= N; i++ ){
        fatorial *= i;
    }

    return fatorial;
}

module.exports = acharFatorial;