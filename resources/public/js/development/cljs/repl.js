// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64683){
var map__64684 = p__64683;
var map__64684__$1 = (((((!((map__64684 == null))))?(((((map__64684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64684):map__64684);
var m = map__64684__$1;
var n = cljs.core.get.call(null,map__64684__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__64684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__64686_64718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64687_64719 = null;
var count__64688_64720 = (0);
var i__64689_64721 = (0);
while(true){
if((i__64689_64721 < count__64688_64720)){
var f_64722 = cljs.core._nth.call(null,chunk__64687_64719,i__64689_64721);
cljs.core.println.call(null,"  ",f_64722);


var G__64723 = seq__64686_64718;
var G__64724 = chunk__64687_64719;
var G__64725 = count__64688_64720;
var G__64726 = (i__64689_64721 + (1));
seq__64686_64718 = G__64723;
chunk__64687_64719 = G__64724;
count__64688_64720 = G__64725;
i__64689_64721 = G__64726;
continue;
} else {
var temp__5735__auto___64727 = cljs.core.seq.call(null,seq__64686_64718);
if(temp__5735__auto___64727){
var seq__64686_64728__$1 = temp__5735__auto___64727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64686_64728__$1)){
var c__4550__auto___64729 = cljs.core.chunk_first.call(null,seq__64686_64728__$1);
var G__64730 = cljs.core.chunk_rest.call(null,seq__64686_64728__$1);
var G__64731 = c__4550__auto___64729;
var G__64732 = cljs.core.count.call(null,c__4550__auto___64729);
var G__64733 = (0);
seq__64686_64718 = G__64730;
chunk__64687_64719 = G__64731;
count__64688_64720 = G__64732;
i__64689_64721 = G__64733;
continue;
} else {
var f_64734 = cljs.core.first.call(null,seq__64686_64728__$1);
cljs.core.println.call(null,"  ",f_64734);


var G__64735 = cljs.core.next.call(null,seq__64686_64728__$1);
var G__64736 = null;
var G__64737 = (0);
var G__64738 = (0);
seq__64686_64718 = G__64735;
chunk__64687_64719 = G__64736;
count__64688_64720 = G__64737;
i__64689_64721 = G__64738;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64739 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_64739);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_64739)))?cljs.core.second.call(null,arglists_64739):arglists_64739));
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
var seq__64690_64740 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64691_64741 = null;
var count__64692_64742 = (0);
var i__64693_64743 = (0);
while(true){
if((i__64693_64743 < count__64692_64742)){
var vec__64704_64744 = cljs.core._nth.call(null,chunk__64691_64741,i__64693_64743);
var name_64745 = cljs.core.nth.call(null,vec__64704_64744,(0),null);
var map__64707_64746 = cljs.core.nth.call(null,vec__64704_64744,(1),null);
var map__64707_64747__$1 = (((((!((map__64707_64746 == null))))?(((((map__64707_64746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64707_64746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64707_64746):map__64707_64746);
var doc_64748 = cljs.core.get.call(null,map__64707_64747__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64749 = cljs.core.get.call(null,map__64707_64747__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64745);

cljs.core.println.call(null," ",arglists_64749);

if(cljs.core.truth_(doc_64748)){
cljs.core.println.call(null," ",doc_64748);
} else {
}


var G__64750 = seq__64690_64740;
var G__64751 = chunk__64691_64741;
var G__64752 = count__64692_64742;
var G__64753 = (i__64693_64743 + (1));
seq__64690_64740 = G__64750;
chunk__64691_64741 = G__64751;
count__64692_64742 = G__64752;
i__64693_64743 = G__64753;
continue;
} else {
var temp__5735__auto___64754 = cljs.core.seq.call(null,seq__64690_64740);
if(temp__5735__auto___64754){
var seq__64690_64755__$1 = temp__5735__auto___64754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64690_64755__$1)){
var c__4550__auto___64756 = cljs.core.chunk_first.call(null,seq__64690_64755__$1);
var G__64757 = cljs.core.chunk_rest.call(null,seq__64690_64755__$1);
var G__64758 = c__4550__auto___64756;
var G__64759 = cljs.core.count.call(null,c__4550__auto___64756);
var G__64760 = (0);
seq__64690_64740 = G__64757;
chunk__64691_64741 = G__64758;
count__64692_64742 = G__64759;
i__64693_64743 = G__64760;
continue;
} else {
var vec__64709_64761 = cljs.core.first.call(null,seq__64690_64755__$1);
var name_64762 = cljs.core.nth.call(null,vec__64709_64761,(0),null);
var map__64712_64763 = cljs.core.nth.call(null,vec__64709_64761,(1),null);
var map__64712_64764__$1 = (((((!((map__64712_64763 == null))))?(((((map__64712_64763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64712_64763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64712_64763):map__64712_64763);
var doc_64765 = cljs.core.get.call(null,map__64712_64764__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64766 = cljs.core.get.call(null,map__64712_64764__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64762);

cljs.core.println.call(null," ",arglists_64766);

if(cljs.core.truth_(doc_64765)){
cljs.core.println.call(null," ",doc_64765);
} else {
}


var G__64767 = cljs.core.next.call(null,seq__64690_64755__$1);
var G__64768 = null;
var G__64769 = (0);
var G__64770 = (0);
seq__64690_64740 = G__64767;
chunk__64691_64741 = G__64768;
count__64692_64742 = G__64769;
i__64693_64743 = G__64770;
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

var seq__64714 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64715 = null;
var count__64716 = (0);
var i__64717 = (0);
while(true){
if((i__64717 < count__64716)){
var role = cljs.core._nth.call(null,chunk__64715,i__64717);
var temp__5735__auto___64771__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___64771__$1)){
var spec_64772 = temp__5735__auto___64771__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64772));
} else {
}


var G__64773 = seq__64714;
var G__64774 = chunk__64715;
var G__64775 = count__64716;
var G__64776 = (i__64717 + (1));
seq__64714 = G__64773;
chunk__64715 = G__64774;
count__64716 = G__64775;
i__64717 = G__64776;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__64714);
if(temp__5735__auto____$1){
var seq__64714__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64714__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__64714__$1);
var G__64777 = cljs.core.chunk_rest.call(null,seq__64714__$1);
var G__64778 = c__4550__auto__;
var G__64779 = cljs.core.count.call(null,c__4550__auto__);
var G__64780 = (0);
seq__64714 = G__64777;
chunk__64715 = G__64778;
count__64716 = G__64779;
i__64717 = G__64780;
continue;
} else {
var role = cljs.core.first.call(null,seq__64714__$1);
var temp__5735__auto___64781__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___64781__$2)){
var spec_64782 = temp__5735__auto___64781__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64782));
} else {
}


var G__64783 = cljs.core.next.call(null,seq__64714__$1);
var G__64784 = null;
var G__64785 = (0);
var G__64786 = (0);
seq__64714 = G__64783;
chunk__64715 = G__64784;
count__64716 = G__64785;
i__64717 = G__64786;
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
var G__64787 = cljs.core.conj.call(null,via,t);
var G__64788 = cljs.core.ex_cause.call(null,t);
via = G__64787;
t = G__64788;
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
var map__64791 = datafied_throwable;
var map__64791__$1 = (((((!((map__64791 == null))))?(((((map__64791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64791):map__64791);
var via = cljs.core.get.call(null,map__64791__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__64791__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__64791__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__64792 = cljs.core.last.call(null,via);
var map__64792__$1 = (((((!((map__64792 == null))))?(((((map__64792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64792):map__64792);
var type = cljs.core.get.call(null,map__64792__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__64792__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__64792__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__64793 = data;
var map__64793__$1 = (((((!((map__64793 == null))))?(((((map__64793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64793):map__64793);
var problems = cljs.core.get.call(null,map__64793__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__64793__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__64793__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__64794 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__64794__$1 = (((((!((map__64794 == null))))?(((((map__64794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64794):map__64794);
var top_data = map__64794__$1;
var source = cljs.core.get.call(null,map__64794__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__64799 = phase;
var G__64799__$1 = (((G__64799 instanceof cljs.core.Keyword))?G__64799.fqn:null);
switch (G__64799__$1) {
case "read-source":
var map__64800 = data;
var map__64800__$1 = (((((!((map__64800 == null))))?(((((map__64800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64800):map__64800);
var line = cljs.core.get.call(null,map__64800__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__64800__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__64802 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__64802__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__64802,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64802);
var G__64802__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__64802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64802__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__64802__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64802__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__64803 = top_data;
var G__64803__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__64803,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64803);
var G__64803__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__64803__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64803__$1);
var G__64803__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__64803__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64803__$2);
var G__64803__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__64803__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64803__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__64803__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64803__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__64804 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__64804,(0),null);
var method = cljs.core.nth.call(null,vec__64804,(1),null);
var file = cljs.core.nth.call(null,vec__64804,(2),null);
var line = cljs.core.nth.call(null,vec__64804,(3),null);
var G__64807 = top_data;
var G__64807__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__64807,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__64807);
var G__64807__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__64807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__64807__$1);
var G__64807__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__64807__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__64807__$2);
var G__64807__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__64807__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64807__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__64807__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64807__$4;
}

break;
case "execution":
var vec__64808 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__64808,(0),null);
var method = cljs.core.nth.call(null,vec__64808,(1),null);
var file = cljs.core.nth.call(null,vec__64808,(2),null);
var line = cljs.core.nth.call(null,vec__64808,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__64808,source__$1,method,file,line,G__64799,G__64799__$1,map__64791,map__64791__$1,via,trace,phase,map__64792,map__64792__$1,type,message,data,map__64793,map__64793__$1,problems,fn,caller,map__64794,map__64794__$1,top_data,source){
return (function (p1__64790_SHARP_){
var or__4131__auto__ = (p1__64790_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__64790_SHARP_);
}
});})(vec__64808,source__$1,method,file,line,G__64799,G__64799__$1,map__64791,map__64791__$1,via,trace,phase,map__64792,map__64792__$1,type,message,data,map__64793,map__64793__$1,problems,fn,caller,map__64794,map__64794__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__64811 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__64811__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__64811,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__64811);
var G__64811__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__64811__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64811__$1);
var G__64811__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__64811__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__64811__$2);
var G__64811__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__64811__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__64811__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__64811__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64811__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64799__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__64815){
var map__64816 = p__64815;
var map__64816__$1 = (((((!((map__64816 == null))))?(((((map__64816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64816):map__64816);
var triage_data = map__64816__$1;
var phase = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__64816__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__64818 = phase;
var G__64818__$1 = (((G__64818 instanceof cljs.core.Keyword))?G__64818.fqn:null);
switch (G__64818__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64819_64828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64820_64829 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64821_64830 = true;
var _STAR_print_fn_STAR__temp_val__64822_64831 = ((function (_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64821_64830;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64822_64831;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,_STAR_print_fn_STAR__temp_val__64822_64831,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,_STAR_print_fn_STAR__temp_val__64822_64831,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__64813_SHARP_){
return cljs.core.dissoc.call(null,p1__64813_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,_STAR_print_fn_STAR__temp_val__64822_64831,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__64819_64828,_STAR_print_fn_STAR__orig_val__64820_64829,_STAR_print_newline_STAR__temp_val__64821_64830,_STAR_print_fn_STAR__temp_val__64822_64831,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64820_64829;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64819_64828;
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
var _STAR_print_newline_STAR__orig_val__64823_64832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64824_64833 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64825_64834 = true;
var _STAR_print_fn_STAR__temp_val__64826_64835 = ((function (_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64825_64834;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64826_64835;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,_STAR_print_fn_STAR__temp_val__64826_64835,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,_STAR_print_fn_STAR__temp_val__64826_64835,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__64814_SHARP_){
return cljs.core.dissoc.call(null,p1__64814_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,_STAR_print_fn_STAR__temp_val__64826_64835,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__64823_64832,_STAR_print_fn_STAR__orig_val__64824_64833,_STAR_print_newline_STAR__temp_val__64825_64834,_STAR_print_fn_STAR__temp_val__64826_64835,sb__4661__auto__,G__64818,G__64818__$1,loc,class_name,simple_class,cause_type,format,map__64816,map__64816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64824_64833;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64823_64832;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64818__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581380915314
