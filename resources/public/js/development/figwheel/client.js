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
}catch (e29030){if((e29030 instanceof Error)){
var e = e29030;
return "Error: Unable to stringify";
} else {
throw e29030;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29033 = arguments.length;
switch (G__29033) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29031_SHARP_){
if(typeof p1__29031_SHARP_ === 'string'){
return p1__29031_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29031_SHARP_);
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
var len__4730__auto___29036 = arguments.length;
var i__4731__auto___29037 = (0);
while(true){
if((i__4731__auto___29037 < len__4730__auto___29036)){
args__4736__auto__.push((arguments[i__4731__auto___29037]));

var G__29038 = (i__4731__auto___29037 + (1));
i__4731__auto___29037 = G__29038;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29035){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29035));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29040 = arguments.length;
var i__4731__auto___29041 = (0);
while(true){
if((i__4731__auto___29041 < len__4730__auto___29040)){
args__4736__auto__.push((arguments[i__4731__auto___29041]));

var G__29042 = (i__4731__auto___29041 + (1));
i__4731__auto___29041 = G__29042;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29039));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29043){
var map__29044 = p__29043;
var map__29044__$1 = (((((!((map__29044 == null))))?(((((map__29044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29044):map__29044);
var message = cljs.core.get.call(null,map__29044__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29044__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23702__auto___29123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___29123,ch){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___29123,ch){
return (function (state_29095){
var state_val_29096 = (state_29095[(1)]);
if((state_val_29096 === (7))){
var inst_29091 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29097_29124 = state_29095__$1;
(statearr_29097_29124[(2)] = inst_29091);

(statearr_29097_29124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (1))){
var state_29095__$1 = state_29095;
var statearr_29098_29125 = state_29095__$1;
(statearr_29098_29125[(2)] = null);

(statearr_29098_29125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (4))){
var inst_29048 = (state_29095[(7)]);
var inst_29048__$1 = (state_29095[(2)]);
var state_29095__$1 = (function (){var statearr_29099 = state_29095;
(statearr_29099[(7)] = inst_29048__$1);

return statearr_29099;
})();
if(cljs.core.truth_(inst_29048__$1)){
var statearr_29100_29126 = state_29095__$1;
(statearr_29100_29126[(1)] = (5));

} else {
var statearr_29101_29127 = state_29095__$1;
(statearr_29101_29127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (15))){
var inst_29055 = (state_29095[(8)]);
var inst_29070 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29055);
var inst_29071 = cljs.core.first.call(null,inst_29070);
var inst_29072 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29071);
var inst_29073 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29072)].join('');
var inst_29074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29073);
var state_29095__$1 = state_29095;
var statearr_29102_29128 = state_29095__$1;
(statearr_29102_29128[(2)] = inst_29074);

(statearr_29102_29128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (13))){
var inst_29079 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29103_29129 = state_29095__$1;
(statearr_29103_29129[(2)] = inst_29079);

(statearr_29103_29129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (6))){
var state_29095__$1 = state_29095;
var statearr_29104_29130 = state_29095__$1;
(statearr_29104_29130[(2)] = null);

(statearr_29104_29130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (17))){
var inst_29077 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29105_29131 = state_29095__$1;
(statearr_29105_29131[(2)] = inst_29077);

(statearr_29105_29131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (3))){
var inst_29093 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29095__$1,inst_29093);
} else {
if((state_val_29096 === (12))){
var inst_29054 = (state_29095[(9)]);
var inst_29068 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29054,opts);
var state_29095__$1 = state_29095;
if(inst_29068){
var statearr_29106_29132 = state_29095__$1;
(statearr_29106_29132[(1)] = (15));

} else {
var statearr_29107_29133 = state_29095__$1;
(statearr_29107_29133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (2))){
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29095__$1,(4),ch);
} else {
if((state_val_29096 === (11))){
var inst_29055 = (state_29095[(8)]);
var inst_29060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29061 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29055);
var inst_29062 = cljs.core.async.timeout.call(null,(1000));
var inst_29063 = [inst_29061,inst_29062];
var inst_29064 = (new cljs.core.PersistentVector(null,2,(5),inst_29060,inst_29063,null));
var state_29095__$1 = state_29095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29095__$1,(14),inst_29064);
} else {
if((state_val_29096 === (9))){
var inst_29055 = (state_29095[(8)]);
var inst_29081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29082 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29055);
var inst_29083 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29082);
var inst_29084 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29083)].join('');
var inst_29085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29084);
var state_29095__$1 = (function (){var statearr_29108 = state_29095;
(statearr_29108[(10)] = inst_29081);

return statearr_29108;
})();
var statearr_29109_29134 = state_29095__$1;
(statearr_29109_29134[(2)] = inst_29085);

(statearr_29109_29134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (5))){
var inst_29048 = (state_29095[(7)]);
var inst_29050 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29051 = (new cljs.core.PersistentArrayMap(null,2,inst_29050,null));
var inst_29052 = (new cljs.core.PersistentHashSet(null,inst_29051,null));
var inst_29053 = figwheel.client.focus_msgs.call(null,inst_29052,inst_29048);
var inst_29054 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29053);
var inst_29055 = cljs.core.first.call(null,inst_29053);
var inst_29056 = figwheel.client.autoload_QMARK_.call(null);
var state_29095__$1 = (function (){var statearr_29110 = state_29095;
(statearr_29110[(8)] = inst_29055);

(statearr_29110[(9)] = inst_29054);

return statearr_29110;
})();
if(cljs.core.truth_(inst_29056)){
var statearr_29111_29135 = state_29095__$1;
(statearr_29111_29135[(1)] = (8));

} else {
var statearr_29112_29136 = state_29095__$1;
(statearr_29112_29136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (14))){
var inst_29066 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29113_29137 = state_29095__$1;
(statearr_29113_29137[(2)] = inst_29066);

(statearr_29113_29137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (16))){
var state_29095__$1 = state_29095;
var statearr_29114_29138 = state_29095__$1;
(statearr_29114_29138[(2)] = null);

(statearr_29114_29138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (10))){
var inst_29087 = (state_29095[(2)]);
var state_29095__$1 = (function (){var statearr_29115 = state_29095;
(statearr_29115[(11)] = inst_29087);

return statearr_29115;
})();
var statearr_29116_29139 = state_29095__$1;
(statearr_29116_29139[(2)] = null);

(statearr_29116_29139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (8))){
var inst_29054 = (state_29095[(9)]);
var inst_29058 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29054,opts);
var state_29095__$1 = state_29095;
if(cljs.core.truth_(inst_29058)){
var statearr_29117_29140 = state_29095__$1;
(statearr_29117_29140[(1)] = (11));

} else {
var statearr_29118_29141 = state_29095__$1;
(statearr_29118_29141[(1)] = (12));

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
});})(c__23702__auto___29123,ch))
;
return ((function (switch__23607__auto__,c__23702__auto___29123,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____0 = (function (){
var statearr_29119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29119[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__);

(statearr_29119[(1)] = (1));

return statearr_29119;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____1 = (function (state_29095){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_29095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e29120){if((e29120 instanceof Object)){
var ex__23611__auto__ = e29120;
var statearr_29121_29142 = state_29095;
(statearr_29121_29142[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29143 = state_29095;
state_29095 = G__29143;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__ = function(state_29095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____1.call(this,state_29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23608__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___29123,ch))
})();
var state__23704__auto__ = (function (){var statearr_29122 = f__23703__auto__.call(null);
(statearr_29122[(6)] = c__23702__auto___29123);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___29123,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29144_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29144_SHARP_));
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
var base_path_29150 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29150){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29146 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29148 = true;
var _STAR_print_fn_STAR__temp_val__29149 = ((function (_STAR_print_newline_STAR__orig_val__29146,_STAR_print_fn_STAR__orig_val__29147,_STAR_print_newline_STAR__temp_val__29148,sb,base_path_29150){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29146,_STAR_print_fn_STAR__orig_val__29147,_STAR_print_newline_STAR__temp_val__29148,sb,base_path_29150))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29148;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29149;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29147;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29146;
}}catch (e29145){if((e29145 instanceof Error)){
var e = e29145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29150], null));
} else {
var e = e29145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29150))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29151){
var map__29152 = p__29151;
var map__29152__$1 = (((((!((map__29152 == null))))?(((((map__29152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29152):map__29152);
var opts = map__29152__$1;
var build_id = cljs.core.get.call(null,map__29152__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29152,map__29152__$1,opts,build_id){
return (function (p__29154){
var vec__29155 = p__29154;
var seq__29156 = cljs.core.seq.call(null,vec__29155);
var first__29157 = cljs.core.first.call(null,seq__29156);
var seq__29156__$1 = cljs.core.next.call(null,seq__29156);
var map__29158 = first__29157;
var map__29158__$1 = (((((!((map__29158 == null))))?(((((map__29158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29158):map__29158);
var msg = map__29158__$1;
var msg_name = cljs.core.get.call(null,map__29158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29156__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29155,seq__29156,first__29157,seq__29156__$1,map__29158,map__29158__$1,msg,msg_name,_,map__29152,map__29152__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29155,seq__29156,first__29157,seq__29156__$1,map__29158,map__29158__$1,msg,msg_name,_,map__29152,map__29152__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29152,map__29152__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29160){
var vec__29161 = p__29160;
var seq__29162 = cljs.core.seq.call(null,vec__29161);
var first__29163 = cljs.core.first.call(null,seq__29162);
var seq__29162__$1 = cljs.core.next.call(null,seq__29162);
var map__29164 = first__29163;
var map__29164__$1 = (((((!((map__29164 == null))))?(((((map__29164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29164):map__29164);
var msg = map__29164__$1;
var msg_name = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29162__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29166){
var map__29167 = p__29166;
var map__29167__$1 = (((((!((map__29167 == null))))?(((((map__29167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29167):map__29167);
var on_compile_warning = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29167__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29167,map__29167__$1,on_compile_warning,on_compile_fail){
return (function (p__29169){
var vec__29170 = p__29169;
var seq__29171 = cljs.core.seq.call(null,vec__29170);
var first__29172 = cljs.core.first.call(null,seq__29171);
var seq__29171__$1 = cljs.core.next.call(null,seq__29171);
var map__29173 = first__29172;
var map__29173__$1 = (((((!((map__29173 == null))))?(((((map__29173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29173):map__29173);
var msg = map__29173__$1;
var msg_name = cljs.core.get.call(null,map__29173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29171__$1;
var pred__29175 = cljs.core._EQ_;
var expr__29176 = msg_name;
if(cljs.core.truth_(pred__29175.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29176))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29175.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29176))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29167,map__29167__$1,on_compile_warning,on_compile_fail))
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__,msg_hist,msg_names,msg){
return (function (state_29265){
var state_val_29266 = (state_29265[(1)]);
if((state_val_29266 === (7))){
var inst_29185 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29185)){
var statearr_29267_29314 = state_29265__$1;
(statearr_29267_29314[(1)] = (8));

} else {
var statearr_29268_29315 = state_29265__$1;
(statearr_29268_29315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (20))){
var inst_29259 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29269_29316 = state_29265__$1;
(statearr_29269_29316[(2)] = inst_29259);

(statearr_29269_29316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (27))){
var inst_29255 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29270_29317 = state_29265__$1;
(statearr_29270_29317[(2)] = inst_29255);

(statearr_29270_29317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (1))){
var inst_29178 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29265__$1 = state_29265;
if(cljs.core.truth_(inst_29178)){
var statearr_29271_29318 = state_29265__$1;
(statearr_29271_29318[(1)] = (2));

} else {
var statearr_29272_29319 = state_29265__$1;
(statearr_29272_29319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (24))){
var inst_29257 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29273_29320 = state_29265__$1;
(statearr_29273_29320[(2)] = inst_29257);

(statearr_29273_29320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (4))){
var inst_29263 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29265__$1,inst_29263);
} else {
if((state_val_29266 === (15))){
var inst_29261 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29274_29321 = state_29265__$1;
(statearr_29274_29321[(2)] = inst_29261);

(statearr_29274_29321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (21))){
var inst_29214 = (state_29265[(2)]);
var inst_29215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29216 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29215);
var state_29265__$1 = (function (){var statearr_29275 = state_29265;
(statearr_29275[(7)] = inst_29214);

return statearr_29275;
})();
var statearr_29276_29322 = state_29265__$1;
(statearr_29276_29322[(2)] = inst_29216);

(statearr_29276_29322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (31))){
var inst_29244 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29244){
var statearr_29277_29323 = state_29265__$1;
(statearr_29277_29323[(1)] = (34));

} else {
var statearr_29278_29324 = state_29265__$1;
(statearr_29278_29324[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (32))){
var inst_29253 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29279_29325 = state_29265__$1;
(statearr_29279_29325[(2)] = inst_29253);

(statearr_29279_29325[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (33))){
var inst_29240 = (state_29265[(2)]);
var inst_29241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29242 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29241);
var state_29265__$1 = (function (){var statearr_29280 = state_29265;
(statearr_29280[(8)] = inst_29240);

return statearr_29280;
})();
var statearr_29281_29326 = state_29265__$1;
(statearr_29281_29326[(2)] = inst_29242);

(statearr_29281_29326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (13))){
var inst_29199 = figwheel.client.heads_up.clear.call(null);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(16),inst_29199);
} else {
if((state_val_29266 === (22))){
var inst_29220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29221 = figwheel.client.heads_up.append_warning_message.call(null,inst_29220);
var state_29265__$1 = state_29265;
var statearr_29282_29327 = state_29265__$1;
(statearr_29282_29327[(2)] = inst_29221);

(statearr_29282_29327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (36))){
var inst_29251 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29283_29328 = state_29265__$1;
(statearr_29283_29328[(2)] = inst_29251);

(statearr_29283_29328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (29))){
var inst_29231 = (state_29265[(2)]);
var inst_29232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29232);
var state_29265__$1 = (function (){var statearr_29284 = state_29265;
(statearr_29284[(9)] = inst_29231);

return statearr_29284;
})();
var statearr_29285_29329 = state_29265__$1;
(statearr_29285_29329[(2)] = inst_29233);

(statearr_29285_29329[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (6))){
var inst_29180 = (state_29265[(10)]);
var state_29265__$1 = state_29265;
var statearr_29286_29330 = state_29265__$1;
(statearr_29286_29330[(2)] = inst_29180);

(statearr_29286_29330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (28))){
var inst_29227 = (state_29265[(2)]);
var inst_29228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29229 = figwheel.client.heads_up.display_warning.call(null,inst_29228);
var state_29265__$1 = (function (){var statearr_29287 = state_29265;
(statearr_29287[(11)] = inst_29227);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(29),inst_29229);
} else {
if((state_val_29266 === (25))){
var inst_29225 = figwheel.client.heads_up.clear.call(null);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(28),inst_29225);
} else {
if((state_val_29266 === (34))){
var inst_29246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(37),inst_29246);
} else {
if((state_val_29266 === (17))){
var inst_29205 = (state_29265[(2)]);
var inst_29206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29207 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29206);
var state_29265__$1 = (function (){var statearr_29288 = state_29265;
(statearr_29288[(12)] = inst_29205);

return statearr_29288;
})();
var statearr_29289_29331 = state_29265__$1;
(statearr_29289_29331[(2)] = inst_29207);

(statearr_29289_29331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (3))){
var inst_29197 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29197){
var statearr_29290_29332 = state_29265__$1;
(statearr_29290_29332[(1)] = (13));

} else {
var statearr_29291_29333 = state_29265__$1;
(statearr_29291_29333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (12))){
var inst_29193 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29292_29334 = state_29265__$1;
(statearr_29292_29334[(2)] = inst_29193);

(statearr_29292_29334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (2))){
var inst_29180 = (state_29265[(10)]);
var inst_29180__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29265__$1 = (function (){var statearr_29293 = state_29265;
(statearr_29293[(10)] = inst_29180__$1);

return statearr_29293;
})();
if(cljs.core.truth_(inst_29180__$1)){
var statearr_29294_29335 = state_29265__$1;
(statearr_29294_29335[(1)] = (5));

} else {
var statearr_29295_29336 = state_29265__$1;
(statearr_29295_29336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (23))){
var inst_29223 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29223){
var statearr_29296_29337 = state_29265__$1;
(statearr_29296_29337[(1)] = (25));

} else {
var statearr_29297_29338 = state_29265__$1;
(statearr_29297_29338[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (35))){
var state_29265__$1 = state_29265;
var statearr_29298_29339 = state_29265__$1;
(statearr_29298_29339[(2)] = null);

(statearr_29298_29339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (19))){
var inst_29218 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29218){
var statearr_29299_29340 = state_29265__$1;
(statearr_29299_29340[(1)] = (22));

} else {
var statearr_29300_29341 = state_29265__$1;
(statearr_29300_29341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (11))){
var inst_29189 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29301_29342 = state_29265__$1;
(statearr_29301_29342[(2)] = inst_29189);

(statearr_29301_29342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (9))){
var inst_29191 = figwheel.client.heads_up.clear.call(null);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(12),inst_29191);
} else {
if((state_val_29266 === (5))){
var inst_29182 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29265__$1 = state_29265;
var statearr_29302_29343 = state_29265__$1;
(statearr_29302_29343[(2)] = inst_29182);

(statearr_29302_29343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (14))){
var inst_29209 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29209){
var statearr_29303_29344 = state_29265__$1;
(statearr_29303_29344[(1)] = (18));

} else {
var statearr_29304_29345 = state_29265__$1;
(statearr_29304_29345[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (26))){
var inst_29235 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29265__$1 = state_29265;
if(inst_29235){
var statearr_29305_29346 = state_29265__$1;
(statearr_29305_29346[(1)] = (30));

} else {
var statearr_29306_29347 = state_29265__$1;
(statearr_29306_29347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (16))){
var inst_29201 = (state_29265[(2)]);
var inst_29202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29203 = figwheel.client.heads_up.display_exception.call(null,inst_29202);
var state_29265__$1 = (function (){var statearr_29307 = state_29265;
(statearr_29307[(13)] = inst_29201);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(17),inst_29203);
} else {
if((state_val_29266 === (30))){
var inst_29237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29238 = figwheel.client.heads_up.display_warning.call(null,inst_29237);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(33),inst_29238);
} else {
if((state_val_29266 === (10))){
var inst_29195 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29308_29348 = state_29265__$1;
(statearr_29308_29348[(2)] = inst_29195);

(statearr_29308_29348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (18))){
var inst_29211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29212 = figwheel.client.heads_up.display_exception.call(null,inst_29211);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(21),inst_29212);
} else {
if((state_val_29266 === (37))){
var inst_29248 = (state_29265[(2)]);
var state_29265__$1 = state_29265;
var statearr_29309_29349 = state_29265__$1;
(statearr_29309_29349[(2)] = inst_29248);

(statearr_29309_29349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29266 === (8))){
var inst_29187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29265__$1 = state_29265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29265__$1,(11),inst_29187);
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
});})(c__23702__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23607__auto__,c__23702__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____0 = (function (){
var statearr_29310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29310[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__);

(statearr_29310[(1)] = (1));

return statearr_29310;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____1 = (function (state_29265){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_29265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e29311){if((e29311 instanceof Object)){
var ex__23611__auto__ = e29311;
var statearr_29312_29350 = state_29265;
(statearr_29312_29350[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29351 = state_29265;
state_29265 = G__29351;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__ = function(state_29265){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____1.call(this,state_29265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__,msg_hist,msg_names,msg))
})();
var state__23704__auto__ = (function (){var statearr_29313 = f__23703__auto__.call(null);
(statearr_29313[(6)] = c__23702__auto__);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__,msg_hist,msg_names,msg))
);

return c__23702__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23702__auto___29380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___29380,ch){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___29380,ch){
return (function (state_29366){
var state_val_29367 = (state_29366[(1)]);
if((state_val_29367 === (1))){
var state_29366__$1 = state_29366;
var statearr_29368_29381 = state_29366__$1;
(statearr_29368_29381[(2)] = null);

(statearr_29368_29381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (2))){
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(4),ch);
} else {
if((state_val_29367 === (3))){
var inst_29364 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29366__$1,inst_29364);
} else {
if((state_val_29367 === (4))){
var inst_29354 = (state_29366[(7)]);
var inst_29354__$1 = (state_29366[(2)]);
var state_29366__$1 = (function (){var statearr_29369 = state_29366;
(statearr_29369[(7)] = inst_29354__$1);

return statearr_29369;
})();
if(cljs.core.truth_(inst_29354__$1)){
var statearr_29370_29382 = state_29366__$1;
(statearr_29370_29382[(1)] = (5));

} else {
var statearr_29371_29383 = state_29366__$1;
(statearr_29371_29383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (5))){
var inst_29354 = (state_29366[(7)]);
var inst_29356 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29354);
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(8),inst_29356);
} else {
if((state_val_29367 === (6))){
var state_29366__$1 = state_29366;
var statearr_29372_29384 = state_29366__$1;
(statearr_29372_29384[(2)] = null);

(statearr_29372_29384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (7))){
var inst_29362 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29373_29385 = state_29366__$1;
(statearr_29373_29385[(2)] = inst_29362);

(statearr_29373_29385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (8))){
var inst_29358 = (state_29366[(2)]);
var state_29366__$1 = (function (){var statearr_29374 = state_29366;
(statearr_29374[(8)] = inst_29358);

return statearr_29374;
})();
var statearr_29375_29386 = state_29366__$1;
(statearr_29375_29386[(2)] = null);

(statearr_29375_29386[(1)] = (2));


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
});})(c__23702__auto___29380,ch))
;
return ((function (switch__23607__auto__,c__23702__auto___29380,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23608__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23608__auto____0 = (function (){
var statearr_29376 = [null,null,null,null,null,null,null,null,null];
(statearr_29376[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23608__auto__);

(statearr_29376[(1)] = (1));

return statearr_29376;
});
var figwheel$client$heads_up_plugin_$_state_machine__23608__auto____1 = (function (state_29366){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_29366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e29377){if((e29377 instanceof Object)){
var ex__23611__auto__ = e29377;
var statearr_29378_29387 = state_29366;
(statearr_29378_29387[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29388 = state_29366;
state_29366 = G__29388;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23608__auto__ = function(state_29366){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23608__auto____1.call(this,state_29366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23608__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23608__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___29380,ch))
})();
var state__23704__auto__ = (function (){var statearr_29379 = f__23703__auto__.call(null);
(statearr_29379[(6)] = c__23702__auto___29380);

return statearr_29379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___29380,ch))
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__){
return (function (state_29394){
var state_val_29395 = (state_29394[(1)]);
if((state_val_29395 === (1))){
var inst_29389 = cljs.core.async.timeout.call(null,(3000));
var state_29394__$1 = state_29394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29394__$1,(2),inst_29389);
} else {
if((state_val_29395 === (2))){
var inst_29391 = (state_29394[(2)]);
var inst_29392 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29394__$1 = (function (){var statearr_29396 = state_29394;
(statearr_29396[(7)] = inst_29391);

return statearr_29396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29394__$1,inst_29392);
} else {
return null;
}
}
});})(c__23702__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____0 = (function (){
var statearr_29397 = [null,null,null,null,null,null,null,null];
(statearr_29397[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__);

(statearr_29397[(1)] = (1));

return statearr_29397;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____1 = (function (state_29394){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_29394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e29398){if((e29398 instanceof Object)){
var ex__23611__auto__ = e29398;
var statearr_29399_29401 = state_29394;
(statearr_29399_29401[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29402 = state_29394;
state_29394 = G__29402;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__ = function(state_29394){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____1.call(this,state_29394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23608__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__))
})();
var state__23704__auto__ = (function (){var statearr_29400 = f__23703__auto__.call(null);
(statearr_29400[(6)] = c__23702__auto__);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__))
);

return c__23702__auto__;
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29409){
var state_val_29410 = (state_29409[(1)]);
if((state_val_29410 === (1))){
var inst_29403 = cljs.core.async.timeout.call(null,(2000));
var state_29409__$1 = state_29409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29409__$1,(2),inst_29403);
} else {
if((state_val_29410 === (2))){
var inst_29405 = (state_29409[(2)]);
var inst_29406 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29407 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29406);
var state_29409__$1 = (function (){var statearr_29411 = state_29409;
(statearr_29411[(7)] = inst_29405);

return statearr_29411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29409__$1,inst_29407);
} else {
return null;
}
}
});})(c__23702__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____0 = (function (){
var statearr_29412 = [null,null,null,null,null,null,null,null];
(statearr_29412[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__);

(statearr_29412[(1)] = (1));

return statearr_29412;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____1 = (function (state_29409){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_29409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e29413){if((e29413 instanceof Object)){
var ex__23611__auto__ = e29413;
var statearr_29414_29416 = state_29409;
(statearr_29414_29416[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29417 = state_29409;
state_29409 = G__29417;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__ = function(state_29409){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____1.call(this,state_29409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__,figwheel_version,temp__5735__auto__))
})();
var state__23704__auto__ = (function (){var statearr_29415 = f__23703__auto__.call(null);
(statearr_29415[(6)] = c__23702__auto__);

return statearr_29415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__,figwheel_version,temp__5735__auto__))
);

return c__23702__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29418){
var map__29419 = p__29418;
var map__29419__$1 = (((((!((map__29419 == null))))?(((((map__29419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29419):map__29419);
var file = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29421 = "";
var G__29421__$1 = (cljs.core.truth_(file)?[G__29421,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29421);
var G__29421__$2 = (cljs.core.truth_(line)?[G__29421__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29421__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29421__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29421__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29422){
var map__29423 = p__29422;
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var ed = map__29423__$1;
var exception_data = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29426 = (function (){var G__29425 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29425)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29425;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29426);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29427){
var map__29428 = p__29427;
var map__29428__$1 = (((((!((map__29428 == null))))?(((((map__29428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29428):map__29428);
var w = map__29428__$1;
var message = cljs.core.get.call(null,map__29428__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29430 = cljs.core.seq.call(null,plugins);
var chunk__29431 = null;
var count__29432 = (0);
var i__29433 = (0);
while(true){
if((i__29433 < count__29432)){
var vec__29440 = cljs.core._nth.call(null,chunk__29431,i__29433);
var k = cljs.core.nth.call(null,vec__29440,(0),null);
var plugin = cljs.core.nth.call(null,vec__29440,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29446 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29430,chunk__29431,count__29432,i__29433,pl_29446,vec__29440,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29446.call(null,msg_hist);
});})(seq__29430,chunk__29431,count__29432,i__29433,pl_29446,vec__29440,k,plugin))
);
} else {
}


var G__29447 = seq__29430;
var G__29448 = chunk__29431;
var G__29449 = count__29432;
var G__29450 = (i__29433 + (1));
seq__29430 = G__29447;
chunk__29431 = G__29448;
count__29432 = G__29449;
i__29433 = G__29450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29430);
if(temp__5735__auto__){
var seq__29430__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29430__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29430__$1);
var G__29451 = cljs.core.chunk_rest.call(null,seq__29430__$1);
var G__29452 = c__4550__auto__;
var G__29453 = cljs.core.count.call(null,c__4550__auto__);
var G__29454 = (0);
seq__29430 = G__29451;
chunk__29431 = G__29452;
count__29432 = G__29453;
i__29433 = G__29454;
continue;
} else {
var vec__29443 = cljs.core.first.call(null,seq__29430__$1);
var k = cljs.core.nth.call(null,vec__29443,(0),null);
var plugin = cljs.core.nth.call(null,vec__29443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29455 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29430,chunk__29431,count__29432,i__29433,pl_29455,vec__29443,k,plugin,seq__29430__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29455.call(null,msg_hist);
});})(seq__29430,chunk__29431,count__29432,i__29433,pl_29455,vec__29443,k,plugin,seq__29430__$1,temp__5735__auto__))
);
} else {
}


var G__29456 = cljs.core.next.call(null,seq__29430__$1);
var G__29457 = null;
var G__29458 = (0);
var G__29459 = (0);
seq__29430 = G__29456;
chunk__29431 = G__29457;
count__29432 = G__29458;
i__29433 = G__29459;
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
var G__29461 = arguments.length;
switch (G__29461) {
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

var seq__29462_29467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29463_29468 = null;
var count__29464_29469 = (0);
var i__29465_29470 = (0);
while(true){
if((i__29465_29470 < count__29464_29469)){
var msg_29471 = cljs.core._nth.call(null,chunk__29463_29468,i__29465_29470);
figwheel.client.socket.handle_incoming_message.call(null,msg_29471);


var G__29472 = seq__29462_29467;
var G__29473 = chunk__29463_29468;
var G__29474 = count__29464_29469;
var G__29475 = (i__29465_29470 + (1));
seq__29462_29467 = G__29472;
chunk__29463_29468 = G__29473;
count__29464_29469 = G__29474;
i__29465_29470 = G__29475;
continue;
} else {
var temp__5735__auto___29476 = cljs.core.seq.call(null,seq__29462_29467);
if(temp__5735__auto___29476){
var seq__29462_29477__$1 = temp__5735__auto___29476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29462_29477__$1)){
var c__4550__auto___29478 = cljs.core.chunk_first.call(null,seq__29462_29477__$1);
var G__29479 = cljs.core.chunk_rest.call(null,seq__29462_29477__$1);
var G__29480 = c__4550__auto___29478;
var G__29481 = cljs.core.count.call(null,c__4550__auto___29478);
var G__29482 = (0);
seq__29462_29467 = G__29479;
chunk__29463_29468 = G__29480;
count__29464_29469 = G__29481;
i__29465_29470 = G__29482;
continue;
} else {
var msg_29483 = cljs.core.first.call(null,seq__29462_29477__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29483);


var G__29484 = cljs.core.next.call(null,seq__29462_29477__$1);
var G__29485 = null;
var G__29486 = (0);
var G__29487 = (0);
seq__29462_29467 = G__29484;
chunk__29463_29468 = G__29485;
count__29464_29469 = G__29486;
i__29465_29470 = G__29487;
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
var len__4730__auto___29492 = arguments.length;
var i__4731__auto___29493 = (0);
while(true){
if((i__4731__auto___29493 < len__4730__auto___29492)){
args__4736__auto__.push((arguments[i__4731__auto___29493]));

var G__29494 = (i__4731__auto___29493 + (1));
i__4731__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29489){
var map__29490 = p__29489;
var map__29490__$1 = (((((!((map__29490 == null))))?(((((map__29490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29490):map__29490);
var opts = map__29490__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29488));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29495){if((e29495 instanceof Error)){
var e = e29495;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29495;

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
return (function (p__29496){
var map__29497 = p__29496;
var map__29497__$1 = (((((!((map__29497 == null))))?(((((map__29497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29497):map__29497);
var msg_name = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581009608401
