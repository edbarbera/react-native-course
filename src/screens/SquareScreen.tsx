import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);

  console.log(red, green, blue)

  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => setRed(red + INCREMENT)}
        onDecrease={() => setRed(red - INCREMENT)}
      />
      <ColourCounter
        colour="Green"
        onIncrease={() => setGreen(green + INCREMENT)}
        onDecrease={() => setGreen(green - INCREMENT)}
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() => setBlue(blue + INCREMENT)}
        onDecrease={() => setBlue(blue - INCREMENT)}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
