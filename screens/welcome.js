import React,{useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {Text, View,Dimensions,ImageBackground,Animated, NativeModules,LayoutAnimation,TouchableOpacity,ScrollView} from 'react-native';
const { width, height } = Dimensions.get('window');
const vh=height
const vw=width

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: -vw,
        duration: 1000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        marginLeft: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}


export default class App extends React.Component {
    state={m:0}
  
  render() {
   const { navigation } = this.props;

    return (
      <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false} 
      scrollEventThrottle={10} 
      pagingEnabled 
      ref='_scrollView'
    >
        <ImageBackground source={require('../assets/home4.png')} style={style1}>
      <View style={page1}>
        <View style={bottom}>
        <View>
        
          <Text style={t1}>Broker Service</Text>
          <Text style={t2}>services for u</Text>
          <View style={t3}>
            <Text style={t31}>10K {"\n"}<Text style={t331}>COSTUMER</Text></Text>
            <Text style={t32}>6 {"\n"}<Text style={t332}>SERVICES</Text></Text>
            <Text style={t33}>24X7 {"\n"}<Text style={t333}>SUPPORT</Text></Text>
          </View>
          <View style={dots}>
            <View style={{...dot1,...activedot}}></View>
            <View style={dot1}></View>
            <View style={dot1}></View>
          </View>
        </View>
        
       </View>
       </View>
     </ImageBackground>
       <ImageBackground source={require('../assets/laundry2.png')} style={style2}>
        <View style={page1}>
        <View style={bottom}>
        <View>
        
          <Text style={t1}>Laundry Service</Text>
          <Text style={t2}>We work to make u happy</Text>
          <View style={t3}>
            <Text style={t31}>10K {"\n"}<Text style={t331}>COSTUMER</Text></Text>
            <Text style={t32}>6 {"\n"}<Text style={t332}>SERVICES</Text></Text>
            <Text style={t33}>24X7 {"\n"}<Text style={t333}>SUPPORT</Text></Text>
          </View>
          <View style={dots}>
            <View style={dot1}></View>
            <View style={{...dot1,...activedot}}></View>
            <View style={dot1}></View>
          </View>
        </View>
        
       </View>
        </View>
     </ImageBackground>
       <ImageBackground source={require('../assets/bike1.png')} style={style3}>
         <View style={page1}>
        <View style={bottom2}>
        <View>
        
          <Text style={t1}>Bike Service</Text>
          <Text style={t2}>We work to make u happy</Text>
          <View style={t3}>
            <Text style={t31}>10K {"\n"}<Text style={t331}>COSTUMER</Text></Text>
            <Text style={t32}>6 {"\n"}<Text style={t332}>SERVICES</Text></Text>
            <Text style={t33}>24X7 {"\n"}<Text style={t333}>SUPPORT</Text></Text>
          </View>
          <View style={dots}>
            <View style={dot1}></View>
            <View style={dot1}></View>
            <View style={{...dot1,...activedot}}></View>
          </View>
        </View>
        <TouchableOpacity onPress={()=>
        { 
          navigation.navigate('Mainpage')
        }
      }
    >
       <View style={button}>
       <Text style={btntext}>Next</Text>
       </View>
       </TouchableOpacity>
       </View>
        </View>
     </ImageBackground>
      
    </ScrollView>
    );
  }
}

const container={
height:vh+90,
width:3*vw,
overflow:'hidden',
display:'flex',
flexDirection:'row',
}
const style1={
height:vh+90,
width:vw,
overflow:'hidden',

}
const style2={
height:vh+90,
width:vw,
overflow:'hidden'
}
const style3={
height:vh+90,
width:vw,
overflow:'hidden'
}
const t1={
fontSize:28,
color:'white',
fontFamily:'sans-serif',
// fontWeight:'bold',
marginLeft:.1*vw,
marginRight:.1*vw,
}
const t2={
color:'white',
fontFamily:'sans-serif',
marginLeft:.1*vw,
marginRight:.1*vw,
marginTop:8
}
const t3={
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  paddingRight:.25*vw,
  paddingLeft:.15*vw,
  marginTop:25,
  marginBottom:20
}
const t31={
color:'white',
fontSize:15,
textAlign:'center',
lineHeight: 22,

}
const t32={
color:'white',
fontSize:15,
textAlign:'center',
lineHeight: 22,

}
const t33={
color:'white',
fontSize:15,
textAlign:'center',
lineHeight: 22,
}
const t331={
fontSize:11,
color:'#999',

}
const t332={
fontSize:11,
color:'#999',

}
const t333={
fontSize:11, 
color:'#999' ,

}
const button={
  backgroundColor:'#FFA400',
  width:.8*vw,
  paddingTop:4,
  paddingBottom:6,
  textAlign:'center',
  borderRadius:17,
  marginLeft:.1*vw,
  marginRight:.1*vw,
  }
const btntext={
  color:'white',
  fontSize:18,
  textAlign:'center',
  fontFamily:'sans-serif',
  letterSpacing:1
} 
const bottom={
  height:180,
  overflow:'hidden',
}
const bottom2={
  height:230,
  overflow:'hidden',
}
const page1={
  height:vh,
  display:'flex',
  flexDirection:'column-reverse',
}
const dots={
display:'flex',
flexDirection:'row',
paddingTop:0,
paddingBottom:18,
justifyContent:'center'
}
const dot1={
height:8,
width:8,
borderRadius:25,
borderBottomWidth:2,
borderTopWidth:2,
borderRightWidth:2,
borderLeftWidth:2,
borderBottomColor:'white',
borderTopColor:'white',
borderLeftColor:'white',
borderRightColor:'white',
marginRight:5,
}
const activedot={
backgroundColor:'white'
}