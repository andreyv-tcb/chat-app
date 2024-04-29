import { StyleSheet, View } from "react-native";
import ChatMessageTextInput from "./Inputs/ChatMessageTextInput";
import BasicButton from './Buttons/BasicButton'
import { Layouts } from "../styles";

export default function ChatMessageInput({ myMessage, onChangeText, onSend }) {
    return (
        <View style={styles.row}>
            <ChatMessageTextInput value={myMessage} onChangeText={onChangeText} onEnterPress={onSend} />
            <BasicButton text={"Send"} onPress={onSend} />
        </View>
    )
}

const styles = StyleSheet.create({
    ...Layouts
})