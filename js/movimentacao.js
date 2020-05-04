function moverCima(posicaoAtual) {
	var mover = {
		linha: (posicaoAtual.linha - 1),
		coluna: (posicaoAtual.coluna)
	};
	return mover;
}

function moverDireita(posicaoAtual) {
	var mover = {
		linha: posicaoAtual.linha,
		coluna: (posicaoAtual.coluna + 1)
	};
	return mover;
}

function moverBaixo(posicaoAtual) {
	var mover = {
		linha: (posicaoAtual.linha + 1),
		coluna: (posicaoAtual.coluna)
	};
	return mover;
}

function moverEsquerda(posicaoAtual) {
	var mover = {
		linha: posicaoAtual.linha,
		coluna: (posicaoAtual.coluna - 1)
	};
	return mover;
}
