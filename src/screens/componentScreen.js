import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { getCurrentFrame } from 'expo/build/AR';

const componentScreen = function(){
    const firstSentence = "Welcome to React Native!";
    const name = "Rajesh"

    return (
    <View>
        <Text style={styles.text}>Getting started with react-native.</Text> 
        <Text style={{fontSize:20}}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 45, 
      color: '#333',

    },
    divstyle:{
        backgroundColor: 'black'
    }
  });

export default componentScreen;




