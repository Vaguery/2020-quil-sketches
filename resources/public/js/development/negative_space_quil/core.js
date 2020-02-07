// Compiled by ClojureScript 1.10.520 {}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate.call(null,(10));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.blend_mode.call(null,new cljs.core.Keyword(null,"blend","blend",249565561));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"height","height",1025178622),(6),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(44),(100),(255),(130)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(3),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(7),new cljs.core.Keyword(null,"height","height",1025178622),(7),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(128),(230),(200),(130)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(3),new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(8),new cljs.core.Keyword(null,"height","height",1025178622),(8),new cljs.core.Keyword(null,"color","color",1011675173),quil.core.color.call(null,(214),(200),(200),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(3),new cljs.core.Keyword(null,"angle","angle",1622094254),(180),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-lattice","y-lattice",-975314280),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__29732_SHARP_){
return (0.001 + p1__29732_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m-lattice","m-lattice",-2073754230),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__29733_SHARP_){
return (-0.002 + p1__29733_SHARP_);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-lattice","c-lattice",-1317349490),new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__29734_SHARP_){
return (0.003 + p1__29734_SHARP_);
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

var tr__26878__auto__ = offset;
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto__);

var tr__26884__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [angle], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__26884__auto__);

var seq__29735 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__29740 = null;
var count__29741 = (0);
var i__29742 = (0);
while(true){
if((i__29742 < count__29741)){
var x = cljs.core._nth.call(null,chunk__29740,i__29742);
var seq__29743_29747 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__29744_29748 = null;
var count__29745_29749 = (0);
var i__29746_29750 = (0);
while(true){
if((i__29746_29750 < count__29745_29749)){
var y_29751 = cljs.core._nth.call(null,chunk__29744_29748,i__29746_29750);
quil.core.ellipse.call(null,(x * w),(y_29751 * h),((x / (10)) + r),((x / (10)) + r));


var G__29752 = seq__29743_29747;
var G__29753 = chunk__29744_29748;
var G__29754 = count__29745_29749;
var G__29755 = (i__29746_29750 + (1));
seq__29743_29747 = G__29752;
chunk__29744_29748 = G__29753;
count__29745_29749 = G__29754;
i__29746_29750 = G__29755;
continue;
} else {
var temp__5735__auto___29756 = cljs.core.seq.call(null,seq__29743_29747);
if(temp__5735__auto___29756){
var seq__29743_29757__$1 = temp__5735__auto___29756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29743_29757__$1)){
var c__4550__auto___29758 = cljs.core.chunk_first.call(null,seq__29743_29757__$1);
var G__29759 = cljs.core.chunk_rest.call(null,seq__29743_29757__$1);
var G__29760 = c__4550__auto___29758;
var G__29761 = cljs.core.count.call(null,c__4550__auto___29758);
var G__29762 = (0);
seq__29743_29747 = G__29759;
chunk__29744_29748 = G__29760;
count__29745_29749 = G__29761;
i__29746_29750 = G__29762;
continue;
} else {
var y_29763 = cljs.core.first.call(null,seq__29743_29757__$1);
quil.core.ellipse.call(null,(x * w),(y_29763 * h),((x / (10)) + r),((x / (10)) + r));


var G__29764 = cljs.core.next.call(null,seq__29743_29757__$1);
var G__29765 = null;
var G__29766 = (0);
var G__29767 = (0);
seq__29743_29747 = G__29764;
chunk__29744_29748 = G__29765;
count__29745_29749 = G__29766;
i__29746_29750 = G__29767;
continue;
}
} else {
}
}
break;
}

var G__29768 = seq__29735;
var G__29769 = chunk__29740;
var G__29770 = count__29741;
var G__29771 = (i__29742 + (1));
seq__29735 = G__29768;
chunk__29740 = G__29769;
count__29741 = G__29770;
i__29742 = G__29771;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29735);
if(temp__5735__auto__){
var seq__29735__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29735__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29735__$1);
var G__29772 = cljs.core.chunk_rest.call(null,seq__29735__$1);
var G__29773 = c__4550__auto__;
var G__29774 = cljs.core.count.call(null,c__4550__auto__);
var G__29775 = (0);
seq__29735 = G__29772;
chunk__29740 = G__29773;
count__29741 = G__29774;
i__29742 = G__29775;
continue;
} else {
var x = cljs.core.first.call(null,seq__29735__$1);
var seq__29736_29776 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__29737_29777 = null;
var count__29738_29778 = (0);
var i__29739_29779 = (0);
while(true){
if((i__29739_29779 < count__29738_29778)){
var y_29780 = cljs.core._nth.call(null,chunk__29737_29777,i__29739_29779);
quil.core.ellipse.call(null,(x * w),(y_29780 * h),((x / (10)) + r),((x / (10)) + r));


var G__29781 = seq__29736_29776;
var G__29782 = chunk__29737_29777;
var G__29783 = count__29738_29778;
var G__29784 = (i__29739_29779 + (1));
seq__29736_29776 = G__29781;
chunk__29737_29777 = G__29782;
count__29738_29778 = G__29783;
i__29739_29779 = G__29784;
continue;
} else {
var temp__5735__auto___29785__$1 = cljs.core.seq.call(null,seq__29736_29776);
if(temp__5735__auto___29785__$1){
var seq__29736_29786__$1 = temp__5735__auto___29785__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29736_29786__$1)){
var c__4550__auto___29787 = cljs.core.chunk_first.call(null,seq__29736_29786__$1);
var G__29788 = cljs.core.chunk_rest.call(null,seq__29736_29786__$1);
var G__29789 = c__4550__auto___29787;
var G__29790 = cljs.core.count.call(null,c__4550__auto___29787);
var G__29791 = (0);
seq__29736_29776 = G__29788;
chunk__29737_29777 = G__29789;
count__29738_29778 = G__29790;
i__29739_29779 = G__29791;
continue;
} else {
var y_29792 = cljs.core.first.call(null,seq__29736_29786__$1);
quil.core.ellipse.call(null,(x * w),(y_29792 * h),((x / (10)) + r),((x / (10)) + r));


var G__29793 = cljs.core.next.call(null,seq__29736_29786__$1);
var G__29794 = null;
var G__29795 = (0);
var G__29796 = (0);
seq__29736_29776 = G__29793;
chunk__29737_29777 = G__29794;
count__29738_29778 = G__29795;
i__29739_29779 = G__29796;
continue;
}
} else {
}
}
break;
}

var G__29797 = cljs.core.next.call(null,seq__29735__$1);
var G__29798 = null;
var G__29799 = (0);
var G__29800 = (0);
seq__29735 = G__29797;
chunk__29740 = G__29798;
count__29741 = G__29799;
i__29742 = G__29800;
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

var tr__26878__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto__);

negative_space_quil.core.draw_lattice.call(null,magenta);

negative_space_quil.core.draw_lattice.call(null,cyan);

return negative_space_quil.core.draw_lattice.call(null,yellow);
}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200207-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__29801__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__29801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29802__i = 0, G__29802__a = new Array(arguments.length -  0);
while (G__29802__i < G__29802__a.length) {G__29802__a[G__29802__i] = arguments[G__29802__i + 0]; ++G__29802__i;}
  args = new cljs.core.IndexedSeq(G__29802__a,0,null);
} 
return G__29801__delegate.call(this,args);};
G__29801.cljs$lang$maxFixedArity = 0;
G__29801.cljs$lang$applyTo = (function (arglist__29803){
var args = cljs.core.seq(arglist__29803);
return G__29801__delegate(args);
});
G__29801.cljs$core$IFn$_invoke$arity$variadic = G__29801__delegate;
return G__29801;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__29804__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__29804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29805__i = 0, G__29805__a = new Array(arguments.length -  0);
while (G__29805__i < G__29805__a.length) {G__29805__a[G__29805__i] = arguments[G__29805__i + 0]; ++G__29805__i;}
  args = new cljs.core.IndexedSeq(G__29805__a,0,null);
} 
return G__29804__delegate.call(this,args);};
G__29804.cljs$lang$maxFixedArity = 0;
G__29804.cljs$lang$applyTo = (function (arglist__29806){
var args = cljs.core.seq(arglist__29806);
return G__29804__delegate(args);
});
G__29804.cljs$core$IFn$_invoke$arity$variadic = G__29804__delegate;
return G__29804;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__29807__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__29807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29808__i = 0, G__29808__a = new Array(arguments.length -  0);
while (G__29808__i < G__29808__a.length) {G__29808__a[G__29808__i] = arguments[G__29808__i + 0]; ++G__29808__i;}
  args = new cljs.core.IndexedSeq(G__29808__a,0,null);
} 
return G__29807__delegate.call(this,args);};
G__29807.cljs$lang$maxFixedArity = 0;
G__29807.cljs$lang$applyTo = (function (arglist__29809){
var args = cljs.core.seq(arglist__29809);
return G__29807__delegate(args);
});
G__29807.cljs$core$IFn$_invoke$arity$variadic = G__29807__delegate;
return G__29807;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26472__26473__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26472__26473__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200207-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581098449516
