(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(22)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),i=n(6),l=n(1),s=n(2),u=n(4),m=n(3),d=n(5),b=(n(15),function(t){var e=t.todoCount,n=t.doneCount;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo list"),o.a.createElement("h2",null,e," more todo, ",n," done."))}),p=(n(16),function(){return o.a.createElement("span",null,o.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search"}))}),f=n(9),h=(n(17),n(18),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(m.a)(e).call(this))).toggleDone=function(){t.setState((function(t){return{done:!t.done,important:!1}}))},t.toggleImportant=function(){t.setState((function(t){return{done:!1,important:!t.important}}))},t.state={done:!1,important:!1},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onItemDelete,a=this.state,c="todo-list-item";return a.done&&(c+=" done"),a.important&&(c+=" important"),o.a.createElement("span",{className:c},o.a.createElement("span",{className:"todo-list-item-label",onClick:this.toggleDone},e),o.a.createElement("button",{type:"button",onClick:this.toggleImportant,className:"btn btn-outline-success btn-sm float-right"},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),e}(o.a.Component)),E=function(t){var e=t.items,n=void 0===e?[]:e,a=t.onItemDelete,c=n.map((function(t){var e=t.id,n=Object(f.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(h,Object.assign({},n,{onItemDelete:function(){return a(e)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)},I=(n(19),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-info"},"All"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Active"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Done"))}}]),e}(o.a.Component)),j=(n(20),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.onItemAdd;return o.a.createElement("div",{className:"item-add-form"},o.a.createElement("button",{onClick:function(){return t("some text")},className:"btn btn-outline-success"},"Add Item"))}}]),e}(a.Component)),O=(n(21),[{id:1,label:"Build awesome app",important:!0},{id:2,label:"Drink some cofee",important:!1},{id:3,label:"Have a nice day",important:!1}]),v=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(m.a)(e).call(this))).generateItemId=function(){return t.state.todoListItems.length+1},t.onItemDelete=function(e){t.setState((function(t){var n=t.todoListItems,a=n.findIndex((function(t){return t.id===e}));return{todoListItems:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))},t.onItemAdd=function(e){console.log("onItemAdd",e);var n={id:t.generateItemId(),label:e,important:!1};t.setState((function(t){var e=t.todoListItems;return{todoListItems:[].concat(Object(i.a)(e),[n])}}))},t.state={todoListItems:[]},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({todoListItems:O})}},{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement(b,{todoCount:1,doneCount:3}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,null),o.a.createElement(I,null)),o.a.createElement(E,{items:this.state.todoListItems,onItemDelete:this.onItemDelete}),o.a.createElement(j,{onItemAdd:this.onItemAdd}))}}]),e}(o.a.Component);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.52fb5611.chunk.js.map