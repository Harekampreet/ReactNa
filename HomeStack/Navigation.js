import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Screen/Login.js';
import Language from "../Screen/Language.js";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default Navigation;