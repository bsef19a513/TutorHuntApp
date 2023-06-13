import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { ref, onValue, off } from "firebase/database";
import { database } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InboxComponent = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [lastMessages, setLastMessages] = useState({});

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");

        const usersRef = ref(database, `/chatlist/${userId}`);

        const usersListener = onValue(usersRef, async (snapshot) => {
          const data = snapshot.val();

          if (data) {
            try {
              const userList = await Promise.all(
                Object.keys(data).map(async (key) => {
                  try {
                    const response = await fetch(
                      `http://192.168.31.32:3000/users/profile/${key}`
                    ); // Replace with your API endpoint
                    if (!response.ok) {
                      throw new Error("Failed to fetch profile data");
                    }
                    const profileData = await response.json();
                    return {
                      id: key,
                      name: profileData.name, // Assuming the name field is present in the profileData
                      // Use a hardcoded image URL here
                    };
                  } catch (error) {
                    console.error(error);
                    return null;
                  }
                })
              );

              setUsers(userList.filter((user) => user !== null));
            } catch (error) {
              console.error(error);
            }
          }
        });

        return () => {
          off(usersRef, usersListener);
        };
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchLastMessages = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");

        users.forEach((user) => {
          const lastMessageRef = ref(
            database,
            `/chatlist/${userId}/${user.id}/messages`
          );
          const lastMessageListener = onValue(lastMessageRef, (snapshot) => {
            const lastMessageData = snapshot.val();
            const lastMessage = lastMessageData
              ? Object.values(lastMessageData).pop()
              : null;
            setLastMessages((prevState) => ({
              ...prevState,
              [user.id]: lastMessage ? lastMessage.message : null,
            }));
          });
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchLastMessages();
  }, [users]);

  const handleUserPress = (receiverId, receiverName) => {
    navigation.navigate("ChatComponent", {
      receiverId: receiverId,
      receiverName: receiverName,
    });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => handleUserPress(item.id, item.name)}
    >
      <Image
        source={require("../../assets/tutor.jpg")}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{lastMessages[item.id]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#f52d56",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  flatListContent: {
    flexGrow: 1,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 16,
    color: "#999",
  },
});

export default InboxComponent;
