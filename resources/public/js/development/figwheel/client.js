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
}catch (e34772){if((e34772 instanceof Error)){
var e = e34772;
return "Error: Unable to stringify";
} else {
throw e34772;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34775 = arguments.length;
switch (G__34775) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34773_SHARP_){
if(typeof p1__34773_SHARP_ === 'string'){
return p1__34773_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34773_SHARP_);
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
var len__4730__auto___34778 = arguments.length;
var i__4731__auto___34779 = (0);
while(true){
if((i__4731__auto___34779 < len__4730__auto___34778)){
args__4736__auto__.push((arguments[i__4731__auto___34779]));

var G__34780 = (i__4731__auto___34779 + (1));
i__4731__auto___34779 = G__34780;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34777));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34782 = arguments.length;
var i__4731__auto___34783 = (0);
while(true){
if((i__4731__auto___34783 < len__4730__auto___34782)){
args__4736__auto__.push((arguments[i__4731__auto___34783]));

var G__34784 = (i__4731__auto___34783 + (1));
i__4731__auto___34783 = G__34784;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34781){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34781));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34785){
var map__34786 = p__34785;
var map__34786__$1 = (((((!((map__34786 == null))))?(((((map__34786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34786):map__34786);
var message = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29538__auto___34865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___34865,ch){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___34865,ch){
return (function (state_34837){
var state_val_34838 = (state_34837[(1)]);
if((state_val_34838 === (7))){
var inst_34833 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34839_34866 = state_34837__$1;
(statearr_34839_34866[(2)] = inst_34833);

(statearr_34839_34866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (1))){
var state_34837__$1 = state_34837;
var statearr_34840_34867 = state_34837__$1;
(statearr_34840_34867[(2)] = null);

(statearr_34840_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (4))){
var inst_34790 = (state_34837[(7)]);
var inst_34790__$1 = (state_34837[(2)]);
var state_34837__$1 = (function (){var statearr_34841 = state_34837;
(statearr_34841[(7)] = inst_34790__$1);

return statearr_34841;
})();
if(cljs.core.truth_(inst_34790__$1)){
var statearr_34842_34868 = state_34837__$1;
(statearr_34842_34868[(1)] = (5));

} else {
var statearr_34843_34869 = state_34837__$1;
(statearr_34843_34869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (15))){
var inst_34797 = (state_34837[(8)]);
var inst_34812 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34797);
var inst_34813 = cljs.core.first.call(null,inst_34812);
var inst_34814 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34813);
var inst_34815 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34814)].join('');
var inst_34816 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34815);
var state_34837__$1 = state_34837;
var statearr_34844_34870 = state_34837__$1;
(statearr_34844_34870[(2)] = inst_34816);

(statearr_34844_34870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (13))){
var inst_34821 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34845_34871 = state_34837__$1;
(statearr_34845_34871[(2)] = inst_34821);

(statearr_34845_34871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (6))){
var state_34837__$1 = state_34837;
var statearr_34846_34872 = state_34837__$1;
(statearr_34846_34872[(2)] = null);

(statearr_34846_34872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (17))){
var inst_34819 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34847_34873 = state_34837__$1;
(statearr_34847_34873[(2)] = inst_34819);

(statearr_34847_34873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (3))){
var inst_34835 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34837__$1,inst_34835);
} else {
if((state_val_34838 === (12))){
var inst_34796 = (state_34837[(9)]);
var inst_34810 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34796,opts);
var state_34837__$1 = state_34837;
if(inst_34810){
var statearr_34848_34874 = state_34837__$1;
(statearr_34848_34874[(1)] = (15));

} else {
var statearr_34849_34875 = state_34837__$1;
(statearr_34849_34875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (2))){
var state_34837__$1 = state_34837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34837__$1,(4),ch);
} else {
if((state_val_34838 === (11))){
var inst_34797 = (state_34837[(8)]);
var inst_34802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34803 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34797);
var inst_34804 = cljs.core.async.timeout.call(null,(1000));
var inst_34805 = [inst_34803,inst_34804];
var inst_34806 = (new cljs.core.PersistentVector(null,2,(5),inst_34802,inst_34805,null));
var state_34837__$1 = state_34837;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34837__$1,(14),inst_34806);
} else {
if((state_val_34838 === (9))){
var inst_34797 = (state_34837[(8)]);
var inst_34823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34824 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34797);
var inst_34825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34824);
var inst_34826 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34825)].join('');
var inst_34827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34826);
var state_34837__$1 = (function (){var statearr_34850 = state_34837;
(statearr_34850[(10)] = inst_34823);

return statearr_34850;
})();
var statearr_34851_34876 = state_34837__$1;
(statearr_34851_34876[(2)] = inst_34827);

(statearr_34851_34876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (5))){
var inst_34790 = (state_34837[(7)]);
var inst_34792 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34793 = (new cljs.core.PersistentArrayMap(null,2,inst_34792,null));
var inst_34794 = (new cljs.core.PersistentHashSet(null,inst_34793,null));
var inst_34795 = figwheel.client.focus_msgs.call(null,inst_34794,inst_34790);
var inst_34796 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34795);
var inst_34797 = cljs.core.first.call(null,inst_34795);
var inst_34798 = figwheel.client.autoload_QMARK_.call(null);
var state_34837__$1 = (function (){var statearr_34852 = state_34837;
(statearr_34852[(9)] = inst_34796);

(statearr_34852[(8)] = inst_34797);

return statearr_34852;
})();
if(cljs.core.truth_(inst_34798)){
var statearr_34853_34877 = state_34837__$1;
(statearr_34853_34877[(1)] = (8));

} else {
var statearr_34854_34878 = state_34837__$1;
(statearr_34854_34878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (14))){
var inst_34808 = (state_34837[(2)]);
var state_34837__$1 = state_34837;
var statearr_34855_34879 = state_34837__$1;
(statearr_34855_34879[(2)] = inst_34808);

(statearr_34855_34879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (16))){
var state_34837__$1 = state_34837;
var statearr_34856_34880 = state_34837__$1;
(statearr_34856_34880[(2)] = null);

(statearr_34856_34880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (10))){
var inst_34829 = (state_34837[(2)]);
var state_34837__$1 = (function (){var statearr_34857 = state_34837;
(statearr_34857[(11)] = inst_34829);

return statearr_34857;
})();
var statearr_34858_34881 = state_34837__$1;
(statearr_34858_34881[(2)] = null);

(statearr_34858_34881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34838 === (8))){
var inst_34796 = (state_34837[(9)]);
var inst_34800 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34796,opts);
var state_34837__$1 = state_34837;
if(cljs.core.truth_(inst_34800)){
var statearr_34859_34882 = state_34837__$1;
(statearr_34859_34882[(1)] = (11));

} else {
var statearr_34860_34883 = state_34837__$1;
(statearr_34860_34883[(1)] = (12));

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
});})(c__29538__auto___34865,ch))
;
return ((function (switch__29443__auto__,c__29538__auto___34865,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____0 = (function (){
var statearr_34861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34861[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__);

(statearr_34861[(1)] = (1));

return statearr_34861;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____1 = (function (state_34837){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_34837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e34862){if((e34862 instanceof Object)){
var ex__29447__auto__ = e34862;
var statearr_34863_34884 = state_34837;
(statearr_34863_34884[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34885 = state_34837;
state_34837 = G__34885;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__ = function(state_34837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____1.call(this,state_34837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29444__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___34865,ch))
})();
var state__29540__auto__ = (function (){var statearr_34864 = f__29539__auto__.call(null);
(statearr_34864[(6)] = c__29538__auto___34865);

return statearr_34864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___34865,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34886_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34886_SHARP_));
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
var base_path_34892 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34892){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34888 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34889 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34890 = true;
var _STAR_print_fn_STAR__temp_val__34891 = ((function (_STAR_print_newline_STAR__orig_val__34888,_STAR_print_fn_STAR__orig_val__34889,_STAR_print_newline_STAR__temp_val__34890,sb,base_path_34892){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__34888,_STAR_print_fn_STAR__orig_val__34889,_STAR_print_newline_STAR__temp_val__34890,sb,base_path_34892))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34890;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34891;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34889;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34888;
}}catch (e34887){if((e34887 instanceof Error)){
var e = e34887;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34892], null));
} else {
var e = e34887;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34892))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34893){
var map__34894 = p__34893;
var map__34894__$1 = (((((!((map__34894 == null))))?(((((map__34894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34894):map__34894);
var opts = map__34894__$1;
var build_id = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34894,map__34894__$1,opts,build_id){
return (function (p__34896){
var vec__34897 = p__34896;
var seq__34898 = cljs.core.seq.call(null,vec__34897);
var first__34899 = cljs.core.first.call(null,seq__34898);
var seq__34898__$1 = cljs.core.next.call(null,seq__34898);
var map__34900 = first__34899;
var map__34900__$1 = (((((!((map__34900 == null))))?(((((map__34900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34900):map__34900);
var msg = map__34900__$1;
var msg_name = cljs.core.get.call(null,map__34900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34898__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34897,seq__34898,first__34899,seq__34898__$1,map__34900,map__34900__$1,msg,msg_name,_,map__34894,map__34894__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34897,seq__34898,first__34899,seq__34898__$1,map__34900,map__34900__$1,msg,msg_name,_,map__34894,map__34894__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34894,map__34894__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34902){
var vec__34903 = p__34902;
var seq__34904 = cljs.core.seq.call(null,vec__34903);
var first__34905 = cljs.core.first.call(null,seq__34904);
var seq__34904__$1 = cljs.core.next.call(null,seq__34904);
var map__34906 = first__34905;
var map__34906__$1 = (((((!((map__34906 == null))))?(((((map__34906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34906):map__34906);
var msg = map__34906__$1;
var msg_name = cljs.core.get.call(null,map__34906__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34904__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34908){
var map__34909 = p__34908;
var map__34909__$1 = (((((!((map__34909 == null))))?(((((map__34909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34909):map__34909);
var on_compile_warning = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34909__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34909,map__34909__$1,on_compile_warning,on_compile_fail){
return (function (p__34911){
var vec__34912 = p__34911;
var seq__34913 = cljs.core.seq.call(null,vec__34912);
var first__34914 = cljs.core.first.call(null,seq__34913);
var seq__34913__$1 = cljs.core.next.call(null,seq__34913);
var map__34915 = first__34914;
var map__34915__$1 = (((((!((map__34915 == null))))?(((((map__34915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34915):map__34915);
var msg = map__34915__$1;
var msg_name = cljs.core.get.call(null,map__34915__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34913__$1;
var pred__34917 = cljs.core._EQ_;
var expr__34918 = msg_name;
if(cljs.core.truth_(pred__34917.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34918))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34917.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34918))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34909,map__34909__$1,on_compile_warning,on_compile_fail))
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__,msg_hist,msg_names,msg){
return (function (state_35007){
var state_val_35008 = (state_35007[(1)]);
if((state_val_35008 === (7))){
var inst_34927 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34927)){
var statearr_35009_35056 = state_35007__$1;
(statearr_35009_35056[(1)] = (8));

} else {
var statearr_35010_35057 = state_35007__$1;
(statearr_35010_35057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (20))){
var inst_35001 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35011_35058 = state_35007__$1;
(statearr_35011_35058[(2)] = inst_35001);

(statearr_35011_35058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (27))){
var inst_34997 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35012_35059 = state_35007__$1;
(statearr_35012_35059[(2)] = inst_34997);

(statearr_35012_35059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (1))){
var inst_34920 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34920)){
var statearr_35013_35060 = state_35007__$1;
(statearr_35013_35060[(1)] = (2));

} else {
var statearr_35014_35061 = state_35007__$1;
(statearr_35014_35061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (24))){
var inst_34999 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35015_35062 = state_35007__$1;
(statearr_35015_35062[(2)] = inst_34999);

(statearr_35015_35062[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (4))){
var inst_35005 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35007__$1,inst_35005);
} else {
if((state_val_35008 === (15))){
var inst_35003 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35016_35063 = state_35007__$1;
(statearr_35016_35063[(2)] = inst_35003);

(statearr_35016_35063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (21))){
var inst_34956 = (state_35007[(2)]);
var inst_34957 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34958 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34957);
var state_35007__$1 = (function (){var statearr_35017 = state_35007;
(statearr_35017[(7)] = inst_34956);

return statearr_35017;
})();
var statearr_35018_35064 = state_35007__$1;
(statearr_35018_35064[(2)] = inst_34958);

(statearr_35018_35064[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (31))){
var inst_34986 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34986){
var statearr_35019_35065 = state_35007__$1;
(statearr_35019_35065[(1)] = (34));

} else {
var statearr_35020_35066 = state_35007__$1;
(statearr_35020_35066[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (32))){
var inst_34995 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35021_35067 = state_35007__$1;
(statearr_35021_35067[(2)] = inst_34995);

(statearr_35021_35067[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (33))){
var inst_34982 = (state_35007[(2)]);
var inst_34983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34984 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34983);
var state_35007__$1 = (function (){var statearr_35022 = state_35007;
(statearr_35022[(8)] = inst_34982);

return statearr_35022;
})();
var statearr_35023_35068 = state_35007__$1;
(statearr_35023_35068[(2)] = inst_34984);

(statearr_35023_35068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (13))){
var inst_34941 = figwheel.client.heads_up.clear.call(null);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(16),inst_34941);
} else {
if((state_val_35008 === (22))){
var inst_34962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34963 = figwheel.client.heads_up.append_warning_message.call(null,inst_34962);
var state_35007__$1 = state_35007;
var statearr_35024_35069 = state_35007__$1;
(statearr_35024_35069[(2)] = inst_34963);

(statearr_35024_35069[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (36))){
var inst_34993 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35025_35070 = state_35007__$1;
(statearr_35025_35070[(2)] = inst_34993);

(statearr_35025_35070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (29))){
var inst_34973 = (state_35007[(2)]);
var inst_34974 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34975 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34974);
var state_35007__$1 = (function (){var statearr_35026 = state_35007;
(statearr_35026[(9)] = inst_34973);

return statearr_35026;
})();
var statearr_35027_35071 = state_35007__$1;
(statearr_35027_35071[(2)] = inst_34975);

(statearr_35027_35071[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (6))){
var inst_34922 = (state_35007[(10)]);
var state_35007__$1 = state_35007;
var statearr_35028_35072 = state_35007__$1;
(statearr_35028_35072[(2)] = inst_34922);

(statearr_35028_35072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (28))){
var inst_34969 = (state_35007[(2)]);
var inst_34970 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34971 = figwheel.client.heads_up.display_warning.call(null,inst_34970);
var state_35007__$1 = (function (){var statearr_35029 = state_35007;
(statearr_35029[(11)] = inst_34969);

return statearr_35029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(29),inst_34971);
} else {
if((state_val_35008 === (25))){
var inst_34967 = figwheel.client.heads_up.clear.call(null);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(28),inst_34967);
} else {
if((state_val_35008 === (34))){
var inst_34988 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(37),inst_34988);
} else {
if((state_val_35008 === (17))){
var inst_34947 = (state_35007[(2)]);
var inst_34948 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34949 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34948);
var state_35007__$1 = (function (){var statearr_35030 = state_35007;
(statearr_35030[(12)] = inst_34947);

return statearr_35030;
})();
var statearr_35031_35073 = state_35007__$1;
(statearr_35031_35073[(2)] = inst_34949);

(statearr_35031_35073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (3))){
var inst_34939 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34939){
var statearr_35032_35074 = state_35007__$1;
(statearr_35032_35074[(1)] = (13));

} else {
var statearr_35033_35075 = state_35007__$1;
(statearr_35033_35075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (12))){
var inst_34935 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35034_35076 = state_35007__$1;
(statearr_35034_35076[(2)] = inst_34935);

(statearr_35034_35076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (2))){
var inst_34922 = (state_35007[(10)]);
var inst_34922__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35007__$1 = (function (){var statearr_35035 = state_35007;
(statearr_35035[(10)] = inst_34922__$1);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34922__$1)){
var statearr_35036_35077 = state_35007__$1;
(statearr_35036_35077[(1)] = (5));

} else {
var statearr_35037_35078 = state_35007__$1;
(statearr_35037_35078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (23))){
var inst_34965 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34965){
var statearr_35038_35079 = state_35007__$1;
(statearr_35038_35079[(1)] = (25));

} else {
var statearr_35039_35080 = state_35007__$1;
(statearr_35039_35080[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (35))){
var state_35007__$1 = state_35007;
var statearr_35040_35081 = state_35007__$1;
(statearr_35040_35081[(2)] = null);

(statearr_35040_35081[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (19))){
var inst_34960 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34960){
var statearr_35041_35082 = state_35007__$1;
(statearr_35041_35082[(1)] = (22));

} else {
var statearr_35042_35083 = state_35007__$1;
(statearr_35042_35083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (11))){
var inst_34931 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35043_35084 = state_35007__$1;
(statearr_35043_35084[(2)] = inst_34931);

(statearr_35043_35084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (9))){
var inst_34933 = figwheel.client.heads_up.clear.call(null);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(12),inst_34933);
} else {
if((state_val_35008 === (5))){
var inst_34924 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35007__$1 = state_35007;
var statearr_35044_35085 = state_35007__$1;
(statearr_35044_35085[(2)] = inst_34924);

(statearr_35044_35085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (14))){
var inst_34951 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34951){
var statearr_35045_35086 = state_35007__$1;
(statearr_35045_35086[(1)] = (18));

} else {
var statearr_35046_35087 = state_35007__$1;
(statearr_35046_35087[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (26))){
var inst_34977 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35007__$1 = state_35007;
if(inst_34977){
var statearr_35047_35088 = state_35007__$1;
(statearr_35047_35088[(1)] = (30));

} else {
var statearr_35048_35089 = state_35007__$1;
(statearr_35048_35089[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (16))){
var inst_34943 = (state_35007[(2)]);
var inst_34944 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34945 = figwheel.client.heads_up.display_exception.call(null,inst_34944);
var state_35007__$1 = (function (){var statearr_35049 = state_35007;
(statearr_35049[(13)] = inst_34943);

return statearr_35049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(17),inst_34945);
} else {
if((state_val_35008 === (30))){
var inst_34979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34980 = figwheel.client.heads_up.display_warning.call(null,inst_34979);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(33),inst_34980);
} else {
if((state_val_35008 === (10))){
var inst_34937 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35050_35090 = state_35007__$1;
(statearr_35050_35090[(2)] = inst_34937);

(statearr_35050_35090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (18))){
var inst_34953 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34954 = figwheel.client.heads_up.display_exception.call(null,inst_34953);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(21),inst_34954);
} else {
if((state_val_35008 === (37))){
var inst_34990 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35051_35091 = state_35007__$1;
(statearr_35051_35091[(2)] = inst_34990);

(statearr_35051_35091[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (8))){
var inst_34929 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(11),inst_34929);
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
});})(c__29538__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29443__auto__,c__29538__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____1 = (function (state_35007){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_35007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__29447__auto__ = e35053;
var statearr_35054_35092 = state_35007;
(statearr_35054_35092[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35093 = state_35007;
state_35007 = G__35093;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__,msg_hist,msg_names,msg))
})();
var state__29540__auto__ = (function (){var statearr_35055 = f__29539__auto__.call(null);
(statearr_35055[(6)] = c__29538__auto__);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__,msg_hist,msg_names,msg))
);

return c__29538__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29538__auto___35122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___35122,ch){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___35122,ch){
return (function (state_35108){
var state_val_35109 = (state_35108[(1)]);
if((state_val_35109 === (1))){
var state_35108__$1 = state_35108;
var statearr_35110_35123 = state_35108__$1;
(statearr_35110_35123[(2)] = null);

(statearr_35110_35123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (2))){
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35108__$1,(4),ch);
} else {
if((state_val_35109 === (3))){
var inst_35106 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35108__$1,inst_35106);
} else {
if((state_val_35109 === (4))){
var inst_35096 = (state_35108[(7)]);
var inst_35096__$1 = (state_35108[(2)]);
var state_35108__$1 = (function (){var statearr_35111 = state_35108;
(statearr_35111[(7)] = inst_35096__$1);

return statearr_35111;
})();
if(cljs.core.truth_(inst_35096__$1)){
var statearr_35112_35124 = state_35108__$1;
(statearr_35112_35124[(1)] = (5));

} else {
var statearr_35113_35125 = state_35108__$1;
(statearr_35113_35125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (5))){
var inst_35096 = (state_35108[(7)]);
var inst_35098 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35096);
var state_35108__$1 = state_35108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35108__$1,(8),inst_35098);
} else {
if((state_val_35109 === (6))){
var state_35108__$1 = state_35108;
var statearr_35114_35126 = state_35108__$1;
(statearr_35114_35126[(2)] = null);

(statearr_35114_35126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (7))){
var inst_35104 = (state_35108[(2)]);
var state_35108__$1 = state_35108;
var statearr_35115_35127 = state_35108__$1;
(statearr_35115_35127[(2)] = inst_35104);

(statearr_35115_35127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35109 === (8))){
var inst_35100 = (state_35108[(2)]);
var state_35108__$1 = (function (){var statearr_35116 = state_35108;
(statearr_35116[(8)] = inst_35100);

return statearr_35116;
})();
var statearr_35117_35128 = state_35108__$1;
(statearr_35117_35128[(2)] = null);

(statearr_35117_35128[(1)] = (2));


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
});})(c__29538__auto___35122,ch))
;
return ((function (switch__29443__auto__,c__29538__auto___35122,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29444__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29444__auto____0 = (function (){
var statearr_35118 = [null,null,null,null,null,null,null,null,null];
(statearr_35118[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29444__auto__);

(statearr_35118[(1)] = (1));

return statearr_35118;
});
var figwheel$client$heads_up_plugin_$_state_machine__29444__auto____1 = (function (state_35108){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_35108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e35119){if((e35119 instanceof Object)){
var ex__29447__auto__ = e35119;
var statearr_35120_35129 = state_35108;
(statearr_35120_35129[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35130 = state_35108;
state_35108 = G__35130;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29444__auto__ = function(state_35108){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29444__auto____1.call(this,state_35108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29444__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29444__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___35122,ch))
})();
var state__29540__auto__ = (function (){var statearr_35121 = f__29539__auto__.call(null);
(statearr_35121[(6)] = c__29538__auto___35122);

return statearr_35121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___35122,ch))
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__){
return (function (state_35136){
var state_val_35137 = (state_35136[(1)]);
if((state_val_35137 === (1))){
var inst_35131 = cljs.core.async.timeout.call(null,(3000));
var state_35136__$1 = state_35136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35136__$1,(2),inst_35131);
} else {
if((state_val_35137 === (2))){
var inst_35133 = (state_35136[(2)]);
var inst_35134 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35136__$1 = (function (){var statearr_35138 = state_35136;
(statearr_35138[(7)] = inst_35133);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35136__$1,inst_35134);
} else {
return null;
}
}
});})(c__29538__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____1 = (function (state_35136){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_35136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e35140){if((e35140 instanceof Object)){
var ex__29447__auto__ = e35140;
var statearr_35141_35143 = state_35136;
(statearr_35141_35143[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35144 = state_35136;
state_35136 = G__35144;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__ = function(state_35136){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____1.call(this,state_35136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29444__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__))
})();
var state__29540__auto__ = (function (){var statearr_35142 = f__29539__auto__.call(null);
(statearr_35142[(6)] = c__29538__auto__);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__))
);

return c__29538__auto__;
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__,figwheel_version,temp__5735__auto__){
return (function (state_35151){
var state_val_35152 = (state_35151[(1)]);
if((state_val_35152 === (1))){
var inst_35145 = cljs.core.async.timeout.call(null,(2000));
var state_35151__$1 = state_35151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35151__$1,(2),inst_35145);
} else {
if((state_val_35152 === (2))){
var inst_35147 = (state_35151[(2)]);
var inst_35148 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35149 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35148);
var state_35151__$1 = (function (){var statearr_35153 = state_35151;
(statearr_35153[(7)] = inst_35147);

return statearr_35153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35151__$1,inst_35149);
} else {
return null;
}
}
});})(c__29538__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____0 = (function (){
var statearr_35154 = [null,null,null,null,null,null,null,null];
(statearr_35154[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__);

(statearr_35154[(1)] = (1));

return statearr_35154;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____1 = (function (state_35151){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_35151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e35155){if((e35155 instanceof Object)){
var ex__29447__auto__ = e35155;
var statearr_35156_35158 = state_35151;
(statearr_35156_35158[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_35151;
state_35151 = G__35159;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__ = function(state_35151){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____1.call(this,state_35151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__,figwheel_version,temp__5735__auto__))
})();
var state__29540__auto__ = (function (){var statearr_35157 = f__29539__auto__.call(null);
(statearr_35157[(6)] = c__29538__auto__);

return statearr_35157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__,figwheel_version,temp__5735__auto__))
);

return c__29538__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35160){
var map__35161 = p__35160;
var map__35161__$1 = (((((!((map__35161 == null))))?(((((map__35161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35161):map__35161);
var file = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35163 = "";
var G__35163__$1 = (cljs.core.truth_(file)?[G__35163,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35163);
var G__35163__$2 = (cljs.core.truth_(line)?[G__35163__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35163__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__35163__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35163__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35164){
var map__35165 = p__35164;
var map__35165__$1 = (((((!((map__35165 == null))))?(((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var ed = map__35165__$1;
var exception_data = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35168 = (function (){var G__35167 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35167)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35167;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35168);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35169){
var map__35170 = p__35169;
var map__35170__$1 = (((((!((map__35170 == null))))?(((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170):map__35170);
var w = map__35170__$1;
var message = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35172 = cljs.core.seq.call(null,plugins);
var chunk__35173 = null;
var count__35174 = (0);
var i__35175 = (0);
while(true){
if((i__35175 < count__35174)){
var vec__35182 = cljs.core._nth.call(null,chunk__35173,i__35175);
var k = cljs.core.nth.call(null,vec__35182,(0),null);
var plugin = cljs.core.nth.call(null,vec__35182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35188 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35172,chunk__35173,count__35174,i__35175,pl_35188,vec__35182,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35188.call(null,msg_hist);
});})(seq__35172,chunk__35173,count__35174,i__35175,pl_35188,vec__35182,k,plugin))
);
} else {
}


var G__35189 = seq__35172;
var G__35190 = chunk__35173;
var G__35191 = count__35174;
var G__35192 = (i__35175 + (1));
seq__35172 = G__35189;
chunk__35173 = G__35190;
count__35174 = G__35191;
i__35175 = G__35192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35172);
if(temp__5735__auto__){
var seq__35172__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35172__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35172__$1);
var G__35193 = cljs.core.chunk_rest.call(null,seq__35172__$1);
var G__35194 = c__4550__auto__;
var G__35195 = cljs.core.count.call(null,c__4550__auto__);
var G__35196 = (0);
seq__35172 = G__35193;
chunk__35173 = G__35194;
count__35174 = G__35195;
i__35175 = G__35196;
continue;
} else {
var vec__35185 = cljs.core.first.call(null,seq__35172__$1);
var k = cljs.core.nth.call(null,vec__35185,(0),null);
var plugin = cljs.core.nth.call(null,vec__35185,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35197 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35172,chunk__35173,count__35174,i__35175,pl_35197,vec__35185,k,plugin,seq__35172__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35197.call(null,msg_hist);
});})(seq__35172,chunk__35173,count__35174,i__35175,pl_35197,vec__35185,k,plugin,seq__35172__$1,temp__5735__auto__))
);
} else {
}


var G__35198 = cljs.core.next.call(null,seq__35172__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__35172 = G__35198;
chunk__35173 = G__35199;
count__35174 = G__35200;
i__35175 = G__35201;
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
var G__35203 = arguments.length;
switch (G__35203) {
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

var seq__35204_35209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35205_35210 = null;
var count__35206_35211 = (0);
var i__35207_35212 = (0);
while(true){
if((i__35207_35212 < count__35206_35211)){
var msg_35213 = cljs.core._nth.call(null,chunk__35205_35210,i__35207_35212);
figwheel.client.socket.handle_incoming_message.call(null,msg_35213);


var G__35214 = seq__35204_35209;
var G__35215 = chunk__35205_35210;
var G__35216 = count__35206_35211;
var G__35217 = (i__35207_35212 + (1));
seq__35204_35209 = G__35214;
chunk__35205_35210 = G__35215;
count__35206_35211 = G__35216;
i__35207_35212 = G__35217;
continue;
} else {
var temp__5735__auto___35218 = cljs.core.seq.call(null,seq__35204_35209);
if(temp__5735__auto___35218){
var seq__35204_35219__$1 = temp__5735__auto___35218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35204_35219__$1)){
var c__4550__auto___35220 = cljs.core.chunk_first.call(null,seq__35204_35219__$1);
var G__35221 = cljs.core.chunk_rest.call(null,seq__35204_35219__$1);
var G__35222 = c__4550__auto___35220;
var G__35223 = cljs.core.count.call(null,c__4550__auto___35220);
var G__35224 = (0);
seq__35204_35209 = G__35221;
chunk__35205_35210 = G__35222;
count__35206_35211 = G__35223;
i__35207_35212 = G__35224;
continue;
} else {
var msg_35225 = cljs.core.first.call(null,seq__35204_35219__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35225);


var G__35226 = cljs.core.next.call(null,seq__35204_35219__$1);
var G__35227 = null;
var G__35228 = (0);
var G__35229 = (0);
seq__35204_35209 = G__35226;
chunk__35205_35210 = G__35227;
count__35206_35211 = G__35228;
i__35207_35212 = G__35229;
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
var len__4730__auto___35234 = arguments.length;
var i__4731__auto___35235 = (0);
while(true){
if((i__4731__auto___35235 < len__4730__auto___35234)){
args__4736__auto__.push((arguments[i__4731__auto___35235]));

var G__35236 = (i__4731__auto___35235 + (1));
i__4731__auto___35235 = G__35236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35231){
var map__35232 = p__35231;
var map__35232__$1 = (((((!((map__35232 == null))))?(((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35232):map__35232);
var opts = map__35232__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35230));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35237){if((e35237 instanceof Error)){
var e = e35237;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35237;

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
return (function (p__35238){
var map__35239 = p__35238;
var map__35239__$1 = (((((!((map__35239 == null))))?(((((map__35239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35239):map__35239);
var msg_name = cljs.core.get.call(null,map__35239__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581343835721
