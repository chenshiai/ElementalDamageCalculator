import axios from "axios";

const instance = axios.create({
  baseURL: 'http://192.168.0.167:3000',
  timeout: 300000,
});

export default instance