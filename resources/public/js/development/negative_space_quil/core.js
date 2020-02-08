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
var gr__22255__auto___50493 = gr;
var _STAR_graphics_STAR__orig_val__50479_50494 = quil.core._STAR_graphics_STAR_;
var _STAR_graphics_STAR__temp_val__50480_50495 = gr__22255__auto___50493;
quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__temp_val__50480_50495;

try{quil.core.begin_draw.call(null,gr__22255__auto___50493);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,c);

var seq__50481_50496 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__50486_50497 = null;
var count__50487_50498 = (0);
var i__50488_50499 = (0);
while(true){
if((i__50488_50499 < count__50487_50498)){
var x_50500 = cljs.core._nth.call(null,chunk__50486_50497,i__50488_50499);
var seq__50489_50501 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__50490_50502 = null;
var count__50491_50503 = (0);
var i__50492_50504 = (0);
while(true){
if((i__50492_50504 < count__50491_50503)){
var y_50505 = cljs.core._nth.call(null,chunk__50490_50502,i__50492_50504);
quil.core.ellipse.call(null,(((-1) + (x_50500 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_50505 * h)) + cljs.core.rand.call(null,(2))),((x_50500 / (7)) + r),((x_50500 / (7)) + r));


var G__50506 = seq__50489_50501;
var G__50507 = chunk__50490_50502;
var G__50508 = count__50491_50503;
var G__50509 = (i__50492_50504 + (1));
seq__50489_50501 = G__50506;
chunk__50490_50502 = G__50507;
count__50491_50503 = G__50508;
i__50492_50504 = G__50509;
continue;
} else {
var temp__5735__auto___50510 = cljs.core.seq.call(null,seq__50489_50501);
if(temp__5735__auto___50510){
var seq__50489_50511__$1 = temp__5735__auto___50510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50489_50511__$1)){
var c__4550__auto___50512 = cljs.core.chunk_first.call(null,seq__50489_50511__$1);
var G__50513 = cljs.core.chunk_rest.call(null,seq__50489_50511__$1);
var G__50514 = c__4550__auto___50512;
var G__50515 = cljs.core.count.call(null,c__4550__auto___50512);
var G__50516 = (0);
seq__50489_50501 = G__50513;
chunk__50490_50502 = G__50514;
count__50491_50503 = G__50515;
i__50492_50504 = G__50516;
continue;
} else {
var y_50517 = cljs.core.first.call(null,seq__50489_50511__$1);
quil.core.ellipse.call(null,(((-1) + (x_50500 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_50517 * h)) + cljs.core.rand.call(null,(2))),((x_50500 / (7)) + r),((x_50500 / (7)) + r));


var G__50518 = cljs.core.next.call(null,seq__50489_50511__$1);
var G__50519 = null;
var G__50520 = (0);
var G__50521 = (0);
seq__50489_50501 = G__50518;
chunk__50490_50502 = G__50519;
count__50491_50503 = G__50520;
i__50492_50504 = G__50521;
continue;
}
} else {
}
}
break;
}

var G__50522 = seq__50481_50496;
var G__50523 = chunk__50486_50497;
var G__50524 = count__50487_50498;
var G__50525 = (i__50488_50499 + (1));
seq__50481_50496 = G__50522;
chunk__50486_50497 = G__50523;
count__50487_50498 = G__50524;
i__50488_50499 = G__50525;
continue;
} else {
var temp__5735__auto___50526 = cljs.core.seq.call(null,seq__50481_50496);
if(temp__5735__auto___50526){
var seq__50481_50527__$1 = temp__5735__auto___50526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50481_50527__$1)){
var c__4550__auto___50528 = cljs.core.chunk_first.call(null,seq__50481_50527__$1);
var G__50529 = cljs.core.chunk_rest.call(null,seq__50481_50527__$1);
var G__50530 = c__4550__auto___50528;
var G__50531 = cljs.core.count.call(null,c__4550__auto___50528);
var G__50532 = (0);
seq__50481_50496 = G__50529;
chunk__50486_50497 = G__50530;
count__50487_50498 = G__50531;
i__50488_50499 = G__50532;
continue;
} else {
var x_50533 = cljs.core.first.call(null,seq__50481_50527__$1);
var seq__50482_50534 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__50483_50535 = null;
var count__50484_50536 = (0);
var i__50485_50537 = (0);
while(true){
if((i__50485_50537 < count__50484_50536)){
var y_50538 = cljs.core._nth.call(null,chunk__50483_50535,i__50485_50537);
quil.core.ellipse.call(null,(((-1) + (x_50533 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_50538 * h)) + cljs.core.rand.call(null,(2))),((x_50533 / (7)) + r),((x_50533 / (7)) + r));


var G__50539 = seq__50482_50534;
var G__50540 = chunk__50483_50535;
var G__50541 = count__50484_50536;
var G__50542 = (i__50485_50537 + (1));
seq__50482_50534 = G__50539;
chunk__50483_50535 = G__50540;
count__50484_50536 = G__50541;
i__50485_50537 = G__50542;
continue;
} else {
var temp__5735__auto___50543__$1 = cljs.core.seq.call(null,seq__50482_50534);
if(temp__5735__auto___50543__$1){
var seq__50482_50544__$1 = temp__5735__auto___50543__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50482_50544__$1)){
var c__4550__auto___50545 = cljs.core.chunk_first.call(null,seq__50482_50544__$1);
var G__50546 = cljs.core.chunk_rest.call(null,seq__50482_50544__$1);
var G__50547 = c__4550__auto___50545;
var G__50548 = cljs.core.count.call(null,c__4550__auto___50545);
var G__50549 = (0);
seq__50482_50534 = G__50546;
chunk__50483_50535 = G__50547;
count__50484_50536 = G__50548;
i__50485_50537 = G__50549;
continue;
} else {
var y_50550 = cljs.core.first.call(null,seq__50482_50544__$1);
quil.core.ellipse.call(null,(((-1) + (x_50533 * w)) + cljs.core.rand.call(null,(2))),(((-1) + (y_50550 * h)) + cljs.core.rand.call(null,(2))),((x_50533 / (7)) + r),((x_50533 / (7)) + r));


var G__50551 = cljs.core.next.call(null,seq__50482_50544__$1);
var G__50552 = null;
var G__50553 = (0);
var G__50554 = (0);
seq__50482_50534 = G__50551;
chunk__50483_50535 = G__50552;
count__50484_50536 = G__50553;
i__50485_50537 = G__50554;
continue;
}
} else {
}
}
break;
}

var G__50555 = cljs.core.next.call(null,seq__50481_50527__$1);
var G__50556 = null;
var G__50557 = (0);
var G__50558 = (0);
seq__50481_50496 = G__50555;
chunk__50486_50497 = G__50556;
count__50487_50498 = G__50557;
i__50488_50499 = G__50558;
continue;
}
} else {
}
}
break;
}

quil.core.end_draw.call(null,gr__22255__auto___50493);
}finally {quil.core._STAR_graphics_STAR_ = _STAR_graphics_STAR__orig_val__50479_50494;
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

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.m_def.call(null),quil.core.width.call(null)),new cljs.core.Keyword(null,"m-angle","m-angle",1039906396),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.c_def.call(null),quil.core.width.call(null)),new cljs.core.Keyword(null,"c-angle","c-angle",-384717710),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),negative_space_quil.core.create_lattice.call(null,negative_space_quil.core.y_def.call(null),quil.core.width.call(null)),new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950),cljs.core.rand_int.call(null,(100))], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"m-angle","m-angle",1039906396),(function (p1__50559_SHARP_){
return (p1__50559_SHARP_ + (cljs.core.rand.call(null) / (1000)));
})),new cljs.core.Keyword(null,"c-angle","c-angle",-384717710),(function (p1__50560_SHARP_){
return (p1__50560_SHARP_ + (cljs.core.rand.call(null) / (-1000)));
})),new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950),(function (p1__50561_SHARP_){
return (p1__50561_SHARP_ + (cljs.core.rand.call(null) / (1000)));
}));
});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var magenta = new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230).cljs$core$IFn$_invoke$arity$1(state);
var cyan = new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490).cljs$core$IFn$_invoke$arity$1(state);
var yellow = new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(255));

var tr__22241__auto___50562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22241__auto___50562);

var tr__22247__auto___50563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m-angle","m-angle",1039906396).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__22247__auto___50563);

quil.core.image.call(null,magenta,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}
var tr__22241__auto___50564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22241__auto___50564);

var tr__22247__auto___50565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-angle","c-angle",-384717710).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__22247__auto___50565);

quil.core.image.call(null,cyan,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}
var tr__22241__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22241__auto__);

var tr__22247__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-angle","y-angle",-1925773950).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__22247__auto__);

return quil.core.image.call(null,yellow,(0),(0));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200208-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__50566__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__50566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50567__i = 0, G__50567__a = new Array(arguments.length -  0);
while (G__50567__i < G__50567__a.length) {G__50567__a[G__50567__i] = arguments[G__50567__i + 0]; ++G__50567__i;}
  args = new cljs.core.IndexedSeq(G__50567__a,0,null);
} 
return G__50566__delegate.call(this,args);};
G__50566.cljs$lang$maxFixedArity = 0;
G__50566.cljs$lang$applyTo = (function (arglist__50568){
var args = cljs.core.seq(arglist__50568);
return G__50566__delegate(args);
});
G__50566.cljs$core$IFn$_invoke$arity$variadic = G__50566__delegate;
return G__50566;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__50569__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__50569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50570__i = 0, G__50570__a = new Array(arguments.length -  0);
while (G__50570__i < G__50570__a.length) {G__50570__a[G__50570__i] = arguments[G__50570__i + 0]; ++G__50570__i;}
  args = new cljs.core.IndexedSeq(G__50570__a,0,null);
} 
return G__50569__delegate.call(this,args);};
G__50569.cljs$lang$maxFixedArity = 0;
G__50569.cljs$lang$applyTo = (function (arglist__50571){
var args = cljs.core.seq(arglist__50571);
return G__50569__delegate(args);
});
G__50569.cljs$core$IFn$_invoke$arity$variadic = G__50569__delegate;
return G__50569;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_2d], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__50572__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__50572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50573__i = 0, G__50573__a = new Array(arguments.length -  0);
while (G__50573__i < G__50573__a.length) {G__50573__a[G__50573__i] = arguments[G__50573__i + 0]; ++G__50573__i;}
  args = new cljs.core.IndexedSeq(G__50573__a,0,null);
} 
return G__50572__delegate.call(this,args);};
G__50572.cljs$lang$maxFixedArity = 0;
G__50572.cljs$lang$applyTo = (function (arglist__50574){
var args = cljs.core.seq(arglist__50574);
return G__50572__delegate(args);
});
G__50572.cljs$core$IFn$_invoke$arity$variadic = G__50572__delegate;
return G__50572;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20937__20938__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20937__20938__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200208-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581185565304
