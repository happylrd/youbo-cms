
import React from 'react'

import Snackbar from 'material-ui/Snackbar';

import AddDataItem from './AddDataItem';
import {validateEmail,validatePhone,validateURL} from '../utils/Validator';

class PostData extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			submitData:{},
			msg:"",
			open:false
		}
	};
	
	componentWillMount() {
		let submitData = this.state.submitData;
		this.properties = this.props.properties;
		let date = new Date();
		let updateAt = [];
		updateAt.push(date.getYear()+1900);
		updateAt.push((date.getMonth()+1)%12);
		updateAt.push((date.getDay()+9)%30);
		updateAt.push(date.getHours());
		updateAt.push(date.getMinutes());
		updateAt.push(date.getSeconds());
		submitData["updateAt"] = updateAt;
		submitData["createAt"] = updateAt;
		this.properties.map(prop=>{
			submitData[prop.title]=null;
		});
		this.setState(submitData);
	}
	
	handleChildChange = (key,value) => {
		let msg = this.state.msg;
		let submitData = this.state.submitData;
		switch(key){
			case "email":
				if(validateEmail(value)==null){
					msg = "邮箱格式不正确"
				}else{
					submitData[key] = value;
					msg = "success"
				}
				break;
			case "url":
				if( validateURL(value)==null ){
					msg = key+"地址不正确"
				}else{
					submitData[key] = value;
					msg = "success"
				}
				break;
			case "phone":
				console.log("验证手机");
				if(validatePhone(value)==null){
					msg = "电话格式不正确";
				}else{
					submitData[key] = value;
					msg = "success"
				}
				break;
			default:
				submitData[key] = value;
				msg = "success"
		}
		this.setState({submitData,msg});
	};
	
	handleRequestClose = () => {
		this.setState({ open: false });
	};
	
	submit = () => {
		if(this.state.submitData.username&&this.state.submitData.password){
			if(this.state.msg==="success"){
				this.props.submit(this.state.submitData);
				this.setState({open:true});
			}else{
				this.setState({open:true});
			}
		}
		else{
			this.setState({open:true,msg:"请填写用户名和密码"})
		}
	};
	
	render(){
		return (
			<div>
				<AddDataItem
					datas={this.props.properties}
					onChange={this.handleChildChange}
					submit={this.submit}
				/>
				<Snackbar
					anchorOrigin={{vertical: 'top', horizontal: 'center'}}
					open={this.state.open}
					onRequestClose={this.handleRequestClose}
					SnackbarContentProps={{'aria-describedby': 'message-id'}}
					message={<span id="message-id">{this.state.msg}</span>}
				/>
			</div>
		)
	}
}

export default PostData;