import { StyleSheet, View } from "react-native"
import TextInput from './TextInput';
import { MessageIcon } from "../Icons";
import { InputSizes } from "../../styles";

export default function ChatMessageTextInput({ value, onChangeText, onEnterPress }) {
    return (
        <View style={styles.chatMessageInputSize}>
            <TextInput
                icon={MessageIcon}
                value={value}
                onChangeText={onChangeText}
                onEnterPress={onEnterPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ...InputSizes
})