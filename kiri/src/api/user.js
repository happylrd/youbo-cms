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

export function saveUser(user) {
    const url = BASE_URL + 'users';
    console.log(user);
    return axios.post(url, querystring.stringify(user))
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

export function updateUserInfo(userId,info) {
    const url = BASE_URL + 'users/' + userId;

    return axios.put(url, querystring.stringify(info))
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
    return 1;
}

export function  deleteUserFollow(id) {
    const url =BASE_URL + "user_follows/" +id;
    axios.delete(url);
    return 1;
}

export function deleteRole(id){
    const url = BASE_URL + "roles/" + id;
    axios.delete(url);
    return 1;
}

export function deleteOrg(id){
    const url = BASE_URL + "orgs/" + id;
    axios.delete(url);
    return 1;
}
export function deleteOrgMember(id){
    const url = BASE_URL + "org_members /" + id;
    axios.delete(url);
    return 1;
}

export function deleteFavorite(id){
    const url = BASE_URL + "favorites/" + id;
    axios.delete(url);
    return 1;
}



export function deleteCollection(id){
    const url = BASE_URL + "collections/" + id;
    axios.delete(url);
    return 1;
}


export function getUserFollow(id) {
    const url = BASE_URL + 'user_follows/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getRole(id) {
    const url = BASE_URL + 'roles/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getOrg(id) {
    const url = BASE_URL + 'orgs/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getOrgMember(id) {
    const url = BASE_URL + 'org_members/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getCollection(id) {
    const url = BASE_URL + 'collections/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getFavorite(id) {
    const url = BASE_URL + 'favorites/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}
