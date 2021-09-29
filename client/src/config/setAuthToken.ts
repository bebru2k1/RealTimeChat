import axios from "axios";
const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.commom["Authorization"];
  }
};

export default setAuthToken;
