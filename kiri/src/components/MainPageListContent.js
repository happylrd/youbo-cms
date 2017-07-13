import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';


class MainPageListContentHead extends React.Component {
	
	createSortHandler = property => event => {
		const onRequestSort = this.props.onRequestSort;
		onRequestSort(event, property);
	};
	
	render() {
		
		const { columnData } = this.props;
		
		const { onSelectAllClick, order, orderBy } = this.props;
		
		return (
			<TableHead>
				<TableRow>
					<TableCell checkbox>
						<Checkbox onChange={onSelectAllClick} />
					</TableCell>
					{columnData.map(column => {
						return (
							<TableCell
								key={column.id}
								numeric={column.numeric}
								disablePadding={column.disablePadding}
							>
								<TableSortLabel
									active={orderBy === column.id}
									direction={order}
									onClick={this.createSortHandler(column.id)}
								>
									{column.label}
								</TableSortLabel>
							</TableCell>
						);
					}, this)}
				</TableRow>
			</TableHead>
		);
	}
}

const styleSheet = createStyleSheet('MainPageListContent', theme => ({
	paper: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	}
}));

class MainPageListContent extends React.Component {
	
	
	state = {
		order: 'asc',
		orderBy: 'createAt',
		selected: []
		
	};

	
	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = 'desc';
		
		if (this.state.orderBy === property && this.state.order === 'desc') {
			order = 'asc';
		}
		
		const data = this.props.data.sort(
			(a, b) => (order === 'desc' ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]),
		);
		
		this.setState({ data, order, orderBy });
	};
	
	handleSelectAllClick = (event, checked) => {
		if (checked) {
			this.setState({ selected: this.props.data.map(n => n.id) });
			return;
		}
		this.setState({ selected: [] });
	};
	
	handleClick = (event, id) => {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		this.setState({ selected: newSelected });
	};
	
	delete = (e) => {
		if(this.props.delete(e.currentTarget.id)===1){
			window.location.reload();
		}
	};

	isSelected = id => this.state.selected.indexOf(id) !== -1;
	
	render() {
		const { data,classes }= this.props;
		const {order, orderBy} = this.state;

		return (
			<Paper className={classes.paper}>
				<Table>
					<MainPageListContentHead
						columnData={this.props.head}
						order={order}
						orderBy={orderBy}
						onSelectAllClick={this.handleSelectAllClick}
						onRequestSort={this.handleRequestSort}
					/>
					<TableBody>
						{data.map(n => {
							const isSelected = this.isSelected(n.id);
							return (
								<TableRow
									hover
									role="checkbox"
									onClick={event => this.handleClick(event, n.id)}
									aria-checked={isSelected}
									tabIndex="-1"
									key={n.rowId}
									selected={isSelected}
								>
									<TableCell checkbox>
										<Checkbox checked={isSelected} />
									</TableCell>
									{
										this.props.properties.map(property=>{
											return(
												<TableCell disablePadding>
													{n[property]}
												</TableCell>)
										})
									}
									<TableCell disablePadding>
										<Link to={this.props.url+"/"+n["id"]}>
											<Button>编辑</Button>
										</Link>
										<Button id={n["id"]} onClick={this.delete}>删除</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styleSheet)(MainPageListContent);