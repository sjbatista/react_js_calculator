import { LogBox, StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function CalcButton(props) {

    LogBox.ignoreAllLogs();

    return(

        <Text>{props.number.toString()}</Text>

    );

    
}