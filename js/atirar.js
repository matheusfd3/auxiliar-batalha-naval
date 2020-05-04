function atirar(td, linha, coluna) {
	adicionarClasse(td, "atirou");
	matrizTabuleiro[linha][coluna] = "x";
}