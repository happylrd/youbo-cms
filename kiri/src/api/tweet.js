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
    const url = BASE_URL + 'tweetFragments';

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

export function getComment(tweetId) {
    const url = BASE_URL + 'tweets/' + tweetId + '/comments';

    return axios.get(url)
        .then(res => {
            return Promise.resolve(res.data)
        })
}
