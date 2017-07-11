import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem} from 'material-ui/List';
import Input from 'material-ui/Input/Input';

const styleSheet = createStyleSheet('LoginDialog', theme=>({
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	},
	input: {
		margin: theme.spacing.unit
	}
}));

class LoginDialog extends React.Component {
	
	render() {
		const {classes,handleLoginState} = this.props;
		return (
			<Dialog
				open={this.props.open}
				onRequestClose={this.props.handleRequestClose}
			>
				<List>
					<ListItem button>
						<Input placeholder="User name" className={classes.input} />
					</ListItem>
					<ListItem button>
						<Input placeholder="Password" type="password" className={classes.input} />
					</ListItem>
				</List>
				<Button color="contrast" onClick={handleLoginState}>Login</Button>
			</Dialog>
		);
	}
}


export default withStyles(styleSheet)(LoginDialog);
