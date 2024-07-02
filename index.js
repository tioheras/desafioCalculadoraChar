function calcularSaldoRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10)
        {nivel = "Ferro";}
    else if (vitorias <= 20)
        {nivel = "Bronze";}
    else if (vitorias <= 50)
        {nivel = "Prata";}
    else if (vitorias <= 80)
        {nivel = "Ouro";}
    else if (vitorias <= 90)
        {nivel = "Diamante";}
    else if (vitorias <= 100)
        {nivel = "Lendario";}
    else 
        {nivel = "Imortal";}

    return {saldo, nivel};

}

function exibirResultados(vitorias, derrotas){
    const resultado = calcularSaldoRank(vitorias, derrotas);
    console.log(`O Herói tem saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`)
}

let vitorias = 35;
let derrotas = 15;
exibirResultados(vitorias, derrotas);