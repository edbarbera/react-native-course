import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      { password.length <= 5
          ? <Text>Password must be longer than 5 characters</Text>
          : null }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20
  }
});

export default TextScreen;
