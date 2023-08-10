import React, {useState}from 'react'
import {
    View,
    Text,
    Image,
    
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';
import { AuthContainer } from '../../components';
const Login = () => {
  const [mode,setMode]= useState("login")
 
  return (
    <View style={{flex:1,
    paddingHorizontal:SIZES.padding,
    backgroundColor:COLORS.light}}>
        <Image
        source={images.logo}
        style={{ alignSelf:'center',
        marginTop:SIZES.padding*2,
        width:50,
        height:50
        }}/>
        <View style={{zIndex:1}}>
          {/* AuthContainer */}
          <AuthContainer mode={mode} setMode={setMode}/>
          
        </View>
    </View>
  )
}

export default Login
