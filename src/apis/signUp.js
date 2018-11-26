import axios from "axios";

export default (email, password) => {
  return axios.post('http://localhost:9999/api/Users', {
    email,
    password,
  });
};
