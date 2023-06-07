import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from "react-native";
import styles from "./style";
import qs from 'qs';
import emailjs from '@emailjs/browser';

const ForgetPwdScreen = () => {

    const [address, setAddress] = useState("");

    const sendMail = () => {
        // const to = address;
        // let url = `mailto:${to}`;

        // const query = qs.stringify({
        //     subject: "Password Change Help",
        //     body: "We will check the account in our db that wheather this account is already registered or not. If registered then update this account password to default password '123'",
        //     cc: "asimafzal002@gmail.com",
        //     bcc: "bsef19a542@gmail.com"
        // })

        // if (query.length) {
        //     url += `?${query}`
        // }

        // const canOpen = await Linking.canOpenURL(url);
        // if (!canOpen) {
        //     Alert.alert("Try after some time . Theres the issue with internet speed . Thank you ")
        //     return;
        // }

        // return Linking.openURL(url)

        var templateParams = {
            from_name: 'Asim Afzal',
            message: 'We will check the account in our db that wheather this account is already registered or not. If registered then update this account password to default password 123',
            to_mail: address
        };

        emailjs.send('service_51w0ema', 'template_47gnsbk', templateParams,"V1TWrJs230Lp56h2F")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Instructions</Text>
            <Text style={styles.subtitle}>
                Enter you email address below and we will send you an email with instructions on how to change your password.
            </Text>
            <View>
                <TextInput keyboardType="email-address" style={styles.inputStyle} placeholder="Ente your email" onChangeText={value => setAddress(value)} />
            </View>
            <TouchableOpacity onPress={sendMail}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>
                        Send
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}



export default ForgetPwdScreen;