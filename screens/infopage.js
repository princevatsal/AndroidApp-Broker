import * as React from 'react';
import {Dimensions,Text, View, StyleSheet,ImageBackground,Image,ScrollView,TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');
const vh=height
const vw=width
export default class App extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
      <View style={style1}>
       <View style={style2}>
       <TouchableOpacity onPress={()=>{navigation.goBack()}}><Image
          style={style3}
          source={require('./../assets/arrow.png')}/>
          </TouchableOpacity>
      <Text style={t1}>More Info</Text>
      </View>
      <Image
         style={style4}
         source={require('./../assets/new1.jpg')}/>
      <View style={style5}>
      <Image
         style={style6}
         source={require('./../assets/new2.jpg')}/>
      <Image
         style={style7}
         source={require('./../assets/new3.jpg')}/>
      </View>
      <View style={style8}>
        <Text style={t2}>A Villa in Dehradun</Text>
        <Text style={t3}>All facilites are provided here</Text>
        <View style={style16}>
        <View style={style18}>
        <Text style={{fontWeight:'bold'}}>Area</Text>
        <Text style={{marginLeft:.0001*vw}}>2 Bhk</Text>
        </View>
        <View style={style19}>
        <Text style={{marginLeft:.04*vw,fontWeight:'bold'}}>Range</Text>
        <Text>5000-10000</Text>
        </View>
        <View style={style20}>
        <Text style={{fontWeight:'bold'}}>AC</Text>
        <Text>Yes</Text>
        </View>
        </View>
         <View style={style21}>
        <Image style={img1} source ={require('./../assets/licon.jpg')}/>
        <Text style={t6}>Location</Text>
        </View>
        <View style={style12}>
         <Image style={img} source ={require('./../assets/dis.png')}/>
        <View style={style11}>
        <Text style={t4}>Here Comes all information about the house or laundry service and bikes </Text>
        </View>
        </View>
      </View>
      <View style={style17}>
      <Text style={t5}>Contact Me</Text>
      <View style={style13}></View>
      </View>
      <View style={style10}>
       <Image style={style9} source ={require('./../assets/Facebook.png')}/>
        <Image style={style91} source ={require('./../assets/Instagram.png')}/>
        <Image style={style92} source ={require('./../assets/phone.png')}/>
      </View>
      <View style={style14}>
        <Image style={style15} source ={require('./../assets/Copyright.png')}/>
        <Text style={{color:'#a9a9a9'}}>2019</Text>
      </View>
      </View>
      </ScrollView>
    );
  }
  }
  const style1={
   padding:10,
   marginTop:40
  }
  const style2={
    display:'flex',
    flexDirection:'row'
  }
    const style3={
      marginTop:4,
  width:27,
  height:27
  
  }
  const t1={
  marginLeft:10,
  marginTop:2,
  fontSize:22
  }
  const style4={
    marginTop:20,
    height:.7*vh,
    width:.94*vw,
    borderRadius:10
  }
const style5={
display:'flex',
flexDirection:'row'
}
  const style6={
    marginTop:20,
    height:.3*vh,
    width:.55*vw,
    borderRadius:10
  }
  const style7={
    marginTop:20,
    marginLeft:10,
    height:.3*vh,
    width:.365*vw,
    borderRadius:10
  }
  const style8={

  }
  const t2={
    fontSize:20,
    marginTop:.05*vh,
    marginLeft:.27*vw,
    fontWeight:'bold'
  }
  const t3={
    marginLeft:.25*vw,
  }
  const style9={
    height:30,
    width:30,
    marginLeft:.32*vw
  }
  const style91={
        height:30,
    width:30,
    marginLeft:.03*vw
  }
  const style92={
        height:30,
    width:30,
    marginLeft:.03*vw
  }
  const style10={
       display:'flex',
    flexDirection:'row',
    marginTop:.009*vh,
  }
  const style11={
    borderColor: '#a9a9a9',
    borderWidth: 2,
    height:.3*vh,
    width:.933*vw,
    marginTop:30,
    marginLeft:.010*vw,
    borderRadius:10,
  }
  const img={
    position:'absolute',
    height:70,
    width:70,
    top:.003*vh,
    left:.385*vw
  }
  const style12={
    marginTop:22,
    
  }
  const style13={
    width:.35*vw,
    borderColor: '#d3d3d3',
    borderWidth: 2,
    
  }
  const t4={
    marginTop:.06*vh,
    marginLeft:.03*vw,
    marginRight:.03*vw,
    color:'#a9a9a9',
    fontSize:18
  }
  const t5={
fontSize:17,
color:'#a9a9a9',
marginLeft:.06*vw
  }
  const style14={
   marginLeft:.79*vw,
   marginTop:.02*vh,
   display:'flex',
   flexDirection:'row'
  }
  const style15={
    height:20,
    width:20
  }
  const style17={
marginTop:.06*vh,
    marginLeft:.3*vw
  }
  const style16={
    display:'flex',
    flexDirection:'row',
    marginTop:.04*vh
  }
  const style18={
marginLeft:0.145*vw,
  }
  const style19={
    marginLeft:0.15*vw
  }
  const style20={
    marginLeft:0.15*vw
  }
  const img1={
  height:.04*vh,
    width:.06*vw
  }
  const style21={
    display:'flex',
    flexDirection:'row',
    marginTop:.04*vh,
    marginLeft:.365*vw
  }
  const t6={
    marginLeft:.02*vw,
    fontWeight:'bold'
  }