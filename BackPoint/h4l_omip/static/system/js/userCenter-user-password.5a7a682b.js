"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[6965],{4742:function(e,s,r){r.r(s),r.d(s,{default:function(){return n}});var o=r(6252);const a=(0,o._)("div",{class:"el-form-item-msg"},"必须提供当前登录用户密码才能进行更改",-1),l=(0,o._)("div",{class:"el-form-item-msg"},"请输入包含英文、数字的8位以上密码",-1);function d(e,s,r,d,p,t){const m=(0,o.up)("el-alert"),w=(0,o.up)("el-input"),n=(0,o.up)("el-form-item"),u=(0,o.up)("sc-password-strength"),f=(0,o.up)("el-button"),i=(0,o.up)("el-form"),_=(0,o.up)("el-card");return(0,o.wg)(),(0,o.j4)(_,{shadow:"never",header:"修改密码"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{title:"密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。",type:"info","show-icon":"",style:{"margin-bottom":"15px"}}),(0,o.Wm)(i,{ref:"form",model:p.form,rules:p.rules,"label-width":"120px",style:{"margin-top":"20px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{label:"当前密码",prop:"old_password"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:p.form.old_password,"onUpdate:modelValue":s[0]||(s[0]=e=>p.form.old_password=e),type:"password","show-password":"",placeholder:"请输入当前密码"},null,8,["modelValue"]),a])),_:1}),(0,o.Wm)(n,{label:"新密码",prop:"new_password"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:p.form.new_password,"onUpdate:modelValue":s[1]||(s[1]=e=>p.form.new_password=e),type:"password","show-password":"",placeholder:"请输入新密码"},null,8,["modelValue"]),(0,o.Wm)(u,{modelValue:p.form.new_password,"onUpdate:modelValue":s[2]||(s[2]=e=>p.form.new_password=e)},null,8,["modelValue"]),l])),_:1}),(0,o.Wm)(n,{label:"确认新密码",prop:"replay_password"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:p.form.replay_password,"onUpdate:modelValue":s[3]||(s[3]=e=>p.form.replay_password=e),type:"password","show-password":"",placeholder:"请再次输入新密码"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{type:"primary",onClick:t.save},{default:(0,o.w5)((()=>[(0,o.Uk)("保存密码")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})}var p=r(7764),t={components:{scPasswordStrength:p.Z},data(){return{form:{old_password:"",new_password:"",replay_password:""},rules:{old_password:[{required:!0,message:"请输入当前密码"}],new_password:[{required:!0,message:"请输入新密码"}],replay_password:[{required:!0,message:"请再次输入新密码"},{validator:(e,s,r)=>{s!==this.form.new_password?r(new Error("两次输入密码不一致")):r()}}]}}},methods:{async save(){this.$refs.form.validate((async e=>{if(!e)return!1;var s={old_password:this.form.old_password,new_password:this.form.new_password,replay_password:this.form.replay_password},r=await this.$API.auth.changePass.post(s);if(200!==r.code)return this.$message.warning(r.message),!1;this.$alert("密码修改成功，是否跳转至登录页使用新密码登录","修改成功",{type:"success",center:!0}).then((()=>{this.$router.replace({path:"/login"})})).catch((()=>{}))}))}}},m=r(3744);const w=(0,m.Z)(t,[["render",d]]);var n=w}}]);