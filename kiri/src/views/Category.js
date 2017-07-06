import React from "react";
import MainPageContent from '../components/MainPageContent';

class Category extends React.Component{
	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {};

		this.static = {
		  items:[
			  {id:1,name:"cnm",position:"sd"},
			  {id:1,name:"cnm",position:"sd"},
			  {id:1,name:"cnm",position:"sd"},
			  {id:1,name:"cnm",position:"sd"},
			  {id:1,name:"cnm",position:"sd"}
		  ]
		}
	  }
	
	render(){
		return(
			<MainPageContent items={this.static.items}/>
		)
	}
}

export default Category;