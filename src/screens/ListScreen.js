import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'AAA', age:13},
        {name: 'BBB', age:114},
        {name: 'CCC', age:50},
        {name: 'DDD', age:23},
        {name: 'EEE', age:8},
        {name: 'FFF', age:76},
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item})=>{
                return (
                    <Text>name: {item.name}, age: {item.age}</Text>
                )
            }}
        >
        </FlatList>
    )
}
    

const styles = StyleSheet.create({

});

export default ListScreen;