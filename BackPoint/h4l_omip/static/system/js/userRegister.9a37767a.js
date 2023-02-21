"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[8257],{736:function(e,l,o){o.r(l),o.d(l,{default:function(){return w}});var a=o(6252);const r=(0,a._)("div",{class:"el-form-item-msg"},"登录账号将作为登录时的唯一凭证",-1),s=(0,a._)("div",{class:"el-form-item-msg"},"请输入包含英文、数字的8位以上密码",-1),t={key:2};function u(e,l,o,u,m,d){const p=(0,a.up)("el-step"),i=(0,a.up)("el-steps"),n=(0,a.up)("el-input"),w=(0,a.up)("el-form-item"),f=(0,a.up)("sc-password-strength"),c=(0,a.up)("el-checkbox"),k=(0,a.up)("el-form"),g=(0,a.up)("el-radio-button"),h=(0,a.up)("el-radio-group"),_=(0,a.up)("el-checkbox-group"),W=(0,a.up)("el-button"),V=(0,a.up)("el-result"),v=(0,a.up)("el-dialog"),y=(0,a.up)("common-page");return(0,a.wg)(),(0,a.j4)(y,{title:"注册新账号"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{active:m.stepActive,simple:"","finish-status":"success"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{title:"基础信息"}),(0,a.Wm)(p,{title:"详细信息"}),(0,a.Wm)(p,{title:"完成注册"})])),_:1},8,["active"]),0==m.stepActive?((0,a.wg)(),(0,a.j4)(k,{key:0,ref:"stepForm_0",model:m.form,rules:m.rules,"label-width":120},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{label:"登录账号",prop:"user"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:m.form.user,"onUpdate:modelValue":l[0]||(l[0]=e=>m.form.user=e),placeholder:"请输入登录账号"},null,8,["modelValue"]),r])),_:1}),(0,a.Wm)(w,{label:"登录密码",prop:"password"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:m.form.password,"onUpdate:modelValue":l[1]||(l[1]=e=>m.form.password=e),type:"password","show-password":"",placeholder:"请输入登录密码"},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:m.form.password,"onUpdate:modelValue":l[2]||(l[2]=e=>m.form.password=e)},null,8,["modelValue"]),s])),_:1}),(0,a.Wm)(w,{label:"确认密码",prop:"password2"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:m.form.password2,"onUpdate:modelValue":l[3]||(l[3]=e=>m.form.password2=e),type:"password","show-password":"",placeholder:"请再一次输入登录密码"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"",prop:"agree"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{modelValue:m.form.agree,"onUpdate:modelValue":l[4]||(l[4]=e=>m.form.agree=e),label:""},{default:(0,a.w5)((()=>[(0,a.Uk)("已阅读并同意")])),_:1},8,["modelValue"]),(0,a._)("span",{class:"link",onClick:l[5]||(l[5]=e=>m.showAgree=!0)},"《平台服务协议》")])),_:1})])),_:1},8,["model","rules"])):(0,a.kq)("",!0),1==m.stepActive?((0,a.wg)(),(0,a.j4)(k,{key:1,ref:"stepForm_1",model:m.form,rules:m.rules,"label-width":120},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{label:"真实姓名",prop:"userName"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:m.form.userName,"onUpdate:modelValue":l[6]||(l[6]=e=>m.form.userName=e),placeholder:"请输入真实姓名"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"邮箱",prop:"email"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:m.form.email,"onUpdate:modelValue":l[7]||(l[7]=e=>m.form.email=e),placeholder:"请输入邮箱地址"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"账号类型",prop:"userType"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{modelValue:m.form.userType,"onUpdate:modelValue":l[8]||(l[8]=e=>m.form.userType=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{label:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)("企业开发者")])),_:1}),(0,a.Wm)(g,{label:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)("企业开发者")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"开通类别",prop:"open"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:m.form.open,"onUpdate:modelValue":l[9]||(l[9]=e=>m.form.open=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{label:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)("云存储API")])),_:1}),(0,a.Wm)(c,{label:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)("云检索API")])),_:1}),(0,a.Wm)(c,{label:"3"},{default:(0,a.w5)((()=>[(0,a.Uk)("Javescript API")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):(0,a.kq)("",!0),2==m.stepActive?((0,a.wg)(),(0,a.iD)("div",t,[(0,a.Wm)(V,{icon:"success",title:"注册成功","sub-title":"可以使用登录账号以及手机号登录系统"},{extra:(0,a.w5)((()=>[(0,a.Wm)(W,{type:"primary",onClick:d.goLogin},{default:(0,a.w5)((()=>[(0,a.Uk)("前去登录")])),_:1},8,["onClick"])])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(k,{style:{"text-align":"center"}},{default:(0,a.w5)((()=>[m.stepActive>0&&m.stepActive<2?((0,a.wg)(),(0,a.j4)(W,{key:0,onClick:d.pre},{default:(0,a.w5)((()=>[(0,a.Uk)("上一步")])),_:1},8,["onClick"])):(0,a.kq)("",!0),m.stepActive<1?((0,a.wg)(),(0,a.j4)(W,{key:1,type:"primary",onClick:d.next},{default:(0,a.w5)((()=>[(0,a.Uk)("下一步")])),_:1},8,["onClick"])):(0,a.kq)("",!0),1==m.stepActive?((0,a.wg)(),(0,a.j4)(W,{key:2,type:"primary",onClick:d.save},{default:(0,a.w5)((()=>[(0,a.Uk)("提交")])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(v,{modelValue:m.showAgree,"onUpdate:modelValue":l[12]||(l[12]=e=>m.showAgree=e),title:"平台服务协议",width:800,"destroy-on-close":""},{footer:(0,a.w5)((()=>[(0,a.Wm)(W,{onClick:l[10]||(l[10]=e=>m.showAgree=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1}),(0,a.Wm)(W,{type:"primary",onClick:l[11]||(l[11]=e=>{m.showAgree=!1,m.form.agree=!0})},{default:(0,a.w5)((()=>[(0,a.Uk)("我已阅读并同意")])),_:1})])),default:(0,a.w5)((()=>[(0,a.Uk)(" 平台服务协议 ")])),_:1},8,["modelValue"])])),_:1})}o(7658);var m=o(7764),d=o(6738),p={components:{commonPage:d["default"],scPasswordStrength:m.Z},data(){return{stepActive:0,showAgree:!1,form:{user:"",password:"",password2:"",agree:!1,userName:"",email:"",userType:"1",open:[]},rules:{user:[{required:!0,message:"请输入账号名"}],password:[{required:!0,message:"请输入密码"}],password2:[{required:!0,message:"请再次输入密码"},{validator:(e,l,o)=>{l!==this.form.password?o(new Error("两次输入密码不一致")):o()}}],agree:[{validator:(e,l,o)=>{l?o():o(new Error("请阅读并同意协议"))}}],userName:[{required:!0,message:"请输入真实姓名"}],email:[{required:!0,message:"请输入邮箱地址"}],userType:[{required:!0,message:"请选择账户类型"}],open:[{required:!0,message:"请选择开通类别"}]}}},mounted(){},methods:{pre(){this.stepActive-=1},next(){const e=`stepForm_${this.stepActive}`;this.$refs[e].validate((e=>{if(!e)return!1;this.stepActive+=1}))},save(){const e=`stepForm_${this.stepActive}`;this.$refs[e].validate((e=>{if(!e)return!1;this.stepActive+=1}))},goLogin(){this.$router.push({path:"/login"})}}},i=o(3744);const n=(0,i.Z)(p,[["render",u]]);var w=n}}]);