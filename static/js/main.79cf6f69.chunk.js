(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(34),s=t.n(l),o=(t(69),t(63)),i=t(62),r=t(4),m=t(56),p=t.n(m),u=(t(80),function(e){var a=Object(n.useState)(""),t=Object(r.a)(a,2),l=t[0],s=t[1],o=Object(n.useState)(""),i=Object(r.a)(o,2),m=i[0],p=i[1];Object(n.useEffect)(function(){s(e.champion.passive.description),p(e.champion.passive.name)},[e.champion]);var u={backgroundImage:"url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(e.champion.id,"_0.jpg)"),backgroundPosition:"center",backgroundSize:"cover"};function d(a,t){"passive"===a?(p(e.champion[a].name),s(e.champion[a].description)):(p(e.champion[a][t].name),s(e.champion[a][t].description))}function g(a,t,n,l){var s="stats ".concat(a),o="";return"none"!==n&&(o="(+".concat(e.champion.stats[n]," por n\xedvel)")),c.a.createElement("p",{className:"stats-format"},c.a.createElement("span",{className:s},l,":"),c.a.createElement("p",{className:"stat-descrip"},e.champion.stats[t]," ",o))}return c.a.createElement("section",{className:"main-modal",style:u},c.a.createElement("main",{className:"grid"},c.a.createElement("img",{className:"image-profile",src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/".concat(e.champion.id,".png"),alt:"Imagem do Campe\xe3o"}),c.a.createElement("section",{className:"skill-profile"},c.a.createElement("h1",{className:"ta-center"},"HABILIDADES"),c.a.createElement("img",{onClick:function(){return d("passive")},src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/passive/".concat(e.champion.passive.image.full),alt:"passive"}),c.a.createElement("img",{onClick:function(){return d("spells","0")},src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/spell/".concat(e.champion.spells[0].image.full),alt:"Skill Q"}),c.a.createElement("img",{onClick:function(){return d("spells","1")},src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/spell/".concat(e.champion.spells[1].image.full),alt:"Skill W"}),c.a.createElement("img",{onClick:function(){return d("spells","2")},src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/spell/".concat(e.champion.spells[2].image.full),alt:"Skill E"}),c.a.createElement("img",{onClick:function(){return d("spells","3")},src:"https://ddragon.leagueoflegends.com/cdn/9.13.1/img/spell/".concat(e.champion.spells[3].image.full),alt:"Skill R"})),c.a.createElement("article",{className:"skill-descrip-profile"},c.a.createElement("p",{className:"ta-center"},m.toUpperCase()),c.a.createElement("p",null,l)),c.a.createElement("section",{className:"content-modal"},c.a.createElement("article",{className:"about-champion-modal"},c.a.createElement("h1",{className:"title-profile ta-center"},e.champion.name.toUpperCase()),c.a.createElement("article",{className:"descrip-profile"},c.a.createElement("p",null,e.champion.lore))),c.a.createElement("div",{className:"block-stat"},c.a.createElement("section",{className:"first-block-stat"},g("stat-hp","hp","hpperlevel","Vida"),g("stat-ad","attackdamage","attackdamageperlevel","Dano de Ataque"),g("stat-velat","attackspeed","attackspeedperlevel","Velocidade de Ataque"),g("stat-ms","movespeed","none","Velocidade de Movimento")),c.a.createElement("section",{className:"second-block-stat"},g("stat-reghp","hpregen","hpregenperlevel","Regenera\xe7\xe3o de Vida"),g("stat-armor","armor","armorperlevel","Armadura"),g("stat-mr","spellblock","spellblockperlevel","Resist\xeancia M\xe1gica"))))))}),d=(t(81),function(e){return c.a.createElement("section",{className:"champion",onClick:e.onClick},c.a.createElement("img",{src:e.imgsrc,id:e.id,alt:e.text,className:"champ-img"}),c.a.createElement("section",null,c.a.createElement("p",{htmlFor:e.id,className:"champ-name"},e.text)))}),g=(t(57),t(174),function(e){var a=Object(n.useState)([]),t=Object(r.a)(a,2),l=t[0],s=t[1],m=Object(n.useState)({}),g=Object(r.a)(m,2),f=g[0],h=g[1],E=Object(n.useState)(!1),v=Object(r.a)(E,2),b=v[0],k=v[1],N=Object(n.useState)(!1),j=Object(r.a)(N,2),O=j[0],C=j[1],S=Object(n.useState)([]),w=Object(r.a)(S,2),x=w[0],I=w[1];return Object(n.useEffect)(function(){fetch("https://ddragon.leagueoflegends.com/cdn/9.13.1/data/pt_BR/championFull.json").then(function(e){return e.json()}).then(function(e){return s(Object.values(e.data))})},[]),Object(n.useEffect)(function(){console.log(x)},[x]),c.a.createElement("div",{className:"div-main"},c.a.createElement("nav",{className:"header-nav"},c.a.createElement("ul",{className:"nav-ul"},c.a.createElement("li",null,c.a.createElement("a",{className:"nav-li",href:"index.html"},"Sobre")),c.a.createElement("li",null,c.a.createElement("a",{className:"nav-li",href:"champions.html"},"Campe\xf5es")),c.a.createElement("li",null,c.a.createElement("a",{className:"nav-li",href:"https://signup.br.leagueoflegends.com/pt/signup/index#/",target:"_blank",rel:"noopener noreferrer"},"Jogue!")))),c.a.createElement("button",{onClick:function(){return C(!O)}},"compare"),c.a.createElement("section",{className:"champion-list"},l.map(function(e,a){var t="https://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/"+e.image.full;return c.a.createElement(d,{id:e.id,key:a,text:e.name,imgsrc:t,onClick:function(){O?function(e){var a=x.findIndex(function(a){return a.id===e.id});-1!==a?x.splice(a,1):I(function(){return[].concat(Object(i.a)(x),[Object(o.a)({},e)])})}(e):k(!0),h(e)}})})),c.a.createElement(p.a,{className:"modal-style",isOpen:b,onRequestClose:function(){return k(!1)}},c.a.createElement(u,{champion:f,onClickClose:function(){return k(!1)}})))}),f=t(59),h=t(9);var E=function(){return c.a.createElement(f.a,null,c.a.createElement(h.a,{path:"/",exact:!0,component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,a,t){e.exports=t(177)},69:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.79cf6f69.chunk.js.map