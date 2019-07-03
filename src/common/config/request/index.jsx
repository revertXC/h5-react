import axios from 'axios';
import Api from './../api';

const ip = Api.baseIp;

const post = (urlKey, params, config) =>{
    return new Promise((resolve, reject) => {
        axios.post(ip + Api.urls[urlKey], params, config).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const get = (urlKey, params) =>{
    return new Promise((resolve, reject) => {
        axios.get(ip + Api.urls[urlKey], params).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const put = (urlKey, params, config) =>{
    return new Promise((resolve, reject) => {
        axios.put(ip + Api.urls[urlKey], params, config).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const deleted = (urlKey, params) =>{
    return new Promise((resolve, reject) => {
        axios.delete(ip + Api.urls[urlKey], params).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}


export {
    post,
    get,
    put,
    deleted
}

