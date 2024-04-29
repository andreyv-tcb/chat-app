const AVATAR_COLORS = ["#48c404", "#9b6023", "#9acd83", "#3c377c", "#9f8faf", "#ff5520", "#800080", "#008000", "#7e22ce", "#b7e4db"]

export const getRandomAvatarColor = () => {
    return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
}