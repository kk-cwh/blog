webpackJsonp([1],{"+skl":function(t,e){},LEWP:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("afiG")}function o(t){a("QVB2")}function r(t){a("qNdO")}function i(t){a("LEWP")}function s(t){a("hLHE")}function c(){return window.localStorage.getItem(Tt)}function l(t){return window.localStorage.setItem(Tt,t)}function d(){return window.localStorage.removeItem(Tt)}Object.defineProperty(e,"__esModule",{value:!0});var u=a("7+uW"),m={name:"app"},p=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},h=[],f={render:p,staticRenderFns:h},g=f,v=a("VU/8"),_=n,y=v(m,g,!1,_,null,null),b=y.exports,w=a("/ocq"),k={data:function(){return{show:!0,routes:wt,mianbaos:[]}},computed:{},methods:{selectSomeone:function(t){this.$router.push({name:t});var e=this.$router.currentRoute.matched;this.mianbaos=e},toLogout:function(t){var e=this;"logout"===t&&this.$store.dispatch("Logout").then(function(){e.$Message.success("Logout Success!"),e.$router.push({name:"Login"})}).catch(function(){e.$Message.error("logout Fail!")})}}},I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("transition",{attrs:{name:"slide-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-sider"},[a("div",{staticClass:"sider-logo"},[a("img",{attrs:{src:"",alt:""}})]),t._v(" "),a("Menu",{attrs:{"active-name":"1",theme:"dark",width:"auto"},on:{"on-select":t.selectSomeone}},[a("MenuItem",{attrs:{name:"Home"}},[a("Icon",{attrs:{type:"home"}}),t._v(" "),a("span",[t._v("首页")])],1),t._v(" "),t._l(t.routes,function(e,n){return a("Submenu",{key:n,attrs:{name:e.name}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:e.meta.icon}}),t._v(" "),a("span",[t._v(t._s(e.meta.name))])],1),t._v(" "),e.children&&e.children.length>0?t._l(e.children,function(e,n){return a("MenuItem",{key:n,attrs:{name:e.name}},[t._v(t._s(e.meta.name))])}):t._e()],2)})],2)],1)]),t._v(" "),a("div",{staticClass:"app-main"},[a("div",{staticClass:"main-header"},[a("Button",{attrs:{type:"text"},on:{click:function(e){t.show=!t.show}}},[a("Icon",{attrs:{type:"navicon",size:"32"}})],1),t._v(" "),a("Dropdown",{staticClass:"drop-down",on:{"on-click":t.toLogout}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n          "+t._s(this.$store.state.name)+"\n          "),a("Avatar",{staticStyle:{"background-color":"#87d068"},attrs:{icon:"person"}})],1),t._v(" "),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"userinfo"}},[t._v("个人信息")]),t._v(" "),a("DropdownItem",{attrs:{name:"logout"}},[t._v("退出登录")])],1)],1)],1),t._v(" "),a("div",{staticClass:"main-breadcrumb"},[t.mianbaos&&t.mianbaos.length>0?a("Breadcrumb",t._l(t.mianbaos,function(e,n){return a("BreadcrumbItem",{key:n,attrs:{to:e.path}},[t._v(t._s(e.meta.name))])})):t._e()],1),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"layout-content-main"},[a("router-view")],1)]),t._v(" "),a("div",{staticClass:"main-footer"},[t._v("\n      2017-2018 © iView\n    ")])])],1)},$=[],x={render:I,staticRenderFns:$},S=x,L=a("VU/8"),C=o,E=L(k,S,!1,C,"data-v-6996fae9",null),V=E.exports,F={data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(){var t=this;this.$refs.loginForm.validate(function(e){e?t.$store.dispatch("Login",t.form).then(function(){t.$store.dispatch("GetUserInfo").then(function(){t.$Message.success("Success!"),t.$router.push({name:"Home"})})}).catch(function(){t.$Message.error("Login Fail!")}):t.$Message.error("Login Fail!")})}}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleSubmit(e)}}},[a("div",{staticClass:"login-con"},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"log-in"}}),t._v("\n                欢迎登录\n            ")],1),t._v(" "),a("div",{staticClass:"form-con"},[a("Form",{ref:"loginForm",attrs:{model:t.form,rules:t.rules}},[a("FormItem",{attrs:{prop:"username"}},[a("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[a("Icon",{attrs:{size:16,type:"email"}})],1)])],1),t._v(" "),a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[a("Icon",{attrs:{size:14,type:"locked"}})],1)])],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary",long:""},on:{click:t.handleSubmit}},[t._v("登录")])],1)],1)],1)])],1)])},M=[],T={render:A,staticRenderFns:M},R=T,U=a("VU/8"),B=r,P=U(F,R,!1,B,"data-v-a68a8688",null),q=P.exports,N=a("OS1Z"),O=(a("pw1w"),{components:{mavonEditor:N.mavonEditor},data:function(){return{title:"",mdString:"",content:"",type_id:"",types:[],tags:[],tagIds:[]}},mounted:function(){var t=this;this.$store.dispatch("TypeList").then(function(e){var a=e.data;t.types=a.types?a.types:[],t.tags=a.tags?a.tags:[]}).catch(function(e){console.log(e),t.$Message.error("error")})},methods:{AddArticle:function(){var t=this,e=this.title,a=this.content,n=this.type_id,o=this.tagIds,r=this.mdString;if(!e||!a||!n)return void this.$Message.error("param error");var i={title:e,content:a,tagIds:o,type_id:n,content_md:r};this.$store.dispatch("AddArticle",i).then(function(e){t.$Message.success("发布成功"),t.$router.push({name:"ArticleList"})}).catch(function(e){console.log(e),t.$Message.error("error")})},getChang:function(t,e){this.content=e}}}),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor-content"},[a("Form",{attrs:{"label-width":48}},[a("FormItem",{attrs:{label:"标题 :"}},[a("Input",{staticStyle:{width:"280px"},attrs:{placeholder:"输入文章标题.."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"类别 :"}},[a("Select",{staticStyle:{width:"120px"},model:{value:t.type_id,callback:function(e){t.type_id=e},expression:"type_id"}},t._l(t.types,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("FormItem",{attrs:{label:"标签 :"}},[a("CheckboxGroup",{model:{value:t.tagIds,callback:function(e){t.tagIds=e},expression:"tagIds"}},t._l(t.tags,function(e){return a("Checkbox",{key:e.id+"00",attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),a("mavon-editor",{staticStyle:{"margin-top":"30px"},attrs:{placeholder:"这里是文章内容.."},on:{change:t.getChang},model:{value:t.mdString,callback:function(e){t.mdString=e},expression:"mdString"}}),t._v(" "),a("br"),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.AddArticle}},[t._v("发布文章")])],1)},G=[],D={render:z,staticRenderFns:G},H=D,K=a("VU/8"),j=i,W=K(O,H,!1,j,"data-v-a67ce098",null),Q=W.exports,Y={components:{mavonEditor:N.mavonEditor},data:function(){var t=this;return{id:"",title:"",content_md:"",content:"",type_id:"",types:[],tags:[],tagIds:[],showList:!0,loading:!1,total:0,columns:[{title:"编号",key:"id"},{title:"文章标题",key:"title"},{title:"类别",key:"type"},{title:"是否显示",key:"is_show"},{title:"创建时间",key:"created_at"},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(a.index)}}},"查看"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.edit(a.index)}}},"编辑")])}}],data:[]}},mounted:function(){var t=this;this.toLoading(),this.$store.dispatch("TypeList").then(function(e){var a=e.data;t.types=a.types?a.types:[],t.tags=a.tags?a.tags:[]}).catch(function(e){console.log(e),t.$Message.error("error")})},methods:{show:function(t){var e=this.data[t].id;window.open("articles/"+e)},edit:function(t){var e=this,a=this.data[t].id,n={id:a};this.showList=!1,this.$store.dispatch("GetArticleDetail",n).then(function(t){var a=t.data.article;e.id=a.id,e.title=a.title,e.type_id=a.type_id,e.content_md=a.content_md,e.tagIds=a.tags.map(function(t){return t.id})})},changPage:function(t){var e=this,a={page:t};this.$store.dispatch("ArticleList",a).then(function(t){e.loading=!1;var a=t.data.articles;e.total=a.total;for(var n=[],o=0;o<a.list.length;o++)n[o]={id:a.list[o].id,title:a.list[o].title,type:a.list[o].type.name,is_show:a.list[o].is_show?"是":"否",created_at:a.list[o].created_at};e.data=n})},toLoading:function(){var t=this;this.loading=!0;var e={page:1};this.$store.dispatch("ArticleList",e).then(function(e){t.loading=!1;for(var a=e.data.articles,n=[],o=0;o<a.list.length;o++)n[o]={id:a.list[o].id,title:a.list[o].title,type:a.list[o].type.name,is_show:a.list[o].is_show?"是":"否",created_at:a.list[o].created_at};t.data=n,t.total=a.total})},updateArticle:function(){var t=this,e=this.id,a=this.title,n=this.content,o=this.type_id,r=this.tagIds,i=this.content_md;if(!a||!n||!o)return void this.$Message.error("param error");var s={id:e,title:a,content:n,tagIds:r,type_id:o,content_md:i};this.$store.dispatch("UpdateArticle",s).then(function(e){t.$Message.success("修改成功"),t.$router.push({name:"ArticleList"}),t.showList=!0,t.toLoading()}).catch(function(e){console.log(e),t.$Message.error("error")})},getChang:function(t,e){this.content=e}}},J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showList?a("div",[a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.toLoading}},[t.loading?a("span",[t._v("Loading...")]):a("span",[t._v("查询")])]),t._v(" "),a("br"),a("br"),t._v(" "),a("Table",{attrs:{border:"",columns:t.columns,data:t.data}}),t._v(" "),a("Page",{staticClass:"page",attrs:{total:t.total,"show-total":""},on:{"on-change":t.changPage}})],1):a("div",{staticClass:"editor-content"},[a("Form",{attrs:{"label-width":48}},[a("FormItem",{attrs:{label:"标题 :"}},[a("Input",{staticStyle:{width:"280px"},attrs:{placeholder:"输入文章标题.."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"类别 :"}},[a("Select",{staticStyle:{width:"120px"},model:{value:t.type_id,callback:function(e){t.type_id=e},expression:"type_id"}},t._l(t.types,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("FormItem",{attrs:{label:"标签 :"}},[a("CheckboxGroup",{model:{value:t.tagIds,callback:function(e){t.tagIds=e},expression:"tagIds"}},t._l(t.tags,function(e){return a("Checkbox",{key:e.id+"00",attrs:{label:e.id}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),a("mavon-editor",{staticStyle:{"margin-top":"30px"},attrs:{placeholder:"这里是文章内容.."},on:{change:t.getChang},model:{value:t.content_md,callback:function(e){t.content_md=e},expression:"content_md"}}),t._v(" "),a("br"),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.updateArticle}},[t._v("更新文章")])],1)},Z=[],X={render:J,staticRenderFns:Z},tt=X,et=a("VU/8"),at=et(Y,tt,!1,null,null,null),nt=at.exports,ot={data:function(){var t=this;return{loading:!1,total:0,columns:[{title:"姓名",key:"name",render:function(t,e){return t("div",[t("Icon",{props:{type:"person"}}),t("strong",e.row.name)])}},{title:"邮箱",key:"email"},{title:"是否管理员",key:"is_admin"},{title:"个人简介",key:"desc"},{title:"添加时间",key:"created_at"},{title:"操作",key:"action",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(a.index)}}},"查看"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(a.index)}}},"删除")])}}],data:[]}},mounted:function(){this.toLoading()},methods:{show:function(t){this.$Modal.info({title:"用户信息",content:"Name："+this.data[t].name+"<br>Email："+this.data[t].email+"<br>Date："+this.data[t].date})},remove:function(t){this.data.splice(t,1)},changPage:function(t){var e=this,a={page:t};this.$store.dispatch("UserList",a).then(function(t){e.loading=!1;var a=t.data.users;e.data=a.list,e.total=a.total})},toLoading:function(){var t=this;this.loading=!0;var e={page:1};this.$store.dispatch("UserList",e).then(function(e){t.loading=!1;var a=e.data.users;t.data=a.list,t.total=a.total})}}},rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.toLoading}},[t.loading?a("span",[t._v("Loading...")]):a("span",[t._v("查询")])]),t._v(" "),a("br"),a("br"),t._v(" "),a("Table",{attrs:{border:"",columns:t.columns,data:t.data}}),t._v(" "),a("Page",{staticClass:"page",attrs:{total:t.total,"show-total":""},on:{"on-change":t.changPage}})],1)},it=[],st={render:rt,staticRenderFns:it},ct=st,lt=a("VU/8"),dt=s,ut=lt(ot,ct,!1,dt,"data-v-639e7330",null),mt=ut.exports,pt={data:function(){return{formValidate:{name:"",password:"",email:"",city:"",gender:"",interest:[],date:"",desc:""},ruleValidate:{email:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],password:[{required:!0,message:"password cannot be empty",trigger:"blur"}],name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Choose at least one hobby",trigger:"change"},{type:"array",max:2,message:"Choose two hobbies at best",trigger:"change"}],date:[{required:!0,type:"date",message:"Please select the birthday ",trigger:"change"}],desc:[{required:!1,message:"Please enter a personal introduction",trigger:"blur"},{type:"string",min:5,message:"Introduce no less than 5 words",trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.$store.dispatch("AddUser",e.formValidate).then(function(t){t.data&&(e.$Message.success("Success!"),e.formValidate={name:"",password:"",email:"",city:"",gender:"",interest:[],date:"",desc:""},e.$router.push({name:"UserList"}))}):e.$Message.error("Fail!")})},handleReset:function(t){this.$refs[t].resetFields()}}},ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{ref:"formValidate",staticStyle:{width:"400px"},attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("Input",{attrs:{placeholder:"Enter your e-mail"},model:{value:t.formValidate.email,callback:function(e){t.$set(t.formValidate,"email",e)},expression:"formValidate.email"}})],1),t._v(" "),a("FormItem",{attrs:{label:"密码",prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"Enter your password"},model:{value:t.formValidate.password,callback:function(e){t.$set(t.formValidate,"password",e)},expression:"formValidate.password"}})],1),t._v(" "),a("FormItem",{attrs:{label:"姓名",prop:"name"}},[a("Input",{attrs:{placeholder:"Enter your name"},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"生日"}},[a("Row",[a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{prop:"date"}},[a("DatePicker",{attrs:{type:"date",placeholder:"Select date"},model:{value:t.formValidate.date,callback:function(e){t.$set(t.formValidate,"date",e)},expression:"formValidate.date"}})],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"性别",prop:"gender"}},[a("RadioGroup",{model:{value:t.formValidate.gender,callback:function(e){t.$set(t.formValidate,"gender",e)},expression:"formValidate.gender"}},[a("Radio",{attrs:{label:"male"}},[t._v("Male")]),t._v(" "),a("Radio",{attrs:{label:"female"}},[t._v("Female")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"兴趣爱好",prop:"interest"}},[a("CheckboxGroup",{model:{value:t.formValidate.interest,callback:function(e){t.$set(t.formValidate,"interest",e)},expression:"formValidate.interest"}},[a("Checkbox",{attrs:{label:"Eat"}}),t._v(" "),a("Checkbox",{attrs:{label:"Sleep"}}),t._v(" "),a("Checkbox",{attrs:{label:"Run"}}),t._v(" "),a("Checkbox",{attrs:{label:"Movie"}})],1)],1),t._v(" "),a("FormItem",{attrs:{label:"简要描述",prop:"desc"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:t.formValidate.desc,callback:function(e){t.$set(t.formValidate,"desc",e)},expression:"formValidate.desc"}})],1),t._v(" "),a("FormItem",[a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:function(e){t.handleReset("formValidate")}}},[t._v("重置")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)},ft=[],gt={render:ht,staticRenderFns:ft},vt=gt,_t=a("VU/8"),yt=_t(pt,vt,!1,null,null,null),bt=yt.exports;u.default.use(w.a);var wt=[{path:"/article",component:V,name:"Article",meta:{name:"文章管理",icon:"document-text"},children:[{path:"list",component:nt,name:"ArticleList",meta:{name:"文章列表"}},{path:"add",component:Q,name:"Markdown",meta:{name:"发布文章"}}]},{path:"/user",component:V,name:"User",meta:{name:"用户管理",icon:"person"},children:[{path:"list",component:mt,name:"UserList",meta:{name:"用户列表"}},{path:"add",component:bt,name:"UserForm",meta:{name:"添加用户"}}]}],kt={path:"/",component:q,alias:"/login",name:"Login",meta:{name:"登录"}},It={path:"/home",component:V,name:"Home",meta:{name:"首页"}},$t=[kt,It].concat(wt),xt=new w.a({routes:$t});xt.beforeEach(function(t,e,a){console.log(t),a()});var St=xt,Lt=a("//Fk"),Ct=a.n(Lt),Et=a("NYxO"),Vt=a("BTaQ"),Ft=a.n(Vt),At=a("mtWM"),Mt=a.n(At),Tt="auth_token",Rt=Mt.a.create({baseURL:"http://zhang.app:9001/api",timeout:5e3});Rt.interceptors.request.use(function(t){return c()&&(t.headers.Authorization=c()),t.headers["Content-Type"]="application/json",t},function(t){return Ct.a.reject(t)}),Rt.interceptors.response.use(function(t){return t},function(t){return t&&t.response&&(401===t.response.status&&Vt.Message.error({content:" 401 not auth",duration:10}),404===t.response.status&&Vt.Message.error({content:" 404 not found",duration:10}),500===t.response.status&&Vt.Message.error({content:" 500 system error ",duration:10})),Ct.a.reject(t)});var Ut=Rt;u.default.use(Et.a);var Bt=new Et.a.Store({state:{token_type:"",access_token:"",token:"",name:"",email:""},mutations:{SET_TOKEN_TYPE:function(t,e){t.token_type=e},SET_ACCESS_TOKEN:function(t,e){t.access_token=e},SET_TOKEN:function(t,e){t.token=e,l(e)},CLEAR_STATE:function(t){t.token_type="",t.access_token="",t.token="",t.name="",t.email=""}},actions:{Login:function(t,e){var a=t.commit;return new Ct.a(function(t,n){Ut({url:"/api/login",method:"post",data:e}).then(function(e){if(e.data){var n=e.data;a("SET_TOKEN_TYPE",n.token_type),a("SET_ACCESS_TOKEN",n.access_token),a("SET_TOKEN",n.token_type+" "+n.access_token),t()}}).catch(function(t){n(t)})})},GetUserInfo:function(t){var e=this;t.commit;return new Ct.a(function(t,a){Ut({url:"/api/userinfo",method:"get"}).then(function(a){if(a.data){var n=a.data.data,o=n.user;e.state.name=o.name,e.state.email=o.email,t()}}).catch(function(t){a(t)})})},Logout:function(t){var e=this,a=t.commit;return new Ct.a(function(t,n){Ut({url:"/api/logout",method:"post"}).then(function(n){n.data&&(d(),a("CLEAR_STATE"),console.log(e.state),t())}).catch(function(t){n(t)})})},UserList:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/users?page="+e.page,method:"get"}).then(function(e){e.data&&t(e.data)}).catch(function(t){a(t)})})},AddUser:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/users",method:"post",data:e}).then(function(e){e.data&&t(e.data)}).catch(function(t){a(t)})})},TypeList:function(t){t.commit;return new Ct.a(function(t,e){Ut({url:"/api/types",method:"get"}).then(function(e){e.data&&t(e.data)}).catch(function(t){e(t)})})},AddArticle:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/articles",method:"post",data:e}).then(function(e){e.data&&t(e)}).catch(function(t){a(t)})})},UpdateArticle:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/articles/"+e.id,method:"put",data:e}).then(function(e){e.data&&t(e)}).catch(function(t){a(t)})})},GetArticleDetail:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/articles/"+e.id,method:"get"}).then(function(e){if(e.data){var a=e.data;t(a)}}).catch(function(t){a(t)})})},ArticleList:function(t,e){t.commit;return new Ct.a(function(t,a){Ut({url:"/api/articles?page="+e.page,method:"get"}).then(function(e){e.data&&t(e.data)}).catch(function(t){a(t)})})}}}),Pt=Bt;a("+skl");u.default.config.productionTip=!1,u.default.use(Ft.a),new u.default({el:"#app",router:St,store:Pt,template:"<App/>",components:{App:b}})},QVB2:function(t,e){},afiG:function(t,e){},hLHE:function(t,e){},pw1w:function(t,e){},qNdO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.js.map