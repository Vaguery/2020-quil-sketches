// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34425){
var map__34426 = p__34425;
var map__34426__$1 = (((((!((map__34426 == null))))?(((((map__34426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34426):map__34426);
var m = map__34426__$1;
var n = cljs.core.get.call(null,map__34426__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34428_34460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34429_34461 = null;
var count__34430_34462 = (0);
var i__34431_34463 = (0);
while(true){
if((i__34431_34463 < count__34430_34462)){
var f_34464 = cljs.core._nth.call(null,chunk__34429_34461,i__34431_34463);
cljs.core.println.call(null,"  ",f_34464);


var G__34465 = seq__34428_34460;
var G__34466 = chunk__34429_34461;
var G__34467 = count__34430_34462;
var G__34468 = (i__34431_34463 + (1));
seq__34428_34460 = G__34465;
chunk__34429_34461 = G__34466;
count__34430_34462 = G__34467;
i__34431_34463 = G__34468;
continue;
} else {
var temp__5735__auto___34469 = cljs.core.seq.call(null,seq__34428_34460);
if(temp__5735__auto___34469){
var seq__34428_34470__$1 = temp__5735__auto___34469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34428_34470__$1)){
var c__4550__auto___34471 = cljs.core.chunk_first.call(null,seq__34428_34470__$1);
var G__34472 = cljs.core.chunk_rest.call(null,seq__34428_34470__$1);
var G__34473 = c__4550__auto___34471;
var G__34474 = cljs.core.count.call(null,c__4550__auto___34471);
var G__34475 = (0);
seq__34428_34460 = G__34472;
chunk__34429_34461 = G__34473;
count__34430_34462 = G__34474;
i__34431_34463 = G__34475;
continue;
} else {
var f_34476 = cljs.core.first.call(null,seq__34428_34470__$1);
cljs.core.println.call(null,"  ",f_34476);


var G__34477 = cljs.core.next.call(null,seq__34428_34470__$1);
var G__34478 = null;
var G__34479 = (0);
var G__34480 = (0);
seq__34428_34460 = G__34477;
chunk__34429_34461 = G__34478;
count__34430_34462 = G__34479;
i__34431_34463 = G__34480;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34481);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34481)))?cljs.core.second.call(null,arglists_34481):arglists_34481));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34432_34482 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34433_34483 = null;
var count__34434_34484 = (0);
var i__34435_34485 = (0);
while(true){
if((i__34435_34485 < count__34434_34484)){
var vec__34446_34486 = cljs.core._nth.call(null,chunk__34433_34483,i__34435_34485);
var name_34487 = cljs.core.nth.call(null,vec__34446_34486,(0),null);
var map__34449_34488 = cljs.core.nth.call(null,vec__34446_34486,(1),null);
var map__34449_34489__$1 = (((((!((map__34449_34488 == null))))?(((((map__34449_34488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34449_34488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34449_34488):map__34449_34488);
var doc_34490 = cljs.core.get.call(null,map__34449_34489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34491 = cljs.core.get.call(null,map__34449_34489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34487);

cljs.core.println.call(null," ",arglists_34491);

if(cljs.core.truth_(doc_34490)){
cljs.core.println.call(null," ",doc_34490);
} else {
}


var G__34492 = seq__34432_34482;
var G__34493 = chunk__34433_34483;
var G__34494 = count__34434_34484;
var G__34495 = (i__34435_34485 + (1));
seq__34432_34482 = G__34492;
chunk__34433_34483 = G__34493;
count__34434_34484 = G__34494;
i__34435_34485 = G__34495;
continue;
} else {
var temp__5735__auto___34496 = cljs.core.seq.call(null,seq__34432_34482);
if(temp__5735__auto___34496){
var seq__34432_34497__$1 = temp__5735__auto___34496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34432_34497__$1)){
var c__4550__auto___34498 = cljs.core.chunk_first.call(null,seq__34432_34497__$1);
var G__34499 = cljs.core.chunk_rest.call(null,seq__34432_34497__$1);
var G__34500 = c__4550__auto___34498;
var G__34501 = cljs.core.count.call(null,c__4550__auto___34498);
var G__34502 = (0);
seq__34432_34482 = G__34499;
chunk__34433_34483 = G__34500;
count__34434_34484 = G__34501;
i__34435_34485 = G__34502;
continue;
} else {
var vec__34451_34503 = cljs.core.first.call(null,seq__34432_34497__$1);
var name_34504 = cljs.core.nth.call(null,vec__34451_34503,(0),null);
var map__34454_34505 = cljs.core.nth.call(null,vec__34451_34503,(1),null);
var map__34454_34506__$1 = (((((!((map__34454_34505 == null))))?(((((map__34454_34505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34454_34505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34454_34505):map__34454_34505);
var doc_34507 = cljs.core.get.call(null,map__34454_34506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34508 = cljs.core.get.call(null,map__34454_34506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34504);

cljs.core.println.call(null," ",arglists_34508);

if(cljs.core.truth_(doc_34507)){
cljs.core.println.call(null," ",doc_34507);
} else {
}


var G__34509 = cljs.core.next.call(null,seq__34432_34497__$1);
var G__34510 = null;
var G__34511 = (0);
var G__34512 = (0);
seq__34432_34482 = G__34509;
chunk__34433_34483 = G__34510;
count__34434_34484 = G__34511;
i__34435_34485 = G__34512;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__34456 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34457 = null;
var count__34458 = (0);
var i__34459 = (0);
while(true){
if((i__34459 < count__34458)){
var role = cljs.core._nth.call(null,chunk__34457,i__34459);
var temp__5735__auto___34513__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34513__$1)){
var spec_34514 = temp__5735__auto___34513__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34514));
} else {
}


var G__34515 = seq__34456;
var G__34516 = chunk__34457;
var G__34517 = count__34458;
var G__34518 = (i__34459 + (1));
seq__34456 = G__34515;
chunk__34457 = G__34516;
count__34458 = G__34517;
i__34459 = G__34518;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34456);
if(temp__5735__auto____$1){
var seq__34456__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34456__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34456__$1);
var G__34519 = cljs.core.chunk_rest.call(null,seq__34456__$1);
var G__34520 = c__4550__auto__;
var G__34521 = cljs.core.count.call(null,c__4550__auto__);
var G__34522 = (0);
seq__34456 = G__34519;
chunk__34457 = G__34520;
count__34458 = G__34521;
i__34459 = G__34522;
continue;
} else {
var role = cljs.core.first.call(null,seq__34456__$1);
var temp__5735__auto___34523__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34523__$2)){
var spec_34524 = temp__5735__auto___34523__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34524));
} else {
}


var G__34525 = cljs.core.next.call(null,seq__34456__$1);
var G__34526 = null;
var G__34527 = (0);
var G__34528 = (0);
seq__34456 = G__34525;
chunk__34457 = G__34526;
count__34458 = G__34527;
i__34459 = G__34528;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34529 = cljs.core.conj.call(null,via,t);
var G__34530 = cljs.core.ex_cause.call(null,t);
via = G__34529;
t = G__34530;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34533 = datafied_throwable;
var map__34533__$1 = (((((!((map__34533 == null))))?(((((map__34533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34533):map__34533);
var via = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34534 = cljs.core.last.call(null,via);
var map__34534__$1 = (((((!((map__34534 == null))))?(((((map__34534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34534):map__34534);
var type = cljs.core.get.call(null,map__34534__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34534__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34534__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34535 = data;
var map__34535__$1 = (((((!((map__34535 == null))))?(((((map__34535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34535):map__34535);
var problems = cljs.core.get.call(null,map__34535__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34535__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34535__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34536 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34536__$1 = (((((!((map__34536 == null))))?(((((map__34536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34536):map__34536);
var top_data = map__34536__$1;
var source = cljs.core.get.call(null,map__34536__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34541 = phase;
var G__34541__$1 = (((G__34541 instanceof cljs.core.Keyword))?G__34541.fqn:null);
switch (G__34541__$1) {
case "read-source":
var map__34542 = data;
var map__34542__$1 = (((((!((map__34542 == null))))?(((((map__34542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34542):map__34542);
var line = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34544 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34544__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34544,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34544);
var G__34544__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34544__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34544__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34544__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34545 = top_data;
var G__34545__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34545,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34545);
var G__34545__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34545__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34545__$1);
var G__34545__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34545__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34545__$2);
var G__34545__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34545__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34545__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34545__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34545__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34546 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34546,(0),null);
var method = cljs.core.nth.call(null,vec__34546,(1),null);
var file = cljs.core.nth.call(null,vec__34546,(2),null);
var line = cljs.core.nth.call(null,vec__34546,(3),null);
var G__34549 = top_data;
var G__34549__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34549,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34549);
var G__34549__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34549__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34549__$1);
var G__34549__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__34549__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34549__$2);
var G__34549__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34549__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34549__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34549__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34549__$4;
}

break;
case "execution":
var vec__34550 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34550,(0),null);
var method = cljs.core.nth.call(null,vec__34550,(1),null);
var file = cljs.core.nth.call(null,vec__34550,(2),null);
var line = cljs.core.nth.call(null,vec__34550,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__34550,source__$1,method,file,line,G__34541,G__34541__$1,map__34533,map__34533__$1,via,trace,phase,map__34534,map__34534__$1,type,message,data,map__34535,map__34535__$1,problems,fn,caller,map__34536,map__34536__$1,top_data,source){
return (function (p1__34532_SHARP_){
var or__4131__auto__ = (p1__34532_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34532_SHARP_);
}
});})(vec__34550,source__$1,method,file,line,G__34541,G__34541__$1,map__34533,map__34533__$1,via,trace,phase,map__34534,map__34534__$1,type,message,data,map__34535,map__34535__$1,problems,fn,caller,map__34536,map__34536__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34553 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34553__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34553,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34553);
var G__34553__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34553__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34553__$1);
var G__34553__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34553__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34553__$2);
var G__34553__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34553__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34553__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34553__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34553__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34541__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34557){
var map__34558 = p__34557;
var map__34558__$1 = (((((!((map__34558 == null))))?(((((map__34558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34558):map__34558);
var triage_data = map__34558__$1;
var phase = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34558__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34560 = phase;
var G__34560__$1 = (((G__34560 instanceof cljs.core.Keyword))?G__34560.fqn:null);
switch (G__34560__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34561_34570 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34562_34571 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34563_34572 = true;
var _STAR_print_fn_STAR__temp_val__34564_34573 = ((function (_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34563_34572;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34564_34573;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,_STAR_print_fn_STAR__temp_val__34564_34573,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,_STAR_print_fn_STAR__temp_val__34564_34573,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34555_SHARP_){
return cljs.core.dissoc.call(null,p1__34555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,_STAR_print_fn_STAR__temp_val__34564_34573,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34561_34570,_STAR_print_fn_STAR__orig_val__34562_34571,_STAR_print_newline_STAR__temp_val__34563_34572,_STAR_print_fn_STAR__temp_val__34564_34573,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34562_34571;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34561_34570;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34565_34574 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34566_34575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34567_34576 = true;
var _STAR_print_fn_STAR__temp_val__34568_34577 = ((function (_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34567_34576;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34568_34577;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,_STAR_print_fn_STAR__temp_val__34568_34577,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,_STAR_print_fn_STAR__temp_val__34568_34577,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34556_SHARP_){
return cljs.core.dissoc.call(null,p1__34556_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,_STAR_print_fn_STAR__temp_val__34568_34577,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34565_34574,_STAR_print_fn_STAR__orig_val__34566_34575,_STAR_print_newline_STAR__temp_val__34567_34576,_STAR_print_fn_STAR__temp_val__34568_34577,sb__4661__auto__,G__34560,G__34560__$1,loc,class_name,simple_class,cause_type,format,map__34558,map__34558__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34566_34575;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34565_34574;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34560__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581343835069
