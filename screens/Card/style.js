import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  outerView: {
    width: width - 80,
    height: 195,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    overflow: 'hidden', // Added to clip any overflow from child components
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 10,
  },
  textViewStyle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center', // Center the text vertically
    paddingRight: 10, // Added paddingRight to create space for buttons
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333', // Changed the text color to improve readability
  },
  innerTextStyle: {
    fontWeight: 'normal',
    fontSize: 15,
    color: '#555', // Changed the text color to improve readability
  },
  imageStyle: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Display buttons horizontally
    position: 'absolute', // Position the button container absolutely within the parent
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#f52d56', // Changed the button color
    paddingVertical: 5, // Increased padding for better touch area
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10, // Added margin to separate buttons
    marginLeft: 5, // Added margin between buttons
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
