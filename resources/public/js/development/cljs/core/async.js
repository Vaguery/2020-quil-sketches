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
var G__26567 = arguments.length;
switch (G__26567) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26568 = (function (f,blockable,meta26569){
this.f = f;
this.blockable = blockable;
this.meta26569 = meta26569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26570,meta26569__$1){
var self__ = this;
var _26570__$1 = this;
return (new cljs.core.async.t_cljs$core$async26568(self__.f,self__.blockable,meta26569__$1));
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26570){
var self__ = this;
var _26570__$1 = this;
return self__.meta26569;
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26569","meta26569",1480171014,null)], null);
});

cljs.core.async.t_cljs$core$async26568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26568";

cljs.core.async.t_cljs$core$async26568.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26568");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26568.
 */
cljs.core.async.__GT_t_cljs$core$async26568 = (function cljs$core$async$__GT_t_cljs$core$async26568(f__$1,blockable__$1,meta26569){
return (new cljs.core.async.t_cljs$core$async26568(f__$1,blockable__$1,meta26569));
});

}

return (new cljs.core.async.t_cljs$core$async26568(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26574 = arguments.length;
switch (G__26574) {
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
var G__26577 = arguments.length;
switch (G__26577) {
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
var G__26580 = arguments.length;
switch (G__26580) {
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
var val_26582 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26582);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26582,ret){
return (function (){
return fn1.call(null,val_26582);
});})(val_26582,ret))
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
var G__26584 = arguments.length;
switch (G__26584) {
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
var n__4607__auto___26586 = n;
var x_26587 = (0);
while(true){
if((x_26587 < n__4607__auto___26586)){
(a[x_26587] = (0));

var G__26588 = (x_26587 + (1));
x_26587 = G__26588;
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

var G__26589 = (i + (1));
i = G__26589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26590 = (function (flag,meta26591){
this.flag = flag;
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26592,meta26591__$1){
var self__ = this;
var _26592__$1 = this;
return (new cljs.core.async.t_cljs$core$async26590(self__.flag,meta26591__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26592){
var self__ = this;
var _26592__$1 = this;
return self__.meta26591;
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26591","meta26591",977845320,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26590";

cljs.core.async.t_cljs$core$async26590.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26590");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26590.
 */
cljs.core.async.__GT_t_cljs$core$async26590 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26590(flag__$1,meta26591){
return (new cljs.core.async.t_cljs$core$async26590(flag__$1,meta26591));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26590(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26593 = (function (flag,cb,meta26594){
this.flag = flag;
this.cb = cb;
this.meta26594 = meta26594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26595,meta26594__$1){
var self__ = this;
var _26595__$1 = this;
return (new cljs.core.async.t_cljs$core$async26593(self__.flag,self__.cb,meta26594__$1));
});

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26595){
var self__ = this;
var _26595__$1 = this;
return self__.meta26594;
});

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26594","meta26594",1941206284,null)], null);
});

cljs.core.async.t_cljs$core$async26593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26593";

cljs.core.async.t_cljs$core$async26593.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26593");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26593.
 */
cljs.core.async.__GT_t_cljs$core$async26593 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26593(flag__$1,cb__$1,meta26594){
return (new cljs.core.async.t_cljs$core$async26593(flag__$1,cb__$1,meta26594));
});

}

return (new cljs.core.async.t_cljs$core$async26593(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26596_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26596_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26597_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26597_SHARP_,port], null));
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
var G__26598 = (i + (1));
i = G__26598;
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
var len__4730__auto___26604 = arguments.length;
var i__4731__auto___26605 = (0);
while(true){
if((i__4731__auto___26605 < len__4730__auto___26604)){
args__4736__auto__.push((arguments[i__4731__auto___26605]));

var G__26606 = (i__4731__auto___26605 + (1));
i__4731__auto___26605 = G__26606;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26601){
var map__26602 = p__26601;
var map__26602__$1 = (((((!((map__26602 == null))))?(((((map__26602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var opts = map__26602__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26599){
var G__26600 = cljs.core.first.call(null,seq26599);
var seq26599__$1 = cljs.core.next.call(null,seq26599);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26600,seq26599__$1);
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
var G__26608 = arguments.length;
switch (G__26608) {
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
var c__24643__auto___26654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___26654){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___26654){
return (function (state_26632){
var state_val_26633 = (state_26632[(1)]);
if((state_val_26633 === (7))){
var inst_26628 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26634_26655 = state_26632__$1;
(statearr_26634_26655[(2)] = inst_26628);

(statearr_26634_26655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (1))){
var state_26632__$1 = state_26632;
var statearr_26635_26656 = state_26632__$1;
(statearr_26635_26656[(2)] = null);

(statearr_26635_26656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (4))){
var inst_26611 = (state_26632[(7)]);
var inst_26611__$1 = (state_26632[(2)]);
var inst_26612 = (inst_26611__$1 == null);
var state_26632__$1 = (function (){var statearr_26636 = state_26632;
(statearr_26636[(7)] = inst_26611__$1);

return statearr_26636;
})();
if(cljs.core.truth_(inst_26612)){
var statearr_26637_26657 = state_26632__$1;
(statearr_26637_26657[(1)] = (5));

} else {
var statearr_26638_26658 = state_26632__$1;
(statearr_26638_26658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (13))){
var state_26632__$1 = state_26632;
var statearr_26639_26659 = state_26632__$1;
(statearr_26639_26659[(2)] = null);

(statearr_26639_26659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (6))){
var inst_26611 = (state_26632[(7)]);
var state_26632__$1 = state_26632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26632__$1,(11),to,inst_26611);
} else {
if((state_val_26633 === (3))){
var inst_26630 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26632__$1,inst_26630);
} else {
if((state_val_26633 === (12))){
var state_26632__$1 = state_26632;
var statearr_26640_26660 = state_26632__$1;
(statearr_26640_26660[(2)] = null);

(statearr_26640_26660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (2))){
var state_26632__$1 = state_26632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26632__$1,(4),from);
} else {
if((state_val_26633 === (11))){
var inst_26621 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
if(cljs.core.truth_(inst_26621)){
var statearr_26641_26661 = state_26632__$1;
(statearr_26641_26661[(1)] = (12));

} else {
var statearr_26642_26662 = state_26632__$1;
(statearr_26642_26662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (9))){
var state_26632__$1 = state_26632;
var statearr_26643_26663 = state_26632__$1;
(statearr_26643_26663[(2)] = null);

(statearr_26643_26663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (5))){
var state_26632__$1 = state_26632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26644_26664 = state_26632__$1;
(statearr_26644_26664[(1)] = (8));

} else {
var statearr_26645_26665 = state_26632__$1;
(statearr_26645_26665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (14))){
var inst_26626 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26646_26666 = state_26632__$1;
(statearr_26646_26666[(2)] = inst_26626);

(statearr_26646_26666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (10))){
var inst_26618 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26647_26667 = state_26632__$1;
(statearr_26647_26667[(2)] = inst_26618);

(statearr_26647_26667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (8))){
var inst_26615 = cljs.core.async.close_BANG_.call(null,to);
var state_26632__$1 = state_26632;
var statearr_26648_26668 = state_26632__$1;
(statearr_26648_26668[(2)] = inst_26615);

(statearr_26648_26668[(1)] = (10));


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
});})(c__24643__auto___26654))
;
return ((function (switch__24476__auto__,c__24643__auto___26654){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_26649 = [null,null,null,null,null,null,null,null];
(statearr_26649[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_26649[(1)] = (1));

return statearr_26649;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_26632){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26650){if((e26650 instanceof Object)){
var ex__24480__auto__ = e26650;
var statearr_26651_26669 = state_26632;
(statearr_26651_26669[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26670 = state_26632;
state_26632 = G__26670;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_26632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_26632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___26654))
})();
var state__24645__auto__ = (function (){var statearr_26652 = f__24644__auto__.call(null);
(statearr_26652[(6)] = c__24643__auto___26654);

return statearr_26652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___26654))
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
return (function (p__26671){
var vec__26672 = p__26671;
var v = cljs.core.nth.call(null,vec__26672,(0),null);
var p = cljs.core.nth.call(null,vec__26672,(1),null);
var job = vec__26672;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24643__auto___26843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results){
return (function (state_26679){
var state_val_26680 = (state_26679[(1)]);
if((state_val_26680 === (1))){
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26679__$1,(2),res,v);
} else {
if((state_val_26680 === (2))){
var inst_26676 = (state_26679[(2)]);
var inst_26677 = cljs.core.async.close_BANG_.call(null,res);
var state_26679__$1 = (function (){var statearr_26681 = state_26679;
(statearr_26681[(7)] = inst_26676);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26679__$1,inst_26677);
} else {
return null;
}
}
});})(c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results))
;
return ((function (switch__24476__auto__,c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_26682 = [null,null,null,null,null,null,null,null];
(statearr_26682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__);

(statearr_26682[(1)] = (1));

return statearr_26682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1 = (function (state_26679){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26683){if((e26683 instanceof Object)){
var ex__24480__auto__ = e26683;
var statearr_26684_26844 = state_26679;
(statearr_26684_26844[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26845 = state_26679;
state_26679 = G__26845;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = function(state_26679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1.call(this,state_26679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results))
})();
var state__24645__auto__ = (function (){var statearr_26685 = f__24644__auto__.call(null);
(statearr_26685[(6)] = c__24643__auto___26843);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___26843,res,vec__26672,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26686){
var vec__26687 = p__26686;
var v = cljs.core.nth.call(null,vec__26687,(0),null);
var p = cljs.core.nth.call(null,vec__26687,(1),null);
var job = vec__26687;
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
var n__4607__auto___26846 = n;
var __26847 = (0);
while(true){
if((__26847 < n__4607__auto___26846)){
var G__26690_26848 = type;
var G__26690_26849__$1 = (((G__26690_26848 instanceof cljs.core.Keyword))?G__26690_26848.fqn:null);
switch (G__26690_26849__$1) {
case "compute":
var c__24643__auto___26851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26847,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (__26847,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function (state_26703){
var state_val_26704 = (state_26703[(1)]);
if((state_val_26704 === (1))){
var state_26703__$1 = state_26703;
var statearr_26705_26852 = state_26703__$1;
(statearr_26705_26852[(2)] = null);

(statearr_26705_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (2))){
var state_26703__$1 = state_26703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26703__$1,(4),jobs);
} else {
if((state_val_26704 === (3))){
var inst_26701 = (state_26703[(2)]);
var state_26703__$1 = state_26703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26703__$1,inst_26701);
} else {
if((state_val_26704 === (4))){
var inst_26693 = (state_26703[(2)]);
var inst_26694 = process.call(null,inst_26693);
var state_26703__$1 = state_26703;
if(cljs.core.truth_(inst_26694)){
var statearr_26706_26853 = state_26703__$1;
(statearr_26706_26853[(1)] = (5));

} else {
var statearr_26707_26854 = state_26703__$1;
(statearr_26707_26854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (5))){
var state_26703__$1 = state_26703;
var statearr_26708_26855 = state_26703__$1;
(statearr_26708_26855[(2)] = null);

(statearr_26708_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (6))){
var state_26703__$1 = state_26703;
var statearr_26709_26856 = state_26703__$1;
(statearr_26709_26856[(2)] = null);

(statearr_26709_26856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26704 === (7))){
var inst_26699 = (state_26703[(2)]);
var state_26703__$1 = state_26703;
var statearr_26710_26857 = state_26703__$1;
(statearr_26710_26857[(2)] = inst_26699);

(statearr_26710_26857[(1)] = (3));


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
});})(__26847,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
;
return ((function (__26847,switch__24476__auto__,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_26711 = [null,null,null,null,null,null,null];
(statearr_26711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__);

(statearr_26711[(1)] = (1));

return statearr_26711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1 = (function (state_26703){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26712){if((e26712 instanceof Object)){
var ex__24480__auto__ = e26712;
var statearr_26713_26858 = state_26703;
(statearr_26713_26858[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26859 = state_26703;
state_26703 = G__26859;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = function(state_26703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1.call(this,state_26703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__;
})()
;})(__26847,switch__24476__auto__,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
})();
var state__24645__auto__ = (function (){var statearr_26714 = f__24644__auto__.call(null);
(statearr_26714[(6)] = c__24643__auto___26851);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(__26847,c__24643__auto___26851,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
);


break;
case "async":
var c__24643__auto___26860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26847,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (__26847,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (1))){
var state_26727__$1 = state_26727;
var statearr_26729_26861 = state_26727__$1;
(statearr_26729_26861[(2)] = null);

(statearr_26729_26861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26727__$1,(4),jobs);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (4))){
var inst_26717 = (state_26727[(2)]);
var inst_26718 = async.call(null,inst_26717);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26718)){
var statearr_26730_26862 = state_26727__$1;
(statearr_26730_26862[(1)] = (5));

} else {
var statearr_26731_26863 = state_26727__$1;
(statearr_26731_26863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var state_26727__$1 = state_26727;
var statearr_26732_26864 = state_26727__$1;
(statearr_26732_26864[(2)] = null);

(statearr_26732_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var state_26727__$1 = state_26727;
var statearr_26733_26865 = state_26727__$1;
(statearr_26733_26865[(2)] = null);

(statearr_26733_26865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (7))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26734_26866 = state_26727__$1;
(statearr_26734_26866[(2)] = inst_26723);

(statearr_26734_26866[(1)] = (3));


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
});})(__26847,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
;
return ((function (__26847,switch__24476__auto__,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_26735 = [null,null,null,null,null,null,null];
(statearr_26735[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__);

(statearr_26735[(1)] = (1));

return statearr_26735;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1 = (function (state_26727){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26736){if((e26736 instanceof Object)){
var ex__24480__auto__ = e26736;
var statearr_26737_26867 = state_26727;
(statearr_26737_26867[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26868 = state_26727;
state_26727 = G__26868;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__;
})()
;})(__26847,switch__24476__auto__,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
})();
var state__24645__auto__ = (function (){var statearr_26738 = f__24644__auto__.call(null);
(statearr_26738[(6)] = c__24643__auto___26860);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(__26847,c__24643__auto___26860,G__26690_26848,G__26690_26849__$1,n__4607__auto___26846,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26690_26849__$1)].join('')));

}

var G__26869 = (__26847 + (1));
__26847 = G__26869;
continue;
} else {
}
break;
}

var c__24643__auto___26870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___26870,jobs,results,process,async){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___26870,jobs,results,process,async){
return (function (state_26760){
var state_val_26761 = (state_26760[(1)]);
if((state_val_26761 === (7))){
var inst_26756 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
var statearr_26762_26871 = state_26760__$1;
(statearr_26762_26871[(2)] = inst_26756);

(statearr_26762_26871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (1))){
var state_26760__$1 = state_26760;
var statearr_26763_26872 = state_26760__$1;
(statearr_26763_26872[(2)] = null);

(statearr_26763_26872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (4))){
var inst_26741 = (state_26760[(7)]);
var inst_26741__$1 = (state_26760[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var state_26760__$1 = (function (){var statearr_26764 = state_26760;
(statearr_26764[(7)] = inst_26741__$1);

return statearr_26764;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26765_26873 = state_26760__$1;
(statearr_26765_26873[(1)] = (5));

} else {
var statearr_26766_26874 = state_26760__$1;
(statearr_26766_26874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (6))){
var inst_26741 = (state_26760[(7)]);
var inst_26746 = (state_26760[(8)]);
var inst_26746__$1 = cljs.core.async.chan.call(null,(1));
var inst_26747 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26748 = [inst_26741,inst_26746__$1];
var inst_26749 = (new cljs.core.PersistentVector(null,2,(5),inst_26747,inst_26748,null));
var state_26760__$1 = (function (){var statearr_26767 = state_26760;
(statearr_26767[(8)] = inst_26746__$1);

return statearr_26767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,(8),jobs,inst_26749);
} else {
if((state_val_26761 === (3))){
var inst_26758 = (state_26760[(2)]);
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26760__$1,inst_26758);
} else {
if((state_val_26761 === (2))){
var state_26760__$1 = state_26760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26760__$1,(4),from);
} else {
if((state_val_26761 === (9))){
var inst_26753 = (state_26760[(2)]);
var state_26760__$1 = (function (){var statearr_26768 = state_26760;
(statearr_26768[(9)] = inst_26753);

return statearr_26768;
})();
var statearr_26769_26875 = state_26760__$1;
(statearr_26769_26875[(2)] = null);

(statearr_26769_26875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (5))){
var inst_26744 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26760__$1 = state_26760;
var statearr_26770_26876 = state_26760__$1;
(statearr_26770_26876[(2)] = inst_26744);

(statearr_26770_26876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26761 === (8))){
var inst_26746 = (state_26760[(8)]);
var inst_26751 = (state_26760[(2)]);
var state_26760__$1 = (function (){var statearr_26771 = state_26760;
(statearr_26771[(10)] = inst_26751);

return statearr_26771;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26760__$1,(9),results,inst_26746);
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
});})(c__24643__auto___26870,jobs,results,process,async))
;
return ((function (switch__24476__auto__,c__24643__auto___26870,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_26772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__);

(statearr_26772[(1)] = (1));

return statearr_26772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1 = (function (state_26760){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26773){if((e26773 instanceof Object)){
var ex__24480__auto__ = e26773;
var statearr_26774_26877 = state_26760;
(statearr_26774_26877[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26878 = state_26760;
state_26760 = G__26878;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = function(state_26760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1.call(this,state_26760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___26870,jobs,results,process,async))
})();
var state__24645__auto__ = (function (){var statearr_26775 = f__24644__auto__.call(null);
(statearr_26775[(6)] = c__24643__auto___26870);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___26870,jobs,results,process,async))
);


var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__,jobs,results,process,async){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__,jobs,results,process,async){
return (function (state_26813){
var state_val_26814 = (state_26813[(1)]);
if((state_val_26814 === (7))){
var inst_26809 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26815_26879 = state_26813__$1;
(statearr_26815_26879[(2)] = inst_26809);

(statearr_26815_26879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (20))){
var state_26813__$1 = state_26813;
var statearr_26816_26880 = state_26813__$1;
(statearr_26816_26880[(2)] = null);

(statearr_26816_26880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (1))){
var state_26813__$1 = state_26813;
var statearr_26817_26881 = state_26813__$1;
(statearr_26817_26881[(2)] = null);

(statearr_26817_26881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (4))){
var inst_26778 = (state_26813[(7)]);
var inst_26778__$1 = (state_26813[(2)]);
var inst_26779 = (inst_26778__$1 == null);
var state_26813__$1 = (function (){var statearr_26818 = state_26813;
(statearr_26818[(7)] = inst_26778__$1);

return statearr_26818;
})();
if(cljs.core.truth_(inst_26779)){
var statearr_26819_26882 = state_26813__$1;
(statearr_26819_26882[(1)] = (5));

} else {
var statearr_26820_26883 = state_26813__$1;
(statearr_26820_26883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (15))){
var inst_26791 = (state_26813[(8)]);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26813__$1,(18),to,inst_26791);
} else {
if((state_val_26814 === (21))){
var inst_26804 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26821_26884 = state_26813__$1;
(statearr_26821_26884[(2)] = inst_26804);

(statearr_26821_26884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (13))){
var inst_26806 = (state_26813[(2)]);
var state_26813__$1 = (function (){var statearr_26822 = state_26813;
(statearr_26822[(9)] = inst_26806);

return statearr_26822;
})();
var statearr_26823_26885 = state_26813__$1;
(statearr_26823_26885[(2)] = null);

(statearr_26823_26885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (6))){
var inst_26778 = (state_26813[(7)]);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26813__$1,(11),inst_26778);
} else {
if((state_val_26814 === (17))){
var inst_26799 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
if(cljs.core.truth_(inst_26799)){
var statearr_26824_26886 = state_26813__$1;
(statearr_26824_26886[(1)] = (19));

} else {
var statearr_26825_26887 = state_26813__$1;
(statearr_26825_26887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (3))){
var inst_26811 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26813__$1,inst_26811);
} else {
if((state_val_26814 === (12))){
var inst_26788 = (state_26813[(10)]);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26813__$1,(14),inst_26788);
} else {
if((state_val_26814 === (2))){
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26813__$1,(4),results);
} else {
if((state_val_26814 === (19))){
var state_26813__$1 = state_26813;
var statearr_26826_26888 = state_26813__$1;
(statearr_26826_26888[(2)] = null);

(statearr_26826_26888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (11))){
var inst_26788 = (state_26813[(2)]);
var state_26813__$1 = (function (){var statearr_26827 = state_26813;
(statearr_26827[(10)] = inst_26788);

return statearr_26827;
})();
var statearr_26828_26889 = state_26813__$1;
(statearr_26828_26889[(2)] = null);

(statearr_26828_26889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (9))){
var state_26813__$1 = state_26813;
var statearr_26829_26890 = state_26813__$1;
(statearr_26829_26890[(2)] = null);

(statearr_26829_26890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (5))){
var state_26813__$1 = state_26813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26830_26891 = state_26813__$1;
(statearr_26830_26891[(1)] = (8));

} else {
var statearr_26831_26892 = state_26813__$1;
(statearr_26831_26892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (14))){
var inst_26791 = (state_26813[(8)]);
var inst_26793 = (state_26813[(11)]);
var inst_26791__$1 = (state_26813[(2)]);
var inst_26792 = (inst_26791__$1 == null);
var inst_26793__$1 = cljs.core.not.call(null,inst_26792);
var state_26813__$1 = (function (){var statearr_26832 = state_26813;
(statearr_26832[(8)] = inst_26791__$1);

(statearr_26832[(11)] = inst_26793__$1);

return statearr_26832;
})();
if(inst_26793__$1){
var statearr_26833_26893 = state_26813__$1;
(statearr_26833_26893[(1)] = (15));

} else {
var statearr_26834_26894 = state_26813__$1;
(statearr_26834_26894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (16))){
var inst_26793 = (state_26813[(11)]);
var state_26813__$1 = state_26813;
var statearr_26835_26895 = state_26813__$1;
(statearr_26835_26895[(2)] = inst_26793);

(statearr_26835_26895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (10))){
var inst_26785 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26836_26896 = state_26813__$1;
(statearr_26836_26896[(2)] = inst_26785);

(statearr_26836_26896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (18))){
var inst_26796 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26837_26897 = state_26813__$1;
(statearr_26837_26897[(2)] = inst_26796);

(statearr_26837_26897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (8))){
var inst_26782 = cljs.core.async.close_BANG_.call(null,to);
var state_26813__$1 = state_26813;
var statearr_26838_26898 = state_26813__$1;
(statearr_26838_26898[(2)] = inst_26782);

(statearr_26838_26898[(1)] = (10));


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
});})(c__24643__auto__,jobs,results,process,async))
;
return ((function (switch__24476__auto__,c__24643__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_26839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__);

(statearr_26839[(1)] = (1));

return statearr_26839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1 = (function (state_26813){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26840){if((e26840 instanceof Object)){
var ex__24480__auto__ = e26840;
var statearr_26841_26899 = state_26813;
(statearr_26841_26899[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26900 = state_26813;
state_26813 = G__26900;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__ = function(state_26813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1.call(this,state_26813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__,jobs,results,process,async))
})();
var state__24645__auto__ = (function (){var statearr_26842 = f__24644__auto__.call(null);
(statearr_26842[(6)] = c__24643__auto__);

return statearr_26842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__,jobs,results,process,async))
);

return c__24643__auto__;
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
var G__26902 = arguments.length;
switch (G__26902) {
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
var G__26905 = arguments.length;
switch (G__26905) {
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
var G__26908 = arguments.length;
switch (G__26908) {
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
var c__24643__auto___26957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___26957,tc,fc){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___26957,tc,fc){
return (function (state_26934){
var state_val_26935 = (state_26934[(1)]);
if((state_val_26935 === (7))){
var inst_26930 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
var statearr_26936_26958 = state_26934__$1;
(statearr_26936_26958[(2)] = inst_26930);

(statearr_26936_26958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (1))){
var state_26934__$1 = state_26934;
var statearr_26937_26959 = state_26934__$1;
(statearr_26937_26959[(2)] = null);

(statearr_26937_26959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (4))){
var inst_26911 = (state_26934[(7)]);
var inst_26911__$1 = (state_26934[(2)]);
var inst_26912 = (inst_26911__$1 == null);
var state_26934__$1 = (function (){var statearr_26938 = state_26934;
(statearr_26938[(7)] = inst_26911__$1);

return statearr_26938;
})();
if(cljs.core.truth_(inst_26912)){
var statearr_26939_26960 = state_26934__$1;
(statearr_26939_26960[(1)] = (5));

} else {
var statearr_26940_26961 = state_26934__$1;
(statearr_26940_26961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (13))){
var state_26934__$1 = state_26934;
var statearr_26941_26962 = state_26934__$1;
(statearr_26941_26962[(2)] = null);

(statearr_26941_26962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (6))){
var inst_26911 = (state_26934[(7)]);
var inst_26917 = p.call(null,inst_26911);
var state_26934__$1 = state_26934;
if(cljs.core.truth_(inst_26917)){
var statearr_26942_26963 = state_26934__$1;
(statearr_26942_26963[(1)] = (9));

} else {
var statearr_26943_26964 = state_26934__$1;
(statearr_26943_26964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (3))){
var inst_26932 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26934__$1,inst_26932);
} else {
if((state_val_26935 === (12))){
var state_26934__$1 = state_26934;
var statearr_26944_26965 = state_26934__$1;
(statearr_26944_26965[(2)] = null);

(statearr_26944_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (2))){
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26934__$1,(4),ch);
} else {
if((state_val_26935 === (11))){
var inst_26911 = (state_26934[(7)]);
var inst_26921 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26934__$1,(8),inst_26921,inst_26911);
} else {
if((state_val_26935 === (9))){
var state_26934__$1 = state_26934;
var statearr_26945_26966 = state_26934__$1;
(statearr_26945_26966[(2)] = tc);

(statearr_26945_26966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (5))){
var inst_26914 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26915 = cljs.core.async.close_BANG_.call(null,fc);
var state_26934__$1 = (function (){var statearr_26946 = state_26934;
(statearr_26946[(8)] = inst_26914);

return statearr_26946;
})();
var statearr_26947_26967 = state_26934__$1;
(statearr_26947_26967[(2)] = inst_26915);

(statearr_26947_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (14))){
var inst_26928 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
var statearr_26948_26968 = state_26934__$1;
(statearr_26948_26968[(2)] = inst_26928);

(statearr_26948_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (10))){
var state_26934__$1 = state_26934;
var statearr_26949_26969 = state_26934__$1;
(statearr_26949_26969[(2)] = fc);

(statearr_26949_26969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26935 === (8))){
var inst_26923 = (state_26934[(2)]);
var state_26934__$1 = state_26934;
if(cljs.core.truth_(inst_26923)){
var statearr_26950_26970 = state_26934__$1;
(statearr_26950_26970[(1)] = (12));

} else {
var statearr_26951_26971 = state_26934__$1;
(statearr_26951_26971[(1)] = (13));

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
});})(c__24643__auto___26957,tc,fc))
;
return ((function (switch__24476__auto__,c__24643__auto___26957,tc,fc){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_26952 = [null,null,null,null,null,null,null,null,null];
(statearr_26952[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_26952[(1)] = (1));

return statearr_26952;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_26934){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e26953){if((e26953 instanceof Object)){
var ex__24480__auto__ = e26953;
var statearr_26954_26972 = state_26934;
(statearr_26954_26972[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26973 = state_26934;
state_26934 = G__26973;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_26934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_26934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___26957,tc,fc))
})();
var state__24645__auto__ = (function (){var statearr_26955 = f__24644__auto__.call(null);
(statearr_26955[(6)] = c__24643__auto___26957);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___26957,tc,fc))
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__){
return (function (state_26994){
var state_val_26995 = (state_26994[(1)]);
if((state_val_26995 === (7))){
var inst_26990 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_26996_27014 = state_26994__$1;
(statearr_26996_27014[(2)] = inst_26990);

(statearr_26996_27014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (1))){
var inst_26974 = init;
var state_26994__$1 = (function (){var statearr_26997 = state_26994;
(statearr_26997[(7)] = inst_26974);

return statearr_26997;
})();
var statearr_26998_27015 = state_26994__$1;
(statearr_26998_27015[(2)] = null);

(statearr_26998_27015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (4))){
var inst_26977 = (state_26994[(8)]);
var inst_26977__$1 = (state_26994[(2)]);
var inst_26978 = (inst_26977__$1 == null);
var state_26994__$1 = (function (){var statearr_26999 = state_26994;
(statearr_26999[(8)] = inst_26977__$1);

return statearr_26999;
})();
if(cljs.core.truth_(inst_26978)){
var statearr_27000_27016 = state_26994__$1;
(statearr_27000_27016[(1)] = (5));

} else {
var statearr_27001_27017 = state_26994__$1;
(statearr_27001_27017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (6))){
var inst_26974 = (state_26994[(7)]);
var inst_26977 = (state_26994[(8)]);
var inst_26981 = (state_26994[(9)]);
var inst_26981__$1 = f.call(null,inst_26974,inst_26977);
var inst_26982 = cljs.core.reduced_QMARK_.call(null,inst_26981__$1);
var state_26994__$1 = (function (){var statearr_27002 = state_26994;
(statearr_27002[(9)] = inst_26981__$1);

return statearr_27002;
})();
if(inst_26982){
var statearr_27003_27018 = state_26994__$1;
(statearr_27003_27018[(1)] = (8));

} else {
var statearr_27004_27019 = state_26994__$1;
(statearr_27004_27019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (3))){
var inst_26992 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26994__$1,inst_26992);
} else {
if((state_val_26995 === (2))){
var state_26994__$1 = state_26994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,(4),ch);
} else {
if((state_val_26995 === (9))){
var inst_26981 = (state_26994[(9)]);
var inst_26974 = inst_26981;
var state_26994__$1 = (function (){var statearr_27005 = state_26994;
(statearr_27005[(7)] = inst_26974);

return statearr_27005;
})();
var statearr_27006_27020 = state_26994__$1;
(statearr_27006_27020[(2)] = null);

(statearr_27006_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (5))){
var inst_26974 = (state_26994[(7)]);
var state_26994__$1 = state_26994;
var statearr_27007_27021 = state_26994__$1;
(statearr_27007_27021[(2)] = inst_26974);

(statearr_27007_27021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (10))){
var inst_26988 = (state_26994[(2)]);
var state_26994__$1 = state_26994;
var statearr_27008_27022 = state_26994__$1;
(statearr_27008_27022[(2)] = inst_26988);

(statearr_27008_27022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26995 === (8))){
var inst_26981 = (state_26994[(9)]);
var inst_26984 = cljs.core.deref.call(null,inst_26981);
var state_26994__$1 = state_26994;
var statearr_27009_27023 = state_26994__$1;
(statearr_27009_27023[(2)] = inst_26984);

(statearr_27009_27023[(1)] = (10));


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
});})(c__24643__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24477__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24477__auto____0 = (function (){
var statearr_27010 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27010[(0)] = cljs$core$async$reduce_$_state_machine__24477__auto__);

(statearr_27010[(1)] = (1));

return statearr_27010;
});
var cljs$core$async$reduce_$_state_machine__24477__auto____1 = (function (state_26994){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_26994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27011){if((e27011 instanceof Object)){
var ex__24480__auto__ = e27011;
var statearr_27012_27024 = state_26994;
(statearr_27012_27024[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27025 = state_26994;
state_26994 = G__27025;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24477__auto__ = function(state_26994){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24477__auto____1.call(this,state_26994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24477__auto____0;
cljs$core$async$reduce_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24477__auto____1;
return cljs$core$async$reduce_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__))
})();
var state__24645__auto__ = (function (){var statearr_27013 = f__24644__auto__.call(null);
(statearr_27013[(6)] = c__24643__auto__);

return statearr_27013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__))
);

return c__24643__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__,f__$1){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__,f__$1){
return (function (state_27031){
var state_val_27032 = (state_27031[(1)]);
if((state_val_27032 === (1))){
var inst_27026 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27031__$1,(2),inst_27026);
} else {
if((state_val_27032 === (2))){
var inst_27028 = (state_27031[(2)]);
var inst_27029 = f__$1.call(null,inst_27028);
var state_27031__$1 = state_27031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27031__$1,inst_27029);
} else {
return null;
}
}
});})(c__24643__auto__,f__$1))
;
return ((function (switch__24476__auto__,c__24643__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24477__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24477__auto____0 = (function (){
var statearr_27033 = [null,null,null,null,null,null,null];
(statearr_27033[(0)] = cljs$core$async$transduce_$_state_machine__24477__auto__);

(statearr_27033[(1)] = (1));

return statearr_27033;
});
var cljs$core$async$transduce_$_state_machine__24477__auto____1 = (function (state_27031){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27034){if((e27034 instanceof Object)){
var ex__24480__auto__ = e27034;
var statearr_27035_27037 = state_27031;
(statearr_27035_27037[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27038 = state_27031;
state_27031 = G__27038;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24477__auto__ = function(state_27031){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24477__auto____1.call(this,state_27031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24477__auto____0;
cljs$core$async$transduce_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24477__auto____1;
return cljs$core$async$transduce_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__,f__$1))
})();
var state__24645__auto__ = (function (){var statearr_27036 = f__24644__auto__.call(null);
(statearr_27036[(6)] = c__24643__auto__);

return statearr_27036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__,f__$1))
);

return c__24643__auto__;
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
var G__27040 = arguments.length;
switch (G__27040) {
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (7))){
var inst_27047 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27067_27088 = state_27065__$1;
(statearr_27067_27088[(2)] = inst_27047);

(statearr_27067_27088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (1))){
var inst_27041 = cljs.core.seq.call(null,coll);
var inst_27042 = inst_27041;
var state_27065__$1 = (function (){var statearr_27068 = state_27065;
(statearr_27068[(7)] = inst_27042);

return statearr_27068;
})();
var statearr_27069_27089 = state_27065__$1;
(statearr_27069_27089[(2)] = null);

(statearr_27069_27089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (4))){
var inst_27042 = (state_27065[(7)]);
var inst_27045 = cljs.core.first.call(null,inst_27042);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27065__$1,(7),ch,inst_27045);
} else {
if((state_val_27066 === (13))){
var inst_27059 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27070_27090 = state_27065__$1;
(statearr_27070_27090[(2)] = inst_27059);

(statearr_27070_27090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (6))){
var inst_27050 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
if(cljs.core.truth_(inst_27050)){
var statearr_27071_27091 = state_27065__$1;
(statearr_27071_27091[(1)] = (8));

} else {
var statearr_27072_27092 = state_27065__$1;
(statearr_27072_27092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (3))){
var inst_27063 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27065__$1,inst_27063);
} else {
if((state_val_27066 === (12))){
var state_27065__$1 = state_27065;
var statearr_27073_27093 = state_27065__$1;
(statearr_27073_27093[(2)] = null);

(statearr_27073_27093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (2))){
var inst_27042 = (state_27065[(7)]);
var state_27065__$1 = state_27065;
if(cljs.core.truth_(inst_27042)){
var statearr_27074_27094 = state_27065__$1;
(statearr_27074_27094[(1)] = (4));

} else {
var statearr_27075_27095 = state_27065__$1;
(statearr_27075_27095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (11))){
var inst_27056 = cljs.core.async.close_BANG_.call(null,ch);
var state_27065__$1 = state_27065;
var statearr_27076_27096 = state_27065__$1;
(statearr_27076_27096[(2)] = inst_27056);

(statearr_27076_27096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (9))){
var state_27065__$1 = state_27065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27077_27097 = state_27065__$1;
(statearr_27077_27097[(1)] = (11));

} else {
var statearr_27078_27098 = state_27065__$1;
(statearr_27078_27098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (5))){
var inst_27042 = (state_27065[(7)]);
var state_27065__$1 = state_27065;
var statearr_27079_27099 = state_27065__$1;
(statearr_27079_27099[(2)] = inst_27042);

(statearr_27079_27099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (10))){
var inst_27061 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27080_27100 = state_27065__$1;
(statearr_27080_27100[(2)] = inst_27061);

(statearr_27080_27100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (8))){
var inst_27042 = (state_27065[(7)]);
var inst_27052 = cljs.core.next.call(null,inst_27042);
var inst_27042__$1 = inst_27052;
var state_27065__$1 = (function (){var statearr_27081 = state_27065;
(statearr_27081[(7)] = inst_27042__$1);

return statearr_27081;
})();
var statearr_27082_27101 = state_27065__$1;
(statearr_27082_27101[(2)] = null);

(statearr_27082_27101[(1)] = (2));


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
});})(c__24643__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_27083 = [null,null,null,null,null,null,null,null];
(statearr_27083[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_27083[(1)] = (1));

return statearr_27083;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_27065){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27084){if((e27084 instanceof Object)){
var ex__24480__auto__ = e27084;
var statearr_27085_27102 = state_27065;
(statearr_27085_27102[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27103 = state_27065;
state_27065 = G__27103;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__))
})();
var state__24645__auto__ = (function (){var statearr_27086 = f__24644__auto__.call(null);
(statearr_27086[(6)] = c__24643__auto__);

return statearr_27086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__))
);

return c__24643__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27104 = (function (ch,cs,meta27105){
this.ch = ch;
this.cs = cs;
this.meta27105 = meta27105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27106,meta27105__$1){
var self__ = this;
var _27106__$1 = this;
return (new cljs.core.async.t_cljs$core$async27104(self__.ch,self__.cs,meta27105__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27106){
var self__ = this;
var _27106__$1 = this;
return self__.meta27105;
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27105","meta27105",-1195343641,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27104";

cljs.core.async.t_cljs$core$async27104.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27104");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27104.
 */
cljs.core.async.__GT_t_cljs$core$async27104 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27104(ch__$1,cs__$1,meta27105){
return (new cljs.core.async.t_cljs$core$async27104(ch__$1,cs__$1,meta27105));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27104(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24643__auto___27326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27326,cs,m,dchan,dctr,done){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27326,cs,m,dchan,dctr,done){
return (function (state_27241){
var state_val_27242 = (state_27241[(1)]);
if((state_val_27242 === (7))){
var inst_27237 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27243_27327 = state_27241__$1;
(statearr_27243_27327[(2)] = inst_27237);

(statearr_27243_27327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (20))){
var inst_27140 = (state_27241[(7)]);
var inst_27152 = cljs.core.first.call(null,inst_27140);
var inst_27153 = cljs.core.nth.call(null,inst_27152,(0),null);
var inst_27154 = cljs.core.nth.call(null,inst_27152,(1),null);
var state_27241__$1 = (function (){var statearr_27244 = state_27241;
(statearr_27244[(8)] = inst_27153);

return statearr_27244;
})();
if(cljs.core.truth_(inst_27154)){
var statearr_27245_27328 = state_27241__$1;
(statearr_27245_27328[(1)] = (22));

} else {
var statearr_27246_27329 = state_27241__$1;
(statearr_27246_27329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (27))){
var inst_27189 = (state_27241[(9)]);
var inst_27182 = (state_27241[(10)]);
var inst_27109 = (state_27241[(11)]);
var inst_27184 = (state_27241[(12)]);
var inst_27189__$1 = cljs.core._nth.call(null,inst_27182,inst_27184);
var inst_27190 = cljs.core.async.put_BANG_.call(null,inst_27189__$1,inst_27109,done);
var state_27241__$1 = (function (){var statearr_27247 = state_27241;
(statearr_27247[(9)] = inst_27189__$1);

return statearr_27247;
})();
if(cljs.core.truth_(inst_27190)){
var statearr_27248_27330 = state_27241__$1;
(statearr_27248_27330[(1)] = (30));

} else {
var statearr_27249_27331 = state_27241__$1;
(statearr_27249_27331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (1))){
var state_27241__$1 = state_27241;
var statearr_27250_27332 = state_27241__$1;
(statearr_27250_27332[(2)] = null);

(statearr_27250_27332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (24))){
var inst_27140 = (state_27241[(7)]);
var inst_27159 = (state_27241[(2)]);
var inst_27160 = cljs.core.next.call(null,inst_27140);
var inst_27118 = inst_27160;
var inst_27119 = null;
var inst_27120 = (0);
var inst_27121 = (0);
var state_27241__$1 = (function (){var statearr_27251 = state_27241;
(statearr_27251[(13)] = inst_27119);

(statearr_27251[(14)] = inst_27121);

(statearr_27251[(15)] = inst_27120);

(statearr_27251[(16)] = inst_27159);

(statearr_27251[(17)] = inst_27118);

return statearr_27251;
})();
var statearr_27252_27333 = state_27241__$1;
(statearr_27252_27333[(2)] = null);

(statearr_27252_27333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (39))){
var state_27241__$1 = state_27241;
var statearr_27256_27334 = state_27241__$1;
(statearr_27256_27334[(2)] = null);

(statearr_27256_27334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (4))){
var inst_27109 = (state_27241[(11)]);
var inst_27109__$1 = (state_27241[(2)]);
var inst_27110 = (inst_27109__$1 == null);
var state_27241__$1 = (function (){var statearr_27257 = state_27241;
(statearr_27257[(11)] = inst_27109__$1);

return statearr_27257;
})();
if(cljs.core.truth_(inst_27110)){
var statearr_27258_27335 = state_27241__$1;
(statearr_27258_27335[(1)] = (5));

} else {
var statearr_27259_27336 = state_27241__$1;
(statearr_27259_27336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (15))){
var inst_27119 = (state_27241[(13)]);
var inst_27121 = (state_27241[(14)]);
var inst_27120 = (state_27241[(15)]);
var inst_27118 = (state_27241[(17)]);
var inst_27136 = (state_27241[(2)]);
var inst_27137 = (inst_27121 + (1));
var tmp27253 = inst_27119;
var tmp27254 = inst_27120;
var tmp27255 = inst_27118;
var inst_27118__$1 = tmp27255;
var inst_27119__$1 = tmp27253;
var inst_27120__$1 = tmp27254;
var inst_27121__$1 = inst_27137;
var state_27241__$1 = (function (){var statearr_27260 = state_27241;
(statearr_27260[(18)] = inst_27136);

(statearr_27260[(13)] = inst_27119__$1);

(statearr_27260[(14)] = inst_27121__$1);

(statearr_27260[(15)] = inst_27120__$1);

(statearr_27260[(17)] = inst_27118__$1);

return statearr_27260;
})();
var statearr_27261_27337 = state_27241__$1;
(statearr_27261_27337[(2)] = null);

(statearr_27261_27337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (21))){
var inst_27163 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27265_27338 = state_27241__$1;
(statearr_27265_27338[(2)] = inst_27163);

(statearr_27265_27338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (31))){
var inst_27189 = (state_27241[(9)]);
var inst_27193 = done.call(null,null);
var inst_27194 = cljs.core.async.untap_STAR_.call(null,m,inst_27189);
var state_27241__$1 = (function (){var statearr_27266 = state_27241;
(statearr_27266[(19)] = inst_27193);

return statearr_27266;
})();
var statearr_27267_27339 = state_27241__$1;
(statearr_27267_27339[(2)] = inst_27194);

(statearr_27267_27339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (32))){
var inst_27182 = (state_27241[(10)]);
var inst_27184 = (state_27241[(12)]);
var inst_27181 = (state_27241[(20)]);
var inst_27183 = (state_27241[(21)]);
var inst_27196 = (state_27241[(2)]);
var inst_27197 = (inst_27184 + (1));
var tmp27262 = inst_27182;
var tmp27263 = inst_27181;
var tmp27264 = inst_27183;
var inst_27181__$1 = tmp27263;
var inst_27182__$1 = tmp27262;
var inst_27183__$1 = tmp27264;
var inst_27184__$1 = inst_27197;
var state_27241__$1 = (function (){var statearr_27268 = state_27241;
(statearr_27268[(22)] = inst_27196);

(statearr_27268[(10)] = inst_27182__$1);

(statearr_27268[(12)] = inst_27184__$1);

(statearr_27268[(20)] = inst_27181__$1);

(statearr_27268[(21)] = inst_27183__$1);

return statearr_27268;
})();
var statearr_27269_27340 = state_27241__$1;
(statearr_27269_27340[(2)] = null);

(statearr_27269_27340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (40))){
var inst_27209 = (state_27241[(23)]);
var inst_27213 = done.call(null,null);
var inst_27214 = cljs.core.async.untap_STAR_.call(null,m,inst_27209);
var state_27241__$1 = (function (){var statearr_27270 = state_27241;
(statearr_27270[(24)] = inst_27213);

return statearr_27270;
})();
var statearr_27271_27341 = state_27241__$1;
(statearr_27271_27341[(2)] = inst_27214);

(statearr_27271_27341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (33))){
var inst_27200 = (state_27241[(25)]);
var inst_27202 = cljs.core.chunked_seq_QMARK_.call(null,inst_27200);
var state_27241__$1 = state_27241;
if(inst_27202){
var statearr_27272_27342 = state_27241__$1;
(statearr_27272_27342[(1)] = (36));

} else {
var statearr_27273_27343 = state_27241__$1;
(statearr_27273_27343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (13))){
var inst_27130 = (state_27241[(26)]);
var inst_27133 = cljs.core.async.close_BANG_.call(null,inst_27130);
var state_27241__$1 = state_27241;
var statearr_27274_27344 = state_27241__$1;
(statearr_27274_27344[(2)] = inst_27133);

(statearr_27274_27344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (22))){
var inst_27153 = (state_27241[(8)]);
var inst_27156 = cljs.core.async.close_BANG_.call(null,inst_27153);
var state_27241__$1 = state_27241;
var statearr_27275_27345 = state_27241__$1;
(statearr_27275_27345[(2)] = inst_27156);

(statearr_27275_27345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (36))){
var inst_27200 = (state_27241[(25)]);
var inst_27204 = cljs.core.chunk_first.call(null,inst_27200);
var inst_27205 = cljs.core.chunk_rest.call(null,inst_27200);
var inst_27206 = cljs.core.count.call(null,inst_27204);
var inst_27181 = inst_27205;
var inst_27182 = inst_27204;
var inst_27183 = inst_27206;
var inst_27184 = (0);
var state_27241__$1 = (function (){var statearr_27276 = state_27241;
(statearr_27276[(10)] = inst_27182);

(statearr_27276[(12)] = inst_27184);

(statearr_27276[(20)] = inst_27181);

(statearr_27276[(21)] = inst_27183);

return statearr_27276;
})();
var statearr_27277_27346 = state_27241__$1;
(statearr_27277_27346[(2)] = null);

(statearr_27277_27346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (41))){
var inst_27200 = (state_27241[(25)]);
var inst_27216 = (state_27241[(2)]);
var inst_27217 = cljs.core.next.call(null,inst_27200);
var inst_27181 = inst_27217;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27241__$1 = (function (){var statearr_27278 = state_27241;
(statearr_27278[(10)] = inst_27182);

(statearr_27278[(12)] = inst_27184);

(statearr_27278[(27)] = inst_27216);

(statearr_27278[(20)] = inst_27181);

(statearr_27278[(21)] = inst_27183);

return statearr_27278;
})();
var statearr_27279_27347 = state_27241__$1;
(statearr_27279_27347[(2)] = null);

(statearr_27279_27347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (43))){
var state_27241__$1 = state_27241;
var statearr_27280_27348 = state_27241__$1;
(statearr_27280_27348[(2)] = null);

(statearr_27280_27348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (29))){
var inst_27225 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27281_27349 = state_27241__$1;
(statearr_27281_27349[(2)] = inst_27225);

(statearr_27281_27349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (44))){
var inst_27234 = (state_27241[(2)]);
var state_27241__$1 = (function (){var statearr_27282 = state_27241;
(statearr_27282[(28)] = inst_27234);

return statearr_27282;
})();
var statearr_27283_27350 = state_27241__$1;
(statearr_27283_27350[(2)] = null);

(statearr_27283_27350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (6))){
var inst_27173 = (state_27241[(29)]);
var inst_27172 = cljs.core.deref.call(null,cs);
var inst_27173__$1 = cljs.core.keys.call(null,inst_27172);
var inst_27174 = cljs.core.count.call(null,inst_27173__$1);
var inst_27175 = cljs.core.reset_BANG_.call(null,dctr,inst_27174);
var inst_27180 = cljs.core.seq.call(null,inst_27173__$1);
var inst_27181 = inst_27180;
var inst_27182 = null;
var inst_27183 = (0);
var inst_27184 = (0);
var state_27241__$1 = (function (){var statearr_27284 = state_27241;
(statearr_27284[(10)] = inst_27182);

(statearr_27284[(30)] = inst_27175);

(statearr_27284[(29)] = inst_27173__$1);

(statearr_27284[(12)] = inst_27184);

(statearr_27284[(20)] = inst_27181);

(statearr_27284[(21)] = inst_27183);

return statearr_27284;
})();
var statearr_27285_27351 = state_27241__$1;
(statearr_27285_27351[(2)] = null);

(statearr_27285_27351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (28))){
var inst_27181 = (state_27241[(20)]);
var inst_27200 = (state_27241[(25)]);
var inst_27200__$1 = cljs.core.seq.call(null,inst_27181);
var state_27241__$1 = (function (){var statearr_27286 = state_27241;
(statearr_27286[(25)] = inst_27200__$1);

return statearr_27286;
})();
if(inst_27200__$1){
var statearr_27287_27352 = state_27241__$1;
(statearr_27287_27352[(1)] = (33));

} else {
var statearr_27288_27353 = state_27241__$1;
(statearr_27288_27353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (25))){
var inst_27184 = (state_27241[(12)]);
var inst_27183 = (state_27241[(21)]);
var inst_27186 = (inst_27184 < inst_27183);
var inst_27187 = inst_27186;
var state_27241__$1 = state_27241;
if(cljs.core.truth_(inst_27187)){
var statearr_27289_27354 = state_27241__$1;
(statearr_27289_27354[(1)] = (27));

} else {
var statearr_27290_27355 = state_27241__$1;
(statearr_27290_27355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (34))){
var state_27241__$1 = state_27241;
var statearr_27291_27356 = state_27241__$1;
(statearr_27291_27356[(2)] = null);

(statearr_27291_27356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (17))){
var state_27241__$1 = state_27241;
var statearr_27292_27357 = state_27241__$1;
(statearr_27292_27357[(2)] = null);

(statearr_27292_27357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (3))){
var inst_27239 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27241__$1,inst_27239);
} else {
if((state_val_27242 === (12))){
var inst_27168 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27293_27358 = state_27241__$1;
(statearr_27293_27358[(2)] = inst_27168);

(statearr_27293_27358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (2))){
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(4),ch);
} else {
if((state_val_27242 === (23))){
var state_27241__$1 = state_27241;
var statearr_27294_27359 = state_27241__$1;
(statearr_27294_27359[(2)] = null);

(statearr_27294_27359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (35))){
var inst_27223 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27295_27360 = state_27241__$1;
(statearr_27295_27360[(2)] = inst_27223);

(statearr_27295_27360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (19))){
var inst_27140 = (state_27241[(7)]);
var inst_27144 = cljs.core.chunk_first.call(null,inst_27140);
var inst_27145 = cljs.core.chunk_rest.call(null,inst_27140);
var inst_27146 = cljs.core.count.call(null,inst_27144);
var inst_27118 = inst_27145;
var inst_27119 = inst_27144;
var inst_27120 = inst_27146;
var inst_27121 = (0);
var state_27241__$1 = (function (){var statearr_27296 = state_27241;
(statearr_27296[(13)] = inst_27119);

(statearr_27296[(14)] = inst_27121);

(statearr_27296[(15)] = inst_27120);

(statearr_27296[(17)] = inst_27118);

return statearr_27296;
})();
var statearr_27297_27361 = state_27241__$1;
(statearr_27297_27361[(2)] = null);

(statearr_27297_27361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (11))){
var inst_27140 = (state_27241[(7)]);
var inst_27118 = (state_27241[(17)]);
var inst_27140__$1 = cljs.core.seq.call(null,inst_27118);
var state_27241__$1 = (function (){var statearr_27298 = state_27241;
(statearr_27298[(7)] = inst_27140__$1);

return statearr_27298;
})();
if(inst_27140__$1){
var statearr_27299_27362 = state_27241__$1;
(statearr_27299_27362[(1)] = (16));

} else {
var statearr_27300_27363 = state_27241__$1;
(statearr_27300_27363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (9))){
var inst_27170 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27301_27364 = state_27241__$1;
(statearr_27301_27364[(2)] = inst_27170);

(statearr_27301_27364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (5))){
var inst_27116 = cljs.core.deref.call(null,cs);
var inst_27117 = cljs.core.seq.call(null,inst_27116);
var inst_27118 = inst_27117;
var inst_27119 = null;
var inst_27120 = (0);
var inst_27121 = (0);
var state_27241__$1 = (function (){var statearr_27302 = state_27241;
(statearr_27302[(13)] = inst_27119);

(statearr_27302[(14)] = inst_27121);

(statearr_27302[(15)] = inst_27120);

(statearr_27302[(17)] = inst_27118);

return statearr_27302;
})();
var statearr_27303_27365 = state_27241__$1;
(statearr_27303_27365[(2)] = null);

(statearr_27303_27365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (14))){
var state_27241__$1 = state_27241;
var statearr_27304_27366 = state_27241__$1;
(statearr_27304_27366[(2)] = null);

(statearr_27304_27366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (45))){
var inst_27231 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27305_27367 = state_27241__$1;
(statearr_27305_27367[(2)] = inst_27231);

(statearr_27305_27367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (26))){
var inst_27173 = (state_27241[(29)]);
var inst_27227 = (state_27241[(2)]);
var inst_27228 = cljs.core.seq.call(null,inst_27173);
var state_27241__$1 = (function (){var statearr_27306 = state_27241;
(statearr_27306[(31)] = inst_27227);

return statearr_27306;
})();
if(inst_27228){
var statearr_27307_27368 = state_27241__$1;
(statearr_27307_27368[(1)] = (42));

} else {
var statearr_27308_27369 = state_27241__$1;
(statearr_27308_27369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (16))){
var inst_27140 = (state_27241[(7)]);
var inst_27142 = cljs.core.chunked_seq_QMARK_.call(null,inst_27140);
var state_27241__$1 = state_27241;
if(inst_27142){
var statearr_27309_27370 = state_27241__$1;
(statearr_27309_27370[(1)] = (19));

} else {
var statearr_27310_27371 = state_27241__$1;
(statearr_27310_27371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (38))){
var inst_27220 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27311_27372 = state_27241__$1;
(statearr_27311_27372[(2)] = inst_27220);

(statearr_27311_27372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (30))){
var state_27241__$1 = state_27241;
var statearr_27312_27373 = state_27241__$1;
(statearr_27312_27373[(2)] = null);

(statearr_27312_27373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (10))){
var inst_27119 = (state_27241[(13)]);
var inst_27121 = (state_27241[(14)]);
var inst_27129 = cljs.core._nth.call(null,inst_27119,inst_27121);
var inst_27130 = cljs.core.nth.call(null,inst_27129,(0),null);
var inst_27131 = cljs.core.nth.call(null,inst_27129,(1),null);
var state_27241__$1 = (function (){var statearr_27313 = state_27241;
(statearr_27313[(26)] = inst_27130);

return statearr_27313;
})();
if(cljs.core.truth_(inst_27131)){
var statearr_27314_27374 = state_27241__$1;
(statearr_27314_27374[(1)] = (13));

} else {
var statearr_27315_27375 = state_27241__$1;
(statearr_27315_27375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (18))){
var inst_27166 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27316_27376 = state_27241__$1;
(statearr_27316_27376[(2)] = inst_27166);

(statearr_27316_27376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (42))){
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(45),dchan);
} else {
if((state_val_27242 === (37))){
var inst_27209 = (state_27241[(23)]);
var inst_27109 = (state_27241[(11)]);
var inst_27200 = (state_27241[(25)]);
var inst_27209__$1 = cljs.core.first.call(null,inst_27200);
var inst_27210 = cljs.core.async.put_BANG_.call(null,inst_27209__$1,inst_27109,done);
var state_27241__$1 = (function (){var statearr_27317 = state_27241;
(statearr_27317[(23)] = inst_27209__$1);

return statearr_27317;
})();
if(cljs.core.truth_(inst_27210)){
var statearr_27318_27377 = state_27241__$1;
(statearr_27318_27377[(1)] = (39));

} else {
var statearr_27319_27378 = state_27241__$1;
(statearr_27319_27378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (8))){
var inst_27121 = (state_27241[(14)]);
var inst_27120 = (state_27241[(15)]);
var inst_27123 = (inst_27121 < inst_27120);
var inst_27124 = inst_27123;
var state_27241__$1 = state_27241;
if(cljs.core.truth_(inst_27124)){
var statearr_27320_27379 = state_27241__$1;
(statearr_27320_27379[(1)] = (10));

} else {
var statearr_27321_27380 = state_27241__$1;
(statearr_27321_27380[(1)] = (11));

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
});})(c__24643__auto___27326,cs,m,dchan,dctr,done))
;
return ((function (switch__24476__auto__,c__24643__auto___27326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24477__auto__ = null;
var cljs$core$async$mult_$_state_machine__24477__auto____0 = (function (){
var statearr_27322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27322[(0)] = cljs$core$async$mult_$_state_machine__24477__auto__);

(statearr_27322[(1)] = (1));

return statearr_27322;
});
var cljs$core$async$mult_$_state_machine__24477__auto____1 = (function (state_27241){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27323){if((e27323 instanceof Object)){
var ex__24480__auto__ = e27323;
var statearr_27324_27381 = state_27241;
(statearr_27324_27381[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27382 = state_27241;
state_27241 = G__27382;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24477__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24477__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24477__auto____0;
cljs$core$async$mult_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24477__auto____1;
return cljs$core$async$mult_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27326,cs,m,dchan,dctr,done))
})();
var state__24645__auto__ = (function (){var statearr_27325 = f__24644__auto__.call(null);
(statearr_27325[(6)] = c__24643__auto___27326);

return statearr_27325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27326,cs,m,dchan,dctr,done))
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
var G__27384 = arguments.length;
switch (G__27384) {
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
var len__4730__auto___27396 = arguments.length;
var i__4731__auto___27397 = (0);
while(true){
if((i__4731__auto___27397 < len__4730__auto___27396)){
args__4736__auto__.push((arguments[i__4731__auto___27397]));

var G__27398 = (i__4731__auto___27397 + (1));
i__4731__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27390){
var map__27391 = p__27390;
var map__27391__$1 = (((((!((map__27391 == null))))?(((((map__27391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27391):map__27391);
var opts = map__27391__$1;
var statearr_27393_27399 = state;
(statearr_27393_27399[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__27391,map__27391__$1,opts){
return (function (val){
var statearr_27394_27400 = state;
(statearr_27394_27400[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27391,map__27391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27395_27401 = state;
(statearr_27395_27401[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27386){
var G__27387 = cljs.core.first.call(null,seq27386);
var seq27386__$1 = cljs.core.next.call(null,seq27386);
var G__27388 = cljs.core.first.call(null,seq27386__$1);
var seq27386__$2 = cljs.core.next.call(null,seq27386__$1);
var G__27389 = cljs.core.first.call(null,seq27386__$2);
var seq27386__$3 = cljs.core.next.call(null,seq27386__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27387,G__27388,G__27389,seq27386__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27402 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27403){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27403 = meta27403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27404,meta27403__$1){
var self__ = this;
var _27404__$1 = this;
return (new cljs.core.async.t_cljs$core$async27402(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27403__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27404){
var self__ = this;
var _27404__$1 = this;
return self__.meta27403;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27402.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27403","meta27403",1838808208,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27402";

cljs.core.async.t_cljs$core$async27402.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27402");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27402.
 */
cljs.core.async.__GT_t_cljs$core$async27402 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27402(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27403){
return (new cljs.core.async.t_cljs$core$async27402(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27403));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27402(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24643__auto___27566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27506){
var state_val_27507 = (state_27506[(1)]);
if((state_val_27507 === (7))){
var inst_27421 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27508_27567 = state_27506__$1;
(statearr_27508_27567[(2)] = inst_27421);

(statearr_27508_27567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (20))){
var inst_27433 = (state_27506[(7)]);
var state_27506__$1 = state_27506;
var statearr_27509_27568 = state_27506__$1;
(statearr_27509_27568[(2)] = inst_27433);

(statearr_27509_27568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (27))){
var state_27506__$1 = state_27506;
var statearr_27510_27569 = state_27506__$1;
(statearr_27510_27569[(2)] = null);

(statearr_27510_27569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (1))){
var inst_27408 = (state_27506[(8)]);
var inst_27408__$1 = calc_state.call(null);
var inst_27410 = (inst_27408__$1 == null);
var inst_27411 = cljs.core.not.call(null,inst_27410);
var state_27506__$1 = (function (){var statearr_27511 = state_27506;
(statearr_27511[(8)] = inst_27408__$1);

return statearr_27511;
})();
if(inst_27411){
var statearr_27512_27570 = state_27506__$1;
(statearr_27512_27570[(1)] = (2));

} else {
var statearr_27513_27571 = state_27506__$1;
(statearr_27513_27571[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (24))){
var inst_27457 = (state_27506[(9)]);
var inst_27480 = (state_27506[(10)]);
var inst_27466 = (state_27506[(11)]);
var inst_27480__$1 = inst_27457.call(null,inst_27466);
var state_27506__$1 = (function (){var statearr_27514 = state_27506;
(statearr_27514[(10)] = inst_27480__$1);

return statearr_27514;
})();
if(cljs.core.truth_(inst_27480__$1)){
var statearr_27515_27572 = state_27506__$1;
(statearr_27515_27572[(1)] = (29));

} else {
var statearr_27516_27573 = state_27506__$1;
(statearr_27516_27573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (4))){
var inst_27424 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27424)){
var statearr_27517_27574 = state_27506__$1;
(statearr_27517_27574[(1)] = (8));

} else {
var statearr_27518_27575 = state_27506__$1;
(statearr_27518_27575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (15))){
var inst_27451 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27451)){
var statearr_27519_27576 = state_27506__$1;
(statearr_27519_27576[(1)] = (19));

} else {
var statearr_27520_27577 = state_27506__$1;
(statearr_27520_27577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (21))){
var inst_27456 = (state_27506[(12)]);
var inst_27456__$1 = (state_27506[(2)]);
var inst_27457 = cljs.core.get.call(null,inst_27456__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27458 = cljs.core.get.call(null,inst_27456__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27459 = cljs.core.get.call(null,inst_27456__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27506__$1 = (function (){var statearr_27521 = state_27506;
(statearr_27521[(9)] = inst_27457);

(statearr_27521[(12)] = inst_27456__$1);

(statearr_27521[(13)] = inst_27458);

return statearr_27521;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27506__$1,(22),inst_27459);
} else {
if((state_val_27507 === (31))){
var inst_27488 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27488)){
var statearr_27522_27578 = state_27506__$1;
(statearr_27522_27578[(1)] = (32));

} else {
var statearr_27523_27579 = state_27506__$1;
(statearr_27523_27579[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (32))){
var inst_27465 = (state_27506[(14)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(35),out,inst_27465);
} else {
if((state_val_27507 === (33))){
var inst_27456 = (state_27506[(12)]);
var inst_27433 = inst_27456;
var state_27506__$1 = (function (){var statearr_27524 = state_27506;
(statearr_27524[(7)] = inst_27433);

return statearr_27524;
})();
var statearr_27525_27580 = state_27506__$1;
(statearr_27525_27580[(2)] = null);

(statearr_27525_27580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (13))){
var inst_27433 = (state_27506[(7)]);
var inst_27440 = inst_27433.cljs$lang$protocol_mask$partition0$;
var inst_27441 = (inst_27440 & (64));
var inst_27442 = inst_27433.cljs$core$ISeq$;
var inst_27443 = (cljs.core.PROTOCOL_SENTINEL === inst_27442);
var inst_27444 = ((inst_27441) || (inst_27443));
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27444)){
var statearr_27526_27581 = state_27506__$1;
(statearr_27526_27581[(1)] = (16));

} else {
var statearr_27527_27582 = state_27506__$1;
(statearr_27527_27582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (22))){
var inst_27466 = (state_27506[(11)]);
var inst_27465 = (state_27506[(14)]);
var inst_27464 = (state_27506[(2)]);
var inst_27465__$1 = cljs.core.nth.call(null,inst_27464,(0),null);
var inst_27466__$1 = cljs.core.nth.call(null,inst_27464,(1),null);
var inst_27467 = (inst_27465__$1 == null);
var inst_27468 = cljs.core._EQ_.call(null,inst_27466__$1,change);
var inst_27469 = ((inst_27467) || (inst_27468));
var state_27506__$1 = (function (){var statearr_27528 = state_27506;
(statearr_27528[(11)] = inst_27466__$1);

(statearr_27528[(14)] = inst_27465__$1);

return statearr_27528;
})();
if(cljs.core.truth_(inst_27469)){
var statearr_27529_27583 = state_27506__$1;
(statearr_27529_27583[(1)] = (23));

} else {
var statearr_27530_27584 = state_27506__$1;
(statearr_27530_27584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (36))){
var inst_27456 = (state_27506[(12)]);
var inst_27433 = inst_27456;
var state_27506__$1 = (function (){var statearr_27531 = state_27506;
(statearr_27531[(7)] = inst_27433);

return statearr_27531;
})();
var statearr_27532_27585 = state_27506__$1;
(statearr_27532_27585[(2)] = null);

(statearr_27532_27585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (29))){
var inst_27480 = (state_27506[(10)]);
var state_27506__$1 = state_27506;
var statearr_27533_27586 = state_27506__$1;
(statearr_27533_27586[(2)] = inst_27480);

(statearr_27533_27586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (6))){
var state_27506__$1 = state_27506;
var statearr_27534_27587 = state_27506__$1;
(statearr_27534_27587[(2)] = false);

(statearr_27534_27587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (28))){
var inst_27476 = (state_27506[(2)]);
var inst_27477 = calc_state.call(null);
var inst_27433 = inst_27477;
var state_27506__$1 = (function (){var statearr_27535 = state_27506;
(statearr_27535[(7)] = inst_27433);

(statearr_27535[(15)] = inst_27476);

return statearr_27535;
})();
var statearr_27536_27588 = state_27506__$1;
(statearr_27536_27588[(2)] = null);

(statearr_27536_27588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (25))){
var inst_27502 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27537_27589 = state_27506__$1;
(statearr_27537_27589[(2)] = inst_27502);

(statearr_27537_27589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (34))){
var inst_27500 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27538_27590 = state_27506__$1;
(statearr_27538_27590[(2)] = inst_27500);

(statearr_27538_27590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (17))){
var state_27506__$1 = state_27506;
var statearr_27539_27591 = state_27506__$1;
(statearr_27539_27591[(2)] = false);

(statearr_27539_27591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (3))){
var state_27506__$1 = state_27506;
var statearr_27540_27592 = state_27506__$1;
(statearr_27540_27592[(2)] = false);

(statearr_27540_27592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (12))){
var inst_27504 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else {
if((state_val_27507 === (2))){
var inst_27408 = (state_27506[(8)]);
var inst_27413 = inst_27408.cljs$lang$protocol_mask$partition0$;
var inst_27414 = (inst_27413 & (64));
var inst_27415 = inst_27408.cljs$core$ISeq$;
var inst_27416 = (cljs.core.PROTOCOL_SENTINEL === inst_27415);
var inst_27417 = ((inst_27414) || (inst_27416));
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27417)){
var statearr_27541_27593 = state_27506__$1;
(statearr_27541_27593[(1)] = (5));

} else {
var statearr_27542_27594 = state_27506__$1;
(statearr_27542_27594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (23))){
var inst_27465 = (state_27506[(14)]);
var inst_27471 = (inst_27465 == null);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27471)){
var statearr_27543_27595 = state_27506__$1;
(statearr_27543_27595[(1)] = (26));

} else {
var statearr_27544_27596 = state_27506__$1;
(statearr_27544_27596[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (35))){
var inst_27491 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
if(cljs.core.truth_(inst_27491)){
var statearr_27545_27597 = state_27506__$1;
(statearr_27545_27597[(1)] = (36));

} else {
var statearr_27546_27598 = state_27506__$1;
(statearr_27546_27598[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (19))){
var inst_27433 = (state_27506[(7)]);
var inst_27453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27433);
var state_27506__$1 = state_27506;
var statearr_27547_27599 = state_27506__$1;
(statearr_27547_27599[(2)] = inst_27453);

(statearr_27547_27599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (11))){
var inst_27433 = (state_27506[(7)]);
var inst_27437 = (inst_27433 == null);
var inst_27438 = cljs.core.not.call(null,inst_27437);
var state_27506__$1 = state_27506;
if(inst_27438){
var statearr_27548_27600 = state_27506__$1;
(statearr_27548_27600[(1)] = (13));

} else {
var statearr_27549_27601 = state_27506__$1;
(statearr_27549_27601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (9))){
var inst_27408 = (state_27506[(8)]);
var state_27506__$1 = state_27506;
var statearr_27550_27602 = state_27506__$1;
(statearr_27550_27602[(2)] = inst_27408);

(statearr_27550_27602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (5))){
var state_27506__$1 = state_27506;
var statearr_27551_27603 = state_27506__$1;
(statearr_27551_27603[(2)] = true);

(statearr_27551_27603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (14))){
var state_27506__$1 = state_27506;
var statearr_27552_27604 = state_27506__$1;
(statearr_27552_27604[(2)] = false);

(statearr_27552_27604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (26))){
var inst_27466 = (state_27506[(11)]);
var inst_27473 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27466);
var state_27506__$1 = state_27506;
var statearr_27553_27605 = state_27506__$1;
(statearr_27553_27605[(2)] = inst_27473);

(statearr_27553_27605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (16))){
var state_27506__$1 = state_27506;
var statearr_27554_27606 = state_27506__$1;
(statearr_27554_27606[(2)] = true);

(statearr_27554_27606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (38))){
var inst_27496 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27555_27607 = state_27506__$1;
(statearr_27555_27607[(2)] = inst_27496);

(statearr_27555_27607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (30))){
var inst_27457 = (state_27506[(9)]);
var inst_27458 = (state_27506[(13)]);
var inst_27466 = (state_27506[(11)]);
var inst_27483 = cljs.core.empty_QMARK_.call(null,inst_27457);
var inst_27484 = inst_27458.call(null,inst_27466);
var inst_27485 = cljs.core.not.call(null,inst_27484);
var inst_27486 = ((inst_27483) && (inst_27485));
var state_27506__$1 = state_27506;
var statearr_27556_27608 = state_27506__$1;
(statearr_27556_27608[(2)] = inst_27486);

(statearr_27556_27608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (10))){
var inst_27408 = (state_27506[(8)]);
var inst_27429 = (state_27506[(2)]);
var inst_27430 = cljs.core.get.call(null,inst_27429,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27431 = cljs.core.get.call(null,inst_27429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27432 = cljs.core.get.call(null,inst_27429,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27433 = inst_27408;
var state_27506__$1 = (function (){var statearr_27557 = state_27506;
(statearr_27557[(16)] = inst_27430);

(statearr_27557[(7)] = inst_27433);

(statearr_27557[(17)] = inst_27432);

(statearr_27557[(18)] = inst_27431);

return statearr_27557;
})();
var statearr_27558_27609 = state_27506__$1;
(statearr_27558_27609[(2)] = null);

(statearr_27558_27609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (18))){
var inst_27448 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27559_27610 = state_27506__$1;
(statearr_27559_27610[(2)] = inst_27448);

(statearr_27559_27610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (37))){
var state_27506__$1 = state_27506;
var statearr_27560_27611 = state_27506__$1;
(statearr_27560_27611[(2)] = null);

(statearr_27560_27611[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (8))){
var inst_27408 = (state_27506[(8)]);
var inst_27426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27408);
var state_27506__$1 = state_27506;
var statearr_27561_27612 = state_27506__$1;
(statearr_27561_27612[(2)] = inst_27426);

(statearr_27561_27612[(1)] = (10));


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
});})(c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24476__auto__,c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24477__auto__ = null;
var cljs$core$async$mix_$_state_machine__24477__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = cljs$core$async$mix_$_state_machine__24477__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var cljs$core$async$mix_$_state_machine__24477__auto____1 = (function (state_27506){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__24480__auto__ = e27563;
var statearr_27564_27613 = state_27506;
(statearr_27564_27613[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27614 = state_27506;
state_27506 = G__27614;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24477__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24477__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24477__auto____0;
cljs$core$async$mix_$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24477__auto____1;
return cljs$core$async$mix_$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24645__auto__ = (function (){var statearr_27565 = f__24644__auto__.call(null);
(statearr_27565[(6)] = c__24643__auto___27566);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27566,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27616 = arguments.length;
switch (G__27616) {
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
var G__27620 = arguments.length;
switch (G__27620) {
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
return (function (p1__27618_SHARP_){
if(cljs.core.truth_(p1__27618_SHARP_.call(null,topic))){
return p1__27618_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27618_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27621 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27622){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27622 = meta27622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27623,meta27622__$1){
var self__ = this;
var _27623__$1 = this;
return (new cljs.core.async.t_cljs$core$async27621(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27622__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27623){
var self__ = this;
var _27623__$1 = this;
return self__.meta27622;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27622","meta27622",276199191,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27621";

cljs.core.async.t_cljs$core$async27621.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27621");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27621.
 */
cljs.core.async.__GT_t_cljs$core$async27621 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27622){
return (new cljs.core.async.t_cljs$core$async27621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27622));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27621(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24643__auto___27741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27741,mults,ensure_mult,p){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27741,mults,ensure_mult,p){
return (function (state_27695){
var state_val_27696 = (state_27695[(1)]);
if((state_val_27696 === (7))){
var inst_27691 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27697_27742 = state_27695__$1;
(statearr_27697_27742[(2)] = inst_27691);

(statearr_27697_27742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (20))){
var state_27695__$1 = state_27695;
var statearr_27698_27743 = state_27695__$1;
(statearr_27698_27743[(2)] = null);

(statearr_27698_27743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (1))){
var state_27695__$1 = state_27695;
var statearr_27699_27744 = state_27695__$1;
(statearr_27699_27744[(2)] = null);

(statearr_27699_27744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (24))){
var inst_27674 = (state_27695[(7)]);
var inst_27683 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27674);
var state_27695__$1 = state_27695;
var statearr_27700_27745 = state_27695__$1;
(statearr_27700_27745[(2)] = inst_27683);

(statearr_27700_27745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (4))){
var inst_27626 = (state_27695[(8)]);
var inst_27626__$1 = (state_27695[(2)]);
var inst_27627 = (inst_27626__$1 == null);
var state_27695__$1 = (function (){var statearr_27701 = state_27695;
(statearr_27701[(8)] = inst_27626__$1);

return statearr_27701;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27702_27746 = state_27695__$1;
(statearr_27702_27746[(1)] = (5));

} else {
var statearr_27703_27747 = state_27695__$1;
(statearr_27703_27747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (15))){
var inst_27668 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27704_27748 = state_27695__$1;
(statearr_27704_27748[(2)] = inst_27668);

(statearr_27704_27748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (21))){
var inst_27688 = (state_27695[(2)]);
var state_27695__$1 = (function (){var statearr_27705 = state_27695;
(statearr_27705[(9)] = inst_27688);

return statearr_27705;
})();
var statearr_27706_27749 = state_27695__$1;
(statearr_27706_27749[(2)] = null);

(statearr_27706_27749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (13))){
var inst_27650 = (state_27695[(10)]);
var inst_27652 = cljs.core.chunked_seq_QMARK_.call(null,inst_27650);
var state_27695__$1 = state_27695;
if(inst_27652){
var statearr_27707_27750 = state_27695__$1;
(statearr_27707_27750[(1)] = (16));

} else {
var statearr_27708_27751 = state_27695__$1;
(statearr_27708_27751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (22))){
var inst_27680 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
if(cljs.core.truth_(inst_27680)){
var statearr_27709_27752 = state_27695__$1;
(statearr_27709_27752[(1)] = (23));

} else {
var statearr_27710_27753 = state_27695__$1;
(statearr_27710_27753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (6))){
var inst_27674 = (state_27695[(7)]);
var inst_27676 = (state_27695[(11)]);
var inst_27626 = (state_27695[(8)]);
var inst_27674__$1 = topic_fn.call(null,inst_27626);
var inst_27675 = cljs.core.deref.call(null,mults);
var inst_27676__$1 = cljs.core.get.call(null,inst_27675,inst_27674__$1);
var state_27695__$1 = (function (){var statearr_27711 = state_27695;
(statearr_27711[(7)] = inst_27674__$1);

(statearr_27711[(11)] = inst_27676__$1);

return statearr_27711;
})();
if(cljs.core.truth_(inst_27676__$1)){
var statearr_27712_27754 = state_27695__$1;
(statearr_27712_27754[(1)] = (19));

} else {
var statearr_27713_27755 = state_27695__$1;
(statearr_27713_27755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (25))){
var inst_27685 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27714_27756 = state_27695__$1;
(statearr_27714_27756[(2)] = inst_27685);

(statearr_27714_27756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (17))){
var inst_27650 = (state_27695[(10)]);
var inst_27659 = cljs.core.first.call(null,inst_27650);
var inst_27660 = cljs.core.async.muxch_STAR_.call(null,inst_27659);
var inst_27661 = cljs.core.async.close_BANG_.call(null,inst_27660);
var inst_27662 = cljs.core.next.call(null,inst_27650);
var inst_27636 = inst_27662;
var inst_27637 = null;
var inst_27638 = (0);
var inst_27639 = (0);
var state_27695__$1 = (function (){var statearr_27715 = state_27695;
(statearr_27715[(12)] = inst_27639);

(statearr_27715[(13)] = inst_27636);

(statearr_27715[(14)] = inst_27638);

(statearr_27715[(15)] = inst_27661);

(statearr_27715[(16)] = inst_27637);

return statearr_27715;
})();
var statearr_27716_27757 = state_27695__$1;
(statearr_27716_27757[(2)] = null);

(statearr_27716_27757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (3))){
var inst_27693 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27695__$1,inst_27693);
} else {
if((state_val_27696 === (12))){
var inst_27670 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27717_27758 = state_27695__$1;
(statearr_27717_27758[(2)] = inst_27670);

(statearr_27717_27758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (2))){
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(4),ch);
} else {
if((state_val_27696 === (23))){
var state_27695__$1 = state_27695;
var statearr_27718_27759 = state_27695__$1;
(statearr_27718_27759[(2)] = null);

(statearr_27718_27759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (19))){
var inst_27676 = (state_27695[(11)]);
var inst_27626 = (state_27695[(8)]);
var inst_27678 = cljs.core.async.muxch_STAR_.call(null,inst_27676);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27695__$1,(22),inst_27678,inst_27626);
} else {
if((state_val_27696 === (11))){
var inst_27636 = (state_27695[(13)]);
var inst_27650 = (state_27695[(10)]);
var inst_27650__$1 = cljs.core.seq.call(null,inst_27636);
var state_27695__$1 = (function (){var statearr_27719 = state_27695;
(statearr_27719[(10)] = inst_27650__$1);

return statearr_27719;
})();
if(inst_27650__$1){
var statearr_27720_27760 = state_27695__$1;
(statearr_27720_27760[(1)] = (13));

} else {
var statearr_27721_27761 = state_27695__$1;
(statearr_27721_27761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (9))){
var inst_27672 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27722_27762 = state_27695__$1;
(statearr_27722_27762[(2)] = inst_27672);

(statearr_27722_27762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (5))){
var inst_27633 = cljs.core.deref.call(null,mults);
var inst_27634 = cljs.core.vals.call(null,inst_27633);
var inst_27635 = cljs.core.seq.call(null,inst_27634);
var inst_27636 = inst_27635;
var inst_27637 = null;
var inst_27638 = (0);
var inst_27639 = (0);
var state_27695__$1 = (function (){var statearr_27723 = state_27695;
(statearr_27723[(12)] = inst_27639);

(statearr_27723[(13)] = inst_27636);

(statearr_27723[(14)] = inst_27638);

(statearr_27723[(16)] = inst_27637);

return statearr_27723;
})();
var statearr_27724_27763 = state_27695__$1;
(statearr_27724_27763[(2)] = null);

(statearr_27724_27763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (14))){
var state_27695__$1 = state_27695;
var statearr_27728_27764 = state_27695__$1;
(statearr_27728_27764[(2)] = null);

(statearr_27728_27764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (16))){
var inst_27650 = (state_27695[(10)]);
var inst_27654 = cljs.core.chunk_first.call(null,inst_27650);
var inst_27655 = cljs.core.chunk_rest.call(null,inst_27650);
var inst_27656 = cljs.core.count.call(null,inst_27654);
var inst_27636 = inst_27655;
var inst_27637 = inst_27654;
var inst_27638 = inst_27656;
var inst_27639 = (0);
var state_27695__$1 = (function (){var statearr_27729 = state_27695;
(statearr_27729[(12)] = inst_27639);

(statearr_27729[(13)] = inst_27636);

(statearr_27729[(14)] = inst_27638);

(statearr_27729[(16)] = inst_27637);

return statearr_27729;
})();
var statearr_27730_27765 = state_27695__$1;
(statearr_27730_27765[(2)] = null);

(statearr_27730_27765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (10))){
var inst_27639 = (state_27695[(12)]);
var inst_27636 = (state_27695[(13)]);
var inst_27638 = (state_27695[(14)]);
var inst_27637 = (state_27695[(16)]);
var inst_27644 = cljs.core._nth.call(null,inst_27637,inst_27639);
var inst_27645 = cljs.core.async.muxch_STAR_.call(null,inst_27644);
var inst_27646 = cljs.core.async.close_BANG_.call(null,inst_27645);
var inst_27647 = (inst_27639 + (1));
var tmp27725 = inst_27636;
var tmp27726 = inst_27638;
var tmp27727 = inst_27637;
var inst_27636__$1 = tmp27725;
var inst_27637__$1 = tmp27727;
var inst_27638__$1 = tmp27726;
var inst_27639__$1 = inst_27647;
var state_27695__$1 = (function (){var statearr_27731 = state_27695;
(statearr_27731[(17)] = inst_27646);

(statearr_27731[(12)] = inst_27639__$1);

(statearr_27731[(13)] = inst_27636__$1);

(statearr_27731[(14)] = inst_27638__$1);

(statearr_27731[(16)] = inst_27637__$1);

return statearr_27731;
})();
var statearr_27732_27766 = state_27695__$1;
(statearr_27732_27766[(2)] = null);

(statearr_27732_27766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (18))){
var inst_27665 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27733_27767 = state_27695__$1;
(statearr_27733_27767[(2)] = inst_27665);

(statearr_27733_27767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (8))){
var inst_27639 = (state_27695[(12)]);
var inst_27638 = (state_27695[(14)]);
var inst_27641 = (inst_27639 < inst_27638);
var inst_27642 = inst_27641;
var state_27695__$1 = state_27695;
if(cljs.core.truth_(inst_27642)){
var statearr_27734_27768 = state_27695__$1;
(statearr_27734_27768[(1)] = (10));

} else {
var statearr_27735_27769 = state_27695__$1;
(statearr_27735_27769[(1)] = (11));

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
});})(c__24643__auto___27741,mults,ensure_mult,p))
;
return ((function (switch__24476__auto__,c__24643__auto___27741,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_27736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27736[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_27736[(1)] = (1));

return statearr_27736;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_27695){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27737){if((e27737 instanceof Object)){
var ex__24480__auto__ = e27737;
var statearr_27738_27770 = state_27695;
(statearr_27738_27770[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27771 = state_27695;
state_27695 = G__27771;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_27695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_27695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27741,mults,ensure_mult,p))
})();
var state__24645__auto__ = (function (){var statearr_27739 = f__24644__auto__.call(null);
(statearr_27739[(6)] = c__24643__auto___27741);

return statearr_27739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27741,mults,ensure_mult,p))
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
var G__27773 = arguments.length;
switch (G__27773) {
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
var G__27776 = arguments.length;
switch (G__27776) {
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
var G__27779 = arguments.length;
switch (G__27779) {
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
var c__24643__auto___27846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27818){
var state_val_27819 = (state_27818[(1)]);
if((state_val_27819 === (7))){
var state_27818__$1 = state_27818;
var statearr_27820_27847 = state_27818__$1;
(statearr_27820_27847[(2)] = null);

(statearr_27820_27847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (1))){
var state_27818__$1 = state_27818;
var statearr_27821_27848 = state_27818__$1;
(statearr_27821_27848[(2)] = null);

(statearr_27821_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (4))){
var inst_27782 = (state_27818[(7)]);
var inst_27784 = (inst_27782 < cnt);
var state_27818__$1 = state_27818;
if(cljs.core.truth_(inst_27784)){
var statearr_27822_27849 = state_27818__$1;
(statearr_27822_27849[(1)] = (6));

} else {
var statearr_27823_27850 = state_27818__$1;
(statearr_27823_27850[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (15))){
var inst_27814 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
var statearr_27824_27851 = state_27818__$1;
(statearr_27824_27851[(2)] = inst_27814);

(statearr_27824_27851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (13))){
var inst_27807 = cljs.core.async.close_BANG_.call(null,out);
var state_27818__$1 = state_27818;
var statearr_27825_27852 = state_27818__$1;
(statearr_27825_27852[(2)] = inst_27807);

(statearr_27825_27852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (6))){
var state_27818__$1 = state_27818;
var statearr_27826_27853 = state_27818__$1;
(statearr_27826_27853[(2)] = null);

(statearr_27826_27853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (3))){
var inst_27816 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27818__$1,inst_27816);
} else {
if((state_val_27819 === (12))){
var inst_27804 = (state_27818[(8)]);
var inst_27804__$1 = (state_27818[(2)]);
var inst_27805 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27804__$1);
var state_27818__$1 = (function (){var statearr_27827 = state_27818;
(statearr_27827[(8)] = inst_27804__$1);

return statearr_27827;
})();
if(cljs.core.truth_(inst_27805)){
var statearr_27828_27854 = state_27818__$1;
(statearr_27828_27854[(1)] = (13));

} else {
var statearr_27829_27855 = state_27818__$1;
(statearr_27829_27855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (2))){
var inst_27781 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27782 = (0);
var state_27818__$1 = (function (){var statearr_27830 = state_27818;
(statearr_27830[(9)] = inst_27781);

(statearr_27830[(7)] = inst_27782);

return statearr_27830;
})();
var statearr_27831_27856 = state_27818__$1;
(statearr_27831_27856[(2)] = null);

(statearr_27831_27856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (11))){
var inst_27782 = (state_27818[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27818,(10),Object,null,(9));
var inst_27791 = chs__$1.call(null,inst_27782);
var inst_27792 = done.call(null,inst_27782);
var inst_27793 = cljs.core.async.take_BANG_.call(null,inst_27791,inst_27792);
var state_27818__$1 = state_27818;
var statearr_27832_27857 = state_27818__$1;
(statearr_27832_27857[(2)] = inst_27793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (9))){
var inst_27782 = (state_27818[(7)]);
var inst_27795 = (state_27818[(2)]);
var inst_27796 = (inst_27782 + (1));
var inst_27782__$1 = inst_27796;
var state_27818__$1 = (function (){var statearr_27833 = state_27818;
(statearr_27833[(10)] = inst_27795);

(statearr_27833[(7)] = inst_27782__$1);

return statearr_27833;
})();
var statearr_27834_27858 = state_27818__$1;
(statearr_27834_27858[(2)] = null);

(statearr_27834_27858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (5))){
var inst_27802 = (state_27818[(2)]);
var state_27818__$1 = (function (){var statearr_27835 = state_27818;
(statearr_27835[(11)] = inst_27802);

return statearr_27835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27818__$1,(12),dchan);
} else {
if((state_val_27819 === (14))){
var inst_27804 = (state_27818[(8)]);
var inst_27809 = cljs.core.apply.call(null,f,inst_27804);
var state_27818__$1 = state_27818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27818__$1,(16),out,inst_27809);
} else {
if((state_val_27819 === (16))){
var inst_27811 = (state_27818[(2)]);
var state_27818__$1 = (function (){var statearr_27836 = state_27818;
(statearr_27836[(12)] = inst_27811);

return statearr_27836;
})();
var statearr_27837_27859 = state_27818__$1;
(statearr_27837_27859[(2)] = null);

(statearr_27837_27859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (10))){
var inst_27786 = (state_27818[(2)]);
var inst_27787 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27818__$1 = (function (){var statearr_27838 = state_27818;
(statearr_27838[(13)] = inst_27786);

return statearr_27838;
})();
var statearr_27839_27860 = state_27818__$1;
(statearr_27839_27860[(2)] = inst_27787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27819 === (8))){
var inst_27800 = (state_27818[(2)]);
var state_27818__$1 = state_27818;
var statearr_27840_27861 = state_27818__$1;
(statearr_27840_27861[(2)] = inst_27800);

(statearr_27840_27861[(1)] = (5));


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
});})(c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24476__auto__,c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_27841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27841[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_27841[(1)] = (1));

return statearr_27841;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_27818){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27842){if((e27842 instanceof Object)){
var ex__24480__auto__ = e27842;
var statearr_27843_27862 = state_27818;
(statearr_27843_27862[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27863 = state_27818;
state_27818 = G__27863;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_27818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_27818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24645__auto__ = (function (){var statearr_27844 = f__24644__auto__.call(null);
(statearr_27844[(6)] = c__24643__auto___27846);

return statearr_27844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27846,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27866 = arguments.length;
switch (G__27866) {
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
var c__24643__auto___27920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27920,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27920,out){
return (function (state_27898){
var state_val_27899 = (state_27898[(1)]);
if((state_val_27899 === (7))){
var inst_27877 = (state_27898[(7)]);
var inst_27878 = (state_27898[(8)]);
var inst_27877__$1 = (state_27898[(2)]);
var inst_27878__$1 = cljs.core.nth.call(null,inst_27877__$1,(0),null);
var inst_27879 = cljs.core.nth.call(null,inst_27877__$1,(1),null);
var inst_27880 = (inst_27878__$1 == null);
var state_27898__$1 = (function (){var statearr_27900 = state_27898;
(statearr_27900[(9)] = inst_27879);

(statearr_27900[(7)] = inst_27877__$1);

(statearr_27900[(8)] = inst_27878__$1);

return statearr_27900;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_27901_27921 = state_27898__$1;
(statearr_27901_27921[(1)] = (8));

} else {
var statearr_27902_27922 = state_27898__$1;
(statearr_27902_27922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (1))){
var inst_27867 = cljs.core.vec.call(null,chs);
var inst_27868 = inst_27867;
var state_27898__$1 = (function (){var statearr_27903 = state_27898;
(statearr_27903[(10)] = inst_27868);

return statearr_27903;
})();
var statearr_27904_27923 = state_27898__$1;
(statearr_27904_27923[(2)] = null);

(statearr_27904_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (4))){
var inst_27868 = (state_27898[(10)]);
var state_27898__$1 = state_27898;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27898__$1,(7),inst_27868);
} else {
if((state_val_27899 === (6))){
var inst_27894 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27905_27924 = state_27898__$1;
(statearr_27905_27924[(2)] = inst_27894);

(statearr_27905_27924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (3))){
var inst_27896 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else {
if((state_val_27899 === (2))){
var inst_27868 = (state_27898[(10)]);
var inst_27870 = cljs.core.count.call(null,inst_27868);
var inst_27871 = (inst_27870 > (0));
var state_27898__$1 = state_27898;
if(cljs.core.truth_(inst_27871)){
var statearr_27907_27925 = state_27898__$1;
(statearr_27907_27925[(1)] = (4));

} else {
var statearr_27908_27926 = state_27898__$1;
(statearr_27908_27926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (11))){
var inst_27868 = (state_27898[(10)]);
var inst_27887 = (state_27898[(2)]);
var tmp27906 = inst_27868;
var inst_27868__$1 = tmp27906;
var state_27898__$1 = (function (){var statearr_27909 = state_27898;
(statearr_27909[(11)] = inst_27887);

(statearr_27909[(10)] = inst_27868__$1);

return statearr_27909;
})();
var statearr_27910_27927 = state_27898__$1;
(statearr_27910_27927[(2)] = null);

(statearr_27910_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (9))){
var inst_27878 = (state_27898[(8)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27898__$1,(11),out,inst_27878);
} else {
if((state_val_27899 === (5))){
var inst_27892 = cljs.core.async.close_BANG_.call(null,out);
var state_27898__$1 = state_27898;
var statearr_27911_27928 = state_27898__$1;
(statearr_27911_27928[(2)] = inst_27892);

(statearr_27911_27928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (10))){
var inst_27890 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27912_27929 = state_27898__$1;
(statearr_27912_27929[(2)] = inst_27890);

(statearr_27912_27929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (8))){
var inst_27879 = (state_27898[(9)]);
var inst_27868 = (state_27898[(10)]);
var inst_27877 = (state_27898[(7)]);
var inst_27878 = (state_27898[(8)]);
var inst_27882 = (function (){var cs = inst_27868;
var vec__27873 = inst_27877;
var v = inst_27878;
var c = inst_27879;
return ((function (cs,vec__27873,v,c,inst_27879,inst_27868,inst_27877,inst_27878,state_val_27899,c__24643__auto___27920,out){
return (function (p1__27864_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27864_SHARP_);
});
;})(cs,vec__27873,v,c,inst_27879,inst_27868,inst_27877,inst_27878,state_val_27899,c__24643__auto___27920,out))
})();
var inst_27883 = cljs.core.filterv.call(null,inst_27882,inst_27868);
var inst_27868__$1 = inst_27883;
var state_27898__$1 = (function (){var statearr_27913 = state_27898;
(statearr_27913[(10)] = inst_27868__$1);

return statearr_27913;
})();
var statearr_27914_27930 = state_27898__$1;
(statearr_27914_27930[(2)] = null);

(statearr_27914_27930[(1)] = (2));


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
});})(c__24643__auto___27920,out))
;
return ((function (switch__24476__auto__,c__24643__auto___27920,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_27915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27915[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_27915[(1)] = (1));

return statearr_27915;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_27898){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27916){if((e27916 instanceof Object)){
var ex__24480__auto__ = e27916;
var statearr_27917_27931 = state_27898;
(statearr_27917_27931[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27932 = state_27898;
state_27898 = G__27932;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27920,out))
})();
var state__24645__auto__ = (function (){var statearr_27918 = f__24644__auto__.call(null);
(statearr_27918[(6)] = c__24643__auto___27920);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27920,out))
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
var G__27934 = arguments.length;
switch (G__27934) {
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
var c__24643__auto___27979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___27979,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___27979,out){
return (function (state_27958){
var state_val_27959 = (state_27958[(1)]);
if((state_val_27959 === (7))){
var inst_27940 = (state_27958[(7)]);
var inst_27940__$1 = (state_27958[(2)]);
var inst_27941 = (inst_27940__$1 == null);
var inst_27942 = cljs.core.not.call(null,inst_27941);
var state_27958__$1 = (function (){var statearr_27960 = state_27958;
(statearr_27960[(7)] = inst_27940__$1);

return statearr_27960;
})();
if(inst_27942){
var statearr_27961_27980 = state_27958__$1;
(statearr_27961_27980[(1)] = (8));

} else {
var statearr_27962_27981 = state_27958__$1;
(statearr_27962_27981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (1))){
var inst_27935 = (0);
var state_27958__$1 = (function (){var statearr_27963 = state_27958;
(statearr_27963[(8)] = inst_27935);

return statearr_27963;
})();
var statearr_27964_27982 = state_27958__$1;
(statearr_27964_27982[(2)] = null);

(statearr_27964_27982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (4))){
var state_27958__$1 = state_27958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27958__$1,(7),ch);
} else {
if((state_val_27959 === (6))){
var inst_27953 = (state_27958[(2)]);
var state_27958__$1 = state_27958;
var statearr_27965_27983 = state_27958__$1;
(statearr_27965_27983[(2)] = inst_27953);

(statearr_27965_27983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (3))){
var inst_27955 = (state_27958[(2)]);
var inst_27956 = cljs.core.async.close_BANG_.call(null,out);
var state_27958__$1 = (function (){var statearr_27966 = state_27958;
(statearr_27966[(9)] = inst_27955);

return statearr_27966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27958__$1,inst_27956);
} else {
if((state_val_27959 === (2))){
var inst_27935 = (state_27958[(8)]);
var inst_27937 = (inst_27935 < n);
var state_27958__$1 = state_27958;
if(cljs.core.truth_(inst_27937)){
var statearr_27967_27984 = state_27958__$1;
(statearr_27967_27984[(1)] = (4));

} else {
var statearr_27968_27985 = state_27958__$1;
(statearr_27968_27985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (11))){
var inst_27935 = (state_27958[(8)]);
var inst_27945 = (state_27958[(2)]);
var inst_27946 = (inst_27935 + (1));
var inst_27935__$1 = inst_27946;
var state_27958__$1 = (function (){var statearr_27969 = state_27958;
(statearr_27969[(8)] = inst_27935__$1);

(statearr_27969[(10)] = inst_27945);

return statearr_27969;
})();
var statearr_27970_27986 = state_27958__$1;
(statearr_27970_27986[(2)] = null);

(statearr_27970_27986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (9))){
var state_27958__$1 = state_27958;
var statearr_27971_27987 = state_27958__$1;
(statearr_27971_27987[(2)] = null);

(statearr_27971_27987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (5))){
var state_27958__$1 = state_27958;
var statearr_27972_27988 = state_27958__$1;
(statearr_27972_27988[(2)] = null);

(statearr_27972_27988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (10))){
var inst_27950 = (state_27958[(2)]);
var state_27958__$1 = state_27958;
var statearr_27973_27989 = state_27958__$1;
(statearr_27973_27989[(2)] = inst_27950);

(statearr_27973_27989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27959 === (8))){
var inst_27940 = (state_27958[(7)]);
var state_27958__$1 = state_27958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27958__$1,(11),out,inst_27940);
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
});})(c__24643__auto___27979,out))
;
return ((function (switch__24476__auto__,c__24643__auto___27979,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_27974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27974[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_27974[(1)] = (1));

return statearr_27974;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_27958){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_27958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e27975){if((e27975 instanceof Object)){
var ex__24480__auto__ = e27975;
var statearr_27976_27990 = state_27958;
(statearr_27976_27990[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27991 = state_27958;
state_27958 = G__27991;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_27958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_27958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___27979,out))
})();
var state__24645__auto__ = (function (){var statearr_27977 = f__24644__auto__.call(null);
(statearr_27977[(6)] = c__24643__auto___27979);

return statearr_27977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___27979,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27993 = (function (f,ch,meta27994){
this.f = f;
this.ch = ch;
this.meta27994 = meta27994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27995,meta27994__$1){
var self__ = this;
var _27995__$1 = this;
return (new cljs.core.async.t_cljs$core$async27993(self__.f,self__.ch,meta27994__$1));
});

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27995){
var self__ = this;
var _27995__$1 = this;
return self__.meta27994;
});

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27996 = (function (f,ch,meta27994,_,fn1,meta27997){
this.f = f;
this.ch = ch;
this.meta27994 = meta27994;
this._ = _;
this.fn1 = fn1;
this.meta27997 = meta27997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27998,meta27997__$1){
var self__ = this;
var _27998__$1 = this;
return (new cljs.core.async.t_cljs$core$async27996(self__.f,self__.ch,self__.meta27994,self__._,self__.fn1,meta27997__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27998){
var self__ = this;
var _27998__$1 = this;
return self__.meta27997;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27992_SHARP_){
return f1.call(null,(((p1__27992_SHARP_ == null))?null:self__.f.call(null,p1__27992_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27994","meta27994",-1286728382,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27993","cljs.core.async/t_cljs$core$async27993",1208874454,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27997","meta27997",-2043377991,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27996";

cljs.core.async.t_cljs$core$async27996.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27996");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27996.
 */
cljs.core.async.__GT_t_cljs$core$async27996 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27996(f__$1,ch__$1,meta27994__$1,___$2,fn1__$1,meta27997){
return (new cljs.core.async.t_cljs$core$async27996(f__$1,ch__$1,meta27994__$1,___$2,fn1__$1,meta27997));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27996(self__.f,self__.ch,self__.meta27994,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27994","meta27994",-1286728382,null)], null);
});

cljs.core.async.t_cljs$core$async27993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27993";

cljs.core.async.t_cljs$core$async27993.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27993");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27993.
 */
cljs.core.async.__GT_t_cljs$core$async27993 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27993(f__$1,ch__$1,meta27994){
return (new cljs.core.async.t_cljs$core$async27993(f__$1,ch__$1,meta27994));
});

}

return (new cljs.core.async.t_cljs$core$async27993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27999 = (function (f,ch,meta28000){
this.f = f;
this.ch = ch;
this.meta28000 = meta28000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28001,meta28000__$1){
var self__ = this;
var _28001__$1 = this;
return (new cljs.core.async.t_cljs$core$async27999(self__.f,self__.ch,meta28000__$1));
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28001){
var self__ = this;
var _28001__$1 = this;
return self__.meta28000;
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28000","meta28000",897413568,null)], null);
});

cljs.core.async.t_cljs$core$async27999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27999";

cljs.core.async.t_cljs$core$async27999.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27999");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27999.
 */
cljs.core.async.__GT_t_cljs$core$async27999 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27999(f__$1,ch__$1,meta28000){
return (new cljs.core.async.t_cljs$core$async27999(f__$1,ch__$1,meta28000));
});

}

return (new cljs.core.async.t_cljs$core$async27999(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28002 = (function (p,ch,meta28003){
this.p = p;
this.ch = ch;
this.meta28003 = meta28003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28004,meta28003__$1){
var self__ = this;
var _28004__$1 = this;
return (new cljs.core.async.t_cljs$core$async28002(self__.p,self__.ch,meta28003__$1));
});

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28004){
var self__ = this;
var _28004__$1 = this;
return self__.meta28003;
});

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28003","meta28003",-493991456,null)], null);
});

cljs.core.async.t_cljs$core$async28002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28002";

cljs.core.async.t_cljs$core$async28002.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28002.
 */
cljs.core.async.__GT_t_cljs$core$async28002 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28002(p__$1,ch__$1,meta28003){
return (new cljs.core.async.t_cljs$core$async28002(p__$1,ch__$1,meta28003));
});

}

return (new cljs.core.async.t_cljs$core$async28002(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28006 = arguments.length;
switch (G__28006) {
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
var c__24643__auto___28046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___28046,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___28046,out){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (7))){
var inst_28023 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28029_28047 = state_28027__$1;
(statearr_28029_28047[(2)] = inst_28023);

(statearr_28029_28047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (1))){
var state_28027__$1 = state_28027;
var statearr_28030_28048 = state_28027__$1;
(statearr_28030_28048[(2)] = null);

(statearr_28030_28048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (4))){
var inst_28009 = (state_28027[(7)]);
var inst_28009__$1 = (state_28027[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var state_28027__$1 = (function (){var statearr_28031 = state_28027;
(statearr_28031[(7)] = inst_28009__$1);

return statearr_28031;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28032_28049 = state_28027__$1;
(statearr_28032_28049[(1)] = (5));

} else {
var statearr_28033_28050 = state_28027__$1;
(statearr_28033_28050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (6))){
var inst_28009 = (state_28027[(7)]);
var inst_28014 = p.call(null,inst_28009);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_28014)){
var statearr_28034_28051 = state_28027__$1;
(statearr_28034_28051[(1)] = (8));

} else {
var statearr_28035_28052 = state_28027__$1;
(statearr_28035_28052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (3))){
var inst_28025 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
if((state_val_28028 === (2))){
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(4),ch);
} else {
if((state_val_28028 === (11))){
var inst_28017 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28036_28053 = state_28027__$1;
(statearr_28036_28053[(2)] = inst_28017);

(statearr_28036_28053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (9))){
var state_28027__$1 = state_28027;
var statearr_28037_28054 = state_28027__$1;
(statearr_28037_28054[(2)] = null);

(statearr_28037_28054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (5))){
var inst_28012 = cljs.core.async.close_BANG_.call(null,out);
var state_28027__$1 = state_28027;
var statearr_28038_28055 = state_28027__$1;
(statearr_28038_28055[(2)] = inst_28012);

(statearr_28038_28055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (10))){
var inst_28020 = (state_28027[(2)]);
var state_28027__$1 = (function (){var statearr_28039 = state_28027;
(statearr_28039[(8)] = inst_28020);

return statearr_28039;
})();
var statearr_28040_28056 = state_28027__$1;
(statearr_28040_28056[(2)] = null);

(statearr_28040_28056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (8))){
var inst_28009 = (state_28027[(7)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28027__$1,(11),out,inst_28009);
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
});})(c__24643__auto___28046,out))
;
return ((function (switch__24476__auto__,c__24643__auto___28046,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_28041 = [null,null,null,null,null,null,null,null,null];
(statearr_28041[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_28041[(1)] = (1));

return statearr_28041;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_28027){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e28042){if((e28042 instanceof Object)){
var ex__24480__auto__ = e28042;
var statearr_28043_28057 = state_28027;
(statearr_28043_28057[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28058 = state_28027;
state_28027 = G__28058;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___28046,out))
})();
var state__24645__auto__ = (function (){var statearr_28044 = f__24644__auto__.call(null);
(statearr_28044[(6)] = c__24643__auto___28046);

return statearr_28044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___28046,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28060 = arguments.length;
switch (G__28060) {
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
var c__24643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto__){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto__){
return (function (state_28123){
var state_val_28124 = (state_28123[(1)]);
if((state_val_28124 === (7))){
var inst_28119 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
var statearr_28125_28163 = state_28123__$1;
(statearr_28125_28163[(2)] = inst_28119);

(statearr_28125_28163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (20))){
var inst_28089 = (state_28123[(7)]);
var inst_28100 = (state_28123[(2)]);
var inst_28101 = cljs.core.next.call(null,inst_28089);
var inst_28075 = inst_28101;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28123__$1 = (function (){var statearr_28126 = state_28123;
(statearr_28126[(8)] = inst_28076);

(statearr_28126[(9)] = inst_28075);

(statearr_28126[(10)] = inst_28077);

(statearr_28126[(11)] = inst_28100);

(statearr_28126[(12)] = inst_28078);

return statearr_28126;
})();
var statearr_28127_28164 = state_28123__$1;
(statearr_28127_28164[(2)] = null);

(statearr_28127_28164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (1))){
var state_28123__$1 = state_28123;
var statearr_28128_28165 = state_28123__$1;
(statearr_28128_28165[(2)] = null);

(statearr_28128_28165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (4))){
var inst_28064 = (state_28123[(13)]);
var inst_28064__$1 = (state_28123[(2)]);
var inst_28065 = (inst_28064__$1 == null);
var state_28123__$1 = (function (){var statearr_28129 = state_28123;
(statearr_28129[(13)] = inst_28064__$1);

return statearr_28129;
})();
if(cljs.core.truth_(inst_28065)){
var statearr_28130_28166 = state_28123__$1;
(statearr_28130_28166[(1)] = (5));

} else {
var statearr_28131_28167 = state_28123__$1;
(statearr_28131_28167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (15))){
var state_28123__$1 = state_28123;
var statearr_28135_28168 = state_28123__$1;
(statearr_28135_28168[(2)] = null);

(statearr_28135_28168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (21))){
var state_28123__$1 = state_28123;
var statearr_28136_28169 = state_28123__$1;
(statearr_28136_28169[(2)] = null);

(statearr_28136_28169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (13))){
var inst_28076 = (state_28123[(8)]);
var inst_28075 = (state_28123[(9)]);
var inst_28077 = (state_28123[(10)]);
var inst_28078 = (state_28123[(12)]);
var inst_28085 = (state_28123[(2)]);
var inst_28086 = (inst_28078 + (1));
var tmp28132 = inst_28076;
var tmp28133 = inst_28075;
var tmp28134 = inst_28077;
var inst_28075__$1 = tmp28133;
var inst_28076__$1 = tmp28132;
var inst_28077__$1 = tmp28134;
var inst_28078__$1 = inst_28086;
var state_28123__$1 = (function (){var statearr_28137 = state_28123;
(statearr_28137[(8)] = inst_28076__$1);

(statearr_28137[(14)] = inst_28085);

(statearr_28137[(9)] = inst_28075__$1);

(statearr_28137[(10)] = inst_28077__$1);

(statearr_28137[(12)] = inst_28078__$1);

return statearr_28137;
})();
var statearr_28138_28170 = state_28123__$1;
(statearr_28138_28170[(2)] = null);

(statearr_28138_28170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (22))){
var state_28123__$1 = state_28123;
var statearr_28139_28171 = state_28123__$1;
(statearr_28139_28171[(2)] = null);

(statearr_28139_28171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (6))){
var inst_28064 = (state_28123[(13)]);
var inst_28073 = f.call(null,inst_28064);
var inst_28074 = cljs.core.seq.call(null,inst_28073);
var inst_28075 = inst_28074;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28123__$1 = (function (){var statearr_28140 = state_28123;
(statearr_28140[(8)] = inst_28076);

(statearr_28140[(9)] = inst_28075);

(statearr_28140[(10)] = inst_28077);

(statearr_28140[(12)] = inst_28078);

return statearr_28140;
})();
var statearr_28141_28172 = state_28123__$1;
(statearr_28141_28172[(2)] = null);

(statearr_28141_28172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (17))){
var inst_28089 = (state_28123[(7)]);
var inst_28093 = cljs.core.chunk_first.call(null,inst_28089);
var inst_28094 = cljs.core.chunk_rest.call(null,inst_28089);
var inst_28095 = cljs.core.count.call(null,inst_28093);
var inst_28075 = inst_28094;
var inst_28076 = inst_28093;
var inst_28077 = inst_28095;
var inst_28078 = (0);
var state_28123__$1 = (function (){var statearr_28142 = state_28123;
(statearr_28142[(8)] = inst_28076);

(statearr_28142[(9)] = inst_28075);

(statearr_28142[(10)] = inst_28077);

(statearr_28142[(12)] = inst_28078);

return statearr_28142;
})();
var statearr_28143_28173 = state_28123__$1;
(statearr_28143_28173[(2)] = null);

(statearr_28143_28173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (3))){
var inst_28121 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28123__$1,inst_28121);
} else {
if((state_val_28124 === (12))){
var inst_28109 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
var statearr_28144_28174 = state_28123__$1;
(statearr_28144_28174[(2)] = inst_28109);

(statearr_28144_28174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (2))){
var state_28123__$1 = state_28123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28123__$1,(4),in$);
} else {
if((state_val_28124 === (23))){
var inst_28117 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
var statearr_28145_28175 = state_28123__$1;
(statearr_28145_28175[(2)] = inst_28117);

(statearr_28145_28175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (19))){
var inst_28104 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
var statearr_28146_28176 = state_28123__$1;
(statearr_28146_28176[(2)] = inst_28104);

(statearr_28146_28176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (11))){
var inst_28089 = (state_28123[(7)]);
var inst_28075 = (state_28123[(9)]);
var inst_28089__$1 = cljs.core.seq.call(null,inst_28075);
var state_28123__$1 = (function (){var statearr_28147 = state_28123;
(statearr_28147[(7)] = inst_28089__$1);

return statearr_28147;
})();
if(inst_28089__$1){
var statearr_28148_28177 = state_28123__$1;
(statearr_28148_28177[(1)] = (14));

} else {
var statearr_28149_28178 = state_28123__$1;
(statearr_28149_28178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (9))){
var inst_28111 = (state_28123[(2)]);
var inst_28112 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28123__$1 = (function (){var statearr_28150 = state_28123;
(statearr_28150[(15)] = inst_28111);

return statearr_28150;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28151_28179 = state_28123__$1;
(statearr_28151_28179[(1)] = (21));

} else {
var statearr_28152_28180 = state_28123__$1;
(statearr_28152_28180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (5))){
var inst_28067 = cljs.core.async.close_BANG_.call(null,out);
var state_28123__$1 = state_28123;
var statearr_28153_28181 = state_28123__$1;
(statearr_28153_28181[(2)] = inst_28067);

(statearr_28153_28181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (14))){
var inst_28089 = (state_28123[(7)]);
var inst_28091 = cljs.core.chunked_seq_QMARK_.call(null,inst_28089);
var state_28123__$1 = state_28123;
if(inst_28091){
var statearr_28154_28182 = state_28123__$1;
(statearr_28154_28182[(1)] = (17));

} else {
var statearr_28155_28183 = state_28123__$1;
(statearr_28155_28183[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (16))){
var inst_28107 = (state_28123[(2)]);
var state_28123__$1 = state_28123;
var statearr_28156_28184 = state_28123__$1;
(statearr_28156_28184[(2)] = inst_28107);

(statearr_28156_28184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28124 === (10))){
var inst_28076 = (state_28123[(8)]);
var inst_28078 = (state_28123[(12)]);
var inst_28083 = cljs.core._nth.call(null,inst_28076,inst_28078);
var state_28123__$1 = state_28123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28123__$1,(13),out,inst_28083);
} else {
if((state_val_28124 === (18))){
var inst_28089 = (state_28123[(7)]);
var inst_28098 = cljs.core.first.call(null,inst_28089);
var state_28123__$1 = state_28123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28123__$1,(20),out,inst_28098);
} else {
if((state_val_28124 === (8))){
var inst_28077 = (state_28123[(10)]);
var inst_28078 = (state_28123[(12)]);
var inst_28080 = (inst_28078 < inst_28077);
var inst_28081 = inst_28080;
var state_28123__$1 = state_28123;
if(cljs.core.truth_(inst_28081)){
var statearr_28157_28185 = state_28123__$1;
(statearr_28157_28185[(1)] = (10));

} else {
var statearr_28158_28186 = state_28123__$1;
(statearr_28158_28186[(1)] = (11));

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
});})(c__24643__auto__))
;
return ((function (switch__24476__auto__,c__24643__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____0 = (function (){
var statearr_28159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28159[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__);

(statearr_28159[(1)] = (1));

return statearr_28159;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____1 = (function (state_28123){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_28123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e28160){if((e28160 instanceof Object)){
var ex__24480__auto__ = e28160;
var statearr_28161_28187 = state_28123;
(statearr_28161_28187[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28188 = state_28123;
state_28123 = G__28188;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__ = function(state_28123){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____1.call(this,state_28123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24477__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto__))
})();
var state__24645__auto__ = (function (){var statearr_28162 = f__24644__auto__.call(null);
(statearr_28162[(6)] = c__24643__auto__);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto__))
);

return c__24643__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28190 = arguments.length;
switch (G__28190) {
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
var G__28193 = arguments.length;
switch (G__28193) {
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
var G__28196 = arguments.length;
switch (G__28196) {
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
var c__24643__auto___28243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___28243,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___28243,out){
return (function (state_28220){
var state_val_28221 = (state_28220[(1)]);
if((state_val_28221 === (7))){
var inst_28215 = (state_28220[(2)]);
var state_28220__$1 = state_28220;
var statearr_28222_28244 = state_28220__$1;
(statearr_28222_28244[(2)] = inst_28215);

(statearr_28222_28244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (1))){
var inst_28197 = null;
var state_28220__$1 = (function (){var statearr_28223 = state_28220;
(statearr_28223[(7)] = inst_28197);

return statearr_28223;
})();
var statearr_28224_28245 = state_28220__$1;
(statearr_28224_28245[(2)] = null);

(statearr_28224_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (4))){
var inst_28200 = (state_28220[(8)]);
var inst_28200__$1 = (state_28220[(2)]);
var inst_28201 = (inst_28200__$1 == null);
var inst_28202 = cljs.core.not.call(null,inst_28201);
var state_28220__$1 = (function (){var statearr_28225 = state_28220;
(statearr_28225[(8)] = inst_28200__$1);

return statearr_28225;
})();
if(inst_28202){
var statearr_28226_28246 = state_28220__$1;
(statearr_28226_28246[(1)] = (5));

} else {
var statearr_28227_28247 = state_28220__$1;
(statearr_28227_28247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (6))){
var state_28220__$1 = state_28220;
var statearr_28228_28248 = state_28220__$1;
(statearr_28228_28248[(2)] = null);

(statearr_28228_28248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (3))){
var inst_28217 = (state_28220[(2)]);
var inst_28218 = cljs.core.async.close_BANG_.call(null,out);
var state_28220__$1 = (function (){var statearr_28229 = state_28220;
(statearr_28229[(9)] = inst_28217);

return statearr_28229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28220__$1,inst_28218);
} else {
if((state_val_28221 === (2))){
var state_28220__$1 = state_28220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28220__$1,(4),ch);
} else {
if((state_val_28221 === (11))){
var inst_28200 = (state_28220[(8)]);
var inst_28209 = (state_28220[(2)]);
var inst_28197 = inst_28200;
var state_28220__$1 = (function (){var statearr_28230 = state_28220;
(statearr_28230[(10)] = inst_28209);

(statearr_28230[(7)] = inst_28197);

return statearr_28230;
})();
var statearr_28231_28249 = state_28220__$1;
(statearr_28231_28249[(2)] = null);

(statearr_28231_28249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (9))){
var inst_28200 = (state_28220[(8)]);
var state_28220__$1 = state_28220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28220__$1,(11),out,inst_28200);
} else {
if((state_val_28221 === (5))){
var inst_28197 = (state_28220[(7)]);
var inst_28200 = (state_28220[(8)]);
var inst_28204 = cljs.core._EQ_.call(null,inst_28200,inst_28197);
var state_28220__$1 = state_28220;
if(inst_28204){
var statearr_28233_28250 = state_28220__$1;
(statearr_28233_28250[(1)] = (8));

} else {
var statearr_28234_28251 = state_28220__$1;
(statearr_28234_28251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (10))){
var inst_28212 = (state_28220[(2)]);
var state_28220__$1 = state_28220;
var statearr_28235_28252 = state_28220__$1;
(statearr_28235_28252[(2)] = inst_28212);

(statearr_28235_28252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28221 === (8))){
var inst_28197 = (state_28220[(7)]);
var tmp28232 = inst_28197;
var inst_28197__$1 = tmp28232;
var state_28220__$1 = (function (){var statearr_28236 = state_28220;
(statearr_28236[(7)] = inst_28197__$1);

return statearr_28236;
})();
var statearr_28237_28253 = state_28220__$1;
(statearr_28237_28253[(2)] = null);

(statearr_28237_28253[(1)] = (2));


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
});})(c__24643__auto___28243,out))
;
return ((function (switch__24476__auto__,c__24643__auto___28243,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_28238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28238[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_28238[(1)] = (1));

return statearr_28238;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_28220){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_28220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object)){
var ex__24480__auto__ = e28239;
var statearr_28240_28254 = state_28220;
(statearr_28240_28254[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28220;
state_28220 = G__28255;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_28220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_28220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___28243,out))
})();
var state__24645__auto__ = (function (){var statearr_28241 = f__24644__auto__.call(null);
(statearr_28241[(6)] = c__24643__auto___28243);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___28243,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28257 = arguments.length;
switch (G__28257) {
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
var c__24643__auto___28323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___28323,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___28323,out){
return (function (state_28295){
var state_val_28296 = (state_28295[(1)]);
if((state_val_28296 === (7))){
var inst_28291 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
var statearr_28297_28324 = state_28295__$1;
(statearr_28297_28324[(2)] = inst_28291);

(statearr_28297_28324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (1))){
var inst_28258 = (new Array(n));
var inst_28259 = inst_28258;
var inst_28260 = (0);
var state_28295__$1 = (function (){var statearr_28298 = state_28295;
(statearr_28298[(7)] = inst_28259);

(statearr_28298[(8)] = inst_28260);

return statearr_28298;
})();
var statearr_28299_28325 = state_28295__$1;
(statearr_28299_28325[(2)] = null);

(statearr_28299_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (4))){
var inst_28263 = (state_28295[(9)]);
var inst_28263__$1 = (state_28295[(2)]);
var inst_28264 = (inst_28263__$1 == null);
var inst_28265 = cljs.core.not.call(null,inst_28264);
var state_28295__$1 = (function (){var statearr_28300 = state_28295;
(statearr_28300[(9)] = inst_28263__$1);

return statearr_28300;
})();
if(inst_28265){
var statearr_28301_28326 = state_28295__$1;
(statearr_28301_28326[(1)] = (5));

} else {
var statearr_28302_28327 = state_28295__$1;
(statearr_28302_28327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (15))){
var inst_28285 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
var statearr_28303_28328 = state_28295__$1;
(statearr_28303_28328[(2)] = inst_28285);

(statearr_28303_28328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (13))){
var state_28295__$1 = state_28295;
var statearr_28304_28329 = state_28295__$1;
(statearr_28304_28329[(2)] = null);

(statearr_28304_28329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (6))){
var inst_28260 = (state_28295[(8)]);
var inst_28281 = (inst_28260 > (0));
var state_28295__$1 = state_28295;
if(cljs.core.truth_(inst_28281)){
var statearr_28305_28330 = state_28295__$1;
(statearr_28305_28330[(1)] = (12));

} else {
var statearr_28306_28331 = state_28295__$1;
(statearr_28306_28331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (3))){
var inst_28293 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28295__$1,inst_28293);
} else {
if((state_val_28296 === (12))){
var inst_28259 = (state_28295[(7)]);
var inst_28283 = cljs.core.vec.call(null,inst_28259);
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28295__$1,(15),out,inst_28283);
} else {
if((state_val_28296 === (2))){
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28295__$1,(4),ch);
} else {
if((state_val_28296 === (11))){
var inst_28275 = (state_28295[(2)]);
var inst_28276 = (new Array(n));
var inst_28259 = inst_28276;
var inst_28260 = (0);
var state_28295__$1 = (function (){var statearr_28307 = state_28295;
(statearr_28307[(7)] = inst_28259);

(statearr_28307[(8)] = inst_28260);

(statearr_28307[(10)] = inst_28275);

return statearr_28307;
})();
var statearr_28308_28332 = state_28295__$1;
(statearr_28308_28332[(2)] = null);

(statearr_28308_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (9))){
var inst_28259 = (state_28295[(7)]);
var inst_28273 = cljs.core.vec.call(null,inst_28259);
var state_28295__$1 = state_28295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28295__$1,(11),out,inst_28273);
} else {
if((state_val_28296 === (5))){
var inst_28268 = (state_28295[(11)]);
var inst_28259 = (state_28295[(7)]);
var inst_28260 = (state_28295[(8)]);
var inst_28263 = (state_28295[(9)]);
var inst_28267 = (inst_28259[inst_28260] = inst_28263);
var inst_28268__$1 = (inst_28260 + (1));
var inst_28269 = (inst_28268__$1 < n);
var state_28295__$1 = (function (){var statearr_28309 = state_28295;
(statearr_28309[(11)] = inst_28268__$1);

(statearr_28309[(12)] = inst_28267);

return statearr_28309;
})();
if(cljs.core.truth_(inst_28269)){
var statearr_28310_28333 = state_28295__$1;
(statearr_28310_28333[(1)] = (8));

} else {
var statearr_28311_28334 = state_28295__$1;
(statearr_28311_28334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (14))){
var inst_28288 = (state_28295[(2)]);
var inst_28289 = cljs.core.async.close_BANG_.call(null,out);
var state_28295__$1 = (function (){var statearr_28313 = state_28295;
(statearr_28313[(13)] = inst_28288);

return statearr_28313;
})();
var statearr_28314_28335 = state_28295__$1;
(statearr_28314_28335[(2)] = inst_28289);

(statearr_28314_28335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (10))){
var inst_28279 = (state_28295[(2)]);
var state_28295__$1 = state_28295;
var statearr_28315_28336 = state_28295__$1;
(statearr_28315_28336[(2)] = inst_28279);

(statearr_28315_28336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28296 === (8))){
var inst_28268 = (state_28295[(11)]);
var inst_28259 = (state_28295[(7)]);
var tmp28312 = inst_28259;
var inst_28259__$1 = tmp28312;
var inst_28260 = inst_28268;
var state_28295__$1 = (function (){var statearr_28316 = state_28295;
(statearr_28316[(7)] = inst_28259__$1);

(statearr_28316[(8)] = inst_28260);

return statearr_28316;
})();
var statearr_28317_28337 = state_28295__$1;
(statearr_28317_28337[(2)] = null);

(statearr_28317_28337[(1)] = (2));


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
});})(c__24643__auto___28323,out))
;
return ((function (switch__24476__auto__,c__24643__auto___28323,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_28318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28318[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_28318[(1)] = (1));

return statearr_28318;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_28295){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_28295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e28319){if((e28319 instanceof Object)){
var ex__24480__auto__ = e28319;
var statearr_28320_28338 = state_28295;
(statearr_28320_28338[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28339 = state_28295;
state_28295 = G__28339;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_28295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_28295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___28323,out))
})();
var state__24645__auto__ = (function (){var statearr_28321 = f__24644__auto__.call(null);
(statearr_28321[(6)] = c__24643__auto___28323);

return statearr_28321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___28323,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28341 = arguments.length;
switch (G__28341) {
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
var c__24643__auto___28411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24643__auto___28411,out){
return (function (){
var f__24644__auto__ = (function (){var switch__24476__auto__ = ((function (c__24643__auto___28411,out){
return (function (state_28383){
var state_val_28384 = (state_28383[(1)]);
if((state_val_28384 === (7))){
var inst_28379 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
var statearr_28385_28412 = state_28383__$1;
(statearr_28385_28412[(2)] = inst_28379);

(statearr_28385_28412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (1))){
var inst_28342 = [];
var inst_28343 = inst_28342;
var inst_28344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28383__$1 = (function (){var statearr_28386 = state_28383;
(statearr_28386[(7)] = inst_28344);

(statearr_28386[(8)] = inst_28343);

return statearr_28386;
})();
var statearr_28387_28413 = state_28383__$1;
(statearr_28387_28413[(2)] = null);

(statearr_28387_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (4))){
var inst_28347 = (state_28383[(9)]);
var inst_28347__$1 = (state_28383[(2)]);
var inst_28348 = (inst_28347__$1 == null);
var inst_28349 = cljs.core.not.call(null,inst_28348);
var state_28383__$1 = (function (){var statearr_28388 = state_28383;
(statearr_28388[(9)] = inst_28347__$1);

return statearr_28388;
})();
if(inst_28349){
var statearr_28389_28414 = state_28383__$1;
(statearr_28389_28414[(1)] = (5));

} else {
var statearr_28390_28415 = state_28383__$1;
(statearr_28390_28415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (15))){
var inst_28373 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
var statearr_28391_28416 = state_28383__$1;
(statearr_28391_28416[(2)] = inst_28373);

(statearr_28391_28416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (13))){
var state_28383__$1 = state_28383;
var statearr_28392_28417 = state_28383__$1;
(statearr_28392_28417[(2)] = null);

(statearr_28392_28417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (6))){
var inst_28343 = (state_28383[(8)]);
var inst_28368 = inst_28343.length;
var inst_28369 = (inst_28368 > (0));
var state_28383__$1 = state_28383;
if(cljs.core.truth_(inst_28369)){
var statearr_28393_28418 = state_28383__$1;
(statearr_28393_28418[(1)] = (12));

} else {
var statearr_28394_28419 = state_28383__$1;
(statearr_28394_28419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (3))){
var inst_28381 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28383__$1,inst_28381);
} else {
if((state_val_28384 === (12))){
var inst_28343 = (state_28383[(8)]);
var inst_28371 = cljs.core.vec.call(null,inst_28343);
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28383__$1,(15),out,inst_28371);
} else {
if((state_val_28384 === (2))){
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28383__$1,(4),ch);
} else {
if((state_val_28384 === (11))){
var inst_28347 = (state_28383[(9)]);
var inst_28351 = (state_28383[(10)]);
var inst_28361 = (state_28383[(2)]);
var inst_28362 = [];
var inst_28363 = inst_28362.push(inst_28347);
var inst_28343 = inst_28362;
var inst_28344 = inst_28351;
var state_28383__$1 = (function (){var statearr_28395 = state_28383;
(statearr_28395[(7)] = inst_28344);

(statearr_28395[(11)] = inst_28363);

(statearr_28395[(12)] = inst_28361);

(statearr_28395[(8)] = inst_28343);

return statearr_28395;
})();
var statearr_28396_28420 = state_28383__$1;
(statearr_28396_28420[(2)] = null);

(statearr_28396_28420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (9))){
var inst_28343 = (state_28383[(8)]);
var inst_28359 = cljs.core.vec.call(null,inst_28343);
var state_28383__$1 = state_28383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28383__$1,(11),out,inst_28359);
} else {
if((state_val_28384 === (5))){
var inst_28344 = (state_28383[(7)]);
var inst_28347 = (state_28383[(9)]);
var inst_28351 = (state_28383[(10)]);
var inst_28351__$1 = f.call(null,inst_28347);
var inst_28352 = cljs.core._EQ_.call(null,inst_28351__$1,inst_28344);
var inst_28353 = cljs.core.keyword_identical_QMARK_.call(null,inst_28344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28354 = ((inst_28352) || (inst_28353));
var state_28383__$1 = (function (){var statearr_28397 = state_28383;
(statearr_28397[(10)] = inst_28351__$1);

return statearr_28397;
})();
if(cljs.core.truth_(inst_28354)){
var statearr_28398_28421 = state_28383__$1;
(statearr_28398_28421[(1)] = (8));

} else {
var statearr_28399_28422 = state_28383__$1;
(statearr_28399_28422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (14))){
var inst_28376 = (state_28383[(2)]);
var inst_28377 = cljs.core.async.close_BANG_.call(null,out);
var state_28383__$1 = (function (){var statearr_28401 = state_28383;
(statearr_28401[(13)] = inst_28376);

return statearr_28401;
})();
var statearr_28402_28423 = state_28383__$1;
(statearr_28402_28423[(2)] = inst_28377);

(statearr_28402_28423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (10))){
var inst_28366 = (state_28383[(2)]);
var state_28383__$1 = state_28383;
var statearr_28403_28424 = state_28383__$1;
(statearr_28403_28424[(2)] = inst_28366);

(statearr_28403_28424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28384 === (8))){
var inst_28347 = (state_28383[(9)]);
var inst_28351 = (state_28383[(10)]);
var inst_28343 = (state_28383[(8)]);
var inst_28356 = inst_28343.push(inst_28347);
var tmp28400 = inst_28343;
var inst_28343__$1 = tmp28400;
var inst_28344 = inst_28351;
var state_28383__$1 = (function (){var statearr_28404 = state_28383;
(statearr_28404[(7)] = inst_28344);

(statearr_28404[(14)] = inst_28356);

(statearr_28404[(8)] = inst_28343__$1);

return statearr_28404;
})();
var statearr_28405_28425 = state_28383__$1;
(statearr_28405_28425[(2)] = null);

(statearr_28405_28425[(1)] = (2));


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
});})(c__24643__auto___28411,out))
;
return ((function (switch__24476__auto__,c__24643__auto___28411,out){
return (function() {
var cljs$core$async$state_machine__24477__auto__ = null;
var cljs$core$async$state_machine__24477__auto____0 = (function (){
var statearr_28406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28406[(0)] = cljs$core$async$state_machine__24477__auto__);

(statearr_28406[(1)] = (1));

return statearr_28406;
});
var cljs$core$async$state_machine__24477__auto____1 = (function (state_28383){
while(true){
var ret_value__24478__auto__ = (function (){try{while(true){
var result__24479__auto__ = switch__24476__auto__.call(null,state_28383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24479__auto__;
}
break;
}
}catch (e28407){if((e28407 instanceof Object)){
var ex__24480__auto__ = e28407;
var statearr_28408_28426 = state_28383;
(statearr_28408_28426[(5)] = ex__24480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28427 = state_28383;
state_28383 = G__28427;
continue;
} else {
return ret_value__24478__auto__;
}
break;
}
});
cljs$core$async$state_machine__24477__auto__ = function(state_28383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24477__auto____1.call(this,state_28383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24477__auto____0;
cljs$core$async$state_machine__24477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24477__auto____1;
return cljs$core$async$state_machine__24477__auto__;
})()
;})(switch__24476__auto__,c__24643__auto___28411,out))
})();
var state__24645__auto__ = (function (){var statearr_28409 = f__24644__auto__.call(null);
(statearr_28409[(6)] = c__24643__auto___28411);

return statearr_28409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24645__auto__);
});})(c__24643__auto___28411,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581180043764
