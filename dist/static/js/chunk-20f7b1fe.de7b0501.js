(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f7b1fe"],{"25a3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"report"},[a("div",{staticClass:"header-container"}),e._v(" "),a("div",{staticClass:"report-header"},[a("span",{staticClass:"title"},[e._v("Select Term :")]),e._v(" "),a("p"),e._v(" "),a("el-select",{staticClass:"pad",attrs:{placeholder:"Select"},model:{value:e.valueOptionId,callback:function(t){e.valueOptionId=t},expression:"valueOptionId"}},e._l(e.listYear,(function(e){return a("el-option",{key:e.value,staticClass:"report-item-select",attrs:{label:e.season+" "+e.year,value:e.id}})})),1),e._v(" "),"ROLE_ADMIN"!==e.userInfo.role.roleName?a("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("Create new report")]):e._e(),e._v(" "),"ROLE_ADMIN"===e.userInfo.role.roleName?a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{filterable:"",placeholder:"Select Email"},model:{value:e.valueEmail,callback:function(t){e.valueEmail=t},expression:"valueEmail"}},[a("el-option",{attrs:{label:"All Email",value:""}}),e._v(" "),e._l(e.dataListEmail,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.value}})}))],2):e._e(),e._v(" "),a("p"),e._v(" "),a("el-table",{staticClass:"table-report",staticStyle:{"box-shadow":"0px 0px 4px -1px #d2d2d2"},attrs:{data:e.listReport,"element-loading-text":"Loading",border:"",fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"Purpose",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(a.content))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Created Date",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(e.format_date(a.createdDate)))]}}])}),e._v(" "),"ROLE_ADMIN"===e.userInfo.role.roleName?a("el-table-column",{attrs:{label:"Created By"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(a.lecturer.email))]}}],null,!1,4139703219)}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"Process note"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(a.replyContent))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Status",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-tag",{attrs:{type:s.status}},[e._v("\n            "+e._s(s.status)+"\n          ")])]}}])}),e._v(" "),"ROLE_ADMIN"===e.userInfo.role.roleName?a("el-table-column",{attrs:{label:"Action",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return["PENDING"===s.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.reply(s)}}},[e._v("\n            Reply\n          ")]):e._e()]}}],null,!1,409204543)}):e._e()],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",e._b({staticClass:"pagination-generation",attrs:{background:"","current-page":e.currentPage,layout:"total, sizes, prev, pager, next","page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}},"el-pagination",e.$attrs,!1))],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"Purpose",visible:e.dialogFormAdd},on:{"update:visible":function(t){e.dialogFormAdd=t}}},[a("el-form",{ref:"dataFormAdd",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"80px"}},[a("el-form-item",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"purpose"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.form.purpose,callback:function(t){e.$set(e.form,"purpose",t)},expression:"form.purpose"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormAdd=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addData()}}},[e._v("\n        Add\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"Reply",visible:e.dialogFormReply},on:{"update:visible":function(t){e.dialogFormReply=t}}},[a("el-form",{ref:"dialogFormReply",attrs:{model:e.formReply,rules:e.rules,"label-position":"left","label-width":"80px"}},[a("el-form-item",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"textarea",rows:5,disabled:!0},model:{value:e.formReply.purpose,callback:function(t){e.$set(e.formReply,"purpose",t)},expression:"formReply.purpose"}})],1)],1),e._v(" "),a("el-form-item",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"reply"}},[a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.formReply.reply,callback:function(t){e.$set(e.formReply,"reply",t)},expression:"formReply.reply"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormReply=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.changeReport("REJECTED")}}},[e._v("\n        Reject\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeReport("APPROVED")}}},[e._v("\n        Approved\n      ")])],1)],1)],1)},r=[],l=(a("5df3"),a("4f7f"),a("2909")),o=(a("ac6a"),a("5530")),n=(a("c5f6"),a("2f62")),i=a("c1df"),c=a.n(i),d={name:"Report",components:{},props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1}},data:function(){return{loading:!1,property:"Blank",valueOptionId:"",userInfo:JSON.parse(localStorage.getItem("infoUser")),idYear:"",listYear:[],infoUser:{},listReport:[],dialogFormAdd:!1,dialogFormReply:!1,form:{purpose:""},formReply:{id:"",purpose:"",reply:""},rules:{purpose:[{required:!0,message:"Purpose is required.",trigger:"change"}],reply:[{required:!0,message:"Reply is required.",trigger:"change"}]},valueEmail:"",dataListEmail:[{value:"",title:"All Email"}],currentPage:1,pageSize:5,total:0,limit:10,pageSizes:{type:Array,default:function(){return[10,20,30,50]}}}},computed:Object(o["a"])({},Object(n["b"])(["name"])),watch:{valueOptionId:function(){this.getListReport()},valueEmail:function(){this.getListReport(this.valueEmail)}},created:function(){this.getYear()},methods:{format_date:function(e){if(e)return c()(String(e)).format("YYYY/MM/DD")},handleChange:function(e){},getYear:function(){var e=this;this.$store.dispatch("expected/getListYear").then((function(t){e.listYear=e.$store.state.expected.listYear,e.listYear.forEach((function(t){t.now&&(e.valueOptionId=t.id,e.getListEmail())})),e.getListReport()})).catch((function(){e.loading=!1}))},getListEmail:function(){var e=this;if("ROLE_ADMIN"!==this.userInfo.role.roleName)var t={criteria:{semester:{id:this.valueOptionId},lecturer:{googleId:this.userInfo.googleId,email:this.valueEmail}},sortField:"status",ascending:!0};else t={criteria:{semester:{id:this.valueOptionId},lecturer:{department:this.userInfo.department,email:this.valueEmail}},sortField:"status",ascending:!0};this.$store.dispatch("report/getListReport",t).then((function(){var t=e.$store.state.report.listReport.results,a=t.map((function(e,t){return e.lecturer})),s=Object(l["a"])(new Set(a.map((function(e){return e.email})))),r=s.map((function(e,t){return{title:e,value:e}}));e.dataListEmail=r})).catch((function(){}))},getListReport:function(e){var t=this;if(this.loading=!0,"ROLE_ADMIN"!==this.userInfo.role.roleName)var a={page:e?0:this.currentPage,limit:this.limit,criteria:{semester:{id:this.valueOptionId},lecturer:{googleId:this.userInfo.googleId,email:this.valueEmail}},sortField:"status",ascending:!1};else a={page:e?0:this.currentPage,limit:this.limit,criteria:{semester:{id:this.valueOptionId},lecturer:{department:this.userInfo.department,email:this.valueEmail}},sortField:"status",ascending:!1};this.$store.dispatch("report/getListReport",a).then((function(){t.listReport=t.$store.state.report.listReport.results,t.total=t.$store.state.report.listReport.totalCount,t.loading=!1})).catch((function(){t.loading=!1}))},handleCreate:function(){this.dialogFormAdd=!0},addData:function(){var e=this;this.form.purpose=this.form.purpose.trim(),this.$refs["dataFormAdd"].validate((function(t){var a={content:e.form.purpose.trim()};t&&e.form.purpose.trim()&&(e.dialogFormAdd=!1,e.loading=!0,e.$store.dispatch("report/addReport",a).then((function(){e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),e.getListReport()})))}))},reply:function(e,t){this.dialogFormReply=!0,this.formReply.purpose=e.content,this.formReply.id=e.id},changeReport:function(e){var t=this;this.formReply.reply=this.formReply.reply.trim(),this.$refs["dialogFormReply"].validate((function(a){var s={id:t.formReply.id,replyContent:t.formReply.reply,status:e};a&&(t.dialogFormReply=!1,t.$store.dispatch("report/approveReport",s).then((function(){t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),t.getListReport()})))}))},handleSizeChange:function(e){this.limit=e,this.getListReport()},handleCurrentChange:function(e){this.currentPage=e,this.getListReport()}}},u=d,f=(a("a691"),a("2877")),p=Object(f["a"])(u,s,r,!1,null,null,null);t["default"]=p.exports},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=l(e);return a(t)}function l(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=l,e.exports=r,r.id="4678"},"708b":function(e,t,a){},a691:function(e,t,a){"use strict";var s=a("708b"),r=a.n(s);r.a}}]);