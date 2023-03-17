/*  =======================================================================================
                        ARMAZENAR EM ARRAYS AS CAIXAS DE SELEÇÃO DE GENERO
    ======================================================================================*/

    const selectBox = [
        {
            id: 1,
            categoria: "Acessibilidades",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 2,
            categoria: "Tecnologia",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 3,
            categoria: "Celulares",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 4,
            categoria: "informatica",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 5,
            categoria: "Programação",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 6,
            categoria: "New World",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 7,
            categoria: "Emprego",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 8,
            categoria: "Programas e estudo",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 9,
            categoria: "Artigos cientificos",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        },
        {
            id: 10,
            categoria: "Na sua região",
            selected: false,
            imagem: 
                '../assets/imagem1.jpg',
        }
    ];

    


/*  =======================================================================================
                        RENDERIZAR A CAIXA DE SELEÇÃO E AS BOXES
    ======================================================================================*/



// const teste = [10, 20, 'Jujuba']

/***** CHAMANDO INDICES DA ARRAY *******/

// objeto[indice que quero chamar]. propiedade do objeto correspondente ao indice que chamei
postagensCelular[1].categoria
/*Aqui estou entrando na array referente, no indice 1 desta array e chamando o elemento categoria
dentro do objeto do indice 1*/

// objeto[(objeto.lenght = 4)indice total dividido por 2 = indice 2]
postagensTecnologia[postagensTecnologia.length /2]
/*neste metodo podemos achar o objeto do meio de uma array;*/
//ou
//postagensTecnologia[(oostagensTecnologia.lenght -1)/2]

//objeto [(objeto.lenght = 3)indice total dividido por]
postagensCelular[postagensCelular.length - 1].categoria


/** Descobrir o indice de uma array com metodos**/

//Metodo indexOf
/*var index = postagensCelular.indexOf(2)

if (index > -1) {
    console.log('Indice encontrado!')
} else{
    console.log('Algo deu errado :[')
}*/

//Metodo findIndex ==> Uma arrow function
/*var index = postagensCelular.findIndex((postagensCelular) =>{
    return postagensCelular === 'Celular'
    //Se o indice dentro do objeto for igual a Celular, então irá retornar o indice deste elemento
} )
console.log(index) //Caso nenhum elemento de acordo coma função de teste for encontrado dentro do objeto, irá retornar -1*/

let index = postagensCelular.findIndex((postagensCelular) )



function teste () {
    const tipo = document.getElementById('tema').value;
    console.log(tipo)

    var testao = [];
    testao.push(tipo);
    console.log(testao);
}




