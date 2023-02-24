"use strict";(self["webpackChunkdrgs"]=self["webpackChunkdrgs"]||[]).push([[4835],{7343:function(e,l,a){a.r(l),a.d(l,{default:function(){return f}});var t=a(6252),o=a(3577);const u=(0,t._)("div",{class:"el-form-item-msg","data-v-b33b3cf8":""},"关闭后普通用户无法登录，仅允许管理员角色登录",-1),d=(0,t._)("div",{class:"el-form-item-msg","data-v-b33b3cf8":""},"关闭后用户无法收到短信，但日志中将记录",-1),m={key:1},r={key:1},s={key:1},p={key:1};function i(e,l,a,i,n,w){const y=(0,t.up)("el-input"),f=(0,t.up)("el-form-item"),g=(0,t.up)("el-switch"),c=(0,t.up)("el-button"),V=(0,t.up)("el-form"),_=(0,t.up)("el-tab-pane"),b=(0,t.up)("el-alert"),W=(0,t.up)("el-table-column"),k=(0,t.up)("el-popconfirm"),U=(0,t.up)("el-button-group"),h=(0,t.up)("el-table"),v=(0,t.up)("el-tabs"),S=(0,t.up)("el-card"),x=(0,t.up)("el-main");return(0,t.wg)(),(0,t.j4)(x,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,{shadow:"never"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{"tab-position":"top"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{label:"系统设置"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{ref:"form",model:n.sys,"label-width":"100px",style:{"margin-top":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"系统名称"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:n.sys.name,"onUpdate:modelValue":l[0]||(l[0]=e=>n.sys.name=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{label:"LogoUrl"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:n.sys.logoUrl,"onUpdate:modelValue":l[1]||(l[1]=e=>n.sys.logoUrl=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{label:"登录开关"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:n.sys.login,"onUpdate:modelValue":l[2]||(l[2]=e=>n.sys.login=e)},null,8,["modelValue"]),u])),_:1}),(0,t.Wm)(f,{label:"密码验证规则"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:n.sys.passwordRules,"onUpdate:modelValue":l[3]||(l[3]=e=>n.sys.passwordRules=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{label:"版权信息"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{type:"textarea",autosize:{minRows:4},modelValue:n.sys.copyright,"onUpdate:modelValue":l[4]||(l[4]=e=>n.sys.copyright=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{type:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),(0,t.Wm)(_,{label:"短信配置"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{ref:"form",model:n.msg,"label-width":"100px",style:{"margin-top":"20px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"短信开关"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:n.msg.open,"onUpdate:modelValue":l[5]||(l[5]=e=>n.msg.open=e)},null,8,["modelValue"]),d])),_:1}),(0,t.Wm)(f,{label:"appKey"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:n.msg.appKey,"onUpdate:modelValue":l[6]||(l[6]=e=>n.msg.appKey=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{label:"secretKey"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:n.msg.secretKey,"onUpdate:modelValue":l[7]||(l[7]=e=>n.msg.secretKey=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{type:"primary"},{default:(0,t.w5)((()=>[(0,t.Uk)("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),(0,t.Wm)(_,{label:"扩展配置"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{title:"扩展配置为系统业务所有的配置，应该由系统管理员操作，如需用户配置应另起业务配置页面。",type:"warning",style:{"margin-bottom":"15px"}}),(0,t.Wm)(h,{data:n.setting,stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{label:"#",type:"index",width:"50"}),(0,t.Wm)(W,{label:"KEY",prop:"key",width:"150"},{default:(0,t.w5)((e=>[e.row.isSet?((0,t.wg)(),(0,t.j4)(y,{key:0,modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])):((0,t.wg)(),(0,t.iD)("span",m,(0,o.zw)(e.row.key),1))])),_:1}),(0,t.Wm)(W,{label:"VALUE",prop:"value",width:"350"},{default:(0,t.w5)((e=>[e.row.isSet?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},["boolean"===typeof e.row.value?((0,t.wg)(),(0,t.j4)(g,{key:0,modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])):((0,t.wg)(),(0,t.j4)(y,{key:1,modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"]))],64)):((0,t.wg)(),(0,t.iD)("span",r,(0,o.zw)(e.row.value),1))])),_:1}),(0,t.Wm)(W,{label:"CATEGORY",prop:"category",width:"150"},{default:(0,t.w5)((e=>[e.row.isSet?((0,t.wg)(),(0,t.j4)(y,{key:0,modelValue:e.row.category,"onUpdate:modelValue":l=>e.row.category=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])):((0,t.wg)(),(0,t.iD)("span",s,(0,o.zw)(e.row.category),1))])),_:1}),(0,t.Wm)(W,{label:"TITLE",prop:"title",width:"350"},{default:(0,t.w5)((e=>[e.row.isSet?((0,t.wg)(),(0,t.j4)(y,{key:0,modelValue:e.row.title,"onUpdate:modelValue":l=>e.row.title=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])):((0,t.wg)(),(0,t.iD)("span",p,(0,o.zw)(e.row.title),1))])),_:1}),(0,t.Wm)(W,{"min-width":"1"}),(0,t.Wm)(W,{label:"操作",fixed:"right",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{onClick:l=>w.table_edit(e.row,e.$index),text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.isSet?"保存":"修改"),1)])),_:2},1032,["onClick"]),e.row.isSet?((0,t.wg)(),(0,t.j4)(c,{key:0,onClick:l=>e.row.isSet=!1,text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("取消")])),_:2},1032,["onClick"])):(0,t.kq)("",!0),e.row.isSet?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(k,{key:1,title:"确定删除吗？",onConfirm:l=>w.table_del(e.row,e.$index)},{reference:(0,t.w5)((()=>[(0,t.Wm)(c,{text:"",type:"primary",size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"]))])),_:2},1024)])),_:1})])),_:1},8,["data"]),(0,t.Wm)(c,{type:"primary",icon:"el-icon-plus",onClick:w.table_add,style:{"margin-top":"20px"}},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}a(7658);var n={name:"system",data(){return{sys:{name:"SCUI",logoUrl:"",login:!0,passwordRules:"^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$",copyright:"@SCUI"},msg:{open:!0,appKey:"",secretKey:""},setting:[{key:"file_serve",value:"https://file.scui.com",category:"url",title:"文件服务器地址"},{key:"cloud_url",value:"-",category:"url",title:"客户端地址"},{key:"crm_url",value:"-",category:"url",title:"CRM地址"},{key:"autoSwitch",value:!0,category:"user",title:"自动判断boolean类型"}]}},methods:{table_add(){var e={key:"",value:"",title:"",isSet:!0};this.setting.push(e)},table_edit(e){e.isSet?e.isSet=!1:e.isSet=!0},table_del(e,l){this.setting.splice(l,1)}}},w=a(3744);const y=(0,w.Z)(n,[["render",i]]);var f=y}}]);