import React from 'react';

import MainPageContent from "../../components/MainPageContent";
import {listOrgMembers} from '../../api/user';

export default class OrgMembers extends React.Component{

    render(){
        return(
            <MainPageContent
                properties={["orgId","userId","role","id"]}
                callback={listOrgMembers}
                url={"/OrgMembers"}
            />
        )
    }
}
