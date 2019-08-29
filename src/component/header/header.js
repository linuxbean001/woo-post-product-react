import React, { Component } from 'react';
import { localS } from '../../helper/localS';
//import history from '../../helper/history';
import { Link, Route, Switch, withRouter  } from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
        handleLogout=()=>{
            this.props.history.replace('/login');
        localS.removeLocal('token');
        localS.removeLocal('user');
       
    }
    render() {
        return (
            <div>
               <header>
                   
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={'/'}>LOGO</Link>
                    </div>
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                       
                        <ul className="nav navbar-nav navbar-right">
                          
                            <li>
                                        <span onClick={this.handleLogout} style={{cursor:'pointer'}}>
                                            <img src="http://www.country-dialing-codes.net/img/png-country-4x2-flat-res-640x480/gf.png" alt="Français" width="28px" height="18px"/>
                                         
                                        </span>
                                    </li>
                            <li className="dropdown">
                                <Link id="user-profile" to={'/'} className="dropdown-toggle" data-toggle="dropdown"> <img
                src={
                  process.env.PUBLIC_URL +
                  '/profile/profile.png'
                }
              /> Sofiane May</Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

            </div>
        );
    }
}

export default withRouter(Header); 