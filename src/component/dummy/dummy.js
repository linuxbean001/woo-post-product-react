import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import FilterService from '../../services/filterService';
const Api = new FilterService();
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            fields: [],

        }
    }
    handleSignupSubmit = ()=>{
        const userInfoVo = {
            'firstname': this.refs.firstname.value,
            'lastname': this.refs.lastname.value,
            'username': this.refs.username.value,
            'email': this.refs.email.value,
            'password': this.refs.password.value,
        }
        console.log('xxxxxxx',userInfoVo);
        
        Api.registerInfo(userInfoVo)
            .then((result) => {
                console.log('xxxxxxx', result);
                
            }).catch(err => {
                console.log('xxx', err);
            }) 

    }
    handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });

	}
    render() {
        return (
            <div>
                <div className='container-fluid'>
                <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-md-6">
            <div className="card signup p-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Signup</h5>
                <form >
                    <div className="form-group">                        
                        <input onChange={this.handleChange.bind(this, "firstname")} name="firstname" type="text" className="form-control" id="firstname" ref="firstname"  placeholder="Firstname" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={this.handleChange.bind(this, "lastname")} name="lastname" className="form-control" id="lastname" ref="lastname"  placeholder="Lastname" />
                      
                    </div>
                    <div className="form-group">
                        
                        <input type="text" onChange={this.handleChange.bind(this, "username")} name="username" className="form-control" id="username"  ref="username"  placeholder="Username" />
                        
                    </div>
                    <div className="form-group">
                        
                        <input type="email" onChange={this.handleChange.bind(this, "email")} name="email" className="form-control" id="email"  ref="email"  placeholder="Email" />
                      
                    </div>
                    <div className="form-group">
                        
                        <input  type="password" onChange={this.handleChange.bind(this, "password")} name="password" className="form-control"  ref="password" id="exampleInputPassword" placeholder="Password" />
                       
                    </div>              
                    <button type="button" onClick={this.handleSignupSubmit} className="btn btn-primary">Signup</button>
                </form>
                <div>Already have account? <Link to={'/'}>Login</Link></div>
            </div>
            </div>
            </div>
        </div>
                  
                    </div>
            </div>
        );
    }
}

export default SignUp; 