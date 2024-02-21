const letras = ["a", "b", "c", "A", "B", "C"];
const numeros = ["1", "2", "3", "4"];
const simbolos = ["!", "@", "#", "$", "%"];

quantidadeDeLetras = parseInt(
  prompt("Quantidade de letras você quer na sua senha? ")
);
quantidadeDeNumeros = parseInt(
  prompt("Quantidade de números que você quer na sua senha?")
);
quantidadeDeSimbolos = parseInt(
  prompt("Quantidade de simbolos que você quer na sua senha?")
);

senha = [];
for (i = 0; i < quantidadeDeLetras; i++) {
  let randomNumber = Math.floor(Math.random() * letras.length);
  const randomLetra = letras[randomNumber];
  senha.push(randomLetra);
}
for (i = 0; i < quantidadeDeNumeros; i++) {
  let randomNumber = Math.floor(Math.random() * numeros.length);
  const numeroAleotorio = numeros[randomNumber];
  senha.push(numeroAleotorio);
}
for (i = 0; i < quantidadeDeSimbolos; i++) {
  let randomNumber = Math.floor(Math.random() * simbolos.length);
  const simboloAleotorio = simbolos[randomNumber];
  senha.push(simboloAleotorio);
}
console.log(senha);
const shuffledSenha = senha.sort((a, b) => 0.5 - Math.random());
let senhaAtualizada = shuffledSenha.toString();
const senhaFinal = senhaAtualizada.replace(/,/g, "");
console.log(`Senha gerada: ${senhaFinal}`);
