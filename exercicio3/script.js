//código a ser reescrito
const nome = prompt("Qual o seu nome?");
const idade = Number(prompt("Qual a sua idade?"));

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+ nome);

console.log((idade >= 18 ? "" : "Ainda não ") + "pode tirar carteira de motorista");