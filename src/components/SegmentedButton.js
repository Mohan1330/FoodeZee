import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';

const SegmentedButton = props => {
  const buttoncolor = props.selectedTime;
  // console.log("selectedTime",buttoncolor);
  const [selected, setSelected] = useState(0);

  // const [startdate, setstartDate] = useState(new Date());
  // const [enddate, setendDate] = useState(new Date());
  // const [openstartdate, setOpenStartdate] = useState(false);
  // const [openenddate, setOpenEnddate] = useState(false);

  // function showStartTime() {
  //   if (selected == 0) {
  //     return (
  //       <View>
  //         <Text>Do it from {formattedStartTime} of the day.</Text>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <View>
  //         <Text>
  //           Do it from {formattedStartTime} to {formattedEndTime} of the day.
  //         </Text>
  //       </View>
  //     );
  //   }
  // }

  // const onDismiss = React.useCallback(() => {
  //   closeModal();
  // }, []);

  // const onConfirm = React.useCallback(date => {
  //   setOpenStartdate(false);
  //   setstartDate(date);
  // }, []);

  // function convertTo12HourFormat(time24) {
  //   const [hours, minutes] = time24.split(':');
  //   const parsedHours = parseInt(hours, 10);
  //   const period = parsedHours >= 12 ? 'PM' : 'AM';
  //   const convertedHours = (parsedHours % 12 || 12).toString(); // Convert 0 to 12
  //   return `${convertedHours}:${minutes} ${period}`;
  // }

  // const formatTime = time => convertTo12HourFormat(time.toLocaleTimeString());
  // const formattedStartTime = formatTime(startdate);
  // const formattedEndTime = formatTime(enddate);

  // const handleGo = () => {
  //   const time = formattedStartTime
    
  //   // actionSheetRef.current?.setModalVisible(false)
  // }

  // useEffect(() => {
  //   if (selected == 0) {
  //     setOpenStartdate(true);
  //     setOpenEnddate(false);
  //   } else {
  //     setOpenStartdate(false);
  //     setOpenEnddate(true);
  //   }
  //   Alert.alert("h")
  // }, [selected]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '80%',
          height: 50,
          //   borderWidth: 0.5,
          alignSelf: 'center',
          backgroundColor: 'lightgrey',
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          //   paddingLeft: 5,
          //   paddingRight: 5,
          gap: 97.8,
        }}>
        <TouchableOpacity
          style={{
            width: '230%',
            height: '98%',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selected == 0 ? buttoncolor : 'lightgrey',
          }}
          onPress={() => {
            setSelected(0);
          }}>
          <Text
            style={{
              color: selected == 0 ? '#000' : 'grey',
              fontSize: 15,
              fontFamily: 'Gilroy_Semibold',
            }}>
            Start Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '250%',
            height: '98%',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selected == 1 ? buttoncolor : 'lightgrey',
          }}
          onPress={() => {
            setSelected(1);
          }}>
          <Text
            style={{
              color: selected == 1 ? '#000' : 'grey',
              fontSize: 15,
              fontFamily: 'Gilroy_Semibold',
            }}>
            End Time
          </Text>
        </TouchableOpacity>
      </View>
      {/* {showStartTime()}

      <DatePicker
        modal
        mode="time"
        open={openstartdate}
        date={startdate}
        onConfirm={onConfirm}
        onCancel={() => {
          setOpenStartdate(false);
        }}
      />
      <DatePicker
        modal
        mode="time"
        open={openenddate}
        date={enddate}
        onConfirm={date => {
          setOpenEnddate(false);
          setendDate(date);
        }}
        onCancel={() => {
          setOpenEnddate(false);
        }}
      /> */}
      
    </View>
  );
};

export default SegmentedButton;

const styles = StyleSheet.create({});
