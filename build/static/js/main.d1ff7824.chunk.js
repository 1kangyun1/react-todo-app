(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{33:function(t,e,o){t.exports=o(61)},60:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(31),c=o.n(r),i=o(20),l=o(7),s=o(8),d=o(10),u=o(9),p=o(11),h=o(14),m=o(1);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"TodoList"),a.a.createElement(h.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(h.b,{style:b,to:"/about"},"About"))},v=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.finished?"line-through":"none"}},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.todo;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,this.props.todo.finished?a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e),defaultChecked:!0}):a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:y},"x")))}}]),e}(n.Component),y={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},k=v,E=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(k,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(n.Component),j=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){return o.setState({title:t.target.value})},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component);var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0 It is part of a React crash course"))},x=o(15),C=o.n(x),T=(o(60),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){C.a.get("https://brian-todos.herokuapp.com/todoList/".concat(t)).then((function(e){console.log(e.data),o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.finished=!e.finished),e}))})}))},o.delTodo=function(t){C.a.delete("https://brian-todos.herokuapp.com/todoList/delete/".concat(t)).then((function(e){return o.setState({todos:Object(i.a)(o.state.todos.filter((function(e){return e.id!==t})))})}))},o.addTodo=function(t){C.a.post("https://brian-todos.herokuapp.com/todoList/create",{todo:t,finished:!1}).then((function(t){return o.setState({todos:[].concat(Object(i.a)(o.state.todos),[t.data])})}))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://brian-todos.herokuapp.com/todoList").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(h.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:t.addTodo}),a.a.createElement(E,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d1ff7824.chunk.js.map