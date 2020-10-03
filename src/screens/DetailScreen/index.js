import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getDetails, getCredits } from '../../services/index';
import { images } from '../../resources/index';
import { Header, BackgroundImage } from '../../components/index';
import styles from './styles';

export default function DetailScreen({ route, navigation }) {
  const [movie, setMovie] = useState(route.params.movie);
  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [isFav, setFav] = useState(route.params.movie.isFav);
  const windowWidth = Dimensions.get('window').width;

  const getDetail = async (id) => {
    const tempDetail = await getDetails(id);
    setDetails(tempDetail);
  };

  const getCredit = async (id) => {
    const tempCredit = await getCredits(id);
    setCredits(tempCredit);
  };

  useEffect(() => {
    const { id } = route.params.movie;
    setMovie(route.params.movie);
    getDetail(id);
    getCredit(id);
    return () => {}
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
        <BackgroundImage backdrop_path={movie.backdrop_path} />
        <View style={{ width: windowWidth, height: 80, flexDirection: 'row' }}>
            <TouchableOpacity underlayColor="transparent" onPress={() => {
                route.params.onPress();
                setFav(!isFav);
              }} style={styles.favStyle}>
                <Image source={isFav ? images.heart_filled : images.heart_empty} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          <View style={styles.mainMenu}>
            <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 15 }}>Duration</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 15, opacity: 0.3 }}>{details.runtime} min</Text>
          </View>
          <View style={styles.mainMenu}>
            <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 15 }}>Genre</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 15, opacity: 0.3 }}>{details.genres ? details.genres[0].name : ''}</Text>
          </View>
          <View style={styles.mainMenu}>
            <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 15 }}>Language</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 15, opacity: 0.3 }}>{details.original_language}</Text>
          </View>
        </View>
        <View style={{ width: windowWidth, height: 30, flexDirection: 'row' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Synopsis</Text>
          </View>
          <View style={styles.emptyView} />
          <View style={styles.emptyView} />
        </View>
        <View style={{ width: windowWidth, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ height: 60, flexDirection: 'column', width: '85%'}}>
            <Text numberOfLines={3} style={{ marginTop: 10, fontWeight: 'bold', fontSize: 13, color: 'gray', opacity: 0.7 }}>{details.overview}</Text>
          </View>
        </View>
        <View style={{ width: windowWidth, height: 20 }}>
          <Text numberOfLines={3} style={{ marginTop: 5, marginLeft: windowWidth - 110,  fontSize: 13, color: 'red', opacity: 0.9 }}>Read More..</Text>
        </View>
        <View style={{ width: windowWidth, height: 30, flexDirection: 'row' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Main Cast</Text>
          </View>
          <View style={styles.emptyView} />
          <View style={styles.emptyView} />
        </View>
        {credits.cast ? 
          <View style={{ width: windowWidth - 20, height: 100, flexDirection: 'row', padding: 5 }}>
            <View style={styles.castContainer}>
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[0].character}</Text>
              <Image source={{uri: `https://image.tmdb.org/t/p/w500${credits.cast[0].profile_path}`}}
                  style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 25 }} />
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[0].name}</Text>
            </View>
            <View style={styles.castContainer}>
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[1].character}</Text>
              <Image source={{uri: `https://image.tmdb.org/t/p/w500${credits.cast[1].profile_path}`}}
                  style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 25 }} />
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[1].name}</Text>
            </View>
            <View style={styles.castContainer}>
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[2].character}</Text>
              <Image source={{uri: `https://image.tmdb.org/t/p/w500${credits.cast[2].profile_path}`}}
                  style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 25 }} />
              <Text numberOfLines={1} style={styles.castTextView}>{credits.cast[2].name}</Text>
            </View>
          </View>
        :
          null
        }
        <View style={{ width: windowWidth, height: 30, flexDirection: 'row' }}>
          <View style={{ flex: 2, height: 30, flexDirection: 'column', marginLeft: 25 }}>
            <Text style={styles.titleText}>Main Technical Team</Text>
          </View>
          <View style={styles.emptyView} />
        </View>
        {credits.crew ? 
          <View style={{ width: windowWidth - 20, height: 40, flexDirection: 'row' }}>
            <View style={styles.crewView}>
              <Text numberOfLines={1} style={styles.mainTechStyle}>{credits.crew[0].name}</Text>
            </View>
            <View style={styles.crewView}>
              <Text numberOfLines={1} style={styles.mainTechStyle}>{credits.crew[1].name}</Text>
            </View>
            <View style={styles.crewView}>
              <Text numberOfLines={1} style={styles.mainTechStyle}>{credits.crew[2].name}</Text>
            </View>
          </View>
        :
          null
        }
      </ScrollView>
    </SafeAreaView>
  );
}