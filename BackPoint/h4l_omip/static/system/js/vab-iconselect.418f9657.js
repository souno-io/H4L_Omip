"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[9840],{7347:function(e,l,t){t.r(l),t.d(l,{default:function(){return d}});var r=t(6252),o=t(3577);function s(e,l,t,s,i,n){const u=(0,r.up)("el-alert"),a=(0,r.up)("sc-icon-select"),d=(0,r.up)("el-form-item"),m=(0,r.up)("el-button"),c=(0,r.up)("el-form"),f=(0,r.up)("el-card"),p=(0,r.up)("el-main");return(0,r.wg)(),(0,r.j4)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{title:"支持扩展的图标选择器,除了默认的图标组还可以在 @/config/iconSelect 中定义更多的图标组",type:"success",style:{"margin-bottom":"20px"}}),(0,r.Wm)(f,{shadow:"never"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{ref:"ruleForm",model:i.form,rules:i.rules,"label-width":"100px"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"图标",prop:"icon"},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{modelValue:i.form.icon,"onUpdate:modelValue":l[0]||(l[0]=e=>i.form.icon=e),disabled:i.disabled},null,8,["modelValue","disabled"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{type:"primary",onClick:n.submitForm},{default:(0,r.w5)((()=>[(0,r.Uk)("保存")])),_:1},8,["onClick"]),(0,r.Wm)(m,{onClick:n.resetForm},{default:(0,r.w5)((()=>[(0,r.Uk)("重置")])),_:1},8,["onClick"]),(0,r.Wm)(m,{onClick:n.setdisabled},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(i.disabled?"移除禁用":"设为禁用"),1)])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})}var i=t(1107),n={name:"iconSelect",components:{scIconSelect:i.Z},data(){return{form:{icon:"el-icon-apple"},rules:{icon:[{required:!0,message:"请选择图标",trigger:"change"}]},disabled:!1}},methods:{submitForm(){this.$refs.ruleForm.validate((e=>{if(!e)return!1;alert("请看控制台输出"),console.log(this.form)}))},resetForm(){this.$refs.ruleForm.resetFields()},setdisabled(){this.disabled=!this.disabled}}},u=t(3744);const a=(0,u.Z)(n,[["render",s]]);var d=a}}]);