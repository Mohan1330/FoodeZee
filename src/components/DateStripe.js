import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../theme';
import CalendarStrip from 'react-native-calendar-strip';
import {scale} from 'react-native-size-matters';
import moment from 'moment';

const DateStripe = ({selectedDate, onDateSelected}) => {
  const [visible, setVisible] = useState(false);
  const formattedDate = new Date()
    .toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-');

  const markedDatesArray = [
    {
      date: moment(formattedDate),
      dots: [
        {
          color: 'blue',
        },
      ],
    },
  ];

  

  return (
    <View>
      <CalendarStrip
        selectedDate={selectedDate}
        calendarAnimation={{type: 'sequence', duration: 0}}
        scrollable
        // useIsoWeekday={false}
        showMonth={false}
        useNativeDriver={false}
        onDateSelected={onDateSelected}
        // highlightDateNumberStyle={[styles.numberStyle, { color: '#ffff', backgroundColor: 'blue' }]}
        highlightDateNumberStyle={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 14,
          marginTop: 4,
          justifyContent: 'center',
        }}
        upperCaseDays={false}
        highlightDateNameStyle={[
          styles.nameStyle,
          {
            color: 'blue',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            width: 40,
          },
        ]}
        // highlightDateNameStyle={{
        //   color: 'red',
        //   // fontFamily: 'Roboto-Medium',
        //   fontSize: 11,
        //   marginHorizontal: 1.5,
        //   padding: 5.5,
        //   borderTopEndRadius: 20,
        //   borderTopLeftRadius: 20,
        //   borderTopRightRadius: 20,
        // }}
        // dateNumberStyle={[styles.numberStyle, {backgroundColor: 'blue'}]}
        // dateNumberStyle={{color: '#000', fontWeight: 'bold', fontSize: 18,backgroundColor: 'lightgrey',}}
        dateNumberStyle={{
          backgroundColor: 'pink',
          // borderColor:'lightpink',
          borderColor:'black',
          borderWidth:1,
          borderRadius: 35,
          padding: 6,
          // color:'#fff',
          fontSize:14,
          // marginHorizontal: 10,
          minWidth: 35,
          minHeight: 35,
        }}
        dateNameStyle={{
          color: 'red',
          fontFamily:'Gilroy_Medium',
          // backgroundColor:'lightgrey',
          fontSize: 11,
          marginHorizontal: 1.5,
          padding: 5.5,
          borderTopEndRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        dayContainerStyle={{
          // backgroundColor: 'orange',
          marginTop: 10,
          paddingVertical: 18,
          height: 75,
          color: 'green',
          width: 43,
        }}
        
        // dateNameStyle={[
        //   styles.nameStyle,
        //   {backgroundColor: 'red', textTransform: 'capitalize'},
        // ]}
        leftSelector={<View />}
        rightSelector={<View />}
        scrollerPaging={true}
        style={{
          width: '100%',
          height: 100,
          alignSelf: 'center',
          // backgroundColor:'pink'
        }}
        // style={{
        //   width: '100%',
        //   height: '100%',
        //   alignSelf: 'center',
        //   paddingHorizontal: 10,
        //   // paddingBottom: 10,
        //   borderRadius: 40,
        // }}
        highlightDateNumberContainerStyle={{
          backgroundColor: 'blue',
          borderRadius: 35,
          padding: 4,
          marginHorizontal: 10,
          minWidth: 35,
          minHeight: 35,
        }}
        highlightDateContainerStyle={{
          backgroundColor: 'orange',
          marginTop: 10,
          paddingVertical: 18,
          height: 75,
          color: 'green',
          width: 43,
        }}
        dayComponentHeight={100}
        disabledDateNameStyle={{color: 'grey'}}
        disabledDateNumberStyle={{color: 'grey'}}
        maxDayComponentSize={100}
        markedDates={markedDatesArray}
        markedDatesStyle={{height: 2.5, width: 12}}
      />
    </View>
  );
};

export default DateStripe;

const styles = StyleSheet.create({
  nameStyle: {
    // color: '#000',
    color: 'green',
    fontSize: 12,
    width: 43,
    height: 28,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 5,
  },
  numberStyle: {
    // color: '#000',
    color: 'red',
    // borderRadius:40,
    fontSize: 15,
    width: 43,
    height: 40,
    // borderTopLeftRadius: 2,
    // borderTopRightRadius: 2,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // marginHorizontal: 8,
    // minHeight:28,
    // maxHeight:28,
    textAlign: 'center',
    // alignSelf: "center",
    padding: 4,
  },
});
