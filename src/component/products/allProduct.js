import React, { Component } from 'react'
import ProductService from '../../services/productService';
const Api = new ProductService();

 class AllProduct extends Component { 
     constructor(props){
         super(props);
            this.state={
                productLists:[],
                description:'',
                name:'',
                regular_price:'',
                short_description:'',
                productImg:'',
                eventBtn:true
            }
     }
    componentDidMount(){
        this.getProductsList()
    }
    getProductsList=()=>{
        console.log('xxxxxxxx product');
       Api.getAllProducts()
        .then(res => {
          
            this.setState({
                productLists:res
            })
            console.log('xxxxxxxx all', this.state.productLists);
        })
      .catch(err => console.log('posts fetch error'))

    }
    handleAddPostSubmit=()=>{
        const pastInfoVo = {
            'name': this.state.name,
            'type': 'simple',
            'regular_price': this.state.regular_price,
            'description':this.state.description,
            'short_description':this.state.short_description,
            // categories: [
            //     {
            //       id: 9
            //     },
            //     {
            //       id: 14
            //     }
            //   ],
              images: [
                {
                  src: this.state.productImg
                }
              ]
        }
        console.log('xxxxxxx', pastInfoVo);
        
        Api.createProduct(pastInfoVo)
            .then((result) => {
                this.getProductsList();
            }).catch(err => {
                console.log('xxx', err);
            }) 
    }
    editFunction =(list)=>{
        console.log('xxxxxxxxxx list data', list);
        this.setState({
            name:list.name,
            description:list.description.replace(/(<([^>]+)>)/ig,""),
            product_id:list.id,
            short_description:list.short_description.replace(/(<([^>]+)>)/ig,""),
            regular_price:list.regular_price,
            productImg:list.images[0].src,
            eventBtn:false
        })
       
    }
    handleEditPostSubmit=()=>{
        const product_id=this.state.product_id;
        const pastInfoVo = {
            'name': this.state.name,
            'type': 'simple',
            'regular_price': this.state.regular_price,
            'description':this.state.description,
            'short_description':this.state.short_description,
          
              images: [
                {
                  src: this.state.productImg
                }
              ]
        }
        console.log('xxx front end ',pastInfoVo);
        
          Api.updateProduct(product_id,pastInfoVo)
          .then((result) => {
              this.getProductsList();
          }).catch(err => {
              console.log('xxx', err);
          }) 
         
      }
    delFunction=(id)=>{
        console.log('dele xxxxxxxxxx',id);
        if(window.confirm('Are you sure')){          
            Api.deleteProduct(id)
            .then(res=>{                
                this.getProductsList();               
            })
            .catch(err=>{
                console.log('delete error r',err);
              
            })
        }     
       
    }
    handleOnChange = e => {
        const { target: { value, name } } = e;
     
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <div>
                <div className="row">
                <form className="col-md-6">
                    <div className="form-group">                        
                       
                        <input onChange={this.handleOnChange} className="form-control" name="name" type="text" value={this.state.name} />
                    </div>
                    <div className="form-group">
                    <textarea onChange={this.handleOnChange} className="form-control" name="description" rows="3" value={this.state.description} placeholder="description"></textarea>
                    
                    </div>
                    <div className="form-group">                        
                       
                       <input onChange={this.handleOnChange} className="form-control" name="regular_price" type="text" placeholder="Regular price" value={this.state.regular_price} />
                   </div>
                   <div className="form-group">  
                    <input onChange={this.handleOnChange} className="form-control" name="short_description" type="text" placeholder="Short Description" value={this.state.short_description} />
                   </div>

                   <div className="form-group">  
                    <input onChange={this.handleOnChange} className="form-control" name="productImg" type="text" placeholder="image Url" value={this.state.productImg} />
                   </div>

                    {/* <button  onClick={this.handleAddPostSubmit} type="button" className="btn btn-success">Save</button> */}
                    {this.state.eventBtn?(
  <button  onClick={this.handleAddPostSubmit} type="button" className="btn btn-success">Save</button>
                    ):(
                        <button onClick={this.handleEditPostSubmit} type="button" className="btn btn-success">Update</button>
                    )}
                </form>
                </div>
                 <div className="post-list">
                {this.state.productLists.map((list, index) =>
                    <div className="col-md-4 card" key={index}>
                        <div className="card-body">
                            <h1 className="card-title">{list.name}</h1>
                            <div className="product-img"> <img src={list.images[0].src}/></div>
                            <p className="card-text"  dangerouslySetInnerHTML={{ __html: list.description }}></p>
                            <p className="card-text">${list.price}</p>
                        </div>
                        <button className="btn button btn-warning" onClick={() => this.editFunction(list)} >Edit</button>
                        <button className="btn button btn-denger" onClick={() => this.delFunction(list.id)} >Del</button>
                    </div>
                )}
            </div>
            </div>
        )
    }
}
export default AllProduct;
