var tamanhoTabuleiro = {
	linha: 10,
	coluna: 10
};
var barcos = {
	barcoDois: true,
	barcoTres: true,
	barcoTresUm: true,
	barcoQuatro: true,
	barcoCinco: true,
	barcoTresTres: true
};
var matrizTabuleiro;
var matrizPossibilidades;
var maiorPossibilidade;

function iniciarBatalhaNaval() {
	matrizTabuleiro = criarMatriz();
	resetarMatriz(matrizTabuleiro, "~");
	matrizPossibilidades = criarMatriz();
	criarMenu();
	criarCampo();
}

function criarMatriz() {
	var matriz = new Array();
	var qtdLinha = tamanhoTabuleiro.linha;
	var qtdColuna = tamanhoTabuleiro.coluna;
	for(var linha = 0; linha <= qtdLinha; linha++) {
		matriz.push(new Array(qtdColuna));
	}
	return matriz;
}

function resetarMatriz(matriz, valor) {
	var qtdLinha = tamanhoTabuleiro.linha;
	var qtdColuna = tamanhoTabuleiro.coluna;
	for(var linha = 0; linha <= qtdLinha; linha++) {
		for(var coluna = 0; coluna <= qtdColuna; coluna++) {
			matriz[linha][coluna] = valor;
		}
	}
}
