import React from 'react';

import {getOrg} from '../../api/user';
import Editor from '../../components/Editor';
class OrgDetail extends React.Component{

    properties = [
        {title:"name",disabled:false,type:"text"},
        {title:"description",disabled:false,type:"text"},
        {title:"picture",disabled:false,type:"text"},
        {title:"ownerId",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getOrg}
            />
        )
    }
}

export default OrgDetail