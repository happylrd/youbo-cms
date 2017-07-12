import React from 'react'

import Form from './Form';

class Editor extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	};

	componentWillMount() {
		const id = this.props.id;
		this.properties = this.props.properties;
		this.props.callback(id).then(item=>{
			let data = this.state.data;

			this.properties.map(prop=>{
				let queryResult = {};
				console.log(item[prop.title]);
				queryResult["value"] = item[prop.title];
				queryResult["disabled"] = prop.disabled;
				queryResult["title"] = prop.title;
				queryResult["type"] = prop.type;
				data.push(queryResult);
			});
			this.setState(data);
		})
	}

	render(){
		if(this.state.data){
			return (
				<Form
					datas={this.state.data}
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