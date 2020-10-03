import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        height: 220,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 5,
        width: '90%',
        height: '90%',
        alignSelf: 'center',
    },
    posterStyle: { flex: 1, borderRadius: 20 },
    favStyle: {
        zIndex: 1,
        position: 'absolute',
        top: 5,
        right: 5,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: { width: 18, height: 18 },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        flex: 1,
        width: '90%',
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    subTitle: {
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        opacity: 0.4
    },
});

module.exports = styles;