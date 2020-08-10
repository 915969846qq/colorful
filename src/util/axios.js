import Axios from 'axios'
Axios.defaults.baseURL="http://localhost:8888";//配置向服务器发起请求的地址+端口

//==========请求拦截===============
Axios.interceptors.request.use(
    config=>{
        //把token添加到header中
        return config
    },
    error => {
        return Promise.reject(error);
    }
);

//===============响应拦截=================
Axios.interceptors.response.use((config)=>{
    //将服务器返回的token值储存
    return config;
});
export default Axios