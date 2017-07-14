
import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import {Link} from 'react-router-dom';

const toolbarStyleSheet = createStyleSheet('TableToolBar', theme => ({
	root: {
		paddingRight: 2
	},
	actions: {
		color: theme.palette.text.secondary
	}
}));

let TableToolBar = props => {
	const {classes } = props;

	return (
		<Toolbar
			className={classes.root}
		>
			<div className={classes.actions}>
				<Link to={"/add"+props.title}>
					<IconButton >
						<AddIcon />
					</IconButton>
				</Link>
			</div>
		</Toolbar>
	);
};


export default withStyles(toolbarStyleSheet)(TableToolBar);

