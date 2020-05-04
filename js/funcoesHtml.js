function criarTable() {
	return document.createElement("table");
}

function criarTr() {
	return document.createElement("tr");
}

function criarTd() {
	return document.createElement("td");
}

function criarDiv() {
	return document.createElement("div");
}

function criarUl() {
	return document.createElement("ul");
}

function criarLi() {
	return document.createElement("li");
}

function adicionarClasse(elemento, classe) {
	elemento.className += " " + classe;
}

function adicionarConteudoHtml(elemento, conteudo) {
	elemento.innerHTML = conteudo;
}

function limparConteudoHtml(elemento) {
	elemento.innerHTML = "";
}