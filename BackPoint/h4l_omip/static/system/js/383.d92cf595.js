"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[383],{3278:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__["Z"]={name:"uploadRender",props:{modelValue:[String,Number,Boolean,Date,Object,Array],item:{type:Object,default:()=>{}}},data(){return{value:this.modelValue,apiObj:this.getApiObj()}},watch:{value(e){this.$emit("update:modelValue",e)}},mounted(){},methods:{getApiObj(){return eval("this."+this.item.options.apiObj)}}}},383:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var a=l(6252);function p(e,t,l,p,u,o){const i=(0,a.up)("el-table-column"),n=(0,a.up)("sc-table-select");return(0,a.wg)(),(0,a.j4)(n,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),apiObj:u.apiObj,"table-width":600,multiple:l.item.options.multiple,props:l.item.options.props,style:{width:"100%"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.item.options.column,((e,t)=>((0,a.wg)(),(0,a.j4)(i,{key:t,prop:e.prop,label:e.label,width:e.width},null,8,["prop","label","width"])))),128))])),_:1},8,["modelValue","apiObj","multiple","props"])}var u=l(3278),o=l(3744);const i=(0,o.Z)(u.Z,[["render",p]]);var n=i}}]);