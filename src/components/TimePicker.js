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

import {getDate} from 'date-fns';
import dayjs from 'dayjs';
import React, {useImperativeHandle, useState} from 'react';
import {Alert, View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {TimerPickerModal as MainTimerPickerModal} from 'react-native-timer-picker';

const TimerPickerModal = React.forwardRef((props, ref) => {
//   const {title} = props;
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  function handlePickerClose() {
    setShowPicker(false);
  }
  function handlePickerOpen() {
    setShowPicker(true);
  }
  const updatedSelectedData = React.useMemo(
    () => selectedTime,
    [dayjs(selectedTime)],
  );

  useImperativeHandle(ref, () => ({
    closePicker: handlePickerClose,
    openPicker: handlePickerOpen,
    setSelectedTime,
    selectedTime: () => updatedSelectedData,
  }));

  const handleConfirm = ({hours, minutes}) => {
    const selectedTime = new Date();
    selectedTime.setHours(hours);
    selectedTime.setMinutes(minutes);
    setSelectedTime(selectedTime);
    handlePickerClose();
    props?.onChangeTime && props?.onChangeTime(selectedTime);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: '#F1F1F1',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MainTimerPickerModal
          visible={showPicker}
          setIsVisible={setShowPicker}
          selectedDate={selectedTime} // Pass selectedTime as initial value
          onConfirm={handleConfirm}
          modalTitle={props.title}
          onCancel={() => setShowPicker(false)}
          initialHours={selectedTime.getHours() || 0} // Handle the case where selectedTime might be undefined
          initialMinutes={selectedTime.getMinutes() || 0} // Handle the case where selectedTime might be undefined
          closeOnOverlayPress
          hideSeconds
          use12HourPicker
          LinearGradient={LinearGradient}
          styles={{
            theme: 'light',

            modalTitle: {
              fontFamily: 'Gilroy_Bold',
              fontWeight: null,
            },
            text: {
              fontFamily: 'Gilroy_Bold',
            },
            pickerAmPmContainer: {},

            pickerAmPmLabel: {
              fontFamily: 'Gilroy_Semibold',
              fontWeight: null,
            },
          }}
        />
      </View>
    </>
  );
});

export default TimerPickerModal;
