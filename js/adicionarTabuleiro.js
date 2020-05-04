function adicionarTabuleiro() {
	var table = criarTable();
	adicionarClasse(table, "tabuleiro");
	for(var linha = 0; linha <= tamanhoTabuleiro.linha; linha++) {
		table.append(criarLinha(linha));
	}
	return table;
}

function criarLinha(linha) {
	var tr = criarTr();
	adicionarClasse(tr, "linha");
	for(var coluna = 0; coluna <= tamanhoTabuleiro.coluna; coluna++) {
		tr.append(criarColuna(linha, coluna));
	}
	return tr;
}

function criarColuna(linha, coluna) {
	var td = criarTd();
	adicionarClasse(td, "coluna");
	if(linha == 0 && coluna == 0) {
		adicionarConteudoHtml(td, "*");
		adicionarClasse(td, "sumario");
	}
	if(linha == 0 && coluna > 0) {
		adicionarConteudoHtml(td, transformarNumeroEmLetra(coluna));
		adicionarClasse(td, "sumario");
	} 
	if(linha > 0 && coluna == 0) {
		adicionarConteudoHtml(td, linha);
		adicionarClasse(td, "sumario");
	}
	if(linha != 0 && coluna != 0) {
		if(matrizPossibilidades[linha][coluna] != 0) {
			adicionarConteudoHtml(td, matrizPossibilidades[linha][coluna]);
			td.addEventListener("click", function() {
				atirar(td, linha, coluna);
				criarCampo();
			});
			if(matrizPossibilidades[linha][coluna] == maiorPossibilidade) {
				adicionarClasse(td, "maiorPossibilidade");
			}
		}else {
			atirar(td, linha, coluna);
		}
	}

	return td;
}

function transformarNumeroEmLetra(numero) {
	return String.fromCharCode(numero + 64);
}
