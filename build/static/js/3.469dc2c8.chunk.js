(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{301:function(e,t,a){},302:function(e,t,a){e.exports={content__img:"ProfileInfo_content__img__AJOY5",ava__img:"ProfileInfo_ava__img__2XBUS",content__wrapper:"ProfileInfo_content__wrapper__2lFv5",name:"ProfileInfo_name__1VvQB",info:"ProfileInfo_info__3dsdE",social:"ProfileInfo_social__1Pg9N",status:"ProfileInfo_status__2G3BZ"}},303:function(e,t,a){e.exports={list:"SocialLink_list__2X1qi",img:"SocialLink_img__3KGog"}},304:function(e,t,a){e.exports={wrapper:"Analitics_wrapper__2zVLg",container:"Analitics_container__1CUpf",title:"Analitics_title__NP9zA",text:"Analitics_text__1k5AA"}},305:function(e,t,a){e.exports={box:"ProfileStatus_box__1CUgQ",status:"ProfileStatus_status__3ieSX"}},306:function(e,t,a){e.exports={wrap:"MyPosts_wrap__WP9pz",add__btn:"MyPosts_add__btn__1Q-39",title:"MyPosts_title__3q_Ko",post:"MyPosts_post__38Ltf",ava:"MyPosts_ava__3U2h_"}},307:function(e,t,a){e.exports={wrap:"Post_wrap__qu07G",img:"Post_img__38ehp",text:"Post_text__3_Vii",like__btn:"Post_like__btn__2xI7f",like:"Post_like__oViQh"}},308:function(e,t,a){"use strict";a.r(t);var s=a(40),n=a(41),i=a(45),l=a(44),o=a(0),c=a.n(o),r=a(301),m=a.n(r),u=a(302),p=a.n(u),_=a(303),f=a.n(_),g=function(){return c.a.createElement("div",{className:f.a.wrapper},c.a.createElement("ul",{className:f.a.list},c.a.createElement("li",{className:f.a.item},c.a.createElement("a",{className:f.a.link},c.a.createElement("img",{className:f.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/08.png"}))),c.a.createElement("li",{className:f.a.item},c.a.createElement("a",{className:f.a.link},c.a.createElement("img",{className:f.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/10.png"}))),c.a.createElement("li",{className:f.a.item},c.a.createElement("a",{className:f.a.link},c.a.createElement("img",{className:f.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/13.png"}))),c.a.createElement("li",{className:f.a.item},c.a.createElement("a",{className:f.a.link},c.a.createElement("img",{className:f.a.img,src:"https://iqonic.design/themes/socialv/html/images/icon/12.png"})))))},E=a(304),d=a.n(E),h=function(){return c.a.createElement("div",{className:d.a.wrapper},c.a.createElement("div",{className:d.a.container},c.a.createElement("p",{className:d.a.title},"Posts"),c.a.createElement("p",{className:d.a.text},"690")),c.a.createElement("div",{className:d.a.container},c.a.createElement("p",{className:d.a.title},"Followers"),c.a.createElement("p",{className:d.a.text},"206")),c.a.createElement("div",{className:d.a.container},c.a.createElement("p",{className:d.a.title},"Following"),c.a.createElement("p",{className:d.a.text},"100")))},N=a(43),b=a(114),v=a.n(b),P=a(137),w=a(305),k=a.n(w),S=function(e){var t=Object(o.useState)(e.status),a=Object(P.a)(t,2),s=a[0],n=a[1],i=Object(o.useState)(!1),l=Object(P.a)(i,2),r=l[0],m=l[1];Object(o.useEffect)((function(){n(e.status)}),[e.status]);return c.a.createElement("div",{className:k.a.box},!r&&c.a.createElement("div",null,c.a.createElement("p",{className:k.a.status,onDoubleClick:function(){m(!0)}},e.status||"No status")),r&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){n(e.currentTarget.value)},autoFocus:!0,value:s,onBlur:function(){m(!1),e.updateStatus(s)}})))},j=function(e){return e.profile?c.a.createElement("div",{className:p.a.content__wrapper},c.a.createElement("img",{className:p.a.content__img,src:"https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg",alt:"bg"}),c.a.createElement("div",{className:p.a.info},c.a.createElement("img",{className:p.a.ava__img,src:e.profile.photos.small?e.profile.photos.small:v.a}),c.a.createElement(S,{status:e.status,updateStatus:e.updateStatus}),c.a.createElement("p",{className:p.a.name},e.profile.fullName),c.a.createElement("p",{className:p.a.status},e.profile.lookingForAJobDescription)),c.a.createElement("div",{className:p.a.social},c.a.createElement(g,null),c.a.createElement(h,null))):c.a.createElement(N.a,null)},x=a(102),O=a(306),C=a.n(O),I=a(307),A=a.n(I),D=function(e){return c.a.createElement("div",{className:A.a.wrap},c.a.createElement("img",{className:A.a.img,src:e.image}),c.a.createElement("div",{className:A.a.text},e.message),c.a.createElement("button",{className:A.a.like__btn},"\u2764"),c.a.createElement("p",{className:A.a.like},e.likeCount))},y=a(95),q=a(136),U=a(92),z=a(69),M=Object(U.a)(100),F=c.a.memo((function(e){var t=e.postsData.map((function(e){return c.a.createElement(D,{message:e.message,likeCount:e.likeCount,key:e.id,image:e.image})}));return c.a.createElement("div",null,c.a.createElement("div",{className:C.a.post},c.a.createElement("p",{className:C.a.title},"Create Post"),c.a.createElement(B,{onSubmit:function(t){e.addNewPost(t.newPostContent)}})),c.a.createElement("div",null,t))})),B=Object(q.a)({form:"newPostContent"})((function(e){return c.a.createElement("form",{className:C.a.wrap,onSubmit:e.handleSubmit},c.a.createElement("img",{className:C.a.ava,src:"https://iqonic.design/themes/socialv/html/images/user/1.jpg"}),c.a.createElement(y.a,{component:z.b,name:"newPostContent",placeholder:"Write something here...",validate:[U.b,M]}),c.a.createElement("button",{className:C.a.add__btn},"Add post"))})),J=F,L=a(12),Q=Object(L.b)((function(e){return{postsData:e.profilePage.postsData,newPostContent:e.profilePage.newPostContent}}),(function(e){return{addNewPost:function(t){e(Object(x.a)(t))}}}))(J),V=function(e){return c.a.createElement("div",{className:m.a.profile},c.a.createElement(j,{profile:e.profile,updateStatus:e.updateStatus,status:e.status}),c.a.createElement(Q,null))},G=a(10),X=a(101),K=a(8),T=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.authorizedUserID);var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(V,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component);t.default=Object(K.d)(Object(L.b)((function(e){return console.log("mapStateToProps render from ProfileContainer"),{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserID:e.auth.userID,isAuth:e.auth.isAuth}}),{getUserProfile:x.c,getStatus:x.b,updateStatus:x.e}),G.f,X.a)(T)}}]);
//# sourceMappingURL=3.469dc2c8.chunk.js.map