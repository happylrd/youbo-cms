import React from 'react'

import Form from './Form';
import {validateEmail,validatePhone,validateURL} from '../utils/Validator';

class Editor extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			data: [],
			submitData:{}
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

	handleChildChange = (key,value,type) => {
		let msg = "";
		let submitData = this.state.submitData;
		switch(type){
			case "email":
				if(validateEmail(value)==null){
					msg = "邮箱格式不正确"
				}else{
					submitData[key] = value;
				}
				break;
			case "url":
				if( validateURL(value)==null ){
					msg = key+"地址不正确"
				}else{
					submitData[key] = value;
				}
				break;
			case "phone":
				if(validatePhone(value)){
					msg = "电话格式不正确";
				}else{
					submitData[key] = value;
				}
				break;
			default:
				submitData[key] = value;
		}
		this.setState(submitData);
	};

	submit = () => {
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
		this.setState(submitData);
	};

	render(){

		console.log(this.state);
		if(this.state.data){
			return (
				<Form
					id={this.props.id}
					datas={this.state.data}
				    onChange={this.handleChildChange}
				    submit={this.submit}
				/>
			)
		}else{
			return(
				<div>wait cnm!!!!!!!</div>
			)
		}
	}
}

export default Editor;