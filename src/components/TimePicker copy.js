// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import {Button, SegmentedButtons} from 'react-native-paper';
// const TimePicker = () => {
//   const [startTime, setStartTime] = useState(new Date());
//   const [endTime, setEndTime] = useState(new Date());
//   const handleStartConfirm = selectedDate => {
//     setStartTime(selectedDate);
//     // Calculate the end time (one minute after the selected start time)
//     const oneMinuteLater = new Date(selectedDate.getTime() + 60000);
//     setEndTime(oneMinuteLater);
//   };

//   const [tabIndex, setTabIndex] = useState(0);

//   const handleEndConfirm = selectedDate => {
//     setEndTime(selectedDate);
//     // console.log('formattedStartTime1', formattedStartTime);
//     // console.log('formattedEndTime1', formattedEndTime);

//     if (formattedStartTime > formattedEndTime) {
//       Alert.alert('ha');
//     } else {
//       ToastAndroid.show('please select vaild time', ToastAndroid.SHORT);
//     }
//   };
//   useEffect(() => {}, [startTime, endTime]);

//   const handleCancel = () => {
//     // Handle cancel if needed
//   };

//   function convertTo12HourFormat(time24) {
//     const [hours, minutes] = time24.split(':');
//     const parsedHours = parseInt(hours, 10);
//     const period = parsedHours >= 12 ? 'PM' : 'AM';
//     const convertedHours = (parsedHours % 12 || 12).toString(); // Convert 0 to 12
//     return `${convertedHours}:${minutes} ${period}`;
//   }
//   function TimePickerComponent({
//     label,
//     selectedTime,
//     onConfirm,
//     onCancel,
//     formatTime,
//   }) {
// const [open, setOpen] = useState(false);

//     const handlePress = () => {
//       setOpen(true);
//     };

//     const handleConfirmInternal = selectedDate => {
//       setOpen(false);
//       onConfirm(selectedDate);
//     };

//     const handleCancelInternal = () => {
//       setOpen(false);
//       onCancel();
//     };

//     const convertedTime = formatTime(selectedTime);

//     return (
//       <View
//         style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//           }}>
//           <TouchableOpacity
//             onPress={handlePress}
//             style={{
//               backgroundColor: 'red',
//               padding: 10,
//               justifyContent: 'center',
//               alignItems: 'center',

//               borderRadius: 20,
//               width: '50%',
//             }}>
//             <Text style={{color: 'black'}}>{`Open ${label}`}</Text>
//           </TouchableOpacity>
//           {/* <SegmentedControl
//             containerMargin={16}
//             segments={['Label 1', 'Label 2']}
//             onChange={index => setTabIndex(index)}
//             currentIndex={tabIndex}
//           /> */}
//         </View>
//         {/* <Button  buttonColor='black' textColor='white' onPress={handlePress} /> */}

//         <DatePicker
//           modal
//           open={open}
//           date={selectedTime}
//           onConfirm={handleConfirmInternal}
//           onCancel={handleCancelInternal}
//           mode="time"
//           is24hour={false}
//         />
//         {/* <Text>
//           {label} Time (12-hour format): {convertedTime}
//         </Text> */}
//       </View>
//     );
//   }

//   const formatTime = time => convertTo12HourFormat(time.toLocaleTimeString());
//   const formattedStartTime = formatTime(startTime);
//   const formattedEndTime = formatTime(endTime);

//   console.log('formattedStartTime', formattedStartTime);
//   console.log('formattedEndTime', formattedEndTime);

//   return (
//     <View>
//       <TimePickerComponent
//         label="Start"
//         selectedTime={startTime}
//         onConfirm={handleStartConfirm}
//         onCancel={handleCancel}
//         formatTime={formatTime}
//       />
//       <TimePickerComponent
//         label="End"
//         selectedTime={endTime}
//         onConfirm={handleEndConfirm}
//         onCancel={handleCancel}
//         formatTime={formatTime}
//       />
//       <Text>
//         Do it from {formattedStartTime} to {formattedEndTime} of the day.
//       </Text>
//       <View style={{backgroundColor: 'green', flex: 1}}>
//         {/* <Segmented/> */}
//       </View>
//     </View>
//   );
// };

// export default TimePicker;

// import React, {useState} from 'react';
// import { Text } from 'react-native';
// import DatePicker from 'react-native-date-picker';
// // import {DatePickerModal} from 'react-native-paper-dates';
// const useDateTimePicker = () => {
//   const [date, setDate] = React.useState(new Date());
//   const [open, setOpen] = useState(false);

//   const openModal = () => {
//     setOpen(true);
//   };
//   const closeModal = () => {
//     setOpen(false);
//   };

//   const onDismiss = React.useCallback(() => {
//     closeModal();
//   }, []);

//   const onConfirm = React.useCallback(date => {
//     console.log(date);
//     closeModal();
//     setDate(date);
//   }, []);

//   const DateTimePickerComponent = () => (
//     <View>
//       <DatePicker
//           modal
//           open={open}
//           date={selectedTime}
//           onConfirm={handleConfirmInternal}
//           onCancel={handleCancelInternal}
//           mode="time"
//           is24hour={false}
//         />
//       {/* <TimePickerComponent
//         label="End"
//         selectedTime={endTime}
//         onConfirm={handleEndConfirm}
//         onCancel={handleCancel}
//         formatTime={formatTime}
//       /> */}
//       <Text>
//         Do it from {formattedStartTime} to {formattedEndTime} of the day.
//       </Text>
//       <View style={{backgroundColor: 'green', flex: 1}}>
//       </View>
//     </View>
//   );

//   return {
//     date,
//     setDate,
//     DatePicker: DateTimePickerComponent,
//     openModal: openModal,
//     closeModal: closeModal,
//   };
// };

// export default useDateTimePicker;

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TimerPickerModal} from 'react-native-timer-picker';
import {LinearGradient} from 'react-native-linear-gradient';
import dayjs from 'dayjs';

const TimerPickerModal = (props, ref) => {
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(null);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const currentHourMinute = moment().format('HH:mm');
  //       setCurrentTime(currentHourMinute);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  const handleConfirm = pickedDuration => {
    const selectedDateTime = new Date();
    selectedDateTime.setHours(pickedDuration.hours || 0);
    selectedDateTime.setMinutes(pickedDuration.minutes || 0);
    setAlarmString(dayjs(selectedDateTime).format('hh:mm A'));
    setSelectedTime(selectedDateTime);
    setShowPicker(false);
  };

  return (
    <>
      <View
        style={{
          backgroundColor: '#F1F1F1',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#202020'}}>
          {alarmString !== null ? 'Alarm set for' : 'No alarm set'}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setShowPicker(true);
          }}>
          <View style={{alignItems: 'center'}}>
            {alarmString !== null ? (
              <Text style={{color: '#202020', fontSize: 48}}>
                {alarmString}
              </Text>
            ) : null}
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 16,
                  overflow: 'hidden',
                  borderColor: '#8C8C8C',
                  color: '#8C8C8C',
                }}>
                Set Alarm 🔔
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TimerPickerModal
          visible={showPicker}
          setIsVisible={setShowPicker}
          selectedDate={selectedTime} // Pass selectedTime as initial value
          onConfirm={handleConfirm}
          modalTitle="Set Alarm"
          onCancel={() => setShowPicker(false)}
          initialHours={selectedTime.getHours() || 0} // Handle the case where selectedTime might be undefined
          initialMinutes={selectedTime.getMinutes() || 0} // Handle the case where selectedTime might be undefined
          closeOnOverlayPress
          hideSeconds
          use12HourPicker
          LinearGradient={LinearGradient}
          styles={{
            theme: 'dark',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#F1F1F1',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#202020', fontSize: 48}}>{currentTime}</Text>
      </View>
    </>
  );
};

export default React.forwardRef(TimerPickerModal);
// const DATA = [
//   {
//     title: 'Rise and shining morning',
//     description: 'Goodmorning',
//     data: [
//       {
//         label: 'Yoga',
//         icon: icons.routine_habit_icon_Yoga,
//         backgroundColor: '#EADFF5',
//       },
//       {
//         label: 'Drink water',
//         icon: icons.routine_habit_icon_DrinkWater,
//         backgroundColor: '#F7E6F5',
//       },
//       {
//         label: 'Brush teeth',
//         icon: icons.routine_habit_icon_Brushyourteeth,
//         backgroundColor: '#F7F7F0',
//       },
//       {
//         label: 'Check weather',
//         icon: icons.routine_habit_icon_Checkwether,
//         backgroundColor: '#FFFDFA',
//       },
//       {
//         label: 'Check weight',
//         icon: icons.routine_habit_icon_Checkyourweight,
//         backgroundColor: '#E8FAE4',
//       },
//       {
//         label: 'Cofee',
//         icon: icons.routine_habit_icon_Coffee,
//         backgroundColor: '#D5F2EE',
//       },
//       {
//         label: 'Drink tea',
//         icon: icons.routine_habit_icon_Matchadrink,
//         backgroundColor: '#B2BDF0',
//       },
//       {
//         label: 'Healthy breakfast',
//         icon: icons.routine_habit_icon_Friedeggs,
//         backgroundColor: '#BACDF5',
//       },
//       {
//         label: 'Meditate',
//         icon: icons.routine_habit_icon_Meditate,
//         backgroundColor: '#F5EDE4',
//       },
//       {
//         label: 'Pray',
//         icon: icons.routine_habit_icon_Pray,
//         backgroundColor: '#F5F5F2',
//       },
//       {
//         label: 'Take medicine',
//         icon: icons.routine_habit_icon_Takemedicine,
//         backgroundColor: '#C9EDF0',
//       },
//       {
//         label: 'Take vitiamins',
//         icon: icons.routine_habit_icon_Takevitamins,
//         backgroundColor: '#F5EDE4',
//       },
//       {
//         label: 'Workout',
//         icon: icons.routine_habit_icon_Workout,
//         backgroundColor: '#B5E2E6',
//       },
//     ],
//   },
//   {
//     title: 'Clean my circle',
//     description: 'Cleaning',
//     data: [
//       {
//         label: 'Change the sheets',
//         icon: icons.routine_habit_icon_Changesheets,
//         backgroundColor: '#B1BE8A',
//       },
//       {
//         label: 'Clean TV',
//         icon: icons.routine_habit_icon_CleanTV,
//         backgroundColor: '#F4E7B4',
//       },
//       {
//         label: 'Clean my Bathroom',
//         icon: icons.routine_habit_icon_Cleanmybathroom,
//         backgroundColor: '#F9F8E9',
//       },
//       {
//         label: 'Clean my car',
//         icon: icons.routine_habit_icon_Cleanmycar,
//         backgroundColor: '#F6E7E7',
//       },
//       {
//         label: 'Clean my kitchen',
//         icon: icons.routine_habit_icon_Cleanmykitchen,
//         backgroundColor: '#F0D5D5',
//       },
//       {
//         label: 'Clean sink & toilet',
//         icon: icons.routine_habit_icon_Cleantoilets,
//         backgroundColor: '#EBC0C9',
//       },
//       {
//         label: 'Do gradening',
//         icon: icons.routine_habit_icon_Dogardening,
//         backgroundColor: '#D1E6D5',
//       },
//       {
//         label: 'Do the laundry',
//         icon: icons.routine_habit_icon_Throwawayoldclothes,
//         backgroundColor: '#F5F8F3',
//       },
//       {
//         label: 'Take the trash out',
//         icon: icons.routine_habit_icon_Refusetowaste,
//         backgroundColor: '#F3DFAD',
//       },
//     ],
//   },
//   {
//     title: 'Body care',
//     description: 'Care Your Body',
//     data: [
//       {
//         label: 'Body lotion',
//         icon: icons.routine_habit_icon_Moisturize,
//         backgroundColor: '#C5D8AB',
//       },
//       {
//         label: 'Bubble bath',
//         icon: icons.routine_habit_icon_Addbathsalts,
//         backgroundColor: '#8CBDBD',
//       },
//       {
//         label: 'Deep breath',
//         icon: icons.routine_habit_icon_Deepbreath,
//         backgroundColor: '#DCD6FF',
//       },
//       {
//         label: 'Foot bath',
//         icon: icons.routine_habit_icon_Footbath,
//         backgroundColor: '#D6F0FF',
//       },
//       {
//         label: 'Hair removal',
//         icon: icons.routine_habit_icon_Hairremoval,
//         backgroundColor: '#DEFFEF',
//       },
//       {
//         label: 'Wash hands',
//         icon: icons.routine_habit_icon_Facecream,
//         backgroundColor: '#FFFAF0',
//       },
//     ],
//   },
//   {
//     title: 'Learn and think ',
//     description: 'Innovative',
//     data: [
//       {
//         label: 'Check your mail',
//         icon: icons.routine_habit_icon_Checkyouremail,
//         backgroundColor: '#D5F2EE',
//       },
//       {
//         label: 'Go to school',
//         icon: icons.routine_habit_icon_Gotoschool,
//         backgroundColor: '#E8FAE4',
//       },
//       {
//         label: 'Go to museum',
//         icon: icons.routine_habit_icon_Gotomuseum,
//         backgroundColor: '#FFFDFA',
//       },
//       {
//         label: 'Go to work',
//         icon: icons.routine_habit_icon_Gotowork,
//         backgroundColor: '#F7F7F0',
//       },
//       {
//         label: 'Mind game',
//         icon: icons.routine_habit_icon_Mindgame,
//         backgroundColor: '#F7E6F5',
//       },
//       {
//         label: 'Paint or draw',
//         icon: icons.routine_habit_icon_Useillustrations,
//         backgroundColor: '#EADFF5',
//       },
//       {
//         label: 'practice a new  skill',
//         icon: icons.routine_habit_icon_Practiceanewskill,
//         backgroundColor: '#B5E2E6',
//       },
//       {
//         label: 'Read newspaper',
//         icon: icons.routine_habit_icon_Readnewspaper,
//         backgroundColor: '#E8FAE4',
//       },
//       {
//         label: 'Reflect on my day',
//         icon: icons.routine_habit_icon_Reflectonmyday,
//         backgroundColor: '#F5F5F2',
//       },
//       {
//         label: 'Try something new',
//         icon: icons.routine_habit_icon_Trysomethingnew,
//         backgroundColor: '#BACDF5',
//       },
//     ],
//   },
//   {
//     title: 'Grow your health ',
//     description: 'Health',
//     data: [
//       {
//         label: 'Deep breath',
//         icon: icons.routine_habit_icon_Lunges,
//         backgroundColor: '#B2BDF0',
//       },
//       {
//         label: 'Drink water',
//         icon: icons.routine_habit_icon_DrinkWater,
//         backgroundColor: '#EBC0C9',
//       },
//       {
//         label: 'Meditate',
//         icon: icons.routine_habit_icon_Meditate,
//         backgroundColor: '#F0D5D5',
//       },
//       {
//         label: 'Ride a bike',
//         icon: icons.routine_habit_icon_Ride,
//         backgroundColor: '#F6E7E7',
//       },
//       {
//         label: 'Running',
//         icon: icons.routine_habit_icon_Run,
//         backgroundColor: '#F9F8FE',
//       },
//       {
//         label: 'Stretch',
//         icon: icons.routine_habit_icon_Stretch,
//         backgroundColor: '#F4E7B4',
//       },
//       {
//         label: 'Swimming',
//         icon: icons.routine_habit_icon_Swim,
//         backgroundColor: '#B1BE8A',
//       },
//       {
//         label: 'workout',
//         icon: icons.routine_habit_icon_Workout,
//         backgroundColor: '#D1E6D5',
//       },
//       {
//         label: 'Yoga',
//         icon: icons.routine_habit_icon_Yoga,
//         backgroundColor: '#F2EFC9',
//       },
//     ],
//   },
// ];