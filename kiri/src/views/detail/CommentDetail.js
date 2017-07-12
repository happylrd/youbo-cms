import React from 'react';

import {getComment} from '../../api/tweet';
import Editor from '../../components/Editor';
class CommentDetail extends React.Component{

    properties = [
        {title:"userId",disabled:false,type:"text"},
        {title:"tweetId",disabled:false,type:"text"},
        {title:"content",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getComment}
            />
        )
    }
}

export default CommentDetail
