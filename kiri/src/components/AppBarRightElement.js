import React from "react";

import Avatar from "material-ui/Avatar";
import ListItem from 'material-ui/List/ListItem';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import FlatButton from 'material-ui/FlatButton';
import {white} from "material-ui/styles/colors";

import {Grid,Row,Col} from 'react-flexbox-grid';

class AppBarRightElement extends React.Component{

	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {};
	  }

	render(){
		return(
			<ListItem style={this.props.style}>
				<Avatar>A</Avatar>->
				{"欢迎您："+this.props.username+ " | "}
				<FlatButton style={{color:white}}
				            icon={<ExitToApp />}
				            label={"退出"}
				            primary={false}
				            onTouchTap={this.props.onTouchTap}/>
			</ListItem>
		);
	}
}

export default AppBarRightElement;
