import  React,{useEffect} from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { setTheme } from '../slices/themeSlice';
import { useTheme } from '@react-navigation/native';


function Aboutscreen() {
  const[count,setCount]= React.useState(0)
  const[isDark,setIsDark]=React.useState(false)
  

  useEffect(()=>{
   // alert('onces')
  },[])
  useEffect(()=>{
   // alert('on rendering')
  },[count])

  // useEffect(()=>{
  //   console.log('alwyz')
  //   console.log('alwyz')
  //   console.log('alwyz')
  //   console.log('alwyz')


  // })

 const isDarkTheme= useSelector((data)=>data.theme.theme)
  console.log(isDarkTheme);
 
  const dispatch = useDispatch()


  return (
    <View style={isDarkTheme? styles.darkMain : styles.lightMain }>
        {/* <Text style={{color:'black'}}>about screen</Text> */}

        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={{color:'black',fontSize:18}}>{count}</Text>
        <Text style={styles.text}>Press me!</Text>
      </TouchableOpacity>

      
      <Text style={isDark? styles.theme: styles.lightTheme}>light</Text>
      

      <TouchableOpacity onPress={()=>dispatch(setTheme())}>
        <Text style={{fontSize:30 ,color:isDarkTheme?'green':'red'}}>hiiiiii</Text>
        
          
      </TouchableOpacity>
      </View>
      
  );
}
const styles = StyleSheet.create({
  text:{
    color:'black'
  },
  theme:{

    color:'black'
  },
  lightTheme:{
    color:'white'
  },
  lightMain:{
    flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'
  },
  darkMain:{
    flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black'
  }

  
  
  
  
  
  })


export default  Aboutscreen