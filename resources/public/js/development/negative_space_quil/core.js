// Compiled by ClojureScript 1.10.520 {}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"back-lattice","back-lattice",167833486),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(111)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(8)], null),new cljs.core.Keyword(null,"front-lattice","front-lattice",1001080507),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(21),new cljs.core.Keyword(null,"height","height",1025178622),(21),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(240)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(9)], null),new cljs.core.Keyword(null,"angle","angle",1622094254),(11)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__21347_SHARP_){
return (0.0025 + p1__21347_SHARP_);
}));
});
negative_space_quil.core.draw_lattice = (function negative_space_quil$core$draw_lattice(lattice){
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(lattice);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(lattice);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(lattice);
var c = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(lattice);
var scale_x = (1.5 * (quil.core.width.call(null) / w));
var scale_y = (1.5 * (quil.core.height.call(null) / w));
quil.core.no_stroke.call(null);

quil.core.fill.call(null,c);

var seq__21348 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__21353 = null;
var count__21354 = (0);
var i__21355 = (0);
while(true){
if((i__21355 < count__21354)){
var x = cljs.core._nth.call(null,chunk__21353,i__21355);
var seq__21356_21360 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__21357_21361 = null;
var count__21358_21362 = (0);
var i__21359_21363 = (0);
while(true){
if((i__21359_21363 < count__21358_21362)){
var y_21364 = cljs.core._nth.call(null,chunk__21357_21361,i__21359_21363);
quil.core.ellipse.call(null,(x * w),(y_21364 * h),r,r);


var G__21365 = seq__21356_21360;
var G__21366 = chunk__21357_21361;
var G__21367 = count__21358_21362;
var G__21368 = (i__21359_21363 + (1));
seq__21356_21360 = G__21365;
chunk__21357_21361 = G__21366;
count__21358_21362 = G__21367;
i__21359_21363 = G__21368;
continue;
} else {
var temp__5735__auto___21369 = cljs.core.seq.call(null,seq__21356_21360);
if(temp__5735__auto___21369){
var seq__21356_21370__$1 = temp__5735__auto___21369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21356_21370__$1)){
var c__4550__auto___21371 = cljs.core.chunk_first.call(null,seq__21356_21370__$1);
var G__21372 = cljs.core.chunk_rest.call(null,seq__21356_21370__$1);
var G__21373 = c__4550__auto___21371;
var G__21374 = cljs.core.count.call(null,c__4550__auto___21371);
var G__21375 = (0);
seq__21356_21360 = G__21372;
chunk__21357_21361 = G__21373;
count__21358_21362 = G__21374;
i__21359_21363 = G__21375;
continue;
} else {
var y_21376 = cljs.core.first.call(null,seq__21356_21370__$1);
quil.core.ellipse.call(null,(x * w),(y_21376 * h),r,r);


var G__21377 = cljs.core.next.call(null,seq__21356_21370__$1);
var G__21378 = null;
var G__21379 = (0);
var G__21380 = (0);
seq__21356_21360 = G__21377;
chunk__21357_21361 = G__21378;
count__21358_21362 = G__21379;
i__21359_21363 = G__21380;
continue;
}
} else {
}
}
break;
}

var G__21381 = seq__21348;
var G__21382 = chunk__21353;
var G__21383 = count__21354;
var G__21384 = (i__21355 + (1));
seq__21348 = G__21381;
chunk__21353 = G__21382;
count__21354 = G__21383;
i__21355 = G__21384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21348);
if(temp__5735__auto__){
var seq__21348__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21348__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21348__$1);
var G__21385 = cljs.core.chunk_rest.call(null,seq__21348__$1);
var G__21386 = c__4550__auto__;
var G__21387 = cljs.core.count.call(null,c__4550__auto__);
var G__21388 = (0);
seq__21348 = G__21385;
chunk__21353 = G__21386;
count__21354 = G__21387;
i__21355 = G__21388;
continue;
} else {
var x = cljs.core.first.call(null,seq__21348__$1);
var seq__21349_21389 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__21350_21390 = null;
var count__21351_21391 = (0);
var i__21352_21392 = (0);
while(true){
if((i__21352_21392 < count__21351_21391)){
var y_21393 = cljs.core._nth.call(null,chunk__21350_21390,i__21352_21392);
quil.core.ellipse.call(null,(x * w),(y_21393 * h),r,r);


var G__21394 = seq__21349_21389;
var G__21395 = chunk__21350_21390;
var G__21396 = count__21351_21391;
var G__21397 = (i__21352_21392 + (1));
seq__21349_21389 = G__21394;
chunk__21350_21390 = G__21395;
count__21351_21391 = G__21396;
i__21352_21392 = G__21397;
continue;
} else {
var temp__5735__auto___21398__$1 = cljs.core.seq.call(null,seq__21349_21389);
if(temp__5735__auto___21398__$1){
var seq__21349_21399__$1 = temp__5735__auto___21398__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21349_21399__$1)){
var c__4550__auto___21400 = cljs.core.chunk_first.call(null,seq__21349_21399__$1);
var G__21401 = cljs.core.chunk_rest.call(null,seq__21349_21399__$1);
var G__21402 = c__4550__auto___21400;
var G__21403 = cljs.core.count.call(null,c__4550__auto___21400);
var G__21404 = (0);
seq__21349_21389 = G__21401;
chunk__21350_21390 = G__21402;
count__21351_21391 = G__21403;
i__21352_21392 = G__21404;
continue;
} else {
var y_21405 = cljs.core.first.call(null,seq__21349_21399__$1);
quil.core.ellipse.call(null,(x * w),(y_21405 * h),r,r);


var G__21406 = cljs.core.next.call(null,seq__21349_21399__$1);
var G__21407 = null;
var G__21408 = (0);
var G__21409 = (0);
seq__21349_21389 = G__21406;
chunk__21350_21390 = G__21407;
count__21351_21391 = G__21408;
i__21352_21392 = G__21409;
continue;
}
} else {
}
}
break;
}

var G__21410 = cljs.core.next.call(null,seq__21348__$1);
var G__21411 = null;
var G__21412 = (0);
var G__21413 = (0);
seq__21348 = G__21410;
chunk__21353 = G__21411;
count__21354 = G__21412;
i__21355 = G__21413;
continue;
}
} else {
return null;
}
}
break;
}
});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var bl = new cljs.core.Keyword(null,"back-lattice","back-lattice",167833486).cljs$core$IFn$_invoke$arity$1(state);
var fl = new cljs.core.Keyword(null,"front-lattice","front-lattice",1001080507).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(240));

var tr__21251__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto__);

negative_space_quil.core.draw_lattice.call(null,bl);

var tr__21257__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21257__auto__);

return negative_space_quil.core.draw_lattice.call(null,fl);
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200206-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__21414__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__21414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21415__i = 0, G__21415__a = new Array(arguments.length -  0);
while (G__21415__i < G__21415__a.length) {G__21415__a[G__21415__i] = arguments[G__21415__i + 0]; ++G__21415__i;}
  args = new cljs.core.IndexedSeq(G__21415__a,0,null);
} 
return G__21414__delegate.call(this,args);};
G__21414.cljs$lang$maxFixedArity = 0;
G__21414.cljs$lang$applyTo = (function (arglist__21416){
var args = cljs.core.seq(arglist__21416);
return G__21414__delegate(args);
});
G__21414.cljs$core$IFn$_invoke$arity$variadic = G__21414__delegate;
return G__21414;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__21417__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__21417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21418__i = 0, G__21418__a = new Array(arguments.length -  0);
while (G__21418__i < G__21418__a.length) {G__21418__a[G__21418__i] = arguments[G__21418__i + 0]; ++G__21418__i;}
  args = new cljs.core.IndexedSeq(G__21418__a,0,null);
} 
return G__21417__delegate.call(this,args);};
G__21417.cljs$lang$maxFixedArity = 0;
G__21417.cljs$lang$applyTo = (function (arglist__21419){
var args = cljs.core.seq(arglist__21419);
return G__21417__delegate(args);
});
G__21417.cljs$core$IFn$_invoke$arity$variadic = G__21417__delegate;
return G__21417;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__21420__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__21420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21421__i = 0, G__21421__a = new Array(arguments.length -  0);
while (G__21421__i < G__21421__a.length) {G__21421__a[G__21421__i] = arguments[G__21421__i + 0]; ++G__21421__i;}
  args = new cljs.core.IndexedSeq(G__21421__a,0,null);
} 
return G__21420__delegate.call(this,args);};
G__21420.cljs$lang$maxFixedArity = 0;
G__21420.cljs$lang$applyTo = (function (arglist__21422){
var args = cljs.core.seq(arglist__21422);
return G__21420__delegate(args);
});
G__21420.cljs$core$IFn$_invoke$arity$variadic = G__21420__delegate;
return G__21420;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200206-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581012206195
