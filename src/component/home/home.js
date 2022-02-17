import React, { Component } from 'react'
import { localS } from '../../helper/localS';
// import FilterService from '../../services/filterService';
//const Api = new FilterService();
 class Home extends Component {
     constructor(props){
         super(props);
         this.state={

         }
     }
     componentDidMount() {
         console.log('token', localS.getLocal('user'));
         
        if(!localS.getLocal('token')){
            this.props.history.replace('/login');
        }
    }
    render() {
        return (
            <div>
                <h1 className="text-center">WelCome</h1>
            </div>
        )
    }
}
export default Home;
