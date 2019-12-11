import * as React from 'react'
import {Text,View,Dimensions,Image,ImageBackground,ScrollView,TouchableOpacity} from 'react-native'
import navigation from '../navigation';
import { AppLoading } from 'expo';
const { width, height } = Dimensions.get('window');
const vh=height
const vw=width
import {CacheManager} from "react-native-expo-image-cache";


var data={
  houses:[{
    title:"A Villa in Dheradun",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://www.pexels.com/photo/3119180/download/?search_query=&tracking_id=qgwfnwut1pze',
    images:[]
    }
  ,{
    title:"Boys PG in Dheradun",
    tagline:"have all facilities",
    location:"Ghanta Ghar  Dhreadun",
    loactionTags:["dheradun","ghanta ghar"],
    area:"1 Bhk",
    range:"2500-5000",
    ac:"No",
    frontimage:"https://www.pexels.com/photo/2805877/download/?search_query=&tracking_id=qgwfnwut1pze",
    images:[]
    },
    {
      title:"A Villa in Dheradun",
      tagline:"it is fulfilled with all facalities",
      location:"Rajpur Road Dhreadun",
      loactionTags:["dheradun","rajpur road"],
      area:"2 Bhk",
      range:"5000-10000",
      ac:"Yes",
      frontimage:'https://pythonuploadserver.herokuapp.com/upload/laundry2.jpg',
      images:[]
      }
  ],
  laundry:[{
    title:"Laundry service Dheradun",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://www.pexels.com/photo/3098796/download/?search_query=&tracking_id=qgwfnwut1pze',
    images:[]
    }
  ,{
    title:"Laundry service Dheradun",
    tagline:"have all facilities",
    location:"Ghanta Ghar  Dhreadun",
    loactionTags:["dheradun","ghanta ghar"],
    area:"1 Bhk",
    range:"2500-5000",
    ac:"No",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/laundry2.jpg',
    images:[]
    },
    {
      title:"Laundry service Dheradun",
      tagline:"it is fulfilled with all facalities",
      location:"Rajpur Road Dhreadun",
      loactionTags:["dheradun","rajpur road"],
      area:"2 Bhk",
      range:"5000-10000",
      ac:"Yes",
      frontimage:'https://pythonuploadserver.herokuapp.com/upload/laundry3.jpg',
      images:[]
      }
  ],
  bikes:[{
    title:"Bikes for rent  in Dheradun",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
    images:[]
    }
  ,{
    title:"Bikes for rent  in Dheradun",
    tagline:"have all facilities",
    location:"Ghanta Ghar  Dhreadun",
    loactionTags:["dheradun","ghanta ghar"],
    area:"1 Bhk",
    range:"2500-5000",
    ac:"No",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
    images:[]
    },
    {
      title:"Bikes for rent  in Dheradun",
      tagline:"it is fulfilled with all facalities",
      location:"Rajpur Road Dhreadun",
      loactionTags:["dheradun","rajpur road"],
      area:"2 Bhk",
      range:"5000-10000",
      ac:"Yes",
      frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
      images:[]
      }],
      accommodation:[{
        title:"accommodation",
        tagline:"it is fulfilled with all facalities",
        location:"Rajpur Road Dhreadun",
        loactionTags:["dheradun","rajpur road"],
        area:"2 Bhk",
        range:"5000-10000",
        ac:"Yes",
        frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
        images:[]
        }
      ,{
        title:"Bikes for rent  in Dheradun",
        tagline:"have all facilities",
        location:"Ghanta Ghar  Dhreadun",
        loactionTags:["dheradun","ghanta ghar"],
        area:"1 Bhk",
        range:"2500-5000",
        ac:"No",
        frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
        images:[]
        },
        {
          title:"Bikes for rent  in Dheradun",
          tagline:"it is fulfilled with all facalities",
          location:"Rajpur Road Dhreadun",
          loactionTags:["dheradun","rajpur road"],
          area:"2 Bhk",
          range:"5000-10000",
          ac:"Yes",
          frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
          images:[]
          }
  ] ,fooding:[{
    title:"Fooding",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
    images:[]
    }
  ,{
    title:"Bikes for rent  in Dheradun",
    tagline:"have all facilities",
    location:"Ghanta Ghar  Dhreadun",
    loactionTags:["dheradun","ghanta ghar"],
    area:"1 Bhk",
    range:"2500-5000",
    ac:"No",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
    images:[]
    },
    {
      title:"Bikes for rent  in Dheradun",
      tagline:"it is fulfilled with all facalities",
      location:"Rajpur Road Dhreadun",
      loactionTags:["dheradun","rajpur road"],
      area:"2 Bhk",
      range:"5000-10000",
      ac:"Yes",
      frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
      images:[]
      }
], salon:[{
        title:"Salon",
        tagline:"it is fulfilled with all facalities",
        location:"Rajpur Road Dhreadun",
        loactionTags:["dheradun","rajpur road"],
        area:"2 Bhk",
        range:"5000-10000",
        ac:"Yes",
        frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
        images:[]
        }
      ,{
        title:"Bikes for rent  in Dheradun",
        tagline:"have all facilities",
        location:"Ghanta Ghar  Dhreadun",
        loactionTags:["dheradun","ghanta ghar"],
        area:"1 Bhk",
        range:"2500-5000",
        ac:"No",
        frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
        images:[]
        },
        {
          title:"Bikes for rent  in Dheradun",
          tagline:"it is fulfilled with all facalities",
          location:"Rajpur Road Dhreadun",
          loactionTags:["dheradun","rajpur road"],
          area:"2 Bhk",
          range:"5000-10000",
          ac:"Yes",
          frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
          images:[]
          }
  ], fun:[{
    title:"Fun",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
    images:[]
    }
  ,{
    title:"Bikes for rent  in Dheradun",
    tagline:"have all facilities",
    location:"Ghanta Ghar  Dhreadun",
    loactionTags:["dheradun","ghanta ghar"],
    area:"1 Bhk",
    range:"2500-5000",
    ac:"No",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
    images:[]
    },
    {
      title:"Bikes for rent  in Dheradun",
      tagline:"it is fulfilled with all facalities",
      location:"Rajpur Road Dhreadun",
      loactionTags:["dheradun","rajpur road"],
      area:"2 Bhk",
      range:"5000-10000",
      ac:"Yes",
      frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
      images:[]
      }
], medical:[{
  title:"medical",
  tagline:"it is fulfilled with all facalities",
  location:"Rajpur Road Dhreadun",
  loactionTags:["dheradun","rajpur road"],
  area:"2 Bhk",
  range:"5000-10000",
  ac:"Yes",
  frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike1.jpg',
  images:[]
  }
,{
  title:"Bikes for rent  in Dheradun",
  tagline:"have all facilities",
  location:"Ghanta Ghar  Dhreadun",
  loactionTags:["dheradun","ghanta ghar"],
  area:"1 Bhk",
  range:"2500-5000",
  ac:"No",
  frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike2.jpg',
  images:[]
  },
  {
    title:"Bikes for rent  in Dheradun",
    tagline:"it is fulfilled with all facalities",
    location:"Rajpur Road Dhreadun",
    loactionTags:["dheradun","rajpur road"],
    area:"2 Bhk",
    range:"5000-10000",
    ac:"Yes",
    frontimage:'https://pythonuploadserver.herokuapp.com/upload/bike3.jpg',
    images:[]
    }
]
}
class CardTop extends React.Component{
  render(){
    return(
      <View style={cardTop}>
        <Image  source={require('../assets/face.jpg')} style={cardTopIcon}/>
        <View>
          <Text  style={{...cardtoptext,...cardtoptext1}}>{this.props.data.title}</Text>
          <Text style={{...cardtoptext,...cardtoptext2}}>{this.props.data.tagline}</Text>
        </View>
      </View>
    )
  }
}

class CardBottom extends React.Component{
  render(){
    return(
      <View style={cardBottom}>
      <View style={location}>
        <Image style={licon} source={require('../assets/licon.jpg')}/>
        <Text style={ltext}>{this.props.data.location}</Text>
      </View>
      <View style={list}>
        <View style={info1}>
          <Text style={sicon}>Area</Text>
          <Text style={areatxt}>{this.props.data.area}</Text>
        </View>
        <View style={info2}>
          <Text style={micon}>Range</Text>
          <Text style={rangetxt}>{this.props.data.range}</Text>
        </View>
        <View  style={info3}>
          <Text style={micon}>AC</Text>
          <Text style={rangetxt}>{this.props.data.ac}</Text>
        </View>
      </View>
      </View>
    )
  }
}
class Card extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={()=>{this.props.nav.navigate('Infopage')}}>
      <View style={{...container,backgroundColor:'white'}}>
        <CardTop data={this.props.data}/>
        
    <ImageBackground source={{uri:this.props.data.frontimage}} style={cardImage}>
        <View style={cardImage}></View>
        </ImageBackground>
      <CardBottom data={this.props.data}/>
      </View>
      </TouchableOpacity>
    )
  }
  
} 
const syncfetch = async (uri)=>{
  var resp=await fetch(uri)
  var data= await resp.json()
  return data 
  }
export default class cardcontainer extends React.Component{
  
  data3=[]
  constructor(props){
    super(props)
    this.state = {
      isReady: false,
    }
  }
  async componentDidMount(){
    var dataa=await syncfetch('https://brokerapp312.herokuapp.com/api/laundry')
    console.log(dataa)
  }
  render(){
    var data2=''
    if(this.props.tab=="houses"){
       data2=data.houses
       this.data3=data2
    }
    else if(this.props.tab=="laundry"){
       data2=data.laundry
       this.data3=data2
    }
    else if(this.props.tab=="accommodation"){
      data2=data.accommodation
      this.data3=data2
   }
   else if(this.props.tab=="fooding"){
    data2=data.fooding
    this.data3=data2
 }
 else if(this.props.tab=="salon"){
  data2=data.salon
  this.data3=data2
}
else if(this.props.tab=="fun"){
  data2=data.fun
  this.data3=data2
}
else if(this.props.tab=="medical"){
  data2=data.medical
  this.data3=data2
}
    else{
       data2=data.bikes
       this.data3=data2
    }
    if (!this.state.isReady) {
      return (
        <View style={loadingcover}>
          <Image source={require('./../assets/icons/loading.gif')} style={loading}/>
        <View style={{height:0,width:0}}>
          <AppLoading
          startAsync={this._cacheResourcesAsync.bind(this)}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
        </View>
        </View>
      ); 
    }
    return(
      <ScrollView contentContainerStyle={{ flexGrow: 1 ,backgroundColor:'#9999',paddingTop:8,paddingBottom:180}}>
      {data2.map((item,n)=><View key={n}><Card data={item} nav={this.props.nav}/></View>)}
      </ScrollView>
    )
  }
  async _cacheResourcesAsync(props) {
    imgtoload=this.data3.map(item=>{
      return(item.frontimage)
    })
    const images = imgtoload;
    const cacheImages = images.map(image => {
      return Image.prefetch(image);
    }); 
    return Promise.all(cacheImages);
  }
}
const container={
  shadowColor: '#999',
  shadowOffset: { width: 0, height: .5 },
  shadowOpacity: 0.8,
  shadowRadius: 5,
  marginBottom:8
}
const cardTop={
    display:'flex',
    flexDirection:'row',
    padding:10
}
const cardTopIcon={
  height:30,
  width:30,
  borderRadius:30,
  marginTop:0,
  marginRight:10
  }
const cardtoptext={
  lineHeight:15
}
const cardtoptext1={
 fontWeight:'bold',
 fontSize:13,
}
const cardtoptext2={
 color:'#999',
 fontSize:12
}
const cardImage={
  width:vw,
  height:220,
}
const cardBottom={
padding:15,
}
const location={
display:'flex',
flexDirection:'row',
marginBottom:15
}
const list={
flexDirection:'row',
}
const info1={
alignItems:'center',
marginRight:30,
}
const info2={
alignItems:'center',
marginRight:30,
}
const info3={
  marginRight:0
}
const licon={
height:20,
width:15,
marginRight:10,
}
const ltext={
  fontWeight:'bold'
}

const sicon={
marginBottom:5,
fontWeight:'bold'
}
const micon={
  marginBottom:5,
  fontWeight:'bold'
}
const areatxt={
color:'#999',
fontWeight:'bold',
}
const rangetxt={
color:'#999',
fontWeight:'bold',
}
const loading={
  height:150,
  width:150
}
const loadingcover={
  width:vw,
  height:.7*vh,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
}