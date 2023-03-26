import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>
        SigninScreen
      </Text>
      <Button title='Go to Sign Up' onPress={() => navigation.navigate('Signup')} />
      <Button title='Go to Main Flow' onPress={() => navigation.navigate('mainFlow')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
