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
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254)], null),(function (p1__21876_SHARP_){
return (1.00025 * p1__21876_SHARP_);
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

var seq__21877 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_x),scale_x));
var chunk__21882 = null;
var count__21883 = (0);
var i__21884 = (0);
while(true){
if((i__21884 < count__21883)){
var x = cljs.core._nth.call(null,chunk__21882,i__21884);
var seq__21885_21889 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__21886_21890 = null;
var count__21887_21891 = (0);
var i__21888_21892 = (0);
while(true){
if((i__21888_21892 < count__21887_21891)){
var y_21893 = cljs.core._nth.call(null,chunk__21886_21890,i__21888_21892);
quil.core.ellipse.call(null,(x * w),(y_21893 * h),r,r);


var G__21894 = seq__21885_21889;
var G__21895 = chunk__21886_21890;
var G__21896 = count__21887_21891;
var G__21897 = (i__21888_21892 + (1));
seq__21885_21889 = G__21894;
chunk__21886_21890 = G__21895;
count__21887_21891 = G__21896;
i__21888_21892 = G__21897;
continue;
} else {
var temp__5735__auto___21898 = cljs.core.seq.call(null,seq__21885_21889);
if(temp__5735__auto___21898){
var seq__21885_21899__$1 = temp__5735__auto___21898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21885_21899__$1)){
var c__4550__auto___21900 = cljs.core.chunk_first.call(null,seq__21885_21899__$1);
var G__21901 = cljs.core.chunk_rest.call(null,seq__21885_21899__$1);
var G__21902 = c__4550__auto___21900;
var G__21903 = cljs.core.count.call(null,c__4550__auto___21900);
var G__21904 = (0);
seq__21885_21889 = G__21901;
chunk__21886_21890 = G__21902;
count__21887_21891 = G__21903;
i__21888_21892 = G__21904;
continue;
} else {
var y_21905 = cljs.core.first.call(null,seq__21885_21899__$1);
quil.core.ellipse.call(null,(x * w),(y_21905 * h),r,r);


var G__21906 = cljs.core.next.call(null,seq__21885_21899__$1);
var G__21907 = null;
var G__21908 = (0);
var G__21909 = (0);
seq__21885_21889 = G__21906;
chunk__21886_21890 = G__21907;
count__21887_21891 = G__21908;
i__21888_21892 = G__21909;
continue;
}
} else {
}
}
break;
}

var G__21910 = seq__21877;
var G__21911 = chunk__21882;
var G__21912 = count__21883;
var G__21913 = (i__21884 + (1));
seq__21877 = G__21910;
chunk__21882 = G__21911;
count__21883 = G__21912;
i__21884 = G__21913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21877);
if(temp__5735__auto__){
var seq__21877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21877__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21877__$1);
var G__21914 = cljs.core.chunk_rest.call(null,seq__21877__$1);
var G__21915 = c__4550__auto__;
var G__21916 = cljs.core.count.call(null,c__4550__auto__);
var G__21917 = (0);
seq__21877 = G__21914;
chunk__21882 = G__21915;
count__21883 = G__21916;
i__21884 = G__21917;
continue;
} else {
var x = cljs.core.first.call(null,seq__21877__$1);
var seq__21878_21918 = cljs.core.seq.call(null,cljs.core.range.call(null,(- scale_y),scale_y));
var chunk__21879_21919 = null;
var count__21880_21920 = (0);
var i__21881_21921 = (0);
while(true){
if((i__21881_21921 < count__21880_21920)){
var y_21922 = cljs.core._nth.call(null,chunk__21879_21919,i__21881_21921);
quil.core.ellipse.call(null,(x * w),(y_21922 * h),r,r);


var G__21923 = seq__21878_21918;
var G__21924 = chunk__21879_21919;
var G__21925 = count__21880_21920;
var G__21926 = (i__21881_21921 + (1));
seq__21878_21918 = G__21923;
chunk__21879_21919 = G__21924;
count__21880_21920 = G__21925;
i__21881_21921 = G__21926;
continue;
} else {
var temp__5735__auto___21927__$1 = cljs.core.seq.call(null,seq__21878_21918);
if(temp__5735__auto___21927__$1){
var seq__21878_21928__$1 = temp__5735__auto___21927__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21878_21928__$1)){
var c__4550__auto___21929 = cljs.core.chunk_first.call(null,seq__21878_21928__$1);
var G__21930 = cljs.core.chunk_rest.call(null,seq__21878_21928__$1);
var G__21931 = c__4550__auto___21929;
var G__21932 = cljs.core.count.call(null,c__4550__auto___21929);
var G__21933 = (0);
seq__21878_21918 = G__21930;
chunk__21879_21919 = G__21931;
count__21880_21920 = G__21932;
i__21881_21921 = G__21933;
continue;
} else {
var y_21934 = cljs.core.first.call(null,seq__21878_21928__$1);
quil.core.ellipse.call(null,(x * w),(y_21934 * h),r,r);


var G__21935 = cljs.core.next.call(null,seq__21878_21928__$1);
var G__21936 = null;
var G__21937 = (0);
var G__21938 = (0);
seq__21878_21918 = G__21935;
chunk__21879_21919 = G__21936;
count__21880_21920 = G__21937;
i__21881_21921 = G__21938;
continue;
}
} else {
}
}
break;
}

var G__21939 = cljs.core.next.call(null,seq__21877__$1);
var G__21940 = null;
var G__21941 = (0);
var G__21942 = (0);
seq__21877 = G__21939;
chunk__21882 = G__21940;
count__21883 = G__21941;
i__21884 = G__21942;
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

var tr__21771__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21771__auto__);

negative_space_quil.core.draw_lattice.call(null,bl);

var tr__21777__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state)], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__21777__auto__);

return negative_space_quil.core.draw_lattice.call(null,fl);
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"negative-space-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__21943__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__21943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21944__i = 0, G__21944__a = new Array(arguments.length -  0);
while (G__21944__i < G__21944__a.length) {G__21944__a[G__21944__i] = arguments[G__21944__i + 0]; ++G__21944__i;}
  args = new cljs.core.IndexedSeq(G__21944__a,0,null);
} 
return G__21943__delegate.call(this,args);};
G__21943.cljs$lang$maxFixedArity = 0;
G__21943.cljs$lang$applyTo = (function (arglist__21945){
var args = cljs.core.seq(arglist__21945);
return G__21943__delegate(args);
});
G__21943.cljs$core$IFn$_invoke$arity$variadic = G__21943__delegate;
return G__21943;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__21946__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__21946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21947__i = 0, G__21947__a = new Array(arguments.length -  0);
while (G__21947__i < G__21947__a.length) {G__21947__a[G__21947__i] = arguments[G__21947__i + 0]; ++G__21947__i;}
  args = new cljs.core.IndexedSeq(G__21947__a,0,null);
} 
return G__21946__delegate.call(this,args);};
G__21946.cljs$lang$maxFixedArity = 0;
G__21946.cljs$lang$applyTo = (function (arglist__21948){
var args = cljs.core.seq(arglist__21948);
return G__21946__delegate(args);
});
G__21946.cljs$core$IFn$_invoke$arity$variadic = G__21946__delegate;
return G__21946;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__21949__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__21949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21950__i = 0, G__21950__a = new Array(arguments.length -  0);
while (G__21950__i < G__21950__a.length) {G__21950__a[G__21950__i] = arguments[G__21950__i + 0]; ++G__21950__i;}
  args = new cljs.core.IndexedSeq(G__21950__a,0,null);
} 
return G__21949__delegate.call(this,args);};
G__21949.cljs$lang$maxFixedArity = 0;
G__21949.cljs$lang$applyTo = (function (arglist__21951){
var args = cljs.core.seq(arglist__21951);
return G__21949__delegate(args);
});
G__21949.cljs$core$IFn$_invoke$arity$variadic = G__21949__delegate;
return G__21949;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"negative-space-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581009599487
