import React from 'react'

import Form from '../components/Form';


class FragmentDetail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data:[]
		};
	}

	componentWillMount() {
		
	}

	render(){
		return(
			<Form />
		)
	}
}
