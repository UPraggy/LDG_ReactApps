import React, {useState, useEffect} from 'react'
import {View,Text,StyleSheet,
		ScrollView,Image,
		ActivityIndicator} from 'react-native'

import MeuEstilo from './statics/MeuEstilo'
import getDaily from './getDailyLiturgy'
import RenderDailyLecture from './RenderDailyLecture'
import DailyMenuBtns from './DailyMenuBtns'
import ReSizeFontModal from './ReSizeFontModal'

function setCorLit(cor){
	cor = cor.toLowerCase()
	let cores = ["verde", "branco", "vermelho", "roxo", "preto", "rosa"]
	let coresHex = ["#1d9902","#e9ebe8","#9e1402","#4a0273","#000000","#d402a6"]
	for (let x=0; x<cores.length; x++){
		if(cor.indexOf(cores[x]) != -1){
			return coresHex[x]
		}
	}
}




export default props => {

	const [subMenuBtn, setsubMenuBtn] = useState(true)

	const [liturgia, setliturgia] = useState('');

	const [title, setTitle] = useState(null);
	
	const [option, setOption] = useState([true,false,false,false]);

	const [themeBtn, setThemeBtn] = useState(true)

	const [fontSizeS,setFontSize] = useState(20)

	const [showFont,setShowFont] = useState(false)


	useEffect(
		()=>{
			
			const unsubscribe = props.navigation.navigation.addListener('focus', () => {
	      		let temp = props.navigation.route.params
	      		getDaily()
					.then(resp => {
						setliturgia(resp)
					})
				temp.setMenuBtn(false)
				temp.setShowMenuBtn(false)
				setOption([true,false,false,false]);
		    });

		    // Return the function to unsubscribe from the event so it gets removed on unmount
		    return unsubscribe;
		  }, [props.navigation]);


	return (
		<>
		{showFont? <ReSizeFontModal setShowFont={setShowFont} show={showFont} 
							setFontSize={setFontSize} fontSizeS={fontSizeS}/> : <></>}

		<View style={[MeuEstilo.containerPrincipal,{backgroundColor: themeBtn ? "#6ea6cc" : "#4b5775"}]}>
		
		
		<View style={{width:"100%",height: "88%", margin: 0}}>

		<View style={styles.titleView}>
			<Text style={[styles.titleViewText,{fontSize: title != null && title.length > 30 ? 20 : 30}]}>{liturgia === '' ? '...' : title ? title.split("(").join("\n(") : "..."}</Text>

			<View style={styles.titleSubView}>
			<Image style={[styles.titleSubViewImg,{tintColor:liturgia === '' ? "#badabb" :setCorLit(liturgia.corLiturgica[0])}]} 
				source={require('./statics/flagIcon.png')}></Image>
			<Text style={{fontSize:15,color:"#fff"}}>{liturgia === '' ? 'carregando' : liturgia.corLiturgica[1]}</Text>
			</View>

		</View>


		<ScrollView style={[styles.scrollV,{backgroundColor: themeBtn ? "#fff" : "#000"}]}
		contentContainerStyle={{flex: liturgia != '' ? 0 : 1,justifyContent:"center",alignItems:'center'}}>
			

		{liturgia != '' ? 
			
			<View style={[{width:"100%"}]}>
				<RenderDailyLecture liturgia={liturgia} setTitle={setTitle} 
					leitura={option} theme={themeBtn}  fontSizeS={fontSizeS}/>
			</View>

			: <View>
			<ActivityIndicator size="large" color="#00aad9"/>
			</View>}

		</ScrollView>

		</View>
		{liturgia != '' ?  
		
			<DailyMenuBtns  
			setsubMenuBtn={setsubMenuBtn}
			setThemeBtn={setThemeBtn} 
			setOption={setOption}
			subMenuBtn={subMenuBtn} 
			setFontSize = {setFontSize}
			setShowFont = {setShowFont}
			option={option} 
			themeBtn={themeBtn}  
			navigation={props.navigation}
			fontSizeS = {fontSizeS}
			/> 
			: <></>}
		</View> 
		
		</>
		);
}


const styles = StyleSheet.create({
	titleView:{
		width:"100%",
		height: "25%", 
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems:'center',
		paddingHorizontal:10,
		paddingTop:8
	},
	titleViewText:{
		color:"#fff",
		paddingBottom:4, 
		textAlign: "center"
	},
	titleSubView:{
		width:"100%",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems:'center'
	},
	titleSubViewImg:{
		marginRight: 10, 
		width:30,
		height:30
	},
	scrollV:{
		width:"100%",
		height:"100%",
		flexDirection:'column',
		paddingHorizontal:10
	}

})