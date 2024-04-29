import { Platform } from 'react-native';

export function isPhone() {
    return ["ios", "android"].includes(Platform.OS);
}