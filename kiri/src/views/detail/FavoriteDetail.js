import React from 'react';

import {getFavorite} from '../../api/user';
import Editor from '../../components/Editor';
class FavoriteDetail extends React.Component{

    properties = [
        {title:"userId",disabled:false,type:"text"},
        {title:"tweetId",disabled:false,type:"text"},
        {title:"enabled",disabled:false,type:"text"},
    ];

    componentWillMount(){
        console.log("detail!!!!!!!!!1");
    }

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getFavorite}
            />
        )
    }
}

export default FavoriteDetail