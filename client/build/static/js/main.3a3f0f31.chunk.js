(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);n(38);var c=n(58),a=(n(39),n(2)),i=n.n(a),s=n(9),r=n(6),l=n(0),o=function(){return Object(l.jsx)("div",{className:"landingcontainer",children:Object(l.jsxs)("div",{className:"landinggroup",children:[Object(l.jsxs)("div",{className:"landing",children:[Object(l.jsx)("h1",{children:"Welcome"}),Object(l.jsx)("h3",{children:"To Milton Amelino COUNTRIES PI"})]}),Object(l.jsxs)("div",{className:"landing2",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Click to enter the site"})}),Object(l.jsx)("div",{children:Object(l.jsx)(s.b,{to:"/home",children:Object(l.jsx)("button",{className:"landingbutton",children:"Enter"})})})]})]})})};var u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o,{})})},j=n(10),d=n(11),b=n(16),O=n(25),h="GET_COUNTRIES",m="SEARCH_COUNTRIES",f="ORDER_ALPHABETICAL",p="ORDER_POPULATION",x="ORDER_CONTINENT",v="GET_ACTIVITIES",N="BY_ACTIVITY";function y(){return function(e){c.a.get("/countries").then((function(t){e({type:h,payload:t.data})}))}}function g(){return function(){var e=Object(O.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/activities");case 2:return n=e.sent,e.abrupt("return",t({type:v,payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function A(e){var t=e.name,n=e.flag,c=e.continent;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"nameCard",children:t}),Object(l.jsx)("h5",{className:"continentCard",children:c}),Object(l.jsx)("img",{className:"efectoFlag",src:n,alt:"main-img"})]})}function C(e){for(var t=e.countriesPerPage,n=e.countries,c=e.pagination,a=e.currentPage,i=[],s=Math.ceil((n+1)/t),r=1;r<=s;r++)i.push(r);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:i&&i.map((function(e){return Object(l.jsx)("li",{className:"paginado",children:Object(l.jsx)("button",{className:a===e?"activeBoton":"paginadoButton",onClick:function(){return c(e)},children:e})},e)}))})})}function E(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(d.b)();return Object(l.jsx)("div",{className:"busquedafiltros",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(e){return function(t){c.a.get("/countries?name=".concat(e)).then((function(e){t({type:m,payload:e.data})}))}}(n))},children:[Object(l.jsx)("input",{className:"searchinput",type:"text",onChange:function(e){e.preventDefault(),i(e.target.value)},value:n,placeholder:"Name of country"}),Object(l.jsx)("input",{className:"searchbutton",type:"submit",value:"Search"})]})})}var D=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.activities}));function c(n){var c;n.preventDefault(),t((c=n.target.value,{type:N,payload:c})),e.setCurrentPage(1)}return Object(l.jsxs)("div",{className:"filtros",children:[Object(l.jsxs)("div",{className:"ordertext",children:[Object(l.jsx)("span",{className:"inputfiltros",children:"Order Alphabetical"}),Object(l.jsxs)("select",{className:"orderbutton",onChange:function(e){var n;e.preventDefault(),t((n=e.target.value,{type:f,payload:n}))},children:[Object(l.jsx)("option",{value:"ascendente",children:"A-Z"}),Object(l.jsx)("option",{value:"descendente",children:"Z-A"})]})]}),Object(l.jsxs)("div",{className:"ordertext",children:[Object(l.jsx)("span",{className:"inputfiltros",children:"Order Population"}),Object(l.jsxs)("select",{className:"orderbutton",onChange:function(e){var n;e.preventDefault(),t((n=e.target.value,{type:p,payload:n}))},children:[Object(l.jsx)("option",{value:"ascendente",children:"Desc"}),Object(l.jsx)("option",{value:"descendente",children:"Asc"})]})]}),Object(l.jsxs)("div",{className:"ordertext",children:[Object(l.jsx)("span",{className:"inputfiltros",children:"Order Continent"}),Object(l.jsxs)("select",{className:"orderbutton",onChange:function(n){var c;n.preventDefault(),t((c=n.target.value,{type:x,payload:c})),e.setCurrentPage(1)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"North America",children:"North America"}),Object(l.jsx)("option",{value:"South America",children:"South America"}),Object(l.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(l.jsx)("option",{value:"Europe",children:"Europe"}),Object(l.jsx)("option",{value:"Asia",children:"Asia"}),Object(l.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(l.jsxs)("div",{className:"ordertext",children:[Object(l.jsx)("span",{className:"inputfiltros",children:"Activities"}),Object(l.jsxs)("select",{className:"orderbutton",onChange:function(e){return c(e)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})]})};function S(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.countries})),n=Object(a.useState)(1),c=Object(j.a)(n,2),i=c[0],r=c[1],o=1===i?9:10*i-1,u=1===i?0:o-10,b=t.slice(u,o);return Object(a.useEffect)((function(){e(y())}),[e]),Object(a.useEffect)((function(){e(g())}),[e]),Object(l.jsxs)("div",{children:[Object(l.jsx)(E,{}),Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)(s.b,{to:"/activities",children:Object(l.jsx)("button",{className:"activitybutton",children:"Add Activity"})}),Object(l.jsx)("h1",{children:"\xabTHE WORLD IS A BOOK, AND THOSE WHO DON'T TRAVEL READ ONLY ONE PAGE\xbb"})]}),Object(l.jsx)(D,{setCurrentPage:r}),Object(l.jsxs)("button",{className:"reloadbutton",onClick:function(t){!function(t){t.preventDefault(),e(y())}(t)},children:[" ","Reload all"]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(C,{countriesPerPage:10,countries:t.length,pagination:function(e){r(e)},currentPage:i}),Object(l.jsx)("div",{className:"countries",children:null===b||void 0===b?void 0:b.map((function(e){return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{className:"country",children:Object(l.jsx)(s.b,{to:"/home/".concat(e.id),children:Object(l.jsx)(A,{name:e.name,flag:e.flag,continent:e.continent,id:e.id})})})},e.id)}))})]})]})}var T=n(17),w=n(21),I=n(5);function P(e){var t={};return e.name?(/[0-9]/.test(e.name)||/[!@#$%^&*(),.?":{}|<>]/.test(e.name))&&(t.name="Invalid name"):t.name="Name is required",e.difficulty?(e.difficulty<1||e.difficulty>5)&&(t.difficulty="The difficulty must be between 1 and 5"):t.difficulty="Difficulty required",e.season?["summer","spring","winter","autumn"].includes(e.season.toLowerCase())||(t.season="You must enter a valid season, summer, autumn, spring or winter"):t.season="Must enter a season",e.countries.length||(t.countries="You have to select a country"),e.duration?(e.duration<1||e.duration>24)&&(t.duration="The duration must be between 1 and 24 hours"):t.duration="Duration required",t}function R(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.countries})),n=Object(a.useState)({}),i=Object(j.a)(n,2),r=i[0],o=i[1],u=Object(a.useState)({name:"",difficulty:0,duration:0,season:"",countries:[]}),h=Object(j.a)(u,2),m=h[0],f=h[1];function p(e){f(Object(I.a)(Object(I.a)({},m),{},Object(w.a)({},e.target.name,e.target.value)));var t=P(Object(I.a)(Object(I.a)({},m),{},Object(w.a)({},e.target.name,e.target.value)));o(t)}function x(){return(x=Object(O.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),o(P(m)),!(m.name&&m.difficulty&&m.duration&&m.season&&m.countries.length)||Object.keys(r).length){e.next=8;break}return e.next=5,Object(c.a)({method:"post",url:"/activities/",data:m});case 5:alert("Activity has been created successfully"),e.next=9;break;case 8:alert("All fields are required!!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e(g()),e(y)}),[e]),Object(l.jsx)("div",{className:"fondo-form",children:Object(l.jsxs)("div",{className:"cardActivity",children:[Object(l.jsx)(s.b,{to:"/home",children:Object(l.jsx)("button",{className:"activities-button",children:"Back"})}),Object(l.jsx)("h1",{className:"activities-header",children:"CREATE ACTIVITY"}),Object(l.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},className:"activities-form",children:[Object(l.jsxs)("div",{className:"activities-form-row",children:[Object(l.jsx)("label",{className:"activities-form-label",children:"Country"}),Object(l.jsxs)("select",{onChange:function(e){e.target.value&&f(Object(I.a)(Object(I.a)({},m),{},{countries:[].concat(Object(T.a)(m.countries),[e.target.value])}))},className:"activities-select",defaultValue:"default",children:[Object(l.jsx)("option",{value:"",children:"Select a Country"}),null===t||void 0===t?void 0:t.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(l.jsx)("ul",{className:"activities-list",children:m.countries.map((function(e){return Object(l.jsxs)("li",{children:[t.find((function(t){return t.id===e})).name,Object(l.jsx)("button",{className:"removeCountry",onClick:function(){return function(e){f(Object(I.a)(Object(I.a)({},m),{},{countries:m.countries.filter((function(t){return t!==e}))}))}(e)},children:"X"})]},e)}))}),r.countries&&Object(l.jsx)("p",{children:r.countries})]}),Object(l.jsxs)("div",{className:"activities-form-row",children:[Object(l.jsx)("label",{className:"activities-form-label",children:"Name"}),Object(l.jsx)("input",{onChange:p,name:"name",type:"text",value:m.name,className:"activities-form-input",placeholder:"Enter the name"}),r.name&&Object(l.jsx)("p",{children:r.name})]}),Object(l.jsxs)("div",{className:"activities-form-row",children:[Object(l.jsx)("label",{className:"activities-form-label",children:"Difficulty"}),Object(l.jsx)("input",{onChange:p,name:"difficulty",type:"text",min:"1",max:"5",value:m.difficulty,className:"activities-form-input"}),r.difficulty&&Object(l.jsx)("p",{children:r.difficulty})]}),Object(l.jsxs)("div",{className:"activities-form-row",children:[Object(l.jsx)("label",{className:"activities-form-label",children:"Duration"}),Object(l.jsx)("input",{onChange:p,name:"duration",type:"text",min:"1",max:"24",value:m.duration,className:"activities-form-input"}),r.duration&&Object(l.jsx)("p",{children:r.duration})]}),Object(l.jsxs)("div",{className:"activities-form-row",children:[Object(l.jsx)("label",{className:"activities-form-label",children:"Season"}),Object(l.jsx)("input",{onChange:p,name:"season",type:"text",value:m.season,className:"activities-form-input",placeholder:"Select the season"}),r.season&&Object(l.jsx)("p",{children:r.season})]}),0===Object.keys(r).length&&Object(l.jsx)("button",{type:"submit",className:"activities-submit",children:"Submit"})]})]})})}function k(){var e,t=Object(a.useState)(null),n=Object(j.a)(t,2),i=n[0],o=n[1],u=Object(r.f)().id;return Object(a.useEffect)((function(){c.a.get("/countries/".concat(u)).then((function(e){o(e.data)}))}),[u]),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"countryDetail",children:i?Object(l.jsxs)("div",{className:"countryDetailDiv",children:[Object(l.jsx)("img",{className:"detailflag",src:i.flag,alt:"main-img"}),Object(l.jsx)("h2",{children:i.name}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Code ID:"}),i.id]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Population:"}),i.population]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Continent:"}),i.continent]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Capital:"}),i.capital]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Subregion:"}),i.subregion]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Area:"}),i.area," km2"]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"spandetail",children:"Activities:"}),null===(e=i.Activities)||void 0===e?void 0:e.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:e.name}),Object(l.jsxs)("h5",{children:["Difficulty:",e.difficulty]}),Object(l.jsxs)("h5",{children:[e.duration,"hs"]}),Object(l.jsx)("h5",{children:e.season})]})}))]}),Object(l.jsx)(s.b,{to:"/home",children:Object(l.jsx)("button",{className:"detailbutton",children:"Back to home"})})]}):Object(l.jsx)("h3",{children:"Loading..."})})})}var L=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(s.a,{children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(r.a,{exact:!0,path:"/home",component:S}),Object(l.jsx)(r.a,{exact:!0,path:"/activities",component:R}),Object(l.jsx)(r.a,{exact:!0,path:"/home/:id",component:k})]})})})},B=n(23),_=n.n(B),Y=n(28),q=n(36),H=n(37),M={countries:[],filteredCountries:[],activities:[]};var U=Object(Y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(I.a)(Object(I.a)({},e),{},{countries:t.payload,filteredCountries:t.payload});case m:return Object(I.a)(Object(I.a)({},e),{},{countries:t.payload});case f:var n=Object(T.a)(e.countries);return n=n.sort((function(e,n){return e.name<n.name?"ascendente"===t.payload?-1:1:e.name>n.name?"ascendente"===t.payload?1:-1:0})),Object(I.a)(Object(I.a)({},e),{},{countries:n});case p:var c=Object(T.a)(e.countries);return c=c.sort((function(e,n){return e.population<n.population?"ascendente"===t.payload?-1:1:e.population>n.population?"ascendente"===t.payload?1:-1:0})),Object(I.a)(Object(I.a)({},e),{},{countries:c});case x:var a=Object(T.a)(e.countries),i="all"===t.payload?a:a.filter((function(e){return e.continent===t.payload}));return Object(I.a)(Object(I.a)({},e),{},{countries:i});case v:return Object(I.a)(Object(I.a)({},e),{},{activities:t.payload});case N:var s=e.countries,r="all"===t.payload?s.filter((function(e){var t;return!(null===(t=e.Activities)||void 0===t||!t.name)&&e.Activities})):s.filter((function(e){return e.Activities.some((function(e){return e.name===t.payload}))}));return Object(I.a)(Object(I.a)({},e),{},{countries:r});default:return e}}),Object(q.composeWithDevTools)(Object(Y.applyMiddleware)(H.a))),V=U;c.a.defaults.baseURL="http://localhost:3000",_.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d.a,{store:V,children:Object(l.jsx)(s.a,{children:Object(l.jsx)(L,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3a3f0f31.chunk.js.map