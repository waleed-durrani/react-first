import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a href="http://reguspharma.yolasite.com/" className="navbar-brand">RegusPharm</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="index.html" className="">Home</a></li>
                    <li><a href="https://www.wikipedia.org/" className="" target="_blank">Wikipedia</a></li>
                </ul>
            </nav>   
        );
    }
}

export default Header;