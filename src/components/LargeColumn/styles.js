import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        height: 220,
        flexDirection: 'row',
    },
    imageContainer: { flex: 3, width: '80%', height: '90%', alignSelf: 'center' },
    posterStyle: { flex: 1, borderRadius: 20 },
    favStyle: { zIndex: 1, position: 'absolute', top: 5, right: 5, width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: 'black', alignItems: 'center', justifyContent: 'center' },
    imageStyle: { width: 18, height: 18 },
    titleTextStyle: { fontWeight: 'bold', fontSize: 22 },
    textStyles: { fontWeight: 'bold', fontSize: 16, opacity: 0.4 },
    subContainer: { flex: 5, alignItems: 'center', justifyContent: 'center' },
    titleStyle: {
        flex: 1,
        width: '90%',
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    subTitle: { height: '30%', marginTop: 15, flexDirection: 'column', justifyContent: 'space-between' },
    footer: { height: '20%', marginBottom: 15, flexDirection: 'column', justifyContent: 'space-between' },
});

module.exports = styles;