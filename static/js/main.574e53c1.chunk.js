(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{11:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return O}));var c=n(3),r=(Object(c.b)("user/getCurrentUserRequest"),Object(c.b)("user/getCurrentUserSuccess"),Object(c.b)("user/getCurrentUserError"),Object(c.b)("user/registerRequest"),Object(c.b)("user/registerSuccess"),Object(c.b)("user/registerError"),Object(c.b)("user/loginRequest"),Object(c.b)("user/loginSuccess"),Object(c.b)("user/loginError"),Object(c.b)("user/logoutRequest"),Object(c.b)("user/logoutSuccess"),Object(c.b)("user/logoutError"),Object(c.b)("contacts/fetchContactsRequest")),u=Object(c.b)("contacts/fetchContactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),i=Object(c.b)("contacts/addRequest"),a=Object(c.b)("contacts/addSuccess"),s=Object(c.b)("contacts/addError"),b=Object(c.b)("contacts/deleteRequest"),j=Object(c.b)("contacts/deleteSuccess"),l=Object(c.b)("contacts/deleteError"),O=Object(c.b)("contacts/changeFilter")},30:function(t,e,n){"use strict";var c=n(35),r=n.n(c),u=n(53),o=n(22),i=n.n(o),a=n(5);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""};e.a={getCurrentUser:function(){return function(){var t=Object(u.a)(r.a.mark((function t(e,n){var c,u,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),u=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(u),e(Object(a.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:o=t.sent,e(Object(a.c)(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(a.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},register:function(t){return function(e){e(Object(a.k)()),i.a.post("/users/signup",t).then((function(t){var n=t.data;console.log(n),s(n.token),e(Object(a.l)(n))})).catch((function(t){return e(Object(a.j)(t.message))}))}},login:function(t){return function(e){e(Object(a.e)()),i.a.post("/users/login",t).then((function(t){var n=t.data;s(n.token),e(Object(a.f)(n))})).catch((function(t){return e(Object(a.d)(t.message))}))}},logout:function(t){return function(e){e(Object(a.h)()),i.a.post("/users/logout",t).then((function(t){var n=t.data;return e(Object(a.i)(n))})).catch((function(t){return e(Object(a.g)(t.message))})),b()}}}},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o})),n.d(e,"k",(function(){return i})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return O})),n.d(e,"i",(function(){return d})),n.d(e,"g",(function(){return f}));var c=n(3),r=Object(c.b)("user/getCurrentUserRequest"),u=Object(c.b)("user/getCurrentUserSuccess"),o=Object(c.b)("user/getCurrentUserError"),i=Object(c.b)("user/registerRequest"),a=Object(c.b)("user/registerSuccess"),s=Object(c.b)("user/registerError"),b=Object(c.b)("user/loginRequest"),j=Object(c.b)("user/loginSuccess"),l=Object(c.b)("user/loginError"),O=Object(c.b)("user/logoutRequest"),d=Object(c.b)("user/logoutSuccess"),f=Object(c.b)("user/logoutError")},65:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var c,r,u,o,i,a,s=n(0),b=n.n(s),j=n(19),l=n(14),O=n(51),d=n(29),f=n.n(d),h=(n(65),n(21)),g=n(3),p=n(20),x=n(52),m=n.n(x),k=n(4),v=n(8),y=n(11),S=Object(g.c)("",Object(k.a)({},y.d,(function(t,e){return e.payload}))),A=Object(g.c)([],(c={},Object(k.a)(c,y.j,(function(t,e){return e.payload})),Object(k.a)(c,y.c,(function(t,e){var n=e.payload;return[].concat(Object(h.a)(t),[n])})),Object(k.a)(c,y.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),C=Object(g.c)(!1,(r={},Object(k.a)(r,y.i,(function(){return!0})),Object(k.a)(r,y.b,(function(){return!0})),Object(k.a)(r,y.f,(function(){return!0})),Object(k.a)(r,y.j,(function(){return!1})),Object(k.a)(r,y.h,(function(){return!1})),Object(k.a)(r,y.c,(function(){return!1})),Object(k.a)(r,y.a,(function(){return!1})),Object(k.a)(r,y.g,(function(){return!1})),Object(k.a)(r,y.e,(function(){return!1})),r)),R=Object(v.c)({items:A,filter:S,loading:C}),w=n(5),E={name:null,email:null},q=Object(g.c)({},(u={},Object(k.a)(u,w.c,(function(t,e){return e.payload})),Object(k.a)(u,w.f,(function(t,e){return e.payload.user})),Object(k.a)(u,w.l,(function(t,e){return e.payload.user})),Object(k.a)(u,w.i,(function(){return E})),u)),U=Object(g.c)(null,(o={},Object(k.a)(o,w.f,(function(t,e){return e.payload.token})),Object(k.a)(o,w.l,(function(t,e){return e.payload.token})),Object(k.a)(o,w.i,(function(){return null})),o)),T=Object(g.c)(!1,(i={},Object(k.a)(i,w.c,(function(){return!0})),Object(k.a)(i,w.f,(function(){return!0})),Object(k.a)(i,w.l,(function(){return!0})),Object(k.a)(i,w.i,(function(){return!1})),Object(k.a)(i,w.a,(function(){return!1})),Object(k.a)(i,w.j,(function(){return!1})),Object(k.a)(i,w.d,(function(){return!1})),i)),z=Object(g.c)(null,(a={},Object(k.a)(a,w.d,(function(t,e){return e.payload})),Object(k.a)(a,w.j,(function(t,e){return e.payload})),Object(k.a)(a,w.g,(function(t,e){return e.payload})),Object(k.a)(a,w.a,(function(t,e){return e.payload})),a)),L=Object(v.c)({user:q,isAuthenticated:T,token:U,error:z}),F=Object(h.a)(Object(g.d)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),D={key:"auth",storage:m.a,whitelist:["token"]},I=Object(g.a)({reducer:{auth:Object(p.g)(D,L),contacts:R},middleware:F,devTools:!1}),B={store:I,persistor:Object(p.h)(I)},H=n(7),N=n(30),J=function(t){return t.auth.isAuthenticated},M=function(t){return t.auth.user.name},_=n(2),K={container:{display:"flex",justifyContent:"flex-end",alignItems:"center"},greeting:{marginRight:"20px"},button:{height:"25px",marginRight:"25px"}};var P={logout:N.a.logout},W=Object(l.b)((function(t){return{userName:M(t)}}),P)((function(t){var e=t.userName,n=t.logout;return Object(_.jsxs)("div",{style:K.container,children:[Object(_.jsxs)("p",{style:K.greeting,children:["Hello, ",e]}),Object(_.jsx)("button",{style:K.button,onClick:function(){n()},children:"Logout"})]})})),Y={container:{textAlign:"center"},link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#FFF"},activeLink:{color:"#519CD2"}};var G=function(){return Object(_.jsxs)("div",{style:Y.container,children:[Object(_.jsx)(j.b,{to:"/",exact:!0,style:Y.link,activeStyle:Y.activeLink,children:"Home"}),Object(_.jsx)(j.b,{to:"/register",exact:!0,style:Y.link,activeStyle:Y.activeLink,children:"Registration"}),Object(_.jsx)(j.b,{to:"/login",exact:!0,style:Y.link,activeStyle:Y.activeLink,children:"Log In"})]})};var Q=Object(l.b)((function(t){return{isAuthenticated:J(t)}}))((function(t){var e=t.isAuthenticated;return Object(_.jsx)(_.Fragment,{children:e?Object(_.jsx)(W,{}):Object(_.jsx)(G,{})})})),V=n(23),X=n(6),Z=Object(l.b)((function(t){return{isAuthenticated:J(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(X.a)(t,["component","isAuthenticated","redirectTo"]);return Object(_.jsx)(H.b,Object(V.a)(Object(V.a)({},r),{},{render:function(t){return n&&r.restricted?Object(_.jsx)(H.a,{to:c}):Object(_.jsx)(e,Object(V.a)({},t))}}))})),$=Object(l.b)((function(t){return{isAuthenticated:J(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(X.a)(t,["component","isAuthenticated","redirectTo"]);return Object(_.jsx)(H.b,Object(V.a)(Object(V.a)({},r),{},{render:function(t){return n?Object(_.jsx)(e,Object(V.a)({},t)):Object(_.jsx)(H.a,{to:c})}}))})),tt=n(105),et=n(107),nt=Object(tt.a)((function(t){return{root:{position:"absolute",top:0,left:0,width:"100%"}}}));function ct(){var t=nt();return Object(_.jsx)("div",{className:t.root,children:Object(_.jsx)(et.a,{})})}var rt={container:{textAlign:"center"},title:{fontSize:"40px",textAlign:"center",marginBottom:"100px"},link:{color:"orange",textDecoration:"none",margin:"10px"},developed:{fontSize:"21px",textAlign:"center",marginTop:"40px"}};var ut=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{style:rt.title,children:"Hello, here you can add your contacts online"}),Object(_.jsx)("p",{style:rt.developed,children:"Developed by Maksim Karpets"}),Object(_.jsxs)("div",{style:rt.container,children:[Object(_.jsx)("p",{children:"You can contact with me here:"}),Object(_.jsx)("a",{style:rt.link,href:"https://www.linkedin.com/in/maksim-karpets-b468151a8/",target:"_blank",children:"LinkedIn"}),Object(_.jsx)("a",{style:rt.link,href:"https://t.me/maksimuchhh",target:"_blank",children:"Telegram"})]})]})},ot=Object(s.lazy)((function(){return n.e(6).then(n.bind(null,118))})),it=Object(s.lazy)((function(){return n.e(5).then(n.bind(null,119))})),at=Object(s.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,120))})),st={getCurrentUser:N.a.getCurrentUser},bt=Object(l.b)(null,st)((function(t){var e=t.getCurrentUser;return Object(s.useEffect)((function(){e()}),[]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(s.Suspense,{fallback:Object(_.jsx)(ct,{}),children:[Object(_.jsx)(Q,{}),Object(_.jsxs)(H.d,{children:[Object(_.jsx)(Z,{path:"/",exact:!0,component:ut}),Object(_.jsx)(Z,{exact:!0,path:"/register",restricted:!0,redirectTo:"/contacts",component:ot}),Object(_.jsx)(Z,{exact:!0,path:"/login",restricted:!0,redirectTo:"/contacts",component:it}),Object(_.jsx)($,{exact:!0,path:"/contacts",redirectTo:"/login",component:at})]})]})})}));f.a.render(Object(_.jsx)(b.a.StrictMode,{children:Object(_.jsx)(l.a,{store:B.store,children:Object(_.jsx)(O.a,{loading:null,persistor:B.persistor,children:Object(_.jsx)(j.a,{children:Object(_.jsx)(bt,{})})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.574e53c1.chunk.js.map