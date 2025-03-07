import axios from "axios";

const instance = axios.create({
  timeout: 300000,
});

export default instance