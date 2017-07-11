import React from 'react';

import MainPageContent from "./MainPageContent"
import {listUser} from '../api/user';

export default class Users extends React.Component{

	render(){
		return(
			<MainPageContent 
				properties={["username","id"]}
				callback={listUser}
                url={"/Users"}
			/>
		)
	}
}

