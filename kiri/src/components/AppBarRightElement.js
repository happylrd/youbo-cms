import React from "react";

import Avatar from "material-ui/Avatar";
import ListItem from 'material-ui/List/ListItem';
import ExitToApp from 'material-ui-icons/ExitToApp';

import amber from "material-ui/colors/amber";

import FlatButton from './FlatButton';


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
				<FlatButton style={{color:amber}}
				            icon={<ExitToApp />}
				            label={"退出"}
				            onTouchTap={this.props.onTouchTap}/>
			</ListItem>
		);
	}
}

export default AppBarRightElement;
