import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Card, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ModalScreen from './ModalScreen';

const GenderSelectionScreen = () => {
  const [value, setValue] = useState('first');
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Card
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 250,
          width: 250,
        }}>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View
            style={{
              // marginTop: 400,
              // padding:20,
              backgroundColor: '#B4E7F2',
              // backgroundColor:'#FFD4E2',
              borderRadius: 11,
              gap: 45,
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Gilroy-Light', fontSize: 15, padding: 10}}>
              Male
            </Text>

            <RadioButton value="first" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              backgroundColor: '#FFCADA',
              borderRadius: 11,
              gap: 30,
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Gilroy-Light', fontSize: 15, padding: 10}}>
              Female
            </Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
      </Card>
      <View style={{marginTop: 25}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 17,
          }}
          onPress={() => navigation.navigate('HomeScreen')}>
          {/* onPress={() => navigation.navigate('ModalScreen')}> */}

          <Text
            style={{color: '#fff', fontSize: 17, fontFamily: 'Poppins-Bold'}}>
            Continue
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 17,
          }}
          // onPress={() => navigation.navigate('HomeScreen')}>
          onPress={() => navigation.navigate('HomeScreen2')}>
          <Text
            style={{color: '#fff', fontSize: 17, fontFamily: 'Poppins-Bold'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderSelectionScreen;
