
import React from 'react';

import {saveUser} from '../../api/user';
import PostData from '../../components/PostData';
class UserAdd extends React.Component{
	
	properties = [
		{title:"username",type:"text"},
		{title:"password",type:"password"},
		{title:"email",type:"email"},
		{title:"phone",type:"phone"},
		{title:"nickname",type:"text"},
		{title:"realname",type:"text"},
		{title:"avatar",type:"url"},
		{title:"gender",type:"text"},
		{title:"birthday",type:"text"},
		{title:"description",type:"text"},
		{title:"enabled",type:"text"}
	];
	
	render(){
		return(
			<PostData
				properties = {this.properties}
				submit={saveUser}
			/>
		)
	}
}

export default UserAdd