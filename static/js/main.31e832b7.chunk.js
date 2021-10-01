(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var o,r,i,a,c=t(0),l=t.n(c),d=t(12),s=t.n(d),p=(t(21),t(3)),u=t(2),h="@media screen and (max-width:768px)",x="@media screen and (max-width:450px)",m=t(1),b=u.b.div(o||(o=Object(p.a)(["\n  // visibility: visible;\n  // visibility: hidden;\n  // display: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px 9px 16px;\n  border-left: 5px solid ",";\n  margin-top: 30px;\n  & + & {  //\u90782\u500bTodoItemWrapper\n    margin-top: 13px;\n  }\n  &:hover {\n    background: ",";\n  }\n  &:hover .delbtn{\n    visibility: visible;\n  }\n  "," {\n    padding: 0px;\n    margin: 30px 8px 0px 8px;\n  }\n"])),(function(n){return n.theme.colors.primary_1}),(function(n){return n.theme.colors.primary_3}),x),f=u.b.label(r||(r=Object(p.a)(["\n  color: ",";\n  width: 80%;\n  overflow: scroll;\n  word-wrap: keep-all;\n\n  // font-size: ","\n\n  font-size: 14px;\n\n  ","\n\n  //\u9078\u64c7\u5668\u52a0$\u4ee3\u8868\u70bastyled components\u7528\uff0c\u4e0d\u6703\u986f\u793a\u5728dev tool\u4e0a\n  ","\n\n  "," {\n    max-width: 300px;\n  }\n"])),(function(n){return n.theme.colors.primary_2}),(function(n){return"XL"===n.size?"20px":"14px"}),(function(n){return"XL"===n.size&&"\n  font-size: 20px;\n  "}),(function(n){return n.$isDone&&"   \n    text-decoration: line-through;\n    color: lightgray;\n  "}),x),g=u.b.button(i||(i=Object(p.a)(["\n  display: flex;\n  padding: 4px;\n  background: none;\n  font-size: 20px;\n  color: ",";\n  border: none;\n  margin-left: 4px;\n\n  &:hover {\n    color: ",";\n  }\n\n  "," {\n    margin-left: 3px;\n  }\n  "," {\n    margin-left: 7px;\n  }\n"])),(function(n){return n.theme.colors.primary_2}),(function(n){return n.theme.colors.primary_4}),h,x),j=Object(u.b)(g)(a||(a=Object(p.a)(["\n  visibility: hidden;\n  margin-left: 0px;\n  margin-right: 3px;\n  font-size: 40px;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  "," {\n    margin-right: 0px;\n  }\n  "," {\n    margin-right: 8px;\n  }\n"])),(function(n){return n.theme.colors.primary_4}),(function(n){return n.theme.colors.primary_1}),h,x);function y(n){var e=n.className,t=n.todo,o=n.size,r=n.handleDeleteTodo,i=n.handleToggleIsDone;return Object(m.jsxs)(b,{className:e,"data-todo-id":t.id,children:[Object(m.jsxs)(g,{id:t.id,onClick:function(){i(t.id)},children:[t.isDone&&"\u2714",!t.isDone&&"\u25a2"]}),Object(m.jsx)(f,{htmlFor:t.id,$isDone:t.isDone,size:o,children:t.content}),Object(m.jsx)(j,{className:"delbtn",onClick:function(){r(t.id)},children:"\xd7"})]})}var O,v,w,D,_=t(11),C=t(16),k=t(6);function T(){var n=Object(c.useRef)(1),e=function(){var n=Object(c.useState)(""),e=Object(k.a)(n,2),t=e[0],o=e[1];return{value:t,setValue:o,handleChange:function(n){o(n.target.value)}}}(),t=e.value,o=e.setValue,r=e.handleChange,i=Object(c.useState)((function(){var e=JSON.parse(window.localStorage.getItem("todos"))||"";return e.length?n.current=e[0].id+1:e=[],e})),a=Object(k.a)(i,2),l=a[0],d=a[1];Object(c.useEffect)((function(){!function(n){window.localStorage.setItem("todos",JSON.stringify(n))}(l)}),[l]);var s=function(){0!==t.trim().length&&(d([{id:n.current,content:t,isDone:!1}].concat(Object(C.a)(l))),o(""),n.current++)};return{todos:l,setTodos:d,id:n,handleBtnClick:s,handleKeyDown:function(n){13===n.keyCode&&s()},handleDeleteTodo:function(n){d(l.filter((function(e){return e.id!==n})))},handleToggleIsDone:function(n){d(l.map((function(e){return e.id!==n?e:Object(_.a)(Object(_.a)({},e),{},{isDone:!e.isDone})})))},value:t,setValue:o,handleChange:r}}var z,I,S,N=u.b.div(O||(O=Object(p.a)(["\nbackground: ",";\npadding: 40px 15% 10px 15%;\n"," {\n  padding: 20px 0px 10px 0px;\n}\n"])),(function(n){return n.theme.colors.primary_3}),x),B=u.b.h1(v||(v=Object(p.a)(["\ncolor: ",";\nborder-left: 7px solid ",";\nborder-right: 7px solid ",";\nmargin-top: 100px;\nfont-size: 40px;\ntext-align: center;\n"," {\nborder-left: none;\nborder-right: none;\n}\n"])),(function(n){return n.theme.colors.primary_2}),(function(n){return n.theme.colors.primary_1}),(function(n){return n.theme.colors.primary_1}),x),E=u.b.input(w||(w=Object(p.a)(["\ncolor: #545247;\nwidth: 85%;\nheight: 30px;\npadding-left: 5px;\nborder: 1px solid ",";\nmargin-bottom: 20px;\nmargin-top: 20px;\n"," {\n  width: 70%;\n}\n"])),(function(n){return n.theme.colors.primary_1}),x),F=u.b.button(D||(D=Object(p.a)(["\nbackground: ",";\nfont-size: 20px;\nfont-weight: 900;\nheight: 34px;\npadding: 1px 0px 0px 0px;\nwidth: 13%;\nmargin-left: -2px;\ncolor: white;\nborder: 1px solid ",";\n"])),(function(n){return n.theme.colors.primary_1}),(function(n){return n.theme.colors.primary_1}));function K(n){var e=n.value,t=n.handleChange,o=n.handleKeyDown,r=n.handleBtnClick;return Object(m.jsxs)(N,{children:[Object(m.jsx)(B,{children:"TODO LIST"}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)(E,{type:"text",placeholder:"Add todo...",value:e,onChange:t,onKeyDown:o,autoFocus:!0}),Object(m.jsx)(F,{onClick:r,children:"+"})]})]})}var L=u.b.div(z||(z=Object(p.a)(["\nwidth: 600px;\nmargin-bottom: 30px;\n"," {\n  max-width: 500px;\n}\n"," {\n  width: 100%;\n}\n"])),h,x),J=u.b.div(I||(I=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 23px;\n"])));u.b.button(S||(S=Object(p.a)(["\n  background: none;\n  color: ",";\n  border: none;\n  border-bottom: 3px solid ",";\n  font-size: 17px;\n  width: 33%;\n  padding: 12px 0px 8px 0px;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary_4}),(function(n){return n.theme.colors.primary_4}),(function(n){return n.theme.colors.primary_3}),(function(n){return n.theme.colors.primary_1}));var V=function(){var n=T(),e=n.todos,t=(n.setTodos,n.id,n.handleBtnClick),o=n.handleKeyDown,r=n.handleDeleteTodo,i=n.handleToggleIsDone,a=n.value,c=(n.setValue,n.handleChange);return Object(m.jsxs)(L,{className:"App",children:[Object(m.jsx)(K,{value:a,handleChange:c,handleKeyDown:o,handleBtnClick:t}),Object(m.jsx)(J,{}),e.map((function(n){return Object(m.jsx)(y,{className:"todoitem",todo:n,handleDeleteTodo:r,handleToggleIsDone:i},n.id)}))]})},A=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),i(n),a(n)}))};s.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(u.a,{theme:{colors:{primary_1:"#706D5E",primary_2:"#545247",primary_3:"#EDE7E1",primary_4:"#A18568"}},children:Object(m.jsx)(V,{})})}),document.getElementById("root")),A()}},[[27,1,2]]]);
//# sourceMappingURL=main.31e832b7.chunk.js.map