"use strict";(self["webpackChunkdrgs"]=self["webpackChunkdrgs"]||[]).push([[1497],{40:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var r=l(6252),a=l(3577);const s={class:"left-panel"};function p(e,t,l,p,i,n){const o=(0,r.up)("el-button"),u=(0,r.up)("el-header"),d=(0,r.up)("el-table-column"),w=(0,r.up)("el-tag"),m=(0,r.up)("el-progress"),c=(0,r.up)("scTable"),f=(0,r.up)("el-main"),b=(0,r.up)("el-container");return(0,r.wg)(),(0,r.j4)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r.Wm)(o,{type:"primary",icon:"el-icon-plus"}),(0,r.Wm)(o,{type:"danger",plain:"",icon:"el-icon-delete"})])])),_:1}),(0,r.Wm)(f,{class:"nopadding"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{ref:"table",apiObj:i.list.apiObj,"row-key":"id",stripe:""},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"selection",width:"50"}),(0,r.Wm)(d,{label:"姓名",prop:"name",width:"150"}),(0,r.Wm)(d,{label:"性别",prop:"sex",width:"150",filters:i.sexFilters,"filter-method":n.filterHandler},{default:(0,r.w5)((e=>["男"==e.row.sex?((0,r.wg)(),(0,r.j4)(w,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.row.sex),1)])),_:2},1024)):(0,r.kq)("",!0),"女"==e.row.sex?((0,r.wg)(),(0,r.j4)(w,{key:1,type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.row.sex),1)])),_:2},1024)):(0,r.kq)("",!0)])),_:1},8,["filters","filter-method"]),(0,r.Wm)(d,{label:"邮箱",prop:"email",width:"250"}),(0,r.Wm)(d,{label:"评分",prop:"num",width:"150",sortable:""}),(0,r.Wm)(d,{label:"进度",prop:"progress",width:"250",sortable:""},{default:(0,r.w5)((e=>[(0,r.Wm)(m,{percentage:e.row.progress},null,8,["percentage"])])),_:1}),(0,r.Wm)(d,{label:"注册时间",prop:"datetime",width:"150",sortable:""})])),_:1},8,["apiObj"])])),_:1})])),_:1})}var i={name:"tableBase",data(){return{sexFilters:[{text:"男",value:"男"},{text:"女",value:"女"}],list:{apiObj:this.$API.demo.list}}},methods:{filterHandler(e,t,l){const r=l["property"];return t[r]===e}}},n=l(3744);const o=(0,n.Z)(i,[["render",p]]);var u=o}}]);