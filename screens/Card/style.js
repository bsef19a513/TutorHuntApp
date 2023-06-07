import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({

    outerView: {
        width: width - 80,
        height: 150,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 40,
        marginVertical: 10
    },
    innerView: {
        flex: 1,
        flexDirection: "row",
        height: "100%"
    },
    textViewStyle: {
        flex: 2,
        height: "100%"
    },
    textStyle: {
        marginLeft: 10,
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 15
    },
    innerTextStyle: {
        fontWeight: "normal",
        fontSize: 15
    },
    imageStyle: {
        width: "40%",
        height: 148,
        resizeMode: "contain",
        borderRadius: 10
    },
    button: {
        backgroundColor: "black",
        width: 80,
        marginLeft: 105,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
        marginVertical: 2,
        textAlign: "center"
    }
})

export default styles;