import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Tabs from '../components/tabs'
import CardContainer from '../components/cardcontainer'

export default class App extends React.Component {
  state={
    tabs:'houses'
  }
  statee(txt){
      this.setState({tabs:txt})
  }
  render() {
    const { navigation } = this.props;
    return (
    <View>
      <View style={notificationbar}></View>
      <View style={nav}>
        <TouchableOpacity>
        <View>
          <Image source={require('../assets/face.jpg')}  style={dropdownicon}/>
        </View>
        </TouchableOpacity>
        <Text  style={{color:'white',marginTop:0,fontSize:20}}>Broker</Text>
        <TouchableOpacity>
        <View>
          <Image source={require('../assets/filter.png')}  style={filtericon}/>
        </View>
        </TouchableOpacity>
      </View>
      <Tabs tabchange={this.statee.bind(this)}/>
      <CardContainer tab={this.state.tabs} nav={navigation} />
    </View>
    );
  }
}

const nav={
  display:'flex',
  justifyContent:'space-between',
  backgroundColor:'#252525',
  paddingLeft:15,
  paddingRight:20,
  display:'flex',
  flexDirection:'row',
  height:40,
}
const dropdownicon={
  height:35,
  width:35,
  borderRadius:30,
  marginTop:-5
  }
const filtericon={
   height:27,
  width:27,
  marginTop:0,
}
const notificationbar={
  height:50,
  backgroundColor:'#252525'
}