import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    largeColumnContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    smallColumnContainer: {
        flex: 1,
        margin: 10,
        flexDirection: 'column'
    },
});

module.exports = styles;