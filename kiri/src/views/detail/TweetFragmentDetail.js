import React from 'react';

import {getTweetFragment} from '../../api/tweet';
import Editor from '../../components/Editor';
class TweetFragmentDetail extends React.Component{

    properties = [
        {title:"content",disabled:false,type:"text"},
        {title:"tweetId",disabled:true,type:"text"}
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getTweetFragment}
            />
        )
    }
}

export default TweetFragmentDetail