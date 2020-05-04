function criarCampo() {
	var campo = document.querySelector("#campo");
	limparConteudoHtml(campo);
	resetarMatriz(matrizPossibilidades, 0);
	maiorPossibilidade = 0;
	calcularPossibilidades();
	campo.append(adicionarTabuleiro());
}