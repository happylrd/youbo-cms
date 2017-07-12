import React from "react";

import {listTweet,deleteTweet} from '../../api/tweet';

import MainPageContent from '../../components/MainPageContent';


class Tweets extends React.Component{
	// 构造

	render(){
		return(
			<MainPageContent
				properties={["userId","id"]}
				callback={listTweet}
				url={"/Tweets"}
			    delete={deleteTweet}
			/>
		)
	}
}

export default Tweets;

