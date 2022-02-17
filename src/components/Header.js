import React, { Component } from 'react';

class Header extends Component {
//use shouldComponentUpdate to only render the header once
shouldComponentUpdate(nextProps, nextState) {
    return false;
}

render() {
    return <h1 className='f1'>RoboFriends</h1>
    }
}

export default Header;