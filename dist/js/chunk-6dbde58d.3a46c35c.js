(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dbde58d"],{"1ffc":function(t,n,e){},2017:function(t,n,e){"use strict";var o=e("b12d"),i=e.n(o);i.a},"336c":function(t,n,e){"use strict";var o=e("1ffc"),i=e.n(o);i.a},"9ed6":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("span",{staticClass:"logo-titlte"},[t._v("DECISION SUPPORT TOOL FOR TIMETABLING")]),t._v(" "),o("div",{staticClass:"logo"},[o("img",{attrs:{src:e("e118")}})])]),t._v(" "),o("GoogleLogin",{staticClass:"btn-wrapper",attrs:{"render-params":t.renderParams,params:t.params,"on-success":t.onSignInSuccess,"on-failure":t.onSignInError}},[o("el-button",{staticClass:"icon-google",attrs:{type:"primary"}},[t._v("Login with Google +")])],1)],1)],1)},i=[],r=e("61f7"),s=e("e571"),a=e.n(s),c={name:"Login",components:{GoogleLogin:a.a},data:function(){var t=function(t,n,e){Object(r["b"])(n)?e():e(new Error("Please enter the correct user name"))},n=function(t,n,e){n.length<6?e(new Error("The password can not be less than 6 digits")):e()};return{loading:!1,loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:n}]},params:{client_id:"921869370759-8586da5f0glc2upr6k58jlun51g7t1nj.apps.googleusercontent.com"},renderParams:{longtitle:!0},passwordType:"password",redirect:void 0,infoUser:{}}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{onSignInSuccess:function(t){var n=this;this.loading=!0,console.log(t,"user nay");var e={accessToken:t.getAuthResponse(!0).access_token};this.$store.dispatch("user/loginGoogle",e).then((function(){n.infoUser=n.$store.state.user.userInfo,n.$router.push({path:"/dashboard"}),n.loading=!1})).catch((function(){n.loading=!1}))},onSignInError:function(t){console.log(t)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(n){if(!n)return!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},u=c,d=(e("2017"),e("336c"),e("2877")),l=Object(d["a"])(u,o,i,!1,null,null,null);n["default"]=l.exports},b12d:function(t,n,e){},e571:function(t,n,e){!function(t,e){e(n)}(0,(function(t){"use strict";var n,e,o=function(t){return n?Promise.resolve(n):(e||(e=function(t){return new Promise((function(e,o){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{n=window.gapi.auth2.init(Object.assign({},t))}catch(t){o({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}e(n)}))}}))}(t)),e)},i=function(t,n){return t?t[n]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},r={load:function(t){return Promise.all([o(t),new Promise((function(t,n){if(!document.getElementById("auth2_script_id")){var e=document.createElement("script");e.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),e.setAttribute("async",!0),e.setAttribute("defer","defer"),e.setAttribute("id","auth2_script_id"),document.head.appendChild(e)}t()}))]).then((function(t){return t[0]}))},signIn:function(){return i(n,"signIn")},signOut:function(){return i(n,"signOut")}},s=0,a=function(t,n,e,o,i,r,s,a,c,u){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,l="function"==typeof e?e.options:e;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=d):n&&(d=s?function(){n.call(this,u(this.$root.$options.shadowRoot))}:function(t){n.call(this,a(t))}),d)if(l.functional){var f=l.render;l.render=function(t,n){return d.call(n),f(t,n)}}else{var g=l.beforeCreate;l.beforeCreate=g?[].concat(g,d):[d]}return e}({render:function(){var t=this.$createElement,n=this._self._c||t;return this.renderParams&&!this.logoutButton?n("div",{attrs:{id:this.id},on:{click:this.handleClick}}):n("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var t=this,n=this.logoutButton?"signOut":"signIn";r[n]().then((function(n){return t.onSuccess(n)})).catch((function(n){return t.onFailure(n)}))}},mounted:function(){var t=this;r.load(this.params).then((function(){t.renderParams&&!1===t.logoutButton&&window.gapi.signin2.render(t.id,t.renderParams)})).catch((function(t){console.log(t)}))}},void 0,!1,void 0,void 0,void 0),c={install:function(t,n){t.GoogleAuth=r.load(n)}};t.GoogleLogin=a,t.LoaderPlugin=c,t.default=a,Object.defineProperty(t,"__esModule",{value:!0})}))}}]);