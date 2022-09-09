const num = Number(prompt("Digite um número:"))//seu numero aqui

//ifs aninhados
if (num % 2 != 0){
    if (num % 3 != 0){
        console.log("Não é divisível por 2 nem por 3");
    } else {
        console.log("É divisível por 2 ou por 3");
    }
} else {
    console.log("É divisível por 2 ou por 3");
}

//operadores logicos
if ((num % 2 == 0) || (num % 3 == 0)){
    console.log("É divisível por 2 ou por 3");
} else {
    console.log("Não é divisível por 2 nem por 3");
}

