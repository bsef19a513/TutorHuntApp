import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const TutorDashboardScreen = ({navigation}) => {
  const handleSectionPress = (section) => {
    if(section == "requestSection")
    {
      navigation.navigate("Home")
    }
    if(section == "chatSection")
    {
      navigation.navigate("InboxComponent")
    }
    if(section == "myStudentsSection")
    {
      navigation.navigate("Home")
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
            <Text style={styles.sectionDescription}>Requests</Text>
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
        <TouchableOpacity
        style={styles.singleItem}
        onPress={() => handleSectionPress('myStudentsSection')}
        >
        <Image
            source={require('../../assets/myStudents.png')}
            style={styles.sectionImage}
            resizeMode="cover"
        />
        <Text style={styles.sectionDescription}>My Students</Text>
        </TouchableOpacity>
    </View>
//     <View style={styles.container}>
//     <View style={styles.row}>
//       <TouchableOpacity
//         style={[styles.section, styles.horizontalSection]}
//         onPress={() => handleSectionPress('Section 1')}
//       >
//         <Image
//           source={require('../../assets/searchTutors.jpg')}
//           style={styles.sectionImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.sectionDescription}>Section 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.section, styles.horizontalSection]}
//         onPress={() => handleSectionPress('Section 2')}
//       >
//         <Image
//           source={require('../../assets/searchTutors.jpg')}
//           style={styles.sectionImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.sectionDescription}>Section 2</Text>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.row}>
//       <TouchableOpacity
//         style={[styles.section, styles.verticalSection]}
//         onPress={() => handleSectionPress('Section 3')}
//       >
//         <Image
//           source={require('../../assets/searchTutors.jpg')}
//           style={styles.sectionImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.sectionDescription}>Section 3</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.section, styles.verticalSection]}
//         onPress={() => handleSectionPress('Section 4')}
//       >
//         <Image
//           source={require('../../assets/searchTutors.jpg')}
//           style={styles.sectionImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.sectionDescription}>Section 4</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
  );
};

export default TutorDashboardScreen;
