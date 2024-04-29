import { StyleSheet, Text, View } from "react-native";
import { Layouts } from "../styles";

export default function SystemChatMessage({ text }) {
    return (
        <View style={styles.centered} >
            <Text >{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ...Layouts
})