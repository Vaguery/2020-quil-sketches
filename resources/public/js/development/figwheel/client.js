// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e48927){if((e48927 instanceof Error)){
var e = e48927;
return "Error: Unable to stringify";
} else {
throw e48927;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48930 = arguments.length;
switch (G__48930) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48928_SHARP_){
if(typeof p1__48928_SHARP_ === 'string'){
return p1__48928_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48928_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48933 = arguments.length;
var i__4731__auto___48934 = (0);
while(true){
if((i__4731__auto___48934 < len__4730__auto___48933)){
args__4736__auto__.push((arguments[i__4731__auto___48934]));

var G__48935 = (i__4731__auto___48934 + (1));
i__4731__auto___48934 = G__48935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48932){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48932));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48937 = arguments.length;
var i__4731__auto___48938 = (0);
while(true){
if((i__4731__auto___48938 < len__4730__auto___48937)){
args__4736__auto__.push((arguments[i__4731__auto___48938]));

var G__48939 = (i__4731__auto___48938 + (1));
i__4731__auto___48938 = G__48939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48936));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48940){
var map__48941 = p__48940;
var map__48941__$1 = (((((!((map__48941 == null))))?(((((map__48941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48941):map__48941);
var message = cljs.core.get.call(null,map__48941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29333__auto___49020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___49020,ch){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___49020,ch){
return (function (state_48992){
var state_val_48993 = (state_48992[(1)]);
if((state_val_48993 === (7))){
var inst_48988 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
var statearr_48994_49021 = state_48992__$1;
(statearr_48994_49021[(2)] = inst_48988);

(statearr_48994_49021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (1))){
var state_48992__$1 = state_48992;
var statearr_48995_49022 = state_48992__$1;
(statearr_48995_49022[(2)] = null);

(statearr_48995_49022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (4))){
var inst_48945 = (state_48992[(7)]);
var inst_48945__$1 = (state_48992[(2)]);
var state_48992__$1 = (function (){var statearr_48996 = state_48992;
(statearr_48996[(7)] = inst_48945__$1);

return statearr_48996;
})();
if(cljs.core.truth_(inst_48945__$1)){
var statearr_48997_49023 = state_48992__$1;
(statearr_48997_49023[(1)] = (5));

} else {
var statearr_48998_49024 = state_48992__$1;
(statearr_48998_49024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (15))){
var inst_48952 = (state_48992[(8)]);
var inst_48967 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48952);
var inst_48968 = cljs.core.first.call(null,inst_48967);
var inst_48969 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48968);
var inst_48970 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48969)].join('');
var inst_48971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48970);
var state_48992__$1 = state_48992;
var statearr_48999_49025 = state_48992__$1;
(statearr_48999_49025[(2)] = inst_48971);

(statearr_48999_49025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (13))){
var inst_48976 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
var statearr_49000_49026 = state_48992__$1;
(statearr_49000_49026[(2)] = inst_48976);

(statearr_49000_49026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (6))){
var state_48992__$1 = state_48992;
var statearr_49001_49027 = state_48992__$1;
(statearr_49001_49027[(2)] = null);

(statearr_49001_49027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (17))){
var inst_48974 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
var statearr_49002_49028 = state_48992__$1;
(statearr_49002_49028[(2)] = inst_48974);

(statearr_49002_49028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (3))){
var inst_48990 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48992__$1,inst_48990);
} else {
if((state_val_48993 === (12))){
var inst_48951 = (state_48992[(9)]);
var inst_48965 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48951,opts);
var state_48992__$1 = state_48992;
if(inst_48965){
var statearr_49003_49029 = state_48992__$1;
(statearr_49003_49029[(1)] = (15));

} else {
var statearr_49004_49030 = state_48992__$1;
(statearr_49004_49030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (2))){
var state_48992__$1 = state_48992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48992__$1,(4),ch);
} else {
if((state_val_48993 === (11))){
var inst_48952 = (state_48992[(8)]);
var inst_48957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48958 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48952);
var inst_48959 = cljs.core.async.timeout.call(null,(1000));
var inst_48960 = [inst_48958,inst_48959];
var inst_48961 = (new cljs.core.PersistentVector(null,2,(5),inst_48957,inst_48960,null));
var state_48992__$1 = state_48992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48992__$1,(14),inst_48961);
} else {
if((state_val_48993 === (9))){
var inst_48952 = (state_48992[(8)]);
var inst_48978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48979 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48952);
var inst_48980 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48979);
var inst_48981 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48980)].join('');
var inst_48982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48981);
var state_48992__$1 = (function (){var statearr_49005 = state_48992;
(statearr_49005[(10)] = inst_48978);

return statearr_49005;
})();
var statearr_49006_49031 = state_48992__$1;
(statearr_49006_49031[(2)] = inst_48982);

(statearr_49006_49031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (5))){
var inst_48945 = (state_48992[(7)]);
var inst_48947 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48948 = (new cljs.core.PersistentArrayMap(null,2,inst_48947,null));
var inst_48949 = (new cljs.core.PersistentHashSet(null,inst_48948,null));
var inst_48950 = figwheel.client.focus_msgs.call(null,inst_48949,inst_48945);
var inst_48951 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48950);
var inst_48952 = cljs.core.first.call(null,inst_48950);
var inst_48953 = figwheel.client.autoload_QMARK_.call(null);
var state_48992__$1 = (function (){var statearr_49007 = state_48992;
(statearr_49007[(9)] = inst_48951);

(statearr_49007[(8)] = inst_48952);

return statearr_49007;
})();
if(cljs.core.truth_(inst_48953)){
var statearr_49008_49032 = state_48992__$1;
(statearr_49008_49032[(1)] = (8));

} else {
var statearr_49009_49033 = state_48992__$1;
(statearr_49009_49033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (14))){
var inst_48963 = (state_48992[(2)]);
var state_48992__$1 = state_48992;
var statearr_49010_49034 = state_48992__$1;
(statearr_49010_49034[(2)] = inst_48963);

(statearr_49010_49034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (16))){
var state_48992__$1 = state_48992;
var statearr_49011_49035 = state_48992__$1;
(statearr_49011_49035[(2)] = null);

(statearr_49011_49035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (10))){
var inst_48984 = (state_48992[(2)]);
var state_48992__$1 = (function (){var statearr_49012 = state_48992;
(statearr_49012[(11)] = inst_48984);

return statearr_49012;
})();
var statearr_49013_49036 = state_48992__$1;
(statearr_49013_49036[(2)] = null);

(statearr_49013_49036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48993 === (8))){
var inst_48951 = (state_48992[(9)]);
var inst_48955 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48951,opts);
var state_48992__$1 = state_48992;
if(cljs.core.truth_(inst_48955)){
var statearr_49014_49037 = state_48992__$1;
(statearr_49014_49037[(1)] = (11));

} else {
var statearr_49015_49038 = state_48992__$1;
(statearr_49015_49038[(1)] = (12));

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
});})(c__29333__auto___49020,ch))
;
return ((function (switch__29238__auto__,c__29333__auto___49020,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____0 = (function (){
var statearr_49016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49016[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__);

(statearr_49016[(1)] = (1));

return statearr_49016;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____1 = (function (state_48992){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_48992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e49017){if((e49017 instanceof Object)){
var ex__29242__auto__ = e49017;
var statearr_49018_49039 = state_48992;
(statearr_49018_49039[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49040 = state_48992;
state_48992 = G__49040;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__ = function(state_48992){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____1.call(this,state_48992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29239__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___49020,ch))
})();
var state__29335__auto__ = (function (){var statearr_49019 = f__29334__auto__.call(null);
(statearr_49019[(6)] = c__29333__auto___49020);

return statearr_49019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___49020,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49041_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49041_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_49047 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49047){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49044 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49045 = true;
var _STAR_print_fn_STAR__temp_val__49046 = ((function (_STAR_print_newline_STAR__orig_val__49043,_STAR_print_fn_STAR__orig_val__49044,_STAR_print_newline_STAR__temp_val__49045,sb,base_path_49047){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__49043,_STAR_print_fn_STAR__orig_val__49044,_STAR_print_newline_STAR__temp_val__49045,sb,base_path_49047))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49045;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49046;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49044;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49043;
}}catch (e49042){if((e49042 instanceof Error)){
var e = e49042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49047], null));
} else {
var e = e49042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_49047))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49048){
var map__49049 = p__49048;
var map__49049__$1 = (((((!((map__49049 == null))))?(((((map__49049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49049):map__49049);
var opts = map__49049__$1;
var build_id = cljs.core.get.call(null,map__49049__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49049,map__49049__$1,opts,build_id){
return (function (p__49051){
var vec__49052 = p__49051;
var seq__49053 = cljs.core.seq.call(null,vec__49052);
var first__49054 = cljs.core.first.call(null,seq__49053);
var seq__49053__$1 = cljs.core.next.call(null,seq__49053);
var map__49055 = first__49054;
var map__49055__$1 = (((((!((map__49055 == null))))?(((((map__49055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49055):map__49055);
var msg = map__49055__$1;
var msg_name = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49053__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49052,seq__49053,first__49054,seq__49053__$1,map__49055,map__49055__$1,msg,msg_name,_,map__49049,map__49049__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49052,seq__49053,first__49054,seq__49053__$1,map__49055,map__49055__$1,msg,msg_name,_,map__49049,map__49049__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49049,map__49049__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49057){
var vec__49058 = p__49057;
var seq__49059 = cljs.core.seq.call(null,vec__49058);
var first__49060 = cljs.core.first.call(null,seq__49059);
var seq__49059__$1 = cljs.core.next.call(null,seq__49059);
var map__49061 = first__49060;
var map__49061__$1 = (((((!((map__49061 == null))))?(((((map__49061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49061):map__49061);
var msg = map__49061__$1;
var msg_name = cljs.core.get.call(null,map__49061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49059__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49063){
var map__49064 = p__49063;
var map__49064__$1 = (((((!((map__49064 == null))))?(((((map__49064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49064):map__49064);
var on_compile_warning = cljs.core.get.call(null,map__49064__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49064__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49064,map__49064__$1,on_compile_warning,on_compile_fail){
return (function (p__49066){
var vec__49067 = p__49066;
var seq__49068 = cljs.core.seq.call(null,vec__49067);
var first__49069 = cljs.core.first.call(null,seq__49068);
var seq__49068__$1 = cljs.core.next.call(null,seq__49068);
var map__49070 = first__49069;
var map__49070__$1 = (((((!((map__49070 == null))))?(((((map__49070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49070):map__49070);
var msg = map__49070__$1;
var msg_name = cljs.core.get.call(null,map__49070__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49068__$1;
var pred__49072 = cljs.core._EQ_;
var expr__49073 = msg_name;
if(cljs.core.truth_(pred__49072.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49073))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49072.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49073))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49064,map__49064__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__,msg_hist,msg_names,msg){
return (function (state_49162){
var state_val_49163 = (state_49162[(1)]);
if((state_val_49163 === (7))){
var inst_49082 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
if(cljs.core.truth_(inst_49082)){
var statearr_49164_49211 = state_49162__$1;
(statearr_49164_49211[(1)] = (8));

} else {
var statearr_49165_49212 = state_49162__$1;
(statearr_49165_49212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (20))){
var inst_49156 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49166_49213 = state_49162__$1;
(statearr_49166_49213[(2)] = inst_49156);

(statearr_49166_49213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (27))){
var inst_49152 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49167_49214 = state_49162__$1;
(statearr_49167_49214[(2)] = inst_49152);

(statearr_49167_49214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (1))){
var inst_49075 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49162__$1 = state_49162;
if(cljs.core.truth_(inst_49075)){
var statearr_49168_49215 = state_49162__$1;
(statearr_49168_49215[(1)] = (2));

} else {
var statearr_49169_49216 = state_49162__$1;
(statearr_49169_49216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (24))){
var inst_49154 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49170_49217 = state_49162__$1;
(statearr_49170_49217[(2)] = inst_49154);

(statearr_49170_49217[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (4))){
var inst_49160 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49162__$1,inst_49160);
} else {
if((state_val_49163 === (15))){
var inst_49158 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49171_49218 = state_49162__$1;
(statearr_49171_49218[(2)] = inst_49158);

(statearr_49171_49218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (21))){
var inst_49111 = (state_49162[(2)]);
var inst_49112 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49113 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49112);
var state_49162__$1 = (function (){var statearr_49172 = state_49162;
(statearr_49172[(7)] = inst_49111);

return statearr_49172;
})();
var statearr_49173_49219 = state_49162__$1;
(statearr_49173_49219[(2)] = inst_49113);

(statearr_49173_49219[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (31))){
var inst_49141 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49141){
var statearr_49174_49220 = state_49162__$1;
(statearr_49174_49220[(1)] = (34));

} else {
var statearr_49175_49221 = state_49162__$1;
(statearr_49175_49221[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (32))){
var inst_49150 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49176_49222 = state_49162__$1;
(statearr_49176_49222[(2)] = inst_49150);

(statearr_49176_49222[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (33))){
var inst_49137 = (state_49162[(2)]);
var inst_49138 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49139 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49138);
var state_49162__$1 = (function (){var statearr_49177 = state_49162;
(statearr_49177[(8)] = inst_49137);

return statearr_49177;
})();
var statearr_49178_49223 = state_49162__$1;
(statearr_49178_49223[(2)] = inst_49139);

(statearr_49178_49223[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (13))){
var inst_49096 = figwheel.client.heads_up.clear.call(null);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(16),inst_49096);
} else {
if((state_val_49163 === (22))){
var inst_49117 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49118 = figwheel.client.heads_up.append_warning_message.call(null,inst_49117);
var state_49162__$1 = state_49162;
var statearr_49179_49224 = state_49162__$1;
(statearr_49179_49224[(2)] = inst_49118);

(statearr_49179_49224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (36))){
var inst_49148 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49180_49225 = state_49162__$1;
(statearr_49180_49225[(2)] = inst_49148);

(statearr_49180_49225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (29))){
var inst_49128 = (state_49162[(2)]);
var inst_49129 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49130 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49129);
var state_49162__$1 = (function (){var statearr_49181 = state_49162;
(statearr_49181[(9)] = inst_49128);

return statearr_49181;
})();
var statearr_49182_49226 = state_49162__$1;
(statearr_49182_49226[(2)] = inst_49130);

(statearr_49182_49226[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (6))){
var inst_49077 = (state_49162[(10)]);
var state_49162__$1 = state_49162;
var statearr_49183_49227 = state_49162__$1;
(statearr_49183_49227[(2)] = inst_49077);

(statearr_49183_49227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (28))){
var inst_49124 = (state_49162[(2)]);
var inst_49125 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49126 = figwheel.client.heads_up.display_warning.call(null,inst_49125);
var state_49162__$1 = (function (){var statearr_49184 = state_49162;
(statearr_49184[(11)] = inst_49124);

return statearr_49184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(29),inst_49126);
} else {
if((state_val_49163 === (25))){
var inst_49122 = figwheel.client.heads_up.clear.call(null);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(28),inst_49122);
} else {
if((state_val_49163 === (34))){
var inst_49143 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(37),inst_49143);
} else {
if((state_val_49163 === (17))){
var inst_49102 = (state_49162[(2)]);
var inst_49103 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49104 = figwheel.client.auto_jump_to_error.call(null,opts,inst_49103);
var state_49162__$1 = (function (){var statearr_49185 = state_49162;
(statearr_49185[(12)] = inst_49102);

return statearr_49185;
})();
var statearr_49186_49228 = state_49162__$1;
(statearr_49186_49228[(2)] = inst_49104);

(statearr_49186_49228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (3))){
var inst_49094 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49094){
var statearr_49187_49229 = state_49162__$1;
(statearr_49187_49229[(1)] = (13));

} else {
var statearr_49188_49230 = state_49162__$1;
(statearr_49188_49230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (12))){
var inst_49090 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49189_49231 = state_49162__$1;
(statearr_49189_49231[(2)] = inst_49090);

(statearr_49189_49231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (2))){
var inst_49077 = (state_49162[(10)]);
var inst_49077__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49162__$1 = (function (){var statearr_49190 = state_49162;
(statearr_49190[(10)] = inst_49077__$1);

return statearr_49190;
})();
if(cljs.core.truth_(inst_49077__$1)){
var statearr_49191_49232 = state_49162__$1;
(statearr_49191_49232[(1)] = (5));

} else {
var statearr_49192_49233 = state_49162__$1;
(statearr_49192_49233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (23))){
var inst_49120 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49120){
var statearr_49193_49234 = state_49162__$1;
(statearr_49193_49234[(1)] = (25));

} else {
var statearr_49194_49235 = state_49162__$1;
(statearr_49194_49235[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (35))){
var state_49162__$1 = state_49162;
var statearr_49195_49236 = state_49162__$1;
(statearr_49195_49236[(2)] = null);

(statearr_49195_49236[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (19))){
var inst_49115 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49115){
var statearr_49196_49237 = state_49162__$1;
(statearr_49196_49237[(1)] = (22));

} else {
var statearr_49197_49238 = state_49162__$1;
(statearr_49197_49238[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (11))){
var inst_49086 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49198_49239 = state_49162__$1;
(statearr_49198_49239[(2)] = inst_49086);

(statearr_49198_49239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (9))){
var inst_49088 = figwheel.client.heads_up.clear.call(null);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(12),inst_49088);
} else {
if((state_val_49163 === (5))){
var inst_49079 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49162__$1 = state_49162;
var statearr_49199_49240 = state_49162__$1;
(statearr_49199_49240[(2)] = inst_49079);

(statearr_49199_49240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (14))){
var inst_49106 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49106){
var statearr_49200_49241 = state_49162__$1;
(statearr_49200_49241[(1)] = (18));

} else {
var statearr_49201_49242 = state_49162__$1;
(statearr_49201_49242[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (26))){
var inst_49132 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49162__$1 = state_49162;
if(inst_49132){
var statearr_49202_49243 = state_49162__$1;
(statearr_49202_49243[(1)] = (30));

} else {
var statearr_49203_49244 = state_49162__$1;
(statearr_49203_49244[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (16))){
var inst_49098 = (state_49162[(2)]);
var inst_49099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49100 = figwheel.client.heads_up.display_exception.call(null,inst_49099);
var state_49162__$1 = (function (){var statearr_49204 = state_49162;
(statearr_49204[(13)] = inst_49098);

return statearr_49204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(17),inst_49100);
} else {
if((state_val_49163 === (30))){
var inst_49134 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49135 = figwheel.client.heads_up.display_warning.call(null,inst_49134);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(33),inst_49135);
} else {
if((state_val_49163 === (10))){
var inst_49092 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49205_49245 = state_49162__$1;
(statearr_49205_49245[(2)] = inst_49092);

(statearr_49205_49245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (18))){
var inst_49108 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49109 = figwheel.client.heads_up.display_exception.call(null,inst_49108);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(21),inst_49109);
} else {
if((state_val_49163 === (37))){
var inst_49145 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49206_49246 = state_49162__$1;
(statearr_49206_49246[(2)] = inst_49145);

(statearr_49206_49246[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (8))){
var inst_49084 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(11),inst_49084);
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
});})(c__29333__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29238__auto__,c__29333__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____0 = (function (){
var statearr_49207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49207[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__);

(statearr_49207[(1)] = (1));

return statearr_49207;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____1 = (function (state_49162){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_49162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e49208){if((e49208 instanceof Object)){
var ex__29242__auto__ = e49208;
var statearr_49209_49247 = state_49162;
(statearr_49209_49247[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49248 = state_49162;
state_49162 = G__49248;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__ = function(state_49162){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____1.call(this,state_49162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__,msg_hist,msg_names,msg))
})();
var state__29335__auto__ = (function (){var statearr_49210 = f__29334__auto__.call(null);
(statearr_49210[(6)] = c__29333__auto__);

return statearr_49210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__,msg_hist,msg_names,msg))
);

return c__29333__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29333__auto___49277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___49277,ch){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___49277,ch){
return (function (state_49263){
var state_val_49264 = (state_49263[(1)]);
if((state_val_49264 === (1))){
var state_49263__$1 = state_49263;
var statearr_49265_49278 = state_49263__$1;
(statearr_49265_49278[(2)] = null);

(statearr_49265_49278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (2))){
var state_49263__$1 = state_49263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49263__$1,(4),ch);
} else {
if((state_val_49264 === (3))){
var inst_49261 = (state_49263[(2)]);
var state_49263__$1 = state_49263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49263__$1,inst_49261);
} else {
if((state_val_49264 === (4))){
var inst_49251 = (state_49263[(7)]);
var inst_49251__$1 = (state_49263[(2)]);
var state_49263__$1 = (function (){var statearr_49266 = state_49263;
(statearr_49266[(7)] = inst_49251__$1);

return statearr_49266;
})();
if(cljs.core.truth_(inst_49251__$1)){
var statearr_49267_49279 = state_49263__$1;
(statearr_49267_49279[(1)] = (5));

} else {
var statearr_49268_49280 = state_49263__$1;
(statearr_49268_49280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (5))){
var inst_49251 = (state_49263[(7)]);
var inst_49253 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49251);
var state_49263__$1 = state_49263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49263__$1,(8),inst_49253);
} else {
if((state_val_49264 === (6))){
var state_49263__$1 = state_49263;
var statearr_49269_49281 = state_49263__$1;
(statearr_49269_49281[(2)] = null);

(statearr_49269_49281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (7))){
var inst_49259 = (state_49263[(2)]);
var state_49263__$1 = state_49263;
var statearr_49270_49282 = state_49263__$1;
(statearr_49270_49282[(2)] = inst_49259);

(statearr_49270_49282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49264 === (8))){
var inst_49255 = (state_49263[(2)]);
var state_49263__$1 = (function (){var statearr_49271 = state_49263;
(statearr_49271[(8)] = inst_49255);

return statearr_49271;
})();
var statearr_49272_49283 = state_49263__$1;
(statearr_49272_49283[(2)] = null);

(statearr_49272_49283[(1)] = (2));


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
});})(c__29333__auto___49277,ch))
;
return ((function (switch__29238__auto__,c__29333__auto___49277,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29239__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29239__auto____0 = (function (){
var statearr_49273 = [null,null,null,null,null,null,null,null,null];
(statearr_49273[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29239__auto__);

(statearr_49273[(1)] = (1));

return statearr_49273;
});
var figwheel$client$heads_up_plugin_$_state_machine__29239__auto____1 = (function (state_49263){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_49263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e49274){if((e49274 instanceof Object)){
var ex__29242__auto__ = e49274;
var statearr_49275_49284 = state_49263;
(statearr_49275_49284[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49285 = state_49263;
state_49263 = G__49285;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29239__auto__ = function(state_49263){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29239__auto____1.call(this,state_49263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29239__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29239__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___49277,ch))
})();
var state__29335__auto__ = (function (){var statearr_49276 = f__29334__auto__.call(null);
(statearr_49276[(6)] = c__29333__auto___49277);

return statearr_49276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___49277,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__){
return (function (state_49291){
var state_val_49292 = (state_49291[(1)]);
if((state_val_49292 === (1))){
var inst_49286 = cljs.core.async.timeout.call(null,(3000));
var state_49291__$1 = state_49291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49291__$1,(2),inst_49286);
} else {
if((state_val_49292 === (2))){
var inst_49288 = (state_49291[(2)]);
var inst_49289 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49291__$1 = (function (){var statearr_49293 = state_49291;
(statearr_49293[(7)] = inst_49288);

return statearr_49293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49291__$1,inst_49289);
} else {
return null;
}
}
});})(c__29333__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____0 = (function (){
var statearr_49294 = [null,null,null,null,null,null,null,null];
(statearr_49294[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__);

(statearr_49294[(1)] = (1));

return statearr_49294;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____1 = (function (state_49291){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_49291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e49295){if((e49295 instanceof Object)){
var ex__29242__auto__ = e49295;
var statearr_49296_49298 = state_49291;
(statearr_49296_49298[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49299 = state_49291;
state_49291 = G__49299;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__ = function(state_49291){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____1.call(this,state_49291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29239__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__))
})();
var state__29335__auto__ = (function (){var statearr_49297 = f__29334__auto__.call(null);
(statearr_49297[(6)] = c__29333__auto__);

return statearr_49297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__))
);

return c__29333__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__,figwheel_version,temp__5735__auto__){
return (function (state_49306){
var state_val_49307 = (state_49306[(1)]);
if((state_val_49307 === (1))){
var inst_49300 = cljs.core.async.timeout.call(null,(2000));
var state_49306__$1 = state_49306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49306__$1,(2),inst_49300);
} else {
if((state_val_49307 === (2))){
var inst_49302 = (state_49306[(2)]);
var inst_49303 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_49304 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49303);
var state_49306__$1 = (function (){var statearr_49308 = state_49306;
(statearr_49308[(7)] = inst_49302);

return statearr_49308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49306__$1,inst_49304);
} else {
return null;
}
}
});})(c__29333__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____0 = (function (){
var statearr_49309 = [null,null,null,null,null,null,null,null];
(statearr_49309[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__);

(statearr_49309[(1)] = (1));

return statearr_49309;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____1 = (function (state_49306){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_49306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e49310){if((e49310 instanceof Object)){
var ex__29242__auto__ = e49310;
var statearr_49311_49313 = state_49306;
(statearr_49311_49313[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49314 = state_49306;
state_49306 = G__49314;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__ = function(state_49306){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____1.call(this,state_49306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__,figwheel_version,temp__5735__auto__))
})();
var state__29335__auto__ = (function (){var statearr_49312 = f__29334__auto__.call(null);
(statearr_49312[(6)] = c__29333__auto__);

return statearr_49312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__,figwheel_version,temp__5735__auto__))
);

return c__29333__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49315){
var map__49316 = p__49315;
var map__49316__$1 = (((((!((map__49316 == null))))?(((((map__49316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49316):map__49316);
var file = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49316__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49318 = "";
var G__49318__$1 = (cljs.core.truth_(file)?[G__49318,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49318);
var G__49318__$2 = (cljs.core.truth_(line)?[G__49318__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49318__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__49318__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49318__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49319){
var map__49320 = p__49319;
var map__49320__$1 = (((((!((map__49320 == null))))?(((((map__49320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49320):map__49320);
var ed = map__49320__$1;
var exception_data = cljs.core.get.call(null,map__49320__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49320__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_49323 = (function (){var G__49322 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49322)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__49322;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_49323);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49324){
var map__49325 = p__49324;
var map__49325__$1 = (((((!((map__49325 == null))))?(((((map__49325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49325):map__49325);
var w = map__49325__$1;
var message = cljs.core.get.call(null,map__49325__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49327 = cljs.core.seq.call(null,plugins);
var chunk__49328 = null;
var count__49329 = (0);
var i__49330 = (0);
while(true){
if((i__49330 < count__49329)){
var vec__49337 = cljs.core._nth.call(null,chunk__49328,i__49330);
var k = cljs.core.nth.call(null,vec__49337,(0),null);
var plugin = cljs.core.nth.call(null,vec__49337,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49343 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49327,chunk__49328,count__49329,i__49330,pl_49343,vec__49337,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49343.call(null,msg_hist);
});})(seq__49327,chunk__49328,count__49329,i__49330,pl_49343,vec__49337,k,plugin))
);
} else {
}


var G__49344 = seq__49327;
var G__49345 = chunk__49328;
var G__49346 = count__49329;
var G__49347 = (i__49330 + (1));
seq__49327 = G__49344;
chunk__49328 = G__49345;
count__49329 = G__49346;
i__49330 = G__49347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__49327);
if(temp__5735__auto__){
var seq__49327__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49327__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__49327__$1);
var G__49348 = cljs.core.chunk_rest.call(null,seq__49327__$1);
var G__49349 = c__4550__auto__;
var G__49350 = cljs.core.count.call(null,c__4550__auto__);
var G__49351 = (0);
seq__49327 = G__49348;
chunk__49328 = G__49349;
count__49329 = G__49350;
i__49330 = G__49351;
continue;
} else {
var vec__49340 = cljs.core.first.call(null,seq__49327__$1);
var k = cljs.core.nth.call(null,vec__49340,(0),null);
var plugin = cljs.core.nth.call(null,vec__49340,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49352 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49327,chunk__49328,count__49329,i__49330,pl_49352,vec__49340,k,plugin,seq__49327__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49352.call(null,msg_hist);
});})(seq__49327,chunk__49328,count__49329,i__49330,pl_49352,vec__49340,k,plugin,seq__49327__$1,temp__5735__auto__))
);
} else {
}


var G__49353 = cljs.core.next.call(null,seq__49327__$1);
var G__49354 = null;
var G__49355 = (0);
var G__49356 = (0);
seq__49327 = G__49353;
chunk__49328 = G__49354;
count__49329 = G__49355;
i__49330 = G__49356;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__49358 = arguments.length;
switch (G__49358) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49359_49364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49360_49365 = null;
var count__49361_49366 = (0);
var i__49362_49367 = (0);
while(true){
if((i__49362_49367 < count__49361_49366)){
var msg_49368 = cljs.core._nth.call(null,chunk__49360_49365,i__49362_49367);
figwheel.client.socket.handle_incoming_message.call(null,msg_49368);


var G__49369 = seq__49359_49364;
var G__49370 = chunk__49360_49365;
var G__49371 = count__49361_49366;
var G__49372 = (i__49362_49367 + (1));
seq__49359_49364 = G__49369;
chunk__49360_49365 = G__49370;
count__49361_49366 = G__49371;
i__49362_49367 = G__49372;
continue;
} else {
var temp__5735__auto___49373 = cljs.core.seq.call(null,seq__49359_49364);
if(temp__5735__auto___49373){
var seq__49359_49374__$1 = temp__5735__auto___49373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49359_49374__$1)){
var c__4550__auto___49375 = cljs.core.chunk_first.call(null,seq__49359_49374__$1);
var G__49376 = cljs.core.chunk_rest.call(null,seq__49359_49374__$1);
var G__49377 = c__4550__auto___49375;
var G__49378 = cljs.core.count.call(null,c__4550__auto___49375);
var G__49379 = (0);
seq__49359_49364 = G__49376;
chunk__49360_49365 = G__49377;
count__49361_49366 = G__49378;
i__49362_49367 = G__49379;
continue;
} else {
var msg_49380 = cljs.core.first.call(null,seq__49359_49374__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49380);


var G__49381 = cljs.core.next.call(null,seq__49359_49374__$1);
var G__49382 = null;
var G__49383 = (0);
var G__49384 = (0);
seq__49359_49364 = G__49381;
chunk__49360_49365 = G__49382;
count__49361_49366 = G__49383;
i__49362_49367 = G__49384;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49389 = arguments.length;
var i__4731__auto___49390 = (0);
while(true){
if((i__4731__auto___49390 < len__4730__auto___49389)){
args__4736__auto__.push((arguments[i__4731__auto___49390]));

var G__49391 = (i__4731__auto___49390 + (1));
i__4731__auto___49390 = G__49391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49386){
var map__49387 = p__49386;
var map__49387__$1 = (((((!((map__49387 == null))))?(((((map__49387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49387):map__49387);
var opts = map__49387__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49385));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49392){if((e49392 instanceof Error)){
var e = e49392;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49392;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49393){
var map__49394 = p__49393;
var map__49394__$1 = (((((!((map__49394 == null))))?(((((map__49394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49394):map__49394);
var msg_name = cljs.core.get.call(null,map__49394__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581079348529
