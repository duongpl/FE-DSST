(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5620931e"],{"0476":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-custom"},[a("div",{staticClass:"table-custom__main"},[a("ul",{staticClass:"table-custom__main--lever-wrapper"},t._l(t.header,(function(e){return a("li",{key:e,staticClass:"table-custom__main--lever-header"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"list-subject"},[t._l(t.listSlotData,(function(e){return a("div",{key:e,staticClass:"list-subject-content"},[e.room?a("p",{staticClass:"list-subject-content_name"},[t._v(t._s(e.room))]):t._e(),e.slotNumber?a("p",{staticClass:"list-subject-content_name"},[t._v("Slot "+t._s(e.slotNumber))]):t._e(),e.lecturerName?a("p",{staticClass:"list-subject-content_name"},[t._v(" "+t._s(e.lecturerName))]):t._e(),a("ul",{staticClass:"table-custom__main--lever"},t._l(t.header,(function(s){return a("li",{key:s,staticClass:"table-custom__main--lever-item"},[t._l(e.timetable,(function(e){return e.slot&&e.slot===s?a("div",{key:e,staticClass:"table-custom__content",class:{active:e.id===t.dataChange.id},on:{click:function(a){return t.getDataItemArrange(e)}}},[a("div",{class:{"item-draft":"DRAFT"===e.timetableStatus,"item-public":"PUBLIC"===e.timetableStatus,"item-final":"FINAL"===e.timetableStatus,"item-reject":"REJECT"===e.timetableStatus}},[a("span",[t._v(t._s(e.className))]),a("span",[t._v(t._s(e.subjectCode))]),"lecturer"===t.groupBy?a("span",{staticClass:"name-item"},[t._v(t._s(e.room))]):t._e(),"REJECT"===e.timetableStatus?a("div",{staticClass:"content-tooltip"},[t._v(" "+t._s(e.reason)+" ")]):t._e(),"room"===t.groupBy?a("span",{staticClass:"name-item"},[t._v(t._s(e.lecturerShortName))]):t._e(),"REJECT"===e.timetableStatus?a("div",{staticClass:"content-tooltip"},[t._v(" "+t._s(e.reason)+" ")]):t._e()])]):t._e()})),t._l(e.timetable,(function(e){return e.day&&e.day===s?a("div",{key:e,staticClass:"table-custom__content-calendar",class:{active:e.id===t.dataChange.id},on:{click:function(a){return t.getDataItemArrange(e)}}},[a("div",{staticClass:"content"},[a("span",[t._v(t._s(e.className))]),a("span",[t._v(t._s(e.subjectCode))]),a("span",[t._v(t._s(e.room))]),a("span",{staticClass:"name-item"},[t._v(t._s(e.lecturerShortName))])])]):t._e()})),t._l(e.timetable,(function(e){return e.lecturerShortName&&e.subjectCode===s?a("div",{key:e,staticClass:"text-center",on:{click:function(a){return t.getDataItemArrange(e)}}},[a("div",[0===e.levelOfPreference?a("span",[t._v(t._s(e.levelOfPreference))]):t._e(),0!==e.levelOfPreference?a("span",{staticClass:"name-item"},[t._v(t._s(e.levelOfPreference))]):t._e()])]):t._e()}))],2)})),0)])})),0===t.listSlotData.length?a("span",{staticClass:"no-data"},[t._v("No data")]):t._e()],2)])])},i=[],l={name:"TableCustom",props:["listSlotData","header","groupBy","dataSwap"],data:function(){return{dataChange:{},listDataChange:[]}},methods:{getDataItemArrange:function(t){this.listDataChange=this.dataSwap;var e=t;this.dataChange=t,this.listDataChange.push(t),this.listDataChange.length>2&&this.listDataChange.splice(0,1),this.$emit("dataEdit",e),this.$emit("dataSwap",this.listDataChange)},handleCurrentChange:function(t){this.currentRow=t}}},n=l,r=(a("28d3"),a("2877")),o=Object(r["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports},"28d3":function(t,e,a){"use strict";var s=a("8dbc"),i=a.n(s);i.a},3335:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"calendar-view",attrs:{"element-loading-text":"Loading"}},[a("div",{staticClass:"calendar-view-header",attrs:{id:"header"}},[a("el-select",{attrs:{placeholder:"Select Time"},model:{value:t.optionId,callback:function(e){t.optionId=e},expression:"optionId"}},t._l(t.listYear,(function(t){return a("el-option",{key:t.value,staticClass:"calendar-view-item-select",attrs:{label:t.season+" "+t.year,value:t.id}})})),1),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{disabled:"ROLE_USER"===t.infoUser.role.roleName,filterable:"",multiple:"",placeholder:"Select Lecturer"},model:{value:t.valueTeacher,callback:function(e){t.valueTeacher=e},expression:"valueTeacher"}},t._l(t.dataListLecturer,(function(t){return a("el-option",{key:t.id,attrs:{label:t.shortName,value:t.shortName}})})),1),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{filterable:"",multiple:"",placeholder:"Select Class"},model:{value:t.valueClass,callback:function(e){t.valueClass=e},expression:"valueClass"}},t._l(t.dataListClass,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{filterable:"",multiple:"",placeholder:"Select Room"},model:{value:t.valueRoom,callback:function(e){t.valueRoom=e},expression:"valueRoom"}},t._l(t.dataListRoom,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{filterable:"",multiple:"",placeholder:"Select Subject"},model:{value:t.valueSubject,callback:function(e){t.valueSubject=e},expression:"valueSubject"}},t._l(t.dataListSubject,(function(t){return a("el-option",{key:t.id,attrs:{label:t.code,value:t.code}})})),1),a("el-button",{attrs:{type:"primary",disabled:t.yearSelected[0]&&!t.yearSelected[0].hasData},on:{click:t.getListCalendar}},[t._v("Search")])],1),a("div",{staticClass:"calendar-view-content"},[t.lecturerConfirm&&"PUBLIC"===t.lecturerConfirm.status?a("div",{staticClass:"calendar-view-comment"},[a("span",[t._v("Are you satisfied with your timetable ?")]),a("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},on:{click:t.acceptTimetable}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-close",circle:""},on:{click:function(e){t.dialogFormVisibleComment=!0}}})],1):t._e(),t.lecturerConfirm&&"DRAFT"===t.lecturerConfirm.status&&!0===t.lecturerConfirm.confirmed?a("div",{staticClass:"calendar-view-comment"},[t.yearSelected[0]&&t.yearSelected[0].hasData?a("span",[t._v("Timetable is in process re-arrange !")]):t._e()]):t._e(),a("div",{staticClass:"calendar-view-table"},[a("TableCustom",{attrs:{"list-slot-data":t.dataListCalendar,header:t.day}})],1)]),a("el-dialog",{staticClass:"edit",attrs:{title:t.titleDialogFormVisibleComment,visible:t.dialogFormVisibleComment},on:{"update:visible":function(e){t.dialogFormVisibleComment=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"200px"}},[a("el-input",{attrs:{type:"textarea",placeholder:"Please input"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisibleComment=!1}}},[t._v(" Cancel ")]),a("el-button",{attrs:{type:"primary"},on:{click:t.rejectTimetable}},[t._v(" Ok ")])],1)],1)],1)},i=[],l=(a("ac6a"),a("0476")),n={name:"Arrange",components:{TableCustom:l["a"]},data:function(){return{valueTeacher:[],valueClass:[],valueRoom:[],valueSubject:[],day:["MON","TUE","WED","THU","FRI","SAT","SUN"],loading:!0,dataListCalendar:[],optionId:"",listYear:[],listSlot:[],dataDetail:{},dataListRoom:[],dataListClass:[],dataListLecturer:[],dataListSubject:[],modelRoom:"",modelLecturer:"",infoUser:{},comment:null,lecturerConfirm:null,titleDialogFormVisibleComment:"Reason",dialogFormVisibleComment:!1,yearSelected:[]}},watch:{optionId:function(){var t=this;this.yearSelected=this.listYear.filter((function(e){return e.id===t.optionId})),this.yearSelected[0].hasData&&(this.getDataListSubject(),this.getDataListRoom(),this.getDataListClass(),this.getDataListLecturer(),this.getLecturerConfirm())}},created:function(){this.infoUser=JSON.parse(localStorage.getItem("infoUser")),this.valueTeacher.push(this.infoUser.shortName),this.getYear()},methods:{getListCalendar:function(){var t=this;if("DRAFT"!==this.lecturerConfirm.status&&this.lecturerConfirm||"ROLE_USER"!==this.infoUser.role.roleName){this.loading=!0;var e={criteria:{"timetable.semester":{id:this.optionId},timetable:{temp:!1},subject:{department:this.infoUser.department}},inCriteria:{room:{name:this.valueRoom},className:{name:this.valueClass},lecturer:{shortName:this.valueTeacher},subject:{code:this.valueSubject}}};this.$store.dispatch("calendarView/getListcalendar",e).then((function(e){t.dataListCalendar=t.$store.state.calendarView.dataListCalendar,t.loading=!1})).catch((function(){t.loading=!1}))}else this.dataListCalendar=[]},getYear:function(){var t=this;this.loading=!0,this.$store.dispatch("expected/getListYear").then((function(e){t.listYear=t.$store.state.expected.listYear,t.listYear.forEach((function(e){e.now&&(t.optionId=e.id)})),t.yearSelected=t.listYear.filter((function(e){return e.id===t.optionId})),t.yearSelected[0].hasData&&(t.getDataListSubject(),t.getDataListRoom(),t.getDataListClass(),t.getDataListLecturer(),t.getLecturerConfirm())})).catch((function(){t.loading=!1}))},getDataListRoom:function(){var t=this,e={params:{semesterId:this.optionId},postData:{}};this.$store.dispatch("arrange/getDataRoom",e).then((function(e){t.dataListRoom=t.$store.state.arrange.dataListRoom})).catch((function(){t.loading=!1}))},getLecturerConfirm:function(){var t=this,e={params:{semesterId:this.optionId}};this.$store.dispatch("calendarView/getLecturerConfirm",e).then((function(e){t.lecturerConfirm=t.$store.state.calendarView.lecturerConfirm,t.getListCalendar(),t.loading=!1})).catch((function(){t.loading=!1}))},acceptTimetable:function(){var t=this,e={postData:{id:this.lecturerConfirm.id,status:"FINAL"}};this.$store.dispatch("calendarView/updateLecturerConfirm",e).then((function(e){t.lecturerConfirm=t.$store.state.calendarView.lecturerConfirmUpdate,t.$notify({title:"Success",message:"Confirm Successfully",type:"success",duration:2e3})})).catch((function(){t.loading=!1}))},rejectTimetable:function(){var t=this,e={postData:{id:this.lecturerConfirm.id,status:"REJECT",reason:this.comment}};this.$store.dispatch("calendarView/updateLecturerConfirm",e).then((function(e){t.lecturerConfirm=t.$store.state.calendarView.lecturerConfirmUpdate,t.dialogFormVisibleComment=!1,t.$notify({title:"Success",message:"Confirm Successfully",type:"success",duration:2e3})})).catch((function(){t.loading=!1}))},getDataListSubject:function(){var t=this,e={params:{semesterId:this.optionId},postData:{}};this.$store.dispatch("arrange/getDataSubject",e).then((function(e){t.dataListSubject=t.$store.state.arrange.dataListSubject})).catch((function(){}))},getDataListLecturer:function(){var t=this,e={postData:{criteria:{login:!0,status:0,department:this.infoUser.department}},params:{semesterId:this.optionId}};this.$store.dispatch("arrange/getDataLecturer",e).then((function(e){t.dataListLecturer=t.$store.state.arrange.dataListLecturer.results})).catch((function(){t.loading=!1}))},getDataListClass:function(){var t=this,e={params:{semesterId:this.optionId},postData:{}};this.$store.dispatch("arrange/getDataClass",e).then((function(e){t.dataListClass=t.$store.state.arrange.dataListClass})).catch((function(){t.loading=!1}))}}},r=n,o=(a("9371"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=c.exports},4217:function(t,e,a){},"8dbc":function(t,e,a){},9371:function(t,e,a){"use strict";var s=a("4217"),i=a.n(s);i.a}}]);