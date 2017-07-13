import React from 'react';

import {getRole} from '../../api/user';
import Editor from '../../components/Editor';
class RoleDetail extends React.Component{

    properties = [
        {title:"name",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getRole}
            />
        )
    }
}

export default RoleDetail
