import React from "react";

import Paper from "material-ui/Paper";
import Card,{CardHeader} from "material-ui/Card";
import { Grid, Row, Col } from 'react-flexbox-grid';

class ContentBox extends React.Component{
	constructor(props){
		super(props);

		this.state = {
		}
	}
	styles = {
		subBox:{
			maxWidth:200
		}
	};

	render(){

		return(
			<Paper>
				<Card>
					<CardHeader title={this.props.title}/>
					{
						this.props.childNodes.map((node)=>{
							return (
								<Card style={this.styles.subBox}>
									<Grid style={{padding:"20%"}}>
										<Row>
											{node.item}
										</Row>
										<Row>
											<CardTitle title={node.subtitle}/>
										</Row>
									</Grid>
								</Card>
							)
						})
					}
				</Card>
			</Paper>
		)
	}
}

export default ContentBox;
