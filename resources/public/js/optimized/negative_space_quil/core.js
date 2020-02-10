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
var gr__21265__auto___40710 = gr;
var _STAR_graphics_STAR__orig_val__40696_40711 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__40697_40712 = gr__21265__auto___40710;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__40697_40712;

try{quil.core.begin_draw(gr__21265__auto___40710);

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1(c);

var seq__40698_40713 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_x),scale_x));
var chunk__40703_40714 = null;
var count__40704_40715 = (0);
var i__40705_40716 = (0);
while(true){
if((i__40705_40716 < count__40704_40715)){
var x_40717 = chunk__40703_40714.cljs$core$IIndexed$_nth$arity$2(null,i__40705_40716);
var seq__40706_40718 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__40707_40719 = null;
var count__40708_40720 = (0);
var i__40709_40721 = (0);
while(true){
if((i__40709_40721 < count__40708_40720)){
var y_40722 = chunk__40707_40719.cljs$core$IIndexed$_nth$arity$2(null,i__40709_40721);
quil.core.ellipse((((-1) + (x_40717 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_40722 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_40717 / (7)) + r),((x_40717 / (7)) + r));


var G__40723 = seq__40706_40718;
var G__40724 = chunk__40707_40719;
var G__40725 = count__40708_40720;
var G__40726 = (i__40709_40721 + (1));
seq__40706_40718 = G__40723;
chunk__40707_40719 = G__40724;
count__40708_40720 = G__40725;
i__40709_40721 = G__40726;
continue;
} else {
var temp__5735__auto___40727 = cljs.core.seq(seq__40706_40718);
if(temp__5735__auto___40727){
var seq__40706_40728__$1 = temp__5735__auto___40727;
if(cljs.core.chunked_seq_QMARK_(seq__40706_40728__$1)){
var c__4550__auto___40729 = cljs.core.chunk_first(seq__40706_40728__$1);
var G__40730 = cljs.core.chunk_rest(seq__40706_40728__$1);
var G__40731 = c__4550__auto___40729;
var G__40732 = cljs.core.count(c__4550__auto___40729);
var G__40733 = (0);
seq__40706_40718 = G__40730;
chunk__40707_40719 = G__40731;
count__40708_40720 = G__40732;
i__40709_40721 = G__40733;
continue;
} else {
var y_40734 = cljs.core.first(seq__40706_40728__$1);
quil.core.ellipse((((-1) + (x_40717 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_40734 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_40717 / (7)) + r),((x_40717 / (7)) + r));


var G__40735 = cljs.core.next(seq__40706_40728__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40706_40718 = G__40735;
chunk__40707_40719 = G__40736;
count__40708_40720 = G__40737;
i__40709_40721 = G__40738;
continue;
}
} else {
}
}
break;
}

var G__40739 = seq__40698_40713;
var G__40740 = chunk__40703_40714;
var G__40741 = count__40704_40715;
var G__40742 = (i__40705_40716 + (1));
seq__40698_40713 = G__40739;
chunk__40703_40714 = G__40740;
count__40704_40715 = G__40741;
i__40705_40716 = G__40742;
continue;
} else {
var temp__5735__auto___40743 = cljs.core.seq(seq__40698_40713);
if(temp__5735__auto___40743){
var seq__40698_40744__$1 = temp__5735__auto___40743;
if(cljs.core.chunked_seq_QMARK_(seq__40698_40744__$1)){
var c__4550__auto___40745 = cljs.core.chunk_first(seq__40698_40744__$1);
var G__40746 = cljs.core.chunk_rest(seq__40698_40744__$1);
var G__40747 = c__4550__auto___40745;
var G__40748 = cljs.core.count(c__4550__auto___40745);
var G__40749 = (0);
seq__40698_40713 = G__40746;
chunk__40703_40714 = G__40747;
count__40704_40715 = G__40748;
i__40705_40716 = G__40749;
continue;
} else {
var x_40750 = cljs.core.first(seq__40698_40744__$1);
var seq__40699_40751 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__40700_40752 = null;
var count__40701_40753 = (0);
var i__40702_40754 = (0);
while(true){
if((i__40702_40754 < count__40701_40753)){
var y_40755 = chunk__40700_40752.cljs$core$IIndexed$_nth$arity$2(null,i__40702_40754);
quil.core.ellipse((((-1) + (x_40750 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_40755 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_40750 / (7)) + r),((x_40750 / (7)) + r));


var G__40756 = seq__40699_40751;
var G__40757 = chunk__40700_40752;
var G__40758 = count__40701_40753;
var G__40759 = (i__40702_40754 + (1));
seq__40699_40751 = G__40756;
chunk__40700_40752 = G__40757;
count__40701_40753 = G__40758;
i__40702_40754 = G__40759;
continue;
} else {
var temp__5735__auto___40760__$1 = cljs.core.seq(seq__40699_40751);
if(temp__5735__auto___40760__$1){
var seq__40699_40761__$1 = temp__5735__auto___40760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40699_40761__$1)){
var c__4550__auto___40762 = cljs.core.chunk_first(seq__40699_40761__$1);
var G__40763 = cljs.core.chunk_rest(seq__40699_40761__$1);
var G__40764 = c__4550__auto___40762;
var G__40765 = cljs.core.count(c__4550__auto___40762);
var G__40766 = (0);
seq__40699_40751 = G__40763;
chunk__40700_40752 = G__40764;
count__40701_40753 = G__40765;
i__40702_40754 = G__40766;
continue;
} else {
var y_40767 = cljs.core.first(seq__40699_40761__$1);
quil.core.ellipse((((-1) + (x_40750 * w)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(((-1) + (y_40767 * h)) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),((x_40750 / (7)) + r),((x_40750 / (7)) + r));


var G__40768 = cljs.core.next(seq__40699_40761__$1);
var G__40769 = null;
var G__40770 = (0);
var G__40771 = (0);
seq__40699_40751 = G__40768;
chunk__40700_40752 = G__40769;
count__40701_40753 = G__40770;
i__40702_40754 = G__40771;
continue;
}
} else {
}
}
break;
}

var G__40772 = cljs.core.next(seq__40698_40744__$1);
var G__40773 = null;
var G__40774 = (0);
var G__40775 = (0);
seq__40698_40713 = G__40772;
chunk__40703_40714 = G__40773;
count__40704_40715 = G__40774;
i__40705_40716 = G__40775;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw(gr__21265__auto___40710);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__40696_40711;
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

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y_DASH_angle,cljs.core.cst$kw$mouse_DASH_within,cljs.core.cst$kw$m_DASH_lattice,cljs.core.cst$kw$c_DASH_lattice,cljs.core.cst$kw$mouse_DASH_enter,cljs.core.cst$kw$c_DASH_angle,cljs.core.cst$kw$y_DASH_lattice,cljs.core.cst$kw$m_DASH_angle,cljs.core.cst$kw$mouse_DASH_press],[cljs.core.rand_int((100)),false,negative_space_quil.core.create_lattice(negative_space_quil.core.m_def(),quil.core.width()),negative_space_quil.core.create_lattice(negative_space_quil.core.c_def(),quil.core.width()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),cljs.core.rand_int((100)),negative_space_quil.core.create_lattice(negative_space_quil.core.y_def(),quil.core.width()),cljs.core.rand_int((100)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)]);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$m_DASH_angle,(function (p1__40776_SHARP_){
return (p1__40776_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (1000)));
})),cljs.core.cst$kw$c_DASH_angle,(function (p1__40777_SHARP_){
return (p1__40777_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (-1000)));
})),cljs.core.cst$kw$y_DASH_angle,(function (p1__40778_SHARP_){
return (p1__40778_SHARP_ + (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() / (1000)));
}));
});
negative_space_quil.core.mouse_press_detection = (function negative_space_quil$core$mouse_press_detection(state,event){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$mouse_DASH_press,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null));
});
negative_space_quil.core.mouse_enter_detection = (function negative_space_quil$core$mouse_enter_detection(state,event){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$mouse_DASH_enter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event)], null));
});
negative_space_quil.core.draw_debug_alert = (function negative_space_quil$core$draw_debug_alert(state){
var tr__21251__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(30)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__21251__auto__);

quil.core.fill.cljs$core$IFn$_invoke$arity$1((220));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(0),(300),(200));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

quil.core.text.cljs$core$IFn$_invoke$arity$5(["mouse-x: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_x())].join(''),(10),(10),(300),(40));

quil.core.text.cljs$core$IFn$_invoke$arity$5(["mouse-y: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_y())].join(''),(10),(25),(300),(40));

quil.core.text.cljs$core$IFn$_invoke$arity$5(["mouse-pressed?: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.core.mouse_pressed_QMARK_())].join(''),(10),(40),(300),(40));

quil.core.text.cljs$core$IFn$_invoke$arity$5(["mouse-press: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mouse_DASH_press.cljs$core$IFn$_invoke$arity$1(state))," <- fun-mode event"].join(''),(10),(55),(300),(40));

return quil.core.text.cljs$core$IFn$_invoke$arity$5(["mouse-enter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mouse_DASH_enter.cljs$core$IFn$_invoke$arity$1(state))," <- fun-mode event"].join(''),(10),(70),(300),(40));
}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var magenta = cljs.core.cst$kw$m_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var cyan = cljs.core.cst$kw$c_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var yellow = cljs.core.cst$kw$y_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

var tr__21251__auto___40779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__21251__auto___40779);

var tr__21257__auto___40780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$m_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__21257__auto___40780);

quil.core.image.cljs$core$IFn$_invoke$arity$3(magenta,(0),(0));
}finally {quil.core.pop_matrix();
}
var tr__21257__auto___40781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__21257__auto___40781);

quil.core.image.cljs$core$IFn$_invoke$arity$3(cyan,(0),(0));
}finally {quil.core.pop_matrix();
}
var tr__21257__auto___40782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$y_DASH_angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__21257__auto___40782);

quil.core.image.cljs$core$IFn$_invoke$arity$3(yellow,(0),(0));
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}
return negative_space_quil.core.draw_debug_alert(state);
});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200209-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__40783__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__40783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40784__i = 0, G__40784__a = new Array(arguments.length -  0);
while (G__40784__i < G__40784__a.length) {G__40784__a[G__40784__i] = arguments[G__40784__i + 0]; ++G__40784__i;}
  args = new cljs.core.IndexedSeq(G__40784__a,0,null);
} 
return G__40783__delegate.call(this,args);};
G__40783.cljs$lang$maxFixedArity = 0;
G__40783.cljs$lang$applyTo = (function (arglist__40785){
var args = cljs.core.seq(arglist__40785);
return G__40783__delegate(args);
});
G__40783.cljs$core$IFn$_invoke$arity$variadic = G__40783__delegate;
return G__40783;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$mouse_DASH_enter,((cljs.core.fn_QMARK_(negative_space_quil.core.mouse_enter_detection))?(function() { 
var G__40786__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.mouse_enter_detection,args);
};
var G__40786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40787__i = 0, G__40787__a = new Array(arguments.length -  0);
while (G__40787__i < G__40787__a.length) {G__40787__a[G__40787__i] = arguments[G__40787__i + 0]; ++G__40787__i;}
  args = new cljs.core.IndexedSeq(G__40787__a,0,null);
} 
return G__40786__delegate.call(this,args);};
G__40786.cljs$lang$maxFixedArity = 0;
G__40786.cljs$lang$applyTo = (function (arglist__40788){
var args = cljs.core.seq(arglist__40788);
return G__40786__delegate(args);
});
G__40786.cljs$core$IFn$_invoke$arity$variadic = G__40786__delegate;
return G__40786;
})()
:negative_space_quil.core.mouse_enter_detection),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__40789__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__40789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40790__i = 0, G__40790__a = new Array(arguments.length -  0);
while (G__40790__i < G__40790__a.length) {G__40790__a[G__40790__i] = arguments[G__40790__i + 0]; ++G__40790__i;}
  args = new cljs.core.IndexedSeq(G__40790__a,0,null);
} 
return G__40789__delegate.call(this,args);};
G__40789.cljs$lang$maxFixedArity = 0;
G__40789.cljs$lang$applyTo = (function (arglist__40791){
var args = cljs.core.seq(arglist__40791);
return G__40789__delegate(args);
});
G__40789.cljs$core$IFn$_invoke$arity$variadic = G__40789__delegate;
return G__40789;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$mouse_DASH_pressed,((cljs.core.fn_QMARK_(negative_space_quil.core.mouse_press_detection))?(function() { 
var G__40792__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.mouse_press_detection,args);
};
var G__40792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40793__i = 0, G__40793__a = new Array(arguments.length -  0);
while (G__40793__i < G__40793__a.length) {G__40793__a[G__40793__i] = arguments[G__40793__i + 0]; ++G__40793__i;}
  args = new cljs.core.IndexedSeq(G__40793__a,0,null);
} 
return G__40792__delegate.call(this,args);};
G__40792.cljs$lang$maxFixedArity = 0;
G__40792.cljs$lang$applyTo = (function (arglist__40794){
var args = cljs.core.seq(arglist__40794);
return G__40792__delegate(args);
});
G__40792.cljs$core$IFn$_invoke$arity$variadic = G__40792__delegate;
return G__40792;
})()
:negative_space_quil.core.mouse_press_detection),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_2d], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__40795__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__40795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40796__i = 0, G__40796__a = new Array(arguments.length -  0);
while (G__40796__i < G__40796__a.length) {G__40796__a[G__40796__i] = arguments[G__40796__i + 0]; ++G__40796__i;}
  args = new cljs.core.IndexedSeq(G__40796__a,0,null);
} 
return G__40795__delegate.call(this,args);};
G__40795.cljs$lang$maxFixedArity = 0;
G__40795.cljs$lang$applyTo = (function (arglist__40797){
var args = cljs.core.seq(arglist__40797);
return G__40795__delegate(args);
});
G__40795.cljs$core$IFn$_invoke$arity$variadic = G__40795__delegate;
return G__40795;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__20845__20846__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200209-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
