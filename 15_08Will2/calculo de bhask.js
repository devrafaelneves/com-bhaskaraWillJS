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


// $('#btnresultado').click(
//     function(){
//         formula =
//         {
//         'a':parseInt(document.getElementById('btnn1').value),
//         'b':parseInt(document.getElementById('btnn2').value),
//         'c':parseInt(document.getElementById('btnn3').value)
//         }


//         let delta = calcularDelta(formula.a, formula.b, formula.c);
//         alert(delta);


//         let x1 = calcularX1(formula.a, formula.b, delta);
//         alert(x1);


//         let x2 = calcularX2(formula.a, formula.b, delta);
//         alert(x2);

//     } 
    
// )
