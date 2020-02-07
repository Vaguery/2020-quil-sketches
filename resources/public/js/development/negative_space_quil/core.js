// Compiled by ClojureScript 1.10.520 {}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.blend_mode.call(null,new cljs.core.Keyword(null,"blend","blend",249565561));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(13),new cljs.core.Keyword(null,"height","height",1025178622),(13),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(44),(255),(255),(160)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(4),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(13),new cljs.core.Keyword(null,"height","height",1025178622),(13),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(128),(255),(255),(160)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(4),new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(13),new cljs.core.Keyword(null,"height","height",1025178622),(13),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(214),(255),(255),(160)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(4),new cljs.core.Keyword(null,"angle","angle",1622094254),(180),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__57561_SHARP_){
return (0.002 + p1__57561_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__57562_SHARP_){
return (-0.003 + p1__57562_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__57563_SHARP_){
return (0.004 + p1__57563_SHARP_);
}));
});
negative_space_quil.core.draw_lattice = (function negative_space_quil$core$draw_lattice(lattice){
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(lattice);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(lattice);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(lattice);
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(lattice);
var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(lattice);
var offset = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(lattice);
var scale_x = (1.5 * (quil.core.width.call(null) / w));
var scale_y = (1.5 * (quil.core.height.call(null) / w));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,c);

var tr__27402__auto__ = offset;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__27402__auto__);

var tr__27408__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__27408__auto__);

var seq__57564 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__57569 = null;
var count__57570 = (0);
var i__57571 = (0);
while(true){
if((i__57571 < count__57570)){
var x = cljs.core._nth.call(null,chunk__57569,i__57571);
var seq__57572_57576 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__57573_57577 = null;
var count__57574_57578 = (0);
var i__57575_57579 = (0);
while(true){
if((i__57575_57579 < count__57574_57578)){
var y_57580 = cljs.core._nth.call(null,chunk__57573_57577,i__57575_57579);
quil.core.ellipse.call(null,(x * w),(y_57580 * h),((x / (5)) + r),((x / (5)) + r));


var G__57581 = seq__57572_57576;
var G__57582 = chunk__57573_57577;
var G__57583 = count__57574_57578;
var G__57584 = (i__57575_57579 + (1));
seq__57572_57576 = G__57581;
chunk__57573_57577 = G__57582;
count__57574_57578 = G__57583;
i__57575_57579 = G__57584;
continue;
} else {
var temp__5735__auto___57585 = cljs.core.seq.call(null,seq__57572_57576);
if(temp__5735__auto___57585){
var seq__57572_57586__$1 = temp__5735__auto___57585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57572_57586__$1)){
var c__4550__auto___57587 = cljs.core.chunk_first.call(null,seq__57572_57586__$1);
var G__57588 = cljs.core.chunk_rest.call(null,seq__57572_57586__$1);
var G__57589 = c__4550__auto___57587;
var G__57590 = cljs.core.count.call(null,c__4550__auto___57587);
var G__57591 = (0);
seq__57572_57576 = G__57588;
chunk__57573_57577 = G__57589;
count__57574_57578 = G__57590;
i__57575_57579 = G__57591;
continue;
} else {
var y_57592 = cljs.core.first.call(null,seq__57572_57586__$1);
quil.core.ellipse.call(null,(x * w),(y_57592 * h),((x / (5)) + r),((x / (5)) + r));


var G__57593 = cljs.core.next.call(null,seq__57572_57586__$1);
var G__57594 = null;
var G__57595 = (0);
var G__57596 = (0);
seq__57572_57576 = G__57593;
chunk__57573_57577 = G__57594;
count__57574_57578 = G__57595;
i__57575_57579 = G__57596;
continue;
}
} else {
}
}
break;
}

var G__57597 = seq__57564;
var G__57598 = chunk__57569;
var G__57599 = count__57570;
var G__57600 = (i__57571 + (1));
seq__57564 = G__57597;
chunk__57569 = G__57598;
count__57570 = G__57599;
i__57571 = G__57600;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57564);
if(temp__5735__auto__){
var seq__57564__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57564__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__57564__$1);
var G__57601 = cljs.core.chunk_rest.call(null,seq__57564__$1);
var G__57602 = c__4550__auto__;
var G__57603 = cljs.core.count.call(null,c__4550__auto__);
var G__57604 = (0);
seq__57564 = G__57601;
chunk__57569 = G__57602;
count__57570 = G__57603;
i__57571 = G__57604;
continue;
} else {
var x = cljs.core.first.call(null,seq__57564__$1);
var seq__57565_57605 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__57566_57606 = null;
var count__57567_57607 = (0);
var i__57568_57608 = (0);
while(true){
if((i__57568_57608 < count__57567_57607)){
var y_57609 = cljs.core._nth.call(null,chunk__57566_57606,i__57568_57608);
quil.core.ellipse.call(null,(x * w),(y_57609 * h),((x / (5)) + r),((x / (5)) + r));


var G__57610 = seq__57565_57605;
var G__57611 = chunk__57566_57606;
var G__57612 = count__57567_57607;
var G__57613 = (i__57568_57608 + (1));
seq__57565_57605 = G__57610;
chunk__57566_57606 = G__57611;
count__57567_57607 = G__57612;
i__57568_57608 = G__57613;
continue;
} else {
var temp__5735__auto___57614__$1 = cljs.core.seq.call(null,seq__57565_57605);
if(temp__5735__auto___57614__$1){
var seq__57565_57615__$1 = temp__5735__auto___57614__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57565_57615__$1)){
var c__4550__auto___57616 = cljs.core.chunk_first.call(null,seq__57565_57615__$1);
var G__57617 = cljs.core.chunk_rest.call(null,seq__57565_57615__$1);
var G__57618 = c__4550__auto___57616;
var G__57619 = cljs.core.count.call(null,c__4550__auto___57616);
var G__57620 = (0);
seq__57565_57605 = G__57617;
chunk__57566_57606 = G__57618;
count__57567_57607 = G__57619;
i__57568_57608 = G__57620;
continue;
} else {
var y_57621 = cljs.core.first.call(null,seq__57565_57615__$1);
quil.core.ellipse.call(null,(x * w),(y_57621 * h),((x / (5)) + r),((x / (5)) + r));


var G__57622 = cljs.core.next.call(null,seq__57565_57615__$1);
var G__57623 = null;
var G__57624 = (0);
var G__57625 = (0);
seq__57565_57605 = G__57622;
chunk__57566_57606 = G__57623;
count__57567_57607 = G__57624;
i__57568_57608 = G__57625;
continue;
}
} else {
}
}
break;
}

var G__57626 = cljs.core.next.call(null,seq__57564__$1);
var G__57627 = null;
var G__57628 = (0);
var G__57629 = (0);
seq__57564 = G__57626;
chunk__57569 = G__57627;
count__57570 = G__57628;
i__57571 = G__57629;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var yellow = new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280).cljs$core$IFn$_invoke$arity$1(state);
var magenta = new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230).cljs$core$IFn$_invoke$arity$1(state);
var cyan = new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(255));

var tr__27402__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__27402__auto__);

negative_space_quil.core.draw_lattice.call(null,magenta);

negative_space_quil.core.draw_lattice.call(null,cyan);

return negative_space_quil.core.draw_lattice.call(null,yellow);
}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200207-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__57630__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__57630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57631__i = 0, G__57631__a = new Array(arguments.length -  0);
while (G__57631__i < G__57631__a.length) {G__57631__a[G__57631__i] = arguments[G__57631__i + 0]; ++G__57631__i;}
  args = new cljs.core.IndexedSeq(G__57631__a,0,null);
} 
return G__57630__delegate.call(this,args);};
G__57630.cljs$lang$maxFixedArity = 0;
G__57630.cljs$lang$applyTo = (function (arglist__57632){
var args = cljs.core.seq(arglist__57632);
return G__57630__delegate(args);
});
G__57630.cljs$core$IFn$_invoke$arity$variadic = G__57630__delegate;
return G__57630;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__57633__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__57633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57634__i = 0, G__57634__a = new Array(arguments.length -  0);
while (G__57634__i < G__57634__a.length) {G__57634__a[G__57634__i] = arguments[G__57634__i + 0]; ++G__57634__i;}
  args = new cljs.core.IndexedSeq(G__57634__a,0,null);
} 
return G__57633__delegate.call(this,args);};
G__57633.cljs$lang$maxFixedArity = 0;
G__57633.cljs$lang$applyTo = (function (arglist__57635){
var args = cljs.core.seq(arglist__57635);
return G__57633__delegate(args);
});
G__57633.cljs$core$IFn$_invoke$arity$variadic = G__57633__delegate;
return G__57633;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__57636__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__57636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57637__i = 0, G__57637__a = new Array(arguments.length -  0);
while (G__57637__i < G__57637__a.length) {G__57637__a[G__57637__i] = arguments[G__57637__i + 0]; ++G__57637__i;}
  args = new cljs.core.IndexedSeq(G__57637__a,0,null);
} 
return G__57636__delegate.call(this,args);};
G__57636.cljs$lang$maxFixedArity = 0;
G__57636.cljs$lang$applyTo = (function (arglist__57638){
var args = cljs.core.seq(arglist__57638);
return G__57636__delegate(args);
});
G__57636.cljs$core$IFn$_invoke$arity$variadic = G__57636__delegate;
return G__57636;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26547__26548__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26547__26548__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200207-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581082237838
