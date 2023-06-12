import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList, Pressable, Alert, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {


    const [profilePic, setProfilePic] = useState("")

    const data = [
        { id: 1, txt: 'Maths', isChecked: false },
        { id: 2, txt: 'Physics', isChecked: false },
        { id: 3, txt: 'Chemistry', isChecked: false },
        { id: 4, txt: 'Computer Science', isChecked: false },
        { id: 5, txt: 'English', isChecked: false },
        { id: 6, txt: 'Urdu', isChecked: false },
        { id: 7, txt: 'Arabic', isChecked: false },
    ];
    const [products, setProducts] = useState(data);

    const handleChange = (id) => {
        let temp = products.map((product) => {
            if (id === product.id) {
                return { ...product, isChecked: !product.isChecked };
            }
            return product;
        });
        setProducts(temp);
    };

    const update = () => {
        let offerings = "";
        products.forEach(element => {
            if (element.isChecked == true) {
                offerings += element.txt + ",";
            }
        });
        offerings = offerings.substring(0, offerings.length - 1);
        console.log(offerings);
    }

    const uploadImage = async () => {

        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status == "granted") {
            let response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            });

            if (!response.canceled) {
                setProfilePic(response.assets[0].uri);
            }
        }

        console.log(profilePic)
    }

    const renderFlatList = (renderData) => {
        return (
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={{ alignItems: "center", marginTop: 50 }}>
                            <TouchableOpacity onPress={uploadImage} style={styles.pic}>
                                {profilePic ? <Image source={{ uri: profilePic }} style={{ width: '100%', height: '100%' }} /> : <Text style={{ fontSize: SIZES.h4, textAlign: "center", opacity: 0.4, fontWeight: "bold" }}>
                                    Upload Profile Image
                                </Text>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='person' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='mail' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='timer' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Age" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='call' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='home' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Address" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='lock-closed' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='navigate' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <Text style={[styles.input, { marginTop: 2 }]} > Availablity </Text>
                                <View style={styles.radiocontainer}>

                                    <TouchableOpacity onPress={() => setAvailable("yes")}>
                                        <View style={styles.radiotextcontainer}>
                                            <View style={styles.radiocircle}>
                                                {available === "yes" ? <View style={styles.radiobg}></View> : null}
                                            </View>
                                            <Text style={styles.radiotext}> Yes </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setAvailable("no")}>
                                        <View style={styles.radiotextcontainer}>
                                            <View style={styles.radiocircle}>
                                                {available === "no" ? <View style={styles.radiobg}></View> : null}
                                            </View>
                                            <Text style={styles.radiotext}> No </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.inputcontainer}>
                                <Ionicons name='moon' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <Text style={[styles.input, { marginTop: 2 }]} > Time </Text>
                                <View style={styles.radiocontainer}>

                                    <TouchableOpacity onPress={() => setTime("morning")}>
                                        <View style={styles.radiotextcontainer}>
                                            <View style={styles.radiocircle}>
                                                {time === "morning" ? <View style={styles.radiobg}></View> : null}
                                            </View>
                                            <Text style={styles.radiotext}> Morning </Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setTime("evening")}>
                                        <View style={styles.radiotextcontainer}>
                                            <View style={styles.radiocircle}>
                                                {time === "evening" ? <View style={styles.radiobg}></View> : null}
                                            </View>
                                            <Text style={styles.radiotext}> Evening </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.inputcontainer}>
                                <Ionicons name='school' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Qualification" placeholderTextColor="black"></TextInput>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Ionicons name='cash' size={25} color={COLORS.primary} style={{ marginRight: 10 }}></Ionicons>
                                <TextInput style={styles.input} placeholder="Charges per hour" placeholderTextColor="black"></TextInput>
                            </View>
                        </View>
                        <Text style={styles.inputtext}>Courses you are interested to offer </Text>
                    </>}
                data={renderData}
                renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <View style={styles.card}>
                            <Pressable onPress={() => handleChange(item.id)} >
                                <MaterialCommunityIcons
                                    name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="grey" />
                            </Pressable>
                            <Text>{item.txt}</Text>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <>
                        <TouchableOpacity onPress={() => { update() }}>
                            <View style={styles.button2}>
                                <Text style={styles.btntext}>UPDATE</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                }
            />
        );
    }

    const [available, setAvailable] = useState("");
    const [time, setTime] = useState("");

    return (
        <>
            <View style={styles.checkboxcontainer}>
                <View style={{ flex: 1 }}>
                    {renderFlatList(products)}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pic: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderStyle: "dashed",
        overflow: "hidden"
    },
    container: {
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10
    },
    inputcontainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.lightGrey,
        padding: 7,
        borderRadius: 7,
        marginTop: 10

    },
    inputtext: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: SIZES.h4,
        marginVertical: 10
    },
    radiotextcontainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    radiocontainer: {
        marginLeft: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    radiocircle: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 2
    },
    radiotext: {
        marginBottom: 2
    },
    radiobg: {
        width: 8,
        height: 8,
        margin: 1.45,
        backgroundColor: "black",
        borderRadius: 5
    },
    checkboxcontainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    card: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 27,
        paddingHorizontal: 30,
        paddingVertical: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
    },
    button2: {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        justifyContent: "center",
        marginVertical: 5,
        alignItems: "center"
    },
    btntext: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.h4
    }
})

export default Profile;

