import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the Home Screen</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}  
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}  
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
