import React from 'react'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import logo from '../common/image/logo.png'

const Header = () => (
    <AppBar
        title="Youbo"
        iconElementLeft={<Avatar src={logo}/>}
        iconElementRight={<FlatButton label="Login"/>}
    />
)

export default Header
