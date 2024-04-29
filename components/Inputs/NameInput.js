import { StyleSheet, View } from 'react-native';
import { InputSizes } from '../../styles';
import TextInput from './TextInput';
import { UserIcon } from '../Icons';

export default function NameInput({ value, onChangeText }) {

    return (
        <View style={styles.nameInputSize}>
            <TextInput
                icon={UserIcon}
                value={value}
                onChangeText={onChangeText}
                errorMessage={value ? "" : "Please choose a name"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ...InputSizes
})