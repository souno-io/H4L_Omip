"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[976],{1171:function(e,l,t){t.r(l),t.d(l,{default:function(){return p}});var a=t(6252);const s={class:"left-panel"},i={class:"right-panel"},o={class:"right-panel-search"};function n(e,l,t,n,r,d){const u=(0,a.up)("el-input"),c=(0,a.up)("el-header"),p=(0,a.up)("el-tree"),h=(0,a.up)("el-main"),m=(0,a.up)("el-container"),g=(0,a.up)("el-aside"),f=(0,a.up)("el-button"),b=(0,a.up)("el-table-column"),w=(0,a.up)("el-avatar"),k=(0,a.up)("el-popconfirm"),_=(0,a.up)("el-button-group"),y=(0,a.up)("scTable"),W=(0,a.up)("save-dialog"),v=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(g,{width:"200px"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{placeholder:"输入关键字进行过滤",modelValue:r.groupFilterText,"onUpdate:modelValue":l[0]||(l[0]=e=>r.groupFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(h,{class:"nopadding"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{ref:"group",class:"menu","node-key":"id",data:r.group,"current-node-key":"","highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":d.groupFilterNode,onNodeClick:d.groupClick},null,8,["data","filter-node-method","onNodeClick"])])),_:1})])),_:1})])),_:1})),[[v,r.showGrouploading]]),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(f,{type:"primary",icon:"el-icon-plus",onClick:d.add},null,8,["onClick"]),(0,a.Wm)(f,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==r.selection.length,onClick:d.batch_del},null,8,["disabled","onClick"]),(0,a.Wm)(f,{type:"primary",plain:"",disabled:0===r.selection.length},{default:(0,a.w5)((()=>[(0,a.Uk)("分配角色")])),_:1},8,["disabled"]),(0,a.Wm)(f,{type:"primary",plain:"",disabled:0===r.selection.length},{default:(0,a.w5)((()=>[(0,a.Uk)("密码重置")])),_:1},8,["disabled"])]),(0,a._)("div",i,[(0,a._)("div",o,[(0,a.Wm)(u,{modelValue:r.search.name,"onUpdate:modelValue":l[1]||(l[1]=e=>r.search.name=e),placeholder:"姓名",clearable:""},null,8,["modelValue"]),(0,a.Wm)(f,{type:"primary",icon:"el-icon-search",onClick:d.upsearch},null,8,["onClick"])])])])),_:1}),(0,a.Wm)(h,{class:"nopadding"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{ref:"table",apiObj:r.apiObj,onSelectionChange:d.selectionChange,stripe:"",remoteSort:"",remoteFilter:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{type:"selection",width:"50"}),(0,a.Wm)(b,{label:"ID",prop:"id",width:"160",sortable:"custom"}),(0,a.Wm)(b,{label:"头像",width:"80","column-key":"filterAvatar",filters:[{text:"已上传",value:"1"},{text:"未上传",value:"0"}]},{default:(0,a.w5)((e=>[(0,a.Wm)(w,{src:e.row.avatar,size:"small"},null,8,["src"])])),_:1}),(0,a.Wm)(b,{label:"登录账号",prop:"username",width:"150",sortable:"custom","column-key":"filterUserName",filters:[{text:"系统账号",value:"1"},{text:"普通账号",value:"0"}]}),(0,a.Wm)(b,{label:"姓名",prop:"name",width:"150",sortable:"custom"}),(0,a.Wm)(b,{label:"所属角色",prop:"user_roles_str",width:"200",sortable:"custom"}),(0,a.Wm)(b,{label:"加入时间",prop:"create_datetime",width:"170",sortable:"custom"}),(0,a.Wm)(b,{label:"操作",fixed:"right",align:"right",width:"160"},{default:(0,a.w5)((e=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{text:"",type:"primary",size:"small",onClick:l=>d.table_show(e.row,e.$index)},{default:(0,a.w5)((()=>[(0,a.Uk)("查看 ")])),_:2},1032,["onClick"]),(0,a.Wm)(f,{text:"",type:"primary",size:"small",onClick:l=>d.table_edit(e.row,e.$index)},{default:(0,a.w5)((()=>[(0,a.Uk)("编辑 ")])),_:2},1032,["onClick"]),(0,a.Wm)(k,{title:"确定删除吗？",onConfirm:l=>d.table_del(e.row,e.$index)},{reference:(0,a.w5)((()=>[(0,a.Wm)(f,{text:"",type:"primary",size:"small"},{default:(0,a.w5)((()=>[(0,a.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1})])),_:1}),r.dialog.save?((0,a.wg)(),(0,a.j4)(W,{key:0,ref:"saveDialog",onSuccess:d.handleSuccess,onClosed:l[2]||(l[2]=e=>r.dialog.save=!1)},null,8,["onSuccess"])):(0,a.kq)("",!0)],64)}t(541);var r=t(9787),d={name:"user",components:{saveDialog:r["default"]},data(){return{dialog:{save:!1},showGrouploading:!1,groupFilterText:"",group:[],apiObj:this.$API.system.user.list,selection:[],search:{name:null}}},watch:{groupFilterText(e){this.$refs.group.filter(e)}},mounted(){this.getGroup()},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},table_show(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("show").setData(e)}))},async table_del(e,l){var t={id:e.id},a=await this.$API.user.delete.delete(t);console.log(a),a.code,this.$refs.table.tableData.splice(l,1),this.$message.success("删除成功")},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((l,t)=>{e.id===l.id&&this.$refs.table.tableData.splice(t,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},async getGroup(){this.showGrouploading=!0;const e=await this.$API.system.dept.list.get();this.showGrouploading=!1;const l={id:"",label:"所有"};e.data.rows.unshift(l),console.log(e.data.rows),this.group=e.data.rows},groupFilterNode(e,l){return!e||-1!==l.label.indexOf(e)},groupClick(e){if("所有"===e.label)this.$refs.table.reload();else{var l={user_departments:e.id};this.$refs.table.reload(l)}},upsearch(){this.$refs.table.upData(this.search)},handleSuccess(e,l){"add"==l?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==l&&this.$refs.table.tableData.filter((l=>l.id===e.id)).forEach((l=>{Object.assign(l,e)}))}}},u=t(3744);const c=(0,u.Z)(d,[["render",n]]);var p=c}}]);