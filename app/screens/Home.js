import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import login from '../image/login.jpg';
import email from '../image/email.png';
import pas from '../image/pas.png';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  const [text, onChangeText] = React.useState('');
  const [pass, onChangepass] = React.useState('');
  const [count, setCount] = React.useState(0);
  const navigation = useNavigation()
  console.log({count});

  const handle = () => {
    console.log(text, pass);
    let userMail = 'admin@gmail.com'
    let password = '1235'
    if (text === userMail && pass === password) {
      navigation.navigate('About')
    }
    else {
      alert('paa g anny o')
      setCount(count+1)
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      if(count ==3){

        setCount(0)
      }
    },5000)
  },[count])

  
  return (
    <ScrollView>
      <View style={{ flex: 1,paddingHorizontal:20 }}>
        <View >
          <Image style={styles.pic} source={login} />
          {/* <Icon name='clipboard' color={'red'} size={30} /> */}
          
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={{color:'black'}}>go to about</Text>
        </TouchableOpacity>

          <Text style={styles.mail}>Email</Text>
        <View style={{borderWidth:1,flexDirection:'row',borderRadius:10,}}>
          {/* <Image style={{ height: 10, width: 20,alignSelf: 'center', }} source={email} /> */}
          <Icon style={styles.iccon} name='mail' color={'black'} size={25}></Icon>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder="ENTER MAIL..."
            placeholderTextColor={"black"}
            keyboardType={'email-address'}
          />
          


        </View>
        <Text style={styles.password}>Password</Text>

        <View style={styles.input}>
        {/* <Image style={ styles.key} source={pas} /> */}
        <Icon style={styles.ic} name='key'></Icon>
        <TextInput
       
          onChangeText={onChangepass}
          value={pass}
          placeholder="ENTER PASSWORD..."
          placeholderTextColor={"black"}
          secureTextEntry={true}

        />
        </View>
        <Text style={styles.forget}>forgotten password</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handle}
          disabled={count == 3 ? true:false}
          


        >
          <Text style={styles.login} > LOGIN </Text>

        </TouchableOpacity>

      </View>
    </ScrollView >
  )

  
}

const styles = StyleSheet.create({
  input: {
  
    width: '100%',
    borderWidth:1,
    margin: 1,
    //marginTop:,
    paddingHorizontal:10,
    //marginLeft: 20,
    borderRadius: 10,
    color: "black",
    alignSelf: 'center',
    flexDirection:'row'

  },
  mail: {
    fontSize: 15,
    width: 100,
    marginTop: 50,
    color: 'black',
    marginLeft: 15,



  },
  password: {
    fontSize: 15,
    width: 100,
    marginTop: 50,
    color: 'black',
    marginLeft: 15,

  },
  pic: {
    marginTop: 40,
    // marginLeft: 45,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignSelf: 'center',

  },
  forget: {
    color: 'black',
    // width: "150%",
    //marginLeft: 192,
    marginTop: 10,
    alignSelf: 'flex-end',
    paddingRight: 30

  },

  login: {
    backgroundColor: 'black',
    //SmarginRight:100,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,
    marginTop: 10,
    width: "85%",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    color: 'white',
    padding: 10


  },
  key:{
    height:15,
    width:15,
    alignSelf:'center'

  },
  iccon:{
    padding:10
  },
  ic:{
    color:'black',
    size: 45,
    padding:10,
    flexDirection:'row'

  }
 
});

export default HomeScreen
