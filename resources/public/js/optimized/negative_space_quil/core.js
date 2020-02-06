// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.ellipse_mode(cljs.core.cst$kw$radius);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$back_DASH_lattice,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(20),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$1((111)),cljs.core.cst$kw$radius,(8)], null),cljs.core.cst$kw$front_DASH_lattice,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(21),cljs.core.cst$kw$height,(21),cljs.core.cst$kw$color,quil.core.color.cljs$core$IFn$_invoke$arity$1((240)),cljs.core.cst$kw$radius,(9)], null),cljs.core.cst$kw$angle,(11)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$angle], null),(function (p1__53169_SHARP_){
return (0.0025 + p1__53169_SHARP_);
}));
});
negative_space_quil.core.draw_lattice = (function negative_space_quil$core$draw_lattice(lattice){
var w = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(lattice);
var h = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(lattice);
var r = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(lattice);
var c = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(lattice);
var scale_x = (1.5 * (quil.core.width() / w));
var scale_y = (1.5 * (quil.core.height() / w));
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1(c);

var seq__53170 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_x),scale_x));
var chunk__53175 = null;
var count__53176 = (0);
var i__53177 = (0);
while(true){
if((i__53177 < count__53176)){
var x = chunk__53175.cljs$core$IIndexed$_nth$arity$2(null,i__53177);
var seq__53178_53182 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__53179_53183 = null;
var count__53180_53184 = (0);
var i__53181_53185 = (0);
while(true){
if((i__53181_53185 < count__53180_53184)){
var y_53186 = chunk__53179_53183.cljs$core$IIndexed$_nth$arity$2(null,i__53181_53185);
quil.core.ellipse((x * w),(y_53186 * h),r,r);


var G__53187 = seq__53178_53182;
var G__53188 = chunk__53179_53183;
var G__53189 = count__53180_53184;
var G__53190 = (i__53181_53185 + (1));
seq__53178_53182 = G__53187;
chunk__53179_53183 = G__53188;
count__53180_53184 = G__53189;
i__53181_53185 = G__53190;
continue;
} else {
var temp__5735__auto___53191 = cljs.core.seq(seq__53178_53182);
if(temp__5735__auto___53191){
var seq__53178_53192__$1 = temp__5735__auto___53191;
if(cljs.core.chunked_seq_QMARK_(seq__53178_53192__$1)){
var c__4550__auto___53193 = cljs.core.chunk_first(seq__53178_53192__$1);
var G__53194 = cljs.core.chunk_rest(seq__53178_53192__$1);
var G__53195 = c__4550__auto___53193;
var G__53196 = cljs.core.count(c__4550__auto___53193);
var G__53197 = (0);
seq__53178_53182 = G__53194;
chunk__53179_53183 = G__53195;
count__53180_53184 = G__53196;
i__53181_53185 = G__53197;
continue;
} else {
var y_53198 = cljs.core.first(seq__53178_53192__$1);
quil.core.ellipse((x * w),(y_53198 * h),r,r);


var G__53199 = cljs.core.next(seq__53178_53192__$1);
var G__53200 = null;
var G__53201 = (0);
var G__53202 = (0);
seq__53178_53182 = G__53199;
chunk__53179_53183 = G__53200;
count__53180_53184 = G__53201;
i__53181_53185 = G__53202;
continue;
}
} else {
}
}
break;
}

var G__53203 = seq__53170;
var G__53204 = chunk__53175;
var G__53205 = count__53176;
var G__53206 = (i__53177 + (1));
seq__53170 = G__53203;
chunk__53175 = G__53204;
count__53176 = G__53205;
i__53177 = G__53206;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53170);
if(temp__5735__auto__){
var seq__53170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53170__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53170__$1);
var G__53207 = cljs.core.chunk_rest(seq__53170__$1);
var G__53208 = c__4550__auto__;
var G__53209 = cljs.core.count(c__4550__auto__);
var G__53210 = (0);
seq__53170 = G__53207;
chunk__53175 = G__53208;
count__53176 = G__53209;
i__53177 = G__53210;
continue;
} else {
var x = cljs.core.first(seq__53170__$1);
var seq__53171_53211 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- scale_y),scale_y));
var chunk__53172_53212 = null;
var count__53173_53213 = (0);
var i__53174_53214 = (0);
while(true){
if((i__53174_53214 < count__53173_53213)){
var y_53215 = chunk__53172_53212.cljs$core$IIndexed$_nth$arity$2(null,i__53174_53214);
quil.core.ellipse((x * w),(y_53215 * h),r,r);


var G__53216 = seq__53171_53211;
var G__53217 = chunk__53172_53212;
var G__53218 = count__53173_53213;
var G__53219 = (i__53174_53214 + (1));
seq__53171_53211 = G__53216;
chunk__53172_53212 = G__53217;
count__53173_53213 = G__53218;
i__53174_53214 = G__53219;
continue;
} else {
var temp__5735__auto___53220__$1 = cljs.core.seq(seq__53171_53211);
if(temp__5735__auto___53220__$1){
var seq__53171_53221__$1 = temp__5735__auto___53220__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53171_53221__$1)){
var c__4550__auto___53222 = cljs.core.chunk_first(seq__53171_53221__$1);
var G__53223 = cljs.core.chunk_rest(seq__53171_53221__$1);
var G__53224 = c__4550__auto___53222;
var G__53225 = cljs.core.count(c__4550__auto___53222);
var G__53226 = (0);
seq__53171_53211 = G__53223;
chunk__53172_53212 = G__53224;
count__53173_53213 = G__53225;
i__53174_53214 = G__53226;
continue;
} else {
var y_53227 = cljs.core.first(seq__53171_53221__$1);
quil.core.ellipse((x * w),(y_53227 * h),r,r);


var G__53228 = cljs.core.next(seq__53171_53221__$1);
var G__53229 = null;
var G__53230 = (0);
var G__53231 = (0);
seq__53171_53211 = G__53228;
chunk__53172_53212 = G__53229;
count__53173_53213 = G__53230;
i__53174_53214 = G__53231;
continue;
}
} else {
}
}
break;
}

var G__53232 = cljs.core.next(seq__53170__$1);
var G__53233 = null;
var G__53234 = (0);
var G__53235 = (0);
seq__53170 = G__53232;
chunk__53175 = G__53233;
count__53176 = G__53234;
i__53177 = G__53235;
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
var bl = cljs.core.cst$kw$back_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
var fl = cljs.core.cst$kw$front_DASH_lattice.cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

var tr__31992__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__31992__auto__);

negative_space_quil.core.draw_lattice(bl);

var tr__31998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix();

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rotate,tr__31998__auto__);

return negative_space_quil.core.draw_lattice(fl);
}finally {quil.core.pop_matrix();
}}finally {quil.core.pop_matrix();
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200206-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__53236__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__53236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53237__i = 0, G__53237__a = new Array(arguments.length -  0);
while (G__53237__i < G__53237__a.length) {G__53237__a[G__53237__i] = arguments[G__53237__i + 0]; ++G__53237__i;}
  args = new cljs.core.IndexedSeq(G__53237__a,0,null);
} 
return G__53236__delegate.call(this,args);};
G__53236.cljs$lang$maxFixedArity = 0;
G__53236.cljs$lang$applyTo = (function (arglist__53238){
var args = cljs.core.seq(arglist__53238);
return G__53236__delegate(args);
});
G__53236.cljs$core$IFn$_invoke$arity$variadic = G__53236__delegate;
return G__53236;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__53239__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__53239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53240__i = 0, G__53240__a = new Array(arguments.length -  0);
while (G__53240__i < G__53240__a.length) {G__53240__a[G__53240__i] = arguments[G__53240__i + 0]; ++G__53240__i;}
  args = new cljs.core.IndexedSeq(G__53240__a,0,null);
} 
return G__53239__delegate.call(this,args);};
G__53239.cljs$lang$maxFixedArity = 0;
G__53239.cljs$lang$applyTo = (function (arglist__53241){
var args = cljs.core.seq(arglist__53241);
return G__53239__delegate(args);
});
G__53239.cljs$core$IFn$_invoke$arity$variadic = G__53239__delegate;
return G__53239;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__53242__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__53242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53243__i = 0, G__53243__a = new Array(arguments.length -  0);
while (G__53243__i < G__53243__a.length) {G__53243__a[G__53243__i] = arguments[G__53243__i + 0]; ++G__53243__i;}
  args = new cljs.core.IndexedSeq(G__53243__a,0,null);
} 
return G__53242__delegate.call(this,args);};
G__53242.cljs$lang$maxFixedArity = 0;
G__53242.cljs$lang$applyTo = (function (arglist__53244){
var args = cljs.core.seq(arglist__53244);
return G__53242__delegate(args);
});
G__53242.cljs$core$IFn$_invoke$arity$variadic = G__53242__delegate;
return G__53242;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__31092__31093__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__31092__31093__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200206-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
