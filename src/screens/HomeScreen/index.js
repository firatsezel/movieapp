import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getMovies, getGenres } from '../../services/index';
import { LargeColumn, SmallColumn, Header, SearchBar, TitleColumn } from '../../components/index';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux'

export default function HomeScreen({ navigation }) {
  const moviesList = useSelector(state => state.movieItemsReducer)
  const dispatch = useDispatch()
  const setItem = item => dispatch({ type: "SET_MOV", payload: item })
  const setFav = item => dispatch({ type: "SET_FAV", payload: item })

  const [movies, setMovies] = useState([]);
  const [searchText, setText] = useState('');
  const [genres, setGenres] = useState([]);
  const [grid, setGrid] = useState("single");

  const movieRequest = async () => {
    const tempMovies = await getMovies();
    if (moviesList.length === 0) {
      setItem(tempMovies);
    }
    setMovies(tempMovies);
  };

  const genreRequest = async () => {
    const tempGenres = await getGenres();
    setGenres(tempGenres);
  };

  useEffect(async () => {
    movieRequest();
    genreRequest();
    return () => {}
  }, []);

  const renderRow = ({item}) => {
    if (grid === "single") {
      return (
        <View style={styles.largeColumnContainer}>
          <LargeColumn props={item} onFavPress={() => onFavPress(item)} genres={genres} onPress={() => goDetails(item)} />
        </View>
      );
    }
    return (
      <View style={styles.smallColumnContainer}>
        <SmallColumn onFavPress={() => onFavPress(item)} props={item} genres={genres} onPress={() => goDetails(item)} />
      </View>
    );
  };

  function setGridValue() {
    if (grid === "single") {
      setGrid("double");
    } else {
      setGrid("single");
    }
  }

  function goDetails(movie) {
    navigation.navigate("Detail", { movie, onPress: () => onFavPress(movie) });
  }

  function onFavPress(movie) {
    setFav({id: movie.id, fav: !movie.isFav});
    setMovies(moviesList);
  }

  function onChangeEvent(text) { setText(text) }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChangeEvent={(text) => onChangeEvent(text)} />
      <TitleColumn grid={grid} onPress={() => setGridValue()} />
      {moviesList.length > 0 ?  
        <FlatList
          data={searchText.length > 0 ? moviesList.filter(item => item.title.includes(searchText)): moviesList}
          numColumns={grid === "single" ? 1 : 2}
          key={grid}
          renderItem={renderRow}
          onEndReachedThreshold={0.1}
        />
      : null}
    </SafeAreaView>
  );
}
