import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Otpe = (props:any) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.pic}>
        <Image source={require('../assets/otp.png')} />
      </View>
      <Text style={styles.fp}>Check Email for OTP</Text>
      <Text style={styles.para}>
        Please check your email account for<Text style={{fontWeight:"bold",color:"#1A1A1A"}}> harekampreet@gmail.com</Text> and click the "verify link inside"
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

export default Otpe;

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
    fontSize: 14,
    paddingHorizontal: 70,
    color: '#999999',
    lineHeight: 22,
  },
});
