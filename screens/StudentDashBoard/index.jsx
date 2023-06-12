import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const StudentDashboardScreen = ({navigation}) => {
  const handleSectionPress = (section) => {
    if(section == "searchTutorSection")
    {
      navigation.navigate("Home")
    }
    if(section == "myTutorsSection")
    {
      navigation.navigate("Home")
    }
    if(section == "requestSection")
    {
      navigation.navigate("Home")
    }
    if(section == "chatSection")
    {
      navigation.navigate("InboxComponent")
    }
    // console.log(`Clicked on ${section}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
            style={styles.section}
            onPress={() => handleSectionPress('requestSection')}
        >
          <Image
            source={require('../../assets/request.jpg')}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>My Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleSectionPress('chatSection')}
        >
          <Image
            source={require('../../assets/chat.jpg')}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>My Chats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
            style={styles.section}
            onPress={() => handleSectionPress('searchTutorSection')}
        >
          <Image
            source={require('../../assets/searchTutors.jpg')}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>Search Tutors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleSectionPress('myTutorsSection')}
        >
          <Image
            source={require('../../assets/myTutor.png')}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>My Tutors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentDashboardScreen;