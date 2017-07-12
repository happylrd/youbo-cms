import React from 'react';

import {getCollection} from '../../api/user';
import Editor from '../../components/Editor';
class CollectionDetail extends React.Component{

    properties = [
        {title:"userId",disabled:false,type:"text"},
        {title:"tweetId",disabled:false,type:"text"},
        {title:"enabled",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getCollection}
            />
        )
    }
}

export default CollectionDetail