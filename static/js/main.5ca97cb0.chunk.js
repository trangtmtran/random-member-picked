(this["webpackJsonprandom-member-picked"]=this["webpackJsonprandom-member-picked"]||[]).push([[0],{15:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(1),o=a.n(n),i=a(6),c=a.n(i),s=a(2),l=a(8),m=a(7),d=a.n(m);function j(t){for(var e,a,r=t.length;0!==r;)a=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[a],t[a]=e;return t}var f=a(3),u=a.n(f),h=function(t){var e=t.name,a=t.members,n=t.facilitator;return Object(r.jsxs)("div",{className:u.a.root,children:[Object(r.jsx)("h3",{className:u.a.name,children:e}),Object(r.jsx)("div",{children:a.map((function(t){return Object(r.jsx)("div",{children:t})}))}),Object(r.jsxs)("div",{className:u.a.facilitator,children:[Object(r.jsx)("div",{children:"Facilitator this month: "}),Object(r.jsx)("div",{children:Object(r.jsx)("strong",{children:n})})]})]})},b=a(4),p=a.n(b),O=function(){var t,e=JSON.parse((null===(t=window.localStorage.getItem("teamsWithFacilitator"))||void 0===t?void 0:t.toString())||"{}"),a=Object(n.useState)(e),o=Object(l.a)(a,2),i=o[0],c=o[1];Object(n.useEffect)((function(){e||fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){c(t.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{facilitator:"Not yet found"})})))}))}),[e]);return Object(r.jsxs)("div",{className:p.a.root,children:[Object(r.jsx)("h1",{children:"Monthly facilitator generation"}),Object(r.jsx)("h3",{children:d()().format("MMMM YYYY")}),Object(r.jsx)("div",{className:p.a.teamCardWrapper,children:i.map((function(t){return Object(r.jsx)(h,{name:t.name,members:t.members,facilitator:t.facilitator})}))}),Object(r.jsx)("button",{onClick:function(){if(!i)return null;var t=j(Array.from(i)),e=i.map((function(e){var a,r=t.findIndex((function(t){return t===e})),n=i[r].members,o=j(Array.from(n))[(a=n.length,Math.floor(Math.random()*Math.floor(a)))];return Object(s.a)(Object(s.a)({},e),{},{facilitator:o})}));c(e),window.localStorage.setItem("teamsWithFacilitator",JSON.stringify(e))},className:p.a.button,children:"Map facilitator"})]})};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))},3:function(t,e,a){t.exports={root:"TeamCard_root__3DN4O",name:"TeamCard_name__MsA86",facilitator:"TeamCard_facilitator__2SiBL"}},4:function(t,e,a){t.exports={root:"App_root__2V7rr",teamCardWrapper:"App_teamCardWrapper__1NDBj",button:"App_button__2jxjg"}}},[[15,1,2]]]);
//# sourceMappingURL=main.5ca97cb0.chunk.js.map