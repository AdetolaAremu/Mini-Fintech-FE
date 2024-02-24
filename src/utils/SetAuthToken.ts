import axios from "axios";

const setAuthToken = (token: string) => {
  if (token) {
    // To authorize user with bearer token
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // delete auth user bearer token
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
