import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => props.navigation.navigate('Components')}
          title="Components"
        />
        <Button
          onPress={() => props.navigation.navigate('List')}
          title="List"
        />
        <Button
          onPress={() => props.navigation.navigate('Image')}
          title="Image"
        />
        <Button
          onPress={() => props.navigation.navigate('Map')}
          title="Map"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%',
    flex: 0.5,
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
