(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(17),o=a.n(s),r=(a(51),a(12)),i=(a(52),a(53),a(92)),l=a(22),u=l.a.initializeApp({apiKey:"AIzaSyDHhCNZk9k2hNwsPMTbu2Xh_MAjdyBGOeM",authDomain:"instagram-clone-react-32de4.firebaseapp.com",projectId:"instagram-clone-react-32de4",storageBucket:"instagram-clone-react-32de4.appspot.com",messagingSenderId:"780702302322",appId:"1:780702302322:web:33e2584a4bf917013302eb",measurementId:"G-CYHSBQGC06"}).firestore(),p=l.a.auth(),d=l.a.storage(),j=a(5);var m=function(e){var t=e.postId,a=e.user,c=e.username,s=e.caption,o=e.imageUrl,p=Object(n.useState)([]),d=Object(r.a)(p,2),m=d[0],b=d[1],g=Object(n.useState)(""),h=Object(r.a)(g,2),f=h[0],O=h[1];return Object(n.useEffect)((function(){var e;return t&&(e=u.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__header",children:[Object(j.jsx)(i.a,{className:"post__avatar",alt:"Kaavya",src:"/static/images/avatar/1.jpg"}),Object(j.jsx)("h3",{children:c})]}),Object(j.jsx)("img",{className:"post__image",src:o,alt:""}),Object(j.jsxs)("h4",{className:"post__text",children:[Object(j.jsx)("strong",{children:c})," ",s]}),Object(j.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:e.username})," ",e.text]})}))}),a&&Object(j.jsxs)("form",{className:"post__commentBox",children:[Object(j.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment",value:f,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{className:"post__button",disabled:!f,type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(t).collection("comments").add({text:f,username:a.displayName,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Post"})]})]})},b=a(88),g=a(89),h=a(91),f=a(90);a(62);var O=function(e){var t=e.username,a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(0),p=Object(r.a)(i,2),m=p[0],b=p[1],g=Object(n.useState)(""),h=Object(r.a)(g,2),O=h[0],x=h[1];return Object(j.jsxs)("div",{className:"imageupload",children:[Object(j.jsx)("progress",{className:"imageupload__progress",value:m,max:"100"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter a caption",onChange:function(e){return x(e.target.value)},value:O}),Object(j.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&o(e.target.files[0])}}),Object(j.jsx)(f.a,{onClick:function(){d.ref("images/".concat(s.name)).put(s).on("state_changed",(function(e){var t=Math.round(e.bytestransferred/e.totalbytes*100);b(t)}),(function(e){console.log(e),alert(e.messsage)}),(function(){d.ref("images").child(s.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:l.a.firestore.FieldValue.serverTimestamp(),caption:O,imageUrl:e,username:t}),b(0),x(""),o(null)}))}))},children:"Upload"})]})},x=a(42);function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var _=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var y=function(){var e=_(),t=Object(n.useState)(v),a=Object(r.a)(t,1)[0],c=Object(n.useState)([]),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),d=Object(r.a)(l,2),b=d[0],y=d[1],N=Object(n.useState)(!1),S=Object(r.a)(N,2),w=S[0],C=S[1],I=Object(n.useState)(""),k=Object(r.a)(I,2),A=k[0],U=k[1],B=Object(n.useState)(""),D=Object(r.a)(B,2),E=D[0],F=D[1],L=Object(n.useState)(""),P=Object(r.a)(L,2),T=P[0],M=P[1],G=Object(n.useState)(null),W=Object(r.a)(G,2),z=W[0],H=W[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){e?(console.log(e),H(e)):H(null)}));return function(){e()}}),[z,A]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(g.a,{open:b,onClose:function(){return y(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signup",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(h.a,{placeholder:"username",type:"text",value:A,onChange:function(e){return U(e.target.value)}}),Object(j.jsx)(h.a,{placeholder:"email",type:"text",value:T,onChange:function(e){return M(e.target.value)}}),Object(j.jsx)(h.a,{placeholder:"password",type:"password",value:E,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)(f.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(T,E).then((function(e){return e.user.updateProfile({displayName:A})})).catch((function(e){return alert(e.message)})),y(!1)},children:"Sign Up"})]})})}),Object(j.jsx)(g.a,{open:w,onClose:function(){return C(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signup",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(h.a,{placeholder:"email",type:"text",value:T,onChange:function(e){return M(e.target.value)}}),Object(j.jsx)(h.a,{placeholder:"password",type:"password",value:E,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)(f.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(T,E).catch((function(e){return alert(e.message)})),C(!1)},children:"Sign In"})]})})}),Object(j.jsxs)("div",{className:"app__header",children:[Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),z?Object(j.jsx)(f.a,{onClick:function(){return p.signOut()},children:"Logout"}):Object(j.jsxs)("div",{className:"app__loginContainer",children:[Object(j.jsx)(f.a,{onClick:function(){return C(!0)},children:"Sign In"}),Object(j.jsx)(f.a,{onClick:function(){return y(!0)},children:"Sign Up"})]})]}),Object(j.jsxs)("div",{className:"app__posts",children:[Object(j.jsx)("div",{className:"app__postsLeft",children:o.map((function(e){var t=e.id,a=e.post;return Object(j.jsx)(m,{postId:t,user:z,username:a.username,caption:a.caption,imageUrl:a.imageUrl},t)}))}),Object(j.jsx)("div",{className:"app__postsLeft",children:Object(j.jsx)(x.a,{url:"https://instagr.am/p/Zw9o4/",clientAccessToken:"123|456",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}})})]}),(null===z||void 0===z?void 0:z.displayName)?Object(j.jsx)(O,{username:z.displayName}):Object(j.jsx)("h3",{children:"Sorry you need to SignIn to upload"})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.315cb0c0.chunk.js.map