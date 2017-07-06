import React from "react";

import AppBar from "material-ui/AppBar";
import AccountBox from "material-ui/svg-icons/action/account-box";
import Lock from "material-ui/svg-icons/action/lock";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import AppBarRightElement from './AppBarRightElement';
import logo from '../common/image/logo.png';

class AppNavBar extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			loginDialogOpen:false,
			Login:false
		};

		this.static = {
			username:"luoop"
		}
	}
	
	styles = {
		form:{
			marginTop:"0%"
		},
		logo:{
			marginLeft:"35%"
		},
		textLine:{
			marginLeft:20
		},
		loginButton:{
			margin:12,
			marginLeft:"15%",
			width:"70%"
		},
		customContent:{
			width:"30%"
		}
	};
	
	
	handleLoginDialog = () =>{
		this.setState({loginDialogOpen:!this.state.loginDialogOpen});
	};
	
	handleLoginButton = () =>{
		this.setState({
			loginDialogOpen:!this.state.loginDialogOpen,
			Login:true
		})
	};
	
	exitAccount = () =>{
		this.setState({Login:false});
	};

	render(){
		return(
			<div>
				<AppBar
					title="Youbo"
					iconStyleLeft={this.props.iconStyleLeft}
					onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
					iconStyleRight={{marginTop:0}}
					iconElementRight={
						this.state.Login?
						<AppBarRightElement style={{marginTop:0}} username={this.static.username}
							onTouchTap={this.exitAccount}
						/>
						:
						<FlatButton label="Login" onTouchTap={this.handleLoginDialog}
						/>
					}
				/>
				<Dialog open={this.state.loginDialogOpen} contentStyle={this.styles.customContent}>
					<div style={this.styles.form}>
						<Avatar style={this.styles.logo} src={logo} size={150}/>
						<div style={this.styles.textLine}>
							<AccountBox />
							<TextField
								style={{width:"90%"}}
								floatingLabelText="用户名"
							/>
						</div><br/>
						<div style={this.styles.textLine}>
							<Lock size={48}/>
							<TextField
								style={{width:"90%"}}
								floatingLabelText="密码"
							/>
						</div><br/>
						<RaisedButton label="登录"
						              onTouchTap={this.handleLoginButton}
						              primary={true}
						              style={this.styles.loginButton}/>
					</div>
				</Dialog>
			</div>

		)
	}
}

export default AppNavBar;