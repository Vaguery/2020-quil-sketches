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

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(13),cljs.core.cst$kw$height,(13),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((44),(255),(255),(120)),cljs.core.cst$kw$radius,(4),cljs.core.cst$kw$angle,(0),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.cst$kw$c_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(13),cljs.core.cst$kw$height,(13),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((128),(255),(255),(120)),cljs.core.cst$kw$radius,(4),cljs.core.cst$kw$angle,(90),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.cst$kw$m_DASH_lattice,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(13),cljs.core.cst$kw$height,(13),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$4((214),(255),(255),(120)),cljs.core.cst$kw$radius,(4),cljs.core.cst$kw$angle,(180),cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__34607_SHARP_){
return (0.002 + p1__34607_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__34608_SHARP_){
return (-0.003 + p1__34608_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_lattice,cljs.core.cst$kw$angle], null),(function (p1__34609_SHARP_){
return (0.004 + p1__34609_SHARP_);
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

var tr__28898__auto__ = offset;
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__28898__auto__);

var tr__28904__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__28904__auto__);

var seq__34610 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_x),scale_x));
var chunk__34615 = null;
var count__34616 = (0);
var i__34617 = (0);
while(true){
if((i__34617 < count__34616)){
var x = chunk__34615.cljs$core$IIndexed$_nth$arity$2(null,i__34617);
var seq__34618_34622 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__34619_34623 = null;
var count__34620_34624 = (0);
var i__34621_34625 = (0);
while(true){
if((i__34621_34625 < count__34620_34624)){
var y_34626 = chunk__34619_34623.cljs$core$IIndexed$_nth$arity$2(null,i__34621_34625);
quil.core.ellipse((x * w),(y_34626 * h),((x / (5)) + r),((x / (5)) + r));


var G__34627 = seq__34618_34622;
var G__34628 = chunk__34619_34623;
var G__34629 = count__34620_34624;
var G__34630 = (i__34621_34625 + (1));
seq__34618_34622 = G__34627;
chunk__34619_34623 = G__34628;
count__34620_34624 = G__34629;
i__34621_34625 = G__34630;
continue;
} else {
var temp__5735__auto___34631 = cljs.core.seq(seq__34618_34622);
if(temp__5735__auto___34631){
var seq__34618_34632__$1 = temp__5735__auto___34631;
if(cljs.core.chunked_seq_QMARK_(seq__34618_34632__$1)){
var c__4550__auto___34633 = cljs.core.chunk_first(seq__34618_34632__$1);
var G__34634 = cljs.core.chunk_rest(seq__34618_34632__$1);
var G__34635 = c__4550__auto___34633;
var G__34636 = cljs.core.count(c__4550__auto___34633);
var G__34637 = (0);
seq__34618_34622 = G__34634;
chunk__34619_34623 = G__34635;
count__34620_34624 = G__34636;
i__34621_34625 = G__34637;
continue;
} else {
var y_34638 = cljs.core.first(seq__34618_34632__$1);
quil.core.ellipse((x * w),(y_34638 * h),((x / (5)) + r),((x / (5)) + r));


var G__34639 = cljs.core.next(seq__34618_34632__$1);
var G__34640 = null;
var G__34641 = (0);
var G__34642 = (0);
seq__34618_34622 = G__34639;
chunk__34619_34623 = G__34640;
count__34620_34624 = G__34641;
i__34621_34625 = G__34642;
continue;
}
} else {
}
}
break;
}

var G__34643 = seq__34610;
var G__34644 = chunk__34615;
var G__34645 = count__34616;
var G__34646 = (i__34617 + (1));
seq__34610 = G__34643;
chunk__34615 = G__34644;
count__34616 = G__34645;
i__34617 = G__34646;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34610);
if(temp__5735__auto__){
var seq__34610__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34610__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34610__$1);
var G__34647 = cljs.core.chunk_rest(seq__34610__$1);
var G__34648 = c__4550__auto__;
var G__34649 = cljs.core.count(c__4550__auto__);
var G__34650 = (0);
seq__34610 = G__34647;
chunk__34615 = G__34648;
count__34616 = G__34649;
i__34617 = G__34650;
continue;
} else {
var x = cljs.core.first(seq__34610__$1);
var seq__34611_34651 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__34612_34652 = null;
var count__34613_34653 = (0);
var i__34614_34654 = (0);
while(true){
if((i__34614_34654 < count__34613_34653)){
var y_34655 = chunk__34612_34652.cljs$core$IIndexed$_nth$arity$2(null,i__34614_34654);
quil.core.ellipse((x * w),(y_34655 * h),((x / (5)) + r),((x / (5)) + r));


var G__34656 = seq__34611_34651;
var G__34657 = chunk__34612_34652;
var G__34658 = count__34613_34653;
var G__34659 = (i__34614_34654 + (1));
seq__34611_34651 = G__34656;
chunk__34612_34652 = G__34657;
count__34613_34653 = G__34658;
i__34614_34654 = G__34659;
continue;
} else {
var temp__5735__auto___34660__$1 = cljs.core.seq(seq__34611_34651);
if(temp__5735__auto___34660__$1){
var seq__34611_34661__$1 = temp__5735__auto___34660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34611_34661__$1)){
var c__4550__auto___34662 = cljs.core.chunk_first(seq__34611_34661__$1);
var G__34663 = cljs.core.chunk_rest(seq__34611_34661__$1);
var G__34664 = c__4550__auto___34662;
var G__34665 = cljs.core.count(c__4550__auto___34662);
var G__34666 = (0);
seq__34611_34651 = G__34663;
chunk__34612_34652 = G__34664;
count__34613_34653 = G__34665;
i__34614_34654 = G__34666;
continue;
} else {
var y_34667 = cljs.core.first(seq__34611_34661__$1);
quil.core.ellipse((x * w),(y_34667 * h),((x / (5)) + r),((x / (5)) + r));


var G__34668 = cljs.core.next(seq__34611_34661__$1);
var G__34669 = null;
var G__34670 = (0);
var G__34671 = (0);
seq__34611_34651 = G__34668;
chunk__34612_34652 = G__34669;
count__34613_34653 = G__34670;
i__34614_34654 = G__34671;
continue;
}
} else {
}
}
break;
}

var G__34672 = cljs.core.next(seq__34610__$1);
var G__34673 = null;
var G__34674 = (0);
var G__34675 = (0);
seq__34610 = G__34672;
chunk__34615 = G__34673;
count__34616 = G__34674;
i__34617 = G__34675;
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

var tr__28898__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__28898__auto__);

negative_space_quil.core.draw_lattice(magenta);

negative_space_quil.core.draw_lattice(cyan);

return negative_space_quil.core.draw_lattice(yellow);
}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200207-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__34676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__34676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34677__i = 0, G__34677__a = new Array(arguments.length -  0);
while (G__34677__i < G__34677__a.length) {G__34677__a[G__34677__i] = arguments[G__34677__i + 0]; ++G__34677__i;}
  args = new cljs.core.IndexedSeq(G__34677__a,0,null);
} 
return G__34676__delegate.call(this,args);};
G__34676.cljs$lang$maxFixedArity = 0;
G__34676.cljs$lang$applyTo = (function (arglist__34678){
var args = cljs.core.seq(arglist__34678);
return G__34676__delegate(args);
});
G__34676.cljs$core$IFn$_invoke$arity$variadic = G__34676__delegate;
return G__34676;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__34679__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__34679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34680__i = 0, G__34680__a = new Array(arguments.length -  0);
while (G__34680__i < G__34680__a.length) {G__34680__a[G__34680__i] = arguments[G__34680__i + 0]; ++G__34680__i;}
  args = new cljs.core.IndexedSeq(G__34680__a,0,null);
} 
return G__34679__delegate.call(this,args);};
G__34679.cljs$lang$maxFixedArity = 0;
G__34679.cljs$lang$applyTo = (function (arglist__34681){
var args = cljs.core.seq(arglist__34681);
return G__34679__delegate(args);
});
G__34679.cljs$core$IFn$_invoke$arity$variadic = G__34679__delegate;
return G__34679;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__34682__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__34682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34683__i = 0, G__34683__a = new Array(arguments.length -  0);
while (G__34683__i < G__34683__a.length) {G__34683__a[G__34683__i] = arguments[G__34683__i + 0]; ++G__34683__i;}
  args = new cljs.core.IndexedSeq(G__34683__a,0,null);
} 
return G__34682__delegate.call(this,args);};
G__34682.cljs$lang$maxFixedArity = 0;
G__34682.cljs$lang$applyTo = (function (arglist__34684){
var args = cljs.core.seq(arglist__34684);
return G__34682__delegate(args);
});
G__34682.cljs$core$IFn$_invoke$arity$variadic = G__34682__delegate;
return G__34682;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__28182__28183__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__28182__28183__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200207-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
