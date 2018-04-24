/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
// import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import TabMenu from './src/components/TabMenu';

const App = StackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: Home,
    navigationOptions: { header: null },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: { header: null },
  },
  Login: {
    screen: Login,
    navigationOptions: { header: null },
  },
  TabMenu: {
    screen: TabMenu,
    navigationOptions: { header: null },
  },
});
export default App;
