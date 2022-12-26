import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('screen');

const styles: any = StyleSheet.create({
    modalBackground: {
        width: screen.width,
        height: screen.height,
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    activityIndicatorWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        maxWidth: screen.width * 0.6,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14
    },
    dialogWrapper: {
        backgroundColor: '#fff',
        borderRadius: 5,
        display: 'flex',
        flex: 0,
        width: screen.width * 0.8,
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    headerRow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingHorizontal: 20
    },
    bodyRow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    footerRow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: '#86939e'
    },
    footerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonBorder: {
        borderLeftWidth: 0.5,
        borderColor: '#86939e'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 16
    },
    buttonText: {
        color: '#61849B',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }
});

export default styles;
