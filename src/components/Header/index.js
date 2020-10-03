import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Header(props) {
    const title = props.title;
    const left = props.left;
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  }