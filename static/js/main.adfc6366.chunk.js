(this.webpackJsonprepository=this.webpackJsonprepository||[]).push([[0],{11:function(t,e,n){t.exports={input:"Filter_input__2gX1x"}},12:function(t,e,n){t.exports={notification:"Notification_notification__3emfB"}},2:function(t,e,n){t.exports={title:"Form_title__2fV0-",form:"Form_form__1NCCh",label:"Form_label__B6qjn",input:"Form_input__1wqJ5",button:"Form_button__2d5TL"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),s=n(9),i=n.n(s),r=(n(20),n(13)),l=n(3),u=n(4),b=n(6),m=n(5),h=n(22),f=n(10),j=n(2),d=n.n(j),p=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.reset()},t}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.props.addContact,e=this.state,n=e.name,c=e.number;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:d.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:d.a.label,children:["Name",Object(a.jsx)("input",{className:d.a.input,type:"text",name:"name",placeholder:"Enter the name",value:n,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:d.a.label,children:["Number",Object(a.jsx)("input",{className:d.a.input,type:"text",name:"number",placeholder:"Enter the phone number",value:c,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:d.a.button,onSubmit:t,children:"Add contact"})]})]})}}]),n}(c.Component),O=n(7),v=n.n(O),C=function(t){var e=t.contacts,n=t.onDelete,c=t.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:v.a.item,children:["".concat(t.name,": ").concat(t.number),Object(a.jsx)("button",{className:v.a.button,onClick:function(){n(t.id)},children:"Delete"})]},Object(h.a)())}))}),c]})},x=n(11),_=n.n(x),g=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{className:_.a.input,type:"text",name:"filter",placeholder:"Find contact",value:e,onChange:n})]})},y=n(12),N=n.n(y),S=function(){return Object(a.jsx)("p",{className:N.a.notification,children:"You haven't contacts"})},k=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.checkContact=function(e,n){if(t.state.contacts.some((function(t){return t.name===e})))return alert("This contact is already in your contacts");t.addContact(e,n)},t.addContact=function(e,n){var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(r.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.name,c=t.filter,o=t.number;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(p,{name:n,number:o,contacts:e,onChange:this.handleChange,onSubmit:this.checkContact}),e.length?Object(a.jsx)(C,{contacts:this.getVisibleContacts(),onDelete:this.deleteContact,children:Object(a.jsx)(g,{value:c,onChange:this.filterContacts})}):Object(a.jsx)(S,{})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"Contacts_list__1qnWu",item:"Contacts_item__qIaX5",button:"Contacts_button__fTsm2"}}},[[21,1,2]]]);
//# sourceMappingURL=main.adfc6366.chunk.js.map