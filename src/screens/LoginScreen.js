import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { colors } from '../theme';

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '145321833891-f1ab98klcfvd5d22ssee3nle4lsningj.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Sign out the current user if any

      // // Sign out the current user if any
      // // await auth().signOut();

      // // Sign in with Google
      // const { user, idToken } = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // await auth().signInWithCredential(googleCredential);

      // // Clear Google Sign-In cache
      // await GoogleSignin.clearCachedAccessToken();

      // Sign in with Google
      const {user, idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('GenderSelectionScreen');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <Card style={styles.card}>
          <View style={{flex: 1}}>
            <Image
              source={require('../assets/images/hero1.jpg')}
              style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: 'absolute',
                top: 10,
                right: 160,
                transform: [
                  {translateX: 20},
                  {translateY: 50},
                  {rotate: '-19deg'},
                ],
              }}
            />
            <Image
              source={require('../assets/images/hero2.jpg')}
              style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: 'absolute',
                top: -10,
                // right: 200,
                left: 60,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '-8deg'},
                ],
              }}
            />
            <Image
              source={require('../assets/images/hero3.jpg')}
              style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: 'absolute',
                top: 130,
                // right: 200,
                left: -120,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '15deg'},
                ],
              }}
            />
            {/* <Image
              source={require('../assets/images/hero3.jpg')}
              style={{
                height: 100,
                width: 100,
                borderRadius: 20,
                position: 'absolute',
                top: 30,
                // right: 200,
                left: 130,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '-7deg'},
                ],
              }}
            /> */}
            <Image
              source={require('../assets/images/hero4.jpg')}
              style={{
                height: 200,
                width: 200,
                borderRadius: 20,
                position: 'absolute',
                top: 190,
                // right: 200,
                left: 18,
                transform: [
                  {translateX: 50},
                  {translateY: 50},
                  {rotate: '-5deg'},
                ],
              }}
            />
            {/* <Text style={styles.LoginScreenText}>
              hai
            </Text> */}

            
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: 50,
            }}>
            <TouchableOpacity
              onPress={onGoogleButtonPress}
              //  onPress={navigation.navigate("SignUpScreen")}
              style={styles.gbutton}>
              <View style={styles.buttonContent}>
                <Image
                  style={styles.googleLogo}
                  source={require('../assets/images/googleLogo.png')}
                />
                <Text style={styles.label}>Sign With Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.primary,
    backgroundColor:'#dce6f7'
  },
  Top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  card: {
    width: 380,
    height: 800,
    // backgroundColor:'#FFCADA',
    backgroundColor:'#FFFFD2',

    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    // marginBottom: -550,
  },
  gbutton: {
    backgroundColor: 'grey',
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 17,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  googleLogo: {
    width: 25,
    height: 25,
  },
  LoginScreenText:{
    color:'red'

  },
  label: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Gilroy_Extrabold',
  },
});

export default LoginScreen;
