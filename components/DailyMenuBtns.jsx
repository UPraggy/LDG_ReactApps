
import {View,Image,
		Pressable} from 'react-native'
import StilizedMenuBar, {renderScreenIcon,styleNavbar,styleMenuBtn} from './StilizedMenuBar'

function setBooks(setOption,opt,option,book,img){
	return <Pressable style={{top:'5%'}} onPress={()=>{
						setOption(opt);
					}}>
						{StilizedMenuBar.renderScreenIcon(option,book ,img,false)}
			</Pressable>
}

const imgBtns = {width:'100%',height:'100%',resizeMode:"contain"}

export default props =>{

	return <>
			{props.subMenuBtn ? <><View style={[StilizedMenuBar.styleNavbar,
									{flexDirection:"row",justifyContent:"space-around",alignItems:"flex-start"}]}>

					{setBooks(props.setOption,[true,false,false,false],
						props.option[0],"1ª leitura",require('./statics/bibleIcon.png'))}


					{setBooks(props.setOption,[false,true,false,false],
						props.option[1],"Salmo",require('./statics/salmoIcon.png'))}


					{setBooks(props.setOption,[false,false,true,false],
						props.option[2],"Evangelho",require('./statics/EvangelhoIcon.png'))}


					<Pressable style={{top:'5%'}} onPress={()=>props.navigation.navigation.navigate('Home')}>
						{StilizedMenuBar.renderScreenIcon(props.option[3],"Home" ,require('./statics/homeColorIcon.png'),false)}
					</Pressable>

				</View> 

				<Pressable  style={[StilizedMenuBar.styleMenuBtn,{bottom: 130}]} 
				onPress={()=>{
						
						props.setThemeBtn(!props.themeBtn);
				}}>
					<Image 
					style={imgBtns}
					source={props.themeBtn ? require('./statics/moonIcon.png') : require('./statics/sunIcon.png')}/>
				</Pressable>

				<Pressable  style={[StilizedMenuBar.styleMenuBtn,{bottom: 80}]} onPress={()=>props.setShowFont(true)}>
					<Image 
					style={imgBtns}
					source={require('./statics/fontIcon.png')}/>
				</Pressable></> : <></>}

				<Pressable  style={[StilizedMenuBar.styleMenuBtn]} onPress={()=>props.setsubMenuBtn(!props.subMenuBtn)}>
					<Image 
					style={imgBtns}
					source={props.subMenuBtn ? require('./statics/closeIcon.png') : require('./statics/menuIcon.png')}/>
				</Pressable>
		</>
}
