// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48580){
var map__48581 = p__48580;
var map__48581__$1 = (((((!((map__48581 == null))))?(((((map__48581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48581):map__48581);
var m = map__48581__$1;
var n = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48583_48615 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48584_48616 = null;
var count__48585_48617 = (0);
var i__48586_48618 = (0);
while(true){
if((i__48586_48618 < count__48585_48617)){
var f_48619 = cljs.core._nth.call(null,chunk__48584_48616,i__48586_48618);
cljs.core.println.call(null,"  ",f_48619);


var G__48620 = seq__48583_48615;
var G__48621 = chunk__48584_48616;
var G__48622 = count__48585_48617;
var G__48623 = (i__48586_48618 + (1));
seq__48583_48615 = G__48620;
chunk__48584_48616 = G__48621;
count__48585_48617 = G__48622;
i__48586_48618 = G__48623;
continue;
} else {
var temp__5735__auto___48624 = cljs.core.seq.call(null,seq__48583_48615);
if(temp__5735__auto___48624){
var seq__48583_48625__$1 = temp__5735__auto___48624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48583_48625__$1)){
var c__4550__auto___48626 = cljs.core.chunk_first.call(null,seq__48583_48625__$1);
var G__48627 = cljs.core.chunk_rest.call(null,seq__48583_48625__$1);
var G__48628 = c__4550__auto___48626;
var G__48629 = cljs.core.count.call(null,c__4550__auto___48626);
var G__48630 = (0);
seq__48583_48615 = G__48627;
chunk__48584_48616 = G__48628;
count__48585_48617 = G__48629;
i__48586_48618 = G__48630;
continue;
} else {
var f_48631 = cljs.core.first.call(null,seq__48583_48625__$1);
cljs.core.println.call(null,"  ",f_48631);


var G__48632 = cljs.core.next.call(null,seq__48583_48625__$1);
var G__48633 = null;
var G__48634 = (0);
var G__48635 = (0);
seq__48583_48615 = G__48632;
chunk__48584_48616 = G__48633;
count__48585_48617 = G__48634;
i__48586_48618 = G__48635;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48636 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48636);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48636)))?cljs.core.second.call(null,arglists_48636):arglists_48636));
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
var seq__48587_48637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48588_48638 = null;
var count__48589_48639 = (0);
var i__48590_48640 = (0);
while(true){
if((i__48590_48640 < count__48589_48639)){
var vec__48601_48641 = cljs.core._nth.call(null,chunk__48588_48638,i__48590_48640);
var name_48642 = cljs.core.nth.call(null,vec__48601_48641,(0),null);
var map__48604_48643 = cljs.core.nth.call(null,vec__48601_48641,(1),null);
var map__48604_48644__$1 = (((((!((map__48604_48643 == null))))?(((((map__48604_48643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48604_48643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48604_48643):map__48604_48643);
var doc_48645 = cljs.core.get.call(null,map__48604_48644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48646 = cljs.core.get.call(null,map__48604_48644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48642);

cljs.core.println.call(null," ",arglists_48646);

if(cljs.core.truth_(doc_48645)){
cljs.core.println.call(null," ",doc_48645);
} else {
}


var G__48647 = seq__48587_48637;
var G__48648 = chunk__48588_48638;
var G__48649 = count__48589_48639;
var G__48650 = (i__48590_48640 + (1));
seq__48587_48637 = G__48647;
chunk__48588_48638 = G__48648;
count__48589_48639 = G__48649;
i__48590_48640 = G__48650;
continue;
} else {
var temp__5735__auto___48651 = cljs.core.seq.call(null,seq__48587_48637);
if(temp__5735__auto___48651){
var seq__48587_48652__$1 = temp__5735__auto___48651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48587_48652__$1)){
var c__4550__auto___48653 = cljs.core.chunk_first.call(null,seq__48587_48652__$1);
var G__48654 = cljs.core.chunk_rest.call(null,seq__48587_48652__$1);
var G__48655 = c__4550__auto___48653;
var G__48656 = cljs.core.count.call(null,c__4550__auto___48653);
var G__48657 = (0);
seq__48587_48637 = G__48654;
chunk__48588_48638 = G__48655;
count__48589_48639 = G__48656;
i__48590_48640 = G__48657;
continue;
} else {
var vec__48606_48658 = cljs.core.first.call(null,seq__48587_48652__$1);
var name_48659 = cljs.core.nth.call(null,vec__48606_48658,(0),null);
var map__48609_48660 = cljs.core.nth.call(null,vec__48606_48658,(1),null);
var map__48609_48661__$1 = (((((!((map__48609_48660 == null))))?(((((map__48609_48660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48609_48660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48609_48660):map__48609_48660);
var doc_48662 = cljs.core.get.call(null,map__48609_48661__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48663 = cljs.core.get.call(null,map__48609_48661__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48659);

cljs.core.println.call(null," ",arglists_48663);

if(cljs.core.truth_(doc_48662)){
cljs.core.println.call(null," ",doc_48662);
} else {
}


var G__48664 = cljs.core.next.call(null,seq__48587_48652__$1);
var G__48665 = null;
var G__48666 = (0);
var G__48667 = (0);
seq__48587_48637 = G__48664;
chunk__48588_48638 = G__48665;
count__48589_48639 = G__48666;
i__48590_48640 = G__48667;
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

var seq__48611 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48612 = null;
var count__48613 = (0);
var i__48614 = (0);
while(true){
if((i__48614 < count__48613)){
var role = cljs.core._nth.call(null,chunk__48612,i__48614);
var temp__5735__auto___48668__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48668__$1)){
var spec_48669 = temp__5735__auto___48668__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48669));
} else {
}


var G__48670 = seq__48611;
var G__48671 = chunk__48612;
var G__48672 = count__48613;
var G__48673 = (i__48614 + (1));
seq__48611 = G__48670;
chunk__48612 = G__48671;
count__48613 = G__48672;
i__48614 = G__48673;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__48611);
if(temp__5735__auto____$1){
var seq__48611__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48611__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48611__$1);
var G__48674 = cljs.core.chunk_rest.call(null,seq__48611__$1);
var G__48675 = c__4550__auto__;
var G__48676 = cljs.core.count.call(null,c__4550__auto__);
var G__48677 = (0);
seq__48611 = G__48674;
chunk__48612 = G__48675;
count__48613 = G__48676;
i__48614 = G__48677;
continue;
} else {
var role = cljs.core.first.call(null,seq__48611__$1);
var temp__5735__auto___48678__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48678__$2)){
var spec_48679 = temp__5735__auto___48678__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48679));
} else {
}


var G__48680 = cljs.core.next.call(null,seq__48611__$1);
var G__48681 = null;
var G__48682 = (0);
var G__48683 = (0);
seq__48611 = G__48680;
chunk__48612 = G__48681;
count__48613 = G__48682;
i__48614 = G__48683;
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
var G__48684 = cljs.core.conj.call(null,via,t);
var G__48685 = cljs.core.ex_cause.call(null,t);
via = G__48684;
t = G__48685;
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
var map__48688 = datafied_throwable;
var map__48688__$1 = (((((!((map__48688 == null))))?(((((map__48688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48688):map__48688);
var via = cljs.core.get.call(null,map__48688__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__48688__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__48688__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48689 = cljs.core.last.call(null,via);
var map__48689__$1 = (((((!((map__48689 == null))))?(((((map__48689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48689):map__48689);
var type = cljs.core.get.call(null,map__48689__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__48689__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__48689__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48690 = data;
var map__48690__$1 = (((((!((map__48690 == null))))?(((((map__48690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48690):map__48690);
var problems = cljs.core.get.call(null,map__48690__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__48690__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__48690__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48691 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__48691__$1 = (((((!((map__48691 == null))))?(((((map__48691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48691):map__48691);
var top_data = map__48691__$1;
var source = cljs.core.get.call(null,map__48691__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__48696 = phase;
var G__48696__$1 = (((G__48696 instanceof cljs.core.Keyword))?G__48696.fqn:null);
switch (G__48696__$1) {
case "read-source":
var map__48697 = data;
var map__48697__$1 = (((((!((map__48697 == null))))?(((((map__48697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48697):map__48697);
var line = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48699 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__48699__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__48699,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48699);
var G__48699__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__48699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48699__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__48699__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48699__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48700 = top_data;
var G__48700__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__48700,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48700);
var G__48700__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__48700__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48700__$1);
var G__48700__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__48700__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48700__$2);
var G__48700__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__48700__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48700__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__48700__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48700__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48701 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__48701,(0),null);
var method = cljs.core.nth.call(null,vec__48701,(1),null);
var file = cljs.core.nth.call(null,vec__48701,(2),null);
var line = cljs.core.nth.call(null,vec__48701,(3),null);
var G__48704 = top_data;
var G__48704__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__48704,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48704);
var G__48704__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__48704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48704__$1);
var G__48704__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__48704__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48704__$2);
var G__48704__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__48704__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48704__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__48704__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48704__$4;
}

break;
case "execution":
var vec__48705 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__48705,(0),null);
var method = cljs.core.nth.call(null,vec__48705,(1),null);
var file = cljs.core.nth.call(null,vec__48705,(2),null);
var line = cljs.core.nth.call(null,vec__48705,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__48705,source__$1,method,file,line,G__48696,G__48696__$1,map__48688,map__48688__$1,via,trace,phase,map__48689,map__48689__$1,type,message,data,map__48690,map__48690__$1,problems,fn,caller,map__48691,map__48691__$1,top_data,source){
return (function (p1__48687_SHARP_){
var or__4131__auto__ = (p1__48687_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__48687_SHARP_);
}
});})(vec__48705,source__$1,method,file,line,G__48696,G__48696__$1,map__48688,map__48688__$1,via,trace,phase,map__48689,map__48689__$1,type,message,data,map__48690,map__48690__$1,problems,fn,caller,map__48691,map__48691__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__48708 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48708__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__48708,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48708);
var G__48708__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__48708__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48708__$1);
var G__48708__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__48708__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48708__$2);
var G__48708__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__48708__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48708__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__48708__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48708__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48696__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48712){
var map__48713 = p__48712;
var map__48713__$1 = (((((!((map__48713 == null))))?(((((map__48713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48713):map__48713);
var triage_data = map__48713__$1;
var phase = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__48713__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__48715 = phase;
var G__48715__$1 = (((G__48715 instanceof cljs.core.Keyword))?G__48715.fqn:null);
switch (G__48715__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48716_48725 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48717_48726 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48718_48727 = true;
var _STAR_print_fn_STAR__temp_val__48719_48728 = ((function (_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48718_48727;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48719_48728;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,_STAR_print_fn_STAR__temp_val__48719_48728,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,_STAR_print_fn_STAR__temp_val__48719_48728,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__48710_SHARP_){
return cljs.core.dissoc.call(null,p1__48710_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,_STAR_print_fn_STAR__temp_val__48719_48728,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__48716_48725,_STAR_print_fn_STAR__orig_val__48717_48726,_STAR_print_newline_STAR__temp_val__48718_48727,_STAR_print_fn_STAR__temp_val__48719_48728,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48717_48726;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48716_48725;
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
var _STAR_print_newline_STAR__orig_val__48720_48729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48721_48730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48722_48731 = true;
var _STAR_print_fn_STAR__temp_val__48723_48732 = ((function (_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48722_48731;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48723_48732;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,_STAR_print_fn_STAR__temp_val__48723_48732,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,_STAR_print_fn_STAR__temp_val__48723_48732,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__48711_SHARP_){
return cljs.core.dissoc.call(null,p1__48711_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,_STAR_print_fn_STAR__temp_val__48723_48732,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__48720_48729,_STAR_print_fn_STAR__orig_val__48721_48730,_STAR_print_newline_STAR__temp_val__48722_48731,_STAR_print_fn_STAR__temp_val__48723_48732,sb__4661__auto__,G__48715,G__48715__$1,loc,class_name,simple_class,cause_type,format,map__48713,map__48713__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48721_48730;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48720_48729;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48715__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581079347763
