import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem} from 'material-ui/List';
import Input from 'material-ui/Input/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';


const styleSheet = createStyleSheet('LoginDialog', theme=>({
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	},
	input: {
		margin: theme.spacing.unit
	},
	dialog: {
		width:"500"
	}
}));

class LoginDialog extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			form:{
				username:"",
				password:""
			}
		}
	}

	handleUsernameChange = (e) =>{
		let form = this.state.form;
		form.username = e.target.value;
		this.setState(form);
	};

	handlePwdChange = (e) =>{
		let form = this.state.form;
		form.password = e.target.value;
		this.setState(form);
	};
	
	handleLogin = () =>{
		console.log("start login");
		this.props.handleLogin(this.state.form)
	};
	
	render() {
		const {classes} = this.props;
		return (
			<Dialog
				className={classes.dialog}
				open={this.props.open}
				onRequestClose={this.props.handleRequestClose}
			>
				<List>
					<ListItem button>
						<FormControl className={classes.input}>
							<InputLabel htmlFor="username">username</InputLabel>
							<Input id="username" value={this.state.form.username} onChange={this.handleUsernameChange} />
						</FormControl>
					</ListItem>
					<ListItem button>
						<FormControl className={classes.input}>
							<InputLabel htmlFor="password">password</InputLabel>
							<Input type="password" id="password" value={this.state.form.password} onChange={this.handlePwdChange} />
						</FormControl>
					</ListItem>
				</List>
				<Button color="contrast" onClick={this.handleLogin}>Login</Button>
			</Dialog>
		);
	}
}


export default withStyles(styleSheet)(LoginDialog);
