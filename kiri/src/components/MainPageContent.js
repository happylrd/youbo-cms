import React from "react";

import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

class MainPageContent extends React.Component{

	constructor(props) {
        super(props);
    // 初始状态
        this.state = {};
    }

	render(){
		return(
			<div>
				<Table multiSelectable={true}>
					<TableHeader enableSelectAll={true}>
						<TableRow>
							<TableHeaderColumn>ID</TableHeaderColumn>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{
							this.props.items.map((item)=>{
								return(
									<TableRow>
										<TableRowColumn>{item.id}</TableRowColumn>
										<TableRowColumn>{item.name}</TableRowColumn>
										<TableRowColumn>{item.position}</TableRowColumn>
									</TableRow>
								)
							})
						}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default MainPageContent;
