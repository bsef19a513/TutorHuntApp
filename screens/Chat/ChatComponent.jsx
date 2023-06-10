import React, { useState } from "react";
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

export default ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", message: "Hello!", timestamp: "9:00 AM" },
    { id: 2, sender: "Jane", message: "Hi there!", timestamp: "9:05 AM" },
    { id: 3, sender: "John", message: "How are you?", timestamp: "9:10 AM" },
    { id: 4, sender: "Jane", message: "I'm good. How about you?", timestamp: "9:15 AM" },
  ]);

  const [inputText, setInputText] = useState("");
  const chatPartner = "Jane"; // Replace with the name of the chat partner

  const handleSendMessage = () => {
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      sender: "John",
      message: inputText.trim(),
      timestamp: getCurrentTime(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
  };

  const renderMessage = ({ item }) => {
    const isSender = item.sender === "John";

    return (
      <View style={[styles.messageContainer, isSender ? styles.senderContainer : styles.receiverContainer]}>
        <View style={[styles.messageBubble, isSender ? styles.senderBubble : styles.receiverBubble]}>
          <Text style={[styles.sender, isSender ? styles.senderText : styles.receiverText]}>
            {item.sender}
          </Text>
          <Text style={[styles.message, isSender ? styles.senderText : styles.receiverText]}>
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
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${hours < 12 ? "AM" : "PM"}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{chatPartner}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: "#d95b71",
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
    color: "#000",
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
