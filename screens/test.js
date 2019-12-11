import * as React from 'react';
import { Text, View,Dimensions ,ScrollView} from 'react-native';
const { width, height } = Dimensions.get('window');
const vh=height
const vw=width
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      color:'red'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      color:'orange'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      color:'skyblue'
    },
  ];
export default class App extends React.Component{
    render(){
        return(
            <ScrollView
            horizontal 
            showsHorizontalScrollIndicator={false} 
            scrollEventThrottle={10} 
            pagingEnabled 
          >
              
                  {DATA.map(item=>{return(<View style={{height:vh,width:vw,backgroundColor:item.color}}><Text>{item.title}</Text></View>)})}
              
          </ScrollView>
        )
    }
}