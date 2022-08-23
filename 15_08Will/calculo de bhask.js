function calcularDelta(a,b,c){
    let delta = b * b - (4 * a * c);
    return delta;
}

function calcularX1 (a, b, delta){
    let x1 = (-1*b + Math.sqrt(delta))/2*a;
    return x1
}

function calcularX2 (a, b, delta){
    let x2 = (-1*b - Math.sqrt(delta))/2*a;
    return x2
}
