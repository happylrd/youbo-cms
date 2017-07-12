import React from 'react';

import MainPageContent from '../../components/MainPageContent';
import {listUserFollow,deleteUserFollow} from '../../api/user';

class UserFollows extends React.Component{
	
	render(){
		return (
			<MainPageContent
				callback={listUserFollow}
				properties= {["targetId","originId","id"]}
				url={"/UserFollow"}
			    delete={deleteUserFollow}
			/>
		)
	}
}

export default UserFollows;