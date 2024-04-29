import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import ChatMessageInput from "../components/ChatMessageInput";
import { useEffect, useState } from "react";
import socketClient from "../utils/socket";
import { userConnectedMessage, userDisconnectedMessage } from "../utils/messagesHelper";
import { useUser } from "../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chat({ navigation }) {
    const user = useUser();

    const [messages, setMessages] = useState([]);
    const [myMessage, setMyMessage] = useState("");

    useEffect(() => {
        socketClient.connect();
        socketClient.on('connect', () => {
            socketClient.emit("user_connected", user);
        });

        socketClient.on("user_connected", (data) => {
            setMessages((messages) => [...messages, userConnectedMessage(data.name)])
        })

        socketClient.on("user_disconnected", (data) => {
            setMessages((messages) => [...messages, userDisconnectedMessage(data.name)])
        })

        socketClient.on("message", (data) => {
            setMessages((messages) => [...messages, { ...data, isMyMessage: socketClient.getId() === data.id }])
        })

        return () => {
            socketClient.disconnect();
        }
    }, [])

    const sendMessage = () => {
        setMyMessage("");
        socketClient.emit("message", { ...user, text: myMessage })
    }

    const onLogout = async () => {
        await AsyncStorage.removeItem("user");
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header onLogout={onLogout} />
            <ChatWindow messages={messages} />
            <ChatMessageInput
                myMessage={myMessage}
                onChangeText={setMyMessage}
                onSend={sendMessage} />
        </SafeAreaView>
    )
}