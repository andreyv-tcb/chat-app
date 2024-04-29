import { ScrollView, StyleSheet, View } from "react-native";
import ChatMessage from "./ChatMessage";
import SystemChatMessage from "./SystemChatMessage";
import { useEffect, useRef } from "react";

export default function ChatWindow({ messages }) {
    const scrollViewRef = useRef()

    useEffect(() => {
        setTimeout(scrollViewRef?.current?.scrollToEnd, 0);
    })

    return (
        <ScrollView ref={scrollViewRef} style={styles.container}>
            {
                messages.map((msg, i) => {
                    if (msg.isSystemMessage) {
                        return <SystemChatMessage text={msg.text} key={i} />
                    }
                    return <ChatMessage messageObj={msg} key={i} />
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: "1%",
        border: "solid 1px black",
        borderRadius: 10,
        height: 0 // !!! it somehow solves the growing scrollview issue
    }
})