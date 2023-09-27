import axios from 'axios';

// 创建 axios 实例
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 50000,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    withCredentials: true, // 跨域请求时是否需要使用凭证
  
  });
  export default request;
  