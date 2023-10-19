import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c0c0c',
        justifyContent: 'flex-end',
    },
    line: {
        flexDirection: "row",
        width: "100%",
        margin: 3,
    },

    icon:{
        fontSize: 36,
        textAlign: "center",
    },

    erase: {
        alignItems: 'flex-end',
        marginRight: 37,
        marginBottom: 21, 
        marginTop: 27,  
    },

    buttons: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 33,
    },

});