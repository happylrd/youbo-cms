import React from 'react'

import {getTweet} from '../api/tweet';

import Form from '../components/Form';
import {timeToString} from '../utils/Time';

class TweetDetail extends React.Component{

	constructor(props){
		super(props);
		
		this.state = {
			data: []
		}
	};



	componentWillMount(){
		const {tweetId} = this.props.match.params;
		getTweet(tweetId).then(tweet=>{
			let data = this.state.data;
			data.push({title:"userId",value:tweet.userId,disabled:true});
			data.push({title:"id",value:tweet.id,disabled:true});
			data.push({title:"createAt",value:timeToString(tweet.createAt),disabled:false});
			data.push({title:"updateAt",value:timeToString(tweet.updateAt),disabled:false});
			this.setState({data});
		});
	};
	
	
	render(){
		if(this.state.data){
			return(
				<div>
					<Form datas={this.state.data}/>
				</div>
			);
		}else{
			return(
				<div>
					稍等!
				</div>
			)
		}

	}
}

export default TweetDetail;
