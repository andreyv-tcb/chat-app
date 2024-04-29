import { StyleSheet, Text, View } from "react-native";
import { Messages, Texts } from "../styles";

export default function ChatMessage({ messageObj }) {
    const { name, text, isMyMessage } = messageObj;

    return ( 
        <View style={
            isMyMessage ?
                styles.myMessageDirection :
                styles.otherMessageDirection
        }>
            <View style={{ ...styles.messageContainer }}>
                <Text style={
                    isMyMessage ?
                        styles.myUserMessageName :
                        styles.otherUserMessageName
                }>{name}</Text>
                <Text>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ...Messages,
    ...Texts
})