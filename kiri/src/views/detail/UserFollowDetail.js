import React from 'react';

import {getUserFollow} from '../../api/user';
import Editor from '../../components/Editor';
class UserFollowDetail extends React.Component{

    properties = [
        {title:"originId",disabled:false,type:"text"},
        {title:"targetId",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getUserFollow}
            />
        )
    }
}

export default UserFollowDetail