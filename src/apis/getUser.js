import axios from "axios";

export default (accessToken, userId) => axios
  .get(`http://localhost:9999/api/Users/${userId}`, {
    params: {
      access_token: accessToken
    }
  });

