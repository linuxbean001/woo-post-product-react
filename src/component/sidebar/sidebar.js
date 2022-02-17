import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <div>
                <div id="sidebar-wrapper">
            <aside id="sidebar">
                <ul id="sidemenu" className="sidebar-nav">
                    <li>
                    <Link to={'/apartments'}>
                    <span className="sidebar-title">Apartments</span>
                    <span className="sidebar-icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                    </Link>
                    </li>
                    <li>
                    <Link to={'/signup'}>
                    <span className="sidebar-title">Signup</span>
                    <span className="sidebar-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                    </Link>
                    <Link to={'/login'}>
                    <span className="sidebar-title">Login</span>
                    <span className="sidebar-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                    </Link>
                    <Link to={'/posts'}>
                    <span className="sidebar-title">Posts</span>
                    <span className="sidebar-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                    </Link>
                    <Link to={'/allProduct'}>
                    <span className="sidebar-title">Products</span>
                    <span className="sidebar-icon"><i className="fa fa-database" aria-hidden="true"></i></span>
                    </Link>
                    </li>                  
                </ul>
            </aside>            
        </div>
            </div>
        );
    }
}

export default SideBar; 