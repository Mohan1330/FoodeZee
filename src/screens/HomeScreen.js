import BottomSheet from '@gorhom/bottom-sheet';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Card, Divider, FAB, Icon, IconButton} from 'react-native-paper';
import * as icons from '../assets/icons/';
import {DateStripe, SegmentedButton, Stack} from '../components';
// import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import EmojiPicker, {en} from 'rn-emoji-keyboard';
import {colors} from '../theme';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import notifee from '@notifee/react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import ActionSheet from 'react-native-actions-sheet';
import DatePicker from 'react-native-date-picker';
import TagSelectionScreen from '../components/TagSelectionScreen';
import SegmentedControl from 'rn-segmented-control';
// import SegmentedButton from '../components/SegmentedButton';

// import ActionSheet from '../components/ActionSheet';
import useActionSheet from '../hooks/useActionSheet';
// import {Switch} from 'react-native-paper';
import DatePickerScreen from '../components/DatePickerScreen';
import TimerPickermodal from '../components/TimePicker';
// import { TimerPickerModal } from 'react-native-timer-picker';
import {getDate} from 'date-fns';
import dayjs from 'dayjs';

const HomeScreen = Props => {
  const color = color;
  const tag = Props?.route?.params?.tag;
  console.log('Props', tag);
  const navigation = useNavigation();
  const calendarRef = useRef();
  const datesBlacklist = []; // 1 day disabled
  const COLORS = [
    '#ACDDDE',
    '#F6F7C4',
    '#C2E5F9',
    '#FFC5C1',
    '#B2BDF0',
    '#C4D7B2',
  ];
  const [selectedDate, setSelectedDate] = useState(moment()); // date selected
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const focused = useIsFocused();

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [displayDate, setDisplatDate] = useState(null);
  //  Today component for current date
  const handleTodaySelected = date => {
    const today = moment();
    setSelectedDate(today);
  };

  const {
    ref: actionSheetRef,
    openSheet: openActionSheet,
    closeSheet: closeActionSheet,
  } = useActionSheet();
  const {
    ref: calenderActionSheetRef,
    openSheet: openCalenderActionSheet2,
    closeSheet: closeCalenderActionSheet2,
    handleDateSelected: handleDateSelected,
    actionSheetDate: actionSheetDate,
  } = useActionSheet();

  const {
    ref: reminderActionSheetRef,
    openSheet: openReminderActionSheet3,
    closeSheet: closeReminderActionSheet3,
  } = useActionSheet();

  const {
    ref: tagActionSheetRef,
    openSheet: openTagActionSheet4,
    closeSheet: closeTagActionSheet4,
  } = useActionSheet();

  const [selectedBackground, setselectedBackground] = useState(0);

  const onDateActionSelected = date => {
    setDisplatDate(date);
  };
  const [tagvalue, setTagvalue] = useState('');

  const handleTagAdded = tag => {
    setTagvalue(tag); // Update the tag value in the state
  };

  const closeTagActionSheet = () => {
    closeTagActionSheet4();
  };

  // Bottom Sheet componenet:
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['75%'], []);

  const openBottomSheet = () => {
    if (BottomSheetRef.current) {
      // setShouldScrollAutomatically(false);
      BottomSheetRef.current.expand();
      // StatusBar.setBackgroundColor(COLORS[selectedBackground]);
    }
  };
  const [value, setValue] = React.useState('button 1');
  const closeBottomSheet = () => {
    // Alert.alert('hi')
    if (BottomSheetRef.current) {
      // setShouldScrollAutomatically(true);
      BottomSheetRef.current.close();
      // StatusBar.setBackgroundColor('#dce6f7');
      // changeNavigationBarColor('#dce6f7');
    }
  };

  // custom Icon Image for bootom sheet:
  const SearchImg = require('../assets/icons/search.png');
  const BackArrow = require('../assets/icons/back_arrow.png');

  // calender function for yesterday and tomrrow:

  const renderHeader = () => {
    // const diff = moment(selectedDate).diff(currentday, 'days');
    console.log(selectedDate);
    console.log(diff);

    const currentday = moment().startOf('day'); // Set time to midnight
    console.log('currentday', currentday);

    const selectDate = moment(selectedDate); // Replace with your selected date
    console.log('selectedDate', selectedDate);

    const diff = selectDate.startOf('day').diff(currentday, 'days'); // Set time to midnight
    console.log('Difference in days:', diff);

    if (diff === 0) {
      return 'Today';
    } else if (diff === 1) {
      return 'Tomorrow';
    } else if (diff === -1) {
      return 'Yesterday';
    } else {
      return moment(selectedDate).format('MMM D YYYY');
    }
  };

  useEffect(() => {
    changeNavigationBarColor(COLORS[selectedBackground]);
    // await notifee.requestPermission();
    // const channelId = await notifee.createChannel({
    //   id: 'default',
    //   name: 'Default Channel',
    // });
    // notifee.displayNotification({
    //   title:
    //     '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
    //   subtitle: '&#129395;',
    //   body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
    //   android: {
    //     channelId,
    //     color: '#4caf50',
    //     actions: [
    //       {
    //         title: '<b>Dance</b> &#128111;',
    //         pressAction: {id: 'dance'},
    //       },
    //       {
    //         title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
    //         pressAction: {id: 'cry'},
    //       },
    //     ],
    //   },
    // });

    return () => {};
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = index => {
    setSelectedIndex(index);
    // Do something with the selected index
  };

  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState({
    alreadySelected: false,
    emoji: '⏰',
    name: 'alarm clock',
    slug: 'alarm_clock',
    toneEnabled: false,
    unicode_version: '0.6',
  });

  const handleEmojiSelect = emoji => {
    setSelectedEmoji(emoji);
    setIsEmojiPickerVisible(false); // Close the emoji picker after selection
  };

  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePick = emoji => {
    console.log(emoji);
    setResult(emoji);
    setIsModalOpen(prev => !prev);
  };

  const [text, onChangeText] = useState(true);

  // Home Screen Task adding:

  const [task, setTask] = useState([]);

  const AddTask = () => {
    console.log('haiii', startdate);
    if (text != '') {
      setTask(current => [
        ...(current ?? []),
        {
          text: text,
          selectedEmoji: selectedEmoji.emoji,
          color: COLORS[selectedBackground],
          startdate: startdate,
          enddate: enddate,
        },
      ]);
      closeActionSheet();
      // StatusBar.setBackgroundColor('#dce6f7');
      // changeNavigationBarColor('#dce6f7');
    } else {
      Alert.alert('hi task');
    }
  };

  const nestedActionSheetRef = useRef(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  // const openActionSheet = () => {
  //   alert('hi')
  //   actionSheetRef.current?.openSheet();
  // };
  const openNestedActionSheetRef = () => {
    nestedActionSheetRef.current?.setModalVisible(true);
  };

  const closeNestedActionSheetRef = () => {
    nestedActionSheetRef.current?.setModalVisible(false);
  };

  // const closeActionSheet = () => {
  //   actionSheetRef.current?.setModalVisible(false);
  // };
  const [showDatePicker, setShowDatePicker] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSegmentPress = index => {
    // setSelectedIndex(index);
    setShowDatePicker(true);
  };

  const handleDatePickerChange = date => {
    // Handle the selected date as needed
    console.log('Selected date:', date);
    setSelectedDate(date);
    // setShowDatePicker(true);
  };

  const handleGo = () => {
    const time = startdate;
    actionSheetRef.current?.setModalVisible(false);
  };

  useEffect(() => {
    // Trigger the date picker to open when the component loads
    handleSegmentPress(true);
  }, []);

  // useEffect(() => {
  //   console.log('hai', textvalue);
  //   if (textvalue != null) {
  //     setTagvalue(textvalue);
  //   }
  //   // Trigger the date picker to open when the component loads
  // }, []);
  // const [date, setDate] = useState(new Date());

  const [tagtext, setTagText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  // const navigation = useNavigation();

  // const addTag = () => {
  //   if (text.trim() !== '') {
  //     if (editIndex !== null) {
  //       // If editing an existing tag
  //       const newTags = [...tags];
  //       newTags[editIndex] = text.trim();
  //       setTags(newTags);
  //       setEditIndex(null);
  //     } else {
  //       // If adding a new tag
  //       setTags([...tags, text.trim()]);
  //     }
  //     setText('');
  //   }
  //   Alert.alert('hai');

  //   // setTimeout(() => {
  //   //   navigation.navigate('TagSelectionScreen');
  //   // }, 1000);
  // };

  const addTag = () => {
    if (tagtext.trim() !== '') {
      if (editIndex !== null) {
        // If editing an existing tag
        const newTags = [...tags];
        newTags[editIndex] = tagtext.trim();
        setTags(newTags);
        setEditIndex(null);
      } else {
        // If adding a new tag
        setTags([...tags, tagtext.trim()]);
        setTagvalue(tagtext);
      }
      setTagText('');
      closeNestedActionSheetRef();
    } else {
      Alert.alert('Please enter a valid tag.');
    }
  };
  const removeTag = index => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const editTag = index => {
    const tagToEdit = tags[index];
    setTagText(tagToEdit);
    setEditIndex(index);
  };

  // const [selectedDate, setSelectedDate] = useState('');
  // const currentDate = new Date().toISOString().split('T')[0];

  // const handleDayPress = day => {
  //   setSelectedDate(day.dateString);
  // };

  // const markedDates = {};
  // if (selectedDate) {
  //   markedDates[selectedDate] = {
  //     selected: true,
  //     marked: true,
  //     selectedColor: 'grey',
  //     dotColor: 'grey',
  //     borderRadius: 1,
  //   };
  // } else {
  //   markedDates[currentDate] = {
  //     selected: true,
  //     marked: true,
  //     selectedColor: 'grey',
  //     dotColor: 'grey',
  //     borderRadius: 1,
  //   };
  // }

  // bottom sheet Data's:

  function ListItem({icon, label, onPress, value, tab}) {
    return (
      <Pressable
        onPress={onPress ? onPress : null}
        style={styles.itemContainer}>
        <Text
          style={{
            fontFamily: 'Gilroy_Medium',
            fontSize: 17,
            color: '#000',
          }}>
          {value ? value : label}
        </Text>
        <MaterialCommunityIcons size={25} color="rgba(0,0,0,.9)" name={icon} />
        {label == 'AllDay' ? (
          // <Switch
          //   thumbColor={isSwitchOn ? 'white' : 'white'}
          //   trackColor={{false: '#767577', true: '#81b0ff'}} // Change the track color
          //   style={{
          //     transform: [{scaleX: 2.0}, {scaleY: 2.0}], // Adjust the scale for a round shape
          //     borderRadius: 5, // Adjust the border radius for a round shape
          //   }}
          //   color="blue"
          //   value={tab}
          //   onValueChange={openActionSheet}
          // />
          <Switch
            value={isSwitchOn}
            onValueChange={setIsSwitchOn}
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              // transform: [{scaleX: 5.0}, {scaleY: 5.0}],
            }}
            trackColor={{
              false: 'gray',
              true: 'lightgreen',
            }}
            thumbColor={isSwitchOn ? 'white' : 'white'}
          />
        ) : (
          <></>
        )}
      </Pressable>
    );
  }
  console.log('value', value);

  const handleTimeChange = newDate => {
    // Do something with the selected time

    console.log('handleTimeChange', newDate.toLocaleString());
    setStartDate(newDate);

    // Close the date picker if needed
    // setShowDatePicker(false);
  };

  const openstartdate = () => {
    Alert.alert('hai');
    return (
      <>
        <SegmentedButton selectedTime={1} />
      </>
    );
  };

  const startTimePickerRef = useRef();
  const endTimePickerRef = useRef();

  return (
    <View style={styles.container}>
      <TimerPickermodal
        ref={startTimePickerRef}
        title="Start Time"
        onChangeTime={dateTime => {
          setStartTime(dateTime);
        }}
      />
      <TimerPickermodal
        ref={endTimePickerRef}
        title="End Time"
        onChangeTime={dateTime => {
          setEndTime(dateTime);
        }}
      />
      <ActionSheet
        containerStyle={[
          styles.actionSheetStyle,
          {backgroundColor: COLORS[selectedBackground]},
        ]}
        ref={actionSheetRef}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS[selectedBackground]} />
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <IconButton
              icon={() => (
                <Image
                  source={BackArrow}
                  style={{width: 30, height: 30, tintColor: 'black'}}
                />
              )}
              size={20}
              onPress={closeActionSheet}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                fontFamily: 'Gilroy_Medium',
              }}>
              Add your New Task
            </Text>

            <View />
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TextInput
                placeholderTextColor={'rgba(0,0,0,.1)'}
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                // value={text}
                placeholder="Add New"
                keyboardType="default"
              />
              <TouchableOpacity
                onPress={() => {
                  setIsEmojiPickerVisible(true);
                }}
                activeOpacity={1}
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                  width: 65,
                  height: 65,
                  marginRight: 30,
                  borderRadius: 8,
                  borderWidth: 0.3,
                  borderColor: 'light-grey',
                  justifyContent: 'center',
                  pading: 5,
                }}>
                <Text style={{fontSize: 38, color: '#000'}}>
                  {selectedEmoji?.emoji}
                </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                setIsEmojiPickerVisible(true);
              }}
              activeOpacity={1}
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                width: 80,
                height: 80,
                borderRadius: 8,
                justifyContent: 'center',
                pading: 5,
              }}>
              <Text style={{fontSize: 40, color: '#000'}}>
                {selectedEmoji?.emoji}
              </Text>
            </TouchableOpacity> */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginVertical: 10,
                gap: 20,
                padding: 5,
              }}>
              {COLORS.map((color, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      changeNavigationBarColor(color);
                      setselectedBackground(index);
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      borderWidth: 3,
                      borderColor: '#fff',
                      backgroundColor: color,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}></Pressable>
                );
              })}
            </View>

            <View
              style={{
                // flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
              }}>
              <View
                style={{
                  // backgroundColor: '#EEF5FF',
                  width: '100%',
                  backgroundColor: COLORS[selectedBackground],
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                }}>
                <ListItem
                  icon={'calendar'}
                  onPress={openCalenderActionSheet2}
                  value={
                    displayDate ||
                    (actionSheetDate ? actionSheetDate.toString() : 'Date')
                  }
                  label={'Date'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // marginTop:10,
                    paddingVertical: 10,
                  }}>
                  <ListItem
                    icon={'chevron-down'}
                    onPress={() => {
                      startTimePickerRef?.current?.openPicker();
                    }}
                    value={
                      startTime
                        ? dayjs(startTime).format('hh:mm A')
                        : 'Start Time'
                    }
                    // value={null}
                    label={'Start Time'}
                  />
                  <ListItem
                    icon={'chevron-down'}
                    onPress={() => {
                      endTimePickerRef?.current?.openPicker();
                    }}
                    value={
                      endTime ? dayjs(endTime).format('hh:mm A') : 'End Time'
                    }
                    label={'End Time'}
                  />
                </View>
                <ListItem
                  icon={'alarm-check'}
                  onPress={openReminderActionSheet3}
                  label={'Reminder'}
                  value={null}
                />
                <ListItem
                  icon={'tag'}
                  onPress={openTagActionSheet4}
                  label={'Tag'}
                  value={tagvalue ? tagvalue : 'No Tag'}
                />
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                marginTop: 50,
              }}>
              <TouchableOpacity
                onPress={AddTask}
                style={{
                  width: 190,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Gilroy_Bold',
                    fontSize: 18,
                    color: 'black',
                  }}>
                  Create
                </Text>
              </TouchableOpacity>
            </View>

            <EmojiPicker
              onEmojiSelected={handleEmojiSelect}
              open={isEmojiPickerVisible}
              onClose={() => setIsEmojiPickerVisible(false)}
              categoryPosition="bottom"
              translation={en}
              expandable={false}
              enableSearchBar
              defaultHeight={'100%'}
              disabledCategories={['flags', 'symbols']}
              emojiSize={40}
              selectedEmojis={[selectedEmoji]}
              theme={{
                backdrop: 'rgba(0,0,0)',
                category: {
                  iconActive: 'green',
                  container: '#ffff',
                },
              }}
              styles={{
                header: {
                  // backgroundColor:'orange',
                  fontSize: 20,
                  fontFamily: 'Gilroy_Bold',
                  color: '#000',
                },

                category: {
                  container: {
                    backgroundColor: '#dcdcdc',
                  },
                },
                searchBar: {
                  text: {
                    fontSize: 18,
                    fontFamily: 'Gilroy_Medium',
                    color: '#000',
                  },
                  container: {
                    borderRadius: 10,
                    padding: 5,
                    marginVertical: 10,
                  },
                },
              }}
            />
          </View>
        </View>
      </ActionSheet>
      <ActionSheet
        containerStyle={[
          styles.actionSheetStyle,
          {backgroundColor: COLORS[selectedBackground]},
        ]}
        ref={calenderActionSheetRef}>
        <View style={{flex: 1}}>
          <IconButton
            icon={() => (
              <Image
                source={BackArrow}
                style={{width: 30, height: 30, tintColor: 'black'}}
              />
            )}
            size={20}
            onPress={closeCalenderActionSheet2}
          />
          <DatePickerScreen
            onChangeDate={({dateString}) => {
              handleDateSelected(dateString);
              onDateActionSelected(dateString);
            }}
          />
        </View>
      </ActionSheet>
      <ActionSheet
        containerStyle={[
          styles.actionSheetStyle,
          {backgroundColor: COLORS[selectedBackground]},
        ]}
        style={{backgroundColor: COLORS[selectedBackground]}}
        ref={reminderActionSheetRef}>
        <View style={{flex: 1}}>
          <IconButton
            icon={() => (
              <Image
                source={BackArrow}
                style={{width: 30, height: 30, tintColor: 'black'}}
              />
            )}
            size={20}
            onPress={closeReminderActionSheet3}
          />
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <SegmentedControl
              values={['Option 1', 'Option 2', 'Option 3']}
              selectedIndex={selectedIndex}
              onIndexChange={handleIndexChange}
            />
          </View>
        </View>
      </ActionSheet>
      <ActionSheet
        containerStyle={[
          styles.actionSheetStyle,
          {backgroundColor: COLORS[selectedBackground]},
        ]}
        ref={tagActionSheetRef}>
        <View
          style={
            {
              // flex: 1,
            }
          }>
          <IconButton
            icon={() => (
              <Image
                source={BackArrow}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'black',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              />
            )}
            size={20}
            onPress={closeTagActionSheet4}
          />
        </View>
        <View style={{flex: 1}}>
          <TagSelectionScreen
            onClose={closeTagActionSheet}
            onTagAdded={handleTagAdded}
          />
        </View>
      </ActionSheet>

      {/* <View style={{backgroundColor: '#E0F7FE'}}> */}
      <View style={styles.Top}>
        <View style={{backgroundColor: 'pink', gap: -20}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                color: '#000',
                // padding: 20,
                // marginLeft: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                fontFamily: 'Gilroy_Semibold',
              }}>
              {/* {moment(selectedDate).format('MMM D YYYY')} */}
              {renderHeader()}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => handleTodaySelected(moment())}>
              <Text
                style={{
                  fontSize: 18,
                  // fontWeight: 'bold',
                  color: '#000',
                  padding: 20,
                  marginLeft: 20,
                  fontFamily: 'Gilroy_Medium',
                }}>
                Today
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Stack direction="vertical">
                <Stack
                  style={{borderRadius: 12, backgroundColor: 'pink'}}
                  direction="vertical"
                  gap={0}>
                  <DateStripe
                    selectedDate={selectedDate}
                    onDateSelected={value => {
                      setSelectedDate(new Date(value));
                    }}
                  />
                </Stack>
              </Stack>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.middle}>
        <FAB
          icon="plus"
          customSize={60}
          style={styles.fab}
          color="#000"
          onPress={openActionSheet}
          zIndex={9999}
        />
        {/* <FAB
          icon="home"
          customSize={60}
          style={styles.fab}
          color="#000"
          onPress={openActionSheet2}
          zIndex={9999}
        /> */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            // backgroundColor: 'red',
          }}>
          <FlatList
            style={{
              width: '100%',
              padding: 5,
              backgroundColor: 'white',
            }}
            data={task}
            renderItem={({item, index, color, startdate, enddate}) => {
              return (
                // <View
                //   style={{
                //     width: '95%',
                //     backgroundColor: item.color,
                //     padding:10,
                //     margin:5,
                //     // justifyContent:'center',
                //     // alignItems:'center'

                //   }}>
                //   <Text
                //     style={{
                //       color: 'black',
                //       fontFamily: 'Gilroy_Regular',
                //       fontSize: 16,
                //     }}>
                //     {item.text}
                //   </Text>
                //   <Text>{item.selectedEmoji}</Text>
                // </View>
                <Card
                  style={{
                    backgroundColor: item.color,
                    padding: 10,
                    margin: 10,
                  }}>
                  <Card.Title
                    title={item.text}
                    // subtitle={item.color}
                    subtitle={item.startdate.toLocaleTimeString()}
                    titleStyle={{
                      color: '#352F44',
                      fontFamily: 'Gilroy_Semibold',
                      fontSize: 16,
                    }}
                    subtitleStyle={{
                      color: '#352F44',
                      fontFamily: 'Gilroy_Semibold',
                      fontSize: 16,
                    }}
                    left={() => (
                      <Text style={{fontSize: 25, color: 'white'}}>
                        {item.selectedEmoji}
                      </Text>
                    )}
                  />
                </Card>
              );
            }}></FlatList>
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    // width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'red',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginBottom: 10,
  },
  tagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginRight: 5,
  },
  tag: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  tagText: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Gilroy_Medium',
  },
  removeButton: {
    marginLeft: 5,
    height: 20,
    width: 20,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: '#E53935',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  inputTag: {
    flex: 1,
    width: '90%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: 'black',
    fontFamily: 'Gilroy_Medium',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Gilroy_Medium',
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  Top: {
    flex: 0.2,
    backgroundColor: 'pink',
  },
  middle: {
    flex: 0.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 80,
    borderRadius: 40,
    backgroundColor: '#B4E7F2',
  },
  contentContainer: {
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    flex: 1,
    // backgroundColor:"red"
  },
  ListHeader: {
    fontSize: 32,
    // backgroundColor: 'red',
  },
  headerDescription: {
    fontSize: 20,
    backgroundColor: 'grey',
  },
  ListItem: {
    backgroundColor: '#f9c4ff',
    padding: 20,
    marginVertical: 8,
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    fontSize: 20,
    marginRight: 30,
    fontFamily: 'Gilroy_Medium',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 23,
    gap: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
  actionSheetStyle: {
    height: '95%',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // backgroundColor:COLORS[selectedBackground]
  },
});
