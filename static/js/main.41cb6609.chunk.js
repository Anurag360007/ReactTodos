(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(7),c=a.n(o),r=(a(32),a(4)),s=a(27),m=(a(34),a(10));function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/About"},"About"))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}i.defaultProps={title:"you title here"};var u=function(e){var t=e.todo,a=e.onDelete;return l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){a(t)}},"Delete"))},d=function(e){return l.a.createElement("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"}},l.a.createElement("h3",{className:"my-3"},"Todos List"),0===e.todos.length?"No todos to display":e.todos.map(function(t){return l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})}))},b=(a(36),function(){return l.a.createElement("footer",{className:"bg-dark text-light py-3",style:{position:"relative",top:"100vh",width:"100%"}},l.a.createElement("p",{className:"text-center"},"Copyright \xa9MyTodosList.com"))}),g=function(e){var t=e.addTodo,a=Object(n.useState)(""),o=Object(r.a)(a,2),c=o[0],s=o[1],m=Object(n.useState)(""),i=Object(r.a)(m,2),u=i[0],d=i[1];return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"Add Todo"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&u?(t(c,u),s(""),d("")):alert("title or description can not be empty ")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Todo Description"),l.a.createElement("input",{type:"text",value:u,onChange:function(e){d(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Add Todo")))},E=function(){return l.a.createElement("div",null,"This is an about component",l.a.createElement("p",null,"Study with me!"))},p=a(0);var v=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(r.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(o))},[o]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(i,{title:"My Todos List",searchBar:!1}),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{addTodo:function(e,t){console.log("I am adding this todo",e,t);var a={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};c([].concat(Object(s.a)(o),[a])),console.log(a)}}),l.a.createElement(d,{todos:o,onDelete:function(e){console.log("I am ondelete of todo",e),c(o.filter(function(t){return t!==e})),console.log("deleted",o),localStorage.setItem("todos",JSON.stringify(o))}}))}),l.a.createElement(p.a,{exact:!0,path:"/about",element:l.a.createElement(E,null)})),l.a.createElement(b,null)))},f=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,209)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),o(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),f()},28:function(e,t,a){e.exports=a(208)},32:function(e,t,a){},34:function(e,t,a){}},[[28,3,2]]]);
//# sourceMappingURL=main.41cb6609.chunk.js.map