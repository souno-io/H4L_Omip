"use strict";(self["webpackChunkdrgs"]=self["webpackChunkdrgs"]||[]).push([[5714],{518:function(e,a,l){l.r(a),l.d(a,{default:function(){return i}});var t=l(6252),r=l(3577);function n(e,a,l,n,u,o){const d=(0,t.up)("el-button"),p=(0,t.up)("el-badge"),i=(0,t.up)("scFilterBar"),s=(0,t.up)("el-card"),c=(0,t.up)("el-alert"),v=(0,t.up)("el-main");return(0,t.wg)(),(0,t.j4)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{shadow:"never",header:"过滤器"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{filterName:"filterName",options:u.options,onFilterChange:o.change},{default:(0,t.w5)((({filterLength:e,openFilter:a})=>[(0,t.Wm)(p,{value:e,type:"danger",hidden:e<=0},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{icon:"el-icon-filter",onClick:a},null,8,["onClick"])])),_:2},1032,["value","hidden"])])),_:1},8,["options","onFilterChange"])])),_:1}),(0,t.Wm)(c,{title:"SCUI 独创的过滤条Filterbar,可配置不同类型的过滤字段,以及异步获取数据,在@/config/filterBar.js中可以更改运算符以及其他配置,操作上方过滤条查看下方change事件的回调,在表格查询的场景下非常合适",type:"success",style:{margin:"20px 0"}}),(0,t.Wm)(s,{shadow:"never",header:"返回值"},{default:(0,t.w5)((()=>[(0,t._)("pre",null,(0,r.zw)(u.filterData),1)])),_:1})])),_:1})}var u=l(9944),o={name:"filterBar",components:{scFilterBar:u.Z},data(){return{filterData:{},defaultFilter:[],options:[{label:"订单号",value:"id",type:"text",selected:!0,placeholder:"请输入订单号"},{label:"类型",value:"type",type:"select",operator:"=",selected:!0,placeholder:"请选择类型",extend:{data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{label:"类型(多选)",value:"type2",type:"select",operator:"=",placeholder:"请选择类型",extend:{multiple:!0,data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{label:"通知(异步)",value:"noticeType",type:"select",operator:"=",placeholder:"请选择通知类型",extend:{request:async()=>{var e=await this.$API.system.dic.get.get();return e.data.map((e=>({label:e.label,value:e.value})))}}},{label:"通知(远程搜索)",value:"noticeType2",type:"select",operator:"=",placeholder:"请输入关键词后检索",extend:{remote:!0,request:async e=>{var a={keyword:e},l=await this.$API.system.dic.get.get(a);return l.data.map((e=>({label:e.label,value:e.value})))}}},{label:"关键词(标签)",value:"tags",type:"tags",operator:"include",operators:[{label:"包含",value:"include"},{label:"不包含",value:"notinclude"}]},{label:"开关(可重复)",value:"switch",type:"switch",repeat:!0,operator:"="},{label:"日期单选",value:"date",type:"date",operator:"=",operators:[{label:"等于",value:"="},{label:"不等于",value:"!="}]},{label:"日期范围",value:"date2",type:"daterange"},{label:"自定义日期",value:"date3",type:"customDate",placeholder:"请选择月份",extend:{dateType:"month",valueFormat:"YYYY-MM"}}]}},methods:{change(e){this.filterData=e}}},d=l(3744);const p=(0,d.Z)(o,[["render",n]]);var i=p}}]);