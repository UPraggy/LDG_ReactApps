import React, {useState,useEffect} from 'react'
import {View,Modal,Image,Pressable,Text} from 'react-native'
import Slider from '@react-native-community/slider';


const alignCenter ={
	justifyContent:"center",
	alignItems:"center"
}


export default props =>{

	const [scale,setScale] = useState([{ scaleX: 1 }, { scaleY: 1 }])

	const [functions,setFunctions] = useState(1)

	useEffect(()=>{
		if (functions === 1){
			setScale([{ scaleX: 2 }, { scaleY: 2 }])
			setFunctions(0)
		}
	})

	return <Modal
	 transparent={true}
	 >

	 <View style={[{backgroundColor:"#00000044",width:'100%',height:"100%"},alignCenter]}>
	 	<View style={[{width:'90%',height:"20%", backgroundColor:"#fff",
	 	borderRadius:10},alignCenter]}>


	 			<Slider
				  style={{width: "45%", height: 40,transform: scale}}
				  minimumValue={20}
				  maximumValue={45}
				  minimumTrackTintColor="#80621d"
				  maximumTrackTintColor="#1d5380"
				  onSlidingComplete = {(val)=>props.setFontSize(val)}
				  step={1}
				  thumbTintColor="#610f36"
				  value = {props.fontSizeS}
				  trackStyle={{backgroundColor:"#00F",height:50}}
				/>
				<Pressable style={[{backgroundColor:"#0a6", width:"20%",height:"20%",borderRadius:5},alignCenter]} onPress={()=>props.setShowFont(false)}>
					<Text>OK</Text>
				</Pressable>
	 	</View>
  	</View>
            </Modal>


}