"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[2247],{2284:function(e,l,t){t.r(l),t.d(l,{default:function(){return u}});var a=t(6252);const n={class:"left-panel"},r={class:"right-panel"};function p(e,l,t,p,s,i){const o=(0,a.up)("el-button"),u=(0,a.up)("el-alert"),m=(0,a.up)("el-header"),c=(0,a.up)("el-table-column"),d=(0,a.up)("el-progress"),b=(0,a.up)("scTable"),w=(0,a.up)("el-main"),h=(0,a.up)("el-container");return(0,a.wg)(),(0,a.j4)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(o,{type:"primary",icon:"el-icon-plus"}),(0,a.Wm)(o,{type:"danger",plain:"",icon:"el-icon-delete"})]),(0,a._)("div",r,[(0,a.Wm)(u,{title:"请在右下角第二个按钮体验自定义列",type:"warning",closable:!1})])])),_:1}),(0,a.Wm)(w,{class:"nopadding"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{ref:"table",tableName:"listCustomColumn",apiObj:s.list.apiObj,column:s.list.column,"row-key":"id",stripe:""},{progress:(0,a.w5)((e=>[(0,a.Wm)(d,{percentage:e.row.progress},null,8,["percentage"])])),default:(0,a.w5)((()=>[(0,a.Wm)(c,{type:"selection",width:"50"})])),_:1},8,["apiObj","column"])])),_:1})])),_:1})}var s={name:"tableCustomColumn",data(){return{list:{apiObj:this.$API.demo.list,column:[{label:"姓名",prop:"name",width:"150"},{label:"性别",prop:"sex",width:"150",filters:[{text:"男",value:"男"},{text:"女",value:"女"}]},{label:"邮箱",prop:"email",width:"250",hide:!0},{label:"评分",prop:"num",width:"150",sortable:!0},{label:"进度",prop:"progress",width:"250",sortable:!0},{label:"注册时间",prop:"datetime",width:"150",sortable:!0}]}}}},i=t(3744);const o=(0,i.Z)(s,[["render",p]]);var u=o}}]);