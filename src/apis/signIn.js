import axios from "axios";
import getUser from "./getUser";

export default (email, password) => axios
  .post('http://localhost:9999/api/Users/login', {
    email,
    password,
  })
  .then(({ data: { id, userId } }) => getUser(id, userId));

