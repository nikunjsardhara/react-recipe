(this.webpackJsonptfg=this.webpackJsonptfg||[]).push([[0],{38:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(43),a(26)),l=a.n(o),s=a(21),m=(a(45),a(92)),u=a(88),p=a(89),f=a(90),d=a(93),h=a(87),g=a(51),E=a(91),b=a(83),v=Object(b.a)((function(e){return{paper:{height:"auto",width:"940px",margin:"10px",padding:"30px"}}})),x=function(e){var t=v();return c.a.createElement(g.a,{className:t.paper},c.a.createElement(h.a,{container:!0,spacing:3},c.a.createElement(h.a,{item:!0,xs:12,sm:12},c.a.createElement("h1",null,e.recipe.recipe.label)),c.a.createElement(h.a,{item:!0,xs:12,sm:6},c.a.createElement("img",{src:e.recipe.recipe.image})),c.a.createElement(h.a,{item:!0,xs:12,sm:6},c.a.createElement("ul",null,e.recipe.recipe.ingredients.map((function(e){return c.a.createElement("li",null,e.text)}))))))},w=(a(49),Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{height:"auto",width:"940px",margin:"30px",padding:"30px"},button:{marginLeft:"10px"}}})));var j=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),b=o[0],v=o[1],j=Object(n.useState)("oats"),O=Object(s.a)(j,2),k=O[0],y=O[1];Object(n.useEffect)((function(){N()}),[k]);var N=function(){var e,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(fetch("https://api.edamam.com/search?app_id=".concat("a9c11689","&app_key=").concat("ec6791daabf87fb56e2efef074f2d0cf","&q=").concat(k)));case 2:return e=a.sent,a.next=5,l.a.awrap(e.json());case 5:t=a.sent,r(t.hits);case 7:case"end":return a.stop()}}))},S=w();return c.a.createElement("div",{className:S.root},c.a.createElement(u.a,{position:"static"},c.a.createElement(p.a,null,c.a.createElement(f.a,{variant:"h6",className:S.title},"Recipe Search"))),c.a.createElement(h.a,{container:!0,spacing:2,justify:"center"},c.a.createElement(g.a,{className:S.paper},c.a.createElement("form",null,c.a.createElement(E.a,{row:!0},c.a.createElement(m.a,{id:"outlined-basic",label:"Recipe Name",variant:"outlined",onChange:function(e){v(e.target.value)}}),c.a.createElement(d.a,{variant:"contained",color:"primary",className:S.button,onClick:function(e){e.preventDefault(),y(b)}},"Search")))),a.map((function(e){return c.a.createElement(x,{recipe:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.ae82f3e5.chunk.js.map