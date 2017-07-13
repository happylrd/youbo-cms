import React from 'react';

import MainPageContent from "../../components/MainPageContent"
import {listOrg,deleteOrg} from '../../api/user';

export default class Orgs extends React.Component{
	
	render(){
		return(
			<MainPageContent
				properties={["name","id"]}
				callback={listOrg}
				url={"/Orgs"}
			    delete={deleteOrg}
			/>
		)
	}
}