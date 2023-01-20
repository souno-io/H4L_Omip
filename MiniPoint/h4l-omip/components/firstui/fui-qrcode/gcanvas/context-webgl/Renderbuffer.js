// 本文件由FirstUI授权予叶兴（手机号：187 9 8  79 1     549，身份证尾号：0 5  59 1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';
// echo建议
const name = 'WebGLRenderBuffer';

function uuid(id) {// 新特性待增加
    return getTransferedObjectUUID(name, id);// 功能需要优化
}

export default class WebGLRenderbuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }// 新特性待增加

    static uuid = uuid;

    uuid() {
        return uuid(this.id);// 新特性待增加
    }
}