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
var G__29598 = arguments.length;
switch (G__29598) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29599 = (function (f,blockable,meta29600){
this.f = f;
this.blockable = blockable;
this.meta29600 = meta29600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29601,meta29600__$1){
var self__ = this;
var _29601__$1 = this;
return (new cljs.core.async.t_cljs$core$async29599(self__.f,self__.blockable,meta29600__$1));
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29601){
var self__ = this;
var _29601__$1 = this;
return self__.meta29600;
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29600","meta29600",1415748470,null)], null);
});

cljs.core.async.t_cljs$core$async29599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29599";

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29599");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29599.
 */
cljs.core.async.__GT_t_cljs$core$async29599 = (function cljs$core$async$__GT_t_cljs$core$async29599(f__$1,blockable__$1,meta29600){
return (new cljs.core.async.t_cljs$core$async29599(f__$1,blockable__$1,meta29600));
});

}

return (new cljs.core.async.t_cljs$core$async29599(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29605 = arguments.length;
switch (G__29605) {
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
var G__29608 = arguments.length;
switch (G__29608) {
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
var G__29611 = arguments.length;
switch (G__29611) {
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
var val_29613 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29613);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29613,ret){
return (function (){
return fn1.call(null,val_29613);
});})(val_29613,ret))
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
var G__29615 = arguments.length;
switch (G__29615) {
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
var n__4607__auto___29617 = n;
var x_29618 = (0);
while(true){
if((x_29618 < n__4607__auto___29617)){
(a[x_29618] = (0));

var G__29619 = (x_29618 + (1));
x_29618 = G__29619;
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

var G__29620 = (i + (1));
i = G__29620;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29621 = (function (flag,meta29622){
this.flag = flag;
this.meta29622 = meta29622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29623,meta29622__$1){
var self__ = this;
var _29623__$1 = this;
return (new cljs.core.async.t_cljs$core$async29621(self__.flag,meta29622__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29623){
var self__ = this;
var _29623__$1 = this;
return self__.meta29622;
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29622","meta29622",893322421,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29621";

cljs.core.async.t_cljs$core$async29621.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29621");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29621.
 */
cljs.core.async.__GT_t_cljs$core$async29621 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29621(flag__$1,meta29622){
return (new cljs.core.async.t_cljs$core$async29621(flag__$1,meta29622));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29621(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29624 = (function (flag,cb,meta29625){
this.flag = flag;
this.cb = cb;
this.meta29625 = meta29625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29626,meta29625__$1){
var self__ = this;
var _29626__$1 = this;
return (new cljs.core.async.t_cljs$core$async29624(self__.flag,self__.cb,meta29625__$1));
});

cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29626){
var self__ = this;
var _29626__$1 = this;
return self__.meta29625;
});

cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29625","meta29625",-2116711330,null)], null);
});

cljs.core.async.t_cljs$core$async29624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29624";

cljs.core.async.t_cljs$core$async29624.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29624");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29624.
 */
cljs.core.async.__GT_t_cljs$core$async29624 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29624(flag__$1,cb__$1,meta29625){
return (new cljs.core.async.t_cljs$core$async29624(flag__$1,cb__$1,meta29625));
});

}

return (new cljs.core.async.t_cljs$core$async29624(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29627_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29627_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29628_SHARP_,port], null));
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
var G__29629 = (i + (1));
i = G__29629;
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
var len__4730__auto___29635 = arguments.length;
var i__4731__auto___29636 = (0);
while(true){
if((i__4731__auto___29636 < len__4730__auto___29635)){
args__4736__auto__.push((arguments[i__4731__auto___29636]));

var G__29637 = (i__4731__auto___29636 + (1));
i__4731__auto___29636 = G__29637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29632){
var map__29633 = p__29632;
var map__29633__$1 = (((((!((map__29633 == null))))?(((((map__29633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29633):map__29633);
var opts = map__29633__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29630){
var G__29631 = cljs.core.first.call(null,seq29630);
var seq29630__$1 = cljs.core.next.call(null,seq29630);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29631,seq29630__$1);
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
var G__29639 = arguments.length;
switch (G__29639) {
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
var c__29538__auto___29685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___29685){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___29685){
return (function (state_29663){
var state_val_29664 = (state_29663[(1)]);
if((state_val_29664 === (7))){
var inst_29659 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29665_29686 = state_29663__$1;
(statearr_29665_29686[(2)] = inst_29659);

(statearr_29665_29686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (1))){
var state_29663__$1 = state_29663;
var statearr_29666_29687 = state_29663__$1;
(statearr_29666_29687[(2)] = null);

(statearr_29666_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (4))){
var inst_29642 = (state_29663[(7)]);
var inst_29642__$1 = (state_29663[(2)]);
var inst_29643 = (inst_29642__$1 == null);
var state_29663__$1 = (function (){var statearr_29667 = state_29663;
(statearr_29667[(7)] = inst_29642__$1);

return statearr_29667;
})();
if(cljs.core.truth_(inst_29643)){
var statearr_29668_29688 = state_29663__$1;
(statearr_29668_29688[(1)] = (5));

} else {
var statearr_29669_29689 = state_29663__$1;
(statearr_29669_29689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (13))){
var state_29663__$1 = state_29663;
var statearr_29670_29690 = state_29663__$1;
(statearr_29670_29690[(2)] = null);

(statearr_29670_29690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (6))){
var inst_29642 = (state_29663[(7)]);
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29663__$1,(11),to,inst_29642);
} else {
if((state_val_29664 === (3))){
var inst_29661 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29663__$1,inst_29661);
} else {
if((state_val_29664 === (12))){
var state_29663__$1 = state_29663;
var statearr_29671_29691 = state_29663__$1;
(statearr_29671_29691[(2)] = null);

(statearr_29671_29691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (2))){
var state_29663__$1 = state_29663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29663__$1,(4),from);
} else {
if((state_val_29664 === (11))){
var inst_29652 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
if(cljs.core.truth_(inst_29652)){
var statearr_29672_29692 = state_29663__$1;
(statearr_29672_29692[(1)] = (12));

} else {
var statearr_29673_29693 = state_29663__$1;
(statearr_29673_29693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (9))){
var state_29663__$1 = state_29663;
var statearr_29674_29694 = state_29663__$1;
(statearr_29674_29694[(2)] = null);

(statearr_29674_29694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (5))){
var state_29663__$1 = state_29663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29675_29695 = state_29663__$1;
(statearr_29675_29695[(1)] = (8));

} else {
var statearr_29676_29696 = state_29663__$1;
(statearr_29676_29696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (14))){
var inst_29657 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29677_29697 = state_29663__$1;
(statearr_29677_29697[(2)] = inst_29657);

(statearr_29677_29697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (10))){
var inst_29649 = (state_29663[(2)]);
var state_29663__$1 = state_29663;
var statearr_29678_29698 = state_29663__$1;
(statearr_29678_29698[(2)] = inst_29649);

(statearr_29678_29698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29664 === (8))){
var inst_29646 = cljs.core.async.close_BANG_.call(null,to);
var state_29663__$1 = state_29663;
var statearr_29679_29699 = state_29663__$1;
(statearr_29679_29699[(2)] = inst_29646);

(statearr_29679_29699[(1)] = (10));


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
});})(c__29538__auto___29685))
;
return ((function (switch__29443__auto__,c__29538__auto___29685){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_29680 = [null,null,null,null,null,null,null,null];
(statearr_29680[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_29680[(1)] = (1));

return statearr_29680;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_29663){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29681){if((e29681 instanceof Object)){
var ex__29447__auto__ = e29681;
var statearr_29682_29700 = state_29663;
(statearr_29682_29700[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29701 = state_29663;
state_29663 = G__29701;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_29663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_29663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___29685))
})();
var state__29540__auto__ = (function (){var statearr_29683 = f__29539__auto__.call(null);
(statearr_29683[(6)] = c__29538__auto___29685);

return statearr_29683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___29685))
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
return (function (p__29702){
var vec__29703 = p__29702;
var v = cljs.core.nth.call(null,vec__29703,(0),null);
var p = cljs.core.nth.call(null,vec__29703,(1),null);
var job = vec__29703;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29538__auto___29874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results){
return (function (state_29710){
var state_val_29711 = (state_29710[(1)]);
if((state_val_29711 === (1))){
var state_29710__$1 = state_29710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29710__$1,(2),res,v);
} else {
if((state_val_29711 === (2))){
var inst_29707 = (state_29710[(2)]);
var inst_29708 = cljs.core.async.close_BANG_.call(null,res);
var state_29710__$1 = (function (){var statearr_29712 = state_29710;
(statearr_29712[(7)] = inst_29707);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29710__$1,inst_29708);
} else {
return null;
}
}
});})(c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results))
;
return ((function (switch__29443__auto__,c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1 = (function (state_29710){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object)){
var ex__29447__auto__ = e29714;
var statearr_29715_29875 = state_29710;
(statearr_29715_29875[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29876 = state_29710;
state_29710 = G__29876;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = function(state_29710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1.call(this,state_29710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results))
})();
var state__29540__auto__ = (function (){var statearr_29716 = f__29539__auto__.call(null);
(statearr_29716[(6)] = c__29538__auto___29874);

return statearr_29716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___29874,res,vec__29703,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29717){
var vec__29718 = p__29717;
var v = cljs.core.nth.call(null,vec__29718,(0),null);
var p = cljs.core.nth.call(null,vec__29718,(1),null);
var job = vec__29718;
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
var n__4607__auto___29877 = n;
var __29878 = (0);
while(true){
if((__29878 < n__4607__auto___29877)){
var G__29721_29879 = type;
var G__29721_29880__$1 = (((G__29721_29879 instanceof cljs.core.Keyword))?G__29721_29879.fqn:null);
switch (G__29721_29880__$1) {
case "compute":
var c__29538__auto___29882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29878,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (__29878,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (1))){
var state_29734__$1 = state_29734;
var statearr_29736_29883 = state_29734__$1;
(statearr_29736_29883[(2)] = null);

(statearr_29736_29883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (2))){
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29734__$1,(4),jobs);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (4))){
var inst_29724 = (state_29734[(2)]);
var inst_29725 = process.call(null,inst_29724);
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29725)){
var statearr_29737_29884 = state_29734__$1;
(statearr_29737_29884[(1)] = (5));

} else {
var statearr_29738_29885 = state_29734__$1;
(statearr_29738_29885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (5))){
var state_29734__$1 = state_29734;
var statearr_29739_29886 = state_29734__$1;
(statearr_29739_29886[(2)] = null);

(statearr_29739_29886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (6))){
var state_29734__$1 = state_29734;
var statearr_29740_29887 = state_29734__$1;
(statearr_29740_29887[(2)] = null);

(statearr_29740_29887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (7))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29741_29888 = state_29734__$1;
(statearr_29741_29888[(2)] = inst_29730);

(statearr_29741_29888[(1)] = (3));


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
});})(__29878,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
;
return ((function (__29878,switch__29443__auto__,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_29742 = [null,null,null,null,null,null,null];
(statearr_29742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__);

(statearr_29742[(1)] = (1));

return statearr_29742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1 = (function (state_29734){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29743){if((e29743 instanceof Object)){
var ex__29447__auto__ = e29743;
var statearr_29744_29889 = state_29734;
(statearr_29744_29889[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29890 = state_29734;
state_29734 = G__29890;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__;
})()
;})(__29878,switch__29443__auto__,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
})();
var state__29540__auto__ = (function (){var statearr_29745 = f__29539__auto__.call(null);
(statearr_29745[(6)] = c__29538__auto___29882);

return statearr_29745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(__29878,c__29538__auto___29882,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
);


break;
case "async":
var c__29538__auto___29891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29878,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (__29878,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function (state_29758){
var state_val_29759 = (state_29758[(1)]);
if((state_val_29759 === (1))){
var state_29758__$1 = state_29758;
var statearr_29760_29892 = state_29758__$1;
(statearr_29760_29892[(2)] = null);

(statearr_29760_29892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (2))){
var state_29758__$1 = state_29758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29758__$1,(4),jobs);
} else {
if((state_val_29759 === (3))){
var inst_29756 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29758__$1,inst_29756);
} else {
if((state_val_29759 === (4))){
var inst_29748 = (state_29758[(2)]);
var inst_29749 = async.call(null,inst_29748);
var state_29758__$1 = state_29758;
if(cljs.core.truth_(inst_29749)){
var statearr_29761_29893 = state_29758__$1;
(statearr_29761_29893[(1)] = (5));

} else {
var statearr_29762_29894 = state_29758__$1;
(statearr_29762_29894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (5))){
var state_29758__$1 = state_29758;
var statearr_29763_29895 = state_29758__$1;
(statearr_29763_29895[(2)] = null);

(statearr_29763_29895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (6))){
var state_29758__$1 = state_29758;
var statearr_29764_29896 = state_29758__$1;
(statearr_29764_29896[(2)] = null);

(statearr_29764_29896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29759 === (7))){
var inst_29754 = (state_29758[(2)]);
var state_29758__$1 = state_29758;
var statearr_29765_29897 = state_29758__$1;
(statearr_29765_29897[(2)] = inst_29754);

(statearr_29765_29897[(1)] = (3));


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
});})(__29878,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
;
return ((function (__29878,switch__29443__auto__,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null];
(statearr_29766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1 = (function (state_29758){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__29447__auto__ = e29767;
var statearr_29768_29898 = state_29758;
(statearr_29768_29898[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29899 = state_29758;
state_29758 = G__29899;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = function(state_29758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1.call(this,state_29758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__;
})()
;})(__29878,switch__29443__auto__,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
})();
var state__29540__auto__ = (function (){var statearr_29769 = f__29539__auto__.call(null);
(statearr_29769[(6)] = c__29538__auto___29891);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(__29878,c__29538__auto___29891,G__29721_29879,G__29721_29880__$1,n__4607__auto___29877,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29721_29880__$1)].join('')));

}

var G__29900 = (__29878 + (1));
__29878 = G__29900;
continue;
} else {
}
break;
}

var c__29538__auto___29901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___29901,jobs,results,process,async){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___29901,jobs,results,process,async){
return (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29787 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29793_29902 = state_29791__$1;
(statearr_29793_29902[(2)] = inst_29787);

(statearr_29793_29902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var state_29791__$1 = state_29791;
var statearr_29794_29903 = state_29791__$1;
(statearr_29794_29903[(2)] = null);

(statearr_29794_29903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29772 = (state_29791[(7)]);
var inst_29772__$1 = (state_29791[(2)]);
var inst_29773 = (inst_29772__$1 == null);
var state_29791__$1 = (function (){var statearr_29795 = state_29791;
(statearr_29795[(7)] = inst_29772__$1);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29773)){
var statearr_29796_29904 = state_29791__$1;
(statearr_29796_29904[(1)] = (5));

} else {
var statearr_29797_29905 = state_29791__$1;
(statearr_29797_29905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var inst_29777 = (state_29791[(8)]);
var inst_29772 = (state_29791[(7)]);
var inst_29777__$1 = cljs.core.async.chan.call(null,(1));
var inst_29778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29779 = [inst_29772,inst_29777__$1];
var inst_29780 = (new cljs.core.PersistentVector(null,2,(5),inst_29778,inst_29779,null));
var state_29791__$1 = (function (){var statearr_29798 = state_29791;
(statearr_29798[(8)] = inst_29777__$1);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29791__$1,(8),jobs,inst_29780);
} else {
if((state_val_29792 === (3))){
var inst_29789 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29791__$1,(4),from);
} else {
if((state_val_29792 === (9))){
var inst_29784 = (state_29791[(2)]);
var state_29791__$1 = (function (){var statearr_29799 = state_29791;
(statearr_29799[(9)] = inst_29784);

return statearr_29799;
})();
var statearr_29800_29906 = state_29791__$1;
(statearr_29800_29906[(2)] = null);

(statearr_29800_29906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (5))){
var inst_29775 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29791__$1 = state_29791;
var statearr_29801_29907 = state_29791__$1;
(statearr_29801_29907[(2)] = inst_29775);

(statearr_29801_29907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29777 = (state_29791[(8)]);
var inst_29782 = (state_29791[(2)]);
var state_29791__$1 = (function (){var statearr_29802 = state_29791;
(statearr_29802[(10)] = inst_29782);

return statearr_29802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29791__$1,(9),results,inst_29777);
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
});})(c__29538__auto___29901,jobs,results,process,async))
;
return ((function (switch__29443__auto__,c__29538__auto___29901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_29803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__);

(statearr_29803[(1)] = (1));

return statearr_29803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1 = (function (state_29791){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29804){if((e29804 instanceof Object)){
var ex__29447__auto__ = e29804;
var statearr_29805_29908 = state_29791;
(statearr_29805_29908[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29909 = state_29791;
state_29791 = G__29909;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___29901,jobs,results,process,async))
})();
var state__29540__auto__ = (function (){var statearr_29806 = f__29539__auto__.call(null);
(statearr_29806[(6)] = c__29538__auto___29901);

return statearr_29806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___29901,jobs,results,process,async))
);


var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__,jobs,results,process,async){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__,jobs,results,process,async){
return (function (state_29844){
var state_val_29845 = (state_29844[(1)]);
if((state_val_29845 === (7))){
var inst_29840 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29846_29910 = state_29844__$1;
(statearr_29846_29910[(2)] = inst_29840);

(statearr_29846_29910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (20))){
var state_29844__$1 = state_29844;
var statearr_29847_29911 = state_29844__$1;
(statearr_29847_29911[(2)] = null);

(statearr_29847_29911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (1))){
var state_29844__$1 = state_29844;
var statearr_29848_29912 = state_29844__$1;
(statearr_29848_29912[(2)] = null);

(statearr_29848_29912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (4))){
var inst_29809 = (state_29844[(7)]);
var inst_29809__$1 = (state_29844[(2)]);
var inst_29810 = (inst_29809__$1 == null);
var state_29844__$1 = (function (){var statearr_29849 = state_29844;
(statearr_29849[(7)] = inst_29809__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29810)){
var statearr_29850_29913 = state_29844__$1;
(statearr_29850_29913[(1)] = (5));

} else {
var statearr_29851_29914 = state_29844__$1;
(statearr_29851_29914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (15))){
var inst_29822 = (state_29844[(8)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29844__$1,(18),to,inst_29822);
} else {
if((state_val_29845 === (21))){
var inst_29835 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29852_29915 = state_29844__$1;
(statearr_29852_29915[(2)] = inst_29835);

(statearr_29852_29915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (13))){
var inst_29837 = (state_29844[(2)]);
var state_29844__$1 = (function (){var statearr_29853 = state_29844;
(statearr_29853[(9)] = inst_29837);

return statearr_29853;
})();
var statearr_29854_29916 = state_29844__$1;
(statearr_29854_29916[(2)] = null);

(statearr_29854_29916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (6))){
var inst_29809 = (state_29844[(7)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29844__$1,(11),inst_29809);
} else {
if((state_val_29845 === (17))){
var inst_29830 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
if(cljs.core.truth_(inst_29830)){
var statearr_29855_29917 = state_29844__$1;
(statearr_29855_29917[(1)] = (19));

} else {
var statearr_29856_29918 = state_29844__$1;
(statearr_29856_29918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (3))){
var inst_29842 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29844__$1,inst_29842);
} else {
if((state_val_29845 === (12))){
var inst_29819 = (state_29844[(10)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29844__$1,(14),inst_29819);
} else {
if((state_val_29845 === (2))){
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29844__$1,(4),results);
} else {
if((state_val_29845 === (19))){
var state_29844__$1 = state_29844;
var statearr_29857_29919 = state_29844__$1;
(statearr_29857_29919[(2)] = null);

(statearr_29857_29919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (11))){
var inst_29819 = (state_29844[(2)]);
var state_29844__$1 = (function (){var statearr_29858 = state_29844;
(statearr_29858[(10)] = inst_29819);

return statearr_29858;
})();
var statearr_29859_29920 = state_29844__$1;
(statearr_29859_29920[(2)] = null);

(statearr_29859_29920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (9))){
var state_29844__$1 = state_29844;
var statearr_29860_29921 = state_29844__$1;
(statearr_29860_29921[(2)] = null);

(statearr_29860_29921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (5))){
var state_29844__$1 = state_29844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29861_29922 = state_29844__$1;
(statearr_29861_29922[(1)] = (8));

} else {
var statearr_29862_29923 = state_29844__$1;
(statearr_29862_29923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (14))){
var inst_29822 = (state_29844[(8)]);
var inst_29824 = (state_29844[(11)]);
var inst_29822__$1 = (state_29844[(2)]);
var inst_29823 = (inst_29822__$1 == null);
var inst_29824__$1 = cljs.core.not.call(null,inst_29823);
var state_29844__$1 = (function (){var statearr_29863 = state_29844;
(statearr_29863[(8)] = inst_29822__$1);

(statearr_29863[(11)] = inst_29824__$1);

return statearr_29863;
})();
if(inst_29824__$1){
var statearr_29864_29924 = state_29844__$1;
(statearr_29864_29924[(1)] = (15));

} else {
var statearr_29865_29925 = state_29844__$1;
(statearr_29865_29925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (16))){
var inst_29824 = (state_29844[(11)]);
var state_29844__$1 = state_29844;
var statearr_29866_29926 = state_29844__$1;
(statearr_29866_29926[(2)] = inst_29824);

(statearr_29866_29926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (10))){
var inst_29816 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29867_29927 = state_29844__$1;
(statearr_29867_29927[(2)] = inst_29816);

(statearr_29867_29927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (18))){
var inst_29827 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29868_29928 = state_29844__$1;
(statearr_29868_29928[(2)] = inst_29827);

(statearr_29868_29928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (8))){
var inst_29813 = cljs.core.async.close_BANG_.call(null,to);
var state_29844__$1 = state_29844;
var statearr_29869_29929 = state_29844__$1;
(statearr_29869_29929[(2)] = inst_29813);

(statearr_29869_29929[(1)] = (10));


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
});})(c__29538__auto__,jobs,results,process,async))
;
return ((function (switch__29443__auto__,c__29538__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_29870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__);

(statearr_29870[(1)] = (1));

return statearr_29870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1 = (function (state_29844){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29871){if((e29871 instanceof Object)){
var ex__29447__auto__ = e29871;
var statearr_29872_29930 = state_29844;
(statearr_29872_29930[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29931 = state_29844;
state_29844 = G__29931;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__ = function(state_29844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1.call(this,state_29844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__,jobs,results,process,async))
})();
var state__29540__auto__ = (function (){var statearr_29873 = f__29539__auto__.call(null);
(statearr_29873[(6)] = c__29538__auto__);

return statearr_29873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__,jobs,results,process,async))
);

return c__29538__auto__;
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
var G__29933 = arguments.length;
switch (G__29933) {
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
var G__29936 = arguments.length;
switch (G__29936) {
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
var G__29939 = arguments.length;
switch (G__29939) {
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
var c__29538__auto___29988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___29988,tc,fc){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___29988,tc,fc){
return (function (state_29965){
var state_val_29966 = (state_29965[(1)]);
if((state_val_29966 === (7))){
var inst_29961 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29967_29989 = state_29965__$1;
(statearr_29967_29989[(2)] = inst_29961);

(statearr_29967_29989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (1))){
var state_29965__$1 = state_29965;
var statearr_29968_29990 = state_29965__$1;
(statearr_29968_29990[(2)] = null);

(statearr_29968_29990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (4))){
var inst_29942 = (state_29965[(7)]);
var inst_29942__$1 = (state_29965[(2)]);
var inst_29943 = (inst_29942__$1 == null);
var state_29965__$1 = (function (){var statearr_29969 = state_29965;
(statearr_29969[(7)] = inst_29942__$1);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29943)){
var statearr_29970_29991 = state_29965__$1;
(statearr_29970_29991[(1)] = (5));

} else {
var statearr_29971_29992 = state_29965__$1;
(statearr_29971_29992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (13))){
var state_29965__$1 = state_29965;
var statearr_29972_29993 = state_29965__$1;
(statearr_29972_29993[(2)] = null);

(statearr_29972_29993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (6))){
var inst_29942 = (state_29965[(7)]);
var inst_29948 = p.call(null,inst_29942);
var state_29965__$1 = state_29965;
if(cljs.core.truth_(inst_29948)){
var statearr_29973_29994 = state_29965__$1;
(statearr_29973_29994[(1)] = (9));

} else {
var statearr_29974_29995 = state_29965__$1;
(statearr_29974_29995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (3))){
var inst_29963 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29965__$1,inst_29963);
} else {
if((state_val_29966 === (12))){
var state_29965__$1 = state_29965;
var statearr_29975_29996 = state_29965__$1;
(statearr_29975_29996[(2)] = null);

(statearr_29975_29996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (2))){
var state_29965__$1 = state_29965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29965__$1,(4),ch);
} else {
if((state_val_29966 === (11))){
var inst_29942 = (state_29965[(7)]);
var inst_29952 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29965__$1,(8),inst_29952,inst_29942);
} else {
if((state_val_29966 === (9))){
var state_29965__$1 = state_29965;
var statearr_29976_29997 = state_29965__$1;
(statearr_29976_29997[(2)] = tc);

(statearr_29976_29997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (5))){
var inst_29945 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29946 = cljs.core.async.close_BANG_.call(null,fc);
var state_29965__$1 = (function (){var statearr_29977 = state_29965;
(statearr_29977[(8)] = inst_29945);

return statearr_29977;
})();
var statearr_29978_29998 = state_29965__$1;
(statearr_29978_29998[(2)] = inst_29946);

(statearr_29978_29998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (14))){
var inst_29959 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
var statearr_29979_29999 = state_29965__$1;
(statearr_29979_29999[(2)] = inst_29959);

(statearr_29979_29999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (10))){
var state_29965__$1 = state_29965;
var statearr_29980_30000 = state_29965__$1;
(statearr_29980_30000[(2)] = fc);

(statearr_29980_30000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29966 === (8))){
var inst_29954 = (state_29965[(2)]);
var state_29965__$1 = state_29965;
if(cljs.core.truth_(inst_29954)){
var statearr_29981_30001 = state_29965__$1;
(statearr_29981_30001[(1)] = (12));

} else {
var statearr_29982_30002 = state_29965__$1;
(statearr_29982_30002[(1)] = (13));

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
});})(c__29538__auto___29988,tc,fc))
;
return ((function (switch__29443__auto__,c__29538__auto___29988,tc,fc){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_29983 = [null,null,null,null,null,null,null,null,null];
(statearr_29983[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_29983[(1)] = (1));

return statearr_29983;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_29965){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_29965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e29984){if((e29984 instanceof Object)){
var ex__29447__auto__ = e29984;
var statearr_29985_30003 = state_29965;
(statearr_29985_30003[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30004 = state_29965;
state_29965 = G__30004;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_29965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_29965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___29988,tc,fc))
})();
var state__29540__auto__ = (function (){var statearr_29986 = f__29539__auto__.call(null);
(statearr_29986[(6)] = c__29538__auto___29988);

return statearr_29986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___29988,tc,fc))
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30027_30045 = state_30025__$1;
(statearr_30027_30045[(2)] = inst_30021);

(statearr_30027_30045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_30005 = init;
var state_30025__$1 = (function (){var statearr_30028 = state_30025;
(statearr_30028[(7)] = inst_30005);

return statearr_30028;
})();
var statearr_30029_30046 = state_30025__$1;
(statearr_30029_30046[(2)] = null);

(statearr_30029_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_30008 = (state_30025[(8)]);
var inst_30008__$1 = (state_30025[(2)]);
var inst_30009 = (inst_30008__$1 == null);
var state_30025__$1 = (function (){var statearr_30030 = state_30025;
(statearr_30030[(8)] = inst_30008__$1);

return statearr_30030;
})();
if(cljs.core.truth_(inst_30009)){
var statearr_30031_30047 = state_30025__$1;
(statearr_30031_30047[(1)] = (5));

} else {
var statearr_30032_30048 = state_30025__$1;
(statearr_30032_30048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_30005 = (state_30025[(7)]);
var inst_30008 = (state_30025[(8)]);
var inst_30012 = (state_30025[(9)]);
var inst_30012__$1 = f.call(null,inst_30005,inst_30008);
var inst_30013 = cljs.core.reduced_QMARK_.call(null,inst_30012__$1);
var state_30025__$1 = (function (){var statearr_30033 = state_30025;
(statearr_30033[(9)] = inst_30012__$1);

return statearr_30033;
})();
if(inst_30013){
var statearr_30034_30049 = state_30025__$1;
(statearr_30034_30049[(1)] = (8));

} else {
var statearr_30035_30050 = state_30025__$1;
(statearr_30035_30050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(4),ch);
} else {
if((state_val_30026 === (9))){
var inst_30012 = (state_30025[(9)]);
var inst_30005 = inst_30012;
var state_30025__$1 = (function (){var statearr_30036 = state_30025;
(statearr_30036[(7)] = inst_30005);

return statearr_30036;
})();
var statearr_30037_30051 = state_30025__$1;
(statearr_30037_30051[(2)] = null);

(statearr_30037_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_30005 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
var statearr_30038_30052 = state_30025__$1;
(statearr_30038_30052[(2)] = inst_30005);

(statearr_30038_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30019 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30039_30053 = state_30025__$1;
(statearr_30039_30053[(2)] = inst_30019);

(statearr_30039_30053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30012 = (state_30025[(9)]);
var inst_30015 = cljs.core.deref.call(null,inst_30012);
var state_30025__$1 = state_30025;
var statearr_30040_30054 = state_30025__$1;
(statearr_30040_30054[(2)] = inst_30015);

(statearr_30040_30054[(1)] = (10));


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
});})(c__29538__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29444__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29444__auto____0 = (function (){
var statearr_30041 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30041[(0)] = cljs$core$async$reduce_$_state_machine__29444__auto__);

(statearr_30041[(1)] = (1));

return statearr_30041;
});
var cljs$core$async$reduce_$_state_machine__29444__auto____1 = (function (state_30025){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30042){if((e30042 instanceof Object)){
var ex__29447__auto__ = e30042;
var statearr_30043_30055 = state_30025;
(statearr_30043_30055[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30056 = state_30025;
state_30025 = G__30056;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29444__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29444__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29444__auto____0;
cljs$core$async$reduce_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29444__auto____1;
return cljs$core$async$reduce_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__))
})();
var state__29540__auto__ = (function (){var statearr_30044 = f__29539__auto__.call(null);
(statearr_30044[(6)] = c__29538__auto__);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__))
);

return c__29538__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__,f__$1){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__,f__$1){
return (function (state_30062){
var state_val_30063 = (state_30062[(1)]);
if((state_val_30063 === (1))){
var inst_30057 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30062__$1,(2),inst_30057);
} else {
if((state_val_30063 === (2))){
var inst_30059 = (state_30062[(2)]);
var inst_30060 = f__$1.call(null,inst_30059);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30062__$1,inst_30060);
} else {
return null;
}
}
});})(c__29538__auto__,f__$1))
;
return ((function (switch__29443__auto__,c__29538__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29444__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29444__auto____0 = (function (){
var statearr_30064 = [null,null,null,null,null,null,null];
(statearr_30064[(0)] = cljs$core$async$transduce_$_state_machine__29444__auto__);

(statearr_30064[(1)] = (1));

return statearr_30064;
});
var cljs$core$async$transduce_$_state_machine__29444__auto____1 = (function (state_30062){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30065){if((e30065 instanceof Object)){
var ex__29447__auto__ = e30065;
var statearr_30066_30068 = state_30062;
(statearr_30066_30068[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30069 = state_30062;
state_30062 = G__30069;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29444__auto__ = function(state_30062){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29444__auto____1.call(this,state_30062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29444__auto____0;
cljs$core$async$transduce_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29444__auto____1;
return cljs$core$async$transduce_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__,f__$1))
})();
var state__29540__auto__ = (function (){var statearr_30067 = f__29539__auto__.call(null);
(statearr_30067[(6)] = c__29538__auto__);

return statearr_30067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__,f__$1))
);

return c__29538__auto__;
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
var G__30071 = arguments.length;
switch (G__30071) {
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__){
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30078 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30098_30119 = state_30096__$1;
(statearr_30098_30119[(2)] = inst_30078);

(statearr_30098_30119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var inst_30072 = cljs.core.seq.call(null,coll);
var inst_30073 = inst_30072;
var state_30096__$1 = (function (){var statearr_30099 = state_30096;
(statearr_30099[(7)] = inst_30073);

return statearr_30099;
})();
var statearr_30100_30120 = state_30096__$1;
(statearr_30100_30120[(2)] = null);

(statearr_30100_30120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_30073 = (state_30096[(7)]);
var inst_30076 = cljs.core.first.call(null,inst_30073);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30096__$1,(7),ch,inst_30076);
} else {
if((state_val_30097 === (13))){
var inst_30090 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30101_30121 = state_30096__$1;
(statearr_30101_30121[(2)] = inst_30090);

(statearr_30101_30121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var inst_30081 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30081)){
var statearr_30102_30122 = state_30096__$1;
(statearr_30102_30122[(1)] = (8));

} else {
var statearr_30103_30123 = state_30096__$1;
(statearr_30103_30123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30094 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (12))){
var state_30096__$1 = state_30096;
var statearr_30104_30124 = state_30096__$1;
(statearr_30104_30124[(2)] = null);

(statearr_30104_30124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (2))){
var inst_30073 = (state_30096[(7)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30073)){
var statearr_30105_30125 = state_30096__$1;
(statearr_30105_30125[(1)] = (4));

} else {
var statearr_30106_30126 = state_30096__$1;
(statearr_30106_30126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (11))){
var inst_30087 = cljs.core.async.close_BANG_.call(null,ch);
var state_30096__$1 = state_30096;
var statearr_30107_30127 = state_30096__$1;
(statearr_30107_30127[(2)] = inst_30087);

(statearr_30107_30127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var state_30096__$1 = state_30096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30108_30128 = state_30096__$1;
(statearr_30108_30128[(1)] = (11));

} else {
var statearr_30109_30129 = state_30096__$1;
(statearr_30109_30129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (5))){
var inst_30073 = (state_30096[(7)]);
var state_30096__$1 = state_30096;
var statearr_30110_30130 = state_30096__$1;
(statearr_30110_30130[(2)] = inst_30073);

(statearr_30110_30130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_30092 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30111_30131 = state_30096__$1;
(statearr_30111_30131[(2)] = inst_30092);

(statearr_30111_30131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_30073 = (state_30096[(7)]);
var inst_30083 = cljs.core.next.call(null,inst_30073);
var inst_30073__$1 = inst_30083;
var state_30096__$1 = (function (){var statearr_30112 = state_30096;
(statearr_30112[(7)] = inst_30073__$1);

return statearr_30112;
})();
var statearr_30113_30132 = state_30096__$1;
(statearr_30113_30132[(2)] = null);

(statearr_30113_30132[(1)] = (2));


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
});})(c__29538__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_30114 = [null,null,null,null,null,null,null,null];
(statearr_30114[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_30114[(1)] = (1));

return statearr_30114;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_30096){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30115){if((e30115 instanceof Object)){
var ex__29447__auto__ = e30115;
var statearr_30116_30133 = state_30096;
(statearr_30116_30133[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30134 = state_30096;
state_30096 = G__30134;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__))
})();
var state__29540__auto__ = (function (){var statearr_30117 = f__29539__auto__.call(null);
(statearr_30117[(6)] = c__29538__auto__);

return statearr_30117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__))
);

return c__29538__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30135 = (function (ch,cs,meta30136){
this.ch = ch;
this.cs = cs;
this.meta30136 = meta30136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30137,meta30136__$1){
var self__ = this;
var _30137__$1 = this;
return (new cljs.core.async.t_cljs$core$async30135(self__.ch,self__.cs,meta30136__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30137){
var self__ = this;
var _30137__$1 = this;
return self__.meta30136;
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30136","meta30136",1906362076,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30135";

cljs.core.async.t_cljs$core$async30135.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30135");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30135.
 */
cljs.core.async.__GT_t_cljs$core$async30135 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30135(ch__$1,cs__$1,meta30136){
return (new cljs.core.async.t_cljs$core$async30135(ch__$1,cs__$1,meta30136));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30135(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29538__auto___30357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___30357,cs,m,dchan,dctr,done){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___30357,cs,m,dchan,dctr,done){
return (function (state_30272){
var state_val_30273 = (state_30272[(1)]);
if((state_val_30273 === (7))){
var inst_30268 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30274_30358 = state_30272__$1;
(statearr_30274_30358[(2)] = inst_30268);

(statearr_30274_30358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (20))){
var inst_30171 = (state_30272[(7)]);
var inst_30183 = cljs.core.first.call(null,inst_30171);
var inst_30184 = cljs.core.nth.call(null,inst_30183,(0),null);
var inst_30185 = cljs.core.nth.call(null,inst_30183,(1),null);
var state_30272__$1 = (function (){var statearr_30275 = state_30272;
(statearr_30275[(8)] = inst_30184);

return statearr_30275;
})();
if(cljs.core.truth_(inst_30185)){
var statearr_30276_30359 = state_30272__$1;
(statearr_30276_30359[(1)] = (22));

} else {
var statearr_30277_30360 = state_30272__$1;
(statearr_30277_30360[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (27))){
var inst_30215 = (state_30272[(9)]);
var inst_30213 = (state_30272[(10)]);
var inst_30140 = (state_30272[(11)]);
var inst_30220 = (state_30272[(12)]);
var inst_30220__$1 = cljs.core._nth.call(null,inst_30213,inst_30215);
var inst_30221 = cljs.core.async.put_BANG_.call(null,inst_30220__$1,inst_30140,done);
var state_30272__$1 = (function (){var statearr_30278 = state_30272;
(statearr_30278[(12)] = inst_30220__$1);

return statearr_30278;
})();
if(cljs.core.truth_(inst_30221)){
var statearr_30279_30361 = state_30272__$1;
(statearr_30279_30361[(1)] = (30));

} else {
var statearr_30280_30362 = state_30272__$1;
(statearr_30280_30362[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (1))){
var state_30272__$1 = state_30272;
var statearr_30281_30363 = state_30272__$1;
(statearr_30281_30363[(2)] = null);

(statearr_30281_30363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (24))){
var inst_30171 = (state_30272[(7)]);
var inst_30190 = (state_30272[(2)]);
var inst_30191 = cljs.core.next.call(null,inst_30171);
var inst_30149 = inst_30191;
var inst_30150 = null;
var inst_30151 = (0);
var inst_30152 = (0);
var state_30272__$1 = (function (){var statearr_30282 = state_30272;
(statearr_30282[(13)] = inst_30150);

(statearr_30282[(14)] = inst_30149);

(statearr_30282[(15)] = inst_30190);

(statearr_30282[(16)] = inst_30151);

(statearr_30282[(17)] = inst_30152);

return statearr_30282;
})();
var statearr_30283_30364 = state_30272__$1;
(statearr_30283_30364[(2)] = null);

(statearr_30283_30364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (39))){
var state_30272__$1 = state_30272;
var statearr_30287_30365 = state_30272__$1;
(statearr_30287_30365[(2)] = null);

(statearr_30287_30365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (4))){
var inst_30140 = (state_30272[(11)]);
var inst_30140__$1 = (state_30272[(2)]);
var inst_30141 = (inst_30140__$1 == null);
var state_30272__$1 = (function (){var statearr_30288 = state_30272;
(statearr_30288[(11)] = inst_30140__$1);

return statearr_30288;
})();
if(cljs.core.truth_(inst_30141)){
var statearr_30289_30366 = state_30272__$1;
(statearr_30289_30366[(1)] = (5));

} else {
var statearr_30290_30367 = state_30272__$1;
(statearr_30290_30367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (15))){
var inst_30150 = (state_30272[(13)]);
var inst_30149 = (state_30272[(14)]);
var inst_30151 = (state_30272[(16)]);
var inst_30152 = (state_30272[(17)]);
var inst_30167 = (state_30272[(2)]);
var inst_30168 = (inst_30152 + (1));
var tmp30284 = inst_30150;
var tmp30285 = inst_30149;
var tmp30286 = inst_30151;
var inst_30149__$1 = tmp30285;
var inst_30150__$1 = tmp30284;
var inst_30151__$1 = tmp30286;
var inst_30152__$1 = inst_30168;
var state_30272__$1 = (function (){var statearr_30291 = state_30272;
(statearr_30291[(13)] = inst_30150__$1);

(statearr_30291[(14)] = inst_30149__$1);

(statearr_30291[(16)] = inst_30151__$1);

(statearr_30291[(17)] = inst_30152__$1);

(statearr_30291[(18)] = inst_30167);

return statearr_30291;
})();
var statearr_30292_30368 = state_30272__$1;
(statearr_30292_30368[(2)] = null);

(statearr_30292_30368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (21))){
var inst_30194 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30296_30369 = state_30272__$1;
(statearr_30296_30369[(2)] = inst_30194);

(statearr_30296_30369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (31))){
var inst_30220 = (state_30272[(12)]);
var inst_30224 = done.call(null,null);
var inst_30225 = cljs.core.async.untap_STAR_.call(null,m,inst_30220);
var state_30272__$1 = (function (){var statearr_30297 = state_30272;
(statearr_30297[(19)] = inst_30224);

return statearr_30297;
})();
var statearr_30298_30370 = state_30272__$1;
(statearr_30298_30370[(2)] = inst_30225);

(statearr_30298_30370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (32))){
var inst_30212 = (state_30272[(20)]);
var inst_30214 = (state_30272[(21)]);
var inst_30215 = (state_30272[(9)]);
var inst_30213 = (state_30272[(10)]);
var inst_30227 = (state_30272[(2)]);
var inst_30228 = (inst_30215 + (1));
var tmp30293 = inst_30212;
var tmp30294 = inst_30214;
var tmp30295 = inst_30213;
var inst_30212__$1 = tmp30293;
var inst_30213__$1 = tmp30295;
var inst_30214__$1 = tmp30294;
var inst_30215__$1 = inst_30228;
var state_30272__$1 = (function (){var statearr_30299 = state_30272;
(statearr_30299[(20)] = inst_30212__$1);

(statearr_30299[(21)] = inst_30214__$1);

(statearr_30299[(22)] = inst_30227);

(statearr_30299[(9)] = inst_30215__$1);

(statearr_30299[(10)] = inst_30213__$1);

return statearr_30299;
})();
var statearr_30300_30371 = state_30272__$1;
(statearr_30300_30371[(2)] = null);

(statearr_30300_30371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (40))){
var inst_30240 = (state_30272[(23)]);
var inst_30244 = done.call(null,null);
var inst_30245 = cljs.core.async.untap_STAR_.call(null,m,inst_30240);
var state_30272__$1 = (function (){var statearr_30301 = state_30272;
(statearr_30301[(24)] = inst_30244);

return statearr_30301;
})();
var statearr_30302_30372 = state_30272__$1;
(statearr_30302_30372[(2)] = inst_30245);

(statearr_30302_30372[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (33))){
var inst_30231 = (state_30272[(25)]);
var inst_30233 = cljs.core.chunked_seq_QMARK_.call(null,inst_30231);
var state_30272__$1 = state_30272;
if(inst_30233){
var statearr_30303_30373 = state_30272__$1;
(statearr_30303_30373[(1)] = (36));

} else {
var statearr_30304_30374 = state_30272__$1;
(statearr_30304_30374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (13))){
var inst_30161 = (state_30272[(26)]);
var inst_30164 = cljs.core.async.close_BANG_.call(null,inst_30161);
var state_30272__$1 = state_30272;
var statearr_30305_30375 = state_30272__$1;
(statearr_30305_30375[(2)] = inst_30164);

(statearr_30305_30375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (22))){
var inst_30184 = (state_30272[(8)]);
var inst_30187 = cljs.core.async.close_BANG_.call(null,inst_30184);
var state_30272__$1 = state_30272;
var statearr_30306_30376 = state_30272__$1;
(statearr_30306_30376[(2)] = inst_30187);

(statearr_30306_30376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (36))){
var inst_30231 = (state_30272[(25)]);
var inst_30235 = cljs.core.chunk_first.call(null,inst_30231);
var inst_30236 = cljs.core.chunk_rest.call(null,inst_30231);
var inst_30237 = cljs.core.count.call(null,inst_30235);
var inst_30212 = inst_30236;
var inst_30213 = inst_30235;
var inst_30214 = inst_30237;
var inst_30215 = (0);
var state_30272__$1 = (function (){var statearr_30307 = state_30272;
(statearr_30307[(20)] = inst_30212);

(statearr_30307[(21)] = inst_30214);

(statearr_30307[(9)] = inst_30215);

(statearr_30307[(10)] = inst_30213);

return statearr_30307;
})();
var statearr_30308_30377 = state_30272__$1;
(statearr_30308_30377[(2)] = null);

(statearr_30308_30377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (41))){
var inst_30231 = (state_30272[(25)]);
var inst_30247 = (state_30272[(2)]);
var inst_30248 = cljs.core.next.call(null,inst_30231);
var inst_30212 = inst_30248;
var inst_30213 = null;
var inst_30214 = (0);
var inst_30215 = (0);
var state_30272__$1 = (function (){var statearr_30309 = state_30272;
(statearr_30309[(20)] = inst_30212);

(statearr_30309[(21)] = inst_30214);

(statearr_30309[(9)] = inst_30215);

(statearr_30309[(27)] = inst_30247);

(statearr_30309[(10)] = inst_30213);

return statearr_30309;
})();
var statearr_30310_30378 = state_30272__$1;
(statearr_30310_30378[(2)] = null);

(statearr_30310_30378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (43))){
var state_30272__$1 = state_30272;
var statearr_30311_30379 = state_30272__$1;
(statearr_30311_30379[(2)] = null);

(statearr_30311_30379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (29))){
var inst_30256 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30312_30380 = state_30272__$1;
(statearr_30312_30380[(2)] = inst_30256);

(statearr_30312_30380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (44))){
var inst_30265 = (state_30272[(2)]);
var state_30272__$1 = (function (){var statearr_30313 = state_30272;
(statearr_30313[(28)] = inst_30265);

return statearr_30313;
})();
var statearr_30314_30381 = state_30272__$1;
(statearr_30314_30381[(2)] = null);

(statearr_30314_30381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (6))){
var inst_30204 = (state_30272[(29)]);
var inst_30203 = cljs.core.deref.call(null,cs);
var inst_30204__$1 = cljs.core.keys.call(null,inst_30203);
var inst_30205 = cljs.core.count.call(null,inst_30204__$1);
var inst_30206 = cljs.core.reset_BANG_.call(null,dctr,inst_30205);
var inst_30211 = cljs.core.seq.call(null,inst_30204__$1);
var inst_30212 = inst_30211;
var inst_30213 = null;
var inst_30214 = (0);
var inst_30215 = (0);
var state_30272__$1 = (function (){var statearr_30315 = state_30272;
(statearr_30315[(20)] = inst_30212);

(statearr_30315[(29)] = inst_30204__$1);

(statearr_30315[(21)] = inst_30214);

(statearr_30315[(9)] = inst_30215);

(statearr_30315[(30)] = inst_30206);

(statearr_30315[(10)] = inst_30213);

return statearr_30315;
})();
var statearr_30316_30382 = state_30272__$1;
(statearr_30316_30382[(2)] = null);

(statearr_30316_30382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (28))){
var inst_30212 = (state_30272[(20)]);
var inst_30231 = (state_30272[(25)]);
var inst_30231__$1 = cljs.core.seq.call(null,inst_30212);
var state_30272__$1 = (function (){var statearr_30317 = state_30272;
(statearr_30317[(25)] = inst_30231__$1);

return statearr_30317;
})();
if(inst_30231__$1){
var statearr_30318_30383 = state_30272__$1;
(statearr_30318_30383[(1)] = (33));

} else {
var statearr_30319_30384 = state_30272__$1;
(statearr_30319_30384[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (25))){
var inst_30214 = (state_30272[(21)]);
var inst_30215 = (state_30272[(9)]);
var inst_30217 = (inst_30215 < inst_30214);
var inst_30218 = inst_30217;
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30218)){
var statearr_30320_30385 = state_30272__$1;
(statearr_30320_30385[(1)] = (27));

} else {
var statearr_30321_30386 = state_30272__$1;
(statearr_30321_30386[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (34))){
var state_30272__$1 = state_30272;
var statearr_30322_30387 = state_30272__$1;
(statearr_30322_30387[(2)] = null);

(statearr_30322_30387[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (17))){
var state_30272__$1 = state_30272;
var statearr_30323_30388 = state_30272__$1;
(statearr_30323_30388[(2)] = null);

(statearr_30323_30388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (3))){
var inst_30270 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30272__$1,inst_30270);
} else {
if((state_val_30273 === (12))){
var inst_30199 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30324_30389 = state_30272__$1;
(statearr_30324_30389[(2)] = inst_30199);

(statearr_30324_30389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (2))){
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(4),ch);
} else {
if((state_val_30273 === (23))){
var state_30272__$1 = state_30272;
var statearr_30325_30390 = state_30272__$1;
(statearr_30325_30390[(2)] = null);

(statearr_30325_30390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (35))){
var inst_30254 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30326_30391 = state_30272__$1;
(statearr_30326_30391[(2)] = inst_30254);

(statearr_30326_30391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (19))){
var inst_30171 = (state_30272[(7)]);
var inst_30175 = cljs.core.chunk_first.call(null,inst_30171);
var inst_30176 = cljs.core.chunk_rest.call(null,inst_30171);
var inst_30177 = cljs.core.count.call(null,inst_30175);
var inst_30149 = inst_30176;
var inst_30150 = inst_30175;
var inst_30151 = inst_30177;
var inst_30152 = (0);
var state_30272__$1 = (function (){var statearr_30327 = state_30272;
(statearr_30327[(13)] = inst_30150);

(statearr_30327[(14)] = inst_30149);

(statearr_30327[(16)] = inst_30151);

(statearr_30327[(17)] = inst_30152);

return statearr_30327;
})();
var statearr_30328_30392 = state_30272__$1;
(statearr_30328_30392[(2)] = null);

(statearr_30328_30392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (11))){
var inst_30149 = (state_30272[(14)]);
var inst_30171 = (state_30272[(7)]);
var inst_30171__$1 = cljs.core.seq.call(null,inst_30149);
var state_30272__$1 = (function (){var statearr_30329 = state_30272;
(statearr_30329[(7)] = inst_30171__$1);

return statearr_30329;
})();
if(inst_30171__$1){
var statearr_30330_30393 = state_30272__$1;
(statearr_30330_30393[(1)] = (16));

} else {
var statearr_30331_30394 = state_30272__$1;
(statearr_30331_30394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (9))){
var inst_30201 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30332_30395 = state_30272__$1;
(statearr_30332_30395[(2)] = inst_30201);

(statearr_30332_30395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (5))){
var inst_30147 = cljs.core.deref.call(null,cs);
var inst_30148 = cljs.core.seq.call(null,inst_30147);
var inst_30149 = inst_30148;
var inst_30150 = null;
var inst_30151 = (0);
var inst_30152 = (0);
var state_30272__$1 = (function (){var statearr_30333 = state_30272;
(statearr_30333[(13)] = inst_30150);

(statearr_30333[(14)] = inst_30149);

(statearr_30333[(16)] = inst_30151);

(statearr_30333[(17)] = inst_30152);

return statearr_30333;
})();
var statearr_30334_30396 = state_30272__$1;
(statearr_30334_30396[(2)] = null);

(statearr_30334_30396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (14))){
var state_30272__$1 = state_30272;
var statearr_30335_30397 = state_30272__$1;
(statearr_30335_30397[(2)] = null);

(statearr_30335_30397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (45))){
var inst_30262 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30336_30398 = state_30272__$1;
(statearr_30336_30398[(2)] = inst_30262);

(statearr_30336_30398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (26))){
var inst_30204 = (state_30272[(29)]);
var inst_30258 = (state_30272[(2)]);
var inst_30259 = cljs.core.seq.call(null,inst_30204);
var state_30272__$1 = (function (){var statearr_30337 = state_30272;
(statearr_30337[(31)] = inst_30258);

return statearr_30337;
})();
if(inst_30259){
var statearr_30338_30399 = state_30272__$1;
(statearr_30338_30399[(1)] = (42));

} else {
var statearr_30339_30400 = state_30272__$1;
(statearr_30339_30400[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (16))){
var inst_30171 = (state_30272[(7)]);
var inst_30173 = cljs.core.chunked_seq_QMARK_.call(null,inst_30171);
var state_30272__$1 = state_30272;
if(inst_30173){
var statearr_30340_30401 = state_30272__$1;
(statearr_30340_30401[(1)] = (19));

} else {
var statearr_30341_30402 = state_30272__$1;
(statearr_30341_30402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (38))){
var inst_30251 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30342_30403 = state_30272__$1;
(statearr_30342_30403[(2)] = inst_30251);

(statearr_30342_30403[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (30))){
var state_30272__$1 = state_30272;
var statearr_30343_30404 = state_30272__$1;
(statearr_30343_30404[(2)] = null);

(statearr_30343_30404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (10))){
var inst_30150 = (state_30272[(13)]);
var inst_30152 = (state_30272[(17)]);
var inst_30160 = cljs.core._nth.call(null,inst_30150,inst_30152);
var inst_30161 = cljs.core.nth.call(null,inst_30160,(0),null);
var inst_30162 = cljs.core.nth.call(null,inst_30160,(1),null);
var state_30272__$1 = (function (){var statearr_30344 = state_30272;
(statearr_30344[(26)] = inst_30161);

return statearr_30344;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30345_30405 = state_30272__$1;
(statearr_30345_30405[(1)] = (13));

} else {
var statearr_30346_30406 = state_30272__$1;
(statearr_30346_30406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (18))){
var inst_30197 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30347_30407 = state_30272__$1;
(statearr_30347_30407[(2)] = inst_30197);

(statearr_30347_30407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (42))){
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(45),dchan);
} else {
if((state_val_30273 === (37))){
var inst_30240 = (state_30272[(23)]);
var inst_30231 = (state_30272[(25)]);
var inst_30140 = (state_30272[(11)]);
var inst_30240__$1 = cljs.core.first.call(null,inst_30231);
var inst_30241 = cljs.core.async.put_BANG_.call(null,inst_30240__$1,inst_30140,done);
var state_30272__$1 = (function (){var statearr_30348 = state_30272;
(statearr_30348[(23)] = inst_30240__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30349_30408 = state_30272__$1;
(statearr_30349_30408[(1)] = (39));

} else {
var statearr_30350_30409 = state_30272__$1;
(statearr_30350_30409[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (8))){
var inst_30151 = (state_30272[(16)]);
var inst_30152 = (state_30272[(17)]);
var inst_30154 = (inst_30152 < inst_30151);
var inst_30155 = inst_30154;
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30155)){
var statearr_30351_30410 = state_30272__$1;
(statearr_30351_30410[(1)] = (10));

} else {
var statearr_30352_30411 = state_30272__$1;
(statearr_30352_30411[(1)] = (11));

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
});})(c__29538__auto___30357,cs,m,dchan,dctr,done))
;
return ((function (switch__29443__auto__,c__29538__auto___30357,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29444__auto__ = null;
var cljs$core$async$mult_$_state_machine__29444__auto____0 = (function (){
var statearr_30353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30353[(0)] = cljs$core$async$mult_$_state_machine__29444__auto__);

(statearr_30353[(1)] = (1));

return statearr_30353;
});
var cljs$core$async$mult_$_state_machine__29444__auto____1 = (function (state_30272){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30354){if((e30354 instanceof Object)){
var ex__29447__auto__ = e30354;
var statearr_30355_30412 = state_30272;
(statearr_30355_30412[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30413 = state_30272;
state_30272 = G__30413;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29444__auto__ = function(state_30272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29444__auto____1.call(this,state_30272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29444__auto____0;
cljs$core$async$mult_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29444__auto____1;
return cljs$core$async$mult_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___30357,cs,m,dchan,dctr,done))
})();
var state__29540__auto__ = (function (){var statearr_30356 = f__29539__auto__.call(null);
(statearr_30356[(6)] = c__29538__auto___30357);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___30357,cs,m,dchan,dctr,done))
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
var G__30415 = arguments.length;
switch (G__30415) {
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
var len__4730__auto___30427 = arguments.length;
var i__4731__auto___30428 = (0);
while(true){
if((i__4731__auto___30428 < len__4730__auto___30427)){
args__4736__auto__.push((arguments[i__4731__auto___30428]));

var G__30429 = (i__4731__auto___30428 + (1));
i__4731__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30421){
var map__30422 = p__30421;
var map__30422__$1 = (((((!((map__30422 == null))))?(((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30422):map__30422);
var opts = map__30422__$1;
var statearr_30424_30430 = state;
(statearr_30424_30430[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__30422,map__30422__$1,opts){
return (function (val){
var statearr_30425_30431 = state;
(statearr_30425_30431[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30422,map__30422__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30426_30432 = state;
(statearr_30426_30432[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30417){
var G__30418 = cljs.core.first.call(null,seq30417);
var seq30417__$1 = cljs.core.next.call(null,seq30417);
var G__30419 = cljs.core.first.call(null,seq30417__$1);
var seq30417__$2 = cljs.core.next.call(null,seq30417__$1);
var G__30420 = cljs.core.first.call(null,seq30417__$2);
var seq30417__$3 = cljs.core.next.call(null,seq30417__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30418,G__30419,G__30420,seq30417__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30433 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30434){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30434 = meta30434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30435,meta30434__$1){
var self__ = this;
var _30435__$1 = this;
return (new cljs.core.async.t_cljs$core$async30433(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30434__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30435){
var self__ = this;
var _30435__$1 = this;
return self__.meta30434;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30433.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30434","meta30434",314850158,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30433";

cljs.core.async.t_cljs$core$async30433.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30433");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30433.
 */
cljs.core.async.__GT_t_cljs$core$async30433 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30433(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30434){
return (new cljs.core.async.t_cljs$core$async30433(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30434));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30433(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29538__auto___30597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (7))){
var inst_30452 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30539_30598 = state_30537__$1;
(statearr_30539_30598[(2)] = inst_30452);

(statearr_30539_30598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (20))){
var inst_30464 = (state_30537[(7)]);
var state_30537__$1 = state_30537;
var statearr_30540_30599 = state_30537__$1;
(statearr_30540_30599[(2)] = inst_30464);

(statearr_30540_30599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (27))){
var state_30537__$1 = state_30537;
var statearr_30541_30600 = state_30537__$1;
(statearr_30541_30600[(2)] = null);

(statearr_30541_30600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (1))){
var inst_30439 = (state_30537[(8)]);
var inst_30439__$1 = calc_state.call(null);
var inst_30441 = (inst_30439__$1 == null);
var inst_30442 = cljs.core.not.call(null,inst_30441);
var state_30537__$1 = (function (){var statearr_30542 = state_30537;
(statearr_30542[(8)] = inst_30439__$1);

return statearr_30542;
})();
if(inst_30442){
var statearr_30543_30601 = state_30537__$1;
(statearr_30543_30601[(1)] = (2));

} else {
var statearr_30544_30602 = state_30537__$1;
(statearr_30544_30602[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (24))){
var inst_30488 = (state_30537[(9)]);
var inst_30497 = (state_30537[(10)]);
var inst_30511 = (state_30537[(11)]);
var inst_30511__$1 = inst_30488.call(null,inst_30497);
var state_30537__$1 = (function (){var statearr_30545 = state_30537;
(statearr_30545[(11)] = inst_30511__$1);

return statearr_30545;
})();
if(cljs.core.truth_(inst_30511__$1)){
var statearr_30546_30603 = state_30537__$1;
(statearr_30546_30603[(1)] = (29));

} else {
var statearr_30547_30604 = state_30537__$1;
(statearr_30547_30604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (4))){
var inst_30455 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30455)){
var statearr_30548_30605 = state_30537__$1;
(statearr_30548_30605[(1)] = (8));

} else {
var statearr_30549_30606 = state_30537__$1;
(statearr_30549_30606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (15))){
var inst_30482 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30482)){
var statearr_30550_30607 = state_30537__$1;
(statearr_30550_30607[(1)] = (19));

} else {
var statearr_30551_30608 = state_30537__$1;
(statearr_30551_30608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (21))){
var inst_30487 = (state_30537[(12)]);
var inst_30487__$1 = (state_30537[(2)]);
var inst_30488 = cljs.core.get.call(null,inst_30487__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30489 = cljs.core.get.call(null,inst_30487__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30490 = cljs.core.get.call(null,inst_30487__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30537__$1 = (function (){var statearr_30552 = state_30537;
(statearr_30552[(13)] = inst_30489);

(statearr_30552[(9)] = inst_30488);

(statearr_30552[(12)] = inst_30487__$1);

return statearr_30552;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30537__$1,(22),inst_30490);
} else {
if((state_val_30538 === (31))){
var inst_30519 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30519)){
var statearr_30553_30609 = state_30537__$1;
(statearr_30553_30609[(1)] = (32));

} else {
var statearr_30554_30610 = state_30537__$1;
(statearr_30554_30610[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (32))){
var inst_30496 = (state_30537[(14)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30537__$1,(35),out,inst_30496);
} else {
if((state_val_30538 === (33))){
var inst_30487 = (state_30537[(12)]);
var inst_30464 = inst_30487;
var state_30537__$1 = (function (){var statearr_30555 = state_30537;
(statearr_30555[(7)] = inst_30464);

return statearr_30555;
})();
var statearr_30556_30611 = state_30537__$1;
(statearr_30556_30611[(2)] = null);

(statearr_30556_30611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (13))){
var inst_30464 = (state_30537[(7)]);
var inst_30471 = inst_30464.cljs$lang$protocol_mask$partition0$;
var inst_30472 = (inst_30471 & (64));
var inst_30473 = inst_30464.cljs$core$ISeq$;
var inst_30474 = (cljs.core.PROTOCOL_SENTINEL === inst_30473);
var inst_30475 = ((inst_30472) || (inst_30474));
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30475)){
var statearr_30557_30612 = state_30537__$1;
(statearr_30557_30612[(1)] = (16));

} else {
var statearr_30558_30613 = state_30537__$1;
(statearr_30558_30613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (22))){
var inst_30497 = (state_30537[(10)]);
var inst_30496 = (state_30537[(14)]);
var inst_30495 = (state_30537[(2)]);
var inst_30496__$1 = cljs.core.nth.call(null,inst_30495,(0),null);
var inst_30497__$1 = cljs.core.nth.call(null,inst_30495,(1),null);
var inst_30498 = (inst_30496__$1 == null);
var inst_30499 = cljs.core._EQ_.call(null,inst_30497__$1,change);
var inst_30500 = ((inst_30498) || (inst_30499));
var state_30537__$1 = (function (){var statearr_30559 = state_30537;
(statearr_30559[(10)] = inst_30497__$1);

(statearr_30559[(14)] = inst_30496__$1);

return statearr_30559;
})();
if(cljs.core.truth_(inst_30500)){
var statearr_30560_30614 = state_30537__$1;
(statearr_30560_30614[(1)] = (23));

} else {
var statearr_30561_30615 = state_30537__$1;
(statearr_30561_30615[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (36))){
var inst_30487 = (state_30537[(12)]);
var inst_30464 = inst_30487;
var state_30537__$1 = (function (){var statearr_30562 = state_30537;
(statearr_30562[(7)] = inst_30464);

return statearr_30562;
})();
var statearr_30563_30616 = state_30537__$1;
(statearr_30563_30616[(2)] = null);

(statearr_30563_30616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (29))){
var inst_30511 = (state_30537[(11)]);
var state_30537__$1 = state_30537;
var statearr_30564_30617 = state_30537__$1;
(statearr_30564_30617[(2)] = inst_30511);

(statearr_30564_30617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (6))){
var state_30537__$1 = state_30537;
var statearr_30565_30618 = state_30537__$1;
(statearr_30565_30618[(2)] = false);

(statearr_30565_30618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (28))){
var inst_30507 = (state_30537[(2)]);
var inst_30508 = calc_state.call(null);
var inst_30464 = inst_30508;
var state_30537__$1 = (function (){var statearr_30566 = state_30537;
(statearr_30566[(15)] = inst_30507);

(statearr_30566[(7)] = inst_30464);

return statearr_30566;
})();
var statearr_30567_30619 = state_30537__$1;
(statearr_30567_30619[(2)] = null);

(statearr_30567_30619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (25))){
var inst_30533 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30568_30620 = state_30537__$1;
(statearr_30568_30620[(2)] = inst_30533);

(statearr_30568_30620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (34))){
var inst_30531 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30569_30621 = state_30537__$1;
(statearr_30569_30621[(2)] = inst_30531);

(statearr_30569_30621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (17))){
var state_30537__$1 = state_30537;
var statearr_30570_30622 = state_30537__$1;
(statearr_30570_30622[(2)] = false);

(statearr_30570_30622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (3))){
var state_30537__$1 = state_30537;
var statearr_30571_30623 = state_30537__$1;
(statearr_30571_30623[(2)] = false);

(statearr_30571_30623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (12))){
var inst_30535 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30537__$1,inst_30535);
} else {
if((state_val_30538 === (2))){
var inst_30439 = (state_30537[(8)]);
var inst_30444 = inst_30439.cljs$lang$protocol_mask$partition0$;
var inst_30445 = (inst_30444 & (64));
var inst_30446 = inst_30439.cljs$core$ISeq$;
var inst_30447 = (cljs.core.PROTOCOL_SENTINEL === inst_30446);
var inst_30448 = ((inst_30445) || (inst_30447));
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30448)){
var statearr_30572_30624 = state_30537__$1;
(statearr_30572_30624[(1)] = (5));

} else {
var statearr_30573_30625 = state_30537__$1;
(statearr_30573_30625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (23))){
var inst_30496 = (state_30537[(14)]);
var inst_30502 = (inst_30496 == null);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30502)){
var statearr_30574_30626 = state_30537__$1;
(statearr_30574_30626[(1)] = (26));

} else {
var statearr_30575_30627 = state_30537__$1;
(statearr_30575_30627[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (35))){
var inst_30522 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
if(cljs.core.truth_(inst_30522)){
var statearr_30576_30628 = state_30537__$1;
(statearr_30576_30628[(1)] = (36));

} else {
var statearr_30577_30629 = state_30537__$1;
(statearr_30577_30629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (19))){
var inst_30464 = (state_30537[(7)]);
var inst_30484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30464);
var state_30537__$1 = state_30537;
var statearr_30578_30630 = state_30537__$1;
(statearr_30578_30630[(2)] = inst_30484);

(statearr_30578_30630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (11))){
var inst_30464 = (state_30537[(7)]);
var inst_30468 = (inst_30464 == null);
var inst_30469 = cljs.core.not.call(null,inst_30468);
var state_30537__$1 = state_30537;
if(inst_30469){
var statearr_30579_30631 = state_30537__$1;
(statearr_30579_30631[(1)] = (13));

} else {
var statearr_30580_30632 = state_30537__$1;
(statearr_30580_30632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (9))){
var inst_30439 = (state_30537[(8)]);
var state_30537__$1 = state_30537;
var statearr_30581_30633 = state_30537__$1;
(statearr_30581_30633[(2)] = inst_30439);

(statearr_30581_30633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (5))){
var state_30537__$1 = state_30537;
var statearr_30582_30634 = state_30537__$1;
(statearr_30582_30634[(2)] = true);

(statearr_30582_30634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (14))){
var state_30537__$1 = state_30537;
var statearr_30583_30635 = state_30537__$1;
(statearr_30583_30635[(2)] = false);

(statearr_30583_30635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (26))){
var inst_30497 = (state_30537[(10)]);
var inst_30504 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30497);
var state_30537__$1 = state_30537;
var statearr_30584_30636 = state_30537__$1;
(statearr_30584_30636[(2)] = inst_30504);

(statearr_30584_30636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (16))){
var state_30537__$1 = state_30537;
var statearr_30585_30637 = state_30537__$1;
(statearr_30585_30637[(2)] = true);

(statearr_30585_30637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (38))){
var inst_30527 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30586_30638 = state_30537__$1;
(statearr_30586_30638[(2)] = inst_30527);

(statearr_30586_30638[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (30))){
var inst_30489 = (state_30537[(13)]);
var inst_30488 = (state_30537[(9)]);
var inst_30497 = (state_30537[(10)]);
var inst_30514 = cljs.core.empty_QMARK_.call(null,inst_30488);
var inst_30515 = inst_30489.call(null,inst_30497);
var inst_30516 = cljs.core.not.call(null,inst_30515);
var inst_30517 = ((inst_30514) && (inst_30516));
var state_30537__$1 = state_30537;
var statearr_30587_30639 = state_30537__$1;
(statearr_30587_30639[(2)] = inst_30517);

(statearr_30587_30639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (10))){
var inst_30439 = (state_30537[(8)]);
var inst_30460 = (state_30537[(2)]);
var inst_30461 = cljs.core.get.call(null,inst_30460,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30462 = cljs.core.get.call(null,inst_30460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30463 = cljs.core.get.call(null,inst_30460,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30464 = inst_30439;
var state_30537__$1 = (function (){var statearr_30588 = state_30537;
(statearr_30588[(16)] = inst_30461);

(statearr_30588[(17)] = inst_30463);

(statearr_30588[(18)] = inst_30462);

(statearr_30588[(7)] = inst_30464);

return statearr_30588;
})();
var statearr_30589_30640 = state_30537__$1;
(statearr_30589_30640[(2)] = null);

(statearr_30589_30640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (18))){
var inst_30479 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30590_30641 = state_30537__$1;
(statearr_30590_30641[(2)] = inst_30479);

(statearr_30590_30641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (37))){
var state_30537__$1 = state_30537;
var statearr_30591_30642 = state_30537__$1;
(statearr_30591_30642[(2)] = null);

(statearr_30591_30642[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (8))){
var inst_30439 = (state_30537[(8)]);
var inst_30457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30439);
var state_30537__$1 = state_30537;
var statearr_30592_30643 = state_30537__$1;
(statearr_30592_30643[(2)] = inst_30457);

(statearr_30592_30643[(1)] = (10));


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
});})(c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29443__auto__,c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29444__auto__ = null;
var cljs$core$async$mix_$_state_machine__29444__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$mix_$_state_machine__29444__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$mix_$_state_machine__29444__auto____1 = (function (state_30537){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__29447__auto__ = e30594;
var statearr_30595_30644 = state_30537;
(statearr_30595_30644[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30645 = state_30537;
state_30537 = G__30645;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29444__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29444__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29444__auto____0;
cljs$core$async$mix_$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29444__auto____1;
return cljs$core$async$mix_$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29540__auto__ = (function (){var statearr_30596 = f__29539__auto__.call(null);
(statearr_30596[(6)] = c__29538__auto___30597);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___30597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__30647 = arguments.length;
switch (G__30647) {
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
var G__30651 = arguments.length;
switch (G__30651) {
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
return (function (p1__30649_SHARP_){
if(cljs.core.truth_(p1__30649_SHARP_.call(null,topic))){
return p1__30649_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30649_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30652 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30653){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30653 = meta30653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30654,meta30653__$1){
var self__ = this;
var _30654__$1 = this;
return (new cljs.core.async.t_cljs$core$async30652(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30653__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30654){
var self__ = this;
var _30654__$1 = this;
return self__.meta30653;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30653","meta30653",1316082372,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30652";

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30652");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30652.
 */
cljs.core.async.__GT_t_cljs$core$async30652 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30653){
return (new cljs.core.async.t_cljs$core$async30652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30653));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30652(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29538__auto___30772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___30772,mults,ensure_mult,p){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___30772,mults,ensure_mult,p){
return (function (state_30726){
var state_val_30727 = (state_30726[(1)]);
if((state_val_30727 === (7))){
var inst_30722 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30728_30773 = state_30726__$1;
(statearr_30728_30773[(2)] = inst_30722);

(statearr_30728_30773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (20))){
var state_30726__$1 = state_30726;
var statearr_30729_30774 = state_30726__$1;
(statearr_30729_30774[(2)] = null);

(statearr_30729_30774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (1))){
var state_30726__$1 = state_30726;
var statearr_30730_30775 = state_30726__$1;
(statearr_30730_30775[(2)] = null);

(statearr_30730_30775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (24))){
var inst_30705 = (state_30726[(7)]);
var inst_30714 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30705);
var state_30726__$1 = state_30726;
var statearr_30731_30776 = state_30726__$1;
(statearr_30731_30776[(2)] = inst_30714);

(statearr_30731_30776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (4))){
var inst_30657 = (state_30726[(8)]);
var inst_30657__$1 = (state_30726[(2)]);
var inst_30658 = (inst_30657__$1 == null);
var state_30726__$1 = (function (){var statearr_30732 = state_30726;
(statearr_30732[(8)] = inst_30657__$1);

return statearr_30732;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30733_30777 = state_30726__$1;
(statearr_30733_30777[(1)] = (5));

} else {
var statearr_30734_30778 = state_30726__$1;
(statearr_30734_30778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (15))){
var inst_30699 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30735_30779 = state_30726__$1;
(statearr_30735_30779[(2)] = inst_30699);

(statearr_30735_30779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (21))){
var inst_30719 = (state_30726[(2)]);
var state_30726__$1 = (function (){var statearr_30736 = state_30726;
(statearr_30736[(9)] = inst_30719);

return statearr_30736;
})();
var statearr_30737_30780 = state_30726__$1;
(statearr_30737_30780[(2)] = null);

(statearr_30737_30780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (13))){
var inst_30681 = (state_30726[(10)]);
var inst_30683 = cljs.core.chunked_seq_QMARK_.call(null,inst_30681);
var state_30726__$1 = state_30726;
if(inst_30683){
var statearr_30738_30781 = state_30726__$1;
(statearr_30738_30781[(1)] = (16));

} else {
var statearr_30739_30782 = state_30726__$1;
(statearr_30739_30782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (22))){
var inst_30711 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
if(cljs.core.truth_(inst_30711)){
var statearr_30740_30783 = state_30726__$1;
(statearr_30740_30783[(1)] = (23));

} else {
var statearr_30741_30784 = state_30726__$1;
(statearr_30741_30784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (6))){
var inst_30707 = (state_30726[(11)]);
var inst_30657 = (state_30726[(8)]);
var inst_30705 = (state_30726[(7)]);
var inst_30705__$1 = topic_fn.call(null,inst_30657);
var inst_30706 = cljs.core.deref.call(null,mults);
var inst_30707__$1 = cljs.core.get.call(null,inst_30706,inst_30705__$1);
var state_30726__$1 = (function (){var statearr_30742 = state_30726;
(statearr_30742[(11)] = inst_30707__$1);

(statearr_30742[(7)] = inst_30705__$1);

return statearr_30742;
})();
if(cljs.core.truth_(inst_30707__$1)){
var statearr_30743_30785 = state_30726__$1;
(statearr_30743_30785[(1)] = (19));

} else {
var statearr_30744_30786 = state_30726__$1;
(statearr_30744_30786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (25))){
var inst_30716 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30745_30787 = state_30726__$1;
(statearr_30745_30787[(2)] = inst_30716);

(statearr_30745_30787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (17))){
var inst_30681 = (state_30726[(10)]);
var inst_30690 = cljs.core.first.call(null,inst_30681);
var inst_30691 = cljs.core.async.muxch_STAR_.call(null,inst_30690);
var inst_30692 = cljs.core.async.close_BANG_.call(null,inst_30691);
var inst_30693 = cljs.core.next.call(null,inst_30681);
var inst_30667 = inst_30693;
var inst_30668 = null;
var inst_30669 = (0);
var inst_30670 = (0);
var state_30726__$1 = (function (){var statearr_30746 = state_30726;
(statearr_30746[(12)] = inst_30692);

(statearr_30746[(13)] = inst_30668);

(statearr_30746[(14)] = inst_30669);

(statearr_30746[(15)] = inst_30667);

(statearr_30746[(16)] = inst_30670);

return statearr_30746;
})();
var statearr_30747_30788 = state_30726__$1;
(statearr_30747_30788[(2)] = null);

(statearr_30747_30788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (3))){
var inst_30724 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30726__$1,inst_30724);
} else {
if((state_val_30727 === (12))){
var inst_30701 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30748_30789 = state_30726__$1;
(statearr_30748_30789[(2)] = inst_30701);

(statearr_30748_30789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (2))){
var state_30726__$1 = state_30726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30726__$1,(4),ch);
} else {
if((state_val_30727 === (23))){
var state_30726__$1 = state_30726;
var statearr_30749_30790 = state_30726__$1;
(statearr_30749_30790[(2)] = null);

(statearr_30749_30790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (19))){
var inst_30707 = (state_30726[(11)]);
var inst_30657 = (state_30726[(8)]);
var inst_30709 = cljs.core.async.muxch_STAR_.call(null,inst_30707);
var state_30726__$1 = state_30726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30726__$1,(22),inst_30709,inst_30657);
} else {
if((state_val_30727 === (11))){
var inst_30667 = (state_30726[(15)]);
var inst_30681 = (state_30726[(10)]);
var inst_30681__$1 = cljs.core.seq.call(null,inst_30667);
var state_30726__$1 = (function (){var statearr_30750 = state_30726;
(statearr_30750[(10)] = inst_30681__$1);

return statearr_30750;
})();
if(inst_30681__$1){
var statearr_30751_30791 = state_30726__$1;
(statearr_30751_30791[(1)] = (13));

} else {
var statearr_30752_30792 = state_30726__$1;
(statearr_30752_30792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (9))){
var inst_30703 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30753_30793 = state_30726__$1;
(statearr_30753_30793[(2)] = inst_30703);

(statearr_30753_30793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (5))){
var inst_30664 = cljs.core.deref.call(null,mults);
var inst_30665 = cljs.core.vals.call(null,inst_30664);
var inst_30666 = cljs.core.seq.call(null,inst_30665);
var inst_30667 = inst_30666;
var inst_30668 = null;
var inst_30669 = (0);
var inst_30670 = (0);
var state_30726__$1 = (function (){var statearr_30754 = state_30726;
(statearr_30754[(13)] = inst_30668);

(statearr_30754[(14)] = inst_30669);

(statearr_30754[(15)] = inst_30667);

(statearr_30754[(16)] = inst_30670);

return statearr_30754;
})();
var statearr_30755_30794 = state_30726__$1;
(statearr_30755_30794[(2)] = null);

(statearr_30755_30794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (14))){
var state_30726__$1 = state_30726;
var statearr_30759_30795 = state_30726__$1;
(statearr_30759_30795[(2)] = null);

(statearr_30759_30795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (16))){
var inst_30681 = (state_30726[(10)]);
var inst_30685 = cljs.core.chunk_first.call(null,inst_30681);
var inst_30686 = cljs.core.chunk_rest.call(null,inst_30681);
var inst_30687 = cljs.core.count.call(null,inst_30685);
var inst_30667 = inst_30686;
var inst_30668 = inst_30685;
var inst_30669 = inst_30687;
var inst_30670 = (0);
var state_30726__$1 = (function (){var statearr_30760 = state_30726;
(statearr_30760[(13)] = inst_30668);

(statearr_30760[(14)] = inst_30669);

(statearr_30760[(15)] = inst_30667);

(statearr_30760[(16)] = inst_30670);

return statearr_30760;
})();
var statearr_30761_30796 = state_30726__$1;
(statearr_30761_30796[(2)] = null);

(statearr_30761_30796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (10))){
var inst_30668 = (state_30726[(13)]);
var inst_30669 = (state_30726[(14)]);
var inst_30667 = (state_30726[(15)]);
var inst_30670 = (state_30726[(16)]);
var inst_30675 = cljs.core._nth.call(null,inst_30668,inst_30670);
var inst_30676 = cljs.core.async.muxch_STAR_.call(null,inst_30675);
var inst_30677 = cljs.core.async.close_BANG_.call(null,inst_30676);
var inst_30678 = (inst_30670 + (1));
var tmp30756 = inst_30668;
var tmp30757 = inst_30669;
var tmp30758 = inst_30667;
var inst_30667__$1 = tmp30758;
var inst_30668__$1 = tmp30756;
var inst_30669__$1 = tmp30757;
var inst_30670__$1 = inst_30678;
var state_30726__$1 = (function (){var statearr_30762 = state_30726;
(statearr_30762[(17)] = inst_30677);

(statearr_30762[(13)] = inst_30668__$1);

(statearr_30762[(14)] = inst_30669__$1);

(statearr_30762[(15)] = inst_30667__$1);

(statearr_30762[(16)] = inst_30670__$1);

return statearr_30762;
})();
var statearr_30763_30797 = state_30726__$1;
(statearr_30763_30797[(2)] = null);

(statearr_30763_30797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (18))){
var inst_30696 = (state_30726[(2)]);
var state_30726__$1 = state_30726;
var statearr_30764_30798 = state_30726__$1;
(statearr_30764_30798[(2)] = inst_30696);

(statearr_30764_30798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30727 === (8))){
var inst_30669 = (state_30726[(14)]);
var inst_30670 = (state_30726[(16)]);
var inst_30672 = (inst_30670 < inst_30669);
var inst_30673 = inst_30672;
var state_30726__$1 = state_30726;
if(cljs.core.truth_(inst_30673)){
var statearr_30765_30799 = state_30726__$1;
(statearr_30765_30799[(1)] = (10));

} else {
var statearr_30766_30800 = state_30726__$1;
(statearr_30766_30800[(1)] = (11));

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
});})(c__29538__auto___30772,mults,ensure_mult,p))
;
return ((function (switch__29443__auto__,c__29538__auto___30772,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_30767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30767[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_30767[(1)] = (1));

return statearr_30767;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_30726){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30768){if((e30768 instanceof Object)){
var ex__29447__auto__ = e30768;
var statearr_30769_30801 = state_30726;
(statearr_30769_30801[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30802 = state_30726;
state_30726 = G__30802;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_30726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_30726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___30772,mults,ensure_mult,p))
})();
var state__29540__auto__ = (function (){var statearr_30770 = f__29539__auto__.call(null);
(statearr_30770[(6)] = c__29538__auto___30772);

return statearr_30770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___30772,mults,ensure_mult,p))
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
var G__30804 = arguments.length;
switch (G__30804) {
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
var G__30807 = arguments.length;
switch (G__30807) {
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
var G__30810 = arguments.length;
switch (G__30810) {
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
var c__29538__auto___30877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (7))){
var state_30849__$1 = state_30849;
var statearr_30851_30878 = state_30849__$1;
(statearr_30851_30878[(2)] = null);

(statearr_30851_30878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30852_30879 = state_30849__$1;
(statearr_30852_30879[(2)] = null);

(statearr_30852_30879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (4))){
var inst_30813 = (state_30849[(7)]);
var inst_30815 = (inst_30813 < cnt);
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30815)){
var statearr_30853_30880 = state_30849__$1;
(statearr_30853_30880[(1)] = (6));

} else {
var statearr_30854_30881 = state_30849__$1;
(statearr_30854_30881[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (15))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30855_30882 = state_30849__$1;
(statearr_30855_30882[(2)] = inst_30845);

(statearr_30855_30882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (13))){
var inst_30838 = cljs.core.async.close_BANG_.call(null,out);
var state_30849__$1 = state_30849;
var statearr_30856_30883 = state_30849__$1;
(statearr_30856_30883[(2)] = inst_30838);

(statearr_30856_30883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var state_30849__$1 = state_30849;
var statearr_30857_30884 = state_30849__$1;
(statearr_30857_30884[(2)] = null);

(statearr_30857_30884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (12))){
var inst_30835 = (state_30849[(8)]);
var inst_30835__$1 = (state_30849[(2)]);
var inst_30836 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30835__$1);
var state_30849__$1 = (function (){var statearr_30858 = state_30849;
(statearr_30858[(8)] = inst_30835__$1);

return statearr_30858;
})();
if(cljs.core.truth_(inst_30836)){
var statearr_30859_30885 = state_30849__$1;
(statearr_30859_30885[(1)] = (13));

} else {
var statearr_30860_30886 = state_30849__$1;
(statearr_30860_30886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var inst_30812 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30813 = (0);
var state_30849__$1 = (function (){var statearr_30861 = state_30849;
(statearr_30861[(9)] = inst_30812);

(statearr_30861[(7)] = inst_30813);

return statearr_30861;
})();
var statearr_30862_30887 = state_30849__$1;
(statearr_30862_30887[(2)] = null);

(statearr_30862_30887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (11))){
var inst_30813 = (state_30849[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30849,(10),Object,null,(9));
var inst_30822 = chs__$1.call(null,inst_30813);
var inst_30823 = done.call(null,inst_30813);
var inst_30824 = cljs.core.async.take_BANG_.call(null,inst_30822,inst_30823);
var state_30849__$1 = state_30849;
var statearr_30863_30888 = state_30849__$1;
(statearr_30863_30888[(2)] = inst_30824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (9))){
var inst_30813 = (state_30849[(7)]);
var inst_30826 = (state_30849[(2)]);
var inst_30827 = (inst_30813 + (1));
var inst_30813__$1 = inst_30827;
var state_30849__$1 = (function (){var statearr_30864 = state_30849;
(statearr_30864[(10)] = inst_30826);

(statearr_30864[(7)] = inst_30813__$1);

return statearr_30864;
})();
var statearr_30865_30889 = state_30849__$1;
(statearr_30865_30889[(2)] = null);

(statearr_30865_30889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var inst_30833 = (state_30849[(2)]);
var state_30849__$1 = (function (){var statearr_30866 = state_30849;
(statearr_30866[(11)] = inst_30833);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30849__$1,(12),dchan);
} else {
if((state_val_30850 === (14))){
var inst_30835 = (state_30849[(8)]);
var inst_30840 = cljs.core.apply.call(null,f,inst_30835);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30849__$1,(16),out,inst_30840);
} else {
if((state_val_30850 === (16))){
var inst_30842 = (state_30849[(2)]);
var state_30849__$1 = (function (){var statearr_30867 = state_30849;
(statearr_30867[(12)] = inst_30842);

return statearr_30867;
})();
var statearr_30868_30890 = state_30849__$1;
(statearr_30868_30890[(2)] = null);

(statearr_30868_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (10))){
var inst_30817 = (state_30849[(2)]);
var inst_30818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30849__$1 = (function (){var statearr_30869 = state_30849;
(statearr_30869[(13)] = inst_30817);

return statearr_30869;
})();
var statearr_30870_30891 = state_30849__$1;
(statearr_30870_30891[(2)] = inst_30818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (8))){
var inst_30831 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30871_30892 = state_30849__$1;
(statearr_30871_30892[(2)] = inst_30831);

(statearr_30871_30892[(1)] = (5));


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
});})(c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29443__auto__,c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_30872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30872[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_30872[(1)] = (1));

return statearr_30872;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_30849){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30873){if((e30873 instanceof Object)){
var ex__29447__auto__ = e30873;
var statearr_30874_30893 = state_30849;
(statearr_30874_30893[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30894 = state_30849;
state_30849 = G__30894;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29540__auto__ = (function (){var statearr_30875 = f__29539__auto__.call(null);
(statearr_30875[(6)] = c__29538__auto___30877);

return statearr_30875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___30877,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30897 = arguments.length;
switch (G__30897) {
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
var c__29538__auto___30951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___30951,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___30951,out){
return (function (state_30929){
var state_val_30930 = (state_30929[(1)]);
if((state_val_30930 === (7))){
var inst_30908 = (state_30929[(7)]);
var inst_30909 = (state_30929[(8)]);
var inst_30908__$1 = (state_30929[(2)]);
var inst_30909__$1 = cljs.core.nth.call(null,inst_30908__$1,(0),null);
var inst_30910 = cljs.core.nth.call(null,inst_30908__$1,(1),null);
var inst_30911 = (inst_30909__$1 == null);
var state_30929__$1 = (function (){var statearr_30931 = state_30929;
(statearr_30931[(7)] = inst_30908__$1);

(statearr_30931[(9)] = inst_30910);

(statearr_30931[(8)] = inst_30909__$1);

return statearr_30931;
})();
if(cljs.core.truth_(inst_30911)){
var statearr_30932_30952 = state_30929__$1;
(statearr_30932_30952[(1)] = (8));

} else {
var statearr_30933_30953 = state_30929__$1;
(statearr_30933_30953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (1))){
var inst_30898 = cljs.core.vec.call(null,chs);
var inst_30899 = inst_30898;
var state_30929__$1 = (function (){var statearr_30934 = state_30929;
(statearr_30934[(10)] = inst_30899);

return statearr_30934;
})();
var statearr_30935_30954 = state_30929__$1;
(statearr_30935_30954[(2)] = null);

(statearr_30935_30954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (4))){
var inst_30899 = (state_30929[(10)]);
var state_30929__$1 = state_30929;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30929__$1,(7),inst_30899);
} else {
if((state_val_30930 === (6))){
var inst_30925 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30936_30955 = state_30929__$1;
(statearr_30936_30955[(2)] = inst_30925);

(statearr_30936_30955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (3))){
var inst_30927 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30929__$1,inst_30927);
} else {
if((state_val_30930 === (2))){
var inst_30899 = (state_30929[(10)]);
var inst_30901 = cljs.core.count.call(null,inst_30899);
var inst_30902 = (inst_30901 > (0));
var state_30929__$1 = state_30929;
if(cljs.core.truth_(inst_30902)){
var statearr_30938_30956 = state_30929__$1;
(statearr_30938_30956[(1)] = (4));

} else {
var statearr_30939_30957 = state_30929__$1;
(statearr_30939_30957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (11))){
var inst_30899 = (state_30929[(10)]);
var inst_30918 = (state_30929[(2)]);
var tmp30937 = inst_30899;
var inst_30899__$1 = tmp30937;
var state_30929__$1 = (function (){var statearr_30940 = state_30929;
(statearr_30940[(11)] = inst_30918);

(statearr_30940[(10)] = inst_30899__$1);

return statearr_30940;
})();
var statearr_30941_30958 = state_30929__$1;
(statearr_30941_30958[(2)] = null);

(statearr_30941_30958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (9))){
var inst_30909 = (state_30929[(8)]);
var state_30929__$1 = state_30929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30929__$1,(11),out,inst_30909);
} else {
if((state_val_30930 === (5))){
var inst_30923 = cljs.core.async.close_BANG_.call(null,out);
var state_30929__$1 = state_30929;
var statearr_30942_30959 = state_30929__$1;
(statearr_30942_30959[(2)] = inst_30923);

(statearr_30942_30959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (10))){
var inst_30921 = (state_30929[(2)]);
var state_30929__$1 = state_30929;
var statearr_30943_30960 = state_30929__$1;
(statearr_30943_30960[(2)] = inst_30921);

(statearr_30943_30960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30930 === (8))){
var inst_30908 = (state_30929[(7)]);
var inst_30910 = (state_30929[(9)]);
var inst_30899 = (state_30929[(10)]);
var inst_30909 = (state_30929[(8)]);
var inst_30913 = (function (){var cs = inst_30899;
var vec__30904 = inst_30908;
var v = inst_30909;
var c = inst_30910;
return ((function (cs,vec__30904,v,c,inst_30908,inst_30910,inst_30899,inst_30909,state_val_30930,c__29538__auto___30951,out){
return (function (p1__30895_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30895_SHARP_);
});
;})(cs,vec__30904,v,c,inst_30908,inst_30910,inst_30899,inst_30909,state_val_30930,c__29538__auto___30951,out))
})();
var inst_30914 = cljs.core.filterv.call(null,inst_30913,inst_30899);
var inst_30899__$1 = inst_30914;
var state_30929__$1 = (function (){var statearr_30944 = state_30929;
(statearr_30944[(10)] = inst_30899__$1);

return statearr_30944;
})();
var statearr_30945_30961 = state_30929__$1;
(statearr_30945_30961[(2)] = null);

(statearr_30945_30961[(1)] = (2));


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
});})(c__29538__auto___30951,out))
;
return ((function (switch__29443__auto__,c__29538__auto___30951,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_30946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30946[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_30946[(1)] = (1));

return statearr_30946;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_30929){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e30947){if((e30947 instanceof Object)){
var ex__29447__auto__ = e30947;
var statearr_30948_30962 = state_30929;
(statearr_30948_30962[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30963 = state_30929;
state_30929 = G__30963;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_30929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_30929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___30951,out))
})();
var state__29540__auto__ = (function (){var statearr_30949 = f__29539__auto__.call(null);
(statearr_30949[(6)] = c__29538__auto___30951);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___30951,out))
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
var G__30965 = arguments.length;
switch (G__30965) {
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
var c__29538__auto___31010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___31010,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___31010,out){
return (function (state_30989){
var state_val_30990 = (state_30989[(1)]);
if((state_val_30990 === (7))){
var inst_30971 = (state_30989[(7)]);
var inst_30971__$1 = (state_30989[(2)]);
var inst_30972 = (inst_30971__$1 == null);
var inst_30973 = cljs.core.not.call(null,inst_30972);
var state_30989__$1 = (function (){var statearr_30991 = state_30989;
(statearr_30991[(7)] = inst_30971__$1);

return statearr_30991;
})();
if(inst_30973){
var statearr_30992_31011 = state_30989__$1;
(statearr_30992_31011[(1)] = (8));

} else {
var statearr_30993_31012 = state_30989__$1;
(statearr_30993_31012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (1))){
var inst_30966 = (0);
var state_30989__$1 = (function (){var statearr_30994 = state_30989;
(statearr_30994[(8)] = inst_30966);

return statearr_30994;
})();
var statearr_30995_31013 = state_30989__$1;
(statearr_30995_31013[(2)] = null);

(statearr_30995_31013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (4))){
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(7),ch);
} else {
if((state_val_30990 === (6))){
var inst_30984 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30996_31014 = state_30989__$1;
(statearr_30996_31014[(2)] = inst_30984);

(statearr_30996_31014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (3))){
var inst_30986 = (state_30989[(2)]);
var inst_30987 = cljs.core.async.close_BANG_.call(null,out);
var state_30989__$1 = (function (){var statearr_30997 = state_30989;
(statearr_30997[(9)] = inst_30986);

return statearr_30997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30989__$1,inst_30987);
} else {
if((state_val_30990 === (2))){
var inst_30966 = (state_30989[(8)]);
var inst_30968 = (inst_30966 < n);
var state_30989__$1 = state_30989;
if(cljs.core.truth_(inst_30968)){
var statearr_30998_31015 = state_30989__$1;
(statearr_30998_31015[(1)] = (4));

} else {
var statearr_30999_31016 = state_30989__$1;
(statearr_30999_31016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (11))){
var inst_30966 = (state_30989[(8)]);
var inst_30976 = (state_30989[(2)]);
var inst_30977 = (inst_30966 + (1));
var inst_30966__$1 = inst_30977;
var state_30989__$1 = (function (){var statearr_31000 = state_30989;
(statearr_31000[(8)] = inst_30966__$1);

(statearr_31000[(10)] = inst_30976);

return statearr_31000;
})();
var statearr_31001_31017 = state_30989__$1;
(statearr_31001_31017[(2)] = null);

(statearr_31001_31017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (9))){
var state_30989__$1 = state_30989;
var statearr_31002_31018 = state_30989__$1;
(statearr_31002_31018[(2)] = null);

(statearr_31002_31018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (5))){
var state_30989__$1 = state_30989;
var statearr_31003_31019 = state_30989__$1;
(statearr_31003_31019[(2)] = null);

(statearr_31003_31019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (10))){
var inst_30981 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31004_31020 = state_30989__$1;
(statearr_31004_31020[(2)] = inst_30981);

(statearr_31004_31020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (8))){
var inst_30971 = (state_30989[(7)]);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30989__$1,(11),out,inst_30971);
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
});})(c__29538__auto___31010,out))
;
return ((function (switch__29443__auto__,c__29538__auto___31010,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_31005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31005[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_31005[(1)] = (1));

return statearr_31005;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_30989){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_30989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31006){if((e31006 instanceof Object)){
var ex__29447__auto__ = e31006;
var statearr_31007_31021 = state_30989;
(statearr_31007_31021[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31022 = state_30989;
state_30989 = G__31022;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_30989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_30989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___31010,out))
})();
var state__29540__auto__ = (function (){var statearr_31008 = f__29539__auto__.call(null);
(statearr_31008[(6)] = c__29538__auto___31010);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___31010,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31024 = (function (f,ch,meta31025){
this.f = f;
this.ch = ch;
this.meta31025 = meta31025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31026,meta31025__$1){
var self__ = this;
var _31026__$1 = this;
return (new cljs.core.async.t_cljs$core$async31024(self__.f,self__.ch,meta31025__$1));
});

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31026){
var self__ = this;
var _31026__$1 = this;
return self__.meta31025;
});

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31027 = (function (f,ch,meta31025,_,fn1,meta31028){
this.f = f;
this.ch = ch;
this.meta31025 = meta31025;
this._ = _;
this.fn1 = fn1;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new cljs.core.async.t_cljs$core$async31027(self__.f,self__.ch,self__.meta31025,self__._,self__.fn1,meta31028__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31023_SHARP_){
return f1.call(null,(((p1__31023_SHARP_ == null))?null:self__.f.call(null,p1__31023_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31025","meta31025",-1259902882,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31024","cljs.core.async/t_cljs$core$async31024",56102078,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31028","meta31028",-303965076,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31027";

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31027");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31027.
 */
cljs.core.async.__GT_t_cljs$core$async31027 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31027(f__$1,ch__$1,meta31025__$1,___$2,fn1__$1,meta31028){
return (new cljs.core.async.t_cljs$core$async31027(f__$1,ch__$1,meta31025__$1,___$2,fn1__$1,meta31028));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31027(self__.f,self__.ch,self__.meta31025,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31025","meta31025",-1259902882,null)], null);
});

cljs.core.async.t_cljs$core$async31024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31024";

cljs.core.async.t_cljs$core$async31024.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31024");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31024.
 */
cljs.core.async.__GT_t_cljs$core$async31024 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31024(f__$1,ch__$1,meta31025){
return (new cljs.core.async.t_cljs$core$async31024(f__$1,ch__$1,meta31025));
});

}

return (new cljs.core.async.t_cljs$core$async31024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31030 = (function (f,ch,meta31031){
this.f = f;
this.ch = ch;
this.meta31031 = meta31031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31032,meta31031__$1){
var self__ = this;
var _31032__$1 = this;
return (new cljs.core.async.t_cljs$core$async31030(self__.f,self__.ch,meta31031__$1));
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31032){
var self__ = this;
var _31032__$1 = this;
return self__.meta31031;
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31031","meta31031",-1243835823,null)], null);
});

cljs.core.async.t_cljs$core$async31030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31030";

cljs.core.async.t_cljs$core$async31030.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31030");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31030.
 */
cljs.core.async.__GT_t_cljs$core$async31030 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31030(f__$1,ch__$1,meta31031){
return (new cljs.core.async.t_cljs$core$async31030(f__$1,ch__$1,meta31031));
});

}

return (new cljs.core.async.t_cljs$core$async31030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31033 = (function (p,ch,meta31034){
this.p = p;
this.ch = ch;
this.meta31034 = meta31034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31035,meta31034__$1){
var self__ = this;
var _31035__$1 = this;
return (new cljs.core.async.t_cljs$core$async31033(self__.p,self__.ch,meta31034__$1));
});

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31035){
var self__ = this;
var _31035__$1 = this;
return self__.meta31034;
});

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31034","meta31034",238454228,null)], null);
});

cljs.core.async.t_cljs$core$async31033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31033";

cljs.core.async.t_cljs$core$async31033.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31033");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31033.
 */
cljs.core.async.__GT_t_cljs$core$async31033 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31033(p__$1,ch__$1,meta31034){
return (new cljs.core.async.t_cljs$core$async31033(p__$1,ch__$1,meta31034));
});

}

return (new cljs.core.async.t_cljs$core$async31033(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31037 = arguments.length;
switch (G__31037) {
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
var c__29538__auto___31077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___31077,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___31077,out){
return (function (state_31058){
var state_val_31059 = (state_31058[(1)]);
if((state_val_31059 === (7))){
var inst_31054 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31060_31078 = state_31058__$1;
(statearr_31060_31078[(2)] = inst_31054);

(statearr_31060_31078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (1))){
var state_31058__$1 = state_31058;
var statearr_31061_31079 = state_31058__$1;
(statearr_31061_31079[(2)] = null);

(statearr_31061_31079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (4))){
var inst_31040 = (state_31058[(7)]);
var inst_31040__$1 = (state_31058[(2)]);
var inst_31041 = (inst_31040__$1 == null);
var state_31058__$1 = (function (){var statearr_31062 = state_31058;
(statearr_31062[(7)] = inst_31040__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_31041)){
var statearr_31063_31080 = state_31058__$1;
(statearr_31063_31080[(1)] = (5));

} else {
var statearr_31064_31081 = state_31058__$1;
(statearr_31064_31081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (6))){
var inst_31040 = (state_31058[(7)]);
var inst_31045 = p.call(null,inst_31040);
var state_31058__$1 = state_31058;
if(cljs.core.truth_(inst_31045)){
var statearr_31065_31082 = state_31058__$1;
(statearr_31065_31082[(1)] = (8));

} else {
var statearr_31066_31083 = state_31058__$1;
(statearr_31066_31083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (3))){
var inst_31056 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31058__$1,inst_31056);
} else {
if((state_val_31059 === (2))){
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31058__$1,(4),ch);
} else {
if((state_val_31059 === (11))){
var inst_31048 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31067_31084 = state_31058__$1;
(statearr_31067_31084[(2)] = inst_31048);

(statearr_31067_31084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (9))){
var state_31058__$1 = state_31058;
var statearr_31068_31085 = state_31058__$1;
(statearr_31068_31085[(2)] = null);

(statearr_31068_31085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (5))){
var inst_31043 = cljs.core.async.close_BANG_.call(null,out);
var state_31058__$1 = state_31058;
var statearr_31069_31086 = state_31058__$1;
(statearr_31069_31086[(2)] = inst_31043);

(statearr_31069_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (10))){
var inst_31051 = (state_31058[(2)]);
var state_31058__$1 = (function (){var statearr_31070 = state_31058;
(statearr_31070[(8)] = inst_31051);

return statearr_31070;
})();
var statearr_31071_31087 = state_31058__$1;
(statearr_31071_31087[(2)] = null);

(statearr_31071_31087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (8))){
var inst_31040 = (state_31058[(7)]);
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31058__$1,(11),out,inst_31040);
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
});})(c__29538__auto___31077,out))
;
return ((function (switch__29443__auto__,c__29538__auto___31077,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_31058){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_31058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__29447__auto__ = e31073;
var statearr_31074_31088 = state_31058;
(statearr_31074_31088[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31089 = state_31058;
state_31058 = G__31089;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_31058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_31058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___31077,out))
})();
var state__29540__auto__ = (function (){var statearr_31075 = f__29539__auto__.call(null);
(statearr_31075[(6)] = c__29538__auto___31077);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___31077,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31091 = arguments.length;
switch (G__31091) {
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
var c__29538__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto__){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto__){
return (function (state_31154){
var state_val_31155 = (state_31154[(1)]);
if((state_val_31155 === (7))){
var inst_31150 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31156_31194 = state_31154__$1;
(statearr_31156_31194[(2)] = inst_31150);

(statearr_31156_31194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (20))){
var inst_31120 = (state_31154[(7)]);
var inst_31131 = (state_31154[(2)]);
var inst_31132 = cljs.core.next.call(null,inst_31120);
var inst_31106 = inst_31132;
var inst_31107 = null;
var inst_31108 = (0);
var inst_31109 = (0);
var state_31154__$1 = (function (){var statearr_31157 = state_31154;
(statearr_31157[(8)] = inst_31107);

(statearr_31157[(9)] = inst_31109);

(statearr_31157[(10)] = inst_31131);

(statearr_31157[(11)] = inst_31106);

(statearr_31157[(12)] = inst_31108);

return statearr_31157;
})();
var statearr_31158_31195 = state_31154__$1;
(statearr_31158_31195[(2)] = null);

(statearr_31158_31195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (1))){
var state_31154__$1 = state_31154;
var statearr_31159_31196 = state_31154__$1;
(statearr_31159_31196[(2)] = null);

(statearr_31159_31196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (4))){
var inst_31095 = (state_31154[(13)]);
var inst_31095__$1 = (state_31154[(2)]);
var inst_31096 = (inst_31095__$1 == null);
var state_31154__$1 = (function (){var statearr_31160 = state_31154;
(statearr_31160[(13)] = inst_31095__$1);

return statearr_31160;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31161_31197 = state_31154__$1;
(statearr_31161_31197[(1)] = (5));

} else {
var statearr_31162_31198 = state_31154__$1;
(statearr_31162_31198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (15))){
var state_31154__$1 = state_31154;
var statearr_31166_31199 = state_31154__$1;
(statearr_31166_31199[(2)] = null);

(statearr_31166_31199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (21))){
var state_31154__$1 = state_31154;
var statearr_31167_31200 = state_31154__$1;
(statearr_31167_31200[(2)] = null);

(statearr_31167_31200[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (13))){
var inst_31107 = (state_31154[(8)]);
var inst_31109 = (state_31154[(9)]);
var inst_31106 = (state_31154[(11)]);
var inst_31108 = (state_31154[(12)]);
var inst_31116 = (state_31154[(2)]);
var inst_31117 = (inst_31109 + (1));
var tmp31163 = inst_31107;
var tmp31164 = inst_31106;
var tmp31165 = inst_31108;
var inst_31106__$1 = tmp31164;
var inst_31107__$1 = tmp31163;
var inst_31108__$1 = tmp31165;
var inst_31109__$1 = inst_31117;
var state_31154__$1 = (function (){var statearr_31168 = state_31154;
(statearr_31168[(8)] = inst_31107__$1);

(statearr_31168[(14)] = inst_31116);

(statearr_31168[(9)] = inst_31109__$1);

(statearr_31168[(11)] = inst_31106__$1);

(statearr_31168[(12)] = inst_31108__$1);

return statearr_31168;
})();
var statearr_31169_31201 = state_31154__$1;
(statearr_31169_31201[(2)] = null);

(statearr_31169_31201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (22))){
var state_31154__$1 = state_31154;
var statearr_31170_31202 = state_31154__$1;
(statearr_31170_31202[(2)] = null);

(statearr_31170_31202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (6))){
var inst_31095 = (state_31154[(13)]);
var inst_31104 = f.call(null,inst_31095);
var inst_31105 = cljs.core.seq.call(null,inst_31104);
var inst_31106 = inst_31105;
var inst_31107 = null;
var inst_31108 = (0);
var inst_31109 = (0);
var state_31154__$1 = (function (){var statearr_31171 = state_31154;
(statearr_31171[(8)] = inst_31107);

(statearr_31171[(9)] = inst_31109);

(statearr_31171[(11)] = inst_31106);

(statearr_31171[(12)] = inst_31108);

return statearr_31171;
})();
var statearr_31172_31203 = state_31154__$1;
(statearr_31172_31203[(2)] = null);

(statearr_31172_31203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (17))){
var inst_31120 = (state_31154[(7)]);
var inst_31124 = cljs.core.chunk_first.call(null,inst_31120);
var inst_31125 = cljs.core.chunk_rest.call(null,inst_31120);
var inst_31126 = cljs.core.count.call(null,inst_31124);
var inst_31106 = inst_31125;
var inst_31107 = inst_31124;
var inst_31108 = inst_31126;
var inst_31109 = (0);
var state_31154__$1 = (function (){var statearr_31173 = state_31154;
(statearr_31173[(8)] = inst_31107);

(statearr_31173[(9)] = inst_31109);

(statearr_31173[(11)] = inst_31106);

(statearr_31173[(12)] = inst_31108);

return statearr_31173;
})();
var statearr_31174_31204 = state_31154__$1;
(statearr_31174_31204[(2)] = null);

(statearr_31174_31204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (3))){
var inst_31152 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31154__$1,inst_31152);
} else {
if((state_val_31155 === (12))){
var inst_31140 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31175_31205 = state_31154__$1;
(statearr_31175_31205[(2)] = inst_31140);

(statearr_31175_31205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (2))){
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31154__$1,(4),in$);
} else {
if((state_val_31155 === (23))){
var inst_31148 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31176_31206 = state_31154__$1;
(statearr_31176_31206[(2)] = inst_31148);

(statearr_31176_31206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (19))){
var inst_31135 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31177_31207 = state_31154__$1;
(statearr_31177_31207[(2)] = inst_31135);

(statearr_31177_31207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (11))){
var inst_31120 = (state_31154[(7)]);
var inst_31106 = (state_31154[(11)]);
var inst_31120__$1 = cljs.core.seq.call(null,inst_31106);
var state_31154__$1 = (function (){var statearr_31178 = state_31154;
(statearr_31178[(7)] = inst_31120__$1);

return statearr_31178;
})();
if(inst_31120__$1){
var statearr_31179_31208 = state_31154__$1;
(statearr_31179_31208[(1)] = (14));

} else {
var statearr_31180_31209 = state_31154__$1;
(statearr_31180_31209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (9))){
var inst_31142 = (state_31154[(2)]);
var inst_31143 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31154__$1 = (function (){var statearr_31181 = state_31154;
(statearr_31181[(15)] = inst_31142);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31182_31210 = state_31154__$1;
(statearr_31182_31210[(1)] = (21));

} else {
var statearr_31183_31211 = state_31154__$1;
(statearr_31183_31211[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (5))){
var inst_31098 = cljs.core.async.close_BANG_.call(null,out);
var state_31154__$1 = state_31154;
var statearr_31184_31212 = state_31154__$1;
(statearr_31184_31212[(2)] = inst_31098);

(statearr_31184_31212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (14))){
var inst_31120 = (state_31154[(7)]);
var inst_31122 = cljs.core.chunked_seq_QMARK_.call(null,inst_31120);
var state_31154__$1 = state_31154;
if(inst_31122){
var statearr_31185_31213 = state_31154__$1;
(statearr_31185_31213[(1)] = (17));

} else {
var statearr_31186_31214 = state_31154__$1;
(statearr_31186_31214[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (16))){
var inst_31138 = (state_31154[(2)]);
var state_31154__$1 = state_31154;
var statearr_31187_31215 = state_31154__$1;
(statearr_31187_31215[(2)] = inst_31138);

(statearr_31187_31215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31155 === (10))){
var inst_31107 = (state_31154[(8)]);
var inst_31109 = (state_31154[(9)]);
var inst_31114 = cljs.core._nth.call(null,inst_31107,inst_31109);
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31154__$1,(13),out,inst_31114);
} else {
if((state_val_31155 === (18))){
var inst_31120 = (state_31154[(7)]);
var inst_31129 = cljs.core.first.call(null,inst_31120);
var state_31154__$1 = state_31154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31154__$1,(20),out,inst_31129);
} else {
if((state_val_31155 === (8))){
var inst_31109 = (state_31154[(9)]);
var inst_31108 = (state_31154[(12)]);
var inst_31111 = (inst_31109 < inst_31108);
var inst_31112 = inst_31111;
var state_31154__$1 = state_31154;
if(cljs.core.truth_(inst_31112)){
var statearr_31188_31216 = state_31154__$1;
(statearr_31188_31216[(1)] = (10));

} else {
var statearr_31189_31217 = state_31154__$1;
(statearr_31189_31217[(1)] = (11));

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
});})(c__29538__auto__))
;
return ((function (switch__29443__auto__,c__29538__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____0 = (function (){
var statearr_31190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31190[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__);

(statearr_31190[(1)] = (1));

return statearr_31190;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____1 = (function (state_31154){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_31154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31191){if((e31191 instanceof Object)){
var ex__29447__auto__ = e31191;
var statearr_31192_31218 = state_31154;
(statearr_31192_31218[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31219 = state_31154;
state_31154 = G__31219;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__ = function(state_31154){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____1.call(this,state_31154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29444__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto__))
})();
var state__29540__auto__ = (function (){var statearr_31193 = f__29539__auto__.call(null);
(statearr_31193[(6)] = c__29538__auto__);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto__))
);

return c__29538__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31221 = arguments.length;
switch (G__31221) {
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
var G__31224 = arguments.length;
switch (G__31224) {
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
var G__31227 = arguments.length;
switch (G__31227) {
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
var c__29538__auto___31274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___31274,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___31274,out){
return (function (state_31251){
var state_val_31252 = (state_31251[(1)]);
if((state_val_31252 === (7))){
var inst_31246 = (state_31251[(2)]);
var state_31251__$1 = state_31251;
var statearr_31253_31275 = state_31251__$1;
(statearr_31253_31275[(2)] = inst_31246);

(statearr_31253_31275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (1))){
var inst_31228 = null;
var state_31251__$1 = (function (){var statearr_31254 = state_31251;
(statearr_31254[(7)] = inst_31228);

return statearr_31254;
})();
var statearr_31255_31276 = state_31251__$1;
(statearr_31255_31276[(2)] = null);

(statearr_31255_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (4))){
var inst_31231 = (state_31251[(8)]);
var inst_31231__$1 = (state_31251[(2)]);
var inst_31232 = (inst_31231__$1 == null);
var inst_31233 = cljs.core.not.call(null,inst_31232);
var state_31251__$1 = (function (){var statearr_31256 = state_31251;
(statearr_31256[(8)] = inst_31231__$1);

return statearr_31256;
})();
if(inst_31233){
var statearr_31257_31277 = state_31251__$1;
(statearr_31257_31277[(1)] = (5));

} else {
var statearr_31258_31278 = state_31251__$1;
(statearr_31258_31278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (6))){
var state_31251__$1 = state_31251;
var statearr_31259_31279 = state_31251__$1;
(statearr_31259_31279[(2)] = null);

(statearr_31259_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (3))){
var inst_31248 = (state_31251[(2)]);
var inst_31249 = cljs.core.async.close_BANG_.call(null,out);
var state_31251__$1 = (function (){var statearr_31260 = state_31251;
(statearr_31260[(9)] = inst_31248);

return statearr_31260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31251__$1,inst_31249);
} else {
if((state_val_31252 === (2))){
var state_31251__$1 = state_31251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31251__$1,(4),ch);
} else {
if((state_val_31252 === (11))){
var inst_31231 = (state_31251[(8)]);
var inst_31240 = (state_31251[(2)]);
var inst_31228 = inst_31231;
var state_31251__$1 = (function (){var statearr_31261 = state_31251;
(statearr_31261[(7)] = inst_31228);

(statearr_31261[(10)] = inst_31240);

return statearr_31261;
})();
var statearr_31262_31280 = state_31251__$1;
(statearr_31262_31280[(2)] = null);

(statearr_31262_31280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (9))){
var inst_31231 = (state_31251[(8)]);
var state_31251__$1 = state_31251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31251__$1,(11),out,inst_31231);
} else {
if((state_val_31252 === (5))){
var inst_31228 = (state_31251[(7)]);
var inst_31231 = (state_31251[(8)]);
var inst_31235 = cljs.core._EQ_.call(null,inst_31231,inst_31228);
var state_31251__$1 = state_31251;
if(inst_31235){
var statearr_31264_31281 = state_31251__$1;
(statearr_31264_31281[(1)] = (8));

} else {
var statearr_31265_31282 = state_31251__$1;
(statearr_31265_31282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (10))){
var inst_31243 = (state_31251[(2)]);
var state_31251__$1 = state_31251;
var statearr_31266_31283 = state_31251__$1;
(statearr_31266_31283[(2)] = inst_31243);

(statearr_31266_31283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (8))){
var inst_31228 = (state_31251[(7)]);
var tmp31263 = inst_31228;
var inst_31228__$1 = tmp31263;
var state_31251__$1 = (function (){var statearr_31267 = state_31251;
(statearr_31267[(7)] = inst_31228__$1);

return statearr_31267;
})();
var statearr_31268_31284 = state_31251__$1;
(statearr_31268_31284[(2)] = null);

(statearr_31268_31284[(1)] = (2));


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
});})(c__29538__auto___31274,out))
;
return ((function (switch__29443__auto__,c__29538__auto___31274,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_31269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31269[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_31269[(1)] = (1));

return statearr_31269;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_31251){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_31251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31270){if((e31270 instanceof Object)){
var ex__29447__auto__ = e31270;
var statearr_31271_31285 = state_31251;
(statearr_31271_31285[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31286 = state_31251;
state_31251 = G__31286;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_31251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_31251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___31274,out))
})();
var state__29540__auto__ = (function (){var statearr_31272 = f__29539__auto__.call(null);
(statearr_31272[(6)] = c__29538__auto___31274);

return statearr_31272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___31274,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31288 = arguments.length;
switch (G__31288) {
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
var c__29538__auto___31354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___31354,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___31354,out){
return (function (state_31326){
var state_val_31327 = (state_31326[(1)]);
if((state_val_31327 === (7))){
var inst_31322 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
var statearr_31328_31355 = state_31326__$1;
(statearr_31328_31355[(2)] = inst_31322);

(statearr_31328_31355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (1))){
var inst_31289 = (new Array(n));
var inst_31290 = inst_31289;
var inst_31291 = (0);
var state_31326__$1 = (function (){var statearr_31329 = state_31326;
(statearr_31329[(7)] = inst_31291);

(statearr_31329[(8)] = inst_31290);

return statearr_31329;
})();
var statearr_31330_31356 = state_31326__$1;
(statearr_31330_31356[(2)] = null);

(statearr_31330_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (4))){
var inst_31294 = (state_31326[(9)]);
var inst_31294__$1 = (state_31326[(2)]);
var inst_31295 = (inst_31294__$1 == null);
var inst_31296 = cljs.core.not.call(null,inst_31295);
var state_31326__$1 = (function (){var statearr_31331 = state_31326;
(statearr_31331[(9)] = inst_31294__$1);

return statearr_31331;
})();
if(inst_31296){
var statearr_31332_31357 = state_31326__$1;
(statearr_31332_31357[(1)] = (5));

} else {
var statearr_31333_31358 = state_31326__$1;
(statearr_31333_31358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (15))){
var inst_31316 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
var statearr_31334_31359 = state_31326__$1;
(statearr_31334_31359[(2)] = inst_31316);

(statearr_31334_31359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (13))){
var state_31326__$1 = state_31326;
var statearr_31335_31360 = state_31326__$1;
(statearr_31335_31360[(2)] = null);

(statearr_31335_31360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (6))){
var inst_31291 = (state_31326[(7)]);
var inst_31312 = (inst_31291 > (0));
var state_31326__$1 = state_31326;
if(cljs.core.truth_(inst_31312)){
var statearr_31336_31361 = state_31326__$1;
(statearr_31336_31361[(1)] = (12));

} else {
var statearr_31337_31362 = state_31326__$1;
(statearr_31337_31362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (3))){
var inst_31324 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31326__$1,inst_31324);
} else {
if((state_val_31327 === (12))){
var inst_31290 = (state_31326[(8)]);
var inst_31314 = cljs.core.vec.call(null,inst_31290);
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31326__$1,(15),out,inst_31314);
} else {
if((state_val_31327 === (2))){
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31326__$1,(4),ch);
} else {
if((state_val_31327 === (11))){
var inst_31306 = (state_31326[(2)]);
var inst_31307 = (new Array(n));
var inst_31290 = inst_31307;
var inst_31291 = (0);
var state_31326__$1 = (function (){var statearr_31338 = state_31326;
(statearr_31338[(10)] = inst_31306);

(statearr_31338[(7)] = inst_31291);

(statearr_31338[(8)] = inst_31290);

return statearr_31338;
})();
var statearr_31339_31363 = state_31326__$1;
(statearr_31339_31363[(2)] = null);

(statearr_31339_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (9))){
var inst_31290 = (state_31326[(8)]);
var inst_31304 = cljs.core.vec.call(null,inst_31290);
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31326__$1,(11),out,inst_31304);
} else {
if((state_val_31327 === (5))){
var inst_31294 = (state_31326[(9)]);
var inst_31291 = (state_31326[(7)]);
var inst_31299 = (state_31326[(11)]);
var inst_31290 = (state_31326[(8)]);
var inst_31298 = (inst_31290[inst_31291] = inst_31294);
var inst_31299__$1 = (inst_31291 + (1));
var inst_31300 = (inst_31299__$1 < n);
var state_31326__$1 = (function (){var statearr_31340 = state_31326;
(statearr_31340[(11)] = inst_31299__$1);

(statearr_31340[(12)] = inst_31298);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31300)){
var statearr_31341_31364 = state_31326__$1;
(statearr_31341_31364[(1)] = (8));

} else {
var statearr_31342_31365 = state_31326__$1;
(statearr_31342_31365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (14))){
var inst_31319 = (state_31326[(2)]);
var inst_31320 = cljs.core.async.close_BANG_.call(null,out);
var state_31326__$1 = (function (){var statearr_31344 = state_31326;
(statearr_31344[(13)] = inst_31319);

return statearr_31344;
})();
var statearr_31345_31366 = state_31326__$1;
(statearr_31345_31366[(2)] = inst_31320);

(statearr_31345_31366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (10))){
var inst_31310 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
var statearr_31346_31367 = state_31326__$1;
(statearr_31346_31367[(2)] = inst_31310);

(statearr_31346_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (8))){
var inst_31299 = (state_31326[(11)]);
var inst_31290 = (state_31326[(8)]);
var tmp31343 = inst_31290;
var inst_31290__$1 = tmp31343;
var inst_31291 = inst_31299;
var state_31326__$1 = (function (){var statearr_31347 = state_31326;
(statearr_31347[(7)] = inst_31291);

(statearr_31347[(8)] = inst_31290__$1);

return statearr_31347;
})();
var statearr_31348_31368 = state_31326__$1;
(statearr_31348_31368[(2)] = null);

(statearr_31348_31368[(1)] = (2));


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
});})(c__29538__auto___31354,out))
;
return ((function (switch__29443__auto__,c__29538__auto___31354,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_31349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31349[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_31349[(1)] = (1));

return statearr_31349;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_31326){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_31326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31350){if((e31350 instanceof Object)){
var ex__29447__auto__ = e31350;
var statearr_31351_31369 = state_31326;
(statearr_31351_31369[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31370 = state_31326;
state_31326 = G__31370;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_31326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_31326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___31354,out))
})();
var state__29540__auto__ = (function (){var statearr_31352 = f__29539__auto__.call(null);
(statearr_31352[(6)] = c__29538__auto___31354);

return statearr_31352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___31354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31372 = arguments.length;
switch (G__31372) {
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
var c__29538__auto___31442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29538__auto___31442,out){
return (function (){
var f__29539__auto__ = (function (){var switch__29443__auto__ = ((function (c__29538__auto___31442,out){
return (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31416_31443 = state_31414__$1;
(statearr_31416_31443[(2)] = inst_31410);

(statearr_31416_31443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var inst_31373 = [];
var inst_31374 = inst_31373;
var inst_31375 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31414__$1 = (function (){var statearr_31417 = state_31414;
(statearr_31417[(7)] = inst_31375);

(statearr_31417[(8)] = inst_31374);

return statearr_31417;
})();
var statearr_31418_31444 = state_31414__$1;
(statearr_31418_31444[(2)] = null);

(statearr_31418_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31378 = (state_31414[(9)]);
var inst_31378__$1 = (state_31414[(2)]);
var inst_31379 = (inst_31378__$1 == null);
var inst_31380 = cljs.core.not.call(null,inst_31379);
var state_31414__$1 = (function (){var statearr_31419 = state_31414;
(statearr_31419[(9)] = inst_31378__$1);

return statearr_31419;
})();
if(inst_31380){
var statearr_31420_31445 = state_31414__$1;
(statearr_31420_31445[(1)] = (5));

} else {
var statearr_31421_31446 = state_31414__$1;
(statearr_31421_31446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (15))){
var inst_31404 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31422_31447 = state_31414__$1;
(statearr_31422_31447[(2)] = inst_31404);

(statearr_31422_31447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var state_31414__$1 = state_31414;
var statearr_31423_31448 = state_31414__$1;
(statearr_31423_31448[(2)] = null);

(statearr_31423_31448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31374 = (state_31414[(8)]);
var inst_31399 = inst_31374.length;
var inst_31400 = (inst_31399 > (0));
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31400)){
var statearr_31424_31449 = state_31414__$1;
(statearr_31424_31449[(1)] = (12));

} else {
var statearr_31425_31450 = state_31414__$1;
(statearr_31425_31450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (12))){
var inst_31374 = (state_31414[(8)]);
var inst_31402 = cljs.core.vec.call(null,inst_31374);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31414__$1,(15),out,inst_31402);
} else {
if((state_val_31415 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31414__$1,(4),ch);
} else {
if((state_val_31415 === (11))){
var inst_31378 = (state_31414[(9)]);
var inst_31382 = (state_31414[(10)]);
var inst_31392 = (state_31414[(2)]);
var inst_31393 = [];
var inst_31394 = inst_31393.push(inst_31378);
var inst_31374 = inst_31393;
var inst_31375 = inst_31382;
var state_31414__$1 = (function (){var statearr_31426 = state_31414;
(statearr_31426[(11)] = inst_31394);

(statearr_31426[(12)] = inst_31392);

(statearr_31426[(7)] = inst_31375);

(statearr_31426[(8)] = inst_31374);

return statearr_31426;
})();
var statearr_31427_31451 = state_31414__$1;
(statearr_31427_31451[(2)] = null);

(statearr_31427_31451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var inst_31374 = (state_31414[(8)]);
var inst_31390 = cljs.core.vec.call(null,inst_31374);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31414__$1,(11),out,inst_31390);
} else {
if((state_val_31415 === (5))){
var inst_31375 = (state_31414[(7)]);
var inst_31378 = (state_31414[(9)]);
var inst_31382 = (state_31414[(10)]);
var inst_31382__$1 = f.call(null,inst_31378);
var inst_31383 = cljs.core._EQ_.call(null,inst_31382__$1,inst_31375);
var inst_31384 = cljs.core.keyword_identical_QMARK_.call(null,inst_31375,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31385 = ((inst_31383) || (inst_31384));
var state_31414__$1 = (function (){var statearr_31428 = state_31414;
(statearr_31428[(10)] = inst_31382__$1);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31429_31452 = state_31414__$1;
(statearr_31429_31452[(1)] = (8));

} else {
var statearr_31430_31453 = state_31414__$1;
(statearr_31430_31453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31407 = (state_31414[(2)]);
var inst_31408 = cljs.core.async.close_BANG_.call(null,out);
var state_31414__$1 = (function (){var statearr_31432 = state_31414;
(statearr_31432[(13)] = inst_31407);

return statearr_31432;
})();
var statearr_31433_31454 = state_31414__$1;
(statearr_31433_31454[(2)] = inst_31408);

(statearr_31433_31454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var inst_31397 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31434_31455 = state_31414__$1;
(statearr_31434_31455[(2)] = inst_31397);

(statearr_31434_31455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31378 = (state_31414[(9)]);
var inst_31382 = (state_31414[(10)]);
var inst_31374 = (state_31414[(8)]);
var inst_31387 = inst_31374.push(inst_31378);
var tmp31431 = inst_31374;
var inst_31374__$1 = tmp31431;
var inst_31375 = inst_31382;
var state_31414__$1 = (function (){var statearr_31435 = state_31414;
(statearr_31435[(7)] = inst_31375);

(statearr_31435[(14)] = inst_31387);

(statearr_31435[(8)] = inst_31374__$1);

return statearr_31435;
})();
var statearr_31436_31456 = state_31414__$1;
(statearr_31436_31456[(2)] = null);

(statearr_31436_31456[(1)] = (2));


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
});})(c__29538__auto___31442,out))
;
return ((function (switch__29443__auto__,c__29538__auto___31442,out){
return (function() {
var cljs$core$async$state_machine__29444__auto__ = null;
var cljs$core$async$state_machine__29444__auto____0 = (function (){
var statearr_31437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31437[(0)] = cljs$core$async$state_machine__29444__auto__);

(statearr_31437[(1)] = (1));

return statearr_31437;
});
var cljs$core$async$state_machine__29444__auto____1 = (function (state_31414){
while(true){
var ret_value__29445__auto__ = (function (){try{while(true){
var result__29446__auto__ = switch__29443__auto__.call(null,state_31414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29446__auto__;
}
break;
}
}catch (e31438){if((e31438 instanceof Object)){
var ex__29447__auto__ = e31438;
var statearr_31439_31457 = state_31414;
(statearr_31439_31457[(5)] = ex__29447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31414;
state_31414 = G__31458;
continue;
} else {
return ret_value__29445__auto__;
}
break;
}
});
cljs$core$async$state_machine__29444__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29444__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29444__auto____0;
cljs$core$async$state_machine__29444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29444__auto____1;
return cljs$core$async$state_machine__29444__auto__;
})()
;})(switch__29443__auto__,c__29538__auto___31442,out))
})();
var state__29540__auto__ = (function (){var statearr_31440 = f__29539__auto__.call(null);
(statearr_31440[(6)] = c__29538__auto___31442);

return statearr_31440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29540__auto__);
});})(c__29538__auto___31442,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581343830066
