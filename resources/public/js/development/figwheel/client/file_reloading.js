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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__63143_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__63143_SHARP_));
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
var seq__63144 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__63145 = null;
var count__63146 = (0);
var i__63147 = (0);
while(true){
if((i__63147 < count__63146)){
var n = cljs.core._nth.call(null,chunk__63145,i__63147);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__63148 = seq__63144;
var G__63149 = chunk__63145;
var G__63150 = count__63146;
var G__63151 = (i__63147 + (1));
seq__63144 = G__63148;
chunk__63145 = G__63149;
count__63146 = G__63150;
i__63147 = G__63151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__63144);
if(temp__5735__auto__){
var seq__63144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63144__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__63144__$1);
var G__63152 = cljs.core.chunk_rest.call(null,seq__63144__$1);
var G__63153 = c__4550__auto__;
var G__63154 = cljs.core.count.call(null,c__4550__auto__);
var G__63155 = (0);
seq__63144 = G__63152;
chunk__63145 = G__63153;
count__63146 = G__63154;
i__63147 = G__63155;
continue;
} else {
var n = cljs.core.first.call(null,seq__63144__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__63156 = cljs.core.next.call(null,seq__63144__$1);
var G__63157 = null;
var G__63158 = (0);
var G__63159 = (0);
seq__63144 = G__63156;
chunk__63145 = G__63157;
count__63146 = G__63158;
i__63147 = G__63159;
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
return cljs.core.some.call(null,(function (p__63160){
var vec__63161 = p__63160;
var _ = cljs.core.nth.call(null,vec__63161,(0),null);
var v = cljs.core.nth.call(null,vec__63161,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__63164){
var vec__63165 = p__63164;
var k = cljs.core.nth.call(null,vec__63165,(0),null);
var v = cljs.core.nth.call(null,vec__63165,(1),null);
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

var seq__63177_63185 = cljs.core.seq.call(null,deps);
var chunk__63178_63186 = null;
var count__63179_63187 = (0);
var i__63180_63188 = (0);
while(true){
if((i__63180_63188 < count__63179_63187)){
var dep_63189 = cljs.core._nth.call(null,chunk__63178_63186,i__63180_63188);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_63189;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_63189));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_63189,(depth + (1)),state);
} else {
}


var G__63190 = seq__63177_63185;
var G__63191 = chunk__63178_63186;
var G__63192 = count__63179_63187;
var G__63193 = (i__63180_63188 + (1));
seq__63177_63185 = G__63190;
chunk__63178_63186 = G__63191;
count__63179_63187 = G__63192;
i__63180_63188 = G__63193;
continue;
} else {
var temp__5735__auto___63194 = cljs.core.seq.call(null,seq__63177_63185);
if(temp__5735__auto___63194){
var seq__63177_63195__$1 = temp__5735__auto___63194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63177_63195__$1)){
var c__4550__auto___63196 = cljs.core.chunk_first.call(null,seq__63177_63195__$1);
var G__63197 = cljs.core.chunk_rest.call(null,seq__63177_63195__$1);
var G__63198 = c__4550__auto___63196;
var G__63199 = cljs.core.count.call(null,c__4550__auto___63196);
var G__63200 = (0);
seq__63177_63185 = G__63197;
chunk__63178_63186 = G__63198;
count__63179_63187 = G__63199;
i__63180_63188 = G__63200;
continue;
} else {
var dep_63201 = cljs.core.first.call(null,seq__63177_63195__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_63201;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_63201));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_63201,(depth + (1)),state);
} else {
}


var G__63202 = cljs.core.next.call(null,seq__63177_63195__$1);
var G__63203 = null;
var G__63204 = (0);
var G__63205 = (0);
seq__63177_63185 = G__63202;
chunk__63178_63186 = G__63203;
count__63179_63187 = G__63204;
i__63180_63188 = G__63205;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__63181){
var vec__63182 = p__63181;
var seq__63183 = cljs.core.seq.call(null,vec__63182);
var first__63184 = cljs.core.first.call(null,seq__63183);
var seq__63183__$1 = cljs.core.next.call(null,seq__63183);
var x = first__63184;
var xs = seq__63183__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__63182,seq__63183,first__63184,seq__63183__$1,x,xs,get_deps__$1){
return (function (p1__63168_SHARP_){
return clojure.set.difference.call(null,p1__63168_SHARP_,x);
});})(vec__63182,seq__63183,first__63184,seq__63183__$1,x,xs,get_deps__$1))
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
var seq__63206 = cljs.core.seq.call(null,provides);
var chunk__63207 = null;
var count__63208 = (0);
var i__63209 = (0);
while(true){
if((i__63209 < count__63208)){
var prov = cljs.core._nth.call(null,chunk__63207,i__63209);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__63218_63226 = cljs.core.seq.call(null,requires);
var chunk__63219_63227 = null;
var count__63220_63228 = (0);
var i__63221_63229 = (0);
while(true){
if((i__63221_63229 < count__63220_63228)){
var req_63230 = cljs.core._nth.call(null,chunk__63219_63227,i__63221_63229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63230,prov);


var G__63231 = seq__63218_63226;
var G__63232 = chunk__63219_63227;
var G__63233 = count__63220_63228;
var G__63234 = (i__63221_63229 + (1));
seq__63218_63226 = G__63231;
chunk__63219_63227 = G__63232;
count__63220_63228 = G__63233;
i__63221_63229 = G__63234;
continue;
} else {
var temp__5735__auto___63235 = cljs.core.seq.call(null,seq__63218_63226);
if(temp__5735__auto___63235){
var seq__63218_63236__$1 = temp__5735__auto___63235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63218_63236__$1)){
var c__4550__auto___63237 = cljs.core.chunk_first.call(null,seq__63218_63236__$1);
var G__63238 = cljs.core.chunk_rest.call(null,seq__63218_63236__$1);
var G__63239 = c__4550__auto___63237;
var G__63240 = cljs.core.count.call(null,c__4550__auto___63237);
var G__63241 = (0);
seq__63218_63226 = G__63238;
chunk__63219_63227 = G__63239;
count__63220_63228 = G__63240;
i__63221_63229 = G__63241;
continue;
} else {
var req_63242 = cljs.core.first.call(null,seq__63218_63236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63242,prov);


var G__63243 = cljs.core.next.call(null,seq__63218_63236__$1);
var G__63244 = null;
var G__63245 = (0);
var G__63246 = (0);
seq__63218_63226 = G__63243;
chunk__63219_63227 = G__63244;
count__63220_63228 = G__63245;
i__63221_63229 = G__63246;
continue;
}
} else {
}
}
break;
}


var G__63247 = seq__63206;
var G__63248 = chunk__63207;
var G__63249 = count__63208;
var G__63250 = (i__63209 + (1));
seq__63206 = G__63247;
chunk__63207 = G__63248;
count__63208 = G__63249;
i__63209 = G__63250;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__63206);
if(temp__5735__auto__){
var seq__63206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63206__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__63206__$1);
var G__63251 = cljs.core.chunk_rest.call(null,seq__63206__$1);
var G__63252 = c__4550__auto__;
var G__63253 = cljs.core.count.call(null,c__4550__auto__);
var G__63254 = (0);
seq__63206 = G__63251;
chunk__63207 = G__63252;
count__63208 = G__63253;
i__63209 = G__63254;
continue;
} else {
var prov = cljs.core.first.call(null,seq__63206__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__63222_63255 = cljs.core.seq.call(null,requires);
var chunk__63223_63256 = null;
var count__63224_63257 = (0);
var i__63225_63258 = (0);
while(true){
if((i__63225_63258 < count__63224_63257)){
var req_63259 = cljs.core._nth.call(null,chunk__63223_63256,i__63225_63258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63259,prov);


var G__63260 = seq__63222_63255;
var G__63261 = chunk__63223_63256;
var G__63262 = count__63224_63257;
var G__63263 = (i__63225_63258 + (1));
seq__63222_63255 = G__63260;
chunk__63223_63256 = G__63261;
count__63224_63257 = G__63262;
i__63225_63258 = G__63263;
continue;
} else {
var temp__5735__auto___63264__$1 = cljs.core.seq.call(null,seq__63222_63255);
if(temp__5735__auto___63264__$1){
var seq__63222_63265__$1 = temp__5735__auto___63264__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63222_63265__$1)){
var c__4550__auto___63266 = cljs.core.chunk_first.call(null,seq__63222_63265__$1);
var G__63267 = cljs.core.chunk_rest.call(null,seq__63222_63265__$1);
var G__63268 = c__4550__auto___63266;
var G__63269 = cljs.core.count.call(null,c__4550__auto___63266);
var G__63270 = (0);
seq__63222_63255 = G__63267;
chunk__63223_63256 = G__63268;
count__63224_63257 = G__63269;
i__63225_63258 = G__63270;
continue;
} else {
var req_63271 = cljs.core.first.call(null,seq__63222_63265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63271,prov);


var G__63272 = cljs.core.next.call(null,seq__63222_63265__$1);
var G__63273 = null;
var G__63274 = (0);
var G__63275 = (0);
seq__63222_63255 = G__63272;
chunk__63223_63256 = G__63273;
count__63224_63257 = G__63274;
i__63225_63258 = G__63275;
continue;
}
} else {
}
}
break;
}


var G__63276 = cljs.core.next.call(null,seq__63206__$1);
var G__63277 = null;
var G__63278 = (0);
var G__63279 = (0);
seq__63206 = G__63276;
chunk__63207 = G__63277;
count__63208 = G__63278;
i__63209 = G__63279;
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
var seq__63280_63284 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__63281_63285 = null;
var count__63282_63286 = (0);
var i__63283_63287 = (0);
while(true){
if((i__63283_63287 < count__63282_63286)){
var ns_63288 = cljs.core._nth.call(null,chunk__63281_63285,i__63283_63287);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_63288);


var G__63289 = seq__63280_63284;
var G__63290 = chunk__63281_63285;
var G__63291 = count__63282_63286;
var G__63292 = (i__63283_63287 + (1));
seq__63280_63284 = G__63289;
chunk__63281_63285 = G__63290;
count__63282_63286 = G__63291;
i__63283_63287 = G__63292;
continue;
} else {
var temp__5735__auto___63293 = cljs.core.seq.call(null,seq__63280_63284);
if(temp__5735__auto___63293){
var seq__63280_63294__$1 = temp__5735__auto___63293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63280_63294__$1)){
var c__4550__auto___63295 = cljs.core.chunk_first.call(null,seq__63280_63294__$1);
var G__63296 = cljs.core.chunk_rest.call(null,seq__63280_63294__$1);
var G__63297 = c__4550__auto___63295;
var G__63298 = cljs.core.count.call(null,c__4550__auto___63295);
var G__63299 = (0);
seq__63280_63284 = G__63296;
chunk__63281_63285 = G__63297;
count__63282_63286 = G__63298;
i__63283_63287 = G__63299;
continue;
} else {
var ns_63300 = cljs.core.first.call(null,seq__63280_63294__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_63300);


var G__63301 = cljs.core.next.call(null,seq__63280_63294__$1);
var G__63302 = null;
var G__63303 = (0);
var G__63304 = (0);
seq__63280_63284 = G__63301;
chunk__63281_63285 = G__63302;
count__63282_63286 = G__63303;
i__63283_63287 = G__63304;
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
var G__63305__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__63305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63306__i = 0, G__63306__a = new Array(arguments.length -  0);
while (G__63306__i < G__63306__a.length) {G__63306__a[G__63306__i] = arguments[G__63306__i + 0]; ++G__63306__i;}
  args = new cljs.core.IndexedSeq(G__63306__a,0,null);
} 
return G__63305__delegate.call(this,args);};
G__63305.cljs$lang$maxFixedArity = 0;
G__63305.cljs$lang$applyTo = (function (arglist__63307){
var args = cljs.core.seq(arglist__63307);
return G__63305__delegate(args);
});
G__63305.cljs$core$IFn$_invoke$arity$variadic = G__63305__delegate;
return G__63305;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__63308_SHARP_,p2__63309_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63308_SHARP_)),p2__63309_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__63310_SHARP_,p2__63311_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63310_SHARP_),p2__63311_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__63312 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__63312.addCallback(((function (G__63312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__63312))
);

G__63312.addErrback(((function (G__63312){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__63312))
);

return G__63312;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e63313){if((e63313 instanceof Error)){
var e = e63313;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e63313;

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
}catch (e63314){if((e63314 instanceof Error)){
var e = e63314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e63314;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__63315 = cljs.core._EQ_;
var expr__63316 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__63315.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__63316))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__63315.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__63316))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__63315.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__63316))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__63315,expr__63316){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__63315,expr__63316))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__63318,callback){
var map__63319 = p__63318;
var map__63319__$1 = (((((!((map__63319 == null))))?(((((map__63319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63319):map__63319);
var file_msg = map__63319__$1;
var request_url = cljs.core.get.call(null,map__63319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__63319,map__63319__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__63319,map__63319__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__){
return (function (state_63357){
var state_val_63358 = (state_63357[(1)]);
if((state_val_63358 === (7))){
var inst_63353 = (state_63357[(2)]);
var state_63357__$1 = state_63357;
var statearr_63359_63385 = state_63357__$1;
(statearr_63359_63385[(2)] = inst_63353);

(statearr_63359_63385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (1))){
var state_63357__$1 = state_63357;
var statearr_63360_63386 = state_63357__$1;
(statearr_63360_63386[(2)] = null);

(statearr_63360_63386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (4))){
var inst_63323 = (state_63357[(7)]);
var inst_63323__$1 = (state_63357[(2)]);
var state_63357__$1 = (function (){var statearr_63361 = state_63357;
(statearr_63361[(7)] = inst_63323__$1);

return statearr_63361;
})();
if(cljs.core.truth_(inst_63323__$1)){
var statearr_63362_63387 = state_63357__$1;
(statearr_63362_63387[(1)] = (5));

} else {
var statearr_63363_63388 = state_63357__$1;
(statearr_63363_63388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (15))){
var inst_63338 = (state_63357[(8)]);
var inst_63336 = (state_63357[(9)]);
var inst_63340 = inst_63338.call(null,inst_63336);
var state_63357__$1 = state_63357;
var statearr_63364_63389 = state_63357__$1;
(statearr_63364_63389[(2)] = inst_63340);

(statearr_63364_63389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (13))){
var inst_63347 = (state_63357[(2)]);
var state_63357__$1 = state_63357;
var statearr_63365_63390 = state_63357__$1;
(statearr_63365_63390[(2)] = inst_63347);

(statearr_63365_63390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (6))){
var state_63357__$1 = state_63357;
var statearr_63366_63391 = state_63357__$1;
(statearr_63366_63391[(2)] = null);

(statearr_63366_63391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (17))){
var inst_63344 = (state_63357[(2)]);
var state_63357__$1 = state_63357;
var statearr_63367_63392 = state_63357__$1;
(statearr_63367_63392[(2)] = inst_63344);

(statearr_63367_63392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (3))){
var inst_63355 = (state_63357[(2)]);
var state_63357__$1 = state_63357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63357__$1,inst_63355);
} else {
if((state_val_63358 === (12))){
var state_63357__$1 = state_63357;
var statearr_63368_63393 = state_63357__$1;
(statearr_63368_63393[(2)] = null);

(statearr_63368_63393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (2))){
var state_63357__$1 = state_63357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63357__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_63358 === (11))){
var inst_63328 = (state_63357[(10)]);
var inst_63334 = figwheel.client.file_reloading.blocking_load.call(null,inst_63328);
var state_63357__$1 = state_63357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63357__$1,(14),inst_63334);
} else {
if((state_val_63358 === (9))){
var inst_63328 = (state_63357[(10)]);
var state_63357__$1 = state_63357;
if(cljs.core.truth_(inst_63328)){
var statearr_63369_63394 = state_63357__$1;
(statearr_63369_63394[(1)] = (11));

} else {
var statearr_63370_63395 = state_63357__$1;
(statearr_63370_63395[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (5))){
var inst_63329 = (state_63357[(11)]);
var inst_63323 = (state_63357[(7)]);
var inst_63328 = cljs.core.nth.call(null,inst_63323,(0),null);
var inst_63329__$1 = cljs.core.nth.call(null,inst_63323,(1),null);
var state_63357__$1 = (function (){var statearr_63371 = state_63357;
(statearr_63371[(11)] = inst_63329__$1);

(statearr_63371[(10)] = inst_63328);

return statearr_63371;
})();
if(cljs.core.truth_(inst_63329__$1)){
var statearr_63372_63396 = state_63357__$1;
(statearr_63372_63396[(1)] = (8));

} else {
var statearr_63373_63397 = state_63357__$1;
(statearr_63373_63397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (14))){
var inst_63338 = (state_63357[(8)]);
var inst_63328 = (state_63357[(10)]);
var inst_63336 = (state_63357[(2)]);
var inst_63337 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_63338__$1 = cljs.core.get.call(null,inst_63337,inst_63328);
var state_63357__$1 = (function (){var statearr_63374 = state_63357;
(statearr_63374[(8)] = inst_63338__$1);

(statearr_63374[(9)] = inst_63336);

return statearr_63374;
})();
if(cljs.core.truth_(inst_63338__$1)){
var statearr_63375_63398 = state_63357__$1;
(statearr_63375_63398[(1)] = (15));

} else {
var statearr_63376_63399 = state_63357__$1;
(statearr_63376_63399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (16))){
var inst_63336 = (state_63357[(9)]);
var inst_63342 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_63336);
var state_63357__$1 = state_63357;
var statearr_63377_63400 = state_63357__$1;
(statearr_63377_63400[(2)] = inst_63342);

(statearr_63377_63400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (10))){
var inst_63349 = (state_63357[(2)]);
var state_63357__$1 = (function (){var statearr_63378 = state_63357;
(statearr_63378[(12)] = inst_63349);

return statearr_63378;
})();
var statearr_63379_63401 = state_63357__$1;
(statearr_63379_63401[(2)] = null);

(statearr_63379_63401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63358 === (8))){
var inst_63329 = (state_63357[(11)]);
var inst_63331 = eval(inst_63329);
var state_63357__$1 = state_63357;
var statearr_63380_63402 = state_63357__$1;
(statearr_63380_63402[(2)] = inst_63331);

(statearr_63380_63402[(1)] = (10));


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
});})(c__24101__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24007__auto__ = null;
var figwheel$client$file_reloading$state_machine__24007__auto____0 = (function (){
var statearr_63381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63381[(0)] = figwheel$client$file_reloading$state_machine__24007__auto__);

(statearr_63381[(1)] = (1));

return statearr_63381;
});
var figwheel$client$file_reloading$state_machine__24007__auto____1 = (function (state_63357){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_63357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e63382){if((e63382 instanceof Object)){
var ex__24010__auto__ = e63382;
var statearr_63383_63403 = state_63357;
(statearr_63383_63403[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63404 = state_63357;
state_63357 = G__63404;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24007__auto__ = function(state_63357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24007__auto____1.call(this,state_63357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24007__auto____0;
figwheel$client$file_reloading$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24007__auto____1;
return figwheel$client$file_reloading$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__))
})();
var state__24103__auto__ = (function (){var statearr_63384 = f__24102__auto__.call(null);
(statearr_63384[(6)] = c__24101__auto__);

return statearr_63384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__))
);

return c__24101__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__63406 = arguments.length;
switch (G__63406) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__63408,callback){
var map__63409 = p__63408;
var map__63409__$1 = (((((!((map__63409 == null))))?(((((map__63409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63409):map__63409);
var file_msg = map__63409__$1;
var namespace = cljs.core.get.call(null,map__63409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__63409,map__63409__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__63409,map__63409__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__63411){
var map__63412 = p__63411;
var map__63412__$1 = (((((!((map__63412 == null))))?(((((map__63412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63412):map__63412);
var file_msg = map__63412__$1;
var namespace = cljs.core.get.call(null,map__63412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__63414){
var map__63415 = p__63414;
var map__63415__$1 = (((((!((map__63415 == null))))?(((((map__63415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63415):map__63415);
var file_msg = map__63415__$1;
var namespace = cljs.core.get.call(null,map__63415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__63417,callback){
var map__63418 = p__63417;
var map__63418__$1 = (((((!((map__63418 == null))))?(((((map__63418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63418):map__63418);
var file_msg = map__63418__$1;
var request_url = cljs.core.get.call(null,map__63418__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__63418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24101__auto___63468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___63468,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___63468,out){
return (function (state_63453){
var state_val_63454 = (state_63453[(1)]);
if((state_val_63454 === (1))){
var inst_63427 = cljs.core.seq.call(null,files);
var inst_63428 = cljs.core.first.call(null,inst_63427);
var inst_63429 = cljs.core.next.call(null,inst_63427);
var inst_63430 = files;
var state_63453__$1 = (function (){var statearr_63455 = state_63453;
(statearr_63455[(7)] = inst_63430);

(statearr_63455[(8)] = inst_63428);

(statearr_63455[(9)] = inst_63429);

return statearr_63455;
})();
var statearr_63456_63469 = state_63453__$1;
(statearr_63456_63469[(2)] = null);

(statearr_63456_63469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63454 === (2))){
var inst_63430 = (state_63453[(7)]);
var inst_63436 = (state_63453[(10)]);
var inst_63435 = cljs.core.seq.call(null,inst_63430);
var inst_63436__$1 = cljs.core.first.call(null,inst_63435);
var inst_63437 = cljs.core.next.call(null,inst_63435);
var inst_63438 = (inst_63436__$1 == null);
var inst_63439 = cljs.core.not.call(null,inst_63438);
var state_63453__$1 = (function (){var statearr_63457 = state_63453;
(statearr_63457[(11)] = inst_63437);

(statearr_63457[(10)] = inst_63436__$1);

return statearr_63457;
})();
if(inst_63439){
var statearr_63458_63470 = state_63453__$1;
(statearr_63458_63470[(1)] = (4));

} else {
var statearr_63459_63471 = state_63453__$1;
(statearr_63459_63471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63454 === (3))){
var inst_63451 = (state_63453[(2)]);
var state_63453__$1 = state_63453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63453__$1,inst_63451);
} else {
if((state_val_63454 === (4))){
var inst_63436 = (state_63453[(10)]);
var inst_63441 = figwheel.client.file_reloading.reload_js_file.call(null,inst_63436);
var state_63453__$1 = state_63453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63453__$1,(7),inst_63441);
} else {
if((state_val_63454 === (5))){
var inst_63447 = cljs.core.async.close_BANG_.call(null,out);
var state_63453__$1 = state_63453;
var statearr_63460_63472 = state_63453__$1;
(statearr_63460_63472[(2)] = inst_63447);

(statearr_63460_63472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63454 === (6))){
var inst_63449 = (state_63453[(2)]);
var state_63453__$1 = state_63453;
var statearr_63461_63473 = state_63453__$1;
(statearr_63461_63473[(2)] = inst_63449);

(statearr_63461_63473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63454 === (7))){
var inst_63437 = (state_63453[(11)]);
var inst_63443 = (state_63453[(2)]);
var inst_63444 = cljs.core.async.put_BANG_.call(null,out,inst_63443);
var inst_63430 = inst_63437;
var state_63453__$1 = (function (){var statearr_63462 = state_63453;
(statearr_63462[(7)] = inst_63430);

(statearr_63462[(12)] = inst_63444);

return statearr_63462;
})();
var statearr_63463_63474 = state_63453__$1;
(statearr_63463_63474[(2)] = null);

(statearr_63463_63474[(1)] = (2));


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
});})(c__24101__auto___63468,out))
;
return ((function (switch__24006__auto__,c__24101__auto___63468,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____0 = (function (){
var statearr_63464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63464[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__);

(statearr_63464[(1)] = (1));

return statearr_63464;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____1 = (function (state_63453){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_63453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e63465){if((e63465 instanceof Object)){
var ex__24010__auto__ = e63465;
var statearr_63466_63475 = state_63453;
(statearr_63466_63475[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63476 = state_63453;
state_63453 = G__63476;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__ = function(state_63453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____1.call(this,state_63453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___63468,out))
})();
var state__24103__auto__ = (function (){var statearr_63467 = f__24102__auto__.call(null);
(statearr_63467[(6)] = c__24101__auto___63468);

return statearr_63467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___63468,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__63477,opts){
var map__63478 = p__63477;
var map__63478__$1 = (((((!((map__63478 == null))))?(((((map__63478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63478):map__63478);
var eval_body = cljs.core.get.call(null,map__63478__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__63478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e63480){var e = e63480;
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
return (function (p1__63481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63481_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__63482){
var vec__63483 = p__63482;
var k = cljs.core.nth.call(null,vec__63483,(0),null);
var v = cljs.core.nth.call(null,vec__63483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__63486){
var vec__63487 = p__63486;
var k = cljs.core.nth.call(null,vec__63487,(0),null);
var v = cljs.core.nth.call(null,vec__63487,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__63493,p__63494){
var map__63495 = p__63493;
var map__63495__$1 = (((((!((map__63495 == null))))?(((((map__63495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63495):map__63495);
var opts = map__63495__$1;
var before_jsload = cljs.core.get.call(null,map__63495__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__63495__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__63495__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__63496 = p__63494;
var map__63496__$1 = (((((!((map__63496 == null))))?(((((map__63496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63496):map__63496);
var msg = map__63496__$1;
var files = cljs.core.get.call(null,map__63496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__63496__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__63496__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_63650){
var state_val_63651 = (state_63650[(1)]);
if((state_val_63651 === (7))){
var inst_63513 = (state_63650[(7)]);
var inst_63512 = (state_63650[(8)]);
var inst_63511 = (state_63650[(9)]);
var inst_63510 = (state_63650[(10)]);
var inst_63518 = cljs.core._nth.call(null,inst_63511,inst_63513);
var inst_63519 = figwheel.client.file_reloading.eval_body.call(null,inst_63518,opts);
var inst_63520 = (inst_63513 + (1));
var tmp63652 = inst_63512;
var tmp63653 = inst_63511;
var tmp63654 = inst_63510;
var inst_63510__$1 = tmp63654;
var inst_63511__$1 = tmp63653;
var inst_63512__$1 = tmp63652;
var inst_63513__$1 = inst_63520;
var state_63650__$1 = (function (){var statearr_63655 = state_63650;
(statearr_63655[(7)] = inst_63513__$1);

(statearr_63655[(8)] = inst_63512__$1);

(statearr_63655[(9)] = inst_63511__$1);

(statearr_63655[(10)] = inst_63510__$1);

(statearr_63655[(11)] = inst_63519);

return statearr_63655;
})();
var statearr_63656_63739 = state_63650__$1;
(statearr_63656_63739[(2)] = null);

(statearr_63656_63739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (20))){
var inst_63553 = (state_63650[(12)]);
var inst_63561 = figwheel.client.file_reloading.sort_files.call(null,inst_63553);
var state_63650__$1 = state_63650;
var statearr_63657_63740 = state_63650__$1;
(statearr_63657_63740[(2)] = inst_63561);

(statearr_63657_63740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (27))){
var state_63650__$1 = state_63650;
var statearr_63658_63741 = state_63650__$1;
(statearr_63658_63741[(2)] = null);

(statearr_63658_63741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (1))){
var inst_63502 = (state_63650[(13)]);
var inst_63499 = before_jsload.call(null,files);
var inst_63500 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_63501 = (function (){return ((function (inst_63502,inst_63499,inst_63500,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63490_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63490_SHARP_);
});
;})(inst_63502,inst_63499,inst_63500,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63502__$1 = cljs.core.filter.call(null,inst_63501,files);
var inst_63503 = cljs.core.not_empty.call(null,inst_63502__$1);
var state_63650__$1 = (function (){var statearr_63659 = state_63650;
(statearr_63659[(13)] = inst_63502__$1);

(statearr_63659[(14)] = inst_63500);

(statearr_63659[(15)] = inst_63499);

return statearr_63659;
})();
if(cljs.core.truth_(inst_63503)){
var statearr_63660_63742 = state_63650__$1;
(statearr_63660_63742[(1)] = (2));

} else {
var statearr_63661_63743 = state_63650__$1;
(statearr_63661_63743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (24))){
var state_63650__$1 = state_63650;
var statearr_63662_63744 = state_63650__$1;
(statearr_63662_63744[(2)] = null);

(statearr_63662_63744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (39))){
var inst_63603 = (state_63650[(16)]);
var state_63650__$1 = state_63650;
var statearr_63663_63745 = state_63650__$1;
(statearr_63663_63745[(2)] = inst_63603);

(statearr_63663_63745[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (46))){
var inst_63645 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63664_63746 = state_63650__$1;
(statearr_63664_63746[(2)] = inst_63645);

(statearr_63664_63746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (4))){
var inst_63547 = (state_63650[(2)]);
var inst_63548 = cljs.core.List.EMPTY;
var inst_63549 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_63548);
var inst_63550 = (function (){return ((function (inst_63547,inst_63548,inst_63549,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63491_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63491_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63491_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__63491_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_63547,inst_63548,inst_63549,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63551 = cljs.core.filter.call(null,inst_63550,files);
var inst_63552 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_63553 = cljs.core.concat.call(null,inst_63551,inst_63552);
var state_63650__$1 = (function (){var statearr_63665 = state_63650;
(statearr_63665[(17)] = inst_63549);

(statearr_63665[(12)] = inst_63553);

(statearr_63665[(18)] = inst_63547);

return statearr_63665;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_63666_63747 = state_63650__$1;
(statearr_63666_63747[(1)] = (16));

} else {
var statearr_63667_63748 = state_63650__$1;
(statearr_63667_63748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (15))){
var inst_63537 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63668_63749 = state_63650__$1;
(statearr_63668_63749[(2)] = inst_63537);

(statearr_63668_63749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (21))){
var inst_63563 = (state_63650[(19)]);
var inst_63563__$1 = (state_63650[(2)]);
var inst_63564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_63563__$1);
var state_63650__$1 = (function (){var statearr_63669 = state_63650;
(statearr_63669[(19)] = inst_63563__$1);

return statearr_63669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63650__$1,(22),inst_63564);
} else {
if((state_val_63651 === (31))){
var inst_63648 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63650__$1,inst_63648);
} else {
if((state_val_63651 === (32))){
var inst_63603 = (state_63650[(16)]);
var inst_63608 = inst_63603.cljs$lang$protocol_mask$partition0$;
var inst_63609 = (inst_63608 & (64));
var inst_63610 = inst_63603.cljs$core$ISeq$;
var inst_63611 = (cljs.core.PROTOCOL_SENTINEL === inst_63610);
var inst_63612 = ((inst_63609) || (inst_63611));
var state_63650__$1 = state_63650;
if(cljs.core.truth_(inst_63612)){
var statearr_63670_63750 = state_63650__$1;
(statearr_63670_63750[(1)] = (35));

} else {
var statearr_63671_63751 = state_63650__$1;
(statearr_63671_63751[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (40))){
var inst_63625 = (state_63650[(20)]);
var inst_63624 = (state_63650[(2)]);
var inst_63625__$1 = cljs.core.get.call(null,inst_63624,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_63626 = cljs.core.get.call(null,inst_63624,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_63627 = cljs.core.not_empty.call(null,inst_63625__$1);
var state_63650__$1 = (function (){var statearr_63672 = state_63650;
(statearr_63672[(21)] = inst_63626);

(statearr_63672[(20)] = inst_63625__$1);

return statearr_63672;
})();
if(cljs.core.truth_(inst_63627)){
var statearr_63673_63752 = state_63650__$1;
(statearr_63673_63752[(1)] = (41));

} else {
var statearr_63674_63753 = state_63650__$1;
(statearr_63674_63753[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (33))){
var state_63650__$1 = state_63650;
var statearr_63675_63754 = state_63650__$1;
(statearr_63675_63754[(2)] = false);

(statearr_63675_63754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (13))){
var inst_63523 = (state_63650[(22)]);
var inst_63527 = cljs.core.chunk_first.call(null,inst_63523);
var inst_63528 = cljs.core.chunk_rest.call(null,inst_63523);
var inst_63529 = cljs.core.count.call(null,inst_63527);
var inst_63510 = inst_63528;
var inst_63511 = inst_63527;
var inst_63512 = inst_63529;
var inst_63513 = (0);
var state_63650__$1 = (function (){var statearr_63676 = state_63650;
(statearr_63676[(7)] = inst_63513);

(statearr_63676[(8)] = inst_63512);

(statearr_63676[(9)] = inst_63511);

(statearr_63676[(10)] = inst_63510);

return statearr_63676;
})();
var statearr_63677_63755 = state_63650__$1;
(statearr_63677_63755[(2)] = null);

(statearr_63677_63755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (22))){
var inst_63566 = (state_63650[(23)]);
var inst_63567 = (state_63650[(24)]);
var inst_63571 = (state_63650[(25)]);
var inst_63563 = (state_63650[(19)]);
var inst_63566__$1 = (state_63650[(2)]);
var inst_63567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63566__$1);
var inst_63568 = (function (){var all_files = inst_63563;
var res_SINGLEQUOTE_ = inst_63566__$1;
var res = inst_63567__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_63566,inst_63567,inst_63571,inst_63563,inst_63566__$1,inst_63567__$1,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63492_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__63492_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_63566,inst_63567,inst_63571,inst_63563,inst_63566__$1,inst_63567__$1,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63569 = cljs.core.filter.call(null,inst_63568,inst_63566__$1);
var inst_63570 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_63571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63570);
var inst_63572 = cljs.core.not_empty.call(null,inst_63571__$1);
var state_63650__$1 = (function (){var statearr_63678 = state_63650;
(statearr_63678[(23)] = inst_63566__$1);

(statearr_63678[(26)] = inst_63569);

(statearr_63678[(24)] = inst_63567__$1);

(statearr_63678[(25)] = inst_63571__$1);

return statearr_63678;
})();
if(cljs.core.truth_(inst_63572)){
var statearr_63679_63756 = state_63650__$1;
(statearr_63679_63756[(1)] = (23));

} else {
var statearr_63680_63757 = state_63650__$1;
(statearr_63680_63757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (36))){
var state_63650__$1 = state_63650;
var statearr_63681_63758 = state_63650__$1;
(statearr_63681_63758[(2)] = false);

(statearr_63681_63758[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (41))){
var inst_63625 = (state_63650[(20)]);
var inst_63629 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_63630 = cljs.core.map.call(null,inst_63629,inst_63625);
var inst_63631 = cljs.core.pr_str.call(null,inst_63630);
var inst_63632 = ["figwheel-no-load meta-data: ",inst_63631].join('');
var inst_63633 = figwheel.client.utils.log.call(null,inst_63632);
var state_63650__$1 = state_63650;
var statearr_63682_63759 = state_63650__$1;
(statearr_63682_63759[(2)] = inst_63633);

(statearr_63682_63759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (43))){
var inst_63626 = (state_63650[(21)]);
var inst_63636 = (state_63650[(2)]);
var inst_63637 = cljs.core.not_empty.call(null,inst_63626);
var state_63650__$1 = (function (){var statearr_63683 = state_63650;
(statearr_63683[(27)] = inst_63636);

return statearr_63683;
})();
if(cljs.core.truth_(inst_63637)){
var statearr_63684_63760 = state_63650__$1;
(statearr_63684_63760[(1)] = (44));

} else {
var statearr_63685_63761 = state_63650__$1;
(statearr_63685_63761[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (29))){
var inst_63603 = (state_63650[(16)]);
var inst_63566 = (state_63650[(23)]);
var inst_63569 = (state_63650[(26)]);
var inst_63567 = (state_63650[(24)]);
var inst_63571 = (state_63650[(25)]);
var inst_63563 = (state_63650[(19)]);
var inst_63599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_63602 = (function (){var all_files = inst_63563;
var res_SINGLEQUOTE_ = inst_63566;
var res = inst_63567;
var files_not_loaded = inst_63569;
var dependencies_that_loaded = inst_63571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63603,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63599,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63601){
var map__63686 = p__63601;
var map__63686__$1 = (((((!((map__63686 == null))))?(((((map__63686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63686):map__63686);
var namespace = cljs.core.get.call(null,map__63686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63603,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63599,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63603__$1 = cljs.core.group_by.call(null,inst_63602,inst_63569);
var inst_63605 = (inst_63603__$1 == null);
var inst_63606 = cljs.core.not.call(null,inst_63605);
var state_63650__$1 = (function (){var statearr_63688 = state_63650;
(statearr_63688[(16)] = inst_63603__$1);

(statearr_63688[(28)] = inst_63599);

return statearr_63688;
})();
if(inst_63606){
var statearr_63689_63762 = state_63650__$1;
(statearr_63689_63762[(1)] = (32));

} else {
var statearr_63690_63763 = state_63650__$1;
(statearr_63690_63763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (44))){
var inst_63626 = (state_63650[(21)]);
var inst_63639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_63626);
var inst_63640 = cljs.core.pr_str.call(null,inst_63639);
var inst_63641 = ["not required: ",inst_63640].join('');
var inst_63642 = figwheel.client.utils.log.call(null,inst_63641);
var state_63650__$1 = state_63650;
var statearr_63691_63764 = state_63650__$1;
(statearr_63691_63764[(2)] = inst_63642);

(statearr_63691_63764[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (6))){
var inst_63544 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63692_63765 = state_63650__$1;
(statearr_63692_63765[(2)] = inst_63544);

(statearr_63692_63765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (28))){
var inst_63569 = (state_63650[(26)]);
var inst_63596 = (state_63650[(2)]);
var inst_63597 = cljs.core.not_empty.call(null,inst_63569);
var state_63650__$1 = (function (){var statearr_63693 = state_63650;
(statearr_63693[(29)] = inst_63596);

return statearr_63693;
})();
if(cljs.core.truth_(inst_63597)){
var statearr_63694_63766 = state_63650__$1;
(statearr_63694_63766[(1)] = (29));

} else {
var statearr_63695_63767 = state_63650__$1;
(statearr_63695_63767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (25))){
var inst_63567 = (state_63650[(24)]);
var inst_63583 = (state_63650[(2)]);
var inst_63584 = cljs.core.not_empty.call(null,inst_63567);
var state_63650__$1 = (function (){var statearr_63696 = state_63650;
(statearr_63696[(30)] = inst_63583);

return statearr_63696;
})();
if(cljs.core.truth_(inst_63584)){
var statearr_63697_63768 = state_63650__$1;
(statearr_63697_63768[(1)] = (26));

} else {
var statearr_63698_63769 = state_63650__$1;
(statearr_63698_63769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (34))){
var inst_63619 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
if(cljs.core.truth_(inst_63619)){
var statearr_63699_63770 = state_63650__$1;
(statearr_63699_63770[(1)] = (38));

} else {
var statearr_63700_63771 = state_63650__$1;
(statearr_63700_63771[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (17))){
var state_63650__$1 = state_63650;
var statearr_63701_63772 = state_63650__$1;
(statearr_63701_63772[(2)] = recompile_dependents);

(statearr_63701_63772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (3))){
var state_63650__$1 = state_63650;
var statearr_63702_63773 = state_63650__$1;
(statearr_63702_63773[(2)] = null);

(statearr_63702_63773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (12))){
var inst_63540 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63703_63774 = state_63650__$1;
(statearr_63703_63774[(2)] = inst_63540);

(statearr_63703_63774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (2))){
var inst_63502 = (state_63650[(13)]);
var inst_63509 = cljs.core.seq.call(null,inst_63502);
var inst_63510 = inst_63509;
var inst_63511 = null;
var inst_63512 = (0);
var inst_63513 = (0);
var state_63650__$1 = (function (){var statearr_63704 = state_63650;
(statearr_63704[(7)] = inst_63513);

(statearr_63704[(8)] = inst_63512);

(statearr_63704[(9)] = inst_63511);

(statearr_63704[(10)] = inst_63510);

return statearr_63704;
})();
var statearr_63705_63775 = state_63650__$1;
(statearr_63705_63775[(2)] = null);

(statearr_63705_63775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (23))){
var inst_63566 = (state_63650[(23)]);
var inst_63569 = (state_63650[(26)]);
var inst_63567 = (state_63650[(24)]);
var inst_63571 = (state_63650[(25)]);
var inst_63563 = (state_63650[(19)]);
var inst_63574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_63576 = (function (){var all_files = inst_63563;
var res_SINGLEQUOTE_ = inst_63566;
var res = inst_63567;
var files_not_loaded = inst_63569;
var dependencies_that_loaded = inst_63571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63574,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63575){
var map__63706 = p__63575;
var map__63706__$1 = (((((!((map__63706 == null))))?(((((map__63706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63706):map__63706);
var request_url = cljs.core.get.call(null,map__63706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63574,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63577 = cljs.core.reverse.call(null,inst_63571);
var inst_63578 = cljs.core.map.call(null,inst_63576,inst_63577);
var inst_63579 = cljs.core.pr_str.call(null,inst_63578);
var inst_63580 = figwheel.client.utils.log.call(null,inst_63579);
var state_63650__$1 = (function (){var statearr_63708 = state_63650;
(statearr_63708[(31)] = inst_63574);

return statearr_63708;
})();
var statearr_63709_63776 = state_63650__$1;
(statearr_63709_63776[(2)] = inst_63580);

(statearr_63709_63776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (35))){
var state_63650__$1 = state_63650;
var statearr_63710_63777 = state_63650__$1;
(statearr_63710_63777[(2)] = true);

(statearr_63710_63777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (19))){
var inst_63553 = (state_63650[(12)]);
var inst_63559 = figwheel.client.file_reloading.expand_files.call(null,inst_63553);
var state_63650__$1 = state_63650;
var statearr_63711_63778 = state_63650__$1;
(statearr_63711_63778[(2)] = inst_63559);

(statearr_63711_63778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (11))){
var state_63650__$1 = state_63650;
var statearr_63712_63779 = state_63650__$1;
(statearr_63712_63779[(2)] = null);

(statearr_63712_63779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (9))){
var inst_63542 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63713_63780 = state_63650__$1;
(statearr_63713_63780[(2)] = inst_63542);

(statearr_63713_63780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (5))){
var inst_63513 = (state_63650[(7)]);
var inst_63512 = (state_63650[(8)]);
var inst_63515 = (inst_63513 < inst_63512);
var inst_63516 = inst_63515;
var state_63650__$1 = state_63650;
if(cljs.core.truth_(inst_63516)){
var statearr_63714_63781 = state_63650__$1;
(statearr_63714_63781[(1)] = (7));

} else {
var statearr_63715_63782 = state_63650__$1;
(statearr_63715_63782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (14))){
var inst_63523 = (state_63650[(22)]);
var inst_63532 = cljs.core.first.call(null,inst_63523);
var inst_63533 = figwheel.client.file_reloading.eval_body.call(null,inst_63532,opts);
var inst_63534 = cljs.core.next.call(null,inst_63523);
var inst_63510 = inst_63534;
var inst_63511 = null;
var inst_63512 = (0);
var inst_63513 = (0);
var state_63650__$1 = (function (){var statearr_63716 = state_63650;
(statearr_63716[(7)] = inst_63513);

(statearr_63716[(32)] = inst_63533);

(statearr_63716[(8)] = inst_63512);

(statearr_63716[(9)] = inst_63511);

(statearr_63716[(10)] = inst_63510);

return statearr_63716;
})();
var statearr_63717_63783 = state_63650__$1;
(statearr_63717_63783[(2)] = null);

(statearr_63717_63783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (45))){
var state_63650__$1 = state_63650;
var statearr_63718_63784 = state_63650__$1;
(statearr_63718_63784[(2)] = null);

(statearr_63718_63784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (26))){
var inst_63566 = (state_63650[(23)]);
var inst_63569 = (state_63650[(26)]);
var inst_63567 = (state_63650[(24)]);
var inst_63571 = (state_63650[(25)]);
var inst_63563 = (state_63650[(19)]);
var inst_63586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_63588 = (function (){var all_files = inst_63563;
var res_SINGLEQUOTE_ = inst_63566;
var res = inst_63567;
var files_not_loaded = inst_63569;
var dependencies_that_loaded = inst_63571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63586,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63587){
var map__63719 = p__63587;
var map__63719__$1 = (((((!((map__63719 == null))))?(((((map__63719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63719):map__63719);
var namespace = cljs.core.get.call(null,map__63719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__63719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63586,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63589 = cljs.core.map.call(null,inst_63588,inst_63567);
var inst_63590 = cljs.core.pr_str.call(null,inst_63589);
var inst_63591 = figwheel.client.utils.log.call(null,inst_63590);
var inst_63592 = (function (){var all_files = inst_63563;
var res_SINGLEQUOTE_ = inst_63566;
var res = inst_63567;
var files_not_loaded = inst_63569;
var dependencies_that_loaded = inst_63571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63586,inst_63588,inst_63589,inst_63590,inst_63591,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63566,inst_63569,inst_63567,inst_63571,inst_63563,inst_63586,inst_63588,inst_63589,inst_63590,inst_63591,state_val_63651,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63593 = setTimeout(inst_63592,(10));
var state_63650__$1 = (function (){var statearr_63721 = state_63650;
(statearr_63721[(33)] = inst_63591);

(statearr_63721[(34)] = inst_63586);

return statearr_63721;
})();
var statearr_63722_63785 = state_63650__$1;
(statearr_63722_63785[(2)] = inst_63593);

(statearr_63722_63785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (16))){
var state_63650__$1 = state_63650;
var statearr_63723_63786 = state_63650__$1;
(statearr_63723_63786[(2)] = reload_dependents);

(statearr_63723_63786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (38))){
var inst_63603 = (state_63650[(16)]);
var inst_63621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63603);
var state_63650__$1 = state_63650;
var statearr_63724_63787 = state_63650__$1;
(statearr_63724_63787[(2)] = inst_63621);

(statearr_63724_63787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (30))){
var state_63650__$1 = state_63650;
var statearr_63725_63788 = state_63650__$1;
(statearr_63725_63788[(2)] = null);

(statearr_63725_63788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (10))){
var inst_63523 = (state_63650[(22)]);
var inst_63525 = cljs.core.chunked_seq_QMARK_.call(null,inst_63523);
var state_63650__$1 = state_63650;
if(inst_63525){
var statearr_63726_63789 = state_63650__$1;
(statearr_63726_63789[(1)] = (13));

} else {
var statearr_63727_63790 = state_63650__$1;
(statearr_63727_63790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (18))){
var inst_63557 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
if(cljs.core.truth_(inst_63557)){
var statearr_63728_63791 = state_63650__$1;
(statearr_63728_63791[(1)] = (19));

} else {
var statearr_63729_63792 = state_63650__$1;
(statearr_63729_63792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (42))){
var state_63650__$1 = state_63650;
var statearr_63730_63793 = state_63650__$1;
(statearr_63730_63793[(2)] = null);

(statearr_63730_63793[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (37))){
var inst_63616 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
var statearr_63731_63794 = state_63650__$1;
(statearr_63731_63794[(2)] = inst_63616);

(statearr_63731_63794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (8))){
var inst_63523 = (state_63650[(22)]);
var inst_63510 = (state_63650[(10)]);
var inst_63523__$1 = cljs.core.seq.call(null,inst_63510);
var state_63650__$1 = (function (){var statearr_63732 = state_63650;
(statearr_63732[(22)] = inst_63523__$1);

return statearr_63732;
})();
if(inst_63523__$1){
var statearr_63733_63795 = state_63650__$1;
(statearr_63733_63795[(1)] = (10));

} else {
var statearr_63734_63796 = state_63650__$1;
(statearr_63734_63796[(1)] = (11));

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
});})(c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24006__auto__,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____0 = (function (){
var statearr_63735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63735[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__);

(statearr_63735[(1)] = (1));

return statearr_63735;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____1 = (function (state_63650){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_63650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e63736){if((e63736 instanceof Object)){
var ex__24010__auto__ = e63736;
var statearr_63737_63797 = state_63650;
(statearr_63737_63797[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63798 = state_63650;
state_63650 = G__63798;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__ = function(state_63650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____1.call(this,state_63650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24103__auto__ = (function (){var statearr_63738 = f__24102__auto__.call(null);
(statearr_63738[(6)] = c__24101__auto__);

return statearr_63738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__,map__63495,map__63495__$1,opts,before_jsload,on_jsload,reload_dependents,map__63496,map__63496__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24101__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__63801,link){
var map__63802 = p__63801;
var map__63802__$1 = (((((!((map__63802 == null))))?(((((map__63802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63802):map__63802);
var file = cljs.core.get.call(null,map__63802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__63802,map__63802__$1,file){
return (function (p1__63799_SHARP_,p2__63800_SHARP_){
if(cljs.core._EQ_.call(null,p1__63799_SHARP_,p2__63800_SHARP_)){
return p1__63799_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__63802,map__63802__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__63805){
var map__63806 = p__63805;
var map__63806__$1 = (((((!((map__63806 == null))))?(((((map__63806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63806):map__63806);
var match_length = cljs.core.get.call(null,map__63806__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__63806__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__63804_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__63804_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__63808_SHARP_,p2__63809_SHARP_){
return cljs.core.assoc.call(null,p1__63808_SHARP_,cljs.core.get.call(null,p2__63809_SHARP_,key),p2__63809_SHARP_);
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
var loaded_f_datas_63810 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_63810);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_63810);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__63811,p__63812){
var map__63813 = p__63811;
var map__63813__$1 = (((((!((map__63813 == null))))?(((((map__63813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63813):map__63813);
var on_cssload = cljs.core.get.call(null,map__63813__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__63814 = p__63812;
var map__63814__$1 = (((((!((map__63814 == null))))?(((((map__63814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63814):map__63814);
var files_msg = map__63814__$1;
var files = cljs.core.get.call(null,map__63814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581380913623
