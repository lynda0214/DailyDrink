(this.webpackJsonpdailydrinks=this.webpackJsonpdailydrinks||[]).push([[0],{23:function(e,t,r){e.exports={CreateOrderPage:"CreateOrderPage_CreateOrderPage__2vxiA",CreateOrder:"CreateOrderPage_CreateOrder__2RZE6",SubmitBtn:"CreateOrderPage_SubmitBtn__WpD6P"}},24:function(e,t,r){e.exports={EditOrderPage:"EditOrderPage_EditOrderPage__3u1GA",EditOrder:"EditOrderPage_EditOrder__1lxEX",SubmitBtn:"EditOrderPage_SubmitBtn__2NEMG"}},28:function(e,t,r){e.exports={Toolbar:"Toolbar_Toolbar__3jfJ1",Logo:"Toolbar_Logo__29l45"}},32:function(e,t,r){e.exports={IconButton:"Order_IconButton__39tSh"}},33:function(e,t,r){e.exports={OrderList:"OrderList_OrderList__GEEms",NoOrder:"OrderList_NoOrder__2hU_0"}},36:function(e,t,r){e.exports={OrderButton:"OrderButton_OrderButton__2EVPh"}},38:function(e,t,r){e.exports={OrderListPage:"OrderListPage_OrderListPage__1elnX"}},39:function(e,t,r){e.exports=r(54)},48:function(e,t,r){},49:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(20),l=r.n(i),c=r(22),o=r(9),d=(r(48),r(5)),u=r(10),s=(r(49),r(28)),m=r.n(s),p=r(18),E=r(19),f=r(36),O=r.n(f),h=function(){return a.a.createElement(d.b,{to:"".concat("/DailyDrink","/order"),className:O.a.OrderButton},a.a.createElement(p.a,{icon:E.b}))},b=function(){return a.a.createElement("header",{className:m.a.Toolbar},a.a.createElement(d.b,{to:"".concat("/DailyDrink","/"),className:m.a.Logo},"DailyDrinks"),a.a.createElement(h,null))},k=r(38),v=r.n(k),_=r(11),y=r(12),g=r(14),D=r(13),w=r(15),P=r(32),j=r.n(P),C=function(e){var t="/DailyDrink/edit/";return t+=e.index,a.a.createElement("tr",null,a.a.createElement("td",null,e.title),a.a.createElement("td",null,e.price),a.a.createElement("td",null,a.a.createElement("pre",null,e.addition)),a.a.createElement("td",{style:{textAlign:"right"}},a.a.createElement(d.b,{to:t},a.a.createElement(p.a,{icon:E.a,className:j.a.IconButton})),a.a.createElement(p.a,{icon:E.c,className:j.a.IconButton,onClick:e.delete})))},x=r(33),T=r.n(x),N=function(e){function t(){return Object(_.a)(this,t),Object(g.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.drinks),this.props.drinks.length?a.a.createElement("table",{className:T.a.OrderList},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u98f2\u6599\u54c1\u9805"),a.a.createElement("th",null,"\u50f9\u683c"),a.a.createElement("th",null,"\u9644\u8a3b"),a.a.createElement("th",null))),a.a.createElement("tbody",null,this.props.drinks.map((function(t,r){return a.a.createElement(C,{key:r,index:r,title:t.title,price:t.price,addition:t.addition,delete:function(){return e.props.onDeleteDrink(r)}})}))),a.a.createElement("tfoot",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u676f\u6578\uff1a",this.props.drinks.length),a.a.createElement("td",null,"\u7e3d\u50f9\uff1a",this.props.drinks.reduce((function(e,t){return e+t.price}),0)),a.a.createElement("td",null),a.a.createElement("td",null)))):a.a.createElement("h2",{className:T.a.NoOrder},"\u76ee\u524d\u9084\u6c92\u6709\u4eba\u9ede\u98f2\u6599\uff0c\u9ede\u64ca\u53f3\u4e0a\u89d2(+)\u9ede\u98f2\u6599")}}]),t}(n.Component),B=Object(o.b)((function(e){return{drinks:e.drinks}}),(function(e){return{onDeleteDrink:function(t){return e({type:"DELETE",id:t})}}}))(N),L=function(){return a.a.createElement("div",{className:v.a.OrderListPage},a.a.createElement(B,null))},A=r(23),I=r.n(A),S=function(e){function t(){var e,r;Object(_.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(g.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).handelEmptyClick=function(e){""!==r.refs.newTitle.value&&r.refs.newPrice.value>0?r.props.onCreateOrder(r.refs.newTitle.value,parseInt(r.refs.newPrice.value),r.refs.newAddition.value):(e.preventDefault(),alert("\u54c1\u9805\u8207\u50f9\u9322\u4e0d\u80fd\u662f\u7a7a\u767d"))},r}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:I.a.CreateOrderPage},a.a.createElement("div",{className:I.a.CreateOrder},a.a.createElement("h3",null,"\u9ede\u98f2\u6599"),a.a.createElement("input",{type:"text",ref:"newTitle",placeholder:"\u8acb\u8f38\u5165\u98f2\u6599\u54c1\u9805\u540d\u7a31",required:!0}),a.a.createElement("input",{type:"number",ref:"newPrice",placeholder:"\u8acb\u8f38\u5165\u98f2\u6599\u50f9\u683c",required:!0}),a.a.createElement("textarea",{ref:"newAddition",placeholder:"\u8acb\u8f38\u5165\u9644\u8a3b(ex.\u751c\u5ea6\u51b0\u584a)"}),a.a.createElement(d.b,{to:"".concat("/DailyDrink","/")},a.a.createElement("input",{type:"submit",className:I.a.SubmitBtn,onClick:this.handelEmptyClick,value:"\u9001\u51fa"}))))}}]),t}(n.Component),V=Object(o.b)((function(e){return{drinks:e.drinks}}),(function(e){return{onCreateOrder:function(t,r,n){return e({type:"CREATE",title:t,price:r,addition:n})}}}))(S),G=r(24),J=r.n(G),R=function(e){function t(){var e,r;Object(_.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(g.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).id=r.props.match.params.id,r.oldOrder=r.props.drinks[r.id],r.oldTitle=r.oldOrder.title,r.oldPrice=r.oldOrder.price,r.oldAddition=r.oldOrder.addition,r.handelEmptyClick=function(e){""!==r.refs.newTitle.value&&r.refs.newPrice.value>0?r.props.onEditOrder(r.id,r.refs.newTitle.value,parseInt(r.refs.newPrice.value),r.refs.newAddition.value):(e.preventDefault(),alert("\u54c1\u9805\u8207\u50f9\u9322\u4e0d\u80fd\u662f\u7a7a\u767d"))},r}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:J.a.EditOrderPage},a.a.createElement("div",{className:J.a.EditOrder},a.a.createElement("h3",null,"\u9ede\u98f2\u6599"),a.a.createElement("input",{type:"text",ref:"newTitle",defaultValue:this.oldTitle,placeholder:"\u8acb\u8f38\u5165\u98f2\u6599\u54c1\u9805\u540d\u7a31"}),a.a.createElement("input",{type:"number",ref:"newPrice",defaultValue:this.oldPrice,placeholder:"\u8acb\u8f38\u5165\u98f2\u6599\u50f9\u683c"}),a.a.createElement("textarea",{ref:"newAddition",defaultValue:this.oldAddition,placeholder:"\u8acb\u8f38\u5165\u9644\u8a3b(ex.\u751c\u5ea6\u51b0\u584a)"}),a.a.createElement(d.b,{to:"".concat("/DailyDrink","/")},a.a.createElement("input",{type:"submit",className:J.a.SubmitBtn,onClick:this.handelEmptyClick,value:"\u9001\u51fa"}))))}}]),t}(n.Component),W=Object(o.b)((function(e){return{drinks:e.drinks}}),(function(e){return{onEditOrder:function(t,r,n,a){return e({type:"EDIT",id:t,title:r,price:n,addition:a})}}}))(R),q=function(){return a.a.createElement(d.a,null,a.a.createElement(b,null),a.a.createElement(u.a,{path:"".concat("/DailyDrink","/"),exact:!0,component:L}),a.a.createElement(u.a,{path:"".concat("/DailyDrink","/order"),component:V}),a.a.createElement(u.a,{path:"".concat("/DailyDrink","/edit/:id"),component:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=r(25),M={drinks:[{title:"\u73cd\u73e0\u5976\u8336",price:50,addition:"\u5fae\u7cd6\u53bb\u51b0"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE":var r={title:t.title,price:t.price,addition:t.addition};return{drinks:[].concat(Object(X.a)(e.drinks),[r])};case"EDIT":var n=Object(X.a)(e.drinks);return n[t.id].title=t.title,n[t.id].price=t.price,n[t.id].addition=t.addition,{drinks:n};case"DELETE":var a=Object(X.a)(e.drinks);return a.splice(t.id,1),{drinks:a};default:return e}},Z=Object(c.b)(U);l.a.render(a.a.createElement(o.a,{store:Z},a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.82c57529.chunk.js.map