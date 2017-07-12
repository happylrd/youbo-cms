import React from "react";

import {withStyles,createStyleSheet} from 'material-ui/styles'
import Button from 'material-ui/Button';
import TextField from "material-ui/TextField";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import {validateEmail,validatePhone,validateURL} from '../utils/Validator';
const styleSheet = createStyleSheet("Form",theme=>({
	root: {
		flexGrow: 1,
		marginTop: 30,
		marginLeft:"12.5%",
		marginRight:"12.5%"
	},
	textField:{
		margin:12,
		marginLeft:"12.5%"
	},
	submit:{
		marginLeft:"12.5%"
	}
}));

let counter = 0;
class Form extends React.Component{

	// 构造
	constructor(props) {
	    super(props);
	    // 初始状态
		this.state = {};
	}

	submit = () => {
		this.props.submit();
	};

	handleChange = (e) =>{
		let title = e.currentTarget.childNodes[0].innerText;
		let value = e.currentTarget.childNodes[1].firstChild.value;
		let type = e.currentTarget.childNodes[1].firstChild.type;
		
		this.props.onChange(title,value,type);

	};
	

	render(){
		const {classes,datas} =this.props;
		console.log("preData",this.state.preData);
		return(
			<Paper className={classes.root}>
				<Grid container gutter={2}>
					{
						datas.map(data=>{
							counter += 1;
							return(
								<Grid container>
									<Grid item xs={6} sm={9}>
										<TextField label={data.title}
										           disabled = {data.disabled}
										           defaultValue = {data.value}
										           className={classes.textField}
									               fullWidth={true}
										           type={data.type}
										           id
										           onChange={this.handleChange}
										/>
									</Grid>
								</Grid>
						);
					})}
				</Grid>
				<Button onClick={this.submit} className={classes.submit}>保存</Button>
			</Paper>
		);
	}

}

export default withStyles(styleSheet)(Form);


