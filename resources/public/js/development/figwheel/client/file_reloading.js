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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32885_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32885_SHARP_));
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
var seq__32886 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32887 = null;
var count__32888 = (0);
var i__32889 = (0);
while(true){
if((i__32889 < count__32888)){
var n = cljs.core._nth.call(null,chunk__32887,i__32889);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32890 = seq__32886;
var G__32891 = chunk__32887;
var G__32892 = count__32888;
var G__32893 = (i__32889 + (1));
seq__32886 = G__32890;
chunk__32887 = G__32891;
count__32888 = G__32892;
i__32889 = G__32893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32886);
if(temp__5735__auto__){
var seq__32886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32886__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32886__$1);
var G__32894 = cljs.core.chunk_rest.call(null,seq__32886__$1);
var G__32895 = c__4550__auto__;
var G__32896 = cljs.core.count.call(null,c__4550__auto__);
var G__32897 = (0);
seq__32886 = G__32894;
chunk__32887 = G__32895;
count__32888 = G__32896;
i__32889 = G__32897;
continue;
} else {
var n = cljs.core.first.call(null,seq__32886__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32898 = cljs.core.next.call(null,seq__32886__$1);
var G__32899 = null;
var G__32900 = (0);
var G__32901 = (0);
seq__32886 = G__32898;
chunk__32887 = G__32899;
count__32888 = G__32900;
i__32889 = G__32901;
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
return cljs.core.some.call(null,(function (p__32902){
var vec__32903 = p__32902;
var _ = cljs.core.nth.call(null,vec__32903,(0),null);
var v = cljs.core.nth.call(null,vec__32903,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__32906){
var vec__32907 = p__32906;
var k = cljs.core.nth.call(null,vec__32907,(0),null);
var v = cljs.core.nth.call(null,vec__32907,(1),null);
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

var seq__32919_32927 = cljs.core.seq.call(null,deps);
var chunk__32920_32928 = null;
var count__32921_32929 = (0);
var i__32922_32930 = (0);
while(true){
if((i__32922_32930 < count__32921_32929)){
var dep_32931 = cljs.core._nth.call(null,chunk__32920_32928,i__32922_32930);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32931;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32931));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32931,(depth + (1)),state);
} else {
}


var G__32932 = seq__32919_32927;
var G__32933 = chunk__32920_32928;
var G__32934 = count__32921_32929;
var G__32935 = (i__32922_32930 + (1));
seq__32919_32927 = G__32932;
chunk__32920_32928 = G__32933;
count__32921_32929 = G__32934;
i__32922_32930 = G__32935;
continue;
} else {
var temp__5735__auto___32936 = cljs.core.seq.call(null,seq__32919_32927);
if(temp__5735__auto___32936){
var seq__32919_32937__$1 = temp__5735__auto___32936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32919_32937__$1)){
var c__4550__auto___32938 = cljs.core.chunk_first.call(null,seq__32919_32937__$1);
var G__32939 = cljs.core.chunk_rest.call(null,seq__32919_32937__$1);
var G__32940 = c__4550__auto___32938;
var G__32941 = cljs.core.count.call(null,c__4550__auto___32938);
var G__32942 = (0);
seq__32919_32927 = G__32939;
chunk__32920_32928 = G__32940;
count__32921_32929 = G__32941;
i__32922_32930 = G__32942;
continue;
} else {
var dep_32943 = cljs.core.first.call(null,seq__32919_32937__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32943;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32943));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32943,(depth + (1)),state);
} else {
}


var G__32944 = cljs.core.next.call(null,seq__32919_32937__$1);
var G__32945 = null;
var G__32946 = (0);
var G__32947 = (0);
seq__32919_32927 = G__32944;
chunk__32920_32928 = G__32945;
count__32921_32929 = G__32946;
i__32922_32930 = G__32947;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32923){
var vec__32924 = p__32923;
var seq__32925 = cljs.core.seq.call(null,vec__32924);
var first__32926 = cljs.core.first.call(null,seq__32925);
var seq__32925__$1 = cljs.core.next.call(null,seq__32925);
var x = first__32926;
var xs = seq__32925__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32924,seq__32925,first__32926,seq__32925__$1,x,xs,get_deps__$1){
return (function (p1__32910_SHARP_){
return clojure.set.difference.call(null,p1__32910_SHARP_,x);
});})(vec__32924,seq__32925,first__32926,seq__32925__$1,x,xs,get_deps__$1))
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
var seq__32948 = cljs.core.seq.call(null,provides);
var chunk__32949 = null;
var count__32950 = (0);
var i__32951 = (0);
while(true){
if((i__32951 < count__32950)){
var prov = cljs.core._nth.call(null,chunk__32949,i__32951);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32960_32968 = cljs.core.seq.call(null,requires);
var chunk__32961_32969 = null;
var count__32962_32970 = (0);
var i__32963_32971 = (0);
while(true){
if((i__32963_32971 < count__32962_32970)){
var req_32972 = cljs.core._nth.call(null,chunk__32961_32969,i__32963_32971);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32972,prov);


var G__32973 = seq__32960_32968;
var G__32974 = chunk__32961_32969;
var G__32975 = count__32962_32970;
var G__32976 = (i__32963_32971 + (1));
seq__32960_32968 = G__32973;
chunk__32961_32969 = G__32974;
count__32962_32970 = G__32975;
i__32963_32971 = G__32976;
continue;
} else {
var temp__5735__auto___32977 = cljs.core.seq.call(null,seq__32960_32968);
if(temp__5735__auto___32977){
var seq__32960_32978__$1 = temp__5735__auto___32977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32960_32978__$1)){
var c__4550__auto___32979 = cljs.core.chunk_first.call(null,seq__32960_32978__$1);
var G__32980 = cljs.core.chunk_rest.call(null,seq__32960_32978__$1);
var G__32981 = c__4550__auto___32979;
var G__32982 = cljs.core.count.call(null,c__4550__auto___32979);
var G__32983 = (0);
seq__32960_32968 = G__32980;
chunk__32961_32969 = G__32981;
count__32962_32970 = G__32982;
i__32963_32971 = G__32983;
continue;
} else {
var req_32984 = cljs.core.first.call(null,seq__32960_32978__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32984,prov);


var G__32985 = cljs.core.next.call(null,seq__32960_32978__$1);
var G__32986 = null;
var G__32987 = (0);
var G__32988 = (0);
seq__32960_32968 = G__32985;
chunk__32961_32969 = G__32986;
count__32962_32970 = G__32987;
i__32963_32971 = G__32988;
continue;
}
} else {
}
}
break;
}


var G__32989 = seq__32948;
var G__32990 = chunk__32949;
var G__32991 = count__32950;
var G__32992 = (i__32951 + (1));
seq__32948 = G__32989;
chunk__32949 = G__32990;
count__32950 = G__32991;
i__32951 = G__32992;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32948);
if(temp__5735__auto__){
var seq__32948__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32948__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32948__$1);
var G__32993 = cljs.core.chunk_rest.call(null,seq__32948__$1);
var G__32994 = c__4550__auto__;
var G__32995 = cljs.core.count.call(null,c__4550__auto__);
var G__32996 = (0);
seq__32948 = G__32993;
chunk__32949 = G__32994;
count__32950 = G__32995;
i__32951 = G__32996;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32948__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32964_32997 = cljs.core.seq.call(null,requires);
var chunk__32965_32998 = null;
var count__32966_32999 = (0);
var i__32967_33000 = (0);
while(true){
if((i__32967_33000 < count__32966_32999)){
var req_33001 = cljs.core._nth.call(null,chunk__32965_32998,i__32967_33000);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33001,prov);


var G__33002 = seq__32964_32997;
var G__33003 = chunk__32965_32998;
var G__33004 = count__32966_32999;
var G__33005 = (i__32967_33000 + (1));
seq__32964_32997 = G__33002;
chunk__32965_32998 = G__33003;
count__32966_32999 = G__33004;
i__32967_33000 = G__33005;
continue;
} else {
var temp__5735__auto___33006__$1 = cljs.core.seq.call(null,seq__32964_32997);
if(temp__5735__auto___33006__$1){
var seq__32964_33007__$1 = temp__5735__auto___33006__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32964_33007__$1)){
var c__4550__auto___33008 = cljs.core.chunk_first.call(null,seq__32964_33007__$1);
var G__33009 = cljs.core.chunk_rest.call(null,seq__32964_33007__$1);
var G__33010 = c__4550__auto___33008;
var G__33011 = cljs.core.count.call(null,c__4550__auto___33008);
var G__33012 = (0);
seq__32964_32997 = G__33009;
chunk__32965_32998 = G__33010;
count__32966_32999 = G__33011;
i__32967_33000 = G__33012;
continue;
} else {
var req_33013 = cljs.core.first.call(null,seq__32964_33007__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33013,prov);


var G__33014 = cljs.core.next.call(null,seq__32964_33007__$1);
var G__33015 = null;
var G__33016 = (0);
var G__33017 = (0);
seq__32964_32997 = G__33014;
chunk__32965_32998 = G__33015;
count__32966_32999 = G__33016;
i__32967_33000 = G__33017;
continue;
}
} else {
}
}
break;
}


var G__33018 = cljs.core.next.call(null,seq__32948__$1);
var G__33019 = null;
var G__33020 = (0);
var G__33021 = (0);
seq__32948 = G__33018;
chunk__32949 = G__33019;
count__32950 = G__33020;
i__32951 = G__33021;
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
var seq__33022_33026 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33023_33027 = null;
var count__33024_33028 = (0);
var i__33025_33029 = (0);
while(true){
if((i__33025_33029 < count__33024_33028)){
var ns_33030 = cljs.core._nth.call(null,chunk__33023_33027,i__33025_33029);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33030);


var G__33031 = seq__33022_33026;
var G__33032 = chunk__33023_33027;
var G__33033 = count__33024_33028;
var G__33034 = (i__33025_33029 + (1));
seq__33022_33026 = G__33031;
chunk__33023_33027 = G__33032;
count__33024_33028 = G__33033;
i__33025_33029 = G__33034;
continue;
} else {
var temp__5735__auto___33035 = cljs.core.seq.call(null,seq__33022_33026);
if(temp__5735__auto___33035){
var seq__33022_33036__$1 = temp__5735__auto___33035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33022_33036__$1)){
var c__4550__auto___33037 = cljs.core.chunk_first.call(null,seq__33022_33036__$1);
var G__33038 = cljs.core.chunk_rest.call(null,seq__33022_33036__$1);
var G__33039 = c__4550__auto___33037;
var G__33040 = cljs.core.count.call(null,c__4550__auto___33037);
var G__33041 = (0);
seq__33022_33026 = G__33038;
chunk__33023_33027 = G__33039;
count__33024_33028 = G__33040;
i__33025_33029 = G__33041;
continue;
} else {
var ns_33042 = cljs.core.first.call(null,seq__33022_33036__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33042);


var G__33043 = cljs.core.next.call(null,seq__33022_33036__$1);
var G__33044 = null;
var G__33045 = (0);
var G__33046 = (0);
seq__33022_33026 = G__33043;
chunk__33023_33027 = G__33044;
count__33024_33028 = G__33045;
i__33025_33029 = G__33046;
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
var G__33047__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33048__i = 0, G__33048__a = new Array(arguments.length -  0);
while (G__33048__i < G__33048__a.length) {G__33048__a[G__33048__i] = arguments[G__33048__i + 0]; ++G__33048__i;}
  args = new cljs.core.IndexedSeq(G__33048__a,0,null);
} 
return G__33047__delegate.call(this,args);};
G__33047.cljs$lang$maxFixedArity = 0;
G__33047.cljs$lang$applyTo = (function (arglist__33049){
var args = cljs.core.seq(arglist__33049);
return G__33047__delegate(args);
});
G__33047.cljs$core$IFn$_invoke$arity$variadic = G__33047__delegate;
return G__33047;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__33050_SHARP_,p2__33051_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33050_SHARP_)),p2__33051_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__33052_SHARP_,p2__33053_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33052_SHARP_),p2__33053_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33054 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33054.addCallback(((function (G__33054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33054))
);

G__33054.addErrback(((function (G__33054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33054))
);

return G__33054;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33055){if((e33055 instanceof Error)){
var e = e33055;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33055;

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
}catch (e33056){if((e33056 instanceof Error)){
var e = e33056;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33056;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33057 = cljs.core._EQ_;
var expr__33058 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33057.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33058))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__33057.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33058))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__33057.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33058))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__33057,expr__33058){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33057,expr__33058))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33060,callback){
var map__33061 = p__33060;
var map__33061__$1 = (((((!((map__33061 == null))))?(((((map__33061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33061):map__33061);
var file_msg = map__33061__$1;
var request_url = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__33061,map__33061__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33061,map__33061__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__){
return (function (state_33099){
var state_val_33100 = (state_33099[(1)]);
if((state_val_33100 === (7))){
var inst_33095 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33101_33127 = state_33099__$1;
(statearr_33101_33127[(2)] = inst_33095);

(statearr_33101_33127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (1))){
var state_33099__$1 = state_33099;
var statearr_33102_33128 = state_33099__$1;
(statearr_33102_33128[(2)] = null);

(statearr_33102_33128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (4))){
var inst_33065 = (state_33099[(7)]);
var inst_33065__$1 = (state_33099[(2)]);
var state_33099__$1 = (function (){var statearr_33103 = state_33099;
(statearr_33103[(7)] = inst_33065__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33065__$1)){
var statearr_33104_33129 = state_33099__$1;
(statearr_33104_33129[(1)] = (5));

} else {
var statearr_33105_33130 = state_33099__$1;
(statearr_33105_33130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (15))){
var inst_33078 = (state_33099[(8)]);
var inst_33080 = (state_33099[(9)]);
var inst_33082 = inst_33080.call(null,inst_33078);
var state_33099__$1 = state_33099;
var statearr_33106_33131 = state_33099__$1;
(statearr_33106_33131[(2)] = inst_33082);

(statearr_33106_33131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (13))){
var inst_33089 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33107_33132 = state_33099__$1;
(statearr_33107_33132[(2)] = inst_33089);

(statearr_33107_33132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (6))){
var state_33099__$1 = state_33099;
var statearr_33108_33133 = state_33099__$1;
(statearr_33108_33133[(2)] = null);

(statearr_33108_33133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (17))){
var inst_33086 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
var statearr_33109_33134 = state_33099__$1;
(statearr_33109_33134[(2)] = inst_33086);

(statearr_33109_33134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (3))){
var inst_33097 = (state_33099[(2)]);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33099__$1,inst_33097);
} else {
if((state_val_33100 === (12))){
var state_33099__$1 = state_33099;
var statearr_33110_33135 = state_33099__$1;
(statearr_33110_33135[(2)] = null);

(statearr_33110_33135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (2))){
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33099__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33100 === (11))){
var inst_33070 = (state_33099[(10)]);
var inst_33076 = figwheel.client.file_reloading.blocking_load.call(null,inst_33070);
var state_33099__$1 = state_33099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33099__$1,(14),inst_33076);
} else {
if((state_val_33100 === (9))){
var inst_33070 = (state_33099[(10)]);
var state_33099__$1 = state_33099;
if(cljs.core.truth_(inst_33070)){
var statearr_33111_33136 = state_33099__$1;
(statearr_33111_33136[(1)] = (11));

} else {
var statearr_33112_33137 = state_33099__$1;
(statearr_33112_33137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (5))){
var inst_33065 = (state_33099[(7)]);
var inst_33071 = (state_33099[(11)]);
var inst_33070 = cljs.core.nth.call(null,inst_33065,(0),null);
var inst_33071__$1 = cljs.core.nth.call(null,inst_33065,(1),null);
var state_33099__$1 = (function (){var statearr_33113 = state_33099;
(statearr_33113[(11)] = inst_33071__$1);

(statearr_33113[(10)] = inst_33070);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33071__$1)){
var statearr_33114_33138 = state_33099__$1;
(statearr_33114_33138[(1)] = (8));

} else {
var statearr_33115_33139 = state_33099__$1;
(statearr_33115_33139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (14))){
var inst_33070 = (state_33099[(10)]);
var inst_33080 = (state_33099[(9)]);
var inst_33078 = (state_33099[(2)]);
var inst_33079 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33080__$1 = cljs.core.get.call(null,inst_33079,inst_33070);
var state_33099__$1 = (function (){var statearr_33116 = state_33099;
(statearr_33116[(8)] = inst_33078);

(statearr_33116[(9)] = inst_33080__$1);

return statearr_33116;
})();
if(cljs.core.truth_(inst_33080__$1)){
var statearr_33117_33140 = state_33099__$1;
(statearr_33117_33140[(1)] = (15));

} else {
var statearr_33118_33141 = state_33099__$1;
(statearr_33118_33141[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (16))){
var inst_33078 = (state_33099[(8)]);
var inst_33084 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33078);
var state_33099__$1 = state_33099;
var statearr_33119_33142 = state_33099__$1;
(statearr_33119_33142[(2)] = inst_33084);

(statearr_33119_33142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (10))){
var inst_33091 = (state_33099[(2)]);
var state_33099__$1 = (function (){var statearr_33120 = state_33099;
(statearr_33120[(12)] = inst_33091);

return statearr_33120;
})();
var statearr_33121_33143 = state_33099__$1;
(statearr_33121_33143[(2)] = null);

(statearr_33121_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33100 === (8))){
var inst_33071 = (state_33099[(11)]);
var inst_33073 = eval(inst_33071);
var state_33099__$1 = state_33099;
var statearr_33122_33144 = state_33099__$1;
(statearr_33122_33144[(2)] = inst_33073);

(statearr_33122_33144[(1)] = (10));


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
});})(c__29538__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29444__auto__ = null;
var figwheel$client$file_reloading$state_machine__29444__auto____0 = (function (){
var statearr_33123 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33123[(0)] = figwheel$client$file_reloading$state_machine__29444__auto__);

(statearr_33123[(1)] = (1));

return statearr_33123;
});
var figwheel$client$file_reloading$state_machine__29444__auto____1 = (function (state_33099){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_33099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e33124){if((e33124 instanceof Object)){
var ex__29447__auto__ = e33124;
var statearr_33125_33145 = state_33099;
(statearr_33125_33145[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33146 = state_33099;
state_33099 = G__33146;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29444__auto__ = function(state_33099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29444__auto____1.call(this,state_33099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29444__auto____0;
figwheel$client$file_reloading$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29444__auto____1;
return figwheel$client$file_reloading$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__))
})();
var state__29540__auto__ = (function (){var statearr_33126 = f__29539__auto__.call(null);
(statearr_33126[(6)] = c__29538__auto__);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__))
);

return c__29538__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__33148 = arguments.length;
switch (G__33148) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33150,callback){
var map__33151 = p__33150;
var map__33151__$1 = (((((!((map__33151 == null))))?(((((map__33151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33151):map__33151);
var file_msg = map__33151__$1;
var namespace = cljs.core.get.call(null,map__33151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33151,map__33151__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33151,map__33151__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33153){
var map__33154 = p__33153;
var map__33154__$1 = (((((!((map__33154 == null))))?(((((map__33154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33154):map__33154);
var file_msg = map__33154__$1;
var namespace = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33156){
var map__33157 = p__33156;
var map__33157__$1 = (((((!((map__33157 == null))))?(((((map__33157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33157):map__33157);
var file_msg = map__33157__$1;
var namespace = cljs.core.get.call(null,map__33157__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33159,callback){
var map__33160 = p__33159;
var map__33160__$1 = (((((!((map__33160 == null))))?(((((map__33160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33160):map__33160);
var file_msg = map__33160__$1;
var request_url = cljs.core.get.call(null,map__33160__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29538__auto___33210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___33210,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___33210,out){
return (function (state_33195){
var state_val_33196 = (state_33195[(1)]);
if((state_val_33196 === (1))){
var inst_33169 = cljs.core.seq.call(null,files);
var inst_33170 = cljs.core.first.call(null,inst_33169);
var inst_33171 = cljs.core.next.call(null,inst_33169);
var inst_33172 = files;
var state_33195__$1 = (function (){var statearr_33197 = state_33195;
(statearr_33197[(7)] = inst_33172);

(statearr_33197[(8)] = inst_33171);

(statearr_33197[(9)] = inst_33170);

return statearr_33197;
})();
var statearr_33198_33211 = state_33195__$1;
(statearr_33198_33211[(2)] = null);

(statearr_33198_33211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (2))){
var inst_33172 = (state_33195[(7)]);
var inst_33178 = (state_33195[(10)]);
var inst_33177 = cljs.core.seq.call(null,inst_33172);
var inst_33178__$1 = cljs.core.first.call(null,inst_33177);
var inst_33179 = cljs.core.next.call(null,inst_33177);
var inst_33180 = (inst_33178__$1 == null);
var inst_33181 = cljs.core.not.call(null,inst_33180);
var state_33195__$1 = (function (){var statearr_33199 = state_33195;
(statearr_33199[(11)] = inst_33179);

(statearr_33199[(10)] = inst_33178__$1);

return statearr_33199;
})();
if(inst_33181){
var statearr_33200_33212 = state_33195__$1;
(statearr_33200_33212[(1)] = (4));

} else {
var statearr_33201_33213 = state_33195__$1;
(statearr_33201_33213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (3))){
var inst_33193 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33195__$1,inst_33193);
} else {
if((state_val_33196 === (4))){
var inst_33178 = (state_33195[(10)]);
var inst_33183 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33178);
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33195__$1,(7),inst_33183);
} else {
if((state_val_33196 === (5))){
var inst_33189 = cljs.core.async.close_BANG_.call(null,out);
var state_33195__$1 = state_33195;
var statearr_33202_33214 = state_33195__$1;
(statearr_33202_33214[(2)] = inst_33189);

(statearr_33202_33214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (6))){
var inst_33191 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
var statearr_33203_33215 = state_33195__$1;
(statearr_33203_33215[(2)] = inst_33191);

(statearr_33203_33215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (7))){
var inst_33179 = (state_33195[(11)]);
var inst_33185 = (state_33195[(2)]);
var inst_33186 = cljs.core.async.put_BANG_.call(null,out,inst_33185);
var inst_33172 = inst_33179;
var state_33195__$1 = (function (){var statearr_33204 = state_33195;
(statearr_33204[(7)] = inst_33172);

(statearr_33204[(12)] = inst_33186);

return statearr_33204;
})();
var statearr_33205_33216 = state_33195__$1;
(statearr_33205_33216[(2)] = null);

(statearr_33205_33216[(1)] = (2));


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
});})(c__29538__auto___33210,out))
;
return ((function (switch__29443__auto__,c__29538__auto___33210,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____0 = (function (){
var statearr_33206 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33206[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__);

(statearr_33206[(1)] = (1));

return statearr_33206;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____1 = (function (state_33195){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_33195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e33207){if((e33207 instanceof Object)){
var ex__29447__auto__ = e33207;
var statearr_33208_33217 = state_33195;
(statearr_33208_33217[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33218 = state_33195;
state_33195 = G__33218;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__ = function(state_33195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____1.call(this,state_33195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___33210,out))
})();
var state__29540__auto__ = (function (){var statearr_33209 = f__29539__auto__.call(null);
(statearr_33209[(6)] = c__29538__auto___33210);

return statearr_33209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___33210,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33219,opts){
var map__33220 = p__33219;
var map__33220__$1 = (((((!((map__33220 == null))))?(((((map__33220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33220):map__33220);
var eval_body = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33222){var e = e33222;
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
return (function (p1__33223_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33223_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33224){
var vec__33225 = p__33224;
var k = cljs.core.nth.call(null,vec__33225,(0),null);
var v = cljs.core.nth.call(null,vec__33225,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33228){
var vec__33229 = p__33228;
var k = cljs.core.nth.call(null,vec__33229,(0),null);
var v = cljs.core.nth.call(null,vec__33229,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33235,p__33236){
var map__33237 = p__33235;
var map__33237__$1 = (((((!((map__33237 == null))))?(((((map__33237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33237):map__33237);
var opts = map__33237__$1;
var before_jsload = cljs.core.get.call(null,map__33237__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33237__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33237__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33238 = p__33236;
var map__33238__$1 = (((((!((map__33238 == null))))?(((((map__33238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);
var msg = map__33238__$1;
var files = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33392){
var state_val_33393 = (state_33392[(1)]);
if((state_val_33393 === (7))){
var inst_33255 = (state_33392[(7)]);
var inst_33254 = (state_33392[(8)]);
var inst_33253 = (state_33392[(9)]);
var inst_33252 = (state_33392[(10)]);
var inst_33260 = cljs.core._nth.call(null,inst_33253,inst_33255);
var inst_33261 = figwheel.client.file_reloading.eval_body.call(null,inst_33260,opts);
var inst_33262 = (inst_33255 + (1));
var tmp33394 = inst_33254;
var tmp33395 = inst_33253;
var tmp33396 = inst_33252;
var inst_33252__$1 = tmp33396;
var inst_33253__$1 = tmp33395;
var inst_33254__$1 = tmp33394;
var inst_33255__$1 = inst_33262;
var state_33392__$1 = (function (){var statearr_33397 = state_33392;
(statearr_33397[(7)] = inst_33255__$1);

(statearr_33397[(8)] = inst_33254__$1);

(statearr_33397[(11)] = inst_33261);

(statearr_33397[(9)] = inst_33253__$1);

(statearr_33397[(10)] = inst_33252__$1);

return statearr_33397;
})();
var statearr_33398_33481 = state_33392__$1;
(statearr_33398_33481[(2)] = null);

(statearr_33398_33481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (20))){
var inst_33295 = (state_33392[(12)]);
var inst_33303 = figwheel.client.file_reloading.sort_files.call(null,inst_33295);
var state_33392__$1 = state_33392;
var statearr_33399_33482 = state_33392__$1;
(statearr_33399_33482[(2)] = inst_33303);

(statearr_33399_33482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (27))){
var state_33392__$1 = state_33392;
var statearr_33400_33483 = state_33392__$1;
(statearr_33400_33483[(2)] = null);

(statearr_33400_33483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (1))){
var inst_33244 = (state_33392[(13)]);
var inst_33241 = before_jsload.call(null,files);
var inst_33242 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33243 = (function (){return ((function (inst_33244,inst_33241,inst_33242,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33232_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33232_SHARP_);
});
;})(inst_33244,inst_33241,inst_33242,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33244__$1 = cljs.core.filter.call(null,inst_33243,files);
var inst_33245 = cljs.core.not_empty.call(null,inst_33244__$1);
var state_33392__$1 = (function (){var statearr_33401 = state_33392;
(statearr_33401[(14)] = inst_33241);

(statearr_33401[(13)] = inst_33244__$1);

(statearr_33401[(15)] = inst_33242);

return statearr_33401;
})();
if(cljs.core.truth_(inst_33245)){
var statearr_33402_33484 = state_33392__$1;
(statearr_33402_33484[(1)] = (2));

} else {
var statearr_33403_33485 = state_33392__$1;
(statearr_33403_33485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (24))){
var state_33392__$1 = state_33392;
var statearr_33404_33486 = state_33392__$1;
(statearr_33404_33486[(2)] = null);

(statearr_33404_33486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (39))){
var inst_33345 = (state_33392[(16)]);
var state_33392__$1 = state_33392;
var statearr_33405_33487 = state_33392__$1;
(statearr_33405_33487[(2)] = inst_33345);

(statearr_33405_33487[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (46))){
var inst_33387 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33406_33488 = state_33392__$1;
(statearr_33406_33488[(2)] = inst_33387);

(statearr_33406_33488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (4))){
var inst_33289 = (state_33392[(2)]);
var inst_33290 = cljs.core.List.EMPTY;
var inst_33291 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33290);
var inst_33292 = (function (){return ((function (inst_33289,inst_33290,inst_33291,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33233_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33233_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33233_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33233_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_33289,inst_33290,inst_33291,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33293 = cljs.core.filter.call(null,inst_33292,files);
var inst_33294 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33295 = cljs.core.concat.call(null,inst_33293,inst_33294);
var state_33392__$1 = (function (){var statearr_33407 = state_33392;
(statearr_33407[(12)] = inst_33295);

(statearr_33407[(17)] = inst_33291);

(statearr_33407[(18)] = inst_33289);

return statearr_33407;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33408_33489 = state_33392__$1;
(statearr_33408_33489[(1)] = (16));

} else {
var statearr_33409_33490 = state_33392__$1;
(statearr_33409_33490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (15))){
var inst_33279 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33410_33491 = state_33392__$1;
(statearr_33410_33491[(2)] = inst_33279);

(statearr_33410_33491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (21))){
var inst_33305 = (state_33392[(19)]);
var inst_33305__$1 = (state_33392[(2)]);
var inst_33306 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33305__$1);
var state_33392__$1 = (function (){var statearr_33411 = state_33392;
(statearr_33411[(19)] = inst_33305__$1);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33392__$1,(22),inst_33306);
} else {
if((state_val_33393 === (31))){
var inst_33390 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33392__$1,inst_33390);
} else {
if((state_val_33393 === (32))){
var inst_33345 = (state_33392[(16)]);
var inst_33350 = inst_33345.cljs$lang$protocol_mask$partition0$;
var inst_33351 = (inst_33350 & (64));
var inst_33352 = inst_33345.cljs$core$ISeq$;
var inst_33353 = (cljs.core.PROTOCOL_SENTINEL === inst_33352);
var inst_33354 = ((inst_33351) || (inst_33353));
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33354)){
var statearr_33412_33492 = state_33392__$1;
(statearr_33412_33492[(1)] = (35));

} else {
var statearr_33413_33493 = state_33392__$1;
(statearr_33413_33493[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (40))){
var inst_33367 = (state_33392[(20)]);
var inst_33366 = (state_33392[(2)]);
var inst_33367__$1 = cljs.core.get.call(null,inst_33366,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33368 = cljs.core.get.call(null,inst_33366,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33369 = cljs.core.not_empty.call(null,inst_33367__$1);
var state_33392__$1 = (function (){var statearr_33414 = state_33392;
(statearr_33414[(20)] = inst_33367__$1);

(statearr_33414[(21)] = inst_33368);

return statearr_33414;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33415_33494 = state_33392__$1;
(statearr_33415_33494[(1)] = (41));

} else {
var statearr_33416_33495 = state_33392__$1;
(statearr_33416_33495[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (33))){
var state_33392__$1 = state_33392;
var statearr_33417_33496 = state_33392__$1;
(statearr_33417_33496[(2)] = false);

(statearr_33417_33496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (13))){
var inst_33265 = (state_33392[(22)]);
var inst_33269 = cljs.core.chunk_first.call(null,inst_33265);
var inst_33270 = cljs.core.chunk_rest.call(null,inst_33265);
var inst_33271 = cljs.core.count.call(null,inst_33269);
var inst_33252 = inst_33270;
var inst_33253 = inst_33269;
var inst_33254 = inst_33271;
var inst_33255 = (0);
var state_33392__$1 = (function (){var statearr_33418 = state_33392;
(statearr_33418[(7)] = inst_33255);

(statearr_33418[(8)] = inst_33254);

(statearr_33418[(9)] = inst_33253);

(statearr_33418[(10)] = inst_33252);

return statearr_33418;
})();
var statearr_33419_33497 = state_33392__$1;
(statearr_33419_33497[(2)] = null);

(statearr_33419_33497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (22))){
var inst_33313 = (state_33392[(23)]);
var inst_33308 = (state_33392[(24)]);
var inst_33309 = (state_33392[(25)]);
var inst_33305 = (state_33392[(19)]);
var inst_33308__$1 = (state_33392[(2)]);
var inst_33309__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33308__$1);
var inst_33310 = (function (){var all_files = inst_33305;
var res_SINGLEQUOTE_ = inst_33308__$1;
var res = inst_33309__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33313,inst_33308,inst_33309,inst_33305,inst_33308__$1,inst_33309__$1,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33234_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33234_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33313,inst_33308,inst_33309,inst_33305,inst_33308__$1,inst_33309__$1,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33311 = cljs.core.filter.call(null,inst_33310,inst_33308__$1);
var inst_33312 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33313__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33312);
var inst_33314 = cljs.core.not_empty.call(null,inst_33313__$1);
var state_33392__$1 = (function (){var statearr_33420 = state_33392;
(statearr_33420[(23)] = inst_33313__$1);

(statearr_33420[(24)] = inst_33308__$1);

(statearr_33420[(25)] = inst_33309__$1);

(statearr_33420[(26)] = inst_33311);

return statearr_33420;
})();
if(cljs.core.truth_(inst_33314)){
var statearr_33421_33498 = state_33392__$1;
(statearr_33421_33498[(1)] = (23));

} else {
var statearr_33422_33499 = state_33392__$1;
(statearr_33422_33499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (36))){
var state_33392__$1 = state_33392;
var statearr_33423_33500 = state_33392__$1;
(statearr_33423_33500[(2)] = false);

(statearr_33423_33500[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (41))){
var inst_33367 = (state_33392[(20)]);
var inst_33371 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33372 = cljs.core.map.call(null,inst_33371,inst_33367);
var inst_33373 = cljs.core.pr_str.call(null,inst_33372);
var inst_33374 = ["figwheel-no-load meta-data: ",inst_33373].join('');
var inst_33375 = figwheel.client.utils.log.call(null,inst_33374);
var state_33392__$1 = state_33392;
var statearr_33424_33501 = state_33392__$1;
(statearr_33424_33501[(2)] = inst_33375);

(statearr_33424_33501[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (43))){
var inst_33368 = (state_33392[(21)]);
var inst_33378 = (state_33392[(2)]);
var inst_33379 = cljs.core.not_empty.call(null,inst_33368);
var state_33392__$1 = (function (){var statearr_33425 = state_33392;
(statearr_33425[(27)] = inst_33378);

return statearr_33425;
})();
if(cljs.core.truth_(inst_33379)){
var statearr_33426_33502 = state_33392__$1;
(statearr_33426_33502[(1)] = (44));

} else {
var statearr_33427_33503 = state_33392__$1;
(statearr_33427_33503[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (29))){
var inst_33313 = (state_33392[(23)]);
var inst_33308 = (state_33392[(24)]);
var inst_33309 = (state_33392[(25)]);
var inst_33305 = (state_33392[(19)]);
var inst_33311 = (state_33392[(26)]);
var inst_33345 = (state_33392[(16)]);
var inst_33341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33344 = (function (){var all_files = inst_33305;
var res_SINGLEQUOTE_ = inst_33308;
var res = inst_33309;
var files_not_loaded = inst_33311;
var dependencies_that_loaded = inst_33313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33345,inst_33341,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33343){
var map__33428 = p__33343;
var map__33428__$1 = (((((!((map__33428 == null))))?(((((map__33428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var namespace = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33345,inst_33341,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33345__$1 = cljs.core.group_by.call(null,inst_33344,inst_33311);
var inst_33347 = (inst_33345__$1 == null);
var inst_33348 = cljs.core.not.call(null,inst_33347);
var state_33392__$1 = (function (){var statearr_33430 = state_33392;
(statearr_33430[(28)] = inst_33341);

(statearr_33430[(16)] = inst_33345__$1);

return statearr_33430;
})();
if(inst_33348){
var statearr_33431_33504 = state_33392__$1;
(statearr_33431_33504[(1)] = (32));

} else {
var statearr_33432_33505 = state_33392__$1;
(statearr_33432_33505[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (44))){
var inst_33368 = (state_33392[(21)]);
var inst_33381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33368);
var inst_33382 = cljs.core.pr_str.call(null,inst_33381);
var inst_33383 = ["not required: ",inst_33382].join('');
var inst_33384 = figwheel.client.utils.log.call(null,inst_33383);
var state_33392__$1 = state_33392;
var statearr_33433_33506 = state_33392__$1;
(statearr_33433_33506[(2)] = inst_33384);

(statearr_33433_33506[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (6))){
var inst_33286 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33434_33507 = state_33392__$1;
(statearr_33434_33507[(2)] = inst_33286);

(statearr_33434_33507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (28))){
var inst_33311 = (state_33392[(26)]);
var inst_33338 = (state_33392[(2)]);
var inst_33339 = cljs.core.not_empty.call(null,inst_33311);
var state_33392__$1 = (function (){var statearr_33435 = state_33392;
(statearr_33435[(29)] = inst_33338);

return statearr_33435;
})();
if(cljs.core.truth_(inst_33339)){
var statearr_33436_33508 = state_33392__$1;
(statearr_33436_33508[(1)] = (29));

} else {
var statearr_33437_33509 = state_33392__$1;
(statearr_33437_33509[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (25))){
var inst_33309 = (state_33392[(25)]);
var inst_33325 = (state_33392[(2)]);
var inst_33326 = cljs.core.not_empty.call(null,inst_33309);
var state_33392__$1 = (function (){var statearr_33438 = state_33392;
(statearr_33438[(30)] = inst_33325);

return statearr_33438;
})();
if(cljs.core.truth_(inst_33326)){
var statearr_33439_33510 = state_33392__$1;
(statearr_33439_33510[(1)] = (26));

} else {
var statearr_33440_33511 = state_33392__$1;
(statearr_33440_33511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (34))){
var inst_33361 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33361)){
var statearr_33441_33512 = state_33392__$1;
(statearr_33441_33512[(1)] = (38));

} else {
var statearr_33442_33513 = state_33392__$1;
(statearr_33442_33513[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (17))){
var state_33392__$1 = state_33392;
var statearr_33443_33514 = state_33392__$1;
(statearr_33443_33514[(2)] = recompile_dependents);

(statearr_33443_33514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (3))){
var state_33392__$1 = state_33392;
var statearr_33444_33515 = state_33392__$1;
(statearr_33444_33515[(2)] = null);

(statearr_33444_33515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (12))){
var inst_33282 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33445_33516 = state_33392__$1;
(statearr_33445_33516[(2)] = inst_33282);

(statearr_33445_33516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (2))){
var inst_33244 = (state_33392[(13)]);
var inst_33251 = cljs.core.seq.call(null,inst_33244);
var inst_33252 = inst_33251;
var inst_33253 = null;
var inst_33254 = (0);
var inst_33255 = (0);
var state_33392__$1 = (function (){var statearr_33446 = state_33392;
(statearr_33446[(7)] = inst_33255);

(statearr_33446[(8)] = inst_33254);

(statearr_33446[(9)] = inst_33253);

(statearr_33446[(10)] = inst_33252);

return statearr_33446;
})();
var statearr_33447_33517 = state_33392__$1;
(statearr_33447_33517[(2)] = null);

(statearr_33447_33517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (23))){
var inst_33313 = (state_33392[(23)]);
var inst_33308 = (state_33392[(24)]);
var inst_33309 = (state_33392[(25)]);
var inst_33305 = (state_33392[(19)]);
var inst_33311 = (state_33392[(26)]);
var inst_33316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33318 = (function (){var all_files = inst_33305;
var res_SINGLEQUOTE_ = inst_33308;
var res = inst_33309;
var files_not_loaded = inst_33311;
var dependencies_that_loaded = inst_33313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33316,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33317){
var map__33448 = p__33317;
var map__33448__$1 = (((((!((map__33448 == null))))?(((((map__33448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33448):map__33448);
var request_url = cljs.core.get.call(null,map__33448__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33316,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33319 = cljs.core.reverse.call(null,inst_33313);
var inst_33320 = cljs.core.map.call(null,inst_33318,inst_33319);
var inst_33321 = cljs.core.pr_str.call(null,inst_33320);
var inst_33322 = figwheel.client.utils.log.call(null,inst_33321);
var state_33392__$1 = (function (){var statearr_33450 = state_33392;
(statearr_33450[(31)] = inst_33316);

return statearr_33450;
})();
var statearr_33451_33518 = state_33392__$1;
(statearr_33451_33518[(2)] = inst_33322);

(statearr_33451_33518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (35))){
var state_33392__$1 = state_33392;
var statearr_33452_33519 = state_33392__$1;
(statearr_33452_33519[(2)] = true);

(statearr_33452_33519[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (19))){
var inst_33295 = (state_33392[(12)]);
var inst_33301 = figwheel.client.file_reloading.expand_files.call(null,inst_33295);
var state_33392__$1 = state_33392;
var statearr_33453_33520 = state_33392__$1;
(statearr_33453_33520[(2)] = inst_33301);

(statearr_33453_33520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (11))){
var state_33392__$1 = state_33392;
var statearr_33454_33521 = state_33392__$1;
(statearr_33454_33521[(2)] = null);

(statearr_33454_33521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (9))){
var inst_33284 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33455_33522 = state_33392__$1;
(statearr_33455_33522[(2)] = inst_33284);

(statearr_33455_33522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (5))){
var inst_33255 = (state_33392[(7)]);
var inst_33254 = (state_33392[(8)]);
var inst_33257 = (inst_33255 < inst_33254);
var inst_33258 = inst_33257;
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33258)){
var statearr_33456_33523 = state_33392__$1;
(statearr_33456_33523[(1)] = (7));

} else {
var statearr_33457_33524 = state_33392__$1;
(statearr_33457_33524[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (14))){
var inst_33265 = (state_33392[(22)]);
var inst_33274 = cljs.core.first.call(null,inst_33265);
var inst_33275 = figwheel.client.file_reloading.eval_body.call(null,inst_33274,opts);
var inst_33276 = cljs.core.next.call(null,inst_33265);
var inst_33252 = inst_33276;
var inst_33253 = null;
var inst_33254 = (0);
var inst_33255 = (0);
var state_33392__$1 = (function (){var statearr_33458 = state_33392;
(statearr_33458[(7)] = inst_33255);

(statearr_33458[(32)] = inst_33275);

(statearr_33458[(8)] = inst_33254);

(statearr_33458[(9)] = inst_33253);

(statearr_33458[(10)] = inst_33252);

return statearr_33458;
})();
var statearr_33459_33525 = state_33392__$1;
(statearr_33459_33525[(2)] = null);

(statearr_33459_33525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (45))){
var state_33392__$1 = state_33392;
var statearr_33460_33526 = state_33392__$1;
(statearr_33460_33526[(2)] = null);

(statearr_33460_33526[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (26))){
var inst_33313 = (state_33392[(23)]);
var inst_33308 = (state_33392[(24)]);
var inst_33309 = (state_33392[(25)]);
var inst_33305 = (state_33392[(19)]);
var inst_33311 = (state_33392[(26)]);
var inst_33328 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33330 = (function (){var all_files = inst_33305;
var res_SINGLEQUOTE_ = inst_33308;
var res = inst_33309;
var files_not_loaded = inst_33311;
var dependencies_that_loaded = inst_33313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33328,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33329){
var map__33461 = p__33329;
var map__33461__$1 = (((((!((map__33461 == null))))?(((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var namespace = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33328,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33331 = cljs.core.map.call(null,inst_33330,inst_33309);
var inst_33332 = cljs.core.pr_str.call(null,inst_33331);
var inst_33333 = figwheel.client.utils.log.call(null,inst_33332);
var inst_33334 = (function (){var all_files = inst_33305;
var res_SINGLEQUOTE_ = inst_33308;
var res = inst_33309;
var files_not_loaded = inst_33311;
var dependencies_that_loaded = inst_33313;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33328,inst_33330,inst_33331,inst_33332,inst_33333,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33313,inst_33308,inst_33309,inst_33305,inst_33311,inst_33328,inst_33330,inst_33331,inst_33332,inst_33333,state_val_33393,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33335 = setTimeout(inst_33334,(10));
var state_33392__$1 = (function (){var statearr_33463 = state_33392;
(statearr_33463[(33)] = inst_33328);

(statearr_33463[(34)] = inst_33333);

return statearr_33463;
})();
var statearr_33464_33527 = state_33392__$1;
(statearr_33464_33527[(2)] = inst_33335);

(statearr_33464_33527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (16))){
var state_33392__$1 = state_33392;
var statearr_33465_33528 = state_33392__$1;
(statearr_33465_33528[(2)] = reload_dependents);

(statearr_33465_33528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (38))){
var inst_33345 = (state_33392[(16)]);
var inst_33363 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33345);
var state_33392__$1 = state_33392;
var statearr_33466_33529 = state_33392__$1;
(statearr_33466_33529[(2)] = inst_33363);

(statearr_33466_33529[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (30))){
var state_33392__$1 = state_33392;
var statearr_33467_33530 = state_33392__$1;
(statearr_33467_33530[(2)] = null);

(statearr_33467_33530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (10))){
var inst_33265 = (state_33392[(22)]);
var inst_33267 = cljs.core.chunked_seq_QMARK_.call(null,inst_33265);
var state_33392__$1 = state_33392;
if(inst_33267){
var statearr_33468_33531 = state_33392__$1;
(statearr_33468_33531[(1)] = (13));

} else {
var statearr_33469_33532 = state_33392__$1;
(statearr_33469_33532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (18))){
var inst_33299 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
if(cljs.core.truth_(inst_33299)){
var statearr_33470_33533 = state_33392__$1;
(statearr_33470_33533[(1)] = (19));

} else {
var statearr_33471_33534 = state_33392__$1;
(statearr_33471_33534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (42))){
var state_33392__$1 = state_33392;
var statearr_33472_33535 = state_33392__$1;
(statearr_33472_33535[(2)] = null);

(statearr_33472_33535[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (37))){
var inst_33358 = (state_33392[(2)]);
var state_33392__$1 = state_33392;
var statearr_33473_33536 = state_33392__$1;
(statearr_33473_33536[(2)] = inst_33358);

(statearr_33473_33536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33393 === (8))){
var inst_33265 = (state_33392[(22)]);
var inst_33252 = (state_33392[(10)]);
var inst_33265__$1 = cljs.core.seq.call(null,inst_33252);
var state_33392__$1 = (function (){var statearr_33474 = state_33392;
(statearr_33474[(22)] = inst_33265__$1);

return statearr_33474;
})();
if(inst_33265__$1){
var statearr_33475_33537 = state_33392__$1;
(statearr_33475_33537[(1)] = (10));

} else {
var statearr_33476_33538 = state_33392__$1;
(statearr_33476_33538[(1)] = (11));

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
});})(c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29443__auto__,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____0 = (function (){
var statearr_33477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33477[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__);

(statearr_33477[(1)] = (1));

return statearr_33477;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____1 = (function (state_33392){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_33392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e33478){if((e33478 instanceof Object)){
var ex__29447__auto__ = e33478;
var statearr_33479_33539 = state_33392;
(statearr_33479_33539[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33540 = state_33392;
state_33392 = G__33540;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__ = function(state_33392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____1.call(this,state_33392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29540__auto__ = (function (){var statearr_33480 = f__29539__auto__.call(null);
(statearr_33480[(6)] = c__29538__auto__);

return statearr_33480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__,map__33237,map__33237__$1,opts,before_jsload,on_jsload,reload_dependents,map__33238,map__33238__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29538__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33543,link){
var map__33544 = p__33543;
var map__33544__$1 = (((((!((map__33544 == null))))?(((((map__33544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33544):map__33544);
var file = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__33544,map__33544__$1,file){
return (function (p1__33541_SHARP_,p2__33542_SHARP_){
if(cljs.core._EQ_.call(null,p1__33541_SHARP_,p2__33542_SHARP_)){
return p1__33541_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__33544,map__33544__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33547){
var map__33548 = p__33547;
var map__33548__$1 = (((((!((map__33548 == null))))?(((((map__33548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33548):map__33548);
var match_length = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33546_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33546_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33550_SHARP_,p2__33551_SHARP_){
return cljs.core.assoc.call(null,p1__33550_SHARP_,cljs.core.get.call(null,p2__33551_SHARP_,key),p2__33551_SHARP_);
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
var loaded_f_datas_33552 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33552);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33552);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33553,p__33554){
var map__33555 = p__33553;
var map__33555__$1 = (((((!((map__33555 == null))))?(((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33555):map__33555);
var on_cssload = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33556 = p__33554;
var map__33556__$1 = (((((!((map__33556 == null))))?(((((map__33556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33556):map__33556);
var files_msg = map__33556__$1;
var files = cljs.core.get.call(null,map__33556__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581343832894
