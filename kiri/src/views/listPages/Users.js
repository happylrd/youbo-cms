import React from 'react';

import MainPageContent from "../../components/MainPageContent"
import {listUser,deleteUser} from '../../api/user';

export default class Users extends React.Component{

	render(){
		return(
			<MainPageContent 
				properties={["username","id"]}
				callback={listUser}
                url={"/Users"}
			    delete={deleteUser}
			    title={"Users"}
			/>
		)
	}
}

