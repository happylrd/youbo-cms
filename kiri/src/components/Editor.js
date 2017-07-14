import React from 'react'

import Snackbar from 'material-ui/Snackbar';

import Form from './Form';
import {validateEmail,validatePhone,validateURL} from '../utils/Validator';

class Editor extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			data: [],
			submitData:{},
			msg:"",
			open:false
		}
	};

	componentWillMount() {
		const id = this.props.id;
		let submitData = this.state.submitData;
		this.properties = this.props.properties;
		this.props.callback(id).then(item=>{
			let data = this.state.data;

			this.properties.map(prop=>{
				let queryResult = {};
				submitData[prop.title] = item[prop.title];
				queryResult["value"] = item[prop.title];
				queryResult["disabled"] = prop.disabled;
				queryResult["title"] = prop.title;
				queryResult["type"] = prop.type;
				submitData["createAt"] = item["createAt"]
				data.push(queryResult);
			});
			this.setState({data,submitData});
		})
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
		if(this.state.msg==="success"){
			let date = new Date();
			let updateAt = [];
			updateAt.push(date.getYear()+1900);
			updateAt.push((date.getMonth()+1)%12);
			updateAt.push((date.getDay()+9)%30);
			updateAt.push(date.getHours());
			updateAt.push(date.getMinutes());
			updateAt.push(date.getSeconds());
			let submitData = this.state.submitData;
			submitData["updateAt"] = updateAt;
			this.props.submit(this.props.id,submitData);
			this.setState({submitData,open:true});
		}
		else if(this.state.msg===""){
			this.setState({open:true,msg:"请更改数据在提交"})
		}else{
			this.setState({open:true})
		}
	};

	render(){

		console.log(this.state);
		if(this.state.data){
			return (
				<div>
					<Form
						id={this.props.id}
						datas={this.state.data}
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
		}else{
			return(
				<div>wait cnm!!!!!!!</div>
			)
		}
	}
}

export default Editor;