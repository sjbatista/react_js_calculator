import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import CalcButton from './CalcButton';

export default function App() {

LogBox.ignoreAllLogs();

const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);
const [operatorSign, setOperatorSign] = useState("");
const [stringCalc, setStringCalc] = useState("0");

var numbers = [];

for(var i = 0; i<=9; i++){
  numbers.push(i);
}

function logicCalculator(){
  alert('lulu');
}

  return (
    <View style={styles.container}>
    <StatusBar hidden/>  
      
      <View style={styles.topo}><Text style={styles.textStringCalc}>{stringCalc}</Text></View>

      <View style={{flexDirection:'row', height:'16.6%',alignItems:'center'}}>
        <TouchableOpacity style={styles.touchAbleOpacityStyle}><Text style={styles.textSignStyle}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touchAbleOpacityStyle}><Text style={styles.textSignStyle}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touchAbleOpacityStyle}><Text style={styles.textSignStyle}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touchAbleOpacityStyle}><Text style={styles.textSignStyle}>x</Text></TouchableOpacity>
      </View>

      <View style={styles.viewNumbers}>
        {numbers.map(
          function(a){
            return(
            <CalcButton number={a} logicCalculator={logicCalculator}></CalcButton>
                  );
            }
            )
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
    
  },

  topo: {
    padding:10,
    borderBottomColor:'black',
    borderBottomWidth:2,
    height:'16.6%',
    justifyContent:'center',
    paddingLeft:20,
  },

  touchAbleOpacityStyle: {
    width:'25%', 
    backgroundColor:'rgb(20,20,20)',
    height:'100%',
    justifyContent:'center'
  },

  textSignStyle: {
    textAlign:'center',
    fontSize:24,
    color:'white'
  },

  textStringCalc : {
    fontSize:24,
    color:'white',
  },

  viewNumbers: {
    flexDirection:'row',
    flexWrap:'wrap',
    borderTopColor:'black',
    borderTopWidth:2,
    height:'66.8%'
  }
});

