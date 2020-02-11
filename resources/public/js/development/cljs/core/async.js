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
var G__59992 = arguments.length;
switch (G__59992) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59993 = (function (f,blockable,meta59994){
this.f = f;
this.blockable = blockable;
this.meta59994 = meta59994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59995,meta59994__$1){
var self__ = this;
var _59995__$1 = this;
return (new cljs.core.async.t_cljs$core$async59993(self__.f,self__.blockable,meta59994__$1));
});

cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59995){
var self__ = this;
var _59995__$1 = this;
return self__.meta59994;
});

cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async59993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async59993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59994","meta59994",-1464036864,null)], null);
});

cljs.core.async.t_cljs$core$async59993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59993";

cljs.core.async.t_cljs$core$async59993.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async59993");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59993.
 */
cljs.core.async.__GT_t_cljs$core$async59993 = (function cljs$core$async$__GT_t_cljs$core$async59993(f__$1,blockable__$1,meta59994){
return (new cljs.core.async.t_cljs$core$async59993(f__$1,blockable__$1,meta59994));
});

}

return (new cljs.core.async.t_cljs$core$async59993(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59999 = arguments.length;
switch (G__59999) {
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
var G__60002 = arguments.length;
switch (G__60002) {
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
var G__60005 = arguments.length;
switch (G__60005) {
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
var val_60007 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_60007);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_60007,ret){
return (function (){
return fn1.call(null,val_60007);
});})(val_60007,ret))
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
var G__60009 = arguments.length;
switch (G__60009) {
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
var n__4607__auto___60011 = n;
var x_60012 = (0);
while(true){
if((x_60012 < n__4607__auto___60011)){
(a[x_60012] = (0));

var G__60013 = (x_60012 + (1));
x_60012 = G__60013;
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

var G__60014 = (i + (1));
i = G__60014;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60015 = (function (flag,meta60016){
this.flag = flag;
this.meta60016 = meta60016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60017,meta60016__$1){
var self__ = this;
var _60017__$1 = this;
return (new cljs.core.async.t_cljs$core$async60015(self__.flag,meta60016__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60017){
var self__ = this;
var _60017__$1 = this;
return self__.meta60016;
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60016","meta60016",-1813269662,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60015";

cljs.core.async.t_cljs$core$async60015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async60015");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60015.
 */
cljs.core.async.__GT_t_cljs$core$async60015 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60015(flag__$1,meta60016){
return (new cljs.core.async.t_cljs$core$async60015(flag__$1,meta60016));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60015(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60018 = (function (flag,cb,meta60019){
this.flag = flag;
this.cb = cb;
this.meta60019 = meta60019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60020,meta60019__$1){
var self__ = this;
var _60020__$1 = this;
return (new cljs.core.async.t_cljs$core$async60018(self__.flag,self__.cb,meta60019__$1));
});

cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60020){
var self__ = this;
var _60020__$1 = this;
return self__.meta60019;
});

cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60019","meta60019",-1976001683,null)], null);
});

cljs.core.async.t_cljs$core$async60018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60018";

cljs.core.async.t_cljs$core$async60018.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async60018");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60018.
 */
cljs.core.async.__GT_t_cljs$core$async60018 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60018(flag__$1,cb__$1,meta60019){
return (new cljs.core.async.t_cljs$core$async60018(flag__$1,cb__$1,meta60019));
});

}

return (new cljs.core.async.t_cljs$core$async60018(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__60021_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60021_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60022_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60022_SHARP_,port], null));
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
var G__60023 = (i + (1));
i = G__60023;
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
var len__4730__auto___60029 = arguments.length;
var i__4731__auto___60030 = (0);
while(true){
if((i__4731__auto___60030 < len__4730__auto___60029)){
args__4736__auto__.push((arguments[i__4731__auto___60030]));

var G__60031 = (i__4731__auto___60030 + (1));
i__4731__auto___60030 = G__60031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60026){
var map__60027 = p__60026;
var map__60027__$1 = (((((!((map__60027 == null))))?(((((map__60027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60027):map__60027);
var opts = map__60027__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60024){
var G__60025 = cljs.core.first.call(null,seq60024);
var seq60024__$1 = cljs.core.next.call(null,seq60024);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60025,seq60024__$1);
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
var G__60033 = arguments.length;
switch (G__60033) {
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
var c__24101__auto___60079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60079){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60079){
return (function (state_60057){
var state_val_60058 = (state_60057[(1)]);
if((state_val_60058 === (7))){
var inst_60053 = (state_60057[(2)]);
var state_60057__$1 = state_60057;
var statearr_60059_60080 = state_60057__$1;
(statearr_60059_60080[(2)] = inst_60053);

(statearr_60059_60080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (1))){
var state_60057__$1 = state_60057;
var statearr_60060_60081 = state_60057__$1;
(statearr_60060_60081[(2)] = null);

(statearr_60060_60081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (4))){
var inst_60036 = (state_60057[(7)]);
var inst_60036__$1 = (state_60057[(2)]);
var inst_60037 = (inst_60036__$1 == null);
var state_60057__$1 = (function (){var statearr_60061 = state_60057;
(statearr_60061[(7)] = inst_60036__$1);

return statearr_60061;
})();
if(cljs.core.truth_(inst_60037)){
var statearr_60062_60082 = state_60057__$1;
(statearr_60062_60082[(1)] = (5));

} else {
var statearr_60063_60083 = state_60057__$1;
(statearr_60063_60083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (13))){
var state_60057__$1 = state_60057;
var statearr_60064_60084 = state_60057__$1;
(statearr_60064_60084[(2)] = null);

(statearr_60064_60084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (6))){
var inst_60036 = (state_60057[(7)]);
var state_60057__$1 = state_60057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60057__$1,(11),to,inst_60036);
} else {
if((state_val_60058 === (3))){
var inst_60055 = (state_60057[(2)]);
var state_60057__$1 = state_60057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60057__$1,inst_60055);
} else {
if((state_val_60058 === (12))){
var state_60057__$1 = state_60057;
var statearr_60065_60085 = state_60057__$1;
(statearr_60065_60085[(2)] = null);

(statearr_60065_60085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (2))){
var state_60057__$1 = state_60057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60057__$1,(4),from);
} else {
if((state_val_60058 === (11))){
var inst_60046 = (state_60057[(2)]);
var state_60057__$1 = state_60057;
if(cljs.core.truth_(inst_60046)){
var statearr_60066_60086 = state_60057__$1;
(statearr_60066_60086[(1)] = (12));

} else {
var statearr_60067_60087 = state_60057__$1;
(statearr_60067_60087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (9))){
var state_60057__$1 = state_60057;
var statearr_60068_60088 = state_60057__$1;
(statearr_60068_60088[(2)] = null);

(statearr_60068_60088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (5))){
var state_60057__$1 = state_60057;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60069_60089 = state_60057__$1;
(statearr_60069_60089[(1)] = (8));

} else {
var statearr_60070_60090 = state_60057__$1;
(statearr_60070_60090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (14))){
var inst_60051 = (state_60057[(2)]);
var state_60057__$1 = state_60057;
var statearr_60071_60091 = state_60057__$1;
(statearr_60071_60091[(2)] = inst_60051);

(statearr_60071_60091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (10))){
var inst_60043 = (state_60057[(2)]);
var state_60057__$1 = state_60057;
var statearr_60072_60092 = state_60057__$1;
(statearr_60072_60092[(2)] = inst_60043);

(statearr_60072_60092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60058 === (8))){
var inst_60040 = cljs.core.async.close_BANG_.call(null,to);
var state_60057__$1 = state_60057;
var statearr_60073_60093 = state_60057__$1;
(statearr_60073_60093[(2)] = inst_60040);

(statearr_60073_60093[(1)] = (10));


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
});})(c__24101__auto___60079))
;
return ((function (switch__24006__auto__,c__24101__auto___60079){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_60074 = [null,null,null,null,null,null,null,null];
(statearr_60074[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_60074[(1)] = (1));

return statearr_60074;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_60057){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60075){if((e60075 instanceof Object)){
var ex__24010__auto__ = e60075;
var statearr_60076_60094 = state_60057;
(statearr_60076_60094[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60095 = state_60057;
state_60057 = G__60095;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_60057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_60057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60079))
})();
var state__24103__auto__ = (function (){var statearr_60077 = f__24102__auto__.call(null);
(statearr_60077[(6)] = c__24101__auto___60079);

return statearr_60077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60079))
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
return (function (p__60096){
var vec__60097 = p__60096;
var v = cljs.core.nth.call(null,vec__60097,(0),null);
var p = cljs.core.nth.call(null,vec__60097,(1),null);
var job = vec__60097;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24101__auto___60268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results){
return (function (state_60104){
var state_val_60105 = (state_60104[(1)]);
if((state_val_60105 === (1))){
var state_60104__$1 = state_60104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60104__$1,(2),res,v);
} else {
if((state_val_60105 === (2))){
var inst_60101 = (state_60104[(2)]);
var inst_60102 = cljs.core.async.close_BANG_.call(null,res);
var state_60104__$1 = (function (){var statearr_60106 = state_60104;
(statearr_60106[(7)] = inst_60101);

return statearr_60106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60104__$1,inst_60102);
} else {
return null;
}
}
});})(c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results))
;
return ((function (switch__24006__auto__,c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_60107 = [null,null,null,null,null,null,null,null];
(statearr_60107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__);

(statearr_60107[(1)] = (1));

return statearr_60107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1 = (function (state_60104){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60108){if((e60108 instanceof Object)){
var ex__24010__auto__ = e60108;
var statearr_60109_60269 = state_60104;
(statearr_60109_60269[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60270 = state_60104;
state_60104 = G__60270;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = function(state_60104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1.call(this,state_60104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results))
})();
var state__24103__auto__ = (function (){var statearr_60110 = f__24102__auto__.call(null);
(statearr_60110[(6)] = c__24101__auto___60268);

return statearr_60110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60268,res,vec__60097,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60111){
var vec__60112 = p__60111;
var v = cljs.core.nth.call(null,vec__60112,(0),null);
var p = cljs.core.nth.call(null,vec__60112,(1),null);
var job = vec__60112;
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
var n__4607__auto___60271 = n;
var __60272 = (0);
while(true){
if((__60272 < n__4607__auto___60271)){
var G__60115_60273 = type;
var G__60115_60274__$1 = (((G__60115_60273 instanceof cljs.core.Keyword))?G__60115_60273.fqn:null);
switch (G__60115_60274__$1) {
case "compute":
var c__24101__auto___60276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60272,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (__60272,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function (state_60128){
var state_val_60129 = (state_60128[(1)]);
if((state_val_60129 === (1))){
var state_60128__$1 = state_60128;
var statearr_60130_60277 = state_60128__$1;
(statearr_60130_60277[(2)] = null);

(statearr_60130_60277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (2))){
var state_60128__$1 = state_60128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60128__$1,(4),jobs);
} else {
if((state_val_60129 === (3))){
var inst_60126 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60128__$1,inst_60126);
} else {
if((state_val_60129 === (4))){
var inst_60118 = (state_60128[(2)]);
var inst_60119 = process.call(null,inst_60118);
var state_60128__$1 = state_60128;
if(cljs.core.truth_(inst_60119)){
var statearr_60131_60278 = state_60128__$1;
(statearr_60131_60278[(1)] = (5));

} else {
var statearr_60132_60279 = state_60128__$1;
(statearr_60132_60279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (5))){
var state_60128__$1 = state_60128;
var statearr_60133_60280 = state_60128__$1;
(statearr_60133_60280[(2)] = null);

(statearr_60133_60280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (6))){
var state_60128__$1 = state_60128;
var statearr_60134_60281 = state_60128__$1;
(statearr_60134_60281[(2)] = null);

(statearr_60134_60281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60129 === (7))){
var inst_60124 = (state_60128[(2)]);
var state_60128__$1 = state_60128;
var statearr_60135_60282 = state_60128__$1;
(statearr_60135_60282[(2)] = inst_60124);

(statearr_60135_60282[(1)] = (3));


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
});})(__60272,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
;
return ((function (__60272,switch__24006__auto__,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_60136 = [null,null,null,null,null,null,null];
(statearr_60136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__);

(statearr_60136[(1)] = (1));

return statearr_60136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1 = (function (state_60128){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60137){if((e60137 instanceof Object)){
var ex__24010__auto__ = e60137;
var statearr_60138_60283 = state_60128;
(statearr_60138_60283[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60284 = state_60128;
state_60128 = G__60284;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = function(state_60128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1.call(this,state_60128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__;
})()
;})(__60272,switch__24006__auto__,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
})();
var state__24103__auto__ = (function (){var statearr_60139 = f__24102__auto__.call(null);
(statearr_60139[(6)] = c__24101__auto___60276);

return statearr_60139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(__60272,c__24101__auto___60276,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
);


break;
case "async":
var c__24101__auto___60285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60272,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (__60272,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function (state_60152){
var state_val_60153 = (state_60152[(1)]);
if((state_val_60153 === (1))){
var state_60152__$1 = state_60152;
var statearr_60154_60286 = state_60152__$1;
(statearr_60154_60286[(2)] = null);

(statearr_60154_60286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (2))){
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60152__$1,(4),jobs);
} else {
if((state_val_60153 === (3))){
var inst_60150 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60152__$1,inst_60150);
} else {
if((state_val_60153 === (4))){
var inst_60142 = (state_60152[(2)]);
var inst_60143 = async.call(null,inst_60142);
var state_60152__$1 = state_60152;
if(cljs.core.truth_(inst_60143)){
var statearr_60155_60287 = state_60152__$1;
(statearr_60155_60287[(1)] = (5));

} else {
var statearr_60156_60288 = state_60152__$1;
(statearr_60156_60288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (5))){
var state_60152__$1 = state_60152;
var statearr_60157_60289 = state_60152__$1;
(statearr_60157_60289[(2)] = null);

(statearr_60157_60289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (6))){
var state_60152__$1 = state_60152;
var statearr_60158_60290 = state_60152__$1;
(statearr_60158_60290[(2)] = null);

(statearr_60158_60290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60153 === (7))){
var inst_60148 = (state_60152[(2)]);
var state_60152__$1 = state_60152;
var statearr_60159_60291 = state_60152__$1;
(statearr_60159_60291[(2)] = inst_60148);

(statearr_60159_60291[(1)] = (3));


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
});})(__60272,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
;
return ((function (__60272,switch__24006__auto__,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_60160 = [null,null,null,null,null,null,null];
(statearr_60160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__);

(statearr_60160[(1)] = (1));

return statearr_60160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1 = (function (state_60152){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60161){if((e60161 instanceof Object)){
var ex__24010__auto__ = e60161;
var statearr_60162_60292 = state_60152;
(statearr_60162_60292[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60293 = state_60152;
state_60152 = G__60293;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = function(state_60152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1.call(this,state_60152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__;
})()
;})(__60272,switch__24006__auto__,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
})();
var state__24103__auto__ = (function (){var statearr_60163 = f__24102__auto__.call(null);
(statearr_60163[(6)] = c__24101__auto___60285);

return statearr_60163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(__60272,c__24101__auto___60285,G__60115_60273,G__60115_60274__$1,n__4607__auto___60271,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60115_60274__$1)].join('')));

}

var G__60294 = (__60272 + (1));
__60272 = G__60294;
continue;
} else {
}
break;
}

var c__24101__auto___60295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60295,jobs,results,process,async){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60295,jobs,results,process,async){
return (function (state_60185){
var state_val_60186 = (state_60185[(1)]);
if((state_val_60186 === (7))){
var inst_60181 = (state_60185[(2)]);
var state_60185__$1 = state_60185;
var statearr_60187_60296 = state_60185__$1;
(statearr_60187_60296[(2)] = inst_60181);

(statearr_60187_60296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60186 === (1))){
var state_60185__$1 = state_60185;
var statearr_60188_60297 = state_60185__$1;
(statearr_60188_60297[(2)] = null);

(statearr_60188_60297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60186 === (4))){
var inst_60166 = (state_60185[(7)]);
var inst_60166__$1 = (state_60185[(2)]);
var inst_60167 = (inst_60166__$1 == null);
var state_60185__$1 = (function (){var statearr_60189 = state_60185;
(statearr_60189[(7)] = inst_60166__$1);

return statearr_60189;
})();
if(cljs.core.truth_(inst_60167)){
var statearr_60190_60298 = state_60185__$1;
(statearr_60190_60298[(1)] = (5));

} else {
var statearr_60191_60299 = state_60185__$1;
(statearr_60191_60299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60186 === (6))){
var inst_60171 = (state_60185[(8)]);
var inst_60166 = (state_60185[(7)]);
var inst_60171__$1 = cljs.core.async.chan.call(null,(1));
var inst_60172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60173 = [inst_60166,inst_60171__$1];
var inst_60174 = (new cljs.core.PersistentVector(null,2,(5),inst_60172,inst_60173,null));
var state_60185__$1 = (function (){var statearr_60192 = state_60185;
(statearr_60192[(8)] = inst_60171__$1);

return statearr_60192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60185__$1,(8),jobs,inst_60174);
} else {
if((state_val_60186 === (3))){
var inst_60183 = (state_60185[(2)]);
var state_60185__$1 = state_60185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60185__$1,inst_60183);
} else {
if((state_val_60186 === (2))){
var state_60185__$1 = state_60185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60185__$1,(4),from);
} else {
if((state_val_60186 === (9))){
var inst_60178 = (state_60185[(2)]);
var state_60185__$1 = (function (){var statearr_60193 = state_60185;
(statearr_60193[(9)] = inst_60178);

return statearr_60193;
})();
var statearr_60194_60300 = state_60185__$1;
(statearr_60194_60300[(2)] = null);

(statearr_60194_60300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60186 === (5))){
var inst_60169 = cljs.core.async.close_BANG_.call(null,jobs);
var state_60185__$1 = state_60185;
var statearr_60195_60301 = state_60185__$1;
(statearr_60195_60301[(2)] = inst_60169);

(statearr_60195_60301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60186 === (8))){
var inst_60171 = (state_60185[(8)]);
var inst_60176 = (state_60185[(2)]);
var state_60185__$1 = (function (){var statearr_60196 = state_60185;
(statearr_60196[(10)] = inst_60176);

return statearr_60196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60185__$1,(9),results,inst_60171);
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
});})(c__24101__auto___60295,jobs,results,process,async))
;
return ((function (switch__24006__auto__,c__24101__auto___60295,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_60197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__);

(statearr_60197[(1)] = (1));

return statearr_60197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1 = (function (state_60185){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60198){if((e60198 instanceof Object)){
var ex__24010__auto__ = e60198;
var statearr_60199_60302 = state_60185;
(statearr_60199_60302[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60303 = state_60185;
state_60185 = G__60303;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = function(state_60185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1.call(this,state_60185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60295,jobs,results,process,async))
})();
var state__24103__auto__ = (function (){var statearr_60200 = f__24102__auto__.call(null);
(statearr_60200[(6)] = c__24101__auto___60295);

return statearr_60200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60295,jobs,results,process,async))
);


var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__,jobs,results,process,async){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__,jobs,results,process,async){
return (function (state_60238){
var state_val_60239 = (state_60238[(1)]);
if((state_val_60239 === (7))){
var inst_60234 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
var statearr_60240_60304 = state_60238__$1;
(statearr_60240_60304[(2)] = inst_60234);

(statearr_60240_60304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (20))){
var state_60238__$1 = state_60238;
var statearr_60241_60305 = state_60238__$1;
(statearr_60241_60305[(2)] = null);

(statearr_60241_60305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (1))){
var state_60238__$1 = state_60238;
var statearr_60242_60306 = state_60238__$1;
(statearr_60242_60306[(2)] = null);

(statearr_60242_60306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (4))){
var inst_60203 = (state_60238[(7)]);
var inst_60203__$1 = (state_60238[(2)]);
var inst_60204 = (inst_60203__$1 == null);
var state_60238__$1 = (function (){var statearr_60243 = state_60238;
(statearr_60243[(7)] = inst_60203__$1);

return statearr_60243;
})();
if(cljs.core.truth_(inst_60204)){
var statearr_60244_60307 = state_60238__$1;
(statearr_60244_60307[(1)] = (5));

} else {
var statearr_60245_60308 = state_60238__$1;
(statearr_60245_60308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (15))){
var inst_60216 = (state_60238[(8)]);
var state_60238__$1 = state_60238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60238__$1,(18),to,inst_60216);
} else {
if((state_val_60239 === (21))){
var inst_60229 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
var statearr_60246_60309 = state_60238__$1;
(statearr_60246_60309[(2)] = inst_60229);

(statearr_60246_60309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (13))){
var inst_60231 = (state_60238[(2)]);
var state_60238__$1 = (function (){var statearr_60247 = state_60238;
(statearr_60247[(9)] = inst_60231);

return statearr_60247;
})();
var statearr_60248_60310 = state_60238__$1;
(statearr_60248_60310[(2)] = null);

(statearr_60248_60310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (6))){
var inst_60203 = (state_60238[(7)]);
var state_60238__$1 = state_60238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60238__$1,(11),inst_60203);
} else {
if((state_val_60239 === (17))){
var inst_60224 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
if(cljs.core.truth_(inst_60224)){
var statearr_60249_60311 = state_60238__$1;
(statearr_60249_60311[(1)] = (19));

} else {
var statearr_60250_60312 = state_60238__$1;
(statearr_60250_60312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (3))){
var inst_60236 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60238__$1,inst_60236);
} else {
if((state_val_60239 === (12))){
var inst_60213 = (state_60238[(10)]);
var state_60238__$1 = state_60238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60238__$1,(14),inst_60213);
} else {
if((state_val_60239 === (2))){
var state_60238__$1 = state_60238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60238__$1,(4),results);
} else {
if((state_val_60239 === (19))){
var state_60238__$1 = state_60238;
var statearr_60251_60313 = state_60238__$1;
(statearr_60251_60313[(2)] = null);

(statearr_60251_60313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (11))){
var inst_60213 = (state_60238[(2)]);
var state_60238__$1 = (function (){var statearr_60252 = state_60238;
(statearr_60252[(10)] = inst_60213);

return statearr_60252;
})();
var statearr_60253_60314 = state_60238__$1;
(statearr_60253_60314[(2)] = null);

(statearr_60253_60314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (9))){
var state_60238__$1 = state_60238;
var statearr_60254_60315 = state_60238__$1;
(statearr_60254_60315[(2)] = null);

(statearr_60254_60315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (5))){
var state_60238__$1 = state_60238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60255_60316 = state_60238__$1;
(statearr_60255_60316[(1)] = (8));

} else {
var statearr_60256_60317 = state_60238__$1;
(statearr_60256_60317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (14))){
var inst_60216 = (state_60238[(8)]);
var inst_60218 = (state_60238[(11)]);
var inst_60216__$1 = (state_60238[(2)]);
var inst_60217 = (inst_60216__$1 == null);
var inst_60218__$1 = cljs.core.not.call(null,inst_60217);
var state_60238__$1 = (function (){var statearr_60257 = state_60238;
(statearr_60257[(8)] = inst_60216__$1);

(statearr_60257[(11)] = inst_60218__$1);

return statearr_60257;
})();
if(inst_60218__$1){
var statearr_60258_60318 = state_60238__$1;
(statearr_60258_60318[(1)] = (15));

} else {
var statearr_60259_60319 = state_60238__$1;
(statearr_60259_60319[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (16))){
var inst_60218 = (state_60238[(11)]);
var state_60238__$1 = state_60238;
var statearr_60260_60320 = state_60238__$1;
(statearr_60260_60320[(2)] = inst_60218);

(statearr_60260_60320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (10))){
var inst_60210 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
var statearr_60261_60321 = state_60238__$1;
(statearr_60261_60321[(2)] = inst_60210);

(statearr_60261_60321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (18))){
var inst_60221 = (state_60238[(2)]);
var state_60238__$1 = state_60238;
var statearr_60262_60322 = state_60238__$1;
(statearr_60262_60322[(2)] = inst_60221);

(statearr_60262_60322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60239 === (8))){
var inst_60207 = cljs.core.async.close_BANG_.call(null,to);
var state_60238__$1 = state_60238;
var statearr_60263_60323 = state_60238__$1;
(statearr_60263_60323[(2)] = inst_60207);

(statearr_60263_60323[(1)] = (10));


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
});})(c__24101__auto__,jobs,results,process,async))
;
return ((function (switch__24006__auto__,c__24101__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_60264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__);

(statearr_60264[(1)] = (1));

return statearr_60264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1 = (function (state_60238){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60265){if((e60265 instanceof Object)){
var ex__24010__auto__ = e60265;
var statearr_60266_60324 = state_60238;
(statearr_60266_60324[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60325 = state_60238;
state_60238 = G__60325;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__ = function(state_60238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1.call(this,state_60238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__,jobs,results,process,async))
})();
var state__24103__auto__ = (function (){var statearr_60267 = f__24102__auto__.call(null);
(statearr_60267[(6)] = c__24101__auto__);

return statearr_60267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__,jobs,results,process,async))
);

return c__24101__auto__;
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
var G__60327 = arguments.length;
switch (G__60327) {
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
var G__60330 = arguments.length;
switch (G__60330) {
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
var G__60333 = arguments.length;
switch (G__60333) {
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
var c__24101__auto___60382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60382,tc,fc){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60382,tc,fc){
return (function (state_60359){
var state_val_60360 = (state_60359[(1)]);
if((state_val_60360 === (7))){
var inst_60355 = (state_60359[(2)]);
var state_60359__$1 = state_60359;
var statearr_60361_60383 = state_60359__$1;
(statearr_60361_60383[(2)] = inst_60355);

(statearr_60361_60383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (1))){
var state_60359__$1 = state_60359;
var statearr_60362_60384 = state_60359__$1;
(statearr_60362_60384[(2)] = null);

(statearr_60362_60384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (4))){
var inst_60336 = (state_60359[(7)]);
var inst_60336__$1 = (state_60359[(2)]);
var inst_60337 = (inst_60336__$1 == null);
var state_60359__$1 = (function (){var statearr_60363 = state_60359;
(statearr_60363[(7)] = inst_60336__$1);

return statearr_60363;
})();
if(cljs.core.truth_(inst_60337)){
var statearr_60364_60385 = state_60359__$1;
(statearr_60364_60385[(1)] = (5));

} else {
var statearr_60365_60386 = state_60359__$1;
(statearr_60365_60386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (13))){
var state_60359__$1 = state_60359;
var statearr_60366_60387 = state_60359__$1;
(statearr_60366_60387[(2)] = null);

(statearr_60366_60387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (6))){
var inst_60336 = (state_60359[(7)]);
var inst_60342 = p.call(null,inst_60336);
var state_60359__$1 = state_60359;
if(cljs.core.truth_(inst_60342)){
var statearr_60367_60388 = state_60359__$1;
(statearr_60367_60388[(1)] = (9));

} else {
var statearr_60368_60389 = state_60359__$1;
(statearr_60368_60389[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (3))){
var inst_60357 = (state_60359[(2)]);
var state_60359__$1 = state_60359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60359__$1,inst_60357);
} else {
if((state_val_60360 === (12))){
var state_60359__$1 = state_60359;
var statearr_60369_60390 = state_60359__$1;
(statearr_60369_60390[(2)] = null);

(statearr_60369_60390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (2))){
var state_60359__$1 = state_60359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60359__$1,(4),ch);
} else {
if((state_val_60360 === (11))){
var inst_60336 = (state_60359[(7)]);
var inst_60346 = (state_60359[(2)]);
var state_60359__$1 = state_60359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60359__$1,(8),inst_60346,inst_60336);
} else {
if((state_val_60360 === (9))){
var state_60359__$1 = state_60359;
var statearr_60370_60391 = state_60359__$1;
(statearr_60370_60391[(2)] = tc);

(statearr_60370_60391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (5))){
var inst_60339 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60340 = cljs.core.async.close_BANG_.call(null,fc);
var state_60359__$1 = (function (){var statearr_60371 = state_60359;
(statearr_60371[(8)] = inst_60339);

return statearr_60371;
})();
var statearr_60372_60392 = state_60359__$1;
(statearr_60372_60392[(2)] = inst_60340);

(statearr_60372_60392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (14))){
var inst_60353 = (state_60359[(2)]);
var state_60359__$1 = state_60359;
var statearr_60373_60393 = state_60359__$1;
(statearr_60373_60393[(2)] = inst_60353);

(statearr_60373_60393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (10))){
var state_60359__$1 = state_60359;
var statearr_60374_60394 = state_60359__$1;
(statearr_60374_60394[(2)] = fc);

(statearr_60374_60394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60360 === (8))){
var inst_60348 = (state_60359[(2)]);
var state_60359__$1 = state_60359;
if(cljs.core.truth_(inst_60348)){
var statearr_60375_60395 = state_60359__$1;
(statearr_60375_60395[(1)] = (12));

} else {
var statearr_60376_60396 = state_60359__$1;
(statearr_60376_60396[(1)] = (13));

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
});})(c__24101__auto___60382,tc,fc))
;
return ((function (switch__24006__auto__,c__24101__auto___60382,tc,fc){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_60377 = [null,null,null,null,null,null,null,null,null];
(statearr_60377[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_60377[(1)] = (1));

return statearr_60377;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_60359){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60378){if((e60378 instanceof Object)){
var ex__24010__auto__ = e60378;
var statearr_60379_60397 = state_60359;
(statearr_60379_60397[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60398 = state_60359;
state_60359 = G__60398;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_60359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_60359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60382,tc,fc))
})();
var state__24103__auto__ = (function (){var statearr_60380 = f__24102__auto__.call(null);
(statearr_60380[(6)] = c__24101__auto___60382);

return statearr_60380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60382,tc,fc))
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__){
return (function (state_60419){
var state_val_60420 = (state_60419[(1)]);
if((state_val_60420 === (7))){
var inst_60415 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
var statearr_60421_60439 = state_60419__$1;
(statearr_60421_60439[(2)] = inst_60415);

(statearr_60421_60439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (1))){
var inst_60399 = init;
var state_60419__$1 = (function (){var statearr_60422 = state_60419;
(statearr_60422[(7)] = inst_60399);

return statearr_60422;
})();
var statearr_60423_60440 = state_60419__$1;
(statearr_60423_60440[(2)] = null);

(statearr_60423_60440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (4))){
var inst_60402 = (state_60419[(8)]);
var inst_60402__$1 = (state_60419[(2)]);
var inst_60403 = (inst_60402__$1 == null);
var state_60419__$1 = (function (){var statearr_60424 = state_60419;
(statearr_60424[(8)] = inst_60402__$1);

return statearr_60424;
})();
if(cljs.core.truth_(inst_60403)){
var statearr_60425_60441 = state_60419__$1;
(statearr_60425_60441[(1)] = (5));

} else {
var statearr_60426_60442 = state_60419__$1;
(statearr_60426_60442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (6))){
var inst_60402 = (state_60419[(8)]);
var inst_60399 = (state_60419[(7)]);
var inst_60406 = (state_60419[(9)]);
var inst_60406__$1 = f.call(null,inst_60399,inst_60402);
var inst_60407 = cljs.core.reduced_QMARK_.call(null,inst_60406__$1);
var state_60419__$1 = (function (){var statearr_60427 = state_60419;
(statearr_60427[(9)] = inst_60406__$1);

return statearr_60427;
})();
if(inst_60407){
var statearr_60428_60443 = state_60419__$1;
(statearr_60428_60443[(1)] = (8));

} else {
var statearr_60429_60444 = state_60419__$1;
(statearr_60429_60444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (3))){
var inst_60417 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60419__$1,inst_60417);
} else {
if((state_val_60420 === (2))){
var state_60419__$1 = state_60419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60419__$1,(4),ch);
} else {
if((state_val_60420 === (9))){
var inst_60406 = (state_60419[(9)]);
var inst_60399 = inst_60406;
var state_60419__$1 = (function (){var statearr_60430 = state_60419;
(statearr_60430[(7)] = inst_60399);

return statearr_60430;
})();
var statearr_60431_60445 = state_60419__$1;
(statearr_60431_60445[(2)] = null);

(statearr_60431_60445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (5))){
var inst_60399 = (state_60419[(7)]);
var state_60419__$1 = state_60419;
var statearr_60432_60446 = state_60419__$1;
(statearr_60432_60446[(2)] = inst_60399);

(statearr_60432_60446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (10))){
var inst_60413 = (state_60419[(2)]);
var state_60419__$1 = state_60419;
var statearr_60433_60447 = state_60419__$1;
(statearr_60433_60447[(2)] = inst_60413);

(statearr_60433_60447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60420 === (8))){
var inst_60406 = (state_60419[(9)]);
var inst_60409 = cljs.core.deref.call(null,inst_60406);
var state_60419__$1 = state_60419;
var statearr_60434_60448 = state_60419__$1;
(statearr_60434_60448[(2)] = inst_60409);

(statearr_60434_60448[(1)] = (10));


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
});})(c__24101__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24007__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24007__auto____0 = (function (){
var statearr_60435 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60435[(0)] = cljs$core$async$reduce_$_state_machine__24007__auto__);

(statearr_60435[(1)] = (1));

return statearr_60435;
});
var cljs$core$async$reduce_$_state_machine__24007__auto____1 = (function (state_60419){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60436){if((e60436 instanceof Object)){
var ex__24010__auto__ = e60436;
var statearr_60437_60449 = state_60419;
(statearr_60437_60449[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60450 = state_60419;
state_60419 = G__60450;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24007__auto__ = function(state_60419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24007__auto____1.call(this,state_60419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24007__auto____0;
cljs$core$async$reduce_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24007__auto____1;
return cljs$core$async$reduce_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__))
})();
var state__24103__auto__ = (function (){var statearr_60438 = f__24102__auto__.call(null);
(statearr_60438[(6)] = c__24101__auto__);

return statearr_60438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__))
);

return c__24101__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__,f__$1){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__,f__$1){
return (function (state_60456){
var state_val_60457 = (state_60456[(1)]);
if((state_val_60457 === (1))){
var inst_60451 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_60456__$1 = state_60456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60456__$1,(2),inst_60451);
} else {
if((state_val_60457 === (2))){
var inst_60453 = (state_60456[(2)]);
var inst_60454 = f__$1.call(null,inst_60453);
var state_60456__$1 = state_60456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60456__$1,inst_60454);
} else {
return null;
}
}
});})(c__24101__auto__,f__$1))
;
return ((function (switch__24006__auto__,c__24101__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24007__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24007__auto____0 = (function (){
var statearr_60458 = [null,null,null,null,null,null,null];
(statearr_60458[(0)] = cljs$core$async$transduce_$_state_machine__24007__auto__);

(statearr_60458[(1)] = (1));

return statearr_60458;
});
var cljs$core$async$transduce_$_state_machine__24007__auto____1 = (function (state_60456){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60459){if((e60459 instanceof Object)){
var ex__24010__auto__ = e60459;
var statearr_60460_60462 = state_60456;
(statearr_60460_60462[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60463 = state_60456;
state_60456 = G__60463;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24007__auto__ = function(state_60456){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24007__auto____1.call(this,state_60456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24007__auto____0;
cljs$core$async$transduce_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24007__auto____1;
return cljs$core$async$transduce_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__,f__$1))
})();
var state__24103__auto__ = (function (){var statearr_60461 = f__24102__auto__.call(null);
(statearr_60461[(6)] = c__24101__auto__);

return statearr_60461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__,f__$1))
);

return c__24101__auto__;
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
var G__60465 = arguments.length;
switch (G__60465) {
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__){
return (function (state_60490){
var state_val_60491 = (state_60490[(1)]);
if((state_val_60491 === (7))){
var inst_60472 = (state_60490[(2)]);
var state_60490__$1 = state_60490;
var statearr_60492_60513 = state_60490__$1;
(statearr_60492_60513[(2)] = inst_60472);

(statearr_60492_60513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (1))){
var inst_60466 = cljs.core.seq.call(null,coll);
var inst_60467 = inst_60466;
var state_60490__$1 = (function (){var statearr_60493 = state_60490;
(statearr_60493[(7)] = inst_60467);

return statearr_60493;
})();
var statearr_60494_60514 = state_60490__$1;
(statearr_60494_60514[(2)] = null);

(statearr_60494_60514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (4))){
var inst_60467 = (state_60490[(7)]);
var inst_60470 = cljs.core.first.call(null,inst_60467);
var state_60490__$1 = state_60490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60490__$1,(7),ch,inst_60470);
} else {
if((state_val_60491 === (13))){
var inst_60484 = (state_60490[(2)]);
var state_60490__$1 = state_60490;
var statearr_60495_60515 = state_60490__$1;
(statearr_60495_60515[(2)] = inst_60484);

(statearr_60495_60515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (6))){
var inst_60475 = (state_60490[(2)]);
var state_60490__$1 = state_60490;
if(cljs.core.truth_(inst_60475)){
var statearr_60496_60516 = state_60490__$1;
(statearr_60496_60516[(1)] = (8));

} else {
var statearr_60497_60517 = state_60490__$1;
(statearr_60497_60517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (3))){
var inst_60488 = (state_60490[(2)]);
var state_60490__$1 = state_60490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60490__$1,inst_60488);
} else {
if((state_val_60491 === (12))){
var state_60490__$1 = state_60490;
var statearr_60498_60518 = state_60490__$1;
(statearr_60498_60518[(2)] = null);

(statearr_60498_60518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (2))){
var inst_60467 = (state_60490[(7)]);
var state_60490__$1 = state_60490;
if(cljs.core.truth_(inst_60467)){
var statearr_60499_60519 = state_60490__$1;
(statearr_60499_60519[(1)] = (4));

} else {
var statearr_60500_60520 = state_60490__$1;
(statearr_60500_60520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (11))){
var inst_60481 = cljs.core.async.close_BANG_.call(null,ch);
var state_60490__$1 = state_60490;
var statearr_60501_60521 = state_60490__$1;
(statearr_60501_60521[(2)] = inst_60481);

(statearr_60501_60521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (9))){
var state_60490__$1 = state_60490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60502_60522 = state_60490__$1;
(statearr_60502_60522[(1)] = (11));

} else {
var statearr_60503_60523 = state_60490__$1;
(statearr_60503_60523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (5))){
var inst_60467 = (state_60490[(7)]);
var state_60490__$1 = state_60490;
var statearr_60504_60524 = state_60490__$1;
(statearr_60504_60524[(2)] = inst_60467);

(statearr_60504_60524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (10))){
var inst_60486 = (state_60490[(2)]);
var state_60490__$1 = state_60490;
var statearr_60505_60525 = state_60490__$1;
(statearr_60505_60525[(2)] = inst_60486);

(statearr_60505_60525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60491 === (8))){
var inst_60467 = (state_60490[(7)]);
var inst_60477 = cljs.core.next.call(null,inst_60467);
var inst_60467__$1 = inst_60477;
var state_60490__$1 = (function (){var statearr_60506 = state_60490;
(statearr_60506[(7)] = inst_60467__$1);

return statearr_60506;
})();
var statearr_60507_60526 = state_60490__$1;
(statearr_60507_60526[(2)] = null);

(statearr_60507_60526[(1)] = (2));


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
});})(c__24101__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_60508 = [null,null,null,null,null,null,null,null];
(statearr_60508[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_60508[(1)] = (1));

return statearr_60508;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_60490){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60509){if((e60509 instanceof Object)){
var ex__24010__auto__ = e60509;
var statearr_60510_60527 = state_60490;
(statearr_60510_60527[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60528 = state_60490;
state_60490 = G__60528;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_60490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_60490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__))
})();
var state__24103__auto__ = (function (){var statearr_60511 = f__24102__auto__.call(null);
(statearr_60511[(6)] = c__24101__auto__);

return statearr_60511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__))
);

return c__24101__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60529 = (function (ch,cs,meta60530){
this.ch = ch;
this.cs = cs;
this.meta60530 = meta60530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60531,meta60530__$1){
var self__ = this;
var _60531__$1 = this;
return (new cljs.core.async.t_cljs$core$async60529(self__.ch,self__.cs,meta60530__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60531){
var self__ = this;
var _60531__$1 = this;
return self__.meta60530;
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60530","meta60530",-2058030371,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60529";

cljs.core.async.t_cljs$core$async60529.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async60529");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60529.
 */
cljs.core.async.__GT_t_cljs$core$async60529 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60529(ch__$1,cs__$1,meta60530){
return (new cljs.core.async.t_cljs$core$async60529(ch__$1,cs__$1,meta60530));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60529(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24101__auto___60751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60751,cs,m,dchan,dctr,done){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60751,cs,m,dchan,dctr,done){
return (function (state_60666){
var state_val_60667 = (state_60666[(1)]);
if((state_val_60667 === (7))){
var inst_60662 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60668_60752 = state_60666__$1;
(statearr_60668_60752[(2)] = inst_60662);

(statearr_60668_60752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (20))){
var inst_60565 = (state_60666[(7)]);
var inst_60577 = cljs.core.first.call(null,inst_60565);
var inst_60578 = cljs.core.nth.call(null,inst_60577,(0),null);
var inst_60579 = cljs.core.nth.call(null,inst_60577,(1),null);
var state_60666__$1 = (function (){var statearr_60669 = state_60666;
(statearr_60669[(8)] = inst_60578);

return statearr_60669;
})();
if(cljs.core.truth_(inst_60579)){
var statearr_60670_60753 = state_60666__$1;
(statearr_60670_60753[(1)] = (22));

} else {
var statearr_60671_60754 = state_60666__$1;
(statearr_60671_60754[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (27))){
var inst_60609 = (state_60666[(9)]);
var inst_60534 = (state_60666[(10)]);
var inst_60614 = (state_60666[(11)]);
var inst_60607 = (state_60666[(12)]);
var inst_60614__$1 = cljs.core._nth.call(null,inst_60607,inst_60609);
var inst_60615 = cljs.core.async.put_BANG_.call(null,inst_60614__$1,inst_60534,done);
var state_60666__$1 = (function (){var statearr_60672 = state_60666;
(statearr_60672[(11)] = inst_60614__$1);

return statearr_60672;
})();
if(cljs.core.truth_(inst_60615)){
var statearr_60673_60755 = state_60666__$1;
(statearr_60673_60755[(1)] = (30));

} else {
var statearr_60674_60756 = state_60666__$1;
(statearr_60674_60756[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (1))){
var state_60666__$1 = state_60666;
var statearr_60675_60757 = state_60666__$1;
(statearr_60675_60757[(2)] = null);

(statearr_60675_60757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (24))){
var inst_60565 = (state_60666[(7)]);
var inst_60584 = (state_60666[(2)]);
var inst_60585 = cljs.core.next.call(null,inst_60565);
var inst_60543 = inst_60585;
var inst_60544 = null;
var inst_60545 = (0);
var inst_60546 = (0);
var state_60666__$1 = (function (){var statearr_60676 = state_60666;
(statearr_60676[(13)] = inst_60545);

(statearr_60676[(14)] = inst_60546);

(statearr_60676[(15)] = inst_60544);

(statearr_60676[(16)] = inst_60584);

(statearr_60676[(17)] = inst_60543);

return statearr_60676;
})();
var statearr_60677_60758 = state_60666__$1;
(statearr_60677_60758[(2)] = null);

(statearr_60677_60758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (39))){
var state_60666__$1 = state_60666;
var statearr_60681_60759 = state_60666__$1;
(statearr_60681_60759[(2)] = null);

(statearr_60681_60759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (4))){
var inst_60534 = (state_60666[(10)]);
var inst_60534__$1 = (state_60666[(2)]);
var inst_60535 = (inst_60534__$1 == null);
var state_60666__$1 = (function (){var statearr_60682 = state_60666;
(statearr_60682[(10)] = inst_60534__$1);

return statearr_60682;
})();
if(cljs.core.truth_(inst_60535)){
var statearr_60683_60760 = state_60666__$1;
(statearr_60683_60760[(1)] = (5));

} else {
var statearr_60684_60761 = state_60666__$1;
(statearr_60684_60761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (15))){
var inst_60545 = (state_60666[(13)]);
var inst_60546 = (state_60666[(14)]);
var inst_60544 = (state_60666[(15)]);
var inst_60543 = (state_60666[(17)]);
var inst_60561 = (state_60666[(2)]);
var inst_60562 = (inst_60546 + (1));
var tmp60678 = inst_60545;
var tmp60679 = inst_60544;
var tmp60680 = inst_60543;
var inst_60543__$1 = tmp60680;
var inst_60544__$1 = tmp60679;
var inst_60545__$1 = tmp60678;
var inst_60546__$1 = inst_60562;
var state_60666__$1 = (function (){var statearr_60685 = state_60666;
(statearr_60685[(18)] = inst_60561);

(statearr_60685[(13)] = inst_60545__$1);

(statearr_60685[(14)] = inst_60546__$1);

(statearr_60685[(15)] = inst_60544__$1);

(statearr_60685[(17)] = inst_60543__$1);

return statearr_60685;
})();
var statearr_60686_60762 = state_60666__$1;
(statearr_60686_60762[(2)] = null);

(statearr_60686_60762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (21))){
var inst_60588 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60690_60763 = state_60666__$1;
(statearr_60690_60763[(2)] = inst_60588);

(statearr_60690_60763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (31))){
var inst_60614 = (state_60666[(11)]);
var inst_60618 = done.call(null,null);
var inst_60619 = cljs.core.async.untap_STAR_.call(null,m,inst_60614);
var state_60666__$1 = (function (){var statearr_60691 = state_60666;
(statearr_60691[(19)] = inst_60618);

return statearr_60691;
})();
var statearr_60692_60764 = state_60666__$1;
(statearr_60692_60764[(2)] = inst_60619);

(statearr_60692_60764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (32))){
var inst_60609 = (state_60666[(9)]);
var inst_60606 = (state_60666[(20)]);
var inst_60607 = (state_60666[(12)]);
var inst_60608 = (state_60666[(21)]);
var inst_60621 = (state_60666[(2)]);
var inst_60622 = (inst_60609 + (1));
var tmp60687 = inst_60606;
var tmp60688 = inst_60607;
var tmp60689 = inst_60608;
var inst_60606__$1 = tmp60687;
var inst_60607__$1 = tmp60688;
var inst_60608__$1 = tmp60689;
var inst_60609__$1 = inst_60622;
var state_60666__$1 = (function (){var statearr_60693 = state_60666;
(statearr_60693[(9)] = inst_60609__$1);

(statearr_60693[(20)] = inst_60606__$1);

(statearr_60693[(22)] = inst_60621);

(statearr_60693[(12)] = inst_60607__$1);

(statearr_60693[(21)] = inst_60608__$1);

return statearr_60693;
})();
var statearr_60694_60765 = state_60666__$1;
(statearr_60694_60765[(2)] = null);

(statearr_60694_60765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (40))){
var inst_60634 = (state_60666[(23)]);
var inst_60638 = done.call(null,null);
var inst_60639 = cljs.core.async.untap_STAR_.call(null,m,inst_60634);
var state_60666__$1 = (function (){var statearr_60695 = state_60666;
(statearr_60695[(24)] = inst_60638);

return statearr_60695;
})();
var statearr_60696_60766 = state_60666__$1;
(statearr_60696_60766[(2)] = inst_60639);

(statearr_60696_60766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (33))){
var inst_60625 = (state_60666[(25)]);
var inst_60627 = cljs.core.chunked_seq_QMARK_.call(null,inst_60625);
var state_60666__$1 = state_60666;
if(inst_60627){
var statearr_60697_60767 = state_60666__$1;
(statearr_60697_60767[(1)] = (36));

} else {
var statearr_60698_60768 = state_60666__$1;
(statearr_60698_60768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (13))){
var inst_60555 = (state_60666[(26)]);
var inst_60558 = cljs.core.async.close_BANG_.call(null,inst_60555);
var state_60666__$1 = state_60666;
var statearr_60699_60769 = state_60666__$1;
(statearr_60699_60769[(2)] = inst_60558);

(statearr_60699_60769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (22))){
var inst_60578 = (state_60666[(8)]);
var inst_60581 = cljs.core.async.close_BANG_.call(null,inst_60578);
var state_60666__$1 = state_60666;
var statearr_60700_60770 = state_60666__$1;
(statearr_60700_60770[(2)] = inst_60581);

(statearr_60700_60770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (36))){
var inst_60625 = (state_60666[(25)]);
var inst_60629 = cljs.core.chunk_first.call(null,inst_60625);
var inst_60630 = cljs.core.chunk_rest.call(null,inst_60625);
var inst_60631 = cljs.core.count.call(null,inst_60629);
var inst_60606 = inst_60630;
var inst_60607 = inst_60629;
var inst_60608 = inst_60631;
var inst_60609 = (0);
var state_60666__$1 = (function (){var statearr_60701 = state_60666;
(statearr_60701[(9)] = inst_60609);

(statearr_60701[(20)] = inst_60606);

(statearr_60701[(12)] = inst_60607);

(statearr_60701[(21)] = inst_60608);

return statearr_60701;
})();
var statearr_60702_60771 = state_60666__$1;
(statearr_60702_60771[(2)] = null);

(statearr_60702_60771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (41))){
var inst_60625 = (state_60666[(25)]);
var inst_60641 = (state_60666[(2)]);
var inst_60642 = cljs.core.next.call(null,inst_60625);
var inst_60606 = inst_60642;
var inst_60607 = null;
var inst_60608 = (0);
var inst_60609 = (0);
var state_60666__$1 = (function (){var statearr_60703 = state_60666;
(statearr_60703[(9)] = inst_60609);

(statearr_60703[(20)] = inst_60606);

(statearr_60703[(27)] = inst_60641);

(statearr_60703[(12)] = inst_60607);

(statearr_60703[(21)] = inst_60608);

return statearr_60703;
})();
var statearr_60704_60772 = state_60666__$1;
(statearr_60704_60772[(2)] = null);

(statearr_60704_60772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (43))){
var state_60666__$1 = state_60666;
var statearr_60705_60773 = state_60666__$1;
(statearr_60705_60773[(2)] = null);

(statearr_60705_60773[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (29))){
var inst_60650 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60706_60774 = state_60666__$1;
(statearr_60706_60774[(2)] = inst_60650);

(statearr_60706_60774[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (44))){
var inst_60659 = (state_60666[(2)]);
var state_60666__$1 = (function (){var statearr_60707 = state_60666;
(statearr_60707[(28)] = inst_60659);

return statearr_60707;
})();
var statearr_60708_60775 = state_60666__$1;
(statearr_60708_60775[(2)] = null);

(statearr_60708_60775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (6))){
var inst_60598 = (state_60666[(29)]);
var inst_60597 = cljs.core.deref.call(null,cs);
var inst_60598__$1 = cljs.core.keys.call(null,inst_60597);
var inst_60599 = cljs.core.count.call(null,inst_60598__$1);
var inst_60600 = cljs.core.reset_BANG_.call(null,dctr,inst_60599);
var inst_60605 = cljs.core.seq.call(null,inst_60598__$1);
var inst_60606 = inst_60605;
var inst_60607 = null;
var inst_60608 = (0);
var inst_60609 = (0);
var state_60666__$1 = (function (){var statearr_60709 = state_60666;
(statearr_60709[(9)] = inst_60609);

(statearr_60709[(30)] = inst_60600);

(statearr_60709[(20)] = inst_60606);

(statearr_60709[(29)] = inst_60598__$1);

(statearr_60709[(12)] = inst_60607);

(statearr_60709[(21)] = inst_60608);

return statearr_60709;
})();
var statearr_60710_60776 = state_60666__$1;
(statearr_60710_60776[(2)] = null);

(statearr_60710_60776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (28))){
var inst_60606 = (state_60666[(20)]);
var inst_60625 = (state_60666[(25)]);
var inst_60625__$1 = cljs.core.seq.call(null,inst_60606);
var state_60666__$1 = (function (){var statearr_60711 = state_60666;
(statearr_60711[(25)] = inst_60625__$1);

return statearr_60711;
})();
if(inst_60625__$1){
var statearr_60712_60777 = state_60666__$1;
(statearr_60712_60777[(1)] = (33));

} else {
var statearr_60713_60778 = state_60666__$1;
(statearr_60713_60778[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (25))){
var inst_60609 = (state_60666[(9)]);
var inst_60608 = (state_60666[(21)]);
var inst_60611 = (inst_60609 < inst_60608);
var inst_60612 = inst_60611;
var state_60666__$1 = state_60666;
if(cljs.core.truth_(inst_60612)){
var statearr_60714_60779 = state_60666__$1;
(statearr_60714_60779[(1)] = (27));

} else {
var statearr_60715_60780 = state_60666__$1;
(statearr_60715_60780[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (34))){
var state_60666__$1 = state_60666;
var statearr_60716_60781 = state_60666__$1;
(statearr_60716_60781[(2)] = null);

(statearr_60716_60781[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (17))){
var state_60666__$1 = state_60666;
var statearr_60717_60782 = state_60666__$1;
(statearr_60717_60782[(2)] = null);

(statearr_60717_60782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (3))){
var inst_60664 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60666__$1,inst_60664);
} else {
if((state_val_60667 === (12))){
var inst_60593 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60718_60783 = state_60666__$1;
(statearr_60718_60783[(2)] = inst_60593);

(statearr_60718_60783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (2))){
var state_60666__$1 = state_60666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60666__$1,(4),ch);
} else {
if((state_val_60667 === (23))){
var state_60666__$1 = state_60666;
var statearr_60719_60784 = state_60666__$1;
(statearr_60719_60784[(2)] = null);

(statearr_60719_60784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (35))){
var inst_60648 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60720_60785 = state_60666__$1;
(statearr_60720_60785[(2)] = inst_60648);

(statearr_60720_60785[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (19))){
var inst_60565 = (state_60666[(7)]);
var inst_60569 = cljs.core.chunk_first.call(null,inst_60565);
var inst_60570 = cljs.core.chunk_rest.call(null,inst_60565);
var inst_60571 = cljs.core.count.call(null,inst_60569);
var inst_60543 = inst_60570;
var inst_60544 = inst_60569;
var inst_60545 = inst_60571;
var inst_60546 = (0);
var state_60666__$1 = (function (){var statearr_60721 = state_60666;
(statearr_60721[(13)] = inst_60545);

(statearr_60721[(14)] = inst_60546);

(statearr_60721[(15)] = inst_60544);

(statearr_60721[(17)] = inst_60543);

return statearr_60721;
})();
var statearr_60722_60786 = state_60666__$1;
(statearr_60722_60786[(2)] = null);

(statearr_60722_60786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (11))){
var inst_60543 = (state_60666[(17)]);
var inst_60565 = (state_60666[(7)]);
var inst_60565__$1 = cljs.core.seq.call(null,inst_60543);
var state_60666__$1 = (function (){var statearr_60723 = state_60666;
(statearr_60723[(7)] = inst_60565__$1);

return statearr_60723;
})();
if(inst_60565__$1){
var statearr_60724_60787 = state_60666__$1;
(statearr_60724_60787[(1)] = (16));

} else {
var statearr_60725_60788 = state_60666__$1;
(statearr_60725_60788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (9))){
var inst_60595 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60726_60789 = state_60666__$1;
(statearr_60726_60789[(2)] = inst_60595);

(statearr_60726_60789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (5))){
var inst_60541 = cljs.core.deref.call(null,cs);
var inst_60542 = cljs.core.seq.call(null,inst_60541);
var inst_60543 = inst_60542;
var inst_60544 = null;
var inst_60545 = (0);
var inst_60546 = (0);
var state_60666__$1 = (function (){var statearr_60727 = state_60666;
(statearr_60727[(13)] = inst_60545);

(statearr_60727[(14)] = inst_60546);

(statearr_60727[(15)] = inst_60544);

(statearr_60727[(17)] = inst_60543);

return statearr_60727;
})();
var statearr_60728_60790 = state_60666__$1;
(statearr_60728_60790[(2)] = null);

(statearr_60728_60790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (14))){
var state_60666__$1 = state_60666;
var statearr_60729_60791 = state_60666__$1;
(statearr_60729_60791[(2)] = null);

(statearr_60729_60791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (45))){
var inst_60656 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60730_60792 = state_60666__$1;
(statearr_60730_60792[(2)] = inst_60656);

(statearr_60730_60792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (26))){
var inst_60598 = (state_60666[(29)]);
var inst_60652 = (state_60666[(2)]);
var inst_60653 = cljs.core.seq.call(null,inst_60598);
var state_60666__$1 = (function (){var statearr_60731 = state_60666;
(statearr_60731[(31)] = inst_60652);

return statearr_60731;
})();
if(inst_60653){
var statearr_60732_60793 = state_60666__$1;
(statearr_60732_60793[(1)] = (42));

} else {
var statearr_60733_60794 = state_60666__$1;
(statearr_60733_60794[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (16))){
var inst_60565 = (state_60666[(7)]);
var inst_60567 = cljs.core.chunked_seq_QMARK_.call(null,inst_60565);
var state_60666__$1 = state_60666;
if(inst_60567){
var statearr_60734_60795 = state_60666__$1;
(statearr_60734_60795[(1)] = (19));

} else {
var statearr_60735_60796 = state_60666__$1;
(statearr_60735_60796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (38))){
var inst_60645 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60736_60797 = state_60666__$1;
(statearr_60736_60797[(2)] = inst_60645);

(statearr_60736_60797[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (30))){
var state_60666__$1 = state_60666;
var statearr_60737_60798 = state_60666__$1;
(statearr_60737_60798[(2)] = null);

(statearr_60737_60798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (10))){
var inst_60546 = (state_60666[(14)]);
var inst_60544 = (state_60666[(15)]);
var inst_60554 = cljs.core._nth.call(null,inst_60544,inst_60546);
var inst_60555 = cljs.core.nth.call(null,inst_60554,(0),null);
var inst_60556 = cljs.core.nth.call(null,inst_60554,(1),null);
var state_60666__$1 = (function (){var statearr_60738 = state_60666;
(statearr_60738[(26)] = inst_60555);

return statearr_60738;
})();
if(cljs.core.truth_(inst_60556)){
var statearr_60739_60799 = state_60666__$1;
(statearr_60739_60799[(1)] = (13));

} else {
var statearr_60740_60800 = state_60666__$1;
(statearr_60740_60800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (18))){
var inst_60591 = (state_60666[(2)]);
var state_60666__$1 = state_60666;
var statearr_60741_60801 = state_60666__$1;
(statearr_60741_60801[(2)] = inst_60591);

(statearr_60741_60801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (42))){
var state_60666__$1 = state_60666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60666__$1,(45),dchan);
} else {
if((state_val_60667 === (37))){
var inst_60534 = (state_60666[(10)]);
var inst_60625 = (state_60666[(25)]);
var inst_60634 = (state_60666[(23)]);
var inst_60634__$1 = cljs.core.first.call(null,inst_60625);
var inst_60635 = cljs.core.async.put_BANG_.call(null,inst_60634__$1,inst_60534,done);
var state_60666__$1 = (function (){var statearr_60742 = state_60666;
(statearr_60742[(23)] = inst_60634__$1);

return statearr_60742;
})();
if(cljs.core.truth_(inst_60635)){
var statearr_60743_60802 = state_60666__$1;
(statearr_60743_60802[(1)] = (39));

} else {
var statearr_60744_60803 = state_60666__$1;
(statearr_60744_60803[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60667 === (8))){
var inst_60545 = (state_60666[(13)]);
var inst_60546 = (state_60666[(14)]);
var inst_60548 = (inst_60546 < inst_60545);
var inst_60549 = inst_60548;
var state_60666__$1 = state_60666;
if(cljs.core.truth_(inst_60549)){
var statearr_60745_60804 = state_60666__$1;
(statearr_60745_60804[(1)] = (10));

} else {
var statearr_60746_60805 = state_60666__$1;
(statearr_60746_60805[(1)] = (11));

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
});})(c__24101__auto___60751,cs,m,dchan,dctr,done))
;
return ((function (switch__24006__auto__,c__24101__auto___60751,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24007__auto__ = null;
var cljs$core$async$mult_$_state_machine__24007__auto____0 = (function (){
var statearr_60747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60747[(0)] = cljs$core$async$mult_$_state_machine__24007__auto__);

(statearr_60747[(1)] = (1));

return statearr_60747;
});
var cljs$core$async$mult_$_state_machine__24007__auto____1 = (function (state_60666){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60748){if((e60748 instanceof Object)){
var ex__24010__auto__ = e60748;
var statearr_60749_60806 = state_60666;
(statearr_60749_60806[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60807 = state_60666;
state_60666 = G__60807;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24007__auto__ = function(state_60666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24007__auto____1.call(this,state_60666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24007__auto____0;
cljs$core$async$mult_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24007__auto____1;
return cljs$core$async$mult_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60751,cs,m,dchan,dctr,done))
})();
var state__24103__auto__ = (function (){var statearr_60750 = f__24102__auto__.call(null);
(statearr_60750[(6)] = c__24101__auto___60751);

return statearr_60750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60751,cs,m,dchan,dctr,done))
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
var G__60809 = arguments.length;
switch (G__60809) {
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
var len__4730__auto___60821 = arguments.length;
var i__4731__auto___60822 = (0);
while(true){
if((i__4731__auto___60822 < len__4730__auto___60821)){
args__4736__auto__.push((arguments[i__4731__auto___60822]));

var G__60823 = (i__4731__auto___60822 + (1));
i__4731__auto___60822 = G__60823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60815){
var map__60816 = p__60815;
var map__60816__$1 = (((((!((map__60816 == null))))?(((((map__60816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60816):map__60816);
var opts = map__60816__$1;
var statearr_60818_60824 = state;
(statearr_60818_60824[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__60816,map__60816__$1,opts){
return (function (val){
var statearr_60819_60825 = state;
(statearr_60819_60825[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__60816,map__60816__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_60820_60826 = state;
(statearr_60820_60826[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60811){
var G__60812 = cljs.core.first.call(null,seq60811);
var seq60811__$1 = cljs.core.next.call(null,seq60811);
var G__60813 = cljs.core.first.call(null,seq60811__$1);
var seq60811__$2 = cljs.core.next.call(null,seq60811__$1);
var G__60814 = cljs.core.first.call(null,seq60811__$2);
var seq60811__$3 = cljs.core.next.call(null,seq60811__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60812,G__60813,G__60814,seq60811__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60827 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60828){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60828 = meta60828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60829,meta60828__$1){
var self__ = this;
var _60829__$1 = this;
return (new cljs.core.async.t_cljs$core$async60827(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_60829){
var self__ = this;
var _60829__$1 = this;
return self__.meta60828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async60827.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60828","meta60828",1440966298,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async60827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60827";

cljs.core.async.t_cljs$core$async60827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async60827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60827.
 */
cljs.core.async.__GT_t_cljs$core$async60827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async60827(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60828){
return (new cljs.core.async.t_cljs$core$async60827(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async60827(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24101__auto___60991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_60931){
var state_val_60932 = (state_60931[(1)]);
if((state_val_60932 === (7))){
var inst_60846 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
var statearr_60933_60992 = state_60931__$1;
(statearr_60933_60992[(2)] = inst_60846);

(statearr_60933_60992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (20))){
var inst_60858 = (state_60931[(7)]);
var state_60931__$1 = state_60931;
var statearr_60934_60993 = state_60931__$1;
(statearr_60934_60993[(2)] = inst_60858);

(statearr_60934_60993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (27))){
var state_60931__$1 = state_60931;
var statearr_60935_60994 = state_60931__$1;
(statearr_60935_60994[(2)] = null);

(statearr_60935_60994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (1))){
var inst_60833 = (state_60931[(8)]);
var inst_60833__$1 = calc_state.call(null);
var inst_60835 = (inst_60833__$1 == null);
var inst_60836 = cljs.core.not.call(null,inst_60835);
var state_60931__$1 = (function (){var statearr_60936 = state_60931;
(statearr_60936[(8)] = inst_60833__$1);

return statearr_60936;
})();
if(inst_60836){
var statearr_60937_60995 = state_60931__$1;
(statearr_60937_60995[(1)] = (2));

} else {
var statearr_60938_60996 = state_60931__$1;
(statearr_60938_60996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (24))){
var inst_60882 = (state_60931[(9)]);
var inst_60891 = (state_60931[(10)]);
var inst_60905 = (state_60931[(11)]);
var inst_60905__$1 = inst_60882.call(null,inst_60891);
var state_60931__$1 = (function (){var statearr_60939 = state_60931;
(statearr_60939[(11)] = inst_60905__$1);

return statearr_60939;
})();
if(cljs.core.truth_(inst_60905__$1)){
var statearr_60940_60997 = state_60931__$1;
(statearr_60940_60997[(1)] = (29));

} else {
var statearr_60941_60998 = state_60931__$1;
(statearr_60941_60998[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (4))){
var inst_60849 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60849)){
var statearr_60942_60999 = state_60931__$1;
(statearr_60942_60999[(1)] = (8));

} else {
var statearr_60943_61000 = state_60931__$1;
(statearr_60943_61000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (15))){
var inst_60876 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60876)){
var statearr_60944_61001 = state_60931__$1;
(statearr_60944_61001[(1)] = (19));

} else {
var statearr_60945_61002 = state_60931__$1;
(statearr_60945_61002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (21))){
var inst_60881 = (state_60931[(12)]);
var inst_60881__$1 = (state_60931[(2)]);
var inst_60882 = cljs.core.get.call(null,inst_60881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60883 = cljs.core.get.call(null,inst_60881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60884 = cljs.core.get.call(null,inst_60881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60931__$1 = (function (){var statearr_60946 = state_60931;
(statearr_60946[(9)] = inst_60882);

(statearr_60946[(12)] = inst_60881__$1);

(statearr_60946[(13)] = inst_60883);

return statearr_60946;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60931__$1,(22),inst_60884);
} else {
if((state_val_60932 === (31))){
var inst_60913 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60913)){
var statearr_60947_61003 = state_60931__$1;
(statearr_60947_61003[(1)] = (32));

} else {
var statearr_60948_61004 = state_60931__$1;
(statearr_60948_61004[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (32))){
var inst_60890 = (state_60931[(14)]);
var state_60931__$1 = state_60931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60931__$1,(35),out,inst_60890);
} else {
if((state_val_60932 === (33))){
var inst_60881 = (state_60931[(12)]);
var inst_60858 = inst_60881;
var state_60931__$1 = (function (){var statearr_60949 = state_60931;
(statearr_60949[(7)] = inst_60858);

return statearr_60949;
})();
var statearr_60950_61005 = state_60931__$1;
(statearr_60950_61005[(2)] = null);

(statearr_60950_61005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (13))){
var inst_60858 = (state_60931[(7)]);
var inst_60865 = inst_60858.cljs$lang$protocol_mask$partition0$;
var inst_60866 = (inst_60865 & (64));
var inst_60867 = inst_60858.cljs$core$ISeq$;
var inst_60868 = (cljs.core.PROTOCOL_SENTINEL === inst_60867);
var inst_60869 = ((inst_60866) || (inst_60868));
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60869)){
var statearr_60951_61006 = state_60931__$1;
(statearr_60951_61006[(1)] = (16));

} else {
var statearr_60952_61007 = state_60931__$1;
(statearr_60952_61007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (22))){
var inst_60891 = (state_60931[(10)]);
var inst_60890 = (state_60931[(14)]);
var inst_60889 = (state_60931[(2)]);
var inst_60890__$1 = cljs.core.nth.call(null,inst_60889,(0),null);
var inst_60891__$1 = cljs.core.nth.call(null,inst_60889,(1),null);
var inst_60892 = (inst_60890__$1 == null);
var inst_60893 = cljs.core._EQ_.call(null,inst_60891__$1,change);
var inst_60894 = ((inst_60892) || (inst_60893));
var state_60931__$1 = (function (){var statearr_60953 = state_60931;
(statearr_60953[(10)] = inst_60891__$1);

(statearr_60953[(14)] = inst_60890__$1);

return statearr_60953;
})();
if(cljs.core.truth_(inst_60894)){
var statearr_60954_61008 = state_60931__$1;
(statearr_60954_61008[(1)] = (23));

} else {
var statearr_60955_61009 = state_60931__$1;
(statearr_60955_61009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (36))){
var inst_60881 = (state_60931[(12)]);
var inst_60858 = inst_60881;
var state_60931__$1 = (function (){var statearr_60956 = state_60931;
(statearr_60956[(7)] = inst_60858);

return statearr_60956;
})();
var statearr_60957_61010 = state_60931__$1;
(statearr_60957_61010[(2)] = null);

(statearr_60957_61010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (29))){
var inst_60905 = (state_60931[(11)]);
var state_60931__$1 = state_60931;
var statearr_60958_61011 = state_60931__$1;
(statearr_60958_61011[(2)] = inst_60905);

(statearr_60958_61011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (6))){
var state_60931__$1 = state_60931;
var statearr_60959_61012 = state_60931__$1;
(statearr_60959_61012[(2)] = false);

(statearr_60959_61012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (28))){
var inst_60901 = (state_60931[(2)]);
var inst_60902 = calc_state.call(null);
var inst_60858 = inst_60902;
var state_60931__$1 = (function (){var statearr_60960 = state_60931;
(statearr_60960[(15)] = inst_60901);

(statearr_60960[(7)] = inst_60858);

return statearr_60960;
})();
var statearr_60961_61013 = state_60931__$1;
(statearr_60961_61013[(2)] = null);

(statearr_60961_61013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (25))){
var inst_60927 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
var statearr_60962_61014 = state_60931__$1;
(statearr_60962_61014[(2)] = inst_60927);

(statearr_60962_61014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (34))){
var inst_60925 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
var statearr_60963_61015 = state_60931__$1;
(statearr_60963_61015[(2)] = inst_60925);

(statearr_60963_61015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (17))){
var state_60931__$1 = state_60931;
var statearr_60964_61016 = state_60931__$1;
(statearr_60964_61016[(2)] = false);

(statearr_60964_61016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (3))){
var state_60931__$1 = state_60931;
var statearr_60965_61017 = state_60931__$1;
(statearr_60965_61017[(2)] = false);

(statearr_60965_61017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (12))){
var inst_60929 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60931__$1,inst_60929);
} else {
if((state_val_60932 === (2))){
var inst_60833 = (state_60931[(8)]);
var inst_60838 = inst_60833.cljs$lang$protocol_mask$partition0$;
var inst_60839 = (inst_60838 & (64));
var inst_60840 = inst_60833.cljs$core$ISeq$;
var inst_60841 = (cljs.core.PROTOCOL_SENTINEL === inst_60840);
var inst_60842 = ((inst_60839) || (inst_60841));
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60842)){
var statearr_60966_61018 = state_60931__$1;
(statearr_60966_61018[(1)] = (5));

} else {
var statearr_60967_61019 = state_60931__$1;
(statearr_60967_61019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (23))){
var inst_60890 = (state_60931[(14)]);
var inst_60896 = (inst_60890 == null);
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60896)){
var statearr_60968_61020 = state_60931__$1;
(statearr_60968_61020[(1)] = (26));

} else {
var statearr_60969_61021 = state_60931__$1;
(statearr_60969_61021[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (35))){
var inst_60916 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
if(cljs.core.truth_(inst_60916)){
var statearr_60970_61022 = state_60931__$1;
(statearr_60970_61022[(1)] = (36));

} else {
var statearr_60971_61023 = state_60931__$1;
(statearr_60971_61023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (19))){
var inst_60858 = (state_60931[(7)]);
var inst_60878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60858);
var state_60931__$1 = state_60931;
var statearr_60972_61024 = state_60931__$1;
(statearr_60972_61024[(2)] = inst_60878);

(statearr_60972_61024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (11))){
var inst_60858 = (state_60931[(7)]);
var inst_60862 = (inst_60858 == null);
var inst_60863 = cljs.core.not.call(null,inst_60862);
var state_60931__$1 = state_60931;
if(inst_60863){
var statearr_60973_61025 = state_60931__$1;
(statearr_60973_61025[(1)] = (13));

} else {
var statearr_60974_61026 = state_60931__$1;
(statearr_60974_61026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (9))){
var inst_60833 = (state_60931[(8)]);
var state_60931__$1 = state_60931;
var statearr_60975_61027 = state_60931__$1;
(statearr_60975_61027[(2)] = inst_60833);

(statearr_60975_61027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (5))){
var state_60931__$1 = state_60931;
var statearr_60976_61028 = state_60931__$1;
(statearr_60976_61028[(2)] = true);

(statearr_60976_61028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (14))){
var state_60931__$1 = state_60931;
var statearr_60977_61029 = state_60931__$1;
(statearr_60977_61029[(2)] = false);

(statearr_60977_61029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (26))){
var inst_60891 = (state_60931[(10)]);
var inst_60898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_60891);
var state_60931__$1 = state_60931;
var statearr_60978_61030 = state_60931__$1;
(statearr_60978_61030[(2)] = inst_60898);

(statearr_60978_61030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (16))){
var state_60931__$1 = state_60931;
var statearr_60979_61031 = state_60931__$1;
(statearr_60979_61031[(2)] = true);

(statearr_60979_61031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (38))){
var inst_60921 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
var statearr_60980_61032 = state_60931__$1;
(statearr_60980_61032[(2)] = inst_60921);

(statearr_60980_61032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (30))){
var inst_60882 = (state_60931[(9)]);
var inst_60891 = (state_60931[(10)]);
var inst_60883 = (state_60931[(13)]);
var inst_60908 = cljs.core.empty_QMARK_.call(null,inst_60882);
var inst_60909 = inst_60883.call(null,inst_60891);
var inst_60910 = cljs.core.not.call(null,inst_60909);
var inst_60911 = ((inst_60908) && (inst_60910));
var state_60931__$1 = state_60931;
var statearr_60981_61033 = state_60931__$1;
(statearr_60981_61033[(2)] = inst_60911);

(statearr_60981_61033[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (10))){
var inst_60833 = (state_60931[(8)]);
var inst_60854 = (state_60931[(2)]);
var inst_60855 = cljs.core.get.call(null,inst_60854,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60856 = cljs.core.get.call(null,inst_60854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60857 = cljs.core.get.call(null,inst_60854,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60858 = inst_60833;
var state_60931__$1 = (function (){var statearr_60982 = state_60931;
(statearr_60982[(16)] = inst_60857);

(statearr_60982[(17)] = inst_60855);

(statearr_60982[(18)] = inst_60856);

(statearr_60982[(7)] = inst_60858);

return statearr_60982;
})();
var statearr_60983_61034 = state_60931__$1;
(statearr_60983_61034[(2)] = null);

(statearr_60983_61034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (18))){
var inst_60873 = (state_60931[(2)]);
var state_60931__$1 = state_60931;
var statearr_60984_61035 = state_60931__$1;
(statearr_60984_61035[(2)] = inst_60873);

(statearr_60984_61035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (37))){
var state_60931__$1 = state_60931;
var statearr_60985_61036 = state_60931__$1;
(statearr_60985_61036[(2)] = null);

(statearr_60985_61036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60932 === (8))){
var inst_60833 = (state_60931[(8)]);
var inst_60851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60833);
var state_60931__$1 = state_60931;
var statearr_60986_61037 = state_60931__$1;
(statearr_60986_61037[(2)] = inst_60851);

(statearr_60986_61037[(1)] = (10));


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
});})(c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24006__auto__,c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24007__auto__ = null;
var cljs$core$async$mix_$_state_machine__24007__auto____0 = (function (){
var statearr_60987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60987[(0)] = cljs$core$async$mix_$_state_machine__24007__auto__);

(statearr_60987[(1)] = (1));

return statearr_60987;
});
var cljs$core$async$mix_$_state_machine__24007__auto____1 = (function (state_60931){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_60931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e60988){if((e60988 instanceof Object)){
var ex__24010__auto__ = e60988;
var statearr_60989_61038 = state_60931;
(statearr_60989_61038[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61039 = state_60931;
state_60931 = G__61039;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24007__auto__ = function(state_60931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24007__auto____1.call(this,state_60931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24007__auto____0;
cljs$core$async$mix_$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24007__auto____1;
return cljs$core$async$mix_$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24103__auto__ = (function (){var statearr_60990 = f__24102__auto__.call(null);
(statearr_60990[(6)] = c__24101__auto___60991);

return statearr_60990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___60991,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__61041 = arguments.length;
switch (G__61041) {
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
var G__61045 = arguments.length;
switch (G__61045) {
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
return (function (p1__61043_SHARP_){
if(cljs.core.truth_(p1__61043_SHARP_.call(null,topic))){
return p1__61043_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61043_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61046 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61047){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61047 = meta61047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61048,meta61047__$1){
var self__ = this;
var _61048__$1 = this;
return (new cljs.core.async.t_cljs$core$async61046(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61047__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61048){
var self__ = this;
var _61048__$1 = this;
return self__.meta61047;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61047","meta61047",-339678778,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61046";

cljs.core.async.t_cljs$core$async61046.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async61046");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61046.
 */
cljs.core.async.__GT_t_cljs$core$async61046 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61047){
return (new cljs.core.async.t_cljs$core$async61046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61047));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61046(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24101__auto___61166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61166,mults,ensure_mult,p){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61166,mults,ensure_mult,p){
return (function (state_61120){
var state_val_61121 = (state_61120[(1)]);
if((state_val_61121 === (7))){
var inst_61116 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61122_61167 = state_61120__$1;
(statearr_61122_61167[(2)] = inst_61116);

(statearr_61122_61167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (20))){
var state_61120__$1 = state_61120;
var statearr_61123_61168 = state_61120__$1;
(statearr_61123_61168[(2)] = null);

(statearr_61123_61168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (1))){
var state_61120__$1 = state_61120;
var statearr_61124_61169 = state_61120__$1;
(statearr_61124_61169[(2)] = null);

(statearr_61124_61169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (24))){
var inst_61099 = (state_61120[(7)]);
var inst_61108 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61099);
var state_61120__$1 = state_61120;
var statearr_61125_61170 = state_61120__$1;
(statearr_61125_61170[(2)] = inst_61108);

(statearr_61125_61170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (4))){
var inst_61051 = (state_61120[(8)]);
var inst_61051__$1 = (state_61120[(2)]);
var inst_61052 = (inst_61051__$1 == null);
var state_61120__$1 = (function (){var statearr_61126 = state_61120;
(statearr_61126[(8)] = inst_61051__$1);

return statearr_61126;
})();
if(cljs.core.truth_(inst_61052)){
var statearr_61127_61171 = state_61120__$1;
(statearr_61127_61171[(1)] = (5));

} else {
var statearr_61128_61172 = state_61120__$1;
(statearr_61128_61172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (15))){
var inst_61093 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61129_61173 = state_61120__$1;
(statearr_61129_61173[(2)] = inst_61093);

(statearr_61129_61173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (21))){
var inst_61113 = (state_61120[(2)]);
var state_61120__$1 = (function (){var statearr_61130 = state_61120;
(statearr_61130[(9)] = inst_61113);

return statearr_61130;
})();
var statearr_61131_61174 = state_61120__$1;
(statearr_61131_61174[(2)] = null);

(statearr_61131_61174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (13))){
var inst_61075 = (state_61120[(10)]);
var inst_61077 = cljs.core.chunked_seq_QMARK_.call(null,inst_61075);
var state_61120__$1 = state_61120;
if(inst_61077){
var statearr_61132_61175 = state_61120__$1;
(statearr_61132_61175[(1)] = (16));

} else {
var statearr_61133_61176 = state_61120__$1;
(statearr_61133_61176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (22))){
var inst_61105 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
if(cljs.core.truth_(inst_61105)){
var statearr_61134_61177 = state_61120__$1;
(statearr_61134_61177[(1)] = (23));

} else {
var statearr_61135_61178 = state_61120__$1;
(statearr_61135_61178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (6))){
var inst_61099 = (state_61120[(7)]);
var inst_61051 = (state_61120[(8)]);
var inst_61101 = (state_61120[(11)]);
var inst_61099__$1 = topic_fn.call(null,inst_61051);
var inst_61100 = cljs.core.deref.call(null,mults);
var inst_61101__$1 = cljs.core.get.call(null,inst_61100,inst_61099__$1);
var state_61120__$1 = (function (){var statearr_61136 = state_61120;
(statearr_61136[(7)] = inst_61099__$1);

(statearr_61136[(11)] = inst_61101__$1);

return statearr_61136;
})();
if(cljs.core.truth_(inst_61101__$1)){
var statearr_61137_61179 = state_61120__$1;
(statearr_61137_61179[(1)] = (19));

} else {
var statearr_61138_61180 = state_61120__$1;
(statearr_61138_61180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (25))){
var inst_61110 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61139_61181 = state_61120__$1;
(statearr_61139_61181[(2)] = inst_61110);

(statearr_61139_61181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (17))){
var inst_61075 = (state_61120[(10)]);
var inst_61084 = cljs.core.first.call(null,inst_61075);
var inst_61085 = cljs.core.async.muxch_STAR_.call(null,inst_61084);
var inst_61086 = cljs.core.async.close_BANG_.call(null,inst_61085);
var inst_61087 = cljs.core.next.call(null,inst_61075);
var inst_61061 = inst_61087;
var inst_61062 = null;
var inst_61063 = (0);
var inst_61064 = (0);
var state_61120__$1 = (function (){var statearr_61140 = state_61120;
(statearr_61140[(12)] = inst_61062);

(statearr_61140[(13)] = inst_61061);

(statearr_61140[(14)] = inst_61086);

(statearr_61140[(15)] = inst_61063);

(statearr_61140[(16)] = inst_61064);

return statearr_61140;
})();
var statearr_61141_61182 = state_61120__$1;
(statearr_61141_61182[(2)] = null);

(statearr_61141_61182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (3))){
var inst_61118 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61120__$1,inst_61118);
} else {
if((state_val_61121 === (12))){
var inst_61095 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61142_61183 = state_61120__$1;
(statearr_61142_61183[(2)] = inst_61095);

(statearr_61142_61183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (2))){
var state_61120__$1 = state_61120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61120__$1,(4),ch);
} else {
if((state_val_61121 === (23))){
var state_61120__$1 = state_61120;
var statearr_61143_61184 = state_61120__$1;
(statearr_61143_61184[(2)] = null);

(statearr_61143_61184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (19))){
var inst_61051 = (state_61120[(8)]);
var inst_61101 = (state_61120[(11)]);
var inst_61103 = cljs.core.async.muxch_STAR_.call(null,inst_61101);
var state_61120__$1 = state_61120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61120__$1,(22),inst_61103,inst_61051);
} else {
if((state_val_61121 === (11))){
var inst_61075 = (state_61120[(10)]);
var inst_61061 = (state_61120[(13)]);
var inst_61075__$1 = cljs.core.seq.call(null,inst_61061);
var state_61120__$1 = (function (){var statearr_61144 = state_61120;
(statearr_61144[(10)] = inst_61075__$1);

return statearr_61144;
})();
if(inst_61075__$1){
var statearr_61145_61185 = state_61120__$1;
(statearr_61145_61185[(1)] = (13));

} else {
var statearr_61146_61186 = state_61120__$1;
(statearr_61146_61186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (9))){
var inst_61097 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61147_61187 = state_61120__$1;
(statearr_61147_61187[(2)] = inst_61097);

(statearr_61147_61187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (5))){
var inst_61058 = cljs.core.deref.call(null,mults);
var inst_61059 = cljs.core.vals.call(null,inst_61058);
var inst_61060 = cljs.core.seq.call(null,inst_61059);
var inst_61061 = inst_61060;
var inst_61062 = null;
var inst_61063 = (0);
var inst_61064 = (0);
var state_61120__$1 = (function (){var statearr_61148 = state_61120;
(statearr_61148[(12)] = inst_61062);

(statearr_61148[(13)] = inst_61061);

(statearr_61148[(15)] = inst_61063);

(statearr_61148[(16)] = inst_61064);

return statearr_61148;
})();
var statearr_61149_61188 = state_61120__$1;
(statearr_61149_61188[(2)] = null);

(statearr_61149_61188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (14))){
var state_61120__$1 = state_61120;
var statearr_61153_61189 = state_61120__$1;
(statearr_61153_61189[(2)] = null);

(statearr_61153_61189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (16))){
var inst_61075 = (state_61120[(10)]);
var inst_61079 = cljs.core.chunk_first.call(null,inst_61075);
var inst_61080 = cljs.core.chunk_rest.call(null,inst_61075);
var inst_61081 = cljs.core.count.call(null,inst_61079);
var inst_61061 = inst_61080;
var inst_61062 = inst_61079;
var inst_61063 = inst_61081;
var inst_61064 = (0);
var state_61120__$1 = (function (){var statearr_61154 = state_61120;
(statearr_61154[(12)] = inst_61062);

(statearr_61154[(13)] = inst_61061);

(statearr_61154[(15)] = inst_61063);

(statearr_61154[(16)] = inst_61064);

return statearr_61154;
})();
var statearr_61155_61190 = state_61120__$1;
(statearr_61155_61190[(2)] = null);

(statearr_61155_61190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (10))){
var inst_61062 = (state_61120[(12)]);
var inst_61061 = (state_61120[(13)]);
var inst_61063 = (state_61120[(15)]);
var inst_61064 = (state_61120[(16)]);
var inst_61069 = cljs.core._nth.call(null,inst_61062,inst_61064);
var inst_61070 = cljs.core.async.muxch_STAR_.call(null,inst_61069);
var inst_61071 = cljs.core.async.close_BANG_.call(null,inst_61070);
var inst_61072 = (inst_61064 + (1));
var tmp61150 = inst_61062;
var tmp61151 = inst_61061;
var tmp61152 = inst_61063;
var inst_61061__$1 = tmp61151;
var inst_61062__$1 = tmp61150;
var inst_61063__$1 = tmp61152;
var inst_61064__$1 = inst_61072;
var state_61120__$1 = (function (){var statearr_61156 = state_61120;
(statearr_61156[(12)] = inst_61062__$1);

(statearr_61156[(13)] = inst_61061__$1);

(statearr_61156[(17)] = inst_61071);

(statearr_61156[(15)] = inst_61063__$1);

(statearr_61156[(16)] = inst_61064__$1);

return statearr_61156;
})();
var statearr_61157_61191 = state_61120__$1;
(statearr_61157_61191[(2)] = null);

(statearr_61157_61191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (18))){
var inst_61090 = (state_61120[(2)]);
var state_61120__$1 = state_61120;
var statearr_61158_61192 = state_61120__$1;
(statearr_61158_61192[(2)] = inst_61090);

(statearr_61158_61192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61121 === (8))){
var inst_61063 = (state_61120[(15)]);
var inst_61064 = (state_61120[(16)]);
var inst_61066 = (inst_61064 < inst_61063);
var inst_61067 = inst_61066;
var state_61120__$1 = state_61120;
if(cljs.core.truth_(inst_61067)){
var statearr_61159_61193 = state_61120__$1;
(statearr_61159_61193[(1)] = (10));

} else {
var statearr_61160_61194 = state_61120__$1;
(statearr_61160_61194[(1)] = (11));

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
});})(c__24101__auto___61166,mults,ensure_mult,p))
;
return ((function (switch__24006__auto__,c__24101__auto___61166,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61161[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61161[(1)] = (1));

return statearr_61161;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61120){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61162){if((e61162 instanceof Object)){
var ex__24010__auto__ = e61162;
var statearr_61163_61195 = state_61120;
(statearr_61163_61195[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61196 = state_61120;
state_61120 = G__61196;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61166,mults,ensure_mult,p))
})();
var state__24103__auto__ = (function (){var statearr_61164 = f__24102__auto__.call(null);
(statearr_61164[(6)] = c__24101__auto___61166);

return statearr_61164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61166,mults,ensure_mult,p))
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
var G__61198 = arguments.length;
switch (G__61198) {
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
var G__61201 = arguments.length;
switch (G__61201) {
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
var G__61204 = arguments.length;
switch (G__61204) {
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
var c__24101__auto___61271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61243){
var state_val_61244 = (state_61243[(1)]);
if((state_val_61244 === (7))){
var state_61243__$1 = state_61243;
var statearr_61245_61272 = state_61243__$1;
(statearr_61245_61272[(2)] = null);

(statearr_61245_61272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (1))){
var state_61243__$1 = state_61243;
var statearr_61246_61273 = state_61243__$1;
(statearr_61246_61273[(2)] = null);

(statearr_61246_61273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (4))){
var inst_61207 = (state_61243[(7)]);
var inst_61209 = (inst_61207 < cnt);
var state_61243__$1 = state_61243;
if(cljs.core.truth_(inst_61209)){
var statearr_61247_61274 = state_61243__$1;
(statearr_61247_61274[(1)] = (6));

} else {
var statearr_61248_61275 = state_61243__$1;
(statearr_61248_61275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (15))){
var inst_61239 = (state_61243[(2)]);
var state_61243__$1 = state_61243;
var statearr_61249_61276 = state_61243__$1;
(statearr_61249_61276[(2)] = inst_61239);

(statearr_61249_61276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (13))){
var inst_61232 = cljs.core.async.close_BANG_.call(null,out);
var state_61243__$1 = state_61243;
var statearr_61250_61277 = state_61243__$1;
(statearr_61250_61277[(2)] = inst_61232);

(statearr_61250_61277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (6))){
var state_61243__$1 = state_61243;
var statearr_61251_61278 = state_61243__$1;
(statearr_61251_61278[(2)] = null);

(statearr_61251_61278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (3))){
var inst_61241 = (state_61243[(2)]);
var state_61243__$1 = state_61243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61243__$1,inst_61241);
} else {
if((state_val_61244 === (12))){
var inst_61229 = (state_61243[(8)]);
var inst_61229__$1 = (state_61243[(2)]);
var inst_61230 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61229__$1);
var state_61243__$1 = (function (){var statearr_61252 = state_61243;
(statearr_61252[(8)] = inst_61229__$1);

return statearr_61252;
})();
if(cljs.core.truth_(inst_61230)){
var statearr_61253_61279 = state_61243__$1;
(statearr_61253_61279[(1)] = (13));

} else {
var statearr_61254_61280 = state_61243__$1;
(statearr_61254_61280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (2))){
var inst_61206 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61207 = (0);
var state_61243__$1 = (function (){var statearr_61255 = state_61243;
(statearr_61255[(9)] = inst_61206);

(statearr_61255[(7)] = inst_61207);

return statearr_61255;
})();
var statearr_61256_61281 = state_61243__$1;
(statearr_61256_61281[(2)] = null);

(statearr_61256_61281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (11))){
var inst_61207 = (state_61243[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61243,(10),Object,null,(9));
var inst_61216 = chs__$1.call(null,inst_61207);
var inst_61217 = done.call(null,inst_61207);
var inst_61218 = cljs.core.async.take_BANG_.call(null,inst_61216,inst_61217);
var state_61243__$1 = state_61243;
var statearr_61257_61282 = state_61243__$1;
(statearr_61257_61282[(2)] = inst_61218);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (9))){
var inst_61207 = (state_61243[(7)]);
var inst_61220 = (state_61243[(2)]);
var inst_61221 = (inst_61207 + (1));
var inst_61207__$1 = inst_61221;
var state_61243__$1 = (function (){var statearr_61258 = state_61243;
(statearr_61258[(7)] = inst_61207__$1);

(statearr_61258[(10)] = inst_61220);

return statearr_61258;
})();
var statearr_61259_61283 = state_61243__$1;
(statearr_61259_61283[(2)] = null);

(statearr_61259_61283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (5))){
var inst_61227 = (state_61243[(2)]);
var state_61243__$1 = (function (){var statearr_61260 = state_61243;
(statearr_61260[(11)] = inst_61227);

return statearr_61260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61243__$1,(12),dchan);
} else {
if((state_val_61244 === (14))){
var inst_61229 = (state_61243[(8)]);
var inst_61234 = cljs.core.apply.call(null,f,inst_61229);
var state_61243__$1 = state_61243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61243__$1,(16),out,inst_61234);
} else {
if((state_val_61244 === (16))){
var inst_61236 = (state_61243[(2)]);
var state_61243__$1 = (function (){var statearr_61261 = state_61243;
(statearr_61261[(12)] = inst_61236);

return statearr_61261;
})();
var statearr_61262_61284 = state_61243__$1;
(statearr_61262_61284[(2)] = null);

(statearr_61262_61284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (10))){
var inst_61211 = (state_61243[(2)]);
var inst_61212 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61243__$1 = (function (){var statearr_61263 = state_61243;
(statearr_61263[(13)] = inst_61211);

return statearr_61263;
})();
var statearr_61264_61285 = state_61243__$1;
(statearr_61264_61285[(2)] = inst_61212);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61244 === (8))){
var inst_61225 = (state_61243[(2)]);
var state_61243__$1 = state_61243;
var statearr_61265_61286 = state_61243__$1;
(statearr_61265_61286[(2)] = inst_61225);

(statearr_61265_61286[(1)] = (5));


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
});})(c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24006__auto__,c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61266[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61266[(1)] = (1));

return statearr_61266;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61243){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61267){if((e61267 instanceof Object)){
var ex__24010__auto__ = e61267;
var statearr_61268_61287 = state_61243;
(statearr_61268_61287[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61288 = state_61243;
state_61243 = G__61288;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24103__auto__ = (function (){var statearr_61269 = f__24102__auto__.call(null);
(statearr_61269[(6)] = c__24101__auto___61271);

return statearr_61269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61271,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__61291 = arguments.length;
switch (G__61291) {
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
var c__24101__auto___61345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61345,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61345,out){
return (function (state_61323){
var state_val_61324 = (state_61323[(1)]);
if((state_val_61324 === (7))){
var inst_61302 = (state_61323[(7)]);
var inst_61303 = (state_61323[(8)]);
var inst_61302__$1 = (state_61323[(2)]);
var inst_61303__$1 = cljs.core.nth.call(null,inst_61302__$1,(0),null);
var inst_61304 = cljs.core.nth.call(null,inst_61302__$1,(1),null);
var inst_61305 = (inst_61303__$1 == null);
var state_61323__$1 = (function (){var statearr_61325 = state_61323;
(statearr_61325[(9)] = inst_61304);

(statearr_61325[(7)] = inst_61302__$1);

(statearr_61325[(8)] = inst_61303__$1);

return statearr_61325;
})();
if(cljs.core.truth_(inst_61305)){
var statearr_61326_61346 = state_61323__$1;
(statearr_61326_61346[(1)] = (8));

} else {
var statearr_61327_61347 = state_61323__$1;
(statearr_61327_61347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (1))){
var inst_61292 = cljs.core.vec.call(null,chs);
var inst_61293 = inst_61292;
var state_61323__$1 = (function (){var statearr_61328 = state_61323;
(statearr_61328[(10)] = inst_61293);

return statearr_61328;
})();
var statearr_61329_61348 = state_61323__$1;
(statearr_61329_61348[(2)] = null);

(statearr_61329_61348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (4))){
var inst_61293 = (state_61323[(10)]);
var state_61323__$1 = state_61323;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61323__$1,(7),inst_61293);
} else {
if((state_val_61324 === (6))){
var inst_61319 = (state_61323[(2)]);
var state_61323__$1 = state_61323;
var statearr_61330_61349 = state_61323__$1;
(statearr_61330_61349[(2)] = inst_61319);

(statearr_61330_61349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (3))){
var inst_61321 = (state_61323[(2)]);
var state_61323__$1 = state_61323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61323__$1,inst_61321);
} else {
if((state_val_61324 === (2))){
var inst_61293 = (state_61323[(10)]);
var inst_61295 = cljs.core.count.call(null,inst_61293);
var inst_61296 = (inst_61295 > (0));
var state_61323__$1 = state_61323;
if(cljs.core.truth_(inst_61296)){
var statearr_61332_61350 = state_61323__$1;
(statearr_61332_61350[(1)] = (4));

} else {
var statearr_61333_61351 = state_61323__$1;
(statearr_61333_61351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (11))){
var inst_61293 = (state_61323[(10)]);
var inst_61312 = (state_61323[(2)]);
var tmp61331 = inst_61293;
var inst_61293__$1 = tmp61331;
var state_61323__$1 = (function (){var statearr_61334 = state_61323;
(statearr_61334[(10)] = inst_61293__$1);

(statearr_61334[(11)] = inst_61312);

return statearr_61334;
})();
var statearr_61335_61352 = state_61323__$1;
(statearr_61335_61352[(2)] = null);

(statearr_61335_61352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (9))){
var inst_61303 = (state_61323[(8)]);
var state_61323__$1 = state_61323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61323__$1,(11),out,inst_61303);
} else {
if((state_val_61324 === (5))){
var inst_61317 = cljs.core.async.close_BANG_.call(null,out);
var state_61323__$1 = state_61323;
var statearr_61336_61353 = state_61323__$1;
(statearr_61336_61353[(2)] = inst_61317);

(statearr_61336_61353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (10))){
var inst_61315 = (state_61323[(2)]);
var state_61323__$1 = state_61323;
var statearr_61337_61354 = state_61323__$1;
(statearr_61337_61354[(2)] = inst_61315);

(statearr_61337_61354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61324 === (8))){
var inst_61304 = (state_61323[(9)]);
var inst_61293 = (state_61323[(10)]);
var inst_61302 = (state_61323[(7)]);
var inst_61303 = (state_61323[(8)]);
var inst_61307 = (function (){var cs = inst_61293;
var vec__61298 = inst_61302;
var v = inst_61303;
var c = inst_61304;
return ((function (cs,vec__61298,v,c,inst_61304,inst_61293,inst_61302,inst_61303,state_val_61324,c__24101__auto___61345,out){
return (function (p1__61289_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61289_SHARP_);
});
;})(cs,vec__61298,v,c,inst_61304,inst_61293,inst_61302,inst_61303,state_val_61324,c__24101__auto___61345,out))
})();
var inst_61308 = cljs.core.filterv.call(null,inst_61307,inst_61293);
var inst_61293__$1 = inst_61308;
var state_61323__$1 = (function (){var statearr_61338 = state_61323;
(statearr_61338[(10)] = inst_61293__$1);

return statearr_61338;
})();
var statearr_61339_61355 = state_61323__$1;
(statearr_61339_61355[(2)] = null);

(statearr_61339_61355[(1)] = (2));


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
});})(c__24101__auto___61345,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61345,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61340[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61340[(1)] = (1));

return statearr_61340;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61323){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61341){if((e61341 instanceof Object)){
var ex__24010__auto__ = e61341;
var statearr_61342_61356 = state_61323;
(statearr_61342_61356[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61357 = state_61323;
state_61323 = G__61357;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61345,out))
})();
var state__24103__auto__ = (function (){var statearr_61343 = f__24102__auto__.call(null);
(statearr_61343[(6)] = c__24101__auto___61345);

return statearr_61343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61345,out))
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
var G__61359 = arguments.length;
switch (G__61359) {
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
var c__24101__auto___61404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61404,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61404,out){
return (function (state_61383){
var state_val_61384 = (state_61383[(1)]);
if((state_val_61384 === (7))){
var inst_61365 = (state_61383[(7)]);
var inst_61365__$1 = (state_61383[(2)]);
var inst_61366 = (inst_61365__$1 == null);
var inst_61367 = cljs.core.not.call(null,inst_61366);
var state_61383__$1 = (function (){var statearr_61385 = state_61383;
(statearr_61385[(7)] = inst_61365__$1);

return statearr_61385;
})();
if(inst_61367){
var statearr_61386_61405 = state_61383__$1;
(statearr_61386_61405[(1)] = (8));

} else {
var statearr_61387_61406 = state_61383__$1;
(statearr_61387_61406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (1))){
var inst_61360 = (0);
var state_61383__$1 = (function (){var statearr_61388 = state_61383;
(statearr_61388[(8)] = inst_61360);

return statearr_61388;
})();
var statearr_61389_61407 = state_61383__$1;
(statearr_61389_61407[(2)] = null);

(statearr_61389_61407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (4))){
var state_61383__$1 = state_61383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61383__$1,(7),ch);
} else {
if((state_val_61384 === (6))){
var inst_61378 = (state_61383[(2)]);
var state_61383__$1 = state_61383;
var statearr_61390_61408 = state_61383__$1;
(statearr_61390_61408[(2)] = inst_61378);

(statearr_61390_61408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (3))){
var inst_61380 = (state_61383[(2)]);
var inst_61381 = cljs.core.async.close_BANG_.call(null,out);
var state_61383__$1 = (function (){var statearr_61391 = state_61383;
(statearr_61391[(9)] = inst_61380);

return statearr_61391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61383__$1,inst_61381);
} else {
if((state_val_61384 === (2))){
var inst_61360 = (state_61383[(8)]);
var inst_61362 = (inst_61360 < n);
var state_61383__$1 = state_61383;
if(cljs.core.truth_(inst_61362)){
var statearr_61392_61409 = state_61383__$1;
(statearr_61392_61409[(1)] = (4));

} else {
var statearr_61393_61410 = state_61383__$1;
(statearr_61393_61410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (11))){
var inst_61360 = (state_61383[(8)]);
var inst_61370 = (state_61383[(2)]);
var inst_61371 = (inst_61360 + (1));
var inst_61360__$1 = inst_61371;
var state_61383__$1 = (function (){var statearr_61394 = state_61383;
(statearr_61394[(10)] = inst_61370);

(statearr_61394[(8)] = inst_61360__$1);

return statearr_61394;
})();
var statearr_61395_61411 = state_61383__$1;
(statearr_61395_61411[(2)] = null);

(statearr_61395_61411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (9))){
var state_61383__$1 = state_61383;
var statearr_61396_61412 = state_61383__$1;
(statearr_61396_61412[(2)] = null);

(statearr_61396_61412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (5))){
var state_61383__$1 = state_61383;
var statearr_61397_61413 = state_61383__$1;
(statearr_61397_61413[(2)] = null);

(statearr_61397_61413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (10))){
var inst_61375 = (state_61383[(2)]);
var state_61383__$1 = state_61383;
var statearr_61398_61414 = state_61383__$1;
(statearr_61398_61414[(2)] = inst_61375);

(statearr_61398_61414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (8))){
var inst_61365 = (state_61383[(7)]);
var state_61383__$1 = state_61383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61383__$1,(11),out,inst_61365);
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
});})(c__24101__auto___61404,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61404,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61399[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61399[(1)] = (1));

return statearr_61399;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61383){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61400){if((e61400 instanceof Object)){
var ex__24010__auto__ = e61400;
var statearr_61401_61415 = state_61383;
(statearr_61401_61415[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61416 = state_61383;
state_61383 = G__61416;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61404,out))
})();
var state__24103__auto__ = (function (){var statearr_61402 = f__24102__auto__.call(null);
(statearr_61402[(6)] = c__24101__auto___61404);

return statearr_61402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61404,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61418 = (function (f,ch,meta61419){
this.f = f;
this.ch = ch;
this.meta61419 = meta61419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61420,meta61419__$1){
var self__ = this;
var _61420__$1 = this;
return (new cljs.core.async.t_cljs$core$async61418(self__.f,self__.ch,meta61419__$1));
});

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61420){
var self__ = this;
var _61420__$1 = this;
return self__.meta61419;
});

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61421 = (function (f,ch,meta61419,_,fn1,meta61422){
this.f = f;
this.ch = ch;
this.meta61419 = meta61419;
this._ = _;
this.fn1 = fn1;
this.meta61422 = meta61422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61423,meta61422__$1){
var self__ = this;
var _61423__$1 = this;
return (new cljs.core.async.t_cljs$core$async61421(self__.f,self__.ch,self__.meta61419,self__._,self__.fn1,meta61422__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61423){
var self__ = this;
var _61423__$1 = this;
return self__.meta61422;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61417_SHARP_){
return f1.call(null,(((p1__61417_SHARP_ == null))?null:self__.f.call(null,p1__61417_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61419","meta61419",-956095626,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61418","cljs.core.async/t_cljs$core$async61418",-207563739,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61422","meta61422",-1798729278,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61421";

cljs.core.async.t_cljs$core$async61421.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async61421");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61421.
 */
cljs.core.async.__GT_t_cljs$core$async61421 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61421(f__$1,ch__$1,meta61419__$1,___$2,fn1__$1,meta61422){
return (new cljs.core.async.t_cljs$core$async61421(f__$1,ch__$1,meta61419__$1,___$2,fn1__$1,meta61422));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61421(self__.f,self__.ch,self__.meta61419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61419","meta61419",-956095626,null)], null);
});

cljs.core.async.t_cljs$core$async61418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61418";

cljs.core.async.t_cljs$core$async61418.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async61418");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61418.
 */
cljs.core.async.__GT_t_cljs$core$async61418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61418(f__$1,ch__$1,meta61419){
return (new cljs.core.async.t_cljs$core$async61418(f__$1,ch__$1,meta61419));
});

}

return (new cljs.core.async.t_cljs$core$async61418(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61424 = (function (f,ch,meta61425){
this.f = f;
this.ch = ch;
this.meta61425 = meta61425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61426,meta61425__$1){
var self__ = this;
var _61426__$1 = this;
return (new cljs.core.async.t_cljs$core$async61424(self__.f,self__.ch,meta61425__$1));
});

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61426){
var self__ = this;
var _61426__$1 = this;
return self__.meta61425;
});

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61425","meta61425",-1975656281,null)], null);
});

cljs.core.async.t_cljs$core$async61424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61424";

cljs.core.async.t_cljs$core$async61424.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async61424");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61424.
 */
cljs.core.async.__GT_t_cljs$core$async61424 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61424(f__$1,ch__$1,meta61425){
return (new cljs.core.async.t_cljs$core$async61424(f__$1,ch__$1,meta61425));
});

}

return (new cljs.core.async.t_cljs$core$async61424(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61427 = (function (p,ch,meta61428){
this.p = p;
this.ch = ch;
this.meta61428 = meta61428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61429,meta61428__$1){
var self__ = this;
var _61429__$1 = this;
return (new cljs.core.async.t_cljs$core$async61427(self__.p,self__.ch,meta61428__$1));
});

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61429){
var self__ = this;
var _61429__$1 = this;
return self__.meta61428;
});

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61428","meta61428",-1311512811,null)], null);
});

cljs.core.async.t_cljs$core$async61427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61427";

cljs.core.async.t_cljs$core$async61427.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async61427");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61427.
 */
cljs.core.async.__GT_t_cljs$core$async61427 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61427(p__$1,ch__$1,meta61428){
return (new cljs.core.async.t_cljs$core$async61427(p__$1,ch__$1,meta61428));
});

}

return (new cljs.core.async.t_cljs$core$async61427(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__61431 = arguments.length;
switch (G__61431) {
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
var c__24101__auto___61471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61471,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61471,out){
return (function (state_61452){
var state_val_61453 = (state_61452[(1)]);
if((state_val_61453 === (7))){
var inst_61448 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
var statearr_61454_61472 = state_61452__$1;
(statearr_61454_61472[(2)] = inst_61448);

(statearr_61454_61472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (1))){
var state_61452__$1 = state_61452;
var statearr_61455_61473 = state_61452__$1;
(statearr_61455_61473[(2)] = null);

(statearr_61455_61473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (4))){
var inst_61434 = (state_61452[(7)]);
var inst_61434__$1 = (state_61452[(2)]);
var inst_61435 = (inst_61434__$1 == null);
var state_61452__$1 = (function (){var statearr_61456 = state_61452;
(statearr_61456[(7)] = inst_61434__$1);

return statearr_61456;
})();
if(cljs.core.truth_(inst_61435)){
var statearr_61457_61474 = state_61452__$1;
(statearr_61457_61474[(1)] = (5));

} else {
var statearr_61458_61475 = state_61452__$1;
(statearr_61458_61475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (6))){
var inst_61434 = (state_61452[(7)]);
var inst_61439 = p.call(null,inst_61434);
var state_61452__$1 = state_61452;
if(cljs.core.truth_(inst_61439)){
var statearr_61459_61476 = state_61452__$1;
(statearr_61459_61476[(1)] = (8));

} else {
var statearr_61460_61477 = state_61452__$1;
(statearr_61460_61477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (3))){
var inst_61450 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61452__$1,inst_61450);
} else {
if((state_val_61453 === (2))){
var state_61452__$1 = state_61452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61452__$1,(4),ch);
} else {
if((state_val_61453 === (11))){
var inst_61442 = (state_61452[(2)]);
var state_61452__$1 = state_61452;
var statearr_61461_61478 = state_61452__$1;
(statearr_61461_61478[(2)] = inst_61442);

(statearr_61461_61478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (9))){
var state_61452__$1 = state_61452;
var statearr_61462_61479 = state_61452__$1;
(statearr_61462_61479[(2)] = null);

(statearr_61462_61479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (5))){
var inst_61437 = cljs.core.async.close_BANG_.call(null,out);
var state_61452__$1 = state_61452;
var statearr_61463_61480 = state_61452__$1;
(statearr_61463_61480[(2)] = inst_61437);

(statearr_61463_61480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (10))){
var inst_61445 = (state_61452[(2)]);
var state_61452__$1 = (function (){var statearr_61464 = state_61452;
(statearr_61464[(8)] = inst_61445);

return statearr_61464;
})();
var statearr_61465_61481 = state_61452__$1;
(statearr_61465_61481[(2)] = null);

(statearr_61465_61481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61453 === (8))){
var inst_61434 = (state_61452[(7)]);
var state_61452__$1 = state_61452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61452__$1,(11),out,inst_61434);
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
});})(c__24101__auto___61471,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61471,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61466 = [null,null,null,null,null,null,null,null,null];
(statearr_61466[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61466[(1)] = (1));

return statearr_61466;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61452){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61467){if((e61467 instanceof Object)){
var ex__24010__auto__ = e61467;
var statearr_61468_61482 = state_61452;
(statearr_61468_61482[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61483 = state_61452;
state_61452 = G__61483;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61471,out))
})();
var state__24103__auto__ = (function (){var statearr_61469 = f__24102__auto__.call(null);
(statearr_61469[(6)] = c__24101__auto___61471);

return statearr_61469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61471,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__61485 = arguments.length;
switch (G__61485) {
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
var c__24101__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto__){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto__){
return (function (state_61548){
var state_val_61549 = (state_61548[(1)]);
if((state_val_61549 === (7))){
var inst_61544 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
var statearr_61550_61588 = state_61548__$1;
(statearr_61550_61588[(2)] = inst_61544);

(statearr_61550_61588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (20))){
var inst_61514 = (state_61548[(7)]);
var inst_61525 = (state_61548[(2)]);
var inst_61526 = cljs.core.next.call(null,inst_61514);
var inst_61500 = inst_61526;
var inst_61501 = null;
var inst_61502 = (0);
var inst_61503 = (0);
var state_61548__$1 = (function (){var statearr_61551 = state_61548;
(statearr_61551[(8)] = inst_61525);

(statearr_61551[(9)] = inst_61503);

(statearr_61551[(10)] = inst_61501);

(statearr_61551[(11)] = inst_61500);

(statearr_61551[(12)] = inst_61502);

return statearr_61551;
})();
var statearr_61552_61589 = state_61548__$1;
(statearr_61552_61589[(2)] = null);

(statearr_61552_61589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (1))){
var state_61548__$1 = state_61548;
var statearr_61553_61590 = state_61548__$1;
(statearr_61553_61590[(2)] = null);

(statearr_61553_61590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (4))){
var inst_61489 = (state_61548[(13)]);
var inst_61489__$1 = (state_61548[(2)]);
var inst_61490 = (inst_61489__$1 == null);
var state_61548__$1 = (function (){var statearr_61554 = state_61548;
(statearr_61554[(13)] = inst_61489__$1);

return statearr_61554;
})();
if(cljs.core.truth_(inst_61490)){
var statearr_61555_61591 = state_61548__$1;
(statearr_61555_61591[(1)] = (5));

} else {
var statearr_61556_61592 = state_61548__$1;
(statearr_61556_61592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (15))){
var state_61548__$1 = state_61548;
var statearr_61560_61593 = state_61548__$1;
(statearr_61560_61593[(2)] = null);

(statearr_61560_61593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (21))){
var state_61548__$1 = state_61548;
var statearr_61561_61594 = state_61548__$1;
(statearr_61561_61594[(2)] = null);

(statearr_61561_61594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (13))){
var inst_61503 = (state_61548[(9)]);
var inst_61501 = (state_61548[(10)]);
var inst_61500 = (state_61548[(11)]);
var inst_61502 = (state_61548[(12)]);
var inst_61510 = (state_61548[(2)]);
var inst_61511 = (inst_61503 + (1));
var tmp61557 = inst_61501;
var tmp61558 = inst_61500;
var tmp61559 = inst_61502;
var inst_61500__$1 = tmp61558;
var inst_61501__$1 = tmp61557;
var inst_61502__$1 = tmp61559;
var inst_61503__$1 = inst_61511;
var state_61548__$1 = (function (){var statearr_61562 = state_61548;
(statearr_61562[(14)] = inst_61510);

(statearr_61562[(9)] = inst_61503__$1);

(statearr_61562[(10)] = inst_61501__$1);

(statearr_61562[(11)] = inst_61500__$1);

(statearr_61562[(12)] = inst_61502__$1);

return statearr_61562;
})();
var statearr_61563_61595 = state_61548__$1;
(statearr_61563_61595[(2)] = null);

(statearr_61563_61595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (22))){
var state_61548__$1 = state_61548;
var statearr_61564_61596 = state_61548__$1;
(statearr_61564_61596[(2)] = null);

(statearr_61564_61596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (6))){
var inst_61489 = (state_61548[(13)]);
var inst_61498 = f.call(null,inst_61489);
var inst_61499 = cljs.core.seq.call(null,inst_61498);
var inst_61500 = inst_61499;
var inst_61501 = null;
var inst_61502 = (0);
var inst_61503 = (0);
var state_61548__$1 = (function (){var statearr_61565 = state_61548;
(statearr_61565[(9)] = inst_61503);

(statearr_61565[(10)] = inst_61501);

(statearr_61565[(11)] = inst_61500);

(statearr_61565[(12)] = inst_61502);

return statearr_61565;
})();
var statearr_61566_61597 = state_61548__$1;
(statearr_61566_61597[(2)] = null);

(statearr_61566_61597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (17))){
var inst_61514 = (state_61548[(7)]);
var inst_61518 = cljs.core.chunk_first.call(null,inst_61514);
var inst_61519 = cljs.core.chunk_rest.call(null,inst_61514);
var inst_61520 = cljs.core.count.call(null,inst_61518);
var inst_61500 = inst_61519;
var inst_61501 = inst_61518;
var inst_61502 = inst_61520;
var inst_61503 = (0);
var state_61548__$1 = (function (){var statearr_61567 = state_61548;
(statearr_61567[(9)] = inst_61503);

(statearr_61567[(10)] = inst_61501);

(statearr_61567[(11)] = inst_61500);

(statearr_61567[(12)] = inst_61502);

return statearr_61567;
})();
var statearr_61568_61598 = state_61548__$1;
(statearr_61568_61598[(2)] = null);

(statearr_61568_61598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (3))){
var inst_61546 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61548__$1,inst_61546);
} else {
if((state_val_61549 === (12))){
var inst_61534 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
var statearr_61569_61599 = state_61548__$1;
(statearr_61569_61599[(2)] = inst_61534);

(statearr_61569_61599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (2))){
var state_61548__$1 = state_61548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61548__$1,(4),in$);
} else {
if((state_val_61549 === (23))){
var inst_61542 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
var statearr_61570_61600 = state_61548__$1;
(statearr_61570_61600[(2)] = inst_61542);

(statearr_61570_61600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (19))){
var inst_61529 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
var statearr_61571_61601 = state_61548__$1;
(statearr_61571_61601[(2)] = inst_61529);

(statearr_61571_61601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (11))){
var inst_61500 = (state_61548[(11)]);
var inst_61514 = (state_61548[(7)]);
var inst_61514__$1 = cljs.core.seq.call(null,inst_61500);
var state_61548__$1 = (function (){var statearr_61572 = state_61548;
(statearr_61572[(7)] = inst_61514__$1);

return statearr_61572;
})();
if(inst_61514__$1){
var statearr_61573_61602 = state_61548__$1;
(statearr_61573_61602[(1)] = (14));

} else {
var statearr_61574_61603 = state_61548__$1;
(statearr_61574_61603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (9))){
var inst_61536 = (state_61548[(2)]);
var inst_61537 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61548__$1 = (function (){var statearr_61575 = state_61548;
(statearr_61575[(15)] = inst_61536);

return statearr_61575;
})();
if(cljs.core.truth_(inst_61537)){
var statearr_61576_61604 = state_61548__$1;
(statearr_61576_61604[(1)] = (21));

} else {
var statearr_61577_61605 = state_61548__$1;
(statearr_61577_61605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (5))){
var inst_61492 = cljs.core.async.close_BANG_.call(null,out);
var state_61548__$1 = state_61548;
var statearr_61578_61606 = state_61548__$1;
(statearr_61578_61606[(2)] = inst_61492);

(statearr_61578_61606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (14))){
var inst_61514 = (state_61548[(7)]);
var inst_61516 = cljs.core.chunked_seq_QMARK_.call(null,inst_61514);
var state_61548__$1 = state_61548;
if(inst_61516){
var statearr_61579_61607 = state_61548__$1;
(statearr_61579_61607[(1)] = (17));

} else {
var statearr_61580_61608 = state_61548__$1;
(statearr_61580_61608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (16))){
var inst_61532 = (state_61548[(2)]);
var state_61548__$1 = state_61548;
var statearr_61581_61609 = state_61548__$1;
(statearr_61581_61609[(2)] = inst_61532);

(statearr_61581_61609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61549 === (10))){
var inst_61503 = (state_61548[(9)]);
var inst_61501 = (state_61548[(10)]);
var inst_61508 = cljs.core._nth.call(null,inst_61501,inst_61503);
var state_61548__$1 = state_61548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61548__$1,(13),out,inst_61508);
} else {
if((state_val_61549 === (18))){
var inst_61514 = (state_61548[(7)]);
var inst_61523 = cljs.core.first.call(null,inst_61514);
var state_61548__$1 = state_61548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61548__$1,(20),out,inst_61523);
} else {
if((state_val_61549 === (8))){
var inst_61503 = (state_61548[(9)]);
var inst_61502 = (state_61548[(12)]);
var inst_61505 = (inst_61503 < inst_61502);
var inst_61506 = inst_61505;
var state_61548__$1 = state_61548;
if(cljs.core.truth_(inst_61506)){
var statearr_61582_61610 = state_61548__$1;
(statearr_61582_61610[(1)] = (10));

} else {
var statearr_61583_61611 = state_61548__$1;
(statearr_61583_61611[(1)] = (11));

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
});})(c__24101__auto__))
;
return ((function (switch__24006__auto__,c__24101__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____0 = (function (){
var statearr_61584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61584[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__);

(statearr_61584[(1)] = (1));

return statearr_61584;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____1 = (function (state_61548){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61585){if((e61585 instanceof Object)){
var ex__24010__auto__ = e61585;
var statearr_61586_61612 = state_61548;
(statearr_61586_61612[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61613 = state_61548;
state_61548 = G__61613;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__ = function(state_61548){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____1.call(this,state_61548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24007__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto__))
})();
var state__24103__auto__ = (function (){var statearr_61587 = f__24102__auto__.call(null);
(statearr_61587[(6)] = c__24101__auto__);

return statearr_61587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto__))
);

return c__24101__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__61615 = arguments.length;
switch (G__61615) {
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
var G__61618 = arguments.length;
switch (G__61618) {
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
var G__61621 = arguments.length;
switch (G__61621) {
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
var c__24101__auto___61668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61668,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61668,out){
return (function (state_61645){
var state_val_61646 = (state_61645[(1)]);
if((state_val_61646 === (7))){
var inst_61640 = (state_61645[(2)]);
var state_61645__$1 = state_61645;
var statearr_61647_61669 = state_61645__$1;
(statearr_61647_61669[(2)] = inst_61640);

(statearr_61647_61669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (1))){
var inst_61622 = null;
var state_61645__$1 = (function (){var statearr_61648 = state_61645;
(statearr_61648[(7)] = inst_61622);

return statearr_61648;
})();
var statearr_61649_61670 = state_61645__$1;
(statearr_61649_61670[(2)] = null);

(statearr_61649_61670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (4))){
var inst_61625 = (state_61645[(8)]);
var inst_61625__$1 = (state_61645[(2)]);
var inst_61626 = (inst_61625__$1 == null);
var inst_61627 = cljs.core.not.call(null,inst_61626);
var state_61645__$1 = (function (){var statearr_61650 = state_61645;
(statearr_61650[(8)] = inst_61625__$1);

return statearr_61650;
})();
if(inst_61627){
var statearr_61651_61671 = state_61645__$1;
(statearr_61651_61671[(1)] = (5));

} else {
var statearr_61652_61672 = state_61645__$1;
(statearr_61652_61672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (6))){
var state_61645__$1 = state_61645;
var statearr_61653_61673 = state_61645__$1;
(statearr_61653_61673[(2)] = null);

(statearr_61653_61673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (3))){
var inst_61642 = (state_61645[(2)]);
var inst_61643 = cljs.core.async.close_BANG_.call(null,out);
var state_61645__$1 = (function (){var statearr_61654 = state_61645;
(statearr_61654[(9)] = inst_61642);

return statearr_61654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61645__$1,inst_61643);
} else {
if((state_val_61646 === (2))){
var state_61645__$1 = state_61645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61645__$1,(4),ch);
} else {
if((state_val_61646 === (11))){
var inst_61625 = (state_61645[(8)]);
var inst_61634 = (state_61645[(2)]);
var inst_61622 = inst_61625;
var state_61645__$1 = (function (){var statearr_61655 = state_61645;
(statearr_61655[(7)] = inst_61622);

(statearr_61655[(10)] = inst_61634);

return statearr_61655;
})();
var statearr_61656_61674 = state_61645__$1;
(statearr_61656_61674[(2)] = null);

(statearr_61656_61674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (9))){
var inst_61625 = (state_61645[(8)]);
var state_61645__$1 = state_61645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61645__$1,(11),out,inst_61625);
} else {
if((state_val_61646 === (5))){
var inst_61625 = (state_61645[(8)]);
var inst_61622 = (state_61645[(7)]);
var inst_61629 = cljs.core._EQ_.call(null,inst_61625,inst_61622);
var state_61645__$1 = state_61645;
if(inst_61629){
var statearr_61658_61675 = state_61645__$1;
(statearr_61658_61675[(1)] = (8));

} else {
var statearr_61659_61676 = state_61645__$1;
(statearr_61659_61676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (10))){
var inst_61637 = (state_61645[(2)]);
var state_61645__$1 = state_61645;
var statearr_61660_61677 = state_61645__$1;
(statearr_61660_61677[(2)] = inst_61637);

(statearr_61660_61677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61646 === (8))){
var inst_61622 = (state_61645[(7)]);
var tmp61657 = inst_61622;
var inst_61622__$1 = tmp61657;
var state_61645__$1 = (function (){var statearr_61661 = state_61645;
(statearr_61661[(7)] = inst_61622__$1);

return statearr_61661;
})();
var statearr_61662_61678 = state_61645__$1;
(statearr_61662_61678[(2)] = null);

(statearr_61662_61678[(1)] = (2));


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
});})(c__24101__auto___61668,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61668,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61663[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61663[(1)] = (1));

return statearr_61663;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61645){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61664){if((e61664 instanceof Object)){
var ex__24010__auto__ = e61664;
var statearr_61665_61679 = state_61645;
(statearr_61665_61679[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61680 = state_61645;
state_61645 = G__61680;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61668,out))
})();
var state__24103__auto__ = (function (){var statearr_61666 = f__24102__auto__.call(null);
(statearr_61666[(6)] = c__24101__auto___61668);

return statearr_61666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61668,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__61682 = arguments.length;
switch (G__61682) {
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
var c__24101__auto___61748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61748,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61748,out){
return (function (state_61720){
var state_val_61721 = (state_61720[(1)]);
if((state_val_61721 === (7))){
var inst_61716 = (state_61720[(2)]);
var state_61720__$1 = state_61720;
var statearr_61722_61749 = state_61720__$1;
(statearr_61722_61749[(2)] = inst_61716);

(statearr_61722_61749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (1))){
var inst_61683 = (new Array(n));
var inst_61684 = inst_61683;
var inst_61685 = (0);
var state_61720__$1 = (function (){var statearr_61723 = state_61720;
(statearr_61723[(7)] = inst_61685);

(statearr_61723[(8)] = inst_61684);

return statearr_61723;
})();
var statearr_61724_61750 = state_61720__$1;
(statearr_61724_61750[(2)] = null);

(statearr_61724_61750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (4))){
var inst_61688 = (state_61720[(9)]);
var inst_61688__$1 = (state_61720[(2)]);
var inst_61689 = (inst_61688__$1 == null);
var inst_61690 = cljs.core.not.call(null,inst_61689);
var state_61720__$1 = (function (){var statearr_61725 = state_61720;
(statearr_61725[(9)] = inst_61688__$1);

return statearr_61725;
})();
if(inst_61690){
var statearr_61726_61751 = state_61720__$1;
(statearr_61726_61751[(1)] = (5));

} else {
var statearr_61727_61752 = state_61720__$1;
(statearr_61727_61752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (15))){
var inst_61710 = (state_61720[(2)]);
var state_61720__$1 = state_61720;
var statearr_61728_61753 = state_61720__$1;
(statearr_61728_61753[(2)] = inst_61710);

(statearr_61728_61753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (13))){
var state_61720__$1 = state_61720;
var statearr_61729_61754 = state_61720__$1;
(statearr_61729_61754[(2)] = null);

(statearr_61729_61754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (6))){
var inst_61685 = (state_61720[(7)]);
var inst_61706 = (inst_61685 > (0));
var state_61720__$1 = state_61720;
if(cljs.core.truth_(inst_61706)){
var statearr_61730_61755 = state_61720__$1;
(statearr_61730_61755[(1)] = (12));

} else {
var statearr_61731_61756 = state_61720__$1;
(statearr_61731_61756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (3))){
var inst_61718 = (state_61720[(2)]);
var state_61720__$1 = state_61720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61720__$1,inst_61718);
} else {
if((state_val_61721 === (12))){
var inst_61684 = (state_61720[(8)]);
var inst_61708 = cljs.core.vec.call(null,inst_61684);
var state_61720__$1 = state_61720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61720__$1,(15),out,inst_61708);
} else {
if((state_val_61721 === (2))){
var state_61720__$1 = state_61720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61720__$1,(4),ch);
} else {
if((state_val_61721 === (11))){
var inst_61700 = (state_61720[(2)]);
var inst_61701 = (new Array(n));
var inst_61684 = inst_61701;
var inst_61685 = (0);
var state_61720__$1 = (function (){var statearr_61732 = state_61720;
(statearr_61732[(10)] = inst_61700);

(statearr_61732[(7)] = inst_61685);

(statearr_61732[(8)] = inst_61684);

return statearr_61732;
})();
var statearr_61733_61757 = state_61720__$1;
(statearr_61733_61757[(2)] = null);

(statearr_61733_61757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (9))){
var inst_61684 = (state_61720[(8)]);
var inst_61698 = cljs.core.vec.call(null,inst_61684);
var state_61720__$1 = state_61720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61720__$1,(11),out,inst_61698);
} else {
if((state_val_61721 === (5))){
var inst_61685 = (state_61720[(7)]);
var inst_61693 = (state_61720[(11)]);
var inst_61688 = (state_61720[(9)]);
var inst_61684 = (state_61720[(8)]);
var inst_61692 = (inst_61684[inst_61685] = inst_61688);
var inst_61693__$1 = (inst_61685 + (1));
var inst_61694 = (inst_61693__$1 < n);
var state_61720__$1 = (function (){var statearr_61734 = state_61720;
(statearr_61734[(11)] = inst_61693__$1);

(statearr_61734[(12)] = inst_61692);

return statearr_61734;
})();
if(cljs.core.truth_(inst_61694)){
var statearr_61735_61758 = state_61720__$1;
(statearr_61735_61758[(1)] = (8));

} else {
var statearr_61736_61759 = state_61720__$1;
(statearr_61736_61759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (14))){
var inst_61713 = (state_61720[(2)]);
var inst_61714 = cljs.core.async.close_BANG_.call(null,out);
var state_61720__$1 = (function (){var statearr_61738 = state_61720;
(statearr_61738[(13)] = inst_61713);

return statearr_61738;
})();
var statearr_61739_61760 = state_61720__$1;
(statearr_61739_61760[(2)] = inst_61714);

(statearr_61739_61760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (10))){
var inst_61704 = (state_61720[(2)]);
var state_61720__$1 = state_61720;
var statearr_61740_61761 = state_61720__$1;
(statearr_61740_61761[(2)] = inst_61704);

(statearr_61740_61761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61721 === (8))){
var inst_61693 = (state_61720[(11)]);
var inst_61684 = (state_61720[(8)]);
var tmp61737 = inst_61684;
var inst_61684__$1 = tmp61737;
var inst_61685 = inst_61693;
var state_61720__$1 = (function (){var statearr_61741 = state_61720;
(statearr_61741[(7)] = inst_61685);

(statearr_61741[(8)] = inst_61684__$1);

return statearr_61741;
})();
var statearr_61742_61762 = state_61720__$1;
(statearr_61742_61762[(2)] = null);

(statearr_61742_61762[(1)] = (2));


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
});})(c__24101__auto___61748,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61748,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61743[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61743[(1)] = (1));

return statearr_61743;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61720){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61744){if((e61744 instanceof Object)){
var ex__24010__auto__ = e61744;
var statearr_61745_61763 = state_61720;
(statearr_61745_61763[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61764 = state_61720;
state_61720 = G__61764;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61748,out))
})();
var state__24103__auto__ = (function (){var statearr_61746 = f__24102__auto__.call(null);
(statearr_61746[(6)] = c__24101__auto___61748);

return statearr_61746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61748,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__61766 = arguments.length;
switch (G__61766) {
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
var c__24101__auto___61836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24101__auto___61836,out){
return (function (){
var f__24102__auto__ = (function (){var switch__24006__auto__ = ((function (c__24101__auto___61836,out){
return (function (state_61808){
var state_val_61809 = (state_61808[(1)]);
if((state_val_61809 === (7))){
var inst_61804 = (state_61808[(2)]);
var state_61808__$1 = state_61808;
var statearr_61810_61837 = state_61808__$1;
(statearr_61810_61837[(2)] = inst_61804);

(statearr_61810_61837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (1))){
var inst_61767 = [];
var inst_61768 = inst_61767;
var inst_61769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61808__$1 = (function (){var statearr_61811 = state_61808;
(statearr_61811[(7)] = inst_61768);

(statearr_61811[(8)] = inst_61769);

return statearr_61811;
})();
var statearr_61812_61838 = state_61808__$1;
(statearr_61812_61838[(2)] = null);

(statearr_61812_61838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (4))){
var inst_61772 = (state_61808[(9)]);
var inst_61772__$1 = (state_61808[(2)]);
var inst_61773 = (inst_61772__$1 == null);
var inst_61774 = cljs.core.not.call(null,inst_61773);
var state_61808__$1 = (function (){var statearr_61813 = state_61808;
(statearr_61813[(9)] = inst_61772__$1);

return statearr_61813;
})();
if(inst_61774){
var statearr_61814_61839 = state_61808__$1;
(statearr_61814_61839[(1)] = (5));

} else {
var statearr_61815_61840 = state_61808__$1;
(statearr_61815_61840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (15))){
var inst_61798 = (state_61808[(2)]);
var state_61808__$1 = state_61808;
var statearr_61816_61841 = state_61808__$1;
(statearr_61816_61841[(2)] = inst_61798);

(statearr_61816_61841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (13))){
var state_61808__$1 = state_61808;
var statearr_61817_61842 = state_61808__$1;
(statearr_61817_61842[(2)] = null);

(statearr_61817_61842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (6))){
var inst_61768 = (state_61808[(7)]);
var inst_61793 = inst_61768.length;
var inst_61794 = (inst_61793 > (0));
var state_61808__$1 = state_61808;
if(cljs.core.truth_(inst_61794)){
var statearr_61818_61843 = state_61808__$1;
(statearr_61818_61843[(1)] = (12));

} else {
var statearr_61819_61844 = state_61808__$1;
(statearr_61819_61844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (3))){
var inst_61806 = (state_61808[(2)]);
var state_61808__$1 = state_61808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61808__$1,inst_61806);
} else {
if((state_val_61809 === (12))){
var inst_61768 = (state_61808[(7)]);
var inst_61796 = cljs.core.vec.call(null,inst_61768);
var state_61808__$1 = state_61808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61808__$1,(15),out,inst_61796);
} else {
if((state_val_61809 === (2))){
var state_61808__$1 = state_61808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61808__$1,(4),ch);
} else {
if((state_val_61809 === (11))){
var inst_61772 = (state_61808[(9)]);
var inst_61776 = (state_61808[(10)]);
var inst_61786 = (state_61808[(2)]);
var inst_61787 = [];
var inst_61788 = inst_61787.push(inst_61772);
var inst_61768 = inst_61787;
var inst_61769 = inst_61776;
var state_61808__$1 = (function (){var statearr_61820 = state_61808;
(statearr_61820[(11)] = inst_61786);

(statearr_61820[(7)] = inst_61768);

(statearr_61820[(12)] = inst_61788);

(statearr_61820[(8)] = inst_61769);

return statearr_61820;
})();
var statearr_61821_61845 = state_61808__$1;
(statearr_61821_61845[(2)] = null);

(statearr_61821_61845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (9))){
var inst_61768 = (state_61808[(7)]);
var inst_61784 = cljs.core.vec.call(null,inst_61768);
var state_61808__$1 = state_61808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61808__$1,(11),out,inst_61784);
} else {
if((state_val_61809 === (5))){
var inst_61772 = (state_61808[(9)]);
var inst_61776 = (state_61808[(10)]);
var inst_61769 = (state_61808[(8)]);
var inst_61776__$1 = f.call(null,inst_61772);
var inst_61777 = cljs.core._EQ_.call(null,inst_61776__$1,inst_61769);
var inst_61778 = cljs.core.keyword_identical_QMARK_.call(null,inst_61769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_61779 = ((inst_61777) || (inst_61778));
var state_61808__$1 = (function (){var statearr_61822 = state_61808;
(statearr_61822[(10)] = inst_61776__$1);

return statearr_61822;
})();
if(cljs.core.truth_(inst_61779)){
var statearr_61823_61846 = state_61808__$1;
(statearr_61823_61846[(1)] = (8));

} else {
var statearr_61824_61847 = state_61808__$1;
(statearr_61824_61847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (14))){
var inst_61801 = (state_61808[(2)]);
var inst_61802 = cljs.core.async.close_BANG_.call(null,out);
var state_61808__$1 = (function (){var statearr_61826 = state_61808;
(statearr_61826[(13)] = inst_61801);

return statearr_61826;
})();
var statearr_61827_61848 = state_61808__$1;
(statearr_61827_61848[(2)] = inst_61802);

(statearr_61827_61848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (10))){
var inst_61791 = (state_61808[(2)]);
var state_61808__$1 = state_61808;
var statearr_61828_61849 = state_61808__$1;
(statearr_61828_61849[(2)] = inst_61791);

(statearr_61828_61849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61809 === (8))){
var inst_61772 = (state_61808[(9)]);
var inst_61768 = (state_61808[(7)]);
var inst_61776 = (state_61808[(10)]);
var inst_61781 = inst_61768.push(inst_61772);
var tmp61825 = inst_61768;
var inst_61768__$1 = tmp61825;
var inst_61769 = inst_61776;
var state_61808__$1 = (function (){var statearr_61829 = state_61808;
(statearr_61829[(7)] = inst_61768__$1);

(statearr_61829[(14)] = inst_61781);

(statearr_61829[(8)] = inst_61769);

return statearr_61829;
})();
var statearr_61830_61850 = state_61808__$1;
(statearr_61830_61850[(2)] = null);

(statearr_61830_61850[(1)] = (2));


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
});})(c__24101__auto___61836,out))
;
return ((function (switch__24006__auto__,c__24101__auto___61836,out){
return (function() {
var cljs$core$async$state_machine__24007__auto__ = null;
var cljs$core$async$state_machine__24007__auto____0 = (function (){
var statearr_61831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61831[(0)] = cljs$core$async$state_machine__24007__auto__);

(statearr_61831[(1)] = (1));

return statearr_61831;
});
var cljs$core$async$state_machine__24007__auto____1 = (function (state_61808){
while(true){
var ret_value__24008__auto__ = (function (){try{while(true){
var result__24009__auto__ = switch__24006__auto__.call(null,state_61808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24009__auto__;
}
break;
}
}catch (e61832){if((e61832 instanceof Object)){
var ex__24010__auto__ = e61832;
var statearr_61833_61851 = state_61808;
(statearr_61833_61851[(5)] = ex__24010__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61852 = state_61808;
state_61808 = G__61852;
continue;
} else {
return ret_value__24008__auto__;
}
break;
}
});
cljs$core$async$state_machine__24007__auto__ = function(state_61808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24007__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24007__auto____1.call(this,state_61808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24007__auto____0;
cljs$core$async$state_machine__24007__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24007__auto____1;
return cljs$core$async$state_machine__24007__auto__;
})()
;})(switch__24006__auto__,c__24101__auto___61836,out))
})();
var state__24103__auto__ = (function (){var statearr_61834 = f__24102__auto__.call(null);
(statearr_61834[(6)] = c__24101__auto___61836);

return statearr_61834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24103__auto__);
});})(c__24101__auto___61836,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581380910428
