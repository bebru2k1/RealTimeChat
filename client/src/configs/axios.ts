import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:5000/v1/api"
      : "https://chatrealtime10012021.herokuapp.com/v1/api",
});

export default instance;
