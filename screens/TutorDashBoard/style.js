import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
    width: '45%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 15
  },
  sectionImage: {
    width: '100%',
    height: 150, // Adjust the height as needed
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
    flexWrap: 'wrap', // Add this property to allow wrapping of sections
    justifyContent: 'center', // Adjust the alignment as needed
  },
  singleItem: {
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 17,
    marginTop: 24, // Add margin-top to create space for the location section
  }
});

export default styles;
