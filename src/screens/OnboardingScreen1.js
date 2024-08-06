import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native-svg';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  // const {width} = Dimensions.get('screen');
  // console.log('Screen width:', width);

  const handleDone = () => {
    navigation.navigate('LoginScreen');
  };
  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.Donebutton} {...props}>
        <Text style={{fontFamily: 'Gilroy_Bold', fontSize: 19, color: '#000'}}>
          Done
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{paddingHorizontal: 15}}
        // subTitleStyles={styles.subtitle}
        // titleStyles={styles.title}
        onDone={handleDone}
        controlStatusBar={true}
        onSkip={handleDone}
        bottbottomBarStyle={{backgroundColor: 'red'}}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        bottomBarHeight={100}
 
        pages={[
          {
            backgroundColor: '#fef3c7',
            // backgroundColor: '#FF614E',

            image: (
              <View style={styles.lottie}>
                <LottieView
                  height={400}
                  width={300}
                  source={require('../assets/animations/medidation.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            titleStyles: {
              fontSize: 32,
              fontFamily: 'Gilroy_Extrabold',
              marginRight: 30,
              marginTop: -100,
            },
            subTitleStyles: {
              fontFamily: 'Poppins_Bold',
              fontSize: 15,
              marginTop: -45,
              marginLeft: 10,
              marginRight: 10,
              color: 'black',
            },
            title: 'Lets Explore your self..',
            subtitle:
              'Take a Deap Breath and Relax...Everything going to turn out, better than you expected...',
          },
          // {
          //   backgroundColor: '#a7f3d0',
          //   image: (
          //     <>
          //       <View
          //         style={{
          //           justifyContent: 'center',
          //           alignItems: 'center',
          //           // backgroundColor: 'red',
          //           marginTop: -100,
          //         }}>
          //         <View
          //           style={{
          //             borderRadius: 300 / 2,
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             height: 250,
          //             width: 250,
          //             marginTop: 100,
          //             //   backgroundColor: 'pink',
          //           }}>
          //           <View>
          //             {/* <ImageBackground
          //               source={require('../assets/images/world.png')}
          //               resizeMode="cover"
          //               style={styles.image}></ImageBackground> */}
          //             <LottieView
          //               height={800}
          //               width={400}
          //               marginTop={-340}
          //               source={require('../assets/animations/world.json')}
          //               autoPlay
          //               loop
          //             />

          //             <LottieView
          //               height={300}
          //               width={350}
          //               marginTop={-740}
          //               source={require('../assets/animations/Relax.json')}
          //               autoPlay
          //               loop
          //             />
          //           </View>
          //         </View>
          //       </View>
          //     </>
          //   ),
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
          // },
          {
            // backgroundColor: '#fef3c7',
            backgroundColor: '#29BFDF',

            image: (
              <View style={styles.lottie}>
                <LottieView
                  height={400}
                  width={300}
                  source={require('../assets/animations/clock.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            titleStyles: {
              fontSize: 32,
              fontFamily: 'Gilroy_Extrabold',
              marginRight: 30,
              marginTop: -105,
            },
            subTitleStyles: {
              color: '#FAF6F0',
              fontFamily: 'Poppins_Bold',
              fontSize: 15,
              marginTop: -50,
              marginLeft: 5,
              marginRight: 5,
            },
            title: 'Track Your Activity...',
            subtitle:
              'Success is the sum of small efforts-repeated day in and day out... The future depends on what you do today...',
          },
        ]}
      />
      
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  Donebutton: {
    padding: 25,
    backgroundColor: '#fff',
    fontFamily: 'Gilroy_Bold',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 10,
  },
  image: {
    borderRadius: 300 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 350,
    marginTop: -160,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Gilroy_Extrabold',
    marginRight: 50,
    marginTop: -100,
  },
  bottomBarText: {
    fontFamily: 'Gilroy_Extrabold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    // Add other style properties as needed
  },
  subtitle: {
    // color: 'red',
    // fontFamily:'Gilroy_Bold',
    fontFamily: 'Poppins_Bold',
    fontSize: 15,
    marginTop: -45,
    // marginRight: 20,
  },
  //   lottie1:{

  //   }
  lottie: {
    // backgroundColor:'red',
    // marginTop:-10
  },
});
