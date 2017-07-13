import React from 'react';

import MainPageContent from "../../components/MainPageContent";
import {listCollections,deleteCollection} from '../../api/user';

export default class Collections extends React.Component{

    render(){
        return(
            <MainPageContent
                properties={["tweetId","userId","id"]}
                callback={listCollections}
                url={"/Collections"}
                delete={deleteCollection}
            />
        )
    }
}