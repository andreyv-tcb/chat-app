import { Avatar } from '@rneui/themed';
import { isPhone } from '../utils/platform';

export default function ChatAvatar({ name, color }) {

    const getFirstLetter = (word) => {
        return word.slice(0, 1);
    }
    const getFirstTwoLetters = (word) => {
        return word.slice(0, 2);
    }
    const setTitle = (name) => {
        const nameElements = name.trim().split(" ");
        return nameElements.length > 1 ?
            getFirstLetter(nameElements[0]) + getFirstLetter(nameElements[1]) :
            getFirstTwoLetters(name)
    }
    return (
        <Avatar
            size={isPhone() ? 40 : 64}
            rounded
            title={setTitle(name)}
            containerStyle={{ backgroundColor: color }}
        />
    )
}