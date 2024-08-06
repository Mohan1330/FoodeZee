import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

export const Stack = (props) => {
  const {
    gap = 2,
    direction = 'vertical',
  } = props;
  const stackStyle = [
    styles.stack,
    direction === 'horizontal' && styles.horizontalStack,
    { gap },
    props?.style,
  ];

  return <Animated.View {...props} style={stackStyle}>{props?.children}</Animated.View>;
};

const styles = StyleSheet.create({
  stack: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  horizontalStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Stack;
