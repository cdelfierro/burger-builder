import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-3a2ad.firebaseio.com/',
});

export default instance;
