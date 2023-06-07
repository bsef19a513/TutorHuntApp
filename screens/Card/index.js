import React from 'react'
import { View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native'
import styles from './style';

const Card = (props) => {

    return (
        <View style={styles.outerView}>

            <View style={styles.innerView}>
                <Image style={styles.imageStyle} source={require("../../assets/tutor.jpg")} />

                <View style={styles.textViewStyle}>
                    <Text style={styles.textStyle}>Name : <Text style={styles.innerTextStyle}>{props.name}</Text> </Text>
                    <Text style={styles.textStyle}>Age : <Text style={styles.innerTextStyle}>{props.age}</Text> </Text>
                    <Text style={styles.textStyle}>Experience : <Text style={styles.innerTextStyle}>{props.exp}</Text> </Text>
                    <Text style={styles.textStyle}>Qualification : <Text style={styles.innerTextStyle}>{props.qual}</Text> </Text>
                    <TouchableOpacity onPress={() => Alert.alert("Profile Data")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );

}

export default Card;