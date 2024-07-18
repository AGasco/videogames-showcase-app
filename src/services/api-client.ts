import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '73c259d69909483dbd6adbe0b5329805'
  }
});
