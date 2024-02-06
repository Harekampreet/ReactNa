import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 250,
  },
});
