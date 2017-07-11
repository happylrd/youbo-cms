import React from "react";

import MainPageListContent from '../components/MainPageListContent';
import {listTweet} from '../api/tweet';

import MainPageContent from './MainPageContent';
import {timeToString} from "../utils/Time";

let counter = 0;


class Tweets extends React.Component{
	// 构造

	render(){
		return(
			<MainPageContent
				properties={["userId","id"]}
				callback={listTweet}
				url={"/Tweets"}
			/>
		)
	}
}

export default Tweets;

