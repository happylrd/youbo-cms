import React from "react";


class Home extends React.Component{
	// 构造
	constructor(props) {
		super(props);
	    // 初始状态
		this.state = {};
		
		this.titles = [
			"文章标题","文章作者","文章描述"
		]
	}

	
	render(){
		return(
			<div>
				Home!!!!!!!!!!
			</div>
		)
	}
}

export default Home;





