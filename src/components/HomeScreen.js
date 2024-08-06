import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { openFirstActionSheet } from '../redux/action';

const HomeScreen = ({ openFirstActionSheet }) => {
  return (
    <View>
      <TouchableOpacity onPress={openFirstActionSheet}>
        <Text>Open First Action Sheet</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  openFirstActionSheet,
};

export default connect(null, mapDispatchToProps)(HomeScreen);