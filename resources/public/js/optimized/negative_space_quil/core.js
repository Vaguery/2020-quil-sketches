// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.create_lattice = (function negative_space_quil$core$create_lattice(lattice_def,edge){
var w = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(lattice_def);
var h = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(lattice_def);
var r = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(lattice_def);
var c = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(lattice_def);
var scale_x = (1.5 * (edge / w));
var scale_y = (1.5 * (edge / h));
var gr = quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2((w * scale_x),(h * scale_y));
var gr__22255__auto___56594 = gr;
var _STAR_graphics_STAR__orig_val__56580_56595 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__56581_56596 = gr__22255__auto___56594;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__56581_56596;

try{quil.core.begin_draw(gr__22255__auto___56594);

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1(c);

var seq__56582_56597 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_x),scale_x));
var chunk__56587_56598 = null;
var count__56588_56599 = (0);
var i__56589_56600 = (0);
while(true){
if((i__56589_56600 < count__56588_56599)){
var x_56601 = chunk__56587_56598.cljs$core$IIndexed$_nth$arity$2(null,i__56589_56600);
var seq__56590_56602 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__56591_56603 = null;
var count__56592_56604 = (0);
var i__56593_56605 = (0);
while(true){
if((i__56593_56605 < count__56592_56604)){
var y_56606 = chunk__56591_56603.cljs$core$IIndexed$_nth$arity$2(null,i__56593_56605);
quil.core.ellipse((((-1) + (x_56601 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_56606 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_56601 / (7)) + r),((x_56601 / (7)) + r));


var G__56607 = seq__56590_56602;
var G__56608 = chunk__56591_56603;
var G__56609 = count__56592_56604;
var G__56610 = (i__56593_56605 + (1));
seq__56590_56602 = G__56607;
chunk__56591_56603 = G__56608;
count__56592_56604 = G__56609;
i__56593_56605 = G__56610;
continue;
} else {
var temp__5735__auto___56611 = cljs.core.seq(seq__56590_56602);
if(temp__5735__auto___56611){
var seq__56590_56612__$1 = temp__5735__auto___56611;
if(cljs.core.chunked_seq_QMARK_(seq__56590_56612__$1)){
var c__4550__auto___56613 = cljs.core.chunk_first(seq__56590_56612__$1);
var G__56614 = cljs.core.chunk_rest(seq__56590_56612__$1);
var G__56615 = c__4550__auto___56613;
var G__56616 = cljs.core.count(c__4550__auto___56613);
var G__56617 = (0);
seq__56590_56602 = G__56614;
chunk__56591_56603 = G__56615;
count__56592_56604 = G__56616;
i__56593_56605 = G__56617;
continue;
} else {
var y_56618 = cljs.core.first(seq__56590_56612__$1);
quil.core.ellipse((((-1) + (x_56601 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_56618 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_56601 / (7)) + r),((x_56601 / (7)) + r));


var G__56619 = cljs.core.next(seq__56590_56612__$1);
var G__56620 = null;
var G__56621 = (0);
var G__56622 = (0);
seq__56590_56602 = G__56619;
chunk__56591_56603 = G__56620;
count__56592_56604 = G__56621;
i__56593_56605 = G__56622;
continue;
}
} else {
}
}
break;
}

var G__56623 = seq__56582_56597;
var G__56624 = chunk__56587_56598;
var G__56625 = count__56588_56599;
var G__56626 = (i__56589_56600 + (1));
seq__56582_56597 = G__56623;
chunk__56587_56598 = G__56624;
count__56588_56599 = G__56625;
i__56589_56600 = G__56626;
continue;
} else {
var temp__5735__auto___56627 = cljs.core.seq(seq__56582_56597);
if(temp__5735__auto___56627){
var seq__56582_56628__$1 = temp__5735__auto___56627;
if(cljs.core.chunked_seq_QMARK_(seq__56582_56628__$1)){
var c__4550__auto___56629 = cljs.core.chunk_first(seq__56582_56628__$1);
var G__56630 = cljs.core.chunk_rest(seq__56582_56628__$1);
var G__56631 = c__4550__auto___56629;
var G__56632 = cljs.core.count(c__4550__auto___56629);
var G__56633 = (0);
seq__56582_56597 = G__56630;
chunk__56587_56598 = G__56631;
count__56588_56599 = G__56632;
i__56589_56600 = G__56633;
continue;
} else {
var x_56634 = cljs.core.first(seq__56582_56628__$1);
var seq__56583_56635 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__56584_56636 = null;
var count__56585_56637 = (0);
var i__56586_56638 = (0);
while(true){
if((i__56586_56638 < count__56585_56637)){
var y_56639 = chunk__56584_56636.cljs$core$IIndexed$_nth$arity$2(null,i__56586_56638);
quil.core.ellipse((((-1) + (x_56634 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_56639 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_56634 / (7)) + r),((x_56634 / (7)) + r));


var G__56640 = seq__56583_56635;
var G__56641 = chunk__56584_56636;
var G__56642 = count__56585_56637;
var G__56643 = (i__56586_56638 + (1));
seq__56583_56635 = G__56640;
chunk__56584_56636 = G__56641;
count__56585_56637 = G__56642;
i__56586_56638 = G__56643;
continue;
} else {
var temp__5735__auto___56644__$1 = cljs.core.seq(seq__56583_56635);
if(temp__5735__auto___56644__$1){
var seq__56583_56645__$1 = temp__5735__auto___56644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56583_56645__$1)){
var c__4550__auto___56646 = cljs.core.chunk_first(seq__56583_56645__$1);
var G__56647 = cljs.core.chunk_rest(seq__56583_56645__$1);
var G__56648 = c__4550__auto___56646;
var G__56649 = cljs.core.count(c__4550__auto___56646);
var G__56650 = (0);
seq__56583_56635 = G__56647;
chunk__56584_56636 = G__56648;
count__56585_56637 = G__56649;
i__56586_56638 = G__56650;
continue;
} else {
var y_56651 = cljs.core.first(seq__56583_56645__$1);
quil.core.ellipse((((-1) + (x_56634 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_56651 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_56634 / (7)) + r),((x_56634 / (7)) + r));


var G__56652 = cljs.core.next(seq__56583_56645__$1);
var G__56653 = null;
var G__56654 = (0);
var G__56655 = (0);
seq__56583_56635 = G__56652;
chunk__56584_56636 = G__56653;
count__56585_56637 = G__56654;
i__56586_56638 = G__56655;
continue;
}
} else {
}
}
break;
}

var G__56656 = cljs.core.next(seq__56582_56628__$1);
var G__56657 = null;
var G__56658 = (0);
var G__56659 = (0);
seq__56582_56597 = G__56656;
chunk__56587_56598 = G__56657;
count__56588_56599 = G__56658;
i__56589_56600 = G__56659;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw(gr__22255__auto___56594);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__56580_56595;
}
return gr;
});
negative_space_quil.core.m_def = (function negative_space_quil$core$m_def(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(7),cljs.core.cst$kw$height,(7),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((214),(200),(255),(255)),cljs.core.cst$kw$radius,(2)], null);
});
negative_space_quil.core.c_def = (function negative_space_quil$core$c_def(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$height,(6),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((128),(230),(255),(128)),cljs.core.cst$kw$radius,(2)], null);
});
negative_space_quil.core.y_def = (function negative_space_quil$core$y_def(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$height,(6),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((44),(100),(255),(64)),cljs.core.cst$kw$radius,(2)], null);
});
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate((100));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.blend_mode(cljs.core.cst$kw$blend);

quil.core.ellipse_mode(cljs.core.cst$kw$radius);

quil.core.image_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$m_DASH_lattice,negative_space_quil.core.create_lattice(negative_space_quil.core.m_def(),quil.core.width()),cljs.core.cst$kw$m_DASH_angle,cljs.core.rand_int((100)),cljs.core.cst$kw$c_DASH_lattice,negative_space_quil.core.create_lattice(negative_space_quil.core.c_def(),quil.core.width()),cljs.core.cst$kw$c_DASH_angle,cljs.core.rand_int((100)),cljs.core.cst$kw$y_DASH_lattice,negative_space_quil.core.create_lattice(negative_space_quil.core.y_def(),quil.core.width()),cljs.core.cst$kw$y_DASH_angle,cljs.core.rand_int((100))], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$m_DASH_angle,(function (p1__56660_SHARP_){
return (p1__56660_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (1000)));
})),cljs.core.cst$kw$c_DASH_angle,(function (p1__56661_SHARP_){
return (p1__56661_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (-1000)));
})),cljs.core.cst$kw$y_DASH_angle,(function (p1__56662_SHARP_){
return (p1__56662_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (1000)));
}));
});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var magenta = cljs.core.cst$kw$m_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var cyan = cljs.core.cst$kw$c_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var yellow = cljs.core.cst$kw$y_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var tr__22241__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__22241__auto__);

var tr__22247__auto___56663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__22247__auto___56663);

quil.core.image.cljs$core$IFn$_invoke$arity$3(magenta,(0),(0));
}finally {quil.core.pop_matrix();
}
var tr__22247__auto___56664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__22247__auto___56664);

quil.core.image.cljs$core$IFn$_invoke$arity$3(cyan,(0),(0));
}finally {quil.core.pop_matrix();
}
var tr__22247__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__22247__auto__);

return quil.core.image.cljs$core$IFn$_invoke$arity$3(yellow,(0),(0));
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200208-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__56665__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__56665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56666__i = 0, G__56666__a = new Array(arguments.length -  0);
while (G__56666__i < G__56666__a.length) {G__56666__a[G__56666__i] = arguments[G__56666__i + 0]; ++G__56666__i;}
  args = new cljs.core.IndexedSeq(G__56666__a,0,null);
} 
return G__56665__delegate.call(this,args);};
G__56665.cljs$lang$maxFixedArity = 0;
G__56665.cljs$lang$applyTo = (function (arglist__56667){
var args = cljs.core.seq(arglist__56667);
return G__56665__delegate(args);
});
G__56665.cljs$core$IFn$_invoke$arity$variadic = G__56665__delegate;
return G__56665;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__56668__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__56668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56669__i = 0, G__56669__a = new Array(arguments.length -  0);
while (G__56669__i < G__56669__a.length) {G__56669__a[G__56669__i] = arguments[G__56669__i + 0]; ++G__56669__i;}
  args = new cljs.core.IndexedSeq(G__56669__a,0,null);
} 
return G__56668__delegate.call(this,args);};
G__56668.cljs$lang$maxFixedArity = 0;
G__56668.cljs$lang$applyTo = (function (arglist__56670){
var args = cljs.core.seq(arglist__56670);
return G__56668__delegate(args);
});
G__56668.cljs$core$IFn$_invoke$arity$variadic = G__56668__delegate;
return G__56668;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_2d], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__56671__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__56671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56672__i = 0, G__56672__a = new Array(arguments.length -  0);
while (G__56672__i < G__56672__a.length) {G__56672__a[G__56672__i] = arguments[G__56672__i + 0]; ++G__56672__i;}
  args = new cljs.core.IndexedSeq(G__56672__a,0,null);
} 
return G__56671__delegate.call(this,args);};
G__56671.cljs$lang$maxFixedArity = 0;
G__56671.cljs$lang$applyTo = (function (arglist__56673){
var args = cljs.core.seq(arglist__56673);
return G__56671__delegate(args);
});
G__56671.cljs$core$IFn$_invoke$arity$variadic = G__56671__delegate;
return G__56671;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__20937__20938__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__20937__20938__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200208-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
