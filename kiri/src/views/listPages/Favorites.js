import React from 'react';

import MainPageContent from "../../components/MainPageContent";
import {listFavorites,deleteFavorite} from '../../api/user';

export default class Favorites extends React.Component{

    render(){
        return(
            <MainPageContent
                properties={["tweetId","userId","id"]}
                callback={listFavorites}
                url={"/Favorites"}
                delete={deleteFavorite}
            />
        )
    }
}
