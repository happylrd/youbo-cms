import React from 'react';

import {getUser,updateUserInfo} from '../../api/user';
import Editor from '../../components/Editor';
class UserDetail extends React.Component{

	properties = [
		{title:"username",disabled:false,type:"text"},
		{title:"password",disabled:false,type:"password"},
		{title:"email",disabled:false,type:"email"},
		{title:"phone",disabled:false,type:"phone"},
		{title:"nickname",disabled:false,type:"text"},
		{title:"realname",disabled:false,type:"text"},
		{title:"avatar",disabled:false,type:"url"},
		{title:"gender",disabled:false,type:"text"},
		{title:"birthday",disabled:false,type:"text"},
		{title:"description",disabled:false,type:"text"},
		{title:"enabled",disabled:false,type:"text"}
	];

	render(){
		return(
			<Editor
				id={this.props.match.params.id}
				properties = {this.properties}
				callback={getUser}  
			    submit={updateUserInfo}
			/>
		)
	}
}

export default UserDetail