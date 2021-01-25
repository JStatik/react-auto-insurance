(this["webpackJsonpauto-insurance"]=this["webpackJsonpauto-insurance"]||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a(28),i=a.n(s),l=(a(37),a(38),a(7)),r=a(4),o=a(5);function j(){var e=Object(r.a)(["\n    font-family: 'Slabo 27px', serif;\n    font-size: 2rem;\n    margin: 0;\n"]);return j=function(){return e},e}function d(){var e=Object(r.a)(["\n    color: #fff;\n    font-weight: bold;\n    margin-top: 10px;\n    padding: 10px;\n    text-align: center;\n"]);return d=function(){return e},e}var b=o.a.header(d()),u=o.a.h1(j()),m=function(e){var t=e.title;return Object(n.jsx)(b,{children:Object(n.jsx)(u,{children:t})})},h=a(8),O=a(6),x=a.n(O),f=a(30),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1],i=function(e){s(Object(h.a)(Object(h.a)({},n),{},Object(f.a)({},e.target.name,e.target.value)))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;s(t)};return[n,i,r]},v=function(e,t,a){return e.trim().length<4||t.trim().length<4||a.trim().length<5||x.a.isEmpty(e)||x.a.isEmpty(t)||x.a.isEmpty(a)?{msgErrorQuotation:"Todos los campos son necesarios para la cotizaci\xf3n.",isValid:!1}:x.a.isAlpha(e,["es-ES"])&&x.a.isAlpha(a,["es-ES"])&&!isNaN(t)&&x.a.isInt(t,{min:2012,max:2021,allow_leading_zeroes:!1})&&x.a.isNumeric(t)?{msgErrorQuotation:null,isValid:!0}:{msgErrorQuotation:"Los datos ingresados no son v\xe1lidos.",isValid:!1}},g=function(e,t,a){var n,c=-3*((new Date).getFullYear()-t);switch(e){case"fiat":n=15;break;case"peugeot":n=20;break;case"ford":n=25;break;case"chevrolet":n=30}return{totalPercentage:n+c+("basic"===a?20:50)}},k=function(e){var t=e.mark,a=e.handleChange,c=e.disabled;return Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsxs)("select",{className:"form-select",name:"mark",value:t,onChange:a,disabled:c,children:[Object(n.jsx)("option",{defaultValue:!0,children:"Marca del auto"}),Object(n.jsx)("option",{value:"chevrolet",children:"Chevrolet"}),Object(n.jsx)("option",{value:"fiat",children:"Fiat"}),Object(n.jsx)("option",{value:"ford",children:"Ford"}),Object(n.jsx)("option",{value:"peugeot",children:"Peugeot"})]})})},N=function(e){var t=e.model,a=e.handleChange,c=e.disabled;return Object(n.jsx)("div",{className:"mb-3",children:Object(n.jsxs)("select",{className:"form-select",name:"model",value:t,onChange:a,disabled:c,children:[Object(n.jsx)("option",{defaultValue:!0,children:"Modelo del auto"}),Object(n.jsx)("option",{value:"2021",children:"2021"}),Object(n.jsx)("option",{value:"2020",children:"2020"}),Object(n.jsx)("option",{value:"2019",children:"2019"}),Object(n.jsx)("option",{value:"2018",children:"2018"}),Object(n.jsx)("option",{value:"2017",children:"2017"}),Object(n.jsx)("option",{value:"2016",children:"2016"}),Object(n.jsx)("option",{value:"2015",children:"2015"}),Object(n.jsx)("option",{value:"2014",children:"2014"}),Object(n.jsx)("option",{value:"2013",children:"2013"}),Object(n.jsx)("option",{value:"2012",children:"2012"})]})})},C=function(e){var t=e.plan,a=e.handleChange,c=e.disabled;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{className:"form-check-label",htmlFor:"basic",children:"B\xe1sico"}),Object(n.jsx)("input",{type:"radio",className:"form-check-input",id:"basic",name:"plan",value:"basic",checked:"basic"===t,onChange:a,disabled:c})]})},y=function(e){var t=e.plan,a=e.handleChange,c=e.disabled;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{className:"form-check-label",htmlFor:"complete",children:"Completo"}),Object(n.jsx)("input",{type:"radio",className:"form-check-input",id:"complete",name:"plan",value:"complete",checked:"complete"===t,onChange:a,disabled:c})]})},F=function(){return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Cotizar"})})};function S(){var e=Object(r.a)(["\n    font-family: 'Slabo 27px', serif;\n"]);return S=function(){return e},e}var w=o.a.div(S()),q=function(e){var t=e.handleClick;return Object(n.jsx)(w,{className:"mt-3 text-center",children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:t,children:"Volver a cotizar"})})};function E(){var e=Object(r.a)(["\n    color: #990000;\n    font-family: 'Slabo 27px', serif;\n    font-size: '12px';\n    text-align: center;\n"]);return E=function(){return e},e}function z(){var e=Object(r.a)(["\n    font-family: 'Slabo 27px', serif;\n"]);return z=function(){return e},e}var V=o.a.form(z()),Q=o.a.p(E()),_=function(e){var t=e.setLoading,a=e.setDataQuotation,s=p({mark:"",model:"",plan:""}),i=Object(l.a)(s,3),r=i[0],o=i[1],j=i[2],d=r.mark,b=r.model,u=r.plan,m=Object(c.useState)(null),O=Object(l.a)(m,2),f=O[0],S=O[1],w=Object(c.useState)(!1),E=Object(l.a)(w,2),z=E[0],_=E[1];return Object(n.jsxs)(n.Fragment,{children:[f&&Object(n.jsx)(Q,{children:f}),Object(n.jsxs)(V,{autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=x.a.escape(d),c=x.a.escape(b),s=x.a.escape(u),i=v(n,c,s),l=i.msgErrorQuotation,r=i.isValid;S(l),r&&(t(!0),setTimeout((function(){var e=g(n,c,s).totalPercentage;a((function(t){var a=t.quotation,i=a+a*(e/100);return Object(h.a)(Object(h.a)({},t),{},{mark:n,model:c,plan:s,quotation:parseFloat(i).toFixed(2)})})),t(!1),_(!0),j()}),1500))},children:[Object(n.jsx)(k,{mark:d,handleChange:o,disabled:z}),Object(n.jsx)(N,{model:b,handleChange:o,disabled:z}),Object(n.jsxs)("div",{className:"row mb-3 text-center",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("label",{children:"Tipo de plan:"})}),Object(n.jsxs)("div",{className:"col-8",children:[Object(n.jsx)("div",{className:"form-check form-check-inline",children:Object(n.jsx)(C,{plan:u,handleChange:o,disabled:z})}),Object(n.jsx)("div",{className:"form-check form-check-inline",children:Object(n.jsx)(y,{plan:u,handleChange:o,disabled:z})})]})]}),!z&&Object(n.jsx)(F,{})]}),z&&Object(n.jsx)(q,{handleClick:function(){a((function(e){return Object(h.a)(Object(h.a)({},e),{},{mark:"",model:"",plan:"",quotation:5e3})})),_(!1)}})]})};function T(){var e=Object(r.a)(["\n    font-family: 'Slabo 27px', serif;\n    margin-top: 20px;\n    text-align: center;\n"]);return T=function(){return e},e}var D=o.a.div(T()),L=function(e){var t=e.mark,a=e.model,c=e.plan,s=e.quotation;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(D,{className:"animate__animated animate__fadeIn",children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{children:"Cotizaci\xf3n Final"}),Object(n.jsxs)("ul",{className:"bg-warning",children:[Object(n.jsxs)("li",{children:["Marca: ",Object(n.jsx)("span",{className:"data-quotation",children:t})]}),Object(n.jsxs)("li",{children:["Modelo: ",Object(n.jsx)("span",{className:"data-quotation",children:a})]}),Object(n.jsxs)("li",{children:["Plan: ",Object(n.jsx)("span",{className:"data-quotation",children:c})]})]}),Object(n.jsxs)("div",{className:"row text-center",children:[Object(n.jsx)("div",{className:"col-5 offset-1 mt-3",children:Object(n.jsx)("p",{children:"TOTAL:"})}),Object(n.jsx)("div",{className:"col-5 mt-3 text-success",children:Object(n.jsxs)("p",{children:["$ ",s]})})]})]})})},M=(a(120),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"sk-circle",children:[Object(n.jsx)("div",{className:"sk-circle1 sk-child"}),Object(n.jsx)("div",{className:"sk-circle2 sk-child"}),Object(n.jsx)("div",{className:"sk-circle3 sk-child"}),Object(n.jsx)("div",{className:"sk-circle4 sk-child"}),Object(n.jsx)("div",{className:"sk-circle5 sk-child"}),Object(n.jsx)("div",{className:"sk-circle6 sk-child"}),Object(n.jsx)("div",{className:"sk-circle7 sk-child"}),Object(n.jsx)("div",{className:"sk-circle8 sk-child"}),Object(n.jsx)("div",{className:"sk-circle9 sk-child"}),Object(n.jsx)("div",{className:"sk-circle10 sk-child"}),Object(n.jsx)("div",{className:"sk-circle11 sk-child"}),Object(n.jsx)("div",{className:"sk-circle12 sk-child"})]})]})});function P(){var e=Object(r.a)(["\n    background-color: #f2f2f2;\n    border-radius: 3px;\n    margin: 0 auto;\n    padding: 20px;\n    width: 80%;\n"]);return P=function(){return e},e}function A(){var e=Object(r.a)(["\n    margin: 0 auto;\n    width: 90vw;\n"]);return A=function(){return e},e}var I=o.a.div(A()),B=o.a.div(P()),J=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({mark:"",model:"",plan:"",quotation:5e3}),r=Object(l.a)(i,2),o=r[0],j=r[1],d=o.mark,b=o.model,u=o.plan,h=o.quotation;return Object(n.jsxs)(I,{children:[Object(n.jsx)(m,{title:"Cotizador de seguros"}),Object(n.jsxs)(B,{children:[Object(n.jsx)(_,{setLoading:s,setDataQuotation:j}),a?Object(n.jsx)(M,{}):""!==d&&""!==b&&""!==u&&Object(n.jsx)(L,{mark:d,model:b,plan:u,quotation:h})]})]})};i.a.render(Object(n.jsx)(J,{}),document.getElementById("root"))},38:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.1f95c9ca.chunk.js.map