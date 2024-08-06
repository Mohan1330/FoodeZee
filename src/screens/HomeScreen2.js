// // // // import moment from 'moment';
// // // // import React, { useState } from 'react';
// // // // import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // // // import CalendarStrip from 'react-native-calendar-strip';

// // // // const HomeScreen = () => {

// // // //   const datesBlacklist = []; // 1 day disabled

// // // //   const [selectedDate, setSelectedDate] = useState(moment()); // date selected

// // // //   // Handle the selected date
// // // //   const onDateSelected = date => {
// // // //     setSelectedDate(moment(date));
// // // //   };

// // // //   // Handle month change event
// // // //   const onMonthChanged = (start, end) => {
// // // //     console.log('Start Date:', start);
// // // //     console.log('End Date:', end);
// // // //   };

// // // //   // Handle week change event
// // // //   const onWeekChanged = (start, end) => {
// // // //     console.log('Start of Week:', start);
// // // //     console.log('End of Week:', end);
// // // //   };

// // // //   //  Today component for current date
// // // //   const handleTodaySelected = date => {
// // // //     const today = moment();
// // // //     setSelectedDate(today);
// // // //   };

// // // //   return (
// // // //     <View style={{backgroundColor: 'yellow', }}>
// // // //       <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
// // // //         <Text
// // // //           style={{
// // // //             fontSize: 25,
// // // //             fontWeight: 'bold',
// // // //             color: '#000',
// // // //             padding: 20,
// // // //             marginLeft: 20,
// // // //           }}>
// // // //           {moment(selectedDate).format('MMM YYYY')}
// // // //         </Text>
// // // //         <TouchableOpacity onPress={() => handleTodaySelected(moment())}>
// // // //           <Text
// // // //             style={{
// // // //               fontSize: 25,
// // // //               fontWeight: 'bold',
// // // //               color: '#000',
// // // //               padding: 20,
// // // //               marginLeft: 20,
// // // //             }}>
// // // //             today
// // // //           </Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //       <CalendarStrip
// // // //         ref={ref => (calendarRef = ref)} // Save a reference to the CalendarStrip
// // // //         selectedDate={selectedDate}
// // // //         onDateSelected={(event, date) => onDateSelected(event, date)}
// // // //         onMonthChanged={onMonthChanged}
// // // //         onWeekChanged={onWeekChanged} // Handle week change
// // // //         showMonth={false}
// // // //         maxDayComponentSize={80}
// // // //         scrollable
// // // //         // startingDate={moment()}
// // // //         scrollToOnSetSelectedDate
// // // //         scrollerPaging={true}
// // // //         dayComponentHeight={100}
// // // //         style={{
// // // //           width: '95%',
// // // //           height: 90,
// // // //           alignSelf: 'center',
// // // //           paddingHorizontal: 10,
// // // //           // paddingBottom: 10,
// // // //           borderRadius: 40,
// // // //         }}
// // // //         calendarHeaderStyle={{color: 'white'}}
// // // //         calendarColor={'#7743CE'}
// // // //         dateNumberStyle={{color: 'white'}}
// // // //         dateNameStyle={{
// // // //           color: 'white',
// // // //           textTransform: 'capitalize',
// // // //           fontWeight: 'bold',
// // // //         }}
// // // //         highlightDateNumberStyle={{
// // // //           color: '#000',
// // // //           fontWeight: 'bold',
// // // //           fontSize: 18,
// // // //         }}
// // // //         highlightDateNumberContainerStyle={{
// // // //           backgroundColor: 'blue',
// // // //           borderRadius: 40,
// // // //           padding: 4,
// // // //           marginHorizontal: 10,
// // // //           minWidth: 30,
// // // //           minHeight: 30,
// // // //         }}
// // // //         highlightDateNameStyle={{
// // // //           color: 'red',
// // // //           // fontFamily: 'Roboto-Medium',
// // // //           fontSize: 11,
// // // //           marginHorizontal: 1.5,
// // // //           padding: 5.5,
// // // //           borderTopEndRadius: 20,
// // // //           borderTopLeftRadius: 20,
// // // //           borderTopRightRadius: 20,
// // // //         }}
// // // //         highlightDateContainerStyle={{
// // // //           backgroundColor: 'orange',
// // // //           marginTop: 5,
// // // //           paddingVertical: 18,
// // // //           height: 90,
// // // //           color: 'white',
// // // //         }}
// // // //         disabledDateNameStyle={{color: 'grey'}}
// // // //         disabledDateNumberStyle={{color: 'grey'}}
// // // //         weekendDateNameStyle={{color: 'red'}}
// // // //         weekendDateNumberStyle={{color: 'red'}}
// // // //         // datesWhitelist={datesWhitelist}
// // // //         datesBlacklist={datesBlacklist}
// // // //         iconLeft={require('../assets/icons/leftArrow.png')}
// // // //         iconRight={require('../assets/icons/rightArrow.png')}
// // // //       />
// // // //     </View>
// // // //   );
// // // // };
// // // // //   }

// // // // export default HomeScreen;

// // // // const styles = StyleSheet.create({
// // // //   container: {flex: 1},
// // // // });

// // // import React, { useState } from 'react';
// // // import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // // const HomeScreen2 = () => {
// // //   const [selectedOption, setSelectedOption] = useState(null);

// // //   const handleOptionSelect = (option) => {
// // //     setSelectedOption(option);
// // //   };

// // //   const getOptionStyle = (option) => {
// // //     return {
// // //       backgroundColor: selectedOption === option ? (option === 'male' ? 'blue' : 'pink') : 'gray',
// // //     };
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.headerText}>Dynamic Theming Example</Text>

// // //       <TouchableOpacity
// // //         style={[styles.optionButton, getOptionStyle('male')]}
// // //         onPress={() => handleOptionSelect('male')}
// // //       >
// // //         <Text style={styles.optionText}>Male</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity
// // //         style={[styles.optionButton, getOptionStyle('female')]}
// // //         onPress={() => handleOptionSelect('female')}
// // //       >
// // //         <Text style={styles.optionText}>Female</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   headerText: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginBottom: 20,
// // //   },
// // //   optionButton: {
// // //     padding: 10,
// // //     margin: 10,
// // //     borderRadius: 5,
// // //   },
// // //   optionText: {
// // //     color: 'white',
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default HomeScreen2;

// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';

// // // const PointsBar = ({ points }) => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.label}>Points:</Text>
// // //       <View style={styles.pointsContainer}>
// // //         <View style={[styles.pointsBar, { width: `${points}%` }]} />
// // //         <Text style={styles.pointsText}>{points}%</Text>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginVertical: 10,
// // //   },
// // //   label: {
// // //     marginRight: 10,
// // //     fontSize: 16,
// // //   },
// // //   pointsContainer: {
// // //     flex: 1,
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   pointsBar: {
// // //     height: 20,
// // //     backgroundColor: 'green', // Adjust color as needed
// // //     borderRadius: 5,
// // //   },
// // //   pointsText: {
// // //     marginLeft: 10,
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default PointsBar;

// // // import React, { useState } from 'react';
// // // import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// // // const HomeScreen2 = () => {
// // //   const [progress, setProgress] = useState(0);

// // //   const handleButtonPress = () => {
// // //     if (progress < 100) {
// // //       setProgress(progress + 10);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.progressBarContainer}>
// // //         <View style={[styles.progressBar, { width: `${progress}%` }]} />
// // //         <Text style={styles.progressText}>{progress}%</Text>
// // //       </View>
// // //       <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
// // //         <Text style={styles.buttonText}>Increase Progress</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   progressBarContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   progressBar: {
// // //     height: 20,
// // //     backgroundColor: 'green', // Change the color as needed
// // //     borderRadius: 5,
// // //     overflow: 'hidden',
// // //   },
// // //   progressText: {
// // //     marginLeft: 10,
// // //     fontSize: 16,
// // //   },
// // //   button: {
// // //     marginTop: 20,
// // //     padding: 10,
// // //     backgroundColor: 'blue',
// // //     borderRadius: 5,
// // //   },
// // //   buttonText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default HomeScreen2;

// // //task complted points system:

// // import React, {useState} from 'react';
// // import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// // const TaskProgressTracker = () => {
// //   const tasks = [
// //     {id: 1, name: 'Task 1', points: 10},
// //     {id: 2, name: 'Task 2', points: 200},
// //     {id: 3, name: 'Task 3', points: 100},
// //     // Add more tasks as needed
// //   ];

// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const totalPoints = tasks.reduce((sum, task) => sum + task.points, 0);
// //   const currentPoints = completedTasks.reduce(
// //     (sum, task) => sum + task.points,
// //     0,
// //   );

// //   const handleTaskCompletion = taskId => {
// //     const task = tasks.find(t => t.id === taskId);

// //     if (task && !completedTasks.includes(task)) {
// //       setCompletedTasks([...completedTasks, task]);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.progressBarContainer}>
// //         <View
// //           style={[
// //             styles.progressBar,
// //             {width: `${(currentPoints / totalPoints) * 100}%`},
// //           ]}
// //         />
// //         <Text style={styles.progressText}>
// //           {currentPoints}/{totalPoints} Points
// //         </Text>
// //       </View>

// //       <View style={styles.taskList}>
// //         {tasks.map(task => (
// //           <TouchableOpacity
// //             key={task.id}
// //             style={styles.taskButton}
// //             onPress={() => handleTaskCompletion(task.id)}>
// //             <Text>{task.name}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   progressBarContainer: {
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   progressBar: {
// //     height: 20,
// //     backgroundColor: 'green', // Change the color as needed
// //     borderRadius: 5,
// //     overflow: 'hidden',
// //     marginBottom: 10,
// //   },
// //   progressText: {
// //     fontSize: 16,
// //   },
// //   taskList: {
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   taskButton: {
// //     marginTop: 10,
// //     padding: 10,
// //     backgroundColor: 'blue',
// //     borderRadius: 5,
// //   },
// // });

// // export default TaskProgressTracker;

// // import React, { useState } from 'react'
// // import DatePicker from 'react-native-date-picker'

// // export default () => {
// //   const [date, setDate] = useState(new Date())

// //   return <DatePicker date={date} onDateChange={setDate} mode='date' />
// // }

// // import React, {useState} from 'react';
// // import {Button, View, Text} from 'react-native';
// // import DatePicker from 'react-native-date-picker';

// // const convertTo12HourFormat = time24 => {
// //   const [hours, minutes] = time24.split(':');
// //   const parsedHours = parseInt(hours, 10);
// //   const period = parsedHours >= 12 ? 'PM' : 'AM';
// //   const convertedHours = (parsedHours % 12 || 12).toString(); // Convert 0 to 12
// //   return `${convertedHours}:${minutes} ${period}`;
// // };

// // const MyComponent = () => {
// //   const [dateTime, setDateTime] = useState(new Date());
// //   const [open, setOpen] = useState(false);

// //   const handleConfirm = selectedDate => {
// //     setOpen(false);
// //     setDateTime(selectedDate);
// //   };

// //   const handleCancel = () => {
// //     setOpen(false);
// //   };

// //   const convertedTime = convertTo12HourFormat(dateTime.toLocaleTimeString());

// //   return (
// //     <View>
// //       <Button title="Open" onPress={() => setOpen(true)} />
// //       <DatePicker
// //         modal
// //         open={open}
// //         date={dateTime}
// //         onConfirm={handleConfirm}
// //         onCancel={handleCancel}
// //         mode="time" // Use "time" mode for only time
// //         is24hour={false} // Set is24hour to false for 12-hour format
// //       />
// //       <Text>Selected Time (12-hour format): {convertedTime}</Text>
// //     </View>
// //   );
// // };

// // export default MyComponent;

// // import React, {useState} from 'react';
// // import {Button, View, Text} from 'react-native';
// // import DatePicker from 'react-native-date-picker';

// // const convertTo12HourFormat = time24 => {
// //   const [hours, minutes] = time24.split(':');
// //   const parsedHours = parseInt(hours, 10);
// //   const period = parsedHours >= 12 ? 'PM' : 'AM';
// //   const convertedHours = (parsedHours % 12 || 12).toString(); // Convert 0 to 12
// //   return `${convertedHours}:${minutes} ${period}`;
// // };

// // const TimePickerComponent = ({label, selectedTime, onConfirm, onCancel}) => {
// //   const [open, setOpen] = useState(false);

// //   const handlePress = () => {
// //     setOpen(true);
// //   };

// //   const handleConfirmInternal = selectedDate => {
// //     setOpen(false);
// //     onConfirm(selectedDate);
// //   };

// //   const handleCancelInternal = () => {
// //     setOpen(false);
// //     onCancel();
// //   };

// //   const convertedTime = convertTo12HourFormat(
// //     selectedTime.toLocaleTimeString(),
// //   );

// //   return (
// //     <View>
// //       <Button title={`Open ${label}`} onPress={handlePress} />
// //       <DatePicker
// //         modal
// //         open={open}
// //         date={selectedTime}
// //         onConfirm={handleConfirmInternal}
// //         onCancel={handleCancelInternal}
// //         mode="time"
// //         is24hour={false}
// //       />
// //       <Text>
// //         {label} Time (12-hour format): {convertedTime}
// //       </Text>
// //     </View>
// //   );
// // };

// // const MyComponent = () => {
// //   const [startTime, setStartTime] = useState(new Date());
// //   const [endTime, setEndTime] = useState(new Date());

// //   const handleStartConfirm = selectedDate => {
// //     setStartTime(selectedDate);
// //   };

// //   const handleEndConfirm = selectedDate => {
// //     setEndTime(selectedDate);
// //   };

// //   const handleCancel = () => {
// //     // Handle cancel if needed
// //   };

// //   return (
// //     <View>
// //       <TimePickerComponent
// //         label="Start"
// //         selectedTime={startTime}
// //         onConfirm={handleStartConfirm}
// //         onCancel={handleCancel}
// //       />
// //       <TimePickerComponent
// //         label="End"
// //         selectedTime={endTime}
// //         onConfirm={handleEndConfirm}
// //         onCancel={handleCancel}
// //       />
// //     </View>
// //   );
// // };

// // export default MyComponent;
// // import React, {useState} from 'react';
// // import {View, Text, Button} from 'react-native';
// // import DatePicker from 'react-native-date-picker';

// // const MyTimePicker = () => {
// //   const [selectedTime, setSelectedTime] = useState(new Date());
// //   const [showTimePicker, setShowTimePicker] = useState(false);

// //   // Handle time change
// //   const handleTimeChange = time => {
// //     setShowTimePicker(false);
// //     setSelectedTime(time);
// //   };

// //   // Show the time picker
// //   const showTimePickerModal = () => {
// //     setShowTimePicker(true);
// //   };

// //   return (
// //     <View>
// //       <Text>Selected Time: {selectedTime.toLocaleTimeString()}</Text>
// //       <Button title="Select Time" onPress={showTimePickerModal} />

// //       {showTimePicker && (
// //         <DatePicker
// //           date={selectedTime}
// //           mode="time"
// //           onDateChange={handleTimeChange}
// //           is24hourSource="deviceDefault"
// //           androidVariant="nativeAndroid"
// //           textColor="#000" // Customize text color
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // export default MyTimePicker;

// // import React, {useState} from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   StyleSheet,
// // } from 'react-native';

// // const TagInputComponent = () => {
// //   const [tags, setTags] = useState([]);
// //   const [text, setText] = useState('');
// //   const [editIndex, setEditIndex] = useState(null);

// //   const addTag = () => {
// //     if (text.trim() !== '') {
// //       if (editIndex !== null) {
// //         // If editing an existing tag
// //         const newTags = [...tags];
// //         newTags[editIndex] = text.trim();
// //         setTags(newTags);
// //         setEditIndex(null);
// //       } else {
// //         // If adding a new tag
// //         setTags([...tags, text.trim()]);
// //       }
// //       setText('');
// //     }
// //   };

// //   const removeTag = index => {
// //     const newTags = [...tags];
// //     newTags.splice(index, 1);
// //     setTags(newTags);
// //   };

// //   const editTag = index => {
// //     const tagToEdit = tags[index];
// //     setText(tagToEdit);
// //     setEditIndex(index);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.inputContainer}>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Add a tag"
// //           value={text}
// //           maxLength={40}
// //           onChangeText={setText}
// //           onSubmitEditing={addTag}
// //         />
// //         <TouchableOpacity onPress={addTag} style={styles.addButton}>
// //           <Text style={styles.buttonText}>
// //             {editIndex !== null ? 'Update' : 'Add'}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //       <View style={styles.tagContainer}>
// //         {tags.map((tag, index) => (
// //           <View key={index} style={styles.tagWrapper}>
// //             <TouchableOpacity onPress={() => editTag(index)} style={styles.tag}>
// //               <Text style={styles.tagText}>{tag}</Text>
// //             </TouchableOpacity>
// //             <View style={{justifyContent: 'center', alignItems: 'center'}}>
// //               <TouchableOpacity
// //                 onPress={() => removeTag(index)}
// //                 style={styles.removeButton}>
// //                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
// //                   <Text style={styles.removeButtonText}>X</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   appContainer: {
// //     flex: 1,
// //     justifyContent: 'flex-start',
// //     alignItems: 'center',
// //     padding: 20,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   container: {
// //     width: '100%',
// //     paddingHorizontal: 20,
// //   },
// //   tagContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     // marginBottom: 10,
// //   },
// //   tagWrapper: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent:'center',
// //     marginVertical: 5,
// //     marginRight: 5,
// //   },
// //   tag: {
// //     backgroundColor: '#ccc',
// //     borderRadius: 10,
// //     paddingHorizontal: 10,
// //     paddingVertical: 5,
// //     marginTop:20
// //   },
// //   tagText: {
// //     color: 'black',
// //     // fontWeight: 'bold',
// //     fontSize: 17,
// //     fontFamily: 'Gilroy_Medium',
// //   },
// //   removeButton: {
// //     marginLeft: 5,
// //     height: 20,
// //     width: 20,
// //     marginTop:18,
// //     borderRadius: 10,
// //     backgroundColor: '#E53935',
// //     justifyContent:'center'
// //   },
// //   removeButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 12,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   input: {
// //     flex: 1,
// //     height: 40,
// //     borderColor: '#CCCCCC',
// //     borderWidth: 1,
// //     fontFamily:'Gilroy_Medium',
// //     paddingHorizontal: 10,
// //     borderRadius: 5,
// //     marginRight: 10,
// //     backgroundColor: '#FFFFFF',
// //   },
// //   addButton: {
// //     backgroundColor: '#4CAF50',
// //     paddingHorizontal: 15,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //   },
// //   buttonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     fontFamily:'Gilroy_Medium',

// //   },
// // });

// // export default TagInputComponent;

// // import React, { useState } from 'react';
// // import { View, TextInput,} from 'react-native';
// // import {Picker} from '@react-native-picker/picker';

// // const MyComponent = () => {
// //   const [textInputValue, setTextInputValue] = useState('');
// //   const [selectedValue, setSelectedValue] = useState('option1');

// //   const handleInputChange = (text) => {
// //     setTextInputValue(text);
// //   };

// //   const handlePickerChange = (value) => {
// //     setSelectedValue(value);
// //   };

// //   return (
// //     <View>
// //       <TextInput
// //         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
// //         placeholder="Enter text here"
// //         value={textInputValue}
// //         onChangeText={handleInputChange}
// //       />

// //       <Picker
// //         selectedValue={selectedValue}
// //         onValueChange={handlePickerChange}
// //         style={{ height: 50, width: 200 }}
// //       >
// //         <Picker.Item label="Option 1" value="option1" />
// //         <Picker.Item label="Option 2" value="option2" />
// //         <Picker.Item label="Option 3" value="option3" />
// //       </Picker>
// //     </View>
// //   );
// // };

// // export default MyComponent;

// // import LottieView from 'lottie-react-native';
// import React, {useRef, useState} from 'react';
// import {Alert, Button, Text, View} from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import {IconButton} from 'react-native-paper';
// // import Segmented from '../components/SegmentedButton';
// import TimePicker from '../components/TimePicker';
// import DatePicker from 'react-native-date-picker';

// const HomeScreen2 = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const currentDate = new Date().toISOString().split('T')[0];

//   const handleDayPress = day => {
//     setSelectedDate(day.dateString);
//   };

//   const markedDates = {};
//   if (selectedDate) {
//     markedDates[selectedDate] = {
//       selected: true,
//       marked: true,
//       selectedColor: 'grey',
//       dotColor: 'grey',
//       borderRadius: 1,
//     };
//   } else {
//     markedDates[currentDate] = {
//       selected: true,
//       marked: true,
//       selectedColor: 'grey',
//       dotColor: 'grey',
//       borderRadius: 1,
//     };
//   }

//   const [dateTime, setDateTime] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   const handleConfirm = selectedDate => {
//     setOpen(false);
//     setDateTime(selectedDate);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <Calendar
//           hideExtraDays={true}
//           minDate={currentDate}
//           min
//           style={{
//             borderRadius: 10,
//             margin: 25,
//           }}
//           theme={{
//             calendarBackground: '#ffff',
//             textDayFontFamily: 'Gilroy_Light',
//             textDayFontSize: 15,
//             textMonthFontFamily: 'Gilroy_Medium',
//             textDayHeaderFontFamily: 'Gilroy_Bold',
//             textDayHeaderFontSize: 14,
//             monthTextColor: 'black',
//             'stylesheet.calendar.header': {
//               dayTextAtIndex0: {
//                 color: 'red',
//               },
//               dayTextAtIndex1: {
//                 color: '#000',
//               },
//               dayTextAtIndex2: {
//                 color: '#000',
//               },
//               dayTextAtIndex3: {
//                 color: '#000',
//               },
//               dayTextAtIndex4: {
//                 color: '#000',
//               },
//               dayTextAtIndex5: {
//                 color: '#000',
//               },
//               dayTextAtIndex6: {
//                 color: 'red',
//               },
//             },
//           }}
//           onDayPress={handleDayPress}
//           markedDates={markedDates}
//         />
//       </View>
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <IconButton
//           icon="repeat"
//           size={50}
//           onPress={() => console.log('Pressed')}
//         />
//       </View>
//       <View>
//         {/* Other components */}
//         <TimePicker />
//         {/* Other components */}
//       </View>
//       {/* <Segmented/> */}

//     </View>
//   );
// };

// export default HomeScreen2;

// import React, {Component, useRef, useState} from 'react';
// import {Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
// import ActionSheet from 'react-native-actions-sheet';
// import {Calendar} from 'react-native-calendars';
// import {IconButton} from 'react-native-paper';
// import {TimePicker} from 'react-native-paper-dates';
// import EmojiPicker from 'rn-emoji-keyboard';

// const DatePickerScreen = () => {
//   const actionSheetRef = useRef();
//   const [selectedDate, setSelectedDate] = useState('');
//   const currentDate = new Date().toISOString().split('T')[0];

//   const handleDayPress = day => {
//     setSelectedDate(day.dateString);
//   };

//   const markedDates = {};
//   if (selectedDate) {
//     markedDates[selectedDate] = {
//       selected: true,
//       marked: true,
//       selectedColor: 'grey',
//       dotColor: 'grey',
//       borderRadius: 1,
//     };
//   } else {
//     markedDates[currentDate] = {
//       selected: true,
//       marked: true,
//       selectedColor: 'grey',
//       dotColor: 'grey',
//       borderRadius: 1,
//     };
//   }

//   const [dateTime, setDateTime] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   const handleConfirm = selectedDate => {
//     setOpen(false);
//     setDateTime(selectedDate);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <Calendar
//           hideExtraDays={true}
//           minDate={currentDate}
//           min
//           style={{
//             borderRadius: 10,
//             margin: 25,
//           }}
//           theme={{
//             calendarBackground: '#ffff',
//             textDayFontFamily: 'Gilroy_Light',
//             textDayFontSize: 15,
//             textMonthFontFamily: 'Gilroy_Medium',
//             textDayHeaderFontFamily: 'Gilroy_Bold',
//             textDayHeaderFontSize: 14,
//             monthTextColor: 'black',
//             'stylesheet.calendar.header': {
//               dayTextAtIndex0: {
//                 color: 'red',
//               },
//               dayTextAtIndex1: {
//                 color: '#000',
//               },
//               dayTextAtIndex2: {
//                 color: '#000',
//               },
//               dayTextAtIndex3: {
//                 color: '#000',
//               },
//               dayTextAtIndex4: {
//                 color: '#000',
//               },
//               dayTextAtIndex5: {
//                 color: '#000',
//               },
//               dayTextAtIndex6: {
//                 color: 'red',
//               },
//             },
//           }}
//           onDayPress={handleDayPress}
//           markedDates={markedDates}
//         />
//       </View>
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <IconButton
//           icon="repeat"
//           size={50}
//           onPress={() => console.log('Pressed')}
//         />
//       </View>
//       <View>
//         {/* Other components */}
//         {/* <TimePicker /> */}
//         {/* Other components */}
//       </View>
//       {/* <Segmented/> */}

//       <ActionSheet
//         containerStyle={{
//           height: 800,
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           // backgroundColor: COLORS[selectedBackground],
//         }}
//         ref={actionSheetRef}>
//         {/* <View style={{flex: 1, width: '100%'}}>
//           <View style={{flex: 1, marginTop: 30}}>
//             <SegmentedButton segmentbuttoncolor={COLORS[selectedBackground]} />
//             <View></View>
//           </View>

//           <DatePicker
//             theme="auto"
//             style={{
//               width: 300,
//               height: 200,
//               fontFamily: 'Gilroy_medium',
//               // backgroundColor: 'red',
//             }}
//             date={date}
//             mode="time"
//             onDateChange={setDate}
//           />
//           <Button title="Open" onPress={() => setOpen(true)} />
//           {showDatePicker && (
//             <DatePicker
//               open={open}
//               modal
//               date={startdate}
//               onConfirm={date => {
//                 console.log('date', date);
//                 setOpen(false);
//                 setStartDate(date);
//               }}
//               onCancel={() => {
//                 setOpen(false);
//               }}
//               mode="time"
//             />
//           )}

//           {value === 'button 2' && (
//             <DatePicker
//               date={enddate}
//               onConfirm={newDate => setEndDate(newDate)}
//               mode="time"
//             />
//           )}

//           <TouchableOpacity
//             onPress={handleGo}
//             style={{
//               width: 190,
//               height: 50,
//               borderRadius: 25,
//               backgroundColor: colors,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: 'Gilroy_Bold',
//                 fontSize: 18,
//                 color: 'black',
//               }}>
//               Go
//             </Text>
//           </TouchableOpacity>
//         </View> */}
//         <View style={{flex: 1}}>
//           <View
//             style={{
//               flex: 0.1,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               // gap: 85,
//             }}>
//             <IconButton
//               icon={() => (
//                 <Image
//                   source={BackArrow}
//                   style={{width: 30, height: 30, tintColor: 'black'}}
//                 />
//               )}
//               size={20}
//               // onPress={closeActionSheet}
//             />
//             <Text
//               style={{
//                 color: '#000',
//                 fontSize: 20,
//                 fontFamily: 'Gilroy_Medium',
//               }}>
//               Add your New Task
//             </Text>
//             {/* <IconButton
//               icon={() => (
//                 <Image
//                   source={SearchImg}
//                   style={{width: 30, height: 30, tintColor: 'black'}}
//                 />
//               )}
//               size={20}
//               onPress={closeBottomSheet}
//             /> */}
//             <View />
//           </View>
//           <View style={{flex: 1}}>
//             <View
//               style={{
//                 alignItems: 'center',
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//               }}>
//               <TextInput
//                 placeholderTextColor={'rgba(0,0,0,.1)'}
//                 // style={styles.input}
//                 onChangeText={text => onChangeText(text)}
//                 // value={text}
//                 placeholder="Add New"
//                 keyboardType="default"
//               />
//               <TouchableOpacity
//                 onPress={() => {
//                   setIsEmojiPickerVisible(true);
//                 }}
//                 activeOpacity={1}
//                 style={{
//                   alignItems: 'center',
//                   alignSelf: 'center',
//                   width: 65,
//                   height: 65,
//                   marginRight: 30,
//                   borderRadius: 8,
//                   borderWidth: 0.3,
//                   borderColor: 'light-grey',
//                   justifyContent: 'center',
//                   pading: 5,
//                 }}>
//                 <Text style={{fontSize: 38, color: '#000'}}>
//                   {selectedEmoji?.emoji}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             {/* <TouchableOpacity
//               onPress={() => {
//                 setIsEmojiPickerVisible(true);
//               }}
//               activeOpacity={1}
//               style={{
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 width: 80,
//                 height: 80,
//                 borderRadius: 8,
//                 justifyContent: 'center',
//                 pading: 5,
//               }}>
//               <Text style={{fontSize: 40, color: '#000'}}>
//                 {selectedEmoji?.emoji}
//               </Text>
//             </TouchableOpacity> */}
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 marginVertical: 10,
//                 gap: 20,
//                 padding: 5,
//               }}>
//               {COLORS.map((color, index) => {
//                 return (
//                   <Pressable
//                     onPress={() => {
//                       changeNavigationBarColor(color);
//                       setselectedBackground(index);
//                     }}
//                     style={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: 8,
//                       borderWidth: 3,
//                       borderColor: '#FFFF',
//                       backgroundColor: color,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}></Pressable>
//                 );
//               })}
//             </View>

//             <View
//               style={{
//                 // flexDirection:'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'red',
//               }}>
//               <View
//                 style={{
//                   backgroundColor: '#fff',
//                   width: '100%',
//                   backgroundColor: COLORS[selectedBackground],
//                   // gap: 20,
//                   paddingVertical: 20,
//                   paddingHorizontal: 10,
//                 }}>
//                 {/* <ListItem
//                   // icon={'progress-clock'}
//                   onPress={() => {}}
//                   value={null}
//                   label={'AllDay'}
//                   tab={isSwitchOn}
//                 /> */}
//                 <ListItem
//                   icon={'calendar'}
//                   onPress={() => {}}
//                   value={null}
//                   label={'Date'}
//                 />
//                 {/* <Divider theme={{colors: {primary: 'green'}}} /> */}

//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     // marginTop:10,
//                     paddingVertical: 10,
//                   }}>
//                   <ListItem
//                     icon={'chevron-down'}
//                     onPress={openstartdate}
//                     value={null}
//                     label={'Start Time'}
//                   />
//                   <ListItem
//                     icon={'chevron-down'}
//                     onPress={() => {}}
//                     value={null}
//                     label={'End Time'}
//                   />
//                 </View>
//                 {/* <Divider /> */}
//                 <ListItem
//                   icon={'alarm-check'}
//                   onPress={() => {}}
//                   label={'Reminder'}
//                   value={null}
//                 />
//                 <ListItem
//                   icon={'tag'}
//                   onPress={openNestedActionSheetRef}
//                   // onPress={() => console.log('nested')}

//                   label={'Tag'}
//                   value={tagvalue}
//                 />
//               </View>
//             </View>

//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 padding: 20,
//                 marginTop: 50,
//               }}>
//               <TouchableOpacity
//                 onPress={AddTask}
//                 style={{
//                   width: 190,
//                   height: 50,
//                   borderRadius: 25,
//                   backgroundColor: 'white',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     fontFamily: 'Gilroy_Bold',
//                     fontSize: 18,
//                     color: 'black',
//                   }}>
//                   Create
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <EmojiPicker
//               onEmojiSelected={handleEmojiSelect}
//               open={isEmojiPickerVisible}
//               onClose={() => setIsEmojiPickerVisible(false)}
//               categoryPosition="bottom"
//               translation={en}
//               expandable={false}
//               enableSearchBar
//               defaultHeight={'100%'}
//               disabledCategories={['flags', 'symbols']}
//               emojiSize={40}
//               selectedEmojis={[selectedEmoji]}
//               theme={{
//                 backdrop: 'rgba(0,0,0)',
//                 category: {
//                   iconActive: 'green',
//                   container: '#ffff',
//                 },
//               }}
//               styles={{
//                 header: {
//                   // backgroundColor:'orange',
//                   fontSize: 20,
//                   fontFamily: 'Gilroy_Bold',
//                   color: '#000',
//                 },

//                 category: {
//                   container: {
//                     backgroundColor: '#dcdcdc',
//                   },
//                 },
//                 searchBar: {
//                   text: {
//                     fontSize: 18,
//                     fontFamily: 'Gilroy_Medium',
//                     color: '#000',
//                   },
//                   container: {
//                     borderRadius: 10,
//                     padding: 5,
//                     marginVertical: 10,
//                   },
//                 },
//               }}
//             />
//           </View>
//           {/* <View style={{flex: 0.1, backgroundColor: 'blue'}}></View> */}
//         </View>
//         <ActionSheet
//           containerStyle={{
//             height: 800,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             backgroundColor: COLORS[selectedBackground],
//           }}
//           ref={nestedActionSheetRef}>
//           {/* <View style={{backgroundColor:COLORS[selectedBackground] }}> */}
//           {/* <TagSelectionScreen /> */}
//           {/* </View> */}

//           <View style={[styles.appContainer]}>
//             <View
//               style={[
//                 styles.container,
//                 {backgroundColor: COLORS[selectedBackground]},
//               ]}>
//               <View style={[styles.inputContainer]}>
//                 <TextInput
//                   style={styles.inputTag}
//                   placeholder="Add a tag"
//                   value={tagtext}
//                   maxLength={40}
//                   onChangeText={setTagText}
//                   onSubmitEditing={addTag}
//                 />
//                 <TouchableOpacity onPress={addTag} style={styles.addButton}>
//                   <Text style={styles.buttonText}>
//                     {editIndex !== null ? 'Update' : 'Add'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.tagContainer}>
//                 {tags.map((tag, index) => (
//                   <View key={index} style={styles.tagWrapper}>
//                     <TouchableOpacity
//                       onPress={() => editTag(index)}
//                       style={styles.tag}>
//                       <Text style={styles.tagText}>{tag}</Text>
//                     </TouchableOpacity>
//                     <View
//                       style={{justifyContent: 'center', alignItems: 'center'}}>
//                       <TouchableOpacity
//                         onPress={() => removeTag(index)}
//                         style={styles.removeButton}>
//                         <View
//                           style={{
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                           }}>
//                           <Text style={styles.removeButtonText}>X</Text>
//                         </View>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           </View>
//         </ActionSheet>
//       </ActionSheet>
//     </View>
//   );
// };

// export default DatePickerScreen;

// ActionSheet.js

// const TimerPickerModal = () => {

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TimerPickerModal} from 'react-native-timer-picker';
import {LinearGradient} from 'react-native-linear-gradient';
import moment from 'moment';
import dayjs from 'dayjs';

const TimerPickermodal = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHourMinute = moment().format('HH:mm');
      setCurrentTime(currentHourMinute);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

export default TimerPickermodal;
