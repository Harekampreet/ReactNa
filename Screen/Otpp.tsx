import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Otpp = (props:any) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.pic}>
        <Image source={require('../assets/otp.png')} />
      </View>
      <Text style={styles.fp}>Check Phone for OTP</Text>
      <Text style={styles.para}>
        Please type the verification code sent to your phone
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 39,
        }}>
        <Image source={require('../assets/1.png')} style={{marginRight: 15}} />
        <Image source={require('../assets/1.png')} style={{marginRight: 15}} />
        <Image source={require('../assets/1.png')} style={{marginRight: 15}} />
        <Image source={require('../assets/1.png')} style={{marginRight: 15}} />
      </View>
      <Button title={'Continue'} 
 onPress={()=> props.navigation.navigate({})}/>
      <Text
        style={{
          textAlign: 'center',
          color: '#999999',
          fontSize: 12,
          paddingTop: 16,
          paddingBottom: 9,
        }}>
        Didn't get the code
      </Text>
      <Text style={{textAlign:"center",color:"#AA1D1E",fontSize:14}}>Resend</Text>
    </View>
  );
};

export default Otpp;

const styles = StyleSheet.create({
  pic: {
    alignItems: 'center',
    paddingTop: 90,
  },
  fp: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: '#1A1A1A',
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 82,
    color: '#999999',
    lineHeight: 30,
  },
});
