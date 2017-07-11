import React from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import logo from '../common/image/logo.png'

import FlatButton from './FlatButton';

const FlatButton = () =>{
    
};
const Header = () => (
    <AppBar
        title="Youbo"
        iconElementLeft={<Avatar src={logo}/>}
        iconElementRight={<FlatButton/>}
    />
)

export default Header
