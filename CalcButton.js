import { LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function CalcButton(props) {

    LogBox.ignoreAllLogs();

    return(
        
        <View style={{backgroundColor:'black', borderColor:'white', borderWidth:1, width:'33.3%', height:'25%'}}>
        <TouchableOpacity onPress={() => props.logicCalculator(props.number)} style={{width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}}>    
        <Text style={{ fontSize:29, color:'white',}}>
            {props.number.toString()}
        </Text>
        </TouchableOpacity>

        </View>
        

    );

    
}