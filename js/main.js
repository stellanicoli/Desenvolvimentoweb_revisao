/*
 Nome: Stella Assunçao
   RA: 318210117
*/

// QUESTÃO 1
function atualizaNome() {
	document.querySelector("title").innerHTML = "Stella Assunçao";
	document.querySelector("h1").innerHTML = "Stella Assunçao";
	document.querySelector("h1").style.color = "#A01D26";
}

// QUESTÃO 3
function calculo() {
	var numero = parseInt(document.getElementById('valor-numerico').value);
	var total = numero * numero;
	document.querySelector("#resultado").value = total;
}