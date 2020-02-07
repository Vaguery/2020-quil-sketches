// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26568 = arguments.length;
switch (G__26568) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26569 = (function (f,blockable,meta26570){
this.f = f;
this.blockable = blockable;
this.meta26570 = meta26570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26571,meta26570__$1){
var self__ = this;
var _26571__$1 = this;
return (new cljs.core.async.t_cljs$core$async26569(self__.f,self__.blockable,meta26570__$1));
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26571){
var self__ = this;
var _26571__$1 = this;
return self__.meta26570;
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26570","meta26570",1438083756,null)], null);
});

cljs.core.async.t_cljs$core$async26569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26569";

cljs.core.async.t_cljs$core$async26569.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26569");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26569.
 */
cljs.core.async.__GT_t_cljs$core$async26569 = (function cljs$core$async$__GT_t_cljs$core$async26569(f__$1,blockable__$1,meta26570){
return (new cljs.core.async.t_cljs$core$async26569(f__$1,blockable__$1,meta26570));
});

}

return (new cljs.core.async.t_cljs$core$async26569(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26575 = arguments.length;
switch (G__26575) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26578 = arguments.length;
switch (G__26578) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26581 = arguments.length;
switch (G__26581) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26583 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26583);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26583,ret){
return (function (){
return fn1.call(null,val_26583);
});})(val_26583,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26585 = arguments.length;
switch (G__26585) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___26587 = n;
var x_26588 = (0);
while(true){
if((x_26588 < n__4607__auto___26587)){
(a[x_26588] = (0));

var G__26589 = (x_26588 + (1));
x_26588 = G__26589;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26590 = (i + (1));
i = G__26590;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26591 = (function (flag,meta26592){
this.flag = flag;
this.meta26592 = meta26592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26593,meta26592__$1){
var self__ = this;
var _26593__$1 = this;
return (new cljs.core.async.t_cljs$core$async26591(self__.flag,meta26592__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26593){
var self__ = this;
var _26593__$1 = this;
return self__.meta26592;
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26592","meta26592",968639285,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26591";

cljs.core.async.t_cljs$core$async26591.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26591");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26591.
 */
cljs.core.async.__GT_t_cljs$core$async26591 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26591(flag__$1,meta26592){
return (new cljs.core.async.t_cljs$core$async26591(flag__$1,meta26592));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26591(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26594 = (function (flag,cb,meta26595){
this.flag = flag;
this.cb = cb;
this.meta26595 = meta26595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26596,meta26595__$1){
var self__ = this;
var _26596__$1 = this;
return (new cljs.core.async.t_cljs$core$async26594(self__.flag,self__.cb,meta26595__$1));
});

cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26596){
var self__ = this;
var _26596__$1 = this;
return self__.meta26595;
});

cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26595","meta26595",-1390100026,null)], null);
});

cljs.core.async.t_cljs$core$async26594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26594";

cljs.core.async.t_cljs$core$async26594.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26594");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26594.
 */
cljs.core.async.__GT_t_cljs$core$async26594 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26594(flag__$1,cb__$1,meta26595){
return (new cljs.core.async.t_cljs$core$async26594(flag__$1,cb__$1,meta26595));
});

}

return (new cljs.core.async.t_cljs$core$async26594(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26597_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26598_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26598_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26599 = (i + (1));
i = G__26599;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26605 = arguments.length;
var i__4731__auto___26606 = (0);
while(true){
if((i__4731__auto___26606 < len__4730__auto___26605)){
args__4736__auto__.push((arguments[i__4731__auto___26606]));

var G__26607 = (i__4731__auto___26606 + (1));
i__4731__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26602){
var map__26603 = p__26602;
var map__26603__$1 = (((((!((map__26603 == null))))?(((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var opts = map__26603__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26600){
var G__26601 = cljs.core.first.call(null,seq26600);
var seq26600__$1 = cljs.core.next.call(null,seq26600);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26601,seq26600__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26609 = arguments.length;
switch (G__26609) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24644__auto___26655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___26655){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___26655){
return (function (state_26633){
var state_val_26634 = (state_26633[(1)]);
if((state_val_26634 === (7))){
var inst_26629 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
var statearr_26635_26656 = state_26633__$1;
(statearr_26635_26656[(2)] = inst_26629);

(statearr_26635_26656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (1))){
var state_26633__$1 = state_26633;
var statearr_26636_26657 = state_26633__$1;
(statearr_26636_26657[(2)] = null);

(statearr_26636_26657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (4))){
var inst_26612 = (state_26633[(7)]);
var inst_26612__$1 = (state_26633[(2)]);
var inst_26613 = (inst_26612__$1 == null);
var state_26633__$1 = (function (){var statearr_26637 = state_26633;
(statearr_26637[(7)] = inst_26612__$1);

return statearr_26637;
})();
if(cljs.core.truth_(inst_26613)){
var statearr_26638_26658 = state_26633__$1;
(statearr_26638_26658[(1)] = (5));

} else {
var statearr_26639_26659 = state_26633__$1;
(statearr_26639_26659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (13))){
var state_26633__$1 = state_26633;
var statearr_26640_26660 = state_26633__$1;
(statearr_26640_26660[(2)] = null);

(statearr_26640_26660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (6))){
var inst_26612 = (state_26633[(7)]);
var state_26633__$1 = state_26633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26633__$1,(11),to,inst_26612);
} else {
if((state_val_26634 === (3))){
var inst_26631 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26633__$1,inst_26631);
} else {
if((state_val_26634 === (12))){
var state_26633__$1 = state_26633;
var statearr_26641_26661 = state_26633__$1;
(statearr_26641_26661[(2)] = null);

(statearr_26641_26661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (2))){
var state_26633__$1 = state_26633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26633__$1,(4),from);
} else {
if((state_val_26634 === (11))){
var inst_26622 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
if(cljs.core.truth_(inst_26622)){
var statearr_26642_26662 = state_26633__$1;
(statearr_26642_26662[(1)] = (12));

} else {
var statearr_26643_26663 = state_26633__$1;
(statearr_26643_26663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (9))){
var state_26633__$1 = state_26633;
var statearr_26644_26664 = state_26633__$1;
(statearr_26644_26664[(2)] = null);

(statearr_26644_26664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (5))){
var state_26633__$1 = state_26633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26645_26665 = state_26633__$1;
(statearr_26645_26665[(1)] = (8));

} else {
var statearr_26646_26666 = state_26633__$1;
(statearr_26646_26666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (14))){
var inst_26627 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
var statearr_26647_26667 = state_26633__$1;
(statearr_26647_26667[(2)] = inst_26627);

(statearr_26647_26667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (10))){
var inst_26619 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
var statearr_26648_26668 = state_26633__$1;
(statearr_26648_26668[(2)] = inst_26619);

(statearr_26648_26668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (8))){
var inst_26616 = cljs.core.async.close_BANG_.call(null,to);
var state_26633__$1 = state_26633;
var statearr_26649_26669 = state_26633__$1;
(statearr_26649_26669[(2)] = inst_26616);

(statearr_26649_26669[(1)] = (10));


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
});})(c__24644__auto___26655))
;
return ((function (switch__24477__auto__,c__24644__auto___26655){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_26650 = [null,null,null,null,null,null,null,null];
(statearr_26650[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_26650[(1)] = (1));

return statearr_26650;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_26633){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26651){if((e26651 instanceof Object)){
var ex__24481__auto__ = e26651;
var statearr_26652_26670 = state_26633;
(statearr_26652_26670[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26671 = state_26633;
state_26633 = G__26671;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_26633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_26633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___26655))
})();
var state__24646__auto__ = (function (){var statearr_26653 = f__24645__auto__.call(null);
(statearr_26653[(6)] = c__24644__auto___26655);

return statearr_26653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___26655))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26672){
var vec__26673 = p__26672;
var v = cljs.core.nth.call(null,vec__26673,(0),null);
var p = cljs.core.nth.call(null,vec__26673,(1),null);
var job = vec__26673;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24644__auto___26844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results){
return (function (state_26680){
var state_val_26681 = (state_26680[(1)]);
if((state_val_26681 === (1))){
var state_26680__$1 = state_26680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26680__$1,(2),res,v);
} else {
if((state_val_26681 === (2))){
var inst_26677 = (state_26680[(2)]);
var inst_26678 = cljs.core.async.close_BANG_.call(null,res);
var state_26680__$1 = (function (){var statearr_26682 = state_26680;
(statearr_26682[(7)] = inst_26677);

return statearr_26682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26680__$1,inst_26678);
} else {
return null;
}
}
});})(c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results))
;
return ((function (switch__24477__auto__,c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_26683 = [null,null,null,null,null,null,null,null];
(statearr_26683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__);

(statearr_26683[(1)] = (1));

return statearr_26683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1 = (function (state_26680){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26684){if((e26684 instanceof Object)){
var ex__24481__auto__ = e26684;
var statearr_26685_26845 = state_26680;
(statearr_26685_26845[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26846 = state_26680;
state_26680 = G__26846;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = function(state_26680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1.call(this,state_26680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results))
})();
var state__24646__auto__ = (function (){var statearr_26686 = f__24645__auto__.call(null);
(statearr_26686[(6)] = c__24644__auto___26844);

return statearr_26686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___26844,res,vec__26673,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26687){
var vec__26688 = p__26687;
var v = cljs.core.nth.call(null,vec__26688,(0),null);
var p = cljs.core.nth.call(null,vec__26688,(1),null);
var job = vec__26688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___26847 = n;
var __26848 = (0);
while(true){
if((__26848 < n__4607__auto___26847)){
var G__26691_26849 = type;
var G__26691_26850__$1 = (((G__26691_26849 instanceof cljs.core.Keyword))?G__26691_26849.fqn:null);
switch (G__26691_26850__$1) {
case "compute":
var c__24644__auto___26852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26848,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (__26848,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function (state_26704){
var state_val_26705 = (state_26704[(1)]);
if((state_val_26705 === (1))){
var state_26704__$1 = state_26704;
var statearr_26706_26853 = state_26704__$1;
(statearr_26706_26853[(2)] = null);

(statearr_26706_26853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (2))){
var state_26704__$1 = state_26704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26704__$1,(4),jobs);
} else {
if((state_val_26705 === (3))){
var inst_26702 = (state_26704[(2)]);
var state_26704__$1 = state_26704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26704__$1,inst_26702);
} else {
if((state_val_26705 === (4))){
var inst_26694 = (state_26704[(2)]);
var inst_26695 = process.call(null,inst_26694);
var state_26704__$1 = state_26704;
if(cljs.core.truth_(inst_26695)){
var statearr_26707_26854 = state_26704__$1;
(statearr_26707_26854[(1)] = (5));

} else {
var statearr_26708_26855 = state_26704__$1;
(statearr_26708_26855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (5))){
var state_26704__$1 = state_26704;
var statearr_26709_26856 = state_26704__$1;
(statearr_26709_26856[(2)] = null);

(statearr_26709_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (6))){
var state_26704__$1 = state_26704;
var statearr_26710_26857 = state_26704__$1;
(statearr_26710_26857[(2)] = null);

(statearr_26710_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26705 === (7))){
var inst_26700 = (state_26704[(2)]);
var state_26704__$1 = state_26704;
var statearr_26711_26858 = state_26704__$1;
(statearr_26711_26858[(2)] = inst_26700);

(statearr_26711_26858[(1)] = (3));


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
});})(__26848,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
;
return ((function (__26848,switch__24477__auto__,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_26712 = [null,null,null,null,null,null,null];
(statearr_26712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__);

(statearr_26712[(1)] = (1));

return statearr_26712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1 = (function (state_26704){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26713){if((e26713 instanceof Object)){
var ex__24481__auto__ = e26713;
var statearr_26714_26859 = state_26704;
(statearr_26714_26859[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26860 = state_26704;
state_26704 = G__26860;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = function(state_26704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1.call(this,state_26704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__;
})()
;})(__26848,switch__24477__auto__,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
})();
var state__24646__auto__ = (function (){var statearr_26715 = f__24645__auto__.call(null);
(statearr_26715[(6)] = c__24644__auto___26852);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(__26848,c__24644__auto___26852,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
);


break;
case "async":
var c__24644__auto___26861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26848,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (__26848,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function (state_26728){
var state_val_26729 = (state_26728[(1)]);
if((state_val_26729 === (1))){
var state_26728__$1 = state_26728;
var statearr_26730_26862 = state_26728__$1;
(statearr_26730_26862[(2)] = null);

(statearr_26730_26862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (2))){
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26728__$1,(4),jobs);
} else {
if((state_val_26729 === (3))){
var inst_26726 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26728__$1,inst_26726);
} else {
if((state_val_26729 === (4))){
var inst_26718 = (state_26728[(2)]);
var inst_26719 = async.call(null,inst_26718);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26719)){
var statearr_26731_26863 = state_26728__$1;
(statearr_26731_26863[(1)] = (5));

} else {
var statearr_26732_26864 = state_26728__$1;
(statearr_26732_26864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (5))){
var state_26728__$1 = state_26728;
var statearr_26733_26865 = state_26728__$1;
(statearr_26733_26865[(2)] = null);

(statearr_26733_26865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (6))){
var state_26728__$1 = state_26728;
var statearr_26734_26866 = state_26728__$1;
(statearr_26734_26866[(2)] = null);

(statearr_26734_26866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (7))){
var inst_26724 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26735_26867 = state_26728__$1;
(statearr_26735_26867[(2)] = inst_26724);

(statearr_26735_26867[(1)] = (3));


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
});})(__26848,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
;
return ((function (__26848,switch__24477__auto__,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_26736 = [null,null,null,null,null,null,null];
(statearr_26736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__);

(statearr_26736[(1)] = (1));

return statearr_26736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1 = (function (state_26728){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object)){
var ex__24481__auto__ = e26737;
var statearr_26738_26868 = state_26728;
(statearr_26738_26868[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26869 = state_26728;
state_26728 = G__26869;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = function(state_26728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1.call(this,state_26728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__;
})()
;})(__26848,switch__24477__auto__,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
})();
var state__24646__auto__ = (function (){var statearr_26739 = f__24645__auto__.call(null);
(statearr_26739[(6)] = c__24644__auto___26861);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(__26848,c__24644__auto___26861,G__26691_26849,G__26691_26850__$1,n__4607__auto___26847,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26691_26850__$1)].join('')));

}

var G__26870 = (__26848 + (1));
__26848 = G__26870;
continue;
} else {
}
break;
}

var c__24644__auto___26871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___26871,jobs,results,process,async){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___26871,jobs,results,process,async){
return (function (state_26761){
var state_val_26762 = (state_26761[(1)]);
if((state_val_26762 === (7))){
var inst_26757 = (state_26761[(2)]);
var state_26761__$1 = state_26761;
var statearr_26763_26872 = state_26761__$1;
(statearr_26763_26872[(2)] = inst_26757);

(statearr_26763_26872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26762 === (1))){
var state_26761__$1 = state_26761;
var statearr_26764_26873 = state_26761__$1;
(statearr_26764_26873[(2)] = null);

(statearr_26764_26873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26762 === (4))){
var inst_26742 = (state_26761[(7)]);
var inst_26742__$1 = (state_26761[(2)]);
var inst_26743 = (inst_26742__$1 == null);
var state_26761__$1 = (function (){var statearr_26765 = state_26761;
(statearr_26765[(7)] = inst_26742__$1);

return statearr_26765;
})();
if(cljs.core.truth_(inst_26743)){
var statearr_26766_26874 = state_26761__$1;
(statearr_26766_26874[(1)] = (5));

} else {
var statearr_26767_26875 = state_26761__$1;
(statearr_26767_26875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26762 === (6))){
var inst_26742 = (state_26761[(7)]);
var inst_26747 = (state_26761[(8)]);
var inst_26747__$1 = cljs.core.async.chan.call(null,(1));
var inst_26748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26749 = [inst_26742,inst_26747__$1];
var inst_26750 = (new cljs.core.PersistentVector(null,2,(5),inst_26748,inst_26749,null));
var state_26761__$1 = (function (){var statearr_26768 = state_26761;
(statearr_26768[(8)] = inst_26747__$1);

return statearr_26768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26761__$1,(8),jobs,inst_26750);
} else {
if((state_val_26762 === (3))){
var inst_26759 = (state_26761[(2)]);
var state_26761__$1 = state_26761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26761__$1,inst_26759);
} else {
if((state_val_26762 === (2))){
var state_26761__$1 = state_26761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26761__$1,(4),from);
} else {
if((state_val_26762 === (9))){
var inst_26754 = (state_26761[(2)]);
var state_26761__$1 = (function (){var statearr_26769 = state_26761;
(statearr_26769[(9)] = inst_26754);

return statearr_26769;
})();
var statearr_26770_26876 = state_26761__$1;
(statearr_26770_26876[(2)] = null);

(statearr_26770_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26762 === (5))){
var inst_26745 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26761__$1 = state_26761;
var statearr_26771_26877 = state_26761__$1;
(statearr_26771_26877[(2)] = inst_26745);

(statearr_26771_26877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26762 === (8))){
var inst_26747 = (state_26761[(8)]);
var inst_26752 = (state_26761[(2)]);
var state_26761__$1 = (function (){var statearr_26772 = state_26761;
(statearr_26772[(10)] = inst_26752);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26761__$1,(9),results,inst_26747);
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
});})(c__24644__auto___26871,jobs,results,process,async))
;
return ((function (switch__24477__auto__,c__24644__auto___26871,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_26773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__);

(statearr_26773[(1)] = (1));

return statearr_26773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1 = (function (state_26761){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26774){if((e26774 instanceof Object)){
var ex__24481__auto__ = e26774;
var statearr_26775_26878 = state_26761;
(statearr_26775_26878[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_26761;
state_26761 = G__26879;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = function(state_26761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1.call(this,state_26761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___26871,jobs,results,process,async))
})();
var state__24646__auto__ = (function (){var statearr_26776 = f__24645__auto__.call(null);
(statearr_26776[(6)] = c__24644__auto___26871);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___26871,jobs,results,process,async))
);


var c__24644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto__,jobs,results,process,async){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto__,jobs,results,process,async){
return (function (state_26814){
var state_val_26815 = (state_26814[(1)]);
if((state_val_26815 === (7))){
var inst_26810 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
var statearr_26816_26880 = state_26814__$1;
(statearr_26816_26880[(2)] = inst_26810);

(statearr_26816_26880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (20))){
var state_26814__$1 = state_26814;
var statearr_26817_26881 = state_26814__$1;
(statearr_26817_26881[(2)] = null);

(statearr_26817_26881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (1))){
var state_26814__$1 = state_26814;
var statearr_26818_26882 = state_26814__$1;
(statearr_26818_26882[(2)] = null);

(statearr_26818_26882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (4))){
var inst_26779 = (state_26814[(7)]);
var inst_26779__$1 = (state_26814[(2)]);
var inst_26780 = (inst_26779__$1 == null);
var state_26814__$1 = (function (){var statearr_26819 = state_26814;
(statearr_26819[(7)] = inst_26779__$1);

return statearr_26819;
})();
if(cljs.core.truth_(inst_26780)){
var statearr_26820_26883 = state_26814__$1;
(statearr_26820_26883[(1)] = (5));

} else {
var statearr_26821_26884 = state_26814__$1;
(statearr_26821_26884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (15))){
var inst_26792 = (state_26814[(8)]);
var state_26814__$1 = state_26814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26814__$1,(18),to,inst_26792);
} else {
if((state_val_26815 === (21))){
var inst_26805 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
var statearr_26822_26885 = state_26814__$1;
(statearr_26822_26885[(2)] = inst_26805);

(statearr_26822_26885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (13))){
var inst_26807 = (state_26814[(2)]);
var state_26814__$1 = (function (){var statearr_26823 = state_26814;
(statearr_26823[(9)] = inst_26807);

return statearr_26823;
})();
var statearr_26824_26886 = state_26814__$1;
(statearr_26824_26886[(2)] = null);

(statearr_26824_26886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (6))){
var inst_26779 = (state_26814[(7)]);
var state_26814__$1 = state_26814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26814__$1,(11),inst_26779);
} else {
if((state_val_26815 === (17))){
var inst_26800 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
if(cljs.core.truth_(inst_26800)){
var statearr_26825_26887 = state_26814__$1;
(statearr_26825_26887[(1)] = (19));

} else {
var statearr_26826_26888 = state_26814__$1;
(statearr_26826_26888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (3))){
var inst_26812 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26814__$1,inst_26812);
} else {
if((state_val_26815 === (12))){
var inst_26789 = (state_26814[(10)]);
var state_26814__$1 = state_26814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26814__$1,(14),inst_26789);
} else {
if((state_val_26815 === (2))){
var state_26814__$1 = state_26814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26814__$1,(4),results);
} else {
if((state_val_26815 === (19))){
var state_26814__$1 = state_26814;
var statearr_26827_26889 = state_26814__$1;
(statearr_26827_26889[(2)] = null);

(statearr_26827_26889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (11))){
var inst_26789 = (state_26814[(2)]);
var state_26814__$1 = (function (){var statearr_26828 = state_26814;
(statearr_26828[(10)] = inst_26789);

return statearr_26828;
})();
var statearr_26829_26890 = state_26814__$1;
(statearr_26829_26890[(2)] = null);

(statearr_26829_26890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (9))){
var state_26814__$1 = state_26814;
var statearr_26830_26891 = state_26814__$1;
(statearr_26830_26891[(2)] = null);

(statearr_26830_26891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (5))){
var state_26814__$1 = state_26814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26831_26892 = state_26814__$1;
(statearr_26831_26892[(1)] = (8));

} else {
var statearr_26832_26893 = state_26814__$1;
(statearr_26832_26893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (14))){
var inst_26792 = (state_26814[(8)]);
var inst_26794 = (state_26814[(11)]);
var inst_26792__$1 = (state_26814[(2)]);
var inst_26793 = (inst_26792__$1 == null);
var inst_26794__$1 = cljs.core.not.call(null,inst_26793);
var state_26814__$1 = (function (){var statearr_26833 = state_26814;
(statearr_26833[(8)] = inst_26792__$1);

(statearr_26833[(11)] = inst_26794__$1);

return statearr_26833;
})();
if(inst_26794__$1){
var statearr_26834_26894 = state_26814__$1;
(statearr_26834_26894[(1)] = (15));

} else {
var statearr_26835_26895 = state_26814__$1;
(statearr_26835_26895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (16))){
var inst_26794 = (state_26814[(11)]);
var state_26814__$1 = state_26814;
var statearr_26836_26896 = state_26814__$1;
(statearr_26836_26896[(2)] = inst_26794);

(statearr_26836_26896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (10))){
var inst_26786 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
var statearr_26837_26897 = state_26814__$1;
(statearr_26837_26897[(2)] = inst_26786);

(statearr_26837_26897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (18))){
var inst_26797 = (state_26814[(2)]);
var state_26814__$1 = state_26814;
var statearr_26838_26898 = state_26814__$1;
(statearr_26838_26898[(2)] = inst_26797);

(statearr_26838_26898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26815 === (8))){
var inst_26783 = cljs.core.async.close_BANG_.call(null,to);
var state_26814__$1 = state_26814;
var statearr_26839_26899 = state_26814__$1;
(statearr_26839_26899[(2)] = inst_26783);

(statearr_26839_26899[(1)] = (10));


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
}
}
}
}
});})(c__24644__auto__,jobs,results,process,async))
;
return ((function (switch__24477__auto__,c__24644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_26840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__);

(statearr_26840[(1)] = (1));

return statearr_26840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1 = (function (state_26814){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26841){if((e26841 instanceof Object)){
var ex__24481__auto__ = e26841;
var statearr_26842_26900 = state_26814;
(statearr_26842_26900[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26901 = state_26814;
state_26814 = G__26901;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__ = function(state_26814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1.call(this,state_26814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto__,jobs,results,process,async))
})();
var state__24646__auto__ = (function (){var statearr_26843 = f__24645__auto__.call(null);
(statearr_26843[(6)] = c__24644__auto__);

return statearr_26843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto__,jobs,results,process,async))
);

return c__24644__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26903 = arguments.length;
switch (G__26903) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26906 = arguments.length;
switch (G__26906) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26909 = arguments.length;
switch (G__26909) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24644__auto___26958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___26958,tc,fc){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___26958,tc,fc){
return (function (state_26935){
var state_val_26936 = (state_26935[(1)]);
if((state_val_26936 === (7))){
var inst_26931 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
var statearr_26937_26959 = state_26935__$1;
(statearr_26937_26959[(2)] = inst_26931);

(statearr_26937_26959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (1))){
var state_26935__$1 = state_26935;
var statearr_26938_26960 = state_26935__$1;
(statearr_26938_26960[(2)] = null);

(statearr_26938_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (4))){
var inst_26912 = (state_26935[(7)]);
var inst_26912__$1 = (state_26935[(2)]);
var inst_26913 = (inst_26912__$1 == null);
var state_26935__$1 = (function (){var statearr_26939 = state_26935;
(statearr_26939[(7)] = inst_26912__$1);

return statearr_26939;
})();
if(cljs.core.truth_(inst_26913)){
var statearr_26940_26961 = state_26935__$1;
(statearr_26940_26961[(1)] = (5));

} else {
var statearr_26941_26962 = state_26935__$1;
(statearr_26941_26962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (13))){
var state_26935__$1 = state_26935;
var statearr_26942_26963 = state_26935__$1;
(statearr_26942_26963[(2)] = null);

(statearr_26942_26963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (6))){
var inst_26912 = (state_26935[(7)]);
var inst_26918 = p.call(null,inst_26912);
var state_26935__$1 = state_26935;
if(cljs.core.truth_(inst_26918)){
var statearr_26943_26964 = state_26935__$1;
(statearr_26943_26964[(1)] = (9));

} else {
var statearr_26944_26965 = state_26935__$1;
(statearr_26944_26965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (3))){
var inst_26933 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26935__$1,inst_26933);
} else {
if((state_val_26936 === (12))){
var state_26935__$1 = state_26935;
var statearr_26945_26966 = state_26935__$1;
(statearr_26945_26966[(2)] = null);

(statearr_26945_26966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (2))){
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26935__$1,(4),ch);
} else {
if((state_val_26936 === (11))){
var inst_26912 = (state_26935[(7)]);
var inst_26922 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26935__$1,(8),inst_26922,inst_26912);
} else {
if((state_val_26936 === (9))){
var state_26935__$1 = state_26935;
var statearr_26946_26967 = state_26935__$1;
(statearr_26946_26967[(2)] = tc);

(statearr_26946_26967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (5))){
var inst_26915 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26916 = cljs.core.async.close_BANG_.call(null,fc);
var state_26935__$1 = (function (){var statearr_26947 = state_26935;
(statearr_26947[(8)] = inst_26915);

return statearr_26947;
})();
var statearr_26948_26968 = state_26935__$1;
(statearr_26948_26968[(2)] = inst_26916);

(statearr_26948_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (14))){
var inst_26929 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
var statearr_26949_26969 = state_26935__$1;
(statearr_26949_26969[(2)] = inst_26929);

(statearr_26949_26969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (10))){
var state_26935__$1 = state_26935;
var statearr_26950_26970 = state_26935__$1;
(statearr_26950_26970[(2)] = fc);

(statearr_26950_26970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (8))){
var inst_26924 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
if(cljs.core.truth_(inst_26924)){
var statearr_26951_26971 = state_26935__$1;
(statearr_26951_26971[(1)] = (12));

} else {
var statearr_26952_26972 = state_26935__$1;
(statearr_26952_26972[(1)] = (13));

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
});})(c__24644__auto___26958,tc,fc))
;
return ((function (switch__24477__auto__,c__24644__auto___26958,tc,fc){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_26953 = [null,null,null,null,null,null,null,null,null];
(statearr_26953[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_26953[(1)] = (1));

return statearr_26953;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_26935){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e26954){if((e26954 instanceof Object)){
var ex__24481__auto__ = e26954;
var statearr_26955_26973 = state_26935;
(statearr_26955_26973[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26974 = state_26935;
state_26935 = G__26974;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_26935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_26935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___26958,tc,fc))
})();
var state__24646__auto__ = (function (){var statearr_26956 = f__24645__auto__.call(null);
(statearr_26956[(6)] = c__24644__auto___26958);

return statearr_26956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___26958,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto__){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto__){
return (function (state_26995){
var state_val_26996 = (state_26995[(1)]);
if((state_val_26996 === (7))){
var inst_26991 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_26997_27015 = state_26995__$1;
(statearr_26997_27015[(2)] = inst_26991);

(statearr_26997_27015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (1))){
var inst_26975 = init;
var state_26995__$1 = (function (){var statearr_26998 = state_26995;
(statearr_26998[(7)] = inst_26975);

return statearr_26998;
})();
var statearr_26999_27016 = state_26995__$1;
(statearr_26999_27016[(2)] = null);

(statearr_26999_27016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (4))){
var inst_26978 = (state_26995[(8)]);
var inst_26978__$1 = (state_26995[(2)]);
var inst_26979 = (inst_26978__$1 == null);
var state_26995__$1 = (function (){var statearr_27000 = state_26995;
(statearr_27000[(8)] = inst_26978__$1);

return statearr_27000;
})();
if(cljs.core.truth_(inst_26979)){
var statearr_27001_27017 = state_26995__$1;
(statearr_27001_27017[(1)] = (5));

} else {
var statearr_27002_27018 = state_26995__$1;
(statearr_27002_27018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (6))){
var inst_26982 = (state_26995[(9)]);
var inst_26975 = (state_26995[(7)]);
var inst_26978 = (state_26995[(8)]);
var inst_26982__$1 = f.call(null,inst_26975,inst_26978);
var inst_26983 = cljs.core.reduced_QMARK_.call(null,inst_26982__$1);
var state_26995__$1 = (function (){var statearr_27003 = state_26995;
(statearr_27003[(9)] = inst_26982__$1);

return statearr_27003;
})();
if(inst_26983){
var statearr_27004_27019 = state_26995__$1;
(statearr_27004_27019[(1)] = (8));

} else {
var statearr_27005_27020 = state_26995__$1;
(statearr_27005_27020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (3))){
var inst_26993 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26995__$1,inst_26993);
} else {
if((state_val_26996 === (2))){
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26995__$1,(4),ch);
} else {
if((state_val_26996 === (9))){
var inst_26982 = (state_26995[(9)]);
var inst_26975 = inst_26982;
var state_26995__$1 = (function (){var statearr_27006 = state_26995;
(statearr_27006[(7)] = inst_26975);

return statearr_27006;
})();
var statearr_27007_27021 = state_26995__$1;
(statearr_27007_27021[(2)] = null);

(statearr_27007_27021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (5))){
var inst_26975 = (state_26995[(7)]);
var state_26995__$1 = state_26995;
var statearr_27008_27022 = state_26995__$1;
(statearr_27008_27022[(2)] = inst_26975);

(statearr_27008_27022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (10))){
var inst_26989 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_27009_27023 = state_26995__$1;
(statearr_27009_27023[(2)] = inst_26989);

(statearr_27009_27023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (8))){
var inst_26982 = (state_26995[(9)]);
var inst_26985 = cljs.core.deref.call(null,inst_26982);
var state_26995__$1 = state_26995;
var statearr_27010_27024 = state_26995__$1;
(statearr_27010_27024[(2)] = inst_26985);

(statearr_27010_27024[(1)] = (10));


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
});})(c__24644__auto__))
;
return ((function (switch__24477__auto__,c__24644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24478__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24478__auto____0 = (function (){
var statearr_27011 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27011[(0)] = cljs$core$async$reduce_$_state_machine__24478__auto__);

(statearr_27011[(1)] = (1));

return statearr_27011;
});
var cljs$core$async$reduce_$_state_machine__24478__auto____1 = (function (state_26995){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_26995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27012){if((e27012 instanceof Object)){
var ex__24481__auto__ = e27012;
var statearr_27013_27025 = state_26995;
(statearr_27013_27025[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27026 = state_26995;
state_26995 = G__27026;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24478__auto__ = function(state_26995){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24478__auto____1.call(this,state_26995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24478__auto____0;
cljs$core$async$reduce_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24478__auto____1;
return cljs$core$async$reduce_$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto__))
})();
var state__24646__auto__ = (function (){var statearr_27014 = f__24645__auto__.call(null);
(statearr_27014[(6)] = c__24644__auto__);

return statearr_27014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto__))
);

return c__24644__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto__,f__$1){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto__,f__$1){
return (function (state_27032){
var state_val_27033 = (state_27032[(1)]);
if((state_val_27033 === (1))){
var inst_27027 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27032__$1,(2),inst_27027);
} else {
if((state_val_27033 === (2))){
var inst_27029 = (state_27032[(2)]);
var inst_27030 = f__$1.call(null,inst_27029);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27032__$1,inst_27030);
} else {
return null;
}
}
});})(c__24644__auto__,f__$1))
;
return ((function (switch__24477__auto__,c__24644__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24478__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24478__auto____0 = (function (){
var statearr_27034 = [null,null,null,null,null,null,null];
(statearr_27034[(0)] = cljs$core$async$transduce_$_state_machine__24478__auto__);

(statearr_27034[(1)] = (1));

return statearr_27034;
});
var cljs$core$async$transduce_$_state_machine__24478__auto____1 = (function (state_27032){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27035){if((e27035 instanceof Object)){
var ex__24481__auto__ = e27035;
var statearr_27036_27038 = state_27032;
(statearr_27036_27038[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27039 = state_27032;
state_27032 = G__27039;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24478__auto__ = function(state_27032){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24478__auto____1.call(this,state_27032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24478__auto____0;
cljs$core$async$transduce_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24478__auto____1;
return cljs$core$async$transduce_$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto__,f__$1))
})();
var state__24646__auto__ = (function (){var statearr_27037 = f__24645__auto__.call(null);
(statearr_27037[(6)] = c__24644__auto__);

return statearr_27037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto__,f__$1))
);

return c__24644__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27041 = arguments.length;
switch (G__27041) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto__){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto__){
return (function (state_27066){
var state_val_27067 = (state_27066[(1)]);
if((state_val_27067 === (7))){
var inst_27048 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27068_27089 = state_27066__$1;
(statearr_27068_27089[(2)] = inst_27048);

(statearr_27068_27089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (1))){
var inst_27042 = cljs.core.seq.call(null,coll);
var inst_27043 = inst_27042;
var state_27066__$1 = (function (){var statearr_27069 = state_27066;
(statearr_27069[(7)] = inst_27043);

return statearr_27069;
})();
var statearr_27070_27090 = state_27066__$1;
(statearr_27070_27090[(2)] = null);

(statearr_27070_27090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (4))){
var inst_27043 = (state_27066[(7)]);
var inst_27046 = cljs.core.first.call(null,inst_27043);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27066__$1,(7),ch,inst_27046);
} else {
if((state_val_27067 === (13))){
var inst_27060 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27071_27091 = state_27066__$1;
(statearr_27071_27091[(2)] = inst_27060);

(statearr_27071_27091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (6))){
var inst_27051 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
if(cljs.core.truth_(inst_27051)){
var statearr_27072_27092 = state_27066__$1;
(statearr_27072_27092[(1)] = (8));

} else {
var statearr_27073_27093 = state_27066__$1;
(statearr_27073_27093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (3))){
var inst_27064 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27066__$1,inst_27064);
} else {
if((state_val_27067 === (12))){
var state_27066__$1 = state_27066;
var statearr_27074_27094 = state_27066__$1;
(statearr_27074_27094[(2)] = null);

(statearr_27074_27094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (2))){
var inst_27043 = (state_27066[(7)]);
var state_27066__$1 = state_27066;
if(cljs.core.truth_(inst_27043)){
var statearr_27075_27095 = state_27066__$1;
(statearr_27075_27095[(1)] = (4));

} else {
var statearr_27076_27096 = state_27066__$1;
(statearr_27076_27096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (11))){
var inst_27057 = cljs.core.async.close_BANG_.call(null,ch);
var state_27066__$1 = state_27066;
var statearr_27077_27097 = state_27066__$1;
(statearr_27077_27097[(2)] = inst_27057);

(statearr_27077_27097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (9))){
var state_27066__$1 = state_27066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27078_27098 = state_27066__$1;
(statearr_27078_27098[(1)] = (11));

} else {
var statearr_27079_27099 = state_27066__$1;
(statearr_27079_27099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (5))){
var inst_27043 = (state_27066[(7)]);
var state_27066__$1 = state_27066;
var statearr_27080_27100 = state_27066__$1;
(statearr_27080_27100[(2)] = inst_27043);

(statearr_27080_27100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (10))){
var inst_27062 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27081_27101 = state_27066__$1;
(statearr_27081_27101[(2)] = inst_27062);

(statearr_27081_27101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (8))){
var inst_27043 = (state_27066[(7)]);
var inst_27053 = cljs.core.next.call(null,inst_27043);
var inst_27043__$1 = inst_27053;
var state_27066__$1 = (function (){var statearr_27082 = state_27066;
(statearr_27082[(7)] = inst_27043__$1);

return statearr_27082;
})();
var statearr_27083_27102 = state_27066__$1;
(statearr_27083_27102[(2)] = null);

(statearr_27083_27102[(1)] = (2));


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
});})(c__24644__auto__))
;
return ((function (switch__24477__auto__,c__24644__auto__){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_27084 = [null,null,null,null,null,null,null,null];
(statearr_27084[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_27084[(1)] = (1));

return statearr_27084;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_27066){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27085){if((e27085 instanceof Object)){
var ex__24481__auto__ = e27085;
var statearr_27086_27103 = state_27066;
(statearr_27086_27103[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27104 = state_27066;
state_27066 = G__27104;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_27066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_27066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto__))
})();
var state__24646__auto__ = (function (){var statearr_27087 = f__24645__auto__.call(null);
(statearr_27087[(6)] = c__24644__auto__);

return statearr_27087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto__))
);

return c__24644__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27105 = (function (ch,cs,meta27106){
this.ch = ch;
this.cs = cs;
this.meta27106 = meta27106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27107,meta27106__$1){
var self__ = this;
var _27107__$1 = this;
return (new cljs.core.async.t_cljs$core$async27105(self__.ch,self__.cs,meta27106__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27107){
var self__ = this;
var _27107__$1 = this;
return self__.meta27106;
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27106","meta27106",-615342430,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27105";

cljs.core.async.t_cljs$core$async27105.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27105");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27105.
 */
cljs.core.async.__GT_t_cljs$core$async27105 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27105(ch__$1,cs__$1,meta27106){
return (new cljs.core.async.t_cljs$core$async27105(ch__$1,cs__$1,meta27106));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27105(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24644__auto___27327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27327,cs,m,dchan,dctr,done){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27327,cs,m,dchan,dctr,done){
return (function (state_27242){
var state_val_27243 = (state_27242[(1)]);
if((state_val_27243 === (7))){
var inst_27238 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27244_27328 = state_27242__$1;
(statearr_27244_27328[(2)] = inst_27238);

(statearr_27244_27328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (20))){
var inst_27141 = (state_27242[(7)]);
var inst_27153 = cljs.core.first.call(null,inst_27141);
var inst_27154 = cljs.core.nth.call(null,inst_27153,(0),null);
var inst_27155 = cljs.core.nth.call(null,inst_27153,(1),null);
var state_27242__$1 = (function (){var statearr_27245 = state_27242;
(statearr_27245[(8)] = inst_27154);

return statearr_27245;
})();
if(cljs.core.truth_(inst_27155)){
var statearr_27246_27329 = state_27242__$1;
(statearr_27246_27329[(1)] = (22));

} else {
var statearr_27247_27330 = state_27242__$1;
(statearr_27247_27330[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (27))){
var inst_27185 = (state_27242[(9)]);
var inst_27190 = (state_27242[(10)]);
var inst_27110 = (state_27242[(11)]);
var inst_27183 = (state_27242[(12)]);
var inst_27190__$1 = cljs.core._nth.call(null,inst_27183,inst_27185);
var inst_27191 = cljs.core.async.put_BANG_.call(null,inst_27190__$1,inst_27110,done);
var state_27242__$1 = (function (){var statearr_27248 = state_27242;
(statearr_27248[(10)] = inst_27190__$1);

return statearr_27248;
})();
if(cljs.core.truth_(inst_27191)){
var statearr_27249_27331 = state_27242__$1;
(statearr_27249_27331[(1)] = (30));

} else {
var statearr_27250_27332 = state_27242__$1;
(statearr_27250_27332[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (1))){
var state_27242__$1 = state_27242;
var statearr_27251_27333 = state_27242__$1;
(statearr_27251_27333[(2)] = null);

(statearr_27251_27333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (24))){
var inst_27141 = (state_27242[(7)]);
var inst_27160 = (state_27242[(2)]);
var inst_27161 = cljs.core.next.call(null,inst_27141);
var inst_27119 = inst_27161;
var inst_27120 = null;
var inst_27121 = (0);
var inst_27122 = (0);
var state_27242__$1 = (function (){var statearr_27252 = state_27242;
(statearr_27252[(13)] = inst_27119);

(statearr_27252[(14)] = inst_27160);

(statearr_27252[(15)] = inst_27121);

(statearr_27252[(16)] = inst_27120);

(statearr_27252[(17)] = inst_27122);

return statearr_27252;
})();
var statearr_27253_27334 = state_27242__$1;
(statearr_27253_27334[(2)] = null);

(statearr_27253_27334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (39))){
var state_27242__$1 = state_27242;
var statearr_27257_27335 = state_27242__$1;
(statearr_27257_27335[(2)] = null);

(statearr_27257_27335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (4))){
var inst_27110 = (state_27242[(11)]);
var inst_27110__$1 = (state_27242[(2)]);
var inst_27111 = (inst_27110__$1 == null);
var state_27242__$1 = (function (){var statearr_27258 = state_27242;
(statearr_27258[(11)] = inst_27110__$1);

return statearr_27258;
})();
if(cljs.core.truth_(inst_27111)){
var statearr_27259_27336 = state_27242__$1;
(statearr_27259_27336[(1)] = (5));

} else {
var statearr_27260_27337 = state_27242__$1;
(statearr_27260_27337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (15))){
var inst_27119 = (state_27242[(13)]);
var inst_27121 = (state_27242[(15)]);
var inst_27120 = (state_27242[(16)]);
var inst_27122 = (state_27242[(17)]);
var inst_27137 = (state_27242[(2)]);
var inst_27138 = (inst_27122 + (1));
var tmp27254 = inst_27119;
var tmp27255 = inst_27121;
var tmp27256 = inst_27120;
var inst_27119__$1 = tmp27254;
var inst_27120__$1 = tmp27256;
var inst_27121__$1 = tmp27255;
var inst_27122__$1 = inst_27138;
var state_27242__$1 = (function (){var statearr_27261 = state_27242;
(statearr_27261[(13)] = inst_27119__$1);

(statearr_27261[(15)] = inst_27121__$1);

(statearr_27261[(16)] = inst_27120__$1);

(statearr_27261[(17)] = inst_27122__$1);

(statearr_27261[(18)] = inst_27137);

return statearr_27261;
})();
var statearr_27262_27338 = state_27242__$1;
(statearr_27262_27338[(2)] = null);

(statearr_27262_27338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (21))){
var inst_27164 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27266_27339 = state_27242__$1;
(statearr_27266_27339[(2)] = inst_27164);

(statearr_27266_27339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (31))){
var inst_27190 = (state_27242[(10)]);
var inst_27194 = done.call(null,null);
var inst_27195 = cljs.core.async.untap_STAR_.call(null,m,inst_27190);
var state_27242__$1 = (function (){var statearr_27267 = state_27242;
(statearr_27267[(19)] = inst_27194);

return statearr_27267;
})();
var statearr_27268_27340 = state_27242__$1;
(statearr_27268_27340[(2)] = inst_27195);

(statearr_27268_27340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (32))){
var inst_27182 = (state_27242[(20)]);
var inst_27185 = (state_27242[(9)]);
var inst_27184 = (state_27242[(21)]);
var inst_27183 = (state_27242[(12)]);
var inst_27197 = (state_27242[(2)]);
var inst_27198 = (inst_27185 + (1));
var tmp27263 = inst_27182;
var tmp27264 = inst_27184;
var tmp27265 = inst_27183;
var inst_27182__$1 = tmp27263;
var inst_27183__$1 = tmp27265;
var inst_27184__$1 = tmp27264;
var inst_27185__$1 = inst_27198;
var state_27242__$1 = (function (){var statearr_27269 = state_27242;
(statearr_27269[(22)] = inst_27197);

(statearr_27269[(20)] = inst_27182__$1);

(statearr_27269[(9)] = inst_27185__$1);

(statearr_27269[(21)] = inst_27184__$1);

(statearr_27269[(12)] = inst_27183__$1);

return statearr_27269;
})();
var statearr_27270_27341 = state_27242__$1;
(statearr_27270_27341[(2)] = null);

(statearr_27270_27341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (40))){
var inst_27210 = (state_27242[(23)]);
var inst_27214 = done.call(null,null);
var inst_27215 = cljs.core.async.untap_STAR_.call(null,m,inst_27210);
var state_27242__$1 = (function (){var statearr_27271 = state_27242;
(statearr_27271[(24)] = inst_27214);

return statearr_27271;
})();
var statearr_27272_27342 = state_27242__$1;
(statearr_27272_27342[(2)] = inst_27215);

(statearr_27272_27342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (33))){
var inst_27201 = (state_27242[(25)]);
var inst_27203 = cljs.core.chunked_seq_QMARK_.call(null,inst_27201);
var state_27242__$1 = state_27242;
if(inst_27203){
var statearr_27273_27343 = state_27242__$1;
(statearr_27273_27343[(1)] = (36));

} else {
var statearr_27274_27344 = state_27242__$1;
(statearr_27274_27344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (13))){
var inst_27131 = (state_27242[(26)]);
var inst_27134 = cljs.core.async.close_BANG_.call(null,inst_27131);
var state_27242__$1 = state_27242;
var statearr_27275_27345 = state_27242__$1;
(statearr_27275_27345[(2)] = inst_27134);

(statearr_27275_27345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (22))){
var inst_27154 = (state_27242[(8)]);
var inst_27157 = cljs.core.async.close_BANG_.call(null,inst_27154);
var state_27242__$1 = state_27242;
var statearr_27276_27346 = state_27242__$1;
(statearr_27276_27346[(2)] = inst_27157);

(statearr_27276_27346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (36))){
var inst_27201 = (state_27242[(25)]);
var inst_27205 = cljs.core.chunk_first.call(null,inst_27201);
var inst_27206 = cljs.core.chunk_rest.call(null,inst_27201);
var inst_27207 = cljs.core.count.call(null,inst_27205);
var inst_27182 = inst_27206;
var inst_27183 = inst_27205;
var inst_27184 = inst_27207;
var inst_27185 = (0);
var state_27242__$1 = (function (){var statearr_27277 = state_27242;
(statearr_27277[(20)] = inst_27182);

(statearr_27277[(9)] = inst_27185);

(statearr_27277[(21)] = inst_27184);

(statearr_27277[(12)] = inst_27183);

return statearr_27277;
})();
var statearr_27278_27347 = state_27242__$1;
(statearr_27278_27347[(2)] = null);

(statearr_27278_27347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (41))){
var inst_27201 = (state_27242[(25)]);
var inst_27217 = (state_27242[(2)]);
var inst_27218 = cljs.core.next.call(null,inst_27201);
var inst_27182 = inst_27218;
var inst_27183 = null;
var inst_27184 = (0);
var inst_27185 = (0);
var state_27242__$1 = (function (){var statearr_27279 = state_27242;
(statearr_27279[(27)] = inst_27217);

(statearr_27279[(20)] = inst_27182);

(statearr_27279[(9)] = inst_27185);

(statearr_27279[(21)] = inst_27184);

(statearr_27279[(12)] = inst_27183);

return statearr_27279;
})();
var statearr_27280_27348 = state_27242__$1;
(statearr_27280_27348[(2)] = null);

(statearr_27280_27348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (43))){
var state_27242__$1 = state_27242;
var statearr_27281_27349 = state_27242__$1;
(statearr_27281_27349[(2)] = null);

(statearr_27281_27349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (29))){
var inst_27226 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27282_27350 = state_27242__$1;
(statearr_27282_27350[(2)] = inst_27226);

(statearr_27282_27350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (44))){
var inst_27235 = (state_27242[(2)]);
var state_27242__$1 = (function (){var statearr_27283 = state_27242;
(statearr_27283[(28)] = inst_27235);

return statearr_27283;
})();
var statearr_27284_27351 = state_27242__$1;
(statearr_27284_27351[(2)] = null);

(statearr_27284_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (6))){
var inst_27174 = (state_27242[(29)]);
var inst_27173 = cljs.core.deref.call(null,cs);
var inst_27174__$1 = cljs.core.keys.call(null,inst_27173);
var inst_27175 = cljs.core.count.call(null,inst_27174__$1);
var inst_27176 = cljs.core.reset_BANG_.call(null,dctr,inst_27175);
var inst_27181 = cljs.core.seq.call(null,inst_27174__$1);
var inst_27182 = inst_27181;
var inst_27183 = null;
var inst_27184 = (0);
var inst_27185 = (0);
var state_27242__$1 = (function (){var statearr_27285 = state_27242;
(statearr_27285[(20)] = inst_27182);

(statearr_27285[(9)] = inst_27185);

(statearr_27285[(29)] = inst_27174__$1);

(statearr_27285[(21)] = inst_27184);

(statearr_27285[(30)] = inst_27176);

(statearr_27285[(12)] = inst_27183);

return statearr_27285;
})();
var statearr_27286_27352 = state_27242__$1;
(statearr_27286_27352[(2)] = null);

(statearr_27286_27352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (28))){
var inst_27182 = (state_27242[(20)]);
var inst_27201 = (state_27242[(25)]);
var inst_27201__$1 = cljs.core.seq.call(null,inst_27182);
var state_27242__$1 = (function (){var statearr_27287 = state_27242;
(statearr_27287[(25)] = inst_27201__$1);

return statearr_27287;
})();
if(inst_27201__$1){
var statearr_27288_27353 = state_27242__$1;
(statearr_27288_27353[(1)] = (33));

} else {
var statearr_27289_27354 = state_27242__$1;
(statearr_27289_27354[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (25))){
var inst_27185 = (state_27242[(9)]);
var inst_27184 = (state_27242[(21)]);
var inst_27187 = (inst_27185 < inst_27184);
var inst_27188 = inst_27187;
var state_27242__$1 = state_27242;
if(cljs.core.truth_(inst_27188)){
var statearr_27290_27355 = state_27242__$1;
(statearr_27290_27355[(1)] = (27));

} else {
var statearr_27291_27356 = state_27242__$1;
(statearr_27291_27356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (34))){
var state_27242__$1 = state_27242;
var statearr_27292_27357 = state_27242__$1;
(statearr_27292_27357[(2)] = null);

(statearr_27292_27357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (17))){
var state_27242__$1 = state_27242;
var statearr_27293_27358 = state_27242__$1;
(statearr_27293_27358[(2)] = null);

(statearr_27293_27358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (3))){
var inst_27240 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27242__$1,inst_27240);
} else {
if((state_val_27243 === (12))){
var inst_27169 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27294_27359 = state_27242__$1;
(statearr_27294_27359[(2)] = inst_27169);

(statearr_27294_27359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (2))){
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27242__$1,(4),ch);
} else {
if((state_val_27243 === (23))){
var state_27242__$1 = state_27242;
var statearr_27295_27360 = state_27242__$1;
(statearr_27295_27360[(2)] = null);

(statearr_27295_27360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (35))){
var inst_27224 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27296_27361 = state_27242__$1;
(statearr_27296_27361[(2)] = inst_27224);

(statearr_27296_27361[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (19))){
var inst_27141 = (state_27242[(7)]);
var inst_27145 = cljs.core.chunk_first.call(null,inst_27141);
var inst_27146 = cljs.core.chunk_rest.call(null,inst_27141);
var inst_27147 = cljs.core.count.call(null,inst_27145);
var inst_27119 = inst_27146;
var inst_27120 = inst_27145;
var inst_27121 = inst_27147;
var inst_27122 = (0);
var state_27242__$1 = (function (){var statearr_27297 = state_27242;
(statearr_27297[(13)] = inst_27119);

(statearr_27297[(15)] = inst_27121);

(statearr_27297[(16)] = inst_27120);

(statearr_27297[(17)] = inst_27122);

return statearr_27297;
})();
var statearr_27298_27362 = state_27242__$1;
(statearr_27298_27362[(2)] = null);

(statearr_27298_27362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (11))){
var inst_27119 = (state_27242[(13)]);
var inst_27141 = (state_27242[(7)]);
var inst_27141__$1 = cljs.core.seq.call(null,inst_27119);
var state_27242__$1 = (function (){var statearr_27299 = state_27242;
(statearr_27299[(7)] = inst_27141__$1);

return statearr_27299;
})();
if(inst_27141__$1){
var statearr_27300_27363 = state_27242__$1;
(statearr_27300_27363[(1)] = (16));

} else {
var statearr_27301_27364 = state_27242__$1;
(statearr_27301_27364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (9))){
var inst_27171 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27302_27365 = state_27242__$1;
(statearr_27302_27365[(2)] = inst_27171);

(statearr_27302_27365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (5))){
var inst_27117 = cljs.core.deref.call(null,cs);
var inst_27118 = cljs.core.seq.call(null,inst_27117);
var inst_27119 = inst_27118;
var inst_27120 = null;
var inst_27121 = (0);
var inst_27122 = (0);
var state_27242__$1 = (function (){var statearr_27303 = state_27242;
(statearr_27303[(13)] = inst_27119);

(statearr_27303[(15)] = inst_27121);

(statearr_27303[(16)] = inst_27120);

(statearr_27303[(17)] = inst_27122);

return statearr_27303;
})();
var statearr_27304_27366 = state_27242__$1;
(statearr_27304_27366[(2)] = null);

(statearr_27304_27366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (14))){
var state_27242__$1 = state_27242;
var statearr_27305_27367 = state_27242__$1;
(statearr_27305_27367[(2)] = null);

(statearr_27305_27367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (45))){
var inst_27232 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27306_27368 = state_27242__$1;
(statearr_27306_27368[(2)] = inst_27232);

(statearr_27306_27368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (26))){
var inst_27174 = (state_27242[(29)]);
var inst_27228 = (state_27242[(2)]);
var inst_27229 = cljs.core.seq.call(null,inst_27174);
var state_27242__$1 = (function (){var statearr_27307 = state_27242;
(statearr_27307[(31)] = inst_27228);

return statearr_27307;
})();
if(inst_27229){
var statearr_27308_27369 = state_27242__$1;
(statearr_27308_27369[(1)] = (42));

} else {
var statearr_27309_27370 = state_27242__$1;
(statearr_27309_27370[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (16))){
var inst_27141 = (state_27242[(7)]);
var inst_27143 = cljs.core.chunked_seq_QMARK_.call(null,inst_27141);
var state_27242__$1 = state_27242;
if(inst_27143){
var statearr_27310_27371 = state_27242__$1;
(statearr_27310_27371[(1)] = (19));

} else {
var statearr_27311_27372 = state_27242__$1;
(statearr_27311_27372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (38))){
var inst_27221 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27312_27373 = state_27242__$1;
(statearr_27312_27373[(2)] = inst_27221);

(statearr_27312_27373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (30))){
var state_27242__$1 = state_27242;
var statearr_27313_27374 = state_27242__$1;
(statearr_27313_27374[(2)] = null);

(statearr_27313_27374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (10))){
var inst_27120 = (state_27242[(16)]);
var inst_27122 = (state_27242[(17)]);
var inst_27130 = cljs.core._nth.call(null,inst_27120,inst_27122);
var inst_27131 = cljs.core.nth.call(null,inst_27130,(0),null);
var inst_27132 = cljs.core.nth.call(null,inst_27130,(1),null);
var state_27242__$1 = (function (){var statearr_27314 = state_27242;
(statearr_27314[(26)] = inst_27131);

return statearr_27314;
})();
if(cljs.core.truth_(inst_27132)){
var statearr_27315_27375 = state_27242__$1;
(statearr_27315_27375[(1)] = (13));

} else {
var statearr_27316_27376 = state_27242__$1;
(statearr_27316_27376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (18))){
var inst_27167 = (state_27242[(2)]);
var state_27242__$1 = state_27242;
var statearr_27317_27377 = state_27242__$1;
(statearr_27317_27377[(2)] = inst_27167);

(statearr_27317_27377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (42))){
var state_27242__$1 = state_27242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27242__$1,(45),dchan);
} else {
if((state_val_27243 === (37))){
var inst_27201 = (state_27242[(25)]);
var inst_27110 = (state_27242[(11)]);
var inst_27210 = (state_27242[(23)]);
var inst_27210__$1 = cljs.core.first.call(null,inst_27201);
var inst_27211 = cljs.core.async.put_BANG_.call(null,inst_27210__$1,inst_27110,done);
var state_27242__$1 = (function (){var statearr_27318 = state_27242;
(statearr_27318[(23)] = inst_27210__$1);

return statearr_27318;
})();
if(cljs.core.truth_(inst_27211)){
var statearr_27319_27378 = state_27242__$1;
(statearr_27319_27378[(1)] = (39));

} else {
var statearr_27320_27379 = state_27242__$1;
(statearr_27320_27379[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27243 === (8))){
var inst_27121 = (state_27242[(15)]);
var inst_27122 = (state_27242[(17)]);
var inst_27124 = (inst_27122 < inst_27121);
var inst_27125 = inst_27124;
var state_27242__$1 = state_27242;
if(cljs.core.truth_(inst_27125)){
var statearr_27321_27380 = state_27242__$1;
(statearr_27321_27380[(1)] = (10));

} else {
var statearr_27322_27381 = state_27242__$1;
(statearr_27322_27381[(1)] = (11));

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
});})(c__24644__auto___27327,cs,m,dchan,dctr,done))
;
return ((function (switch__24477__auto__,c__24644__auto___27327,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24478__auto__ = null;
var cljs$core$async$mult_$_state_machine__24478__auto____0 = (function (){
var statearr_27323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27323[(0)] = cljs$core$async$mult_$_state_machine__24478__auto__);

(statearr_27323[(1)] = (1));

return statearr_27323;
});
var cljs$core$async$mult_$_state_machine__24478__auto____1 = (function (state_27242){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27324){if((e27324 instanceof Object)){
var ex__24481__auto__ = e27324;
var statearr_27325_27382 = state_27242;
(statearr_27325_27382[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27383 = state_27242;
state_27242 = G__27383;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24478__auto__ = function(state_27242){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24478__auto____1.call(this,state_27242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24478__auto____0;
cljs$core$async$mult_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24478__auto____1;
return cljs$core$async$mult_$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27327,cs,m,dchan,dctr,done))
})();
var state__24646__auto__ = (function (){var statearr_27326 = f__24645__auto__.call(null);
(statearr_27326[(6)] = c__24644__auto___27327);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27327,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27385 = arguments.length;
switch (G__27385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27397 = arguments.length;
var i__4731__auto___27398 = (0);
while(true){
if((i__4731__auto___27398 < len__4730__auto___27397)){
args__4736__auto__.push((arguments[i__4731__auto___27398]));

var G__27399 = (i__4731__auto___27398 + (1));
i__4731__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27391){
var map__27392 = p__27391;
var map__27392__$1 = (((((!((map__27392 == null))))?(((((map__27392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27392):map__27392);
var opts = map__27392__$1;
var statearr_27394_27400 = state;
(statearr_27394_27400[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__27392,map__27392__$1,opts){
return (function (val){
var statearr_27395_27401 = state;
(statearr_27395_27401[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27392,map__27392__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27396_27402 = state;
(statearr_27396_27402[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27387){
var G__27388 = cljs.core.first.call(null,seq27387);
var seq27387__$1 = cljs.core.next.call(null,seq27387);
var G__27389 = cljs.core.first.call(null,seq27387__$1);
var seq27387__$2 = cljs.core.next.call(null,seq27387__$1);
var G__27390 = cljs.core.first.call(null,seq27387__$2);
var seq27387__$3 = cljs.core.next.call(null,seq27387__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27388,G__27389,G__27390,seq27387__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27403 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27404){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27404 = meta27404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27405,meta27404__$1){
var self__ = this;
var _27405__$1 = this;
return (new cljs.core.async.t_cljs$core$async27403(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27404__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27405){
var self__ = this;
var _27405__$1 = this;
return self__.meta27404;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27404","meta27404",2118455434,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27403";

cljs.core.async.t_cljs$core$async27403.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27403");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27403.
 */
cljs.core.async.__GT_t_cljs$core$async27403 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27404){
return (new cljs.core.async.t_cljs$core$async27403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27404));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27403(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24644__auto___27567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27507){
var state_val_27508 = (state_27507[(1)]);
if((state_val_27508 === (7))){
var inst_27422 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27509_27568 = state_27507__$1;
(statearr_27509_27568[(2)] = inst_27422);

(statearr_27509_27568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (20))){
var inst_27434 = (state_27507[(7)]);
var state_27507__$1 = state_27507;
var statearr_27510_27569 = state_27507__$1;
(statearr_27510_27569[(2)] = inst_27434);

(statearr_27510_27569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (27))){
var state_27507__$1 = state_27507;
var statearr_27511_27570 = state_27507__$1;
(statearr_27511_27570[(2)] = null);

(statearr_27511_27570[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (1))){
var inst_27409 = (state_27507[(8)]);
var inst_27409__$1 = calc_state.call(null);
var inst_27411 = (inst_27409__$1 == null);
var inst_27412 = cljs.core.not.call(null,inst_27411);
var state_27507__$1 = (function (){var statearr_27512 = state_27507;
(statearr_27512[(8)] = inst_27409__$1);

return statearr_27512;
})();
if(inst_27412){
var statearr_27513_27571 = state_27507__$1;
(statearr_27513_27571[(1)] = (2));

} else {
var statearr_27514_27572 = state_27507__$1;
(statearr_27514_27572[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (24))){
var inst_27467 = (state_27507[(9)]);
var inst_27458 = (state_27507[(10)]);
var inst_27481 = (state_27507[(11)]);
var inst_27481__$1 = inst_27458.call(null,inst_27467);
var state_27507__$1 = (function (){var statearr_27515 = state_27507;
(statearr_27515[(11)] = inst_27481__$1);

return statearr_27515;
})();
if(cljs.core.truth_(inst_27481__$1)){
var statearr_27516_27573 = state_27507__$1;
(statearr_27516_27573[(1)] = (29));

} else {
var statearr_27517_27574 = state_27507__$1;
(statearr_27517_27574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (4))){
var inst_27425 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27425)){
var statearr_27518_27575 = state_27507__$1;
(statearr_27518_27575[(1)] = (8));

} else {
var statearr_27519_27576 = state_27507__$1;
(statearr_27519_27576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (15))){
var inst_27452 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27452)){
var statearr_27520_27577 = state_27507__$1;
(statearr_27520_27577[(1)] = (19));

} else {
var statearr_27521_27578 = state_27507__$1;
(statearr_27521_27578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (21))){
var inst_27457 = (state_27507[(12)]);
var inst_27457__$1 = (state_27507[(2)]);
var inst_27458 = cljs.core.get.call(null,inst_27457__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27459 = cljs.core.get.call(null,inst_27457__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27460 = cljs.core.get.call(null,inst_27457__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27507__$1 = (function (){var statearr_27522 = state_27507;
(statearr_27522[(12)] = inst_27457__$1);

(statearr_27522[(13)] = inst_27459);

(statearr_27522[(10)] = inst_27458);

return statearr_27522;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27507__$1,(22),inst_27460);
} else {
if((state_val_27508 === (31))){
var inst_27489 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27489)){
var statearr_27523_27579 = state_27507__$1;
(statearr_27523_27579[(1)] = (32));

} else {
var statearr_27524_27580 = state_27507__$1;
(statearr_27524_27580[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (32))){
var inst_27466 = (state_27507[(14)]);
var state_27507__$1 = state_27507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27507__$1,(35),out,inst_27466);
} else {
if((state_val_27508 === (33))){
var inst_27457 = (state_27507[(12)]);
var inst_27434 = inst_27457;
var state_27507__$1 = (function (){var statearr_27525 = state_27507;
(statearr_27525[(7)] = inst_27434);

return statearr_27525;
})();
var statearr_27526_27581 = state_27507__$1;
(statearr_27526_27581[(2)] = null);

(statearr_27526_27581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (13))){
var inst_27434 = (state_27507[(7)]);
var inst_27441 = inst_27434.cljs$lang$protocol_mask$partition0$;
var inst_27442 = (inst_27441 & (64));
var inst_27443 = inst_27434.cljs$core$ISeq$;
var inst_27444 = (cljs.core.PROTOCOL_SENTINEL === inst_27443);
var inst_27445 = ((inst_27442) || (inst_27444));
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27445)){
var statearr_27527_27582 = state_27507__$1;
(statearr_27527_27582[(1)] = (16));

} else {
var statearr_27528_27583 = state_27507__$1;
(statearr_27528_27583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (22))){
var inst_27467 = (state_27507[(9)]);
var inst_27466 = (state_27507[(14)]);
var inst_27465 = (state_27507[(2)]);
var inst_27466__$1 = cljs.core.nth.call(null,inst_27465,(0),null);
var inst_27467__$1 = cljs.core.nth.call(null,inst_27465,(1),null);
var inst_27468 = (inst_27466__$1 == null);
var inst_27469 = cljs.core._EQ_.call(null,inst_27467__$1,change);
var inst_27470 = ((inst_27468) || (inst_27469));
var state_27507__$1 = (function (){var statearr_27529 = state_27507;
(statearr_27529[(9)] = inst_27467__$1);

(statearr_27529[(14)] = inst_27466__$1);

return statearr_27529;
})();
if(cljs.core.truth_(inst_27470)){
var statearr_27530_27584 = state_27507__$1;
(statearr_27530_27584[(1)] = (23));

} else {
var statearr_27531_27585 = state_27507__$1;
(statearr_27531_27585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (36))){
var inst_27457 = (state_27507[(12)]);
var inst_27434 = inst_27457;
var state_27507__$1 = (function (){var statearr_27532 = state_27507;
(statearr_27532[(7)] = inst_27434);

return statearr_27532;
})();
var statearr_27533_27586 = state_27507__$1;
(statearr_27533_27586[(2)] = null);

(statearr_27533_27586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (29))){
var inst_27481 = (state_27507[(11)]);
var state_27507__$1 = state_27507;
var statearr_27534_27587 = state_27507__$1;
(statearr_27534_27587[(2)] = inst_27481);

(statearr_27534_27587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (6))){
var state_27507__$1 = state_27507;
var statearr_27535_27588 = state_27507__$1;
(statearr_27535_27588[(2)] = false);

(statearr_27535_27588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (28))){
var inst_27477 = (state_27507[(2)]);
var inst_27478 = calc_state.call(null);
var inst_27434 = inst_27478;
var state_27507__$1 = (function (){var statearr_27536 = state_27507;
(statearr_27536[(15)] = inst_27477);

(statearr_27536[(7)] = inst_27434);

return statearr_27536;
})();
var statearr_27537_27589 = state_27507__$1;
(statearr_27537_27589[(2)] = null);

(statearr_27537_27589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (25))){
var inst_27503 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27538_27590 = state_27507__$1;
(statearr_27538_27590[(2)] = inst_27503);

(statearr_27538_27590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (34))){
var inst_27501 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27539_27591 = state_27507__$1;
(statearr_27539_27591[(2)] = inst_27501);

(statearr_27539_27591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (17))){
var state_27507__$1 = state_27507;
var statearr_27540_27592 = state_27507__$1;
(statearr_27540_27592[(2)] = false);

(statearr_27540_27592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (3))){
var state_27507__$1 = state_27507;
var statearr_27541_27593 = state_27507__$1;
(statearr_27541_27593[(2)] = false);

(statearr_27541_27593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (12))){
var inst_27505 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27507__$1,inst_27505);
} else {
if((state_val_27508 === (2))){
var inst_27409 = (state_27507[(8)]);
var inst_27414 = inst_27409.cljs$lang$protocol_mask$partition0$;
var inst_27415 = (inst_27414 & (64));
var inst_27416 = inst_27409.cljs$core$ISeq$;
var inst_27417 = (cljs.core.PROTOCOL_SENTINEL === inst_27416);
var inst_27418 = ((inst_27415) || (inst_27417));
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27418)){
var statearr_27542_27594 = state_27507__$1;
(statearr_27542_27594[(1)] = (5));

} else {
var statearr_27543_27595 = state_27507__$1;
(statearr_27543_27595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (23))){
var inst_27466 = (state_27507[(14)]);
var inst_27472 = (inst_27466 == null);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27472)){
var statearr_27544_27596 = state_27507__$1;
(statearr_27544_27596[(1)] = (26));

} else {
var statearr_27545_27597 = state_27507__$1;
(statearr_27545_27597[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (35))){
var inst_27492 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
if(cljs.core.truth_(inst_27492)){
var statearr_27546_27598 = state_27507__$1;
(statearr_27546_27598[(1)] = (36));

} else {
var statearr_27547_27599 = state_27507__$1;
(statearr_27547_27599[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (19))){
var inst_27434 = (state_27507[(7)]);
var inst_27454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27434);
var state_27507__$1 = state_27507;
var statearr_27548_27600 = state_27507__$1;
(statearr_27548_27600[(2)] = inst_27454);

(statearr_27548_27600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (11))){
var inst_27434 = (state_27507[(7)]);
var inst_27438 = (inst_27434 == null);
var inst_27439 = cljs.core.not.call(null,inst_27438);
var state_27507__$1 = state_27507;
if(inst_27439){
var statearr_27549_27601 = state_27507__$1;
(statearr_27549_27601[(1)] = (13));

} else {
var statearr_27550_27602 = state_27507__$1;
(statearr_27550_27602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (9))){
var inst_27409 = (state_27507[(8)]);
var state_27507__$1 = state_27507;
var statearr_27551_27603 = state_27507__$1;
(statearr_27551_27603[(2)] = inst_27409);

(statearr_27551_27603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (5))){
var state_27507__$1 = state_27507;
var statearr_27552_27604 = state_27507__$1;
(statearr_27552_27604[(2)] = true);

(statearr_27552_27604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (14))){
var state_27507__$1 = state_27507;
var statearr_27553_27605 = state_27507__$1;
(statearr_27553_27605[(2)] = false);

(statearr_27553_27605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (26))){
var inst_27467 = (state_27507[(9)]);
var inst_27474 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27467);
var state_27507__$1 = state_27507;
var statearr_27554_27606 = state_27507__$1;
(statearr_27554_27606[(2)] = inst_27474);

(statearr_27554_27606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (16))){
var state_27507__$1 = state_27507;
var statearr_27555_27607 = state_27507__$1;
(statearr_27555_27607[(2)] = true);

(statearr_27555_27607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (38))){
var inst_27497 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27556_27608 = state_27507__$1;
(statearr_27556_27608[(2)] = inst_27497);

(statearr_27556_27608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (30))){
var inst_27459 = (state_27507[(13)]);
var inst_27467 = (state_27507[(9)]);
var inst_27458 = (state_27507[(10)]);
var inst_27484 = cljs.core.empty_QMARK_.call(null,inst_27458);
var inst_27485 = inst_27459.call(null,inst_27467);
var inst_27486 = cljs.core.not.call(null,inst_27485);
var inst_27487 = ((inst_27484) && (inst_27486));
var state_27507__$1 = state_27507;
var statearr_27557_27609 = state_27507__$1;
(statearr_27557_27609[(2)] = inst_27487);

(statearr_27557_27609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (10))){
var inst_27409 = (state_27507[(8)]);
var inst_27430 = (state_27507[(2)]);
var inst_27431 = cljs.core.get.call(null,inst_27430,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27432 = cljs.core.get.call(null,inst_27430,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27433 = cljs.core.get.call(null,inst_27430,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27434 = inst_27409;
var state_27507__$1 = (function (){var statearr_27558 = state_27507;
(statearr_27558[(16)] = inst_27433);

(statearr_27558[(17)] = inst_27432);

(statearr_27558[(7)] = inst_27434);

(statearr_27558[(18)] = inst_27431);

return statearr_27558;
})();
var statearr_27559_27610 = state_27507__$1;
(statearr_27559_27610[(2)] = null);

(statearr_27559_27610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (18))){
var inst_27449 = (state_27507[(2)]);
var state_27507__$1 = state_27507;
var statearr_27560_27611 = state_27507__$1;
(statearr_27560_27611[(2)] = inst_27449);

(statearr_27560_27611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (37))){
var state_27507__$1 = state_27507;
var statearr_27561_27612 = state_27507__$1;
(statearr_27561_27612[(2)] = null);

(statearr_27561_27612[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27508 === (8))){
var inst_27409 = (state_27507[(8)]);
var inst_27427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27409);
var state_27507__$1 = state_27507;
var statearr_27562_27613 = state_27507__$1;
(statearr_27562_27613[(2)] = inst_27427);

(statearr_27562_27613[(1)] = (10));


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
});})(c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24477__auto__,c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24478__auto__ = null;
var cljs$core$async$mix_$_state_machine__24478__auto____0 = (function (){
var statearr_27563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27563[(0)] = cljs$core$async$mix_$_state_machine__24478__auto__);

(statearr_27563[(1)] = (1));

return statearr_27563;
});
var cljs$core$async$mix_$_state_machine__24478__auto____1 = (function (state_27507){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27564){if((e27564 instanceof Object)){
var ex__24481__auto__ = e27564;
var statearr_27565_27614 = state_27507;
(statearr_27565_27614[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27615 = state_27507;
state_27507 = G__27615;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24478__auto__ = function(state_27507){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24478__auto____1.call(this,state_27507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24478__auto____0;
cljs$core$async$mix_$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24478__auto____1;
return cljs$core$async$mix_$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24646__auto__ = (function (){var statearr_27566 = f__24645__auto__.call(null);
(statearr_27566[(6)] = c__24644__auto___27567);

return statearr_27566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27567,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27617 = arguments.length;
switch (G__27617) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27621 = arguments.length;
switch (G__27621) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__27619_SHARP_){
if(cljs.core.truth_(p1__27619_SHARP_.call(null,topic))){
return p1__27619_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27619_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27622 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27623){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27623 = meta27623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27624,meta27623__$1){
var self__ = this;
var _27624__$1 = this;
return (new cljs.core.async.t_cljs$core$async27622(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27623__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27624){
var self__ = this;
var _27624__$1 = this;
return self__.meta27623;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27623","meta27623",-1449108134,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27622";

cljs.core.async.t_cljs$core$async27622.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27622");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27622.
 */
cljs.core.async.__GT_t_cljs$core$async27622 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27622(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27623){
return (new cljs.core.async.t_cljs$core$async27622(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27623));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27622(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24644__auto___27742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27742,mults,ensure_mult,p){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27742,mults,ensure_mult,p){
return (function (state_27696){
var state_val_27697 = (state_27696[(1)]);
if((state_val_27697 === (7))){
var inst_27692 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27698_27743 = state_27696__$1;
(statearr_27698_27743[(2)] = inst_27692);

(statearr_27698_27743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (20))){
var state_27696__$1 = state_27696;
var statearr_27699_27744 = state_27696__$1;
(statearr_27699_27744[(2)] = null);

(statearr_27699_27744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (1))){
var state_27696__$1 = state_27696;
var statearr_27700_27745 = state_27696__$1;
(statearr_27700_27745[(2)] = null);

(statearr_27700_27745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (24))){
var inst_27675 = (state_27696[(7)]);
var inst_27684 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27675);
var state_27696__$1 = state_27696;
var statearr_27701_27746 = state_27696__$1;
(statearr_27701_27746[(2)] = inst_27684);

(statearr_27701_27746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (4))){
var inst_27627 = (state_27696[(8)]);
var inst_27627__$1 = (state_27696[(2)]);
var inst_27628 = (inst_27627__$1 == null);
var state_27696__$1 = (function (){var statearr_27702 = state_27696;
(statearr_27702[(8)] = inst_27627__$1);

return statearr_27702;
})();
if(cljs.core.truth_(inst_27628)){
var statearr_27703_27747 = state_27696__$1;
(statearr_27703_27747[(1)] = (5));

} else {
var statearr_27704_27748 = state_27696__$1;
(statearr_27704_27748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (15))){
var inst_27669 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27705_27749 = state_27696__$1;
(statearr_27705_27749[(2)] = inst_27669);

(statearr_27705_27749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (21))){
var inst_27689 = (state_27696[(2)]);
var state_27696__$1 = (function (){var statearr_27706 = state_27696;
(statearr_27706[(9)] = inst_27689);

return statearr_27706;
})();
var statearr_27707_27750 = state_27696__$1;
(statearr_27707_27750[(2)] = null);

(statearr_27707_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (13))){
var inst_27651 = (state_27696[(10)]);
var inst_27653 = cljs.core.chunked_seq_QMARK_.call(null,inst_27651);
var state_27696__$1 = state_27696;
if(inst_27653){
var statearr_27708_27751 = state_27696__$1;
(statearr_27708_27751[(1)] = (16));

} else {
var statearr_27709_27752 = state_27696__$1;
(statearr_27709_27752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (22))){
var inst_27681 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
if(cljs.core.truth_(inst_27681)){
var statearr_27710_27753 = state_27696__$1;
(statearr_27710_27753[(1)] = (23));

} else {
var statearr_27711_27754 = state_27696__$1;
(statearr_27711_27754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (6))){
var inst_27677 = (state_27696[(11)]);
var inst_27675 = (state_27696[(7)]);
var inst_27627 = (state_27696[(8)]);
var inst_27675__$1 = topic_fn.call(null,inst_27627);
var inst_27676 = cljs.core.deref.call(null,mults);
var inst_27677__$1 = cljs.core.get.call(null,inst_27676,inst_27675__$1);
var state_27696__$1 = (function (){var statearr_27712 = state_27696;
(statearr_27712[(11)] = inst_27677__$1);

(statearr_27712[(7)] = inst_27675__$1);

return statearr_27712;
})();
if(cljs.core.truth_(inst_27677__$1)){
var statearr_27713_27755 = state_27696__$1;
(statearr_27713_27755[(1)] = (19));

} else {
var statearr_27714_27756 = state_27696__$1;
(statearr_27714_27756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (25))){
var inst_27686 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27715_27757 = state_27696__$1;
(statearr_27715_27757[(2)] = inst_27686);

(statearr_27715_27757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (17))){
var inst_27651 = (state_27696[(10)]);
var inst_27660 = cljs.core.first.call(null,inst_27651);
var inst_27661 = cljs.core.async.muxch_STAR_.call(null,inst_27660);
var inst_27662 = cljs.core.async.close_BANG_.call(null,inst_27661);
var inst_27663 = cljs.core.next.call(null,inst_27651);
var inst_27637 = inst_27663;
var inst_27638 = null;
var inst_27639 = (0);
var inst_27640 = (0);
var state_27696__$1 = (function (){var statearr_27716 = state_27696;
(statearr_27716[(12)] = inst_27639);

(statearr_27716[(13)] = inst_27640);

(statearr_27716[(14)] = inst_27662);

(statearr_27716[(15)] = inst_27638);

(statearr_27716[(16)] = inst_27637);

return statearr_27716;
})();
var statearr_27717_27758 = state_27696__$1;
(statearr_27717_27758[(2)] = null);

(statearr_27717_27758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (3))){
var inst_27694 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27696__$1,inst_27694);
} else {
if((state_val_27697 === (12))){
var inst_27671 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27718_27759 = state_27696__$1;
(statearr_27718_27759[(2)] = inst_27671);

(statearr_27718_27759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (2))){
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27696__$1,(4),ch);
} else {
if((state_val_27697 === (23))){
var state_27696__$1 = state_27696;
var statearr_27719_27760 = state_27696__$1;
(statearr_27719_27760[(2)] = null);

(statearr_27719_27760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (19))){
var inst_27677 = (state_27696[(11)]);
var inst_27627 = (state_27696[(8)]);
var inst_27679 = cljs.core.async.muxch_STAR_.call(null,inst_27677);
var state_27696__$1 = state_27696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27696__$1,(22),inst_27679,inst_27627);
} else {
if((state_val_27697 === (11))){
var inst_27651 = (state_27696[(10)]);
var inst_27637 = (state_27696[(16)]);
var inst_27651__$1 = cljs.core.seq.call(null,inst_27637);
var state_27696__$1 = (function (){var statearr_27720 = state_27696;
(statearr_27720[(10)] = inst_27651__$1);

return statearr_27720;
})();
if(inst_27651__$1){
var statearr_27721_27761 = state_27696__$1;
(statearr_27721_27761[(1)] = (13));

} else {
var statearr_27722_27762 = state_27696__$1;
(statearr_27722_27762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (9))){
var inst_27673 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27723_27763 = state_27696__$1;
(statearr_27723_27763[(2)] = inst_27673);

(statearr_27723_27763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (5))){
var inst_27634 = cljs.core.deref.call(null,mults);
var inst_27635 = cljs.core.vals.call(null,inst_27634);
var inst_27636 = cljs.core.seq.call(null,inst_27635);
var inst_27637 = inst_27636;
var inst_27638 = null;
var inst_27639 = (0);
var inst_27640 = (0);
var state_27696__$1 = (function (){var statearr_27724 = state_27696;
(statearr_27724[(12)] = inst_27639);

(statearr_27724[(13)] = inst_27640);

(statearr_27724[(15)] = inst_27638);

(statearr_27724[(16)] = inst_27637);

return statearr_27724;
})();
var statearr_27725_27764 = state_27696__$1;
(statearr_27725_27764[(2)] = null);

(statearr_27725_27764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (14))){
var state_27696__$1 = state_27696;
var statearr_27729_27765 = state_27696__$1;
(statearr_27729_27765[(2)] = null);

(statearr_27729_27765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (16))){
var inst_27651 = (state_27696[(10)]);
var inst_27655 = cljs.core.chunk_first.call(null,inst_27651);
var inst_27656 = cljs.core.chunk_rest.call(null,inst_27651);
var inst_27657 = cljs.core.count.call(null,inst_27655);
var inst_27637 = inst_27656;
var inst_27638 = inst_27655;
var inst_27639 = inst_27657;
var inst_27640 = (0);
var state_27696__$1 = (function (){var statearr_27730 = state_27696;
(statearr_27730[(12)] = inst_27639);

(statearr_27730[(13)] = inst_27640);

(statearr_27730[(15)] = inst_27638);

(statearr_27730[(16)] = inst_27637);

return statearr_27730;
})();
var statearr_27731_27766 = state_27696__$1;
(statearr_27731_27766[(2)] = null);

(statearr_27731_27766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (10))){
var inst_27639 = (state_27696[(12)]);
var inst_27640 = (state_27696[(13)]);
var inst_27638 = (state_27696[(15)]);
var inst_27637 = (state_27696[(16)]);
var inst_27645 = cljs.core._nth.call(null,inst_27638,inst_27640);
var inst_27646 = cljs.core.async.muxch_STAR_.call(null,inst_27645);
var inst_27647 = cljs.core.async.close_BANG_.call(null,inst_27646);
var inst_27648 = (inst_27640 + (1));
var tmp27726 = inst_27639;
var tmp27727 = inst_27638;
var tmp27728 = inst_27637;
var inst_27637__$1 = tmp27728;
var inst_27638__$1 = tmp27727;
var inst_27639__$1 = tmp27726;
var inst_27640__$1 = inst_27648;
var state_27696__$1 = (function (){var statearr_27732 = state_27696;
(statearr_27732[(12)] = inst_27639__$1);

(statearr_27732[(13)] = inst_27640__$1);

(statearr_27732[(17)] = inst_27647);

(statearr_27732[(15)] = inst_27638__$1);

(statearr_27732[(16)] = inst_27637__$1);

return statearr_27732;
})();
var statearr_27733_27767 = state_27696__$1;
(statearr_27733_27767[(2)] = null);

(statearr_27733_27767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (18))){
var inst_27666 = (state_27696[(2)]);
var state_27696__$1 = state_27696;
var statearr_27734_27768 = state_27696__$1;
(statearr_27734_27768[(2)] = inst_27666);

(statearr_27734_27768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27697 === (8))){
var inst_27639 = (state_27696[(12)]);
var inst_27640 = (state_27696[(13)]);
var inst_27642 = (inst_27640 < inst_27639);
var inst_27643 = inst_27642;
var state_27696__$1 = state_27696;
if(cljs.core.truth_(inst_27643)){
var statearr_27735_27769 = state_27696__$1;
(statearr_27735_27769[(1)] = (10));

} else {
var statearr_27736_27770 = state_27696__$1;
(statearr_27736_27770[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24644__auto___27742,mults,ensure_mult,p))
;
return ((function (switch__24477__auto__,c__24644__auto___27742,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_27737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27737[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_27737[(1)] = (1));

return statearr_27737;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_27696){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27738){if((e27738 instanceof Object)){
var ex__24481__auto__ = e27738;
var statearr_27739_27771 = state_27696;
(statearr_27739_27771[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27772 = state_27696;
state_27696 = G__27772;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_27696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_27696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27742,mults,ensure_mult,p))
})();
var state__24646__auto__ = (function (){var statearr_27740 = f__24645__auto__.call(null);
(statearr_27740[(6)] = c__24644__auto___27742);

return statearr_27740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27742,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27774 = arguments.length;
switch (G__27774) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27777 = arguments.length;
switch (G__27777) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27780 = arguments.length;
switch (G__27780) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24644__auto___27847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27819){
var state_val_27820 = (state_27819[(1)]);
if((state_val_27820 === (7))){
var state_27819__$1 = state_27819;
var statearr_27821_27848 = state_27819__$1;
(statearr_27821_27848[(2)] = null);

(statearr_27821_27848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (1))){
var state_27819__$1 = state_27819;
var statearr_27822_27849 = state_27819__$1;
(statearr_27822_27849[(2)] = null);

(statearr_27822_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (4))){
var inst_27783 = (state_27819[(7)]);
var inst_27785 = (inst_27783 < cnt);
var state_27819__$1 = state_27819;
if(cljs.core.truth_(inst_27785)){
var statearr_27823_27850 = state_27819__$1;
(statearr_27823_27850[(1)] = (6));

} else {
var statearr_27824_27851 = state_27819__$1;
(statearr_27824_27851[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (15))){
var inst_27815 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
var statearr_27825_27852 = state_27819__$1;
(statearr_27825_27852[(2)] = inst_27815);

(statearr_27825_27852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (13))){
var inst_27808 = cljs.core.async.close_BANG_.call(null,out);
var state_27819__$1 = state_27819;
var statearr_27826_27853 = state_27819__$1;
(statearr_27826_27853[(2)] = inst_27808);

(statearr_27826_27853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (6))){
var state_27819__$1 = state_27819;
var statearr_27827_27854 = state_27819__$1;
(statearr_27827_27854[(2)] = null);

(statearr_27827_27854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (3))){
var inst_27817 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27819__$1,inst_27817);
} else {
if((state_val_27820 === (12))){
var inst_27805 = (state_27819[(8)]);
var inst_27805__$1 = (state_27819[(2)]);
var inst_27806 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27805__$1);
var state_27819__$1 = (function (){var statearr_27828 = state_27819;
(statearr_27828[(8)] = inst_27805__$1);

return statearr_27828;
})();
if(cljs.core.truth_(inst_27806)){
var statearr_27829_27855 = state_27819__$1;
(statearr_27829_27855[(1)] = (13));

} else {
var statearr_27830_27856 = state_27819__$1;
(statearr_27830_27856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (2))){
var inst_27782 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27783 = (0);
var state_27819__$1 = (function (){var statearr_27831 = state_27819;
(statearr_27831[(9)] = inst_27782);

(statearr_27831[(7)] = inst_27783);

return statearr_27831;
})();
var statearr_27832_27857 = state_27819__$1;
(statearr_27832_27857[(2)] = null);

(statearr_27832_27857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (11))){
var inst_27783 = (state_27819[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27819,(10),Object,null,(9));
var inst_27792 = chs__$1.call(null,inst_27783);
var inst_27793 = done.call(null,inst_27783);
var inst_27794 = cljs.core.async.take_BANG_.call(null,inst_27792,inst_27793);
var state_27819__$1 = state_27819;
var statearr_27833_27858 = state_27819__$1;
(statearr_27833_27858[(2)] = inst_27794);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27819__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (9))){
var inst_27783 = (state_27819[(7)]);
var inst_27796 = (state_27819[(2)]);
var inst_27797 = (inst_27783 + (1));
var inst_27783__$1 = inst_27797;
var state_27819__$1 = (function (){var statearr_27834 = state_27819;
(statearr_27834[(10)] = inst_27796);

(statearr_27834[(7)] = inst_27783__$1);

return statearr_27834;
})();
var statearr_27835_27859 = state_27819__$1;
(statearr_27835_27859[(2)] = null);

(statearr_27835_27859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (5))){
var inst_27803 = (state_27819[(2)]);
var state_27819__$1 = (function (){var statearr_27836 = state_27819;
(statearr_27836[(11)] = inst_27803);

return statearr_27836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27819__$1,(12),dchan);
} else {
if((state_val_27820 === (14))){
var inst_27805 = (state_27819[(8)]);
var inst_27810 = cljs.core.apply.call(null,f,inst_27805);
var state_27819__$1 = state_27819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27819__$1,(16),out,inst_27810);
} else {
if((state_val_27820 === (16))){
var inst_27812 = (state_27819[(2)]);
var state_27819__$1 = (function (){var statearr_27837 = state_27819;
(statearr_27837[(12)] = inst_27812);

return statearr_27837;
})();
var statearr_27838_27860 = state_27819__$1;
(statearr_27838_27860[(2)] = null);

(statearr_27838_27860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (10))){
var inst_27787 = (state_27819[(2)]);
var inst_27788 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27819__$1 = (function (){var statearr_27839 = state_27819;
(statearr_27839[(13)] = inst_27787);

return statearr_27839;
})();
var statearr_27840_27861 = state_27819__$1;
(statearr_27840_27861[(2)] = inst_27788);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27819__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (8))){
var inst_27801 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
var statearr_27841_27862 = state_27819__$1;
(statearr_27841_27862[(2)] = inst_27801);

(statearr_27841_27862[(1)] = (5));


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
});})(c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24477__auto__,c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_27842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27842[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_27842[(1)] = (1));

return statearr_27842;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_27819){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27843){if((e27843 instanceof Object)){
var ex__24481__auto__ = e27843;
var statearr_27844_27863 = state_27819;
(statearr_27844_27863[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27864 = state_27819;
state_27819 = G__27864;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_27819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_27819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24646__auto__ = (function (){var statearr_27845 = f__24645__auto__.call(null);
(statearr_27845[(6)] = c__24644__auto___27847);

return statearr_27845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27847,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27867 = arguments.length;
switch (G__27867) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___27921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27921,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27921,out){
return (function (state_27899){
var state_val_27900 = (state_27899[(1)]);
if((state_val_27900 === (7))){
var inst_27879 = (state_27899[(7)]);
var inst_27878 = (state_27899[(8)]);
var inst_27878__$1 = (state_27899[(2)]);
var inst_27879__$1 = cljs.core.nth.call(null,inst_27878__$1,(0),null);
var inst_27880 = cljs.core.nth.call(null,inst_27878__$1,(1),null);
var inst_27881 = (inst_27879__$1 == null);
var state_27899__$1 = (function (){var statearr_27901 = state_27899;
(statearr_27901[(7)] = inst_27879__$1);

(statearr_27901[(9)] = inst_27880);

(statearr_27901[(8)] = inst_27878__$1);

return statearr_27901;
})();
if(cljs.core.truth_(inst_27881)){
var statearr_27902_27922 = state_27899__$1;
(statearr_27902_27922[(1)] = (8));

} else {
var statearr_27903_27923 = state_27899__$1;
(statearr_27903_27923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (1))){
var inst_27868 = cljs.core.vec.call(null,chs);
var inst_27869 = inst_27868;
var state_27899__$1 = (function (){var statearr_27904 = state_27899;
(statearr_27904[(10)] = inst_27869);

return statearr_27904;
})();
var statearr_27905_27924 = state_27899__$1;
(statearr_27905_27924[(2)] = null);

(statearr_27905_27924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (4))){
var inst_27869 = (state_27899[(10)]);
var state_27899__$1 = state_27899;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27899__$1,(7),inst_27869);
} else {
if((state_val_27900 === (6))){
var inst_27895 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27906_27925 = state_27899__$1;
(statearr_27906_27925[(2)] = inst_27895);

(statearr_27906_27925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (3))){
var inst_27897 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27899__$1,inst_27897);
} else {
if((state_val_27900 === (2))){
var inst_27869 = (state_27899[(10)]);
var inst_27871 = cljs.core.count.call(null,inst_27869);
var inst_27872 = (inst_27871 > (0));
var state_27899__$1 = state_27899;
if(cljs.core.truth_(inst_27872)){
var statearr_27908_27926 = state_27899__$1;
(statearr_27908_27926[(1)] = (4));

} else {
var statearr_27909_27927 = state_27899__$1;
(statearr_27909_27927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (11))){
var inst_27869 = (state_27899[(10)]);
var inst_27888 = (state_27899[(2)]);
var tmp27907 = inst_27869;
var inst_27869__$1 = tmp27907;
var state_27899__$1 = (function (){var statearr_27910 = state_27899;
(statearr_27910[(10)] = inst_27869__$1);

(statearr_27910[(11)] = inst_27888);

return statearr_27910;
})();
var statearr_27911_27928 = state_27899__$1;
(statearr_27911_27928[(2)] = null);

(statearr_27911_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (9))){
var inst_27879 = (state_27899[(7)]);
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27899__$1,(11),out,inst_27879);
} else {
if((state_val_27900 === (5))){
var inst_27893 = cljs.core.async.close_BANG_.call(null,out);
var state_27899__$1 = state_27899;
var statearr_27912_27929 = state_27899__$1;
(statearr_27912_27929[(2)] = inst_27893);

(statearr_27912_27929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (10))){
var inst_27891 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27913_27930 = state_27899__$1;
(statearr_27913_27930[(2)] = inst_27891);

(statearr_27913_27930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (8))){
var inst_27879 = (state_27899[(7)]);
var inst_27869 = (state_27899[(10)]);
var inst_27880 = (state_27899[(9)]);
var inst_27878 = (state_27899[(8)]);
var inst_27883 = (function (){var cs = inst_27869;
var vec__27874 = inst_27878;
var v = inst_27879;
var c = inst_27880;
return ((function (cs,vec__27874,v,c,inst_27879,inst_27869,inst_27880,inst_27878,state_val_27900,c__24644__auto___27921,out){
return (function (p1__27865_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27865_SHARP_);
});
;})(cs,vec__27874,v,c,inst_27879,inst_27869,inst_27880,inst_27878,state_val_27900,c__24644__auto___27921,out))
})();
var inst_27884 = cljs.core.filterv.call(null,inst_27883,inst_27869);
var inst_27869__$1 = inst_27884;
var state_27899__$1 = (function (){var statearr_27914 = state_27899;
(statearr_27914[(10)] = inst_27869__$1);

return statearr_27914;
})();
var statearr_27915_27931 = state_27899__$1;
(statearr_27915_27931[(2)] = null);

(statearr_27915_27931[(1)] = (2));


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
});})(c__24644__auto___27921,out))
;
return ((function (switch__24477__auto__,c__24644__auto___27921,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_27899){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__24481__auto__ = e27917;
var statearr_27918_27932 = state_27899;
(statearr_27918_27932[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27933 = state_27899;
state_27899 = G__27933;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_27899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_27899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27921,out))
})();
var state__24646__auto__ = (function (){var statearr_27919 = f__24645__auto__.call(null);
(statearr_27919[(6)] = c__24644__auto___27921);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27921,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27935 = arguments.length;
switch (G__27935) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___27980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___27980,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___27980,out){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (7))){
var inst_27941 = (state_27959[(7)]);
var inst_27941__$1 = (state_27959[(2)]);
var inst_27942 = (inst_27941__$1 == null);
var inst_27943 = cljs.core.not.call(null,inst_27942);
var state_27959__$1 = (function (){var statearr_27961 = state_27959;
(statearr_27961[(7)] = inst_27941__$1);

return statearr_27961;
})();
if(inst_27943){
var statearr_27962_27981 = state_27959__$1;
(statearr_27962_27981[(1)] = (8));

} else {
var statearr_27963_27982 = state_27959__$1;
(statearr_27963_27982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (1))){
var inst_27936 = (0);
var state_27959__$1 = (function (){var statearr_27964 = state_27959;
(statearr_27964[(8)] = inst_27936);

return statearr_27964;
})();
var statearr_27965_27983 = state_27959__$1;
(statearr_27965_27983[(2)] = null);

(statearr_27965_27983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (4))){
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(7),ch);
} else {
if((state_val_27960 === (6))){
var inst_27954 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27966_27984 = state_27959__$1;
(statearr_27966_27984[(2)] = inst_27954);

(statearr_27966_27984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (3))){
var inst_27956 = (state_27959[(2)]);
var inst_27957 = cljs.core.async.close_BANG_.call(null,out);
var state_27959__$1 = (function (){var statearr_27967 = state_27959;
(statearr_27967[(9)] = inst_27956);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (2))){
var inst_27936 = (state_27959[(8)]);
var inst_27938 = (inst_27936 < n);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27938)){
var statearr_27968_27985 = state_27959__$1;
(statearr_27968_27985[(1)] = (4));

} else {
var statearr_27969_27986 = state_27959__$1;
(statearr_27969_27986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (11))){
var inst_27936 = (state_27959[(8)]);
var inst_27946 = (state_27959[(2)]);
var inst_27947 = (inst_27936 + (1));
var inst_27936__$1 = inst_27947;
var state_27959__$1 = (function (){var statearr_27970 = state_27959;
(statearr_27970[(8)] = inst_27936__$1);

(statearr_27970[(10)] = inst_27946);

return statearr_27970;
})();
var statearr_27971_27987 = state_27959__$1;
(statearr_27971_27987[(2)] = null);

(statearr_27971_27987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (9))){
var state_27959__$1 = state_27959;
var statearr_27972_27988 = state_27959__$1;
(statearr_27972_27988[(2)] = null);

(statearr_27972_27988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (5))){
var state_27959__$1 = state_27959;
var statearr_27973_27989 = state_27959__$1;
(statearr_27973_27989[(2)] = null);

(statearr_27973_27989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (10))){
var inst_27951 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27974_27990 = state_27959__$1;
(statearr_27974_27990[(2)] = inst_27951);

(statearr_27974_27990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (8))){
var inst_27941 = (state_27959[(7)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27959__$1,(11),out,inst_27941);
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
});})(c__24644__auto___27980,out))
;
return ((function (switch__24477__auto__,c__24644__auto___27980,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_27975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27975[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_27975[(1)] = (1));

return statearr_27975;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_27959){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e27976){if((e27976 instanceof Object)){
var ex__24481__auto__ = e27976;
var statearr_27977_27991 = state_27959;
(statearr_27977_27991[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27959;
state_27959 = G__27992;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___27980,out))
})();
var state__24646__auto__ = (function (){var statearr_27978 = f__24645__auto__.call(null);
(statearr_27978[(6)] = c__24644__auto___27980);

return statearr_27978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___27980,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27994 = (function (f,ch,meta27995){
this.f = f;
this.ch = ch;
this.meta27995 = meta27995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27996,meta27995__$1){
var self__ = this;
var _27996__$1 = this;
return (new cljs.core.async.t_cljs$core$async27994(self__.f,self__.ch,meta27995__$1));
});

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27996){
var self__ = this;
var _27996__$1 = this;
return self__.meta27995;
});

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27997 = (function (f,ch,meta27995,_,fn1,meta27998){
this.f = f;
this.ch = ch;
this.meta27995 = meta27995;
this._ = _;
this.fn1 = fn1;
this.meta27998 = meta27998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27999,meta27998__$1){
var self__ = this;
var _27999__$1 = this;
return (new cljs.core.async.t_cljs$core$async27997(self__.f,self__.ch,self__.meta27995,self__._,self__.fn1,meta27998__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27999){
var self__ = this;
var _27999__$1 = this;
return self__.meta27998;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27993_SHARP_){
return f1.call(null,(((p1__27993_SHARP_ == null))?null:self__.f.call(null,p1__27993_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27995","meta27995",1360965570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27994","cljs.core.async/t_cljs$core$async27994",2099051533,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27998","meta27998",-1332192142,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27997";

cljs.core.async.t_cljs$core$async27997.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27997");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27997.
 */
cljs.core.async.__GT_t_cljs$core$async27997 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27997(f__$1,ch__$1,meta27995__$1,___$2,fn1__$1,meta27998){
return (new cljs.core.async.t_cljs$core$async27997(f__$1,ch__$1,meta27995__$1,___$2,fn1__$1,meta27998));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27997(self__.f,self__.ch,self__.meta27995,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27995","meta27995",1360965570,null)], null);
});

cljs.core.async.t_cljs$core$async27994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27994";

cljs.core.async.t_cljs$core$async27994.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27994");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27994.
 */
cljs.core.async.__GT_t_cljs$core$async27994 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27994(f__$1,ch__$1,meta27995){
return (new cljs.core.async.t_cljs$core$async27994(f__$1,ch__$1,meta27995));
});

}

return (new cljs.core.async.t_cljs$core$async27994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28000 = (function (f,ch,meta28001){
this.f = f;
this.ch = ch;
this.meta28001 = meta28001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28002,meta28001__$1){
var self__ = this;
var _28002__$1 = this;
return (new cljs.core.async.t_cljs$core$async28000(self__.f,self__.ch,meta28001__$1));
});

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28002){
var self__ = this;
var _28002__$1 = this;
return self__.meta28001;
});

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28001","meta28001",-1778862633,null)], null);
});

cljs.core.async.t_cljs$core$async28000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28000";

cljs.core.async.t_cljs$core$async28000.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28000");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28000.
 */
cljs.core.async.__GT_t_cljs$core$async28000 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28000(f__$1,ch__$1,meta28001){
return (new cljs.core.async.t_cljs$core$async28000(f__$1,ch__$1,meta28001));
});

}

return (new cljs.core.async.t_cljs$core$async28000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28003 = (function (p,ch,meta28004){
this.p = p;
this.ch = ch;
this.meta28004 = meta28004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28005,meta28004__$1){
var self__ = this;
var _28005__$1 = this;
return (new cljs.core.async.t_cljs$core$async28003(self__.p,self__.ch,meta28004__$1));
});

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28005){
var self__ = this;
var _28005__$1 = this;
return self__.meta28004;
});

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28004","meta28004",-818816852,null)], null);
});

cljs.core.async.t_cljs$core$async28003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28003";

cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28003");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28003.
 */
cljs.core.async.__GT_t_cljs$core$async28003 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28003(p__$1,ch__$1,meta28004){
return (new cljs.core.async.t_cljs$core$async28003(p__$1,ch__$1,meta28004));
});

}

return (new cljs.core.async.t_cljs$core$async28003(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28007 = arguments.length;
switch (G__28007) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___28047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___28047,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___28047,out){
return (function (state_28028){
var state_val_28029 = (state_28028[(1)]);
if((state_val_28029 === (7))){
var inst_28024 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28030_28048 = state_28028__$1;
(statearr_28030_28048[(2)] = inst_28024);

(statearr_28030_28048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (1))){
var state_28028__$1 = state_28028;
var statearr_28031_28049 = state_28028__$1;
(statearr_28031_28049[(2)] = null);

(statearr_28031_28049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (4))){
var inst_28010 = (state_28028[(7)]);
var inst_28010__$1 = (state_28028[(2)]);
var inst_28011 = (inst_28010__$1 == null);
var state_28028__$1 = (function (){var statearr_28032 = state_28028;
(statearr_28032[(7)] = inst_28010__$1);

return statearr_28032;
})();
if(cljs.core.truth_(inst_28011)){
var statearr_28033_28050 = state_28028__$1;
(statearr_28033_28050[(1)] = (5));

} else {
var statearr_28034_28051 = state_28028__$1;
(statearr_28034_28051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (6))){
var inst_28010 = (state_28028[(7)]);
var inst_28015 = p.call(null,inst_28010);
var state_28028__$1 = state_28028;
if(cljs.core.truth_(inst_28015)){
var statearr_28035_28052 = state_28028__$1;
(statearr_28035_28052[(1)] = (8));

} else {
var statearr_28036_28053 = state_28028__$1;
(statearr_28036_28053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (3))){
var inst_28026 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28028__$1,inst_28026);
} else {
if((state_val_28029 === (2))){
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28028__$1,(4),ch);
} else {
if((state_val_28029 === (11))){
var inst_28018 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28037_28054 = state_28028__$1;
(statearr_28037_28054[(2)] = inst_28018);

(statearr_28037_28054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (9))){
var state_28028__$1 = state_28028;
var statearr_28038_28055 = state_28028__$1;
(statearr_28038_28055[(2)] = null);

(statearr_28038_28055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (5))){
var inst_28013 = cljs.core.async.close_BANG_.call(null,out);
var state_28028__$1 = state_28028;
var statearr_28039_28056 = state_28028__$1;
(statearr_28039_28056[(2)] = inst_28013);

(statearr_28039_28056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (10))){
var inst_28021 = (state_28028[(2)]);
var state_28028__$1 = (function (){var statearr_28040 = state_28028;
(statearr_28040[(8)] = inst_28021);

return statearr_28040;
})();
var statearr_28041_28057 = state_28028__$1;
(statearr_28041_28057[(2)] = null);

(statearr_28041_28057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (8))){
var inst_28010 = (state_28028[(7)]);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28028__$1,(11),out,inst_28010);
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
});})(c__24644__auto___28047,out))
;
return ((function (switch__24477__auto__,c__24644__auto___28047,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_28042 = [null,null,null,null,null,null,null,null,null];
(statearr_28042[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_28042[(1)] = (1));

return statearr_28042;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_28028){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_28028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e28043){if((e28043 instanceof Object)){
var ex__24481__auto__ = e28043;
var statearr_28044_28058 = state_28028;
(statearr_28044_28058[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28059 = state_28028;
state_28028 = G__28059;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_28028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_28028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___28047,out))
})();
var state__24646__auto__ = (function (){var statearr_28045 = f__24645__auto__.call(null);
(statearr_28045[(6)] = c__24644__auto___28047);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___28047,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28061 = arguments.length;
switch (G__28061) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto__){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto__){
return (function (state_28124){
var state_val_28125 = (state_28124[(1)]);
if((state_val_28125 === (7))){
var inst_28120 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28126_28164 = state_28124__$1;
(statearr_28126_28164[(2)] = inst_28120);

(statearr_28126_28164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (20))){
var inst_28090 = (state_28124[(7)]);
var inst_28101 = (state_28124[(2)]);
var inst_28102 = cljs.core.next.call(null,inst_28090);
var inst_28076 = inst_28102;
var inst_28077 = null;
var inst_28078 = (0);
var inst_28079 = (0);
var state_28124__$1 = (function (){var statearr_28127 = state_28124;
(statearr_28127[(8)] = inst_28101);

(statearr_28127[(9)] = inst_28076);

(statearr_28127[(10)] = inst_28079);

(statearr_28127[(11)] = inst_28077);

(statearr_28127[(12)] = inst_28078);

return statearr_28127;
})();
var statearr_28128_28165 = state_28124__$1;
(statearr_28128_28165[(2)] = null);

(statearr_28128_28165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (1))){
var state_28124__$1 = state_28124;
var statearr_28129_28166 = state_28124__$1;
(statearr_28129_28166[(2)] = null);

(statearr_28129_28166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (4))){
var inst_28065 = (state_28124[(13)]);
var inst_28065__$1 = (state_28124[(2)]);
var inst_28066 = (inst_28065__$1 == null);
var state_28124__$1 = (function (){var statearr_28130 = state_28124;
(statearr_28130[(13)] = inst_28065__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28066)){
var statearr_28131_28167 = state_28124__$1;
(statearr_28131_28167[(1)] = (5));

} else {
var statearr_28132_28168 = state_28124__$1;
(statearr_28132_28168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (15))){
var state_28124__$1 = state_28124;
var statearr_28136_28169 = state_28124__$1;
(statearr_28136_28169[(2)] = null);

(statearr_28136_28169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (21))){
var state_28124__$1 = state_28124;
var statearr_28137_28170 = state_28124__$1;
(statearr_28137_28170[(2)] = null);

(statearr_28137_28170[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (13))){
var inst_28076 = (state_28124[(9)]);
var inst_28079 = (state_28124[(10)]);
var inst_28077 = (state_28124[(11)]);
var inst_28078 = (state_28124[(12)]);
var inst_28086 = (state_28124[(2)]);
var inst_28087 = (inst_28079 + (1));
var tmp28133 = inst_28076;
var tmp28134 = inst_28077;
var tmp28135 = inst_28078;
var inst_28076__$1 = tmp28133;
var inst_28077__$1 = tmp28134;
var inst_28078__$1 = tmp28135;
var inst_28079__$1 = inst_28087;
var state_28124__$1 = (function (){var statearr_28138 = state_28124;
(statearr_28138[(9)] = inst_28076__$1);

(statearr_28138[(14)] = inst_28086);

(statearr_28138[(10)] = inst_28079__$1);

(statearr_28138[(11)] = inst_28077__$1);

(statearr_28138[(12)] = inst_28078__$1);

return statearr_28138;
})();
var statearr_28139_28171 = state_28124__$1;
(statearr_28139_28171[(2)] = null);

(statearr_28139_28171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (22))){
var state_28124__$1 = state_28124;
var statearr_28140_28172 = state_28124__$1;
(statearr_28140_28172[(2)] = null);

(statearr_28140_28172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (6))){
var inst_28065 = (state_28124[(13)]);
var inst_28074 = f.call(null,inst_28065);
var inst_28075 = cljs.core.seq.call(null,inst_28074);
var inst_28076 = inst_28075;
var inst_28077 = null;
var inst_28078 = (0);
var inst_28079 = (0);
var state_28124__$1 = (function (){var statearr_28141 = state_28124;
(statearr_28141[(9)] = inst_28076);

(statearr_28141[(10)] = inst_28079);

(statearr_28141[(11)] = inst_28077);

(statearr_28141[(12)] = inst_28078);

return statearr_28141;
})();
var statearr_28142_28173 = state_28124__$1;
(statearr_28142_28173[(2)] = null);

(statearr_28142_28173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (17))){
var inst_28090 = (state_28124[(7)]);
var inst_28094 = cljs.core.chunk_first.call(null,inst_28090);
var inst_28095 = cljs.core.chunk_rest.call(null,inst_28090);
var inst_28096 = cljs.core.count.call(null,inst_28094);
var inst_28076 = inst_28095;
var inst_28077 = inst_28094;
var inst_28078 = inst_28096;
var inst_28079 = (0);
var state_28124__$1 = (function (){var statearr_28143 = state_28124;
(statearr_28143[(9)] = inst_28076);

(statearr_28143[(10)] = inst_28079);

(statearr_28143[(11)] = inst_28077);

(statearr_28143[(12)] = inst_28078);

return statearr_28143;
})();
var statearr_28144_28174 = state_28124__$1;
(statearr_28144_28174[(2)] = null);

(statearr_28144_28174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (3))){
var inst_28122 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else {
if((state_val_28125 === (12))){
var inst_28110 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28145_28175 = state_28124__$1;
(statearr_28145_28175[(2)] = inst_28110);

(statearr_28145_28175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (2))){
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(4),in$);
} else {
if((state_val_28125 === (23))){
var inst_28118 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28146_28176 = state_28124__$1;
(statearr_28146_28176[(2)] = inst_28118);

(statearr_28146_28176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (19))){
var inst_28105 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28147_28177 = state_28124__$1;
(statearr_28147_28177[(2)] = inst_28105);

(statearr_28147_28177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (11))){
var inst_28090 = (state_28124[(7)]);
var inst_28076 = (state_28124[(9)]);
var inst_28090__$1 = cljs.core.seq.call(null,inst_28076);
var state_28124__$1 = (function (){var statearr_28148 = state_28124;
(statearr_28148[(7)] = inst_28090__$1);

return statearr_28148;
})();
if(inst_28090__$1){
var statearr_28149_28178 = state_28124__$1;
(statearr_28149_28178[(1)] = (14));

} else {
var statearr_28150_28179 = state_28124__$1;
(statearr_28150_28179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (9))){
var inst_28112 = (state_28124[(2)]);
var inst_28113 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28124__$1 = (function (){var statearr_28151 = state_28124;
(statearr_28151[(15)] = inst_28112);

return statearr_28151;
})();
if(cljs.core.truth_(inst_28113)){
var statearr_28152_28180 = state_28124__$1;
(statearr_28152_28180[(1)] = (21));

} else {
var statearr_28153_28181 = state_28124__$1;
(statearr_28153_28181[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (5))){
var inst_28068 = cljs.core.async.close_BANG_.call(null,out);
var state_28124__$1 = state_28124;
var statearr_28154_28182 = state_28124__$1;
(statearr_28154_28182[(2)] = inst_28068);

(statearr_28154_28182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (14))){
var inst_28090 = (state_28124[(7)]);
var inst_28092 = cljs.core.chunked_seq_QMARK_.call(null,inst_28090);
var state_28124__$1 = state_28124;
if(inst_28092){
var statearr_28155_28183 = state_28124__$1;
(statearr_28155_28183[(1)] = (17));

} else {
var statearr_28156_28184 = state_28124__$1;
(statearr_28156_28184[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (16))){
var inst_28108 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28157_28185 = state_28124__$1;
(statearr_28157_28185[(2)] = inst_28108);

(statearr_28157_28185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (10))){
var inst_28079 = (state_28124[(10)]);
var inst_28077 = (state_28124[(11)]);
var inst_28084 = cljs.core._nth.call(null,inst_28077,inst_28079);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28124__$1,(13),out,inst_28084);
} else {
if((state_val_28125 === (18))){
var inst_28090 = (state_28124[(7)]);
var inst_28099 = cljs.core.first.call(null,inst_28090);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28124__$1,(20),out,inst_28099);
} else {
if((state_val_28125 === (8))){
var inst_28079 = (state_28124[(10)]);
var inst_28078 = (state_28124[(12)]);
var inst_28081 = (inst_28079 < inst_28078);
var inst_28082 = inst_28081;
var state_28124__$1 = state_28124;
if(cljs.core.truth_(inst_28082)){
var statearr_28158_28186 = state_28124__$1;
(statearr_28158_28186[(1)] = (10));

} else {
var statearr_28159_28187 = state_28124__$1;
(statearr_28159_28187[(1)] = (11));

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
}
}
}
}
}
}
});})(c__24644__auto__))
;
return ((function (switch__24477__auto__,c__24644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____0 = (function (){
var statearr_28160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28160[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__);

(statearr_28160[(1)] = (1));

return statearr_28160;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____1 = (function (state_28124){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_28124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e28161){if((e28161 instanceof Object)){
var ex__24481__auto__ = e28161;
var statearr_28162_28188 = state_28124;
(statearr_28162_28188[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28189 = state_28124;
state_28124 = G__28189;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24478__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto__))
})();
var state__24646__auto__ = (function (){var statearr_28163 = f__24645__auto__.call(null);
(statearr_28163[(6)] = c__24644__auto__);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto__))
);

return c__24644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28191 = arguments.length;
switch (G__28191) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28194 = arguments.length;
switch (G__28194) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28197 = arguments.length;
switch (G__28197) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___28244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___28244,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___28244,out){
return (function (state_28221){
var state_val_28222 = (state_28221[(1)]);
if((state_val_28222 === (7))){
var inst_28216 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28223_28245 = state_28221__$1;
(statearr_28223_28245[(2)] = inst_28216);

(statearr_28223_28245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (1))){
var inst_28198 = null;
var state_28221__$1 = (function (){var statearr_28224 = state_28221;
(statearr_28224[(7)] = inst_28198);

return statearr_28224;
})();
var statearr_28225_28246 = state_28221__$1;
(statearr_28225_28246[(2)] = null);

(statearr_28225_28246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (4))){
var inst_28201 = (state_28221[(8)]);
var inst_28201__$1 = (state_28221[(2)]);
var inst_28202 = (inst_28201__$1 == null);
var inst_28203 = cljs.core.not.call(null,inst_28202);
var state_28221__$1 = (function (){var statearr_28226 = state_28221;
(statearr_28226[(8)] = inst_28201__$1);

return statearr_28226;
})();
if(inst_28203){
var statearr_28227_28247 = state_28221__$1;
(statearr_28227_28247[(1)] = (5));

} else {
var statearr_28228_28248 = state_28221__$1;
(statearr_28228_28248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (6))){
var state_28221__$1 = state_28221;
var statearr_28229_28249 = state_28221__$1;
(statearr_28229_28249[(2)] = null);

(statearr_28229_28249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (3))){
var inst_28218 = (state_28221[(2)]);
var inst_28219 = cljs.core.async.close_BANG_.call(null,out);
var state_28221__$1 = (function (){var statearr_28230 = state_28221;
(statearr_28230[(9)] = inst_28218);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28221__$1,inst_28219);
} else {
if((state_val_28222 === (2))){
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28221__$1,(4),ch);
} else {
if((state_val_28222 === (11))){
var inst_28201 = (state_28221[(8)]);
var inst_28210 = (state_28221[(2)]);
var inst_28198 = inst_28201;
var state_28221__$1 = (function (){var statearr_28231 = state_28221;
(statearr_28231[(10)] = inst_28210);

(statearr_28231[(7)] = inst_28198);

return statearr_28231;
})();
var statearr_28232_28250 = state_28221__$1;
(statearr_28232_28250[(2)] = null);

(statearr_28232_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (9))){
var inst_28201 = (state_28221[(8)]);
var state_28221__$1 = state_28221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28221__$1,(11),out,inst_28201);
} else {
if((state_val_28222 === (5))){
var inst_28201 = (state_28221[(8)]);
var inst_28198 = (state_28221[(7)]);
var inst_28205 = cljs.core._EQ_.call(null,inst_28201,inst_28198);
var state_28221__$1 = state_28221;
if(inst_28205){
var statearr_28234_28251 = state_28221__$1;
(statearr_28234_28251[(1)] = (8));

} else {
var statearr_28235_28252 = state_28221__$1;
(statearr_28235_28252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (10))){
var inst_28213 = (state_28221[(2)]);
var state_28221__$1 = state_28221;
var statearr_28236_28253 = state_28221__$1;
(statearr_28236_28253[(2)] = inst_28213);

(statearr_28236_28253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28222 === (8))){
var inst_28198 = (state_28221[(7)]);
var tmp28233 = inst_28198;
var inst_28198__$1 = tmp28233;
var state_28221__$1 = (function (){var statearr_28237 = state_28221;
(statearr_28237[(7)] = inst_28198__$1);

return statearr_28237;
})();
var statearr_28238_28254 = state_28221__$1;
(statearr_28238_28254[(2)] = null);

(statearr_28238_28254[(1)] = (2));


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
});})(c__24644__auto___28244,out))
;
return ((function (switch__24477__auto__,c__24644__auto___28244,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_28239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28239[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_28239[(1)] = (1));

return statearr_28239;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_28221){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_28221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e28240){if((e28240 instanceof Object)){
var ex__24481__auto__ = e28240;
var statearr_28241_28255 = state_28221;
(statearr_28241_28255[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28256 = state_28221;
state_28221 = G__28256;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_28221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_28221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___28244,out))
})();
var state__24646__auto__ = (function (){var statearr_28242 = f__24645__auto__.call(null);
(statearr_28242[(6)] = c__24644__auto___28244);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___28244,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28258 = arguments.length;
switch (G__28258) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___28324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___28324,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___28324,out){
return (function (state_28296){
var state_val_28297 = (state_28296[(1)]);
if((state_val_28297 === (7))){
var inst_28292 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28298_28325 = state_28296__$1;
(statearr_28298_28325[(2)] = inst_28292);

(statearr_28298_28325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (1))){
var inst_28259 = (new Array(n));
var inst_28260 = inst_28259;
var inst_28261 = (0);
var state_28296__$1 = (function (){var statearr_28299 = state_28296;
(statearr_28299[(7)] = inst_28261);

(statearr_28299[(8)] = inst_28260);

return statearr_28299;
})();
var statearr_28300_28326 = state_28296__$1;
(statearr_28300_28326[(2)] = null);

(statearr_28300_28326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (4))){
var inst_28264 = (state_28296[(9)]);
var inst_28264__$1 = (state_28296[(2)]);
var inst_28265 = (inst_28264__$1 == null);
var inst_28266 = cljs.core.not.call(null,inst_28265);
var state_28296__$1 = (function (){var statearr_28301 = state_28296;
(statearr_28301[(9)] = inst_28264__$1);

return statearr_28301;
})();
if(inst_28266){
var statearr_28302_28327 = state_28296__$1;
(statearr_28302_28327[(1)] = (5));

} else {
var statearr_28303_28328 = state_28296__$1;
(statearr_28303_28328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (15))){
var inst_28286 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28304_28329 = state_28296__$1;
(statearr_28304_28329[(2)] = inst_28286);

(statearr_28304_28329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (13))){
var state_28296__$1 = state_28296;
var statearr_28305_28330 = state_28296__$1;
(statearr_28305_28330[(2)] = null);

(statearr_28305_28330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (6))){
var inst_28261 = (state_28296[(7)]);
var inst_28282 = (inst_28261 > (0));
var state_28296__$1 = state_28296;
if(cljs.core.truth_(inst_28282)){
var statearr_28306_28331 = state_28296__$1;
(statearr_28306_28331[(1)] = (12));

} else {
var statearr_28307_28332 = state_28296__$1;
(statearr_28307_28332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (3))){
var inst_28294 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28296__$1,inst_28294);
} else {
if((state_val_28297 === (12))){
var inst_28260 = (state_28296[(8)]);
var inst_28284 = cljs.core.vec.call(null,inst_28260);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28296__$1,(15),out,inst_28284);
} else {
if((state_val_28297 === (2))){
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28296__$1,(4),ch);
} else {
if((state_val_28297 === (11))){
var inst_28276 = (state_28296[(2)]);
var inst_28277 = (new Array(n));
var inst_28260 = inst_28277;
var inst_28261 = (0);
var state_28296__$1 = (function (){var statearr_28308 = state_28296;
(statearr_28308[(10)] = inst_28276);

(statearr_28308[(7)] = inst_28261);

(statearr_28308[(8)] = inst_28260);

return statearr_28308;
})();
var statearr_28309_28333 = state_28296__$1;
(statearr_28309_28333[(2)] = null);

(statearr_28309_28333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (9))){
var inst_28260 = (state_28296[(8)]);
var inst_28274 = cljs.core.vec.call(null,inst_28260);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28296__$1,(11),out,inst_28274);
} else {
if((state_val_28297 === (5))){
var inst_28261 = (state_28296[(7)]);
var inst_28260 = (state_28296[(8)]);
var inst_28269 = (state_28296[(11)]);
var inst_28264 = (state_28296[(9)]);
var inst_28268 = (inst_28260[inst_28261] = inst_28264);
var inst_28269__$1 = (inst_28261 + (1));
var inst_28270 = (inst_28269__$1 < n);
var state_28296__$1 = (function (){var statearr_28310 = state_28296;
(statearr_28310[(12)] = inst_28268);

(statearr_28310[(11)] = inst_28269__$1);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28311_28334 = state_28296__$1;
(statearr_28311_28334[(1)] = (8));

} else {
var statearr_28312_28335 = state_28296__$1;
(statearr_28312_28335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (14))){
var inst_28289 = (state_28296[(2)]);
var inst_28290 = cljs.core.async.close_BANG_.call(null,out);
var state_28296__$1 = (function (){var statearr_28314 = state_28296;
(statearr_28314[(13)] = inst_28289);

return statearr_28314;
})();
var statearr_28315_28336 = state_28296__$1;
(statearr_28315_28336[(2)] = inst_28290);

(statearr_28315_28336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (10))){
var inst_28280 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28316_28337 = state_28296__$1;
(statearr_28316_28337[(2)] = inst_28280);

(statearr_28316_28337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (8))){
var inst_28260 = (state_28296[(8)]);
var inst_28269 = (state_28296[(11)]);
var tmp28313 = inst_28260;
var inst_28260__$1 = tmp28313;
var inst_28261 = inst_28269;
var state_28296__$1 = (function (){var statearr_28317 = state_28296;
(statearr_28317[(7)] = inst_28261);

(statearr_28317[(8)] = inst_28260__$1);

return statearr_28317;
})();
var statearr_28318_28338 = state_28296__$1;
(statearr_28318_28338[(2)] = null);

(statearr_28318_28338[(1)] = (2));


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
});})(c__24644__auto___28324,out))
;
return ((function (switch__24477__auto__,c__24644__auto___28324,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_28319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28319[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_28319[(1)] = (1));

return statearr_28319;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_28296){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_28296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e28320){if((e28320 instanceof Object)){
var ex__24481__auto__ = e28320;
var statearr_28321_28339 = state_28296;
(statearr_28321_28339[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28340 = state_28296;
state_28296 = G__28340;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_28296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_28296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___28324,out))
})();
var state__24646__auto__ = (function (){var statearr_28322 = f__24645__auto__.call(null);
(statearr_28322[(6)] = c__24644__auto___28324);

return statearr_28322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___28324,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28342 = arguments.length;
switch (G__28342) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24644__auto___28412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24644__auto___28412,out){
return (function (){
var f__24645__auto__ = (function (){var switch__24477__auto__ = ((function (c__24644__auto___28412,out){
return (function (state_28384){
var state_val_28385 = (state_28384[(1)]);
if((state_val_28385 === (7))){
var inst_28380 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28386_28413 = state_28384__$1;
(statearr_28386_28413[(2)] = inst_28380);

(statearr_28386_28413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (1))){
var inst_28343 = [];
var inst_28344 = inst_28343;
var inst_28345 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28384__$1 = (function (){var statearr_28387 = state_28384;
(statearr_28387[(7)] = inst_28344);

(statearr_28387[(8)] = inst_28345);

return statearr_28387;
})();
var statearr_28388_28414 = state_28384__$1;
(statearr_28388_28414[(2)] = null);

(statearr_28388_28414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (4))){
var inst_28348 = (state_28384[(9)]);
var inst_28348__$1 = (state_28384[(2)]);
var inst_28349 = (inst_28348__$1 == null);
var inst_28350 = cljs.core.not.call(null,inst_28349);
var state_28384__$1 = (function (){var statearr_28389 = state_28384;
(statearr_28389[(9)] = inst_28348__$1);

return statearr_28389;
})();
if(inst_28350){
var statearr_28390_28415 = state_28384__$1;
(statearr_28390_28415[(1)] = (5));

} else {
var statearr_28391_28416 = state_28384__$1;
(statearr_28391_28416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (15))){
var inst_28374 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28392_28417 = state_28384__$1;
(statearr_28392_28417[(2)] = inst_28374);

(statearr_28392_28417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (13))){
var state_28384__$1 = state_28384;
var statearr_28393_28418 = state_28384__$1;
(statearr_28393_28418[(2)] = null);

(statearr_28393_28418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (6))){
var inst_28344 = (state_28384[(7)]);
var inst_28369 = inst_28344.length;
var inst_28370 = (inst_28369 > (0));
var state_28384__$1 = state_28384;
if(cljs.core.truth_(inst_28370)){
var statearr_28394_28419 = state_28384__$1;
(statearr_28394_28419[(1)] = (12));

} else {
var statearr_28395_28420 = state_28384__$1;
(statearr_28395_28420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (3))){
var inst_28382 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28384__$1,inst_28382);
} else {
if((state_val_28385 === (12))){
var inst_28344 = (state_28384[(7)]);
var inst_28372 = cljs.core.vec.call(null,inst_28344);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28384__$1,(15),out,inst_28372);
} else {
if((state_val_28385 === (2))){
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28384__$1,(4),ch);
} else {
if((state_val_28385 === (11))){
var inst_28348 = (state_28384[(9)]);
var inst_28352 = (state_28384[(10)]);
var inst_28362 = (state_28384[(2)]);
var inst_28363 = [];
var inst_28364 = inst_28363.push(inst_28348);
var inst_28344 = inst_28363;
var inst_28345 = inst_28352;
var state_28384__$1 = (function (){var statearr_28396 = state_28384;
(statearr_28396[(7)] = inst_28344);

(statearr_28396[(8)] = inst_28345);

(statearr_28396[(11)] = inst_28362);

(statearr_28396[(12)] = inst_28364);

return statearr_28396;
})();
var statearr_28397_28421 = state_28384__$1;
(statearr_28397_28421[(2)] = null);

(statearr_28397_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (9))){
var inst_28344 = (state_28384[(7)]);
var inst_28360 = cljs.core.vec.call(null,inst_28344);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28384__$1,(11),out,inst_28360);
} else {
if((state_val_28385 === (5))){
var inst_28345 = (state_28384[(8)]);
var inst_28348 = (state_28384[(9)]);
var inst_28352 = (state_28384[(10)]);
var inst_28352__$1 = f.call(null,inst_28348);
var inst_28353 = cljs.core._EQ_.call(null,inst_28352__$1,inst_28345);
var inst_28354 = cljs.core.keyword_identical_QMARK_.call(null,inst_28345,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28355 = ((inst_28353) || (inst_28354));
var state_28384__$1 = (function (){var statearr_28398 = state_28384;
(statearr_28398[(10)] = inst_28352__$1);

return statearr_28398;
})();
if(cljs.core.truth_(inst_28355)){
var statearr_28399_28422 = state_28384__$1;
(statearr_28399_28422[(1)] = (8));

} else {
var statearr_28400_28423 = state_28384__$1;
(statearr_28400_28423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (14))){
var inst_28377 = (state_28384[(2)]);
var inst_28378 = cljs.core.async.close_BANG_.call(null,out);
var state_28384__$1 = (function (){var statearr_28402 = state_28384;
(statearr_28402[(13)] = inst_28377);

return statearr_28402;
})();
var statearr_28403_28424 = state_28384__$1;
(statearr_28403_28424[(2)] = inst_28378);

(statearr_28403_28424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (10))){
var inst_28367 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28404_28425 = state_28384__$1;
(statearr_28404_28425[(2)] = inst_28367);

(statearr_28404_28425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28385 === (8))){
var inst_28344 = (state_28384[(7)]);
var inst_28348 = (state_28384[(9)]);
var inst_28352 = (state_28384[(10)]);
var inst_28357 = inst_28344.push(inst_28348);
var tmp28401 = inst_28344;
var inst_28344__$1 = tmp28401;
var inst_28345 = inst_28352;
var state_28384__$1 = (function (){var statearr_28405 = state_28384;
(statearr_28405[(7)] = inst_28344__$1);

(statearr_28405[(8)] = inst_28345);

(statearr_28405[(14)] = inst_28357);

return statearr_28405;
})();
var statearr_28406_28426 = state_28384__$1;
(statearr_28406_28426[(2)] = null);

(statearr_28406_28426[(1)] = (2));


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
});})(c__24644__auto___28412,out))
;
return ((function (switch__24477__auto__,c__24644__auto___28412,out){
return (function() {
var cljs$core$async$state_machine__24478__auto__ = null;
var cljs$core$async$state_machine__24478__auto____0 = (function (){
var statearr_28407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28407[(0)] = cljs$core$async$state_machine__24478__auto__);

(statearr_28407[(1)] = (1));

return statearr_28407;
});
var cljs$core$async$state_machine__24478__auto____1 = (function (state_28384){
while(true){
var ret_value__24479__auto__ = (function (){try{while(true){
var result__24480__auto__ = switch__24477__auto__.call(null,state_28384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24480__auto__;
}
break;
}
}catch (e28408){if((e28408 instanceof Object)){
var ex__24481__auto__ = e28408;
var statearr_28409_28427 = state_28384;
(statearr_28409_28427[(5)] = ex__24481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28428 = state_28384;
state_28384 = G__28428;
continue;
} else {
return ret_value__24479__auto__;
}
break;
}
});
cljs$core$async$state_machine__24478__auto__ = function(state_28384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24478__auto____1.call(this,state_28384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24478__auto____0;
cljs$core$async$state_machine__24478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24478__auto____1;
return cljs$core$async$state_machine__24478__auto__;
})()
;})(switch__24477__auto__,c__24644__auto___28412,out))
})();
var state__24646__auto__ = (function (){var statearr_28410 = f__24645__auto__.call(null);
(statearr_28410[(6)] = c__24644__auto___28412);

return statearr_28410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24646__auto__);
});})(c__24644__auto___28412,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581096737502
