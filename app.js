function rodandoPrograma() {
  function quantidadeLetras() {
    let quantidadeDeLetras = parseInt(
      prompt("Quantidade de letras você quer na sua senha? ")
    );
    for (i = 0; i < quantidadeDeLetras; i++) {
      let randomNumber = Math.floor(Math.random() * letras.length);
      const randomLetra = letras[randomNumber];
      senha.push(randomLetra);
    }
  }
  function quantidaNumeros() {
    let quantidadeDeNumeros = parseInt(
      prompt("Quantidade de números que você quer na sua senha?")
    );
    for (i = 0; i < quantidadeDeNumeros; i++) {
      let randomNumber = Math.floor(Math.random() * numeros.length);
      const numeroAleotorio = numeros[randomNumber];
      senha.push(numeroAleotorio);
    }
  }
  function quantidadeSimbolos() {
    let quantidadeDeSimbolos = parseInt(
      prompt("Quantidade de simbolos que você quer na sua senha?")
    );
    for (i = 0; i < quantidadeDeSimbolos; i++) {
      let randomNumber = Math.floor(Math.random() * simbolos.length);
      const simboloAleotorio = simbolos[randomNumber];
      senha.push(simboloAleotorio);
    }
  }
  quantidadeLetras();
  quantidaNumeros();
  quantidadeSimbolos();
}

function randomizandoEMelhorandoSenha(senha) {
  const shuffledSenha = senha.sort((a, b) => 0.5 - Math.random());
  let senhaAtualizada = shuffledSenha.toString();
  const senhaFinal = senhaAtualizada.replace(/,/g, "");
  return senhaFinal;
}

function continuarEncerrarPrograma(inputUsuario) {
  if (inputUsuario == "nova") {
    console.log("Programa reiniciado.");
    senha.splice(0, senha.length);
  } else if (inputUsuario == "sair") {
    console.log("Programa encerrado.");
    programaOn = false;
  } else {
    console.log("Comando não reconhecido, reiniciando programa...");
  }
}

const letras = ["a", "b", "c", "A", "B", "C"];
const numeros = ["1", "2", "3", "4"];
const simbolos = ["!", "@", "#", "$", "%"];

senha = [];
programaOn = true;

while (programaOn == true) {
  rodandoPrograma();
  senhaFinal = randomizandoEMelhorandoSenha(senha);
  console.log(`Senha gerada: ${senhaFinal}`);
  let continuarFinalizar = prompt(
    'Você quer gerar uma nova senha ou encerrar o programa? Gerar: "nova". Encerrar: "sair".'
  );
  continuarEncerrarPrograma(continuarFinalizar);
}
