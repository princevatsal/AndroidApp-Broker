import React from 'react'
import {Text,View,Dimensions,TouchableOpacity,ScrollView,Image} from 'react-native'
const { width, height } = Dimensions.get('window');
const vh=height
const vw=width
class Txt extends React.Component{
render(){
  if(this.props.active){
    if(this.props.sptext){
      return(
        <Text style={{...text,...sptext,  borderBottomColor: '#738f9f',borderBottomWidth: 2,color:'black'}}>{this.props.title}</Text> 
       )  
    }
    return(
     <Text style={{...text,  borderBottomColor: '#738f9f',borderBottomWidth: 2,color:'black'}}>{this.props.title}</Text> 
    )
  }
  if(this.props.sptext){
    return(
      <Text style={{...text,...sptext}}>{this.props.title}</Text>
    )
  }
return(
  <Text style={text}>{this.props.title}</Text>
)
}
}
class Img extends React.Component{
render(){
  return(
    <Image source={this.props.src} style={{height:20,width:20,marginTop:18}}/>
  )
}
}
export default class tabs extends React.Component{
 state={houses:true,laundry:false,bikes:false,accommodation:false,fooding:false,salon:false,fun:false,medical:false}
  render(){
    return(
      <ScrollView horizontal ref='_scrollView'>
      <View style={stripe}>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true}); this.props.tabchange('houses');this.setState({houses:true,laundry:false,bikes:false,accommodation:false,fooding:false,salon:false,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/house.png')}/><Txt  title={'Rental'} active={this.state.houses} /></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: .2*vw, y: 0, animated: true}); this.props.tabchange('laundry');this.setState({houses:false,laundry:true,bikes:false,accommodation:false,fooding:false,salon:false,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/laundry.png')}/><Txt  title={'Laundry'} active={this.state.laundry}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: .4*vw, y: 0, animated: true}); this.props.tabchange('bikes');this.setState({houses:false,laundry:false,bikes:true,accommodation:false,fooding:false,salon:false,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/packet.png')}/><Txt  title={'Packets and Movers'} active={this.state.bikes} sptext={true}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: .8*vw, y: 0, animated: true}); this.props.tabchange('accommodation');this.setState({houses:false,laundry:false,bikes:false,accommodation:true,fooding:false,salon:false,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/accommodance.png')}/><Txt  title={'Accommodate'} active={this.state.accommodation}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: 1*vw, y: 0, animated: true}); this.props.tabchange('fooding');this.setState({houses:false,laundry:false,bikes:false,accommodation:false,fooding:true,salon:false,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/food.png')}/><Txt  title={'Fooding'} active={this.state.fooding}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: 1.2*vw, y: 0, animated: true}); this.props.tabchange('salon');this.setState({houses:false,laundry:false,bikes:false,accommodation:false,fooding:false,salon:true,fun:false,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/salon.png')}/><Txt  title={'Salon'} active={this.state.salon}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: 1.6*vw, y: 0, animated: true}); this.props.tabchange('fun');this.setState({houses:false,laundry:false,bikes:false,accommodation:false,fooding:false,salon:false,fun:true,medical:false})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/fun.png')}/><Txt  title={'Fun'} active={this.state.fun}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.refs._scrollView.scrollTo({x: 1.8*vw, y: 0, animated: true}); this.props.tabchange('medical');this.setState({houses:false,laundry:false,bikes:false,accommodation:false,fooding:false,salon:false,fun:false,medical:true})}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Img src={require('../assets/icons/medical.png')}/><Txt  title={'Medical'} active={this.state.medical}/></TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
} 
const stripe={
  display:'flex',
  flexDirection:'row',
  paddingLeft:.05*vw,
  paddingRight:.05*vw,
}
const text={
textAlign:'center',
padding:10,
paddingTop:5,
paddingBottom:15,
width:.3*vw,
color:'#999999',
fontFamily:'sans-serif',
letterSpacing:.4,
}
const sptext={
  width:.4*vw,
}
const shadowStyle = {
  width: 100,
  height: 100,
  color: "#000",
  border: 2,
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: { marginVertical: 5 },
}