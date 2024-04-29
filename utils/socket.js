import { io } from "socket.io-client";
import { isPhone } from "./platform";

export default socketClient = {
    connect: function () {
        this.socket = io(
            isPhone() ?
                "http://10.100.102.4:3000" :
                "http://localhost:3000"
        )
    },
    emit: function (event, data) {
        this.socket.emit(event, data)
    },
    on: function (event, func) {
        this.socket.on(event, func)
    },
    getId: function () {
        return this.socket.id
    },
    disconnect: function () {
        this.socket.disconnect();
    }
}