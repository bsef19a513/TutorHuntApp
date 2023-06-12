import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topcontainer:{
        marginTop:100,
        alignItems:"center"
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:SIZES.h1*1.5
    },
    subtitle:{
        color:COLORS.white,
        fontSize:SIZES.h3,
        paddingTop:3
    },
    datacontainer:{
        marginTop:50
    },
    inputstyle:{
        color:COLORS.white,
        fontSize:SIZES.h3,
        borderBottomColor:COLORS.white,
        borderBottomWidth:1,
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:2,
    },
    btncontainer:{
        marginTop:150
    },
    button1:{
        backgroundColor:COLORS.primary,
        padding:20,
        borderRadius:10,
        marginHorizontal:30,
        justifyContent:"center",
        marginVertical:10,
        alignItems:"center"
    },
    btntext:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:SIZES.h4
    },
    button2:{
        flexDirection:"row",
        backgroundColor:COLORS.blue,
        padding:15,
        borderRadius:10,
        marginHorizontal:30,
        justifyContent:"center",
        marginVertical:10,
        alignItems:"center"
    },
    logo:{
        marginRight:10
    },
    text:{
        color:COLORS.white,
        textAlign:"center",
        fontWeight:"600",
        fontSize:SIZES.h5,
        marginTop:10
    },
    bottomcontainer:{
        justifyContent:"center",
        marginTop:150
    },
    errorstyle:{
        color:COLORS.primary,
        marginLeft:15,
        fontWeight:"600",
        fontSize:SIZES.h4
    }
    
})

export default styles;