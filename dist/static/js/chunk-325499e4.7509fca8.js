(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325499e4"],{"0a49":function(e,t,a){var i=a("9b43"),s=a("626a"),n=a("4bf8"),l=a("9def"),r=a("cd1c");e.exports=function(e,t){var a=1==e,o=2==e,c=3==e,u=4==e,d=6==e,p=5==e||d,f=t||r;return function(t,r,m){for(var v,h,g=n(t),x=s(g),_=i(r,m,3),E=l(x.length),b=0,C=a?f(t,E):o?f(t,0):void 0;E>b;b++)if((p||b in x)&&(v=x[b],h=_(v,b,g),e))if(a)C[b]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return b;case 2:C.push(v)}else if(u)return!1;return d?-1:c||u?u:C}}},1169:function(e,t,a){var i=a("2d95");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"20d6":function(e,t,a){"use strict";var i=a("5ca1"),s=a("0a49")(6),n="findIndex",l=!0;n in[]&&Array(1)[n]((function(){l=!1})),i(i.P+i.F*l,"Array",{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},2498:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list-radio"},[a("div",{staticClass:"list-radio__main"},[a("ul",{staticClass:"list-radio__main--lever-wrapper"},e._l(e.lever,(function(t){return a("li",{key:t,staticClass:"list-radio__main--lever-header"},[e._v("\n        "+e._s(t)+"\n      ")])})),0),e._v(" "),a("div",{staticClass:"list-subject"},e._l(e.dataSubjects,(function(t){return a("div",{key:t.name,staticClass:"list-subject-content"},[a("span",{staticClass:"list-subject-content_name"},[e._v(e._s(t.name))]),e._v(" "),a("ul",{staticClass:"list-radio__main--lever"},e._l(e.lever,(function(i){return a("li",{key:i,staticClass:"list-radio__main--lever-item",on:{click:function(a){return e.changeValue(t)}}},[a("el-radio",{attrs:{label:i,value:"oneLever.value",disabled:!e.isEdit},model:{value:t.levelOfPrefer,callback:function(a){e.$set(t,"levelOfPrefer",a)},expression:"subject.levelOfPrefer"}},[e._v("Option B")])],1)})),0)])})),0)])])},s=[],n={name:"ListRadio",props:["dataSubjects","isSubject","isEdit"],data:function(){return{lever:[0,1,2,3,4,5],radio:"1",subject:[],currentRow:null}},methods:{changeValue:function(e){var t={isSubject:this.isSubject,value:e};this.$emit("changeValueRadio",t)},handleCurrentChange:function(e){this.currentRow=e}}},l=n,r=(a("de82"),a("2877")),o=Object(r["a"])(l,i,s,!1,null,null,null);t["a"]=o.exports},"2a1b":function(e,t,a){},"2f21":function(e,t,a){"use strict";var i=a("79e5");e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"55dd":function(e,t,a){"use strict";var i=a("5ca1"),s=a("d8e8"),n=a("4bf8"),l=a("79e5"),r=[].sort,o=[1,2,3];i(i.P+i.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!a("2f21")(r)),"Array",{sort:function(e){return void 0===e?r.call(n(this)):r.call(n(this),s(e))}})},aa77:function(e,t,a){var i=a("5ca1"),s=a("be13"),n=a("79e5"),l=a("fdef"),r="["+l+"]",o="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(e,t,a){var s={},r=n((function(){return!!l[e]()||o[e]()!=o})),c=s[e]=r?t(p):l[e];a&&(s[a]=c),i(i.P+i.F*r,"String",s)},p=d.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},b206:function(e,t,a){"use strict";var i=a("e0f5"),s=a.n(i);s.a},c5f6:function(e,t,a){"use strict";var i=a("7726"),s=a("69a8"),n=a("2d95"),l=a("5dbc"),r=a("6a99"),o=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,f="Number",m=i[f],v=m,h=m.prototype,g=n(a("2aeb")(h))==f,x="trim"in String.prototype,_=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=x?t.trim():p(t,3);var a,i,s,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+t}for(var l,o=t.slice(2),c=0,u=o.length;c<u;c++)if(l=o.charCodeAt(c),l<48||l>s)return NaN;return parseInt(o,i)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(g?o((function(){h.valueOf.call(a)})):n(a)!=f)?l(new v(_(t)),a,m):_(t)};for(var E,b=a("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)s(v,E=b[C])&&!s(m,E)&&d(m,E,u(v,E));m.prototype=h,h.constructor=m,a("2aba")(i,f,m)}},cd1c:function(e,t,a){var i=a("e853");e.exports=function(e,t){return new(i(e))(t)}},de82:function(e,t,a){"use strict";var i=a("2a1b"),s=a.n(i);s.a},e0f5:function(e,t,a){},e853:function(e,t,a){var i=a("d3f4"),s=a("1169"),n=a("2b4c")("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)||(t=void 0),i(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}},fa8c:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manager"},[a("div",{staticStyle:{width:"90%",margin:"auto"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("Add new department's lecturer")]),e._v(" "),a("p"),e._v(" "),a("el-select",{staticClass:"pad",attrs:{placeholder:"Select"},model:{value:e.valueOptionStatus,callback:function(t){e.valueOptionStatus=t},expression:"valueOptionStatus"}},e._l(e.listStatus,(function(e){return a("el-option",{key:e.value,staticClass:"report-item-select",attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{filterable:"",placeholder:"Select Email"},model:{value:e.valueEmail,callback:function(t){e.valueEmail=t},expression:"valueEmail"}},e._l(e.dataListEmail,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.value}})})),1),e._v(" "),a("p"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{"box-shadow":"0px 0px 4px -1px #d2d2d2"},attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"",stripe:e.isActive,"highlight-current-row":"","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{width:"200",label:"Email"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",{staticClass:"link-type",on:{click:function(t){return e.info(i)}}},[e._v(e._s(i.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200",label:"Full Name"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(a.fullName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Short Name"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s(a.shortName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Expected",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return i.login?[i.fillingExpected&&"ACTIVATE"===i.status?a("el-tag",{staticClass:"text-success link-type",on:{click:function(t){return e.infoexpected(i)}}},[e._v("\n          Completed\n        ")]):e._e(),e._v(" "),i.fillingExpected||"ACTIVATE"!==i.status?e._e():a("el-tag",{staticClass:"text-danger link-type",on:{click:function(t){return e.infoexpected(i)}}},[e._v("\n          Uncompleted\n        ")])]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"Status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return"ACTIVATE"===i.status?[i.login?a("el-tag",{staticClass:"text-success"},[e._v("\n          Logged in\n        ")]):e._e(),e._v(" "),i.login?e._e():a("el-tag",{staticClass:"text-danger"},[e._v("\n          Unlogged in\n        ")])]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"Action",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,s=t.$index;return[i.login&&"ACTIVATE"===i.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleHOD(i)}}},[e._v("\n          Transfer position\n        ")]):e._e(),e._v(" "),i.login&&"DEACTIVATE"!==i.status?e._e():a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i,s)}}},[e._v("\n          Remove\n        ")]),e._v(" "),i.login&&"DEACTIVATE"===i.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.changStatus(i,"ACTIVATE")}}},[e._v("\n          Activate\n        ")]):e._e(),e._v(" "),i.login&&"ACTIVATE"===i.status?a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(t){return e.changStatus(i,"DEACTIVATE")}}},[e._v("\n          Deactivate\n        ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",e._b({staticClass:"pagination-generation",attrs:{background:"","current-page":e.currentPage,layout:"total, sizes, prev, pager, next","page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}},"el-pagination",e.$attrs,!1))],1)],1),e._v(" "),a("el-dialog",{staticClass:"edit",attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"200px"}},[a("el-form-item",{attrs:{label:"Lecturer Name",prop:"fullName"}},[a("el-input",{model:{value:e.temp.fullName,callback:function(t){e.$set(e.temp,"fullName",t)},expression:"temp.fullName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Phone Number",prop:"phone"}},[a("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Short Name",prop:"shortName"}},[a("el-input",{model:{value:e.temp.shortName,callback:function(t){e.$set(e.temp,"shortName",t)},expression:"temp.shortName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("span",[e._v(e._s(e.temp.email))])]),e._v(" "),a("el-form-item",{attrs:{label:"Position",prop:"headOfDepartment"}},[a("span",[e._v(e._s(e.temp.headOfDepartment?"Head of Department":"Lecturer"))])]),e._v(" "),a("el-form-item",{attrs:{label:"Department",prop:"department"}},[a("span",[e._v(e._s(e.temp.department))])]),e._v(" "),a("el-form-item",{attrs:{label:"Full-time",prop:"fullTime"}},[a("el-checkbox",{model:{value:e.temp.fullTime,callback:function(t){e.$set(e.temp,"fullTime",t)},expression:"temp.fullTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Min of class quota",prop:"quotaClass"}},[a("el-input-number",{attrs:{min:0,max:10},model:{value:e.temp.quotaClass,callback:function(t){e.$set(e.temp,"quotaClass",t)},expression:"temp.quotaClass"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v("\n        Edit\n      ")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"add",attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormAdd},on:{"update:visible":function(t){e.dialogFormAdd=t}}},[a("el-form",{ref:"dataFormAdd",attrs:{rules:e.emailAddRule,model:e.emailAdd,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{attrs:{type:"email"},model:{value:e.emailAdd.email,callback:function(t){e.$set(e.emailAdd,"email",t)},expression:"emailAdd.email"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormAdd=!1}}},[a("Cancel",[e._v("Cancel")])],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addData()}}},[e._v("\n        Add\n      ")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"manager-radio-dialog",attrs:{visible:e.dialogFormexpected},on:{"update:visible":function(t){e.dialogFormexpected=t}}},[a("div",{staticClass:"manager-radio"},[a("span",{staticClass:"title"},[e._v("View expected of "+e._s(e.currentRow.email))]),e._v(" "),a("p"),e._v(" "),a("div",{staticClass:"manager-radio-header"},[a("el-select",{attrs:{placeholder:"Select"},model:{value:e.valueOption,callback:function(t){e.valueOption=t},expression:"valueOption"}},e._l(e.listYear,(function(e){return a("el-option",{key:e.value,staticClass:"manager-radio-item-select",attrs:{label:e.season+" "+e.year,value:e.id}})})),1),e._v(" "),a("p"),e._v(" "),e.expectedSubjects.length>0?a("div",{staticClass:"button"},[e.isEdit?e._e():a("el-button",{attrs:{type:"primary"},on:{click:e.editExpected}},[e._v("Edit")]),e._v(" "),e.isEdit?a("el-button",{attrs:{type:"primary"},on:{click:e.saveExected}},[e._v("Save")]):e._e(),e._v(" "),e.yearSelected[0]?a("div",[!e.yearSelected[0].now&&this.$store.state.expected.dataExpected.canReuse?a("el-button",{staticClass:"reUseButton",attrs:{type:"primary"},on:{click:e.reuseExpected}},[e._v("Reuse Expected\n      ")]):e._e()],1):e._e()],1):e._e()],1),e._v(" "),e.yearSelected[0]?a("div",[a("p"),e._v(" "),e.yearSelected[0].now&&0===this.$store.state.expected.dataExpected.id?a("span",{staticClass:"title"},[e._v(e._s(e.currentRow.fullName)+" no expectations in this term,select other term to reuse or create new ! ")]):e._e(),e._v(" "),e.yearSelected[0].hasData?e._e():a("span",{staticClass:"title-warning"},[e._v("Don't have data for this semester!")])]):e._e(),e._v(" "),e.yearSelected[0]?a("div",[e.yearSelected[0].hasData?a("div",{staticClass:"manager-radio_content"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoadingRadio,expression:"listLoadingRadio"}],staticClass:"manager-radio_wrap"},[a("div",{staticClass:"manager-radio_subject"},[a("span",{staticClass:"title"},[e._v("SUBJECT / PREFERENCE LEVEL")]),e._v(" "),a("ListRadio",{attrs:{"data-subjects":e.expectedSubjects,"is-edit":e.isEdit,"is-subject":!0},on:{changeValueRadio:e.handleDataExpectedEdit}})],1),e._v(" "),a("div",{staticClass:"manager-radio_time"},[a("span",{staticClass:"title"},[e._v("SLOT / PREFERENCE LEVEL")]),e._v(" "),a("ListRadio",{attrs:{"data-subjects":e.expectedSlots,"is-edit":e.isEdit,"is-subject":!1},on:{changeValueRadio:e.handleDataExpectedEdit}}),e._v(" "),a("div",{staticClass:"note"},[a("div",{staticClass:"note-wrapper"},[a("div",{staticClass:"main-content"},[a("span",{staticClass:"title-content"},[e._v(" Note")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("M1:")]),e._v(" slot 1 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("M2:")]),e._v(" slot 2 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("M3:")]),e._v(" slot 3 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("E1:")]),e._v(" slot 4 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("E2:")]),e._v(" slot 5 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("E3:")]),e._v(" slot 6 Mon,Tue,Fri")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("M4:")]),e._v(" slot 1,2 Tue | 1 Thursday")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("M5:")]),e._v(" slot 3 Tue | 2,3 Thursday")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("E4:")]),e._v(" slot 4,5 Tue | 1 Thursday")]),e._v(" "),a("span",{staticClass:"content"},[a("span",{staticClass:"title"},[e._v("E5:")]),e._v(" slot 6 Tue | 5,6 Thursday")])]),e._v(" "),a("div",{staticClass:"content-number"},[a("span",{staticClass:"title"},[e._v("0,1,2,3,4,5:")]),e._v(" "),a("span",{staticClass:"content"},[e._v("- Level of Lecturer's preference for slot/ subject.")]),e._v(" "),a("span",{staticClass:"content"},[e._v("- The higher number, the higher preference.")]),e._v(" "),a("span",{staticClass:"content"},[e._v("- Select 0 if Lecturer cannot teach this subject / slot.")])])])])],1)]),e._v(" "),a("div",{staticClass:"manager-radio_content-footer"},[a("div",{staticClass:"manager-radio_content-footer-item"},[a("span",{staticClass:"title-item"},[e._v("Number of class (Maximum 10)")]),e._v(" "),a("el-input-number",{attrs:{min:1,max:10,disabled:!e.isEdit},on:{change:e.handleChange},model:{value:e.expectedNote.expectedNumOfClass,callback:function(t){e.$set(e.expectedNote,"expectedNumOfClass",t)},expression:"expectedNote.expectedNumOfClass"}})],1),e._v(" "),a("div",{staticClass:"manager-radio_content-footer-item"},[a("span",{staticClass:"title-item"},[e._v("Note")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"Please input",disabled:!e.isEdit},model:{value:e.expectedNote.note,callback:function(t){e.$set(e.expectedNote,"note",t)},expression:"expectedNote.note"}})],1)])]):e._e()]):e._e()])])],1)},s=[],n=(a("55dd"),a("7f7f"),a("20d6"),a("ac6a"),a("96cf"),a("1da1")),l=(a("c5f6"),a("2498")),r={name:"Dashboard",components:{ListRadio:l["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1}},data:function(){return{list:[],listLoading:!0,temp:{googleId:"",fullName:"",email:"",phone:"",shortName:"",quotaClass:"",fillingExpected:"",headOfDepartment:"",department:"CF",fullTime:!1,active:!1},yearSelected:{},emailAdd:{email:""},dialogFormVisible:!1,dialogFormAdd:!1,dialogFormexpected:!1,dialogStatus:"",textMap:{update:"Edit lecturer's information :",create:"Add new lecturer"},listStatus:[{label:"Activated",value:0},{label:"Deactivated",value:1}],rules:{fullName:[{required:!0,message:"Name is required.",trigger:"change"}],shortName:[{required:!0,message:"Short Name is required.",trigger:"change"}],email:[{type:"email",required:!0,message:"Email is required",trigger:"change"}]},emailAddRule:{email:[{type:"email",required:!0,message:"Email is required",trigger:"change"}]},property:"Blank",textarea:"",textareaNote:"",note:"",valueOption:"",valueOptionStatus:0,idYear:"",listYear:[],infoUser:{},expectedSubjects:[],expectedSlots:[],expectedNote:{},dataExpectedEdit:{expectedSubjects:[],expectedSlots:[],expectedNote:{}},isEdit:!1,dataListEmail:[{value:"",title:"All Email"}],currentRow:{},currentPage:1,pageSize:5,total:0,limit:10,pageSizes:{type:Array,default:function(){return[10,20,30,50]}},valueEmail:"",listLoadingRadio:!1,isActive:!0}},watch:{valueOption:function(){this.getDataExpected()},valueOptionStatus:function(){var e=this;this.getListEmail(),0===this.valueOptionStatus?this.isActive=!0:this.isActive=!1,setTimeout((function(){e.fetchData(e.valueOptionStatus,e.valueEmail)}),300)},valueEmail:function(){var e=this;setTimeout((function(){e.fetchData(e.valueOptionStatus,e.valueEmail)}),300)}},created:function(){this.fetchData(),this.getListEmail()},methods:{tableRowClassName:function(e){var t=e.row;e.rowIndex;if("DEACTIVATE"===t.status)return"warning-row"},logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user/logout");case 2:localStorage.removeItem("infoUser"),this.$router.push("/login?redirect=".concat(this.$route.fullPath));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleChange:function(e){},getYear:function(){var e=this;this.$store.dispatch("expected/getListYear").then((function(t){e.listYear=e.$store.state.expected.listYear,e.listYear.forEach((function(t){t.now&&(e.valueOption=t.id)}))})).catch((function(){}))},changStatus:function(e,t){var a=this,i={params:{status:t},lecturerGoogleId:e.googleId};"DEACTIVATE"===t?this.$confirm("Will remove timetable of lecturer : '<strong>"+e.email+"</strong>' in current semester (if exist)?","Warning",{iconColor:"red",dangerouslyUseHTMLString:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"DEACTIVATE"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.callAPIChangeStatus(i);case 1:case"end":return e.stop()}}),e)})))):this.callAPIChangeStatus(i)},callAPIChangeStatus:function(e){var t=this;this.$store.dispatch("manager/changeStatus",e).then((function(){t.fetchData(),t.listLoading=!1,t.$notify({title:"Success",message:"Change status successfully",type:"success",duration:2e3})})).catch((function(){t.listLoading=!1}))},getListEmail:function(){var e=this;this.list=[],this.infoUser=JSON.parse(localStorage.getItem("infoUser"));var t={page:0,limit:this.limit,criteria:{role:{id:2},department:this.infoUser.department,email:this.valueEmail,status:this.valueOptionStatus},sortField:"email",ascending:!1};this.$store.dispatch("manager/getListUser",t).then((function(t){t=e.$store.state.manager.listUser.results;e.dataListEmail=[{value:"",title:"All Email"}],t.forEach((function(t){e.dataListEmail.push({title:t.email,value:t.email})}))})).catch((function(){}))},fetchData:function(e,t){var a=this;if(this.infoUser=JSON.parse(localStorage.getItem("infoUser")),this.listLoading=!0,"ALL"===this.valueOptionStatus)var i={page:t||e?0:this.currentPage,limit:this.limit,criteria:{role:{id:2},department:this.infoUser.department,email:t},sortField:"email",ascending:!0};else i={page:t||e?0:this.currentPage,limit:this.limit,criteria:{role:{id:2},department:this.infoUser.department,status:this.valueOptionStatus,email:t},sortField:"email",ascending:!0};this.$store.dispatch("manager/getListUser",i).then((function(e){a.list=a.$store.state.manager.listUser.results,a.total=a.$store.state.manager.listUser.totalCount,a.listLoading=!1})).catch((function(){a.listLoading=!1}))},handleHOD:function(e){var t=this;this.$confirm("Do you really want to transfer Head of Department role to lecturer : '<strong>"+e.email+"</strong>' ?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",dangerouslyUseHTMLString:!0,type:"warning",title:"TRANSFER ROLE"}).then(Object(n["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.listLoading=!0,i={lecturerGoogleId:e.googleId},t.$store.dispatch("manager/changeHOD",i).then((function(){t.listLoading=!1,t.logout();var e=t.$store.state.startInterval;clearInterval(e)})).catch((function(){t.listLoading=!1}));case 3:case"end":return a.stop()}}),a)}))))},handleDelete:function(e,t){var a=this;this.$confirm("Do you really want to delete lecturer : '<strong>"+e.email+"</strong>' ?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",dangerouslyUseHTMLString:!0,type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.listLoading=!0,a.$store.dispatch("manager/deleteUser",e.id).then((function(){a.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),a.list.splice(t,1),a.listLoading=!1})).catch((function(){a.listLoading=!1}));case 2:case"end":return i.stop()}}),i)}))))},info:function(e){this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0},infoexpected:function(e){this.currentRow=e,this.dialogFormexpected=!0,this.getYear(),this.getDataExpected()},handleCreate:function(){this.dialogStatus="create",this.dialogFormAdd=!0},updateData:function(){var e=this,t=/((0)+([0-9]{9}))/g;this.$refs["dataForm"].validate((function(a){var i=t.test(e.temp.phone)||!e.temp.phone&&!t.test(e.temp.phone);a&&i&&e.$store.dispatch("manager/updateUser",e.temp).then((function(){e.fetchData(e.valueOptionStatus,e.valueEmail),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})),i||e.$confirm("Số điện thoại không đúng định dạng.","Warning",{confirmButtonText:"Ok",cancelButtonText:"Cancel",dangerouslyUseHTMLString:!0,type:"warning"})}))},addData:function(){var e=this;this.$refs["dataFormAdd"].validate((function(t){if(!t)return!1;e.$store.dispatch("manager/addUser",e.emailAdd).then((function(){e.fetchData(),e.dialogFormAdd=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),e.getListEmail(),e.emailAdd={email:""},e.$refs["dataFormAdd"].resetFields()})).catch((function(e){}))}))},handleDataExpectedEdit:function(e){if(e.isSubject){var t=this.dataExpectedEdit.expectedSubjects.findIndex((function(t){return t.name===e.value.name}));t&&-1===t?this.dataExpectedEdit.expectedSubjects.push(e.value):this.dataExpectedEdit.expectedSubjects[t].levelOfPrefer=e.value.levelOfPrefer}else{var a=this.dataExpectedEdit.expectedSlots.findIndex((function(t){return t.name===e.value.name}));a&&-1===a?this.dataExpectedEdit.expectedSlots.push(e.value):this.dataExpectedEdit.expectedSlots[a].levelOfPrefer=e.value.levelOfPrefer}},sort:function(e){e.sort((function(e,t){var a=e.name.toUpperCase(),i=t.name.toUpperCase();return a<i?-1:a>i?1:0}))},getDataExpected:function(){var e=this;if(this.expectedSlots=[],this.yearSelected=this.listYear.filter((function(t){return t.id===e.valueOption})),this.yearSelected[0].hasData){this.listLoading=!0,this.dataExpectedEdit={expectedSubjects:[],expectedSlots:[],expectedNote:{}};var t={lecturerId:this.currentRow.googleId,semesterId:this.valueOption};this.$store.dispatch("expected/getDataExpected",t).then((function(t){if(e.expectedSubjects=e.$store.state.expected.dataExpected.expectedSubjects,e.$store.state.expected.dataExpected.expectedSlots){var a=["M1","M2","M3","E1","E2","E3","M4","M5","E4","E5"],i=e.$store.state.expected.dataExpected.expectedSlots;a.forEach((function(t){i.forEach((function(a){t===a.name&&e.expectedSlots.push(a)}))}))}else e.expectedSlots=[];e.$store.state.expected.dataExpected.expectedSubjects?(e.expectedSubjects=e.$store.state.expected.dataExpected.expectedSubjects,e.sort(e.expectedSubjects)):e.expectedSubjects=[],e.$store.state.expected.dataExpected.expectedNote?e.expectedNote=e.$store.state.expected.dataExpected.expectedNote:e.expectedNote={},e.listLoading=!1})).catch((function(){}))}},reuseExpected:function(){var e=this,t={lecturerGoogleId:this.currentRow.googleId,semesterId:this.valueOption};this.$store.dispatch("expected/reuseExected",t).then((function(t){e.getDataExpected(),e.fetchData(),e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})).catch((function(){e.loading=!1}))},saveExected:function(){var e=this;this.dataExpectedEdit.expectedNote.expectedNumOfClass=this.expectedNote.expectedNumOfClass,this.dataExpectedEdit.expectedNote.maxConsecutiveSlot=this.expectedNote.maxConsecutiveSlot,this.dataExpectedEdit.expectedNote.note=this.expectedNote.note,this.dataExpectedEdit.lecturer={googleId:this.currentRow.googleId},this.dataExpectedEdit.semester={id:this.valueOption},this.dataExpectedEdit.method="post",0!==this.$store.state.expected.dataExpected.id&&(this.dataExpectedEdit.method="put",this.dataExpectedEdit.id=this.$store.state.expected.dataExpected.id),this.$store.dispatch("expected/saveDataExpected",this.dataExpectedEdit).then((function(t){e.isEdit=!1,e.dataExpectedEdit={expectedSubjects:[],expectedSlots:[],expectedNote:{}},e.getDataExpected(),e.fetchData(),e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})).catch((function(){}))},editExpected:function(){this.isEdit=!0},handleSizeChange:function(e){console.log("val",e),this.limit=e,this.fetchData()},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()}}},o=r,c=(a("b206"),a("2877")),u=Object(c["a"])(o,i,s,!1,null,null,null);t["default"]=u.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);