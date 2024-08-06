import React, {Component, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {IconButton} from 'react-native-paper';
import {TimePicker} from 'react-native-paper-dates';

const DatePickerScreen = props => {
  const [selectedDate, setSelectedDate] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];

  const handleDayPress = day => {
    if (props?.onChangeDate) {
      props?.onChangeDate(day);
    }
    setSelectedDate(day.dateString);
  };
  useEffect(() => {}, [selectedDate]);

  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = {
      selected: true,
      marked: true,
      selectedColor: 'grey',
      dotColor: 'grey',
      borderRadius: 1,
    };
  } else {
    markedDates[currentDate] = {
      selected: true,
      marked: true,
      selectedColor: 'grey',
      dotColor: 'grey',
      borderRadius: 1,
    };
  }

  const [dateTime, setDateTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleConfirm = selectedDate => {
    setOpen(false);
    setDateTime(selectedDate);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Calendar
          hideExtraDays={true}
          minDate={currentDate}
          min
          style={{
            borderRadius: 10,
            margin: 25,
          }}
          theme={{
            calendarBackground: '#ffff',
            textDayFontFamily: 'Gilroy_Light',
            textDayFontSize: 15,
            textMonthFontFamily: 'Gilroy_Medium',
            textDayHeaderFontFamily: 'Gilroy_Bold',
            textDayHeaderFontSize: 14,
            monthTextColor: 'black',
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: 'red',
              },
              dayTextAtIndex1: {
                color: '#000',
              },
              dayTextAtIndex2: {
                color: '#000',
              },
              dayTextAtIndex3: {
                color: '#000',
              },
              dayTextAtIndex4: {
                color: '#000',
              },
              dayTextAtIndex5: {
                color: '#000',
              },
              dayTextAtIndex6: {
                color: 'red',
              },
            },
          }}
          onDayPress={handleDayPress}
          markedDates={markedDates}
        />
      </View>
      {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <IconButton
          icon="repeat"
          size={50}
          onPress={() => console.log('Pressed')}
        />
      </View> */}
    </View>
  );
};

export default DatePickerScreen;
