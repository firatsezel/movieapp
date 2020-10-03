import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../resources/index';
import styles from './styles';

function validateGrid(grid) {
  switch(grid) {
    case 'single':
      return images.menu;
      break;
    
    case 'double':
      return images.grid;
      break;

    default:
      return images.menu;
    }
}

export default function TitleColumn(props) {
    const { grid, onPress } = props;
    return (
      <View style={styles.titletyle}>
        <View style={styles.leftSide}>
            <Text style={styles.textStyle}>Most Popular</Text>
        </View>
        <TouchableOpacity onPress={onPress} underlayColor="transparent" style={styles.rightStyle}>
          <Image source={validateGrid(grid)}
            style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  }