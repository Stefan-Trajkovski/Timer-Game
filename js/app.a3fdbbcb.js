(()=>{"use strict";var i={6971:(i,t,e)=>{e(6992),e(8674),e(9601),e(7727);var r=e(9963),a=e(6252),n={id:"#app"},o=(0,a._)("div",{class:"pTest"}," Добредојдовте на ClickMaster играта, во оваа игра, во различни интервали, на екранот ќе се појави квадрат, целта е да се кликне на квадратот што е можно побрзо! Брзината на реакција ќе ја одреди гејмерската можност на играчите. ",-1),s=["disabled"];function u(i,t,e,u,l,c){var h=(0,a.up)("BlockVue"),k=(0,a.up)("ResultsVue");return(0,a.wg)(),(0,a.iD)("div",n,[o,(0,a.wy)((0,a._)("button",{onClick:t[0]||(t[0]=function(i){return c.funkcija()}),disabled:l.buttonDisabled}," Стисни да ја играш играта ",8,s),[[r.F8,!l.showPlayAgain]]),(0,a.wy)((0,a._)("button",{onClick:t[1]||(t[1]=function(i){return c.funkcija()})},"Играј повторно",512),[[r.F8,l.showPlayAgain]]),(0,a.Wm)(h,{showBlock:l.showBlock,vremePristignuvanje:l.vremePristignuvanje,onBananica:c.povratBlock},null,8,["showBlock","vremePristignuvanje","onBananica"]),(0,a.Wm)(k,{razlika:l.razlika,prikaziRezultati:l.prikaziRezultati},null,8,["razlika","prikaziRezultati"])])}e(2564),e(3843),e(3710);function l(i,t,e,r,n,o){return e.showBlock?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[0]||(t[0]=function(i){return o.funkcija()}),class:"block"})):(0,a.kq)("",!0)}const c={props:["showBlock","vremePristignuvanje"],methods:{funkcija:function(){this.prikaziRezultati=!0,this.vremeStisok=Date.now();var i=[this.prikaziRezultati,this.vremeStisok];this.$emit("bananica",i)}},data:function(){return{prikaziRezultati:!1,vremeStisok:""}}};var h=e(3744);const k=(0,h.Z)(c,[["render",l]]),v=k;var p=e(3577),f=["disabled"],d={style:{color:"rgb(208, 208, 152)"}};function z(i,t,e,r,n,o){return e.prikaziRezultati?((0,a.wg)(),(0,a.iD)("div",{key:0,disabled:i.t,class:"results"},[(0,a._)("h1",d,(0,p.zw)(this.uspeh),1)],8,f)):(0,a.kq)("",!0)}const b={props:["razlika","prikaziRezultati"],data:function(){return{uspeh:""}},updated:function(){this.razlika<=.3?this.uspeh="Супер, ти си вистински гејмер, успеа да го стиснеш квадратот за: "+this.razlika+" секунди":this.razlika>=.301&&this.razlika<=.5?this.uspeh="Ти направи среден успех, притоа го стисна квадратот за: "+this.razlika+" секунди":this.uspeh="Многу си спор, го стисна квадратот за: "+this.razlika+" секунди"}},w=(0,h.Z)(b,[["render",z]]),m=w,g={name:"App",components:{BlockVue:v,ResultsVue:m},methods:{funkcija:function(){var i=this;this.prikaziRezultati="",this.buttonDisabled=!0;var t=2*Math.random();setTimeout((function(){i.showBlock=!0,i.vremePristignuvanje=Date.now()}),1e3*t)},povratBlock:function(i){this.prikaziRezultati=i[0],this.vremeStisok=i[1],this.razlika=(this.vremeStisok-this.vremePristignuvanje)/1e3,this.showBlock=!1,this.showPlayAgain=!0}},data:function(){return{showBlock:!1,vremePristignuvanje:"",prikaziRezultati:"",vremeStisok:"",razlika:"",buttonDisabled:!1,showPlayAgain:!1}}},j=(0,h.Z)(g,[["render",u]]),y=j;(0,r.ri)(y).mount("#app")}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return i[r].call(n.exports,n,n.exports,e),n.exports}e.m=i,(()=>{var i=[];e.O=(t,r,a,n)=>{if(!r){var o=1/0;for(c=0;c<i.length;c++){for(var[r,a,n]=i[c],s=!0,u=0;u<r.length;u++)(!1&n||o>=n)&&Object.keys(e.O).every((i=>e.O[i](r[u])))?r.splice(u--,1):(s=!1,n<o&&(o=n));if(s){i.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=i.length;c>0&&i[c-1][2]>n;c--)i[c]=i[c-1];i[c]=[r,a,n]}})(),(()=>{e.d=(i,t)=>{for(var r in t)e.o(t,r)&&!e.o(i,r)&&Object.defineProperty(i,r,{enumerable:!0,get:t[r]})}})(),(()=>{e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()})(),(()=>{e.o=(i,t)=>Object.prototype.hasOwnProperty.call(i,t)})(),(()=>{var i={143:0};e.O.j=t=>0===i[t];var t=(t,r)=>{var a,n,[o,s,u]=r,l=0;if(o.some((t=>0!==i[t]))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(u)var c=u(e)}for(t&&t(r);l<o.length;l++)n=o[l],e.o(i,n)&&i[n]&&i[n][0](),i[n]=0;return e.O(c)},r=self["webpackChunkblogs2"]=self["webpackChunkblogs2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=e.O(void 0,[998],(()=>e(6971)));r=e.O(r)})();
//# sourceMappingURL=app.a3fdbbcb.js.map