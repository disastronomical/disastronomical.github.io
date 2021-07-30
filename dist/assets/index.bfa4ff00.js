import{S as t,P as n,W as e,a as o,A as i,V as a,T as s,F as r,b as w,M as d,c as y,C as c,d as p,e as u,D as l,B as h,f as m,g as f,h as g,R as P,i as I}from"./vendor.a8662437.js";import{OrbitControls as M}from"https://cdn.jsdelivr.net/npm/three@0.117.0/examples/jsm/controls/OrbitControls.js";import v from"https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js";const T=new t,U=new n(75,window.innerWidth/window.innerHeight,.1,1e3),E=new e({antialias:!0});E.setSize(window.innerWidth,window.innerHeight),E.setPixelRatio(window.devicePixelRatio),document.body.appendChild(E.domElement);const x=new o(12040119);x.position.set(-25,0,30);const b=new i(12040119);T.add(x,b),window.addEventListener("resize",(()=>{U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),E.setSize(window.innerWidth,window.innerHeight),It()}),!1);const z=new M(U,E.domElement);z.minDistance=5,z.maxDistance=70,z.enablePan=!1,z.enableRotate=!1,z.enableZoom=!1,z.target.set(0,0,-1),U.position.setZ(28);var j=(new a).copy(U.position);const O=new s,L=O.load("./particle2.png");O.load("./HRBP.png"),O.load("./hyperrocketlogo2.jpg"),(new r).load("https://threejs.org/examples/fonts/optimer_regular.typeface.json",(function(t){var n=new w("HyperRocketbsc",{font:t,size:2.4,height:.1,curveSegments:15,bevelEnabled:!0,bevelThickness:.5,bevelSize:.31,bevelSegments:7});n.center();var e=new d({color:6842472}),o=new y(n,e);o.name="bhText",T.add(o),o.userData={URL:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xfedfab9dcc1624fd325efed8dd16431b3416ec52"}}));const Q=new c(5,5,.5,50),C=new d({map:(new s).load("C1.png"),side:p}),H=new y(Q,C);H.name="minicylinder1",H.position.x=-17.5,H.rotation.z=Math.PI/2,H.rotation.y=Math.PI/2,T.add(H);const R=new c(5,5,.5,50),S=new d({transparent:!0}),W=new y(R,S);W.name="minicylinder5S",W.material.opacity=1,W.position.z=17.5,W.position.x=11.5,W.rotation.z=Math.PI/2,W.rotation.y=Math.PI/2;const k=new c(5,5,.5,50),D=new u({map:(new s).load("C2.png"),side:l}),F=new y(k,D);F.name="minicylinder2",F.position.y=8.5,F.rotation.z=Math.PI/2,F.rotation.y=Math.PI/2,T.add(F);const A=new c(5,5,.5,50),B=new u({map:(new s).load("C3.png"),side:l}),N=new y(A,B);N.name="minicylinder3",N.position.y=-8.5,N.rotation.z=Math.PI/2,N.rotation.y=Math.PI/2,T.add(N);const X=new c(5,5,.5,50),Y=new u({map:(new s).load("C4.png"),side:l}),Z=new y(X,Y);Z.name="minicylinder4",Z.position.x=17.5,Z.rotation.z=Math.PI/2,Z.rotation.y=Math.PI/2,T.add(Z);const q=new c(5,5,.5,50),V=new u({map:(new s).load("hyperrocketlogo2.jpg"),side:l}),_=new y(q,V);_.name="minicylinder5",_.position.z=7.5,_.position.x=40,_.rotation.z=Math.PI/2,_.rotation.y=Math.PI/2;const G=new h,J=new Float32Array(54e3);for(let Mt=0;Mt<54e3;Mt++)J[Mt]=120*(1- -.5*Math.random()*(-15*Math.random()));const K=new m({size:.3,map:L,transparent:!0});G.setAttribute("position",new f(J,3));const $=new g(G,K);function tt(t,n){let e=new a(U.position.x,U.position.y,U.position.z);new v.Tween(e).to(t,n).onUpdate((()=>{U.position.set(e.x,e.y,e.z)})).start()}T.add($);let nt=new a;nt.set(z.target.x,z.target.y,z.target.z),(new a).set(0,0,0);let et=new a;et.set(0,0,-10);let ot=new a;ot.set(-28,H.position.y,H.position.z);let it=new a;it.set(F.position.x,18,F.position.z);let at=new a;at.set(N.position.x,-18,N.position.z);let st=new a;st.set(28,Z.position.y,Z.position.z),(new a).set(_.position.x,_.position.y,_.position.z);const rt=new P,wt=new I;let dt=!1,yt=!1,ct=!1,pt=!1;function ut(t){wt.x=t.offsetX/window.innerWidth*2-1,wt.y=-t.clientY/window.innerHeight*2+1,rt.setFromCamera(wt,U);const n=rt.intersectObjects(T.children,!0);if(i(H,n)>-1&&!dt){let t=function(t,n){e.y=t,o.y=n};dt=!0;var e={y:0},o={y:0};t(Math.PI/2,1.5*Math.PI/2);return new v.Tween(e).to(o,150).onUpdate((function(){H.rotation.y=e.y})).start(),dt}if(-1==i(H,n)&&dt){let t=function(t,n){e.y=t,o.y=n};dt=!1;e={y:0},o={y:0};t(1.5*Math.PI/2,Math.PI/2);return new v.Tween(e).to(o,450).onUpdate((function(){H.rotation.y=e.y})).start(),dt}if(i(F,n)>-1&&!yt){let t=function(t,n){e.y=t,o.y=n};yt=!0;e={y:0},o={y:0};t(Math.PI/2,1.2*Math.PI/2);return new v.Tween(e).to(o,150).onUpdate((function(){F.rotation.y=e.y})).start(),yt}if(-1==i(F,n)&&yt){let t=function(t,n){e.y=t,o.y=n};yt=!1;e={y:0},o={y:0};t(1.2*Math.PI/2,Math.PI/2);return new v.Tween(e).to(o,450).onUpdate((function(){F.rotation.y=e.y})).start(),yt}if(i(N,n)>-1&&!ct){let t=function(t,n){e.y=t,o.y=n};ct=!0;e={y:0},o={y:0};t(Math.PI/2,1.2*Math.PI/2);return new v.Tween(e).to(o,150).onUpdate((function(){N.rotation.y=e.y})).start(),ct}if(-1==i(N,n)&&ct){let t=function(t,n){e.y=t,o.y=n};ct=!1;e={y:0},o={y:0};t(1.2*Math.PI/2,Math.PI/2);return new v.Tween(e).to(o,450).onUpdate((function(){N.rotation.y=e.y})).start(),ct}if(i(Z,n)>-1&&!pt){let t=function(t,n){e.y=t,o.y=n};pt=!0;e={y:0},o={y:0};t(Math.PI/2,1.2*Math.PI/2);return new v.Tween(e).to(o,150).onUpdate((function(){Z.rotation.y=e.y})).start(),pt}if(-1==i(Z,n)&&pt){let t=function(t,n){e.y=t,o.y=n};pt=!1;e={y:0},o={y:0};t(1.2*Math.PI/2,Math.PI/2);return new v.Tween(e).to(o,450).onUpdate((function(){Z.rotation.y=e.y})).start(),pt}function i(t,n){for(var e=-1,o=0;o<n.length;o++)n[o].object.name==t.name&&(e=o);return e}}let lt=!1,ht=!1,mt=!1,ft=!1;function gt(t,n){for(var e=-1,o=0;o<n.length;o++)n[o].object.name==t.name&&(e=o);return e}window.addEventListener("click",(t=>{!function(t){wt.x=t.offsetX/window.innerWidth*2-1,wt.y=-t.clientY/window.innerHeight*2+1,rt.setFromCamera(wt,U);const n=rt.intersectObjects(T.children,!0);if(gt(T.getObjectByName("bhText"),n)>-1&&window.open(T.getObjectByName("bhText").userData.URL),gt(H,n)>-1&&!lt){let t=function(t,n){e.y=t,o.y=n};tl.to(".slide1",{delay:2.1,duration:.7,clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)"}),lt=!0;var e={y:0},o={y:0};return t(1.5*Math.PI/2,4.3*Math.PI),new v.Tween(e).to(o,2500).onUpdate((function(){H.rotation.y=e.y})).easing(v.Easing.Quintic.Out).start(),window.removeEventListener("mousemove",ut),new v.Tween(nt).to(ot,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),tt(new a(-28,H.position.y,7),2500),lt}if(gt(H,n)>-1&&lt){let t=function(t,n){e.y=t,o.y=n};return tl.to(".slide1",{duration:.7,clipPath:"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"}),e={y:0},o={y:0},t(4.3*Math.PI,4.5*Math.PI),new v.Tween(e).to(o,2500).onUpdate((function(){H.rotation.y=e.y})).easing(v.Easing.Quintic.Out).start(),new v.Tween(nt).to(et,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),lt=!1,tt(j,2500),window.addEventListener("mousemove",ut),lt}if(gt(F,n)>-1&&!ht){let t=function(t,n){e.y=t,o.y=n};return tl.to(".slide2",{delay:2.1,duration:.7,clipPath:"polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)"}),ht=!0,e={y:0},o={y:0},t(1.5*Math.PI/2,4.5*Math.PI),new v.Tween(e).to(o,2500).onUpdate((function(){F.rotation.y=e.y})).easing(v.Easing.Quintic.Out).start(),new v.Tween(nt).to(it,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),tt(new a(F.position.x,18,7),2500),window.removeEventListener("mousemove",ut),ht}if(gt(F,n)>-1&&ht)return tl.to(".slide2",{duration:.7,clipPath:"polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)"}),new v.Tween(nt).to(et,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),new v.Tween(H.position).to({y:0},1200).onUpdate((()=>{})).start(),new v.Tween(Z.position).to({y:0},1200).onUpdate((()=>{})).start(),ht=!1,tt(j,2500),window.addEventListener("mousemove",ut),ht;if(gt(N,n)>-1&&!mt){let t=function(t,n){e.y=t,o.y=n};return tl.to(".slide3",{delay:2.1,duration:.7,clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}),mt=!0,e={y:0},o={y:0},t(1.5*Math.PI/2,4.5*Math.PI),new v.Tween(e).to(o,2500).onUpdate((function(){N.rotation.y=e.y})).easing(v.Easing.Quintic.Out).start(),window.removeEventListener("mousemove",ut),new v.Tween(nt).to(at,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),new v.Tween(H.position).to({y:5},1200).delay(1500).onUpdate((()=>{})).start(),new v.Tween(Z.position).to({y:5},1200).delay(1500).onUpdate((()=>{})).start(),tt(new a(N.position.x,-18,7),2500),mt}if(gt(N,n)>-1&&mt)return tl.to(".slide3",{duration:.7,clipPath:"polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)"}),new v.Tween(nt).to(et,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),new v.Tween(H.position).to({y:0},1200).onUpdate((()=>{})).start(),new v.Tween(Z.position).to({y:0},1200).onUpdate((()=>{})).start(),mt=!1,tt(j,2500),window.addEventListener("mousemove",ut),mt;if(gt(Z,n)>-1&&!ft){let t=function(t,n){e.y=t,o.y=n};return tl.to(".slide4",{delay:2.1,duration:.7,clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}),ft=!0,e={y:0},o={y:0},t(1.5*Math.PI/2,4.6*Math.PI),new v.Tween(e).to(o,2500).onUpdate((function(){Z.rotation.y=e.y})).easing(v.Easing.Quintic.Out).start(),window.removeEventListener("mousemove",ut),new v.Tween(nt).to(st,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),tt(new a(28,Z.position.y,7),2500),ft}gt(Z,n)>-1&&ft&&(tl.to(".slide4",{duration:.7,clipPath:"polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)"}),new v.Tween(nt).to(et,2500).onUpdate((function(){z.target=nt})).easing(v.Easing.Quartic.InOut).start(),ft=!1,tt(j,2500),window.addEventListener("mousemove",ut))}(t)})),window.addEventListener("mousemove",ut);var Pt=function(){requestAnimationFrame(Pt),$.rotation.y-=35e-5,z.update(),It(),v.update()};function It(){E.render(T,U)}Pt();
