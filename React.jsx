/*
INDICE 

# React
- START
- PRIMEIRO COMPONENTE
- PASSAGENS DE ARGUMENTOS
- MULTIPLOS COMPONENTES
- CLASSES COMPONENTS
- CONTENCAO
- HERDANDO COMPONENTS


*/

/*Obs.: 

Para buscar pesquise por '# nome'.


Os programas contem comentarios sobre o assunto, ele pode ser executado para
melhor entendimento, tente remover os comentários ao copiar e colar o codigo,
pois React usa jsx e não aceita um tipo especifico de formatação.
Além disso, os exemplo podem usar arquivos diferentes (abordando o tema de modulos)*/







/*                                      ########################################################### 
                                        ###########################################################
                                        ############################ START ########################
                                        ###########################################################
                                        ###########################################################*/

/*
React organiza tudo em componentes e não linguagens
não é html nem js é tudo junto ele utiliza jsx que
é a junção dos dois, lembrando que jsx é mais sensivel
e necessita fechar todas as tags
*/

/*
Para iniciar um projeto react é preciso instalar o modulo
*/
npm i -g create-react-app //para instalação global

/*
Após isso, para criar seu projeto, basta digitar:
*/
create-react-app <nome_do_seu_projeto>

/*
Ele vai setar as dependencias, criar os arquivos,
com uma aplicação inicial padrão.
e para iniciar basta entrar pelo terminal na pasta e digitar
*/
npm start





















/*                                      ########################################################### 
                                        ###########################################################
                                        ######################### INTRODUÇÃO ######################
                                        ###########################################################
                                        ###########################################################*/



/*
Após criar seu primeiro app é necessário entender oque o React está fazendo.
Basicamente, dentro do diretório src existe o arquivo index.js,
ele lida com a renderização da pagina, importando seus componentes,
e colocando dentro do html. O html fica na pagina public, que seria
como o "cliente", o html que recebe oque o index.js insere se chama 
index.html. Dificilmente, será preciso mexer na pagina index.html,
todas suas configurações serão externas, organizando em componentes.


Para iniciar o seu projeto, você pode apagar todos os arquivos dentro da pasta
src, pois é onde está um projeto padrão e onde vai ficar o seu.
Depois de apagar, para criar sua primeira aplicação, crie o arquivo index.js,
importe os modulos react (para componentes) e react-dom (para renderizar)
*/
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h2>My Text</h2> //seu primeiro elemento/componente

ReactDOM.render(element, document.getElementById('root'))
//ReactDOM.render recebe o elemento e onde vai ser inserido


/*
O modo mais recomendado até a criação desse tutorial é utilizar o
modulo react-dom/client.
March 29th, 2022. ReactDOM.render has been deprecated 


Basta criar uma constante chamada 'root' criar o root direcionando
ao elemento root do index.html, e dar .render() para renderizar seu elemento
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
const element = <h2>My Text</h2> 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  element
);





















/*                                      ########################################################### 
                                        ###########################################################
                                        ################### PRIMEIRO COMPONENTE ###################
                                        ###########################################################
                                        ###########################################################*/




/*
Crie uma pasta para organizar seus componentes em src do seu projeto
e crie seu arquivo jsx com o nome do seu componente maiusculo
(isso é uma convenção, para que seja mais legivel), dentro
dele exporte sua função para que possa ser acessada por fora.
*/

export default function(){
	return 'texto aleatorio'
}

/*
E dentro do arquivo index.js importe ele colocando seu caminho
relativo

Ao importar o nome após o importe pode ser qualquer um, desde que 
inicie com letra maiuscula
*/

import Meu_componente from './components/Meu_componente' 
/*
para renderizar dentro do root use o componente como uma tag,
lembre de sempre fechar a tag
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Meu_componente/>
);




/*
------------------------------------------
Além de função anônima ele aceita arrow
Nota: Sempre que usar JSX importe o react (import React from 'react')
*/
import React from 'react'
export default () => <h1>Texto aleatorio</h1>
/*
-----index.js-----
*/
import Meu_componente from './components/Meu_componente' 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Meu_componente/>
);




















/*                                      ########################################################### 
                                        ###########################################################
                                        ################# PASSAGENS DE ARGUMENTOS #################
                                        ###########################################################
                                        ###########################################################*/


/*por convenção os parametros/argumentos devem ter nome 'props' 
props nada mais é que um objeto, com todos os argumentos*/

/*
Neste exemplo foi criada uma pasta dentro de src, chamada components
para melhor organização. Além disso, foi criado um componente chamado 
'SomaNumeros' e armazenado a seguinte função.
*/
export default props => <h1>O resultado da soma é {props.num1 + props.num2}!</h1>

/*
Ao importar é recomendado colocar um nome semelhante para identificação do componente
*/

import SomaNum from './components/SomaNumeros'
//numeros ou outros argumentos que não são strings são usados entre chaves

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SomaNum num1={1} num2={3} />
);




/*
---------------------------------------------------------------

Para passar mais de uma tag, use uma div para enlaçar as tags
//ou use a tag <React.Fragment></React.Fragment> (diferente da div ela não gera nada,
sua função é apenas unir as tags)
*/
export default props => 
	<div>
		<h1>O resultado da soma é {props.num1 + props.num2}!</h1>
		<h1>O resultado da multiplicação é {props.num1 * props.num2}!</h1>
	</div>


//Caso não queira escrever <React.Fragment> importe dessa forma:
import React, {Fragment} from 'react'
/*
assim é possível utilizar
*/

<Fragment></Fragment>


/*
Ainda é possível utilizar array, porém é necessario delcarar uma chave
(key), pois sem ela o react perde performance ao procurar os elementos:*/

export default props => 
	[
		<h1 key='tag1'>O resultado da soma é {props.num1 + props.num2}!</h1>,
		<h1 key='tag2'>O resultado da multiplicação é {props.num1 * props.num2}!</h1>
	]

//Nota: O recomendado é Div ou Fragment




























/*                                      ########################################################### 
                                        ###########################################################
                                        ################## MULTIPLOS COMPONENTES ##################
                                        ###########################################################
                                        ###########################################################*/


/*
É possível exportar mais de um componente
além de exportar declarando como const, let
e var
*/


import React from 'react'

export const Soma = props => {
	let result = 0;
	for (let x of props.numeros){
		result += x;
	}
	return <h1>Resultado da soma é {result}!</h1>
}

export const Multiplica = props => {
	let result = 1;
	for (let x of props.numeros){
		result *= x;
	}
	return <h1>Resultado da soma é {result}!</h1>
}

/*
Ao declarar components como var, let ou const,
é necessário utilizar o operador de desestruturação
{MeuComponente1, MeuComponente2}*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Soma, Multiplica} from './components/MultiComponent'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
		<Soma numeros={[1,3,4,9]}/>
		<Multiplica numeros={[1,3,4,3]}/>
	</div>
);


/*
--------------------------------

Ainda é possível exportar como default e tirar a necessidade do
destructor
*/
export const Multiplica = props => {
	let result = 1;
	for (let x of props.numeros){
		result *= x;
	}
	return <h1>Resultado da soma é {result}!</h1>
}

export default Multiplica


/*
------------
Ao importar...*/
import Multiplica, {Soma} from './components/MultiComponent'

/*
Ainda há outra forma de importar, no caso a mais usada,
e organizada, é exportando todos os componetes com default:*/

export default {Multiplica, Soma}

/*Ao importar e utilizar...*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Multi from './components/MultiComponent'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
		<Multi.Soma numeros={[1,3,4,9]}/>
		<Multi.Multiplica numeros={[1,3,4,3]}/>
	</div>
);

/*Nota: Essa forma diminui a chance de haver problema ao usar,
funções e componentes com mesmo nome*/





















/*                                      ########################################################### 
                                        ###########################################################
                                        #################### CLASSES COMPONENTS ###################
                                        ###########################################################
                                        ###########################################################*/

/*
Para esse modulo é necessário importar o modulo Component
*/
import React, {Component} from 'react'


export default class Animal extends Component {
	//para classe primeiramente ele não te acesso ao props
	// para acessa-lo é usado this.props
	render(){ //função responsavel por renderizar o componente
		const {nome, tipo} = this.props;

		return (
			<div>
				<h1>Nome: {nome} <br /> Tipo: {tipo}</h1>
				<hr />
				<input type="text" placeholder="Nome" value={nome}/>
				<input type="text" placeholder="Tipo" value={tipo}/>
			</div>
			)
	}
}
/*
Nota: vale mencionar que não é possível alterar o valor do 
props, exemplo:
this.props.atributo = 'valor' //isso dá erro, pois props serve para leitura
Uma forma de contornar isso está no proximo exemplo...

Importando...*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import ClassComp from './components/ClasseComp'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClassComp nome='Gato' tipo='mamifero'/>
);







/*
 --------------------------------- Mudando valor -----------------------------
*/
import React, {Component} from 'react'


export default class Animal extends Component {

	state = { //O state é usado para possibilitar a alteração de atributos
		tipo : this.props.tipo,
		nome : this.props.nome
	}

	setName(e){ 
		this.setState({ nome : e.target.value}) //função para alterar o estado podendo passar um ou mais atributos que quer alterar
	}

	setTipo(e){ 
		this.setState({ tipo : e.target.value}) 
	}


	render(){ 
		const {nome, tipo} = this.state;

		//para alterar é preciso colocar eventos
		return (
			<div>
				<h1>Nome: {nome} <br /> Tipo: {tipo}</h1>
				<hr />
				<input type="text" placeholder="Nome" value={nome} onChange={e => this.setName(e)}/>
				<input type="text" placeholder="Tipo" value={tipo} onChange={e => this.setTipo(e)}/>
			</div>
			)
	}
}

/*
Importando e executando
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import ClassComp from './components/ClasseComp'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClassComp nome='Gato' tipo='mamifero'/>
);












/*
-------------------------------------------------------------------------
Ao chamar a função no evento da tag, o this pode variar,
logo é usado uma arrow function, para corrigir o problema.
No entanto, é possível usar um contructor para
chamar a função sem usar arrow function:*/

import React, {Component} from 'react'


export default class Animal extends Component {

	state = { 
		tipo : this.props.tipo,
		nome : this.props.nome
	}

	constructor(props){ //constructor da classe
		super(props);
		this.setName = this.setName.bind(this); //uma forma de referenciar as funções e não  ter problema com o this
		this.setTipo = this.setTipo.bind(this);

	}

	setName(e){ 
		this.setState({ nome : e.target.value});
	}

	setTipo(e){ 
		this.setState({ tipo : e.target.value}); 
	}

	render(){ 
		const {nome, tipo} = this.state;

		//referenciando sem arrow function
		return (
			<div>
				<h1>Nome: {nome} <br /> Tipo: {tipo}</h1>
				<hr />
				<input type="text" placeholder="Nome" value={nome} onChange={this.setName}/>
				<input type="text" placeholder="Tipo" value={tipo} onChange={this.setTipo}/>
			</div>
			)
	}
}


//Importanto...

import React from 'react'
import ReactDOM from 'react-dom/client'
import ClassComp from './components/ClasseComp'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClassComp nome='Gato' tipo='mamifero'/>
);


































/*                                      ########################################################### 
                                        ###########################################################
                                        ######################### CONTENCAO #######################
                                        ###########################################################
                                        ###########################################################*/



/*Para rederizar um componente dentro de outro é preciso colocar props.children
dentro do componente pai*/

//------Filho.jsx------

import React from 'react'


export const Mamifero = props => { //criando filho
	return <React.Fragment>
		<h2>Nome: {props.nome} &nbsp;&nbsp;Tipo: {props.tipo} &nbsp;&nbsp;Vivo: {props.vivo}</h2>
	</React.Fragment>
}

export default {Mamifero}



//------Pai.jsx------
import React from 'react'
import Filho from './Filho'


export const Animal = props => {

	return <React.Fragment>
		<h1>PAI 
				<br />Nome: {props.nome} 
				<br />Tipo: {props.tipo}  
				<br />Vivo: {props.vivo}</h1>
		<hr />
		<h1>FILHOS</h1>
		{props.children}
	</React.Fragment>
}


export default {Animal}





//----------------index.js--------------
import React from 'react'
import ReactDOM from 'react-dom/client'
import Pai, {Animal} from './components/Pai'
import Filho, {Mamifero} from './components/Filho'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

	<Animal nome ='Nome Animal' tipo='indeterminado' vivo = "nao">
		<Mamifero nome='Gato' tipo='mamifero' vivo = 'Sim' /> 
		<Mamifero nome='Cachorro' vivo = 'Sim' />
		<Mamifero /> 
		<Mamifero nome='Cavalo'/> 
	</Animal>

	)




















/*                                      ########################################################### 
                                        ###########################################################
                                        #################### HERDANDO COMPONENTS ##################
                                        ###########################################################
                                        ###########################################################*/




/*
Em React é possível criar componentes, 
com base em outros, apenas herdando um trecho,
abaixo a criação e funcionamento:

------------------Componente Filho----------------*/
import React from 'react'


export const Mamifero = props => { //criando filho
	return <React.Fragment>
		<h2>Nome: {props.nome} &nbsp;&nbsp;Tipo: {props.tipo} &nbsp;&nbsp;Vivo: {props.vivo}</h2>
	</React.Fragment>
}

export default {Mamifero}


//----------------Componente Pai------------------

import React from 'react'
import Filho from './Filho'


export const Animal = props => {
	
	// Abaixo a ordem dos filhos mostram:
	// 1- colocando o filho completo
	// 2- inserindo algumas propriedades do pai
	// 3- inserindo todas propriedades do pai
	// 4- inserindo todas propriedades do pai e alterando algumas
	
	return <React.Fragment>
		<h1>PAI 
				<br />Nome: {props.nome} 
				<br />Tipo: {props.tipo}  
				<br />Vivo: {props.vivo}</h1>
		<hr />
		<h1>FILHOS</h1>
		<Filho.Mamifero nome='Gato' tipo='mamifero' vivo = 'Sim' /> 
		<Filho.Mamifero nome='Cachorro' tipo= {props.tipo} vivo = 'Sim' />
		<Filho.Mamifero {...props} /> 
		<Filho.Mamifero {...props} nome='Cavalo'/> 
	</React.Fragment>
}


export default {Animal}

//----------Importando para o index e executando---------------

import React from 'react'
import ReactDOM from 'react-dom/client'
import Pai from './components/Pai'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Pai.Animal nome ='Nome Animal' tipo='indeterminado' vivo = "nao" />
);








/*
----------------------------------------------------
Para renderizar os filhos no arquivo index e quer herdar os componentes do pai,
é preciso identificar no pai que ele recebe outros componentes:

Tomando como base que o arquivo Filho.jsx é o mesmo, 
segue os outros arquivos:
*/

------Pai.jsx------
import React from 'react'
import Filho from './Filho'

export const Animal = props => {
	// No pai é preciso usar a função
	// React.cloneElement em que clona um elemento
	// e adciona a possibilidade de adcionar novas
	// propriedas para ele:
	// Como a função funciona apenas para um elemento,
	// foi usado o map em cima dos filhos (React.Children),
	// e para cada children foi feita a mudança de propriedades.
	// React.cloneElement('elemento a ser clonado', {'novas propriedades'})
	return <React.Fragment>
		<h1>PAI 
				<br />Nome: {props.nome} 
				<br />Tipo: {props.tipo}  
				<br />Vivo: {props.vivo}</h1>
		<hr />
		<h1>FILHOS</h1>
		{
			React.Children.map(props.children, child =>{
				return React.cloneElement(child, {
				...props, ...child.props})
			})
			
		}
	</React.Fragment>
}




//----------------index.js--------------
import React from 'react'
import ReactDOM from 'react-dom/client'
import Pai, {Animal} from './components/Pai'
import Filho, {Mamifero} from './components/Filho'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

	<Animal nome ='Nome Animal' tipo='indeterminado' vivo = "nao">
		<Mamifero nome='Gato' tipo='mamifero' vivo = 'Sim' /> 
		<Mamifero nome='Cachorro' vivo = 'Sim' />
		<Mamifero /> 
		<Mamifero nome='Cavalo'/> 
	</Animal>

	)














 //                                                           REFERENCIAS


/*


https://www.udemy.com/course/curso-web/


*/