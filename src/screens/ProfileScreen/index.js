import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';

export default function ProfileScreen({ navigation }) {
  const [text, setText] = useState('');

  useEffect(() => {
    return () => {}
  }, []);

  return (
    <View style={styles.container}>
        <Text>Profile!</Text>
    </View>
  );
}