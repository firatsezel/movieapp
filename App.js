/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Provider as StateProvider } from 'react-redux';
//import store from './src/redux/store';
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import returnStoreAndPersistor from './src/redux/store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, DetailScreen, ProfileScreen } from './src/screens/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const { store, persistor } = returnStoreAndPersistor();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerLeft: null }} options={{ title: 'Movie Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </StoreProvider>
  );
}