import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './style';

const Card = (props) => {
  const { name, age, exp, qual, phoneNumber, navigation } = props;

  const handleChatPress = () => {
    navigation.navigate('ChatComponent', {
      receiverId: props.id,
      receiverName: name,
    });
  };

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <Image
          source={require('../../assets/tutor.jpg')}
          style={styles.imageStyle}
        />
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Name: <Text style={styles.innerTextStyle}>{name}</Text></Text>
          <Text style={styles.textStyle}>Age: <Text style={styles.innerTextStyle}>{age}</Text></Text>
          <Text style={styles.textStyle}>Experience: <Text style={styles.innerTextStyle}>{exp}</Text></Text>
          <Text style={styles.textStyle}>Qualification: <Text style={styles.innerTextStyle}>{qual}</Text></Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleChatPress} style={styles.button}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCallPress} style={styles.button}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
