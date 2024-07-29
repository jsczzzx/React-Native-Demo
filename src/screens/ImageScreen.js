import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
    const name = 'Felix';
    return (
        <View>
            <ImageDetail title="A" imageSource={require("../../assets/beach.jpg")}/>
            <ImageDetail title="B" imageSource={require("../../assets/forest.jpg")}/>
            <ImageDetail title="C" imageSource={require("../../assets/mountain.jpg")}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;