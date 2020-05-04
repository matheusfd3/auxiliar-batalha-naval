function pegarInstrucoesBarcos() {
	var instrucoes = [];
	if(barcos.barcoDois == true) {
		instrucoes.push(barcoDois());
	}
	if(barcos.barcoTres == true) {
		instrucoes.push(barcoTres());
	}
	if(barcos.barcoTresUm == true) {
		instrucoes.push(barcoTresUm());
	}
	if(barcos.barcoQuatro == true) {
		instrucoes.push(barcoQuatro());
	}
	if(barcos.barcoCinco == true) {
		instrucoes.push(barcoCinco());
	}
	if(barcos.barcoTresTres == true) {
		instrucoes.push(barcoTresTres());
	}
	return instrucoes;
}

function barcoDois() {
	var instrucao = [
		["cima"],
		["direita"],
		["baixo"],
		["esquerda"]
	];
	return instrucao;
}

function barcoTres() {
	var instrucao = [
		["cima", "cima"],
		["direita", "direita"],
		["baixo", "baixo"],
		["esquerda", "esquerda"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda"]
	];
	return instrucao;
}

function barcoTresUm() {
	var instrucao = [
		["cima", "guardaPosicao", "cima", "voltaPosicao", "direita"],
		["cima", "guardaPosicao", "cima", "voltaPosicao", "esquerda"],
		["direita", "guardaPosicao", "direita", "voltaPosicao", "cima"],
		["direita", "guardaPosicao", "direita", "voltaPosicao", "baixo"],
		["baixo", "guardaPosicao", "baixo", "voltaPosicao", "direita"],
		["baixo", "guardaPosicao", "baixo", "voltaPosicao", "esquerda"],
		["esquerda", "guardaPosicao", "esquerda", "voltaPosicao", "cima"],
		["esquerda", "guardaPosicao", "esquerda", "voltaPosicao", "baixo"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "voltaPosicao", "direita"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "voltaPosicao", "esquerda"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "voltaPosicao", "cima"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "voltaPosicao", "baixo"],
		["cima", "guardaPosicao", "direita", "voltaPosicao", "esquerda"],
		["direita", "guardaPosicao", "cima", "voltaPosicao", "baixo"],
		["baixo", "guardaPosicao", "esquerda", "voltaPosicao", "direita"],
		["esquerda", "guardaPosicao", "baixo", "voltaPosicao", "cima"]
	];
	return instrucao;
}

function barcoQuatro() {
	var instrucao = [
		["cima", "cima", "cima"],
		["direita", "direita", "direita"],
		["baixo", "baixo", "baixo"],
		["esquerda", "esquerda", "esquerda"],
		["guardaPosicao", "cima", "cima", "voltaPosicao", "baixo"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "baixo"],
		["guardaPosicao", "direita", "direita", "voltaPosicao", "esquerda"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "esquerda"]
	];
	return instrucao;
}

function barcoCinco() {
	var instrucao = [
		["cima", "cima", "cima", "cima"],
		["direita", "direita", "direita", "direita"],
		["baixo", "baixo", "baixo", "baixo"],
		["esquerda", "esquerda", "esquerda", "esquerda"],
		["guardaPosicao", "cima", "cima", "cima", "voltaPosicao", "baixo"],
		["guardaPosicao", "cima", "cima", "voltaPosicao", "baixo", "baixo"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "baixo", "baixo"],
		["guardaPosicao", "direita", "direita", "direita", "voltaPosicao", "esquerda"],
		["guardaPosicao", "direita", "direita", "voltaPosicao", "esquerda", "esquerda"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "esquerda", "esquerda"]
	];
	return instrucao;
}

function barcoTresTres() {
	var instrucao = [
		["cima", "guardaPosicao", "cima", "voltaPosicao", "esquerda", "cima", "cima"],
		["direita", "guardaPosicao", "direita", "voltaPosicao", "cima", "direita", "direita"],
		["baixo", "guardaPosicao", "baixo", "voltaPosicao", "direita", "baixo", "baixo"],
		["esquerda", "guardaPosicao", "esquerda", "voltaPosicao", "baixo", "esquerda", "esquerda"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "voltaPosicao", "esquerda", "cima", "cima"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "voltaPosicao", "cima", "direita", "direita"],
		["guardaPosicao", "cima", "voltaPosicao", "baixo", "voltaPosicao", "direita", "baixo", "baixo"],
		["guardaPosicao", "direita", "voltaPosicao", "esquerda", "voltaPosicao", "baixo", "esquerda", "esquerda"],
		["cima", "guardaPosicao", "cima", "voltaPosicao", "direita", "baixo", "baixo"],
		["direita", "guardaPosicao", "direita", "voltaPosicao", "baixo", "esquerda", "esquerda"],
		["baixo", "guardaPosicao", "baixo", "voltaPosicao", "esquerda", "cima", "cima"],
		["esquerda", "guardaPosicao", "esquerda", "voltaPosicao", "cima", "direita", "direita"]		
	];
	return instrucao;
}