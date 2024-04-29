import { isPhone } from "../utils/platform"

export const nameInputSize = {
    width: isPhone() ? "50%" : "20%"
}

export const chatMessageInputSize = {
    width: isPhone() ? "70%" : "80%"
}