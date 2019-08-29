import React, { Component } from 'react'
import FilterService from '../../services/filterService';
const Api = new FilterService();

class AllPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            title:'eeee',
            content:'eeee',
            poststatus:'publish',
            post_id:'',
            eventBtn:true
        }

    }
    componentDidMount() {
        this.getAllPostList();
    }
    //posts list
    getAllPostList() {
        Api.getAllPosts()
            .then(res => {
                console.log('xxxxxxxx all', res);
                this.setState({
                    lists: res
                })
                console.log('xxxxxxxxxxxxx', this.state.lists);

            })
            .catch(err => console.log('posts fetch error'))
    }
    //add post
    handleAddPostSubmit=()=>{
        const pastInfoVo = {
            'title': this.state.title,
            'content': this.state.content,
            'status': this.state.poststatus,
        }
        Api.createPost(pastInfoVo)
            .then((result) => {
                this.getAllPostList();
            }).catch(err => {
                console.log('xxx', err);
            }) 
    }
    //update post
    editFunction =(list)=>{
        console.log('xxxxxxxxxx list data', list.title.rendered);
        this.setState({
            title:list.title.rendered,
            content:list.content.rendered.replace(/(<([^>]+)>)/ig,""),
            post_id:list.id,
            eventBtn:false
        })
    }
    handleEditPostSubmit=()=>{
      const post_id=this.state.post_id;
        const pastInfoVo = {
            'title': this.state.title,
            'content': this.state.content,
            'status': this.state.poststatus,
        }
        Api.updatePost(post_id,pastInfoVo)
        .then((result) => {
            this.getAllPostList();
        }).catch(err => {
            console.log('xxx', err);
        }) 
       
    }
    //delete function
    delFunction=(id)=>{
        console.log('dele xxxxxxxxxx',id);
        if(window.confirm('Are you sure')){          
            Api.deletePost(id)
            .then(res=>{                
                this.getAllPostList();               
            })
            .catch(err=>{
                console.log('delete error r',err);
              
            })
        }      
        
    }
    getFormatedDate(date) {
        const eventDate = new Date(date)
        const month = ("0" + (eventDate.getMonth() + 1)).slice(-2)
        const day = ("0" + (eventDate.getDate())).slice(-2)

        const year = eventDate.getFullYear();

        return year + "-" + month + "-" + day;

    }
    
    handleOnChange = e => {
        const { target: { value, name } } = e;
     
        this.setState({
          [name]: value
        });
      }
     
    render() {
        console.log('xxxxxxxxxxx btn',this.state.eventBtn);
        
        return (
            <div className="container-fluid">
                  <div className="post-create col-md-12">
                  <div className="col-md-6">
                  <form >
                    <div className="form-group">                        
                       
                        <input onChange={this.handleOnChange} className="form-control" name="title" type="text" value={this.state.title} />
                    </div>
                    <div className="form-group">
                    <textarea onChange={this.handleOnChange} className="form-control" name="content" rows="3" value={this.state.content} placeholder="Content"></textarea>
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="poststatus">Status</label>
                        <select className="form-control" value={this.state.poststatus}  onChange={this.handleOnChange} name="poststatus">
                            <option value="publish">Publish</option>
                            <option value="future">Future</option>
                            <option value="draft">Draft</option>
                            <option value="pending">Pending</option>
                            <option value="private">Private</option>                        
                        </select>
                    </div>
                    {this.state.eventBtn?(
  <button  onClick={this.handleAddPostSubmit} type="button" className="btn btn-success">Save</button>
                    ):(
                        <button onClick={this.handleEditPostSubmit} type="button" className="btn btn-success">Update</button>
                    )}
                  
                </form>
                </div>
                  </div>
                <div className="post-list">
                {this.state.lists.map((list, index) =>
                    <div className="col-md-4 card">
                        <div className="card-body">
                            <h5 className="card-title">{list.title.rendered}</h5>
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: list.content.rendered }}></p>
                            <p className="card-text">{this.getFormatedDate(list.date)}</p>
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
export default AllPost;
