import axios from 'axios'

export  function request(config){
  //创建实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  //添加拦截器
  axios.interceptors.request.use(config=>{
    return config
  },err=>{
   console.log(err)
  })
  axios.interceptors.response.use(response=>{
    return response.data
  },err=>{
    console.log(err)
  })
  return instance(config)
}