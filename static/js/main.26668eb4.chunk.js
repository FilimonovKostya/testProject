(this.webpackJsonp24testtask=this.webpackJsonp24testtask||[]).push([[0],{18:function(e,t,n){e.exports={resultWindow:"ResultWindow_resultWindow__1d6hk"}},24:function(e,t,n){},25:function(e,t,n){},4:function(e,t,n){e.exports={container:"CheckBox_container__1xBFd",pureMaterialCheckbox:"CheckBox_pureMaterialCheckbox__1ws7T",input:"CheckBox_input__3Nuei"}},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),o=(n(24),n(3)),i=(n(25),n(5)),u=n.n(i),l=n(0),j=function(e){return Object(l.jsxs)("div",{className:u.a.inputContainer,children:[Object(l.jsx)("input",{className:u.a.input,type:"text",value:e.inputText,onChange:e.onChangeInputValue,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0441\u043a\u043e\u043c\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}),Object(l.jsx)("span",{className:u.a.focusBorder})]})},b=r.a.memo(j),p=n(4),h=n.n(p),d=function(e){return Object(l.jsx)("div",{className:h.a.container,children:Object(l.jsxs)("label",{className:h.a.pureMaterialCheckbox,children:[Object(l.jsx)("input",{className:h.a.input,type:"checkbox",checked:e.checked,onChange:e.onChange}),Object(l.jsx)("span",{className:h.a.spanClassName,children:" \u041f\u043e\u0438\u0441\u043a \u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u043c "})]})})},f=r.a.memo(d),x=n(7),_=n.n(x),O=function(e){return Object(l.jsx)("div",{className:_.a.container,children:Object(l.jsxs)("button",{className:_.a.button,onClick:e.onClick,children:[" ",e.children," "]})})},g=r.a.memo(O),m=n(18),C=n.n(m),k=function(e){return Object(l.jsxs)("div",{className:C.a.resultWindow,children:["\u0412\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",0!==e.filterWords.length?e.filterWords.map((function(e,t){return Object(l.jsxs)("span",{children:[" ",t,".",e,"; "]},t)})):"\u041d\u0435\u0442 \u0441\u043b\u043e\u0432\u0430"]})},B=r.a.memo(k),N=n(19),v=n.n(N).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json"}),w=n(8),S=n.n(w),y=function(){return Object(l.jsx)("div",{className:S.a.progress,children:Object(l.jsx)("span",{className:S.a.progressBar})})};var I=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(""),p=Object(o.a)(j,2),h=p[0],d=p[1],x=Object(c.useState)(!1),_=Object(o.a)(x,2),O=_[0],m=_[1],C=Object(c.useState)(!1),k=Object(o.a)(C,2),N=k[0],w=k[1],S=Object(c.useCallback)((function(e){return d(e.currentTarget.value)}),[]),I=Object(c.useCallback)((function(e){return m(e.currentTarget.checked)}),[]),T=Object(c.useCallback)((function(){return u(n.filter((function(e){return e.length>+h})))}),[n,h]),W=Object(c.useCallback)((function(){u(O?n.filter((function(e){return[h].every((function(t){return e.includes(t)}))})):n.filter((function(e){return[h.toLowerCase()].every((function(t){return e.toLowerCase().includes(t.toLowerCase())}))})))}),[n,h,O]);return Object(c.useEffect)((function(){w(!0),v.get("").then((function(e){r(e.data.data),w(!1)})).catch((function(){alert("Something wrong")}))}),[]),Object(l.jsxs)("div",{className:"wrapper",children:[N?Object(l.jsx)(y,{}):null,Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{inputText:h,onChangeInputValue:S}),Object(l.jsx)(f,{checked:O,onChange:I}),Object(l.jsx)(g,{onClick:T,children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u043b\u0438\u043d\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(l.jsx)(g,{onClick:W,children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0435"}),Object(l.jsx)(B,{filterWords:i})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),T()},5:function(e,t,n){e.exports={inputContainer:"Input_inputContainer__3XdeT",input:"Input_input__2bSVj",focusBorder:"Input_focusBorder__10sg-","has-content":"Input_has-content__yF87V"}},7:function(e,t,n){e.exports={container:"Button_container__2jY5g",button:"Button_button__1EXhZ"}},8:function(e,t,n){e.exports={progress:"ProgressBar_progress__1XvCN",progressBar:"ProgressBar_progressBar__2khEx","progress-animation":"ProgressBar_progress-animation__1Dn2Q"}}},[[45,1,2]]]);
//# sourceMappingURL=main.26668eb4.chunk.js.map