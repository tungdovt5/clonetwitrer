import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../TabBar/HomeScreen';
import Chat from '../TabBar/Chat';
import Notification from '../TabBar/Notification';
import Search from '../TabBar/Search';

const App = TabNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    HomeScreen: {
      screen: HomeScreen,
    },
    Search: {
      screen: Search,
    },
    Notification: {
      screen: Notification,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
export default App;
