import { StyleSheet, View } from "react-native";
import { Layouts } from "../styles";
import { useUser } from "../context/UserContext";
import BasicButton from "./Buttons/BasicButton";
import UserItem from "./UserItem";

export default function Header({ onLogout }) {
    const user = useUser();

    return (
        <View style={{ ...styles.row, margin: "2%", justifyContent: "space-between", }}>
            <UserItem {...user} isMyUser={true} />
            <BasicButton text={"Logout"} onPress={onLogout} style={{ alignSelf: "flex-end" }} />
        </View>
    )
}


const styles = StyleSheet.create({
    ...Layouts
})