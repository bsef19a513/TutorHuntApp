import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const TutorDashboardScreen = () => {
  const navigation = useNavigation();

  const latitude = 37.78825; // Replace with your latitude value
  const longitude = -122.4324; // Replace with your longitude value

  const handleSectionPress = (section) => {
    if (section === "requestSection") {
      navigation.navigate("Home");
    } else if (section === "chatSection") {
      navigation.navigate("InboxComponent");
    } else if (section === "myStudentsSection") {
      navigation.navigate("Home");
    } else if (section === "locationSection") {
      navigation.navigate("LocationComponent", { latitude, longitude });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleSectionPress("requestSection")}
        >
          <Image
            source={require("../../assets/request.jpg")}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleSectionPress("chatSection")}
        >
          <Image
            source={require("../../assets/chat.jpg")}
            style={styles.sectionImage}
            resizeMode="cover"
          />
          <Text style={styles.sectionDescription}>My Chats</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => handleSectionPress("myStudentsSection")}
      >
        <Image
          source={require("../../assets/myStudents.png")}
          style={styles.sectionImage}
          resizeMode="cover"
        />
        <Text style={styles.sectionDescription}>My Students</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => handleSectionPress("locationSection")}
      >
        <Image
          source={require("../../assets/location.png")}
          style={[styles.sectionImage, { width: 80, height: 120 }]} // Adjust the width and height values as desired
          resizeMode="cover"
        />
        <Text style={styles.sectionDescription}>View Location</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TutorDashboardScreen;
