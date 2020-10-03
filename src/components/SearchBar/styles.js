import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    subContainer: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 30,
        height: 22,
        marginTop: 5,
        flexDirection: 'row',
    },
    iconView: {
        flex: 1,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleView: {
        flex: 8,
        height: 22
    },
    textInputStyle: {
        height: 22
    },
});

module.exports = styles;