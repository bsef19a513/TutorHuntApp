import SignInScreen from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import ForgetPwdScreen from "./screens/ForgetPwd";
import Home from "./screens/Home";
import TutorDashboardScreen from "./screens/TutorDashBoard";
import MyComponent from "./firebaseConfig";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React, { useState } from "react";
import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "./constants/theme";
import Profile from "./screens/Profile";
import ChatComponent from "./screens/Chat/ChatComponent";
import StudentDashboardScreen from "./screens/StudentDashBoard";
import InboxComponent from "./screens/inbox/inbox";
import LocationComponent from "./screens/Location/LocationComponent";

const Stack = createNativeStackNavigator();

const slides = [
  {
    id: 1,
    title: "Discover The Tutors",
    description:
      "Discover the tutors in your nearby areas having the required qualifications. See their profile and history berfore contacting them.",
    image: require("./assets/onBoard1.png"),
  },
  {
    id: 2,
    title: "Choose The Best One",
    description:
      "After Discovering the tutors choose the tutor which best suits your requirements and contact them",
    image: require("./assets/onBoard2.jpg"),
  },
  {
    id: 3,
    title: "Have Deal With Them",
    description:
      "One you choose the best one, just conctact them or have the real time communication or interview them and make payment after having the deal done.",
    image: require("./assets/onBoard3.jpg"),
  },
];

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  StatusBar.setBarStyle("light-content", true);

  const labelButton = (label) => {
    return (
      <View style={styles.labelViewStyle}>
        <Text style={styles.labelTextStyle}>{label}</Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.headingStyle}>{item.title}</Text>
              <Text style={styles.descStyle}>{item.description}</Text>
            </View>
          );
        }}
        showSkipButton
        activeDotStyle={styles.dotStyle}
        renderNextButton={() => labelButton("Next")}
        renderSkipButton={() => labelButton("Skip")}
        renderDoneButton={() => labelButton("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* <Stack.Screen name="Firebase" component={MyComponent}
          options={{ headerShown: false, title: "Firebase" }}
        /> */}
        <Stack.Screen name="Chat" component={ChatComponent}
          options={{ headerShown: false, title: "Firebase" }}
        />
        <Stack.Screen
          name="InboxComponent"
          component={InboxComponent}
          options={{ headerShown: false, title: "Chat Component" }}
        />
        <Stack.Screen
          name="ChatComponent"
          component={ChatComponent}
          options={{ headerShown: false, title: "Chat Component" }}
        />
        
        <Stack.Screen name="SignIn" component={SignInScreen}
          options={{ headerShown: false, title: "Sign In" }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{ headerShown: false, title: "Sign Up" }}
        />
        <Stack.Screen
          name="LocationComponent"
          component={LocationComponent}
          options={{ headerShown: false, title: "Location Component" }}
        />
        <Stack.Screen name="ForgetPwd" component={ForgetPwdScreen}
          options={{ title: "Forget Password", headerTintColor: COLORS.white,
            headerStyle: { backgroundColor: COLORS.primary,},
          }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{ title: "DashBoard", headerTintColor: COLORS.white,
            headerStyle: { backgroundColor: COLORS.primary, },
          }}
        />
        <Stack.Screen name="Profile" component={Profile}
          options={{ title: "Profile", headerTintColor: COLORS.white,
            headerStyle: {  backgroundColor: COLORS.primary, },
          }}
        />
        <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} 
          options={({ navigation }) => 
          ({
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate('Profile')}
              >
                <Image
                  source={require('./assets/profile.png')}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ), 
            title: "Profile", headerTintColor: COLORS.white, 
            headerStyle: { backgroundColor: COLORS.primary }
          })} 
        />
        <Stack.Screen name="TutorDashboard" component={TutorDashboardScreen} 
          options={({ navigation }) => 
          ({
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate('Profile')}
              >
                <Image
                  source={require('./assets/profile.png')}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ), 
            title: "Profile", headerTintColor: COLORS.white, 
            headerStyle: { backgroundColor: COLORS.primary }
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    padding: 15,
    paddingTop: 130,
    alignItems: "center",
  },
  viewHomeStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: SIZES.width - 50,
    height: 400,
    resizeMode: "contain",
  },
  dotStyle: {
    backgroundColor: COLORS.primary,
    width: 30,
  },
  headingStyle: {
    fontWeight: "bold",
    color: COLORS.title,
    fontSize: SIZES.h1,
  },
  descStyle: {
    paddingTop: 15,
    color: COLORS.title,
    textAlign: "center",
  },
  labelViewStyle: {
    padding: 10,
  },
  labelTextStyle: {
    color: COLORS.title,
    fontWeight: "600",
    fontSize: SIZES.h3,
  },
});

export default App;
