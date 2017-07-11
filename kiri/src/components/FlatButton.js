import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('FlatButtons', theme => ({
	button: {
		margin: theme.spacing.unit
	}
}));

function FlatButtons(props) {
	const classes = props.classes;
	return (
		<div>
			<Button color="contrast" className={classes.button}>
				{props.label}
			</Button>
		</div>
	);
}


export default withStyles(styleSheet)(FlatButtons);
