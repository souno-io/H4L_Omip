"use strict";(self["webpackChunksystem"]=self["webpackChunksystem"]||[]).push([[3202],{3202:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(6252);const l={class:"sceditor"};function a(e,t,n,a,o,r){const s=(0,i.up)("Editor");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(s,{modelValue:o.contentValue,"onUpdate:modelValue":t[0]||(t[0]=e=>o.contentValue=e),init:o.init,disabled:n.disabled,placeholder:n.placeholder,onOnClick:r.onClick},null,8,["modelValue","init","disabled","placeholder","onOnClick"])])}var o=n(7877),r=n(396),s=n(7575),c=n.n(s),u=(n(8860),n(6890),n(7490),n(8190),n(2170),n(2540),n(2682),n(4446),n(1449),n(8619),n(8843),n(6552),n(4400),n(8672),{components:{Editor:r.Z},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},height:{type:Number,default:300},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"code image media link preview table quickbars template pagebreak lists advlist"},toolbar:{type:[String,Array],default:"undo redo |  forecolor backcolor bold italic underline strikethrough link | blocks fontfamily fontsize | \t\t\t\t\talignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | pagebreak | \t\t\t\t\timage media table template preview | code selectall"},templates:{type:Array,default:()=>[]},options:{type:Object,default:()=>{}}},data(){return{init:{language_url:"tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"tinymce/skins/ui/oxide",content_css:"tinymce/skins/content/default/content.css",menubar:!1,statusbar:!0,plugins:this.plugins,toolbar:this.toolbar,toolbar_mode:"sliding",font_size_formats:"12px 14px 16px 18px 22px 24px 36px 72px",height:this.height,placeholder:this.placeholder,branding:!1,resize:!0,elementpath:!0,content_style:"",templates:this.templates,quickbars_selection_toolbar:"forecolor backcolor bold italic underline strikethrough link",quickbars_image_toolbar:"alignleft aligncenter alignright",quickbars_insert_toolbar:!1,image_caption:!0,image_advtab:!0,convert_urls:!1,images_upload_handler:function(e){return new Promise(((t,n)=>{const i=new FormData;i.append("file",e.blob(),e.filename()),o.Z.common.upload.post(i).then((e=>{t(e.data.src)})).catch((()=>{n("Image upload failed")}))}))},setup:function(e){e.on("init",(function(){this.getBody().style.fontSize="14px"})),e.on("OpenWindow",(function(e){var t=document.querySelector(".el-drawer.open"),n=e.target.editorContainer;if(t&&t.contains(n)){var i=document.activeElement;setTimeout((()=>{document.activeElement.blur(),i.focus()}),0)}}))},...this.options},contentValue:this.modelValue}},watch:{modelValue(e){this.contentValue=e},contentValue(e){this.$emit("update:modelValue",e)}},mounted(){c().init({})},methods:{onClick(e){this.$emit("onClick",e,c())}}}),d=n(3744);const p=(0,d.Z)(u,[["render",a]]);var m=p}}]);