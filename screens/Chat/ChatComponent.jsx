import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { ref, push, update, onValue, off } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { database } from "../../firebaseConfig";

export default ChatComponent = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  let {receiverName} = route.params; // Replace with the name of the chat partner
  const { receiverId } = route.params;
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userId").then((id) => {
      setUserId(id);

      const messagesRef = ref(
        database,
        `/chatlist/${receiverId}/${id}/messages`
      );

      const messagesListener = onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const messagesList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setMessages(messagesList);
        }
      });

      return () => {
        off(messagesRef, messagesListener);
      };
    });
    AsyncStorage.getItem("name").then((name) => {setName(name)});
  }, [receiverId]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      sender: userId,
      name: name,
      message: inputText.trim(),
      timestamp: getCurrentTime(),
    };

    setInputText("");

    let messageRef;
    messageRef = ref(database, `/chatlist/${receiverId}/${userId}/messages`);

    push(messageRef, newMessage)
      .then()
      .catch((error) => console.log("Error adding message:", error));

    messageRef = ref(database, `/chatlist/${userId}/${receiverId}/messages`);

    push(messageRef, newMessage)
      .then()
      .catch((error) => console.log("Error adding message:", error));
  };

  const renderMessage = ({ item }) => {
    const isSender = item.sender === userId;

    return (
      <View
        style={[
          styles.messageContainer,
          isSender ? styles.senderContainer : styles.receiverContainer,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            isSender ? styles.senderBubble : styles.receiverBubble,
          ]}
        >
          <Text
            style={[
              styles.sender,
              isSender ? styles.senderText : styles.receiverText,
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.message,
              isSender ? styles.senderText : styles.receiverText,
            ]}
          >
            {item.message}
          </Text>
        </View>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    );
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
      hours < 12 ? "AM" : "PM"
    }`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{receiverName}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 12,
  },
  senderContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  receiverContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  messageBubble: {
    borderRadius: 16,
    padding: 10,
    maxWidth: "80%",
  },
  senderBubble: {
    backgroundColor: "#f52d56",
    marginTop: 5,
  },
  receiverBubble: {
    backgroundColor: "#fff",
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  senderText: {
    color: "#FFFFFF",
  },
  receiverText: {
    color: "#000",
  },
  message: {
    fontSize: 16,
  },
  timestamp: {
    marginLeft: 8,
    fontSize: 12,
    color: "#999",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#f52d56",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
