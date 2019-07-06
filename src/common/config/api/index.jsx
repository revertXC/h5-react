const env = process.env;
const NODE_ENV = env.REACT_APP_NODE_ENV;
console.log(NODE_ENV)
console.log(env)
let base_ip = ''; //接口ip
let base_img_ip = ''; //图片ip

switch (NODE_ENV){
    case "production":
        base_ip = "http://120.79.64.228/";
        base_img_ip = "http://120.79.64.228/";
        break;
    default:
        base_ip = "http://127.0.0.1/";
        base_img_ip = "http://127.0.0.1/";
        break;
}


const author = "蝶蝶";


const urls = {
    "upload": "/api/v1/upload/files",
    "upload-ocr": "/api/v1/upload/filesAndOcr",

    "imgs-delete": '/api/v1/imgs',
    "imgs-find": '/api/v1/imgs',

    "weekCount-save": '/api/v1/weekCount',
    "weekCount-find": '/api/v1/weekCount',
    "weekCount-excel": '/api/v1/weekCount/downLoadExcel',
};

export default {
    baseIp: base_ip,
    baseImgIp: base_img_ip,
    urls,
    author
};