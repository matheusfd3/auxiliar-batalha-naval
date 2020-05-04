function calcularPossibilidades() {
	var instrucoes = pegarInstrucoesBarcos();
	percorrerTabuleiro(instrucoes);
}

function percorrerTabuleiro(instrucoes) {
	var qtdLinha = tamanhoTabuleiro.linha;
	var qtdColuna = tamanhoTabuleiro.coluna;
	for(var linha = 1; linha <= qtdLinha; linha++) {
		for(var coluna = 1; coluna <= qtdColuna; coluna++) {
			if (!temObstaculo({linha:linha,coluna:coluna})) {
				seguirInstrucoes(linha, coluna, instrucoes);
			}
		}
	}
}

function seguirInstrucoes(linha, coluna, instrucoes) {
	for(var i = 0; i < instrucoes.length; i++) {
		for(var j = 0; j < instrucoes[i].length; j++) {
			var posicaoAtual = {
				linha: linha,
				coluna: coluna
			};
			var guardaPosicao = {
				linha: null,
				coluna: null
			};
			for(var k = 0; k < instrucoes[i][j].length; k++) {
				switch(instrucoes[i][j][k]) {
					case "cima":
						posicaoAtual = moverCima(posicaoAtual);
						break;
					case "direita":
						posicaoAtual = moverDireita(posicaoAtual);
						break;
					case "baixo":
						posicaoAtual = moverBaixo(posicaoAtual);
						break;
					case "esquerda":
						posicaoAtual = moverEsquerda(posicaoAtual);
						break;
					case "guardaPosicao":
						guardaPosicao = posicaoAtual;
						break;
					case "voltaPosicao":
						posicaoAtual = guardaPosicao;
						break;
				}

				if(temObstaculo(posicaoAtual)) {
					break;
				}else if(k == (instrucoes[i][j].length-1)) {
					matrizPossibilidades[linha][coluna]++;
					if(matrizPossibilidades[linha][coluna] > maiorPossibilidade) {
						maiorPossibilidade = matrizPossibilidades[linha][coluna];
					}
				}
			}
		}
	}
}

function temObstaculo(posicaoAtual) {
	var linha = posicaoAtual.linha;
	var coluna = posicaoAtual.coluna;
	if(linha < 1 || coluna < 1 || linha > tamanhoTabuleiro.linha || coluna > tamanhoTabuleiro.coluna) {
		return true;
	} else if(matrizTabuleiro[linha][coluna] == "x") {
		return true;
	}
	return false;
}
