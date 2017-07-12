import React from 'react';

import MainPageContent from "../../components/MainPageContent";
import {listComments} from '../../api/user';

export default class Comments extends React.Component{

    render(){
        return(
            <MainPageContent
                properties={["tweetId","userId","id"]}
                callback={listComments}
                url={"/Comments"}
            />
        )
    }
}
