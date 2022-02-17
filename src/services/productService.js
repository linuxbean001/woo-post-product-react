// import WooCommerceAPI from 'woocommerce-api';
// import wooConfig from '../wooConfig';
import axios from 'axios';
// import {TOKEN_API_URL,API_URL} from '../configs/appConfig';
// import { localS } from '../helper/localS';

// const WooCommerce = new WooCommerceAPI({
// 	url: wooConfig.siteUrl,
// 	consumerKey: wooConfig.consumerKey,
// 	consumerSecret: wooConfig.consumerSecret,
// 	wpAPI: true,
// 	version: 'wc/v2'
// });

export default class ProductService { 
    getAllProducts(){
     
        return axios.get(`http://localhost:3300/allProduct`)
        .then(res => {
         return res.data;
        }).catch(err=>{
         console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
        })  
 }
    // getAllProducts(){
    //         return new Promise(function(resolve, reject) {
    //         WooCommerce.get('products?orderby=id&order=desc', function(err, data, res) 
    //         {
    //             return resolve(JSON.parse(res));
    //         });
    //     });
            
    //     }
    createProduct(product){
        console.log('xxxxxxxx add product', product);
            return axios.post(`http://localhost:3300/addProduct`, product)
            .then(res => {
                console.log('xxxxxxxx add product ',res);
             return res.data;
            }).catch(err=>{
             console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            })  

    }
    updateProduct(id,product){
        console.log('xxxxxxxx add product', product);
            return axios.post(`http://localhost:3300/updateProduct/${id}`, product)
            .then(res => {
                console.log('xxxxxxxx add product ',res);
             return res.data;
            }).catch(err=>{
             console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            })  

    }

    deleteProduct(id){
        return axios.delete(`http://localhost:3300/delete/${id}`,{})
        .then(res => {
          return res.data;
         }).catch(err =>{
          console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
         })   
      }   
}
