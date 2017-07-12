import React from 'react';

import MainPageListContent from '../../components/MainPageListContent';
import {listFragments} from '../../api/tweet';
import {typeToConstant} from '../../utils/typeToConstant';
import {timeToString} from '../../utils/Time';



class TweetFragments extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			data:[]

		};
		this.static = {
			head:[
				{ id: 'id', numeric: false, disablePadding: true, label: 'id' },
				{ id: 'type', numeric: false, disablePadding: true, label: 'type' },
				{ id: 'createAt', numeric: false, disablePadding: true, label: "createAt" },
				{ id: 'updateAt', numeric: false, disablePadding: true, label: 'updateAt' },
				{ id: 'tweetId', numeric: false, disablePadding: true, label: 'tweetId' },
				{ id: 'operation', numeric: false, disablePadding: false, label: '操作' }
			]
		}
	}

	properties = ["id","type","createAt","updateAt","tweetId"];

	componentWillMount() {
		listFragments().then(res=>{
			let counter = 0;
			let data = this.state.data;
			res.map(i=>{
				counter += 1;
				data.push({
					rowId:counter+1,id:i.id,type:typeToConstant(i.type),
					tweetId:i.tweetId, createAt:timeToString(i.createAt),updateAt:timeToString(i.updateAt)});
			});

			this.setState({data});
		})
	}

	render(){
		if(this.state.data){
			console.log(this.state.data);
			return(
				<MainPageListContent
					head={this.static.head}
					data={this.state.data}
					properties={this.properties}
					url="/Fragments"
				/>
			)
		}else{
			return(
				<div>
					加载中!!!
				</div>
			)
		}
	}
}

export default TweetFragments;
