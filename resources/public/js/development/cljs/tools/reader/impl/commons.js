// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.tools.reader.impl.commons');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.tools.reader.impl.commons.number_literal_QMARK_ = (function cljs$tools$reader$impl$commons$number_literal_QMARK_(reader,initch){
return ((cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,initch)) || (((((("+" === initch)) || (("-" === initch)))) && (cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,reader))))));
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.tools.reader.impl.commons.read_past = (function cljs$tools$reader$impl$commons$read_past(pred,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(pred.call(null,ch)){
var G__59719 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__59719;
continue;
} else {
return ch;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.tools.reader.impl.commons.skip_line = (function cljs$tools$reader$impl$commons$skip_line(reader){
while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_.call(null,cljs.tools.reader.reader_types.read_char.call(null,reader))){
} else {
continue;
}
break;
}

return reader;
});
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = (function cljs$tools$reader$impl$commons$match_int(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.int_pattern,s));
if((!((m.call(null,(2)) == null)))){
return (0);
} else {
var negate_QMARK_ = ("-" === m.call(null,(1)));
var a = (((!((m.call(null,(3)) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(3)),(10)], null):(((!((m.call(null,(4)) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(4)),(16)], null):(((!((m.call(null,(5)) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(5)),(8)], null):(((!((m.call(null,(7)) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m.call(null,(7)),parseInt(m.call(null,(6)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)
))));
var n = a.call(null,(0));
if((n == null)){
return null;
} else {
var bn = parseInt(n,a.call(null,(1)));
var bn__$1 = ((negate_QMARK_)?((-1) * bn):bn);
if(cljs.core.truth_(isNaN(bn__$1))){
return null;
} else {
return bn__$1;
}
}
}
});
cljs.tools.reader.impl.commons.match_ratio = (function cljs$tools$reader$impl$commons$match_ratio(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.ratio_pattern,s));
var numerator = m.call(null,(1));
var denominator = m.call(null,(2));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/^\+/,numerator))?cljs.core.subs.call(null,numerator,(1)):numerator);
return (parseInt(numerator__$1) / parseInt(denominator));
});
cljs.tools.reader.impl.commons.match_float = (function cljs$tools$reader$impl$commons$match_float(s){
var m = cljs.core.vec.call(null,cljs.core.re_find.call(null,cljs.tools.reader.impl.commons.float_pattern,s));
if((!((m.call(null,(4)) == null)))){
return parseFloat(m.call(null,(1)));
} else {
return parseFloat(s);
}
});
cljs.tools.reader.impl.commons.matches_QMARK_ = (function cljs$tools$reader$impl$commons$matches_QMARK_(pattern,s){
var vec__59720 = cljs.core.re_find.call(null,pattern,s);
var match = cljs.core.nth.call(null,vec__59720,(0),null);
return (match === s);
});
cljs.tools.reader.impl.commons.match_number = (function cljs$tools$reader$impl$commons$match_number(s){
if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.int_pattern,s)){
return cljs.tools.reader.impl.commons.match_int.call(null,s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.float_pattern,s)){
return cljs.tools.reader.impl.commons.match_float.call(null,s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_.call(null,cljs.tools.reader.impl.commons.ratio_pattern,s)){
return cljs.tools.reader.impl.commons.match_ratio.call(null,s);
} else {
return null;
}
}
}
});
/**
 * Parses a string into a vector of the namespace and symbol
 */
cljs.tools.reader.impl.commons.parse_symbol = (function cljs$tools$reader$impl$commons$parse_symbol(token){
if(((("" === token)) || (/:$/.test(token) === true) || (/^::/.test(token) === true))){
return null;
} else {
var ns_idx = token.indexOf("/");
var ns = (((ns_idx > (0)))?cljs.core.subs.call(null,token,(0),ns_idx):null);
if((!((ns == null)))){
var ns_idx__$1 = (ns_idx + (1));
if((ns_idx__$1 === cljs.core.count.call(null,token))){
return null;
} else {
var sym = cljs.core.subs.call(null,token,ns_idx__$1);
if((((!(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,cljs.core.nth.call(null,sym,(0)))))) && ((!(("" === sym)))) && (/:$/.test(ns) === false) && ((((sym === "/")) || (((-1) === sym.indexOf("/"))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else {
return null;
}
}
} else {
if((((token === "/")) || (((-1) === token.indexOf("/"))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else {
return null;
}
}
}
});
cljs.tools.reader.impl.commons.read_comment = (function cljs$tools$reader$impl$commons$read_comment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59725 = arguments.length;
var i__4731__auto___59726 = (0);
while(true){
if((i__4731__auto___59726 < len__4730__auto___59725)){
args__4736__auto__.push((arguments[i__4731__auto___59726]));

var G__59727 = (i__4731__auto___59726 + (1));
i__4731__auto___59726 = G__59727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,_){
return cljs.tools.reader.impl.commons.skip_line.call(null,rdr);
});

cljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq59723){
var G__59724 = cljs.core.first.call(null,seq59723);
var seq59723__$1 = cljs.core.next.call(null,seq59723);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59724,seq59723__$1);
});

cljs.tools.reader.impl.commons.throwing_reader = (function cljs$tools$reader$impl$commons$throwing_reader(msg){
return (function() { 
var G__59728__delegate = function (rdr,_){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,msg);
};
var G__59728 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__59729__i = 0, G__59729__a = new Array(arguments.length -  1);
while (G__59729__i < G__59729__a.length) {G__59729__a[G__59729__i] = arguments[G__59729__i + 1]; ++G__59729__i;}
  _ = new cljs.core.IndexedSeq(G__59729__a,0,null);
} 
return G__59728__delegate.call(this,rdr,_);};
G__59728.cljs$lang$maxFixedArity = 1;
G__59728.cljs$lang$applyTo = (function (arglist__59730){
var rdr = cljs.core.first(arglist__59730);
var _ = cljs.core.rest(arglist__59730);
return G__59728__delegate(rdr,_);
});
G__59728.cljs$core$IFn$_invoke$arity$variadic = G__59728__delegate;
return G__59728;
})()
;
});

//# sourceMappingURL=commons.js.map?rel=1581380908504
