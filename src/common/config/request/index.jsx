import axios from 'axios';
import Api from './../api';

const ip = Api.baseIp;

const post = (urlKey, params, config, {type = 'default', response = true} = {}) =>{
    return new Promise((resolve, reject) => {
        let req = null;
        if(type === 'file'){
            req = axios.post(ip + Api.urls[urlKey], params, config);
        }else if(type === 'all'){
            req = axios.post(ip + Api.urls[urlKey], params, config);
        }else{
            req = axios.post(ip + Api.urls[urlKey], {params: params}, config);
        }
        req.then(res =>{
            console.log("Res", res)
            if(response)
                res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const get = (urlKey, params) =>{
    return new Promise((resolve, reject) => {
        axios.get(ip + Api.urls[urlKey], {params: params}).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const put = (urlKey, params, config) =>{
    return new Promise((resolve, reject) => {
        axios.put(ip + Api.urls[urlKey], {params: params}, config).then(res =>{
            res = res.data;
            resolve(res);
        }).catch(res =>{
            reject(res);
        })
    })
}

const deleted = (urlKey, params) =>{
    return new Promise((resolve, reject) => {
        axios.delete(ip + Api.urls[urlKey], {params: params}).then(res =>{
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

