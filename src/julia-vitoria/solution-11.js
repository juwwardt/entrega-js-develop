function classificarTriangulo(n1, n2, n3){
    if((n1 == n2) && (n1 == n3) && (n2 == n3)){
        return "equilatero";
    }
    else if((n1 != n2) && (n1 != n3) && (n2 != n3)){
        return "escaleno";

    }
    else{
        return "isosceles";
    }
}
  
module.exports = classificarTriangulo;