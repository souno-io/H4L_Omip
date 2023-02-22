(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[5742],{5383:function(e,l,t){var a;
/*!
 * template.js v0.7.1 (https://github.com/yanhaijing/template.js)
 * API https://github.com/yanhaijing/template.js/blob/master/doc/api.md
 * Copyright 2015 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/template.js/blob/master/MIT-LICENSE.txt)
 */(function(o,n){var d=n(o);a=function(){return d}.call(l,t,l,e),void 0===a||(e.exports=a)})(this,(function(e){"use strict";var l={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(e){}},t={},a={"":function(e){return p(e)},h:function(e){return m(e)},u:function(e){return encodeURI(e)}},o={}.toString,n=[].slice;function d(e){if(null===e)return"null";var l=typeof e;if("object"!==l)return l;var t=o.call(e).slice(8,-1).toLowerCase();return"object"!==t||e.constructor==Object?t:"unknown"}function r(e){return"object"===d(e)}function i(e){return"function"===d(e)}function u(e){return"string"===d(e)}function c(){for(var e=arguments[0]||{},l=n.call(arguments,1),t=l.length,a=0;a<t;a++){var o=l[a];for(var d in o)e[d]=o[d]}return e}function s(){var e=n.call(arguments);return c.apply(null,[{}].concat(e))}function p(e){return e}function m(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _(e){return e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function w(e,l){"undefined"!==typeof console&&console[e]&&console[e](l)}function f(e){var t="template.js error\n\n";for(var a in e)t+="<"+a+">\n"+e[a]+"\n\n";function o(){return"template.js error"}return t+="<message>\n"+e.message+"\n\n",w("error",t),l.error(e),o.toString=function(){return'__code__ = "template.js error"'},o}function h(e,l){var t="",a=l.sTag,o=l.eTag,n=l.escape;function d(e){e=e.replace(/('|")/g,"\\$1");for(var l=e.split("\n"),t="",a=0;a<l.length;a++)t+=';__code__ += ("'+l[a]+(a===l.length-1?'")\n':'\\n")\n');return t}function r(e){var l,t,a,o=/^(?:=|(:.*?)=)(.*)$/;return(t=o.exec(e))?(l=t[2],a=Boolean(t[1])?t[1].slice(1):n?"h":"",';__code__ += __modifierMap__["'+a+'"](typeof ('+l+') !== "undefined" ? ('+l+') : "")\n'):";"+e+"\n"}for(var i=e.split(a),u=0,c=i.length;u<c;u++){var s=i[u].split(o);1===s.length?t+=d(s[0]):(t+=r(s[0],!0),s[1]&&(t+=d(s[1])))}return t}function g(e,l){var t=h(e,l),a='\n    var html = (function (__data__, __modifierMap__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n',o="\n        ;return __code__;\n    }(__data__, __modifierMap__));\n    return html;\n",n=a+t+o;n=n.replace(/[\r]/g," ");try{var d=new Function("__data__","__modifierMap__",n);return d.toString=function(){return t},d}catch(r){throw r.temp="function anonymous(__data__, __modifierMap__) {"+n+"}",r}}function v(e,o){o=s(l,o);try{var n=g(e,o)}catch(r){return r.name="CompileError",r.tpl=e,r.render=r.temp,delete r.temp,f(r)}function d(l){l=s(t,l);try{var d=n(l,a);return d=o.compress?_(d):d,d}catch(r){return r.name="RenderError",r.tpl=e,r.render=n.toString(),f(r)()}}return d.toString=function(){return n.toString()},d}function b(e,l){if("string"!==typeof e)return"";var t=v(e);return r(l)?t(l):t}return b.config=function(e){return r(e)&&(l=c(l,e)),s(l)},b.registerFunction=function(e,l){return u(e)?i(l)?t[e]=l:t[e]:s(t)},b.unregisterFunction=function(e){return!!u(e)&&(delete t[e],!0)},b.registerModifier=function(e,l){return u(e)?i(l)?a[e]=l:a[e]:s(a)},b.unregisterModifier=function(e){return!!u(e)&&(delete a[e],!0)},b.__encodeHTML=m,b.__compress=_,b.__handelError=f,b.__compile=v,b.version="0.7.1",b}))},2046:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return f}});var a=t(6252),o=t(3577);const n=e=>((0,a.dD)("data-v-11ad0de6"),e=e(),(0,a.Cn)(),e),d=n((()=>(0,a._)("div",{class:"el-form-item-msg"},"系统唯一且与路由别名一致，否则导致缓存失效。",-1))),r=n((()=>(0,a._)("div",{class:"el-form-item-msg"},"表格唯一标识，编辑保存和删除将传递rowKey",-1))),i={style:{"margin-top":"50px",display:"none"}},u={contenteditable:"",class:"code"};function c(e,l,t,n,c,s){const p=(0,a.up)("el-input"),m=(0,a.up)("el-table-column"),_=(0,a.up)("el-checkbox"),w=(0,a.up)("sc-form-table"),f=(0,a.up)("el-tab-pane"),h=(0,a.up)("el-form-item"),g=(0,a.up)("el-form"),v=(0,a.up)("el-col"),b=(0,a.up)("el-row"),V=(0,a.up)("el-alert"),W=(0,a.up)("el-tabs"),y=(0,a.up)("el-card"),U=(0,a.up)("el-main"),k=(0,a.up)("el-button"),C=(0,a.up)("el-dropdown-item"),L=(0,a.up)("el-dropdown-menu"),S=(0,a.up)("el-dropdown"),T=(0,a.up)("el-footer"),x=(0,a.up)("el-container"),E=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{shadow:"never"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{"tab-position":"top"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{label:"列配置"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{modelValue:c.column,"onUpdate:modelValue":l[0]||(l[0]=e=>c.column=e),addTemplate:c.addTemplate,placeholder:"请添加列数据"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{prop:"label",label:"显示名称",width:"180"},{default:(0,a.w5)((e=>[(0,a.Wm)(p,{modelValue:e.row.label,"onUpdate:modelValue":l=>e.row.label=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(m,{prop:"prop",label:"字段名",width:"180"},{default:(0,a.w5)((e=>[(0,a.Wm)(p,{modelValue:e.row.prop,"onUpdate:modelValue":l=>e.row.prop=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(m,{prop:"width",label:"宽度",width:"180"},{default:(0,a.w5)((e=>[(0,a.Wm)(p,{modelValue:e.row.width,"onUpdate:modelValue":l=>e.row.width=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(m,{prop:"isEdit",label:"加入编辑",width:"80",align:"center"},{default:(0,a.w5)((e=>[(0,a.Wm)(_,{modelValue:e.row.isEdit,"onUpdate:modelValue":l=>e.row.isEdit=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(m,{prop:"isSearch",label:"加入搜索",width:"80",align:"center"},{default:(0,a.w5)((e=>[(0,a.Wm)(_,{modelValue:e.row.isSearch,"onUpdate:modelValue":l=>e.row.isSearch=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["modelValue","addTemplate"])])),_:1}),(0,a.Wm)(f,{label:"基础配置"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{xl:12,lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{model:c.base,"label-width":"80px"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{label:"name"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.base.name,"onUpdate:modelValue":l[1]||(l[1]=e=>c.base.name=e)},null,8,["modelValue"]),d])),_:1}),(0,a.Wm)(h,{label:"rowKey"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.base.rowKey,"onUpdate:modelValue":l[2]||(l[2]=e=>c.base.rowKey=e)},null,8,["modelValue"]),r])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(f,{label:"API路径配置"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{title:"$API 映射文件: @/api/index.js 统一接口管理器, 所以需提前配置好API对象.",type:"warning",style:{margin:"0 0 20px 0"}}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{xl:12,lg:8},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{model:c.api,"label-width":"80px"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{label:"获取列表"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.api.list,"onUpdate:modelValue":l[3]||(l[3]=e=>c.api.list=e)},{prepend:(0,a.w5)((()=>[(0,a.Uk)("$API.")])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(h,{label:"新增"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.api.add,"onUpdate:modelValue":l[4]||(l[4]=e=>c.api.add=e)},{prepend:(0,a.w5)((()=>[(0,a.Uk)("$API.")])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(h,{label:"保存"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.api.save,"onUpdate:modelValue":l[5]||(l[5]=e=>c.api.save=e)},{prepend:(0,a.w5)((()=>[(0,a.Uk)("$API.")])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(h,{label:"查询详细"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.api.show,"onUpdate:modelValue":l[6]||(l[6]=e=>c.api.show=e)},{prepend:(0,a.w5)((()=>[(0,a.Uk)("$API.")])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(h,{label:"删除"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:c.api.del,"onUpdate:modelValue":l[7]||(l[7]=e=>c.api.del=e)},{prepend:(0,a.w5)((()=>[(0,a.Uk)("$API.")])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,a._)("pre",i,(0,o.zw)(c.code),1)])),_:1}),(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{style:{"margin-right":"15px"}},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C,{onClick:s.downloadListCode},{default:(0,a.w5)((()=>[(0,a.Uk)("下载 index.vue")])),_:1},8,["onClick"]),(0,a.Wm)(C,{onClick:s.downloadSaveCode},{default:(0,a.w5)((()=>[(0,a.Uk)("下载 save.vue")])),_:1},8,["onClick"])])),_:1})])),default:(0,a.w5)((()=>[(0,a.Wm)(k,{type:"primary",icon:"el-icon-download",loading:c.downloadcodeLoading},{default:(0,a.w5)((()=>[(0,a.Uk)("下载VUE文件")])),_:1},8,["loading"])])),_:1}),(0,a.Wm)(S,null,{dropdown:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C,{onClick:s.showListCode},{default:(0,a.w5)((()=>[(0,a.Uk)("预览 index.vue")])),_:1},8,["onClick"]),(0,a.Wm)(C,{onClick:s.showSaveCode},{default:(0,a.w5)((()=>[(0,a.Uk)("预览 save.vue")])),_:1},8,["onClick"])])),_:1})])),default:(0,a.w5)((()=>[(0,a.Wm)(k,{type:"primary",plain:"",icon:"el-icon-top-right",loading:c.showcodeLoading},{default:(0,a.w5)((()=>[(0,a.Uk)("预览代码")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(E,{title:"代码预览",modelValue:c.codeVisible,"onUpdate:modelValue":l[9]||(l[9]=e=>c.codeVisible=e),width:"60%","append-to-body":"","destroy-on-close":""},{footer:(0,a.w5)((()=>[(0,a.Wm)(k,{type:"primary",onClick:l[8]||(l[8]=e=>c.codeVisible=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("确 定")])),_:1})])),default:(0,a.w5)((()=>[(0,a.Wm)(V,{title:"需将VUE文件放置views文件夹,路由匹配组件的路径下,如文件名为index.vue可不需要写文件名",type:"success","show-icon":"",style:{"margin-bottom":"20px"}}),(0,a._)("pre",u,(0,o.zw)(c.code),1)])),_:1},8,["modelValue"])],64)}var s=t(5383),p=t.n(s),m={name:"autocode-list",data(){return{codeVisible:!1,showcodeLoading:!1,downloadcodeLoading:!1,code:"",base:{name:"",rowKey:"id"},api:{list:"",add:"",save:"",show:"",del:""},column:[],addTemplate:{label:"",prop:"",width:"100",isSearch:!1,isEdit:!1}}},mounted(){},methods:{async showListCode(){this.showcodeLoading=!0,await this.getListTpl(),this.showcodeLoading=!1,this.codeVisible=!0},async getListTpl(){var e={createDate:(new Date).toLocaleString(),base:this.base,column:this.column,api:this.api},l=await this.$HTTP.get("code/list/index.vue");this.code=p()(l,e)},async showSaveCode(){this.showcodeLoading=!0,await this.getSaveTpl(),this.showcodeLoading=!1,this.codeVisible=!0},async getSaveTpl(){var e={createDate:(new Date).toLocaleString(),base:this.base,column:this.column.filter((e=>!0===e.isEdit)),api:this.api},l=await this.$HTTP.get("code/list/save.vue");this.code=p()(l,e)},async downloadListCode(){this.downloadcodeLoading=!0,await this.getListTpl(),this.downloadcodeLoading=!1,this.createFile(this.code,"index.vue")},async downloadSaveCode(){this.downloadcodeLoading=!0,await this.getSaveTpl(),this.downloadcodeLoading=!1,this.createFile(this.code,"save.vue")},createFile(e,l){const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",l),t.style.display="none",t.click()}}},_=t(3744);const w=(0,_.Z)(m,[["render",c],["__scopeId","data-v-11ad0de6"]]);var f=w}}]);