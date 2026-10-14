//Exercício 1 - Apresentação 
/*Crie variáveis para seu nome, idade e cidade. 
Exiba uma frase completa no console*/

const nome = "Beatriz";
const idade = 24;
const cidade = "Três Lagoas";

console.log(nome, idade, cidade)
console.log("Uma frase completa no console");

//Exercício 2 - Planejamento de estudos 
/*Crie variáveis para horas estudads por dia e dias
de estudo na semana. Calcule o total semanal*/

const qtdDiasDeEstudo = 7;
const horasEstudoDiaria = 2;

const totalSemanal = qtdDiasDeEstudo * horasEstudoDiaria;

console.log("Total de horas de estudo por semana: ", totalSemanal, "horas")

//Exercício 3 - Tipos de dados 
/*Crie uma variável string, uma number e uma boolean. 
Exiba o valor e seu tipo usando typeof.*/

const nome2 = "Amanda"; //variavel string
const CEP = 79645320; // number
const cadastroAtivo = true; // boolean

typeof nome2;
typeof CEP;
typeof cadastroAtivo;

console.log("Nome: ", nome, "Tipo: ", typeof nome2)

//Exercício 4 - Template literals 
/*Monte uma frase usando crases e 
a sintaxe ${variavel}, sem concatenar textos com +.*/

const texto = "Mundo"
console.log(`Ele disse: "Olá, ${texto}"`);

// INSERINDO VARIÁVIES (INTERPOLAÇÃO)
let teste = "testando";
// Com aspas duplas (mais trabalhoso)
console.log("Olá," + teste + "!Seja bem-vinda.")

// Com crase (Muito mais limpo)
console.log(`Olá, ${teste}! Seja bem-vinda`);


// STRINGS COM MÚLTIPLAS LINHAS

// Com Aspas Duplas
console.log("Primeira linha\nSegunda linha\nTerceira linha");

// Com Crase
console.log(`Primeira linha
Segunda linha
Terceira linha`);

//EXECUTANDO OPERAÇÕES DIRETO NO TEXTO

let preco = 10;
console.log (`O total com taxa é R$ ${preco * 1.1}`);

