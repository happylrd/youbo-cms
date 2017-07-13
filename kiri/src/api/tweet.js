import axios from 'axios'
import {BASE_URL} from './config'
import querystring from 'querystring'

export function listTweet() {
    const url = BASE_URL + 'tweets';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function listFragments() {
    const url = BASE_URL + 'tweet_fragments';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function saveTweet(content, userId) {
    const url = BASE_URL + 'tweets';

    return axios.post(url, querystring.stringify({
        content: content,
        user: userId
    }))
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function getTweet(tweetId) {
    const url = BASE_URL + 'tweets/' + tweetId;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function searchTweet(content) {
    const url = BASE_URL + 'tweets/search?content=' + content;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}

export function saveComment(userId, tweetId, content) {
    const url = BASE_URL + 'comments';

    return axios.post(url, querystring.stringify({
        user: userId,
        tweet: tweetId,
        content: content
    }))
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function deleteComment(id){
    const url = BASE_URL + "comments/" + id;
    axios.delete(url);
    return 1;
}

export function deleteTweetFragment(id){
    const url = BASE_URL + "tweet_fragments/" + id;
    axios.delete(url);
    return 1;
}


export function deleteTweet(id){
    const url = BASE_URL + "tweets/" + id;
    axios.delete(url);
    return 1;
}

export function listComments() {
    const url = BASE_URL + 'comments';
    
    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function getComment(id) {
    const url = BASE_URL + 'comments/' + id;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}


export function getTweetFragment(tweetId) {
    const url = BASE_URL + 'tweet_fragments/'+ tweetId ;

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}