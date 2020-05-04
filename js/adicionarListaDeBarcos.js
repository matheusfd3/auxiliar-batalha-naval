function adicionarListaDeBarcos() {
	var ul = criarUl();
	adicionarClasse(ul, "barcos");
	var qtdBarcos = Object.keys(barcos).length;
	for(var barco = 0; barco < qtdBarcos; barco++){
		ul.append(barcoLi(barco));
	}
	return ul;
}

function barcoLi(barco) {
	var barcoAtual = Object.keys(barcos)[barco];
	var li = criarLi();
	adicionarClasse(li, "barco");
	adicionarClasse(li, barcoAtual);
	li.addEventListener("click", function() {
		afundarBarco(barcoAtual);
		adicionarClasse(li, "invisivel");
		criarCampo();
	});
	return li;
}
