import { Input } from '@rneui/themed';
import { Keyboard } from 'react-native';

export default function TextInput({ value, onChangeText, errorMessage, icon, onEnterPress }) {
    return (
        <Input
            leftIcon={icon}
            value={value}
            onChangeText={onChangeText}
            errorStyle={{ color: 'red' }}
            errorMessage={errorMessage}
            onSubmitEditing={onEnterPress}
        />
    )
}