// Compiled by ClojureScript 1.10.520 {}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.create_lattice = (function negative_space_quil$core$create_lattice(lattice_def,edge){
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(lattice_def);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(lattice_def);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(lattice_def);
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(lattice_def);
var scale_x = (1.5 * (edge / w));
var scale_y = (1.5 * (edge / h));
var gr = quil.core.create_graphics.call(null,(w * scale_x),(h * scale_y));
var gr__21265__auto___38579 = gr;
var _STAR_graphics_STAR__orig_val__38565_38580 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__38566_38581 = gr__21265__auto___38579;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__38566_38581;

try{quil.core.begin_draw.call(null,gr__21265__auto___38579);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,c);

var seq__38567_38582 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__38572_38583 = null;
var count__38573_38584 = (0);
var i__38574_38585 = (0);
while(true){
if((i__38574_38585 < count__38573_38584)){
var x_38586 = cljs.core._nth.call(null,chunk__38572_38583,i__38574_38585);
var seq__38575_38587 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__38576_38588 = null;
var count__38577_38589 = (0);
var i__38578_38590 = (0);
while(true){
if((i__38578_38590 < count__38577_38589)){
var y_38591 = cljs.core._nth.call(null,chunk__38576_38588,i__38578_38590);
quil.core.ellipse.call(null,(((-1) + (x_38586 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_38591 * h)) + cljs.core.rand.call(null,(2))),((x_38586 / (7)) + r),((x_38586 / (7)) + r));


var G__38592 = seq__38575_38587;
var G__38593 = chunk__38576_38588;
var G__38594 = count__38577_38589;
var G__38595 = (i__38578_38590 + (1));
seq__38575_38587 = G__38592;
chunk__38576_38588 = G__38593;
count__38577_38589 = G__38594;
i__38578_38590 = G__38595;
continue;
} else {
var temp__5735__auto___38596 = cljs.core.seq.call(null,seq__38575_38587);
if(temp__5735__auto___38596){
var seq__38575_38597__$1 = temp__5735__auto___38596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38575_38597__$1)){
var c__4550__auto___38598 = cljs.core.chunk_first.call(null,seq__38575_38597__$1);
var G__38599 = cljs.core.chunk_rest.call(null,seq__38575_38597__$1);
var G__38600 = c__4550__auto___38598;
var G__38601 = cljs.core.count.call(null,c__4550__auto___38598);
var G__38602 = (0);
seq__38575_38587 = G__38599;
chunk__38576_38588 = G__38600;
count__38577_38589 = G__38601;
i__38578_38590 = G__38602;
continue;
} else {
var y_38603 = cljs.core.first.call(null,seq__38575_38597__$1);
quil.core.ellipse.call(null,(((-1) + (x_38586 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_38603 * h)) + cljs.core.rand.call(null,(2))),((x_38586 / (7)) + r),((x_38586 / (7)) + r));


var G__38604 = cljs.core.next.call(null,seq__38575_38597__$1);
var G__38605 = null;
var G__38606 = (0);
var G__38607 = (0);
seq__38575_38587 = G__38604;
chunk__38576_38588 = G__38605;
count__38577_38589 = G__38606;
i__38578_38590 = G__38607;
continue;
}
} else {
}
}
break;
}

var G__38608 = seq__38567_38582;
var G__38609 = chunk__38572_38583;
var G__38610 = count__38573_38584;
var G__38611 = (i__38574_38585 + (1));
seq__38567_38582 = G__38608;
chunk__38572_38583 = G__38609;
count__38573_38584 = G__38610;
i__38574_38585 = G__38611;
continue;
} else {
var temp__5735__auto___38612 = cljs.core.seq.call(null,seq__38567_38582);
if(temp__5735__auto___38612){
var seq__38567_38613__$1 = temp__5735__auto___38612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38567_38613__$1)){
var c__4550__auto___38614 = cljs.core.chunk_first.call(null,seq__38567_38613__$1);
var G__38615 = cljs.core.chunk_rest.call(null,seq__38567_38613__$1);
var G__38616 = c__4550__auto___38614;
var G__38617 = cljs.core.count.call(null,c__4550__auto___38614);
var G__38618 = (0);
seq__38567_38582 = G__38615;
chunk__38572_38583 = G__38616;
count__38573_38584 = G__38617;
i__38574_38585 = G__38618;
continue;
} else {
var x_38619 = cljs.core.first.call(null,seq__38567_38613__$1);
var seq__38568_38620 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__38569_38621 = null;
var count__38570_38622 = (0);
var i__38571_38623 = (0);
while(true){
if((i__38571_38623 < count__38570_38622)){
var y_38624 = cljs.core._nth.call(null,chunk__38569_38621,i__38571_38623);
quil.core.ellipse.call(null,(((-1) + (x_38619 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_38624 * h)) + cljs.core.rand.call(null,(2))),((x_38619 / (7)) + r),((x_38619 / (7)) + r));


var G__38625 = seq__38568_38620;
var G__38626 = chunk__38569_38621;
var G__38627 = count__38570_38622;
var G__38628 = (i__38571_38623 + (1));
seq__38568_38620 = G__38625;
chunk__38569_38621 = G__38626;
count__38570_38622 = G__38627;
i__38571_38623 = G__38628;
continue;
} else {
var temp__5735__auto___38629__$1 = cljs.core.seq.call(null,seq__38568_38620);
if(temp__5735__auto___38629__$1){
var seq__38568_38630__$1 = temp__5735__auto___38629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38568_38630__$1)){
var c__4550__auto___38631 = cljs.core.chunk_first.call(null,seq__38568_38630__$1);
var G__38632 = cljs.core.chunk_rest.call(null,seq__38568_38630__$1);
var G__38633 = c__4550__auto___38631;
var G__38634 = cljs.core.count.call(null,c__4550__auto___38631);
var G__38635 = (0);
seq__38568_38620 = G__38632;
chunk__38569_38621 = G__38633;
count__38570_38622 = G__38634;
i__38571_38623 = G__38635;
continue;
} else {
var y_38636 = cljs.core.first.call(null,seq__38568_38630__$1);
quil.core.ellipse.call(null,(((-1) + (x_38619 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_38636 * h)) + cljs.core.rand.call(null,(2))),((x_38619 / (7)) + r),((x_38619 / (7)) + r));


var G__38637 = cljs.core.next.call(null,seq__38568_38630__$1);
var G__38638 = null;
var G__38639 = (0);
var G__38640 = (0);
seq__38568_38620 = G__38637;
chunk__38569_38621 = G__38638;
count__38570_38622 = G__38639;
i__38571_38623 = G__38640;
continue;
}
} else {
}
}
break;
}

var G__38641 = cljs.core.next.call(null,seq__38567_38613__$1);
var G__38642 = null;
var G__38643 = (0);
var G__38644 = (0);
seq__38567_38582 = G__38641;
chunk__38572_38583 = G__38642;
count__38573_38584 = G__38643;
i__38574_38585 = G__38644;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw.call(null,gr__21265__auto___38579);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__38565_38580;
}
return gr;
});
negative_space_quil.core.m_def = (function negative_space_quil$core$m_def(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(7),new cljs.core.Keyword(null,"height","height",1025178622),(7),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(214),(200),(255),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2)], null);
});
negative_space_quil.core.c_def = (function negative_space_quil$core$c_def(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(128),(230),(255),(128)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2)], null);
});
negative_space_quil.core.y_def = (function negative_space_quil$core$y_def(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(44),(100),(255),(64)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2)], null);
});
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate.call(null,(100));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.blend_mode.call(null,new cljs.core.Keyword(null,"blend","blend",249565561));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

quil.core.image_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950),new cljs.core.Keyword(null,"mouse-within","mouse-within",2087484515),new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),new cljs.core.Keyword(null,"c-angle","c-angle",-384717710),new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),new cljs.core.Keyword(null,"m-angle","m-angle",1039906396),new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051)],[cljs.core.rand_int.call(null,(100)),false,negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.m_def.call(null),quil.core.width.call(null)),negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.c_def.call(null),quil.core.width.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),cljs.core.rand_int.call(null,(100)),negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.y_def.call(null),quil.core.width.call(null)),cljs.core.rand_int.call(null,(100)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)]);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"m-angle","m-angle",1039906396),(function (p1__38645_SHARP_){
return (p1__38645_SHARP_ + (cljs.core.rand.call(null) / (1000)));
})),new cljs.core.Keyword(null,"c-angle","c-angle",-384717710),(function (p1__38646_SHARP_){
return (p1__38646_SHARP_ + (cljs.core.rand.call(null) / (-1000)));
})),new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950),(function (p1__38647_SHARP_){
return (p1__38647_SHARP_ + (cljs.core.rand.call(null) / (1000)));
}));
});
negative_space_quil.core.mouse_press_detection = (function negative_space_quil$core$mouse_press_detection(state,event){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null));
});
negative_space_quil.core.mouse_enter_detection = (function negative_space_quil$core$mouse_enter_detection(state,event){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)], null));
});
negative_space_quil.core.draw_debug_alert = (function negative_space_quil$core$draw_debug_alert(state){
var tr__21251__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto__);

quil.core.fill.call(null,(220));

quil.core.rect.call(null,(0),(0),(300),(200));

quil.core.fill.call(null,(0));

quil.core.text.call(null,["mouse-x: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_x.call(null))].join(''),(10),(10),(300),(40));

quil.core.text.call(null,["mouse-y: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_y.call(null))].join(''),(10),(25),(300),(40));

quil.core.text.call(null,["mouse-pressed?: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_pressed_QMARK_.call(null))].join(''),(10),(40),(300),(40));

quil.core.text.call(null,["mouse-press: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051).cljs$core$IFn$_invoke$arity$1(state))," <- fun-mode event"].join(''),(10),(55),(300),(40));

return quil.core.text.call(null,["mouse-enter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303).cljs$core$IFn$_invoke$arity$1(state))," <- fun-mode event"].join(''),(10),(70),(300),(40));
}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var magenta = new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230).cljs$core$IFn$_invoke$arity$1(state);
var cyan = new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490).cljs$core$IFn$_invoke$arity$1(state);
var yellow = new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(255));

var tr__21251__auto___38648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto___38648);

var tr__21257__auto___38649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m-angle","m-angle",1039906396).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21257__auto___38649);

quil.core.image.call(null,magenta,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}
var tr__21257__auto___38650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-angle","c-angle",-384717710).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21257__auto___38650);

quil.core.image.call(null,cyan,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}
var tr__21257__auto___38651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21257__auto___38651);

quil.core.image.call(null,yellow,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}
return negative_space_quil.core.draw_debug_alert.call(null,state);
});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200209-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__38652__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__38652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38653__i = 0, G__38653__a = new Array(arguments.length -  0);
while (G__38653__i < G__38653__a.length) {G__38653__a[G__38653__i] = arguments[G__38653__i + 0]; ++G__38653__i;}
  args = new cljs.core.IndexedSeq(G__38653__a,0,null);
} 
return G__38652__delegate.call(this,args);};
G__38652.cljs$lang$maxFixedArity = 0;
G__38652.cljs$lang$applyTo = (function (arglist__38654){
var args = cljs.core.seq(arglist__38654);
return G__38652__delegate(args);
});
G__38652.cljs$core$IFn$_invoke$arity$variadic = G__38652__delegate;
return G__38652;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.mouse_enter_detection))?(function() { 
var G__38655__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.mouse_enter_detection,args);
};
var G__38655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38656__i = 0, G__38656__a = new Array(arguments.length -  0);
while (G__38656__i < G__38656__a.length) {G__38656__a[G__38656__i] = arguments[G__38656__i + 0]; ++G__38656__i;}
  args = new cljs.core.IndexedSeq(G__38656__a,0,null);
} 
return G__38655__delegate.call(this,args);};
G__38655.cljs$lang$maxFixedArity = 0;
G__38655.cljs$lang$applyTo = (function (arglist__38657){
var args = cljs.core.seq(arglist__38657);
return G__38655__delegate(args);
});
G__38655.cljs$core$IFn$_invoke$arity$variadic = G__38655__delegate;
return G__38655;
})()
:negative_space_quil.core.mouse_enter_detection),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__38658__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__38658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38659__i = 0, G__38659__a = new Array(arguments.length -  0);
while (G__38659__i < G__38659__a.length) {G__38659__a[G__38659__i] = arguments[G__38659__i + 0]; ++G__38659__i;}
  args = new cljs.core.IndexedSeq(G__38659__a,0,null);
} 
return G__38658__delegate.call(this,args);};
G__38658.cljs$lang$maxFixedArity = 0;
G__38658.cljs$lang$applyTo = (function (arglist__38660){
var args = cljs.core.seq(arglist__38660);
return G__38658__delegate(args);
});
G__38658.cljs$core$IFn$_invoke$arity$variadic = G__38658__delegate;
return G__38658;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.mouse_press_detection))?(function() { 
var G__38661__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.mouse_press_detection,args);
};
var G__38661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38662__i = 0, G__38662__a = new Array(arguments.length -  0);
while (G__38662__i < G__38662__a.length) {G__38662__a[G__38662__i] = arguments[G__38662__i + 0]; ++G__38662__i;}
  args = new cljs.core.IndexedSeq(G__38662__a,0,null);
} 
return G__38661__delegate.call(this,args);};
G__38661.cljs$lang$maxFixedArity = 0;
G__38661.cljs$lang$applyTo = (function (arglist__38663){
var args = cljs.core.seq(arglist__38663);
return G__38661__delegate(args);
});
G__38661.cljs$core$IFn$_invoke$arity$variadic = G__38661__delegate;
return G__38661;
})()
:negative_space_quil.core.mouse_press_detection),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_2d], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__38664__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__38664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38665__i = 0, G__38665__a = new Array(arguments.length -  0);
while (G__38665__i < G__38665__a.length) {G__38665__a[G__38665__i] = arguments[G__38665__i + 0]; ++G__38665__i;}
  args = new cljs.core.IndexedSeq(G__38665__a,0,null);
} 
return G__38664__delegate.call(this,args);};
G__38664.cljs$lang$maxFixedArity = 0;
G__38664.cljs$lang$applyTo = (function (arglist__38666){
var args = cljs.core.seq(arglist__38666);
return G__38664__delegate(args);
});
G__38664.cljs$core$IFn$_invoke$arity$variadic = G__38664__delegate;
return G__38664;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200209-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581345516976
