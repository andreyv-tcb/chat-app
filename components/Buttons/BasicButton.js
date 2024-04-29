import { Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { Buttons } from '../../styles';

export default function BasicButton({ text, onPress }) {
    return <Button
        title={text}
        onPress={onPress}
        containerStyle={styles.normalContainer}
        buttonStyle={styles.rounded}
    />
}


const styles = StyleSheet.create({
    ...Buttons
})