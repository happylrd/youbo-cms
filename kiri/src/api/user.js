import axios from 'axios'
import {BASE_URL} from './config'
import querystring from 'querystring'

export function listUser() {
    const url = BASE_URL + 'users'

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function saveUser(username, password, nickname) {
    const url = BASE_URL + 'users';

    return axios.post(url, querystring.stringify({
        username: username,
        password: password,
        nickname: nickname
    }))
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getUser(id) {
    const url = BASE_URL + 'users/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function updateInfo(userId, nickname, realname, gender, description) {
    const url = BASE_URL + 'users/' + userId

    return axios.put(url, querystring.stringify({
        nickname: nickname,
        realname: realname,
        gender: gender,
        description: description
    }))
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listMyTweet(username) {
    const url = BASE_URL + 'users/' + username + '/tweets'

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listUserFollow() {
    const url = BASE_URL + 'user_follows';
    
    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listRole() {
    const url = BASE_URL + 'roles';
    
    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listOrg() {
    const url = BASE_URL + 'orgs';
    
    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listComments() {
    const url = BASE_URL + 'comments';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function listCollections() {
    const url = BASE_URL + 'collections';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function listFavorites() {
    const url = BASE_URL + 'favorites';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function listOrgMembers() {
    const url = BASE_URL + 'org_members';
    
    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function deleteUser(id){
    const url = BASE_URL + 'users/' + id;
    axios.delete(url);
}

export function  deleteUserFollow(id) {
    const url =BASE_URL + "user_follows/" +id;
    axios.delete(url);
}

export function deleteTweets(id){
    const url = BASE_URL + "tweets/" + id;
    axios.delete(url);
}

export function deleteTweetFragments(id){
    const url = BASE_URL + "tweet_fragments/" + id;
    axios.delete(url);
}

export function deleteRole(id){
    const url = BASE_URL + "roles/" + id;
    axios.delete(url);
}

export function deleteOrgs(id){
    const url = BASE_URL + "orgs/" + id;
    axios.delete(url);
}