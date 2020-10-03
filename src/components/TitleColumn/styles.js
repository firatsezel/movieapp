import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titletyle: {
        alignSelf: 'center',
        width: '90%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftSide: {
        flex: 5,
        height: 40,
        justifyContent: 'center'
    },
    rightStyle: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.6,
        textAlign: 'left',
    },
    imageStyle: { width: 24, height: 24 }
});

module.exports = styles;