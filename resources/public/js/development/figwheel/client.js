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
}catch (e35245){if((e35245 instanceof Error)){
var e = e35245;
return "Error: Unable to stringify";
} else {
throw e35245;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35248 = arguments.length;
switch (G__35248) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35246_SHARP_){
if(typeof p1__35246_SHARP_ === 'string'){
return p1__35246_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35246_SHARP_);
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
var len__4730__auto___35251 = arguments.length;
var i__4731__auto___35252 = (0);
while(true){
if((i__4731__auto___35252 < len__4730__auto___35251)){
args__4736__auto__.push((arguments[i__4731__auto___35252]));

var G__35253 = (i__4731__auto___35252 + (1));
i__4731__auto___35252 = G__35253;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35250));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35255 = arguments.length;
var i__4731__auto___35256 = (0);
while(true){
if((i__4731__auto___35256 < len__4730__auto___35255)){
args__4736__auto__.push((arguments[i__4731__auto___35256]));

var G__35257 = (i__4731__auto___35256 + (1));
i__4731__auto___35256 = G__35257;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35254){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35254));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35258){
var map__35259 = p__35258;
var map__35259__$1 = (((((!((map__35259 == null))))?(((((map__35259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35259):map__35259);
var message = cljs.core.get.call(null,map__35259__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35259__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24643__auto___35338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___35338,ch){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___35338,ch){
return (function (state_35310){
var state_val_35311 = (state_35310[(1)]);
if((state_val_35311 === (7))){
var inst_35306 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35312_35339 = state_35310__$1;
(statearr_35312_35339[(2)] = inst_35306);

(statearr_35312_35339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (1))){
var state_35310__$1 = state_35310;
var statearr_35313_35340 = state_35310__$1;
(statearr_35313_35340[(2)] = null);

(statearr_35313_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (4))){
var inst_35263 = (state_35310[(7)]);
var inst_35263__$1 = (state_35310[(2)]);
var state_35310__$1 = (function (){var statearr_35314 = state_35310;
(statearr_35314[(7)] = inst_35263__$1);

return statearr_35314;
})();
if(cljs.core.truth_(inst_35263__$1)){
var statearr_35315_35341 = state_35310__$1;
(statearr_35315_35341[(1)] = (5));

} else {
var statearr_35316_35342 = state_35310__$1;
(statearr_35316_35342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (15))){
var inst_35270 = (state_35310[(8)]);
var inst_35285 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35270);
var inst_35286 = cljs.core.first.call(null,inst_35285);
var inst_35287 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35286);
var inst_35288 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35287)].join('');
var inst_35289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35288);
var state_35310__$1 = state_35310;
var statearr_35317_35343 = state_35310__$1;
(statearr_35317_35343[(2)] = inst_35289);

(statearr_35317_35343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (13))){
var inst_35294 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35318_35344 = state_35310__$1;
(statearr_35318_35344[(2)] = inst_35294);

(statearr_35318_35344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (6))){
var state_35310__$1 = state_35310;
var statearr_35319_35345 = state_35310__$1;
(statearr_35319_35345[(2)] = null);

(statearr_35319_35345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (17))){
var inst_35292 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35320_35346 = state_35310__$1;
(statearr_35320_35346[(2)] = inst_35292);

(statearr_35320_35346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (3))){
var inst_35308 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35310__$1,inst_35308);
} else {
if((state_val_35311 === (12))){
var inst_35269 = (state_35310[(9)]);
var inst_35283 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35269,opts);
var state_35310__$1 = state_35310;
if(inst_35283){
var statearr_35321_35347 = state_35310__$1;
(statearr_35321_35347[(1)] = (15));

} else {
var statearr_35322_35348 = state_35310__$1;
(statearr_35322_35348[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (2))){
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35310__$1,(4),ch);
} else {
if((state_val_35311 === (11))){
var inst_35270 = (state_35310[(8)]);
var inst_35275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35276 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35270);
var inst_35277 = cljs.core.async.timeout.call(null,(1000));
var inst_35278 = [inst_35276,inst_35277];
var inst_35279 = (new cljs.core.PersistentVector(null,2,(5),inst_35275,inst_35278,null));
var state_35310__$1 = state_35310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35310__$1,(14),inst_35279);
} else {
if((state_val_35311 === (9))){
var inst_35270 = (state_35310[(8)]);
var inst_35296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35297 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35270);
var inst_35298 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35297);
var inst_35299 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35298)].join('');
var inst_35300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35299);
var state_35310__$1 = (function (){var statearr_35323 = state_35310;
(statearr_35323[(10)] = inst_35296);

return statearr_35323;
})();
var statearr_35324_35349 = state_35310__$1;
(statearr_35324_35349[(2)] = inst_35300);

(statearr_35324_35349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (5))){
var inst_35263 = (state_35310[(7)]);
var inst_35265 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35266 = (new cljs.core.PersistentArrayMap(null,2,inst_35265,null));
var inst_35267 = (new cljs.core.PersistentHashSet(null,inst_35266,null));
var inst_35268 = figwheel.client.focus_msgs.call(null,inst_35267,inst_35263);
var inst_35269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35268);
var inst_35270 = cljs.core.first.call(null,inst_35268);
var inst_35271 = figwheel.client.autoload_QMARK_.call(null);
var state_35310__$1 = (function (){var statearr_35325 = state_35310;
(statearr_35325[(8)] = inst_35270);

(statearr_35325[(9)] = inst_35269);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35271)){
var statearr_35326_35350 = state_35310__$1;
(statearr_35326_35350[(1)] = (8));

} else {
var statearr_35327_35351 = state_35310__$1;
(statearr_35327_35351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (14))){
var inst_35281 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35328_35352 = state_35310__$1;
(statearr_35328_35352[(2)] = inst_35281);

(statearr_35328_35352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (16))){
var state_35310__$1 = state_35310;
var statearr_35329_35353 = state_35310__$1;
(statearr_35329_35353[(2)] = null);

(statearr_35329_35353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (10))){
var inst_35302 = (state_35310[(2)]);
var state_35310__$1 = (function (){var statearr_35330 = state_35310;
(statearr_35330[(11)] = inst_35302);

return statearr_35330;
})();
var statearr_35331_35354 = state_35310__$1;
(statearr_35331_35354[(2)] = null);

(statearr_35331_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (8))){
var inst_35269 = (state_35310[(9)]);
var inst_35273 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35269,opts);
var state_35310__$1 = state_35310;
if(cljs.core.truth_(inst_35273)){
var statearr_35332_35355 = state_35310__$1;
(statearr_35332_35355[(1)] = (11));

} else {
var statearr_35333_35356 = state_35310__$1;
(statearr_35333_35356[(1)] = (12));

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
});})(c__24643__auto___35338,ch))
;
return ((function (switch__24476__auto__,c__24643__auto___35338,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____0 = (function (){
var statearr_35334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35334[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__);

(statearr_35334[(1)] = (1));

return statearr_35334;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____1 = (function (state_35310){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_35310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e35335){if((e35335 instanceof Object)){
var ex__24480__auto__ = e35335;
var statearr_35336_35357 = state_35310;
(statearr_35336_35357[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35358 = state_35310;
state_35310 = G__35358;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__ = function(state_35310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____1.call(this,state_35310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24477__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___35338,ch))
})();
var state__24645__auto__ = (function (){var statearr_35337 = f__24644__auto__.call(null);
(statearr_35337[(6)] = c__24643__auto___35338);

return statearr_35337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___35338,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35359_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35359_SHARP_));
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
var base_path_35365 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35365){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35361 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35362 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35363 = true;
var _STAR_print_fn_STAR__temp_val__35364 = ((function (_STAR_print_newline_STAR__orig_val__35361,_STAR_print_fn_STAR__orig_val__35362,_STAR_print_newline_STAR__temp_val__35363,sb,base_path_35365){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__35361,_STAR_print_fn_STAR__orig_val__35362,_STAR_print_newline_STAR__temp_val__35363,sb,base_path_35365))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35363;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35364;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35362;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35361;
}}catch (e35360){if((e35360 instanceof Error)){
var e = e35360;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35365], null));
} else {
var e = e35360;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35365))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35366){
var map__35367 = p__35366;
var map__35367__$1 = (((((!((map__35367 == null))))?(((((map__35367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35367):map__35367);
var opts = map__35367__$1;
var build_id = cljs.core.get.call(null,map__35367__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35367,map__35367__$1,opts,build_id){
return (function (p__35369){
var vec__35370 = p__35369;
var seq__35371 = cljs.core.seq.call(null,vec__35370);
var first__35372 = cljs.core.first.call(null,seq__35371);
var seq__35371__$1 = cljs.core.next.call(null,seq__35371);
var map__35373 = first__35372;
var map__35373__$1 = (((((!((map__35373 == null))))?(((((map__35373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35373):map__35373);
var msg = map__35373__$1;
var msg_name = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35371__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35370,seq__35371,first__35372,seq__35371__$1,map__35373,map__35373__$1,msg,msg_name,_,map__35367,map__35367__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35370,seq__35371,first__35372,seq__35371__$1,map__35373,map__35373__$1,msg,msg_name,_,map__35367,map__35367__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35367,map__35367__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35375){
var vec__35376 = p__35375;
var seq__35377 = cljs.core.seq.call(null,vec__35376);
var first__35378 = cljs.core.first.call(null,seq__35377);
var seq__35377__$1 = cljs.core.next.call(null,seq__35377);
var map__35379 = first__35378;
var map__35379__$1 = (((((!((map__35379 == null))))?(((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35379):map__35379);
var msg = map__35379__$1;
var msg_name = cljs.core.get.call(null,map__35379__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35377__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35381){
var map__35382 = p__35381;
var map__35382__$1 = (((((!((map__35382 == null))))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35382):map__35382);
var on_compile_warning = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35382,map__35382__$1,on_compile_warning,on_compile_fail){
return (function (p__35384){
var vec__35385 = p__35384;
var seq__35386 = cljs.core.seq.call(null,vec__35385);
var first__35387 = cljs.core.first.call(null,seq__35386);
var seq__35386__$1 = cljs.core.next.call(null,seq__35386);
var map__35388 = first__35387;
var map__35388__$1 = (((((!((map__35388 == null))))?(((((map__35388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35388):map__35388);
var msg = map__35388__$1;
var msg_name = cljs.core.get.call(null,map__35388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35386__$1;
var pred__35390 = cljs.core._EQ_;
var expr__35391 = msg_name;
if(cljs.core.truth_(pred__35390.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35391))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35390.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35391))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35382,map__35382__$1,on_compile_warning,on_compile_fail))
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__,msg_hist,msg_names,msg){
return (function (state_35480){
var state_val_35481 = (state_35480[(1)]);
if((state_val_35481 === (7))){
var inst_35400 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
if(cljs.core.truth_(inst_35400)){
var statearr_35482_35529 = state_35480__$1;
(statearr_35482_35529[(1)] = (8));

} else {
var statearr_35483_35530 = state_35480__$1;
(statearr_35483_35530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (20))){
var inst_35474 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35484_35531 = state_35480__$1;
(statearr_35484_35531[(2)] = inst_35474);

(statearr_35484_35531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (27))){
var inst_35470 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35485_35532 = state_35480__$1;
(statearr_35485_35532[(2)] = inst_35470);

(statearr_35485_35532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (1))){
var inst_35393 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35480__$1 = state_35480;
if(cljs.core.truth_(inst_35393)){
var statearr_35486_35533 = state_35480__$1;
(statearr_35486_35533[(1)] = (2));

} else {
var statearr_35487_35534 = state_35480__$1;
(statearr_35487_35534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (24))){
var inst_35472 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35488_35535 = state_35480__$1;
(statearr_35488_35535[(2)] = inst_35472);

(statearr_35488_35535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (4))){
var inst_35478 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35480__$1,inst_35478);
} else {
if((state_val_35481 === (15))){
var inst_35476 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35489_35536 = state_35480__$1;
(statearr_35489_35536[(2)] = inst_35476);

(statearr_35489_35536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (21))){
var inst_35429 = (state_35480[(2)]);
var inst_35430 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35431 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35430);
var state_35480__$1 = (function (){var statearr_35490 = state_35480;
(statearr_35490[(7)] = inst_35429);

return statearr_35490;
})();
var statearr_35491_35537 = state_35480__$1;
(statearr_35491_35537[(2)] = inst_35431);

(statearr_35491_35537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (31))){
var inst_35459 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35459){
var statearr_35492_35538 = state_35480__$1;
(statearr_35492_35538[(1)] = (34));

} else {
var statearr_35493_35539 = state_35480__$1;
(statearr_35493_35539[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (32))){
var inst_35468 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35494_35540 = state_35480__$1;
(statearr_35494_35540[(2)] = inst_35468);

(statearr_35494_35540[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (33))){
var inst_35455 = (state_35480[(2)]);
var inst_35456 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35457 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35456);
var state_35480__$1 = (function (){var statearr_35495 = state_35480;
(statearr_35495[(8)] = inst_35455);

return statearr_35495;
})();
var statearr_35496_35541 = state_35480__$1;
(statearr_35496_35541[(2)] = inst_35457);

(statearr_35496_35541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (13))){
var inst_35414 = figwheel.client.heads_up.clear.call(null);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(16),inst_35414);
} else {
if((state_val_35481 === (22))){
var inst_35435 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35436 = figwheel.client.heads_up.append_warning_message.call(null,inst_35435);
var state_35480__$1 = state_35480;
var statearr_35497_35542 = state_35480__$1;
(statearr_35497_35542[(2)] = inst_35436);

(statearr_35497_35542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (36))){
var inst_35466 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35498_35543 = state_35480__$1;
(statearr_35498_35543[(2)] = inst_35466);

(statearr_35498_35543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (29))){
var inst_35446 = (state_35480[(2)]);
var inst_35447 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35448 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35447);
var state_35480__$1 = (function (){var statearr_35499 = state_35480;
(statearr_35499[(9)] = inst_35446);

return statearr_35499;
})();
var statearr_35500_35544 = state_35480__$1;
(statearr_35500_35544[(2)] = inst_35448);

(statearr_35500_35544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (6))){
var inst_35395 = (state_35480[(10)]);
var state_35480__$1 = state_35480;
var statearr_35501_35545 = state_35480__$1;
(statearr_35501_35545[(2)] = inst_35395);

(statearr_35501_35545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (28))){
var inst_35442 = (state_35480[(2)]);
var inst_35443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35444 = figwheel.client.heads_up.display_warning.call(null,inst_35443);
var state_35480__$1 = (function (){var statearr_35502 = state_35480;
(statearr_35502[(11)] = inst_35442);

return statearr_35502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(29),inst_35444);
} else {
if((state_val_35481 === (25))){
var inst_35440 = figwheel.client.heads_up.clear.call(null);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(28),inst_35440);
} else {
if((state_val_35481 === (34))){
var inst_35461 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(37),inst_35461);
} else {
if((state_val_35481 === (17))){
var inst_35420 = (state_35480[(2)]);
var inst_35421 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35422 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35421);
var state_35480__$1 = (function (){var statearr_35503 = state_35480;
(statearr_35503[(12)] = inst_35420);

return statearr_35503;
})();
var statearr_35504_35546 = state_35480__$1;
(statearr_35504_35546[(2)] = inst_35422);

(statearr_35504_35546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (3))){
var inst_35412 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35412){
var statearr_35505_35547 = state_35480__$1;
(statearr_35505_35547[(1)] = (13));

} else {
var statearr_35506_35548 = state_35480__$1;
(statearr_35506_35548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (12))){
var inst_35408 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35507_35549 = state_35480__$1;
(statearr_35507_35549[(2)] = inst_35408);

(statearr_35507_35549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (2))){
var inst_35395 = (state_35480[(10)]);
var inst_35395__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35480__$1 = (function (){var statearr_35508 = state_35480;
(statearr_35508[(10)] = inst_35395__$1);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35395__$1)){
var statearr_35509_35550 = state_35480__$1;
(statearr_35509_35550[(1)] = (5));

} else {
var statearr_35510_35551 = state_35480__$1;
(statearr_35510_35551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (23))){
var inst_35438 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35438){
var statearr_35511_35552 = state_35480__$1;
(statearr_35511_35552[(1)] = (25));

} else {
var statearr_35512_35553 = state_35480__$1;
(statearr_35512_35553[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (35))){
var state_35480__$1 = state_35480;
var statearr_35513_35554 = state_35480__$1;
(statearr_35513_35554[(2)] = null);

(statearr_35513_35554[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (19))){
var inst_35433 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35433){
var statearr_35514_35555 = state_35480__$1;
(statearr_35514_35555[(1)] = (22));

} else {
var statearr_35515_35556 = state_35480__$1;
(statearr_35515_35556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (11))){
var inst_35404 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35516_35557 = state_35480__$1;
(statearr_35516_35557[(2)] = inst_35404);

(statearr_35516_35557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (9))){
var inst_35406 = figwheel.client.heads_up.clear.call(null);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(12),inst_35406);
} else {
if((state_val_35481 === (5))){
var inst_35397 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35480__$1 = state_35480;
var statearr_35517_35558 = state_35480__$1;
(statearr_35517_35558[(2)] = inst_35397);

(statearr_35517_35558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (14))){
var inst_35424 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35424){
var statearr_35518_35559 = state_35480__$1;
(statearr_35518_35559[(1)] = (18));

} else {
var statearr_35519_35560 = state_35480__$1;
(statearr_35519_35560[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (26))){
var inst_35450 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35480__$1 = state_35480;
if(inst_35450){
var statearr_35520_35561 = state_35480__$1;
(statearr_35520_35561[(1)] = (30));

} else {
var statearr_35521_35562 = state_35480__$1;
(statearr_35521_35562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (16))){
var inst_35416 = (state_35480[(2)]);
var inst_35417 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35418 = figwheel.client.heads_up.display_exception.call(null,inst_35417);
var state_35480__$1 = (function (){var statearr_35522 = state_35480;
(statearr_35522[(13)] = inst_35416);

return statearr_35522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(17),inst_35418);
} else {
if((state_val_35481 === (30))){
var inst_35452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35453 = figwheel.client.heads_up.display_warning.call(null,inst_35452);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(33),inst_35453);
} else {
if((state_val_35481 === (10))){
var inst_35410 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35523_35563 = state_35480__$1;
(statearr_35523_35563[(2)] = inst_35410);

(statearr_35523_35563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (18))){
var inst_35426 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35427 = figwheel.client.heads_up.display_exception.call(null,inst_35426);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(21),inst_35427);
} else {
if((state_val_35481 === (37))){
var inst_35463 = (state_35480[(2)]);
var state_35480__$1 = state_35480;
var statearr_35524_35564 = state_35480__$1;
(statearr_35524_35564[(2)] = inst_35463);

(statearr_35524_35564[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35481 === (8))){
var inst_35402 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35480__$1 = state_35480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,(11),inst_35402);
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
});})(c__24643__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24476__auto__,c__24643__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____0 = (function (){
var statearr_35525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35525[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__);

(statearr_35525[(1)] = (1));

return statearr_35525;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____1 = (function (state_35480){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_35480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e35526){if((e35526 instanceof Object)){
var ex__24480__auto__ = e35526;
var statearr_35527_35565 = state_35480;
(statearr_35527_35565[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35566 = state_35480;
state_35480 = G__35566;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__ = function(state_35480){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____1.call(this,state_35480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__,msg_hist,msg_names,msg))
})();
var state__24645__auto__ = (function (){var statearr_35528 = f__24644__auto__.call(null);
(statearr_35528[(6)] = c__24643__auto__);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__,msg_hist,msg_names,msg))
);

return c__24643__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24643__auto___35595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___35595,ch){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___35595,ch){
return (function (state_35581){
var state_val_35582 = (state_35581[(1)]);
if((state_val_35582 === (1))){
var state_35581__$1 = state_35581;
var statearr_35583_35596 = state_35581__$1;
(statearr_35583_35596[(2)] = null);

(statearr_35583_35596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (2))){
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35581__$1,(4),ch);
} else {
if((state_val_35582 === (3))){
var inst_35579 = (state_35581[(2)]);
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35581__$1,inst_35579);
} else {
if((state_val_35582 === (4))){
var inst_35569 = (state_35581[(7)]);
var inst_35569__$1 = (state_35581[(2)]);
var state_35581__$1 = (function (){var statearr_35584 = state_35581;
(statearr_35584[(7)] = inst_35569__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35569__$1)){
var statearr_35585_35597 = state_35581__$1;
(statearr_35585_35597[(1)] = (5));

} else {
var statearr_35586_35598 = state_35581__$1;
(statearr_35586_35598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (5))){
var inst_35569 = (state_35581[(7)]);
var inst_35571 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35569);
var state_35581__$1 = state_35581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35581__$1,(8),inst_35571);
} else {
if((state_val_35582 === (6))){
var state_35581__$1 = state_35581;
var statearr_35587_35599 = state_35581__$1;
(statearr_35587_35599[(2)] = null);

(statearr_35587_35599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (7))){
var inst_35577 = (state_35581[(2)]);
var state_35581__$1 = state_35581;
var statearr_35588_35600 = state_35581__$1;
(statearr_35588_35600[(2)] = inst_35577);

(statearr_35588_35600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35582 === (8))){
var inst_35573 = (state_35581[(2)]);
var state_35581__$1 = (function (){var statearr_35589 = state_35581;
(statearr_35589[(8)] = inst_35573);

return statearr_35589;
})();
var statearr_35590_35601 = state_35581__$1;
(statearr_35590_35601[(2)] = null);

(statearr_35590_35601[(1)] = (2));


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
});})(c__24643__auto___35595,ch))
;
return ((function (switch__24476__auto__,c__24643__auto___35595,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24477__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24477__auto____0 = (function (){
var statearr_35591 = [null,null,null,null,null,null,null,null,null];
(statearr_35591[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24477__auto__);

(statearr_35591[(1)] = (1));

return statearr_35591;
});
var figwheel$client$heads_up_plugin_$_state_machine__24477__auto____1 = (function (state_35581){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_35581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e35592){if((e35592 instanceof Object)){
var ex__24480__auto__ = e35592;
var statearr_35593_35602 = state_35581;
(statearr_35593_35602[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35603 = state_35581;
state_35581 = G__35603;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24477__auto__ = function(state_35581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24477__auto____1.call(this,state_35581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24477__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24477__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___35595,ch))
})();
var state__24645__auto__ = (function (){var statearr_35594 = f__24644__auto__.call(null);
(statearr_35594[(6)] = c__24643__auto___35595);

return statearr_35594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___35595,ch))
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__){
return (function (state_35609){
var state_val_35610 = (state_35609[(1)]);
if((state_val_35610 === (1))){
var inst_35604 = cljs.core.async.timeout.call(null,(3000));
var state_35609__$1 = state_35609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35609__$1,(2),inst_35604);
} else {
if((state_val_35610 === (2))){
var inst_35606 = (state_35609[(2)]);
var inst_35607 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35609__$1 = (function (){var statearr_35611 = state_35609;
(statearr_35611[(7)] = inst_35606);

return statearr_35611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35609__$1,inst_35607);
} else {
return null;
}
}
});})(c__24643__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____1 = (function (state_35609){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_35609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__24480__auto__ = e35613;
var statearr_35614_35616 = state_35609;
(statearr_35614_35616[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_35609;
state_35609 = G__35617;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__ = function(state_35609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____1.call(this,state_35609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24477__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__))
})();
var state__24645__auto__ = (function (){var statearr_35615 = f__24644__auto__.call(null);
(statearr_35615[(6)] = c__24643__auto__);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__))
);

return c__24643__auto__;
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__,figwheel_version,temp__5735__auto__){
return (function (state_35624){
var state_val_35625 = (state_35624[(1)]);
if((state_val_35625 === (1))){
var inst_35618 = cljs.core.async.timeout.call(null,(2000));
var state_35624__$1 = state_35624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35624__$1,(2),inst_35618);
} else {
if((state_val_35625 === (2))){
var inst_35620 = (state_35624[(2)]);
var inst_35621 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35622 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35621);
var state_35624__$1 = (function (){var statearr_35626 = state_35624;
(statearr_35626[(7)] = inst_35620);

return statearr_35626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35624__$1,inst_35622);
} else {
return null;
}
}
});})(c__24643__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____0 = (function (){
var statearr_35627 = [null,null,null,null,null,null,null,null];
(statearr_35627[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__);

(statearr_35627[(1)] = (1));

return statearr_35627;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____1 = (function (state_35624){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_35624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e35628){if((e35628 instanceof Object)){
var ex__24480__auto__ = e35628;
var statearr_35629_35631 = state_35624;
(statearr_35629_35631[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35632 = state_35624;
state_35624 = G__35632;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__ = function(state_35624){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____1.call(this,state_35624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24645__auto__ = (function (){var statearr_35630 = f__24644__auto__.call(null);
(statearr_35630[(6)] = c__24643__auto__);

return statearr_35630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__,figwheel_version,temp__5735__auto__))
);

return c__24643__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35633){
var map__35634 = p__35633;
var map__35634__$1 = (((((!((map__35634 == null))))?(((((map__35634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35634):map__35634);
var file = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35636 = "";
var G__35636__$1 = (cljs.core.truth_(file)?[G__35636,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35636);
var G__35636__$2 = (cljs.core.truth_(line)?[G__35636__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35636__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__35636__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35636__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35637){
var map__35638 = p__35637;
var map__35638__$1 = (((((!((map__35638 == null))))?(((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var ed = map__35638__$1;
var exception_data = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35641 = (function (){var G__35640 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35640)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35640;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35641);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35642){
var map__35643 = p__35642;
var map__35643__$1 = (((((!((map__35643 == null))))?(((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var w = map__35643__$1;
var message = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35645 = cljs.core.seq.call(null,plugins);
var chunk__35646 = null;
var count__35647 = (0);
var i__35648 = (0);
while(true){
if((i__35648 < count__35647)){
var vec__35655 = cljs.core._nth.call(null,chunk__35646,i__35648);
var k = cljs.core.nth.call(null,vec__35655,(0),null);
var plugin = cljs.core.nth.call(null,vec__35655,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35661 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35645,chunk__35646,count__35647,i__35648,pl_35661,vec__35655,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35661.call(null,msg_hist);
});})(seq__35645,chunk__35646,count__35647,i__35648,pl_35661,vec__35655,k,plugin))
);
} else {
}


var G__35662 = seq__35645;
var G__35663 = chunk__35646;
var G__35664 = count__35647;
var G__35665 = (i__35648 + (1));
seq__35645 = G__35662;
chunk__35646 = G__35663;
count__35647 = G__35664;
i__35648 = G__35665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35645);
if(temp__5735__auto__){
var seq__35645__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35645__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35645__$1);
var G__35666 = cljs.core.chunk_rest.call(null,seq__35645__$1);
var G__35667 = c__4550__auto__;
var G__35668 = cljs.core.count.call(null,c__4550__auto__);
var G__35669 = (0);
seq__35645 = G__35666;
chunk__35646 = G__35667;
count__35647 = G__35668;
i__35648 = G__35669;
continue;
} else {
var vec__35658 = cljs.core.first.call(null,seq__35645__$1);
var k = cljs.core.nth.call(null,vec__35658,(0),null);
var plugin = cljs.core.nth.call(null,vec__35658,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35670 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35645,chunk__35646,count__35647,i__35648,pl_35670,vec__35658,k,plugin,seq__35645__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35670.call(null,msg_hist);
});})(seq__35645,chunk__35646,count__35647,i__35648,pl_35670,vec__35658,k,plugin,seq__35645__$1,temp__5735__auto__))
);
} else {
}


var G__35671 = cljs.core.next.call(null,seq__35645__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35645 = G__35671;
chunk__35646 = G__35672;
count__35647 = G__35673;
i__35648 = G__35674;
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
var G__35676 = arguments.length;
switch (G__35676) {
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

var seq__35677_35682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35678_35683 = null;
var count__35679_35684 = (0);
var i__35680_35685 = (0);
while(true){
if((i__35680_35685 < count__35679_35684)){
var msg_35686 = cljs.core._nth.call(null,chunk__35678_35683,i__35680_35685);
figwheel.client.socket.handle_incoming_message.call(null,msg_35686);


var G__35687 = seq__35677_35682;
var G__35688 = chunk__35678_35683;
var G__35689 = count__35679_35684;
var G__35690 = (i__35680_35685 + (1));
seq__35677_35682 = G__35687;
chunk__35678_35683 = G__35688;
count__35679_35684 = G__35689;
i__35680_35685 = G__35690;
continue;
} else {
var temp__5735__auto___35691 = cljs.core.seq.call(null,seq__35677_35682);
if(temp__5735__auto___35691){
var seq__35677_35692__$1 = temp__5735__auto___35691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35677_35692__$1)){
var c__4550__auto___35693 = cljs.core.chunk_first.call(null,seq__35677_35692__$1);
var G__35694 = cljs.core.chunk_rest.call(null,seq__35677_35692__$1);
var G__35695 = c__4550__auto___35693;
var G__35696 = cljs.core.count.call(null,c__4550__auto___35693);
var G__35697 = (0);
seq__35677_35682 = G__35694;
chunk__35678_35683 = G__35695;
count__35679_35684 = G__35696;
i__35680_35685 = G__35697;
continue;
} else {
var msg_35698 = cljs.core.first.call(null,seq__35677_35692__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35698);


var G__35699 = cljs.core.next.call(null,seq__35677_35692__$1);
var G__35700 = null;
var G__35701 = (0);
var G__35702 = (0);
seq__35677_35682 = G__35699;
chunk__35678_35683 = G__35700;
count__35679_35684 = G__35701;
i__35680_35685 = G__35702;
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
var len__4730__auto___35707 = arguments.length;
var i__4731__auto___35708 = (0);
while(true){
if((i__4731__auto___35708 < len__4730__auto___35707)){
args__4736__auto__.push((arguments[i__4731__auto___35708]));

var G__35709 = (i__4731__auto___35708 + (1));
i__4731__auto___35708 = G__35709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35704){
var map__35705 = p__35704;
var map__35705__$1 = (((((!((map__35705 == null))))?(((((map__35705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35705):map__35705);
var opts = map__35705__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35703){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35703));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35710){if((e35710 instanceof Error)){
var e = e35710;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35710;

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
return (function (p__35711){
var map__35712 = p__35711;
var map__35712__$1 = (((((!((map__35712 == null))))?(((((map__35712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35712):map__35712);
var msg_name = cljs.core.get.call(null,map__35712__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581180053303
