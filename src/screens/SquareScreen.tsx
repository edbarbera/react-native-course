import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const INCREMENT = 10;

type ReducerState = {
  red: number
  green: number
  blue: number
};

type ReducerAction = {
  type: string
  payload: number
}

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0)
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0)
      ? state
      : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
      ? state
      : { ...state, blue: state.blue + action.payload };
    default: 
      return state;
  };
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;


  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => dispatch({ type: 'change_red', payload: INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -INCREMENT })}
      />
      <ColourCounter
        colour="Green"
        onIncrease={() => dispatch({ type: 'change_green', payload: INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -INCREMENT })}
      />
      <ColourCounter
        colour="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -INCREMENT })}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
