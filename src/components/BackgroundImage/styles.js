import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        height: 200,
        backgroundColor: 'blue'
    },
    imageStyle: {
        width: windowWidth,
        height: 200
    },
});

module.exports = styles;