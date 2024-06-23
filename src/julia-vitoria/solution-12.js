function separarCPF(cpf){
    let numeros = cpf.split(/[\.-]/);
    
    numeros = numeros.map(Number);
    
    return numeros;
}
  
module.exports = separarCPF;