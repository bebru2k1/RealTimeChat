import { io } from "socket.io-client";
const URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://chatrealtime10012021.herokuapp.com";

const socket = io(URL);

export default socket;
