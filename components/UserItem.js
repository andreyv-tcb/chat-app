import { StyleSheet, View, Text } from "react-native";
import { Layouts, Texts } from "../styles";
import ChatAvatar from "./ChatAvatar";

export default function UserItem({ name, avatarColor, isMyUser }) {
    console.log(isMyUser)
    return (
        <View style={{ ...styles.row }}>
            <ChatAvatar name={name} color={avatarColor} />
            <Text style={[
                styles.userItemText,
                isMyUser ? styles.myUserNameColor : styles.otherUserNameColor
            ]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ...Layouts,
    ...Texts,
})