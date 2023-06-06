/*
INDICE 

# React Native
- START
- INTRODUÇÃO
- UTILIZANDO CSS
- PASSAGENS DE ARGUMENTOS
- CSS - RESPONSIVO
- INSERINDO IMAGENS
- IMAGE BACKGROUND
- FUNCTIONS
- BUTTON AND ALERT

*/

/*Obs.: 

Para buscar pesquise por '# nome'.*/







/*                                      ########################################################### 
                                        ###########################################################
                                        ############################ START ########################
                                        ###########################################################
                                        ###########################################################*/

/*
Tente aprender React antes de entrar neste modulo, alguns modulos
tomarão como base o conhecimento do modulo anterior de
React, para facilitar e evitar repetições

Siga o Tutorial https://reactnative.dev/docs/environment-setup
para criar seu ambiente e primeiro projeto

Nota: Sugiro seguir o tutorial React Native CLI QuickStart,
caso dê erro ao iniciar o app, siga a rota Expo GO 
*/



















/*                                      ########################################################### 
                                        ###########################################################
                                        ######################### INTRODUÇÃO ######################
                                        ###########################################################
                                        ###########################################################*/



/*
Após criar seu primeiro app é necessário entender oque o React está fazendo.
Basicamente, dentro do diretório do projeto existe o arquivo App.js,
ele lida com a renderização da pagina o babel.config converte
o app para uma linguagem em que o Android ou Ios entende, importando seus componentes,
e colocando dentro do app. Dificilmente, será preciso mexer na pagina App.js,
todas suas configurações serão externas, organizando em componentes.


Para Iniciar tente apagar todo o conteudo dentro de App.js
e inicialmente usaremos as bibliotecas View e Text

View -> funciona como uma div só que para dispositivos portateis
Text -> renderiza texto
*/
import React from 'react'
import {
  View,
  Text
} from 'react-native'


//Seu primeiro elemento
const element = <View>
      <Text>Hello World!</Text>
    </View>


//seu app (pode colocar o nome que quiser)
export default function My_App(){
  return (
      element
    );
};


/*----------------------------------------------------------
Assim como React é possível utilizar classes para renderizar*/

import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'




export default class My_App extends Component{
  render(){
    return (
      <View>
      <Text>Hello World!</Text>
      </View>
    );
  }
};




/*                                      ########################################################### 
                                        ###########################################################
                                        ################### PRIMEIRO COMPONENTE ###################
                                        ###########################################################
                                        ###########################################################*/




/*
Crie uma pasta para organizar seus componentes no diretorio
do seu projeto e crie seu arquivo jsx com o nome do seu 
componente maiusculo (isso é uma convenção, para que seja mais 
legivel), dentro dele exporte sua função para que possa ser
acessada por fora.
*/

//-----FirstComponent.jsx-----

import React from 'react'
import {View, Text} from 'react-native'

export default props=> {
	return (

		<View>
			<Text>
				HELLLO WORLD!
			</Text>
		</View>
		);
}


//-----App.js-----
import React from 'react'
import {
  View,
  Text
} from 'react-native'
//importando componente
import FirstComponent from './components/FirstComponent'



export default function My_App(){
  return (
      <FirstComponent />
    );
};
















/*                                      ########################################################### 
                                        ###########################################################
                                        ####################### UTILIZANDO CSS ####################
                                        ###########################################################
                                        ###########################################################*/

/*
Para utilizar css em seus componentes basta criar
um objeto e inserir dentro do atributo
style.
Ex.: style={{color: '#000'}}

Para utilizar o esquema de classes do css
tente iniciar uma variavel com objetos

const meu_estilo = StyleSheet.create({
	text_classe:{
		color : '#32a842',
		fontSize : 40
	})

e ao chamar no componente use:
style={meu_estilo.text_classe}
*/

//-----FirstComponent.jsx-----


import React from 'react'
import {View,
		Text,
		StyleSheet} from 'react-native'

export default props=> {
	return (

		<View style={meu_estilo.container}>
			<Text style={meu_estilo.text_classe}>
				HELLLO WORLD!
			</Text>
			<Text style={{color: '#000000', fontSize: 20}}>
				Seja Bem Vindo!
			</Text>
		</View>
		);
}


const meu_estilo = StyleSheet.create({
	text_classe:{
		color : '#32a842',
		fontSize : 40
	},
	container:{
		flex: 1,
		alignItems : 'center',
		justifyContent: 'center'
	}
})



//-----App.js-----
import React from 'react'
import {
  View,
  Text
} from 'react-native'
import FirstComponent from './components/FirstComponent'



export default function My_App(){
  return (
      <FirstComponent />
    );
};



/*
Ainda é possível utilizar como
arquivo externo.
Neste Exemplo foi criada a pasta statics, para armazenar
os estilos
*/


//-----MeuEstilo.jsx-----
import {StyleSheet} from 'react-native'


export default StyleSheet.create({
	text_classe:{
		color : '#32a842',
		fontSize : 40
	},
	container:{
		flex: 1,
		alignItems : 'center',
		justifyContent: 'center'
	}
})



//-----FirstComponent.jsx-----


import React from 'react'
import {View,
		Text
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'
export default props=> {
	//Use array para concatenar diferentes objetos de estilos (o ultimo sobrepõe as propriedades anteriores)
	return (

		<View style={MeuEstilo.container}>
			<Text style={[MeuEstilo.text_classe, {textAlign: 'center'}]}>
				HELLLO WORLD!
			</Text>
			<Text style={{color: '#000000', fontSize: 20}}>
				Seja Bem Vindo!
			</Text>
		</View>
		);
}

//-----App.js-----
import React from 'react'
import {
  View,
  Text
} from 'react-native'
import FirstComponent from './components/FirstComponent'



export default function My_App(){
  return (
      <FirstComponent />
    );
};




/*                                      ########################################################### 
                                        ###########################################################
                                        ################# PASSAGENS DE ARGUMENTOS #################
                                        ###########################################################
                                        ###########################################################*/


/*por convenção os parametros/argumentos devem ter nome 'props' 
props nada mais é que um objeto, com todos os argumentos
Essa passagem é semelhante ao React*/




//-----FirstComponent.jsx-----

import React from 'react'
import {View,
		Text,
		StyleSheet} from 'react-native'

export default props=> {
	return (

		<View style={meu_estilo.container}>
			<Text style={meu_estilo.text_classe}>
				Meu Componente
			</Text>
			<Text style={{color: '#000000', fontSize: 20}}>
				{props.propriedade}
			</Text>
		</View>
		);
}


const meu_estilo = StyleSheet.create({
	text_classe:{
		color : '#32a842',
		fontSize : 40
	},
	container:{
		flex: 1,
		alignItems : 'center',
		justifyContent: 'center'
	}
})


//-----App.js-----

import React from 'react'
import {
  View,
  Text
} from 'react-native'
import FirstComponent from './components/FirstComponent'



export default function My_App(){
  return (
      <FirstComponent propriedade="Passando Propriedades"/>
    );
};






/*                                      ########################################################### 
                                        ###########################################################
                                        ##################### CSS - RESPONSIVO ####################
                                        ###########################################################
                                        ###########################################################*/

/*
Para React-Native ele não utiliza unidades de medida
comuns no React normal ou em elementos html
como pixel, em, vw, etc.
Abaixo alguns exemplos de configurações para elementos responsivos.

Nota.: Este modulo contém apenas parametros,
caso queira testar, coloque em seu programa com
base no modulo CSS


Veja todas as propriedades em:
https://reactnative.dev/docs/layout-props
*/




//----------------------------Escala-----------------------------
/* Para escala pode ser usado porcentagens
e numeros comuns a diferença se dá no tamanho
*/


//Caso use 100% por exemplo, ele ocupa todo o espaço disponivel
width : 100%; 
/*Caso use um numero comum ele ocupará a
quantidade de 'pixels do dispositivo'*/
width : 100 ;


/*-----------Flex--------------*/
/*Deixa todos os itens flexíveis terem o mesmo comprimento, 
independentemente de seu conteúdo:

Nota: Um elemento importante para a View Principal do projeto
Ex:
*/

import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={{flex: 1,width:'100%', alignItems : 'center',
      justifyContent : 'center',backgroundColor: '#cdf7f5'}}> 

      <FirstComponent propriedade="Passando Propriedades"/>
      </View>
    );
};
/*----------------------FlexDiretion-------------------*/
/*
Flex direction contém dois parametros

row,column -> os elementos dentro serão organizados na: 
				horizontal -> row
				vertical -> column
Caso adcione -reverse .Ex:
row-reverse
ele muda a ordem dos componentes
*/



/*----------------------JustifyContent e AlignItems-------------------*/

/*
Opções ótimas para organizar items tanto na vertical (AlignItems),
quanto na horizontal (JustifyContent),
ambos funcionam muito bem em ReactNative
*/

justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly;



align-items: normal|stretch|positional alignment|flex-start|flex-end|baseline;




/*--------------------------FlexWrap-------------------*/
/*
Determina como os elementos devem se comportar caso ocupem,
espaço além do espaço suportado pelo elemento 'pai'
*/
flex-wrap: nowrap|wrap|wrap-reverse;




























/*                                      ########################################################### 
                                        ###########################################################
                                        #################### INSERINDO IMAGENS ####################
                                        ###########################################################
                                        ###########################################################*/

/*
Para inserir imagem, é preciso importar o modulo
'Image' e colocar o caminho relativo através do source
utilizando o require
também é possível criar um nome. Ex.:
import MinhaImagem from 'meucaminhorealtivo'

<Image source={MinhaImagem} ></Image>
Use 'src' para imagens por url
src={'http://www.minhaurl.com.br/image.jpg'}
*/

/*--------------------------FirstComponent.jsx-------------------*/

import React from 'react'
import {View,
		Text,
		Image
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'
export default props=> {
	return (

		<View style={[MeuEstilo.container,{backgroundColor: props.backColor, padding: '10%'}]}>
			<Text style={[MeuEstilo.text_classe, {color : props.fontColor}]}>
				Inserindo Imagem
			</Text>
			<Image  
			style={{width:'50%', resizeMode: 'contain', alignSelf:'center'}}
			source={require('./statics/perrito.jpg')} ></Image>
		</View>
		);
}



/*--------------------------App.js-------------------*/

import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={MeuEstilo.containerPrincipal}> 
      <FirstComponent flex={1} backColor="#ffffff" fontColor="#000000"/>
      </View>
    );
};




















/*                                      ########################################################### 
                                        ###########################################################
                                        ##################### IMAGE BACKGROUND ####################
                                        ###########################################################
                                        ###########################################################*/


/*
Semelhante ao modulo IMAGE,
o ImageBackground insere uma imagem de fundo nos objetos, 
vale mencionar que ele deve envolver o objeto
e não estar contido, ele contém o mesmo atributo source
e caracteristicas do IMAGE
*/

/*--------------------------FirstComponent.jsx-------------------*/

import React from 'react'
import {View,
		Text,
		ImageBackground
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'


export default props=> {

	return (

		<ImageBackground source={require('./statics/logo.png')} resizeMode="cover">
		<View style={[MeuEstilo.container,{backgroundColor: props.backColor, padding: '10%'}]}>
			<Text style={[MeuEstilo.text_classe/*, {color : props.fontColor}*/]}>
				TEST APLICATION MOBILE
			</Text>
			{/*<Image source={require('./statics/logo.png')} 
			style={{width:'50%',resizeMode :'contain', 
					height:'20%', alignSelf: 'center', marginTop:'5%'}}/>*/}
			
		</View>
		</ImageBackground>
		);
}


/*--------------------------App.js-------------------*/


import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={MeuEstilo.containerPrincipal}> 
      <FirstComponent flex={1} backColor="#ffffff" fontColor="#000000"/>
      </View>
    );
};

























/*                                      ########################################################### 
                                        ###########################################################
                                        ######################### FUNCTIONS #######################
                                        ###########################################################
                                        ###########################################################*/

/*
Diferente de React, React Native não comporta arrow functions 
dentro do 'retorno', para contornar isso é preciso declara-la
fora e chama-la depois, ou utilizar uma função anonima dentro do 'retorno'
*/



/*--------------------------FirstComponent.jsx-------------------*/

import React from 'react'
import {View,
		Text,
		Image
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'
const soma = (num)=> num+2;

export default props=> {
	const num =4
	return (

		<View >
			<Text >
				Funções&nbsp;
				{function(num){return num*2}(num)}
				&nbsp;
				{num*3}
				&nbsp;
				{soma(num)}
			</Text>
		</View>
		);
}


/*--------------------------App.js-------------------*/

import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={MeuEstilo.containerPrincipal}> 
      <FirstComponent flex={1} backColor="#ffffff" fontColor="#000000"/>
      </View>
    );
};



















/*                                      ########################################################### 
                                        ###########################################################
                                        #################### BUTTON AND ALERT #####################
                                        ###########################################################
                                        ###########################################################*/

/*
https://reactnative.dev/docs/button
https://reactnative.dev/docs/alert

Em React Native existe o component button e alert, 
assim como javascript, a diferença é que ambos são limitados
button não recebe nenhum tipo de css a não ser o proprio
atributo color
*/


/*--------------------------FirstComponent.jsx-------------------*/

import React from 'react'
import {View,
		Button,
		Alert
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'

export default props=> {
	return (

		<View style={[MeuEstilo.container,{backgroundColor: props.backColor, padding: '10%', flex: props.flex}]}>
			<Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        	/>
		</View>
		);
}



/*--------------------------App.js-------------------*/



import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={MeuEstilo.containerPrincipal}> 
      <FirstComponent flex={1} /*backColor="#f56042"*/ fontColor="#45f542"/>
      <TesteComp flex={1} /*backColor="#f56042"*/ fontColor="#45f542"/>
      </View>
    );
};







/*------------------Ativando Funcao-------------------
/*
Como no react é possível usar o useState
*/

/*--------------------------FirstComponent.jsx-------------------*/

import React, {useState} from 'react'
import {View,
		Text,
		Button,
		Alert
	} from 'react-native'
import MeuEstilo from './statics/MeuEstilo'
const soma = (setNum,num)=> setNum(num+1);

export default props=> {
	const [num,setNum] = useState(0)
	return (

		<View style={[MeuEstilo.container,{backgroundColor: props.backColor, padding: '10%', flex: props.flex}]}>
			<Button
          title="Right button"
          onPress={()=>soma(setNum,num)}
        	/>
        	<Text style={{fontSize:50}}>{num}</Text>
		</View>
		);
}



/*--------------------------App.js-------------------*/


import React from 'react'
import {View} from 'react-native'
import FirstComponent from './components/FirstComponent'
import MeuEstilo from './components/statics/MeuEstilo'


export default function My_App(){
  return (
      <View style={MeuEstilo.containerPrincipal}> 
      <FirstComponent flex={1} /*backColor="#f56042"*/ fontColor="#45f542"/>
      </View>
    );
};





 //                                                           REFERENCIAS


/*


https://www.udemy.com/course/curso-web/
https://www.w3schools.com/cssref/

*/