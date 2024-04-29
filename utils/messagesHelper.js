export function userConnectedMessage(name) {
    return {
        text: `${name} connected!`,
        isSystemMessage: true
    }
}

export function userDisconnectedMessage(name) {
    return {
        text: `${name} disconnected!`,
        isSystemMessage: true
    }
}