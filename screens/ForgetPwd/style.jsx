import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({

    container:{
        paddingTop:20,
        paddingHorizontal:20
    },
    title:{
        fontWeight:"bold",
        color:COLORS.title,
        fontSize:SIZES.h1,
        marginVertical:10
    },
    subtitle:{
        fontWeight:"500",
        color:COLORS.title
    },
    inputStyle:{
        borderBottomColor:COLORS.lightGrey,
        borderBottomWidth:1,
        marginVertical:30,
        paddingVertical:10,
        fontSize:SIZES.h4,
        color:COLORS.title
    },
    button:{
        backgroundColor:COLORS.primary,
        padding:20,
        borderRadius:10,
        marginHorizontal:20,
        justifyContent:"center",
        marginTop:60,
        alignItems:"center"
    },
    buttontext:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:SIZES.h4
    }
})

export default styles;