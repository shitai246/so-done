(function(Dj,CA){var Ds,CY,CK=Dj.document,Cz=Dj.location,EM=Dj.navigator,EX=Dj.jQuery,Da=Dj.$,B2=Array.prototype.push,Ci=Array.prototype.slice,EQ=Array.prototype.indexOf,CJ=Object.prototype.toString,Cr=Object.prototype.hasOwnProperty,Du=String.prototype.trim,C4=function(A,B){return new C4.fn.init(A,B,Ds)
},DM=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ET=/\S/,CB=/\s+/,CH=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,DY=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,CI=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,DV=/^[\],:{}\s]*$/,Cs=/(?:^|:|,)(?:\s*\[)+/g,D5=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,DE=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,Dm=/^-ms-/,B5=/-([\da-z])/gi,Dq=function(A,B){return(B+"").toUpperCase()
},EK=function(){if(CK.addEventListener){CK.removeEventListener("DOMContentLoaded",EK,false);
C4.ready()
}else{if(CK.readyState==="complete"){CK.detachEvent("onreadystatechange",EK);
C4.ready()
}}},DP={};
C4.fn=C4.prototype={constructor:C4,init:function(G,C,D){var A,B,E,F;
if(!G){return this
}if(G.nodeType){this.context=this[0]=G;
this.length=1;
return this
}if(typeof G==="string"){if(G.charAt(0)==="<"&&G.charAt(G.length-1)===">"&&G.length>=3){A=[null,G,null]
}else{A=DY.exec(G)
}if(A&&(A[1]||!C)){if(A[1]){C=C instanceof C4?C[0]:C;
F=(C&&C.nodeType?C.ownerDocument||C:CK);
G=C4.parseHTML(A[1],F,true);
if(CI.test(A[1])&&C4.isPlainObject(C)){this.attr.call(G,C,true)
}return C4.merge(this,G)
}else{B=CK.getElementById(A[2]);
if(B&&B.parentNode){if(B.id!==A[2]){return D.find(G)
}this.length=1;
this[0]=B
}this.context=CK;
this.selector=G;
return this
}}else{if(!C||C.jquery){return(C||D).find(G)
}else{return this.constructor(C).find(G)
}}}else{if(C4.isFunction(G)){return D.ready(G)
}}if(G.selector!==CA){this.selector=G.selector;
this.context=G.context
}return C4.makeArray(G,this)
},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length
},toArray:function(){return Ci.call(this)
},get:function(A){return A==null?this.toArray():(A<0?this[this.length+A]:this[A])
},pushStack:function(B,C,D){var A=C4.merge(this.constructor(),B);
A.prevObject=this;
A.context=this.context;
if(C==="find"){A.selector=this.selector+(this.selector?" ":"")+D
}else{if(C){A.selector=this.selector+"."+C+"("+D+")"
}}return A
},each:function(B,A){return C4.each(this,B,A)
},ready:function(A){C4.ready.promise().done(A);
return this
},eq:function(A){A=+A;
return A===-1?this.slice(A):this.slice(A,A+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(Ci.apply(this,arguments),"slice",Ci.call(arguments).join(","))
},map:function(A){return this.pushStack(C4.map(this,function(B,C){return A.call(B,C,B)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:B2,sort:[].sort,splice:[].splice};
C4.fn.init.prototype=C4.fn;
C4.extend=C4.fn.extend=function(){var D,A,E,G,F,C,H=arguments[0]||{},I=1,J=arguments.length,B=false;
if(typeof H==="boolean"){B=H;
H=arguments[1]||{};
I=2
}if(typeof H!=="object"&&!C4.isFunction(H)){H={}
}if(J===I){H=this;
--I
}for(;
I<J;
I++){if((D=arguments[I])!=null){for(A in D){E=H[A];
G=D[A];
if(H===G){continue
}if(B&&G&&(C4.isPlainObject(G)||(F=C4.isArray(G)))){if(F){F=false;
C=E&&C4.isArray(E)?E:[]
}else{C=E&&C4.isPlainObject(E)?E:{}
}H[A]=C4.extend(B,C,G)
}else{if(G!==CA){H[A]=G
}}}}}return H
};
C4.extend({noConflict:function(A){if(Dj.$===C4){Dj.$=Da
}if(A&&Dj.jQuery===C4){Dj.jQuery=EX
}return C4
},isReady:false,readyWait:1,holdReady:function(A){if(A){C4.readyWait++
}else{C4.ready(true)
}},ready:function(A){if(A===true?--C4.readyWait:C4.isReady){return 
}if(!CK.body){return setTimeout(C4.ready,1)
}C4.isReady=true;
if(A!==true&&--C4.readyWait>0){return 
}CY.resolveWith(CK,[C4]);
if(C4.fn.trigger){C4(CK).trigger("ready").off("ready")
}},isFunction:function(A){return C4.type(A)==="function"
},isArray:Array.isArray||function(A){return C4.type(A)==="array"
},isWindow:function(A){return A!=null&&A==A.window
},isNumeric:function(A){return !isNaN(parseFloat(A))&&isFinite(A)
},type:function(A){return A==null?String(A):DP[CJ.call(A)]||"object"
},isPlainObject:function(B){if(!B||C4.type(B)!=="object"||B.nodeType||C4.isWindow(B)){return false
}try{if(B.constructor&&!Cr.call(B,"constructor")&&!Cr.call(B.constructor.prototype,"isPrototypeOf")){return false
}}catch(C){return false
}var A;
for(A in B){}return A===CA||Cr.call(B,A)
},isEmptyObject:function(B){var A;
for(A in B){return false
}return true
},error:function(A){throw new Error(A)
},parseHTML:function(C,A,D){var B;
if(!C||typeof C!=="string"){return null
}if(typeof A==="boolean"){D=A;
A=0
}A=A||CK;
if((B=CI.exec(C))){return[A.createElement(B[1])]
}B=C4.buildFragment([C],A,D?null:[]);
return C4.merge([],(B.cacheable?C4.clone(B.fragment):B.fragment).childNodes)
},parseJSON:function(A){if(!A||typeof A!=="string"){return null
}A=C4.trim(A);
if(Dj.JSON&&Dj.JSON.parse){return Dj.JSON.parse(A)
}if(DV.test(A.replace(D5,"@").replace(DE,"]").replace(Cs,""))){return(new Function("return "+A))()
}C4.error("Invalid JSON: "+A)
},parseXML:function(D){var B,A;
if(!D||typeof D!=="string"){return null
}try{if(Dj.DOMParser){A=new DOMParser();
B=A.parseFromString(D,"text/xml")
}else{B=new ActiveXObject("Microsoft.XMLDOM");
B.async="false";
B.loadXML(D)
}}catch(C){B=CA
}if(!B||!B.documentElement||B.getElementsByTagName("parsererror").length){C4.error("Invalid XML: "+D)
}return B
},noop:function(){},globalEval:function(A){if(A&&ET.test(A)){(Dj.execScript||function(B){Dj["eval"].call(Dj,B)
})(A)
}},camelCase:function(A){return A.replace(Dm,"ms-").replace(B5,Dq)
},nodeName:function(B,A){return B.nodeName&&B.nodeName.toUpperCase()===A.toUpperCase()
},each:function(B,F,A){var E,D=0,C=B.length,G=C===CA||C4.isFunction(B);
if(A){if(G){for(E in B){if(F.apply(B[E],A)===false){break
}}}else{for(;
D<C;
){if(F.apply(B[D++],A)===false){break
}}}}else{if(G){for(E in B){if(F.call(B[E],E,B[E])===false){break
}}}else{for(;
D<C;
){if(F.call(B[D],D,B[D++])===false){break
}}}}return B
},trim:Du&&!Du.call("\uFEFF\xA0")?function(A){return A==null?"":Du.call(A)
}:function(A){return A==null?"":A.toString().replace(CH,"")
},makeArray:function(D,A){var C,B=A||[];
if(D!=null){C=C4.type(D);
if(D.length==null||C==="string"||C==="function"||C==="regexp"||C4.isWindow(D)){B2.call(B,D)
}else{C4.merge(B,D)
}}return B
},inArray:function(C,B,A){var D;
if(B){if(EQ){return EQ.call(B,C,A)
}D=B.length;
A=A?A<0?Math.max(0,D+A):A:0;
for(;
A<D;
A++){if(A in B&&B[A]===C){return A
}}}return -1
},merge:function(D,A){var E=A.length,B=D.length,C=0;
if(typeof E==="number"){for(;
C<E;
C++){D[B++]=A[C]
}}else{while(A[C]!==CA){D[B++]=A[C++]
}}D.length=B;
return D
},grep:function(E,F,G){var B,A=[],D=0,C=E.length;
G=!!G;
for(;
D<C;
D++){B=!!F(E[D],D);
if(G!==B){A.push(E[D])
}}return A
},map:function(E,C,A){var G,B,H=[],D=0,F=E.length,I=E instanceof C4||F!==CA&&typeof F==="number"&&((F>0&&E[0]&&E[F-1])||F===0||C4.isArray(E));
if(I){for(;
D<F;
D++){G=C(E[D],D,A);
if(G!=null){H[H.length]=G
}}}else{for(B in E){G=C(E[B],B,A);
if(G!=null){H[H.length]=G
}}}return H.concat.apply([],H)
},guid:1,proxy:function(D,B){var A,E,C;
if(typeof B==="string"){A=D[B];
B=D;
D=A
}if(!C4.isFunction(D)){return CA
}E=Ci.call(arguments,2);
C=function(){return D.apply(B,E.concat(Ci.call(arguments)))
};
C.guid=D.guid=D.guid||C.guid||C4.guid++;
return C
},access:function(H,A,F,C,J,D,E){var G,I=F==null,K=0,B=H.length;
if(F&&typeof F==="object"){for(K in F){C4.access(H,A,K,F[K],1,D,C)
}J=1
}else{if(C!==CA){G=E===CA&&C4.isFunction(C);
if(I){if(G){G=A;
A=function(L,M,N){return G.call(C4(L),N)
}
}else{A.call(H,C);
A=null
}}if(A){for(;
K<B;
K++){A(H[K],F,G?C.call(H[K],K,A(H[K],F)):C,E)
}}J=1
}}return J?H:I?A.call(H):B?A(H[0],F):D
},now:function(){return(new Date()).getTime()
}});
C4.ready.promise=function(C){if(!CY){CY=C4.Deferred();
if(CK.readyState==="complete"){setTimeout(C4.ready,1)
}else{if(CK.addEventListener){CK.addEventListener("DOMContentLoaded",EK,false);
Dj.addEventListener("load",C4.ready,false)
}else{CK.attachEvent("onreadystatechange",EK);
Dj.attachEvent("onload",C4.ready);
var D=false;
try{D=Dj.frameElement==null&&CK.documentElement
}catch(A){}if(D&&D.doScroll){(function B(){if(!C4.isReady){try{D.doScroll("left")
}catch(E){return setTimeout(B,50)
}C4.ready()
}})()
}}}}return CY.promise(C)
};
C4.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(B,A){DP["[object "+A+"]"]=A.toLowerCase()
});
Ds=C4(CK);
var DD={};
function C1(B){var A=DD[B]={};
C4.each(B.split(CB),function(C,D){A[D]=true
});
return A
}C4.Callbacks=function(D){D=typeof D==="string"?(DD[D]||C1(D)):C4.extend({},D);
var K,H,J,G,I,C,A=[],F=!D.once&&[],B=function(L){K=D.memory&&L;
H=true;
C=G||0;
G=0;
I=A.length;
J=true;
for(;
A&&C<I;
C++){if(A[C].apply(L[0],L[1])===false&&D.stopOnFalse){K=false;
break
}}J=false;
if(A){if(F){if(F.length){B(F.shift())
}}else{if(K){A=[]
}else{E.disable()
}}}},E={add:function(){if(A){var L=A.length;
(function M(N){C4.each(N,function(O,P){var Q=C4.type(P);
if(Q==="function"&&(!D.unique||!E.has(P))){A.push(P)
}else{if(P&&P.length&&Q!=="string"){M(P)
}}})
})(arguments);
if(J){I=A.length
}else{if(K){G=L;
B(K)
}}}return this
},remove:function(){if(A){C4.each(arguments,function(N,M){var L;
while((L=C4.inArray(M,A,L))>-1){A.splice(L,1);
if(J){if(L<=I){I--
}if(L<=C){C--
}}}})
}return this
},has:function(L){return C4.inArray(L,A)>-1
},empty:function(){A=[];
return this
},disable:function(){A=F=K=CA;
return this
},disabled:function(){return !A
},lock:function(){F=CA;
if(!K){E.disable()
}return this
},locked:function(){return !F
},fireWith:function(L,M){M=M||[];
M=[L,M.slice?M.slice():M];
if(A&&(!H||F)){if(J){F.push(M)
}else{B(M)
}}return this
},fire:function(){E.fireWith(this,arguments);
return this
},fired:function(){return !!H
}};
return E
};
C4.extend({Deferred:function(A){var C=[["resolve","done",C4.Callbacks("once memory"),"resolved"],["reject","fail",C4.Callbacks("once memory"),"rejected"],["notify","progress",C4.Callbacks("memory")]],B="pending",D={state:function(){return B
},always:function(){E.done(arguments).fail(arguments);
return this
},then:function(){var F=arguments;
return C4.Deferred(function(G){C4.each(C,function(I,J){var K=J[0],H=F[I];
E[J[1]](C4.isFunction(H)?function(){var L=H.apply(this,arguments);
if(L&&C4.isFunction(L.promise)){L.promise().done(G.resolve).fail(G.reject).progress(G.notify)
}else{G[K+"With"](this===E?G:this,[L])
}}:G[K])
});
F=null
}).promise()
},promise:function(F){return typeof F==="object"?C4.extend(F,D):D
}},E={};
D.pipe=D.then;
C4.each(C,function(H,I){var F=I[2],G=I[3];
D[I[1]]=F.add;
if(G){F.add(function(){B=G
},C[H^1][2].disable,C[2][2].lock)
}E[I[0]]=F.fire;
E[I[0]+"With"]=F.fireWith
});
D.promise(E);
if(A){A.call(E,E)
}return E
},when:function(I){var F=0,E=Ci.call(arguments),G=E.length,C=G!==1||(I&&C4.isFunction(I.promise))?G:0,D=C===1?I:C4.Deferred(),J=function(K,M,L){return function(N){M[K]=this;
L[K]=arguments.length>1?Ci.call(arguments):N;
if(L===A){D.notifyWith(M,L)
}else{if(!(--C)){D.resolveWith(M,L)
}}}
},A,H,B;
if(G>1){A=new Array(G);
H=new Array(G);
B=new Array(G);
for(;
F<G;
F++){if(E[F]&&C4.isFunction(E[F].promise)){E[F].promise().done(J(F,B,E)).fail(D.reject).progress(J(F,H,A))
}else{--C
}}}if(!C){D.resolveWith(B,E)
}return D.promise()
}});
C4.support=(function(){var K,H,C,G,L,J,F,I,B,M,D,E=CK.createElement("div");
E.setAttribute("className","t");
E.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
H=E.getElementsByTagName("*");
C=E.getElementsByTagName("a")[0];
C.style.cssText="top:1px;float:left;opacity:.5";
if(!H||!H.length||!C){return{}
}G=CK.createElement("select");
L=G.appendChild(CK.createElement("option"));
J=E.getElementsByTagName("input")[0];
K={leadingWhitespace:(E.firstChild.nodeType===3),tbody:!E.getElementsByTagName("tbody").length,htmlSerialize:!!E.getElementsByTagName("link").length,style:/top/.test(C.getAttribute("style")),hrefNormalized:(C.getAttribute("href")==="/a"),opacity:/^0.5/.test(C.style.opacity),cssFloat:!!C.style.cssFloat,checkOn:(J.value==="on"),optSelected:L.selected,getSetAttribute:E.className!=="t",enctype:!!CK.createElement("form").enctype,html5Clone:CK.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(CK.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
J.checked=true;
K.noCloneChecked=J.cloneNode(true).checked;
G.disabled=true;
K.optDisabled=!L.disabled;
try{delete E.test
}catch(A){K.deleteExpando=false
}if(!E.addEventListener&&E.attachEvent&&E.fireEvent){E.attachEvent("onclick",D=function(){K.noCloneEvent=false
});
E.cloneNode(true).fireEvent("onclick");
E.detachEvent("onclick",D)
}J=CK.createElement("input");
J.value="t";
J.setAttribute("type","radio");
K.radioValue=J.value==="t";
J.setAttribute("checked","checked");
J.setAttribute("name","t");
E.appendChild(J);
F=CK.createDocumentFragment();
F.appendChild(E.lastChild);
K.checkClone=F.cloneNode(true).cloneNode(true).lastChild.checked;
K.appendChecked=J.checked;
F.removeChild(J);
F.appendChild(E);
if(E.attachEvent){for(B in {submit:true,change:true,focusin:true}){I="on"+B;
M=(I in E);
if(!M){E.setAttribute(I,"return;");
M=(typeof E[I]==="function")
}K[B+"Bubbles"]=M
}}C4(function(){var S,O,Q,P,R="padding:0;margin:0;border:0;display:block;overflow:hidden;",N=CK.getElementsByTagName("body")[0];
if(!N){return 
}S=CK.createElement("div");
S.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
N.insertBefore(S,N.firstChild);
O=CK.createElement("div");
S.appendChild(O);
O.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
Q=O.getElementsByTagName("td");
Q[0].style.cssText="padding:0;margin:0;border:0;display:none";
M=(Q[0].offsetHeight===0);
Q[0].style.display="";
Q[1].style.display="none";
K.reliableHiddenOffsets=M&&(Q[0].offsetHeight===0);
O.innerHTML="";
O.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
K.boxSizing=(O.offsetWidth===4);
K.doesNotIncludeMarginInBodyOffset=(N.offsetTop!==1);
if(Dj.getComputedStyle){K.pixelPosition=(Dj.getComputedStyle(O,null)||{}).top!=="1%";
K.boxSizingReliable=(Dj.getComputedStyle(O,null)||{width:"4px"}).width==="4px";
P=CK.createElement("div");
P.style.cssText=O.style.cssText=R;
P.style.marginRight=P.style.width="0";
O.style.width="1px";
O.appendChild(P);
K.reliableMarginRight=!parseFloat((Dj.getComputedStyle(P,null)||{}).marginRight)
}if(typeof O.style.zoom!=="undefined"){O.innerHTML="";
O.style.cssText=R+"width:1px;padding:1px;display:inline;zoom:1";
K.inlineBlockNeedsLayout=(O.offsetWidth===3);
O.style.display="block";
O.style.overflow="visible";
O.innerHTML="<div></div>";
O.firstChild.style.width="5px";
K.shrinkWrapBlocks=(O.offsetWidth!==3);
S.style.zoom=1
}N.removeChild(S);
S=O=Q=P=null
});
F.removeChild(E);
H=C=G=L=J=F=E=null;
return K
})();
var B1=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,C2=/([A-Z])/g;
C4.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(C4.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(A){A=A.nodeType?C4.cache[A[C4.expando]]:A[C4.expando];
return !!A&&!DZ(A)
},data:function(K,D,I,J){if(!C4.acceptData(K)){return 
}var A,H,G=C4.expando,F=typeof D==="string",C=K.nodeType,B=C?C4.cache:K,E=C?K[G]:K[G]&&G;
if((!E||!B[E]||(!J&&!B[E].data))&&F&&I===CA){return 
}if(!E){if(C){K[G]=E=C4.deletedIds.pop()||++C4.uuid
}else{E=G
}}if(!B[E]){B[E]={};
if(!C){B[E].toJSON=C4.noop
}}if(typeof D==="object"||typeof D==="function"){if(J){B[E]=C4.extend(B[E],D)
}else{B[E].data=C4.extend(B[E].data,D)
}}A=B[E];
if(!J){if(!A.data){A.data={}
}A=A.data
}if(I!==CA){A[C4.camelCase(D)]=I
}if(F){H=A[D];
if(H==null){H=A[C4.camelCase(D)]
}}else{H=A
}return H
},removeData:function(I,D,H){if(!C4.acceptData(I)){return 
}var B,F,G,C=I.nodeType,A=C?C4.cache:I,E=C?I[C4.expando]:C4.expando;
if(!A[E]){return 
}if(D){B=H?A[E]:A[E].data;
if(B){if(!C4.isArray(D)){if(D in B){D=[D]
}else{D=C4.camelCase(D);
if(D in B){D=[D]
}else{D=D.split(" ")
}}}for(F=0,G=D.length;
F<G;
F++){delete B[D[F]]
}if(!(H?DZ:C4.isEmptyObject)(B)){return 
}}}if(!H){delete A[E].data;
if(!DZ(A[E])){return 
}}if(C){C4.cleanData([I],true)
}else{if(C4.support.deleteExpando||A!=A.window){delete A[E]
}else{A[E]=null
}}},_data:function(A,B,C){return C4.data(A,B,C,true)
},acceptData:function(B){var A=B.nodeName&&C4.noData[B.nodeName.toLowerCase()];
return !A||A!==true&&B.getAttribute("classid")===A
}});
C4.fn.extend({data:function(D,A){var I,G,C,E,J,F=this[0],B=0,H=null;
if(D===CA){if(this.length){H=C4.data(F);
if(F.nodeType===1&&!C4._data(F,"parsedAttrs")){C=F.attributes;
for(J=C.length;
B<J;
B++){E=C[B].name;
if(E.indexOf("data-")===0){E=C4.camelCase(E.substring(5));
Ct(F,E,H[E])
}}C4._data(F,"parsedAttrs",true)
}}return H
}if(typeof D==="object"){return this.each(function(){C4.data(this,D)
})
}I=D.split(".",2);
I[1]=I[1]?"."+I[1]:"";
G=I[1]+"!";
return C4.access(this,function(K){if(K===CA){H=this.triggerHandler("getData"+G,[I[0]]);
if(H===CA&&F){H=C4.data(F,D);
H=Ct(F,D,H)
}return H===CA&&I[1]?this.data(I[0]):H
}I[1]=K;
this.each(function(){var L=C4(this);
L.triggerHandler("setData"+G,I);
C4.data(this,D,K);
L.triggerHandler("changeData"+G,I)
})
},null,A,arguments.length>1,null,false)
},removeData:function(A){return this.each(function(){C4.removeData(this,A)
})
}});
function Ct(E,A,B){if(B===CA&&E.nodeType===1){var C="data-"+A.replace(C2,"-$1").toLowerCase();
B=E.getAttribute(C);
if(typeof B==="string"){try{B=B==="true"?true:B==="false"?false:B==="null"?null:+B+""===B?+B:B1.test(B)?C4.parseJSON(B):B
}catch(D){}C4.data(E,A,B)
}else{B=CA
}}return B
}function DZ(B){var A;
for(A in B){if(A==="data"&&C4.isEmptyObject(B[A])){continue
}if(A!=="toJSON"){return false
}}return true
}C4.extend({queue:function(A,B,C){var D;
if(A){B=(B||"fx")+"queue";
D=C4._data(A,B);
if(C){if(!D||C4.isArray(C)){D=C4._data(A,B,C4.makeArray(C))
}else{D.push(C)
}}return D||[]
}},dequeue:function(B,C){C=C||"fx";
var E=C4.queue(B,C),F=E.length,D=E.shift(),G=C4._queueHooks(B,C),A=function(){C4.dequeue(B,C)
};
if(D==="inprogress"){D=E.shift();
F--
}if(D){if(C==="fx"){E.unshift("inprogress")
}delete G.stop;
D.call(B,A,G)
}if(!F&&G){G.empty.fire()
}},_queueHooks:function(C,A){var B=A+"queueHooks";
return C4._data(C,B)||C4._data(C,B,{empty:C4.Callbacks("once memory").add(function(){C4.removeData(C,A+"queue",true);
C4.removeData(C,B,true)
})})
}});
C4.fn.extend({queue:function(B,A){var C=2;
if(typeof B!=="string"){A=B;
B="fx";
C--
}if(arguments.length<C){return C4.queue(this[0],B)
}return A===CA?this:this.each(function(){var D=C4.queue(this,B,A);
C4._queueHooks(this,B);
if(B==="fx"&&D[0]!=="inprogress"){C4.dequeue(this,B)
}})
},dequeue:function(A){return this.each(function(){C4.dequeue(this,A)
})
},delay:function(B,A){B=C4.fx?C4.fx.speeds[B]||B:B;
A=A||"fx";
return this.queue(A,function(D,E){var C=setTimeout(D,B);
E.stop=function(){clearTimeout(C)
}
})
},clearQueue:function(A){return this.queue(A||"fx",[])
},promise:function(A,B){var F,E=1,G=C4.Deferred(),C=this,H=this.length,D=function(){if(!(--E)){G.resolveWith(C,[C])
}};
if(typeof A!=="string"){B=A;
A=CA
}A=A||"fx";
while(H--){F=C4._data(C[H],A+"queueHooks");
if(F&&F.empty){E++;
F.empty.add(D)
}}D();
return G.promise(B)
}});
var DJ,CV,C3,DA=/[\t\r\n]/g,DN=/\r/g,D6=/^(?:button|input)$/i,Cb=/^(?:button|input|object|select|textarea)$/i,CL=/^a(?:rea|)$/i,DF=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,D8=C4.support.getSetAttribute;
C4.fn.extend({attr:function(A,B){return C4.access(this,C4.attr,A,B,arguments.length>1)
},removeAttr:function(A){return this.each(function(){C4.removeAttr(this,A)
})
},prop:function(A,B){return C4.access(this,C4.prop,A,B,arguments.length>1)
},removeProp:function(A){A=C4.propFix[A]||A;
return this.each(function(){try{this[A]=CA;
delete this[A]
}catch(B){}})
},addClass:function(D){var B,A,F,E,C,G,H;
if(C4.isFunction(D)){return this.each(function(I){C4(this).addClass(D.call(this,I,this.className))
})
}if(D&&typeof D==="string"){B=D.split(CB);
for(A=0,F=this.length;
A<F;
A++){E=this[A];
if(E.nodeType===1){if(!E.className&&B.length===1){E.className=D
}else{C=" "+E.className+" ";
for(G=0,H=B.length;
G<H;
G++){if(!~C.indexOf(" "+B[G]+" ")){C+=B[G]+" "
}}E.className=C4.trim(C)
}}}}return this
},removeClass:function(B){var E,D,C,G,F,A,H;
if(C4.isFunction(B)){return this.each(function(I){C4(this).removeClass(B.call(this,I,this.className))
})
}if((B&&typeof B==="string")||B===CA){E=(B||"").split(CB);
for(A=0,H=this.length;
A<H;
A++){C=this[A];
if(C.nodeType===1&&C.className){D=(" "+C.className+" ").replace(DA," ");
for(G=0,F=E.length;
G<F;
G++){while(D.indexOf(" "+E[G]+" ")>-1){D=D.replace(" "+E[G]+" "," ")
}}C.className=B?C4.trim(D):""
}}}return this
},toggleClass:function(C,B){var A=typeof C,D=typeof B==="boolean";
if(C4.isFunction(C)){return this.each(function(E){C4(this).toggleClass(C.call(this,E,this.className,B),B)
})
}return this.each(function(){if(A==="string"){var G,H=0,I=C4(this),F=B,E=C.split(CB);
while((G=E[H++])){F=D?F:!I.hasClass(G);
I[F?"addClass":"removeClass"](G)
}}else{if(A==="undefined"||A==="boolean"){if(this.className){C4._data(this,"__className__",this.className)
}this.className=this.className||C===false?"":C4._data(this,"__className__")||""
}}})
},hasClass:function(D){var C=" "+D+" ",A=0,B=this.length;
for(;
A<B;
A++){if(this[A].nodeType===1&&(" "+this[A].className+" ").replace(DA," ").indexOf(C)>-1){return true
}}return false
},val:function(B){var E,C,D,A=this[0];
if(!arguments.length){if(A){E=C4.valHooks[A.type]||C4.valHooks[A.nodeName.toLowerCase()];
if(E&&"get" in E&&(C=E.get(A,"value"))!==CA){return C
}C=A.value;
return typeof C==="string"?C.replace(DN,""):C==null?"":C
}return 
}D=C4.isFunction(B);
return this.each(function(G){var F,H=C4(this);
if(this.nodeType!==1){return 
}if(D){F=B.call(this,G,H.val())
}else{F=B
}if(F==null){F=""
}else{if(typeof F==="number"){F+=""
}else{if(C4.isArray(F)){F=C4.map(F,function(I){return I==null?"":I+""
})
}}}E=C4.valHooks[this.type]||C4.valHooks[this.nodeName.toLowerCase()];
if(!E||!("set" in E)||E.set(this,F,"value")===CA){this.value=F
}})
}});
C4.extend({valHooks:{option:{get:function(A){var B=A.attributes.value;
return !B||B.specified?A.value:A.text
}},select:{get:function(A){var F,D,G,I,H=A.selectedIndex,B=[],C=A.options,E=A.type==="select-one";
if(H<0){return null
}D=E?H:0;
G=E?H+1:C.length;
for(;
D<G;
D++){I=C[D];
if(I.selected&&(C4.support.optDisabled?!I.disabled:I.getAttribute("disabled")===null)&&(!I.parentNode.disabled||!C4.nodeName(I.parentNode,"optgroup"))){F=C4(I).val();
if(E){return F
}B.push(F)
}}if(E&&!B.length&&C.length){return C4(C[H]).val()
}return B
},set:function(A,C){var B=C4.makeArray(C);
C4(A).find("option").each(function(){this.selected=C4.inArray(C4(this).val(),B)>=0
});
if(!B.length){A.selectedIndex=-1
}return B
}}},attrFn:{},attr:function(B,E,G,C){var A,H,D,F=B.nodeType;
if(!B||F===3||F===8||F===2){return 
}if(C&&C4.isFunction(C4.fn[E])){return C4(B)[E](G)
}if(typeof B.getAttribute==="undefined"){return C4.prop(B,E,G)
}D=F!==1||!C4.isXMLDoc(B);
if(D){E=E.toLowerCase();
H=C4.attrHooks[E]||(DF.test(E)?CV:DJ)
}if(G!==CA){if(G===null){C4.removeAttr(B,E);
return 
}else{if(H&&"set" in H&&D&&(A=H.set(B,G,E))!==CA){return A
}else{B.setAttribute(E,""+G);
return G
}}}else{if(H&&"get" in H&&D&&(A=H.get(B,E))!==null){return A
}else{A=B.getAttribute(E);
return A===null?CA:A
}}},removeAttr:function(D,B){var C,F,E,G,A=0;
if(B&&D.nodeType===1){F=B.split(CB);
for(;
A<F.length;
A++){E=F[A];
if(E){C=C4.propFix[E]||E;
G=DF.test(E);
if(!G){C4.attr(D,E,"")
}D.removeAttribute(D8?E:C);
if(G&&C in D){D[C]=false
}}}}},attrHooks:{type:{set:function(B,A){if(D6.test(B.nodeName)&&B.parentNode){C4.error("type property can't be changed")
}else{if(!C4.support.radioValue&&A==="radio"&&C4.nodeName(B,"input")){var C=B.value;
B.setAttribute("type",A);
if(C){B.value=C
}return A
}}}},value:{get:function(B,A){if(DJ&&C4.nodeName(B,"button")){return DJ.get(B,A)
}return A in B?B.value:null
},set:function(A,C,B){if(DJ&&C4.nodeName(A,"button")){return DJ.set(A,C,B)
}A.value=C
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(B,D,F){var A,G,C,E=B.nodeType;
if(!B||E===3||E===8||E===2){return 
}C=E!==1||!C4.isXMLDoc(B);
if(C){D=C4.propFix[D]||D;
G=C4.propHooks[D]
}if(F!==CA){if(G&&"set" in G&&(A=G.set(B,F,D))!==CA){return A
}else{return(B[D]=F)
}}else{if(G&&"get" in G&&(A=G.get(B,D))!==null){return A
}else{return B[D]
}}},propHooks:{tabIndex:{get:function(B){var A=B.getAttributeNode("tabindex");
return A&&A.specified?parseInt(A.value,10):Cb.test(B.nodeName)||CL.test(B.nodeName)&&B.href?0:CA
}}}});
CV={get:function(B,D){var C,A=C4.prop(B,D);
return A===true||typeof A!=="boolean"&&(C=B.getAttributeNode(D))&&C.nodeValue!==false?D.toLowerCase():CA
},set:function(B,C,D){var A;
if(C===false){C4.removeAttr(B,D)
}else{A=C4.propFix[D]||D;
if(A in B){B[A]=true
}B.setAttribute(D,D.toLowerCase())
}return D
}};
if(!D8){C3={name:true,id:true,coords:true};
DJ=C4.valHooks.button={get:function(C,A){var B;
B=C.getAttributeNode(A);
return B&&(C3[A]?B.value!=="":B.specified)?B.value:CA
},set:function(A,C,B){var D=A.getAttributeNode(B);
if(!D){D=CK.createAttribute(B);
A.setAttributeNode(D)
}return(D.value=C+"")
}};
C4.each(["width","height"],function(B,A){C4.attrHooks[A]=C4.extend(C4.attrHooks[A],{set:function(D,C){if(C===""){D.setAttribute(A,"auto");
return C
}}})
});
C4.attrHooks.contenteditable={get:DJ.get,set:function(A,C,B){if(C===""){C="false"
}DJ.set(A,C,B)
}}
}if(!C4.support.hrefNormalized){C4.each(["href","src","width","height"],function(B,A){C4.attrHooks[A]=C4.extend(C4.attrHooks[A],{get:function(C){var D=C.getAttribute(A,2);
return D===null?CA:D
}})
})
}if(!C4.support.style){C4.attrHooks.style={get:function(A){return A.style.cssText.toLowerCase()||CA
},set:function(A,B){return(A.style.cssText=""+B)
}}
}if(!C4.support.optSelected){C4.propHooks.selected=C4.extend(C4.propHooks.selected,{get:function(B){var A=B.parentNode;
if(A){A.selectedIndex;
if(A.parentNode){A.parentNode.selectedIndex
}}return null
}})
}if(!C4.support.enctype){C4.propFix.enctype="encoding"
}if(!C4.support.checkOn){C4.each(["radio","checkbox"],function(){C4.valHooks[this]={get:function(A){return A.getAttribute("value")===null?"on":A.value
}}
})
}C4.each(["radio","checkbox"],function(){C4.valHooks[this]=C4.extend(C4.valHooks[this],{set:function(A,B){if(C4.isArray(B)){return(A.checked=C4.inArray(C4(A).val(),B)>=0)
}}})
});
var Cl=/^(?:textarea|input|select)$/i,Ca=/^([^\.]*|)(?:\.(.+)|)$/,CO=/(?:^|\s)hover(\.\S+|)\b/,D2=/^key/,CT=/^(?:mouse|contextmenu)|click/,De=/^(?:focusinfocus|focusoutblur)$/,CX=function(A){return C4.event.special.hover?A:A.replace(CO,"mouseenter$1 mouseleave$1")
};
C4.event={add:function(P,C,D,N,O){var G,A,L,I,F,M,K,B,H,J,E;
if(P.nodeType===3||P.nodeType===8||!C||!D||!(G=C4._data(P))){return 
}if(D.handler){H=D;
D=H.handler;
O=H.selector
}if(!D.guid){D.guid=C4.guid++
}L=G.events;
if(!L){G.events=L={}
}A=G.handle;
if(!A){G.handle=A=function(Q){return typeof C4!=="undefined"&&(!Q||C4.event.triggered!==Q.type)?C4.event.dispatch.apply(A.elem,arguments):CA
};
A.elem=P
}C=C4.trim(CX(C)).split(" ");
for(I=0;
I<C.length;
I++){F=Ca.exec(C[I])||[];
M=F[1];
K=(F[2]||"").split(".").sort();
E=C4.event.special[M]||{};
M=(O?E.delegateType:E.bindType)||M;
E=C4.event.special[M]||{};
B=C4.extend({type:M,origType:F[1],data:N,handler:D,guid:D.guid,selector:O,namespace:K.join(".")},H);
J=L[M];
if(!J){J=L[M]=[];
J.delegateCount=0;
if(!E.setup||E.setup.call(P,N,K,A)===false){if(P.addEventListener){P.addEventListener(M,A,false)
}else{if(P.attachEvent){P.attachEvent("on"+M,A)
}}}}if(E.add){E.add.call(P,B);
if(!B.handler.guid){B.handler.guid=D.guid
}}if(O){J.splice(J.delegateCount++,0,B)
}else{J.push(B)
}C4.event.global[M]=true
}P=null
},global:{},remove:function(Q,O,D,P,C){var J,L,M,G,I,N,B,H,K,F,A,E=C4.hasData(Q)&&C4._data(Q);
if(!E||!(H=E.events)){return 
}O=C4.trim(CX(O||"")).split(" ");
for(J=0;
J<O.length;
J++){L=Ca.exec(O[J])||[];
M=G=L[1];
I=L[2];
if(!M){for(M in H){C4.event.remove(Q,M+O[J],D,P,true)
}continue
}K=C4.event.special[M]||{};
M=(P?K.delegateType:K.bindType)||M;
F=H[M]||[];
N=F.length;
I=I?new RegExp("(^|\\.)"+I.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(B=0;
B<F.length;
B++){A=F[B];
if((C||G===A.origType)&&(!D||D.guid===A.guid)&&(!I||I.test(A.namespace))&&(!P||P===A.selector||P==="**"&&A.selector)){F.splice(B--,1);
if(A.selector){F.delegateCount--
}if(K.remove){K.remove.call(Q,A)
}}}if(F.length===0&&N!==F.length){if(!K.teardown||K.teardown.call(Q,I,E.handle)===false){C4.removeEvent(Q,M,E.handle)
}delete H[M]
}}if(C4.isEmptyObject(H)){delete E.handle;
C4.removeData(Q,"events",true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(C,N,D,L){if(D&&(D.nodeType===3||D.nodeType===8)){return 
}var I,P,G,A,F,O,B,K,H,M,E=C.type||C,J=[];
if(De.test(E+C4.event.triggered)){return 
}if(E.indexOf("!")>=0){E=E.slice(0,-1);
P=true
}if(E.indexOf(".")>=0){J=E.split(".");
E=J.shift();
J.sort()
}if((!D||C4.event.customEvent[E])&&!C4.event.global[E]){return 
}C=typeof C==="object"?C[C4.expando]?C:new C4.Event(E,C):new C4.Event(E);
C.type=E;
C.isTrigger=true;
C.exclusive=P;
C.namespace=J.join(".");
C.namespace_re=C.namespace?new RegExp("(^|\\.)"+J.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
O=E.indexOf(":")<0?"on"+E:"";
if(!D){I=C4.cache;
for(G in I){if(I[G].events&&I[G].events[E]){C4.event.trigger(C,N,I[G].handle.elem,true)
}}return 
}C.result=CA;
if(!C.target){C.target=D
}N=N!=null?C4.makeArray(N):[];
N.unshift(C);
B=C4.event.special[E]||{};
if(B.trigger&&B.trigger.apply(D,N)===false){return 
}H=[[D,B.bindType||E]];
if(!L&&!B.noBubble&&!C4.isWindow(D)){M=B.delegateType||E;
A=De.test(M+E)?D:D.parentNode;
for(F=D;
A;
A=A.parentNode){H.push([A,M]);
F=A
}if(F===(D.ownerDocument||CK)){H.push([F.defaultView||F.parentWindow||Dj,M])
}}for(G=0;
G<H.length&&!C.isPropagationStopped();
G++){A=H[G][0];
C.type=H[G][1];
K=(C4._data(A,"events")||{})[C.type]&&C4._data(A,"handle");
if(K){K.apply(A,N)
}K=O&&A[O];
if(K&&C4.acceptData(A)&&K.apply(A,N)===false){C.preventDefault()
}}C.type=E;
if(!L&&!C.isDefaultPrevented()){if((!B._default||B._default.apply(D.ownerDocument,N)===false)&&!(E==="click"&&C4.nodeName(D,"a"))&&C4.acceptData(D)){if(O&&D[E]&&((E!=="focus"&&E!=="blur")||C.target.offsetWidth!==0)&&!C4.isWindow(D)){F=D[O];
if(F){D[O]=null
}C4.event.triggered=E;
D[E]();
C4.event.triggered=CA;
if(F){D[O]=F
}}}}return C.result
},dispatch:function(I){I=C4.event.fix(I||Dj.event);
var J,B,L,M,D,C,O,G,Q,N,P=((C4._data(this,"events")||{})[I.type]||[]),K=P.delegateCount,A=[].slice.call(arguments),H=!I.exclusive&&!I.namespace,E=C4.event.special[I.type]||{},F=[];
A[0]=I;
I.delegateTarget=this;
if(E.preDispatch&&E.preDispatch.call(this,I)===false){return 
}if(K&&!(I.button&&I.type==="click")){for(L=I.target;
L!=this;
L=L.parentNode||this){if(L.disabled!==true||I.type!=="click"){D={};
O=[];
for(J=0;
J<K;
J++){G=P[J];
Q=G.selector;
if(D[Q]===CA){D[Q]=C4(Q,this).index(L)>=0
}if(D[Q]){O.push(G)
}}if(O.length){F.push({elem:L,matches:O})
}}}}if(P.length>K){F.push({elem:this,matches:P.slice(K)})
}for(J=0;
J<F.length&&!I.isPropagationStopped();
J++){C=F[J];
I.currentTarget=C.elem;
for(B=0;
B<C.matches.length&&!I.isImmediatePropagationStopped();
B++){G=C.matches[B];
if(H||(!I.namespace&&!G.namespace)||I.namespace_re&&I.namespace_re.test(G.namespace)){I.data=G.data;
I.handleObj=G;
M=((C4.event.special[G.origType]||{}).handle||G.handler).apply(C.elem,A);
if(M!==CA){I.result=M;
if(M===false){I.preventDefault();
I.stopPropagation()
}}}}}if(E.postDispatch){E.postDispatch.call(this,I)
}return I.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(B,A){if(B.which==null){B.which=A.charCode!=null?A.charCode:A.keyCode
}return B
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(D,A){var C,B,G,E=A.button,F=A.fromElement;
if(D.pageX==null&&A.clientX!=null){C=D.target.ownerDocument||CK;
B=C.documentElement;
G=C.body;
D.pageX=A.clientX+(B&&B.scrollLeft||G&&G.scrollLeft||0)-(B&&B.clientLeft||G&&G.clientLeft||0);
D.pageY=A.clientY+(B&&B.scrollTop||G&&G.scrollTop||0)-(B&&B.clientTop||G&&G.clientTop||0)
}if(!D.relatedTarget&&F){D.relatedTarget=F===D.target?A.toElement:F
}if(!D.which&&E!==CA){D.which=(E&1?1:(E&2?3:(E&4?2:0)))
}return D
}},fix:function(A){if(A[C4.expando]){return A
}var D,E,F=A,C=C4.event.fixHooks[A.type]||{},B=C.props?this.props.concat(C.props):this.props;
A=C4.Event(F);
for(D=B.length;
D;
){E=B[--D];
A[E]=F[E]
}if(!A.target){A.target=F.srcElement||CK
}if(A.target.nodeType===3){A.target=A.target.parentNode
}A.metaKey=!!A.metaKey;
return C.filter?C.filter(A,F):A
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(C,A,B){if(C4.isWindow(this)){this.onbeforeunload=B
}},teardown:function(B,A){if(this.onbeforeunload===A){this.onbeforeunload=null
}}}},simulate:function(A,B,E,C){var D=C4.extend(new C4.Event(),E,{type:A,isSimulated:true,originalEvent:{}});
if(C){C4.event.trigger(D,null,B)
}else{C4.event.dispatch.call(B,D)
}if(D.isDefaultPrevented()){E.preventDefault()
}}};
C4.event.handle=C4.event.dispatch;
C4.removeEvent=CK.removeEventListener?function(A,B,C){if(A.removeEventListener){A.removeEventListener(B,C,false)
}}:function(A,B,C){var D="on"+B;
if(A.detachEvent){if(typeof A[D]==="undefined"){A[D]=null
}A.detachEvent(D,C)
}};
C4.Event=function(B,A){if(!(this instanceof C4.Event)){return new C4.Event(B,A)
}if(B&&B.type){this.originalEvent=B;
this.type=B.type;
this.isDefaultPrevented=(B.defaultPrevented||B.returnValue===false||B.getPreventDefault&&B.getPreventDefault())?DO:CC
}else{this.type=B
}if(A){C4.extend(this,A)
}this.timeStamp=B&&B.timeStamp||C4.now();
this[C4.expando]=true
};
function CC(){return false
}function DO(){return true
}C4.Event.prototype={preventDefault:function(){this.isDefaultPrevented=DO;
var A=this.originalEvent;
if(!A){return 
}if(A.preventDefault){A.preventDefault()
}else{A.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=DO;
var A=this.originalEvent;
if(!A){return 
}if(A.stopPropagation){A.stopPropagation()
}A.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=DO;
this.stopPropagation()
},isDefaultPrevented:CC,isPropagationStopped:CC,isImmediatePropagationStopped:CC};
C4.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(B,A){C4.event.special[B]={delegateType:A,bindType:A,handle:function(E){var G,C=this,D=E.relatedTarget,F=E.handleObj,H=F.selector;
if(!D||(D!==C&&!C4.contains(C,D))){E.type=F.origType;
G=F.handler.apply(this,arguments);
E.type=A
}return G
}}
});
if(!C4.support.submitBubbles){C4.event.special.submit={setup:function(){if(C4.nodeName(this,"form")){return false
}C4.event.add(this,"click._submit keypress._submit",function(B){var C=B.target,A=C4.nodeName(C,"input")||C4.nodeName(C,"button")?C.form:CA;
if(A&&!C4._data(A,"_submit_attached")){C4.event.add(A,"submit._submit",function(D){D._submit_bubble=true
});
C4._data(A,"_submit_attached",true)
}})
},postDispatch:function(A){if(A._submit_bubble){delete A._submit_bubble;
if(this.parentNode&&!A.isTrigger){C4.event.simulate("submit",this.parentNode,A,true)
}}},teardown:function(){if(C4.nodeName(this,"form")){return false
}C4.event.remove(this,"._submit")
}}
}if(!C4.support.changeBubbles){C4.event.special.change={setup:function(){if(Cl.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){C4.event.add(this,"propertychange._change",function(A){if(A.originalEvent.propertyName==="checked"){this._just_changed=true
}});
C4.event.add(this,"click._change",function(A){if(this._just_changed&&!A.isTrigger){this._just_changed=false
}C4.event.simulate("change",this,A,true)
})
}return false
}C4.event.add(this,"beforeactivate._change",function(A){var B=A.target;
if(Cl.test(B.nodeName)&&!C4._data(B,"_change_attached")){C4.event.add(B,"change._change",function(C){if(this.parentNode&&!C.isSimulated&&!C.isTrigger){C4.event.simulate("change",this.parentNode,C,true)
}});
C4._data(B,"_change_attached",true)
}})
},handle:function(B){var A=B.target;
if(this!==A||B.isSimulated||B.isTrigger||(A.type!=="radio"&&A.type!=="checkbox")){return B.handleObj.handler.apply(this,arguments)
}},teardown:function(){C4.event.remove(this,"._change");
return !Cl.test(this.nodeName)
}}
}if(!C4.support.focusinBubbles){C4.each({focus:"focusin",blur:"focusout"},function(C,D){var B=0,A=function(E){C4.event.simulate(D,E.target,C4.event.fix(E),true)
};
C4.event.special[D]={setup:function(){if(B++===0){CK.addEventListener(C,A,true)
}},teardown:function(){if(--B===0){CK.removeEventListener(C,A,true)
}}}
})
}C4.fn.extend({on:function(A,G,B,C,E){var F,D;
if(typeof A==="object"){if(typeof G!=="string"){B=B||G;
G=CA
}for(D in A){this.on(D,G,B,A[D],E)
}return this
}if(B==null&&C==null){C=G;
B=G=CA
}else{if(C==null){if(typeof G==="string"){C=B;
B=CA
}else{C=B;
B=G;
G=CA
}}}if(C===false){C=CC
}else{if(!C){return this
}}if(E===1){F=C;
C=function(H){C4().off(H);
return F.apply(this,arguments)
};
C.guid=F.guid||(F.guid=C4.guid++)
}return this.each(function(){C4.event.add(this,A,C,B,G)
})
},one:function(B,D,C,A){return this.on(B,D,C,A,1)
},off:function(A,E,D){var C,B;
if(A&&A.preventDefault&&A.handleObj){C=A.handleObj;
C4(A.delegateTarget).off(C.namespace?C.origType+"."+C.namespace:C.origType,C.selector,C.handler);
return this
}if(typeof A==="object"){for(B in A){this.off(B,E,A[B])
}return this
}if(E===false||typeof E==="function"){D=E;
E=CA
}if(D===false){D=CC
}return this.each(function(){C4.event.remove(this,A,D,E)
})
},bind:function(B,C,A){return this.on(B,null,C,A)
},unbind:function(A,B){return this.off(A,null,B)
},live:function(B,C,A){C4(this.context).on(B,this.selector,C,A);
return this
},die:function(A,B){C4(this.context).off(A,this.selector||"**",B);
return this
},delegate:function(D,B,C,A){return this.on(B,D,C,A)
},undelegate:function(B,A,C){return arguments.length==1?this.off(B,"**"):this.off(A,B||"**",C)
},trigger:function(A,B){return this.each(function(){C4.event.trigger(A,B,this)
})
},triggerHandler:function(A,B){if(this[0]){return C4.event.trigger(A,B,this[0],true)
}},toggle:function(B){var C=arguments,E=B.guid||C4.guid++,A=0,D=function(G){var F=(C4._data(this,"lastToggle"+B.guid)||0)%A;
C4._data(this,"lastToggle"+B.guid,F+1);
G.preventDefault();
return C[F].apply(this,arguments)||false
};
D.guid=E;
while(A<C.length){C[A++].guid=E
}return this.click(D)
},hover:function(A,B){return this.mouseenter(A).mouseleave(B||A)
}});
C4.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(B,A){C4.fn[A]=function(C,D){if(D==null){D=C;
C=null
}return arguments.length>0?this.on(A,null,C,D):this.trigger(A)
};
if(D2.test(A)){C4.event.fixHooks[A]=C4.event.keyHooks
}if(CT.test(A)){C4.event.fixHooks[A]=C4.event.mouseHooks
}});
(function(a,F){var R,G,t,AK,Y,r,l,B,P,C,AB=true,X="undefined",n=("sizcache"+Math.random()).replace(".",""),AG=a.document,q=AG.documentElement,A=0,D=[].slice,V=[].push,g=function(AO,AN){AO[n]=AN||true;
return AO
},AA=function(){var AO={},AN=[];
return g(function(AQ,AP){if(AN.push(AQ)>AK.cacheLength){delete AO[AN.shift()]
}return(AO[AQ]=AP)
},AO)
},W=AA(),o=AA(),I=AA(),m="[\\x20\\t\\r\\n\\f]",v="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",E=v.replace("w","w#"),AE="([*^$|!~]?=)",U="\\["+m+"*("+v+")"+m+"*(?:"+AE+m+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+E+")|)|)"+m+"*\\]",K=":("+v+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+U+")|[^:]|\\\\.)*|.*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",i=new RegExp("^"+m+"+|((?:^|[^\\\\])(?:\\\\.)*)"+m+"+$","g"),c=new RegExp("^"+m+"*,"+m+"*"),p=new RegExp("^"+m+"*([\\x20\\t\\r\\n\\f>+~])"+m+"*"),O=new RegExp(K),N=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,AI=/^:not/,S=/[\x20\t\r\n\f]*[+~]/,AD=/:not\($/,z=/h\d/i,Q=/input|select|textarea|button/i,H=/\\(?!\\)/g,y={ID:new RegExp("^#("+v+")"),CLASS:new RegExp("^\\.("+v+")"),NAME:new RegExp("^\\[name=['\"]?("+v+")['\"]?\\]"),TAG:new RegExp("^("+v.replace("w","w*")+")"),ATTR:new RegExp("^"+U),PSEUDO:new RegExp("^"+K),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+m+"*(even|odd|(([+-]|)(\\d*)n|)"+m+"*(?:([+-]|)"+m+"*(\\d+)|))"+m+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+m+"*[>+~]|"+x,"i")},u=function(AO){var AP=AG.createElement("div");
try{return AO(AP)
}catch(AN){return false
}finally{AP=null
}},k=u(function(AN){AN.appendChild(AG.createComment(""));
return !AN.getElementsByTagName("*").length
}),w=u(function(AN){AN.innerHTML="<a href='#'></a>";
return AN.firstChild&&typeof AN.firstChild.getAttribute!==X&&AN.firstChild.getAttribute("href")==="#"
}),h=u(function(AO){AO.innerHTML="<select></select>";
var AN=typeof AO.lastChild.getAttribute("multiple");
return AN!=="boolean"&&AN!=="string"
}),AC=u(function(AN){AN.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!AN.getElementsByClassName||!AN.getElementsByClassName("e").length){return false
}AN.lastChild.className="e";
return AN.getElementsByClassName("e").length===2
}),L=u(function(AO){AO.id=n+0;
AO.innerHTML="<a name='"+n+"'></a><div name='"+n+"'></div>";
q.insertBefore(AO,q.firstChild);
var AN=AG.getElementsByName&&AG.getElementsByName(n).length===2+AG.getElementsByName(n+0).length;
t=!AG.getElementById(n);
q.removeChild(AO);
return AN
});
try{D.call(q.childNodes,0)[0].nodeType
}catch(AJ){D=function(AO){var AP,AN=[];
for(;
(AP=this[AO]);
AO++){AN.push(AP)
}return AN
}
}function T(AT,AQ,AU,AN){AU=AU||[];
AQ=AQ||AG;
var AS,AR,AP,AV,AO=AQ.nodeType;
if(AO!==1&&AO!==9){return[]
}if(!AT||typeof AT!=="string"){return AU
}AP=r(AQ);
if(!AP&&!AN){if((AS=N.exec(AT))){if((AV=AS[1])){if(AO===9){AR=AQ.getElementById(AV);
if(AR&&AR.parentNode){if(AR.id===AV){AU.push(AR);
return AU
}}else{return AU
}}else{if(AQ.ownerDocument&&(AR=AQ.ownerDocument.getElementById(AV))&&l(AQ,AR)&&AR.id===AV){AU.push(AR);
return AU
}}}else{if(AS[2]){V.apply(AU,D.call(AQ.getElementsByTagName(AT),0));
return AU
}else{if((AV=AS[3])&&AC&&AQ.getElementsByClassName){V.apply(AU,D.call(AQ.getElementsByClassName(AV),0));
return AU
}}}}}return Z(AT,AQ,AU,AN,AP)
}T.matches=function(AO,AN){return T(AO,null,null,AN)
};
T.matchesSelector=function(AO,AN){return T(AN,null,null,[AO]).length>0
};
function AH(AN){return function(AO){var AP=AO.nodeName.toLowerCase();
return AP==="input"&&AO.type===AN
}
}function J(AN){return function(AO){var AP=AO.nodeName.toLowerCase();
return(AP==="input"||AP==="button")&&AO.type===AN
}
}Y=T.getText=function(AN){var AO,AR="",AP=0,AQ=AN.nodeType;
if(AQ){if(AQ===1||AQ===9||AQ===11){if(typeof AN.textContent==="string"){return AN.textContent
}else{for(AN=AN.firstChild;
AN;
AN=AN.nextSibling){AR+=Y(AN)
}}}else{if(AQ===3||AQ===4){return AN.nodeValue
}}}else{for(;
(AO=AN[AP]);
AP++){AR+=Y(AO)
}}return AR
};
r=T.isXML=function r(AO){var AN=AO&&(AO.ownerDocument||AO).documentElement;
return AN?AN.nodeName!=="HTML":false
};
l=T.contains=q.contains?function(AQ,AP){var AN=AQ.nodeType===9?AQ.documentElement:AQ,AO=AP&&AP.parentNode;
return AQ===AO||!!(AO&&AO.nodeType===1&&AN.contains&&AN.contains(AO))
}:q.compareDocumentPosition?function(AO,AN){return AN&&!!(AO.compareDocumentPosition(AN)&16)
}:function(AO,AN){while((AN=AN.parentNode)){if(AN===AO){return true
}}return false
};
T.attr=function(AN,AO){var AQ,AP=r(AN);
if(!AP){AO=AO.toLowerCase()
}if(AK.attrHandle[AO]){return AK.attrHandle[AO](AN)
}if(h||AP){return AN.getAttribute(AO)
}AQ=AN.getAttributeNode(AO);
return AQ?typeof AN[AO]==="boolean"?AN[AO]?AO:null:AQ.specified?AQ.value:null:null
};
AK=T.selectors={cacheLength:50,createPseudo:g,match:y,order:new RegExp("ID|TAG"+(L?"|NAME":"")+(AC?"|CLASS":"")),attrHandle:w?{}:{href:function(AN){return AN.getAttribute("href",2)
},type:function(AN){return AN.getAttribute("type")
}},find:{ID:t?function(AN,AO,AQ){if(typeof AO.getElementById!==X&&!AQ){var AP=AO.getElementById(AN);
return AP&&AP.parentNode?[AP]:[]
}}:function(AN,AO,AQ){if(typeof AO.getElementById!==X&&!AQ){var AP=AO.getElementById(AN);
return AP?AP.id===AN||typeof AP.getAttributeNode!==X&&AP.getAttributeNode("id").value===AN?[AP]:F:[]
}},TAG:k?function(AO,AN){if(typeof AN.getElementsByTagName!==X){return AN.getElementsByTagName(AO)
}}:function(AO,AQ){var AR=AQ.getElementsByTagName(AO);
if(AO==="*"){var AP,AS=[],AN=0;
for(;
(AP=AR[AN]);
AN++){if(AP.nodeType===1){AS.push(AP)
}}return AS
}return AR
},NAME:function(AO,AN){if(typeof AN.getElementsByName!==X){return AN.getElementsByName(name)
}},CLASS:function(AP,AO,AN){if(typeof AO.getElementsByClassName!==X&&!AN){return AO.getElementsByClassName(AP)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(AN){AN[1]=AN[1].replace(H,"");
AN[3]=(AN[4]||AN[5]||"").replace(H,"");
if(AN[2]==="~="){AN[3]=" "+AN[3]+" "
}return AN.slice(0,4)
},CHILD:function(AN){AN[1]=AN[1].toLowerCase();
if(AN[1]==="nth"){if(!AN[2]){T.error(AN[0])
}AN[3]=+(AN[3]?AN[4]+(AN[5]||1):2*(AN[2]==="even"||AN[2]==="odd"));
AN[4]=+((AN[6]+AN[7])||AN[2]==="odd")
}else{if(AN[2]){T.error(AN[0])
}}return AN
},PSEUDO:function(AP,AO,AR){var AN,AQ;
if(y.CHILD.test(AP[0])){return null
}if(AP[3]){AP[2]=AP[3]
}else{if((AN=AP[4])){if(O.test(AN)&&(AQ=d(AN,AO,AR,true))&&(AQ=AN.indexOf(")",AN.length-AQ)-AN.length)){AN=AN.slice(0,AQ);
AP[0]=AP[0].slice(0,AQ)
}AP[2]=AN
}}return AP.slice(0,3)
}},filter:{ID:t?function(AN){AN=AN.replace(H,"");
return function(AO){return AO.getAttribute("id")===AN
}
}:function(AN){AN=AN.replace(H,"");
return function(AO){var AP=typeof AO.getAttributeNode!==X&&AO.getAttributeNode("id");
return AP&&AP.value===AN
}
},TAG:function(AN){if(AN==="*"){return function(){return true
}
}AN=AN.replace(H,"").toLowerCase();
return function(AO){return AO.nodeName&&AO.nodeName.toLowerCase()===AN
}
},CLASS:function(AO){var AN=W[n][AO];
if(!AN){AN=W(AO,new RegExp("(^|"+m+")"+AO+"("+m+"|$)"))
}return function(AP){return AN.test(AP.className||(typeof AP.getAttribute!==X&&AP.getAttribute("class"))||"")
}
},ATTR:function(AP,AO,AN){if(!AO){return function(AQ){return T.attr(AQ,AP)!=null
}
}return function(AR){var AS=T.attr(AR,AP),AQ=AS+"";
if(AS==null){return AO==="!="
}switch(AO){case"=":return AQ===AN;
case"!=":return AQ!==AN;
case"^=":return AN&&AQ.indexOf(AN)===0;
case"*=":return AN&&AQ.indexOf(AN)>-1;
case"$=":return AN&&AQ.substr(AQ.length-AN.length)===AN;
case"~=":return(" "+AQ+" ").indexOf(AN)>-1;
case"|=":return AQ===AN||AQ.substr(0,AN.length+1)===AN+"-"
}}
},CHILD:function(AR,AO,AN,AP){if(AR==="nth"){var AQ=A++;
return function(AT){var AW,AS,AU=0,AV=AT;
if(AN===1&&AP===0){return true
}AW=AT.parentNode;
if(AW&&(AW[n]!==AQ||!AT.sizset)){for(AV=AW.firstChild;
AV;
AV=AV.nextSibling){if(AV.nodeType===1){AV.sizset=++AU;
if(AV===AT){break
}}}AW[n]=AQ
}AS=AT.sizset-AP;
if(AN===0){return AS===0
}else{return(AS%AN===0&&AS/AN>=0)
}}
}return function(AS){var AT=AS;
switch(AR){case"only":case"first":while((AT=AT.previousSibling)){if(AT.nodeType===1){return false
}}if(AR==="first"){return true
}AT=AS;
case"last":while((AT=AT.nextSibling)){if(AT.nodeType===1){return false
}}return true
}}
},PSEUDO:function(AP,AQ,AS,AO){var AN,AR=AK.pseudos[AP]||AK.pseudos[AP.toLowerCase()];
if(!AR){T.error("unsupported pseudo: "+AP)
}if(!AR[n]){if(AR.length>1){AN=[AP,AP,"",AQ];
return function(AT){return AR(AT,0,AN)
}
}return AR
}return AR(AQ,AS,AO)
}},pseudos:{not:g(function(AQ,AO,AP){var AN=B(AQ.replace(i,"$1"),AO,AP);
return function(AR){return !AN(AR)
}
}),enabled:function(AN){return AN.disabled===false
},disabled:function(AN){return AN.disabled===true
},checked:function(AO){var AN=AO.nodeName.toLowerCase();
return(AN==="input"&&!!AO.checked)||(AN==="option"&&!!AO.selected)
},selected:function(AN){if(AN.parentNode){AN.parentNode.selectedIndex
}return AN.selected===true
},parent:function(AN){return !AK.pseudos.empty(AN)
},empty:function(AO){var AN;
AO=AO.firstChild;
while(AO){if(AO.nodeName>"@"||(AN=AO.nodeType)===3||AN===4){return false
}AO=AO.nextSibling
}return true
},contains:g(function(AN){return function(AO){return(AO.textContent||AO.innerText||Y(AO)).indexOf(AN)>-1
}
}),has:g(function(AN){return function(AO){return T(AN,AO).length>0
}
}),header:function(AN){return z.test(AN.nodeName)
},text:function(AP){var AO,AN;
return AP.nodeName.toLowerCase()==="input"&&(AO=AP.type)==="text"&&((AN=AP.getAttribute("type"))==null||AN.toLowerCase()===AO)
},radio:AH("radio"),checkbox:AH("checkbox"),file:AH("file"),password:AH("password"),image:AH("image"),submit:J("submit"),reset:J("reset"),button:function(AO){var AN=AO.nodeName.toLowerCase();
return AN==="input"&&AO.type==="button"||AN==="button"
},input:function(AN){return Q.test(AN.nodeName)
},focus:function(AO){var AN=AO.ownerDocument;
return AO===AN.activeElement&&(!AN.hasFocus||AN.hasFocus())&&!!(AO.type||AO.href)
},active:function(AN){return AN===AN.ownerDocument.activeElement
}},setFilters:{first:function(AP,AO,AN){return AN?AP.slice(1):[AP[0]]
},last:function(AN,AO,AQ){var AP=AN.pop();
return AQ?AN:[AP]
},even:function(AP,AQ,AR){var AS=[],AO=AR?1:0,AN=AP.length;
for(;
AO<AN;
AO=AO+2){AS.push(AP[AO])
}return AS
},odd:function(AP,AQ,AR){var AS=[],AO=AR?0:1,AN=AP.length;
for(;
AO<AN;
AO=AO+2){AS.push(AP[AO])
}return AS
},lt:function(AP,AO,AN){return AN?AP.slice(+AO):AP.slice(0,+AO)
},gt:function(AP,AO,AN){return AN?AP.slice(0,+AO+1):AP.slice(+AO+1)
},eq:function(AN,AO,AQ){var AP=AN.splice(+AO,1);
return AQ?AN:AP
}}};
function b(AQ,AP,AO){if(AQ===AP){return AO
}var AN=AQ.nextSibling;
while(AN){if(AN===AP){return -1
}AN=AN.nextSibling
}return 1
}P=q.compareDocumentPosition?function(AO,AN){if(AO===AN){C=true;
return 0
}return(!AO.compareDocumentPosition||!AN.compareDocumentPosition?AO.compareDocumentPosition:AO.compareDocumentPosition(AN)&4)?-1:1
}:function(AO,AQ){if(AO===AQ){C=true;
return 0
}else{if(AO.sourceIndex&&AQ.sourceIndex){return AO.sourceIndex-AQ.sourceIndex
}}var AV,AR,AW=[],AS=[],AU=AO.parentNode,AT=AQ.parentNode,AN=AU;
if(AU===AT){return b(AO,AQ)
}else{if(!AU){return -1
}else{if(!AT){return 1
}}}while(AN){AW.unshift(AN);
AN=AN.parentNode
}AN=AT;
while(AN){AS.unshift(AN);
AN=AN.parentNode
}AV=AW.length;
AR=AS.length;
for(var AP=0;
AP<AV&&AP<AR;
AP++){if(AW[AP]!==AS[AP]){return b(AW[AP],AS[AP])
}}return AP===AV?b(AO,AS[AP],-1):b(AW[AP],AQ,1)
};
[0,0].sort(P);
AB=!C;
T.uniqueSort=function(AO){var AP,AN=1;
C=AB;
AO.sort(P);
if(C){for(;
(AP=AO[AN]);
AN++){if(AP===AO[AN-1]){AO.splice(AN--,1)
}}}return AO
};
T.error=function(AN){throw new Error("Syntax error, unrecognized expression: "+AN)
};
function d(AP,AT,AX,AU){var AR,AV,AO,AW,Ab,AS,Ad,Ac,Aa,AN,AZ=!AX&&AT!==AG,AQ=(AZ?"<s>":"")+AP.replace(i,"$1<s>"),AY=o[n][AQ];
if(AY){return AU?0:D.call(AY,0)
}Ab=AP;
AS=[];
Ac=0;
Aa=AK.preFilter;
AN=AK.filter;
while(Ab){if(!AR||(AV=c.exec(Ab))){if(AV){Ab=Ab.slice(AV[0].length);
AO.selector=Ad
}AS.push(AO=[]);
Ad="";
if(AZ){Ab=" "+Ab
}}AR=false;
if((AV=p.exec(Ab))){Ad+=AV[0];
Ab=Ab.slice(AV[0].length);
AR=AO.push({part:AV.pop().replace(i," "),string:AV[0],captures:AV})
}for(AW in AN){if((AV=y[AW].exec(Ab))&&(!Aa[AW]||(AV=Aa[AW](AV,AT,AX)))){Ad+=AV[0];
Ab=Ab.slice(AV[0].length);
AR=AO.push({part:AW,string:AV.shift(),captures:AV})
}}if(!AR){break
}}if(Ad){AO.selector=Ad
}return AU?Ab.length:Ab?T.error(AP):D.call(o(AQ,AS),0)
}function AM(AP,AQ,AR,AO){var AN=AQ.dir,AS=A++;
if(!AP){AP=function(AT){return AT===AR
}
}return AQ.first?function(AT){while((AT=AT[AN])){if(AT.nodeType===1){return AP(AT)&&AT
}}}:AO?function(AT){while((AT=AT[AN])){if(AT.nodeType===1){if(AP(AT)){return AT
}}}}:function(AV){var AW,AU=AS+"."+R,AT=AU+"."+G;
while((AV=AV[AN])){if(AV.nodeType===1){if((AW=AV[n])===AT){return AV.sizset
}else{if(typeof AW==="string"&&AW.indexOf(AU)===0){if(AV.sizset){return AV
}}else{AV[n]=AT;
if(AP(AV)){AV.sizset=true;
return AV
}AV.sizset=false
}}}}}
}function M(AO,AN){return AO?function(AP){var AQ=AN(AP);
return AQ&&AO(AQ===true?AP:AQ)
}:AN
}function AL(AP,AR,AO){var AS,AQ,AN=0;
for(;
(AS=AP[AN]);
AN++){if(AK.relative[AS.part]){AQ=AM(AQ,AK.relative[AS.part],AR,AO)
}else{AQ=M(AQ,AK.filter[AS.part].apply(null,AS.captures.concat(AR,AO)))
}}return AQ
}function AF(AN){return function(AQ){var AP,AO=0;
for(;
(AP=AN[AO]);
AO++){if(AP(AQ)){return true
}}return false
}
}B=T.compile=function(AS,AO,AQ){var AT,AP,AR,AN=I[n][AS];
if(AN&&AN.context===AO){return AN
}AT=d(AS,AO,AQ);
for(AP=0,AR=AT.length;
AP<AR;
AP++){AT[AP]=AL(AT[AP],AO,AQ)
}AN=I(AS,AF(AT));
AN.context=AO;
AN.runs=AN.dirruns=0;
return AN
};
function j(AO,AP,AQ,AS){var AR=0,AN=AP.length;
for(;
AR<AN;
AR++){T(AO,AP[AR],AQ,AS)
}}function s(AQ,AO,AS,AR,AP,AT){var AN,AU=AK.setFilters[AO.toLowerCase()];
if(!AU){T.error(AO)
}if(AQ||!(AN=AP)){j(AQ||"*",AR,(AN=[]),AP)
}return AN.length>0?AU(AN,AS,AT):[]
}function f(AY,AX,AT,Ah){var Ac,AZ,Ad,AO,Af,AP,Ab,AN,AR,AU,AV,AQ,Aa,Ag=0,AW=AY.length,AS=y.POS,Ae=new RegExp("^"+AS.source+"(?!"+m+")","i"),Ai=function(){var Aj=1,Ak=arguments.length-2;
for(;
Aj<Ak;
Aj++){if(arguments[Aj]===F){AR[Aj]=F
}}};
for(;
Ag<AW;
Ag++){Ac=AY[Ag];
AZ="";
AN=Ah;
for(Ad=0,AO=Ac.length;
Ad<AO;
Ad++){Af=Ac[Ad];
AP=Af.string;
if(Af.part==="PSEUDO"){AS.exec("");
Ab=0;
while((AR=AS.exec(AP))){AU=true;
AV=AS.lastIndex=AR.index+AR[0].length;
if(AV>Ab){AZ+=AP.slice(Ab,AR.index);
Ab=AV;
AQ=[AX];
if(p.test(AZ)){if(AN){AQ=AN
}AN=Ah
}if((Aa=AD.test(AZ))){AZ=AZ.slice(0,-5).replace(p,"$&*");
Ab++
}if(AR.length>1){AR[0].replace(Ae,Ai)
}AN=s(AZ,AR[1],AR[2],AQ,AN,Aa)
}AZ=""
}}if(!AU){AZ+=AP
}AU=false
}if(AZ){if(p.test(AZ)){j(AZ,AN||[AX],AT,Ah)
}else{T(AZ,AX,AT,Ah?Ah.concat(AN):AN)
}}else{V.apply(AT,AN)
}}return AW===1?AT:T.uniqueSort(AT)
}function Z(AV,AR,AU,Ab,AX){AV=AV.replace(i,"$1");
var AW,AT,AP,Ad,AO,AQ,AS,Ac,AN,Aa,AZ=d(AV,AR,AX),AY=AR.nodeType;
if(y.POS.test(AV)){return f(AZ,AR,AU,Ab)
}if(Ab){AW=D.call(Ab,0)
}else{if(AZ.length===1){if((AQ=D.call(AZ[0],0)).length>2&&(AS=AQ[0]).part==="ID"&&AY===9&&!AX&&AK.relative[AQ[1].part]){AR=AK.find.ID(AS.captures[0].replace(H,""),AR,AX)[0];
if(!AR){return AU
}AV=AV.slice(AQ.shift().string.length)
}AN=((AZ=S.exec(AQ[0].string))&&!AZ.index&&AR.parentNode)||AR;
Ac="";
for(AO=AQ.length-1;
AO>=0;
AO--){AS=AQ[AO];
Aa=AS.part;
Ac=AS.string+Ac;
if(AK.relative[Aa]){break
}if(AK.order.test(Aa)){AW=AK.find[Aa](AS.captures[0].replace(H,""),AN,AX);
if(AW==null){continue
}else{AV=AV.slice(0,AV.length-Ac.length)+Ac.replace(y[Aa],"");
if(!AV){V.apply(AU,D.call(AW,0))
}break
}}}}}if(AV){AT=B(AV,AR,AX);
R=AT.dirruns++;
if(AW==null){AW=AK.find.TAG("*",(S.test(AV)&&AR.parentNode)||AR)
}for(AO=0;
(Ad=AW[AO]);
AO++){G=AT.runs++;
if(AT(Ad)){AU.push(Ad)
}}}return AU
}if(AG.querySelectorAll){(function(){var AN,AT=Z,AO=/'|\\/g,AQ=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,AS=[],AR=[":active"],AP=q.matchesSelector||q.mozMatchesSelector||q.webkitMatchesSelector||q.oMatchesSelector||q.msMatchesSelector;
u(function(AU){AU.innerHTML="<select><option selected=''></option></select>";
if(!AU.querySelectorAll("[selected]").length){AS.push("\\["+m+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!AU.querySelectorAll(":checked").length){AS.push(":checked")
}});
u(function(AU){AU.innerHTML="<p test=''></p>";
if(AU.querySelectorAll("[test^='']").length){AS.push("[*^$]="+m+"*(?:\"\"|'')")
}AU.innerHTML="<input type='hidden'/>";
if(!AU.querySelectorAll(":enabled").length){AS.push(":enabled",":disabled")
}});
AS=AS.length&&new RegExp(AS.join("|"));
Z=function(AY,Ad,Ae,AZ,Aa){if(!AZ&&!Aa&&(!AS||!AS.test(AY))){if(Ad.nodeType===9){try{V.apply(Ae,D.call(Ad.querySelectorAll(AY),0));
return Ae
}catch(AV){}}else{if(Ad.nodeType===1&&Ad.nodeName.toLowerCase()!=="object"){var Af,AW,Ac,AX=Ad.getAttribute("id"),AU=AX||n,Ab=S.test(AY)&&Ad.parentNode||Ad;
if(AX){AU=AU.replace(AO,"\\$&")
}else{Ad.setAttribute("id",AU)
}Af=d(AY,Ad,Aa);
AU="[id='"+AU+"']";
for(AW=0,Ac=Af.length;
AW<Ac;
AW++){Af[AW]=AU+Af[AW].selector
}try{V.apply(Ae,D.call(Ab.querySelectorAll(Af.join(",")),0));
return Ae
}catch(AV){}finally{if(!AX){Ad.removeAttribute("id")
}}}}}return AT(AY,Ad,Ae,AZ,Aa)
};
if(AP){u(function(AU){AN=AP.call(AU,"div");
try{AP.call(AU,"[test!='']:sizzle");
AR.push(y.PSEUDO.source,y.POS.source,"!=")
}catch(AV){}});
AR=new RegExp(AR.join("|"));
T.matchesSelector=function(AX,AV){AV=AV.replace(AQ,"='$1']");
if(!r(AX)&&!AR.test(AV)&&(!AS||!AS.test(AV))){try{var AU=AP.call(AX,AV);
if(AU||AN||AX.document&&AX.document.nodeType!==11){return AU
}}catch(AW){}}return T(AV,null,null,[AX]).length>0
}
}})()
}AK.setFilters.nth=AK.setFilters.eq;
AK.filters=AK.pseudos;
T.attr=C4.attr;
C4.find=T;
C4.expr=T.selectors;
C4.expr[":"]=C4.expr.pseudos;
C4.unique=T.uniqueSort;
C4.text=T.getText;
C4.isXMLDoc=T.isXML;
C4.contains=T.contains
})(Dj);
var Dw=/Until$/,EG=/^(?:parents|prev(?:Until|All))/,C5=/^.[^:#\[\.,]*$/,DU=C4.expr.match.needsContext,Cw={children:true,contents:true,next:true,prev:true};
C4.fn.extend({find:function(H){var D,F,B,G,C,E,A=this;
if(typeof H!=="string"){return C4(H).filter(function(){for(D=0,F=A.length;
D<F;
D++){if(C4.contains(A[D],this)){return true
}}})
}E=this.pushStack("","find",H);
for(D=0,F=this.length;
D<F;
D++){B=E.length;
C4.find(H,this[D],E);
if(D>0){for(G=B;
G<E.length;
G++){for(C=0;
C<B;
C++){if(E[C]===E[G]){E.splice(G--,1);
break
}}}}}return E
},has:function(C){var A,B=C4(C,this),D=B.length;
return this.filter(function(){for(A=0;
A<D;
A++){if(C4.contains(this,B[A])){return true
}}})
},not:function(A){return this.pushStack(DB(this,A,false),"not",A)
},filter:function(A){return this.pushStack(DB(this,A,true),"filter",A)
},is:function(A){return !!A&&(typeof A==="string"?DU.test(A)?C4(A,this.context).index(this[0])>=0:C4.filter(A,this).length>0:this.filter(A).length>0)
},closest:function(C,D){var B,A=0,G=this.length,E=[],F=DU.test(C)||typeof C!=="string"?C4(C,D||this.context):0;
for(;
A<G;
A++){B=this[A];
while(B&&B.ownerDocument&&B!==D&&B.nodeType!==11){if(F?F.index(B)>-1:C4.find.matchesSelector(B,C)){E.push(B);
break
}B=B.parentNode
}}E=E.length>1?C4.unique(E):E;
return this.pushStack(E,"closest",C)
},index:function(A){if(!A){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof A==="string"){return C4.inArray(this[0],C4(A))
}return C4.inArray(A.jquery?A[0]:A,this)
},add:function(D,B){var C=typeof D==="string"?C4(D,B):C4.makeArray(D&&D.nodeType?[D]:D),A=C4.merge(this.get(),C);
return this.pushStack(Cg(C[0])||Cg(A[0])?A:C4.unique(A))
},addBack:function(A){return this.add(A==null?this.prevObject:this.prevObject.filter(A))
}});
C4.fn.andSelf=C4.fn.addBack;
function Cg(A){return !A||!A.parentNode||A.parentNode.nodeType===11
}function Cj(B,A){do{B=B[A]
}while(B&&B.nodeType!==1);
return B
}C4.each({parent:function(B){var A=B.parentNode;
return A&&A.nodeType!==11?A:null
},parents:function(A){return C4.dir(A,"parentNode")
},parentsUntil:function(A,B,C){return C4.dir(A,"parentNode",C)
},next:function(A){return Cj(A,"nextSibling")
},prev:function(A){return Cj(A,"previousSibling")
},nextAll:function(A){return C4.dir(A,"nextSibling")
},prevAll:function(A){return C4.dir(A,"previousSibling")
},nextUntil:function(A,B,C){return C4.dir(A,"nextSibling",C)
},prevUntil:function(A,B,C){return C4.dir(A,"previousSibling",C)
},siblings:function(A){return C4.sibling((A.parentNode||{}).firstChild,A)
},children:function(A){return C4.sibling(A.firstChild)
},contents:function(A){return C4.nodeName(A,"iframe")?A.contentDocument||A.contentWindow.document:C4.merge([],A.childNodes)
}},function(A,B){C4.fn[A]=function(C,E){var D=C4.map(this,B,C);
if(!Dw.test(A)){E=C
}if(E&&typeof E==="string"){D=C4.filter(E,D)
}D=this.length>1&&!Cw[A]?C4.unique(D):D;
if(this.length>1&&EG.test(A)){D=D.reverse()
}return this.pushStack(D,A,Ci.call(arguments).join(","))
}
});
C4.extend({filter:function(C,B,A){if(A){C=":not("+C+")"
}return B.length===1?C4.find.matchesSelector(B[0],C)?[B[0]]:[]:C4.find.matches(C,B)
},dir:function(A,C,D){var E=[],B=A[C];
while(B&&B.nodeType!==9&&(D===CA||B.nodeType!==1||!C4(B).is(D))){if(B.nodeType===1){E.push(B)
}B=B[C]
}return E
},sibling:function(C,A){var B=[];
for(;
C;
C=C.nextSibling){if(C.nodeType===1&&C!==A){B.push(C)
}}return B
}});
function DB(C,A,D){A=A||0;
if(C4.isFunction(A)){return C4.grep(C,function(F,G){var E=!!A.call(F,G,F);
return E===D
})
}else{if(A.nodeType){return C4.grep(C,function(E,F){return(E===A)===D
})
}else{if(typeof A==="string"){var B=C4.grep(C,function(E){return E.nodeType===1
});
if(C5.test(A)){return C4.filter(A,B,!D)
}else{A=C4.filter(A,B)
}}}}return C4.grep(C,function(E,F){return(C4.inArray(E,A)>=0)===D
})
}function EE(B){var C=Cd.split("|"),A=B.createDocumentFragment();
if(A.createElement){while(C.length){A.createElement(C.pop())
}}return A
}var Cd="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",EC=/ jQuery\d+="(?:null|\d+)"/g,e=/^\s+/,DC=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,DI=/<([\w:]+)/,Cv=/<tbody/i,Dy=/<|&#?\w+;/,Dg=/<(?:script|style|link)/i,Co=/<(?:script|object|embed|option|style)/i,Db=new RegExp("<(?:"+Cd+")[\\s/>]","i"),EO=/^(?:checkbox|radio)$/,CE=/checked\s*(?:[^=]|=\s*.checked.)/i,DH=/\/(java|ecma)script/i,Dk=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,D0={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Bz=EE(CK),B3=Bz.appendChild(CK.createElement("div"));
D0.optgroup=D0.option;
D0.tbody=D0.tfoot=D0.colgroup=D0.caption=D0.thead;
D0.th=D0.td;
if(!C4.support.htmlSerialize){D0._default=[1,"X<div>","</div>"]
}C4.fn.extend({text:function(A){return C4.access(this,function(B){return B===CA?C4.text(this):this.empty().append((this[0]&&this[0].ownerDocument||CK).createTextNode(B))
},null,A,arguments.length)
},wrapAll:function(A){if(C4.isFunction(A)){return this.each(function(C){C4(this).wrapAll(A.call(this,C))
})
}if(this[0]){var B=C4(A,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){B.insertBefore(this[0])
}B.map(function(){var C=this;
while(C.firstChild&&C.firstChild.nodeType===1){C=C.firstChild
}return C
}).append(this)
}return this
},wrapInner:function(A){if(C4.isFunction(A)){return this.each(function(B){C4(this).wrapInner(A.call(this,B))
})
}return this.each(function(){var C=C4(this),B=C.contents();
if(B.length){B.wrapAll(A)
}else{C.append(A)
}})
},wrap:function(A){var B=C4.isFunction(A);
return this.each(function(C){C4(this).wrapAll(B?A.call(this,C):A)
})
},unwrap:function(){return this.parent().each(function(){if(!C4.nodeName(this,"body")){C4(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(A){if(this.nodeType===1||this.nodeType===11){this.appendChild(A)
}})
},prepend:function(){return this.domManip(arguments,true,function(A){if(this.nodeType===1||this.nodeType===11){this.insertBefore(A,this.firstChild)
}})
},before:function(){if(!Cg(this[0])){return this.domManip(arguments,false,function(B){this.parentNode.insertBefore(B,this)
})
}if(arguments.length){var A=C4.clean(arguments);
return this.pushStack(C4.merge(A,this),"before",this.selector)
}},after:function(){if(!Cg(this[0])){return this.domManip(arguments,false,function(B){this.parentNode.insertBefore(B,this.nextSibling)
})
}if(arguments.length){var A=C4.clean(arguments);
return this.pushStack(C4.merge(this,A),"after",this.selector)
}},remove:function(D,C){var A,B=0;
for(;
(A=this[B])!=null;
B++){if(!D||C4.filter(D,[A]).length){if(!C&&A.nodeType===1){C4.cleanData(A.getElementsByTagName("*"));
C4.cleanData([A])
}if(A.parentNode){A.parentNode.removeChild(A)
}}}return this
},empty:function(){var B,A=0;
for(;
(B=this[A])!=null;
A++){if(B.nodeType===1){C4.cleanData(B.getElementsByTagName("*"))
}while(B.firstChild){B.removeChild(B.firstChild)
}}return this
},clone:function(B,A){B=B==null?false:B;
A=A==null?B:A;
return this.map(function(){return C4.clone(this,B,A)
})
},html:function(A){return C4.access(this,function(C){var D=this[0]||{},E=0,F=this.length;
if(C===CA){return D.nodeType===1?D.innerHTML.replace(EC,""):CA
}if(typeof C==="string"&&!Dg.test(C)&&(C4.support.htmlSerialize||!Db.test(C))&&(C4.support.leadingWhitespace||!e.test(C))&&!D0[(DI.exec(C)||["",""])[1].toLowerCase()]){C=C.replace(DC,"<$1></$2>");
try{for(;
E<F;
E++){D=this[E]||{};
if(D.nodeType===1){C4.cleanData(D.getElementsByTagName("*"));
D.innerHTML=C
}}D=0
}catch(B){}}if(D){this.empty().append(C)
}},null,A,arguments.length)
},replaceWith:function(A){if(!Cg(this[0])){if(C4.isFunction(A)){return this.each(function(C){var D=C4(this),B=D.html();
D.replaceWith(A.call(this,C,B))
})
}if(typeof A!=="string"){A=C4(A).detach()
}return this.each(function(){var B=this.nextSibling,C=this.parentNode;
C4(this).remove();
if(B){C4(B).before(A)
}else{C4(C).append(A)
}})
}return this.length?this.pushStack(C4(C4.isFunction(A)?A():A),"replaceWith",A):this
},detach:function(A){return this.remove(A,true)
},domManip:function(D,H,F){D=[].concat.apply([],D);
var C,J,I,A,K=0,G=D[0],E=[],B=this.length;
if(!C4.support.checkClone&&B>1&&typeof G==="string"&&CE.test(G)){return this.each(function(){C4(this).domManip(D,H,F)
})
}if(C4.isFunction(G)){return this.each(function(L){var M=C4(this);
D[0]=G.call(this,L,H?M.html():CA);
M.domManip(D,H,F)
})
}if(this[0]){C=C4.buildFragment(D,this,E);
I=C.fragment;
J=I.firstChild;
if(I.childNodes.length===1){I=J
}if(J){H=H&&C4.nodeName(J,"tr");
for(A=C.cacheable||B-1;
K<B;
K++){F.call(H&&C4.nodeName(this[K],"table")?B0(this[K],"tbody"):this[K],K===A?I:C4.clone(I,true,true))
}}I=J=null;
if(E.length){C4.each(E,function(M,L){if(L.src){if(C4.ajax){C4.ajax({url:L.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{C4.error("no ajax")
}}else{C4.globalEval((L.text||L.textContent||L.innerHTML||"").replace(Dk,""))
}if(L.parentNode){L.parentNode.removeChild(L)
}})
}}return this
}});
function B0(B,A){return B.getElementsByTagName(A)[0]||B.appendChild(B.ownerDocument.createElement(A))
}function By(G,F){if(F.nodeType!==1||!C4.hasData(G)){return 
}var D,E,H,B=C4._data(G),C=C4._data(F,B),A=B.events;
if(A){delete C.handle;
C.events={};
for(D in A){for(E=0,H=A[D].length;
E<H;
E++){C4.event.add(F,D,A[D][E])
}}}if(C.data){C.data=C4.extend({},C.data)
}}function ES(A,B){var C;
if(B.nodeType!==1){return 
}if(B.clearAttributes){B.clearAttributes()
}if(B.mergeAttributes){B.mergeAttributes(A)
}C=B.nodeName.toLowerCase();
if(C==="object"){if(B.parentNode){B.outerHTML=A.outerHTML
}if(C4.support.html5Clone&&(A.innerHTML&&!C4.trim(B.innerHTML))){B.innerHTML=A.innerHTML
}}else{if(C==="input"&&EO.test(A.type)){B.defaultChecked=B.checked=A.checked;
if(B.value!==A.value){B.value=A.value
}}else{if(C==="option"){B.selected=A.defaultSelected
}else{if(C==="input"||C==="textarea"){B.defaultValue=A.defaultValue
}else{if(C==="script"&&B.text!==A.text){B.text=A.text
}}}}}B.removeAttribute(C4.expando)
}C4.buildFragment=function(D,C,E){var A,G,B,F=D[0];
C=C||CK;
C=!C.nodeType&&C[0]||C;
C=C.ownerDocument||C;
if(D.length===1&&typeof F==="string"&&F.length<512&&C===CK&&F.charAt(0)==="<"&&!Co.test(F)&&(C4.support.checkClone||!CE.test(F))&&(C4.support.html5Clone||!Db.test(F))){G=true;
A=C4.fragments[F];
B=A!==CA
}if(!A){A=C.createDocumentFragment();
C4.clean(D,C,A,E);
if(G){C4.fragments[F]=B&&A
}}return{fragment:A,cacheable:G}
};
C4.fragments={};
C4.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(A,B){C4.fn[A]=function(I){var G,E=0,F=[],C=C4(I),H=C.length,D=this.length===1&&this[0].parentNode;
if((D==null||D&&D.nodeType===11&&D.childNodes.length===1)&&H===1){C[B](this[0]);
return this
}else{for(;
E<H;
E++){G=(E>0?this.clone(true):this).get();
C4(C[E])[B](G);
F=F.concat(G)
}return this.pushStack(F,A,C.selector)
}}
});
function Cq(A){if(typeof A.getElementsByTagName!=="undefined"){return A.getElementsByTagName("*")
}else{if(typeof A.querySelectorAll!=="undefined"){return A.querySelectorAll("*")
}else{return[]
}}}function EA(A){if(EO.test(A.type)){A.defaultChecked=A.checked
}}C4.extend({clone:function(C,F,A){var G,E,D,B;
if(C4.support.html5Clone||C4.isXMLDoc(C)||!Db.test("<"+C.nodeName+">")){B=C.cloneNode(true)
}else{B3.innerHTML=C.outerHTML;
B3.removeChild(B=B3.firstChild)
}if((!C4.support.noCloneEvent||!C4.support.noCloneChecked)&&(C.nodeType===1||C.nodeType===11)&&!C4.isXMLDoc(C)){ES(C,B);
G=Cq(C);
E=Cq(B);
for(D=0;
G[D];
++D){if(E[D]){ES(G[D],E[D])
}}}if(F){By(C,B);
if(A){G=Cq(C);
E=Cq(B);
for(D=0;
G[D];
++D){By(G[D],E[D])
}}}G=E=null;
return B
},clean:function(N,O,R,Q){var E,C,B,M,L,A,I,K,P,G,D,F,H=O===CK&&Bz,J=[];
if(!O||typeof O.createDocumentFragment==="undefined"){O=CK
}for(E=0;
(B=N[E])!=null;
E++){if(typeof B==="number"){B+=""
}if(!B){continue
}if(typeof B==="string"){if(!Dy.test(B)){B=O.createTextNode(B)
}else{H=H||EE(O);
I=O.createElement("div");
H.appendChild(I);
B=B.replace(DC,"<$1></$2>");
M=(DI.exec(B)||["",""])[1].toLowerCase();
L=D0[M]||D0._default;
A=L[0];
I.innerHTML=L[1]+B+L[2];
while(A--){I=I.lastChild
}if(!C4.support.tbody){K=Cv.test(B);
P=M==="table"&&!K?I.firstChild&&I.firstChild.childNodes:L[1]==="<table>"&&!K?I.childNodes:[];
for(C=P.length-1;
C>=0;
--C){if(C4.nodeName(P[C],"tbody")&&!P[C].childNodes.length){P[C].parentNode.removeChild(P[C])
}}}if(!C4.support.leadingWhitespace&&e.test(B)){I.insertBefore(O.createTextNode(e.exec(B)[0]),I.firstChild)
}B=I.childNodes;
I.parentNode.removeChild(I)
}}if(B.nodeType){J.push(B)
}else{C4.merge(J,B)
}}if(I){B=I=H=null
}if(!C4.support.appendChecked){for(E=0;
(B=J[E])!=null;
E++){if(C4.nodeName(B,"input")){EA(B)
}else{if(typeof B.getElementsByTagName!=="undefined"){C4.grep(B.getElementsByTagName("input"),EA)
}}}}if(R){D=function(S){if(!S.type||DH.test(S.type)){return Q?Q.push(S.parentNode?S.parentNode.removeChild(S):S):R.appendChild(S)
}};
for(E=0;
(B=J[E])!=null;
E++){if(!(C4.nodeName(B,"script")&&D(B))){R.appendChild(B);
if(typeof B.getElementsByTagName!=="undefined"){F=C4.grep(C4.merge([],B.getElementsByTagName("script")),D);
J.splice.apply(J,[E+1,0].concat(F));
E+=F.length
}}}}return J
},cleanData:function(C,F){var J,A,K,D,I=0,H=C4.expando,G=C4.cache,E=C4.support.deleteExpando,B=C4.event.special;
for(;
(K=C[I])!=null;
I++){if(F||C4.acceptData(K)){A=K[H];
J=A&&G[A];
if(J){if(J.events){for(D in J.events){if(B[D]){C4.event.remove(K,D)
}else{C4.removeEvent(K,D,J.handle)
}}}if(G[A]){delete G[A];
if(E){delete K[H]
}else{if(K.removeAttribute){K.removeAttribute(H)
}else{K[H]=null
}}C4.deletedIds.push(A)
}}}}}});
(function(){var A,B;
C4.uaMatch=function(C){C=C.toLowerCase();
var D=/(chrome)[ \/]([\w.]+)/.exec(C)||/(webkit)[ \/]([\w.]+)/.exec(C)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(C)||/(msie) ([\w.]+)/.exec(C)||C.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(C)||[];
return{browser:D[1]||"",version:D[2]||"0"}
};
A=C4.uaMatch(EM.userAgent);
B={};
if(A.browser){B[A.browser]=true;
B.version=A.version
}if(B.chrome){B.webkit=true
}else{if(B.webkit){B.safari=true
}}C4.browser=B;
C4.sub=function(){function E(G,F){return new E.fn.init(G,F)
}C4.extend(true,E,this);
E.superclass=this;
E.fn=E.prototype=this();
E.fn.constructor=E;
E.sub=this.sub;
E.fn.init=function C(G,F){if(F&&F instanceof C4&&!(F instanceof E)){F=E(F)
}return C4.fn.init.call(this,G,F,D)
};
E.fn.init.prototype=E.fn;
var D=E(CK);
return E
}
})();
var EL,Dn,CP,B6=/alpha\([^)]*\)/i,CS=/opacity=([^)]*)/,Dh=/^(top|right|bottom|left)$/,Dl=/^(none|table(?!-c[ea]).+)/,CD=/^margin/,Cm=new RegExp("^("+DM+")(.*)$","i"),B8=new RegExp("^("+DM+")(?!px)[a-z%]+$","i"),Ce=new RegExp("^([-+])=("+DM+")","i"),CW={},DT={position:"absolute",visibility:"hidden",display:"block"},DL={letterSpacing:0,fontWeight:400},EW=["Top","Right","Bottom","Left"],EH=["Webkit","O","Moz","ms"],ER=C4.fn.toggle;
function D4(B,C){if(C in B){return C
}var D=C.charAt(0).toUpperCase()+C.slice(1),E=C,A=EH.length;
while(A--){C=EH[A]+D;
if(C in B){return C
}}return E
}function CU(B,A){B=A||B;
return C4.css(B,"display")==="none"||!C4.contains(B.ownerDocument,B)
}function Dd(B,G){var C,F,E=[],A=0,D=B.length;
for(;
A<D;
A++){C=B[A];
if(!C.style){continue
}E[A]=C4._data(C,"olddisplay");
if(G){if(!E[A]&&C.style.display==="none"){C.style.display=""
}if(C.style.display===""&&CU(C)){E[A]=C4._data(C,"olddisplay",Cy(C.nodeName))
}}else{F=EL(C,"display");
if(!E[A]&&F!=="none"){C4._data(C,"olddisplay",F)
}}}for(A=0;
A<D;
A++){C=B[A];
if(!C.style){continue
}if(!G||C.style.display==="none"||C.style.display===""){C.style.display=G?E[A]||"":"none"
}}return B
}C4.fn.extend({css:function(A,B){return C4.access(this,function(D,E,C){return C!==CA?C4.style(D,E,C):C4.css(D,E)
},A,B,arguments.length>1)
},show:function(){return Dd(this,true)
},hide:function(){return Dd(this)
},toggle:function(C,A){var B=typeof C==="boolean";
if(C4.isFunction(C)&&C4.isFunction(A)){return ER.apply(this,arguments)
}return this.each(function(){if(B?C:CU(this)){C4(this).show()
}else{C4(this).hide()
}})
}});
C4.extend({cssHooks:{opacity:{get:function(C,A){if(A){var B=EL(C,"opacity");
return B===""?"1":B
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":C4.support.cssFloat?"cssFloat":"styleFloat"},style:function(J,F,E,I){if(!J||J.nodeType===3||J.nodeType===8||!J.style){return 
}var C,A,G,H=C4.camelCase(F),D=J.style;
F=C4.cssProps[H]||(C4.cssProps[H]=D4(D,H));
G=C4.cssHooks[F]||C4.cssHooks[H];
if(E!==CA){A=typeof E;
if(A==="string"&&(C=Ce.exec(E))){E=(C[1]+1)*C[2]+parseFloat(C4.css(J,F));
A="number"
}if(E==null||A==="number"&&isNaN(E)){return 
}if(A==="number"&&!C4.cssNumber[H]){E+="px"
}if(!G||!("set" in G)||(E=G.set(J,E,I))!==CA){try{D[F]=E
}catch(B){}}}else{if(G&&"get" in G&&(C=G.get(J,false,I))!==CA){return C
}return D[F]
}},css:function(B,D,C,F){var G,E,H,A=C4.camelCase(D);
D=C4.cssProps[A]||(C4.cssProps[A]=D4(B.style,A));
H=C4.cssHooks[D]||C4.cssHooks[A];
if(H&&"get" in H){G=H.get(B,true,F)
}if(G===CA){G=EL(B,D)
}if(G==="normal"&&D in DL){G=DL[D]
}if(C||F!==CA){E=parseFloat(G);
return C||C4.isNumeric(E)?E||0:G
}return G
},swap:function(B,C,E){var A,D,F={};
for(D in C){F[D]=B.style[D];
B.style[D]=C[D]
}A=E.call(B);
for(D in C){B.style[D]=F[D]
}return A
}});
if(Dj.getComputedStyle){EL=function(G,F){var H,D,E,B,C=Dj.getComputedStyle(G,null),A=G.style;
if(C){H=C[F];
if(H===""&&!C4.contains(G.ownerDocument,G)){H=C4.style(G,F)
}if(B8.test(H)&&CD.test(F)){D=A.width;
E=A.minWidth;
B=A.maxWidth;
A.minWidth=A.maxWidth=A.width=H;
H=C.width;
A.width=D;
A.minWidth=E;
A.maxWidth=B
}}return H
}
}else{if(CK.documentElement.currentStyle){EL=function(B,A){var E,F,D=B.currentStyle&&B.currentStyle[A],C=B.style;
if(D==null&&C&&C[A]){D=C[A]
}if(B8.test(D)&&!Dh.test(A)){E=C.left;
F=B.runtimeStyle&&B.runtimeStyle.left;
if(F){B.runtimeStyle.left=B.currentStyle.left
}C.left=A==="fontSize"?"1em":D;
D=C.pixelLeft+"px";
C.left=E;
if(F){B.runtimeStyle.left=F
}}return D===""?"auto":D
}
}}function EB(D,A,C){var B=Cm.exec(A);
return B?Math.max(0,B[1]-(C||0))+(B[2]||"px"):A
}function B4(C,D,F,E){var A=F===(E?"border":"content")?4:D==="width"?1:0,B=0;
for(;
A<4;
A+=2){if(F==="margin"){B+=C4.css(C,F+EW[A],true)
}if(E){if(F==="content"){B-=parseFloat(EL(C,"padding"+EW[A]))||0
}if(F!=="margin"){B-=parseFloat(EL(C,"border"+EW[A]+"Width"))||0
}}else{B+=parseFloat(EL(C,"padding"+EW[A]))||0;
if(F!=="padding"){B+=parseFloat(EL(C,"border"+EW[A]+"Width"))||0
}}}return B
}function Dr(C,D,F){var B=D==="width"?C.offsetWidth:C.offsetHeight,A=true,E=C4.support.boxSizing&&C4.css(C,"boxSizing")==="border-box";
if(B<=0||B==null){B=EL(C,D);
if(B<0||B==null){B=C.style[D]
}if(B8.test(B)){return B
}A=E&&(C4.support.boxSizingReliable||B===C.style[D]);
B=parseFloat(B)||0
}return(B+B4(C,D,F||(E?"border":"content"),A))+"px"
}function Cy(C){if(CW[C]){return CW[C]
}var B=C4("<"+C+">").appendTo(CK.body),A=B.css("display");
B.remove();
if(A==="none"||A===""){Dn=CK.body.appendChild(Dn||C4.extend(CK.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!CP||!Dn.createElement){CP=(Dn.contentWindow||Dn.contentDocument).document;
CP.write("<!doctype html><html><body>");
CP.close()
}B=CP.body.appendChild(CP.createElement(C));
A=EL(B,"display");
CK.body.removeChild(Dn)
}CW[C]=A;
return A
}C4.each(["height","width"],function(B,A){C4.cssHooks[A]={get:function(C,D,E){if(D){if(C.offsetWidth===0&&Dl.test(EL(C,"display"))){return C4.swap(C,DT,function(){return Dr(C,A,E)
})
}else{return Dr(C,A,E)
}}},set:function(D,C,E){return EB(D,C,E?B4(D,A,E,C4.support.boxSizing&&C4.css(D,"boxSizing")==="border-box"):0)
}}
});
if(!C4.support.opacity){C4.cssHooks.opacity={get:function(B,A){return CS.test((A&&B.currentStyle?B.currentStyle.filter:B.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":A?"1":""
},set:function(B,E){var C=B.style,D=B.currentStyle,F=C4.isNumeric(E)?"alpha(opacity="+E*100+")":"",A=D&&D.filter||C.filter||"";
C.zoom=1;
if(E>=1&&C4.trim(A.replace(B6,""))===""&&C.removeAttribute){C.removeAttribute("filter");
if(D&&!D.filter){return 
}}C.filter=B6.test(A)?A.replace(B6,F):A+" "+F
}}
}C4(function(){if(!C4.support.reliableMarginRight){C4.cssHooks.marginRight={get:function(B,A){return C4.swap(B,{display:"inline-block"},function(){if(A){return EL(B,"marginRight")
}})
}}
}if(!C4.support.pixelPosition&&C4.fn.position){C4.each(["top","left"],function(A,B){C4.cssHooks[B]={get:function(C,D){if(D){var E=EL(C,B);
return B8.test(E)?C4(C).position()[B]+"px":E
}}}
})
}});
if(C4.expr&&C4.expr.filters){C4.expr.filters.hidden=function(A){return(A.offsetWidth===0&&A.offsetHeight===0)||(!C4.support.reliableHiddenOffsets&&((A.style&&A.style.display)||EL(A,"display"))==="none")
};
C4.expr.filters.visible=function(A){return !C4.expr.filters.hidden(A)
}
}C4.each({margin:"",padding:"",border:"Width"},function(A,B){C4.cssHooks[A+B]={expand:function(D){var E,C=typeof D==="string"?D.split(" "):[D],F={};
for(E=0;
E<4;
E++){F[A+EW[E]+B]=C[E]||C[E-2]||C[0]
}return F
}};
if(!CD.test(A)){C4.cssHooks[A+B].set=EB
}});
var CM=/%20/g,EV=/\[\]$/,C8=/\r?\n/g,D3=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,CG=/^(?:select|textarea)/i;
C4.fn.extend({serialize:function(){return C4.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?C4.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||CG.test(this.nodeName)||D3.test(this.type))
}).map(function(B,A){var C=C4(this).val();
return C==null?null:C4.isArray(C)?C4.map(C,function(D,E){return{name:A.name,value:D.replace(C8,"\r\n")}
}):{name:A.name,value:C.replace(C8,"\r\n")}
}).get()
}});
C4.param=function(E,A){var B,C=[],D=function(G,F){F=C4.isFunction(F)?F():(F==null?"":F);
C[C.length]=encodeURIComponent(G)+"="+encodeURIComponent(F)
};
if(A===CA){A=C4.ajaxSettings&&C4.ajaxSettings.traditional
}if(C4.isArray(E)||(E.jquery&&!C4.isPlainObject(E))){C4.each(E,function(){D(this.name,this.value)
})
}else{for(B in E){D1(B,E[B],A,D)
}}return C.join("&").replace(CM,"+")
};
function D1(A,D,C,B){var E;
if(C4.isArray(D)){C4.each(D,function(F,G){if(C||EV.test(A)){B(A,G)
}else{D1(A+"["+(typeof G==="object"?F:"")+"]",G,C,B)
}})
}else{if(!C&&C4.type(D)==="object"){for(E in D){D1(A+"["+E+"]",D[E],C,B)
}}else{B(A,D)
}}}var B9,CQ,C9=/#.*$/,D7=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,DX=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,D9=/^(?:GET|HEAD)$/,EP=/^\/\//,Dx=/\?/,Cu=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,EJ=/([?&])_=[^&]*/,EF=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,EN=C4.fn.load,Ck={},CF={},Df=["*/"]+["*"];
try{B9=Cz.href
}catch(Cc){B9=CK.createElement("a");
B9.href="";
B9=B9.href
}CQ=EF.exec(B9.toLowerCase())||[];
function ED(A){return function(H,F){if(typeof H!=="string"){F=H;
H="*"
}var C,E,D,I=H.toLowerCase().split(CB),B=0,G=I.length;
if(C4.isFunction(F)){for(;
B<G;
B++){C=I[B];
D=/^\+/.test(C);
if(D){C=C.substr(1)||"*"
}E=A[C]=A[C]||[];
E[D?"unshift":"push"](F)
}}}
}function B7(H,D,I,F,C,K){C=C||D.dataTypes[0];
K=K||{};
K[C]=true;
var G,A=H[C],E=0,B=A?A.length:0,J=(H===Ck);
for(;
E<B&&(J||!G);
E++){G=A[E](D,I,F);
if(typeof G==="string"){if(!J||K[G]){G=CA
}else{D.dataTypes.unshift(G);
G=B7(H,D,I,F,G,K)
}}}if((J||!G)&&!K["*"]){G=B7(H,D,I,F,"*",K)
}return G
}function Bx(A,B){var C,E,D=C4.ajaxSettings.flatOptions||{};
for(C in B){if(B[C]!==CA){(D[C]?A:(E||(E={})))[C]=B[C]
}}if(E){C4.extend(true,A,E)
}}C4.fn.load=function(E,B,G){if(typeof E!=="string"&&EN){return EN.apply(this,arguments)
}if(!this.length){return this
}var H,D,A,F=this,C=E.indexOf(" ");
if(C>=0){H=E.slice(C,E.length);
E=E.slice(0,C)
}if(C4.isFunction(B)){G=B;
B=CA
}else{if(B&&typeof B==="object"){D="POST"
}}C4.ajax({url:E,type:D,dataType:"html",data:B,complete:function(I,J){if(G){F.each(G,A||[I.responseText,J,I])
}}}).done(function(I){A=arguments;
F.html(H?C4("<div>").append(I.replace(Cu,"")).find(H):I)
});
return this
};
C4.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(A,B){C4.fn[B]=function(C){return this.on(B,C)
}
});
C4.each(["get","post"],function(A,B){C4[B]=function(F,D,C,E){if(C4.isFunction(D)){E=E||C;
C=D;
D=CA
}return C4.ajax({type:B,url:F,data:D,success:C,dataType:E})
}
});
C4.extend({getScript:function(A,B){return C4.get(A,CA,B,"script")
},getJSON:function(B,A,C){return C4.get(B,A,C,"json")
},ajaxSetup:function(B,A){if(A){Bx(B,C4.ajaxSettings)
}else{A=B;
B=C4.ajaxSettings
}Bx(B,A);
return B
},ajaxSettings:{url:B9,isLocal:DX.test(CQ[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Df},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":Dj.String,"text html":true,"text json":C4.parseJSON,"text xml":C4.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:ED(Ck),ajaxTransport:ED(CF),ajax:function(L,Y){if(typeof L==="object"){Y=L;
L=CA
}Y=Y||{};
var R,J,U,F,D,C,V,P,K=C4.ajaxSetup({},Y),A=K.context||K,X=A!==K&&(A.nodeType||A instanceof C4)?C4(A):C4.event,B=C4.Deferred(),H=C4.Callbacks("once memory"),N=K.statusCode||{},T={},E={},G=0,M="canceled",O={readyState:0,setRequestHeader:function(Z,b){if(!G){var a=Z.toLowerCase();
Z=E[a]=E[a]||Z;
T[Z]=b
}return this
},getAllResponseHeaders:function(){return G===2?J:null
},getResponseHeader:function(Z){var a;
if(G===2){if(!U){U={};
while((a=D7.exec(J))){U[a[1].toLowerCase()]=a[2]
}}a=U[Z.toLowerCase()]
}return a===CA?null:a
},overrideMimeType:function(Z){if(!G){K.mimeType=Z
}return this
},abort:function(Z){Z=Z||M;
if(F){F.abort(Z)
}Q(0,Z);
return this
}};
function Q(b,g,a,d){var h,i,Z,c,j,f=g;
if(G===2){return 
}G=2;
if(D){clearTimeout(D)
}F=CA;
J=d||"";
O.readyState=b>0?4:0;
if(a){c=C0(K,O,a)
}if(b>=200&&b<300||b===304){if(K.ifModified){j=O.getResponseHeader("Last-Modified");
if(j){C4.lastModified[R]=j
}j=O.getResponseHeader("Etag");
if(j){C4.etag[R]=j
}}if(b===304){f="notmodified";
h=true
}else{h=C6(K,c);
f=h.state;
i=h.data;
Z=h.error;
h=!Z
}}else{Z=f;
if(!f||b){f="error";
if(b<0){b=0
}}}O.status=b;
O.statusText=""+(g||f);
if(h){B.resolveWith(A,[i,f,O])
}else{B.rejectWith(A,[O,f,Z])
}O.statusCode(N);
N=CA;
if(V){X.trigger("ajax"+(h?"Success":"Error"),[O,K,h?i:Z])
}H.fireWith(A,[O,f]);
if(V){X.trigger("ajaxComplete",[O,K]);
if(!(--C4.active)){C4.event.trigger("ajaxStop")
}}}B.promise(O);
O.success=O.done;
O.error=O.fail;
O.complete=H.add;
O.statusCode=function(Z){if(Z){var a;
if(G<2){for(a in Z){N[a]=[N[a],Z[a]]
}}else{a=Z[O.status];
O.always(a)
}}return this
};
K.url=((L||K.url)+"").replace(C9,"").replace(EP,CQ[1]+"//");
K.dataTypes=C4.trim(K.dataType||"*").toLowerCase().split(CB);
if(K.crossDomain==null){C=EF.exec(K.url.toLowerCase());
K.crossDomain=!!(C&&(C[1]!=CQ[1]||C[2]!=CQ[2]||(C[3]||(C[1]==="http:"?80:443))!=(CQ[3]||(CQ[1]==="http:"?80:443))))
}if(K.data&&K.processData&&typeof K.data!=="string"){K.data=C4.param(K.data,K.traditional)
}B7(Ck,K,Y,O);
if(G===2){return O
}V=K.global;
K.type=K.type.toUpperCase();
K.hasContent=!D9.test(K.type);
if(V&&C4.active++===0){C4.event.trigger("ajaxStart")
}if(!K.hasContent){if(K.data){K.url+=(Dx.test(K.url)?"&":"?")+K.data;
delete K.data
}R=K.url;
if(K.cache===false){var W=C4.now(),S=K.url.replace(EJ,"$1_="+W);
K.url=S+((S===K.url)?(Dx.test(K.url)?"&":"?")+"_="+W:"")
}}if(K.data&&K.hasContent&&K.contentType!==false||Y.contentType){O.setRequestHeader("Content-Type",K.contentType)
}if(K.ifModified){R=R||K.url;
if(C4.lastModified[R]){O.setRequestHeader("If-Modified-Since",C4.lastModified[R])
}if(C4.etag[R]){O.setRequestHeader("If-None-Match",C4.etag[R])
}}O.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Df+"; q=0.01":""):K.accepts["*"]);
for(P in K.headers){O.setRequestHeader(P,K.headers[P])
}if(K.beforeSend&&(K.beforeSend.call(A,O,K)===false||G===2)){return O.abort()
}M="abort";
for(P in {success:1,error:1,complete:1}){O[P](K[P])
}F=B7(CF,K,Y,O);
if(!F){Q(-1,"No Transport")
}else{O.readyState=1;
if(V){X.trigger("ajaxSend",[O,K])
}if(K.async&&K.timeout>0){D=setTimeout(function(){O.abort("timeout")
},K.timeout)
}try{G=1;
F.send(T,Q)
}catch(I){if(G<2){Q(-1,I)
}else{throw I
}}}return O
},active:0,lastModified:{},etag:{}});
function C0(E,A,H){var I,F,J,G,C=E.contents,D=E.dataTypes,B=E.responseFields;
for(F in B){if(F in H){A[B[F]]=H[F]
}}while(D[0]==="*"){D.shift();
if(I===CA){I=E.mimeType||A.getResponseHeader("content-type")
}}if(I){for(F in C){if(C[F]&&C[F].test(I)){D.unshift(F);
break
}}}if(D[0] in H){J=D[0]
}else{for(F in H){if(!D[0]||E.converters[F+" "+D[0]]){J=F;
break
}if(!G){G=F
}}J=J||G
}if(J){if(J!==D[0]){D.unshift(J)
}return H[J]
}}function C6(F,K){var D,H,C,I,A=F.dataTypes.slice(),G=A[0],B={},J=0;
if(F.dataFilter){K=F.dataFilter(K,F.dataType)
}if(A[1]){for(D in F.converters){B[D.toLowerCase()]=F.converters[D]
}}for(;
(C=A[++J]);
){if(C!=="*"){if(G!=="*"&&G!==C){D=B[G+" "+C]||B["* "+C];
if(!D){for(H in B){I=H.split(" ");
if(I[1]===C){D=B[G+" "+I[0]]||B["* "+I[0]];
if(D){if(D===true){D=B[H]
}else{if(B[H]!==true){C=I[0];
A.splice(J--,0,C)
}}break
}}}}if(D!==true){if(D&&F["throws"]){K=D(K)
}else{try{K=D(K)
}catch(E){return{state:"parsererror",error:D?E:"No conversion from "+G+" to "+C}
}}}}G=C
}}return{state:"success",data:K}
}var Dv=[],Dp=/\?/,Dt=/(=)\?(?=&|$)|\?\?/,EY=C4.now();
C4.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var A=Dv.pop()||(C4.expando+"_"+(EY++));
this[A]=true;
return A
}});
C4.ajaxPrefilter("json jsonp",function(C,I,D){var F,G,A,K=C.data,H=C.url,B=C.jsonp!==false,E=B&&Dt.test(H),J=B&&!E&&typeof K==="string"&&!(C.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dt.test(K);
if(C.dataTypes[0]==="jsonp"||E||J){F=C.jsonpCallback=C4.isFunction(C.jsonpCallback)?C.jsonpCallback():C.jsonpCallback;
G=Dj[F];
if(E){C.url=H.replace(Dt,"$1"+F)
}else{if(J){C.data=K.replace(Dt,"$1"+F)
}else{if(B){C.url+=(Dp.test(H)?"&":"?")+C.jsonp+"="+F
}}}C.converters["script json"]=function(){if(!A){C4.error(F+" was not called")
}return A[0]
};
C.dataTypes[0]="json";
Dj[F]=function(){A=arguments
};
D.always(function(){Dj[F]=G;
if(C[F]){C.jsonpCallback=I.jsonpCallback;
Dv.push(F)
}if(A&&C4.isFunction(G)){G(A[0])
}A=G=CA
});
return"script"
}});
C4.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(A){C4.globalEval(A);
return A
}}});
C4.ajaxPrefilter("script",function(A){if(A.cache===CA){A.cache=false
}if(A.crossDomain){A.type="GET";
A.global=false
}});
C4.ajaxTransport("script",function(C){if(C.crossDomain){var B,A=CK.head||CK.getElementsByTagName("head")[0]||CK.documentElement;
return{send:function(E,D){B=CK.createElement("script");
B.async="async";
if(C.scriptCharset){B.charset=C.scriptCharset
}B.src=C.url;
B.onload=B.onreadystatechange=function(F,G){if(G||!B.readyState||/loaded|complete/.test(B.readyState)){B.onload=B.onreadystatechange=null;
if(A&&B.parentNode){A.removeChild(B)
}B=CA;
if(!G){D(200,"success")
}}};
A.insertBefore(B,A.firstChild)
},abort:function(){if(B){B.onload(0,1)
}}}
}});
var Dz,CZ=Dj.ActiveXObject?function(){for(var A in Dz){Dz[A](0,1)
}}:false,Di=0;
function C7(){try{return new Dj.XMLHttpRequest()
}catch(A){}}function DW(){try{return new Dj.ActiveXObject("Microsoft.XMLHTTP")
}catch(A){}}C4.ajaxSettings.xhr=Dj.ActiveXObject?function(){return !this.isLocal&&C7()||DW()
}:C7;
(function(A){C4.extend(C4.support,{ajax:!!A,cors:!!A&&("withCredentials" in A)})
})(C4.ajaxSettings.xhr());
if(C4.support.ajax){C4.ajaxTransport(function(A){if(!A.crossDomain||C4.support.cors){var B;
return{send:function(C,H){var E,F,D=A.xhr();
if(A.username){D.open(A.type,A.url,A.async,A.username,A.password)
}else{D.open(A.type,A.url,A.async)
}if(A.xhrFields){for(F in A.xhrFields){D[F]=A.xhrFields[F]
}}if(A.mimeType&&D.overrideMimeType){D.overrideMimeType(A.mimeType)
}if(!A.crossDomain&&!C["X-Requested-With"]){C["X-Requested-With"]="XMLHttpRequest"
}try{for(F in C){D.setRequestHeader(F,C[F])
}}catch(G){}D.send((A.hasContent&&A.data)||null);
B=function(J,Q){var P,I,K,M,O;
try{if(B&&(Q||D.readyState===4)){B=CA;
if(E){D.onreadystatechange=C4.noop;
if(CZ){delete Dz[E]
}}if(Q){if(D.readyState!==4){D.abort()
}}else{P=D.status;
K=D.getAllResponseHeaders();
M={};
O=D.responseXML;
if(O&&O.documentElement){M.xml=O
}try{M.text=D.responseText
}catch(J){}try{I=D.statusText
}catch(L){I=""
}if(!P&&A.isLocal&&!A.crossDomain){P=M.text?200:404
}else{if(P===1223){P=204
}}}}}catch(N){if(!Q){H(-1,N)
}}if(M){H(P,I,M,K)
}};
if(!A.async){B()
}else{if(D.readyState===4){setTimeout(B,0)
}else{E=++Di;
if(CZ){if(!Dz){Dz={};
C4(Dj).unload(CZ)
}Dz[E]=B
}D.onreadystatechange=B
}}},abort:function(){if(B){B(0,1)
}}}
}})
}var Dc,DR,Do=/^(?:toggle|show|hide)$/,Cn=new RegExp("^(?:([-+])=|)("+DM+")([a-z%]*)$","i"),DQ=/queueHooks$/,Cf=[Ch],DG={"*":[function(G,C){var I,A,E,D=this.createTween(G,C),H=Cn.exec(C),F=D.cur(),B=+F||0,J=1;
if(H){I=+H[2];
A=H[3]||(C4.cssNumber[G]?"":"px");
if(A!=="px"&&B){B=C4.css(D.elem,G,true)||I||1;
do{E=J=J||".5";
B=B/J;
C4.style(D.elem,G,B+A);
J=D.cur()/F
}while(J!==1&&J!==E)
}D.unit=A;
D.start=B;
D.end=H[1]?B+(H[1]+1)*I:I
}return D
}]};
function Cp(){setTimeout(function(){Dc=CA
},0);
return(Dc=C4.now())
}function CN(B,A){C4.each(A,function(C,E){var D=(DG[C]||[]).concat(DG["*"]),G=0,F=D.length;
for(;
G<F;
G++){if(D[G].call(B,C,E)){return 
}}})
}function EI(G,A,F){var D,I=0,H=0,C=Cf.length,E=C4.Deferred().always(function(){delete J.elem
}),J=function(){var L=Dc||Cp(),O=Math.max(0,K.startTime+K.duration-L),M=1-(O/K.duration||0),P=0,N=K.tweens.length;
for(;
P<N;
P++){K.tweens[P].run(M)
}E.notifyWith(G,[K,M,O]);
if(M<1&&N){return O
}else{E.resolveWith(G,[K]);
return false
}},K=E.promise({elem:G,props:C4.extend({},A),opts:C4.extend(true,{specialEasing:{}},F),originalProperties:A,originalOptions:F,startTime:Dc||Cp(),duration:F.duration,tweens:[],createTween:function(N,M,O){var L=C4.Tween(G,K.opts,N,M,K.opts.specialEasing[N]||K.opts.easing);
K.tweens.push(L);
return L
},stop:function(L){var M=0,N=L?K.tweens.length:0;
for(;
M<N;
M++){K.tweens[M].run(1)
}if(L){E.resolveWith(G,[K,L])
}else{E.rejectWith(G,[K,L])
}return this
}}),B=K.props;
CR(B,K.opts.specialEasing);
for(;
I<C;
I++){D=Cf[I].call(K,G,B,K.opts);
if(D){return D
}}CN(K,B);
if(C4.isFunction(K.opts.start)){K.opts.start.call(G,K)
}C4.fx.timer(C4.extend(J,{anim:K,queue:K.opts.queue,elem:G}));
return K.progress(K.opts.progress).done(K.opts.done,K.opts.complete).fail(K.opts.fail).always(K.opts.always)
}function CR(D,B){var A,E,F,C,G;
for(A in D){E=C4.camelCase(A);
F=B[E];
C=D[A];
if(C4.isArray(C)){F=C[1];
C=D[A]=C[0]
}if(A!==E){D[E]=C;
delete D[A]
}G=C4.cssHooks[E];
if(G&&"expand" in G){C=G.expand(C);
delete D[E];
for(A in C){if(!(A in D)){D[A]=C[A];
B[A]=F
}}}else{B[E]=F
}}}C4.Animation=C4.extend(EI,{tweener:function(C,D){if(C4.isFunction(C)){D=C;
C=["*"]
}else{C=C.split(" ")
}var B,E=0,A=C.length;
for(;
E<A;
E++){B=C[E];
DG[B]=DG[B]||[];
DG[B].unshift(D)
}},prefilter:function(B,A){if(A){Cf.unshift(B)
}else{Cf.push(B)
}}});
function Ch(O,G,I){var N,A,D,P,L,C,K,M,F=this,B=O.style,J={},H=[],E=O.nodeType&&CU(O);
if(!I.queue){K=C4._queueHooks(O,"fx");
if(K.unqueued==null){K.unqueued=0;
M=K.empty.fire;
K.empty.fire=function(){if(!K.unqueued){M()
}}
}K.unqueued++;
F.always(function(){F.always(function(){K.unqueued--;
if(!C4.queue(O,"fx").length){K.empty.fire()
}})
})
}if(O.nodeType===1&&("height" in G||"width" in G)){I.overflow=[B.overflow,B.overflowX,B.overflowY];
if(C4.css(O,"display")==="inline"&&C4.css(O,"float")==="none"){if(!C4.support.inlineBlockNeedsLayout||Cy(O.nodeName)==="inline"){B.display="inline-block"
}else{B.zoom=1
}}}if(I.overflow){B.overflow="hidden";
if(!C4.support.shrinkWrapBlocks){F.done(function(){B.overflow=I.overflow[0];
B.overflowX=I.overflow[1];
B.overflowY=I.overflow[2]
})
}}for(N in G){D=G[N];
if(Do.exec(D)){delete G[N];
if(D===(E?"hide":"show")){continue
}H.push(N)
}}P=H.length;
if(P){L=C4._data(O,"fxshow")||C4._data(O,"fxshow",{});
if(E){C4(O).show()
}else{F.done(function(){C4(O).hide()
})
}F.done(function(){var Q;
C4.removeData(O,"fxshow",true);
for(Q in J){C4.style(O,Q,J[Q])
}});
for(N=0;
N<P;
N++){A=H[N];
C=F.createTween(A,E?L[A]:0);
J[A]=L[A]||C4.style(O,A);
if(!(A in L)){L[A]=C.start;
if(E){C.end=C.start;
C.start=A==="width"||A==="height"?1:0
}}}}}function DK(A,C,D,E,B){return new DK.prototype.init(A,C,D,E,B)
}C4.Tween=DK;
DK.prototype={constructor:DK,init:function(C,D,E,F,B,A){this.elem=C;
this.prop=E;
this.easing=B||"swing";
this.options=D;
this.start=this.now=this.cur();
this.end=F;
this.unit=A||(C4.cssNumber[E]?"":"px")
},cur:function(){var A=DK.propHooks[this.prop];
return A&&A.get?A.get(this):DK.propHooks._default.get(this)
},run:function(C){var A,B=DK.propHooks[this.prop];
if(this.options.duration){this.pos=A=C4.easing[this.easing](C,this.options.duration*C,0,1,this.options.duration)
}else{this.pos=A=C
}this.now=(this.end-this.start)*A+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(B&&B.set){B.set(this)
}else{DK.propHooks._default.set(this)
}return this
}};
DK.prototype.init.prototype=DK.prototype;
DK.propHooks={_default:{get:function(B){var A;
if(B.elem[B.prop]!=null&&(!B.elem.style||B.elem.style[B.prop]==null)){return B.elem[B.prop]
}A=C4.css(B.elem,B.prop,false,"");
return !A||A==="auto"?0:A
},set:function(A){if(C4.fx.step[A.prop]){C4.fx.step[A.prop](A)
}else{if(A.elem.style&&(A.elem.style[C4.cssProps[A.prop]]!=null||C4.cssHooks[A.prop])){C4.style(A.elem,A.prop,A.now+A.unit)
}else{A.elem[A.prop]=A.now
}}}}};
DK.propHooks.scrollTop=DK.propHooks.scrollLeft={set:function(A){if(A.elem.nodeType&&A.elem.parentNode){A.elem[A.prop]=A.now
}}};
C4.each(["toggle","show","hide"],function(A,B){var C=C4.fn[B];
C4.fn[B]=function(F,D,E){return F==null||typeof F==="boolean"||(!A&&C4.isFunction(F)&&C4.isFunction(D))?C.apply(this,arguments):this.animate(DS(B,true),F,D,E)
}
});
C4.fn.extend({fadeTo:function(D,C,A,B){return this.filter(CU).css("opacity",0).show().end().animate({opacity:C},D,A,B)
},animate:function(F,D,B,C){var A=C4.isEmptyObject(F),G=C4.speed(D,B,C),E=function(){var H=EI(this,C4.extend({},F),G);
if(A){H.stop(true)
}};
return A||G.queue===false?this.each(E):this.queue(G.queue,E)
},stop:function(A,B,D){var C=function(F){var E=F.stop;
delete F.stop;
E(D)
};
if(typeof A!=="string"){D=B;
B=A;
A=CA
}if(B&&A!==false){this.queue(A||"fx",[])
}return this.each(function(){var E=true,H=A!=null&&A+"queueHooks",F=C4.timers,G=C4._data(this);
if(H){if(G[H]&&G[H].stop){C(G[H])
}}else{for(H in G){if(G[H]&&G[H].stop&&DQ.test(H)){C(G[H])
}}}for(H=F.length;
H--;
){if(F[H].elem===this&&(A==null||F[H].queue===A)){F[H].anim.stop(D);
E=false;
F.splice(H,1)
}}if(E||!D){C4.dequeue(this,A)
}})
}});
function DS(A,D){var B,E={height:A},C=0;
D=D?1:0;
for(;
C<4;
C+=2-D){B=EW[C];
E["margin"+B]=E["padding"+B]=A
}if(D){E.opacity=E.width=A
}return E
}C4.each({slideDown:DS("show"),slideUp:DS("hide"),slideToggle:DS("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(A,B){C4.fn[A]=function(E,C,D){return this.animate(B,E,C,D)
}
});
C4.speed=function(A,C,B){var D=A&&typeof A==="object"?C4.extend({},A):{complete:B||!B&&C||C4.isFunction(A)&&A,duration:A,easing:B&&C||C&&!C4.isFunction(C)&&C};
D.duration=C4.fx.off?0:typeof D.duration==="number"?D.duration:D.duration in C4.fx.speeds?C4.fx.speeds[D.duration]:C4.fx.speeds._default;
if(D.queue==null||D.queue===true){D.queue="fx"
}D.old=D.complete;
D.complete=function(){if(C4.isFunction(D.old)){D.old.call(this)
}if(D.queue){C4.dequeue(this,D.queue)
}};
return D
};
C4.easing={linear:function(A){return A
},swing:function(A){return 0.5-Math.cos(A*Math.PI)/2
}};
C4.timers=[];
C4.fx=DK.prototype.init;
C4.fx.tick=function(){var C,A=C4.timers,B=0;
for(;
B<A.length;
B++){C=A[B];
if(!C()&&A[B]===C){A.splice(B--,1)
}}if(!A.length){C4.fx.stop()
}};
C4.fx.timer=function(A){if(A()&&C4.timers.push(A)&&!DR){DR=setInterval(C4.fx.tick,C4.fx.interval)
}};
C4.fx.interval=13;
C4.fx.stop=function(){clearInterval(DR);
DR=null
};
C4.fx.speeds={slow:600,fast:200,_default:400};
C4.fx.step={};
if(C4.expr&&C4.expr.filters){C4.expr.filters.animated=function(A){return C4.grep(C4.timers,function(B){return A===B.elem
}).length
}
}var Cx=/^(?:body|html)$/i;
C4.fn.offset=function(G){if(arguments.length){return G===CA?this:this.each(function(N){C4.offset.setOffset(this,G,N)
})
}var J,H,I,C,K,B,F,L,D,M,A=this[0],E=A&&A.ownerDocument;
if(!E){return 
}if((I=E.body)===A){return C4.offset.bodyOffset(A)
}H=E.documentElement;
if(!C4.contains(H,A)){return{top:0,left:0}
}J=A.getBoundingClientRect();
C=EU(E);
K=H.clientTop||I.clientTop||0;
B=H.clientLeft||I.clientLeft||0;
F=C.pageYOffset||H.scrollTop;
L=C.pageXOffset||H.scrollLeft;
D=J.top+F-K;
M=J.left+L-B;
return{top:D,left:M}
};
C4.offset={bodyOffset:function(B){var C=B.offsetTop,A=B.offsetLeft;
if(C4.support.doesNotIncludeMarginInBodyOffset){C+=parseFloat(C4.css(B,"marginTop"))||0;
A+=parseFloat(C4.css(B,"marginLeft"))||0
}return{top:C,left:A}
},setOffset:function(M,C,J){var I=C4.css(M,"position");
if(I==="static"){M.style.position="relative"
}var K=C4(M),H=K.offset(),F=C4.css(M,"top"),B=C4.css(M,"left"),G=(I==="absolute"||I==="fixed")&&C4.inArray("auto",[F,B])>-1,D={},A={},E,L;
if(G){A=K.position();
E=A.top;
L=A.left
}else{E=parseFloat(F)||0;
L=parseFloat(B)||0
}if(C4.isFunction(C)){C=C.call(M,J,H)
}if(C.top!=null){D.top=(C.top-H.top)+E
}if(C.left!=null){D.left=(C.left-H.left)+L
}if("using" in C){C.using.call(M,D)
}else{K.css(D)
}}};
C4.fn.extend({position:function(){if(!this[0]){return 
}var A=this[0],B=this.offsetParent(),C=this.offset(),D=Cx.test(B[0].nodeName)?{top:0,left:0}:B.offset();
C.top-=parseFloat(C4.css(A,"marginTop"))||0;
C.left-=parseFloat(C4.css(A,"marginLeft"))||0;
D.top+=parseFloat(C4.css(B[0],"borderTopWidth"))||0;
D.left+=parseFloat(C4.css(B[0],"borderLeftWidth"))||0;
return{top:C.top-D.top,left:C.left-D.left}
},offsetParent:function(){return this.map(function(){var A=this.offsetParent||CK.body;
while(A&&(!Cx.test(A.nodeName)&&C4.css(A,"position")==="static")){A=A.offsetParent
}return A||CK.body
})
}});
C4.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(C,A){var B=/Y/.test(A);
C4.fn[C]=function(D){return C4.access(this,function(H,E,F){var G=EU(H);
if(F===CA){return G?(A in G)?G[A]:G.document.documentElement[E]:H[E]
}if(G){G.scrollTo(!B?F:C4(G).scrollLeft(),B?F:C4(G).scrollTop())
}else{H[E]=F
}},C,D,arguments.length,null)
}
});
function EU(A){return C4.isWindow(A)?A:A.nodeType===9?A.defaultView||A.parentWindow:false
}C4.each({Height:"height",Width:"width"},function(A,B){C4.each({padding:"inner"+A,content:B,"":"outer"+A},function(D,C){C4.fn[C]=function(E,F){var G=arguments.length&&(D||typeof E!=="boolean"),H=D||(E===true||F===true?"margin":"border");
return C4.access(this,function(K,L,J){var I;
if(C4.isWindow(K)){return K.document.documentElement["client"+A]
}if(K.nodeType===9){I=K.documentElement;
return Math.max(K.body["scroll"+A],I["scroll"+A],K.body["offset"+A],I["offset"+A],I["client"+A])
}return J===CA?C4.css(K,L,J,H):C4.style(K,L,J,H)
},B,G?E:CA,G,null)
}
})
});
Dj.jQuery=Dj.$=C4;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return C4
})
}})(window);