(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{42:function(e,t,a){e.exports={Archive:"TodoForm_Archive__HSHhq",Title:"TodoForm_Title__3NJMU",title:"TodoForm_title__1ROYc",activeLink:"TodoForm_activeLink__SPnNi"}},73:function(e,t,a){e.exports=a(88)},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),c=a(19),l=a(8),d=a(17),s=a(24),p=a(14),u=a(26),f=a(25),x=a(7),m=a(104),b=a(103),g=a(105),h=a(47),y=a.n(h),E=a(46),v=a.n(E),k=a(31),O=a.n(k),D=a(39),j=a.n(D),w=a(32),S=a(16),C=function(e){return{type:A.ADD_LIST,payload:e}},I=function(e,t){return{type:A.EDIT_LIST,payload:{title:e,listId:t}}},A={ADD_CARD:"ADD_CARD",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",TOGGLE_CARD:"TOGGLE_CARD",ADD_LIST:"ADD_LIST",EDIT_LIST:"EDIT_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",TOGGLE_THEME:"TOGGLE_THEME"},T=function(e,t){return{type:A.ADD_CARD,payload:{text:t,listId:e}}},_=function(e){return{type:A.DELETE_CARD,payload:{cardId:e}}},M=a(40),R=a(61),L=a.n(R),B=a(62),G=a.n(B);function F(){var e=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 8px;\n  border-radius: 5px;\n  box-shadow: ",";\n  word-wrap: break-word;\n  transition: all 0.2s;\n"]);return F=function(){return e},e}var P=S.a.div(F(),(function(e){return e.isDarkMode?"#5d5d63":e.isDragging?"#89b7b7":"#fffefb"}),(function(e){return e.isDarkMode&&"#efeff4"}),(function(e){return e.isDragging?"0px 5px 5px rgba(0,0,0,0.3)":"none"})),H=Object(x.b)()((function(e){var t=e.text,a=e.id,o=e.index,i=e.completed,c=e.isTiny,s=e.isTask,p=e.isGoal,u=e.isDarkMode,f=Object(n.useState)(!1),x=Object(d.a)(f,2),h=x[0],E=x[1],k=Object(n.useState)(t),D=Object(d.a)(k,2),S=D[0],C=D[1],I=Object(n.useState)(!1),T=Object(d.a)(I,2),R=T[0],B=T[1],F=function(){var t=e.dispatch,a=e.id;t(_(a))},H=function(){var t,a=e.dispatch,n=e.id;a((t=n,{type:A.TOGGLE_CARD,payload:{cardId:t}}))},N=function(){E(!h)},z=function(){B(!0)},J=function(){B(!1)},Y=function(t){t.preventDefault(),(0,e.dispatch)(function(e,t){return{type:A.EDIT_CARD,payload:{text:t,cardId:e}}}(e.id,S)),N()},W=function(e){C(e.target.value)},U=function(e){e.target.select()};return h?function(){var e;return r.a.createElement("div",{style:{marginBottom:"20px",backgroundColor:u?"#5d5d63":p&&"#efeeee",borderRadius:5}},r.a.createElement("form",null,r.a.createElement(M.a,{autoFocus:!0,onFocus:U,onBlur:Y,value:S,onChange:W,style:(e={resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none",fontSize:"inherit",padding:"16px"},Object(l.a)(e,"fontSize","1rem"),Object(l.a)(e,"lineHeight","1.5"),Object(l.a)(e,"letterSpacing","0.00938em"),Object(l.a)(e,"marginBottom","-15px"),Object(l.a)(e,"borderRadius",5),Object(l.a)(e,"color",u&&"#efeff4"),Object(l.a)(e,"backgroundColor",u?"#5d5d63":p&&"#efeeee"),e)})),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(g.a,{onClick:Y,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(L.a,null)),r.a.createElement(g.a,{onClick:N,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(G.a,null))))}():r.a.createElement(w.b,{draggableId:String(a),index:o},(function(e,a){return r.a.createElement(P,Object.assign({isDarkMode:u,ref:e.innerRef},e.draggableProps,e.dragHandleProps,{isDragging:a.isDragging}),c?r.a.createElement("div",{onMouseEnter:z,onMouseLeave:J,onClick:H,style:{marginBottom:"20px"}},r.a.createElement(b.a,{style:{marginBottom:"-20px"}},r.a.createElement(m.a,{gutterBottom:!0,style:{opacity:i&&"0.2",textDecoration:i&&"line-through",transition:"all 0.2s"}},t)),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(g.a,{onClick:F,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)"}},r.a.createElement(O.a,{style:{color:u&&"#e9ecef"}})))):p?r.a.createElement("div",{onMouseOver:z,onMouseOut:J,style:{backgroundColor:u?"#3a3a3c":"#efeeee",boxShadow:u?"inset -6px -6px 16px rgba(40, 40, 40, 0.5), inset 6px 6px 16px rgba(46, 50, 56, 0.5)":"inset -6px -6px 16px rgba(255, 255, 255, 0.5), inset 6px 6px 16px rgba(209, 205, 199, 0.5)",marginBottom:"20px",borderRadius:5}},r.a.createElement(b.a,{style:{marginBottom:"-20px"}},r.a.createElement(m.a,{gutterBottom:!0,style:{opacity:i&&"0.2",textDecoration:i&&"line-through",transition:"all 0.2s"}},t)),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(g.a,{onClick:N,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(j.a,null)),r.a.createElement(g.a,{onClick:F,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(O.a,null)))):s?r.a.createElement("div",{onMouseOver:z,onMouseOut:J,style:{boxShadow:"rgba(0,0,0,0.1) 0 4px 4px",marginBottom:"20px"}},r.a.createElement(b.a,{style:{marginBottom:"-20px"}},r.a.createElement(m.a,{gutterBottom:!0,style:{opacity:i&&"0.2",textDecoration:i&&"line-through",transition:"all 0.2s"}},t)),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i?r.a.createElement(g.a,{onClick:H,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4",opacity:.4}},r.a.createElement(v.a,null)):r.a.createElement(g.a,{onClick:H,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(y.a,null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(g.a,{onClick:N,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(j.a,null)),r.a.createElement(g.a,{onClick:F,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(O.a,null))))):r.a.createElement("div",{onMouseOver:z,onMouseOut:J,style:{boxShadow:"rgba(0,0,0,0.1) 0 4px 4px",marginBottom:"20px"}},r.a.createElement(b.a,{style:{marginBottom:"-20px"}},r.a.createElement(m.a,{gutterBottom:!0,style:{opacity:i&&"0.2",textDecoration:i&&"line-through",transition:"all 0.2s"}},t)),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i?r.a.createElement(g.a,{onClick:H,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4",opacity:R?.4:0}},r.a.createElement(v.a,null)):r.a.createElement(g.a,{onClick:H,style:{boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4",opacity:R?1:0}},r.a.createElement(y.a,null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(g.a,{onClick:N,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(j.a,null)),r.a.createElement(g.a,{onClick:F,style:{transition:"opacity 0.2s",opacity:R?1:0,boxShadow:u&&"-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:u&&"#efeff4"}},r.a.createElement(O.a,null))))))}))})),N=a(106),z=a(42),J=a.n(z),Y=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={formOpen:!1,text:"",hover:!1},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(){e.setState({formOpen:!1})},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleAddList=function(){var t=e.props.dispatch,a=e.state.text;a&&t(C(a)),e.setState({text:""})},e.handleAddCard=function(){var t=e.props,a=t.dispatch,n=t.listID,r=e.state.text;r&&a(T(n,r)),e.setState({text:""})},e.renderForm=function(){var t=e.props.list,a=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement("div",{style:{width:"22%",marginTop:"5rem",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("form",{onSubmit:e.handleAddList},r.a.createElement("input",{placeholder:a,type:"text",autoFocus:!0,onBlur:e.closeForm,value:e.state.text,onChange:e.handleInputChange,style:{resize:"none",width:"100%",overflow:"hidden",outline:"none",border:"none"}}),r.a.createElement("button",{className:J.a.Button},"Add")))},e.renderAddButton=function(){var t=e.props.list?"Add your list":"Add another card";return r.a.createElement("div",{style:{width:"22%",marginTop:"5rem",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(N.a,{onClick:e.openForm,style:{padding:"10px 40px"}},t))},e}return Object(p.a)(a,[{key:"render",value:function(){return this.state.formOpen?this.renderForm():this.renderAddButton()}}]),a}(r.a.Component),W=Object(x.b)()(Y),U=(n.Component,function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formOpen:!1,text:""},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(){e.setState({formOpen:!1})},e.handleInputChange=function(t){e.setState({text:t.target.value})},e.handleAddCard=function(){var t=e.props,a=t.dispatch,n=t.listID,r=e.state.text;r&&a(T(n,r)),e.setState({text:""})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.isDarkMode;return r.a.createElement("form",{onSubmit:this.handleAddCard,style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("input",{placeholder:"Add new card...",onBlur:this.closeForm,value:this.state.text,onChange:this.handleInputChange,style:{resize:"none",overflow:"hidden",outline:"none",border:"none",marginRight:"10%",color:e&&"#efeff4",boxShadow:e&&"none",backgroundColor:e&&"#3a3a3c"}}),r.a.createElement(N.a,{onClick:this.handleAddCard,style:{padding:"13px 40px",color:"#606060",boxShadow:e&&"none",backgroundColor:e&&"#3a3a3c"}},"Add"))}}]),a}(r.a.Component)),q=Object(x.b)()(U);function $(){var e=Object(c.a)(["\n  background-color: ",";\n  padding: 16px;\n  transition: all 0.1s;\n  box-shadow: ",";\n  border-radius: 5px;\n  max-height: 70vh;\n  overflow: auto;\n"]);return $=function(){return e},e}function K(){var e=Object(c.a)(["\n  background-color: '#dfe3e6';\n  border-radius: 3px;\n  width: 22%;\n  padding: 16px;\n  margin-right: 8px;\n  height: 100%;\n"]);return K=function(){return e},e}var Q=S.a.div(K()),V=S.a.div($(),(function(e){return e.isDarkMode?e.isDraggingOver?"#8e8e93":"#3a3a3c":e.isDraggingOver?"#dfe3e6":"#efeeee"}),(function(e){return e.isDarkMode?"none":"-6px -6px 16px rgba(255, 255, 255, 0.5), 6px 6px 16px rgba(209, 205, 199, 0.5)"})),X=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"shouldComponentUpdate",value:function(e){return e!==this.props}},{key:"render",value:function(){var e=this;return this.props.cards.map((function(t,a){return r.a.createElement(H,{key:t.id,text:t.text,id:t.id,index:a,completed:t.completed,isTiny:"0"===e.props.listID,isTask:"1"===e.props.listID,isGoal:"2"===e.props.listID,isDarkMode:e.props.isDarkMode})}))}}]),a}(r.a.Component),Z=Object(x.b)()((function(e){var t=e.title,a=e.listID,o=e.index,i=e.isDarkMode,c=Object(n.useState)(!1),s=Object(d.a)(c,2),p=s[0],u=s[1],f=Object(n.useState)(t),x=Object(d.a)(f,2),m=x[0],b=x[1],g=("Add ".concat(t),function(){u(!p)}),h=function(e){b(e.target.value)},y=function(t){t.preventDefault();var n=e.dispatch;""!==m.trim()&&n(I(m,a)),g()},E=function(e){e.target.select()},v="2"===a?"rgb(0,92,175)":"1"===a?"rgb(181,73,91)":"0"===a?"rgb(105,176,172)":"rgb(90,90,90)";return r.a.createElement(w.b,{draggableId:String(a),index:o},(function(t){var n;return r.a.createElement(Q,Object.assign({},t.draggableProps,{ref:t.innerRef}),r.a.createElement("div",{style:{padding:"0 16px",minHeight:"50px"}},function(){var e,t="0"!==a&&"1"!==a&&"2"!==a;return p?r.a.createElement("form",{onSubmit:y},r.a.createElement("input",{type:"text",autoFocus:!0,onFocus:E,onBlur:y,value:m,onChange:h,style:{resize:"none",height:"100%",overflow:"hidden",outline:"none",border:"none",fontSize:"1.1em",fontWeight:"700",padding:"16px",marginTop:"3px",marginBottom:"32px"}})):r.a.createElement("h3",{style:(e={borderLeft:"10px solid",borderLeftColor:v,paddingLeft:"16px",color:i?"#efeff4":"#37352f",cursor:"pointer",overflow:"hidden"},Object(l.a)(e,"cursor",t?"pointer":"default"),Object(l.a)(e,"textOverflow","ellipsis"),Object(l.a)(e,"whiteSpace","nowrap"),e),onClick:t?g:void 0},m)}()),r.a.createElement("div",{style:(n={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},Object(l.a)(n,"alignItems","stretch"),Object(l.a)(n,"marginBottom","1rem"),n)},r.a.createElement(q,{listID:a,isDarkMode:i})),r.a.createElement("div",t.dragHandleProps,r.a.createElement(w.c,{droppableId:String(a)},(function(t,n){return r.a.createElement(V,Object.assign({},t.droppableProps,{ref:t.innerRef,isDraggingOver:n.isDraggingOver,isDarkMode:i}),r.a.createElement(X,{cards:e.cards,listID:a,isDarkMode:i}),t.placeholder)}))))}))})),ee=a(37),te=a(108),ae=function(){return{type:A.TOGGLE_THEME,payload:{}}};function ne(){var e=Object(c.a)(["\n  height: 6vh;\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n  color: ",";\n  align-items: center;\n  padding-right: 40px;\n  font-weight: 700;\n  z-index: 10;\n  text-decoration: none;\n  bottom: 0;\n  width: 100%;\n  position: fixed;\n"]);return ne=function(){return e},e}var re=S.a.div(ne(),(function(e){return e.isDarkMode?"#1c1c1e":"#f7f7f7"}),(function(e){return e.isDarkMode?"#efeff4":"#202020"})),oe=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={darkmode:e.props.theme.darkmode},e.handleChange=function(t){e.setState({darkmode:t.target.checked}),e.props.dispatch(ae())},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(re,{isDarkMode:this.state.darkmode},r.a.createElement("div",{style:{marginLeft:32}},r.a.createElement("span",{style:{opacity:this.state.darkmode?"1":"0.4"}},"\ud83c\udf19"),r.a.createElement(te.a,{checked:this.state.darkmode,onChange:this.handleChange,color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}})),r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginRight:32}},r.a.createElement(ee.b,{exact:!0,to:"/archive",style:this.state.darkmode?ie.linkDark:ie.link,activeStyle:this.state.darkmode?ie.linkDarkActive:ie.linkActive},"\ud83d\uddc2 Archive"),r.a.createElement(ee.b,{exact:!0,to:"/",style:this.state.darkmode?ie.linkDark:ie.link,activeStyle:this.state.darkmode?ie.linkDarkActive:ie.linkActive},"\ud83d\udca1\ud83d\udcdd\ud83c\udf96 Tiny")))}}]),a}(n.Component),ie={link:{color:"#606060",opacity:"0.4",padding:"5px 20px 5px 20px",borderRadius:5,marginRight:5,marginLeft:5},linkActive:{opacity:1,color:"#606060",boxShadow:"inset -6px -6px 16px rgba(255, 255, 255, 0.5), inset 6px 6px 16px rgba(209, 205, 199, 0.5)"},linkDark:{color:"#efeff4",opacity:"0.4",padding:"5px 20px 5px 20px",borderRadius:5,marginRight:5,marginLeft:5},linkDarkActive:{opacity:1,color:"#efeff4",boxShadow:"inset -6px -6px 16px rgba(20, 20, 20, 0.5), inset 6px 6px 16px rgba(46, 50, 56, 0.5)",backgroundColor:"#5d5d63"}},ce=Object(x.b)((function(e){return{theme:e.theme}}))(oe),le=a(33),de=a(109),se=a(107),pe=a(64),ue=a.n(pe);function fe(){var e=Object(c.a)(["\n  width: 22%;\n  display: inline-block;\n  margin-right: 40px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  box-shadow: ",";\n  word-wrap: break-word;\n"]);return fe=function(){return e},e}var xe=S.a.div(fe(),(function(e){return e.isDragging?"0px 5px 5px rgba(0,0,0,0.3)":"none"}));var me=Object(x.b)()((function(e){var t=e.text,a=(e.id,e.index,e.completed),o=e.emoji,i=e.isDarkMode,c=Object(n.useState)(!1),l=Object(d.a)(c,2),s=l[0],p=l[1];return r.a.createElement(xe,{isDarkMode:i},r.a.createElement("div",{onMouseOver:function(){p(!0)},onMouseOut:function(){p(!1)},style:{boxShadow:i?"rgba(20, 20, 20, 0.5) -6px -6px 16px, rgba(46, 50, 56, 0.5) 6px 6px 16px":"rgba(255, 255, 255, 0.5) -6px -6px 16px, rgba(209, 205, 199, 0.5) 6px 6px 16px",marginBottom:"20px",transform:s&&"translateY(-10px)",transition:"all 0.2s",borderRadius:"5px",color:i&&"#efeff4",backgroundColor:i?"#3a3a3c":"#efeeee"}},r.a.createElement(b.a,{style:{marginBottom:"-20px"}},r.a.createElement(m.a,{gutterBottom:!0,style:{opacity:a&&"0.2",transition:"all 0.2s"}},t)),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("span",{style:{fontSize:"1.5rem",marginLeft:"8px"}},o),r.a.createElement(g.a,{onClick:function(){var t=e.dispatch,a=e.id;t(_(a))},style:{transition:"opacity 0.2s",opacity:s?1:0,boxShadow:i&&"-6px -6px 16px rgba(20, 20, 20, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",color:i&&"#efeff4"}},r.a.createElement(O.a,null)))))}));var be=Object(x.b)((function(e){return{lists:e.lists}}))((function(e){var t=e.lists,a=e.isDarkMode;return console.log(a),r.a.createElement("div",{style:{height:"100vh",backgroundColor:a?"#2c2c2e":"#eeeeef"}},r.a.createElement("div",{style:{padding:"16px 48px",color:"#606060",overflow:"auto"}},r.a.createElement("div",{style:{marginBottom:"16px"}},r.a.createElement("h3",{style:{color:a?"#e9ecef":"#303030",borderLeft:"10px solid rgb(217,171,66)",paddingLeft:"16px"}},"Archive \ud83d\uddc2"),r.a.createElement(ee.b,{exact:!0,to:"/"},r.a.createElement(g.a,{style:{boxShadow:a&&"-6px -6px 16px rgba(0, 0, 0, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)",border:a&&"1px solid #efeff4"}},r.a.createElement(ue.a,{style:{color:a&&"#e9ecef"}})))),t.map((function(e){return"3"===e.id&&e.cards.map((function(e){return r.a.createElement(me,{key:e.id,text:e.text,id:e.id,emoji:e.emoji,isDarkMode:a})}))}))),r.a.createElement(ce,null))}));function ge(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: ",";\n  height: 90vh;\n"]);return ge=function(){return e},e}function he(){var e=Object(c.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  background-color: ",";\n"]);return he=function(){return e},e}var ye=S.a.div(he(),(function(e){return e.isDarkMode?"#2c2c2e":"#efeeee"})),Ee=S.a.div(ge(),(function(e){return e.isDarkMode?"#2c2c2e":"#efeeee"})),ve=Object(x.b)((function(e){return{lists:e.lists,theme:e.theme}}))((function(e){Object(n.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(e.lists)),window.localStorage.setItem("theme",JSON.stringify(e.theme))}));var t=function(t){var a=t.destination,n=t.source,r=t.draggableId,o=t.type;a&&e.dispatch(function(e,t,a,n,r,o){return{type:A.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:a,droppableIndexEnd:n,draggableId:r,type:o}}}(n.droppableId,a.droppableId,n.index,a.index,r,o))},a=e.lists,o=e.theme.darkmode,i=Object(le.f)((function(e){var n=e.location;return r.a.createElement(de.a,null,r.a.createElement(se.a,{key:n.pathname,classNames:"fade",timeout:200},r.a.createElement(le.c,{location:n},r.a.createElement(le.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ye,{isDarkMode:o},r.a.createElement(w.a,{onDragEnd:t},r.a.createElement(w.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(e){return r.a.createElement(Ee,Object.assign({isDarkMode:o},e.droppableProps,{ref:e.innerRef}),a.map((function(e,t){return"3"!==e.id&&r.a.createElement(Z,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:t,isDarkMode:o})})),e.placeholder,a.length<5&&r.a.createElement(W,{list:!0}))}))),r.a.createElement(ce,null))}}),r.a.createElement(le.a,{exact:!0,path:"/archive",render:function(){return r.a.createElement(be,{isDarkMode:o})}}))))}));return r.a.createElement(ee.a,null,r.a.createElement(i,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(20),Oe=a(23),De=a(12),je=a(15),we=a.n(je),Se=[{title:"Tiny \ud83d\udca1",id:"0",cards:[{id:we()(),text:"You can add a tiny todo here.",completed:!1},{id:we()(),text:"Send an email to my colleague",completed:!0}]},{title:"Task \ud83d\udcdd",id:"1",cards:[{id:we()(),text:"You can add a task here.",completed:!1},{id:we()(),text:"Do homework",completed:!0},{id:we()(),text:"Go shopping",completed:!0}]},{title:"Goal \ud83c\udf96",id:"2",cards:[{id:we()(),text:"You can add a goal here",completed:!1},{id:we()(),text:"Exercise",completed:!1},{id:we()(),text:"Eat healthier",completed:!1}]},{title:"Archive \ud83d\uddc2",id:"3",cards:[{id:we()(),text:"All the completed todos will go to archive after deleted.",completed:!1},{id:we()(),text:"Start to use tiny!",completed:!1},{id:we()(),text:"You can also add a customized column.",completed:!1}]}],Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(window.localStorage.getItem("todos"))||Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.ADD_LIST:var a={title:t.payload,cards:[],id:we()()};return[].concat(Object(De.a)(e),[a]);case A.EDIT_LIST:var n=t.payload,r=n.title,o=n.listId,i=e.map((function(e){return e.id===o?Object(Oe.a)({},e,{title:r}):e}));return i;case A.ADD_CARD:var c={text:t.payload.text,id:we()(),completed:!1},l=e.map((function(e){return e.id===t.payload.listId?Object(Oe.a)({},e,{cards:[].concat(Object(De.a)(e.cards),[c])}):e}));return l;case A.EDIT_CARD:var d=t.payload,s=d.cardId,p=d.text,u=Object(De.a)(e);return u.forEach((function(e){e.cards=e.cards.map((function(e){return e.id===s?Object(Oe.a)({},e,{text:p}):e}))})),u;case A.DELETE_CARD:var f=function(){for(var a,n=t.payload.cardId,r=Object(De.a)(e),o=Object(Oe.a)({},r.find((function(e){return"3"===e.id}))),i=0;i<r.length;i++)for(var c=0;c<r[i].cards.length;c++){var l=Object(Oe.a)({},r[i].cards[c]);if(l.id===n)return a=l,"3"===r[i].id?(o.cards=o.cards.filter((function(e){return e.id!==n})),r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r=r.map((function(e){return"3"===e.id?o:e}))}):"2"===r[i].id?(o.cards.push(Object(Oe.a)({},a,{emoji:"\ud83c\udf96"})),r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r=r.map((function(e){return"3"===e.id?o:e}))}):"0"===r[i].id?a.completed?(o.cards.push(Object(Oe.a)({},a,{emoji:"\ud83d\udca1"})),r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r=r.map((function(e){return"3"===e.id?o:e}))}):(r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r}):"1"===r[i].id?a.completed?(o.cards.push(Object(Oe.a)({},a,{emoji:"\ud83d\udcdd"})),r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r=r.map((function(e){return"3"===e.id?o:e}))}):(r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r}):a.completed?(o.cards.push(Object(Oe.a)({},a,{emoji:""})),r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r=r.map((function(e){return"3"===e.id?o:e}))}):(r.forEach((function(e){e.cards=e.cards.filter((function(e){return e.id!==n}))})),{v:r})}}();if("object"===typeof f)return f.v;case A.TOGGLE_CARD:var x=t.payload.cardId,m=Object(De.a)(e);return m.forEach((function(e){e.cards=e.cards.map((function(e){return e.id===x?Object(Oe.a)({},e,{completed:!e.completed}):e}))})),m;case A.DRAG_HAPPENED:var b=t.payload,g=b.droppableIdStart,h=b.droppableIdEnd,y=b.droppableIndexStart,E=b.droppableIndexEnd,v=(b.draggableId,b.type),k=Object(De.a)(e);if("list"===v){var O=k.splice(y,1);return k.splice.apply(k,[E,0].concat(Object(De.a)(O))),k}if(g===h){var D,j=e.find((function(e){return g===e.id})),w=j.cards.splice(y,1);(D=j.cards).splice.apply(D,[E,0].concat(Object(De.a)(w)))}if(g!==h){var S,C=e.find((function(e){return g===e.id})),I=C.cards.splice(y,1),T=e.find((function(e){return h===e.id}));(S=T.cards).splice.apply(S,[E,0].concat(Object(De.a)(I)))}return k;default:return e}},Ie={darkmode:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(window.localStorage.getItem("theme"))||Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.TOGGLE_THEME:return{darkmode:!e.darkmode};default:return e}},Te=Object(ke.c)({lists:Ce,theme:Ae}),_e=Object(ke.e)(Te);a(87);i.a.render(r.a.createElement(x.a,{store:_e},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.3ef37fba.chunk.js.map