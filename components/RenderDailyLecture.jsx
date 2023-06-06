import React, {useEffect} from 'react'
import {Text,StyleSheet} from 'react-native'


const styles = StyleSheet.create({
	textStyle:{
		flex:1, 
		flexWrap: 'wrap',
		fontSize:20,
	},
	versicleStyle:{
		fontSize:20,
		color: '#1e9e98'
	}

})



function formatVersiculo(text,fontSizeS){
	text = text.replace(/(\r\n|\n|\r|\t)/gm,"")

	let letr = text.split(/\d+/g)
	let num =  text
	letr.forEach((val,i)=>{
		num = num.replace(val,"Versiculo")
	});
	
	
	num = num.split("Versiculo")

	//lineBreak: 'auto'
	num = num.map((val,i)=>{
		if (i > 0 && i < num.length-1){

			return <Text key={i}>
			{letr[i].length < 2 ? <Text style={styles.versicleStyle}>{val}{letr[i]}</Text> : 
				<>
					<Text  style={[styles.versicleStyle,{fontSize:fontSizeS}]}>{val}{". "}</Text>
				  	<Text  style={[styles.textStyle,{fontSize:fontSizeS}]}>{letr[i]}{"\n"}</Text>
				</>
			  }
			</Text>
		}else{
			return ;
		}
	})

	return num
}



export default props =>{



	useEffect(()=>{
		if (props.leitura[0]){
		props.setTitle(props.liturgia.primeiraLeitura[0])

		}else if (props.leitura[1]){
			props.setTitle(props.liturgia.salmo[0])
		}
		else if (props.leitura[2]){
			props.setTitle(props.liturgia.evangelho[0])
		}
	})
	let actualApp = <></>;
	if (props.leitura[0]){
			actualApp =  <Text style={{fontSize:props.fontSizeS, color: props.theme ? "#000" : "#fff"}}>{"\n"}{
				formatVersiculo(props.liturgia.primeiraLeitura[2],props.fontSizeS)}</Text>
	}else if (props.leitura[1]){
		actualApp =  <Text style={{fontSize:props.fontSizeS, color: props.theme ? "#000" : "#fff"}}>{"\n"}{
				props.liturgia.salmo[1]}</Text>}

	else if (props.leitura[2]){
			actualApp =  <Text style={{fontSize:props.fontSizeS, color: props.theme ? "#000" : "#fff"}}>{"\n"}{
				formatVersiculo(props.liturgia.evangelho[1],props.fontSizeS)}</Text>
			}
	else{
		actualApp = <></> ;
	}

	return actualApp
}
