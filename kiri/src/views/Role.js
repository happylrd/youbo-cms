import React from 'react';

import {listRole} from "../api/user"
import MainPageContent from './MainPageContent';
export default class Role extends React.Component{

	properties = ['name',"id"];
	
	render(){
		return(
			<MainPageContent
				url="/Role"
			    properties={this.properties}
			    callback={listRole}
			/>
		)
	}
}
