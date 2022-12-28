(function(){"use strict";var e={5963:function(e,t,n){var r=n(9963),o=n(6252),a=n(3577);const i={class:"w-full flex"},s={class:"m-auto"},l={class:"text-center mb-6 text-3xl text-"},u={id:"ulLists"},c={id:"append",class:"justify-between"},f=["onClick"],m=["onClick"],d={class:"mt-5"};function p(e,t,n,p,h,g){const v=(0,o.up)("AppHeader");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v),(0,o._)("div",i,[(0,o._)("div",s,[(0,o._)("h1",l,"Number of To Do's "+(0,a.zw)(g.num),1),(0,o._)("div",u,[(0,o._)("ul",c,[(0,o.Uk)((0,a.zw)(e.get)+" ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.names,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{id:"listItem",class:"flex justify-between mb-1",key:t},[(0,o.Uk)((0,a.zw)(t)+". "+(0,a.zw)(e)+" ",1),(0,o._)("div",null,[(0,o._)("button",{class:"hover:bg-red-600 pl-3 pr-3 rounded-lg",onClick:e=>g.Done(t)},"/",8,f),(0,o._)("button",{class:"hover:bg-red-600 pl-3 pr-3 rounded-lg",onClick:e=>g.Delete(t)},"X",8,m)])])))),128))])]),(0,o._)("div",d,[(0,o.wy)((0,o._)("input",{class:"bg-slate-500 rounded-xl pl-2 text-pink-50",id:"in",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>h.newName=e)},null,512),[[r.nr,h.newName]]),(0,o._)("button",{class:"bg-gradient-to-t from-slate-500 to-teal-500 ml-4 rounded-l rounded-r p-1 hover:bg-teal-500",onClick:t[1]||(t[1]=(...e)=>g.Create&&g.Create(...e)),type:"submit"},"submit")])])])],64)}n(7658);const h={class:"w-full bg-slate-500 h-16 mb-4"},g=(0,o._)("h1",{class:"flex text-center justify-center text-5xl"},"To Do",-1),v=[g];function b(e,t){return(0,o.wg)(),(0,o.iD)("header",h,v)}var w=n(3744);const y={},k=(0,w.Z)(y,[["render",b]]);var x=k,_={components:{AppHeader:x},data(){return{newName:"",counter:0,names:[]}},created(){null!==localStorage.getItem("Storage_key")?this.names=JSON.parse(localStorage.getItem("Storage_key")):this.names=[]},computed:{num(){return this.names.length}},methods:{randomM(){return Math.random()},Create(){""!=this.newName?(this.names.push(this.newName),this.newName="",setTimeout((()=>{localStorage.setItem("Storage_key",JSON.stringify(this.names))}),500)):alert("Please enter a name")},Delete(e){this.names.splice(e,1),localStorage.setItem("Storage_key",JSON.stringify(this.names))},Done(e){console.log(this.names[e])}}};const O=(0,w.Z)(_,[["render",p]]);var S=O;(0,r.ri)(S).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkvue2"]=self["webpackChunkvue2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5963)}));r=n.O(r)})();
//# sourceMappingURL=app.ae471793.js.map