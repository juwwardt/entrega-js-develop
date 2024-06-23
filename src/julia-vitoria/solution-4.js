function calcularRaizes(A, B, C){
    let delta = B * B - 4 * A * C;
    
    if((A == 0) || (delta < 0)){
        return "Impossivel calcular";
    }
    else{
        let sqrtDelta = Math.sqrt(delta);

        let R1 = (-B + sqrtDelta) / (2 * A);
        let R2 = (-B - sqrtDelta) / (2 * A);
    
        return [parseFloat(R1.toFixed(5)), parseFloat(R2.toFixed(5))];
    }
}

module.exports = calcularRaizes;