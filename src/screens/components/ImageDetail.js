import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    const name = 'Felix';
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageDetail;