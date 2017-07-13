import React from 'react';

import MainPageContent from "../../components/MainPageContent";
import {listComments,deleteComment} from '../../api/tweet';

export default class Comments extends React.Component{

    render(){
        return(
            <MainPageContent
                properties={["tweetId","userId","id"]}
                callback={listComments}
                url={"/Comments"}
                delete={deleteComment}
            />
        )
    }
}
