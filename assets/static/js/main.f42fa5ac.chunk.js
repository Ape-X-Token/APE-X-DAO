(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1146:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),s=n.n(c),i=n(542),o=n(107),l=(n(563),n(5)),d=n.n(l),u=n(136),j=n(105),p=n(109),h=n(1187),b=n(1180),x=n(526),f=n.n(x),O=n(529),g=n.n(O),m=n(530),v=n.n(m),w=n(264).api;function y(){return v.a.create({baseURL:w.baseURL,timeout:3e5,headers:{Authorization:"Bearer "+w.token}})}function C(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(),e.prev=1,e.next=4,n.get(t);case 4:return e.abrupt("return",e.sent);case 7:if(e.prev=7,e.t0=e.catch(1),!e.t0.response){e.next=13;break}throw new Error(e.t0.response.data.message);case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function N(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y(),e.prev=1,e.next=4,r.post(t,n);case 4:return e.abrupt("return",e.sent);case 7:if(e.prev=7,e.t0=e.catch(1),!e.t0.response){e.next=13;break}throw new Error(e.t0.response.data.message);case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var S=n(27);var P=function(e){var t=e.address,n=null===t?"":t.substr(0,6)+"..."+t.substr(-4,4);return Object(S.jsx)(r.Fragment,{children:Object(S.jsx)("span",{title:t,children:n})})},A=n(203),B=n(190),D=n(1186),T=n(1188),F=n(1148),I=n(1183),z=n(1184),L=n(1185),R=n(1189),H=n(1192),V=n(1177),W=n(1190),G=n(204),X=n.n(G),M=n(531),U=(n(847),n(1182)),J=n(1179),Y=n(1178),q=n(1181),_=n(1191),K=n(541),Q=n.n(K),Z=n(65),$=n(540),ee=n(264).api,te=n(1145).BigNumber;function ne(e){return Object(S.jsx)(W.a,Object(B.a)({elevation:6,variant:"filled"},e))}var re=Object(V.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},box:{borderRadius:"25px",textAlign:"center",background:"var(--dark)",color:"var(--light)",border:"2px solid white"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandSmall:{transform:"rotate(0deg)",marginLeft:"0",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},title:{color:"var(--primary)",fontWeight:"600",fontSize:"13pt",margin:"auto",marginLeft:"0",marginTop:"0",textAlign:"left",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},pending:{marginLeft:"5px",color:"white",padding:"5px",borderRadius:"3px",height:"20px",lineHeight:"20px"},voted:{color:"var(--dark)",background:"rgba(255,255,255, 0.2)"},inactive:{color:"var(--dark)",background:"rgba(255,255,255, 0.2)"},for:{color:"white",background:"var(--for)"},against:{color:"white",background:"var(--against)"},cardContent:{backgroundSize:"50px 50px",backgroundImage:"url('vote.png')",backgroundPosition:"top right",backgroundRepeat:"no-repeat"},content:{border:"none",margin:"none",padding:"none",width:"100%",height:"100px",overflowY:"auto",textAlign:"left",fontSize:"0.8em",lineHeight:"1.25em"}}}));var ae=function(e){var t=e.address,n=e.proposal,c=e.refresh,s=re(),i=a.a.useState(!1),o=Object(j.a)(i,2),l=o[0],h=o[1],x=a.a.useState(!1),f=Object(j.a)(x,2),O=f[0],g=f[1],m=a.a.useState(!1),v=Object(j.a)(m,2),w=v[0],y=v[1],k=a.a.useState(""),N=Object(j.a)(k,2),E=N[0],B=N[1],D=function(){var e=Object(u.a)(d.a.mark((function e(r,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C("".concat(ee.proposals,"/vote?proposalId=").concat(n.id,"&support=").concat(r,"&address=").concat(t));case 3:g(!0),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message),B(e.t0.message),y(!0);case 11:return e.prev=11,c(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,6,11,14]])})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){g(!1)},F=function(){y(!1)},I=te.from(n.for).add(te.from(n.against));return Object(S.jsxs)(p.Box,{className:s.box,heading:Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)("div",{className:s.title,children:n.title}),Object(S.jsx)("div",{style:{whiteSpace:"nowrap"},children:Object(S.jsxs)(S.Fragment,{children:["Status:","PENDING"===n.state?Object(S.jsx)("span",{className:s.pending,children:"Pending"}):Object(S.jsx)("span",{className:Object(Z.a)(s.inactive,"ACCEPTED"===n.state?s.for:s.against),children:n.state})]})})]}),children:[Object(S.jsxs)(Y.a,{className:"PENDING"===n.state?s.cardContent:null,style:{padding:"0 0 1em 0"},children:["PENDING"===n.state&&Object(S.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:Object(S.jsxs)("div",{style:{flexBasis:"50%",fontSize:"7pt",alignContent:"center",marginBottom:"2em"},children:[" ",Object(S.jsx)(p.Timer,{theme:{surfaceContent:"red"},style:{margin:"auto"},end:new Date(n.expiration)})]})}),Object(S.jsxs)("div",{className:s.content,children:[Object(S.jsx)("h4",{style:{lineHeight:"1.5em"},children:n.title}),n.content]}),Object(S.jsx)($.Distribution,{heading:"Votes",items:[{item:"".concat(Object(G.round)(te.from(n.for)/1e9,2).toString(),"B For"),percentage:I>0?Object(G.round)(te.from(n.for)/I*100):0},{item:"".concat(Object(G.round)(te.from(n.against)/1e9,2).toString(),"B Against"),percentage:I>0?Object(G.round)(te.from(n.against)/I*100):0}],colors:["var(--for)","var(--against)"]})]}),"PENDING"===n.state?n.voters.includes(t.toLowerCase())?Object(S.jsx)(p.Button,{size:"mini",className:s.voted,style:{width:"100%",padding:"2px",margin:"1.6%",border:"none"},disabled:!0,children:"Voted"}):Object(S.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(S.jsx)("div",{style:{flexBasis:"48%",margin:"1%"},children:Object(S.jsx)(p.Button,{className:Object(Z.a)(s.for),size:"mini",style:{width:"100%",padding:"2px",margin:"2px",border:"none"},onClick:function(){return D(!0)},children:"For"})}),Object(S.jsx)("div",{style:{flexBasis:"48%",margin:"1%"},children:Object(S.jsx)(p.Button,{className:Object(Z.a)(s.against),size:"mini",style:{width:"100%",padding:"2px",margin:"2px",border:"none"},onClick:function(){return D(!1)},children:"Against"})})]}):Object(S.jsx)(p.Button,{size:"mini",className:s.inactive,style:{width:"100%",padding:"2px",margin:"1.6%",border:"none"},disabled:!0,children:"Inactive"}),Object(S.jsx)(H.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:O,autoHideDuration:6e3,onClose:T,children:Object(S.jsx)(ne,{onClose:T,severity:"success",children:"Successfully voted!"})}),Object(S.jsx)(H.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:w,autoHideDuration:6e3,onClose:F,children:Object(S.jsxs)(ne,{onClose:F,severity:"error",children:["Error: ",E]})}),Object(S.jsxs)(J.a,{className:"dropdown",style:{padding:"0"},children:[Object(S.jsx)("div",{className:Object(Z.a)(s.expand),children:Object(S.jsxs)(b.a,{variant:"caption",children:["View Voters (",n.voters.length,")"]})}),Object(S.jsx)(_.a,{className:Object(Z.a)(s.expandSmall,Object(A.a)({},s.expandOpen,l)),onClick:function(){h(!l)},"aria-expanded":l,"aria-label":"show more",children:Object(S.jsx)(Q.a,{})})]}),Object(S.jsx)(q.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(S.jsx)(Y.a,{style:{padding:"0px",textAlign:"left",maxHeight:"120px",overflowY:"auto"},children:Object(S.jsx)(b.a,{variant:"caption",children:n.voters.length>0?n.voters.map((function(e,t){return Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)(P,{address:e}),Object(S.jsx)(U.a,{})]},t)})):Object(S.jsx)(p.Text,{children:"No voters yet"})})})})]})},ce=n(264).api;function se(e){return Object(S.jsx)(W.a,Object(B.a)({elevation:6,variant:"filled"},e))}var ie=Object(V.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",outline:"none",width:"auto",borderRadius:"25px"},paper:{border:"2px solid white",backgroundColor:"var(--dark)",color:"var(--primary)",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none",minWidth:"300px",borderRadius:"25px"}}}));function oe(e){var t=e.address,n=e.saveProposal,a=ie(),c=Object(r.useState)({author:t,title:"",content:""}),s=Object(j.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(!1),d=Object(j.a)(l,2),u=d[0],h=d[1],x=function(){h(!1),o({author:t,title:"",content:""})},f=function(e,t){o(Object(B.a)(Object(B.a)({},i),{},Object(A.a)({},"".concat(e),t.target.value)))};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.Button,{className:"button primary",onClick:function(){return h(!0)},children:"+ New Proposal"}),Object(S.jsx)(R.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:u,onClose:x,closeAfterTransition:!0,BackdropComponent:D.a,BackdropProps:{timeout:500},children:Object(S.jsx)(F.a,{in:u,children:Object(S.jsx)("div",{className:a.paper,children:Object(S.jsxs)("div",{className:"Proposals",children:[Object(S.jsx)(b.a,{variant:"h6",className:"classes.header",gutterBottom:!0,children:"Create New Proposal:"}),Object(S.jsxs)("div",{className:"New-Proposal",noValidate:!0,autoComplete:"off",children:[Object(S.jsx)(p.TextInput,{style:{width:"95%",marginRight:"10px"},placeholder:"Title",value:i.title,onChange:function(e){f("title",e)}}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(p.TextInput,{multiline:!0,style:{width:"95%",marginRight:"10px",height:"auto"},placeholder:"Content",value:i.content,onChange:function(e){f("content",e)}}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(p.Button,{className:"button",onClick:function(){n(i),x()},children:"Create"})]})]})})})})]})}var le=function(e){var t=Object(r.useState)(0),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(0),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){var t=function(){c(e.current.offsetWidth),l(e.current.offsetHeight)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),{width:a,height:o}},de=function(e){var t=e.address,n=(ie(),Object(r.useRef)(null)),a=le(n),c=a.width,s=(a.height,Object(r.useState)(0)),i=Object(j.a)(s,2),o=i[0],l=i[1],h=Object(r.useState)(null),x=Object(j.a)(h,2),f=x[0],O=x[1],g=Object(r.useState)({author:t,title:"",content:""}),m=Object(j.a)(g,2),v=(m[0],m[1],Object(r.useState)([])),w=Object(j.a)(v,2),y=w[0],k=w[1],E=Object(r.useState)([]),P=Object(j.a)(E,2),A=P[0],B=P[1],D=Object(r.useState)(0),F=Object(j.a)(D,2),R=F[0],V=F[1],W=Object(r.useState)(!1),G=Object(j.a)(W,2),U=(G[0],G[1]),J=Object(r.useState)(!1),Y=Object(j.a)(J,2),q=Y[0],_=Y[1],K=Object(r.useState)(!1),Q=Object(j.a)(K,2),Z=Q[0],$=Q[1],ee=Object(r.useState)("PENDING"),te=Object(j.a)(ee,2),ne=te[0],re=te[1];Object(r.useEffect)((function(){pe(),l(n.current?n.current.offsetWidth:0)}),[]),Object(r.useEffect)((function(){B(y.filter((function(e){return e.state==ne})))}),[y,ne]);var de=function(){_(!1)},ue=function(){$(!1)},je=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R>0?R:1,n=X.a.range(t).map(function(){var e=Object(u.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("".concat(ce.proposals,"?page=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.proposals);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(n);case 4:n=(n=e.sent).reduce((function(e,t){return e.concat(t)})),k(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C("".concat(ce.proposals,"?page=").concat(R));case 3:t=e.sent,0===(n=t.data).proposals.length?U(!1):(U(!0),k(y.concat(n.proposals)),V(R+1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),O(e.t0.message),$(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("".concat(ce.proposals),t);case 3:re("PENDING"),_(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),O(e.t0.message),$(!0);case 11:return e.prev=11,je(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"Proposals",ref:n,children:[Object(S.jsxs)(I.a,{container:!0,justifyContent:"flex-end",alignItems:"center",children:[Object(S.jsx)(T.a,{style:{marginLeft:"1em"},children:Object(S.jsx)(oe,{address:t,saveProposal:he})}),Object(S.jsx)(T.a,{style:{marginLeft:"1em"},children:Object(S.jsxs)(p.ContextMenu,{children:[Object(S.jsx)(p.ContextMenuItem,{onClick:function(){re("PENDING")},children:"Pending"}),Object(S.jsx)(p.ContextMenuItem,{onClick:function(){re("ACCEPTED")},children:"Accepted"}),Object(S.jsx)(p.ContextMenuItem,{onClick:function(){re("REJECTED")},children:"Rejected"})]})})]}),Object(S.jsxs)(b.a,{variant:"h5",style:{textAlign:"center",textTransform:"capitalize",margin:"1em 0"},children:[ne.toLowerCase()," Proposals"]}),Object(S.jsx)(M.a,{dataLength:A.length,next:pe,hasMore:!0,style:{height:"default",overflow:"hidden"},children:Object(S.jsx)(z.a,{rowHeight:"auto",style:{overflow:"hidden"},cols:function(){var e=c;return 0===c&&(e=o),e>1920?5:e>1280?4:e>960?3:e>600?2:1}(),children:A.map((function(e,n){return Object(S.jsx)(L.a,{style:{padding:"10px",overflow:"visible"},cols:1,children:Object(S.jsx)(ae,{address:t,proposal:e,editing:!1,refresh:je},n)},n)}))})}),0==A.length&&Object(S.jsx)(b.a,{style:{color:"#999",textAlign:"center"},gutterBottom:!0,children:"No proposals."}),Object(S.jsx)(H.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:q,autoHideDuration:6e3,onClose:de,children:Object(S.jsx)(se,{onClose:de,severity:"success",children:"Successfully created proposal!"})}),Object(S.jsx)(H.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:Z,autoHideDuration:6e3,onClose:ue,children:Object(S.jsxs)(se,{onClose:ue,severity:"error",children:["Error: ",f]})})]})},ue=n.p+"static/media/ape.540af461.png";var je=function(e){var t=e.width,n=e.height;return Object(S.jsx)("img",{src:ue,width:t,height:n})},pe=n(264).api,he=new g.a({network:43114,cacheProvider:!0,providerOptions:{}});var be=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=4;break}pe.token=null,e.next=8;break;case 4:return e.next=6,C("".concat(pe.login,"?address=").concat(t));case 6:n=e.sent,pe.token=n.data.token;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){he.cachedProvider&&he.connect().then((function(e){s(e)}))}),[]);var s=function(e){var t=new f.a(e);t.eth.net.isListening()&&t.eth.getAccounts().then((function(e){c(e[0]).then((function(){a(e[0])}))})),e.on("accountsChanged",(function(e){e[0]?c(e[0]).then((function(){a(e[0])})):(c(null),a(null))}))};return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(p.ToastHub,{children:Object(S.jsxs)(h.a,{children:[Object(S.jsxs)("div",{className:"flex-center-items flex-column-reverse",children:[Object(S.jsxs)("h1",{className:"header",children:[Object(S.jsx)(je,{height:"50"}),"APE-X ",Object(S.jsx)("span",{className:"outlined",children:"DAO"})]}),Object(S.jsx)("div",{children:null==n?Object(S.jsx)(p.Button,{onClick:Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,he.connect();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),children:"Connect wallet"}):Object(S.jsxs)("h6",{children:["Voting as ",Object(S.jsx)("span",{className:"primary",children:Object(S.jsx)(P,{address:n})})]})})]}),null!=n?Object(S.jsxs)(r.Fragment,{children:[Object(S.jsx)("div",{style:{color:"var(--light)",marginBottom:"1em"},children:Object(S.jsxs)(b.a,{variant:"caption",children:[Object(S.jsx)("div",{style:{marginBottom:"1em"},children:"Welcome to the jungle! The minimum required APE-X to create a proposal is 10B. Anyone can vote on a created proposal 1 APE-X=1 VOTE. Proposals last for 7 days and will only be passed if 75% of Apes vote for. Please when creating proposals be as thorough as possible in the description, as well as including any budget requirements, resources needed to execute."}),Object(S.jsxs)("div",{className:"light",children:["AVAX/APE-X DAO TREASURY:\xa0",Object(S.jsx)("a",{className:"primary",href:"https://cchain.explorer.avax.network/address/0xDEEdd1646984F9372Cc9D3d7E13AC1606cC2B548",rel:"noreferrer",target:"_blank",children:"0xDEEdd1646984F9372Cc9D3d7E13AC1606cC2B548"})]}),Object(S.jsxs)("div",{className:"light",children:["ETH/APE-X DAO TREASURY:\xa0",Object(S.jsx)("a",{className:"primary",href:"https://etherscan.io/address/0x69565fC78E3c684C31Db0B734aBFFeC4cd13C642",rel:"noreferrer",target:"_blank",children:"0x69565fC78E3c684C31Db0B734aBFFeC4cd13C642"})]})]})}),Object(S.jsx)(de,{address:n})]}):Object(S.jsx)(r.Fragment,{children:Object(S.jsxs)(b.a,{style:{fontSize:"2em",textAlign:"center"},children:[Object(S.jsx)(je,{height:"250"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"Welcome to the Jungle! Please connect your wallet to join the APE-X DAO."]})})]})})})};var xe=function(){return Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"404 Not found"})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1194)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},Oe=Object(S.jsx)(i.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",component:be}),Object(S.jsx)(o.a,{component:xe})]})})});s.a.render(Oe,document.getElementById("root")),fe()},264:function(e,t){e.exports={api:{baseURL:"https://dao.ape-x.io",proposals:"/proposals",login:"/login",token:null}}},563:function(e,t,n){},576:function(e,t){},600:function(e,t){},602:function(e,t){},676:function(e,t){},678:function(e,t){},688:function(e,t){},690:function(e,t){},715:function(e,t){},721:function(e,t){},734:function(e,t){},756:function(e,t){},847:function(e,t,n){}},[[1146,1,2]]]);
//# sourceMappingURL=main.f42fa5ac.chunk.js.map