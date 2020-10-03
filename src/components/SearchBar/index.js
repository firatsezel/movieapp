import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function SearchBar(props) {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.textView}>
                <View style={styles.iconView}>
                </View>
                <View style={styles.middleView}>
                    <TextInput style={styles.textInputStyle} placeholder="search" onChangeText={(text) => props.onChangeEvent(text)} />
                </View>
                <View style={styles.iconView}>
                </View>
            </View>
        </View>
      </View>
    );
  }