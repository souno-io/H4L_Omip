"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[9698],{8260:function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var a=l(6252);const i={class:"left-panel"};function s(e,t,l,s,n,o){const c=(0,a.up)("el-button"),d=(0,a.up)("el-header"),r=(0,a.up)("el-table-column"),p=(0,a.up)("el-icon-circle-check-filled"),h=(0,a.up)("el-icon"),u=(0,a.up)("el-popconfirm"),m=(0,a.up)("el-button-group"),f=(0,a.up)("scTable"),b=(0,a.up)("el-main"),g=(0,a.up)("el-container"),w=(0,a.up)("save-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(c,{type:"primary",icon:"el-icon-plus",onClick:o.add},null,8,["onClick"]),(0,a.Wm)(c,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==n.selection.length,onClick:o.batch_del},null,8,["disabled","onClick"])])])),_:1}),(0,a.Wm)(b,{class:"nopadding"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{ref:"table",apiObj:n.apiObj,"row-key":"id",onSelectionChange:o.selectionChange,stripe:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{type:"selection",width:"50"}),(0,a.Wm)(r,{label:"应用ID",prop:"appId",width:"150"}),(0,a.Wm)(r,{label:"应用名称",prop:"appName",width:"250"}),(0,a.Wm)(r,{label:"状态",width:"50"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{style:{color:"#67C23A"}},{default:(0,a.w5)((()=>[(0,a.Wm)(p)])),_:1})])),_:1}),(0,a.Wm)(r,{label:"秘钥",prop:"secret","show-overflow-tooltip":"",width:"150"}),(0,a.Wm)(r,{label:"授权到期",prop:"exp",width:"150"}),(0,a.Wm)(r,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,a.w5)((e=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{text:"",type:"primary",size:"small",onClick:t=>o.table_edit(e.row,e.$index)},{default:(0,a.w5)((()=>[(0,a.Uk)("编辑")])),_:2},1032,["onClick"]),(0,a.Wm)(u,{title:"确定删除吗？",onConfirm:t=>o.table_del(e.row,e.$index)},{reference:(0,a.w5)((()=>[(0,a.Wm)(c,{text:"",type:"primary",size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),n.dialog.save?((0,a.wg)(),(0,a.j4)(w,{key:0,ref:"saveDialog",onSuccess:o.handleSuccess,onClosed:t[0]||(t[0]=e=>n.dialog.save=!1)},null,8,["onSuccess"])):(0,a.kq)("",!0)],64)}l(541);var n=l(5420),o={name:"client",components:{saveDialog:n["default"]},data(){return{dialog:{save:!1},apiObj:this.$API.system.app.list,selection:[]}},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},async table_del(e,t){var l={id:e.id},a=await this.$API.user.del.post(l);200==a.code?(this.$refs.table.tableData.splice(t,1),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((t,l)=>{e.id===t.id&&this.$refs.table.tableData.splice(l,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},handleSuccess(e,t){"add"==t?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==t&&this.$refs.table.tableData.filter((t=>t.id===e.id)).forEach((t=>{Object.assign(t,e)}))}}},c=l(3744);const d=(0,c.Z)(o,[["render",s]]);var r=d}}]);