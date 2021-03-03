import {request} from './request.js'
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class ItemDel{
  constructor(data){
    this.goodsData=data.data.result
    

  }
}