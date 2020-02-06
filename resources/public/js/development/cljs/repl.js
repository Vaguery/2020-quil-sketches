// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28683){
var map__28684 = p__28683;
var map__28684__$1 = (((((!((map__28684 == null))))?(((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var m = map__28684__$1;
var n = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28686_28718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28687_28719 = null;
var count__28688_28720 = (0);
var i__28689_28721 = (0);
while(true){
if((i__28689_28721 < count__28688_28720)){
var f_28722 = cljs.core._nth.call(null,chunk__28687_28719,i__28689_28721);
cljs.core.println.call(null,"  ",f_28722);


var G__28723 = seq__28686_28718;
var G__28724 = chunk__28687_28719;
var G__28725 = count__28688_28720;
var G__28726 = (i__28689_28721 + (1));
seq__28686_28718 = G__28723;
chunk__28687_28719 = G__28724;
count__28688_28720 = G__28725;
i__28689_28721 = G__28726;
continue;
} else {
var temp__5735__auto___28727 = cljs.core.seq.call(null,seq__28686_28718);
if(temp__5735__auto___28727){
var seq__28686_28728__$1 = temp__5735__auto___28727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686_28728__$1)){
var c__4550__auto___28729 = cljs.core.chunk_first.call(null,seq__28686_28728__$1);
var G__28730 = cljs.core.chunk_rest.call(null,seq__28686_28728__$1);
var G__28731 = c__4550__auto___28729;
var G__28732 = cljs.core.count.call(null,c__4550__auto___28729);
var G__28733 = (0);
seq__28686_28718 = G__28730;
chunk__28687_28719 = G__28731;
count__28688_28720 = G__28732;
i__28689_28721 = G__28733;
continue;
} else {
var f_28734 = cljs.core.first.call(null,seq__28686_28728__$1);
cljs.core.println.call(null,"  ",f_28734);


var G__28735 = cljs.core.next.call(null,seq__28686_28728__$1);
var G__28736 = null;
var G__28737 = (0);
var G__28738 = (0);
seq__28686_28718 = G__28735;
chunk__28687_28719 = G__28736;
count__28688_28720 = G__28737;
i__28689_28721 = G__28738;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28739 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28739);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28739)))?cljs.core.second.call(null,arglists_28739):arglists_28739));
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
var seq__28690_28740 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28691_28741 = null;
var count__28692_28742 = (0);
var i__28693_28743 = (0);
while(true){
if((i__28693_28743 < count__28692_28742)){
var vec__28704_28744 = cljs.core._nth.call(null,chunk__28691_28741,i__28693_28743);
var name_28745 = cljs.core.nth.call(null,vec__28704_28744,(0),null);
var map__28707_28746 = cljs.core.nth.call(null,vec__28704_28744,(1),null);
var map__28707_28747__$1 = (((((!((map__28707_28746 == null))))?(((((map__28707_28746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28707_28746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28707_28746):map__28707_28746);
var doc_28748 = cljs.core.get.call(null,map__28707_28747__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28749 = cljs.core.get.call(null,map__28707_28747__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28745);

cljs.core.println.call(null," ",arglists_28749);

if(cljs.core.truth_(doc_28748)){
cljs.core.println.call(null," ",doc_28748);
} else {
}


var G__28750 = seq__28690_28740;
var G__28751 = chunk__28691_28741;
var G__28752 = count__28692_28742;
var G__28753 = (i__28693_28743 + (1));
seq__28690_28740 = G__28750;
chunk__28691_28741 = G__28751;
count__28692_28742 = G__28752;
i__28693_28743 = G__28753;
continue;
} else {
var temp__5735__auto___28754 = cljs.core.seq.call(null,seq__28690_28740);
if(temp__5735__auto___28754){
var seq__28690_28755__$1 = temp__5735__auto___28754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28690_28755__$1)){
var c__4550__auto___28756 = cljs.core.chunk_first.call(null,seq__28690_28755__$1);
var G__28757 = cljs.core.chunk_rest.call(null,seq__28690_28755__$1);
var G__28758 = c__4550__auto___28756;
var G__28759 = cljs.core.count.call(null,c__4550__auto___28756);
var G__28760 = (0);
seq__28690_28740 = G__28757;
chunk__28691_28741 = G__28758;
count__28692_28742 = G__28759;
i__28693_28743 = G__28760;
continue;
} else {
var vec__28709_28761 = cljs.core.first.call(null,seq__28690_28755__$1);
var name_28762 = cljs.core.nth.call(null,vec__28709_28761,(0),null);
var map__28712_28763 = cljs.core.nth.call(null,vec__28709_28761,(1),null);
var map__28712_28764__$1 = (((((!((map__28712_28763 == null))))?(((((map__28712_28763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28712_28763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28712_28763):map__28712_28763);
var doc_28765 = cljs.core.get.call(null,map__28712_28764__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28766 = cljs.core.get.call(null,map__28712_28764__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28762);

cljs.core.println.call(null," ",arglists_28766);

if(cljs.core.truth_(doc_28765)){
cljs.core.println.call(null," ",doc_28765);
} else {
}


var G__28767 = cljs.core.next.call(null,seq__28690_28755__$1);
var G__28768 = null;
var G__28769 = (0);
var G__28770 = (0);
seq__28690_28740 = G__28767;
chunk__28691_28741 = G__28768;
count__28692_28742 = G__28769;
i__28693_28743 = G__28770;
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

var seq__28714 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28715 = null;
var count__28716 = (0);
var i__28717 = (0);
while(true){
if((i__28717 < count__28716)){
var role = cljs.core._nth.call(null,chunk__28715,i__28717);
var temp__5735__auto___28771__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28771__$1)){
var spec_28772 = temp__5735__auto___28771__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28772));
} else {
}


var G__28773 = seq__28714;
var G__28774 = chunk__28715;
var G__28775 = count__28716;
var G__28776 = (i__28717 + (1));
seq__28714 = G__28773;
chunk__28715 = G__28774;
count__28716 = G__28775;
i__28717 = G__28776;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28714);
if(temp__5735__auto____$1){
var seq__28714__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28714__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28714__$1);
var G__28777 = cljs.core.chunk_rest.call(null,seq__28714__$1);
var G__28778 = c__4550__auto__;
var G__28779 = cljs.core.count.call(null,c__4550__auto__);
var G__28780 = (0);
seq__28714 = G__28777;
chunk__28715 = G__28778;
count__28716 = G__28779;
i__28717 = G__28780;
continue;
} else {
var role = cljs.core.first.call(null,seq__28714__$1);
var temp__5735__auto___28781__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28781__$2)){
var spec_28782 = temp__5735__auto___28781__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28782));
} else {
}


var G__28783 = cljs.core.next.call(null,seq__28714__$1);
var G__28784 = null;
var G__28785 = (0);
var G__28786 = (0);
seq__28714 = G__28783;
chunk__28715 = G__28784;
count__28716 = G__28785;
i__28717 = G__28786;
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
var G__28787 = cljs.core.conj.call(null,via,t);
var G__28788 = cljs.core.ex_cause.call(null,t);
via = G__28787;
t = G__28788;
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
var map__28791 = datafied_throwable;
var map__28791__$1 = (((((!((map__28791 == null))))?(((((map__28791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28791):map__28791);
var via = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28791__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28792 = cljs.core.last.call(null,via);
var map__28792__$1 = (((((!((map__28792 == null))))?(((((map__28792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28792):map__28792);
var type = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28793 = data;
var map__28793__$1 = (((((!((map__28793 == null))))?(((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var problems = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28794 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28794__$1 = (((((!((map__28794 == null))))?(((((map__28794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28794):map__28794);
var top_data = map__28794__$1;
var source = cljs.core.get.call(null,map__28794__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28799 = phase;
var G__28799__$1 = (((G__28799 instanceof cljs.core.Keyword))?G__28799.fqn:null);
switch (G__28799__$1) {
case "read-source":
var map__28800 = data;
var map__28800__$1 = (((((!((map__28800 == null))))?(((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);
var line = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28802 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28802__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28802,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28802);
var G__28802__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28802__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28802__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28802__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28803 = top_data;
var G__28803__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28803,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28803);
var G__28803__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28803__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28803__$1);
var G__28803__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28803__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28803__$2);
var G__28803__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28803__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28803__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28803__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28803__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28804 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28804,(0),null);
var method = cljs.core.nth.call(null,vec__28804,(1),null);
var file = cljs.core.nth.call(null,vec__28804,(2),null);
var line = cljs.core.nth.call(null,vec__28804,(3),null);
var G__28807 = top_data;
var G__28807__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28807,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28807);
var G__28807__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28807__$1);
var G__28807__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__28807__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28807__$2);
var G__28807__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28807__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28807__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28807__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28807__$4;
}

break;
case "execution":
var vec__28808 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28808,(0),null);
var method = cljs.core.nth.call(null,vec__28808,(1),null);
var file = cljs.core.nth.call(null,vec__28808,(2),null);
var line = cljs.core.nth.call(null,vec__28808,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__28808,source__$1,method,file,line,G__28799,G__28799__$1,map__28791,map__28791__$1,via,trace,phase,map__28792,map__28792__$1,type,message,data,map__28793,map__28793__$1,problems,fn,caller,map__28794,map__28794__$1,top_data,source){
return (function (p1__28790_SHARP_){
var or__4131__auto__ = (p1__28790_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28790_SHARP_);
}
});})(vec__28808,source__$1,method,file,line,G__28799,G__28799__$1,map__28791,map__28791__$1,via,trace,phase,map__28792,map__28792__$1,type,message,data,map__28793,map__28793__$1,problems,fn,caller,map__28794,map__28794__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28811 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28811__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28811,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28811);
var G__28811__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28811__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28811__$1);
var G__28811__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28811__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28811__$2);
var G__28811__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28811__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28811__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28811__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28811__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28799__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28815){
var map__28816 = p__28815;
var map__28816__$1 = (((((!((map__28816 == null))))?(((((map__28816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);
var triage_data = map__28816__$1;
var phase = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28818 = phase;
var G__28818__$1 = (((G__28818 instanceof cljs.core.Keyword))?G__28818.fqn:null);
switch (G__28818__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28819_28828 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28820_28829 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28821_28830 = true;
var _STAR_print_fn_STAR__temp_val__28822_28831 = ((function (_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28821_28830;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28822_28831;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,_STAR_print_fn_STAR__temp_val__28822_28831,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,_STAR_print_fn_STAR__temp_val__28822_28831,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28813_SHARP_){
return cljs.core.dissoc.call(null,p1__28813_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,_STAR_print_fn_STAR__temp_val__28822_28831,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28819_28828,_STAR_print_fn_STAR__orig_val__28820_28829,_STAR_print_newline_STAR__temp_val__28821_28830,_STAR_print_fn_STAR__temp_val__28822_28831,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28820_28829;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28819_28828;
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
var _STAR_print_newline_STAR__orig_val__28823_28832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28824_28833 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28825_28834 = true;
var _STAR_print_fn_STAR__temp_val__28826_28835 = ((function (_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28825_28834;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28826_28835;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,_STAR_print_fn_STAR__temp_val__28826_28835,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,_STAR_print_fn_STAR__temp_val__28826_28835,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28814_SHARP_){
return cljs.core.dissoc.call(null,p1__28814_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,_STAR_print_fn_STAR__temp_val__28826_28835,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28823_28832,_STAR_print_fn_STAR__orig_val__28824_28833,_STAR_print_newline_STAR__temp_val__28825_28834,_STAR_print_fn_STAR__temp_val__28826_28835,sb__4661__auto__,G__28818,G__28818__$1,loc,class_name,simple_class,cause_type,format,map__28816,map__28816__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28824_28833;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28823_28832;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28818__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581009607428
