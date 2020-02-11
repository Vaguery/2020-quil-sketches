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
}catch (e65030){if((e65030 instanceof Error)){
var e = e65030;
return "Error: Unable to stringify";
} else {
throw e65030;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__65033 = arguments.length;
switch (G__65033) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__65031_SHARP_){
if(typeof p1__65031_SHARP_ === 'string'){
return p1__65031_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__65031_SHARP_);
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
var len__4730__auto___65036 = arguments.length;
var i__4731__auto___65037 = (0);
while(true){
if((i__4731__auto___65037 < len__4730__auto___65036)){
args__4736__auto__.push((arguments[i__4731__auto___65037]));

var G__65038 = (i__4731__auto___65037 + (1));
i__4731__auto___65037 = G__65038;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq65035){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65035));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65040 = arguments.length;
var i__4731__auto___65041 = (0);
while(true){
if((i__4731__auto___65041 < len__4730__auto___65040)){
args__4736__auto__.push((arguments[i__4731__auto___65041]));

var G__65042 = (i__4731__auto___65041 + (1));
i__4731__auto___65041 = G__65042;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq65039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65039));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__65043){
var map__65044 = p__65043;
var map__65044__$1 = (((((!((map__65044 == null))))?(((((map__65044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65044):map__65044);
var message = cljs.core.get.call(null,map__65044__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__65044__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24101__auto___65123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___65123,ch){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___65123,ch){
return (function (state_65095){
var state_val_65096 = (state_65095[(1)]);
if((state_val_65096 === (7))){
var inst_65091 = (state_65095[(2)]);
var state_65095__$1 = state_65095;
var statearr_65097_65124 = state_65095__$1;
(statearr_65097_65124[(2)] = inst_65091);

(statearr_65097_65124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (1))){
var state_65095__$1 = state_65095;
var statearr_65098_65125 = state_65095__$1;
(statearr_65098_65125[(2)] = null);

(statearr_65098_65125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (4))){
var inst_65048 = (state_65095[(7)]);
var inst_65048__$1 = (state_65095[(2)]);
var state_65095__$1 = (function (){var statearr_65099 = state_65095;
(statearr_65099[(7)] = inst_65048__$1);

return statearr_65099;
})();
if(cljs.core.truth_(inst_65048__$1)){
var statearr_65100_65126 = state_65095__$1;
(statearr_65100_65126[(1)] = (5));

} else {
var statearr_65101_65127 = state_65095__$1;
(statearr_65101_65127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (15))){
var inst_65055 = (state_65095[(8)]);
var inst_65070 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65055);
var inst_65071 = cljs.core.first.call(null,inst_65070);
var inst_65072 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_65071);
var inst_65073 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65072)].join('');
var inst_65074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_65073);
var state_65095__$1 = state_65095;
var statearr_65102_65128 = state_65095__$1;
(statearr_65102_65128[(2)] = inst_65074);

(statearr_65102_65128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (13))){
var inst_65079 = (state_65095[(2)]);
var state_65095__$1 = state_65095;
var statearr_65103_65129 = state_65095__$1;
(statearr_65103_65129[(2)] = inst_65079);

(statearr_65103_65129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (6))){
var state_65095__$1 = state_65095;
var statearr_65104_65130 = state_65095__$1;
(statearr_65104_65130[(2)] = null);

(statearr_65104_65130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (17))){
var inst_65077 = (state_65095[(2)]);
var state_65095__$1 = state_65095;
var statearr_65105_65131 = state_65095__$1;
(statearr_65105_65131[(2)] = inst_65077);

(statearr_65105_65131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (3))){
var inst_65093 = (state_65095[(2)]);
var state_65095__$1 = state_65095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65095__$1,inst_65093);
} else {
if((state_val_65096 === (12))){
var inst_65054 = (state_65095[(9)]);
var inst_65068 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_65054,opts);
var state_65095__$1 = state_65095;
if(inst_65068){
var statearr_65106_65132 = state_65095__$1;
(statearr_65106_65132[(1)] = (15));

} else {
var statearr_65107_65133 = state_65095__$1;
(statearr_65107_65133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (2))){
var state_65095__$1 = state_65095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65095__$1,(4),ch);
} else {
if((state_val_65096 === (11))){
var inst_65055 = (state_65095[(8)]);
var inst_65060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65061 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_65055);
var inst_65062 = cljs.core.async.timeout.call(null,(1000));
var inst_65063 = [inst_65061,inst_65062];
var inst_65064 = (new cljs.core.PersistentVector(null,2,(5),inst_65060,inst_65063,null));
var state_65095__$1 = state_65095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65095__$1,(14),inst_65064);
} else {
if((state_val_65096 === (9))){
var inst_65055 = (state_65095[(8)]);
var inst_65081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_65082 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65055);
var inst_65083 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65082);
var inst_65084 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65083)].join('');
var inst_65085 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_65084);
var state_65095__$1 = (function (){var statearr_65108 = state_65095;
(statearr_65108[(10)] = inst_65081);

return statearr_65108;
})();
var statearr_65109_65134 = state_65095__$1;
(statearr_65109_65134[(2)] = inst_65085);

(statearr_65109_65134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (5))){
var inst_65048 = (state_65095[(7)]);
var inst_65050 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_65051 = (new cljs.core.PersistentArrayMap(null,2,inst_65050,null));
var inst_65052 = (new cljs.core.PersistentHashSet(null,inst_65051,null));
var inst_65053 = figwheel.client.focus_msgs.call(null,inst_65052,inst_65048);
var inst_65054 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_65053);
var inst_65055 = cljs.core.first.call(null,inst_65053);
var inst_65056 = figwheel.client.autoload_QMARK_.call(null);
var state_65095__$1 = (function (){var statearr_65110 = state_65095;
(statearr_65110[(9)] = inst_65054);

(statearr_65110[(8)] = inst_65055);

return statearr_65110;
})();
if(cljs.core.truth_(inst_65056)){
var statearr_65111_65135 = state_65095__$1;
(statearr_65111_65135[(1)] = (8));

} else {
var statearr_65112_65136 = state_65095__$1;
(statearr_65112_65136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (14))){
var inst_65066 = (state_65095[(2)]);
var state_65095__$1 = state_65095;
var statearr_65113_65137 = state_65095__$1;
(statearr_65113_65137[(2)] = inst_65066);

(statearr_65113_65137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (16))){
var state_65095__$1 = state_65095;
var statearr_65114_65138 = state_65095__$1;
(statearr_65114_65138[(2)] = null);

(statearr_65114_65138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (10))){
var inst_65087 = (state_65095[(2)]);
var state_65095__$1 = (function (){var statearr_65115 = state_65095;
(statearr_65115[(11)] = inst_65087);

return statearr_65115;
})();
var statearr_65116_65139 = state_65095__$1;
(statearr_65116_65139[(2)] = null);

(statearr_65116_65139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65096 === (8))){
var inst_65054 = (state_65095[(9)]);
var inst_65058 = figwheel.client.reload_file_state_QMARK_.call(null,inst_65054,opts);
var state_65095__$1 = state_65095;
if(cljs.core.truth_(inst_65058)){
var statearr_65117_65140 = state_65095__$1;
(statearr_65117_65140[(1)] = (11));

} else {
var statearr_65118_65141 = state_65095__$1;
(statearr_65118_65141[(1)] = (12));

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
});})(c__24101__auto___65123,ch))
;
return ((function (switch__24006__auto__,c__24101__auto___65123,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____0 = (function (){
var statearr_65119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65119[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__);

(statearr_65119[(1)] = (1));

return statearr_65119;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____1 = (function (state_65095){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_65095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e65120){if((e65120 instanceof Object)){
var ex__24010__auto__ = e65120;
var statearr_65121_65142 = state_65095;
(statearr_65121_65142[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65143 = state_65095;
state_65095 = G__65143;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__ = function(state_65095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____1.call(this,state_65095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24007__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___65123,ch))
})();
var state__24103__auto__ = (function (){var statearr_65122 = f__24102__auto__.call(null);
(statearr_65122[(6)] = c__24101__auto___65123);

return statearr_65122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___65123,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65144_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65144_SHARP_));
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
var base_path_65150 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65150){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65146 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65148 = true;
var _STAR_print_fn_STAR__temp_val__65149 = ((function (_STAR_print_newline_STAR__orig_val__65146,_STAR_print_fn_STAR__orig_val__65147,_STAR_print_newline_STAR__temp_val__65148,sb,base_path_65150){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__65146,_STAR_print_fn_STAR__orig_val__65147,_STAR_print_newline_STAR__temp_val__65148,sb,base_path_65150))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65148;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65149;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65147;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65146;
}}catch (e65145){if((e65145 instanceof Error)){
var e = e65145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65150], null));
} else {
var e = e65145;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_65150))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65151){
var map__65152 = p__65151;
var map__65152__$1 = (((((!((map__65152 == null))))?(((((map__65152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65152):map__65152);
var opts = map__65152__$1;
var build_id = cljs.core.get.call(null,map__65152__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65152,map__65152__$1,opts,build_id){
return (function (p__65154){
var vec__65155 = p__65154;
var seq__65156 = cljs.core.seq.call(null,vec__65155);
var first__65157 = cljs.core.first.call(null,seq__65156);
var seq__65156__$1 = cljs.core.next.call(null,seq__65156);
var map__65158 = first__65157;
var map__65158__$1 = (((((!((map__65158 == null))))?(((((map__65158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65158):map__65158);
var msg = map__65158__$1;
var msg_name = cljs.core.get.call(null,map__65158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65156__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65155,seq__65156,first__65157,seq__65156__$1,map__65158,map__65158__$1,msg,msg_name,_,map__65152,map__65152__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65155,seq__65156,first__65157,seq__65156__$1,map__65158,map__65158__$1,msg,msg_name,_,map__65152,map__65152__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65152,map__65152__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65160){
var vec__65161 = p__65160;
var seq__65162 = cljs.core.seq.call(null,vec__65161);
var first__65163 = cljs.core.first.call(null,seq__65162);
var seq__65162__$1 = cljs.core.next.call(null,seq__65162);
var map__65164 = first__65163;
var map__65164__$1 = (((((!((map__65164 == null))))?(((((map__65164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65164):map__65164);
var msg = map__65164__$1;
var msg_name = cljs.core.get.call(null,map__65164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65162__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65166){
var map__65167 = p__65166;
var map__65167__$1 = (((((!((map__65167 == null))))?(((((map__65167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65167):map__65167);
var on_compile_warning = cljs.core.get.call(null,map__65167__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65167__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65167,map__65167__$1,on_compile_warning,on_compile_fail){
return (function (p__65169){
var vec__65170 = p__65169;
var seq__65171 = cljs.core.seq.call(null,vec__65170);
var first__65172 = cljs.core.first.call(null,seq__65171);
var seq__65171__$1 = cljs.core.next.call(null,seq__65171);
var map__65173 = first__65172;
var map__65173__$1 = (((((!((map__65173 == null))))?(((((map__65173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65173):map__65173);
var msg = map__65173__$1;
var msg_name = cljs.core.get.call(null,map__65173__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65171__$1;
var pred__65175 = cljs.core._EQ_;
var expr__65176 = msg_name;
if(cljs.core.truth_(pred__65175.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65176))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65175.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65176))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65167,map__65167__$1,on_compile_warning,on_compile_fail))
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__,msg_hist,msg_names,msg){
return (function (state_65265){
var state_val_65266 = (state_65265[(1)]);
if((state_val_65266 === (7))){
var inst_65185 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
if(cljs.core.truth_(inst_65185)){
var statearr_65267_65314 = state_65265__$1;
(statearr_65267_65314[(1)] = (8));

} else {
var statearr_65268_65315 = state_65265__$1;
(statearr_65268_65315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (20))){
var inst_65259 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65269_65316 = state_65265__$1;
(statearr_65269_65316[(2)] = inst_65259);

(statearr_65269_65316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (27))){
var inst_65255 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65270_65317 = state_65265__$1;
(statearr_65270_65317[(2)] = inst_65255);

(statearr_65270_65317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (1))){
var inst_65178 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_65265__$1 = state_65265;
if(cljs.core.truth_(inst_65178)){
var statearr_65271_65318 = state_65265__$1;
(statearr_65271_65318[(1)] = (2));

} else {
var statearr_65272_65319 = state_65265__$1;
(statearr_65272_65319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (24))){
var inst_65257 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65273_65320 = state_65265__$1;
(statearr_65273_65320[(2)] = inst_65257);

(statearr_65273_65320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (4))){
var inst_65263 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65265__$1,inst_65263);
} else {
if((state_val_65266 === (15))){
var inst_65261 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65274_65321 = state_65265__$1;
(statearr_65274_65321[(2)] = inst_65261);

(statearr_65274_65321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (21))){
var inst_65214 = (state_65265[(2)]);
var inst_65215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65216 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65215);
var state_65265__$1 = (function (){var statearr_65275 = state_65265;
(statearr_65275[(7)] = inst_65214);

return statearr_65275;
})();
var statearr_65276_65322 = state_65265__$1;
(statearr_65276_65322[(2)] = inst_65216);

(statearr_65276_65322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (31))){
var inst_65244 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65244){
var statearr_65277_65323 = state_65265__$1;
(statearr_65277_65323[(1)] = (34));

} else {
var statearr_65278_65324 = state_65265__$1;
(statearr_65278_65324[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (32))){
var inst_65253 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65279_65325 = state_65265__$1;
(statearr_65279_65325[(2)] = inst_65253);

(statearr_65279_65325[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (33))){
var inst_65240 = (state_65265[(2)]);
var inst_65241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65242 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65241);
var state_65265__$1 = (function (){var statearr_65280 = state_65265;
(statearr_65280[(8)] = inst_65240);

return statearr_65280;
})();
var statearr_65281_65326 = state_65265__$1;
(statearr_65281_65326[(2)] = inst_65242);

(statearr_65281_65326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (13))){
var inst_65199 = figwheel.client.heads_up.clear.call(null);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(16),inst_65199);
} else {
if((state_val_65266 === (22))){
var inst_65220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65221 = figwheel.client.heads_up.append_warning_message.call(null,inst_65220);
var state_65265__$1 = state_65265;
var statearr_65282_65327 = state_65265__$1;
(statearr_65282_65327[(2)] = inst_65221);

(statearr_65282_65327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (36))){
var inst_65251 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65283_65328 = state_65265__$1;
(statearr_65283_65328[(2)] = inst_65251);

(statearr_65283_65328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (29))){
var inst_65231 = (state_65265[(2)]);
var inst_65232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65232);
var state_65265__$1 = (function (){var statearr_65284 = state_65265;
(statearr_65284[(9)] = inst_65231);

return statearr_65284;
})();
var statearr_65285_65329 = state_65265__$1;
(statearr_65285_65329[(2)] = inst_65233);

(statearr_65285_65329[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (6))){
var inst_65180 = (state_65265[(10)]);
var state_65265__$1 = state_65265;
var statearr_65286_65330 = state_65265__$1;
(statearr_65286_65330[(2)] = inst_65180);

(statearr_65286_65330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (28))){
var inst_65227 = (state_65265[(2)]);
var inst_65228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65229 = figwheel.client.heads_up.display_warning.call(null,inst_65228);
var state_65265__$1 = (function (){var statearr_65287 = state_65265;
(statearr_65287[(11)] = inst_65227);

return statearr_65287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(29),inst_65229);
} else {
if((state_val_65266 === (25))){
var inst_65225 = figwheel.client.heads_up.clear.call(null);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(28),inst_65225);
} else {
if((state_val_65266 === (34))){
var inst_65246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(37),inst_65246);
} else {
if((state_val_65266 === (17))){
var inst_65205 = (state_65265[(2)]);
var inst_65206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65207 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65206);
var state_65265__$1 = (function (){var statearr_65288 = state_65265;
(statearr_65288[(12)] = inst_65205);

return statearr_65288;
})();
var statearr_65289_65331 = state_65265__$1;
(statearr_65289_65331[(2)] = inst_65207);

(statearr_65289_65331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (3))){
var inst_65197 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65197){
var statearr_65290_65332 = state_65265__$1;
(statearr_65290_65332[(1)] = (13));

} else {
var statearr_65291_65333 = state_65265__$1;
(statearr_65291_65333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (12))){
var inst_65193 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65292_65334 = state_65265__$1;
(statearr_65292_65334[(2)] = inst_65193);

(statearr_65292_65334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (2))){
var inst_65180 = (state_65265[(10)]);
var inst_65180__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_65265__$1 = (function (){var statearr_65293 = state_65265;
(statearr_65293[(10)] = inst_65180__$1);

return statearr_65293;
})();
if(cljs.core.truth_(inst_65180__$1)){
var statearr_65294_65335 = state_65265__$1;
(statearr_65294_65335[(1)] = (5));

} else {
var statearr_65295_65336 = state_65265__$1;
(statearr_65295_65336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (23))){
var inst_65223 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65223){
var statearr_65296_65337 = state_65265__$1;
(statearr_65296_65337[(1)] = (25));

} else {
var statearr_65297_65338 = state_65265__$1;
(statearr_65297_65338[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (35))){
var state_65265__$1 = state_65265;
var statearr_65298_65339 = state_65265__$1;
(statearr_65298_65339[(2)] = null);

(statearr_65298_65339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (19))){
var inst_65218 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65218){
var statearr_65299_65340 = state_65265__$1;
(statearr_65299_65340[(1)] = (22));

} else {
var statearr_65300_65341 = state_65265__$1;
(statearr_65300_65341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (11))){
var inst_65189 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65301_65342 = state_65265__$1;
(statearr_65301_65342[(2)] = inst_65189);

(statearr_65301_65342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (9))){
var inst_65191 = figwheel.client.heads_up.clear.call(null);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(12),inst_65191);
} else {
if((state_val_65266 === (5))){
var inst_65182 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_65265__$1 = state_65265;
var statearr_65302_65343 = state_65265__$1;
(statearr_65302_65343[(2)] = inst_65182);

(statearr_65302_65343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (14))){
var inst_65209 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65209){
var statearr_65303_65344 = state_65265__$1;
(statearr_65303_65344[(1)] = (18));

} else {
var statearr_65304_65345 = state_65265__$1;
(statearr_65304_65345[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (26))){
var inst_65235 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_65265__$1 = state_65265;
if(inst_65235){
var statearr_65305_65346 = state_65265__$1;
(statearr_65305_65346[(1)] = (30));

} else {
var statearr_65306_65347 = state_65265__$1;
(statearr_65306_65347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (16))){
var inst_65201 = (state_65265[(2)]);
var inst_65202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65203 = figwheel.client.heads_up.display_exception.call(null,inst_65202);
var state_65265__$1 = (function (){var statearr_65307 = state_65265;
(statearr_65307[(13)] = inst_65201);

return statearr_65307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(17),inst_65203);
} else {
if((state_val_65266 === (30))){
var inst_65237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65238 = figwheel.client.heads_up.display_warning.call(null,inst_65237);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(33),inst_65238);
} else {
if((state_val_65266 === (10))){
var inst_65195 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65308_65348 = state_65265__$1;
(statearr_65308_65348[(2)] = inst_65195);

(statearr_65308_65348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (18))){
var inst_65211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65212 = figwheel.client.heads_up.display_exception.call(null,inst_65211);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(21),inst_65212);
} else {
if((state_val_65266 === (37))){
var inst_65248 = (state_65265[(2)]);
var state_65265__$1 = state_65265;
var statearr_65309_65349 = state_65265__$1;
(statearr_65309_65349[(2)] = inst_65248);

(statearr_65309_65349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65266 === (8))){
var inst_65187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65265__$1 = state_65265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65265__$1,(11),inst_65187);
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
});})(c__24101__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24006__auto__,c__24101__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____0 = (function (){
var statearr_65310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65310[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__);

(statearr_65310[(1)] = (1));

return statearr_65310;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____1 = (function (state_65265){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_65265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e65311){if((e65311 instanceof Object)){
var ex__24010__auto__ = e65311;
var statearr_65312_65350 = state_65265;
(statearr_65312_65350[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65351 = state_65265;
state_65265 = G__65351;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__ = function(state_65265){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____1.call(this,state_65265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__,msg_hist,msg_names,msg))
})();
var state__24103__auto__ = (function (){var statearr_65313 = f__24102__auto__.call(null);
(statearr_65313[(6)] = c__24101__auto__);

return statearr_65313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__,msg_hist,msg_names,msg))
);

return c__24101__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24101__auto___65380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___65380,ch){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___65380,ch){
return (function (state_65366){
var state_val_65367 = (state_65366[(1)]);
if((state_val_65367 === (1))){
var state_65366__$1 = state_65366;
var statearr_65368_65381 = state_65366__$1;
(statearr_65368_65381[(2)] = null);

(statearr_65368_65381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65367 === (2))){
var state_65366__$1 = state_65366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65366__$1,(4),ch);
} else {
if((state_val_65367 === (3))){
var inst_65364 = (state_65366[(2)]);
var state_65366__$1 = state_65366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65366__$1,inst_65364);
} else {
if((state_val_65367 === (4))){
var inst_65354 = (state_65366[(7)]);
var inst_65354__$1 = (state_65366[(2)]);
var state_65366__$1 = (function (){var statearr_65369 = state_65366;
(statearr_65369[(7)] = inst_65354__$1);

return statearr_65369;
})();
if(cljs.core.truth_(inst_65354__$1)){
var statearr_65370_65382 = state_65366__$1;
(statearr_65370_65382[(1)] = (5));

} else {
var statearr_65371_65383 = state_65366__$1;
(statearr_65371_65383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65367 === (5))){
var inst_65354 = (state_65366[(7)]);
var inst_65356 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_65354);
var state_65366__$1 = state_65366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65366__$1,(8),inst_65356);
} else {
if((state_val_65367 === (6))){
var state_65366__$1 = state_65366;
var statearr_65372_65384 = state_65366__$1;
(statearr_65372_65384[(2)] = null);

(statearr_65372_65384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65367 === (7))){
var inst_65362 = (state_65366[(2)]);
var state_65366__$1 = state_65366;
var statearr_65373_65385 = state_65366__$1;
(statearr_65373_65385[(2)] = inst_65362);

(statearr_65373_65385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65367 === (8))){
var inst_65358 = (state_65366[(2)]);
var state_65366__$1 = (function (){var statearr_65374 = state_65366;
(statearr_65374[(8)] = inst_65358);

return statearr_65374;
})();
var statearr_65375_65386 = state_65366__$1;
(statearr_65375_65386[(2)] = null);

(statearr_65375_65386[(1)] = (2));


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
});})(c__24101__auto___65380,ch))
;
return ((function (switch__24006__auto__,c__24101__auto___65380,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24007__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24007__auto____0 = (function (){
var statearr_65376 = [null,null,null,null,null,null,null,null,null];
(statearr_65376[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24007__auto__);

(statearr_65376[(1)] = (1));

return statearr_65376;
});
var figwheel$client$heads_up_plugin_$_state_machine__24007__auto____1 = (function (state_65366){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_65366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e65377){if((e65377 instanceof Object)){
var ex__24010__auto__ = e65377;
var statearr_65378_65387 = state_65366;
(statearr_65378_65387[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65388 = state_65366;
state_65366 = G__65388;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24007__auto__ = function(state_65366){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24007__auto____1.call(this,state_65366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24007__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24007__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___65380,ch))
})();
var state__24103__auto__ = (function (){var statearr_65379 = f__24102__auto__.call(null);
(statearr_65379[(6)] = c__24101__auto___65380);

return statearr_65379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___65380,ch))
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__){
return (function (state_65394){
var state_val_65395 = (state_65394[(1)]);
if((state_val_65395 === (1))){
var inst_65389 = cljs.core.async.timeout.call(null,(3000));
var state_65394__$1 = state_65394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65394__$1,(2),inst_65389);
} else {
if((state_val_65395 === (2))){
var inst_65391 = (state_65394[(2)]);
var inst_65392 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_65394__$1 = (function (){var statearr_65396 = state_65394;
(statearr_65396[(7)] = inst_65391);

return statearr_65396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65394__$1,inst_65392);
} else {
return null;
}
}
});})(c__24101__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____0 = (function (){
var statearr_65397 = [null,null,null,null,null,null,null,null];
(statearr_65397[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__);

(statearr_65397[(1)] = (1));

return statearr_65397;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____1 = (function (state_65394){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_65394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e65398){if((e65398 instanceof Object)){
var ex__24010__auto__ = e65398;
var statearr_65399_65401 = state_65394;
(statearr_65399_65401[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65402 = state_65394;
state_65394 = G__65402;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__ = function(state_65394){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____1.call(this,state_65394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24007__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__))
})();
var state__24103__auto__ = (function (){var statearr_65400 = f__24102__auto__.call(null);
(statearr_65400[(6)] = c__24101__auto__);

return statearr_65400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__))
);

return c__24101__auto__;
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__,figwheel_version,temp__5735__auto__){
return (function (state_65409){
var state_val_65410 = (state_65409[(1)]);
if((state_val_65410 === (1))){
var inst_65403 = cljs.core.async.timeout.call(null,(2000));
var state_65409__$1 = state_65409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65409__$1,(2),inst_65403);
} else {
if((state_val_65410 === (2))){
var inst_65405 = (state_65409[(2)]);
var inst_65406 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_65407 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_65406);
var state_65409__$1 = (function (){var statearr_65411 = state_65409;
(statearr_65411[(7)] = inst_65405);

return statearr_65411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65409__$1,inst_65407);
} else {
return null;
}
}
});})(c__24101__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____0 = (function (){
var statearr_65412 = [null,null,null,null,null,null,null,null];
(statearr_65412[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__);

(statearr_65412[(1)] = (1));

return statearr_65412;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____1 = (function (state_65409){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_65409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e65413){if((e65413 instanceof Object)){
var ex__24010__auto__ = e65413;
var statearr_65414_65416 = state_65409;
(statearr_65414_65416[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65417 = state_65409;
state_65409 = G__65417;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__ = function(state_65409){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____1.call(this,state_65409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24103__auto__ = (function (){var statearr_65415 = f__24102__auto__.call(null);
(statearr_65415[(6)] = c__24101__auto__);

return statearr_65415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__,figwheel_version,temp__5735__auto__))
);

return c__24101__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__65418){
var map__65419 = p__65418;
var map__65419__$1 = (((((!((map__65419 == null))))?(((((map__65419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65419):map__65419);
var file = cljs.core.get.call(null,map__65419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__65419__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__65419__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__65421 = "";
var G__65421__$1 = (cljs.core.truth_(file)?[G__65421,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__65421);
var G__65421__$2 = (cljs.core.truth_(line)?[G__65421__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__65421__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__65421__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__65421__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__65422){
var map__65423 = p__65422;
var map__65423__$1 = (((((!((map__65423 == null))))?(((((map__65423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65423):map__65423);
var ed = map__65423__$1;
var exception_data = cljs.core.get.call(null,map__65423__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__65423__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_65426 = (function (){var G__65425 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65425)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__65425;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_65426);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__65427){
var map__65428 = p__65427;
var map__65428__$1 = (((((!((map__65428 == null))))?(((((map__65428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65428):map__65428);
var w = map__65428__$1;
var message = cljs.core.get.call(null,map__65428__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__65430 = cljs.core.seq.call(null,plugins);
var chunk__65431 = null;
var count__65432 = (0);
var i__65433 = (0);
while(true){
if((i__65433 < count__65432)){
var vec__65440 = cljs.core._nth.call(null,chunk__65431,i__65433);
var k = cljs.core.nth.call(null,vec__65440,(0),null);
var plugin = cljs.core.nth.call(null,vec__65440,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65446 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65430,chunk__65431,count__65432,i__65433,pl_65446,vec__65440,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_65446.call(null,msg_hist);
});})(seq__65430,chunk__65431,count__65432,i__65433,pl_65446,vec__65440,k,plugin))
);
} else {
}


var G__65447 = seq__65430;
var G__65448 = chunk__65431;
var G__65449 = count__65432;
var G__65450 = (i__65433 + (1));
seq__65430 = G__65447;
chunk__65431 = G__65448;
count__65432 = G__65449;
i__65433 = G__65450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__65430);
if(temp__5735__auto__){
var seq__65430__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65430__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__65430__$1);
var G__65451 = cljs.core.chunk_rest.call(null,seq__65430__$1);
var G__65452 = c__4550__auto__;
var G__65453 = cljs.core.count.call(null,c__4550__auto__);
var G__65454 = (0);
seq__65430 = G__65451;
chunk__65431 = G__65452;
count__65432 = G__65453;
i__65433 = G__65454;
continue;
} else {
var vec__65443 = cljs.core.first.call(null,seq__65430__$1);
var k = cljs.core.nth.call(null,vec__65443,(0),null);
var plugin = cljs.core.nth.call(null,vec__65443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65455 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65430,chunk__65431,count__65432,i__65433,pl_65455,vec__65443,k,plugin,seq__65430__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_65455.call(null,msg_hist);
});})(seq__65430,chunk__65431,count__65432,i__65433,pl_65455,vec__65443,k,plugin,seq__65430__$1,temp__5735__auto__))
);
} else {
}


var G__65456 = cljs.core.next.call(null,seq__65430__$1);
var G__65457 = null;
var G__65458 = (0);
var G__65459 = (0);
seq__65430 = G__65456;
chunk__65431 = G__65457;
count__65432 = G__65458;
i__65433 = G__65459;
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
var G__65461 = arguments.length;
switch (G__65461) {
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

var seq__65462_65467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__65463_65468 = null;
var count__65464_65469 = (0);
var i__65465_65470 = (0);
while(true){
if((i__65465_65470 < count__65464_65469)){
var msg_65471 = cljs.core._nth.call(null,chunk__65463_65468,i__65465_65470);
figwheel.client.socket.handle_incoming_message.call(null,msg_65471);


var G__65472 = seq__65462_65467;
var G__65473 = chunk__65463_65468;
var G__65474 = count__65464_65469;
var G__65475 = (i__65465_65470 + (1));
seq__65462_65467 = G__65472;
chunk__65463_65468 = G__65473;
count__65464_65469 = G__65474;
i__65465_65470 = G__65475;
continue;
} else {
var temp__5735__auto___65476 = cljs.core.seq.call(null,seq__65462_65467);
if(temp__5735__auto___65476){
var seq__65462_65477__$1 = temp__5735__auto___65476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65462_65477__$1)){
var c__4550__auto___65478 = cljs.core.chunk_first.call(null,seq__65462_65477__$1);
var G__65479 = cljs.core.chunk_rest.call(null,seq__65462_65477__$1);
var G__65480 = c__4550__auto___65478;
var G__65481 = cljs.core.count.call(null,c__4550__auto___65478);
var G__65482 = (0);
seq__65462_65467 = G__65479;
chunk__65463_65468 = G__65480;
count__65464_65469 = G__65481;
i__65465_65470 = G__65482;
continue;
} else {
var msg_65483 = cljs.core.first.call(null,seq__65462_65477__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_65483);


var G__65484 = cljs.core.next.call(null,seq__65462_65477__$1);
var G__65485 = null;
var G__65486 = (0);
var G__65487 = (0);
seq__65462_65467 = G__65484;
chunk__65463_65468 = G__65485;
count__65464_65469 = G__65486;
i__65465_65470 = G__65487;
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
var len__4730__auto___65492 = arguments.length;
var i__4731__auto___65493 = (0);
while(true){
if((i__4731__auto___65493 < len__4730__auto___65492)){
args__4736__auto__.push((arguments[i__4731__auto___65493]));

var G__65494 = (i__4731__auto___65493 + (1));
i__4731__auto___65493 = G__65494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__65489){
var map__65490 = p__65489;
var map__65490__$1 = (((((!((map__65490 == null))))?(((((map__65490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65490):map__65490);
var opts = map__65490__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq65488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65488));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e65495){if((e65495 instanceof Error)){
var e = e65495;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e65495;

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
return (function (p__65496){
var map__65497 = p__65496;
var map__65497__$1 = (((((!((map__65497 == null))))?(((((map__65497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65497):map__65497);
var msg_name = cljs.core.get.call(null,map__65497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581380915861
