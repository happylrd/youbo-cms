import React from 'react';

import {listRole,deleteRole} from "../../api/user"
import MainPageContent from '../../components/MainPageContent';
export default class Role extends React.Component{

	properties = ['name',"id"];
	
	render(){
		return(
			<MainPageContent
				url="/Role"
			    properties={this.properties}
			    callback={listRole}
			    delete={deleteRole}
			/>
		)
	}
}
