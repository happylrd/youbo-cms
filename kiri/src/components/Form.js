import React from "react";

import {withStyles,createStyleSheet} from 'material-ui/styles'
import Button from 'material-ui/Button';
import TextField from "material-ui/TextField";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
const styleSheet = createStyleSheet("Form",theme=>({
	root: {
		flexGrow: 1,
		marginTop: 30,
		marginLeft:"12.5%",
		marginRight:"12.5%",
	},
	textField:{
		margin:12,
		marginLeft:"12.5%"
	},
	submit:{
		marginLeft:"12.5%"
	}
}));


class Form extends React.Component{

	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {};
	  }

	render(){
		const {classes,datas} =this.props;
		return(
			<Paper className={classes.root}>
				<Grid container gutter={2}>

					{datas.map(data=>{
						return(
							<Grid container>
								<Grid item xs={6} sm={9}>
									<TextField label={data.title+":"}
									           disabled = {data.disabled}
									           defaultValue = {data.value}
									           className={classes.textField}
								               fullWidth={true}
									/>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
				<Button className={classes.submit}>提交</Button>
			</Paper>
		);
	}

}

export default withStyles(styleSheet)(Form);


