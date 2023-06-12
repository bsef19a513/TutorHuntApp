import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
} from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mailError, setMailError] = useState("");
  const [pwdError, setPwdError] = useState("");

  const validate = () => {
    if (email == "" || password == "") {
      if (email == "") {
        setMailError("Email cannot be empty");
        setTimeout(() => {
          setMailError("");
        }, 5000);
      }
      if (password == "") {
        setPwdError("Password cannot be empty");
        setTimeout(() => {
          setPwdError("");
        }, 5000);
      }
    } else {
      let statusCode;
      fetch(`http://192.168.0.140:3000/users/${email}`, {
        method: "GET",
      })
        .then((res) => {
          statusCode = res.status;
          if (statusCode < 400) {
            return res.json();
          }
          return;
        })
        .then((result) => {
          if (statusCode < 400) {
            if (result.password == password) {
              const userId = result._id;
              const name = result.name;
              AsyncStorage.setItem("userId", userId).then();
              AsyncStorage.setItem("name", name).then();
              if (result.role == "student") {
                // setEmail("")
                // setPassword("")
                navigation.navigate("StudentDashboard");
              } else {
                // setEmail("")
                // setPassword("")
                navigation.navigate("TutorDashboard");
              }
            } else {
              setPwdError("Authenctication Error");
              setTimeout(() => {
                setPwdError("");
              }, 5000);
            }
          } else {
            setPwdError("Authenctication Error");
            setTimeout(() => {
              setPwdError("");
            }, 5000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/new.jpg")}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topcontainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>SignIn to Continue</Text>
          </View>
          <View style={styles.datacontainer}>
            <TextInput
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={COLORS.white}
              style={styles.inputstyle}
            />
            {mailError ? (
              <Text style={styles.errorstyle}>{mailError}</Text>
            ) : null}
            <TextInput
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Password"
              placeholderTextColor={COLORS.white}
              secureTextEntry={true}
              style={styles.inputstyle}
            />
            {pwdError ? (
              <Text style={styles.errorstyle}>{pwdError}</Text>
            ) : null}
          </View>
          <View style={styles.btncontainer}>
            <TouchableOpacity onPress={() => validate()}>
              <View style={styles.button1}>
                <Text style={styles.btntext}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.button2}>
                <View style={styles.logo}>
                  <Image
                    source={require("../../assets/facebook.png")}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  onPress={() => {
                    Linking.canOpenURL("https://www.facebook.com/login/")
                      .then((supported) => {
                        if (supported) {
                          Linking.openURL("https://www.facebook.com/login/");
                        } else {
                          Alert.alert(
                            "Error with connecting facebook login page"
                          );
                        }
                      })
                      .catch((error) => {
                        Alert.alert(
                          "Error with connecting facebook login page"
                        );
                      });
                  }}
                  style={styles.btntext}
                >
                  Connect with facebook
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgetPwd");
              }}
            >
              <Text style={styles.text}>Forget Password | Click Here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomcontainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.text}>Don't have an account | Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
