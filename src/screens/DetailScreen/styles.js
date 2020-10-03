import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    favStyle: { zIndex: 1, position: 'absolute', top: -25, right: 15, width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'black', alignItems: 'center', justifyContent: 'center', backgroundColor :'lightgray' },
    mainMenu: { flex: 1, height: 80, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
    titleContainer: { flex: 1, height: 30, flexDirection: 'column', alignItems: 'center' },
    titleText: { marginTop: 10, fontWeight: 'bold', fontSize: 15 },
    crewView: { flex: 1, height: 40, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
    castTextView: { marginTop: 5, fontWeight: 'bold', fontSize: 13, opacity: 0.3 },
    castContainer: { flex: 1, height: 100, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
    emptyView: { flex: 1, height: 30 },
    mainTechStyle: { marginTop: 10, fontWeight: 'bold', fontSize: 13, opacity: 0.3 },
});

module.exports = styles;