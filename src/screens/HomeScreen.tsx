import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

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
      <Button 
        title="Go to Image Screen Demo"
        onPress={() => navigation.navigate('Image')}  
      />
      <Button 
        title="Go to Counter Screen Demo"
        onPress={() => navigation.navigate('Counter')}  
      />
      <Button 
        title="Go to Colour Screen Demo"
        onPress={() => navigation.navigate('Colour')}  
      />
      <Button 
        title="Go to Colour Square Demo"
        onPress={() => navigation.navigate('ColourSquare')}  
      />
      <Button 
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate('Text')}  
      />
      <Button 
        title="Go to Box Screen Demo"
        onPress={() => navigation.navigate('Box')}  
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
