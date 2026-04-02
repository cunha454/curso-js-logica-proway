function exemploMensagem(){
    alert("Hello World minha primeira, mensagem, Gustavo")
}

function exemploString(){
    // Criando a variável
    let nome = "Elias";
    let sobrenome = "Otto com dois T";

    // Alterar o valor da variável sobrenome
    sobrenome = "Otto";

    // Apresentando a variável
    alert(nome)
    alert(sobrenome)
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    //Concatenção: juntar um string(texto) com alguma outra coisa

    // "Sabão em pó" + " " => "Sabão em pó "
    // "Sabão em pó " + Omo => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    // "\n" serve para quebrar a linha
    alert(
        "Produto " + produto +
        "\nQuantidade de RAM por PCs: " + quantidadePcs +
        "\nMemória RAM por PC: " + quantidadeMemoriaPorPc + "GB" +
        "\nTotal de GB dos PCs: " + totalGb + "GB");
    }
//Tipos de variáveis
//String -> texto, posso colocar número dentro porém não serve para calcular
//int -> números inteiros -> 2
//float -> números reias -> 2.30
//boolean -> lógico -> true or false -> verdadeiro ou falso

function exemploFloat(){
    let endereco = "Rua XV de Novembro"; //String
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("m² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    //Quando entra na empresa
    let tenhoFeriasVencidas = false;

    //Completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias Vencidas? " + tenhoFeriasVencidas);
}

function calcularSalario(){
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; //por hora de streming
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    //Calcular o salário bruto
    let salarioBruto = valorHora * horasPorMes

    //Calcular o Salário líquido
    let salarioLiquido = salarioBruto + beneficioDonate;

    alert(
        "Colaborador: " + colaborador +
        "\nEmail " + email +
        "\nValor por hora: R$ " + valorHora.toFixed(2) +
        "\nHoras por mês: " + horasPorMes + "h" +
        "\nSalário Bruto: " + salarioBruto.toFixed(2) +
        "\nBenefício Donate: R$" + beneficioDonate.toFixed(2) +
        "\nSalário líquido: R$ " + salarioLiquido.toFixed(2)
    )
}

function calcularTempoMes(){
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

    alert(
        "Segundos por minuto: " + segundosPorMinuto +
        "\nMinutos por hora: " + minutosPorHora +
        "\nHoras por dia: " + horasPorDia +
        "\nSegundos por dia: " + segundosPorDia
    );
}