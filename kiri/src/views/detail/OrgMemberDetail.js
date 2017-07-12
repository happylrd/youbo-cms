import React from 'react';

import {getOrgMember} from '../../api/user';
import Editor from '../../components/Editor';
class OrgMemberDetail extends React.Component{

    properties = [
        {title:"userId",disabled:false,type:"text"},
        {title:"orgId",disabled:false,type:"text"},
        {title:"role",disabled:false,type:"text"},
    ];

    render(){
        return(
            <Editor
                id={this.props.match.params.id}
                properties = {this.properties}
                callback={getOrgMember}
            />
        )
    }
}

export default OrgMemberDetail