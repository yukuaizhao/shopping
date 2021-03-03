import {request} from './request.js'
export function getTopic(){
  return request({
    url:'/category'
  })
}
export function getTopicDetail(config){
  return request({
    url:'/subcategory',
    params:{
      maitKey:config
    }
  })
}