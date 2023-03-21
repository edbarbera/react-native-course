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
        title="Go to Color Screen Demo"
        onPress={() => navigation.navigate('Color')}  
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
