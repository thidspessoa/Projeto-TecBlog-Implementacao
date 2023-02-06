//alert("Digite suas preferencias")

// POSTAGENS ENQUANTO OBJETOS

const postagensTecnologia = [
    {
        id: 1,
        categoria: "Tecnologia",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"30/12/2019",
        imagem: 
            '../assets/imagem3.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    },
    {
        id: 2,
        categoria: "Tecnologia",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"30/12/2019",
        imagem: 
            '../assets/imagem2.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    },
    {
        id: 3,
        categoria: "Tecnologia",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"02/02/2019",
        imagem: 
            '../assets/imagem1.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    },
    {
        id: 5,
        categoria: "Tecnologia",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"02/02/2019",
        imagem: 
            '../assets/imagem1.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
]

const postagensCelular = [
    {
        id: 4,
        categoria: "Celular",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"30/12/2019",
        imagem: 
            '../assets/imagem3.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    }, //Indice 0
    {
        id: 20,
        categoria: "Celular",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"30/12/2019",
        imagem: 
            '../assets/imagem2.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    }, //Indice 1
    {
        id: 13,
        categoria: "Celular",
        titulo: "Lorem Ipsum is simply dummy text.",
        dataPostagem:"02/02/2019",
        imagem: 
            '../assets/imagem1.jpg',
        previa: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    } //Indice 2
]


const teste = [10, 20, 'Jujuba']

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
