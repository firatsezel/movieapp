import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../resources/index';
import styles from './styles';

function getGenresByIds(ids, genres) {
    let array = [];
    ids.map((id) => {
        const name = genres.find(x => x.id === id).name;
        array.push(name);
    });
    return array;
}

function renderGenres(movieGenre) {
    return <Text style={styles.textStyles}>{movieGenre[0]}</Text>
}

export default function SmallColumn(props) {
  let movieGenre = [];
  const { adult, title, poster_path, vote_average, release_date, original_language, genre_ids, isFav } = props.props;
  if (props.genres.length > 0) {
    movieGenre = getGenresByIds(genre_ids, props.genres)
  }
  
  return (
    <TouchableOpacity underlayColor="transparent" style={styles.container} onPress={props.onPress}>
        <View style={styles.imageContainer}>
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} style={styles.posterStyle} />
            <TouchableOpacity underlayColor="transparent" onPress={props.onFavPress} style={styles.favStyle}>
                <Image source={isFav ? images.heart_filled : images.heart_empty} style={styles.imageStyle} />
            </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
            <View style={styles.titleStyle}>
                <View style={styles.subTitle}>
                    <Text style={styles.textStyle}>{release_date.split("-")[0]} | {original_language}</Text>
                    {renderGenres(movieGenre)}
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
}