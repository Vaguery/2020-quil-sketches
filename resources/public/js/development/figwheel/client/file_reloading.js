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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31913_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31913_SHARP_));
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
var seq__31914 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31915 = null;
var count__31916 = (0);
var i__31917 = (0);
while(true){
if((i__31917 < count__31916)){
var n = cljs.core._nth.call(null,chunk__31915,i__31917);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31918 = seq__31914;
var G__31919 = chunk__31915;
var G__31920 = count__31916;
var G__31921 = (i__31917 + (1));
seq__31914 = G__31918;
chunk__31915 = G__31919;
count__31916 = G__31920;
i__31917 = G__31921;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31914);
if(temp__5735__auto__){
var seq__31914__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31914__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31914__$1);
var G__31922 = cljs.core.chunk_rest.call(null,seq__31914__$1);
var G__31923 = c__4550__auto__;
var G__31924 = cljs.core.count.call(null,c__4550__auto__);
var G__31925 = (0);
seq__31914 = G__31922;
chunk__31915 = G__31923;
count__31916 = G__31924;
i__31917 = G__31925;
continue;
} else {
var n = cljs.core.first.call(null,seq__31914__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31926 = cljs.core.next.call(null,seq__31914__$1);
var G__31927 = null;
var G__31928 = (0);
var G__31929 = (0);
seq__31914 = G__31926;
chunk__31915 = G__31927;
count__31916 = G__31928;
i__31917 = G__31929;
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
return cljs.core.some.call(null,(function (p__31930){
var vec__31931 = p__31930;
var _ = cljs.core.nth.call(null,vec__31931,(0),null);
var v = cljs.core.nth.call(null,vec__31931,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31934){
var vec__31935 = p__31934;
var k = cljs.core.nth.call(null,vec__31935,(0),null);
var v = cljs.core.nth.call(null,vec__31935,(1),null);
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

var seq__31947_31955 = cljs.core.seq.call(null,deps);
var chunk__31948_31956 = null;
var count__31949_31957 = (0);
var i__31950_31958 = (0);
while(true){
if((i__31950_31958 < count__31949_31957)){
var dep_31959 = cljs.core._nth.call(null,chunk__31948_31956,i__31950_31958);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31959;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31959));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31959,(depth + (1)),state);
} else {
}


var G__31960 = seq__31947_31955;
var G__31961 = chunk__31948_31956;
var G__31962 = count__31949_31957;
var G__31963 = (i__31950_31958 + (1));
seq__31947_31955 = G__31960;
chunk__31948_31956 = G__31961;
count__31949_31957 = G__31962;
i__31950_31958 = G__31963;
continue;
} else {
var temp__5735__auto___31964 = cljs.core.seq.call(null,seq__31947_31955);
if(temp__5735__auto___31964){
var seq__31947_31965__$1 = temp__5735__auto___31964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31947_31965__$1)){
var c__4550__auto___31966 = cljs.core.chunk_first.call(null,seq__31947_31965__$1);
var G__31967 = cljs.core.chunk_rest.call(null,seq__31947_31965__$1);
var G__31968 = c__4550__auto___31966;
var G__31969 = cljs.core.count.call(null,c__4550__auto___31966);
var G__31970 = (0);
seq__31947_31955 = G__31967;
chunk__31948_31956 = G__31968;
count__31949_31957 = G__31969;
i__31950_31958 = G__31970;
continue;
} else {
var dep_31971 = cljs.core.first.call(null,seq__31947_31965__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31971;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31971));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31971,(depth + (1)),state);
} else {
}


var G__31972 = cljs.core.next.call(null,seq__31947_31965__$1);
var G__31973 = null;
var G__31974 = (0);
var G__31975 = (0);
seq__31947_31955 = G__31972;
chunk__31948_31956 = G__31973;
count__31949_31957 = G__31974;
i__31950_31958 = G__31975;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31951){
var vec__31952 = p__31951;
var seq__31953 = cljs.core.seq.call(null,vec__31952);
var first__31954 = cljs.core.first.call(null,seq__31953);
var seq__31953__$1 = cljs.core.next.call(null,seq__31953);
var x = first__31954;
var xs = seq__31953__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31952,seq__31953,first__31954,seq__31953__$1,x,xs,get_deps__$1){
return (function (p1__31938_SHARP_){
return clojure.set.difference.call(null,p1__31938_SHARP_,x);
});})(vec__31952,seq__31953,first__31954,seq__31953__$1,x,xs,get_deps__$1))
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
var seq__31976 = cljs.core.seq.call(null,provides);
var chunk__31977 = null;
var count__31978 = (0);
var i__31979 = (0);
while(true){
if((i__31979 < count__31978)){
var prov = cljs.core._nth.call(null,chunk__31977,i__31979);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31988_31996 = cljs.core.seq.call(null,requires);
var chunk__31989_31997 = null;
var count__31990_31998 = (0);
var i__31991_31999 = (0);
while(true){
if((i__31991_31999 < count__31990_31998)){
var req_32000 = cljs.core._nth.call(null,chunk__31989_31997,i__31991_31999);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32000,prov);


var G__32001 = seq__31988_31996;
var G__32002 = chunk__31989_31997;
var G__32003 = count__31990_31998;
var G__32004 = (i__31991_31999 + (1));
seq__31988_31996 = G__32001;
chunk__31989_31997 = G__32002;
count__31990_31998 = G__32003;
i__31991_31999 = G__32004;
continue;
} else {
var temp__5735__auto___32005 = cljs.core.seq.call(null,seq__31988_31996);
if(temp__5735__auto___32005){
var seq__31988_32006__$1 = temp__5735__auto___32005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31988_32006__$1)){
var c__4550__auto___32007 = cljs.core.chunk_first.call(null,seq__31988_32006__$1);
var G__32008 = cljs.core.chunk_rest.call(null,seq__31988_32006__$1);
var G__32009 = c__4550__auto___32007;
var G__32010 = cljs.core.count.call(null,c__4550__auto___32007);
var G__32011 = (0);
seq__31988_31996 = G__32008;
chunk__31989_31997 = G__32009;
count__31990_31998 = G__32010;
i__31991_31999 = G__32011;
continue;
} else {
var req_32012 = cljs.core.first.call(null,seq__31988_32006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32012,prov);


var G__32013 = cljs.core.next.call(null,seq__31988_32006__$1);
var G__32014 = null;
var G__32015 = (0);
var G__32016 = (0);
seq__31988_31996 = G__32013;
chunk__31989_31997 = G__32014;
count__31990_31998 = G__32015;
i__31991_31999 = G__32016;
continue;
}
} else {
}
}
break;
}


var G__32017 = seq__31976;
var G__32018 = chunk__31977;
var G__32019 = count__31978;
var G__32020 = (i__31979 + (1));
seq__31976 = G__32017;
chunk__31977 = G__32018;
count__31978 = G__32019;
i__31979 = G__32020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31976);
if(temp__5735__auto__){
var seq__31976__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31976__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31976__$1);
var G__32021 = cljs.core.chunk_rest.call(null,seq__31976__$1);
var G__32022 = c__4550__auto__;
var G__32023 = cljs.core.count.call(null,c__4550__auto__);
var G__32024 = (0);
seq__31976 = G__32021;
chunk__31977 = G__32022;
count__31978 = G__32023;
i__31979 = G__32024;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31976__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31992_32025 = cljs.core.seq.call(null,requires);
var chunk__31993_32026 = null;
var count__31994_32027 = (0);
var i__31995_32028 = (0);
while(true){
if((i__31995_32028 < count__31994_32027)){
var req_32029 = cljs.core._nth.call(null,chunk__31993_32026,i__31995_32028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32029,prov);


var G__32030 = seq__31992_32025;
var G__32031 = chunk__31993_32026;
var G__32032 = count__31994_32027;
var G__32033 = (i__31995_32028 + (1));
seq__31992_32025 = G__32030;
chunk__31993_32026 = G__32031;
count__31994_32027 = G__32032;
i__31995_32028 = G__32033;
continue;
} else {
var temp__5735__auto___32034__$1 = cljs.core.seq.call(null,seq__31992_32025);
if(temp__5735__auto___32034__$1){
var seq__31992_32035__$1 = temp__5735__auto___32034__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31992_32035__$1)){
var c__4550__auto___32036 = cljs.core.chunk_first.call(null,seq__31992_32035__$1);
var G__32037 = cljs.core.chunk_rest.call(null,seq__31992_32035__$1);
var G__32038 = c__4550__auto___32036;
var G__32039 = cljs.core.count.call(null,c__4550__auto___32036);
var G__32040 = (0);
seq__31992_32025 = G__32037;
chunk__31993_32026 = G__32038;
count__31994_32027 = G__32039;
i__31995_32028 = G__32040;
continue;
} else {
var req_32041 = cljs.core.first.call(null,seq__31992_32035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32041,prov);


var G__32042 = cljs.core.next.call(null,seq__31992_32035__$1);
var G__32043 = null;
var G__32044 = (0);
var G__32045 = (0);
seq__31992_32025 = G__32042;
chunk__31993_32026 = G__32043;
count__31994_32027 = G__32044;
i__31995_32028 = G__32045;
continue;
}
} else {
}
}
break;
}


var G__32046 = cljs.core.next.call(null,seq__31976__$1);
var G__32047 = null;
var G__32048 = (0);
var G__32049 = (0);
seq__31976 = G__32046;
chunk__31977 = G__32047;
count__31978 = G__32048;
i__31979 = G__32049;
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
var seq__32050_32054 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32051_32055 = null;
var count__32052_32056 = (0);
var i__32053_32057 = (0);
while(true){
if((i__32053_32057 < count__32052_32056)){
var ns_32058 = cljs.core._nth.call(null,chunk__32051_32055,i__32053_32057);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32058);


var G__32059 = seq__32050_32054;
var G__32060 = chunk__32051_32055;
var G__32061 = count__32052_32056;
var G__32062 = (i__32053_32057 + (1));
seq__32050_32054 = G__32059;
chunk__32051_32055 = G__32060;
count__32052_32056 = G__32061;
i__32053_32057 = G__32062;
continue;
} else {
var temp__5735__auto___32063 = cljs.core.seq.call(null,seq__32050_32054);
if(temp__5735__auto___32063){
var seq__32050_32064__$1 = temp__5735__auto___32063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32050_32064__$1)){
var c__4550__auto___32065 = cljs.core.chunk_first.call(null,seq__32050_32064__$1);
var G__32066 = cljs.core.chunk_rest.call(null,seq__32050_32064__$1);
var G__32067 = c__4550__auto___32065;
var G__32068 = cljs.core.count.call(null,c__4550__auto___32065);
var G__32069 = (0);
seq__32050_32054 = G__32066;
chunk__32051_32055 = G__32067;
count__32052_32056 = G__32068;
i__32053_32057 = G__32069;
continue;
} else {
var ns_32070 = cljs.core.first.call(null,seq__32050_32064__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32070);


var G__32071 = cljs.core.next.call(null,seq__32050_32064__$1);
var G__32072 = null;
var G__32073 = (0);
var G__32074 = (0);
seq__32050_32054 = G__32071;
chunk__32051_32055 = G__32072;
count__32052_32056 = G__32073;
i__32053_32057 = G__32074;
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
var G__32075__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32076__i = 0, G__32076__a = new Array(arguments.length -  0);
while (G__32076__i < G__32076__a.length) {G__32076__a[G__32076__i] = arguments[G__32076__i + 0]; ++G__32076__i;}
  args = new cljs.core.IndexedSeq(G__32076__a,0,null);
} 
return G__32075__delegate.call(this,args);};
G__32075.cljs$lang$maxFixedArity = 0;
G__32075.cljs$lang$applyTo = (function (arglist__32077){
var args = cljs.core.seq(arglist__32077);
return G__32075__delegate(args);
});
G__32075.cljs$core$IFn$_invoke$arity$variadic = G__32075__delegate;
return G__32075;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32078_SHARP_,p2__32079_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32078_SHARP_)),p2__32079_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32080_SHARP_,p2__32081_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32080_SHARP_),p2__32081_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32082 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32082.addCallback(((function (G__32082){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32082))
);

G__32082.addErrback(((function (G__32082){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32082))
);

return G__32082;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32083){if((e32083 instanceof Error)){
var e = e32083;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32083;

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
}catch (e32084){if((e32084 instanceof Error)){
var e = e32084;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32084;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32085 = cljs.core._EQ_;
var expr__32086 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32085.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32086))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32085.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32086))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32085.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32086))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32085,expr__32086){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32085,expr__32086))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32088,callback){
var map__32089 = p__32088;
var map__32089__$1 = (((((!((map__32089 == null))))?(((((map__32089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32089):map__32089);
var file_msg = map__32089__$1;
var request_url = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32089,map__32089__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32089,map__32089__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__){
return (function (state_32127){
var state_val_32128 = (state_32127[(1)]);
if((state_val_32128 === (7))){
var inst_32123 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32129_32155 = state_32127__$1;
(statearr_32129_32155[(2)] = inst_32123);

(statearr_32129_32155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (1))){
var state_32127__$1 = state_32127;
var statearr_32130_32156 = state_32127__$1;
(statearr_32130_32156[(2)] = null);

(statearr_32130_32156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (4))){
var inst_32093 = (state_32127[(7)]);
var inst_32093__$1 = (state_32127[(2)]);
var state_32127__$1 = (function (){var statearr_32131 = state_32127;
(statearr_32131[(7)] = inst_32093__$1);

return statearr_32131;
})();
if(cljs.core.truth_(inst_32093__$1)){
var statearr_32132_32157 = state_32127__$1;
(statearr_32132_32157[(1)] = (5));

} else {
var statearr_32133_32158 = state_32127__$1;
(statearr_32133_32158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (15))){
var inst_32106 = (state_32127[(8)]);
var inst_32108 = (state_32127[(9)]);
var inst_32110 = inst_32108.call(null,inst_32106);
var state_32127__$1 = state_32127;
var statearr_32134_32159 = state_32127__$1;
(statearr_32134_32159[(2)] = inst_32110);

(statearr_32134_32159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (13))){
var inst_32117 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32135_32160 = state_32127__$1;
(statearr_32135_32160[(2)] = inst_32117);

(statearr_32135_32160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (6))){
var state_32127__$1 = state_32127;
var statearr_32136_32161 = state_32127__$1;
(statearr_32136_32161[(2)] = null);

(statearr_32136_32161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (17))){
var inst_32114 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32137_32162 = state_32127__$1;
(statearr_32137_32162[(2)] = inst_32114);

(statearr_32137_32162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (3))){
var inst_32125 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32127__$1,inst_32125);
} else {
if((state_val_32128 === (12))){
var state_32127__$1 = state_32127;
var statearr_32138_32163 = state_32127__$1;
(statearr_32138_32163[(2)] = null);

(statearr_32138_32163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (2))){
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32127__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32128 === (11))){
var inst_32098 = (state_32127[(10)]);
var inst_32104 = figwheel.client.file_reloading.blocking_load.call(null,inst_32098);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32127__$1,(14),inst_32104);
} else {
if((state_val_32128 === (9))){
var inst_32098 = (state_32127[(10)]);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32098)){
var statearr_32139_32164 = state_32127__$1;
(statearr_32139_32164[(1)] = (11));

} else {
var statearr_32140_32165 = state_32127__$1;
(statearr_32140_32165[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (5))){
var inst_32099 = (state_32127[(11)]);
var inst_32093 = (state_32127[(7)]);
var inst_32098 = cljs.core.nth.call(null,inst_32093,(0),null);
var inst_32099__$1 = cljs.core.nth.call(null,inst_32093,(1),null);
var state_32127__$1 = (function (){var statearr_32141 = state_32127;
(statearr_32141[(10)] = inst_32098);

(statearr_32141[(11)] = inst_32099__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32099__$1)){
var statearr_32142_32166 = state_32127__$1;
(statearr_32142_32166[(1)] = (8));

} else {
var statearr_32143_32167 = state_32127__$1;
(statearr_32143_32167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (14))){
var inst_32098 = (state_32127[(10)]);
var inst_32108 = (state_32127[(9)]);
var inst_32106 = (state_32127[(2)]);
var inst_32107 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32108__$1 = cljs.core.get.call(null,inst_32107,inst_32098);
var state_32127__$1 = (function (){var statearr_32144 = state_32127;
(statearr_32144[(8)] = inst_32106);

(statearr_32144[(9)] = inst_32108__$1);

return statearr_32144;
})();
if(cljs.core.truth_(inst_32108__$1)){
var statearr_32145_32168 = state_32127__$1;
(statearr_32145_32168[(1)] = (15));

} else {
var statearr_32146_32169 = state_32127__$1;
(statearr_32146_32169[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (16))){
var inst_32106 = (state_32127[(8)]);
var inst_32112 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32106);
var state_32127__$1 = state_32127;
var statearr_32147_32170 = state_32127__$1;
(statearr_32147_32170[(2)] = inst_32112);

(statearr_32147_32170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (10))){
var inst_32119 = (state_32127[(2)]);
var state_32127__$1 = (function (){var statearr_32148 = state_32127;
(statearr_32148[(12)] = inst_32119);

return statearr_32148;
})();
var statearr_32149_32171 = state_32127__$1;
(statearr_32149_32171[(2)] = null);

(statearr_32149_32171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (8))){
var inst_32099 = (state_32127[(11)]);
var inst_32101 = eval(inst_32099);
var state_32127__$1 = state_32127;
var statearr_32150_32172 = state_32127__$1;
(statearr_32150_32172[(2)] = inst_32101);

(statearr_32150_32172[(1)] = (10));


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
});})(c__24643__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24477__auto__ = null;
var figwheel$client$file_reloading$state_machine__24477__auto____0 = (function (){
var statearr_32151 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32151[(0)] = figwheel$client$file_reloading$state_machine__24477__auto__);

(statearr_32151[(1)] = (1));

return statearr_32151;
});
var figwheel$client$file_reloading$state_machine__24477__auto____1 = (function (state_32127){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_32127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e32152){if((e32152 instanceof Object)){
var ex__24480__auto__ = e32152;
var statearr_32153_32173 = state_32127;
(statearr_32153_32173[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32174 = state_32127;
state_32127 = G__32174;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24477__auto__ = function(state_32127){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24477__auto____1.call(this,state_32127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24477__auto____0;
figwheel$client$file_reloading$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24477__auto____1;
return figwheel$client$file_reloading$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__))
})();
var state__24645__auto__ = (function (){var statearr_32154 = f__24644__auto__.call(null);
(statearr_32154[(6)] = c__24643__auto__);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__))
);

return c__24643__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32176 = arguments.length;
switch (G__32176) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32178,callback){
var map__32179 = p__32178;
var map__32179__$1 = (((((!((map__32179 == null))))?(((((map__32179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32179):map__32179);
var file_msg = map__32179__$1;
var namespace = cljs.core.get.call(null,map__32179__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32179,map__32179__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32179,map__32179__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32181){
var map__32182 = p__32181;
var map__32182__$1 = (((((!((map__32182 == null))))?(((((map__32182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32182):map__32182);
var file_msg = map__32182__$1;
var namespace = cljs.core.get.call(null,map__32182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32184){
var map__32185 = p__32184;
var map__32185__$1 = (((((!((map__32185 == null))))?(((((map__32185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32185):map__32185);
var file_msg = map__32185__$1;
var namespace = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32187,callback){
var map__32188 = p__32187;
var map__32188__$1 = (((((!((map__32188 == null))))?(((((map__32188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32188):map__32188);
var file_msg = map__32188__$1;
var request_url = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32188__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24643__auto___32238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___32238,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___32238,out){
return (function (state_32223){
var state_val_32224 = (state_32223[(1)]);
if((state_val_32224 === (1))){
var inst_32197 = cljs.core.seq.call(null,files);
var inst_32198 = cljs.core.first.call(null,inst_32197);
var inst_32199 = cljs.core.next.call(null,inst_32197);
var inst_32200 = files;
var state_32223__$1 = (function (){var statearr_32225 = state_32223;
(statearr_32225[(7)] = inst_32199);

(statearr_32225[(8)] = inst_32200);

(statearr_32225[(9)] = inst_32198);

return statearr_32225;
})();
var statearr_32226_32239 = state_32223__$1;
(statearr_32226_32239[(2)] = null);

(statearr_32226_32239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (2))){
var inst_32206 = (state_32223[(10)]);
var inst_32200 = (state_32223[(8)]);
var inst_32205 = cljs.core.seq.call(null,inst_32200);
var inst_32206__$1 = cljs.core.first.call(null,inst_32205);
var inst_32207 = cljs.core.next.call(null,inst_32205);
var inst_32208 = (inst_32206__$1 == null);
var inst_32209 = cljs.core.not.call(null,inst_32208);
var state_32223__$1 = (function (){var statearr_32227 = state_32223;
(statearr_32227[(11)] = inst_32207);

(statearr_32227[(10)] = inst_32206__$1);

return statearr_32227;
})();
if(inst_32209){
var statearr_32228_32240 = state_32223__$1;
(statearr_32228_32240[(1)] = (4));

} else {
var statearr_32229_32241 = state_32223__$1;
(statearr_32229_32241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (3))){
var inst_32221 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else {
if((state_val_32224 === (4))){
var inst_32206 = (state_32223[(10)]);
var inst_32211 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32206);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32223__$1,(7),inst_32211);
} else {
if((state_val_32224 === (5))){
var inst_32217 = cljs.core.async.close_BANG_.call(null,out);
var state_32223__$1 = state_32223;
var statearr_32230_32242 = state_32223__$1;
(statearr_32230_32242[(2)] = inst_32217);

(statearr_32230_32242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (6))){
var inst_32219 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32231_32243 = state_32223__$1;
(statearr_32231_32243[(2)] = inst_32219);

(statearr_32231_32243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (7))){
var inst_32207 = (state_32223[(11)]);
var inst_32213 = (state_32223[(2)]);
var inst_32214 = cljs.core.async.put_BANG_.call(null,out,inst_32213);
var inst_32200 = inst_32207;
var state_32223__$1 = (function (){var statearr_32232 = state_32223;
(statearr_32232[(12)] = inst_32214);

(statearr_32232[(8)] = inst_32200);

return statearr_32232;
})();
var statearr_32233_32244 = state_32223__$1;
(statearr_32233_32244[(2)] = null);

(statearr_32233_32244[(1)] = (2));


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
});})(c__24643__auto___32238,out))
;
return ((function (switch__24476__auto__,c__24643__auto___32238,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____0 = (function (){
var statearr_32234 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32234[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__);

(statearr_32234[(1)] = (1));

return statearr_32234;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____1 = (function (state_32223){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_32223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e32235){if((e32235 instanceof Object)){
var ex__24480__auto__ = e32235;
var statearr_32236_32245 = state_32223;
(statearr_32236_32245[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32246 = state_32223;
state_32223 = G__32246;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___32238,out))
})();
var state__24645__auto__ = (function (){var statearr_32237 = f__24644__auto__.call(null);
(statearr_32237[(6)] = c__24643__auto___32238);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___32238,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32247,opts){
var map__32248 = p__32247;
var map__32248__$1 = (((((!((map__32248 == null))))?(((((map__32248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32248):map__32248);
var eval_body = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32250){var e = e32250;
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
return (function (p1__32251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32251_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32252){
var vec__32253 = p__32252;
var k = cljs.core.nth.call(null,vec__32253,(0),null);
var v = cljs.core.nth.call(null,vec__32253,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32256){
var vec__32257 = p__32256;
var k = cljs.core.nth.call(null,vec__32257,(0),null);
var v = cljs.core.nth.call(null,vec__32257,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32263,p__32264){
var map__32265 = p__32263;
var map__32265__$1 = (((((!((map__32265 == null))))?(((((map__32265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32265):map__32265);
var opts = map__32265__$1;
var before_jsload = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32266 = p__32264;
var map__32266__$1 = (((((!((map__32266 == null))))?(((((map__32266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32266):map__32266);
var msg = map__32266__$1;
var files = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32266__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32420){
var state_val_32421 = (state_32420[(1)]);
if((state_val_32421 === (7))){
var inst_32283 = (state_32420[(7)]);
var inst_32281 = (state_32420[(8)]);
var inst_32280 = (state_32420[(9)]);
var inst_32282 = (state_32420[(10)]);
var inst_32288 = cljs.core._nth.call(null,inst_32281,inst_32283);
var inst_32289 = figwheel.client.file_reloading.eval_body.call(null,inst_32288,opts);
var inst_32290 = (inst_32283 + (1));
var tmp32422 = inst_32281;
var tmp32423 = inst_32280;
var tmp32424 = inst_32282;
var inst_32280__$1 = tmp32423;
var inst_32281__$1 = tmp32422;
var inst_32282__$1 = tmp32424;
var inst_32283__$1 = inst_32290;
var state_32420__$1 = (function (){var statearr_32425 = state_32420;
(statearr_32425[(7)] = inst_32283__$1);

(statearr_32425[(8)] = inst_32281__$1);

(statearr_32425[(9)] = inst_32280__$1);

(statearr_32425[(11)] = inst_32289);

(statearr_32425[(10)] = inst_32282__$1);

return statearr_32425;
})();
var statearr_32426_32509 = state_32420__$1;
(statearr_32426_32509[(2)] = null);

(statearr_32426_32509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (20))){
var inst_32323 = (state_32420[(12)]);
var inst_32331 = figwheel.client.file_reloading.sort_files.call(null,inst_32323);
var state_32420__$1 = state_32420;
var statearr_32427_32510 = state_32420__$1;
(statearr_32427_32510[(2)] = inst_32331);

(statearr_32427_32510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (27))){
var state_32420__$1 = state_32420;
var statearr_32428_32511 = state_32420__$1;
(statearr_32428_32511[(2)] = null);

(statearr_32428_32511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (1))){
var inst_32272 = (state_32420[(13)]);
var inst_32269 = before_jsload.call(null,files);
var inst_32270 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32271 = (function (){return ((function (inst_32272,inst_32269,inst_32270,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32260_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32260_SHARP_);
});
;})(inst_32272,inst_32269,inst_32270,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32272__$1 = cljs.core.filter.call(null,inst_32271,files);
var inst_32273 = cljs.core.not_empty.call(null,inst_32272__$1);
var state_32420__$1 = (function (){var statearr_32429 = state_32420;
(statearr_32429[(14)] = inst_32269);

(statearr_32429[(15)] = inst_32270);

(statearr_32429[(13)] = inst_32272__$1);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32273)){
var statearr_32430_32512 = state_32420__$1;
(statearr_32430_32512[(1)] = (2));

} else {
var statearr_32431_32513 = state_32420__$1;
(statearr_32431_32513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (24))){
var state_32420__$1 = state_32420;
var statearr_32432_32514 = state_32420__$1;
(statearr_32432_32514[(2)] = null);

(statearr_32432_32514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (39))){
var inst_32373 = (state_32420[(16)]);
var state_32420__$1 = state_32420;
var statearr_32433_32515 = state_32420__$1;
(statearr_32433_32515[(2)] = inst_32373);

(statearr_32433_32515[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (46))){
var inst_32415 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32434_32516 = state_32420__$1;
(statearr_32434_32516[(2)] = inst_32415);

(statearr_32434_32516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (4))){
var inst_32317 = (state_32420[(2)]);
var inst_32318 = cljs.core.List.EMPTY;
var inst_32319 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32318);
var inst_32320 = (function (){return ((function (inst_32317,inst_32318,inst_32319,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32261_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32261_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32261_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32261_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32317,inst_32318,inst_32319,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32321 = cljs.core.filter.call(null,inst_32320,files);
var inst_32322 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32323 = cljs.core.concat.call(null,inst_32321,inst_32322);
var state_32420__$1 = (function (){var statearr_32435 = state_32420;
(statearr_32435[(17)] = inst_32317);

(statearr_32435[(18)] = inst_32319);

(statearr_32435[(12)] = inst_32323);

return statearr_32435;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32436_32517 = state_32420__$1;
(statearr_32436_32517[(1)] = (16));

} else {
var statearr_32437_32518 = state_32420__$1;
(statearr_32437_32518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (15))){
var inst_32307 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32438_32519 = state_32420__$1;
(statearr_32438_32519[(2)] = inst_32307);

(statearr_32438_32519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (21))){
var inst_32333 = (state_32420[(19)]);
var inst_32333__$1 = (state_32420[(2)]);
var inst_32334 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32333__$1);
var state_32420__$1 = (function (){var statearr_32439 = state_32420;
(statearr_32439[(19)] = inst_32333__$1);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32420__$1,(22),inst_32334);
} else {
if((state_val_32421 === (31))){
var inst_32418 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32420__$1,inst_32418);
} else {
if((state_val_32421 === (32))){
var inst_32373 = (state_32420[(16)]);
var inst_32378 = inst_32373.cljs$lang$protocol_mask$partition0$;
var inst_32379 = (inst_32378 & (64));
var inst_32380 = inst_32373.cljs$core$ISeq$;
var inst_32381 = (cljs.core.PROTOCOL_SENTINEL === inst_32380);
var inst_32382 = ((inst_32379) || (inst_32381));
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32382)){
var statearr_32440_32520 = state_32420__$1;
(statearr_32440_32520[(1)] = (35));

} else {
var statearr_32441_32521 = state_32420__$1;
(statearr_32441_32521[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (40))){
var inst_32395 = (state_32420[(20)]);
var inst_32394 = (state_32420[(2)]);
var inst_32395__$1 = cljs.core.get.call(null,inst_32394,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32396 = cljs.core.get.call(null,inst_32394,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32397 = cljs.core.not_empty.call(null,inst_32395__$1);
var state_32420__$1 = (function (){var statearr_32442 = state_32420;
(statearr_32442[(21)] = inst_32396);

(statearr_32442[(20)] = inst_32395__$1);

return statearr_32442;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32443_32522 = state_32420__$1;
(statearr_32443_32522[(1)] = (41));

} else {
var statearr_32444_32523 = state_32420__$1;
(statearr_32444_32523[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (33))){
var state_32420__$1 = state_32420;
var statearr_32445_32524 = state_32420__$1;
(statearr_32445_32524[(2)] = false);

(statearr_32445_32524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (13))){
var inst_32293 = (state_32420[(22)]);
var inst_32297 = cljs.core.chunk_first.call(null,inst_32293);
var inst_32298 = cljs.core.chunk_rest.call(null,inst_32293);
var inst_32299 = cljs.core.count.call(null,inst_32297);
var inst_32280 = inst_32298;
var inst_32281 = inst_32297;
var inst_32282 = inst_32299;
var inst_32283 = (0);
var state_32420__$1 = (function (){var statearr_32446 = state_32420;
(statearr_32446[(7)] = inst_32283);

(statearr_32446[(8)] = inst_32281);

(statearr_32446[(9)] = inst_32280);

(statearr_32446[(10)] = inst_32282);

return statearr_32446;
})();
var statearr_32447_32525 = state_32420__$1;
(statearr_32447_32525[(2)] = null);

(statearr_32447_32525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (22))){
var inst_32337 = (state_32420[(23)]);
var inst_32333 = (state_32420[(19)]);
var inst_32336 = (state_32420[(24)]);
var inst_32341 = (state_32420[(25)]);
var inst_32336__$1 = (state_32420[(2)]);
var inst_32337__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32336__$1);
var inst_32338 = (function (){var all_files = inst_32333;
var res_SINGLEQUOTE_ = inst_32336__$1;
var res = inst_32337__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32337,inst_32333,inst_32336,inst_32341,inst_32336__$1,inst_32337__$1,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32262_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32262_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32337,inst_32333,inst_32336,inst_32341,inst_32336__$1,inst_32337__$1,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32339 = cljs.core.filter.call(null,inst_32338,inst_32336__$1);
var inst_32340 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32341__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32340);
var inst_32342 = cljs.core.not_empty.call(null,inst_32341__$1);
var state_32420__$1 = (function (){var statearr_32448 = state_32420;
(statearr_32448[(23)] = inst_32337__$1);

(statearr_32448[(24)] = inst_32336__$1);

(statearr_32448[(25)] = inst_32341__$1);

(statearr_32448[(26)] = inst_32339);

return statearr_32448;
})();
if(cljs.core.truth_(inst_32342)){
var statearr_32449_32526 = state_32420__$1;
(statearr_32449_32526[(1)] = (23));

} else {
var statearr_32450_32527 = state_32420__$1;
(statearr_32450_32527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (36))){
var state_32420__$1 = state_32420;
var statearr_32451_32528 = state_32420__$1;
(statearr_32451_32528[(2)] = false);

(statearr_32451_32528[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (41))){
var inst_32395 = (state_32420[(20)]);
var inst_32399 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32400 = cljs.core.map.call(null,inst_32399,inst_32395);
var inst_32401 = cljs.core.pr_str.call(null,inst_32400);
var inst_32402 = ["figwheel-no-load meta-data: ",inst_32401].join('');
var inst_32403 = figwheel.client.utils.log.call(null,inst_32402);
var state_32420__$1 = state_32420;
var statearr_32452_32529 = state_32420__$1;
(statearr_32452_32529[(2)] = inst_32403);

(statearr_32452_32529[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (43))){
var inst_32396 = (state_32420[(21)]);
var inst_32406 = (state_32420[(2)]);
var inst_32407 = cljs.core.not_empty.call(null,inst_32396);
var state_32420__$1 = (function (){var statearr_32453 = state_32420;
(statearr_32453[(27)] = inst_32406);

return statearr_32453;
})();
if(cljs.core.truth_(inst_32407)){
var statearr_32454_32530 = state_32420__$1;
(statearr_32454_32530[(1)] = (44));

} else {
var statearr_32455_32531 = state_32420__$1;
(statearr_32455_32531[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (29))){
var inst_32373 = (state_32420[(16)]);
var inst_32337 = (state_32420[(23)]);
var inst_32333 = (state_32420[(19)]);
var inst_32336 = (state_32420[(24)]);
var inst_32341 = (state_32420[(25)]);
var inst_32339 = (state_32420[(26)]);
var inst_32369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32372 = (function (){var all_files = inst_32333;
var res_SINGLEQUOTE_ = inst_32336;
var res = inst_32337;
var files_not_loaded = inst_32339;
var dependencies_that_loaded = inst_32341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32373,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32369,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32371){
var map__32456 = p__32371;
var map__32456__$1 = (((((!((map__32456 == null))))?(((((map__32456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32456):map__32456);
var namespace = cljs.core.get.call(null,map__32456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32373,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32369,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32373__$1 = cljs.core.group_by.call(null,inst_32372,inst_32339);
var inst_32375 = (inst_32373__$1 == null);
var inst_32376 = cljs.core.not.call(null,inst_32375);
var state_32420__$1 = (function (){var statearr_32458 = state_32420;
(statearr_32458[(28)] = inst_32369);

(statearr_32458[(16)] = inst_32373__$1);

return statearr_32458;
})();
if(inst_32376){
var statearr_32459_32532 = state_32420__$1;
(statearr_32459_32532[(1)] = (32));

} else {
var statearr_32460_32533 = state_32420__$1;
(statearr_32460_32533[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (44))){
var inst_32396 = (state_32420[(21)]);
var inst_32409 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32396);
var inst_32410 = cljs.core.pr_str.call(null,inst_32409);
var inst_32411 = ["not required: ",inst_32410].join('');
var inst_32412 = figwheel.client.utils.log.call(null,inst_32411);
var state_32420__$1 = state_32420;
var statearr_32461_32534 = state_32420__$1;
(statearr_32461_32534[(2)] = inst_32412);

(statearr_32461_32534[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (6))){
var inst_32314 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32462_32535 = state_32420__$1;
(statearr_32462_32535[(2)] = inst_32314);

(statearr_32462_32535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (28))){
var inst_32339 = (state_32420[(26)]);
var inst_32366 = (state_32420[(2)]);
var inst_32367 = cljs.core.not_empty.call(null,inst_32339);
var state_32420__$1 = (function (){var statearr_32463 = state_32420;
(statearr_32463[(29)] = inst_32366);

return statearr_32463;
})();
if(cljs.core.truth_(inst_32367)){
var statearr_32464_32536 = state_32420__$1;
(statearr_32464_32536[(1)] = (29));

} else {
var statearr_32465_32537 = state_32420__$1;
(statearr_32465_32537[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (25))){
var inst_32337 = (state_32420[(23)]);
var inst_32353 = (state_32420[(2)]);
var inst_32354 = cljs.core.not_empty.call(null,inst_32337);
var state_32420__$1 = (function (){var statearr_32466 = state_32420;
(statearr_32466[(30)] = inst_32353);

return statearr_32466;
})();
if(cljs.core.truth_(inst_32354)){
var statearr_32467_32538 = state_32420__$1;
(statearr_32467_32538[(1)] = (26));

} else {
var statearr_32468_32539 = state_32420__$1;
(statearr_32468_32539[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (34))){
var inst_32389 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32389)){
var statearr_32469_32540 = state_32420__$1;
(statearr_32469_32540[(1)] = (38));

} else {
var statearr_32470_32541 = state_32420__$1;
(statearr_32470_32541[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (17))){
var state_32420__$1 = state_32420;
var statearr_32471_32542 = state_32420__$1;
(statearr_32471_32542[(2)] = recompile_dependents);

(statearr_32471_32542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (3))){
var state_32420__$1 = state_32420;
var statearr_32472_32543 = state_32420__$1;
(statearr_32472_32543[(2)] = null);

(statearr_32472_32543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (12))){
var inst_32310 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32473_32544 = state_32420__$1;
(statearr_32473_32544[(2)] = inst_32310);

(statearr_32473_32544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (2))){
var inst_32272 = (state_32420[(13)]);
var inst_32279 = cljs.core.seq.call(null,inst_32272);
var inst_32280 = inst_32279;
var inst_32281 = null;
var inst_32282 = (0);
var inst_32283 = (0);
var state_32420__$1 = (function (){var statearr_32474 = state_32420;
(statearr_32474[(7)] = inst_32283);

(statearr_32474[(8)] = inst_32281);

(statearr_32474[(9)] = inst_32280);

(statearr_32474[(10)] = inst_32282);

return statearr_32474;
})();
var statearr_32475_32545 = state_32420__$1;
(statearr_32475_32545[(2)] = null);

(statearr_32475_32545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (23))){
var inst_32337 = (state_32420[(23)]);
var inst_32333 = (state_32420[(19)]);
var inst_32336 = (state_32420[(24)]);
var inst_32341 = (state_32420[(25)]);
var inst_32339 = (state_32420[(26)]);
var inst_32344 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32346 = (function (){var all_files = inst_32333;
var res_SINGLEQUOTE_ = inst_32336;
var res = inst_32337;
var files_not_loaded = inst_32339;
var dependencies_that_loaded = inst_32341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32344,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32345){
var map__32476 = p__32345;
var map__32476__$1 = (((((!((map__32476 == null))))?(((((map__32476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32476):map__32476);
var request_url = cljs.core.get.call(null,map__32476__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32344,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32347 = cljs.core.reverse.call(null,inst_32341);
var inst_32348 = cljs.core.map.call(null,inst_32346,inst_32347);
var inst_32349 = cljs.core.pr_str.call(null,inst_32348);
var inst_32350 = figwheel.client.utils.log.call(null,inst_32349);
var state_32420__$1 = (function (){var statearr_32478 = state_32420;
(statearr_32478[(31)] = inst_32344);

return statearr_32478;
})();
var statearr_32479_32546 = state_32420__$1;
(statearr_32479_32546[(2)] = inst_32350);

(statearr_32479_32546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (35))){
var state_32420__$1 = state_32420;
var statearr_32480_32547 = state_32420__$1;
(statearr_32480_32547[(2)] = true);

(statearr_32480_32547[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (19))){
var inst_32323 = (state_32420[(12)]);
var inst_32329 = figwheel.client.file_reloading.expand_files.call(null,inst_32323);
var state_32420__$1 = state_32420;
var statearr_32481_32548 = state_32420__$1;
(statearr_32481_32548[(2)] = inst_32329);

(statearr_32481_32548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (11))){
var state_32420__$1 = state_32420;
var statearr_32482_32549 = state_32420__$1;
(statearr_32482_32549[(2)] = null);

(statearr_32482_32549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (9))){
var inst_32312 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32483_32550 = state_32420__$1;
(statearr_32483_32550[(2)] = inst_32312);

(statearr_32483_32550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (5))){
var inst_32283 = (state_32420[(7)]);
var inst_32282 = (state_32420[(10)]);
var inst_32285 = (inst_32283 < inst_32282);
var inst_32286 = inst_32285;
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32286)){
var statearr_32484_32551 = state_32420__$1;
(statearr_32484_32551[(1)] = (7));

} else {
var statearr_32485_32552 = state_32420__$1;
(statearr_32485_32552[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (14))){
var inst_32293 = (state_32420[(22)]);
var inst_32302 = cljs.core.first.call(null,inst_32293);
var inst_32303 = figwheel.client.file_reloading.eval_body.call(null,inst_32302,opts);
var inst_32304 = cljs.core.next.call(null,inst_32293);
var inst_32280 = inst_32304;
var inst_32281 = null;
var inst_32282 = (0);
var inst_32283 = (0);
var state_32420__$1 = (function (){var statearr_32486 = state_32420;
(statearr_32486[(7)] = inst_32283);

(statearr_32486[(8)] = inst_32281);

(statearr_32486[(9)] = inst_32280);

(statearr_32486[(32)] = inst_32303);

(statearr_32486[(10)] = inst_32282);

return statearr_32486;
})();
var statearr_32487_32553 = state_32420__$1;
(statearr_32487_32553[(2)] = null);

(statearr_32487_32553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (45))){
var state_32420__$1 = state_32420;
var statearr_32488_32554 = state_32420__$1;
(statearr_32488_32554[(2)] = null);

(statearr_32488_32554[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (26))){
var inst_32337 = (state_32420[(23)]);
var inst_32333 = (state_32420[(19)]);
var inst_32336 = (state_32420[(24)]);
var inst_32341 = (state_32420[(25)]);
var inst_32339 = (state_32420[(26)]);
var inst_32356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32358 = (function (){var all_files = inst_32333;
var res_SINGLEQUOTE_ = inst_32336;
var res = inst_32337;
var files_not_loaded = inst_32339;
var dependencies_that_loaded = inst_32341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32356,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32357){
var map__32489 = p__32357;
var map__32489__$1 = (((((!((map__32489 == null))))?(((((map__32489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32489):map__32489);
var namespace = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32489__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32356,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32359 = cljs.core.map.call(null,inst_32358,inst_32337);
var inst_32360 = cljs.core.pr_str.call(null,inst_32359);
var inst_32361 = figwheel.client.utils.log.call(null,inst_32360);
var inst_32362 = (function (){var all_files = inst_32333;
var res_SINGLEQUOTE_ = inst_32336;
var res = inst_32337;
var files_not_loaded = inst_32339;
var dependencies_that_loaded = inst_32341;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32356,inst_32358,inst_32359,inst_32360,inst_32361,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32337,inst_32333,inst_32336,inst_32341,inst_32339,inst_32356,inst_32358,inst_32359,inst_32360,inst_32361,state_val_32421,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32363 = setTimeout(inst_32362,(10));
var state_32420__$1 = (function (){var statearr_32491 = state_32420;
(statearr_32491[(33)] = inst_32356);

(statearr_32491[(34)] = inst_32361);

return statearr_32491;
})();
var statearr_32492_32555 = state_32420__$1;
(statearr_32492_32555[(2)] = inst_32363);

(statearr_32492_32555[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (16))){
var state_32420__$1 = state_32420;
var statearr_32493_32556 = state_32420__$1;
(statearr_32493_32556[(2)] = reload_dependents);

(statearr_32493_32556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (38))){
var inst_32373 = (state_32420[(16)]);
var inst_32391 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32373);
var state_32420__$1 = state_32420;
var statearr_32494_32557 = state_32420__$1;
(statearr_32494_32557[(2)] = inst_32391);

(statearr_32494_32557[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (30))){
var state_32420__$1 = state_32420;
var statearr_32495_32558 = state_32420__$1;
(statearr_32495_32558[(2)] = null);

(statearr_32495_32558[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (10))){
var inst_32293 = (state_32420[(22)]);
var inst_32295 = cljs.core.chunked_seq_QMARK_.call(null,inst_32293);
var state_32420__$1 = state_32420;
if(inst_32295){
var statearr_32496_32559 = state_32420__$1;
(statearr_32496_32559[(1)] = (13));

} else {
var statearr_32497_32560 = state_32420__$1;
(statearr_32497_32560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (18))){
var inst_32327 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
if(cljs.core.truth_(inst_32327)){
var statearr_32498_32561 = state_32420__$1;
(statearr_32498_32561[(1)] = (19));

} else {
var statearr_32499_32562 = state_32420__$1;
(statearr_32499_32562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (42))){
var state_32420__$1 = state_32420;
var statearr_32500_32563 = state_32420__$1;
(statearr_32500_32563[(2)] = null);

(statearr_32500_32563[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (37))){
var inst_32386 = (state_32420[(2)]);
var state_32420__$1 = state_32420;
var statearr_32501_32564 = state_32420__$1;
(statearr_32501_32564[(2)] = inst_32386);

(statearr_32501_32564[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32421 === (8))){
var inst_32280 = (state_32420[(9)]);
var inst_32293 = (state_32420[(22)]);
var inst_32293__$1 = cljs.core.seq.call(null,inst_32280);
var state_32420__$1 = (function (){var statearr_32502 = state_32420;
(statearr_32502[(22)] = inst_32293__$1);

return statearr_32502;
})();
if(inst_32293__$1){
var statearr_32503_32565 = state_32420__$1;
(statearr_32503_32565[(1)] = (10));

} else {
var statearr_32504_32566 = state_32420__$1;
(statearr_32504_32566[(1)] = (11));

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
});})(c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24476__auto__,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____0 = (function (){
var statearr_32505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32505[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__);

(statearr_32505[(1)] = (1));

return statearr_32505;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____1 = (function (state_32420){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_32420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e32506){if((e32506 instanceof Object)){
var ex__24480__auto__ = e32506;
var statearr_32507_32567 = state_32420;
(statearr_32507_32567[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32568 = state_32420;
state_32420 = G__32568;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__ = function(state_32420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____1.call(this,state_32420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24645__auto__ = (function (){var statearr_32508 = f__24644__auto__.call(null);
(statearr_32508[(6)] = c__24643__auto__);

return statearr_32508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__,map__32265,map__32265__$1,opts,before_jsload,on_jsload,reload_dependents,map__32266,map__32266__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24643__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32571,link){
var map__32572 = p__32571;
var map__32572__$1 = (((((!((map__32572 == null))))?(((((map__32572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);
var file = cljs.core.get.call(null,map__32572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32572,map__32572__$1,file){
return (function (p1__32569_SHARP_,p2__32570_SHARP_){
if(cljs.core._EQ_.call(null,p1__32569_SHARP_,p2__32570_SHARP_)){
return p1__32569_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32572,map__32572__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32575){
var map__32576 = p__32575;
var map__32576__$1 = (((((!((map__32576 == null))))?(((((map__32576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32576):map__32576);
var match_length = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32576__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32574_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32574_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32578_SHARP_,p2__32579_SHARP_){
return cljs.core.assoc.call(null,p1__32578_SHARP_,cljs.core.get.call(null,p2__32579_SHARP_,key),p2__32579_SHARP_);
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
var loaded_f_datas_32580 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32580);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32580);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32581,p__32582){
var map__32583 = p__32581;
var map__32583__$1 = (((((!((map__32583 == null))))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32583):map__32583);
var on_cssload = cljs.core.get.call(null,map__32583__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32584 = p__32582;
var map__32584__$1 = (((((!((map__32584 == null))))?(((((map__32584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32584):map__32584);
var files_msg = map__32584__$1;
var files = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581180049049
