import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./style";

const SignUpScreen = ({ navigation }) => {

    const [role, setRole] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmPwd, setcnfrmPwd] = useState("");

    const user = {
        name,
        email,
        phone,
        address,
        password,
        role
    }

    const [cnfrmPwdError, setCnfrmPwdError] = useState("");
    const [nameError, setNameError] = useState("");
    const [mailError, setMailError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [radioError, setRadioError] = useState("");

    const validate = () => {
        if (name == "" || email == "" || phone == "" || address == "" || password == "") {
            if (name == "") {
                setNameError("Name cannot be empty");
                setTimeout(() => {
                    setNameError("");
                }, 5000)
            }
            if (email == "") {
                setMailError("Email cannot be empty");
                setTimeout(() => {
                    setMailError("");
                }, 5000)
            }
            if (phone == "") {
                setNumberError("Number cannot be empty");
                setTimeout(() => {
                    setNumberError("");
                }, 5000)
            }
            if (address == "") {
                setAddressError("Address cannot be empty");
                setTimeout(() => {
                    setAddressError("");
                }, 5000)
            }
            if (password == "") {
                setPwdError("Password cannot be empty");
                setTimeout(() => {
                    setPwdError("");
                }, 5000)
            }
        }
        else if (password != cnfrmPwd) {
            setCnfrmPwdError("Password and confirm password are different");
            setTimeout(() => {
                setCnfrmPwdError("");
            }, 5000)
        }
        else if (role == "") {
            setRadioError("You have to choose user type");
            setTimeout(() => {
                setRadioError("");
            }, 5000)
        }
        else {
            let statusCode;
            fetch("http://192.168.100.18:3000/users/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then((res) => {
                statusCode = res.status
                return res.json()
            }).then((result) => {
                if (statusCode < 400) {
                    console.log(result)
                }
                else {
                    console.log("Error with the creation !")
                }
            }).catch(error => {
                console.log(error)
            })
        }

        console.log(user) // for checking before sending to the db 
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/bg.jpg")}
                style={
                    {
                        flex: 1
                    }
                }
                resizeMode="cover">

                <ScrollView>
                    <View style={styles.topcontainer}>
                        <Text style={styles.title}>Get Started</Text>
                        <Text style={styles.subtitle}>SignUp to Continue</Text>
                    </View>
                    <View style={styles.datacontainer}>
                        <TextInput onChangeText={value => setName(value)} placeholder="Name" placeholderTextColor={COLORS.lightGrey} style={styles.inputstyle} />
                        {nameError ? <Text style={styles.errorstyle}>{nameError}</Text> : null}

                        <TextInput onChangeText={value => setEmail(value)} placeholder="Email" keyboardType="email-address" placeholderTextColor={COLORS.lightGrey} style={styles.inputstyle} />
                        {mailError ? <Text style={styles.errorstyle}>{mailError}</Text> : null}

                        <TextInput onChangeText={value => setPhone(value)} placeholder="Phone Number" keyboardType="phone-pad" placeholderTextColor={COLORS.lightGrey} style={styles.inputstyle} />
                        {numberError ? <Text style={styles.errorstyle}>{numberError}</Text> : null}

                        <TextInput onChangeText={value => setAddress(value)} placeholder="Address" placeholderTextColor={COLORS.lightGrey} style={styles.inputstyle} />
                        {addressError ? <Text style={styles.errorstyle}>{addressError}</Text> : null}

                        <TextInput onChangeText={value => setPassword(value)} placeholder="Password" placeholderTextColor={COLORS.lightGrey} secureTextEntry={true} style={styles.inputstyle} />
                        {pwdError ? <Text style={styles.errorstyle}>{pwdError}</Text> : null}

                        <TextInput onChangeText={value => setcnfrmPwd(value)} placeholder="Confirm Password" placeholderTextColor={COLORS.lightGrey} secureTextEntry={true} style={styles.inputstyle} />
                        {cnfrmPwdError ? <Text style={styles.errorstyle}>{cnfrmPwdError}</Text> : null}
                    </View>

                    {radioError ? <Text style={styles.radioerrorstyle}>{radioError}</Text> : null}
                    <View style={styles.radiologiccontainer}>

                        <Text style={styles.radiostat}>Getting stated as</Text>
                        <View style={styles.radiocontainer}>

                            <TouchableOpacity onPress={() => setRole("student")}>
                                <View style={styles.radiotextcontainer}>
                                    <View style={styles.radiocircle}>
                                        {role === "student" ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text style={styles.radiotext}> STUDENT </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setRole("tutor")}>
                                <View style={styles.radiotextcontainer}>
                                    <View style={styles.radiocircle}>
                                        {role === "tutor" ? <View style={styles.radiobg}></View> : null}
                                    </View>
                                    <Text style={styles.radiotext}> TUTOR </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.btncontainer}>
                        <TouchableOpacity onPress={validate}>
                            <View style={styles.button1}>
                                <Text style={styles.btntext}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => { }}>
                            <View style={styles.button2}>
                                <View style={styles.logo}>
                                    <Image source={require("../../assets/facebook.png")}
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Text style={styles.btntext}>SignUp with facebook</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.bottomcontainer}>
                        <TouchableOpacity onPress={() => { navigation.navigate("SignIn") }}>
                            <Text style={styles.text}>Already have an account | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;