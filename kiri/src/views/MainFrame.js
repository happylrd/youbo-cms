import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {Card} from "material-ui/Card";
import {blue500} from "material-ui/styles/colors";
import MenuItem from "material-ui/MenuItem";
import {Link,Route,BrowserRouter as Router} from "react-router-dom";

import Home from './Home';
import Category from './Category';
import MainPageContent from '../components/MainPageContent';

class MainFrame extends React.Component{

	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			drawerOpen:false
		};

		this.static = {
			username:"luoop"
		}
	}

	styles = {
		offset:{
			marginLeft:400
		}
	};

	handleDrawerOpen = () =>{
		this.setState({drawerOpen:!this.state.drawerOpen});
	};


	render(){
		return(
		<MuiThemeProvider>
			<Router>
		<div>
			<AppNavBar
				onLeftIconButtonTouchTap={this.handleDrawerOpen}
				iconStyleLeft={this.state.drawerOpen?this.styles.offset:{}}
			/>
			<Drawer docked={false}
			        width={400}
			        open={this.state.drawerOpen}
			        onRequestChange={this.handleDrawerOpen}
			>
				<Card style={{width:400,height:300,backgroundColor:blue500}}>
					<Avatar style={{marginLeft:"32.5%",marginTop:"20%"}} src={logo} size={150}/>
				</Card>
				<MenuItem ><Link to="/Home">主页</Link></MenuItem>
				<MenuItem ><Link to="/Category">分类</Link></MenuItem>
				<MenuItem >CRUD</MenuItem>
			</Drawer>
			<div style={this.state.drawerOpen?this.styles.offset:{}}>
				{
					<div>
						<Route path='/Home' component={Home}/>
						<Route path="/Category" component={Category}/>
					</div>
				}
			</div>
		</div>
			</Router>
		</MuiThemeProvider>
		);
	}
}

export default MainFrame;
