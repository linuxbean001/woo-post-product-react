import axios from 'axios';
import {TOKEN_API_URL,API_URL} from '../configs/appConfig';
import { localS } from '../helper/localS';

axios.interceptors.request.use(function (config) { 
    // Do something before request is sent
    const token = localS.getLocal('token');
    if(token){
        config.headers={...config.headers,Authorization:`Bearer ${token}`}
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default class FilterService {
        getJsonData() {      
        return axios.get(`${process.env.PUBLIC_URL}/listing/listings.json`) 
            .then(res => {
                
            return res.data;
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    registerInfo(userInfoVo){
       return axios.post(`${API_URL}/users/register`,userInfoVo)
       .then(res => {
        return res.data;
       }).catch(err =>{
        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
       })
    }
    loginInfo(userInfoVo){
        return axios.post(`${TOKEN_API_URL}`,userInfoVo)
        .then(res => {
         return res.data;
        }).catch(err =>{
         console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err); 
        })
     }
     getAllPosts(){
      
           return axios.get(`${API_URL}/posts?_embed&order=desc&orderby=id`)
           .then(res => {
            return res.data;
           }).catch(err=>{
            console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
           })  
    }

    createPost(post){
            return axios.post(`${API_URL}/posts`,post)   
            .then(res => {
                return res.data;
               }).catch(err =>{
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
               })
         
    }
    updatePost(id,post){
        return axios.put(`${API_URL}/posts/${id}`,post)
            .then(res => {
                return res.data;
               }).catch(err =>{
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
               })     
    }
    deletePost(id){
      return axios.delete(`${API_URL}/posts/${id}`,{})
      .then(res => {
        return res.data;
       }).catch(err =>{
        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
       })   
    }   
         
}
