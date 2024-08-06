import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useMemo, useRef, useCallback, useEffect} from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import * as icons from '../assets/icons/';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
import {
  FAB,
  Portal,
  Modal,
  Card,
  Title,
  Paragraph,
  IconButton,
  Avatar,
  List,
  Icon,
} from 'react-native-paper';

const ModalScreen = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  // useEffect(() => {
  //   // Handle the selected date
  //   const onDateSelected = (date,event) => {
  //     setSelectedDate(moment(date));
  //   };
  // }, focused);
  useEffect(() => {
    // Handle the selected date
    const onDateSelected = (event, date) => {
      // Check if the Bottom Sheet is collapsed before scrolling
      if (BottomSheetRef.current && BottomSheetRef.current?.isCollapsed()) {
        setSelectedDate(moment(date));
        // Scroll to the selected date
        if (calendarRef.current) {
          calendarRef.current.scrollToDay(date, true); // The second argument determines whether to animate the scroll
        }
      } else {
        // Do something else when not scrolling automatically
      }
    };

    // Clean up function
    return () => {
      // Cleanup code if needed
    };
  }, [BottomSheetRef]);

  // const datesBlacklist = []; // 1 day disabled

  const [selectedDate, setSelectedDate] = useState(moment()); // date selected
  const [currentMonth, setCurrentMonth] = useState(moment().format('MMMM')); // current month
  const [currentYear, setCurrentYear] = useState(moment().format('YYYY')); // current year

  // Handle the selected date
  const onDateSelected = date => {
    setSelectedDate(moment(date));
  };

  // Handle month change event
  const onMonthChanged = (start, end) => {
    console.log('Start Date:', start);
    console.log('End Date:', end);
  };

  // Handle week change event
  const onWeekChanged = (start, end) => {
    console.log('Start of Week:', start);
    console.log('End of Week:', end);
  };

  //  Today component for current date
  const handleTodaySelected = date => {
    const today = moment();
    setSelectedDate(today);
    setCurrentMonth(today.format('MMMM'));
    setCurrentYear(today.format('YYYY'));
  };

  // Bottom Sheet componenet:
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const handleSheetChange = useCallback(index => {
    console.log(index);
  }, []);

  const openBottomSheet = () => {
    if (BottomSheetRef.current) {
      BottomSheetRef.current.expand();
    }
  };

  const closeBottomSheet = () => {
    // Alert.alert('hi')
    if (BottomSheetRef.current) {
      BottomSheetRef.current.close();
    }
  };

  // custom Icon Image for bootom sheet:
  const SearchImg = require('../assets/icons/search.png');
  const BackArrow = require('../assets/icons/back_arrow.png');

  const DATA = [
    {
      title: 'Rise and shining morning',
      description: 'Goodmorning',
      data: [
        {
          label: 'Yoga',
          icon: icons.routine_habit_icon_Yoga,
          backgroundColor: '#EADFF5',
        },
        {
          label: 'Drink water',
          icon: icons.routine_habit_icon_DrinkWater,
          backgroundColor: '#F7E6F5',
        },
        {
          label: 'Brush teeth',
          icon: icons.routine_habit_icon_Brushyourteeth,
          backgroundColor: '#F7F7F0',
        },
        {
          label: 'Check weather',
          icon: icons.routine_habit_icon_Checkwether,
          backgroundColor: '#FFFDFA',
        },
        {
          label: 'Check weight',
          icon: icons.routine_habit_icon_Checkyourweight,
          backgroundColor: '#E8FAE4',
        },
        {
          label: 'Cofee',
          icon: icons.routine_habit_icon_Coffee,
          backgroundColor: '#D5F2EE',
        },
        {
          label: 'Drink tea',
          icon: icons.routine_habit_icon_Matchadrink,
          backgroundColor: '#B2BDF0',
        },
        {
          label: 'Healthy breakfast',
          icon: icons.routine_habit_icon_Friedeggs,
          backgroundColor: '#BACDF5',
        },
        {
          label: 'Meditate',
          icon: icons.routine_habit_icon_Meditate,
          backgroundColor: '#F5EDE4',
        },
        {
          label: 'Pray',
          icon: icons.routine_habit_icon_Pray,
          backgroundColor: '#F5F5F2',
        },
        {
          label: 'Take medicine',
          icon: icons.routine_habit_icon_Takemedicine,
          backgroundColor: '#C9EDF0',
        },
        {
          label: 'Take vitiamins',
          icon: icons.routine_habit_icon_Takevitamins,
          backgroundColor: '#F5EDE4',
        },
        {
          label: 'Workout',
          icon: icons.routine_habit_icon_Workout,
          backgroundColor: '#B5E2E6',
        },
      ],
    },
    {
      title: 'Clean my circle',
      description: 'Cleaning',
      data: [
        {
          label: 'Change the sheets',
          icon: icons.routine_habit_icon_Changesheets,
          backgroundColor: '#B1BE8A',
        },
        {
          label: 'Clean TV',
          icon: icons.routine_habit_icon_CleanTV,
          backgroundColor: '#F4E7B4',
        },
        {
          label: 'Clean my Bathroom',
          icon: icons.routine_habit_icon_Cleanmybathroom,
          backgroundColor: '#F9F8E9',
        },
        {
          label: 'Clean my car',
          icon: icons.routine_habit_icon_Cleanmycar,
          backgroundColor: '#F6E7E7',
        },
        {
          label: 'Clean my kitchen',
          icon: icons.routine_habit_icon_Cleanmykitchen,
          backgroundColor: '#F0D5D5',
        },
        {
          label: 'Clean sink & toilet',
          icon: icons.routine_habit_icon_Cleantoilets,
          backgroundColor: '#EBC0C9',
        },
        {
          label: 'Do gradening',
          icon: icons.routine_habit_icon_Dogardening,
          backgroundColor: '#D1E6D5',
        },
        {
          label: 'Do the laundry',
          icon: icons.routine_habit_icon_Throwawayoldclothes,
          backgroundColor: '#F5F8F3',
        },
        {
          label: 'Take the trash out',
          icon: icons.routine_habit_icon_Refusetowaste,
          backgroundColor: '#F3DFAD',
        },
      ],
    },
    {
      title: 'Body care',
      description: 'Care Your Body',
      data: [
        {
          label: 'Body lotion',
          icon: icons.routine_habit_icon_Moisturize,
          backgroundColor: '#C5D8AB',
        },
        {
          label: 'Bubble bath',
          icon: icons.routine_habit_icon_Addbathsalts,
          backgroundColor: '#8CBDBD',
        },
        {
          label: 'Deep breath',
          icon: icons.routine_habit_icon_Deepbreath,
          backgroundColor: '#DCD6FF',
        },
        {
          label: 'Foot bath',
          icon: icons.routine_habit_icon_Footbath,
          backgroundColor: '#D6F0FF',
        },
        {
          label: 'Hair removal',
          icon: icons.routine_habit_icon_Hairremoval,
          backgroundColor: '#DEFFEF',
        },
        {
          label: 'Wash hands',
          icon: icons.routine_habit_icon_Facecream,
          backgroundColor: '#FFFAF0',
        },
      ],
    },
    {
      title: 'Learn and think ',
      description: 'Innovative',
      data: [
        {
          label: 'Check your mail',
          icon: icons.routine_habit_icon_Checkyouremail,
          backgroundColor: '#D5F2EE',
        },
        {
          label: 'Go to school',
          icon: icons.routine_habit_icon_Gotoschool,
          backgroundColor: '#E8FAE4',
        },
        {
          label: 'Go to museum',
          icon: icons.routine_habit_icon_Gotomuseum,
          backgroundColor: '#FFFDFA',
        },
        {
          label: 'Go to work',
          icon: icons.routine_habit_icon_Gotowork,
          backgroundColor: '#F7F7F0',
        },
        {
          label: 'Mind game',
          icon: icons.routine_habit_icon_Mindgame,
          backgroundColor: '#F7E6F5',
        },
        {
          label: 'Paint or draw',
          icon: icons.routine_habit_icon_Useillustrations,
          backgroundColor: '#EADFF5',
        },
        {
          label: 'practice a new  skill',
          icon: icons.routine_habit_icon_Practiceanewskill,
          backgroundColor: '#B5E2E6',
        },
        {
          label: 'Read newspaper',
          icon: icons.routine_habit_icon_Readnewspaper,
          backgroundColor: '#E8FAE4',
        },
        {
          label: 'Reflect on my day',
          icon: icons.routine_habit_icon_Reflectonmyday,
          backgroundColor: '#F5F5F2',
        },
        {
          label: 'Try something new',
          icon: icons.routine_habit_icon_Trysomethingnew,
          backgroundColor: '#BACDF5',
        },
      ],
    },
    {
      title: 'Grow your health ',
      description: 'Health',
      data: [
        {
          label: 'Deep breath',
          icon: icons.routine_habit_icon_Lunges,
          backgroundColor: '#B2BDF0',
        },
        {
          label: 'Drink water',
          icon: icons.routine_habit_icon_DrinkWater,
          backgroundColor: '#EBC0C9',
        },
        {
          label: 'Meditate',
          icon: icons.routine_habit_icon_Meditate,
          backgroundColor: '#F0D5D5',
        },
        {
          label: 'Ride a bike',
          icon: icons.routine_habit_icon_Ride,
          backgroundColor: '#F6E7E7',
        },
        {
          label: 'Running',
          icon: icons.routine_habit_icon_Run,
          backgroundColor: '#F9F8FE',
        },
        {
          label: 'Stretch',
          icon: icons.routine_habit_icon_Stretch,
          backgroundColor: '#F4E7B4',
        },
        {
          label: 'Swimming',
          icon: icons.routine_habit_icon_Swim,
          backgroundColor: '#B1BE8A',
        },
        {
          label: 'workout',
          icon: icons.routine_habit_icon_Workout,
          backgroundColor: '#D1E6D5',
        },
        {
          label: 'Yoga',
          icon: icons.routine_habit_icon_Yoga,
          backgroundColor: '#F2EFC9',
        },
      ],
    },
  ];

  return (
    <View style={{flex: 1}}>
      <FAB
        icon="plus"
        customSize={60}
        style={styles.fab}
        color="#000"
        onPress={openBottomSheet}
      />
      <View style={{backgroundColor: 'yellow'}}>
        <View style={{flexDirection: 'row', alignContent: 'space-around'}}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
              padding: 20,
              marginLeft: 20,
            }}>
            {moment(selectedDate).format('MMM YYYY')}
          </Text>
          <TouchableOpacity onPress={() => handleTodaySelected(moment())}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
                padding: 20,
                marginLeft: 20,
              }}>
              today
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <CalendarStrip
            ref={ref => (calendarRef = ref)} // Save a reference to the CalendarStrip
            selectedDate={selectedDate}
            onDateSelected={(event, date) => onDateSelected(event, date)}
            onMonthChanged={onMonthChanged}
            onWeekChanged={onWeekChanged} // Handle week change
            showMonth={false}
            maxDayComponentSize={80}
            scrollable
            // startingDate={moment()}
            scrollToOnSetSelectedDate
            scrollerPaging={true}
            dayComponentHeight={100}
            style={{
              width: '95%',
              height: 90,
              alignSelf: 'center',
              paddingHorizontal: 10,
              // paddingBottom: 10,
              borderRadius: 40,
            }}
            calendarHeaderStyle={{color: 'white'}}
            calendarColor={'#7743CE'}
            dateNumberStyle={{color: 'white'}}
            dateNameStyle={{
              color: 'white',
              textTransform: 'capitalize',
              fontWeight: 'bold',
            }}
            highlightDateNumberStyle={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 18,
            }}
            highlightDateNumberContainerStyle={{
              backgroundColor: 'blue',
              borderRadius: 40,
              padding: 4,
              marginHorizontal: 10,
              minWidth: 30,
              minHeight: 30,
            }}
            highlightDateNameStyle={{
              color: 'red',
              // fontFamily: 'Roboto-Medium',
              fontSize: 11,
              marginHorizontal: 1.5,
              padding: 5.5,
              borderTopEndRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            highlightDateContainerStyle={{
              backgroundColor: 'orange',
              marginTop: 5,
              paddingVertical: 18,
              height: 90,
              color: 'white',
            }}
            disabledDateNameStyle={{color: 'grey'}}
            disabledDateNumberStyle={{color: 'grey'}}
            weekendDateNameStyle={{color: 'red'}}
            weekendDateNumberStyle={{color: 'red'}}
            // datesWhitelist={datesWhitelist}
            // datesBlacklist={datesBlacklist}
            iconLeft={require('../assets/icons/leftArrow.png')}
            iconRight={require('../assets/icons/rightArrow.png')}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <BottomSheet
          ref={BottomSheetRef}
          // index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-between',
              alignItems: 'center',
              gap: 85,
            }}>
            <IconButton
              icon={() => (
                <Image
                  source={BackArrow}
                  style={{width: 30, height: 30, tintColor: 'black'}}
                />
              )}
              size={20}
              onPress={closeBottomSheet}
            />
            <Text style={{color: 'red', fontSize: 15}}>Add your New Task</Text>
            <IconButton
              icon={() => (
                <Image
                  source={SearchImg}
                  style={{width: 30, height: 30, tintColor: 'black'}}
                />
              )}
              size={20}
              onPress={closeBottomSheet}
            />
          </View>

          <View style={{gap: 25, flex: 1}}>
            <BottomSheetSectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <Card
                  style={{
                    backgroundColor: item.backgroundColor,
                    borderRadius: 20,
                    marginTop: 8,
                    marginBottom: 8,
                  }}>
                  <List.Item
                    left={() => (
                      <Image
                        style={{width: 50, height: 50, marginLeft: 20}}
                        source={item.icon}
                      />
                    )}
                    title={item.label}></List.Item>
                </Card>
              )}
              renderSectionHeader={({section: {title, description}}) => (
                <View style={{flex: 1}}>
                  <Text style={styles.ListHeader}>{title}</Text>
                  <Text style={styles.headerDescription}>{description}</Text>
                </View>
              )}
            />
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};
//   }

export default ModalScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
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
    backgroundColor: 'red',
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
});
