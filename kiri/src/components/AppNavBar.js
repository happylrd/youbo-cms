// @flow

import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Snackbar from 'material-ui/Snackbar';
import AppBarRightElement from './AppBarRightElement';
import LoginDialog from './LoginDialog';

const styleSheet = createStyleSheet('AppNavBar', {
	root: {
		marginTop: 0,
		width: '100%'
	},
	flex: {
		flex: 1
	}

});

class AppNavBar extends React.Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			open:false,
			login:false,
			username:"luoop",
			password:"1234567",
			msg:"",
			snackbarOpen:false
		};
		
	}

	handleRequestClose = () =>{
		this.setState({open:false});
	};

	handleRequestOpen = () =>{
		this.setState({open:true});
	};

	handleSnackbarClose = () =>{
		this.setState({snackbarOpen:false});
	};

	logOut = () =>{
		this.setState({login:!this.state.login})
	};

	handleDialogLogin = (form) => {
		if(form.username===this.state.username&&form.password===this.state.password){
			console.log("login success");
			this.setState({login:true,open:false})
		}else{
			this.setState({msg:"请输入正确的用户名和密码",snackbarOpen:true})
		}
	};

	render() {
		const classes = this.props.classes;
		const {onLeftIconButtonTouchTap} = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" >
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu"
						            onClick={onLeftIconButtonTouchTap}
					                className={this.props.offset}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" className={classes.flex}>
							Youbo
						</Typography>
						{this.state.login?
							<AppBarRightElement username={this.state.username} onTouchTap={this.logOut} />
							:
							<Button color="contrast" onClick={this.handleRequestOpen}>Login</Button>
						}

					</Toolbar>
				</AppBar>
				<LoginDialog
					open={this.state.open}
					handleRequestClose={this.handleRequestClose}
				    handleLogin={this.handleDialogLogin}
				/>
				<Snackbar
					anchorOrigin={{vertical: 'top', horizontal: 'center'}}
					open={this.state.snackbarOpen}
					onRequestClose={this.handleSnackbarClose}
					SnackbarContentProps={{'aria-describedby': 'message-id'}}
					message={<span id="message-id">{this.state.msg}</span>}
				/>
			</div>
		);
	}
}



export default withStyles(styleSheet)(AppNavBar);