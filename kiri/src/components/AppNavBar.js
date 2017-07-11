// @flow

import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

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
			login:false
		};

		this.data = {
			username:"luoop"
		}
	}

	handleRequestClose = () =>{
		this.setState({open:false});
	};

	handleRequestOpen = () =>{
		this.setState({open:true});
	};

	logOut = () =>{
		this.setState({login:!this.state.login})
	};

	handleDialogLogin = () => {
		this.setState({login:!this.state.login,open:false});
	};

	render() {
		const classes = this.props.classes;
		return (
			<div className={classes.root}>
				<AppBar position="static" >
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu"
						            onClick={this.props.onLeftIconButtonTouchTap}
					                className={this.props.offset}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" className={classes.flex}>
							Youbo
						</Typography>
						{this.state.login?
							<AppBarRightElement username={this.data.username} onTouchTap={this.logOut} />
							:
							<Button color="contrast" onClick={this.handleRequestOpen}>Login</Button>
						}

					</Toolbar>
				</AppBar>
				<LoginDialog
					open={this.state.open}
					handleRequestClose={this.handleRequestClose}
				    handleLoginState={this.handleDialogLogin}
				/>
			</div>
		);
	}
}


export default withStyles(styleSheet)(AppNavBar);