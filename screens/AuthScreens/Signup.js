import React, {useState}from 'react'
import {
    View,
    Text,
    Image,
    
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';
import { AuthContainer } from '../../components';
const Signup = () => {
  const [mode,setMode]= useState("signup")
 
  return (
    <View style={{flex:1,
    paddingHorizontal:SIZES.padding,
    backgroundColor:COLORS.lightGrey}}>
        <Image
        source={images.logo}
        style={{ alignSelf:'center',
        marginTop:SIZES.padding*2,
        width:50,
        height:50
        }}/>
        <View >
          {/* AuthContainer */}
          <AuthContainer mode={mode} setMode={setMode}/>
          
        </View>
    </View>
  )
}

export default Signup
