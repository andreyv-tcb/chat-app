import { isPhone } from "../utils/platform"

export const normalContainer = {
    marginHorizontal: isPhone() ? 5 : 50,
    height: 50,
    width: isPhone() ? 100 : 200,
    marginVertical: 10,
}

export const rounded = {
    borderRadius: 15
}