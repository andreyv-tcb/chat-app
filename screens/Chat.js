import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import ChatMessageInput from "../components/ChatMessageInput";
import { useEffect, useState } from "react";
import socketClient from "../utils/socket";
import { userConnectedMessage, userDisconnectedMessage } from "../utils/messagesHelper";
import { useUser, useSetUser } from "../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tab, TabView } from "@rneui/themed";
import UserItem from "../components/UserItem";

export default function Chat({ navigation }) {
    const user = useUser();
    const setUser = useSetUser();

    const [messages, setMessages] = useState([]);
    const [myMessage, setMyMessage] = useState("");
    const [tabIndex, setTabIndex] = useState(0);
    const [users, setUsers] = useState([])

    useEffect(() => {
        socketClient.connect();
        socketClient.on('connect', () => {
            setUser({ ...user, id: socketClient.getId() })
            socketClient.emit("user_connected", user);
        });

        socketClient.on("user_connected", (data) => {
            setMessages((messages) => [...messages, userConnectedMessage(data.name)])
            setUsers((users) => [...users, data])
        })

        socketClient.on("user_disconnected", (data) => {
            setMessages((messages) => [...messages, userDisconnectedMessage(data.name)])
            setUsers((users) => users.filter(u => u.id !== data.id))

        })

        socketClient.on("message", (data) => {
            setMessages((messages) => [...messages, { ...data, isMyMessage: socketClient.getId() === data.id }])
        })

        return () => {
            socketClient.disconnect();
        }
    }, [])

    const sendMessage = () => {
        if (myMessage) {
            setMyMessage("");
            socketClient.emit("message", { ...user, text: myMessage })
        }   
    }

    const onLogout = async () => {
        await AsyncStorage.removeItem("user");
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab
                value={tabIndex}
                onChange={(e) => setTabIndex(e)}
                indicatorStyle={{
                    backgroundColor: '#D3D3D3',
                    height: 3,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Chat"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'wechat', type: 'font-awesome', color: 'white' }}
                />
                <Tab.Item
                    title="Users"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'users', type: 'font-awesome', color: 'white' }}
                />
            </Tab>
            <TabView value={tabIndex} onChange={setTabIndex} animationType="timing" >
                <TabView.Item style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Header onLogout={onLogout} />
                        <ChatWindow messages={messages} />
                        <ChatMessageInput
                            myMessage={myMessage}
                            onChangeText={setMyMessage}
                            onSend={sendMessage} />
                    </View>
                </TabView.Item>
                <TabView.Item style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {
                            users.map((u, i) => {
                                console.log(u.id)
                                console.log(user.id)
                                return <UserItem {...u} isMyUser={u.id === user.id} key={i} />
                            })
                        }
                    </View>
                </TabView.Item>
            </TabView>
        </SafeAreaView >
    )
}