// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47040_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47040_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47041 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47042 = null;
var count__47043 = (0);
var i__47044 = (0);
while(true){
if((i__47044 < count__47043)){
var n = cljs.core._nth.call(null,chunk__47042,i__47044);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47045 = seq__47041;
var G__47046 = chunk__47042;
var G__47047 = count__47043;
var G__47048 = (i__47044 + (1));
seq__47041 = G__47045;
chunk__47042 = G__47046;
count__47043 = G__47047;
i__47044 = G__47048;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47041);
if(temp__5735__auto__){
var seq__47041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47041__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47041__$1);
var G__47049 = cljs.core.chunk_rest.call(null,seq__47041__$1);
var G__47050 = c__4550__auto__;
var G__47051 = cljs.core.count.call(null,c__4550__auto__);
var G__47052 = (0);
seq__47041 = G__47049;
chunk__47042 = G__47050;
count__47043 = G__47051;
i__47044 = G__47052;
continue;
} else {
var n = cljs.core.first.call(null,seq__47041__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47053 = cljs.core.next.call(null,seq__47041__$1);
var G__47054 = null;
var G__47055 = (0);
var G__47056 = (0);
seq__47041 = G__47053;
chunk__47042 = G__47054;
count__47043 = G__47055;
i__47044 = G__47056;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47057){
var vec__47058 = p__47057;
var _ = cljs.core.nth.call(null,vec__47058,(0),null);
var v = cljs.core.nth.call(null,vec__47058,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__47061){
var vec__47062 = p__47061;
var k = cljs.core.nth.call(null,vec__47062,(0),null);
var v = cljs.core.nth.call(null,vec__47062,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47074_47082 = cljs.core.seq.call(null,deps);
var chunk__47075_47083 = null;
var count__47076_47084 = (0);
var i__47077_47085 = (0);
while(true){
if((i__47077_47085 < count__47076_47084)){
var dep_47086 = cljs.core._nth.call(null,chunk__47075_47083,i__47077_47085);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_47086;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47086));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47086,(depth + (1)),state);
} else {
}


var G__47087 = seq__47074_47082;
var G__47088 = chunk__47075_47083;
var G__47089 = count__47076_47084;
var G__47090 = (i__47077_47085 + (1));
seq__47074_47082 = G__47087;
chunk__47075_47083 = G__47088;
count__47076_47084 = G__47089;
i__47077_47085 = G__47090;
continue;
} else {
var temp__5735__auto___47091 = cljs.core.seq.call(null,seq__47074_47082);
if(temp__5735__auto___47091){
var seq__47074_47092__$1 = temp__5735__auto___47091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47074_47092__$1)){
var c__4550__auto___47093 = cljs.core.chunk_first.call(null,seq__47074_47092__$1);
var G__47094 = cljs.core.chunk_rest.call(null,seq__47074_47092__$1);
var G__47095 = c__4550__auto___47093;
var G__47096 = cljs.core.count.call(null,c__4550__auto___47093);
var G__47097 = (0);
seq__47074_47082 = G__47094;
chunk__47075_47083 = G__47095;
count__47076_47084 = G__47096;
i__47077_47085 = G__47097;
continue;
} else {
var dep_47098 = cljs.core.first.call(null,seq__47074_47092__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_47098;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47098));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47098,(depth + (1)),state);
} else {
}


var G__47099 = cljs.core.next.call(null,seq__47074_47092__$1);
var G__47100 = null;
var G__47101 = (0);
var G__47102 = (0);
seq__47074_47082 = G__47099;
chunk__47075_47083 = G__47100;
count__47076_47084 = G__47101;
i__47077_47085 = G__47102;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47078){
var vec__47079 = p__47078;
var seq__47080 = cljs.core.seq.call(null,vec__47079);
var first__47081 = cljs.core.first.call(null,seq__47080);
var seq__47080__$1 = cljs.core.next.call(null,seq__47080);
var x = first__47081;
var xs = seq__47080__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47079,seq__47080,first__47081,seq__47080__$1,x,xs,get_deps__$1){
return (function (p1__47065_SHARP_){
return clojure.set.difference.call(null,p1__47065_SHARP_,x);
});})(vec__47079,seq__47080,first__47081,seq__47080__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47103 = cljs.core.seq.call(null,provides);
var chunk__47104 = null;
var count__47105 = (0);
var i__47106 = (0);
while(true){
if((i__47106 < count__47105)){
var prov = cljs.core._nth.call(null,chunk__47104,i__47106);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47115_47123 = cljs.core.seq.call(null,requires);
var chunk__47116_47124 = null;
var count__47117_47125 = (0);
var i__47118_47126 = (0);
while(true){
if((i__47118_47126 < count__47117_47125)){
var req_47127 = cljs.core._nth.call(null,chunk__47116_47124,i__47118_47126);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47127,prov);


var G__47128 = seq__47115_47123;
var G__47129 = chunk__47116_47124;
var G__47130 = count__47117_47125;
var G__47131 = (i__47118_47126 + (1));
seq__47115_47123 = G__47128;
chunk__47116_47124 = G__47129;
count__47117_47125 = G__47130;
i__47118_47126 = G__47131;
continue;
} else {
var temp__5735__auto___47132 = cljs.core.seq.call(null,seq__47115_47123);
if(temp__5735__auto___47132){
var seq__47115_47133__$1 = temp__5735__auto___47132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47115_47133__$1)){
var c__4550__auto___47134 = cljs.core.chunk_first.call(null,seq__47115_47133__$1);
var G__47135 = cljs.core.chunk_rest.call(null,seq__47115_47133__$1);
var G__47136 = c__4550__auto___47134;
var G__47137 = cljs.core.count.call(null,c__4550__auto___47134);
var G__47138 = (0);
seq__47115_47123 = G__47135;
chunk__47116_47124 = G__47136;
count__47117_47125 = G__47137;
i__47118_47126 = G__47138;
continue;
} else {
var req_47139 = cljs.core.first.call(null,seq__47115_47133__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47139,prov);


var G__47140 = cljs.core.next.call(null,seq__47115_47133__$1);
var G__47141 = null;
var G__47142 = (0);
var G__47143 = (0);
seq__47115_47123 = G__47140;
chunk__47116_47124 = G__47141;
count__47117_47125 = G__47142;
i__47118_47126 = G__47143;
continue;
}
} else {
}
}
break;
}


var G__47144 = seq__47103;
var G__47145 = chunk__47104;
var G__47146 = count__47105;
var G__47147 = (i__47106 + (1));
seq__47103 = G__47144;
chunk__47104 = G__47145;
count__47105 = G__47146;
i__47106 = G__47147;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47103);
if(temp__5735__auto__){
var seq__47103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47103__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47103__$1);
var G__47148 = cljs.core.chunk_rest.call(null,seq__47103__$1);
var G__47149 = c__4550__auto__;
var G__47150 = cljs.core.count.call(null,c__4550__auto__);
var G__47151 = (0);
seq__47103 = G__47148;
chunk__47104 = G__47149;
count__47105 = G__47150;
i__47106 = G__47151;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47103__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47119_47152 = cljs.core.seq.call(null,requires);
var chunk__47120_47153 = null;
var count__47121_47154 = (0);
var i__47122_47155 = (0);
while(true){
if((i__47122_47155 < count__47121_47154)){
var req_47156 = cljs.core._nth.call(null,chunk__47120_47153,i__47122_47155);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47156,prov);


var G__47157 = seq__47119_47152;
var G__47158 = chunk__47120_47153;
var G__47159 = count__47121_47154;
var G__47160 = (i__47122_47155 + (1));
seq__47119_47152 = G__47157;
chunk__47120_47153 = G__47158;
count__47121_47154 = G__47159;
i__47122_47155 = G__47160;
continue;
} else {
var temp__5735__auto___47161__$1 = cljs.core.seq.call(null,seq__47119_47152);
if(temp__5735__auto___47161__$1){
var seq__47119_47162__$1 = temp__5735__auto___47161__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47119_47162__$1)){
var c__4550__auto___47163 = cljs.core.chunk_first.call(null,seq__47119_47162__$1);
var G__47164 = cljs.core.chunk_rest.call(null,seq__47119_47162__$1);
var G__47165 = c__4550__auto___47163;
var G__47166 = cljs.core.count.call(null,c__4550__auto___47163);
var G__47167 = (0);
seq__47119_47152 = G__47164;
chunk__47120_47153 = G__47165;
count__47121_47154 = G__47166;
i__47122_47155 = G__47167;
continue;
} else {
var req_47168 = cljs.core.first.call(null,seq__47119_47162__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47168,prov);


var G__47169 = cljs.core.next.call(null,seq__47119_47162__$1);
var G__47170 = null;
var G__47171 = (0);
var G__47172 = (0);
seq__47119_47152 = G__47169;
chunk__47120_47153 = G__47170;
count__47121_47154 = G__47171;
i__47122_47155 = G__47172;
continue;
}
} else {
}
}
break;
}


var G__47173 = cljs.core.next.call(null,seq__47103__$1);
var G__47174 = null;
var G__47175 = (0);
var G__47176 = (0);
seq__47103 = G__47173;
chunk__47104 = G__47174;
count__47105 = G__47175;
i__47106 = G__47176;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47177_47181 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47178_47182 = null;
var count__47179_47183 = (0);
var i__47180_47184 = (0);
while(true){
if((i__47180_47184 < count__47179_47183)){
var ns_47185 = cljs.core._nth.call(null,chunk__47178_47182,i__47180_47184);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47185);


var G__47186 = seq__47177_47181;
var G__47187 = chunk__47178_47182;
var G__47188 = count__47179_47183;
var G__47189 = (i__47180_47184 + (1));
seq__47177_47181 = G__47186;
chunk__47178_47182 = G__47187;
count__47179_47183 = G__47188;
i__47180_47184 = G__47189;
continue;
} else {
var temp__5735__auto___47190 = cljs.core.seq.call(null,seq__47177_47181);
if(temp__5735__auto___47190){
var seq__47177_47191__$1 = temp__5735__auto___47190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47177_47191__$1)){
var c__4550__auto___47192 = cljs.core.chunk_first.call(null,seq__47177_47191__$1);
var G__47193 = cljs.core.chunk_rest.call(null,seq__47177_47191__$1);
var G__47194 = c__4550__auto___47192;
var G__47195 = cljs.core.count.call(null,c__4550__auto___47192);
var G__47196 = (0);
seq__47177_47181 = G__47193;
chunk__47178_47182 = G__47194;
count__47179_47183 = G__47195;
i__47180_47184 = G__47196;
continue;
} else {
var ns_47197 = cljs.core.first.call(null,seq__47177_47191__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47197);


var G__47198 = cljs.core.next.call(null,seq__47177_47191__$1);
var G__47199 = null;
var G__47200 = (0);
var G__47201 = (0);
seq__47177_47181 = G__47198;
chunk__47178_47182 = G__47199;
count__47179_47183 = G__47200;
i__47180_47184 = G__47201;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47202__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47203__i = 0, G__47203__a = new Array(arguments.length -  0);
while (G__47203__i < G__47203__a.length) {G__47203__a[G__47203__i] = arguments[G__47203__i + 0]; ++G__47203__i;}
  args = new cljs.core.IndexedSeq(G__47203__a,0,null);
} 
return G__47202__delegate.call(this,args);};
G__47202.cljs$lang$maxFixedArity = 0;
G__47202.cljs$lang$applyTo = (function (arglist__47204){
var args = cljs.core.seq(arglist__47204);
return G__47202__delegate(args);
});
G__47202.cljs$core$IFn$_invoke$arity$variadic = G__47202__delegate;
return G__47202;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47205_SHARP_,p2__47206_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47205_SHARP_)),p2__47206_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47207_SHARP_,p2__47208_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47207_SHARP_),p2__47208_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47209 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47209.addCallback(((function (G__47209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47209))
);

G__47209.addErrback(((function (G__47209){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47209))
);

return G__47209;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47210){if((e47210 instanceof Error)){
var e = e47210;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47210;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47211){if((e47211 instanceof Error)){
var e = e47211;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47211;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47212 = cljs.core._EQ_;
var expr__47213 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47212.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47213))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47212.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47213))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47212.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47213))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47212,expr__47213){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47212,expr__47213))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47215,callback){
var map__47216 = p__47215;
var map__47216__$1 = (((((!((map__47216 == null))))?(((((map__47216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47216):map__47216);
var file_msg = map__47216__$1;
var request_url = cljs.core.get.call(null,map__47216__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47216,map__47216__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47216,map__47216__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__){
return (function (state_47254){
var state_val_47255 = (state_47254[(1)]);
if((state_val_47255 === (7))){
var inst_47250 = (state_47254[(2)]);
var state_47254__$1 = state_47254;
var statearr_47256_47282 = state_47254__$1;
(statearr_47256_47282[(2)] = inst_47250);

(statearr_47256_47282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (1))){
var state_47254__$1 = state_47254;
var statearr_47257_47283 = state_47254__$1;
(statearr_47257_47283[(2)] = null);

(statearr_47257_47283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (4))){
var inst_47220 = (state_47254[(7)]);
var inst_47220__$1 = (state_47254[(2)]);
var state_47254__$1 = (function (){var statearr_47258 = state_47254;
(statearr_47258[(7)] = inst_47220__$1);

return statearr_47258;
})();
if(cljs.core.truth_(inst_47220__$1)){
var statearr_47259_47284 = state_47254__$1;
(statearr_47259_47284[(1)] = (5));

} else {
var statearr_47260_47285 = state_47254__$1;
(statearr_47260_47285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (15))){
var inst_47235 = (state_47254[(8)]);
var inst_47233 = (state_47254[(9)]);
var inst_47237 = inst_47235.call(null,inst_47233);
var state_47254__$1 = state_47254;
var statearr_47261_47286 = state_47254__$1;
(statearr_47261_47286[(2)] = inst_47237);

(statearr_47261_47286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (13))){
var inst_47244 = (state_47254[(2)]);
var state_47254__$1 = state_47254;
var statearr_47262_47287 = state_47254__$1;
(statearr_47262_47287[(2)] = inst_47244);

(statearr_47262_47287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (6))){
var state_47254__$1 = state_47254;
var statearr_47263_47288 = state_47254__$1;
(statearr_47263_47288[(2)] = null);

(statearr_47263_47288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (17))){
var inst_47241 = (state_47254[(2)]);
var state_47254__$1 = state_47254;
var statearr_47264_47289 = state_47254__$1;
(statearr_47264_47289[(2)] = inst_47241);

(statearr_47264_47289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (3))){
var inst_47252 = (state_47254[(2)]);
var state_47254__$1 = state_47254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47254__$1,inst_47252);
} else {
if((state_val_47255 === (12))){
var state_47254__$1 = state_47254;
var statearr_47265_47290 = state_47254__$1;
(statearr_47265_47290[(2)] = null);

(statearr_47265_47290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (2))){
var state_47254__$1 = state_47254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47254__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47255 === (11))){
var inst_47225 = (state_47254[(10)]);
var inst_47231 = figwheel.client.file_reloading.blocking_load.call(null,inst_47225);
var state_47254__$1 = state_47254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47254__$1,(14),inst_47231);
} else {
if((state_val_47255 === (9))){
var inst_47225 = (state_47254[(10)]);
var state_47254__$1 = state_47254;
if(cljs.core.truth_(inst_47225)){
var statearr_47266_47291 = state_47254__$1;
(statearr_47266_47291[(1)] = (11));

} else {
var statearr_47267_47292 = state_47254__$1;
(statearr_47267_47292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (5))){
var inst_47226 = (state_47254[(11)]);
var inst_47220 = (state_47254[(7)]);
var inst_47225 = cljs.core.nth.call(null,inst_47220,(0),null);
var inst_47226__$1 = cljs.core.nth.call(null,inst_47220,(1),null);
var state_47254__$1 = (function (){var statearr_47268 = state_47254;
(statearr_47268[(11)] = inst_47226__$1);

(statearr_47268[(10)] = inst_47225);

return statearr_47268;
})();
if(cljs.core.truth_(inst_47226__$1)){
var statearr_47269_47293 = state_47254__$1;
(statearr_47269_47293[(1)] = (8));

} else {
var statearr_47270_47294 = state_47254__$1;
(statearr_47270_47294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (14))){
var inst_47235 = (state_47254[(8)]);
var inst_47225 = (state_47254[(10)]);
var inst_47233 = (state_47254[(2)]);
var inst_47234 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47235__$1 = cljs.core.get.call(null,inst_47234,inst_47225);
var state_47254__$1 = (function (){var statearr_47271 = state_47254;
(statearr_47271[(8)] = inst_47235__$1);

(statearr_47271[(9)] = inst_47233);

return statearr_47271;
})();
if(cljs.core.truth_(inst_47235__$1)){
var statearr_47272_47295 = state_47254__$1;
(statearr_47272_47295[(1)] = (15));

} else {
var statearr_47273_47296 = state_47254__$1;
(statearr_47273_47296[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (16))){
var inst_47233 = (state_47254[(9)]);
var inst_47239 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47233);
var state_47254__$1 = state_47254;
var statearr_47274_47297 = state_47254__$1;
(statearr_47274_47297[(2)] = inst_47239);

(statearr_47274_47297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (10))){
var inst_47246 = (state_47254[(2)]);
var state_47254__$1 = (function (){var statearr_47275 = state_47254;
(statearr_47275[(12)] = inst_47246);

return statearr_47275;
})();
var statearr_47276_47298 = state_47254__$1;
(statearr_47276_47298[(2)] = null);

(statearr_47276_47298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47255 === (8))){
var inst_47226 = (state_47254[(11)]);
var inst_47228 = eval(inst_47226);
var state_47254__$1 = state_47254;
var statearr_47277_47299 = state_47254__$1;
(statearr_47277_47299[(2)] = inst_47228);

(statearr_47277_47299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29333__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29239__auto__ = null;
var figwheel$client$file_reloading$state_machine__29239__auto____0 = (function (){
var statearr_47278 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47278[(0)] = figwheel$client$file_reloading$state_machine__29239__auto__);

(statearr_47278[(1)] = (1));

return statearr_47278;
});
var figwheel$client$file_reloading$state_machine__29239__auto____1 = (function (state_47254){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_47254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e47279){if((e47279 instanceof Object)){
var ex__29242__auto__ = e47279;
var statearr_47280_47300 = state_47254;
(statearr_47280_47300[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47301 = state_47254;
state_47254 = G__47301;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29239__auto__ = function(state_47254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29239__auto____1.call(this,state_47254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29239__auto____0;
figwheel$client$file_reloading$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29239__auto____1;
return figwheel$client$file_reloading$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__))
})();
var state__29335__auto__ = (function (){var statearr_47281 = f__29334__auto__.call(null);
(statearr_47281[(6)] = c__29333__auto__);

return statearr_47281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__))
);

return c__29333__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47303 = arguments.length;
switch (G__47303) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47305,callback){
var map__47306 = p__47305;
var map__47306__$1 = (((((!((map__47306 == null))))?(((((map__47306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47306):map__47306);
var file_msg = map__47306__$1;
var namespace = cljs.core.get.call(null,map__47306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47306,map__47306__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47306,map__47306__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47308){
var map__47309 = p__47308;
var map__47309__$1 = (((((!((map__47309 == null))))?(((((map__47309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47309):map__47309);
var file_msg = map__47309__$1;
var namespace = cljs.core.get.call(null,map__47309__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47311){
var map__47312 = p__47311;
var map__47312__$1 = (((((!((map__47312 == null))))?(((((map__47312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47312):map__47312);
var file_msg = map__47312__$1;
var namespace = cljs.core.get.call(null,map__47312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47314,callback){
var map__47315 = p__47314;
var map__47315__$1 = (((((!((map__47315 == null))))?(((((map__47315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47315):map__47315);
var file_msg = map__47315__$1;
var request_url = cljs.core.get.call(null,map__47315__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29333__auto___47365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___47365,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___47365,out){
return (function (state_47350){
var state_val_47351 = (state_47350[(1)]);
if((state_val_47351 === (1))){
var inst_47324 = cljs.core.seq.call(null,files);
var inst_47325 = cljs.core.first.call(null,inst_47324);
var inst_47326 = cljs.core.next.call(null,inst_47324);
var inst_47327 = files;
var state_47350__$1 = (function (){var statearr_47352 = state_47350;
(statearr_47352[(7)] = inst_47325);

(statearr_47352[(8)] = inst_47326);

(statearr_47352[(9)] = inst_47327);

return statearr_47352;
})();
var statearr_47353_47366 = state_47350__$1;
(statearr_47353_47366[(2)] = null);

(statearr_47353_47366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47351 === (2))){
var inst_47333 = (state_47350[(10)]);
var inst_47327 = (state_47350[(9)]);
var inst_47332 = cljs.core.seq.call(null,inst_47327);
var inst_47333__$1 = cljs.core.first.call(null,inst_47332);
var inst_47334 = cljs.core.next.call(null,inst_47332);
var inst_47335 = (inst_47333__$1 == null);
var inst_47336 = cljs.core.not.call(null,inst_47335);
var state_47350__$1 = (function (){var statearr_47354 = state_47350;
(statearr_47354[(10)] = inst_47333__$1);

(statearr_47354[(11)] = inst_47334);

return statearr_47354;
})();
if(inst_47336){
var statearr_47355_47367 = state_47350__$1;
(statearr_47355_47367[(1)] = (4));

} else {
var statearr_47356_47368 = state_47350__$1;
(statearr_47356_47368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47351 === (3))){
var inst_47348 = (state_47350[(2)]);
var state_47350__$1 = state_47350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47350__$1,inst_47348);
} else {
if((state_val_47351 === (4))){
var inst_47333 = (state_47350[(10)]);
var inst_47338 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47333);
var state_47350__$1 = state_47350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47350__$1,(7),inst_47338);
} else {
if((state_val_47351 === (5))){
var inst_47344 = cljs.core.async.close_BANG_.call(null,out);
var state_47350__$1 = state_47350;
var statearr_47357_47369 = state_47350__$1;
(statearr_47357_47369[(2)] = inst_47344);

(statearr_47357_47369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47351 === (6))){
var inst_47346 = (state_47350[(2)]);
var state_47350__$1 = state_47350;
var statearr_47358_47370 = state_47350__$1;
(statearr_47358_47370[(2)] = inst_47346);

(statearr_47358_47370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47351 === (7))){
var inst_47334 = (state_47350[(11)]);
var inst_47340 = (state_47350[(2)]);
var inst_47341 = cljs.core.async.put_BANG_.call(null,out,inst_47340);
var inst_47327 = inst_47334;
var state_47350__$1 = (function (){var statearr_47359 = state_47350;
(statearr_47359[(12)] = inst_47341);

(statearr_47359[(9)] = inst_47327);

return statearr_47359;
})();
var statearr_47360_47371 = state_47350__$1;
(statearr_47360_47371[(2)] = null);

(statearr_47360_47371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29333__auto___47365,out))
;
return ((function (switch__29238__auto__,c__29333__auto___47365,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____0 = (function (){
var statearr_47361 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47361[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__);

(statearr_47361[(1)] = (1));

return statearr_47361;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____1 = (function (state_47350){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_47350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e47362){if((e47362 instanceof Object)){
var ex__29242__auto__ = e47362;
var statearr_47363_47372 = state_47350;
(statearr_47363_47372[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47373 = state_47350;
state_47350 = G__47373;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__ = function(state_47350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____1.call(this,state_47350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___47365,out))
})();
var state__29335__auto__ = (function (){var statearr_47364 = f__29334__auto__.call(null);
(statearr_47364[(6)] = c__29333__auto___47365);

return statearr_47364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___47365,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47374,opts){
var map__47375 = p__47374;
var map__47375__$1 = (((((!((map__47375 == null))))?(((((map__47375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47375):map__47375);
var eval_body = cljs.core.get.call(null,map__47375__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47377){var e = e47377;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47378_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47378_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47379){
var vec__47380 = p__47379;
var k = cljs.core.nth.call(null,vec__47380,(0),null);
var v = cljs.core.nth.call(null,vec__47380,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47383){
var vec__47384 = p__47383;
var k = cljs.core.nth.call(null,vec__47384,(0),null);
var v = cljs.core.nth.call(null,vec__47384,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47390,p__47391){
var map__47392 = p__47390;
var map__47392__$1 = (((((!((map__47392 == null))))?(((((map__47392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47392):map__47392);
var opts = map__47392__$1;
var before_jsload = cljs.core.get.call(null,map__47392__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47392__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47392__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47393 = p__47391;
var map__47393__$1 = (((((!((map__47393 == null))))?(((((map__47393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47393):map__47393);
var msg = map__47393__$1;
var files = cljs.core.get.call(null,map__47393__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47393__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47393__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47547){
var state_val_47548 = (state_47547[(1)]);
if((state_val_47548 === (7))){
var inst_47408 = (state_47547[(7)]);
var inst_47409 = (state_47547[(8)]);
var inst_47410 = (state_47547[(9)]);
var inst_47407 = (state_47547[(10)]);
var inst_47415 = cljs.core._nth.call(null,inst_47408,inst_47410);
var inst_47416 = figwheel.client.file_reloading.eval_body.call(null,inst_47415,opts);
var inst_47417 = (inst_47410 + (1));
var tmp47549 = inst_47408;
var tmp47550 = inst_47409;
var tmp47551 = inst_47407;
var inst_47407__$1 = tmp47551;
var inst_47408__$1 = tmp47549;
var inst_47409__$1 = tmp47550;
var inst_47410__$1 = inst_47417;
var state_47547__$1 = (function (){var statearr_47552 = state_47547;
(statearr_47552[(7)] = inst_47408__$1);

(statearr_47552[(8)] = inst_47409__$1);

(statearr_47552[(11)] = inst_47416);

(statearr_47552[(9)] = inst_47410__$1);

(statearr_47552[(10)] = inst_47407__$1);

return statearr_47552;
})();
var statearr_47553_47636 = state_47547__$1;
(statearr_47553_47636[(2)] = null);

(statearr_47553_47636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (20))){
var inst_47450 = (state_47547[(12)]);
var inst_47458 = figwheel.client.file_reloading.sort_files.call(null,inst_47450);
var state_47547__$1 = state_47547;
var statearr_47554_47637 = state_47547__$1;
(statearr_47554_47637[(2)] = inst_47458);

(statearr_47554_47637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (27))){
var state_47547__$1 = state_47547;
var statearr_47555_47638 = state_47547__$1;
(statearr_47555_47638[(2)] = null);

(statearr_47555_47638[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (1))){
var inst_47399 = (state_47547[(13)]);
var inst_47396 = before_jsload.call(null,files);
var inst_47397 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47398 = (function (){return ((function (inst_47399,inst_47396,inst_47397,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47387_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47387_SHARP_);
});
;})(inst_47399,inst_47396,inst_47397,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47399__$1 = cljs.core.filter.call(null,inst_47398,files);
var inst_47400 = cljs.core.not_empty.call(null,inst_47399__$1);
var state_47547__$1 = (function (){var statearr_47556 = state_47547;
(statearr_47556[(14)] = inst_47397);

(statearr_47556[(15)] = inst_47396);

(statearr_47556[(13)] = inst_47399__$1);

return statearr_47556;
})();
if(cljs.core.truth_(inst_47400)){
var statearr_47557_47639 = state_47547__$1;
(statearr_47557_47639[(1)] = (2));

} else {
var statearr_47558_47640 = state_47547__$1;
(statearr_47558_47640[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (24))){
var state_47547__$1 = state_47547;
var statearr_47559_47641 = state_47547__$1;
(statearr_47559_47641[(2)] = null);

(statearr_47559_47641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (39))){
var inst_47500 = (state_47547[(16)]);
var state_47547__$1 = state_47547;
var statearr_47560_47642 = state_47547__$1;
(statearr_47560_47642[(2)] = inst_47500);

(statearr_47560_47642[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (46))){
var inst_47542 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47561_47643 = state_47547__$1;
(statearr_47561_47643[(2)] = inst_47542);

(statearr_47561_47643[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (4))){
var inst_47444 = (state_47547[(2)]);
var inst_47445 = cljs.core.List.EMPTY;
var inst_47446 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47445);
var inst_47447 = (function (){return ((function (inst_47444,inst_47445,inst_47446,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47388_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47388_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47388_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47388_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_47444,inst_47445,inst_47446,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47448 = cljs.core.filter.call(null,inst_47447,files);
var inst_47449 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47450 = cljs.core.concat.call(null,inst_47448,inst_47449);
var state_47547__$1 = (function (){var statearr_47562 = state_47547;
(statearr_47562[(12)] = inst_47450);

(statearr_47562[(17)] = inst_47444);

(statearr_47562[(18)] = inst_47446);

return statearr_47562;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47563_47644 = state_47547__$1;
(statearr_47563_47644[(1)] = (16));

} else {
var statearr_47564_47645 = state_47547__$1;
(statearr_47564_47645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (15))){
var inst_47434 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47565_47646 = state_47547__$1;
(statearr_47565_47646[(2)] = inst_47434);

(statearr_47565_47646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (21))){
var inst_47460 = (state_47547[(19)]);
var inst_47460__$1 = (state_47547[(2)]);
var inst_47461 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47460__$1);
var state_47547__$1 = (function (){var statearr_47566 = state_47547;
(statearr_47566[(19)] = inst_47460__$1);

return statearr_47566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47547__$1,(22),inst_47461);
} else {
if((state_val_47548 === (31))){
var inst_47545 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47547__$1,inst_47545);
} else {
if((state_val_47548 === (32))){
var inst_47500 = (state_47547[(16)]);
var inst_47505 = inst_47500.cljs$lang$protocol_mask$partition0$;
var inst_47506 = (inst_47505 & (64));
var inst_47507 = inst_47500.cljs$core$ISeq$;
var inst_47508 = (cljs.core.PROTOCOL_SENTINEL === inst_47507);
var inst_47509 = ((inst_47506) || (inst_47508));
var state_47547__$1 = state_47547;
if(cljs.core.truth_(inst_47509)){
var statearr_47567_47647 = state_47547__$1;
(statearr_47567_47647[(1)] = (35));

} else {
var statearr_47568_47648 = state_47547__$1;
(statearr_47568_47648[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (40))){
var inst_47522 = (state_47547[(20)]);
var inst_47521 = (state_47547[(2)]);
var inst_47522__$1 = cljs.core.get.call(null,inst_47521,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47523 = cljs.core.get.call(null,inst_47521,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47524 = cljs.core.not_empty.call(null,inst_47522__$1);
var state_47547__$1 = (function (){var statearr_47569 = state_47547;
(statearr_47569[(20)] = inst_47522__$1);

(statearr_47569[(21)] = inst_47523);

return statearr_47569;
})();
if(cljs.core.truth_(inst_47524)){
var statearr_47570_47649 = state_47547__$1;
(statearr_47570_47649[(1)] = (41));

} else {
var statearr_47571_47650 = state_47547__$1;
(statearr_47571_47650[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (33))){
var state_47547__$1 = state_47547;
var statearr_47572_47651 = state_47547__$1;
(statearr_47572_47651[(2)] = false);

(statearr_47572_47651[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (13))){
var inst_47420 = (state_47547[(22)]);
var inst_47424 = cljs.core.chunk_first.call(null,inst_47420);
var inst_47425 = cljs.core.chunk_rest.call(null,inst_47420);
var inst_47426 = cljs.core.count.call(null,inst_47424);
var inst_47407 = inst_47425;
var inst_47408 = inst_47424;
var inst_47409 = inst_47426;
var inst_47410 = (0);
var state_47547__$1 = (function (){var statearr_47573 = state_47547;
(statearr_47573[(7)] = inst_47408);

(statearr_47573[(8)] = inst_47409);

(statearr_47573[(9)] = inst_47410);

(statearr_47573[(10)] = inst_47407);

return statearr_47573;
})();
var statearr_47574_47652 = state_47547__$1;
(statearr_47574_47652[(2)] = null);

(statearr_47574_47652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (22))){
var inst_47464 = (state_47547[(23)]);
var inst_47460 = (state_47547[(19)]);
var inst_47463 = (state_47547[(24)]);
var inst_47468 = (state_47547[(25)]);
var inst_47463__$1 = (state_47547[(2)]);
var inst_47464__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47463__$1);
var inst_47465 = (function (){var all_files = inst_47460;
var res_SINGLEQUOTE_ = inst_47463__$1;
var res = inst_47464__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47464,inst_47460,inst_47463,inst_47468,inst_47463__$1,inst_47464__$1,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47389_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47389_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47464,inst_47460,inst_47463,inst_47468,inst_47463__$1,inst_47464__$1,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47466 = cljs.core.filter.call(null,inst_47465,inst_47463__$1);
var inst_47467 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47468__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47467);
var inst_47469 = cljs.core.not_empty.call(null,inst_47468__$1);
var state_47547__$1 = (function (){var statearr_47575 = state_47547;
(statearr_47575[(23)] = inst_47464__$1);

(statearr_47575[(24)] = inst_47463__$1);

(statearr_47575[(26)] = inst_47466);

(statearr_47575[(25)] = inst_47468__$1);

return statearr_47575;
})();
if(cljs.core.truth_(inst_47469)){
var statearr_47576_47653 = state_47547__$1;
(statearr_47576_47653[(1)] = (23));

} else {
var statearr_47577_47654 = state_47547__$1;
(statearr_47577_47654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (36))){
var state_47547__$1 = state_47547;
var statearr_47578_47655 = state_47547__$1;
(statearr_47578_47655[(2)] = false);

(statearr_47578_47655[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (41))){
var inst_47522 = (state_47547[(20)]);
var inst_47526 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47527 = cljs.core.map.call(null,inst_47526,inst_47522);
var inst_47528 = cljs.core.pr_str.call(null,inst_47527);
var inst_47529 = ["figwheel-no-load meta-data: ",inst_47528].join('');
var inst_47530 = figwheel.client.utils.log.call(null,inst_47529);
var state_47547__$1 = state_47547;
var statearr_47579_47656 = state_47547__$1;
(statearr_47579_47656[(2)] = inst_47530);

(statearr_47579_47656[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (43))){
var inst_47523 = (state_47547[(21)]);
var inst_47533 = (state_47547[(2)]);
var inst_47534 = cljs.core.not_empty.call(null,inst_47523);
var state_47547__$1 = (function (){var statearr_47580 = state_47547;
(statearr_47580[(27)] = inst_47533);

return statearr_47580;
})();
if(cljs.core.truth_(inst_47534)){
var statearr_47581_47657 = state_47547__$1;
(statearr_47581_47657[(1)] = (44));

} else {
var statearr_47582_47658 = state_47547__$1;
(statearr_47582_47658[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (29))){
var inst_47500 = (state_47547[(16)]);
var inst_47464 = (state_47547[(23)]);
var inst_47460 = (state_47547[(19)]);
var inst_47463 = (state_47547[(24)]);
var inst_47466 = (state_47547[(26)]);
var inst_47468 = (state_47547[(25)]);
var inst_47496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47499 = (function (){var all_files = inst_47460;
var res_SINGLEQUOTE_ = inst_47463;
var res = inst_47464;
var files_not_loaded = inst_47466;
var dependencies_that_loaded = inst_47468;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47500,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47496,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47498){
var map__47583 = p__47498;
var map__47583__$1 = (((((!((map__47583 == null))))?(((((map__47583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47583):map__47583);
var namespace = cljs.core.get.call(null,map__47583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47500,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47496,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47500__$1 = cljs.core.group_by.call(null,inst_47499,inst_47466);
var inst_47502 = (inst_47500__$1 == null);
var inst_47503 = cljs.core.not.call(null,inst_47502);
var state_47547__$1 = (function (){var statearr_47585 = state_47547;
(statearr_47585[(28)] = inst_47496);

(statearr_47585[(16)] = inst_47500__$1);

return statearr_47585;
})();
if(inst_47503){
var statearr_47586_47659 = state_47547__$1;
(statearr_47586_47659[(1)] = (32));

} else {
var statearr_47587_47660 = state_47547__$1;
(statearr_47587_47660[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (44))){
var inst_47523 = (state_47547[(21)]);
var inst_47536 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47523);
var inst_47537 = cljs.core.pr_str.call(null,inst_47536);
var inst_47538 = ["not required: ",inst_47537].join('');
var inst_47539 = figwheel.client.utils.log.call(null,inst_47538);
var state_47547__$1 = state_47547;
var statearr_47588_47661 = state_47547__$1;
(statearr_47588_47661[(2)] = inst_47539);

(statearr_47588_47661[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (6))){
var inst_47441 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47589_47662 = state_47547__$1;
(statearr_47589_47662[(2)] = inst_47441);

(statearr_47589_47662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (28))){
var inst_47466 = (state_47547[(26)]);
var inst_47493 = (state_47547[(2)]);
var inst_47494 = cljs.core.not_empty.call(null,inst_47466);
var state_47547__$1 = (function (){var statearr_47590 = state_47547;
(statearr_47590[(29)] = inst_47493);

return statearr_47590;
})();
if(cljs.core.truth_(inst_47494)){
var statearr_47591_47663 = state_47547__$1;
(statearr_47591_47663[(1)] = (29));

} else {
var statearr_47592_47664 = state_47547__$1;
(statearr_47592_47664[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (25))){
var inst_47464 = (state_47547[(23)]);
var inst_47480 = (state_47547[(2)]);
var inst_47481 = cljs.core.not_empty.call(null,inst_47464);
var state_47547__$1 = (function (){var statearr_47593 = state_47547;
(statearr_47593[(30)] = inst_47480);

return statearr_47593;
})();
if(cljs.core.truth_(inst_47481)){
var statearr_47594_47665 = state_47547__$1;
(statearr_47594_47665[(1)] = (26));

} else {
var statearr_47595_47666 = state_47547__$1;
(statearr_47595_47666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (34))){
var inst_47516 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
if(cljs.core.truth_(inst_47516)){
var statearr_47596_47667 = state_47547__$1;
(statearr_47596_47667[(1)] = (38));

} else {
var statearr_47597_47668 = state_47547__$1;
(statearr_47597_47668[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (17))){
var state_47547__$1 = state_47547;
var statearr_47598_47669 = state_47547__$1;
(statearr_47598_47669[(2)] = recompile_dependents);

(statearr_47598_47669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (3))){
var state_47547__$1 = state_47547;
var statearr_47599_47670 = state_47547__$1;
(statearr_47599_47670[(2)] = null);

(statearr_47599_47670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (12))){
var inst_47437 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47600_47671 = state_47547__$1;
(statearr_47600_47671[(2)] = inst_47437);

(statearr_47600_47671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (2))){
var inst_47399 = (state_47547[(13)]);
var inst_47406 = cljs.core.seq.call(null,inst_47399);
var inst_47407 = inst_47406;
var inst_47408 = null;
var inst_47409 = (0);
var inst_47410 = (0);
var state_47547__$1 = (function (){var statearr_47601 = state_47547;
(statearr_47601[(7)] = inst_47408);

(statearr_47601[(8)] = inst_47409);

(statearr_47601[(9)] = inst_47410);

(statearr_47601[(10)] = inst_47407);

return statearr_47601;
})();
var statearr_47602_47672 = state_47547__$1;
(statearr_47602_47672[(2)] = null);

(statearr_47602_47672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (23))){
var inst_47464 = (state_47547[(23)]);
var inst_47460 = (state_47547[(19)]);
var inst_47463 = (state_47547[(24)]);
var inst_47466 = (state_47547[(26)]);
var inst_47468 = (state_47547[(25)]);
var inst_47471 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47473 = (function (){var all_files = inst_47460;
var res_SINGLEQUOTE_ = inst_47463;
var res = inst_47464;
var files_not_loaded = inst_47466;
var dependencies_that_loaded = inst_47468;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47471,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47472){
var map__47603 = p__47472;
var map__47603__$1 = (((((!((map__47603 == null))))?(((((map__47603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47603):map__47603);
var request_url = cljs.core.get.call(null,map__47603__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47471,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47474 = cljs.core.reverse.call(null,inst_47468);
var inst_47475 = cljs.core.map.call(null,inst_47473,inst_47474);
var inst_47476 = cljs.core.pr_str.call(null,inst_47475);
var inst_47477 = figwheel.client.utils.log.call(null,inst_47476);
var state_47547__$1 = (function (){var statearr_47605 = state_47547;
(statearr_47605[(31)] = inst_47471);

return statearr_47605;
})();
var statearr_47606_47673 = state_47547__$1;
(statearr_47606_47673[(2)] = inst_47477);

(statearr_47606_47673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (35))){
var state_47547__$1 = state_47547;
var statearr_47607_47674 = state_47547__$1;
(statearr_47607_47674[(2)] = true);

(statearr_47607_47674[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (19))){
var inst_47450 = (state_47547[(12)]);
var inst_47456 = figwheel.client.file_reloading.expand_files.call(null,inst_47450);
var state_47547__$1 = state_47547;
var statearr_47608_47675 = state_47547__$1;
(statearr_47608_47675[(2)] = inst_47456);

(statearr_47608_47675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (11))){
var state_47547__$1 = state_47547;
var statearr_47609_47676 = state_47547__$1;
(statearr_47609_47676[(2)] = null);

(statearr_47609_47676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (9))){
var inst_47439 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47610_47677 = state_47547__$1;
(statearr_47610_47677[(2)] = inst_47439);

(statearr_47610_47677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (5))){
var inst_47409 = (state_47547[(8)]);
var inst_47410 = (state_47547[(9)]);
var inst_47412 = (inst_47410 < inst_47409);
var inst_47413 = inst_47412;
var state_47547__$1 = state_47547;
if(cljs.core.truth_(inst_47413)){
var statearr_47611_47678 = state_47547__$1;
(statearr_47611_47678[(1)] = (7));

} else {
var statearr_47612_47679 = state_47547__$1;
(statearr_47612_47679[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (14))){
var inst_47420 = (state_47547[(22)]);
var inst_47429 = cljs.core.first.call(null,inst_47420);
var inst_47430 = figwheel.client.file_reloading.eval_body.call(null,inst_47429,opts);
var inst_47431 = cljs.core.next.call(null,inst_47420);
var inst_47407 = inst_47431;
var inst_47408 = null;
var inst_47409 = (0);
var inst_47410 = (0);
var state_47547__$1 = (function (){var statearr_47613 = state_47547;
(statearr_47613[(7)] = inst_47408);

(statearr_47613[(8)] = inst_47409);

(statearr_47613[(32)] = inst_47430);

(statearr_47613[(9)] = inst_47410);

(statearr_47613[(10)] = inst_47407);

return statearr_47613;
})();
var statearr_47614_47680 = state_47547__$1;
(statearr_47614_47680[(2)] = null);

(statearr_47614_47680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (45))){
var state_47547__$1 = state_47547;
var statearr_47615_47681 = state_47547__$1;
(statearr_47615_47681[(2)] = null);

(statearr_47615_47681[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (26))){
var inst_47464 = (state_47547[(23)]);
var inst_47460 = (state_47547[(19)]);
var inst_47463 = (state_47547[(24)]);
var inst_47466 = (state_47547[(26)]);
var inst_47468 = (state_47547[(25)]);
var inst_47483 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47485 = (function (){var all_files = inst_47460;
var res_SINGLEQUOTE_ = inst_47463;
var res = inst_47464;
var files_not_loaded = inst_47466;
var dependencies_that_loaded = inst_47468;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47483,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47484){
var map__47616 = p__47484;
var map__47616__$1 = (((((!((map__47616 == null))))?(((((map__47616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47616):map__47616);
var namespace = cljs.core.get.call(null,map__47616__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47483,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47486 = cljs.core.map.call(null,inst_47485,inst_47464);
var inst_47487 = cljs.core.pr_str.call(null,inst_47486);
var inst_47488 = figwheel.client.utils.log.call(null,inst_47487);
var inst_47489 = (function (){var all_files = inst_47460;
var res_SINGLEQUOTE_ = inst_47463;
var res = inst_47464;
var files_not_loaded = inst_47466;
var dependencies_that_loaded = inst_47468;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47483,inst_47485,inst_47486,inst_47487,inst_47488,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47464,inst_47460,inst_47463,inst_47466,inst_47468,inst_47483,inst_47485,inst_47486,inst_47487,inst_47488,state_val_47548,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47490 = setTimeout(inst_47489,(10));
var state_47547__$1 = (function (){var statearr_47618 = state_47547;
(statearr_47618[(33)] = inst_47488);

(statearr_47618[(34)] = inst_47483);

return statearr_47618;
})();
var statearr_47619_47682 = state_47547__$1;
(statearr_47619_47682[(2)] = inst_47490);

(statearr_47619_47682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (16))){
var state_47547__$1 = state_47547;
var statearr_47620_47683 = state_47547__$1;
(statearr_47620_47683[(2)] = reload_dependents);

(statearr_47620_47683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (38))){
var inst_47500 = (state_47547[(16)]);
var inst_47518 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47500);
var state_47547__$1 = state_47547;
var statearr_47621_47684 = state_47547__$1;
(statearr_47621_47684[(2)] = inst_47518);

(statearr_47621_47684[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (30))){
var state_47547__$1 = state_47547;
var statearr_47622_47685 = state_47547__$1;
(statearr_47622_47685[(2)] = null);

(statearr_47622_47685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (10))){
var inst_47420 = (state_47547[(22)]);
var inst_47422 = cljs.core.chunked_seq_QMARK_.call(null,inst_47420);
var state_47547__$1 = state_47547;
if(inst_47422){
var statearr_47623_47686 = state_47547__$1;
(statearr_47623_47686[(1)] = (13));

} else {
var statearr_47624_47687 = state_47547__$1;
(statearr_47624_47687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (18))){
var inst_47454 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
if(cljs.core.truth_(inst_47454)){
var statearr_47625_47688 = state_47547__$1;
(statearr_47625_47688[(1)] = (19));

} else {
var statearr_47626_47689 = state_47547__$1;
(statearr_47626_47689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (42))){
var state_47547__$1 = state_47547;
var statearr_47627_47690 = state_47547__$1;
(statearr_47627_47690[(2)] = null);

(statearr_47627_47690[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (37))){
var inst_47513 = (state_47547[(2)]);
var state_47547__$1 = state_47547;
var statearr_47628_47691 = state_47547__$1;
(statearr_47628_47691[(2)] = inst_47513);

(statearr_47628_47691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47548 === (8))){
var inst_47420 = (state_47547[(22)]);
var inst_47407 = (state_47547[(10)]);
var inst_47420__$1 = cljs.core.seq.call(null,inst_47407);
var state_47547__$1 = (function (){var statearr_47629 = state_47547;
(statearr_47629[(22)] = inst_47420__$1);

return statearr_47629;
})();
if(inst_47420__$1){
var statearr_47630_47692 = state_47547__$1;
(statearr_47630_47692[(1)] = (10));

} else {
var statearr_47631_47693 = state_47547__$1;
(statearr_47631_47693[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29238__auto__,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____0 = (function (){
var statearr_47632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47632[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__);

(statearr_47632[(1)] = (1));

return statearr_47632;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____1 = (function (state_47547){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_47547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e47633){if((e47633 instanceof Object)){
var ex__29242__auto__ = e47633;
var statearr_47634_47694 = state_47547;
(statearr_47634_47694[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47695 = state_47547;
state_47547 = G__47695;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__ = function(state_47547){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____1.call(this,state_47547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29335__auto__ = (function (){var statearr_47635 = f__29334__auto__.call(null);
(statearr_47635[(6)] = c__29333__auto__);

return statearr_47635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__,map__47392,map__47392__$1,opts,before_jsload,on_jsload,reload_dependents,map__47393,map__47393__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29333__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47698,link){
var map__47699 = p__47698;
var map__47699__$1 = (((((!((map__47699 == null))))?(((((map__47699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47699):map__47699);
var file = cljs.core.get.call(null,map__47699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__47699,map__47699__$1,file){
return (function (p1__47696_SHARP_,p2__47697_SHARP_){
if(cljs.core._EQ_.call(null,p1__47696_SHARP_,p2__47697_SHARP_)){
return p1__47696_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__47699,map__47699__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47702){
var map__47703 = p__47702;
var map__47703__$1 = (((((!((map__47703 == null))))?(((((map__47703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47703):map__47703);
var match_length = cljs.core.get.call(null,map__47703__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47703__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47701_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47701_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47705_SHARP_,p2__47706_SHARP_){
return cljs.core.assoc.call(null,p1__47705_SHARP_,cljs.core.get.call(null,p2__47706_SHARP_,key),p2__47706_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47707 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47707);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47707);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47708,p__47709){
var map__47710 = p__47708;
var map__47710__$1 = (((((!((map__47710 == null))))?(((((map__47710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47710):map__47710);
var on_cssload = cljs.core.get.call(null,map__47710__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47711 = p__47709;
var map__47711__$1 = (((((!((map__47711 == null))))?(((((map__47711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47711):map__47711);
var files_msg = map__47711__$1;
var files = cljs.core.get.call(null,map__47711__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1581079346284
