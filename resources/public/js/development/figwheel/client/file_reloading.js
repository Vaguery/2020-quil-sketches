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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27143_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27143_SHARP_));
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
var seq__27144 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27145 = null;
var count__27146 = (0);
var i__27147 = (0);
while(true){
if((i__27147 < count__27146)){
var n = cljs.core._nth.call(null,chunk__27145,i__27147);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27148 = seq__27144;
var G__27149 = chunk__27145;
var G__27150 = count__27146;
var G__27151 = (i__27147 + (1));
seq__27144 = G__27148;
chunk__27145 = G__27149;
count__27146 = G__27150;
i__27147 = G__27151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27144);
if(temp__5735__auto__){
var seq__27144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27144__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27144__$1);
var G__27152 = cljs.core.chunk_rest.call(null,seq__27144__$1);
var G__27153 = c__4550__auto__;
var G__27154 = cljs.core.count.call(null,c__4550__auto__);
var G__27155 = (0);
seq__27144 = G__27152;
chunk__27145 = G__27153;
count__27146 = G__27154;
i__27147 = G__27155;
continue;
} else {
var n = cljs.core.first.call(null,seq__27144__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27156 = cljs.core.next.call(null,seq__27144__$1);
var G__27157 = null;
var G__27158 = (0);
var G__27159 = (0);
seq__27144 = G__27156;
chunk__27145 = G__27157;
count__27146 = G__27158;
i__27147 = G__27159;
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
return cljs.core.some.call(null,(function (p__27160){
var vec__27161 = p__27160;
var _ = cljs.core.nth.call(null,vec__27161,(0),null);
var v = cljs.core.nth.call(null,vec__27161,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27164){
var vec__27165 = p__27164;
var k = cljs.core.nth.call(null,vec__27165,(0),null);
var v = cljs.core.nth.call(null,vec__27165,(1),null);
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

var seq__27177_27185 = cljs.core.seq.call(null,deps);
var chunk__27178_27186 = null;
var count__27179_27187 = (0);
var i__27180_27188 = (0);
while(true){
if((i__27180_27188 < count__27179_27187)){
var dep_27189 = cljs.core._nth.call(null,chunk__27178_27186,i__27180_27188);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27189;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27189));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27189,(depth + (1)),state);
} else {
}


var G__27190 = seq__27177_27185;
var G__27191 = chunk__27178_27186;
var G__27192 = count__27179_27187;
var G__27193 = (i__27180_27188 + (1));
seq__27177_27185 = G__27190;
chunk__27178_27186 = G__27191;
count__27179_27187 = G__27192;
i__27180_27188 = G__27193;
continue;
} else {
var temp__5735__auto___27194 = cljs.core.seq.call(null,seq__27177_27185);
if(temp__5735__auto___27194){
var seq__27177_27195__$1 = temp__5735__auto___27194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27177_27195__$1)){
var c__4550__auto___27196 = cljs.core.chunk_first.call(null,seq__27177_27195__$1);
var G__27197 = cljs.core.chunk_rest.call(null,seq__27177_27195__$1);
var G__27198 = c__4550__auto___27196;
var G__27199 = cljs.core.count.call(null,c__4550__auto___27196);
var G__27200 = (0);
seq__27177_27185 = G__27197;
chunk__27178_27186 = G__27198;
count__27179_27187 = G__27199;
i__27180_27188 = G__27200;
continue;
} else {
var dep_27201 = cljs.core.first.call(null,seq__27177_27195__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27201;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27201));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27201,(depth + (1)),state);
} else {
}


var G__27202 = cljs.core.next.call(null,seq__27177_27195__$1);
var G__27203 = null;
var G__27204 = (0);
var G__27205 = (0);
seq__27177_27185 = G__27202;
chunk__27178_27186 = G__27203;
count__27179_27187 = G__27204;
i__27180_27188 = G__27205;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27181){
var vec__27182 = p__27181;
var seq__27183 = cljs.core.seq.call(null,vec__27182);
var first__27184 = cljs.core.first.call(null,seq__27183);
var seq__27183__$1 = cljs.core.next.call(null,seq__27183);
var x = first__27184;
var xs = seq__27183__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27182,seq__27183,first__27184,seq__27183__$1,x,xs,get_deps__$1){
return (function (p1__27168_SHARP_){
return clojure.set.difference.call(null,p1__27168_SHARP_,x);
});})(vec__27182,seq__27183,first__27184,seq__27183__$1,x,xs,get_deps__$1))
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
var seq__27206 = cljs.core.seq.call(null,provides);
var chunk__27207 = null;
var count__27208 = (0);
var i__27209 = (0);
while(true){
if((i__27209 < count__27208)){
var prov = cljs.core._nth.call(null,chunk__27207,i__27209);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27218_27226 = cljs.core.seq.call(null,requires);
var chunk__27219_27227 = null;
var count__27220_27228 = (0);
var i__27221_27229 = (0);
while(true){
if((i__27221_27229 < count__27220_27228)){
var req_27230 = cljs.core._nth.call(null,chunk__27219_27227,i__27221_27229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27230,prov);


var G__27231 = seq__27218_27226;
var G__27232 = chunk__27219_27227;
var G__27233 = count__27220_27228;
var G__27234 = (i__27221_27229 + (1));
seq__27218_27226 = G__27231;
chunk__27219_27227 = G__27232;
count__27220_27228 = G__27233;
i__27221_27229 = G__27234;
continue;
} else {
var temp__5735__auto___27235 = cljs.core.seq.call(null,seq__27218_27226);
if(temp__5735__auto___27235){
var seq__27218_27236__$1 = temp__5735__auto___27235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27218_27236__$1)){
var c__4550__auto___27237 = cljs.core.chunk_first.call(null,seq__27218_27236__$1);
var G__27238 = cljs.core.chunk_rest.call(null,seq__27218_27236__$1);
var G__27239 = c__4550__auto___27237;
var G__27240 = cljs.core.count.call(null,c__4550__auto___27237);
var G__27241 = (0);
seq__27218_27226 = G__27238;
chunk__27219_27227 = G__27239;
count__27220_27228 = G__27240;
i__27221_27229 = G__27241;
continue;
} else {
var req_27242 = cljs.core.first.call(null,seq__27218_27236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27242,prov);


var G__27243 = cljs.core.next.call(null,seq__27218_27236__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27218_27226 = G__27243;
chunk__27219_27227 = G__27244;
count__27220_27228 = G__27245;
i__27221_27229 = G__27246;
continue;
}
} else {
}
}
break;
}


var G__27247 = seq__27206;
var G__27248 = chunk__27207;
var G__27249 = count__27208;
var G__27250 = (i__27209 + (1));
seq__27206 = G__27247;
chunk__27207 = G__27248;
count__27208 = G__27249;
i__27209 = G__27250;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27206);
if(temp__5735__auto__){
var seq__27206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27206__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27206__$1);
var G__27251 = cljs.core.chunk_rest.call(null,seq__27206__$1);
var G__27252 = c__4550__auto__;
var G__27253 = cljs.core.count.call(null,c__4550__auto__);
var G__27254 = (0);
seq__27206 = G__27251;
chunk__27207 = G__27252;
count__27208 = G__27253;
i__27209 = G__27254;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27206__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27222_27255 = cljs.core.seq.call(null,requires);
var chunk__27223_27256 = null;
var count__27224_27257 = (0);
var i__27225_27258 = (0);
while(true){
if((i__27225_27258 < count__27224_27257)){
var req_27259 = cljs.core._nth.call(null,chunk__27223_27256,i__27225_27258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27259,prov);


var G__27260 = seq__27222_27255;
var G__27261 = chunk__27223_27256;
var G__27262 = count__27224_27257;
var G__27263 = (i__27225_27258 + (1));
seq__27222_27255 = G__27260;
chunk__27223_27256 = G__27261;
count__27224_27257 = G__27262;
i__27225_27258 = G__27263;
continue;
} else {
var temp__5735__auto___27264__$1 = cljs.core.seq.call(null,seq__27222_27255);
if(temp__5735__auto___27264__$1){
var seq__27222_27265__$1 = temp__5735__auto___27264__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27222_27265__$1)){
var c__4550__auto___27266 = cljs.core.chunk_first.call(null,seq__27222_27265__$1);
var G__27267 = cljs.core.chunk_rest.call(null,seq__27222_27265__$1);
var G__27268 = c__4550__auto___27266;
var G__27269 = cljs.core.count.call(null,c__4550__auto___27266);
var G__27270 = (0);
seq__27222_27255 = G__27267;
chunk__27223_27256 = G__27268;
count__27224_27257 = G__27269;
i__27225_27258 = G__27270;
continue;
} else {
var req_27271 = cljs.core.first.call(null,seq__27222_27265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27271,prov);


var G__27272 = cljs.core.next.call(null,seq__27222_27265__$1);
var G__27273 = null;
var G__27274 = (0);
var G__27275 = (0);
seq__27222_27255 = G__27272;
chunk__27223_27256 = G__27273;
count__27224_27257 = G__27274;
i__27225_27258 = G__27275;
continue;
}
} else {
}
}
break;
}


var G__27276 = cljs.core.next.call(null,seq__27206__$1);
var G__27277 = null;
var G__27278 = (0);
var G__27279 = (0);
seq__27206 = G__27276;
chunk__27207 = G__27277;
count__27208 = G__27278;
i__27209 = G__27279;
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
var seq__27280_27284 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27281_27285 = null;
var count__27282_27286 = (0);
var i__27283_27287 = (0);
while(true){
if((i__27283_27287 < count__27282_27286)){
var ns_27288 = cljs.core._nth.call(null,chunk__27281_27285,i__27283_27287);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27288);


var G__27289 = seq__27280_27284;
var G__27290 = chunk__27281_27285;
var G__27291 = count__27282_27286;
var G__27292 = (i__27283_27287 + (1));
seq__27280_27284 = G__27289;
chunk__27281_27285 = G__27290;
count__27282_27286 = G__27291;
i__27283_27287 = G__27292;
continue;
} else {
var temp__5735__auto___27293 = cljs.core.seq.call(null,seq__27280_27284);
if(temp__5735__auto___27293){
var seq__27280_27294__$1 = temp__5735__auto___27293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27280_27294__$1)){
var c__4550__auto___27295 = cljs.core.chunk_first.call(null,seq__27280_27294__$1);
var G__27296 = cljs.core.chunk_rest.call(null,seq__27280_27294__$1);
var G__27297 = c__4550__auto___27295;
var G__27298 = cljs.core.count.call(null,c__4550__auto___27295);
var G__27299 = (0);
seq__27280_27284 = G__27296;
chunk__27281_27285 = G__27297;
count__27282_27286 = G__27298;
i__27283_27287 = G__27299;
continue;
} else {
var ns_27300 = cljs.core.first.call(null,seq__27280_27294__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27300);


var G__27301 = cljs.core.next.call(null,seq__27280_27294__$1);
var G__27302 = null;
var G__27303 = (0);
var G__27304 = (0);
seq__27280_27284 = G__27301;
chunk__27281_27285 = G__27302;
count__27282_27286 = G__27303;
i__27283_27287 = G__27304;
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
var G__27305__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27306__i = 0, G__27306__a = new Array(arguments.length -  0);
while (G__27306__i < G__27306__a.length) {G__27306__a[G__27306__i] = arguments[G__27306__i + 0]; ++G__27306__i;}
  args = new cljs.core.IndexedSeq(G__27306__a,0,null);
} 
return G__27305__delegate.call(this,args);};
G__27305.cljs$lang$maxFixedArity = 0;
G__27305.cljs$lang$applyTo = (function (arglist__27307){
var args = cljs.core.seq(arglist__27307);
return G__27305__delegate(args);
});
G__27305.cljs$core$IFn$_invoke$arity$variadic = G__27305__delegate;
return G__27305;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27308_SHARP_,p2__27309_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27308_SHARP_)),p2__27309_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27310_SHARP_,p2__27311_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27310_SHARP_),p2__27311_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27312 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27312.addCallback(((function (G__27312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27312))
);

G__27312.addErrback(((function (G__27312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27312))
);

return G__27312;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27313){if((e27313 instanceof Error)){
var e = e27313;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27313;

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
}catch (e27314){if((e27314 instanceof Error)){
var e = e27314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27314;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27315 = cljs.core._EQ_;
var expr__27316 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27315.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27316))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27315.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27316))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27315.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27316))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27315,expr__27316){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27315,expr__27316))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27318,callback){
var map__27319 = p__27318;
var map__27319__$1 = (((((!((map__27319 == null))))?(((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var file_msg = map__27319__$1;
var request_url = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27319,map__27319__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27319,map__27319__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__){
return (function (state_27357){
var state_val_27358 = (state_27357[(1)]);
if((state_val_27358 === (7))){
var inst_27353 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27359_27385 = state_27357__$1;
(statearr_27359_27385[(2)] = inst_27353);

(statearr_27359_27385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (1))){
var state_27357__$1 = state_27357;
var statearr_27360_27386 = state_27357__$1;
(statearr_27360_27386[(2)] = null);

(statearr_27360_27386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (4))){
var inst_27323 = (state_27357[(7)]);
var inst_27323__$1 = (state_27357[(2)]);
var state_27357__$1 = (function (){var statearr_27361 = state_27357;
(statearr_27361[(7)] = inst_27323__$1);

return statearr_27361;
})();
if(cljs.core.truth_(inst_27323__$1)){
var statearr_27362_27387 = state_27357__$1;
(statearr_27362_27387[(1)] = (5));

} else {
var statearr_27363_27388 = state_27357__$1;
(statearr_27363_27388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (15))){
var inst_27336 = (state_27357[(8)]);
var inst_27338 = (state_27357[(9)]);
var inst_27340 = inst_27338.call(null,inst_27336);
var state_27357__$1 = state_27357;
var statearr_27364_27389 = state_27357__$1;
(statearr_27364_27389[(2)] = inst_27340);

(statearr_27364_27389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (13))){
var inst_27347 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27365_27390 = state_27357__$1;
(statearr_27365_27390[(2)] = inst_27347);

(statearr_27365_27390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (6))){
var state_27357__$1 = state_27357;
var statearr_27366_27391 = state_27357__$1;
(statearr_27366_27391[(2)] = null);

(statearr_27366_27391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (17))){
var inst_27344 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
var statearr_27367_27392 = state_27357__$1;
(statearr_27367_27392[(2)] = inst_27344);

(statearr_27367_27392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (3))){
var inst_27355 = (state_27357[(2)]);
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27357__$1,inst_27355);
} else {
if((state_val_27358 === (12))){
var state_27357__$1 = state_27357;
var statearr_27368_27393 = state_27357__$1;
(statearr_27368_27393[(2)] = null);

(statearr_27368_27393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (2))){
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27357__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27358 === (11))){
var inst_27328 = (state_27357[(10)]);
var inst_27334 = figwheel.client.file_reloading.blocking_load.call(null,inst_27328);
var state_27357__$1 = state_27357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27357__$1,(14),inst_27334);
} else {
if((state_val_27358 === (9))){
var inst_27328 = (state_27357[(10)]);
var state_27357__$1 = state_27357;
if(cljs.core.truth_(inst_27328)){
var statearr_27369_27394 = state_27357__$1;
(statearr_27369_27394[(1)] = (11));

} else {
var statearr_27370_27395 = state_27357__$1;
(statearr_27370_27395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (5))){
var inst_27329 = (state_27357[(11)]);
var inst_27323 = (state_27357[(7)]);
var inst_27328 = cljs.core.nth.call(null,inst_27323,(0),null);
var inst_27329__$1 = cljs.core.nth.call(null,inst_27323,(1),null);
var state_27357__$1 = (function (){var statearr_27371 = state_27357;
(statearr_27371[(10)] = inst_27328);

(statearr_27371[(11)] = inst_27329__$1);

return statearr_27371;
})();
if(cljs.core.truth_(inst_27329__$1)){
var statearr_27372_27396 = state_27357__$1;
(statearr_27372_27396[(1)] = (8));

} else {
var statearr_27373_27397 = state_27357__$1;
(statearr_27373_27397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (14))){
var inst_27338 = (state_27357[(9)]);
var inst_27328 = (state_27357[(10)]);
var inst_27336 = (state_27357[(2)]);
var inst_27337 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27338__$1 = cljs.core.get.call(null,inst_27337,inst_27328);
var state_27357__$1 = (function (){var statearr_27374 = state_27357;
(statearr_27374[(8)] = inst_27336);

(statearr_27374[(9)] = inst_27338__$1);

return statearr_27374;
})();
if(cljs.core.truth_(inst_27338__$1)){
var statearr_27375_27398 = state_27357__$1;
(statearr_27375_27398[(1)] = (15));

} else {
var statearr_27376_27399 = state_27357__$1;
(statearr_27376_27399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (16))){
var inst_27336 = (state_27357[(8)]);
var inst_27342 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27336);
var state_27357__$1 = state_27357;
var statearr_27377_27400 = state_27357__$1;
(statearr_27377_27400[(2)] = inst_27342);

(statearr_27377_27400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (10))){
var inst_27349 = (state_27357[(2)]);
var state_27357__$1 = (function (){var statearr_27378 = state_27357;
(statearr_27378[(12)] = inst_27349);

return statearr_27378;
})();
var statearr_27379_27401 = state_27357__$1;
(statearr_27379_27401[(2)] = null);

(statearr_27379_27401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27358 === (8))){
var inst_27329 = (state_27357[(11)]);
var inst_27331 = eval(inst_27329);
var state_27357__$1 = state_27357;
var statearr_27380_27402 = state_27357__$1;
(statearr_27380_27402[(2)] = inst_27331);

(statearr_27380_27402[(1)] = (10));


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
});})(c__23702__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23608__auto__ = null;
var figwheel$client$file_reloading$state_machine__23608__auto____0 = (function (){
var statearr_27381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27381[(0)] = figwheel$client$file_reloading$state_machine__23608__auto__);

(statearr_27381[(1)] = (1));

return statearr_27381;
});
var figwheel$client$file_reloading$state_machine__23608__auto____1 = (function (state_27357){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_27357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e27382){if((e27382 instanceof Object)){
var ex__23611__auto__ = e27382;
var statearr_27383_27403 = state_27357;
(statearr_27383_27403[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27404 = state_27357;
state_27357 = G__27404;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23608__auto__ = function(state_27357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23608__auto____1.call(this,state_27357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23608__auto____0;
figwheel$client$file_reloading$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23608__auto____1;
return figwheel$client$file_reloading$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__))
})();
var state__23704__auto__ = (function (){var statearr_27384 = f__23703__auto__.call(null);
(statearr_27384[(6)] = c__23702__auto__);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__))
);

return c__23702__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27406 = arguments.length;
switch (G__27406) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27408,callback){
var map__27409 = p__27408;
var map__27409__$1 = (((((!((map__27409 == null))))?(((((map__27409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27409):map__27409);
var file_msg = map__27409__$1;
var namespace = cljs.core.get.call(null,map__27409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27409,map__27409__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27409,map__27409__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27411){
var map__27412 = p__27411;
var map__27412__$1 = (((((!((map__27412 == null))))?(((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412):map__27412);
var file_msg = map__27412__$1;
var namespace = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27414){
var map__27415 = p__27414;
var map__27415__$1 = (((((!((map__27415 == null))))?(((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var file_msg = map__27415__$1;
var namespace = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27417,callback){
var map__27418 = p__27417;
var map__27418__$1 = (((((!((map__27418 == null))))?(((((map__27418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418):map__27418);
var file_msg = map__27418__$1;
var request_url = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23702__auto___27468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___27468,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___27468,out){
return (function (state_27453){
var state_val_27454 = (state_27453[(1)]);
if((state_val_27454 === (1))){
var inst_27427 = cljs.core.seq.call(null,files);
var inst_27428 = cljs.core.first.call(null,inst_27427);
var inst_27429 = cljs.core.next.call(null,inst_27427);
var inst_27430 = files;
var state_27453__$1 = (function (){var statearr_27455 = state_27453;
(statearr_27455[(7)] = inst_27428);

(statearr_27455[(8)] = inst_27430);

(statearr_27455[(9)] = inst_27429);

return statearr_27455;
})();
var statearr_27456_27469 = state_27453__$1;
(statearr_27456_27469[(2)] = null);

(statearr_27456_27469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27454 === (2))){
var inst_27436 = (state_27453[(10)]);
var inst_27430 = (state_27453[(8)]);
var inst_27435 = cljs.core.seq.call(null,inst_27430);
var inst_27436__$1 = cljs.core.first.call(null,inst_27435);
var inst_27437 = cljs.core.next.call(null,inst_27435);
var inst_27438 = (inst_27436__$1 == null);
var inst_27439 = cljs.core.not.call(null,inst_27438);
var state_27453__$1 = (function (){var statearr_27457 = state_27453;
(statearr_27457[(11)] = inst_27437);

(statearr_27457[(10)] = inst_27436__$1);

return statearr_27457;
})();
if(inst_27439){
var statearr_27458_27470 = state_27453__$1;
(statearr_27458_27470[(1)] = (4));

} else {
var statearr_27459_27471 = state_27453__$1;
(statearr_27459_27471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27454 === (3))){
var inst_27451 = (state_27453[(2)]);
var state_27453__$1 = state_27453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27453__$1,inst_27451);
} else {
if((state_val_27454 === (4))){
var inst_27436 = (state_27453[(10)]);
var inst_27441 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27436);
var state_27453__$1 = state_27453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27453__$1,(7),inst_27441);
} else {
if((state_val_27454 === (5))){
var inst_27447 = cljs.core.async.close_BANG_.call(null,out);
var state_27453__$1 = state_27453;
var statearr_27460_27472 = state_27453__$1;
(statearr_27460_27472[(2)] = inst_27447);

(statearr_27460_27472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27454 === (6))){
var inst_27449 = (state_27453[(2)]);
var state_27453__$1 = state_27453;
var statearr_27461_27473 = state_27453__$1;
(statearr_27461_27473[(2)] = inst_27449);

(statearr_27461_27473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27454 === (7))){
var inst_27437 = (state_27453[(11)]);
var inst_27443 = (state_27453[(2)]);
var inst_27444 = cljs.core.async.put_BANG_.call(null,out,inst_27443);
var inst_27430 = inst_27437;
var state_27453__$1 = (function (){var statearr_27462 = state_27453;
(statearr_27462[(8)] = inst_27430);

(statearr_27462[(12)] = inst_27444);

return statearr_27462;
})();
var statearr_27463_27474 = state_27453__$1;
(statearr_27463_27474[(2)] = null);

(statearr_27463_27474[(1)] = (2));


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
});})(c__23702__auto___27468,out))
;
return ((function (switch__23607__auto__,c__23702__auto___27468,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____0 = (function (){
var statearr_27464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27464[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__);

(statearr_27464[(1)] = (1));

return statearr_27464;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____1 = (function (state_27453){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_27453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e27465){if((e27465 instanceof Object)){
var ex__23611__auto__ = e27465;
var statearr_27466_27475 = state_27453;
(statearr_27466_27475[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27476 = state_27453;
state_27453 = G__27476;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__ = function(state_27453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____1.call(this,state_27453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___27468,out))
})();
var state__23704__auto__ = (function (){var statearr_27467 = f__23703__auto__.call(null);
(statearr_27467[(6)] = c__23702__auto___27468);

return statearr_27467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___27468,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27477,opts){
var map__27478 = p__27477;
var map__27478__$1 = (((((!((map__27478 == null))))?(((((map__27478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27478):map__27478);
var eval_body = cljs.core.get.call(null,map__27478__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27480){var e = e27480;
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
return (function (p1__27481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27481_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27482){
var vec__27483 = p__27482;
var k = cljs.core.nth.call(null,vec__27483,(0),null);
var v = cljs.core.nth.call(null,vec__27483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27486){
var vec__27487 = p__27486;
var k = cljs.core.nth.call(null,vec__27487,(0),null);
var v = cljs.core.nth.call(null,vec__27487,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27493,p__27494){
var map__27495 = p__27493;
var map__27495__$1 = (((((!((map__27495 == null))))?(((((map__27495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27495):map__27495);
var opts = map__27495__$1;
var before_jsload = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27495__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27496 = p__27494;
var map__27496__$1 = (((((!((map__27496 == null))))?(((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var msg = map__27496__$1;
var files = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27650){
var state_val_27651 = (state_27650[(1)]);
if((state_val_27651 === (7))){
var inst_27512 = (state_27650[(7)]);
var inst_27510 = (state_27650[(8)]);
var inst_27511 = (state_27650[(9)]);
var inst_27513 = (state_27650[(10)]);
var inst_27518 = cljs.core._nth.call(null,inst_27511,inst_27513);
var inst_27519 = figwheel.client.file_reloading.eval_body.call(null,inst_27518,opts);
var inst_27520 = (inst_27513 + (1));
var tmp27652 = inst_27512;
var tmp27653 = inst_27510;
var tmp27654 = inst_27511;
var inst_27510__$1 = tmp27653;
var inst_27511__$1 = tmp27654;
var inst_27512__$1 = tmp27652;
var inst_27513__$1 = inst_27520;
var state_27650__$1 = (function (){var statearr_27655 = state_27650;
(statearr_27655[(11)] = inst_27519);

(statearr_27655[(7)] = inst_27512__$1);

(statearr_27655[(8)] = inst_27510__$1);

(statearr_27655[(9)] = inst_27511__$1);

(statearr_27655[(10)] = inst_27513__$1);

return statearr_27655;
})();
var statearr_27656_27739 = state_27650__$1;
(statearr_27656_27739[(2)] = null);

(statearr_27656_27739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (20))){
var inst_27553 = (state_27650[(12)]);
var inst_27561 = figwheel.client.file_reloading.sort_files.call(null,inst_27553);
var state_27650__$1 = state_27650;
var statearr_27657_27740 = state_27650__$1;
(statearr_27657_27740[(2)] = inst_27561);

(statearr_27657_27740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (27))){
var state_27650__$1 = state_27650;
var statearr_27658_27741 = state_27650__$1;
(statearr_27658_27741[(2)] = null);

(statearr_27658_27741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (1))){
var inst_27502 = (state_27650[(13)]);
var inst_27499 = before_jsload.call(null,files);
var inst_27500 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27501 = (function (){return ((function (inst_27502,inst_27499,inst_27500,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27490_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27490_SHARP_);
});
;})(inst_27502,inst_27499,inst_27500,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27502__$1 = cljs.core.filter.call(null,inst_27501,files);
var inst_27503 = cljs.core.not_empty.call(null,inst_27502__$1);
var state_27650__$1 = (function (){var statearr_27659 = state_27650;
(statearr_27659[(14)] = inst_27499);

(statearr_27659[(15)] = inst_27500);

(statearr_27659[(13)] = inst_27502__$1);

return statearr_27659;
})();
if(cljs.core.truth_(inst_27503)){
var statearr_27660_27742 = state_27650__$1;
(statearr_27660_27742[(1)] = (2));

} else {
var statearr_27661_27743 = state_27650__$1;
(statearr_27661_27743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (24))){
var state_27650__$1 = state_27650;
var statearr_27662_27744 = state_27650__$1;
(statearr_27662_27744[(2)] = null);

(statearr_27662_27744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (39))){
var inst_27603 = (state_27650[(16)]);
var state_27650__$1 = state_27650;
var statearr_27663_27745 = state_27650__$1;
(statearr_27663_27745[(2)] = inst_27603);

(statearr_27663_27745[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (46))){
var inst_27645 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27664_27746 = state_27650__$1;
(statearr_27664_27746[(2)] = inst_27645);

(statearr_27664_27746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (4))){
var inst_27547 = (state_27650[(2)]);
var inst_27548 = cljs.core.List.EMPTY;
var inst_27549 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27548);
var inst_27550 = (function (){return ((function (inst_27547,inst_27548,inst_27549,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27491_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27491_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27491_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27491_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27547,inst_27548,inst_27549,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27551 = cljs.core.filter.call(null,inst_27550,files);
var inst_27552 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27553 = cljs.core.concat.call(null,inst_27551,inst_27552);
var state_27650__$1 = (function (){var statearr_27665 = state_27650;
(statearr_27665[(17)] = inst_27549);

(statearr_27665[(18)] = inst_27547);

(statearr_27665[(12)] = inst_27553);

return statearr_27665;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27666_27747 = state_27650__$1;
(statearr_27666_27747[(1)] = (16));

} else {
var statearr_27667_27748 = state_27650__$1;
(statearr_27667_27748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (15))){
var inst_27537 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27668_27749 = state_27650__$1;
(statearr_27668_27749[(2)] = inst_27537);

(statearr_27668_27749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (21))){
var inst_27563 = (state_27650[(19)]);
var inst_27563__$1 = (state_27650[(2)]);
var inst_27564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27563__$1);
var state_27650__$1 = (function (){var statearr_27669 = state_27650;
(statearr_27669[(19)] = inst_27563__$1);

return statearr_27669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27650__$1,(22),inst_27564);
} else {
if((state_val_27651 === (31))){
var inst_27648 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27650__$1,inst_27648);
} else {
if((state_val_27651 === (32))){
var inst_27603 = (state_27650[(16)]);
var inst_27608 = inst_27603.cljs$lang$protocol_mask$partition0$;
var inst_27609 = (inst_27608 & (64));
var inst_27610 = inst_27603.cljs$core$ISeq$;
var inst_27611 = (cljs.core.PROTOCOL_SENTINEL === inst_27610);
var inst_27612 = ((inst_27609) || (inst_27611));
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27612)){
var statearr_27670_27750 = state_27650__$1;
(statearr_27670_27750[(1)] = (35));

} else {
var statearr_27671_27751 = state_27650__$1;
(statearr_27671_27751[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (40))){
var inst_27625 = (state_27650[(20)]);
var inst_27624 = (state_27650[(2)]);
var inst_27625__$1 = cljs.core.get.call(null,inst_27624,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27626 = cljs.core.get.call(null,inst_27624,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27627 = cljs.core.not_empty.call(null,inst_27625__$1);
var state_27650__$1 = (function (){var statearr_27672 = state_27650;
(statearr_27672[(20)] = inst_27625__$1);

(statearr_27672[(21)] = inst_27626);

return statearr_27672;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27673_27752 = state_27650__$1;
(statearr_27673_27752[(1)] = (41));

} else {
var statearr_27674_27753 = state_27650__$1;
(statearr_27674_27753[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (33))){
var state_27650__$1 = state_27650;
var statearr_27675_27754 = state_27650__$1;
(statearr_27675_27754[(2)] = false);

(statearr_27675_27754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (13))){
var inst_27523 = (state_27650[(22)]);
var inst_27527 = cljs.core.chunk_first.call(null,inst_27523);
var inst_27528 = cljs.core.chunk_rest.call(null,inst_27523);
var inst_27529 = cljs.core.count.call(null,inst_27527);
var inst_27510 = inst_27528;
var inst_27511 = inst_27527;
var inst_27512 = inst_27529;
var inst_27513 = (0);
var state_27650__$1 = (function (){var statearr_27676 = state_27650;
(statearr_27676[(7)] = inst_27512);

(statearr_27676[(8)] = inst_27510);

(statearr_27676[(9)] = inst_27511);

(statearr_27676[(10)] = inst_27513);

return statearr_27676;
})();
var statearr_27677_27755 = state_27650__$1;
(statearr_27677_27755[(2)] = null);

(statearr_27677_27755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (22))){
var inst_27563 = (state_27650[(19)]);
var inst_27567 = (state_27650[(23)]);
var inst_27566 = (state_27650[(24)]);
var inst_27571 = (state_27650[(25)]);
var inst_27566__$1 = (state_27650[(2)]);
var inst_27567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27566__$1);
var inst_27568 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566__$1;
var res = inst_27567__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27563,inst_27567,inst_27566,inst_27571,inst_27566__$1,inst_27567__$1,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27492_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27492_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27563,inst_27567,inst_27566,inst_27571,inst_27566__$1,inst_27567__$1,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27569 = cljs.core.filter.call(null,inst_27568,inst_27566__$1);
var inst_27570 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27570);
var inst_27572 = cljs.core.not_empty.call(null,inst_27571__$1);
var state_27650__$1 = (function (){var statearr_27678 = state_27650;
(statearr_27678[(23)] = inst_27567__$1);

(statearr_27678[(26)] = inst_27569);

(statearr_27678[(24)] = inst_27566__$1);

(statearr_27678[(25)] = inst_27571__$1);

return statearr_27678;
})();
if(cljs.core.truth_(inst_27572)){
var statearr_27679_27756 = state_27650__$1;
(statearr_27679_27756[(1)] = (23));

} else {
var statearr_27680_27757 = state_27650__$1;
(statearr_27680_27757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (36))){
var state_27650__$1 = state_27650;
var statearr_27681_27758 = state_27650__$1;
(statearr_27681_27758[(2)] = false);

(statearr_27681_27758[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (41))){
var inst_27625 = (state_27650[(20)]);
var inst_27629 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27630 = cljs.core.map.call(null,inst_27629,inst_27625);
var inst_27631 = cljs.core.pr_str.call(null,inst_27630);
var inst_27632 = ["figwheel-no-load meta-data: ",inst_27631].join('');
var inst_27633 = figwheel.client.utils.log.call(null,inst_27632);
var state_27650__$1 = state_27650;
var statearr_27682_27759 = state_27650__$1;
(statearr_27682_27759[(2)] = inst_27633);

(statearr_27682_27759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (43))){
var inst_27626 = (state_27650[(21)]);
var inst_27636 = (state_27650[(2)]);
var inst_27637 = cljs.core.not_empty.call(null,inst_27626);
var state_27650__$1 = (function (){var statearr_27683 = state_27650;
(statearr_27683[(27)] = inst_27636);

return statearr_27683;
})();
if(cljs.core.truth_(inst_27637)){
var statearr_27684_27760 = state_27650__$1;
(statearr_27684_27760[(1)] = (44));

} else {
var statearr_27685_27761 = state_27650__$1;
(statearr_27685_27761[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (29))){
var inst_27603 = (state_27650[(16)]);
var inst_27563 = (state_27650[(19)]);
var inst_27567 = (state_27650[(23)]);
var inst_27569 = (state_27650[(26)]);
var inst_27566 = (state_27650[(24)]);
var inst_27571 = (state_27650[(25)]);
var inst_27599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27602 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27603,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27599,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27601){
var map__27686 = p__27601;
var map__27686__$1 = (((((!((map__27686 == null))))?(((((map__27686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27686):map__27686);
var namespace = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27603,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27599,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27603__$1 = cljs.core.group_by.call(null,inst_27602,inst_27569);
var inst_27605 = (inst_27603__$1 == null);
var inst_27606 = cljs.core.not.call(null,inst_27605);
var state_27650__$1 = (function (){var statearr_27688 = state_27650;
(statearr_27688[(16)] = inst_27603__$1);

(statearr_27688[(28)] = inst_27599);

return statearr_27688;
})();
if(inst_27606){
var statearr_27689_27762 = state_27650__$1;
(statearr_27689_27762[(1)] = (32));

} else {
var statearr_27690_27763 = state_27650__$1;
(statearr_27690_27763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (44))){
var inst_27626 = (state_27650[(21)]);
var inst_27639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27626);
var inst_27640 = cljs.core.pr_str.call(null,inst_27639);
var inst_27641 = ["not required: ",inst_27640].join('');
var inst_27642 = figwheel.client.utils.log.call(null,inst_27641);
var state_27650__$1 = state_27650;
var statearr_27691_27764 = state_27650__$1;
(statearr_27691_27764[(2)] = inst_27642);

(statearr_27691_27764[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (6))){
var inst_27544 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27692_27765 = state_27650__$1;
(statearr_27692_27765[(2)] = inst_27544);

(statearr_27692_27765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (28))){
var inst_27569 = (state_27650[(26)]);
var inst_27596 = (state_27650[(2)]);
var inst_27597 = cljs.core.not_empty.call(null,inst_27569);
var state_27650__$1 = (function (){var statearr_27693 = state_27650;
(statearr_27693[(29)] = inst_27596);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27597)){
var statearr_27694_27766 = state_27650__$1;
(statearr_27694_27766[(1)] = (29));

} else {
var statearr_27695_27767 = state_27650__$1;
(statearr_27695_27767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (25))){
var inst_27567 = (state_27650[(23)]);
var inst_27583 = (state_27650[(2)]);
var inst_27584 = cljs.core.not_empty.call(null,inst_27567);
var state_27650__$1 = (function (){var statearr_27696 = state_27650;
(statearr_27696[(30)] = inst_27583);

return statearr_27696;
})();
if(cljs.core.truth_(inst_27584)){
var statearr_27697_27768 = state_27650__$1;
(statearr_27697_27768[(1)] = (26));

} else {
var statearr_27698_27769 = state_27650__$1;
(statearr_27698_27769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (34))){
var inst_27619 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27619)){
var statearr_27699_27770 = state_27650__$1;
(statearr_27699_27770[(1)] = (38));

} else {
var statearr_27700_27771 = state_27650__$1;
(statearr_27700_27771[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (17))){
var state_27650__$1 = state_27650;
var statearr_27701_27772 = state_27650__$1;
(statearr_27701_27772[(2)] = recompile_dependents);

(statearr_27701_27772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (3))){
var state_27650__$1 = state_27650;
var statearr_27702_27773 = state_27650__$1;
(statearr_27702_27773[(2)] = null);

(statearr_27702_27773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (12))){
var inst_27540 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27703_27774 = state_27650__$1;
(statearr_27703_27774[(2)] = inst_27540);

(statearr_27703_27774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (2))){
var inst_27502 = (state_27650[(13)]);
var inst_27509 = cljs.core.seq.call(null,inst_27502);
var inst_27510 = inst_27509;
var inst_27511 = null;
var inst_27512 = (0);
var inst_27513 = (0);
var state_27650__$1 = (function (){var statearr_27704 = state_27650;
(statearr_27704[(7)] = inst_27512);

(statearr_27704[(8)] = inst_27510);

(statearr_27704[(9)] = inst_27511);

(statearr_27704[(10)] = inst_27513);

return statearr_27704;
})();
var statearr_27705_27775 = state_27650__$1;
(statearr_27705_27775[(2)] = null);

(statearr_27705_27775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (23))){
var inst_27563 = (state_27650[(19)]);
var inst_27567 = (state_27650[(23)]);
var inst_27569 = (state_27650[(26)]);
var inst_27566 = (state_27650[(24)]);
var inst_27571 = (state_27650[(25)]);
var inst_27574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27576 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27574,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27575){
var map__27706 = p__27575;
var map__27706__$1 = (((((!((map__27706 == null))))?(((((map__27706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var request_url = cljs.core.get.call(null,map__27706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27574,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27577 = cljs.core.reverse.call(null,inst_27571);
var inst_27578 = cljs.core.map.call(null,inst_27576,inst_27577);
var inst_27579 = cljs.core.pr_str.call(null,inst_27578);
var inst_27580 = figwheel.client.utils.log.call(null,inst_27579);
var state_27650__$1 = (function (){var statearr_27708 = state_27650;
(statearr_27708[(31)] = inst_27574);

return statearr_27708;
})();
var statearr_27709_27776 = state_27650__$1;
(statearr_27709_27776[(2)] = inst_27580);

(statearr_27709_27776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (35))){
var state_27650__$1 = state_27650;
var statearr_27710_27777 = state_27650__$1;
(statearr_27710_27777[(2)] = true);

(statearr_27710_27777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (19))){
var inst_27553 = (state_27650[(12)]);
var inst_27559 = figwheel.client.file_reloading.expand_files.call(null,inst_27553);
var state_27650__$1 = state_27650;
var statearr_27711_27778 = state_27650__$1;
(statearr_27711_27778[(2)] = inst_27559);

(statearr_27711_27778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (11))){
var state_27650__$1 = state_27650;
var statearr_27712_27779 = state_27650__$1;
(statearr_27712_27779[(2)] = null);

(statearr_27712_27779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (9))){
var inst_27542 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27713_27780 = state_27650__$1;
(statearr_27713_27780[(2)] = inst_27542);

(statearr_27713_27780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (5))){
var inst_27512 = (state_27650[(7)]);
var inst_27513 = (state_27650[(10)]);
var inst_27515 = (inst_27513 < inst_27512);
var inst_27516 = inst_27515;
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27516)){
var statearr_27714_27781 = state_27650__$1;
(statearr_27714_27781[(1)] = (7));

} else {
var statearr_27715_27782 = state_27650__$1;
(statearr_27715_27782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (14))){
var inst_27523 = (state_27650[(22)]);
var inst_27532 = cljs.core.first.call(null,inst_27523);
var inst_27533 = figwheel.client.file_reloading.eval_body.call(null,inst_27532,opts);
var inst_27534 = cljs.core.next.call(null,inst_27523);
var inst_27510 = inst_27534;
var inst_27511 = null;
var inst_27512 = (0);
var inst_27513 = (0);
var state_27650__$1 = (function (){var statearr_27716 = state_27650;
(statearr_27716[(7)] = inst_27512);

(statearr_27716[(32)] = inst_27533);

(statearr_27716[(8)] = inst_27510);

(statearr_27716[(9)] = inst_27511);

(statearr_27716[(10)] = inst_27513);

return statearr_27716;
})();
var statearr_27717_27783 = state_27650__$1;
(statearr_27717_27783[(2)] = null);

(statearr_27717_27783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (45))){
var state_27650__$1 = state_27650;
var statearr_27718_27784 = state_27650__$1;
(statearr_27718_27784[(2)] = null);

(statearr_27718_27784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (26))){
var inst_27563 = (state_27650[(19)]);
var inst_27567 = (state_27650[(23)]);
var inst_27569 = (state_27650[(26)]);
var inst_27566 = (state_27650[(24)]);
var inst_27571 = (state_27650[(25)]);
var inst_27586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27588 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27587){
var map__27719 = p__27587;
var map__27719__$1 = (((((!((map__27719 == null))))?(((((map__27719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);
var namespace = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27589 = cljs.core.map.call(null,inst_27588,inst_27567);
var inst_27590 = cljs.core.pr_str.call(null,inst_27589);
var inst_27591 = figwheel.client.utils.log.call(null,inst_27590);
var inst_27592 = (function (){var all_files = inst_27563;
var res_SINGLEQUOTE_ = inst_27566;
var res = inst_27567;
var files_not_loaded = inst_27569;
var dependencies_that_loaded = inst_27571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,inst_27588,inst_27589,inst_27590,inst_27591,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27563,inst_27567,inst_27569,inst_27566,inst_27571,inst_27586,inst_27588,inst_27589,inst_27590,inst_27591,state_val_27651,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27593 = setTimeout(inst_27592,(10));
var state_27650__$1 = (function (){var statearr_27721 = state_27650;
(statearr_27721[(33)] = inst_27591);

(statearr_27721[(34)] = inst_27586);

return statearr_27721;
})();
var statearr_27722_27785 = state_27650__$1;
(statearr_27722_27785[(2)] = inst_27593);

(statearr_27722_27785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (16))){
var state_27650__$1 = state_27650;
var statearr_27723_27786 = state_27650__$1;
(statearr_27723_27786[(2)] = reload_dependents);

(statearr_27723_27786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (38))){
var inst_27603 = (state_27650[(16)]);
var inst_27621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27603);
var state_27650__$1 = state_27650;
var statearr_27724_27787 = state_27650__$1;
(statearr_27724_27787[(2)] = inst_27621);

(statearr_27724_27787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (30))){
var state_27650__$1 = state_27650;
var statearr_27725_27788 = state_27650__$1;
(statearr_27725_27788[(2)] = null);

(statearr_27725_27788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (10))){
var inst_27523 = (state_27650[(22)]);
var inst_27525 = cljs.core.chunked_seq_QMARK_.call(null,inst_27523);
var state_27650__$1 = state_27650;
if(inst_27525){
var statearr_27726_27789 = state_27650__$1;
(statearr_27726_27789[(1)] = (13));

} else {
var statearr_27727_27790 = state_27650__$1;
(statearr_27727_27790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (18))){
var inst_27557 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27557)){
var statearr_27728_27791 = state_27650__$1;
(statearr_27728_27791[(1)] = (19));

} else {
var statearr_27729_27792 = state_27650__$1;
(statearr_27729_27792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (42))){
var state_27650__$1 = state_27650;
var statearr_27730_27793 = state_27650__$1;
(statearr_27730_27793[(2)] = null);

(statearr_27730_27793[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (37))){
var inst_27616 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27731_27794 = state_27650__$1;
(statearr_27731_27794[(2)] = inst_27616);

(statearr_27731_27794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (8))){
var inst_27523 = (state_27650[(22)]);
var inst_27510 = (state_27650[(8)]);
var inst_27523__$1 = cljs.core.seq.call(null,inst_27510);
var state_27650__$1 = (function (){var statearr_27732 = state_27650;
(statearr_27732[(22)] = inst_27523__$1);

return statearr_27732;
})();
if(inst_27523__$1){
var statearr_27733_27795 = state_27650__$1;
(statearr_27733_27795[(1)] = (10));

} else {
var statearr_27734_27796 = state_27650__$1;
(statearr_27734_27796[(1)] = (11));

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
});})(c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23607__auto__,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____0 = (function (){
var statearr_27735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27735[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__);

(statearr_27735[(1)] = (1));

return statearr_27735;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____1 = (function (state_27650){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_27650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e27736){if((e27736 instanceof Object)){
var ex__23611__auto__ = e27736;
var statearr_27737_27797 = state_27650;
(statearr_27737_27797[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27798 = state_27650;
state_27650 = G__27798;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__ = function(state_27650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____1.call(this,state_27650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23704__auto__ = (function (){var statearr_27738 = f__23703__auto__.call(null);
(statearr_27738[(6)] = c__23702__auto__);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__,map__27495,map__27495__$1,opts,before_jsload,on_jsload,reload_dependents,map__27496,map__27496__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23702__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27801,link){
var map__27802 = p__27801;
var map__27802__$1 = (((((!((map__27802 == null))))?(((((map__27802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27802):map__27802);
var file = cljs.core.get.call(null,map__27802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__27802,map__27802__$1,file){
return (function (p1__27799_SHARP_,p2__27800_SHARP_){
if(cljs.core._EQ_.call(null,p1__27799_SHARP_,p2__27800_SHARP_)){
return p1__27799_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__27802,map__27802__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27805){
var map__27806 = p__27805;
var map__27806__$1 = (((((!((map__27806 == null))))?(((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var match_length = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27804_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27804_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27808_SHARP_,p2__27809_SHARP_){
return cljs.core.assoc.call(null,p1__27808_SHARP_,cljs.core.get.call(null,p2__27809_SHARP_,key),p2__27809_SHARP_);
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
var loaded_f_datas_27810 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27810);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27810);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27811,p__27812){
var map__27813 = p__27811;
var map__27813__$1 = (((((!((map__27813 == null))))?(((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var on_cssload = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27814 = p__27812;
var map__27814__$1 = (((((!((map__27814 == null))))?(((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var files_msg = map__27814__$1;
var files = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581009605389
