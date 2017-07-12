import React from "react";

import {BrowserRouter as Router,Route} from "react-router-dom";

import MainFrame from '../views/MainFrame';
import Home from '../views/Home';
import Category from '../views/listPages/Tweets';

const Routes = () => {
	return(
	<Router>
		<Route path="/" component={MainFrame}>
			<Route path="Home" component={Home}/>
			<Route path="Category" component={Category}/>
		</Route>
	</Router>
	)
};

export default Routes;