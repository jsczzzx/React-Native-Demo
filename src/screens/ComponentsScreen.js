import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const name = 'Felix';
    return (
        <View>
            <Text style={styles.textStyle1}>Getting started with React Native!</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    )
}
    

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;