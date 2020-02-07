// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.blend_mode(cljs.core.cst$kw$blend);

quil.core.ellipse_mode(cljs.core.cst$kw$radius);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$height,(6),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((44),(100),(255),(100)),cljs.core.cst$kw$radius,(3),cljs.core.cst$kw$angle,cljs.core.rand_int((100)),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.cst$kw$c_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(7),cljs.core.cst$kw$height,(7),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((128),(230),(255),(130)),cljs.core.cst$kw$radius,(3),cljs.core.cst$kw$angle,cljs.core.rand_int((100)),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.cst$kw$m_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(8),cljs.core.cst$kw$height,(8),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((214),(200),(255),(255)),cljs.core.cst$kw$radius,(3),cljs.core.cst$kw$angle,cljs.core.rand_int((100)),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__35343_SHARP_){
return (0.002 + p1__35343_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__35344_SHARP_){
return (-0.004 + p1__35344_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__35345_SHARP_){
return (0.006 + p1__35345_SHARP_);
}));
});
negative_space_quil.core.draw_lattice = (function negative_space_quil$core$draw_lattice(lattice){
var w = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(lattice);
var h = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(lattice);
var r = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(lattice);
var c = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(lattice);
var angle = cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(lattice);
var offset = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(lattice);
var scale_x = (1.5 * (quil.core.width() / w));
var scale_y = (1.5 * (quil.core.height() / w));
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1(c);

var tr__26878__auto__ = offset;
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__26878__auto__);

var tr__26884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__26884__auto__);

var seq__35346 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_x),scale_x));
var chunk__35351 = null;
var count__35352 = (0);
var i__35353 = (0);
while(true){
if((i__35353 < count__35352)){
var x = chunk__35351.cljs$core$IIndexed$_nth$arity$2(null,i__35353);
var seq__35354_35358 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__35355_35359 = null;
var count__35356_35360 = (0);
var i__35357_35361 = (0);
while(true){
if((i__35357_35361 < count__35356_35360)){
var y_35362 = chunk__35355_35359.cljs$core$IIndexed$_nth$arity$2(null,i__35357_35361);
quil.core.ellipse((x * w),(y_35362 * h),((x / (10)) + r),((x / (10)) + r));


var G__35363 = seq__35354_35358;
var G__35364 = chunk__35355_35359;
var G__35365 = count__35356_35360;
var G__35366 = (i__35357_35361 + (1));
seq__35354_35358 = G__35363;
chunk__35355_35359 = G__35364;
count__35356_35360 = G__35365;
i__35357_35361 = G__35366;
continue;
} else {
var temp__5735__auto___35367 = cljs.core.seq(seq__35354_35358);
if(temp__5735__auto___35367){
var seq__35354_35368__$1 = temp__5735__auto___35367;
if(cljs.core.chunked_seq_QMARK_(seq__35354_35368__$1)){
var c__4550__auto___35369 = cljs.core.chunk_first(seq__35354_35368__$1);
var G__35370 = cljs.core.chunk_rest(seq__35354_35368__$1);
var G__35371 = c__4550__auto___35369;
var G__35372 = cljs.core.count(c__4550__auto___35369);
var G__35373 = (0);
seq__35354_35358 = G__35370;
chunk__35355_35359 = G__35371;
count__35356_35360 = G__35372;
i__35357_35361 = G__35373;
continue;
} else {
var y_35374 = cljs.core.first(seq__35354_35368__$1);
quil.core.ellipse((x * w),(y_35374 * h),((x / (10)) + r),((x / (10)) + r));


var G__35375 = cljs.core.next(seq__35354_35368__$1);
var G__35376 = null;
var G__35377 = (0);
var G__35378 = (0);
seq__35354_35358 = G__35375;
chunk__35355_35359 = G__35376;
count__35356_35360 = G__35377;
i__35357_35361 = G__35378;
continue;
}
} else {
}
}
break;
}

var G__35379 = seq__35346;
var G__35380 = chunk__35351;
var G__35381 = count__35352;
var G__35382 = (i__35353 + (1));
seq__35346 = G__35379;
chunk__35351 = G__35380;
count__35352 = G__35381;
i__35353 = G__35382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35346);
if(temp__5735__auto__){
var seq__35346__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35346__$1);
var G__35383 = cljs.core.chunk_rest(seq__35346__$1);
var G__35384 = c__4550__auto__;
var G__35385 = cljs.core.count(c__4550__auto__);
var G__35386 = (0);
seq__35346 = G__35383;
chunk__35351 = G__35384;
count__35352 = G__35385;
i__35353 = G__35386;
continue;
} else {
var x = cljs.core.first(seq__35346__$1);
var seq__35347_35387 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__35348_35388 = null;
var count__35349_35389 = (0);
var i__35350_35390 = (0);
while(true){
if((i__35350_35390 < count__35349_35389)){
var y_35391 = chunk__35348_35388.cljs$core$IIndexed$_nth$arity$2(null,i__35350_35390);
quil.core.ellipse((x * w),(y_35391 * h),((x / (10)) + r),((x / (10)) + r));


var G__35392 = seq__35347_35387;
var G__35393 = chunk__35348_35388;
var G__35394 = count__35349_35389;
var G__35395 = (i__35350_35390 + (1));
seq__35347_35387 = G__35392;
chunk__35348_35388 = G__35393;
count__35349_35389 = G__35394;
i__35350_35390 = G__35395;
continue;
} else {
var temp__5735__auto___35396__$1 = cljs.core.seq(seq__35347_35387);
if(temp__5735__auto___35396__$1){
var seq__35347_35397__$1 = temp__5735__auto___35396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35347_35397__$1)){
var c__4550__auto___35398 = cljs.core.chunk_first(seq__35347_35397__$1);
var G__35399 = cljs.core.chunk_rest(seq__35347_35397__$1);
var G__35400 = c__4550__auto___35398;
var G__35401 = cljs.core.count(c__4550__auto___35398);
var G__35402 = (0);
seq__35347_35387 = G__35399;
chunk__35348_35388 = G__35400;
count__35349_35389 = G__35401;
i__35350_35390 = G__35402;
continue;
} else {
var y_35403 = cljs.core.first(seq__35347_35397__$1);
quil.core.ellipse((x * w),(y_35403 * h),((x / (10)) + r),((x / (10)) + r));


var G__35404 = cljs.core.next(seq__35347_35397__$1);
var G__35405 = null;
var G__35406 = (0);
var G__35407 = (0);
seq__35347_35387 = G__35404;
chunk__35348_35388 = G__35405;
count__35349_35389 = G__35406;
i__35350_35390 = G__35407;
continue;
}
} else {
}
}
break;
}

var G__35408 = cljs.core.next(seq__35346__$1);
var G__35409 = null;
var G__35410 = (0);
var G__35411 = (0);
seq__35346 = G__35408;
chunk__35351 = G__35409;
count__35352 = G__35410;
i__35353 = G__35411;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var yellow = cljs.core.cst$kw$y_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var magenta = cljs.core.cst$kw$m_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var cyan = cljs.core.cst$kw$c_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var tr__26878__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__26878__auto__);

negative_space_quil.core.draw_lattice(magenta);

negative_space_quil.core.draw_lattice(cyan);

return negative_space_quil.core.draw_lattice(yellow);
}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200207-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__35412__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__35412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35413__i = 0, G__35413__a = new Array(arguments.length -  0);
while (G__35413__i < G__35413__a.length) {G__35413__a[G__35413__i] = arguments[G__35413__i + 0]; ++G__35413__i;}
  args = new cljs.core.IndexedSeq(G__35413__a,0,null);
} 
return G__35412__delegate.call(this,args);};
G__35412.cljs$lang$maxFixedArity = 0;
G__35412.cljs$lang$applyTo = (function (arglist__35414){
var args = cljs.core.seq(arglist__35414);
return G__35412__delegate(args);
});
G__35412.cljs$core$IFn$_invoke$arity$variadic = G__35412__delegate;
return G__35412;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__35415__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__35415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35416__i = 0, G__35416__a = new Array(arguments.length -  0);
while (G__35416__i < G__35416__a.length) {G__35416__a[G__35416__i] = arguments[G__35416__i + 0]; ++G__35416__i;}
  args = new cljs.core.IndexedSeq(G__35416__a,0,null);
} 
return G__35415__delegate.call(this,args);};
G__35415.cljs$lang$maxFixedArity = 0;
G__35415.cljs$lang$applyTo = (function (arglist__35417){
var args = cljs.core.seq(arglist__35417);
return G__35415__delegate(args);
});
G__35415.cljs$core$IFn$_invoke$arity$variadic = G__35415__delegate;
return G__35415;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__35418__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__35418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35419__i = 0, G__35419__a = new Array(arguments.length -  0);
while (G__35419__i < G__35419__a.length) {G__35419__a[G__35419__i] = arguments[G__35419__i + 0]; ++G__35419__i;}
  args = new cljs.core.IndexedSeq(G__35419__a,0,null);
} 
return G__35418__delegate.call(this,args);};
G__35418.cljs$lang$maxFixedArity = 0;
G__35418.cljs$lang$applyTo = (function (arglist__35420){
var args = cljs.core.seq(arglist__35420);
return G__35418__delegate(args);
});
G__35418.cljs$core$IFn$_invoke$arity$variadic = G__35418__delegate;
return G__35418;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__26472__26473__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__26472__26473__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200207-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
