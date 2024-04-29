import { StyleSheet } from 'react-native';
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import NameInput from '../components/Inputs/NameInput';
import { Layouts } from '../styles';
import ChatAvatar from '../components/ChatAvatar';
import { getRandomAvatarColor } from '../utils/avatarColor';
import BasicButton from '../components/Buttons/BasicButton';
import { useSetUser } from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const setUser = useSetUser();

    const [name, setName] = useState("");
    const [avatarColor, _] = useState(getRandomAvatarColor());

    useEffect(() => {
        const getExistingUser = async () => {
            const existingUser = await AsyncStorage.getItem('user');
            if (existingUser) {
                const user = JSON.parse(existingUser);
                setUser({ ...user })
                navigation.navigate("Chat");
            }
        }
        getExistingUser();
    }, [])

    const goToChatScreen = async () => {
        if (name) {
            const user = {
                name,
                avatarColor
            }
            setUser(user);
            await AsyncStorage.setItem('user', JSON.stringify(user));
            navigation.navigate("Chat");
        }
    }
    return (
        <View style={styles.centered}>
            <Text>Welcome! Please enter your name to start chatting</Text>
            {name ? <ChatAvatar name={name} color={avatarColor} /> : null}
            <NameInput value={name} onChangeText={setName} />
            <BasicButton text={"Let's chat!"} onPress={goToChatScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    ...Layouts
})