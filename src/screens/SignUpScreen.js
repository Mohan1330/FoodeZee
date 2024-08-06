import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  // alert("hsi")
  // const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '145321833891-f1ab98klcfvd5d22ssee3nle4lsningj.apps.googleusercontent.com',
    });
  }, []);
  // const user =  GoogleSignin.addScopes({
  //   scopes: ['https://www.googleapis.com/auth/user.gender.read'],
  // });

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const usrInfo = await GoogleSignin.signIn();

  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }finally{
  //     const getuser = await GoogleSignin.getCurrentUser()
  //     console.log("getuser",getuser);
  //     setUserInfo(getuser);
  //   }
  // };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     setUserInfo({usrInfo: null}); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // // Get the users ID token
    // const {user,idToken} = await GoogleSignin.signIn();
    // console.log(user,);
    // Alert.alert('hii');

    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    try {

        // Navigate to the desired screen

      // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: trrue});
      const currentUser = await auth().currentUser;
      // Sign out the current user if any
      if (currentUser) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await auth().signOut();
      }    
      console.log("data",data)
    } catch (e) {
      console.log(e);
    } finally {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* {userInfo != null && (
        <Text style={{color: '#0000'}}>{userInfo.user.name}</Text>
      )}
      {userInfo != null && <Text>{userInfo.user.email}</Text>}
      {userInfo != null && (
        <Image
          source={{uri: userInfo.user.photo}}
          style={{width: 100, height: 100}}
        />
      )}
      {userInfo == null ? (
        <TouchableOpacity onPress={() => onGoogleButtonPress()}>
          <Text style={styles.label}>Sign With Google</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => signOut()}>
          <Text style={styles.label}>Signout With Google</Text>
        </TouchableOpacity>
      )} */}

      <TouchableOpacity onPress={() => onGoogleButtonPress()}>
        <Text style={styles.label}>Sign With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  label:{
    fontFamily:'Gilroy_Semibold',
    fontSize:15,
    
  }
});
