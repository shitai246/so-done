!function(A){A(function(){A.support.transition=(function(){var B=(function(){var E=document.createElement("bootstrap"),D={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},C;
for(C in D){if(E.style[C]!==undefined){return D[C]
}}}());
return B&&{end:B}
})()
})
}(window.jQuery);
!function(A){var C='[data-dismiss="alert"]',B=function(D){A(D).on("click",C,this.close)
};
B.prototype.close=function(D){var H=A(this),F=H.attr("data-target"),G;
if(!F){F=H.attr("href");
F=F&&F.replace(/.*(?=#[^\s]*$)/,"")
}G=A(F);
D&&D.preventDefault();
G.length||(G=H.hasClass("alert")?H:H.parent());
G.trigger(D=A.Event("close"));
if(D.isDefaultPrevented()){return 
}G.removeClass("in");
function E(){G.trigger("closed").remove()
}A.support.transition&&G.hasClass("fade")?G.on(A.support.transition.end,E):E()
};
A.fn.alert=function(D){return this.each(function(){var F=A(this),E=F.data("alert");
if(!E){F.data("alert",(E=new B(this)))
}if(typeof D=="string"){E[D].call(F)
}})
};
A.fn.alert.Constructor=B;
A(function(){A("body").on("click.alert.data-api",C,B.prototype.close)
})
}(window.jQuery);
!function(A){var B=function(C,D){this.$element=A(C);
this.options=A.extend({},A.fn.button.defaults,D)
};
B.prototype.setState=function(F){var C="disabled",D=this.$element,E=D.data(),G=D.is("input")?"val":"html";
F=F+"Text";
E.resetText||D.data("resetText",D[G]());
D[G](E[F]||this.options[F]);
setTimeout(function(){F=="loadingText"?D.addClass(C).attr(C,C):D.removeClass(C).removeAttr(C)
},0)
};
B.prototype.toggle=function(){var C=this.$element.parent('[data-toggle="buttons-radio"]');
C&&C.find(".active").removeClass("active");
this.$element.toggleClass("active")
};
A.fn.button=function(C){return this.each(function(){var F=A(this),E=F.data("button"),D=typeof C=="object"&&C;
if(!E){F.data("button",(E=new B(this,D)))
}if(C=="toggle"){E.toggle()
}else{if(C){E.setState(C)
}}})
};
A.fn.button.defaults={loadingText:"loading..."};
A.fn.button.Constructor=B;
A(function(){A("body").on("click.button.data-api","[data-toggle^=button]",function(C){var D=A(C.target);
if(!D.hasClass("btn")){D=D.closest(".btn")
}D.button("toggle")
})
})
}(window.jQuery);
!function(B){var A=function(C,D){this.$element=B(C);
this.options=D;
this.options.slide&&this.slide(this.options.slide);
this.options.pause=="hover"&&this.$element.on("mouseenter",B.proxy(this.pause,this)).on("mouseleave",B.proxy(this.cycle,this))
};
A.prototype={cycle:function(C){if(!C){this.paused=false
}this.options.interval&&!this.paused&&(this.interval=setInterval(B.proxy(this.next,this),this.options.interval));
return this
},to:function(C){var D=this.$element.find(".item.active"),E=D.parent().children(),F=E.index(D),G=this;
if(C>(E.length-1)||C<0){return 
}if(this.sliding){return this.$element.one("slid",function(){G.to(C)
})
}if(F==C){return this.pause().cycle()
}return this.slide(C>F?"next":"prev",B(E[C]))
},pause:function(C){if(!C){this.paused=true
}if(this.$element.find(".next, .prev").length&&B.support.transition.end){this.$element.trigger(B.support.transition.end);
this.cycle()
}clearInterval(this.interval);
this.interval=null;
return this
},next:function(){if(this.sliding){return 
}return this.slide("next")
},prev:function(){if(this.sliding){return 
}return this.slide("prev")
},slide:function(I,D){var K=this.$element.find(".item.active"),C=D||K[I](),H=this.interval,J=I=="next"?"left":"right",E=I=="next"?"first":"last",F=this,G=B.Event("slide",{relatedTarget:C[0]});
this.sliding=true;
H&&this.pause();
C=C.length?C:this.$element.find(".item")[E]();
if(C.hasClass("active")){return 
}if(B.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(G);
if(G.isDefaultPrevented()){return 
}C.addClass(I);
C[0].offsetWidth;
K.addClass(J);
C.addClass(J);
this.$element.one(B.support.transition.end,function(){C.removeClass([I,J].join(" ")).addClass("active");
K.removeClass(["active",J].join(" "));
F.sliding=false;
setTimeout(function(){F.$element.trigger("slid")
},0)
})
}else{this.$element.trigger(G);
if(G.isDefaultPrevented()){return 
}K.removeClass("active");
C.addClass("active");
this.sliding=false;
this.$element.trigger("slid")
}H&&this.cycle();
return this
}};
B.fn.carousel=function(C){return this.each(function(){var G=B(this),F=G.data("carousel"),D=B.extend({},B.fn.carousel.defaults,typeof C=="object"&&C),E=typeof C=="string"?C:D.slide;
if(!F){G.data("carousel",(F=new A(this,D)))
}if(typeof C=="number"){F.to(C)
}else{if(E){F[E]()
}else{if(D.interval){F.cycle()
}}}})
};
B.fn.carousel.defaults={interval:5000,pause:"hover"};
B.fn.carousel.Constructor=A;
B(function(){B("body").on("click.carousel.data-api","[data-slide]",function(C){var G=B(this),E,D=B(G.attr("data-target")||(E=G.attr("href"))&&E.replace(/.*(?=#[^\s]+$)/,"")),F=!D.data("modal")&&B.extend({},D.data(),G.data());
D.carousel(F);
C.preventDefault()
})
})
}(window.jQuery);
!function(B){var A=function(C,D){this.$element=B(C);
this.options=B.extend({},B.fn.collapse.defaults,D);
if(this.options.parent){this.$parent=B(this.options.parent)
}this.options.toggle&&this.toggle()
};
A.prototype={constructor:A,dimension:function(){var C=this.$element.hasClass("width");
return C?"width":"height"
},show:function(){var E,F,D,C;
if(this.transitioning){return 
}E=this.dimension();
F=B.camelCase(["scroll",E].join("-"));
D=this.$parent&&this.$parent.find("> .accordion-group > .in");
if(D&&D.length){C=D.data("collapse");
if(C&&C.transitioning){return 
}D.collapse("hide");
C||D.data("collapse",null)
}this.$element[E](0);
this.transition("addClass",B.Event("show"),"shown");
B.support.transition&&this.$element[E](this.$element[0][F])
},hide:function(){var C;
if(this.transitioning){return 
}C=this.dimension();
this.reset(this.$element[C]());
this.transition("removeClass",B.Event("hide"),"hidden");
this.$element[C](0)
},reset:function(D){var C=this.dimension();
this.$element.removeClass("collapse")[C](D||"auto")[0].offsetWidth;
this.$element[D!==null?"addClass":"removeClass"]("collapse");
return this
},transition:function(C,E,F){var G=this,D=function(){if(E.type=="show"){G.reset()
}G.transitioning=0;
G.$element.trigger(F)
};
this.$element.trigger(E);
if(E.isDefaultPrevented()){return 
}this.transitioning=1;
this.$element[C]("in");
B.support.transition&&this.$element.hasClass("collapse")?this.$element.one(B.support.transition.end,D):D()
},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()
}};
B.fn.collapse=function(C){return this.each(function(){var F=B(this),E=F.data("collapse"),D=typeof C=="object"&&C;
if(!E){F.data("collapse",(E=new A(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
B.fn.collapse.defaults={toggle:true};
B.fn.collapse.Constructor=A;
B(function(){B("body").on("click.collapse.data-api","[data-toggle=collapse]",function(C){var G=B(this),D,F=G.attr("data-target")||C.preventDefault()||(D=G.attr("href"))&&D.replace(/.*(?=#[^\s]+$)/,""),E=B(F).data("collapse")?"toggle":G.data();
G[B(F).hasClass("in")?"addClass":"removeClass"]("collapsed");
B(F).collapse(E)
})
})
}(window.jQuery);
!function(D){var A="[data-toggle=dropdown]",E=function(F){var G=D(F).on("click.dropdown.data-api",this.toggle);
D("html").on("click.dropdown.data-api",function(){G.parent().removeClass("open")
})
};
E.prototype={constructor:E,toggle:function(H){var G=D(this),F,I;
if(G.is(".disabled, :disabled")){return 
}F=C(G);
I=F.hasClass("open");
B();
if(!I){F.toggleClass("open");
G.focus()
}return false
},keydown:function(J){var L,F,I,H,G,K;
if(!/(38|40|27)/.test(J.keyCode)){return 
}L=D(this);
J.preventDefault();
J.stopPropagation();
if(L.is(".disabled, :disabled")){return 
}H=C(L);
G=H.hasClass("open");
if(!G||(G&&J.keyCode==27)){return L.click()
}F=D("[role=menu] li:not(.divider) a",H);
if(!F.length){return 
}K=F.index(F.filter(":focus"));
if(J.keyCode==38&&K>0){K--
}if(J.keyCode==40&&K<F.length-1){K++
}if(!~K){K=0
}F.eq(K).focus()
}};
function B(){C(D(A)).removeClass("open")
}function C(G){var H=G.attr("data-target"),F;
if(!H){H=G.attr("href");
H=H&&H.replace(/.*(?=#[^\s]*$)/,"")
}F=D(H);
F.length||(F=G.parent());
return F
}D.fn.dropdown=function(F){return this.each(function(){var H=D(this),G=H.data("dropdown");
if(!G){H.data("dropdown",(G=new E(this)))
}if(typeof F=="string"){G[F].call(H)
}})
};
D.fn.dropdown.Constructor=E;
D(function(){D("html").on("click.dropdown.data-api touchstart.dropdown.data-api",B);
D("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown",function(F){F.stopPropagation()
}).on("click.dropdown.data-api touchstart.dropdown.data-api",A,E.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",A+", [role=menu]",E.prototype.keydown)
})
}(window.jQuery);
!function(A){var B=function(C,D){this.options=D;
this.$element=A(C).delegate('[data-dismiss="modal"]',"click.dismiss.modal",A.proxy(this.hide,this));
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
};
B.prototype={constructor:B,toggle:function(){return this[!this.isShown?"show":"hide"]()
},show:function(){var D=this,C=A.Event("show");
this.$element.trigger(C);
if(this.isShown||C.isDefaultPrevented()){return 
}A("body").addClass("modal-open");
this.isShown=true;
this.escape();
this.backdrop(function(){var E=A.support.transition&&D.$element.hasClass("fade");
if(!D.$element.parent().length){D.$element.appendTo(document.body)
}D.$element.show();
if(E){D.$element[0].offsetWidth
}D.$element.addClass("in").attr("aria-hidden",false).focus();
D.enforceFocus();
E?D.$element.one(A.support.transition.end,function(){D.$element.trigger("shown")
}):D.$element.trigger("shown")
})
},hide:function(C){C&&C.preventDefault();
var D=this;
C=A.Event("hide");
this.$element.trigger(C);
if(!this.isShown||C.isDefaultPrevented()){return 
}this.isShown=false;
A("body").removeClass("modal-open");
this.escape();
A(document).off("focusin.modal");
this.$element.removeClass("in").attr("aria-hidden",true);
A.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
},enforceFocus:function(){var C=this;
A(document).on("focusin.modal",function(D){if(C.$element[0]!==D.target&&!C.$element.has(D.target).length){C.$element.focus()
}})
},escape:function(){var C=this;
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(D){D.which==27&&C.hide()
})
}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
}}},hideWithTransition:function(){var D=this,C=setTimeout(function(){D.$element.off(A.support.transition.end);
D.hideModal()
},500);
this.$element.one(A.support.transition.end,function(){clearTimeout(C);
D.hideModal()
})
},hideModal:function(C){this.$element.hide().trigger("hidden");
this.backdrop()
},removeBackdrop:function(){this.$backdrop.remove();
this.$backdrop=null
},backdrop:function(E){var D=this,C=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var F=A.support.transition&&C;
this.$backdrop=A('<div class="modal-backdrop '+C+'" />').appendTo(document.body);
if(this.options.backdrop!="static"){this.$backdrop.click(A.proxy(this.hide,this))
}if(F){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
F?this.$backdrop.one(A.support.transition.end,E):E()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
A.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(A.support.transition.end,A.proxy(this.removeBackdrop,this)):this.removeBackdrop()
}else{if(E){E()
}}}}};
A.fn.modal=function(C){return this.each(function(){var F=A(this),E=F.data("modal"),D=A.extend({},A.fn.modal.defaults,F.data(),typeof C=="object"&&C);
if(!E){F.data("modal",(E=new B(this,D)))
}if(typeof C=="string"){E[C]()
}else{if(D.show){E.show()
}}})
};
A.fn.modal.defaults={backdrop:true,keyboard:true,show:true};
A.fn.modal.Constructor=B;
A(function(){A("body").on("click.modal.data-api",'[data-toggle="modal"]',function(C){var G=A(this),E=G.attr("href"),D=A(G.attr("data-target")||(E&&E.replace(/.*(?=#[^\s]+$)/,""))),F=D.data("modal")?"toggle":A.extend({remote:!/#/.test(E)&&E},D.data(),G.data());
C.preventDefault();
D.modal(F).one("hide",function(){G.focus()
})
})
})
}(window.jQuery);
!function(A){var B=function(C,D){this.init("tooltip",C,D)
};
B.prototype={constructor:B,init:function(G,F,E){var C,D;
this.type=G;
this.$element=A(F);
this.options=this.getOptions(E);
this.enabled=true;
if(this.options.trigger=="click"){this.$element.on("click."+this.type,this.options.selector,A.proxy(this.toggle,this))
}else{if(this.options.trigger!="manual"){C=this.options.trigger=="hover"?"mouseenter":"focus";
D=this.options.trigger=="hover"?"mouseleave":"blur";
this.$element.on(C+"."+this.type,this.options.selector,A.proxy(this.enter,this));
this.$element.on(D+"."+this.type,this.options.selector,A.proxy(this.leave,this))
}}this.options.selector?(this._options=A.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
},getOptions:function(C){C=A.extend({},A.fn[this.type].defaults,C,this.$element.data());
if(C.delay&&typeof C.delay=="number"){C.delay={show:C.delay,hide:C.delay}
}return C
},enter:function(C){var D=A(C.currentTarget)[this.type](this._options).data(this.type);
if(!D.options.delay||!D.options.delay.show){return D.show()
}clearTimeout(this.timeout);
D.hoverState="in";
this.timeout=setTimeout(function(){if(D.hoverState=="in"){D.show()
}},D.options.delay.show)
},leave:function(C){var D=A(C.currentTarget)[this.type](this._options).data(this.type);
if(this.timeout){clearTimeout(this.timeout)
}if(!D.options.delay||!D.options.delay.hide){return D.hide()
}D.hoverState="out";
this.timeout=setTimeout(function(){if(D.hoverState=="out"){D.hide()
}},D.options.delay.hide)
},show:function(){var D,I,C,F,E,H,G;
if(this.hasContent()&&this.enabled){D=this.tip();
this.setContent();
if(this.options.animation){D.addClass("fade")
}H=typeof this.options.placement=="function"?this.options.placement.call(this,D[0],this.$element[0]):this.options.placement;
I=/in/.test(H);
D.remove().css({top:0,left:0,display:"block"}).appendTo(I?this.$element:document.body);
C=this.getPosition(I);
F=D[0].offsetWidth;
E=D[0].offsetHeight;
switch(I?H.split(" ")[1]:H){case"bottom":G={top:C.top+C.height,left:C.left+C.width/2-F/2};
break;
case"top":G={top:C.top-E,left:C.left+C.width/2-F/2};
break;
case"left":G={top:C.top+C.height/2-E/2,left:C.left-F};
break;
case"right":G={top:C.top+C.height/2-E/2,left:C.left+C.width};
break
}D.css(G).addClass(H).addClass("in")
}},setContent:function(){var C=this.tip(),D=this.getTitle();
C.find(".tooltip-inner")[this.options.html?"html":"text"](D);
C.removeClass("fade in top bottom left right")
},hide:function(){var E=this,C=this.tip();
C.removeClass("in");
function D(){var F=setTimeout(function(){C.off(A.support.transition.end).remove()
},500);
C.one(A.support.transition.end,function(){clearTimeout(F);
C.remove()
})
}A.support.transition&&this.$tip.hasClass("fade")?D():C.remove();
return this
},fixTitle:function(){var C=this.$element;
if(C.attr("title")||typeof (C.attr("data-original-title"))!="string"){C.attr("data-original-title",C.attr("title")||"").removeAttr("title")
}},hasContent:function(){return this.getTitle()
},getPosition:function(C){return A.extend({},(C?{top:0,left:0}:this.$element.offset()),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})
},getTitle:function(){var D,E=this.$element,C=this.options;
D=E.attr("data-original-title")||(typeof C.title=="function"?C.title.call(E[0]):C.title);
return D
},tip:function(){return this.$tip=this.$tip||A(this.options.template)
},validate:function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}},enable:function(){this.enabled=true
},disable:function(){this.enabled=false
},toggleEnabled:function(){this.enabled=!this.enabled
},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}};
A.fn.tooltip=function(C){return this.each(function(){var F=A(this),E=F.data("tooltip"),D=typeof C=="object"&&C;
if(!E){F.data("tooltip",(E=new B(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
A.fn.tooltip.Constructor=B;
A.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:true}
}(window.jQuery);
!function(A){var B=function(C,D){this.init("popover",C,D)
};
B.prototype=A.extend({},A.fn.tooltip.Constructor.prototype,{constructor:B,setContent:function(){var D=this.tip(),C=this.getTitle(),E=this.getContent();
D.find(".popover-title")[this.options.html?"html":"text"](C);
D.find(".popover-content > *")[this.options.html?"html":"text"](E);
D.removeClass("fade top bottom left right in")
},hasContent:function(){return this.getTitle()||this.getContent()
},getContent:function(){var C,E=this.$element,D=this.options;
C=E.attr("data-content")||(typeof D.content=="function"?D.content.call(E[0]):D.content);
return C
},tip:function(){if(!this.$tip){this.$tip=A(this.options.template)
}return this.$tip
},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)
}});
A.fn.popover=function(C){return this.each(function(){var F=A(this),E=F.data("popover"),D=typeof C=="object"&&C;
if(!E){F.data("popover",(E=new B(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
A.fn.popover.Constructor=B;
A.fn.popover.defaults=A.extend({},A.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})
}(window.jQuery);
!function(A){function B(G,F){var C=A.proxy(this.process,this),D=A(G).is("body")?A(window):A(G),E;
this.options=A.extend({},A.fn.scrollspy.defaults,F);
this.$scrollElement=D.on("scroll.scroll-spy.data-api",C);
this.selector=(this.options.target||((E=A(G).attr("href"))&&E.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";
this.$body=A("body");
this.refresh();
this.process()
}B.prototype={constructor:B,refresh:function(){var D=this,C;
this.offsets=A([]);
this.targets=A([]);
C=this.$body.find(this.selector).map(function(){var F=A(this),E=F.data("target")||F.attr("href"),G=/^#\w/.test(E)&&A(E);
return(G&&G.length&&[[G.position().top,E]])||null
}).sort(function(F,E){return F[0]-E[0]
}).each(function(){D.offsets.push(this[0]);
D.targets.push(this[1])
})
},process:function(){var I=this.$scrollElement.scrollTop()+this.options.offset,D=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,C=D-this.$scrollElement.height(),G=this.offsets,E=this.targets,F=this.activeTarget,H;
if(I>=C){return F!=(H=E.last()[0])&&this.activate(H)
}for(H=G.length;
H--;
){F!=E[H]&&I>=G[H]&&(!G[H+1]||I<=G[H+1])&&this.activate(E[H])
}},activate:function(D){var C,E;
this.activeTarget=D;
A(this.selector).parent(".active").removeClass("active");
E=this.selector+'[data-target="'+D+'"],'+this.selector+'[href="'+D+'"]';
C=A(E).parent("li").addClass("active");
if(C.parent(".dropdown-menu").length){C=C.closest("li.dropdown").addClass("active")
}C.trigger("activate")
}};
A.fn.scrollspy=function(C){return this.each(function(){var F=A(this),E=F.data("scrollspy"),D=typeof C=="object"&&C;
if(!E){F.data("scrollspy",(E=new B(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
A.fn.scrollspy.Constructor=B;
A.fn.scrollspy.defaults={offset:10};
A(window).on("load",function(){A('[data-spy="scroll"]').each(function(){var C=A(this);
C.scrollspy(C.data())
})
})
}(window.jQuery);
!function(A){var B=function(C){this.element=A(C)
};
B.prototype={constructor:B,show:function(){var D=this.element,F=D.closest("ul:not(.dropdown-menu)"),E=D.attr("data-target"),G,H,C;
if(!E){E=D.attr("href");
E=E&&E.replace(/.*(?=#[^\s]*$)/,"")
}if(D.parent("li").hasClass("active")){return 
}G=F.find(".active a").last()[0];
C=A.Event("show",{relatedTarget:G});
D.trigger(C);
if(C.isDefaultPrevented()){return 
}H=A(E);
this.activate(D.parent("li"),F);
this.activate(H,H.parent(),function(){D.trigger({type:"shown",relatedTarget:G})
})
},activate:function(F,E,D){var H=E.find("> .active"),G=D&&A.support.transition&&H.hasClass("fade");
function C(){H.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
F.addClass("active");
if(G){F[0].offsetWidth;
F.addClass("in")
}else{F.removeClass("fade")
}if(F.parent(".dropdown-menu")){F.closest("li.dropdown").addClass("active")
}D&&D()
}G?H.one(A.support.transition.end,C):C();
H.removeClass("in")
}};
A.fn.tab=function(C){return this.each(function(){var E=A(this),D=E.data("tab");
if(!D){E.data("tab",(D=new B(this)))
}if(typeof C=="string"){D[C]()
}})
};
A.fn.tab.Constructor=B;
A(function(){A("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(C){C.preventDefault();
A(this).tab("show")
})
})
}(window.jQuery);
!function(B){var A=function(C,D){this.$element=B(C);
this.options=B.extend({},B.fn.typeahead.defaults,D);
this.matcher=this.options.matcher||this.matcher;
this.sorter=this.options.sorter||this.sorter;
this.highlighter=this.options.highlighter||this.highlighter;
this.updater=this.options.updater||this.updater;
this.$menu=B(this.options.menu).appendTo("body");
this.source=this.options.source;
this.shown=false;
this.listen()
};
A.prototype={constructor:A,select:function(){var C=this.$menu.find(".active").attr("data-value");
this.$element.val(this.updater(C)).change();
return this.hide()
},updater:function(C){return C
},show:function(){var C=B.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});
this.$menu.css({top:C.top+C.height,left:C.left});
this.$menu.show();
this.shown=true;
return this
},hide:function(){this.$menu.hide();
this.shown=false;
return this
},lookup:function(C){var D;
this.query=this.$element.val();
if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this
}D=B.isFunction(this.source)?this.source(this.query,B.proxy(this.process,this)):this.source;
return D?this.process(D):this
},process:function(D){var C=this;
D=B.grep(D,function(E){return C.matcher(E)
});
D=this.sorter(D);
if(!D.length){return this.shown?this.hide():this
}return this.render(D.slice(0,this.options.items)).show()
},matcher:function(C){return ~C.toLowerCase().indexOf(this.query.toLowerCase())
},sorter:function(F){var G=[],E=[],D=[],C;
while(C=F.shift()){if(!C.toLowerCase().indexOf(this.query.toLowerCase())){G.push(C)
}else{if(~C.indexOf(this.query)){E.push(C)
}else{D.push(C)
}}}return G.concat(E,D)
},highlighter:function(D){var C=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");
return D.replace(new RegExp("("+C+")","ig"),function(E,F){return"<strong>"+F+"</strong>"
})
},render:function(D){var C=this;
D=B(D).map(function(E,F){E=B(C.options.item).attr("data-value",F);
E.find("a").html(C.highlighter(F));
return E[0]
});
D.first().addClass("active");
this.$menu.html(D);
return this
},next:function(C){var D=this.$menu.find(".active").removeClass("active"),E=D.next();
if(!E.length){E=B(this.$menu.find("li")[0])
}E.addClass("active")
},prev:function(C){var D=this.$menu.find(".active").removeClass("active"),E=D.prev();
if(!E.length){E=this.$menu.find("li").last()
}E.addClass("active")
},listen:function(){this.$element.on("blur",B.proxy(this.blur,this)).on("keypress",B.proxy(this.keypress,this)).on("keyup",B.proxy(this.keyup,this));
if(B.browser.webkit||B.browser.msie){this.$element.on("keydown",B.proxy(this.keydown,this))
}this.$menu.on("click",B.proxy(this.click,this)).on("mouseenter","li",B.proxy(this.mouseenter,this))
},move:function(C){if(!this.shown){return 
}switch(C.keyCode){case 9:case 13:case 27:C.preventDefault();
break;
case 38:C.preventDefault();
this.prev();
break;
case 40:C.preventDefault();
this.next();
break
}C.stopPropagation()
},keydown:function(C){this.suppressKeyPressRepeat=!~B.inArray(C.keyCode,[40,38,9,13,27]);
this.move(C)
},keypress:function(C){if(this.suppressKeyPressRepeat){return 
}this.move(C)
},keyup:function(C){switch(C.keyCode){case 40:case 38:break;
case 9:case 13:if(!this.shown){return 
}this.select();
break;
case 27:if(!this.shown){return 
}this.hide();
break;
default:this.lookup()
}C.stopPropagation();
C.preventDefault()
},blur:function(C){var D=this;
setTimeout(function(){D.hide()
},150)
},click:function(C){C.stopPropagation();
C.preventDefault();
this.select()
},mouseenter:function(C){this.$menu.find(".active").removeClass("active");
B(C.currentTarget).addClass("active")
}};
B.fn.typeahead=function(C){return this.each(function(){var F=B(this),E=F.data("typeahead"),D=typeof C=="object"&&C;
if(!E){F.data("typeahead",(E=new A(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
B.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};
B.fn.typeahead.Constructor=A;
B(function(){B("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(C){var D=B(this);
if(D.data("typeahead")){return 
}C.preventDefault();
D.typeahead(D.data())
})
})
}(window.jQuery);
!function(A){var B=function(C,D){this.options=A.extend({},A.fn.affix.defaults,D);
this.$window=A(window).on("scroll.affix.data-api",A.proxy(this.checkPosition,this));
this.$element=A(C);
this.checkPosition()
};
B.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return 
}var D=A(document).height(),G=this.$window.scrollTop(),J=this.$element.offset(),F=this.options.offset,H=F.bottom,C=F.top,E="affix affix-top affix-bottom",I;
if(typeof F!="object"){H=C=F
}if(typeof C=="function"){C=F.top()
}if(typeof H=="function"){H=F.bottom()
}I=this.unpin!=null&&(G+this.unpin<=J.top)?false:H!=null&&(J.top+this.$element.height()>=D-H)?"bottom":C!=null&&G<=C?"top":false;
if(this.affixed===I){return 
}this.affixed=I;
this.unpin=I=="bottom"?J.top-G:null;
this.$element.removeClass(E).addClass("affix"+(I?"-"+I:""))
};
A.fn.affix=function(C){return this.each(function(){var F=A(this),E=F.data("affix"),D=typeof C=="object"&&C;
if(!E){F.data("affix",(E=new B(this,D)))
}if(typeof C=="string"){E[C]()
}})
};
A.fn.affix.Constructor=B;
A.fn.affix.defaults={offset:0};
A(window).on("load",function(){A('[data-spy="affix"]').each(function(){var C=A(this),D=C.data();
D.offset=D.offset||{};
D.offsetBottom&&(D.offset.bottom=D.offsetBottom);
D.offsetTop&&(D.offset.top=D.offsetTop);
C.affix(D)
})
})
}(window.jQuery);