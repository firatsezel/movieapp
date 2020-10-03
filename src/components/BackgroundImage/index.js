import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default function BackgroundImage(props) {
    const { backdrop_path } = props;
    return (
        <View style={styles.container}> 
          <Image source={{uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`}}
                style={styles.imageStyle} />
        </View>
    );
}