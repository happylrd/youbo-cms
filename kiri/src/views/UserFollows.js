import React from 'react';

import MainPageContent from './MainPageContent';
import {listUserFollow} from '../api/user';

class UserFollows extends React.Component{
	
	render(){
		return (
			<MainPageContent
				callback={listUserFollow}
				properties= {["targetId","originId","id"]}
				url={"/UserFollow"}
			/>
		)
	}
}

export default UserFollows;