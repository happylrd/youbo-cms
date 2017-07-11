
import React from 'react';

import MainPageListContent from './MainPageListContent';
import {timeToString} from '../utils/Time';
class MainPageContent extends React.Component{

	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			data:[]
		};

	}
	head=[
		{ id: 'operation', numeric: false, disablePadding: false, label: '操作' },
		{ id: 'updateAt', numeric: false, disablePadding: true, label: 'updateAt' },
		{ id: 'createAt', numeric: false, disablePadding: true, label: "createAt" }
	];

	properties = ["updateAt","createAt"];

	componentWillMount() {
		this.properties = this.properties.concat(this.props.properties);
		this.properties.map(property=>{
			this.head.push({id:property,numeric:false,disablePadding:true,label:property})
		});
		this.head = this.head.reverse();
		this.properties = this.properties.reverse();
		this.props.callback().then(items=>{
			let data = this.state.data;
			let counter = 0;
			items.map(item=>{
				counter += 1;
				let result = {};
				this.properties.map(property=>{
					result[property] = item[property]
				});
				result["createAt"] = timeToString(item["createAt"]);
				result["updateAt"] = timeToString(item["updateAt"]);
				result["rowId"] = counter;
				data.push(result)
			});
			console.log("willMount表头",this.head);
			this.setState({data})
		})
	}

	render(){
		if(this.state.data){
			console.log("列属性",this.properties);
			console.log("表头",this.head);
			if(this.head[0].id != 'operation'){
				this.head = this.head.reverse();
				console.log("reverse 已经执行!!! 执行之后的：head",this.head)
			}
			return (
				<MainPageListContent
					head={this.head.reverse()}
					data={this.state.data}
					properties={this.properties}
					url={this.props.url}
				/>
			)
		}else{
			return(
				<div>cnm!!!!!!</div>
			)
		}

	}
}

export default MainPageContent;
