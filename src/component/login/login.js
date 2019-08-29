import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import FilterService from '../../services/filterService';
import { localS } from '../../helper/localS';
import history from '../../helper/history';

const Api = new FilterService();

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            fields: []
        }
    }
    handleLoginSubmit = ()=>{
        console.log('xxxxxxx');

        const userInfoVo = {
            'username': this.refs.username.value,
            'password': this.refs.password.value,
        }
        console.log('xxxxxxx',userInfoVo);
        
        Api.loginInfo(userInfoVo)
            .then((res) => {
               
                    console.log('xxxxxxxx result', res);
                    const token = res.token;
                    const user = {
                        user_display_name: res.user_display_name,
                        user_email: res.user_email,
                        user_firstname: res.user_firstname,
                        user_id: res.user_id,
                        user_lastname: res.user_lastname,
                        user_nicename: res.user_nicename
                    }
                    localS.setLocal('token',token);
                    localS.setLocal('user',user);
                    this.props.history.replace('/');
                   
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
              
            <div className="col-md-6">
            <div className="card signup p-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Signup</h5>
                <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Username</label>
                    <input type="text" onChange={this.handleChange.bind(this, "username")} ref="username" className="form-control" name="username" id="email"  placeholder="Enter Username" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input type="password" name="password" className="form-control" onChange={this.handleChange.bind(this, "password")} ref="password" id="exampleInputPassword" placeholder="Enter Password" />
                </div>              
                <button onClick={this.handleLoginSubmit} type="button" className="btn btn-primary">Login</button>
            </form>
            <div>Don't have account? <Link to={'/signup'}>Create one now</Link></div>
            </div>
            </div>
            </div>
        </div>
                  
            </div>
        );
    }
}

export default Login; 