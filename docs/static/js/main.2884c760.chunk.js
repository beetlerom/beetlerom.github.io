(this["webpackJsonpescu.dev"]=this["webpackJsonpescu.dev"]||[]).push([[0],{33:function(n,t,e){},40:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var a,i,o,r,c,s,d,l,p,h,b,x,j,u,f,g,m=e(1),O=e.n(m),v=e(24),y=e.n(v),w=(e(33),e(5)),k=e(6),M=e(15),S=e(3),z=e(16),I=e(28),L=e(2),A=k.a.ul(a||(a=Object(w.a)(["\n  display: flex;\n  list-style-type: none;\n  position: absolute;\n  right: ","px;\n  top: ","px;\n  z-index: 30;\n  margin: 0;\n"])),30,30),C=k.a.li(i||(i=Object(w.a)(["\n  margin: 0 5px;\n"]))),F="\n  text-decoration: none;\n  position: relative;\n  color: #485b94;\n  text-transform: uppercase;\n\n  &::after {\n    content: '';\n    display: block;\n    width: 0;\n    top: 100%;\n    height: 2px;\n    background: #485b94;\n  }\n\n  &:hover::after {\n    animation: .5s ease-out 1 forwards expand;\n  }\n\n  @keyframes expand {\n    from {\n      width: 0;\n    }\n    to {\n      width: 100%;\n    }\n  }\n",P=Object(k.a)(M.b)(o||(o=Object(w.a)(["",""])),F),T=k.a.a(r||(r=Object(w.a)(["",""])),F),B=function(){return Object(L.jsxs)(A,{children:[Object(L.jsx)(C,{children:Object(L.jsx)(P,{to:"/",children:"About "})}),Object(L.jsx)(C,{children:Object(L.jsx)(P,{to:"/bio",children:"Bio "})}),Object(L.jsx)(C,{children:Object(L.jsx)(T,{href:"mailto:beetlerom@gmail.com",children:"Contact"})})]})},E=e(21),W=e(11),D=e.n(W),H=function(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n},J=function(n,t,e,a){var i=function(n,t){var e=t[0]-n[0],a=t[1]-n[1];return{length:Math.sqrt(Math.pow(e,2)+Math.pow(a,2)),angle:Math.atan2(a,e)}}(t||n,e||n),o=i.angle+(a?Math.PI:0),r=.2*i.length;return[n[0]+Math.cos(o)*r,n[1]+Math.sin(o)*r]},q=function(n,t,e){var a=J(e[t-1],e[t-2],n),i=J(n,e[t-1],e[t+1],!0);return"C ".concat(a[0],",").concat(a[1]," ").concat(i[0],",").concat(i[1]," ").concat(n[0],",").concat(n[1])},K=function(n,t,e,a,i,o){var r=a.x,c=a.y,s=n.gradient("linear",(function(n){n.stop(0,i.darken(H(0,30)).setAlpha(.4).toString()),n.stop(1,i.setAlpha(.4),0)})).from(1,0).to(0,1),d=function(n,t,e,a,i){for(var o=[],r=0;r<=n;r++){var c=a+(t-a)*r/n,s=i+(Math.random()-r/n)*e/3*r/n;o.push([c,s])}return o}(H(6,10),t,e,r,c),l=function(n,t){return n.reduce((function(n,e,a,i){return 0===a?"M ".concat(e[0],",").concat(e[1]):"".concat(n," ").concat(t(e,a,i))}),"")}(d,q),p=n.path("".concat(l," L ").concat(t," ").concat(e," L 0 ").concat(e," L 0 ").concat(c," Z")).fill(s).opacity(0).stroke(i.setAlpha(.6).toString()),h=p.y(),b=h+50;p.move(p.x(),b).animate({delay:150*o}).move(p.x(),h).opacity(1),d.forEach((function(t,e){if(e>0&&!(e%2)){n.circle(3).move(t[0]-1.5,t[1]-1.5).fill(D()("red").toString()).opacity(0).animate({delay:1e3*H(1,3)}).opacity(.5)}}))},R=function(n,t){var e=[D()("#90d3e0"),D()("#90d3e0").spin(-100),D()("#90d3e0").spin(-50),D()("#90d3e0").spin(30)],a=Math.floor(window.innerWidth),i=Math.floor(window.innerHeight),o={x:80,y:i-100};n.size(a,i),e.forEach((function(t,e){K(n,a,i,o,t,e)})),function(n,t,e,a){var i=a.x,o=a.y,r=D()("rgba(150, 150, 150, 1)"),c="10 10",s=10,d=n.group(),l=n.group();n.size(t,e);var p=d.line(0,o,t-20,o).stroke({width:2,color:r.setAlpha(.6).toString()}).attr({"stroke-dasharray":c}).move(0,o).opacity(.5);d.polygon("".concat(t-10,",").concat(o," ").concat(t-20,",").concat(o+5," ").concat(t-20,",").concat(o-5)).fill(r.toString()),p.animate().opacity(1);var h=n.rect(t,s).move(-t,o-5);h.animate({delay:1e3,duration:1500}).move(0,o-5),d.clipWith(h);var b=l.line(i,20,i,e).stroke({width:2,color:r.setAlpha(.6).toString()}).attr({"stroke-dasharray":c}).move(i,20).opacity(.5);l.polygon("".concat(i,",10 ").concat(i+5,",20 ").concat(i-5,",20")).fill(r.toString()),b.animate().opacity(1);var x=n.rect(s,e).move(i-5,e);x.animate({delay:1e3,duration:1500}).move(i-5,10),l.clipWith(x)}(t,a,i,o)},X="\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n",Z=k.a.div(c||(c=Object(w.a)(["\n    ","\n    z-index: 15;\n"])),X),_=k.a.div(s||(s=Object(w.a)(["\n    ","\n    z-index: 16;\n"])),X),G=function(){var n="axis",t="splines";return Object(m.useEffect)((function(){return d=Object(E.a)().addTo("#".concat(t)),l=Object(E.a)().addTo("#".concat(n)),R(d,l),function(){var n;null===(n=d)||void 0===n||n.remove()}})),Object(L.jsxs)("div",{children:[Object(L.jsx)(_,{id:t}),Object(L.jsx)(Z,{id:n})]})},N=k.a.div(p||(p=Object(w.a)(["\n    z-index: 20;\n    position: relative;\n    margin: 100px 100px 100px 0;\n    background: hsla(0, 0%, 100%, 0.25);\n    backdrop-filter: blur(5px);\n    border-radius: .5em;\n    border: 1px solid hsla(0, 0%, 100%, 0.25);\n    padding: 10px 20px;\n"]))),Q=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(G,{}),Object(L.jsxs)(N,{children:[Object(L.jsx)("p",{children:"Hello there, I\u2019m Daniel!"}),Object(L.jsx)("br",{}),Object(L.jsx)("p",{children:"I help build awesome teams, SaaS products and foster healthy company culture."}),Object(L.jsx)("p",{children:"I work iteratively, make use of OKRs and data driven decision making."}),Object(L.jsx)("p",{children:"I think long-term and make software development predictable and transparent."}),Object(L.jsx)("br",{}),Object(L.jsx)("p",{children:"I am currently looking to make a big impact in a high potential company in a key IT management role."})]})]})},U=function(){return Object(L.jsx)("p",{children:"Bio page"})},V=e.p+"static/media/daniel-ionescu.027357f1.jpg",Y=(e(40),210),$="".concat(Y,"px"),nn=k.a.div(h||(h=Object(w.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background: repeating-linear-gradient(\n        0deg,\n        rgba(200,200,200,.3) 0px,\n        transparent 1px,\n        transparent 11px\n      ),\n      repeating-linear-gradient(\n        90deg,\n        rgba(200,200,200,.3) 0px,\n        transparent 1px,\n        transparent 11px\n      ),\n      radial-gradient(farthest-corner at 20% 20%, rgba(235,235,235,1) 20%, rgba(210,210,210,1) 60%);\n"]))),tn=k.a.div(b||(b=Object(w.a)(["\n  height: 100vh;\n  width: ",";\n  min-width: ",";\n"])),$,$),en=k.a.div(x||(x=Object(w.a)([""]))),an=k.a.img(j||(j=Object(w.a)(["\n  position: absolute;\n  left: 30px;\n  top: 30px;\n  max-width: 150px;\n  border-radius: 50%;\n  border: 3px solid white;\n  z-index: ",";\n  animation: showPhoto .5s ease-out forwards;\n  opacity: 0;\n\n  @keyframes showPhoto {\n    from {\n      opacity: 0;\n      left: 15px;\n    } \n    to{\n      opacity: 1;\n      left: 30px;\n    } \n  }\n"])),25),on=k.a.div(u||(u=Object(w.a)(["\n  border-radius: 50%;\n  width: ","px;\n  height: ","px;\n  transform: rotate(-45deg);\n  background: rgba(230,230,230,1);\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  z-index: ",";\n  box-shadow: inset -1px 5px 10px rgba(0,0,0,.2);\n  /* box-shadow: -1px 5px 10px rgba(0,0,0,.2); */\n  background-image: radial-gradient(farthest-corner at 0 0, rgba(240,240,240,1) 20%, rgba(210,210,210,1) 60%);\n"])),315,Y,-105,-105,10);function rn(n,t){return"\n      &:nth-child(".concat(n+1,") {\n        animation-delay: ","".concat(t*n+.3,"s"),";\n       }\n    ")}var cn=[{icon:Object(L.jsx)(z.a,{}),href:"https://github.com/beetlerom"},{icon:Object(L.jsx)(z.b,{}),href:"https://www.linkedin.com/in/ionescudaniel/"},{icon:Object(L.jsx)(z.c,{}),href:"https://twitter.com/the_escu"},{icon:Object(L.jsx)(I.a,{}),href:"mailto:beetlerom@gmail.com"}],sn=k.a.a(f||(f=Object(w.a)(["\n  position: relative;\n  color: gray; \n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  margin: 0 auto 10px;\n  opacity: 0;\n  transition: all .3s;\n  animation: appear .3s ease-out forwards;\n  ","\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    color: #485b94;\n    transform: translateX(3px);\n  }\n\n  @keyframes appear {\n    from {\n      opacity: 0;\n      left: -","px;\n    } \n    to{\n      opacity: 1;\n      left: 0;\n    } \n  }\n"])),24,24,function(n,t){for(var e="",a=0;a<n;a+=1)e+=rn(a,t);return e}(cn.length,.15),12),dn=k.a.div(g||(g=Object(w.a)(["\n  position: relative;\n  padding: 210px 0 0;\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]))),ln=function(n){var t=n.externalLinks;return Object(L.jsx)(dn,{children:t.map((function(n,t){var e=n.icon,a=n.href;return Object(L.jsx)(sn,{href:a,children:e},t)}))})},pn=function(){return Object(L.jsxs)(M.a,{children:[Object(L.jsxs)(nn,{children:[Object(L.jsx)(an,{src:V}),Object(L.jsx)(on,{}),Object(L.jsx)(tn,{children:Object(L.jsx)(ln,{externalLinks:cn})}),Object(L.jsx)(en,{children:Object(L.jsxs)(S.d,{children:[Object(L.jsx)(S.b,{exact:!0,path:"/",children:Object(L.jsx)(Q,{})}),Object(L.jsx)(S.b,{exact:!0,path:"/bio",children:Object(L.jsx)(U,{})}),Object(L.jsx)(S.a,{to:"/"})]})})]}),Object(L.jsx)(B,{})]})};var hn=function(){return Object(L.jsx)(pn,{})},bn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,42)).then((function(t){var e=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),a(n),i(n),o(n),r(n)}))};y.a.render(Object(L.jsx)(O.a.StrictMode,{children:Object(L.jsx)(hn,{})}),document.getElementById("root")),bn()}},[[41,1,2]]]);
//# sourceMappingURL=main.2884c760.chunk.js.map