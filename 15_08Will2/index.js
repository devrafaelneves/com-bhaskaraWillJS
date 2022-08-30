//para mudar a cor do background quando aperta o botão 
// var btn = document.querySelector('#btn1');

// function random(number) {
//   return Math.floor(Math.random()*(number+1));
// }

// btn.onclick = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }


// Fazer o cálculos no js

//calculo de bhaskara
function calcularDelta(a,b,c){
    let delta = b**2 - (4 * a * c);        //invés de colocar b*b, coloca **2 para equação
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



//Essa function é do cálculo da média
function calculoMedia (a, b, c){
    let resultado1 = (a + b + c)/3;
    return resultado1;
}
//Essa função é de calcular o exame, servem pra não precisar mais interferir no CODE várias vezes, só mudar
// a lógica da mesma.
function calcularExame (media){
    let resultado2 = 10 - media
    return resultado2;
}
//validos GERALMENTE 33 44 55 66
function calcularCPF(cpf){


}
// tentando fazer um calculo de validação de cpf
// OBTER OS 9 PRIMEIROS DIGITOS 
// CALCULAR O PRIMEIRO DIGITO 
// -- VARRER POSIÇOES DO STRING 
// --MULTIPLICAR USANDO A RAZAO (10-i)
// --SOMAR TUDO
// --OBTER O RESTO
// --11 - O RESTO = PRIMEIRO DIGITO
// CALCULAR O SEGUNDO DIGITO
// --CONCATENAR O PRIMEIRO DIGITO COM OS 9 PRIMEIROS
// --VARRER  AS POSICOES DO STRING
// --MULTIPLICAR USANDO A RAZAO (11-i)
// --SOMAR TUDO 
// obtem o resto 
// 11-resto = segundo DIGITO
// SE 11 - RESTO > 9, USASSE O O(ZERO)
$('#btnresultado').click(
         function(){

            let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let cpf1 = "019788771"
            let total = 269;
            let resto = 269 % 11;

            console.log(11 - resto);
             
                for (i=0;i<10;i++){ 
                console.log(
                    notas[i]
            );
        }

                for (i=0;i<nome.length;i++){ 
                console.log(
                nome[i]
            );
        }
    }
)






// esse é pra aparecer no console o que ue quero desses let
// $('#btnresultado').click(
//     function(){

//        let notas = [1, 2, 3, 4, 5, 6, 7];
//        let nome = "RAFAEl"
        
//            for (i=0;i<=6;i++){ 
//            console.log(
//                notas[i]
//        );
//    }

//            for (i=0;i<=5;i++){ 
//            console.log(
//            nome[i]
//        );
//    }
// }
// )


            
     












//esse é uma linha de looping padrao, sempre é a mesma estrutura
// $('#btnresultado').click(
//     function(){
//         for (i=0;i<=10;i++){ 
//         console.log(i);
//         }
//     }

// )

















        //PRA NAO PERDER, ESSE É O CALCULO PADRAO DE BHASKARA PARA APARECER NO SITE 
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













        
//         calculo =
        
//             {
//                 'a':document.getElementById('btnn1').value,
//                 'b':document.getElementById('btnn2').value,
//                 'c':document.getElementById('btnn3').value
//             };
//         }
// )









            
    //    let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3;
//     let media = calculoMedia(
//         parseInt(calculo.a),
//         parseInt(calculo.b),
//         parseInt(calculo.c)
//     )
//        if (media >= 7){
//            alert("Você foi APROVADO!!");
//        }
//        else {
//         //    alert('Você foi REPROVADO!! Ficou de exame, pra tirar 10 falta '+ (10-media));
//        alert("Você foi REPROVADO!!");
//         //Pra puxar as informações de uma function, tem que "puxar" onde ela foi armazenada, como abaixo:
//        let exame = calcularExame(media)
//         // let exame = 10 - media;
//            alert('Você precisa tirar '+ exame + ' no exame.');
     
//             }
//        }
    
// )


// Pra mostrar o pop-up com as info do cadastro da pessoa
// $('#btn2').click(
//     function(){
//         cadastro = 
//         {
//             'nome':document.getElementById('btnnome').value,
//             'endereço':document.getElementById('btnendereço').value,
//             'email':document.getElementById('btnemail').value
//         }
//         alert('Nome:'+cadastro.nome+'  End:'+cadastro.endereço+'  @'+cadastro.email);
        
//      }
// )





// PRIMEIRO EXEMPLO
// $('#btn2').click(
//     function(){
//         const nome = document.getElementById('btnnome').value;
    
//             alert(nome); 
        
//      }



//SEGUNDO EXEMPLO
//  *$('#btn2').click(
//    function(){
//         alert('O click');
//     }
// )
// ctrl + ; = comentar tudo que tá selecionado
