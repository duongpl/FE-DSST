(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f7ca728"],{"4ff0":function(e,t,r){"use strict";var a=r("ab91"),o=r.n(a);o.a},ab91:function(e,t,r){},ecac:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"profile"},[r("h2",{staticClass:"title"},[e._v("Lecturer Information")]),r("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"5px"},attrs:{rules:e.rules,model:e.userInfo,"label-position":"left","label-width":"200px"}},[r("el-form-item",{attrs:{label:"Lecturer Name",prop:"fullName"}},[r("el-input",{model:{value:e.userInfo.fullName,callback:function(t){e.$set(e.userInfo,"fullName",t)},expression:"userInfo.fullName"}})],1),r("el-form-item",{attrs:{label:"Phone Number",prop:"phone"}},[r("el-input",{attrs:{type:"text"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}})],1),r("el-form-item",{attrs:{label:"Short Name",prop:"shortName"}},[r("el-input",{model:{value:e.userInfo.shortName,callback:function(t){e.$set(e.userInfo,"shortName",t)},expression:"userInfo.shortName"}})],1),r("el-form-item",{attrs:{label:"Email",prop:"email"}},[r("span",[e._v(e._s(e.userInfo.email))])]),r("el-form-item",{attrs:{label:"Postion",prop:"headOfDepartment"}},[r("span",[e._v(e._s("ROLE_ADMIN"===e.userInfo.role.roleName?"Head of Department":"Lecturer"))])]),r("el-form-item",{attrs:{label:"Department",prop:"department"}},[r("span",[e._v(e._s(e.userInfo.department))])]),"ROLE_ADMIN"===e.userInfo.role.roleName?r("el-form-item",{attrs:{label:"Full Time",prop:"fullTime"}},[r("el-checkbox",{model:{value:e.userInfo.fullTime,callback:function(t){e.$set(e.userInfo,"fullTime",t)},expression:"userInfo.fullTime"}})],1):e._e(),"ROLE_ADMIN"===e.userInfo.role.roleName?r("el-form-item",{attrs:{label:"Min of class quota",prop:"quotaClass"}},[r("el-input-number",{attrs:{min:"0",max:10},model:{value:e.userInfo.quotaClass,callback:function(t){e.$set(e.userInfo,"quotaClass",t)},expression:"userInfo.quotaClass"}})],1):e._e()],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v(" SAVE ")])],1)],1)},o=[],s={name:"Profile",data:function(){return{list:[],listLoading:!0,userInfo:JSON.parse(localStorage.getItem("infoUser")),rules:{fullName:[{required:!0,message:"Name is required.",trigger:"change"}],shortName:[{required:!0,message:"Short Name is required.",trigger:"change"}]}}},created:function(){},methods:{updateData:function(){var e=this,t=/((0)+([0-9]{9}))/g;this.$refs["dataForm"].validate((function(r){var a=t.test(e.userInfo.phone)||!e.userInfo.phone&&!t.test(e.userInfo.phone);r&&a&&e.$store.dispatch("manager/updateUserLocalStorage",e.userInfo).then((function(){e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})),a||e.$confirm("Số điện thoại không đúng định dạng.","Warning",{confirmButtonText:"Ok",cancelButtonText:"Cancel",dangerouslyUseHTMLString:!0,type:"warning"})}))}}},n=s,l=(r("4ff0"),r("2877")),u=Object(l["a"])(n,a,o,!1,null,null,null);t["default"]=u.exports}}]);