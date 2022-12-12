import  React,{useEffect} from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useState } from 'react';


function Aboutscreen() {
  const[count,setCount]= React.useState(0)

  useEffect(()=>{
    alert('onces')
  },[])
  useEffect(()=>{
    alert('on rendering')
  },[count])

  useEffect(()=>{
    console.log('alwyz')
    console.log('alwyz')
    console.log('alwyz')
    console.log('alwyz')


  })


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      </View>
      
  );
}
const styles = StyleSheet.create({
  text:{
    color:'black'
  }
  
  
  
  
  
  })


export default  Aboutscreen