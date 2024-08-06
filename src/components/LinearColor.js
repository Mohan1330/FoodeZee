import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const LinearColor = () => {
  const color1 = '#dce6f7';
  const color2 = '#FFFFD2';
  return (
    <LinearGradient
      colors={[color1, color2]}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Your components here */}
      <Text style={{color: 'white'}}>Hello, Gradient!</Text>
    </LinearGradient>
  );
};

export default LinearColor;

const styles = StyleSheet.create({});
