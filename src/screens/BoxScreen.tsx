import React from 'react';
import { StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box1: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    alignSelf: 'flex-start'
  },
  box2: {

    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  box3: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    position: 'absolute'
  }
});

export default BoxScreen;
