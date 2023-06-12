import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingVertical: 80,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 16,
      paddingTop: 32,
    },
    profileLogo: {
      width: 40,
      height: 40,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    section: {
      width: '48%',
      borderWidth: 1,
      borderColor: '#dddddd',
      borderRadius: 8,
      overflow: 'hidden',
      marginLeft: 5,
      marginTop: 15
    },
    sectionImage: {
      width: '100%',
      height: 225,
      justifyContent: 'center'
    },
    sectionDescription: {
      fontSize: 18,
      fontWeight: 'bold',
      padding: 16,
      backgroundColor: COLORS.primary,
      color: COLORS.white
    },
    row: {
        flexDirection: 'row',
    },
    singleItem: {
      alignContent: 'center',
      borderWidth: 1,
      borderColor: '#dddddd',
      borderRadius: 8,
      overflow: 'hidden',
    },
  });
  
  export default styles;  