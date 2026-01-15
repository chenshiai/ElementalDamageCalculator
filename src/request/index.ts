import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://8.155.52.59/',
  baseURL: '',
  timeout: 300000,
});

export default instance