const imagemVisuakizacao = document.getElementById('imagem-visualizacao')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const AzulIverno = {
    nome: 'Azul-inverno',
    pasta:'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, AzulIverno, meiaNoite, estelar, rosaClaro]

//Valor particular da lista é [3] 4° elemento pq começa do 0
//meiaNoite.pasta = acessar o alor de um campo particular no ojbeto é . e o nome do campo

let imagemSelecionada = 1;

function trocarImagem(){
    const IdOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = IdOpcaoSelecionada.charAt(0);
    imagemSelecionada.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-1.jpeg";
}