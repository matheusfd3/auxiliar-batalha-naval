function criarMenu() {
	var menu = document.querySelector("#menu");
	var div = criarDiv();
	div.append(adicionarListaDeBarcos());
	menu.append(div);
}