import { StyleSheet, View, Text } from "react-native";
import { Layouts } from "../styles";
import { useUser } from "../context/UserContext";
import ChatAvatar from "./ChatAvatar";
import BasicButton from "./Buttons/BasicButton";

export default function Header({ onLogout }) {
    const user = useUser();

    return (
        <View style={{ ...styles.row, margin: "2%", justifyContent: "space-between", }}>
            <View style={{ ...styles.row, gap: 10 }}>
                <ChatAvatar name={user.name} color={user.avatarColor} />
                <Text>{user.name}</Text>
            </View>
            <BasicButton text={"Logout"} onPress={onLogout} style={{ alignSelf: "flex-end" }} />
        </View>
    )
}


const styles = StyleSheet.create({
    ...Layouts
})