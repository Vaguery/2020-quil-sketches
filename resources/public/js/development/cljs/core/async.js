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
var G__43831 = arguments.length;
switch (G__43831) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43832 = (function (f,blockable,meta43833){
this.f = f;
this.blockable = blockable;
this.meta43833 = meta43833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43834,meta43833__$1){
var self__ = this;
var _43834__$1 = this;
return (new cljs.core.async.t_cljs$core$async43832(self__.f,self__.blockable,meta43833__$1));
});

cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43834){
var self__ = this;
var _43834__$1 = this;
return self__.meta43833;
});

cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43833","meta43833",-1909163034,null)], null);
});

cljs.core.async.t_cljs$core$async43832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43832";

cljs.core.async.t_cljs$core$async43832.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43832");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43832.
 */
cljs.core.async.__GT_t_cljs$core$async43832 = (function cljs$core$async$__GT_t_cljs$core$async43832(f__$1,blockable__$1,meta43833){
return (new cljs.core.async.t_cljs$core$async43832(f__$1,blockable__$1,meta43833));
});

}

return (new cljs.core.async.t_cljs$core$async43832(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43838 = arguments.length;
switch (G__43838) {
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
var G__43841 = arguments.length;
switch (G__43841) {
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
var G__43844 = arguments.length;
switch (G__43844) {
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
var val_43846 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43846);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43846,ret){
return (function (){
return fn1.call(null,val_43846);
});})(val_43846,ret))
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
var G__43848 = arguments.length;
switch (G__43848) {
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
var n__4607__auto___43850 = n;
var x_43851 = (0);
while(true){
if((x_43851 < n__4607__auto___43850)){
(a[x_43851] = (0));

var G__43852 = (x_43851 + (1));
x_43851 = G__43852;
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

var G__43853 = (i + (1));
i = G__43853;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43854 = (function (flag,meta43855){
this.flag = flag;
this.meta43855 = meta43855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43856,meta43855__$1){
var self__ = this;
var _43856__$1 = this;
return (new cljs.core.async.t_cljs$core$async43854(self__.flag,meta43855__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43856){
var self__ = this;
var _43856__$1 = this;
return self__.meta43855;
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43855","meta43855",2033285205,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43854";

cljs.core.async.t_cljs$core$async43854.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43854");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43854.
 */
cljs.core.async.__GT_t_cljs$core$async43854 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43854(flag__$1,meta43855){
return (new cljs.core.async.t_cljs$core$async43854(flag__$1,meta43855));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43854(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43857 = (function (flag,cb,meta43858){
this.flag = flag;
this.cb = cb;
this.meta43858 = meta43858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43859,meta43858__$1){
var self__ = this;
var _43859__$1 = this;
return (new cljs.core.async.t_cljs$core$async43857(self__.flag,self__.cb,meta43858__$1));
});

cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43859){
var self__ = this;
var _43859__$1 = this;
return self__.meta43858;
});

cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43858","meta43858",-190711075,null)], null);
});

cljs.core.async.t_cljs$core$async43857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43857";

cljs.core.async.t_cljs$core$async43857.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43857");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43857.
 */
cljs.core.async.__GT_t_cljs$core$async43857 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43857(flag__$1,cb__$1,meta43858){
return (new cljs.core.async.t_cljs$core$async43857(flag__$1,cb__$1,meta43858));
});

}

return (new cljs.core.async.t_cljs$core$async43857(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43860_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43860_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43861_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43861_SHARP_,port], null));
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
var G__43862 = (i + (1));
i = G__43862;
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
var len__4730__auto___43868 = arguments.length;
var i__4731__auto___43869 = (0);
while(true){
if((i__4731__auto___43869 < len__4730__auto___43868)){
args__4736__auto__.push((arguments[i__4731__auto___43869]));

var G__43870 = (i__4731__auto___43869 + (1));
i__4731__auto___43869 = G__43870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43865){
var map__43866 = p__43865;
var map__43866__$1 = (((((!((map__43866 == null))))?(((((map__43866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43866):map__43866);
var opts = map__43866__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43863){
var G__43864 = cljs.core.first.call(null,seq43863);
var seq43863__$1 = cljs.core.next.call(null,seq43863);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43864,seq43863__$1);
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
var G__43872 = arguments.length;
switch (G__43872) {
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
var c__29333__auto___43918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___43918){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___43918){
return (function (state_43896){
var state_val_43897 = (state_43896[(1)]);
if((state_val_43897 === (7))){
var inst_43892 = (state_43896[(2)]);
var state_43896__$1 = state_43896;
var statearr_43898_43919 = state_43896__$1;
(statearr_43898_43919[(2)] = inst_43892);

(statearr_43898_43919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (1))){
var state_43896__$1 = state_43896;
var statearr_43899_43920 = state_43896__$1;
(statearr_43899_43920[(2)] = null);

(statearr_43899_43920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (4))){
var inst_43875 = (state_43896[(7)]);
var inst_43875__$1 = (state_43896[(2)]);
var inst_43876 = (inst_43875__$1 == null);
var state_43896__$1 = (function (){var statearr_43900 = state_43896;
(statearr_43900[(7)] = inst_43875__$1);

return statearr_43900;
})();
if(cljs.core.truth_(inst_43876)){
var statearr_43901_43921 = state_43896__$1;
(statearr_43901_43921[(1)] = (5));

} else {
var statearr_43902_43922 = state_43896__$1;
(statearr_43902_43922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (13))){
var state_43896__$1 = state_43896;
var statearr_43903_43923 = state_43896__$1;
(statearr_43903_43923[(2)] = null);

(statearr_43903_43923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (6))){
var inst_43875 = (state_43896[(7)]);
var state_43896__$1 = state_43896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43896__$1,(11),to,inst_43875);
} else {
if((state_val_43897 === (3))){
var inst_43894 = (state_43896[(2)]);
var state_43896__$1 = state_43896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43896__$1,inst_43894);
} else {
if((state_val_43897 === (12))){
var state_43896__$1 = state_43896;
var statearr_43904_43924 = state_43896__$1;
(statearr_43904_43924[(2)] = null);

(statearr_43904_43924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (2))){
var state_43896__$1 = state_43896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43896__$1,(4),from);
} else {
if((state_val_43897 === (11))){
var inst_43885 = (state_43896[(2)]);
var state_43896__$1 = state_43896;
if(cljs.core.truth_(inst_43885)){
var statearr_43905_43925 = state_43896__$1;
(statearr_43905_43925[(1)] = (12));

} else {
var statearr_43906_43926 = state_43896__$1;
(statearr_43906_43926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (9))){
var state_43896__$1 = state_43896;
var statearr_43907_43927 = state_43896__$1;
(statearr_43907_43927[(2)] = null);

(statearr_43907_43927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (5))){
var state_43896__$1 = state_43896;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43908_43928 = state_43896__$1;
(statearr_43908_43928[(1)] = (8));

} else {
var statearr_43909_43929 = state_43896__$1;
(statearr_43909_43929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (14))){
var inst_43890 = (state_43896[(2)]);
var state_43896__$1 = state_43896;
var statearr_43910_43930 = state_43896__$1;
(statearr_43910_43930[(2)] = inst_43890);

(statearr_43910_43930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (10))){
var inst_43882 = (state_43896[(2)]);
var state_43896__$1 = state_43896;
var statearr_43911_43931 = state_43896__$1;
(statearr_43911_43931[(2)] = inst_43882);

(statearr_43911_43931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43897 === (8))){
var inst_43879 = cljs.core.async.close_BANG_.call(null,to);
var state_43896__$1 = state_43896;
var statearr_43912_43932 = state_43896__$1;
(statearr_43912_43932[(2)] = inst_43879);

(statearr_43912_43932[(1)] = (10));


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
});})(c__29333__auto___43918))
;
return ((function (switch__29238__auto__,c__29333__auto___43918){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_43913 = [null,null,null,null,null,null,null,null];
(statearr_43913[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_43913[(1)] = (1));

return statearr_43913;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_43896){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_43896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e43914){if((e43914 instanceof Object)){
var ex__29242__auto__ = e43914;
var statearr_43915_43933 = state_43896;
(statearr_43915_43933[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43934 = state_43896;
state_43896 = G__43934;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_43896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_43896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___43918))
})();
var state__29335__auto__ = (function (){var statearr_43916 = f__29334__auto__.call(null);
(statearr_43916[(6)] = c__29333__auto___43918);

return statearr_43916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___43918))
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
return (function (p__43935){
var vec__43936 = p__43935;
var v = cljs.core.nth.call(null,vec__43936,(0),null);
var p = cljs.core.nth.call(null,vec__43936,(1),null);
var job = vec__43936;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29333__auto___44107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results){
return (function (state_43943){
var state_val_43944 = (state_43943[(1)]);
if((state_val_43944 === (1))){
var state_43943__$1 = state_43943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43943__$1,(2),res,v);
} else {
if((state_val_43944 === (2))){
var inst_43940 = (state_43943[(2)]);
var inst_43941 = cljs.core.async.close_BANG_.call(null,res);
var state_43943__$1 = (function (){var statearr_43945 = state_43943;
(statearr_43945[(7)] = inst_43940);

return statearr_43945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43943__$1,inst_43941);
} else {
return null;
}
}
});})(c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results))
;
return ((function (switch__29238__auto__,c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_43946 = [null,null,null,null,null,null,null,null];
(statearr_43946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__);

(statearr_43946[(1)] = (1));

return statearr_43946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1 = (function (state_43943){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_43943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e43947){if((e43947 instanceof Object)){
var ex__29242__auto__ = e43947;
var statearr_43948_44108 = state_43943;
(statearr_43948_44108[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44109 = state_43943;
state_43943 = G__44109;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = function(state_43943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1.call(this,state_43943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results))
})();
var state__29335__auto__ = (function (){var statearr_43949 = f__29334__auto__.call(null);
(statearr_43949[(6)] = c__29333__auto___44107);

return statearr_43949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___44107,res,vec__43936,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43950){
var vec__43951 = p__43950;
var v = cljs.core.nth.call(null,vec__43951,(0),null);
var p = cljs.core.nth.call(null,vec__43951,(1),null);
var job = vec__43951;
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
var n__4607__auto___44110 = n;
var __44111 = (0);
while(true){
if((__44111 < n__4607__auto___44110)){
var G__43954_44112 = type;
var G__43954_44113__$1 = (((G__43954_44112 instanceof cljs.core.Keyword))?G__43954_44112.fqn:null);
switch (G__43954_44113__$1) {
case "compute":
var c__29333__auto___44115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44111,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (__44111,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function (state_43967){
var state_val_43968 = (state_43967[(1)]);
if((state_val_43968 === (1))){
var state_43967__$1 = state_43967;
var statearr_43969_44116 = state_43967__$1;
(statearr_43969_44116[(2)] = null);

(statearr_43969_44116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43968 === (2))){
var state_43967__$1 = state_43967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43967__$1,(4),jobs);
} else {
if((state_val_43968 === (3))){
var inst_43965 = (state_43967[(2)]);
var state_43967__$1 = state_43967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43967__$1,inst_43965);
} else {
if((state_val_43968 === (4))){
var inst_43957 = (state_43967[(2)]);
var inst_43958 = process.call(null,inst_43957);
var state_43967__$1 = state_43967;
if(cljs.core.truth_(inst_43958)){
var statearr_43970_44117 = state_43967__$1;
(statearr_43970_44117[(1)] = (5));

} else {
var statearr_43971_44118 = state_43967__$1;
(statearr_43971_44118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43968 === (5))){
var state_43967__$1 = state_43967;
var statearr_43972_44119 = state_43967__$1;
(statearr_43972_44119[(2)] = null);

(statearr_43972_44119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43968 === (6))){
var state_43967__$1 = state_43967;
var statearr_43973_44120 = state_43967__$1;
(statearr_43973_44120[(2)] = null);

(statearr_43973_44120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43968 === (7))){
var inst_43963 = (state_43967[(2)]);
var state_43967__$1 = state_43967;
var statearr_43974_44121 = state_43967__$1;
(statearr_43974_44121[(2)] = inst_43963);

(statearr_43974_44121[(1)] = (3));


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
});})(__44111,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
;
return ((function (__44111,switch__29238__auto__,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_43975 = [null,null,null,null,null,null,null];
(statearr_43975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__);

(statearr_43975[(1)] = (1));

return statearr_43975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1 = (function (state_43967){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_43967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e43976){if((e43976 instanceof Object)){
var ex__29242__auto__ = e43976;
var statearr_43977_44122 = state_43967;
(statearr_43977_44122[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44123 = state_43967;
state_43967 = G__44123;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = function(state_43967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1.call(this,state_43967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__;
})()
;})(__44111,switch__29238__auto__,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
})();
var state__29335__auto__ = (function (){var statearr_43978 = f__29334__auto__.call(null);
(statearr_43978[(6)] = c__29333__auto___44115);

return statearr_43978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(__44111,c__29333__auto___44115,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
);


break;
case "async":
var c__29333__auto___44124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44111,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (__44111,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function (state_43991){
var state_val_43992 = (state_43991[(1)]);
if((state_val_43992 === (1))){
var state_43991__$1 = state_43991;
var statearr_43993_44125 = state_43991__$1;
(statearr_43993_44125[(2)] = null);

(statearr_43993_44125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43992 === (2))){
var state_43991__$1 = state_43991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43991__$1,(4),jobs);
} else {
if((state_val_43992 === (3))){
var inst_43989 = (state_43991[(2)]);
var state_43991__$1 = state_43991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43991__$1,inst_43989);
} else {
if((state_val_43992 === (4))){
var inst_43981 = (state_43991[(2)]);
var inst_43982 = async.call(null,inst_43981);
var state_43991__$1 = state_43991;
if(cljs.core.truth_(inst_43982)){
var statearr_43994_44126 = state_43991__$1;
(statearr_43994_44126[(1)] = (5));

} else {
var statearr_43995_44127 = state_43991__$1;
(statearr_43995_44127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43992 === (5))){
var state_43991__$1 = state_43991;
var statearr_43996_44128 = state_43991__$1;
(statearr_43996_44128[(2)] = null);

(statearr_43996_44128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43992 === (6))){
var state_43991__$1 = state_43991;
var statearr_43997_44129 = state_43991__$1;
(statearr_43997_44129[(2)] = null);

(statearr_43997_44129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43992 === (7))){
var inst_43987 = (state_43991[(2)]);
var state_43991__$1 = state_43991;
var statearr_43998_44130 = state_43991__$1;
(statearr_43998_44130[(2)] = inst_43987);

(statearr_43998_44130[(1)] = (3));


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
});})(__44111,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
;
return ((function (__44111,switch__29238__auto__,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_43999 = [null,null,null,null,null,null,null];
(statearr_43999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__);

(statearr_43999[(1)] = (1));

return statearr_43999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1 = (function (state_43991){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_43991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44000){if((e44000 instanceof Object)){
var ex__29242__auto__ = e44000;
var statearr_44001_44131 = state_43991;
(statearr_44001_44131[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44132 = state_43991;
state_43991 = G__44132;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = function(state_43991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1.call(this,state_43991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__;
})()
;})(__44111,switch__29238__auto__,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
})();
var state__29335__auto__ = (function (){var statearr_44002 = f__29334__auto__.call(null);
(statearr_44002[(6)] = c__29333__auto___44124);

return statearr_44002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(__44111,c__29333__auto___44124,G__43954_44112,G__43954_44113__$1,n__4607__auto___44110,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43954_44113__$1)].join('')));

}

var G__44133 = (__44111 + (1));
__44111 = G__44133;
continue;
} else {
}
break;
}

var c__29333__auto___44134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___44134,jobs,results,process,async){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___44134,jobs,results,process,async){
return (function (state_44024){
var state_val_44025 = (state_44024[(1)]);
if((state_val_44025 === (7))){
var inst_44020 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
var statearr_44026_44135 = state_44024__$1;
(statearr_44026_44135[(2)] = inst_44020);

(statearr_44026_44135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44025 === (1))){
var state_44024__$1 = state_44024;
var statearr_44027_44136 = state_44024__$1;
(statearr_44027_44136[(2)] = null);

(statearr_44027_44136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44025 === (4))){
var inst_44005 = (state_44024[(7)]);
var inst_44005__$1 = (state_44024[(2)]);
var inst_44006 = (inst_44005__$1 == null);
var state_44024__$1 = (function (){var statearr_44028 = state_44024;
(statearr_44028[(7)] = inst_44005__$1);

return statearr_44028;
})();
if(cljs.core.truth_(inst_44006)){
var statearr_44029_44137 = state_44024__$1;
(statearr_44029_44137[(1)] = (5));

} else {
var statearr_44030_44138 = state_44024__$1;
(statearr_44030_44138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44025 === (6))){
var inst_44010 = (state_44024[(8)]);
var inst_44005 = (state_44024[(7)]);
var inst_44010__$1 = cljs.core.async.chan.call(null,(1));
var inst_44011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44012 = [inst_44005,inst_44010__$1];
var inst_44013 = (new cljs.core.PersistentVector(null,2,(5),inst_44011,inst_44012,null));
var state_44024__$1 = (function (){var statearr_44031 = state_44024;
(statearr_44031[(8)] = inst_44010__$1);

return statearr_44031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44024__$1,(8),jobs,inst_44013);
} else {
if((state_val_44025 === (3))){
var inst_44022 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44024__$1,inst_44022);
} else {
if((state_val_44025 === (2))){
var state_44024__$1 = state_44024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44024__$1,(4),from);
} else {
if((state_val_44025 === (9))){
var inst_44017 = (state_44024[(2)]);
var state_44024__$1 = (function (){var statearr_44032 = state_44024;
(statearr_44032[(9)] = inst_44017);

return statearr_44032;
})();
var statearr_44033_44139 = state_44024__$1;
(statearr_44033_44139[(2)] = null);

(statearr_44033_44139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44025 === (5))){
var inst_44008 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44024__$1 = state_44024;
var statearr_44034_44140 = state_44024__$1;
(statearr_44034_44140[(2)] = inst_44008);

(statearr_44034_44140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44025 === (8))){
var inst_44010 = (state_44024[(8)]);
var inst_44015 = (state_44024[(2)]);
var state_44024__$1 = (function (){var statearr_44035 = state_44024;
(statearr_44035[(10)] = inst_44015);

return statearr_44035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44024__$1,(9),results,inst_44010);
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
});})(c__29333__auto___44134,jobs,results,process,async))
;
return ((function (switch__29238__auto__,c__29333__auto___44134,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_44036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__);

(statearr_44036[(1)] = (1));

return statearr_44036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1 = (function (state_44024){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44037){if((e44037 instanceof Object)){
var ex__29242__auto__ = e44037;
var statearr_44038_44141 = state_44024;
(statearr_44038_44141[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44142 = state_44024;
state_44024 = G__44142;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = function(state_44024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1.call(this,state_44024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___44134,jobs,results,process,async))
})();
var state__29335__auto__ = (function (){var statearr_44039 = f__29334__auto__.call(null);
(statearr_44039[(6)] = c__29333__auto___44134);

return statearr_44039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___44134,jobs,results,process,async))
);


var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__,jobs,results,process,async){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__,jobs,results,process,async){
return (function (state_44077){
var state_val_44078 = (state_44077[(1)]);
if((state_val_44078 === (7))){
var inst_44073 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44079_44143 = state_44077__$1;
(statearr_44079_44143[(2)] = inst_44073);

(statearr_44079_44143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (20))){
var state_44077__$1 = state_44077;
var statearr_44080_44144 = state_44077__$1;
(statearr_44080_44144[(2)] = null);

(statearr_44080_44144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (1))){
var state_44077__$1 = state_44077;
var statearr_44081_44145 = state_44077__$1;
(statearr_44081_44145[(2)] = null);

(statearr_44081_44145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (4))){
var inst_44042 = (state_44077[(7)]);
var inst_44042__$1 = (state_44077[(2)]);
var inst_44043 = (inst_44042__$1 == null);
var state_44077__$1 = (function (){var statearr_44082 = state_44077;
(statearr_44082[(7)] = inst_44042__$1);

return statearr_44082;
})();
if(cljs.core.truth_(inst_44043)){
var statearr_44083_44146 = state_44077__$1;
(statearr_44083_44146[(1)] = (5));

} else {
var statearr_44084_44147 = state_44077__$1;
(statearr_44084_44147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (15))){
var inst_44055 = (state_44077[(8)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44077__$1,(18),to,inst_44055);
} else {
if((state_val_44078 === (21))){
var inst_44068 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44085_44148 = state_44077__$1;
(statearr_44085_44148[(2)] = inst_44068);

(statearr_44085_44148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (13))){
var inst_44070 = (state_44077[(2)]);
var state_44077__$1 = (function (){var statearr_44086 = state_44077;
(statearr_44086[(9)] = inst_44070);

return statearr_44086;
})();
var statearr_44087_44149 = state_44077__$1;
(statearr_44087_44149[(2)] = null);

(statearr_44087_44149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (6))){
var inst_44042 = (state_44077[(7)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(11),inst_44042);
} else {
if((state_val_44078 === (17))){
var inst_44063 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
if(cljs.core.truth_(inst_44063)){
var statearr_44088_44150 = state_44077__$1;
(statearr_44088_44150[(1)] = (19));

} else {
var statearr_44089_44151 = state_44077__$1;
(statearr_44089_44151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (3))){
var inst_44075 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44077__$1,inst_44075);
} else {
if((state_val_44078 === (12))){
var inst_44052 = (state_44077[(10)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(14),inst_44052);
} else {
if((state_val_44078 === (2))){
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44077__$1,(4),results);
} else {
if((state_val_44078 === (19))){
var state_44077__$1 = state_44077;
var statearr_44090_44152 = state_44077__$1;
(statearr_44090_44152[(2)] = null);

(statearr_44090_44152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (11))){
var inst_44052 = (state_44077[(2)]);
var state_44077__$1 = (function (){var statearr_44091 = state_44077;
(statearr_44091[(10)] = inst_44052);

return statearr_44091;
})();
var statearr_44092_44153 = state_44077__$1;
(statearr_44092_44153[(2)] = null);

(statearr_44092_44153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (9))){
var state_44077__$1 = state_44077;
var statearr_44093_44154 = state_44077__$1;
(statearr_44093_44154[(2)] = null);

(statearr_44093_44154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (5))){
var state_44077__$1 = state_44077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44094_44155 = state_44077__$1;
(statearr_44094_44155[(1)] = (8));

} else {
var statearr_44095_44156 = state_44077__$1;
(statearr_44095_44156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (14))){
var inst_44055 = (state_44077[(8)]);
var inst_44057 = (state_44077[(11)]);
var inst_44055__$1 = (state_44077[(2)]);
var inst_44056 = (inst_44055__$1 == null);
var inst_44057__$1 = cljs.core.not.call(null,inst_44056);
var state_44077__$1 = (function (){var statearr_44096 = state_44077;
(statearr_44096[(8)] = inst_44055__$1);

(statearr_44096[(11)] = inst_44057__$1);

return statearr_44096;
})();
if(inst_44057__$1){
var statearr_44097_44157 = state_44077__$1;
(statearr_44097_44157[(1)] = (15));

} else {
var statearr_44098_44158 = state_44077__$1;
(statearr_44098_44158[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (16))){
var inst_44057 = (state_44077[(11)]);
var state_44077__$1 = state_44077;
var statearr_44099_44159 = state_44077__$1;
(statearr_44099_44159[(2)] = inst_44057);

(statearr_44099_44159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (10))){
var inst_44049 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44100_44160 = state_44077__$1;
(statearr_44100_44160[(2)] = inst_44049);

(statearr_44100_44160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (18))){
var inst_44060 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44101_44161 = state_44077__$1;
(statearr_44101_44161[(2)] = inst_44060);

(statearr_44101_44161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (8))){
var inst_44046 = cljs.core.async.close_BANG_.call(null,to);
var state_44077__$1 = state_44077;
var statearr_44102_44162 = state_44077__$1;
(statearr_44102_44162[(2)] = inst_44046);

(statearr_44102_44162[(1)] = (10));


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
});})(c__29333__auto__,jobs,results,process,async))
;
return ((function (switch__29238__auto__,c__29333__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_44103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__);

(statearr_44103[(1)] = (1));

return statearr_44103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1 = (function (state_44077){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44104){if((e44104 instanceof Object)){
var ex__29242__auto__ = e44104;
var statearr_44105_44163 = state_44077;
(statearr_44105_44163[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44164 = state_44077;
state_44077 = G__44164;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__ = function(state_44077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1.call(this,state_44077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__,jobs,results,process,async))
})();
var state__29335__auto__ = (function (){var statearr_44106 = f__29334__auto__.call(null);
(statearr_44106[(6)] = c__29333__auto__);

return statearr_44106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__,jobs,results,process,async))
);

return c__29333__auto__;
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
var G__44166 = arguments.length;
switch (G__44166) {
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
var G__44169 = arguments.length;
switch (G__44169) {
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
var G__44172 = arguments.length;
switch (G__44172) {
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
var c__29333__auto___44221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___44221,tc,fc){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___44221,tc,fc){
return (function (state_44198){
var state_val_44199 = (state_44198[(1)]);
if((state_val_44199 === (7))){
var inst_44194 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
var statearr_44200_44222 = state_44198__$1;
(statearr_44200_44222[(2)] = inst_44194);

(statearr_44200_44222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (1))){
var state_44198__$1 = state_44198;
var statearr_44201_44223 = state_44198__$1;
(statearr_44201_44223[(2)] = null);

(statearr_44201_44223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (4))){
var inst_44175 = (state_44198[(7)]);
var inst_44175__$1 = (state_44198[(2)]);
var inst_44176 = (inst_44175__$1 == null);
var state_44198__$1 = (function (){var statearr_44202 = state_44198;
(statearr_44202[(7)] = inst_44175__$1);

return statearr_44202;
})();
if(cljs.core.truth_(inst_44176)){
var statearr_44203_44224 = state_44198__$1;
(statearr_44203_44224[(1)] = (5));

} else {
var statearr_44204_44225 = state_44198__$1;
(statearr_44204_44225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (13))){
var state_44198__$1 = state_44198;
var statearr_44205_44226 = state_44198__$1;
(statearr_44205_44226[(2)] = null);

(statearr_44205_44226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (6))){
var inst_44175 = (state_44198[(7)]);
var inst_44181 = p.call(null,inst_44175);
var state_44198__$1 = state_44198;
if(cljs.core.truth_(inst_44181)){
var statearr_44206_44227 = state_44198__$1;
(statearr_44206_44227[(1)] = (9));

} else {
var statearr_44207_44228 = state_44198__$1;
(statearr_44207_44228[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (3))){
var inst_44196 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44198__$1,inst_44196);
} else {
if((state_val_44199 === (12))){
var state_44198__$1 = state_44198;
var statearr_44208_44229 = state_44198__$1;
(statearr_44208_44229[(2)] = null);

(statearr_44208_44229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (2))){
var state_44198__$1 = state_44198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44198__$1,(4),ch);
} else {
if((state_val_44199 === (11))){
var inst_44175 = (state_44198[(7)]);
var inst_44185 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44198__$1,(8),inst_44185,inst_44175);
} else {
if((state_val_44199 === (9))){
var state_44198__$1 = state_44198;
var statearr_44209_44230 = state_44198__$1;
(statearr_44209_44230[(2)] = tc);

(statearr_44209_44230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (5))){
var inst_44178 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44179 = cljs.core.async.close_BANG_.call(null,fc);
var state_44198__$1 = (function (){var statearr_44210 = state_44198;
(statearr_44210[(8)] = inst_44178);

return statearr_44210;
})();
var statearr_44211_44231 = state_44198__$1;
(statearr_44211_44231[(2)] = inst_44179);

(statearr_44211_44231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (14))){
var inst_44192 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
var statearr_44212_44232 = state_44198__$1;
(statearr_44212_44232[(2)] = inst_44192);

(statearr_44212_44232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (10))){
var state_44198__$1 = state_44198;
var statearr_44213_44233 = state_44198__$1;
(statearr_44213_44233[(2)] = fc);

(statearr_44213_44233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44199 === (8))){
var inst_44187 = (state_44198[(2)]);
var state_44198__$1 = state_44198;
if(cljs.core.truth_(inst_44187)){
var statearr_44214_44234 = state_44198__$1;
(statearr_44214_44234[(1)] = (12));

} else {
var statearr_44215_44235 = state_44198__$1;
(statearr_44215_44235[(1)] = (13));

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
});})(c__29333__auto___44221,tc,fc))
;
return ((function (switch__29238__auto__,c__29333__auto___44221,tc,fc){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_44216 = [null,null,null,null,null,null,null,null,null];
(statearr_44216[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_44216[(1)] = (1));

return statearr_44216;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_44198){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44217){if((e44217 instanceof Object)){
var ex__29242__auto__ = e44217;
var statearr_44218_44236 = state_44198;
(statearr_44218_44236[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44237 = state_44198;
state_44198 = G__44237;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_44198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_44198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___44221,tc,fc))
})();
var state__29335__auto__ = (function (){var statearr_44219 = f__29334__auto__.call(null);
(statearr_44219[(6)] = c__29333__auto___44221);

return statearr_44219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___44221,tc,fc))
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
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__){
return (function (state_44258){
var state_val_44259 = (state_44258[(1)]);
if((state_val_44259 === (7))){
var inst_44254 = (state_44258[(2)]);
var state_44258__$1 = state_44258;
var statearr_44260_44278 = state_44258__$1;
(statearr_44260_44278[(2)] = inst_44254);

(statearr_44260_44278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (1))){
var inst_44238 = init;
var state_44258__$1 = (function (){var statearr_44261 = state_44258;
(statearr_44261[(7)] = inst_44238);

return statearr_44261;
})();
var statearr_44262_44279 = state_44258__$1;
(statearr_44262_44279[(2)] = null);

(statearr_44262_44279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (4))){
var inst_44241 = (state_44258[(8)]);
var inst_44241__$1 = (state_44258[(2)]);
var inst_44242 = (inst_44241__$1 == null);
var state_44258__$1 = (function (){var statearr_44263 = state_44258;
(statearr_44263[(8)] = inst_44241__$1);

return statearr_44263;
})();
if(cljs.core.truth_(inst_44242)){
var statearr_44264_44280 = state_44258__$1;
(statearr_44264_44280[(1)] = (5));

} else {
var statearr_44265_44281 = state_44258__$1;
(statearr_44265_44281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (6))){
var inst_44238 = (state_44258[(7)]);
var inst_44241 = (state_44258[(8)]);
var inst_44245 = (state_44258[(9)]);
var inst_44245__$1 = f.call(null,inst_44238,inst_44241);
var inst_44246 = cljs.core.reduced_QMARK_.call(null,inst_44245__$1);
var state_44258__$1 = (function (){var statearr_44266 = state_44258;
(statearr_44266[(9)] = inst_44245__$1);

return statearr_44266;
})();
if(inst_44246){
var statearr_44267_44282 = state_44258__$1;
(statearr_44267_44282[(1)] = (8));

} else {
var statearr_44268_44283 = state_44258__$1;
(statearr_44268_44283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (3))){
var inst_44256 = (state_44258[(2)]);
var state_44258__$1 = state_44258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44258__$1,inst_44256);
} else {
if((state_val_44259 === (2))){
var state_44258__$1 = state_44258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44258__$1,(4),ch);
} else {
if((state_val_44259 === (9))){
var inst_44245 = (state_44258[(9)]);
var inst_44238 = inst_44245;
var state_44258__$1 = (function (){var statearr_44269 = state_44258;
(statearr_44269[(7)] = inst_44238);

return statearr_44269;
})();
var statearr_44270_44284 = state_44258__$1;
(statearr_44270_44284[(2)] = null);

(statearr_44270_44284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (5))){
var inst_44238 = (state_44258[(7)]);
var state_44258__$1 = state_44258;
var statearr_44271_44285 = state_44258__$1;
(statearr_44271_44285[(2)] = inst_44238);

(statearr_44271_44285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (10))){
var inst_44252 = (state_44258[(2)]);
var state_44258__$1 = state_44258;
var statearr_44272_44286 = state_44258__$1;
(statearr_44272_44286[(2)] = inst_44252);

(statearr_44272_44286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44259 === (8))){
var inst_44245 = (state_44258[(9)]);
var inst_44248 = cljs.core.deref.call(null,inst_44245);
var state_44258__$1 = state_44258;
var statearr_44273_44287 = state_44258__$1;
(statearr_44273_44287[(2)] = inst_44248);

(statearr_44273_44287[(1)] = (10));


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
});})(c__29333__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29239__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29239__auto____0 = (function (){
var statearr_44274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44274[(0)] = cljs$core$async$reduce_$_state_machine__29239__auto__);

(statearr_44274[(1)] = (1));

return statearr_44274;
});
var cljs$core$async$reduce_$_state_machine__29239__auto____1 = (function (state_44258){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44275){if((e44275 instanceof Object)){
var ex__29242__auto__ = e44275;
var statearr_44276_44288 = state_44258;
(statearr_44276_44288[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44289 = state_44258;
state_44258 = G__44289;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29239__auto__ = function(state_44258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29239__auto____1.call(this,state_44258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29239__auto____0;
cljs$core$async$reduce_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29239__auto____1;
return cljs$core$async$reduce_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__))
})();
var state__29335__auto__ = (function (){var statearr_44277 = f__29334__auto__.call(null);
(statearr_44277[(6)] = c__29333__auto__);

return statearr_44277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__))
);

return c__29333__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__,f__$1){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__,f__$1){
return (function (state_44295){
var state_val_44296 = (state_44295[(1)]);
if((state_val_44296 === (1))){
var inst_44290 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44295__$1,(2),inst_44290);
} else {
if((state_val_44296 === (2))){
var inst_44292 = (state_44295[(2)]);
var inst_44293 = f__$1.call(null,inst_44292);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44295__$1,inst_44293);
} else {
return null;
}
}
});})(c__29333__auto__,f__$1))
;
return ((function (switch__29238__auto__,c__29333__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29239__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29239__auto____0 = (function (){
var statearr_44297 = [null,null,null,null,null,null,null];
(statearr_44297[(0)] = cljs$core$async$transduce_$_state_machine__29239__auto__);

(statearr_44297[(1)] = (1));

return statearr_44297;
});
var cljs$core$async$transduce_$_state_machine__29239__auto____1 = (function (state_44295){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44298){if((e44298 instanceof Object)){
var ex__29242__auto__ = e44298;
var statearr_44299_44301 = state_44295;
(statearr_44299_44301[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44302 = state_44295;
state_44295 = G__44302;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29239__auto__ = function(state_44295){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29239__auto____1.call(this,state_44295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29239__auto____0;
cljs$core$async$transduce_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29239__auto____1;
return cljs$core$async$transduce_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__,f__$1))
})();
var state__29335__auto__ = (function (){var statearr_44300 = f__29334__auto__.call(null);
(statearr_44300[(6)] = c__29333__auto__);

return statearr_44300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__,f__$1))
);

return c__29333__auto__;
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
var G__44304 = arguments.length;
switch (G__44304) {
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
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__){
return (function (state_44329){
var state_val_44330 = (state_44329[(1)]);
if((state_val_44330 === (7))){
var inst_44311 = (state_44329[(2)]);
var state_44329__$1 = state_44329;
var statearr_44331_44352 = state_44329__$1;
(statearr_44331_44352[(2)] = inst_44311);

(statearr_44331_44352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (1))){
var inst_44305 = cljs.core.seq.call(null,coll);
var inst_44306 = inst_44305;
var state_44329__$1 = (function (){var statearr_44332 = state_44329;
(statearr_44332[(7)] = inst_44306);

return statearr_44332;
})();
var statearr_44333_44353 = state_44329__$1;
(statearr_44333_44353[(2)] = null);

(statearr_44333_44353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (4))){
var inst_44306 = (state_44329[(7)]);
var inst_44309 = cljs.core.first.call(null,inst_44306);
var state_44329__$1 = state_44329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44329__$1,(7),ch,inst_44309);
} else {
if((state_val_44330 === (13))){
var inst_44323 = (state_44329[(2)]);
var state_44329__$1 = state_44329;
var statearr_44334_44354 = state_44329__$1;
(statearr_44334_44354[(2)] = inst_44323);

(statearr_44334_44354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (6))){
var inst_44314 = (state_44329[(2)]);
var state_44329__$1 = state_44329;
if(cljs.core.truth_(inst_44314)){
var statearr_44335_44355 = state_44329__$1;
(statearr_44335_44355[(1)] = (8));

} else {
var statearr_44336_44356 = state_44329__$1;
(statearr_44336_44356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (3))){
var inst_44327 = (state_44329[(2)]);
var state_44329__$1 = state_44329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44329__$1,inst_44327);
} else {
if((state_val_44330 === (12))){
var state_44329__$1 = state_44329;
var statearr_44337_44357 = state_44329__$1;
(statearr_44337_44357[(2)] = null);

(statearr_44337_44357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (2))){
var inst_44306 = (state_44329[(7)]);
var state_44329__$1 = state_44329;
if(cljs.core.truth_(inst_44306)){
var statearr_44338_44358 = state_44329__$1;
(statearr_44338_44358[(1)] = (4));

} else {
var statearr_44339_44359 = state_44329__$1;
(statearr_44339_44359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (11))){
var inst_44320 = cljs.core.async.close_BANG_.call(null,ch);
var state_44329__$1 = state_44329;
var statearr_44340_44360 = state_44329__$1;
(statearr_44340_44360[(2)] = inst_44320);

(statearr_44340_44360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (9))){
var state_44329__$1 = state_44329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44341_44361 = state_44329__$1;
(statearr_44341_44361[(1)] = (11));

} else {
var statearr_44342_44362 = state_44329__$1;
(statearr_44342_44362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (5))){
var inst_44306 = (state_44329[(7)]);
var state_44329__$1 = state_44329;
var statearr_44343_44363 = state_44329__$1;
(statearr_44343_44363[(2)] = inst_44306);

(statearr_44343_44363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (10))){
var inst_44325 = (state_44329[(2)]);
var state_44329__$1 = state_44329;
var statearr_44344_44364 = state_44329__$1;
(statearr_44344_44364[(2)] = inst_44325);

(statearr_44344_44364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44330 === (8))){
var inst_44306 = (state_44329[(7)]);
var inst_44316 = cljs.core.next.call(null,inst_44306);
var inst_44306__$1 = inst_44316;
var state_44329__$1 = (function (){var statearr_44345 = state_44329;
(statearr_44345[(7)] = inst_44306__$1);

return statearr_44345;
})();
var statearr_44346_44365 = state_44329__$1;
(statearr_44346_44365[(2)] = null);

(statearr_44346_44365[(1)] = (2));


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
});})(c__29333__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_44347 = [null,null,null,null,null,null,null,null];
(statearr_44347[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_44347[(1)] = (1));

return statearr_44347;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_44329){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44348){if((e44348 instanceof Object)){
var ex__29242__auto__ = e44348;
var statearr_44349_44366 = state_44329;
(statearr_44349_44366[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44367 = state_44329;
state_44329 = G__44367;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_44329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_44329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__))
})();
var state__29335__auto__ = (function (){var statearr_44350 = f__29334__auto__.call(null);
(statearr_44350[(6)] = c__29333__auto__);

return statearr_44350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__))
);

return c__29333__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44368 = (function (ch,cs,meta44369){
this.ch = ch;
this.cs = cs;
this.meta44369 = meta44369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44370,meta44369__$1){
var self__ = this;
var _44370__$1 = this;
return (new cljs.core.async.t_cljs$core$async44368(self__.ch,self__.cs,meta44369__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44370){
var self__ = this;
var _44370__$1 = this;
return self__.meta44369;
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44369","meta44369",1920671144,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44368";

cljs.core.async.t_cljs$core$async44368.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44368");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44368.
 */
cljs.core.async.__GT_t_cljs$core$async44368 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44368(ch__$1,cs__$1,meta44369){
return (new cljs.core.async.t_cljs$core$async44368(ch__$1,cs__$1,meta44369));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44368(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29333__auto___44590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___44590,cs,m,dchan,dctr,done){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___44590,cs,m,dchan,dctr,done){
return (function (state_44505){
var state_val_44506 = (state_44505[(1)]);
if((state_val_44506 === (7))){
var inst_44501 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44507_44591 = state_44505__$1;
(statearr_44507_44591[(2)] = inst_44501);

(statearr_44507_44591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (20))){
var inst_44404 = (state_44505[(7)]);
var inst_44416 = cljs.core.first.call(null,inst_44404);
var inst_44417 = cljs.core.nth.call(null,inst_44416,(0),null);
var inst_44418 = cljs.core.nth.call(null,inst_44416,(1),null);
var state_44505__$1 = (function (){var statearr_44508 = state_44505;
(statearr_44508[(8)] = inst_44417);

return statearr_44508;
})();
if(cljs.core.truth_(inst_44418)){
var statearr_44509_44592 = state_44505__$1;
(statearr_44509_44592[(1)] = (22));

} else {
var statearr_44510_44593 = state_44505__$1;
(statearr_44510_44593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (27))){
var inst_44453 = (state_44505[(9)]);
var inst_44448 = (state_44505[(10)]);
var inst_44373 = (state_44505[(11)]);
var inst_44446 = (state_44505[(12)]);
var inst_44453__$1 = cljs.core._nth.call(null,inst_44446,inst_44448);
var inst_44454 = cljs.core.async.put_BANG_.call(null,inst_44453__$1,inst_44373,done);
var state_44505__$1 = (function (){var statearr_44511 = state_44505;
(statearr_44511[(9)] = inst_44453__$1);

return statearr_44511;
})();
if(cljs.core.truth_(inst_44454)){
var statearr_44512_44594 = state_44505__$1;
(statearr_44512_44594[(1)] = (30));

} else {
var statearr_44513_44595 = state_44505__$1;
(statearr_44513_44595[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (1))){
var state_44505__$1 = state_44505;
var statearr_44514_44596 = state_44505__$1;
(statearr_44514_44596[(2)] = null);

(statearr_44514_44596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (24))){
var inst_44404 = (state_44505[(7)]);
var inst_44423 = (state_44505[(2)]);
var inst_44424 = cljs.core.next.call(null,inst_44404);
var inst_44382 = inst_44424;
var inst_44383 = null;
var inst_44384 = (0);
var inst_44385 = (0);
var state_44505__$1 = (function (){var statearr_44515 = state_44505;
(statearr_44515[(13)] = inst_44423);

(statearr_44515[(14)] = inst_44382);

(statearr_44515[(15)] = inst_44383);

(statearr_44515[(16)] = inst_44384);

(statearr_44515[(17)] = inst_44385);

return statearr_44515;
})();
var statearr_44516_44597 = state_44505__$1;
(statearr_44516_44597[(2)] = null);

(statearr_44516_44597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (39))){
var state_44505__$1 = state_44505;
var statearr_44520_44598 = state_44505__$1;
(statearr_44520_44598[(2)] = null);

(statearr_44520_44598[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (4))){
var inst_44373 = (state_44505[(11)]);
var inst_44373__$1 = (state_44505[(2)]);
var inst_44374 = (inst_44373__$1 == null);
var state_44505__$1 = (function (){var statearr_44521 = state_44505;
(statearr_44521[(11)] = inst_44373__$1);

return statearr_44521;
})();
if(cljs.core.truth_(inst_44374)){
var statearr_44522_44599 = state_44505__$1;
(statearr_44522_44599[(1)] = (5));

} else {
var statearr_44523_44600 = state_44505__$1;
(statearr_44523_44600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (15))){
var inst_44382 = (state_44505[(14)]);
var inst_44383 = (state_44505[(15)]);
var inst_44384 = (state_44505[(16)]);
var inst_44385 = (state_44505[(17)]);
var inst_44400 = (state_44505[(2)]);
var inst_44401 = (inst_44385 + (1));
var tmp44517 = inst_44382;
var tmp44518 = inst_44383;
var tmp44519 = inst_44384;
var inst_44382__$1 = tmp44517;
var inst_44383__$1 = tmp44518;
var inst_44384__$1 = tmp44519;
var inst_44385__$1 = inst_44401;
var state_44505__$1 = (function (){var statearr_44524 = state_44505;
(statearr_44524[(18)] = inst_44400);

(statearr_44524[(14)] = inst_44382__$1);

(statearr_44524[(15)] = inst_44383__$1);

(statearr_44524[(16)] = inst_44384__$1);

(statearr_44524[(17)] = inst_44385__$1);

return statearr_44524;
})();
var statearr_44525_44601 = state_44505__$1;
(statearr_44525_44601[(2)] = null);

(statearr_44525_44601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (21))){
var inst_44427 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44529_44602 = state_44505__$1;
(statearr_44529_44602[(2)] = inst_44427);

(statearr_44529_44602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (31))){
var inst_44453 = (state_44505[(9)]);
var inst_44457 = done.call(null,null);
var inst_44458 = cljs.core.async.untap_STAR_.call(null,m,inst_44453);
var state_44505__$1 = (function (){var statearr_44530 = state_44505;
(statearr_44530[(19)] = inst_44457);

return statearr_44530;
})();
var statearr_44531_44603 = state_44505__$1;
(statearr_44531_44603[(2)] = inst_44458);

(statearr_44531_44603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (32))){
var inst_44447 = (state_44505[(20)]);
var inst_44448 = (state_44505[(10)]);
var inst_44445 = (state_44505[(21)]);
var inst_44446 = (state_44505[(12)]);
var inst_44460 = (state_44505[(2)]);
var inst_44461 = (inst_44448 + (1));
var tmp44526 = inst_44447;
var tmp44527 = inst_44445;
var tmp44528 = inst_44446;
var inst_44445__$1 = tmp44527;
var inst_44446__$1 = tmp44528;
var inst_44447__$1 = tmp44526;
var inst_44448__$1 = inst_44461;
var state_44505__$1 = (function (){var statearr_44532 = state_44505;
(statearr_44532[(22)] = inst_44460);

(statearr_44532[(20)] = inst_44447__$1);

(statearr_44532[(10)] = inst_44448__$1);

(statearr_44532[(21)] = inst_44445__$1);

(statearr_44532[(12)] = inst_44446__$1);

return statearr_44532;
})();
var statearr_44533_44604 = state_44505__$1;
(statearr_44533_44604[(2)] = null);

(statearr_44533_44604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (40))){
var inst_44473 = (state_44505[(23)]);
var inst_44477 = done.call(null,null);
var inst_44478 = cljs.core.async.untap_STAR_.call(null,m,inst_44473);
var state_44505__$1 = (function (){var statearr_44534 = state_44505;
(statearr_44534[(24)] = inst_44477);

return statearr_44534;
})();
var statearr_44535_44605 = state_44505__$1;
(statearr_44535_44605[(2)] = inst_44478);

(statearr_44535_44605[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (33))){
var inst_44464 = (state_44505[(25)]);
var inst_44466 = cljs.core.chunked_seq_QMARK_.call(null,inst_44464);
var state_44505__$1 = state_44505;
if(inst_44466){
var statearr_44536_44606 = state_44505__$1;
(statearr_44536_44606[(1)] = (36));

} else {
var statearr_44537_44607 = state_44505__$1;
(statearr_44537_44607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (13))){
var inst_44394 = (state_44505[(26)]);
var inst_44397 = cljs.core.async.close_BANG_.call(null,inst_44394);
var state_44505__$1 = state_44505;
var statearr_44538_44608 = state_44505__$1;
(statearr_44538_44608[(2)] = inst_44397);

(statearr_44538_44608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (22))){
var inst_44417 = (state_44505[(8)]);
var inst_44420 = cljs.core.async.close_BANG_.call(null,inst_44417);
var state_44505__$1 = state_44505;
var statearr_44539_44609 = state_44505__$1;
(statearr_44539_44609[(2)] = inst_44420);

(statearr_44539_44609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (36))){
var inst_44464 = (state_44505[(25)]);
var inst_44468 = cljs.core.chunk_first.call(null,inst_44464);
var inst_44469 = cljs.core.chunk_rest.call(null,inst_44464);
var inst_44470 = cljs.core.count.call(null,inst_44468);
var inst_44445 = inst_44469;
var inst_44446 = inst_44468;
var inst_44447 = inst_44470;
var inst_44448 = (0);
var state_44505__$1 = (function (){var statearr_44540 = state_44505;
(statearr_44540[(20)] = inst_44447);

(statearr_44540[(10)] = inst_44448);

(statearr_44540[(21)] = inst_44445);

(statearr_44540[(12)] = inst_44446);

return statearr_44540;
})();
var statearr_44541_44610 = state_44505__$1;
(statearr_44541_44610[(2)] = null);

(statearr_44541_44610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (41))){
var inst_44464 = (state_44505[(25)]);
var inst_44480 = (state_44505[(2)]);
var inst_44481 = cljs.core.next.call(null,inst_44464);
var inst_44445 = inst_44481;
var inst_44446 = null;
var inst_44447 = (0);
var inst_44448 = (0);
var state_44505__$1 = (function (){var statearr_44542 = state_44505;
(statearr_44542[(20)] = inst_44447);

(statearr_44542[(10)] = inst_44448);

(statearr_44542[(21)] = inst_44445);

(statearr_44542[(12)] = inst_44446);

(statearr_44542[(27)] = inst_44480);

return statearr_44542;
})();
var statearr_44543_44611 = state_44505__$1;
(statearr_44543_44611[(2)] = null);

(statearr_44543_44611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (43))){
var state_44505__$1 = state_44505;
var statearr_44544_44612 = state_44505__$1;
(statearr_44544_44612[(2)] = null);

(statearr_44544_44612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (29))){
var inst_44489 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44545_44613 = state_44505__$1;
(statearr_44545_44613[(2)] = inst_44489);

(statearr_44545_44613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (44))){
var inst_44498 = (state_44505[(2)]);
var state_44505__$1 = (function (){var statearr_44546 = state_44505;
(statearr_44546[(28)] = inst_44498);

return statearr_44546;
})();
var statearr_44547_44614 = state_44505__$1;
(statearr_44547_44614[(2)] = null);

(statearr_44547_44614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (6))){
var inst_44437 = (state_44505[(29)]);
var inst_44436 = cljs.core.deref.call(null,cs);
var inst_44437__$1 = cljs.core.keys.call(null,inst_44436);
var inst_44438 = cljs.core.count.call(null,inst_44437__$1);
var inst_44439 = cljs.core.reset_BANG_.call(null,dctr,inst_44438);
var inst_44444 = cljs.core.seq.call(null,inst_44437__$1);
var inst_44445 = inst_44444;
var inst_44446 = null;
var inst_44447 = (0);
var inst_44448 = (0);
var state_44505__$1 = (function (){var statearr_44548 = state_44505;
(statearr_44548[(30)] = inst_44439);

(statearr_44548[(29)] = inst_44437__$1);

(statearr_44548[(20)] = inst_44447);

(statearr_44548[(10)] = inst_44448);

(statearr_44548[(21)] = inst_44445);

(statearr_44548[(12)] = inst_44446);

return statearr_44548;
})();
var statearr_44549_44615 = state_44505__$1;
(statearr_44549_44615[(2)] = null);

(statearr_44549_44615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (28))){
var inst_44464 = (state_44505[(25)]);
var inst_44445 = (state_44505[(21)]);
var inst_44464__$1 = cljs.core.seq.call(null,inst_44445);
var state_44505__$1 = (function (){var statearr_44550 = state_44505;
(statearr_44550[(25)] = inst_44464__$1);

return statearr_44550;
})();
if(inst_44464__$1){
var statearr_44551_44616 = state_44505__$1;
(statearr_44551_44616[(1)] = (33));

} else {
var statearr_44552_44617 = state_44505__$1;
(statearr_44552_44617[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (25))){
var inst_44447 = (state_44505[(20)]);
var inst_44448 = (state_44505[(10)]);
var inst_44450 = (inst_44448 < inst_44447);
var inst_44451 = inst_44450;
var state_44505__$1 = state_44505;
if(cljs.core.truth_(inst_44451)){
var statearr_44553_44618 = state_44505__$1;
(statearr_44553_44618[(1)] = (27));

} else {
var statearr_44554_44619 = state_44505__$1;
(statearr_44554_44619[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (34))){
var state_44505__$1 = state_44505;
var statearr_44555_44620 = state_44505__$1;
(statearr_44555_44620[(2)] = null);

(statearr_44555_44620[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (17))){
var state_44505__$1 = state_44505;
var statearr_44556_44621 = state_44505__$1;
(statearr_44556_44621[(2)] = null);

(statearr_44556_44621[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (3))){
var inst_44503 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44505__$1,inst_44503);
} else {
if((state_val_44506 === (12))){
var inst_44432 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44557_44622 = state_44505__$1;
(statearr_44557_44622[(2)] = inst_44432);

(statearr_44557_44622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (2))){
var state_44505__$1 = state_44505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44505__$1,(4),ch);
} else {
if((state_val_44506 === (23))){
var state_44505__$1 = state_44505;
var statearr_44558_44623 = state_44505__$1;
(statearr_44558_44623[(2)] = null);

(statearr_44558_44623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (35))){
var inst_44487 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44559_44624 = state_44505__$1;
(statearr_44559_44624[(2)] = inst_44487);

(statearr_44559_44624[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (19))){
var inst_44404 = (state_44505[(7)]);
var inst_44408 = cljs.core.chunk_first.call(null,inst_44404);
var inst_44409 = cljs.core.chunk_rest.call(null,inst_44404);
var inst_44410 = cljs.core.count.call(null,inst_44408);
var inst_44382 = inst_44409;
var inst_44383 = inst_44408;
var inst_44384 = inst_44410;
var inst_44385 = (0);
var state_44505__$1 = (function (){var statearr_44560 = state_44505;
(statearr_44560[(14)] = inst_44382);

(statearr_44560[(15)] = inst_44383);

(statearr_44560[(16)] = inst_44384);

(statearr_44560[(17)] = inst_44385);

return statearr_44560;
})();
var statearr_44561_44625 = state_44505__$1;
(statearr_44561_44625[(2)] = null);

(statearr_44561_44625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (11))){
var inst_44382 = (state_44505[(14)]);
var inst_44404 = (state_44505[(7)]);
var inst_44404__$1 = cljs.core.seq.call(null,inst_44382);
var state_44505__$1 = (function (){var statearr_44562 = state_44505;
(statearr_44562[(7)] = inst_44404__$1);

return statearr_44562;
})();
if(inst_44404__$1){
var statearr_44563_44626 = state_44505__$1;
(statearr_44563_44626[(1)] = (16));

} else {
var statearr_44564_44627 = state_44505__$1;
(statearr_44564_44627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (9))){
var inst_44434 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44565_44628 = state_44505__$1;
(statearr_44565_44628[(2)] = inst_44434);

(statearr_44565_44628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (5))){
var inst_44380 = cljs.core.deref.call(null,cs);
var inst_44381 = cljs.core.seq.call(null,inst_44380);
var inst_44382 = inst_44381;
var inst_44383 = null;
var inst_44384 = (0);
var inst_44385 = (0);
var state_44505__$1 = (function (){var statearr_44566 = state_44505;
(statearr_44566[(14)] = inst_44382);

(statearr_44566[(15)] = inst_44383);

(statearr_44566[(16)] = inst_44384);

(statearr_44566[(17)] = inst_44385);

return statearr_44566;
})();
var statearr_44567_44629 = state_44505__$1;
(statearr_44567_44629[(2)] = null);

(statearr_44567_44629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (14))){
var state_44505__$1 = state_44505;
var statearr_44568_44630 = state_44505__$1;
(statearr_44568_44630[(2)] = null);

(statearr_44568_44630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (45))){
var inst_44495 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44569_44631 = state_44505__$1;
(statearr_44569_44631[(2)] = inst_44495);

(statearr_44569_44631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (26))){
var inst_44437 = (state_44505[(29)]);
var inst_44491 = (state_44505[(2)]);
var inst_44492 = cljs.core.seq.call(null,inst_44437);
var state_44505__$1 = (function (){var statearr_44570 = state_44505;
(statearr_44570[(31)] = inst_44491);

return statearr_44570;
})();
if(inst_44492){
var statearr_44571_44632 = state_44505__$1;
(statearr_44571_44632[(1)] = (42));

} else {
var statearr_44572_44633 = state_44505__$1;
(statearr_44572_44633[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (16))){
var inst_44404 = (state_44505[(7)]);
var inst_44406 = cljs.core.chunked_seq_QMARK_.call(null,inst_44404);
var state_44505__$1 = state_44505;
if(inst_44406){
var statearr_44573_44634 = state_44505__$1;
(statearr_44573_44634[(1)] = (19));

} else {
var statearr_44574_44635 = state_44505__$1;
(statearr_44574_44635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (38))){
var inst_44484 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44575_44636 = state_44505__$1;
(statearr_44575_44636[(2)] = inst_44484);

(statearr_44575_44636[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (30))){
var state_44505__$1 = state_44505;
var statearr_44576_44637 = state_44505__$1;
(statearr_44576_44637[(2)] = null);

(statearr_44576_44637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (10))){
var inst_44383 = (state_44505[(15)]);
var inst_44385 = (state_44505[(17)]);
var inst_44393 = cljs.core._nth.call(null,inst_44383,inst_44385);
var inst_44394 = cljs.core.nth.call(null,inst_44393,(0),null);
var inst_44395 = cljs.core.nth.call(null,inst_44393,(1),null);
var state_44505__$1 = (function (){var statearr_44577 = state_44505;
(statearr_44577[(26)] = inst_44394);

return statearr_44577;
})();
if(cljs.core.truth_(inst_44395)){
var statearr_44578_44638 = state_44505__$1;
(statearr_44578_44638[(1)] = (13));

} else {
var statearr_44579_44639 = state_44505__$1;
(statearr_44579_44639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (18))){
var inst_44430 = (state_44505[(2)]);
var state_44505__$1 = state_44505;
var statearr_44580_44640 = state_44505__$1;
(statearr_44580_44640[(2)] = inst_44430);

(statearr_44580_44640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (42))){
var state_44505__$1 = state_44505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44505__$1,(45),dchan);
} else {
if((state_val_44506 === (37))){
var inst_44464 = (state_44505[(25)]);
var inst_44373 = (state_44505[(11)]);
var inst_44473 = (state_44505[(23)]);
var inst_44473__$1 = cljs.core.first.call(null,inst_44464);
var inst_44474 = cljs.core.async.put_BANG_.call(null,inst_44473__$1,inst_44373,done);
var state_44505__$1 = (function (){var statearr_44581 = state_44505;
(statearr_44581[(23)] = inst_44473__$1);

return statearr_44581;
})();
if(cljs.core.truth_(inst_44474)){
var statearr_44582_44641 = state_44505__$1;
(statearr_44582_44641[(1)] = (39));

} else {
var statearr_44583_44642 = state_44505__$1;
(statearr_44583_44642[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44506 === (8))){
var inst_44384 = (state_44505[(16)]);
var inst_44385 = (state_44505[(17)]);
var inst_44387 = (inst_44385 < inst_44384);
var inst_44388 = inst_44387;
var state_44505__$1 = state_44505;
if(cljs.core.truth_(inst_44388)){
var statearr_44584_44643 = state_44505__$1;
(statearr_44584_44643[(1)] = (10));

} else {
var statearr_44585_44644 = state_44505__$1;
(statearr_44585_44644[(1)] = (11));

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
});})(c__29333__auto___44590,cs,m,dchan,dctr,done))
;
return ((function (switch__29238__auto__,c__29333__auto___44590,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29239__auto__ = null;
var cljs$core$async$mult_$_state_machine__29239__auto____0 = (function (){
var statearr_44586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44586[(0)] = cljs$core$async$mult_$_state_machine__29239__auto__);

(statearr_44586[(1)] = (1));

return statearr_44586;
});
var cljs$core$async$mult_$_state_machine__29239__auto____1 = (function (state_44505){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44587){if((e44587 instanceof Object)){
var ex__29242__auto__ = e44587;
var statearr_44588_44645 = state_44505;
(statearr_44588_44645[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44646 = state_44505;
state_44505 = G__44646;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29239__auto__ = function(state_44505){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29239__auto____1.call(this,state_44505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29239__auto____0;
cljs$core$async$mult_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29239__auto____1;
return cljs$core$async$mult_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___44590,cs,m,dchan,dctr,done))
})();
var state__29335__auto__ = (function (){var statearr_44589 = f__29334__auto__.call(null);
(statearr_44589[(6)] = c__29333__auto___44590);

return statearr_44589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___44590,cs,m,dchan,dctr,done))
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
var G__44648 = arguments.length;
switch (G__44648) {
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
var len__4730__auto___44660 = arguments.length;
var i__4731__auto___44661 = (0);
while(true){
if((i__4731__auto___44661 < len__4730__auto___44660)){
args__4736__auto__.push((arguments[i__4731__auto___44661]));

var G__44662 = (i__4731__auto___44661 + (1));
i__4731__auto___44661 = G__44662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44654){
var map__44655 = p__44654;
var map__44655__$1 = (((((!((map__44655 == null))))?(((((map__44655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44655):map__44655);
var opts = map__44655__$1;
var statearr_44657_44663 = state;
(statearr_44657_44663[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__44655,map__44655__$1,opts){
return (function (val){
var statearr_44658_44664 = state;
(statearr_44658_44664[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44655,map__44655__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44659_44665 = state;
(statearr_44659_44665[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44650){
var G__44651 = cljs.core.first.call(null,seq44650);
var seq44650__$1 = cljs.core.next.call(null,seq44650);
var G__44652 = cljs.core.first.call(null,seq44650__$1);
var seq44650__$2 = cljs.core.next.call(null,seq44650__$1);
var G__44653 = cljs.core.first.call(null,seq44650__$2);
var seq44650__$3 = cljs.core.next.call(null,seq44650__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44651,G__44652,G__44653,seq44650__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44666 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44667){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44667 = meta44667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44668,meta44667__$1){
var self__ = this;
var _44668__$1 = this;
return (new cljs.core.async.t_cljs$core$async44666(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44667__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44668){
var self__ = this;
var _44668__$1 = this;
return self__.meta44667;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44666.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44667","meta44667",1326232138,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44666";

cljs.core.async.t_cljs$core$async44666.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44666");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44666.
 */
cljs.core.async.__GT_t_cljs$core$async44666 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44666(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44667){
return (new cljs.core.async.t_cljs$core$async44666(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44667));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44666(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29333__auto___44830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44770){
var state_val_44771 = (state_44770[(1)]);
if((state_val_44771 === (7))){
var inst_44685 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
var statearr_44772_44831 = state_44770__$1;
(statearr_44772_44831[(2)] = inst_44685);

(statearr_44772_44831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (20))){
var inst_44697 = (state_44770[(7)]);
var state_44770__$1 = state_44770;
var statearr_44773_44832 = state_44770__$1;
(statearr_44773_44832[(2)] = inst_44697);

(statearr_44773_44832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (27))){
var state_44770__$1 = state_44770;
var statearr_44774_44833 = state_44770__$1;
(statearr_44774_44833[(2)] = null);

(statearr_44774_44833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (1))){
var inst_44672 = (state_44770[(8)]);
var inst_44672__$1 = calc_state.call(null);
var inst_44674 = (inst_44672__$1 == null);
var inst_44675 = cljs.core.not.call(null,inst_44674);
var state_44770__$1 = (function (){var statearr_44775 = state_44770;
(statearr_44775[(8)] = inst_44672__$1);

return statearr_44775;
})();
if(inst_44675){
var statearr_44776_44834 = state_44770__$1;
(statearr_44776_44834[(1)] = (2));

} else {
var statearr_44777_44835 = state_44770__$1;
(statearr_44777_44835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (24))){
var inst_44721 = (state_44770[(9)]);
var inst_44744 = (state_44770[(10)]);
var inst_44730 = (state_44770[(11)]);
var inst_44744__$1 = inst_44721.call(null,inst_44730);
var state_44770__$1 = (function (){var statearr_44778 = state_44770;
(statearr_44778[(10)] = inst_44744__$1);

return statearr_44778;
})();
if(cljs.core.truth_(inst_44744__$1)){
var statearr_44779_44836 = state_44770__$1;
(statearr_44779_44836[(1)] = (29));

} else {
var statearr_44780_44837 = state_44770__$1;
(statearr_44780_44837[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (4))){
var inst_44688 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44688)){
var statearr_44781_44838 = state_44770__$1;
(statearr_44781_44838[(1)] = (8));

} else {
var statearr_44782_44839 = state_44770__$1;
(statearr_44782_44839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (15))){
var inst_44715 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44715)){
var statearr_44783_44840 = state_44770__$1;
(statearr_44783_44840[(1)] = (19));

} else {
var statearr_44784_44841 = state_44770__$1;
(statearr_44784_44841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (21))){
var inst_44720 = (state_44770[(12)]);
var inst_44720__$1 = (state_44770[(2)]);
var inst_44721 = cljs.core.get.call(null,inst_44720__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44722 = cljs.core.get.call(null,inst_44720__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44723 = cljs.core.get.call(null,inst_44720__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44770__$1 = (function (){var statearr_44785 = state_44770;
(statearr_44785[(9)] = inst_44721);

(statearr_44785[(13)] = inst_44722);

(statearr_44785[(12)] = inst_44720__$1);

return statearr_44785;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44770__$1,(22),inst_44723);
} else {
if((state_val_44771 === (31))){
var inst_44752 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44752)){
var statearr_44786_44842 = state_44770__$1;
(statearr_44786_44842[(1)] = (32));

} else {
var statearr_44787_44843 = state_44770__$1;
(statearr_44787_44843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (32))){
var inst_44729 = (state_44770[(14)]);
var state_44770__$1 = state_44770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44770__$1,(35),out,inst_44729);
} else {
if((state_val_44771 === (33))){
var inst_44720 = (state_44770[(12)]);
var inst_44697 = inst_44720;
var state_44770__$1 = (function (){var statearr_44788 = state_44770;
(statearr_44788[(7)] = inst_44697);

return statearr_44788;
})();
var statearr_44789_44844 = state_44770__$1;
(statearr_44789_44844[(2)] = null);

(statearr_44789_44844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (13))){
var inst_44697 = (state_44770[(7)]);
var inst_44704 = inst_44697.cljs$lang$protocol_mask$partition0$;
var inst_44705 = (inst_44704 & (64));
var inst_44706 = inst_44697.cljs$core$ISeq$;
var inst_44707 = (cljs.core.PROTOCOL_SENTINEL === inst_44706);
var inst_44708 = ((inst_44705) || (inst_44707));
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44708)){
var statearr_44790_44845 = state_44770__$1;
(statearr_44790_44845[(1)] = (16));

} else {
var statearr_44791_44846 = state_44770__$1;
(statearr_44791_44846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (22))){
var inst_44730 = (state_44770[(11)]);
var inst_44729 = (state_44770[(14)]);
var inst_44728 = (state_44770[(2)]);
var inst_44729__$1 = cljs.core.nth.call(null,inst_44728,(0),null);
var inst_44730__$1 = cljs.core.nth.call(null,inst_44728,(1),null);
var inst_44731 = (inst_44729__$1 == null);
var inst_44732 = cljs.core._EQ_.call(null,inst_44730__$1,change);
var inst_44733 = ((inst_44731) || (inst_44732));
var state_44770__$1 = (function (){var statearr_44792 = state_44770;
(statearr_44792[(11)] = inst_44730__$1);

(statearr_44792[(14)] = inst_44729__$1);

return statearr_44792;
})();
if(cljs.core.truth_(inst_44733)){
var statearr_44793_44847 = state_44770__$1;
(statearr_44793_44847[(1)] = (23));

} else {
var statearr_44794_44848 = state_44770__$1;
(statearr_44794_44848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (36))){
var inst_44720 = (state_44770[(12)]);
var inst_44697 = inst_44720;
var state_44770__$1 = (function (){var statearr_44795 = state_44770;
(statearr_44795[(7)] = inst_44697);

return statearr_44795;
})();
var statearr_44796_44849 = state_44770__$1;
(statearr_44796_44849[(2)] = null);

(statearr_44796_44849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (29))){
var inst_44744 = (state_44770[(10)]);
var state_44770__$1 = state_44770;
var statearr_44797_44850 = state_44770__$1;
(statearr_44797_44850[(2)] = inst_44744);

(statearr_44797_44850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (6))){
var state_44770__$1 = state_44770;
var statearr_44798_44851 = state_44770__$1;
(statearr_44798_44851[(2)] = false);

(statearr_44798_44851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (28))){
var inst_44740 = (state_44770[(2)]);
var inst_44741 = calc_state.call(null);
var inst_44697 = inst_44741;
var state_44770__$1 = (function (){var statearr_44799 = state_44770;
(statearr_44799[(15)] = inst_44740);

(statearr_44799[(7)] = inst_44697);

return statearr_44799;
})();
var statearr_44800_44852 = state_44770__$1;
(statearr_44800_44852[(2)] = null);

(statearr_44800_44852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (25))){
var inst_44766 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
var statearr_44801_44853 = state_44770__$1;
(statearr_44801_44853[(2)] = inst_44766);

(statearr_44801_44853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (34))){
var inst_44764 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
var statearr_44802_44854 = state_44770__$1;
(statearr_44802_44854[(2)] = inst_44764);

(statearr_44802_44854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (17))){
var state_44770__$1 = state_44770;
var statearr_44803_44855 = state_44770__$1;
(statearr_44803_44855[(2)] = false);

(statearr_44803_44855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (3))){
var state_44770__$1 = state_44770;
var statearr_44804_44856 = state_44770__$1;
(statearr_44804_44856[(2)] = false);

(statearr_44804_44856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (12))){
var inst_44768 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44770__$1,inst_44768);
} else {
if((state_val_44771 === (2))){
var inst_44672 = (state_44770[(8)]);
var inst_44677 = inst_44672.cljs$lang$protocol_mask$partition0$;
var inst_44678 = (inst_44677 & (64));
var inst_44679 = inst_44672.cljs$core$ISeq$;
var inst_44680 = (cljs.core.PROTOCOL_SENTINEL === inst_44679);
var inst_44681 = ((inst_44678) || (inst_44680));
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44681)){
var statearr_44805_44857 = state_44770__$1;
(statearr_44805_44857[(1)] = (5));

} else {
var statearr_44806_44858 = state_44770__$1;
(statearr_44806_44858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (23))){
var inst_44729 = (state_44770[(14)]);
var inst_44735 = (inst_44729 == null);
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44735)){
var statearr_44807_44859 = state_44770__$1;
(statearr_44807_44859[(1)] = (26));

} else {
var statearr_44808_44860 = state_44770__$1;
(statearr_44808_44860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (35))){
var inst_44755 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
if(cljs.core.truth_(inst_44755)){
var statearr_44809_44861 = state_44770__$1;
(statearr_44809_44861[(1)] = (36));

} else {
var statearr_44810_44862 = state_44770__$1;
(statearr_44810_44862[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (19))){
var inst_44697 = (state_44770[(7)]);
var inst_44717 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44697);
var state_44770__$1 = state_44770;
var statearr_44811_44863 = state_44770__$1;
(statearr_44811_44863[(2)] = inst_44717);

(statearr_44811_44863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (11))){
var inst_44697 = (state_44770[(7)]);
var inst_44701 = (inst_44697 == null);
var inst_44702 = cljs.core.not.call(null,inst_44701);
var state_44770__$1 = state_44770;
if(inst_44702){
var statearr_44812_44864 = state_44770__$1;
(statearr_44812_44864[(1)] = (13));

} else {
var statearr_44813_44865 = state_44770__$1;
(statearr_44813_44865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (9))){
var inst_44672 = (state_44770[(8)]);
var state_44770__$1 = state_44770;
var statearr_44814_44866 = state_44770__$1;
(statearr_44814_44866[(2)] = inst_44672);

(statearr_44814_44866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (5))){
var state_44770__$1 = state_44770;
var statearr_44815_44867 = state_44770__$1;
(statearr_44815_44867[(2)] = true);

(statearr_44815_44867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (14))){
var state_44770__$1 = state_44770;
var statearr_44816_44868 = state_44770__$1;
(statearr_44816_44868[(2)] = false);

(statearr_44816_44868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (26))){
var inst_44730 = (state_44770[(11)]);
var inst_44737 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44730);
var state_44770__$1 = state_44770;
var statearr_44817_44869 = state_44770__$1;
(statearr_44817_44869[(2)] = inst_44737);

(statearr_44817_44869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (16))){
var state_44770__$1 = state_44770;
var statearr_44818_44870 = state_44770__$1;
(statearr_44818_44870[(2)] = true);

(statearr_44818_44870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (38))){
var inst_44760 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
var statearr_44819_44871 = state_44770__$1;
(statearr_44819_44871[(2)] = inst_44760);

(statearr_44819_44871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (30))){
var inst_44721 = (state_44770[(9)]);
var inst_44722 = (state_44770[(13)]);
var inst_44730 = (state_44770[(11)]);
var inst_44747 = cljs.core.empty_QMARK_.call(null,inst_44721);
var inst_44748 = inst_44722.call(null,inst_44730);
var inst_44749 = cljs.core.not.call(null,inst_44748);
var inst_44750 = ((inst_44747) && (inst_44749));
var state_44770__$1 = state_44770;
var statearr_44820_44872 = state_44770__$1;
(statearr_44820_44872[(2)] = inst_44750);

(statearr_44820_44872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (10))){
var inst_44672 = (state_44770[(8)]);
var inst_44693 = (state_44770[(2)]);
var inst_44694 = cljs.core.get.call(null,inst_44693,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44695 = cljs.core.get.call(null,inst_44693,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44696 = cljs.core.get.call(null,inst_44693,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44697 = inst_44672;
var state_44770__$1 = (function (){var statearr_44821 = state_44770;
(statearr_44821[(16)] = inst_44695);

(statearr_44821[(17)] = inst_44696);

(statearr_44821[(18)] = inst_44694);

(statearr_44821[(7)] = inst_44697);

return statearr_44821;
})();
var statearr_44822_44873 = state_44770__$1;
(statearr_44822_44873[(2)] = null);

(statearr_44822_44873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (18))){
var inst_44712 = (state_44770[(2)]);
var state_44770__$1 = state_44770;
var statearr_44823_44874 = state_44770__$1;
(statearr_44823_44874[(2)] = inst_44712);

(statearr_44823_44874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (37))){
var state_44770__$1 = state_44770;
var statearr_44824_44875 = state_44770__$1;
(statearr_44824_44875[(2)] = null);

(statearr_44824_44875[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44771 === (8))){
var inst_44672 = (state_44770[(8)]);
var inst_44690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44672);
var state_44770__$1 = state_44770;
var statearr_44825_44876 = state_44770__$1;
(statearr_44825_44876[(2)] = inst_44690);

(statearr_44825_44876[(1)] = (10));


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
});})(c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29238__auto__,c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29239__auto__ = null;
var cljs$core$async$mix_$_state_machine__29239__auto____0 = (function (){
var statearr_44826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44826[(0)] = cljs$core$async$mix_$_state_machine__29239__auto__);

(statearr_44826[(1)] = (1));

return statearr_44826;
});
var cljs$core$async$mix_$_state_machine__29239__auto____1 = (function (state_44770){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e44827){if((e44827 instanceof Object)){
var ex__29242__auto__ = e44827;
var statearr_44828_44877 = state_44770;
(statearr_44828_44877[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44878 = state_44770;
state_44770 = G__44878;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29239__auto__ = function(state_44770){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29239__auto____1.call(this,state_44770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29239__auto____0;
cljs$core$async$mix_$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29239__auto____1;
return cljs$core$async$mix_$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29335__auto__ = (function (){var statearr_44829 = f__29334__auto__.call(null);
(statearr_44829[(6)] = c__29333__auto___44830);

return statearr_44829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___44830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44880 = arguments.length;
switch (G__44880) {
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
var G__44884 = arguments.length;
switch (G__44884) {
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
return (function (p1__44882_SHARP_){
if(cljs.core.truth_(p1__44882_SHARP_.call(null,topic))){
return p1__44882_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44882_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44885 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44886){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44886 = meta44886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44887,meta44886__$1){
var self__ = this;
var _44887__$1 = this;
return (new cljs.core.async.t_cljs$core$async44885(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44886__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44887){
var self__ = this;
var _44887__$1 = this;
return self__.meta44886;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44886","meta44886",165899411,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44885";

cljs.core.async.t_cljs$core$async44885.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44885");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44885.
 */
cljs.core.async.__GT_t_cljs$core$async44885 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44885(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44886){
return (new cljs.core.async.t_cljs$core$async44885(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44886));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44885(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29333__auto___45005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45005,mults,ensure_mult,p){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45005,mults,ensure_mult,p){
return (function (state_44959){
var state_val_44960 = (state_44959[(1)]);
if((state_val_44960 === (7))){
var inst_44955 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44961_45006 = state_44959__$1;
(statearr_44961_45006[(2)] = inst_44955);

(statearr_44961_45006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (20))){
var state_44959__$1 = state_44959;
var statearr_44962_45007 = state_44959__$1;
(statearr_44962_45007[(2)] = null);

(statearr_44962_45007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (1))){
var state_44959__$1 = state_44959;
var statearr_44963_45008 = state_44959__$1;
(statearr_44963_45008[(2)] = null);

(statearr_44963_45008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (24))){
var inst_44938 = (state_44959[(7)]);
var inst_44947 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44938);
var state_44959__$1 = state_44959;
var statearr_44964_45009 = state_44959__$1;
(statearr_44964_45009[(2)] = inst_44947);

(statearr_44964_45009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (4))){
var inst_44890 = (state_44959[(8)]);
var inst_44890__$1 = (state_44959[(2)]);
var inst_44891 = (inst_44890__$1 == null);
var state_44959__$1 = (function (){var statearr_44965 = state_44959;
(statearr_44965[(8)] = inst_44890__$1);

return statearr_44965;
})();
if(cljs.core.truth_(inst_44891)){
var statearr_44966_45010 = state_44959__$1;
(statearr_44966_45010[(1)] = (5));

} else {
var statearr_44967_45011 = state_44959__$1;
(statearr_44967_45011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (15))){
var inst_44932 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44968_45012 = state_44959__$1;
(statearr_44968_45012[(2)] = inst_44932);

(statearr_44968_45012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (21))){
var inst_44952 = (state_44959[(2)]);
var state_44959__$1 = (function (){var statearr_44969 = state_44959;
(statearr_44969[(9)] = inst_44952);

return statearr_44969;
})();
var statearr_44970_45013 = state_44959__$1;
(statearr_44970_45013[(2)] = null);

(statearr_44970_45013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (13))){
var inst_44914 = (state_44959[(10)]);
var inst_44916 = cljs.core.chunked_seq_QMARK_.call(null,inst_44914);
var state_44959__$1 = state_44959;
if(inst_44916){
var statearr_44971_45014 = state_44959__$1;
(statearr_44971_45014[(1)] = (16));

} else {
var statearr_44972_45015 = state_44959__$1;
(statearr_44972_45015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (22))){
var inst_44944 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
if(cljs.core.truth_(inst_44944)){
var statearr_44973_45016 = state_44959__$1;
(statearr_44973_45016[(1)] = (23));

} else {
var statearr_44974_45017 = state_44959__$1;
(statearr_44974_45017[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (6))){
var inst_44940 = (state_44959[(11)]);
var inst_44938 = (state_44959[(7)]);
var inst_44890 = (state_44959[(8)]);
var inst_44938__$1 = topic_fn.call(null,inst_44890);
var inst_44939 = cljs.core.deref.call(null,mults);
var inst_44940__$1 = cljs.core.get.call(null,inst_44939,inst_44938__$1);
var state_44959__$1 = (function (){var statearr_44975 = state_44959;
(statearr_44975[(11)] = inst_44940__$1);

(statearr_44975[(7)] = inst_44938__$1);

return statearr_44975;
})();
if(cljs.core.truth_(inst_44940__$1)){
var statearr_44976_45018 = state_44959__$1;
(statearr_44976_45018[(1)] = (19));

} else {
var statearr_44977_45019 = state_44959__$1;
(statearr_44977_45019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (25))){
var inst_44949 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44978_45020 = state_44959__$1;
(statearr_44978_45020[(2)] = inst_44949);

(statearr_44978_45020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (17))){
var inst_44914 = (state_44959[(10)]);
var inst_44923 = cljs.core.first.call(null,inst_44914);
var inst_44924 = cljs.core.async.muxch_STAR_.call(null,inst_44923);
var inst_44925 = cljs.core.async.close_BANG_.call(null,inst_44924);
var inst_44926 = cljs.core.next.call(null,inst_44914);
var inst_44900 = inst_44926;
var inst_44901 = null;
var inst_44902 = (0);
var inst_44903 = (0);
var state_44959__$1 = (function (){var statearr_44979 = state_44959;
(statearr_44979[(12)] = inst_44902);

(statearr_44979[(13)] = inst_44901);

(statearr_44979[(14)] = inst_44925);

(statearr_44979[(15)] = inst_44903);

(statearr_44979[(16)] = inst_44900);

return statearr_44979;
})();
var statearr_44980_45021 = state_44959__$1;
(statearr_44980_45021[(2)] = null);

(statearr_44980_45021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (3))){
var inst_44957 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44959__$1,inst_44957);
} else {
if((state_val_44960 === (12))){
var inst_44934 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44981_45022 = state_44959__$1;
(statearr_44981_45022[(2)] = inst_44934);

(statearr_44981_45022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (2))){
var state_44959__$1 = state_44959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44959__$1,(4),ch);
} else {
if((state_val_44960 === (23))){
var state_44959__$1 = state_44959;
var statearr_44982_45023 = state_44959__$1;
(statearr_44982_45023[(2)] = null);

(statearr_44982_45023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (19))){
var inst_44940 = (state_44959[(11)]);
var inst_44890 = (state_44959[(8)]);
var inst_44942 = cljs.core.async.muxch_STAR_.call(null,inst_44940);
var state_44959__$1 = state_44959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44959__$1,(22),inst_44942,inst_44890);
} else {
if((state_val_44960 === (11))){
var inst_44914 = (state_44959[(10)]);
var inst_44900 = (state_44959[(16)]);
var inst_44914__$1 = cljs.core.seq.call(null,inst_44900);
var state_44959__$1 = (function (){var statearr_44983 = state_44959;
(statearr_44983[(10)] = inst_44914__$1);

return statearr_44983;
})();
if(inst_44914__$1){
var statearr_44984_45024 = state_44959__$1;
(statearr_44984_45024[(1)] = (13));

} else {
var statearr_44985_45025 = state_44959__$1;
(statearr_44985_45025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (9))){
var inst_44936 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44986_45026 = state_44959__$1;
(statearr_44986_45026[(2)] = inst_44936);

(statearr_44986_45026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (5))){
var inst_44897 = cljs.core.deref.call(null,mults);
var inst_44898 = cljs.core.vals.call(null,inst_44897);
var inst_44899 = cljs.core.seq.call(null,inst_44898);
var inst_44900 = inst_44899;
var inst_44901 = null;
var inst_44902 = (0);
var inst_44903 = (0);
var state_44959__$1 = (function (){var statearr_44987 = state_44959;
(statearr_44987[(12)] = inst_44902);

(statearr_44987[(13)] = inst_44901);

(statearr_44987[(15)] = inst_44903);

(statearr_44987[(16)] = inst_44900);

return statearr_44987;
})();
var statearr_44988_45027 = state_44959__$1;
(statearr_44988_45027[(2)] = null);

(statearr_44988_45027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (14))){
var state_44959__$1 = state_44959;
var statearr_44992_45028 = state_44959__$1;
(statearr_44992_45028[(2)] = null);

(statearr_44992_45028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (16))){
var inst_44914 = (state_44959[(10)]);
var inst_44918 = cljs.core.chunk_first.call(null,inst_44914);
var inst_44919 = cljs.core.chunk_rest.call(null,inst_44914);
var inst_44920 = cljs.core.count.call(null,inst_44918);
var inst_44900 = inst_44919;
var inst_44901 = inst_44918;
var inst_44902 = inst_44920;
var inst_44903 = (0);
var state_44959__$1 = (function (){var statearr_44993 = state_44959;
(statearr_44993[(12)] = inst_44902);

(statearr_44993[(13)] = inst_44901);

(statearr_44993[(15)] = inst_44903);

(statearr_44993[(16)] = inst_44900);

return statearr_44993;
})();
var statearr_44994_45029 = state_44959__$1;
(statearr_44994_45029[(2)] = null);

(statearr_44994_45029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (10))){
var inst_44902 = (state_44959[(12)]);
var inst_44901 = (state_44959[(13)]);
var inst_44903 = (state_44959[(15)]);
var inst_44900 = (state_44959[(16)]);
var inst_44908 = cljs.core._nth.call(null,inst_44901,inst_44903);
var inst_44909 = cljs.core.async.muxch_STAR_.call(null,inst_44908);
var inst_44910 = cljs.core.async.close_BANG_.call(null,inst_44909);
var inst_44911 = (inst_44903 + (1));
var tmp44989 = inst_44902;
var tmp44990 = inst_44901;
var tmp44991 = inst_44900;
var inst_44900__$1 = tmp44991;
var inst_44901__$1 = tmp44990;
var inst_44902__$1 = tmp44989;
var inst_44903__$1 = inst_44911;
var state_44959__$1 = (function (){var statearr_44995 = state_44959;
(statearr_44995[(12)] = inst_44902__$1);

(statearr_44995[(13)] = inst_44901__$1);

(statearr_44995[(17)] = inst_44910);

(statearr_44995[(15)] = inst_44903__$1);

(statearr_44995[(16)] = inst_44900__$1);

return statearr_44995;
})();
var statearr_44996_45030 = state_44959__$1;
(statearr_44996_45030[(2)] = null);

(statearr_44996_45030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (18))){
var inst_44929 = (state_44959[(2)]);
var state_44959__$1 = state_44959;
var statearr_44997_45031 = state_44959__$1;
(statearr_44997_45031[(2)] = inst_44929);

(statearr_44997_45031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44960 === (8))){
var inst_44902 = (state_44959[(12)]);
var inst_44903 = (state_44959[(15)]);
var inst_44905 = (inst_44903 < inst_44902);
var inst_44906 = inst_44905;
var state_44959__$1 = state_44959;
if(cljs.core.truth_(inst_44906)){
var statearr_44998_45032 = state_44959__$1;
(statearr_44998_45032[(1)] = (10));

} else {
var statearr_44999_45033 = state_44959__$1;
(statearr_44999_45033[(1)] = (11));

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
});})(c__29333__auto___45005,mults,ensure_mult,p))
;
return ((function (switch__29238__auto__,c__29333__auto___45005,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45000[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45000[(1)] = (1));

return statearr_45000;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_44959){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_44959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45001){if((e45001 instanceof Object)){
var ex__29242__auto__ = e45001;
var statearr_45002_45034 = state_44959;
(statearr_45002_45034[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45035 = state_44959;
state_44959 = G__45035;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_44959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_44959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45005,mults,ensure_mult,p))
})();
var state__29335__auto__ = (function (){var statearr_45003 = f__29334__auto__.call(null);
(statearr_45003[(6)] = c__29333__auto___45005);

return statearr_45003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45005,mults,ensure_mult,p))
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
var G__45037 = arguments.length;
switch (G__45037) {
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
var G__45040 = arguments.length;
switch (G__45040) {
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
var G__45043 = arguments.length;
switch (G__45043) {
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
var c__29333__auto___45110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45082){
var state_val_45083 = (state_45082[(1)]);
if((state_val_45083 === (7))){
var state_45082__$1 = state_45082;
var statearr_45084_45111 = state_45082__$1;
(statearr_45084_45111[(2)] = null);

(statearr_45084_45111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (1))){
var state_45082__$1 = state_45082;
var statearr_45085_45112 = state_45082__$1;
(statearr_45085_45112[(2)] = null);

(statearr_45085_45112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (4))){
var inst_45046 = (state_45082[(7)]);
var inst_45048 = (inst_45046 < cnt);
var state_45082__$1 = state_45082;
if(cljs.core.truth_(inst_45048)){
var statearr_45086_45113 = state_45082__$1;
(statearr_45086_45113[(1)] = (6));

} else {
var statearr_45087_45114 = state_45082__$1;
(statearr_45087_45114[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (15))){
var inst_45078 = (state_45082[(2)]);
var state_45082__$1 = state_45082;
var statearr_45088_45115 = state_45082__$1;
(statearr_45088_45115[(2)] = inst_45078);

(statearr_45088_45115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (13))){
var inst_45071 = cljs.core.async.close_BANG_.call(null,out);
var state_45082__$1 = state_45082;
var statearr_45089_45116 = state_45082__$1;
(statearr_45089_45116[(2)] = inst_45071);

(statearr_45089_45116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (6))){
var state_45082__$1 = state_45082;
var statearr_45090_45117 = state_45082__$1;
(statearr_45090_45117[(2)] = null);

(statearr_45090_45117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (3))){
var inst_45080 = (state_45082[(2)]);
var state_45082__$1 = state_45082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45082__$1,inst_45080);
} else {
if((state_val_45083 === (12))){
var inst_45068 = (state_45082[(8)]);
var inst_45068__$1 = (state_45082[(2)]);
var inst_45069 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45068__$1);
var state_45082__$1 = (function (){var statearr_45091 = state_45082;
(statearr_45091[(8)] = inst_45068__$1);

return statearr_45091;
})();
if(cljs.core.truth_(inst_45069)){
var statearr_45092_45118 = state_45082__$1;
(statearr_45092_45118[(1)] = (13));

} else {
var statearr_45093_45119 = state_45082__$1;
(statearr_45093_45119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (2))){
var inst_45045 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45046 = (0);
var state_45082__$1 = (function (){var statearr_45094 = state_45082;
(statearr_45094[(7)] = inst_45046);

(statearr_45094[(9)] = inst_45045);

return statearr_45094;
})();
var statearr_45095_45120 = state_45082__$1;
(statearr_45095_45120[(2)] = null);

(statearr_45095_45120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (11))){
var inst_45046 = (state_45082[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45082,(10),Object,null,(9));
var inst_45055 = chs__$1.call(null,inst_45046);
var inst_45056 = done.call(null,inst_45046);
var inst_45057 = cljs.core.async.take_BANG_.call(null,inst_45055,inst_45056);
var state_45082__$1 = state_45082;
var statearr_45096_45121 = state_45082__$1;
(statearr_45096_45121[(2)] = inst_45057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (9))){
var inst_45046 = (state_45082[(7)]);
var inst_45059 = (state_45082[(2)]);
var inst_45060 = (inst_45046 + (1));
var inst_45046__$1 = inst_45060;
var state_45082__$1 = (function (){var statearr_45097 = state_45082;
(statearr_45097[(7)] = inst_45046__$1);

(statearr_45097[(10)] = inst_45059);

return statearr_45097;
})();
var statearr_45098_45122 = state_45082__$1;
(statearr_45098_45122[(2)] = null);

(statearr_45098_45122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (5))){
var inst_45066 = (state_45082[(2)]);
var state_45082__$1 = (function (){var statearr_45099 = state_45082;
(statearr_45099[(11)] = inst_45066);

return statearr_45099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45082__$1,(12),dchan);
} else {
if((state_val_45083 === (14))){
var inst_45068 = (state_45082[(8)]);
var inst_45073 = cljs.core.apply.call(null,f,inst_45068);
var state_45082__$1 = state_45082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45082__$1,(16),out,inst_45073);
} else {
if((state_val_45083 === (16))){
var inst_45075 = (state_45082[(2)]);
var state_45082__$1 = (function (){var statearr_45100 = state_45082;
(statearr_45100[(12)] = inst_45075);

return statearr_45100;
})();
var statearr_45101_45123 = state_45082__$1;
(statearr_45101_45123[(2)] = null);

(statearr_45101_45123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (10))){
var inst_45050 = (state_45082[(2)]);
var inst_45051 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45082__$1 = (function (){var statearr_45102 = state_45082;
(statearr_45102[(13)] = inst_45050);

return statearr_45102;
})();
var statearr_45103_45124 = state_45082__$1;
(statearr_45103_45124[(2)] = inst_45051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45083 === (8))){
var inst_45064 = (state_45082[(2)]);
var state_45082__$1 = state_45082;
var statearr_45104_45125 = state_45082__$1;
(statearr_45104_45125[(2)] = inst_45064);

(statearr_45104_45125[(1)] = (5));


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
});})(c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29238__auto__,c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45105[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45105[(1)] = (1));

return statearr_45105;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45082){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45106){if((e45106 instanceof Object)){
var ex__29242__auto__ = e45106;
var statearr_45107_45126 = state_45082;
(statearr_45107_45126[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45127 = state_45082;
state_45082 = G__45127;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29335__auto__ = (function (){var statearr_45108 = f__29334__auto__.call(null);
(statearr_45108[(6)] = c__29333__auto___45110);

return statearr_45108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45110,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45130 = arguments.length;
switch (G__45130) {
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
var c__29333__auto___45184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45184,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45184,out){
return (function (state_45162){
var state_val_45163 = (state_45162[(1)]);
if((state_val_45163 === (7))){
var inst_45142 = (state_45162[(7)]);
var inst_45141 = (state_45162[(8)]);
var inst_45141__$1 = (state_45162[(2)]);
var inst_45142__$1 = cljs.core.nth.call(null,inst_45141__$1,(0),null);
var inst_45143 = cljs.core.nth.call(null,inst_45141__$1,(1),null);
var inst_45144 = (inst_45142__$1 == null);
var state_45162__$1 = (function (){var statearr_45164 = state_45162;
(statearr_45164[(7)] = inst_45142__$1);

(statearr_45164[(8)] = inst_45141__$1);

(statearr_45164[(9)] = inst_45143);

return statearr_45164;
})();
if(cljs.core.truth_(inst_45144)){
var statearr_45165_45185 = state_45162__$1;
(statearr_45165_45185[(1)] = (8));

} else {
var statearr_45166_45186 = state_45162__$1;
(statearr_45166_45186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (1))){
var inst_45131 = cljs.core.vec.call(null,chs);
var inst_45132 = inst_45131;
var state_45162__$1 = (function (){var statearr_45167 = state_45162;
(statearr_45167[(10)] = inst_45132);

return statearr_45167;
})();
var statearr_45168_45187 = state_45162__$1;
(statearr_45168_45187[(2)] = null);

(statearr_45168_45187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (4))){
var inst_45132 = (state_45162[(10)]);
var state_45162__$1 = state_45162;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45162__$1,(7),inst_45132);
} else {
if((state_val_45163 === (6))){
var inst_45158 = (state_45162[(2)]);
var state_45162__$1 = state_45162;
var statearr_45169_45188 = state_45162__$1;
(statearr_45169_45188[(2)] = inst_45158);

(statearr_45169_45188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (3))){
var inst_45160 = (state_45162[(2)]);
var state_45162__$1 = state_45162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45162__$1,inst_45160);
} else {
if((state_val_45163 === (2))){
var inst_45132 = (state_45162[(10)]);
var inst_45134 = cljs.core.count.call(null,inst_45132);
var inst_45135 = (inst_45134 > (0));
var state_45162__$1 = state_45162;
if(cljs.core.truth_(inst_45135)){
var statearr_45171_45189 = state_45162__$1;
(statearr_45171_45189[(1)] = (4));

} else {
var statearr_45172_45190 = state_45162__$1;
(statearr_45172_45190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (11))){
var inst_45132 = (state_45162[(10)]);
var inst_45151 = (state_45162[(2)]);
var tmp45170 = inst_45132;
var inst_45132__$1 = tmp45170;
var state_45162__$1 = (function (){var statearr_45173 = state_45162;
(statearr_45173[(11)] = inst_45151);

(statearr_45173[(10)] = inst_45132__$1);

return statearr_45173;
})();
var statearr_45174_45191 = state_45162__$1;
(statearr_45174_45191[(2)] = null);

(statearr_45174_45191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (9))){
var inst_45142 = (state_45162[(7)]);
var state_45162__$1 = state_45162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45162__$1,(11),out,inst_45142);
} else {
if((state_val_45163 === (5))){
var inst_45156 = cljs.core.async.close_BANG_.call(null,out);
var state_45162__$1 = state_45162;
var statearr_45175_45192 = state_45162__$1;
(statearr_45175_45192[(2)] = inst_45156);

(statearr_45175_45192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (10))){
var inst_45154 = (state_45162[(2)]);
var state_45162__$1 = state_45162;
var statearr_45176_45193 = state_45162__$1;
(statearr_45176_45193[(2)] = inst_45154);

(statearr_45176_45193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45163 === (8))){
var inst_45142 = (state_45162[(7)]);
var inst_45141 = (state_45162[(8)]);
var inst_45132 = (state_45162[(10)]);
var inst_45143 = (state_45162[(9)]);
var inst_45146 = (function (){var cs = inst_45132;
var vec__45137 = inst_45141;
var v = inst_45142;
var c = inst_45143;
return ((function (cs,vec__45137,v,c,inst_45142,inst_45141,inst_45132,inst_45143,state_val_45163,c__29333__auto___45184,out){
return (function (p1__45128_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45128_SHARP_);
});
;})(cs,vec__45137,v,c,inst_45142,inst_45141,inst_45132,inst_45143,state_val_45163,c__29333__auto___45184,out))
})();
var inst_45147 = cljs.core.filterv.call(null,inst_45146,inst_45132);
var inst_45132__$1 = inst_45147;
var state_45162__$1 = (function (){var statearr_45177 = state_45162;
(statearr_45177[(10)] = inst_45132__$1);

return statearr_45177;
})();
var statearr_45178_45194 = state_45162__$1;
(statearr_45178_45194[(2)] = null);

(statearr_45178_45194[(1)] = (2));


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
});})(c__29333__auto___45184,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45184,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45179[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45179[(1)] = (1));

return statearr_45179;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45162){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45180){if((e45180 instanceof Object)){
var ex__29242__auto__ = e45180;
var statearr_45181_45195 = state_45162;
(statearr_45181_45195[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45196 = state_45162;
state_45162 = G__45196;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45184,out))
})();
var state__29335__auto__ = (function (){var statearr_45182 = f__29334__auto__.call(null);
(statearr_45182[(6)] = c__29333__auto___45184);

return statearr_45182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45184,out))
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
var G__45198 = arguments.length;
switch (G__45198) {
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
var c__29333__auto___45243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45243,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45243,out){
return (function (state_45222){
var state_val_45223 = (state_45222[(1)]);
if((state_val_45223 === (7))){
var inst_45204 = (state_45222[(7)]);
var inst_45204__$1 = (state_45222[(2)]);
var inst_45205 = (inst_45204__$1 == null);
var inst_45206 = cljs.core.not.call(null,inst_45205);
var state_45222__$1 = (function (){var statearr_45224 = state_45222;
(statearr_45224[(7)] = inst_45204__$1);

return statearr_45224;
})();
if(inst_45206){
var statearr_45225_45244 = state_45222__$1;
(statearr_45225_45244[(1)] = (8));

} else {
var statearr_45226_45245 = state_45222__$1;
(statearr_45226_45245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (1))){
var inst_45199 = (0);
var state_45222__$1 = (function (){var statearr_45227 = state_45222;
(statearr_45227[(8)] = inst_45199);

return statearr_45227;
})();
var statearr_45228_45246 = state_45222__$1;
(statearr_45228_45246[(2)] = null);

(statearr_45228_45246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (4))){
var state_45222__$1 = state_45222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45222__$1,(7),ch);
} else {
if((state_val_45223 === (6))){
var inst_45217 = (state_45222[(2)]);
var state_45222__$1 = state_45222;
var statearr_45229_45247 = state_45222__$1;
(statearr_45229_45247[(2)] = inst_45217);

(statearr_45229_45247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (3))){
var inst_45219 = (state_45222[(2)]);
var inst_45220 = cljs.core.async.close_BANG_.call(null,out);
var state_45222__$1 = (function (){var statearr_45230 = state_45222;
(statearr_45230[(9)] = inst_45219);

return statearr_45230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45222__$1,inst_45220);
} else {
if((state_val_45223 === (2))){
var inst_45199 = (state_45222[(8)]);
var inst_45201 = (inst_45199 < n);
var state_45222__$1 = state_45222;
if(cljs.core.truth_(inst_45201)){
var statearr_45231_45248 = state_45222__$1;
(statearr_45231_45248[(1)] = (4));

} else {
var statearr_45232_45249 = state_45222__$1;
(statearr_45232_45249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (11))){
var inst_45199 = (state_45222[(8)]);
var inst_45209 = (state_45222[(2)]);
var inst_45210 = (inst_45199 + (1));
var inst_45199__$1 = inst_45210;
var state_45222__$1 = (function (){var statearr_45233 = state_45222;
(statearr_45233[(8)] = inst_45199__$1);

(statearr_45233[(10)] = inst_45209);

return statearr_45233;
})();
var statearr_45234_45250 = state_45222__$1;
(statearr_45234_45250[(2)] = null);

(statearr_45234_45250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (9))){
var state_45222__$1 = state_45222;
var statearr_45235_45251 = state_45222__$1;
(statearr_45235_45251[(2)] = null);

(statearr_45235_45251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (5))){
var state_45222__$1 = state_45222;
var statearr_45236_45252 = state_45222__$1;
(statearr_45236_45252[(2)] = null);

(statearr_45236_45252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (10))){
var inst_45214 = (state_45222[(2)]);
var state_45222__$1 = state_45222;
var statearr_45237_45253 = state_45222__$1;
(statearr_45237_45253[(2)] = inst_45214);

(statearr_45237_45253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45223 === (8))){
var inst_45204 = (state_45222[(7)]);
var state_45222__$1 = state_45222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45222__$1,(11),out,inst_45204);
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
});})(c__29333__auto___45243,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45243,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45238 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45238[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45238[(1)] = (1));

return statearr_45238;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45222){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45239){if((e45239 instanceof Object)){
var ex__29242__auto__ = e45239;
var statearr_45240_45254 = state_45222;
(statearr_45240_45254[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45255 = state_45222;
state_45222 = G__45255;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45243,out))
})();
var state__29335__auto__ = (function (){var statearr_45241 = f__29334__auto__.call(null);
(statearr_45241[(6)] = c__29333__auto___45243);

return statearr_45241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45243,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45257 = (function (f,ch,meta45258){
this.f = f;
this.ch = ch;
this.meta45258 = meta45258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45259,meta45258__$1){
var self__ = this;
var _45259__$1 = this;
return (new cljs.core.async.t_cljs$core$async45257(self__.f,self__.ch,meta45258__$1));
});

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45259){
var self__ = this;
var _45259__$1 = this;
return self__.meta45258;
});

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45260 = (function (f,ch,meta45258,_,fn1,meta45261){
this.f = f;
this.ch = ch;
this.meta45258 = meta45258;
this._ = _;
this.fn1 = fn1;
this.meta45261 = meta45261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45262,meta45261__$1){
var self__ = this;
var _45262__$1 = this;
return (new cljs.core.async.t_cljs$core$async45260(self__.f,self__.ch,self__.meta45258,self__._,self__.fn1,meta45261__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45262){
var self__ = this;
var _45262__$1 = this;
return self__.meta45261;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45256_SHARP_){
return f1.call(null,(((p1__45256_SHARP_ == null))?null:self__.f.call(null,p1__45256_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45258","meta45258",-541094979,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45257","cljs.core.async/t_cljs$core$async45257",107257003,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45261","meta45261",-361189788,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45260";

cljs.core.async.t_cljs$core$async45260.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45260");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45260.
 */
cljs.core.async.__GT_t_cljs$core$async45260 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45260(f__$1,ch__$1,meta45258__$1,___$2,fn1__$1,meta45261){
return (new cljs.core.async.t_cljs$core$async45260(f__$1,ch__$1,meta45258__$1,___$2,fn1__$1,meta45261));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45260(self__.f,self__.ch,self__.meta45258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45258","meta45258",-541094979,null)], null);
});

cljs.core.async.t_cljs$core$async45257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45257";

cljs.core.async.t_cljs$core$async45257.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45257");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45257.
 */
cljs.core.async.__GT_t_cljs$core$async45257 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45257(f__$1,ch__$1,meta45258){
return (new cljs.core.async.t_cljs$core$async45257(f__$1,ch__$1,meta45258));
});

}

return (new cljs.core.async.t_cljs$core$async45257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45263 = (function (f,ch,meta45264){
this.f = f;
this.ch = ch;
this.meta45264 = meta45264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45265,meta45264__$1){
var self__ = this;
var _45265__$1 = this;
return (new cljs.core.async.t_cljs$core$async45263(self__.f,self__.ch,meta45264__$1));
});

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45265){
var self__ = this;
var _45265__$1 = this;
return self__.meta45264;
});

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45264","meta45264",-47071736,null)], null);
});

cljs.core.async.t_cljs$core$async45263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45263";

cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45263");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45263.
 */
cljs.core.async.__GT_t_cljs$core$async45263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45263(f__$1,ch__$1,meta45264){
return (new cljs.core.async.t_cljs$core$async45263(f__$1,ch__$1,meta45264));
});

}

return (new cljs.core.async.t_cljs$core$async45263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45266 = (function (p,ch,meta45267){
this.p = p;
this.ch = ch;
this.meta45267 = meta45267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45268,meta45267__$1){
var self__ = this;
var _45268__$1 = this;
return (new cljs.core.async.t_cljs$core$async45266(self__.p,self__.ch,meta45267__$1));
});

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45268){
var self__ = this;
var _45268__$1 = this;
return self__.meta45267;
});

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45267","meta45267",1319297182,null)], null);
});

cljs.core.async.t_cljs$core$async45266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45266";

cljs.core.async.t_cljs$core$async45266.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45266");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45266.
 */
cljs.core.async.__GT_t_cljs$core$async45266 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45266(p__$1,ch__$1,meta45267){
return (new cljs.core.async.t_cljs$core$async45266(p__$1,ch__$1,meta45267));
});

}

return (new cljs.core.async.t_cljs$core$async45266(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45270 = arguments.length;
switch (G__45270) {
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
var c__29333__auto___45310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45310,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45310,out){
return (function (state_45291){
var state_val_45292 = (state_45291[(1)]);
if((state_val_45292 === (7))){
var inst_45287 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45293_45311 = state_45291__$1;
(statearr_45293_45311[(2)] = inst_45287);

(statearr_45293_45311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (1))){
var state_45291__$1 = state_45291;
var statearr_45294_45312 = state_45291__$1;
(statearr_45294_45312[(2)] = null);

(statearr_45294_45312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (4))){
var inst_45273 = (state_45291[(7)]);
var inst_45273__$1 = (state_45291[(2)]);
var inst_45274 = (inst_45273__$1 == null);
var state_45291__$1 = (function (){var statearr_45295 = state_45291;
(statearr_45295[(7)] = inst_45273__$1);

return statearr_45295;
})();
if(cljs.core.truth_(inst_45274)){
var statearr_45296_45313 = state_45291__$1;
(statearr_45296_45313[(1)] = (5));

} else {
var statearr_45297_45314 = state_45291__$1;
(statearr_45297_45314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (6))){
var inst_45273 = (state_45291[(7)]);
var inst_45278 = p.call(null,inst_45273);
var state_45291__$1 = state_45291;
if(cljs.core.truth_(inst_45278)){
var statearr_45298_45315 = state_45291__$1;
(statearr_45298_45315[(1)] = (8));

} else {
var statearr_45299_45316 = state_45291__$1;
(statearr_45299_45316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (3))){
var inst_45289 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45291__$1,inst_45289);
} else {
if((state_val_45292 === (2))){
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45291__$1,(4),ch);
} else {
if((state_val_45292 === (11))){
var inst_45281 = (state_45291[(2)]);
var state_45291__$1 = state_45291;
var statearr_45300_45317 = state_45291__$1;
(statearr_45300_45317[(2)] = inst_45281);

(statearr_45300_45317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (9))){
var state_45291__$1 = state_45291;
var statearr_45301_45318 = state_45291__$1;
(statearr_45301_45318[(2)] = null);

(statearr_45301_45318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (5))){
var inst_45276 = cljs.core.async.close_BANG_.call(null,out);
var state_45291__$1 = state_45291;
var statearr_45302_45319 = state_45291__$1;
(statearr_45302_45319[(2)] = inst_45276);

(statearr_45302_45319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (10))){
var inst_45284 = (state_45291[(2)]);
var state_45291__$1 = (function (){var statearr_45303 = state_45291;
(statearr_45303[(8)] = inst_45284);

return statearr_45303;
})();
var statearr_45304_45320 = state_45291__$1;
(statearr_45304_45320[(2)] = null);

(statearr_45304_45320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45292 === (8))){
var inst_45273 = (state_45291[(7)]);
var state_45291__$1 = state_45291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45291__$1,(11),out,inst_45273);
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
});})(c__29333__auto___45310,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45310,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45305 = [null,null,null,null,null,null,null,null,null];
(statearr_45305[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45305[(1)] = (1));

return statearr_45305;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45291){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45306){if((e45306 instanceof Object)){
var ex__29242__auto__ = e45306;
var statearr_45307_45321 = state_45291;
(statearr_45307_45321[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45322 = state_45291;
state_45291 = G__45322;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45310,out))
})();
var state__29335__auto__ = (function (){var statearr_45308 = f__29334__auto__.call(null);
(statearr_45308[(6)] = c__29333__auto___45310);

return statearr_45308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45310,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45324 = arguments.length;
switch (G__45324) {
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
var c__29333__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto__){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto__){
return (function (state_45387){
var state_val_45388 = (state_45387[(1)]);
if((state_val_45388 === (7))){
var inst_45383 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45389_45427 = state_45387__$1;
(statearr_45389_45427[(2)] = inst_45383);

(statearr_45389_45427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (20))){
var inst_45353 = (state_45387[(7)]);
var inst_45364 = (state_45387[(2)]);
var inst_45365 = cljs.core.next.call(null,inst_45353);
var inst_45339 = inst_45365;
var inst_45340 = null;
var inst_45341 = (0);
var inst_45342 = (0);
var state_45387__$1 = (function (){var statearr_45390 = state_45387;
(statearr_45390[(8)] = inst_45339);

(statearr_45390[(9)] = inst_45364);

(statearr_45390[(10)] = inst_45340);

(statearr_45390[(11)] = inst_45342);

(statearr_45390[(12)] = inst_45341);

return statearr_45390;
})();
var statearr_45391_45428 = state_45387__$1;
(statearr_45391_45428[(2)] = null);

(statearr_45391_45428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (1))){
var state_45387__$1 = state_45387;
var statearr_45392_45429 = state_45387__$1;
(statearr_45392_45429[(2)] = null);

(statearr_45392_45429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (4))){
var inst_45328 = (state_45387[(13)]);
var inst_45328__$1 = (state_45387[(2)]);
var inst_45329 = (inst_45328__$1 == null);
var state_45387__$1 = (function (){var statearr_45393 = state_45387;
(statearr_45393[(13)] = inst_45328__$1);

return statearr_45393;
})();
if(cljs.core.truth_(inst_45329)){
var statearr_45394_45430 = state_45387__$1;
(statearr_45394_45430[(1)] = (5));

} else {
var statearr_45395_45431 = state_45387__$1;
(statearr_45395_45431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (15))){
var state_45387__$1 = state_45387;
var statearr_45399_45432 = state_45387__$1;
(statearr_45399_45432[(2)] = null);

(statearr_45399_45432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (21))){
var state_45387__$1 = state_45387;
var statearr_45400_45433 = state_45387__$1;
(statearr_45400_45433[(2)] = null);

(statearr_45400_45433[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (13))){
var inst_45339 = (state_45387[(8)]);
var inst_45340 = (state_45387[(10)]);
var inst_45342 = (state_45387[(11)]);
var inst_45341 = (state_45387[(12)]);
var inst_45349 = (state_45387[(2)]);
var inst_45350 = (inst_45342 + (1));
var tmp45396 = inst_45339;
var tmp45397 = inst_45340;
var tmp45398 = inst_45341;
var inst_45339__$1 = tmp45396;
var inst_45340__$1 = tmp45397;
var inst_45341__$1 = tmp45398;
var inst_45342__$1 = inst_45350;
var state_45387__$1 = (function (){var statearr_45401 = state_45387;
(statearr_45401[(8)] = inst_45339__$1);

(statearr_45401[(10)] = inst_45340__$1);

(statearr_45401[(11)] = inst_45342__$1);

(statearr_45401[(12)] = inst_45341__$1);

(statearr_45401[(14)] = inst_45349);

return statearr_45401;
})();
var statearr_45402_45434 = state_45387__$1;
(statearr_45402_45434[(2)] = null);

(statearr_45402_45434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (22))){
var state_45387__$1 = state_45387;
var statearr_45403_45435 = state_45387__$1;
(statearr_45403_45435[(2)] = null);

(statearr_45403_45435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (6))){
var inst_45328 = (state_45387[(13)]);
var inst_45337 = f.call(null,inst_45328);
var inst_45338 = cljs.core.seq.call(null,inst_45337);
var inst_45339 = inst_45338;
var inst_45340 = null;
var inst_45341 = (0);
var inst_45342 = (0);
var state_45387__$1 = (function (){var statearr_45404 = state_45387;
(statearr_45404[(8)] = inst_45339);

(statearr_45404[(10)] = inst_45340);

(statearr_45404[(11)] = inst_45342);

(statearr_45404[(12)] = inst_45341);

return statearr_45404;
})();
var statearr_45405_45436 = state_45387__$1;
(statearr_45405_45436[(2)] = null);

(statearr_45405_45436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (17))){
var inst_45353 = (state_45387[(7)]);
var inst_45357 = cljs.core.chunk_first.call(null,inst_45353);
var inst_45358 = cljs.core.chunk_rest.call(null,inst_45353);
var inst_45359 = cljs.core.count.call(null,inst_45357);
var inst_45339 = inst_45358;
var inst_45340 = inst_45357;
var inst_45341 = inst_45359;
var inst_45342 = (0);
var state_45387__$1 = (function (){var statearr_45406 = state_45387;
(statearr_45406[(8)] = inst_45339);

(statearr_45406[(10)] = inst_45340);

(statearr_45406[(11)] = inst_45342);

(statearr_45406[(12)] = inst_45341);

return statearr_45406;
})();
var statearr_45407_45437 = state_45387__$1;
(statearr_45407_45437[(2)] = null);

(statearr_45407_45437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (3))){
var inst_45385 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45387__$1,inst_45385);
} else {
if((state_val_45388 === (12))){
var inst_45373 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45408_45438 = state_45387__$1;
(statearr_45408_45438[(2)] = inst_45373);

(statearr_45408_45438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (2))){
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45387__$1,(4),in$);
} else {
if((state_val_45388 === (23))){
var inst_45381 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45409_45439 = state_45387__$1;
(statearr_45409_45439[(2)] = inst_45381);

(statearr_45409_45439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (19))){
var inst_45368 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45410_45440 = state_45387__$1;
(statearr_45410_45440[(2)] = inst_45368);

(statearr_45410_45440[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (11))){
var inst_45339 = (state_45387[(8)]);
var inst_45353 = (state_45387[(7)]);
var inst_45353__$1 = cljs.core.seq.call(null,inst_45339);
var state_45387__$1 = (function (){var statearr_45411 = state_45387;
(statearr_45411[(7)] = inst_45353__$1);

return statearr_45411;
})();
if(inst_45353__$1){
var statearr_45412_45441 = state_45387__$1;
(statearr_45412_45441[(1)] = (14));

} else {
var statearr_45413_45442 = state_45387__$1;
(statearr_45413_45442[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (9))){
var inst_45375 = (state_45387[(2)]);
var inst_45376 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45387__$1 = (function (){var statearr_45414 = state_45387;
(statearr_45414[(15)] = inst_45375);

return statearr_45414;
})();
if(cljs.core.truth_(inst_45376)){
var statearr_45415_45443 = state_45387__$1;
(statearr_45415_45443[(1)] = (21));

} else {
var statearr_45416_45444 = state_45387__$1;
(statearr_45416_45444[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (5))){
var inst_45331 = cljs.core.async.close_BANG_.call(null,out);
var state_45387__$1 = state_45387;
var statearr_45417_45445 = state_45387__$1;
(statearr_45417_45445[(2)] = inst_45331);

(statearr_45417_45445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (14))){
var inst_45353 = (state_45387[(7)]);
var inst_45355 = cljs.core.chunked_seq_QMARK_.call(null,inst_45353);
var state_45387__$1 = state_45387;
if(inst_45355){
var statearr_45418_45446 = state_45387__$1;
(statearr_45418_45446[(1)] = (17));

} else {
var statearr_45419_45447 = state_45387__$1;
(statearr_45419_45447[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (16))){
var inst_45371 = (state_45387[(2)]);
var state_45387__$1 = state_45387;
var statearr_45420_45448 = state_45387__$1;
(statearr_45420_45448[(2)] = inst_45371);

(statearr_45420_45448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45388 === (10))){
var inst_45340 = (state_45387[(10)]);
var inst_45342 = (state_45387[(11)]);
var inst_45347 = cljs.core._nth.call(null,inst_45340,inst_45342);
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45387__$1,(13),out,inst_45347);
} else {
if((state_val_45388 === (18))){
var inst_45353 = (state_45387[(7)]);
var inst_45362 = cljs.core.first.call(null,inst_45353);
var state_45387__$1 = state_45387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45387__$1,(20),out,inst_45362);
} else {
if((state_val_45388 === (8))){
var inst_45342 = (state_45387[(11)]);
var inst_45341 = (state_45387[(12)]);
var inst_45344 = (inst_45342 < inst_45341);
var inst_45345 = inst_45344;
var state_45387__$1 = state_45387;
if(cljs.core.truth_(inst_45345)){
var statearr_45421_45449 = state_45387__$1;
(statearr_45421_45449[(1)] = (10));

} else {
var statearr_45422_45450 = state_45387__$1;
(statearr_45422_45450[(1)] = (11));

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
});})(c__29333__auto__))
;
return ((function (switch__29238__auto__,c__29333__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____0 = (function (){
var statearr_45423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45423[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__);

(statearr_45423[(1)] = (1));

return statearr_45423;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____1 = (function (state_45387){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45424){if((e45424 instanceof Object)){
var ex__29242__auto__ = e45424;
var statearr_45425_45451 = state_45387;
(statearr_45425_45451[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45452 = state_45387;
state_45387 = G__45452;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__ = function(state_45387){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____1.call(this,state_45387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29239__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto__))
})();
var state__29335__auto__ = (function (){var statearr_45426 = f__29334__auto__.call(null);
(statearr_45426[(6)] = c__29333__auto__);

return statearr_45426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto__))
);

return c__29333__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45454 = arguments.length;
switch (G__45454) {
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
var G__45457 = arguments.length;
switch (G__45457) {
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
var G__45460 = arguments.length;
switch (G__45460) {
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
var c__29333__auto___45507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45507,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45507,out){
return (function (state_45484){
var state_val_45485 = (state_45484[(1)]);
if((state_val_45485 === (7))){
var inst_45479 = (state_45484[(2)]);
var state_45484__$1 = state_45484;
var statearr_45486_45508 = state_45484__$1;
(statearr_45486_45508[(2)] = inst_45479);

(statearr_45486_45508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (1))){
var inst_45461 = null;
var state_45484__$1 = (function (){var statearr_45487 = state_45484;
(statearr_45487[(7)] = inst_45461);

return statearr_45487;
})();
var statearr_45488_45509 = state_45484__$1;
(statearr_45488_45509[(2)] = null);

(statearr_45488_45509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (4))){
var inst_45464 = (state_45484[(8)]);
var inst_45464__$1 = (state_45484[(2)]);
var inst_45465 = (inst_45464__$1 == null);
var inst_45466 = cljs.core.not.call(null,inst_45465);
var state_45484__$1 = (function (){var statearr_45489 = state_45484;
(statearr_45489[(8)] = inst_45464__$1);

return statearr_45489;
})();
if(inst_45466){
var statearr_45490_45510 = state_45484__$1;
(statearr_45490_45510[(1)] = (5));

} else {
var statearr_45491_45511 = state_45484__$1;
(statearr_45491_45511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (6))){
var state_45484__$1 = state_45484;
var statearr_45492_45512 = state_45484__$1;
(statearr_45492_45512[(2)] = null);

(statearr_45492_45512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (3))){
var inst_45481 = (state_45484[(2)]);
var inst_45482 = cljs.core.async.close_BANG_.call(null,out);
var state_45484__$1 = (function (){var statearr_45493 = state_45484;
(statearr_45493[(9)] = inst_45481);

return statearr_45493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45484__$1,inst_45482);
} else {
if((state_val_45485 === (2))){
var state_45484__$1 = state_45484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45484__$1,(4),ch);
} else {
if((state_val_45485 === (11))){
var inst_45464 = (state_45484[(8)]);
var inst_45473 = (state_45484[(2)]);
var inst_45461 = inst_45464;
var state_45484__$1 = (function (){var statearr_45494 = state_45484;
(statearr_45494[(10)] = inst_45473);

(statearr_45494[(7)] = inst_45461);

return statearr_45494;
})();
var statearr_45495_45513 = state_45484__$1;
(statearr_45495_45513[(2)] = null);

(statearr_45495_45513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (9))){
var inst_45464 = (state_45484[(8)]);
var state_45484__$1 = state_45484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45484__$1,(11),out,inst_45464);
} else {
if((state_val_45485 === (5))){
var inst_45461 = (state_45484[(7)]);
var inst_45464 = (state_45484[(8)]);
var inst_45468 = cljs.core._EQ_.call(null,inst_45464,inst_45461);
var state_45484__$1 = state_45484;
if(inst_45468){
var statearr_45497_45514 = state_45484__$1;
(statearr_45497_45514[(1)] = (8));

} else {
var statearr_45498_45515 = state_45484__$1;
(statearr_45498_45515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (10))){
var inst_45476 = (state_45484[(2)]);
var state_45484__$1 = state_45484;
var statearr_45499_45516 = state_45484__$1;
(statearr_45499_45516[(2)] = inst_45476);

(statearr_45499_45516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45485 === (8))){
var inst_45461 = (state_45484[(7)]);
var tmp45496 = inst_45461;
var inst_45461__$1 = tmp45496;
var state_45484__$1 = (function (){var statearr_45500 = state_45484;
(statearr_45500[(7)] = inst_45461__$1);

return statearr_45500;
})();
var statearr_45501_45517 = state_45484__$1;
(statearr_45501_45517[(2)] = null);

(statearr_45501_45517[(1)] = (2));


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
});})(c__29333__auto___45507,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45507,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45502[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45502[(1)] = (1));

return statearr_45502;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45484){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45503){if((e45503 instanceof Object)){
var ex__29242__auto__ = e45503;
var statearr_45504_45518 = state_45484;
(statearr_45504_45518[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45519 = state_45484;
state_45484 = G__45519;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45507,out))
})();
var state__29335__auto__ = (function (){var statearr_45505 = f__29334__auto__.call(null);
(statearr_45505[(6)] = c__29333__auto___45507);

return statearr_45505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45507,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45521 = arguments.length;
switch (G__45521) {
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
var c__29333__auto___45587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45587,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45587,out){
return (function (state_45559){
var state_val_45560 = (state_45559[(1)]);
if((state_val_45560 === (7))){
var inst_45555 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45561_45588 = state_45559__$1;
(statearr_45561_45588[(2)] = inst_45555);

(statearr_45561_45588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (1))){
var inst_45522 = (new Array(n));
var inst_45523 = inst_45522;
var inst_45524 = (0);
var state_45559__$1 = (function (){var statearr_45562 = state_45559;
(statearr_45562[(7)] = inst_45524);

(statearr_45562[(8)] = inst_45523);

return statearr_45562;
})();
var statearr_45563_45589 = state_45559__$1;
(statearr_45563_45589[(2)] = null);

(statearr_45563_45589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (4))){
var inst_45527 = (state_45559[(9)]);
var inst_45527__$1 = (state_45559[(2)]);
var inst_45528 = (inst_45527__$1 == null);
var inst_45529 = cljs.core.not.call(null,inst_45528);
var state_45559__$1 = (function (){var statearr_45564 = state_45559;
(statearr_45564[(9)] = inst_45527__$1);

return statearr_45564;
})();
if(inst_45529){
var statearr_45565_45590 = state_45559__$1;
(statearr_45565_45590[(1)] = (5));

} else {
var statearr_45566_45591 = state_45559__$1;
(statearr_45566_45591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (15))){
var inst_45549 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45567_45592 = state_45559__$1;
(statearr_45567_45592[(2)] = inst_45549);

(statearr_45567_45592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (13))){
var state_45559__$1 = state_45559;
var statearr_45568_45593 = state_45559__$1;
(statearr_45568_45593[(2)] = null);

(statearr_45568_45593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (6))){
var inst_45524 = (state_45559[(7)]);
var inst_45545 = (inst_45524 > (0));
var state_45559__$1 = state_45559;
if(cljs.core.truth_(inst_45545)){
var statearr_45569_45594 = state_45559__$1;
(statearr_45569_45594[(1)] = (12));

} else {
var statearr_45570_45595 = state_45559__$1;
(statearr_45570_45595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (3))){
var inst_45557 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45559__$1,inst_45557);
} else {
if((state_val_45560 === (12))){
var inst_45523 = (state_45559[(8)]);
var inst_45547 = cljs.core.vec.call(null,inst_45523);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45559__$1,(15),out,inst_45547);
} else {
if((state_val_45560 === (2))){
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45559__$1,(4),ch);
} else {
if((state_val_45560 === (11))){
var inst_45539 = (state_45559[(2)]);
var inst_45540 = (new Array(n));
var inst_45523 = inst_45540;
var inst_45524 = (0);
var state_45559__$1 = (function (){var statearr_45571 = state_45559;
(statearr_45571[(10)] = inst_45539);

(statearr_45571[(7)] = inst_45524);

(statearr_45571[(8)] = inst_45523);

return statearr_45571;
})();
var statearr_45572_45596 = state_45559__$1;
(statearr_45572_45596[(2)] = null);

(statearr_45572_45596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (9))){
var inst_45523 = (state_45559[(8)]);
var inst_45537 = cljs.core.vec.call(null,inst_45523);
var state_45559__$1 = state_45559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45559__$1,(11),out,inst_45537);
} else {
if((state_val_45560 === (5))){
var inst_45527 = (state_45559[(9)]);
var inst_45524 = (state_45559[(7)]);
var inst_45523 = (state_45559[(8)]);
var inst_45532 = (state_45559[(11)]);
var inst_45531 = (inst_45523[inst_45524] = inst_45527);
var inst_45532__$1 = (inst_45524 + (1));
var inst_45533 = (inst_45532__$1 < n);
var state_45559__$1 = (function (){var statearr_45573 = state_45559;
(statearr_45573[(12)] = inst_45531);

(statearr_45573[(11)] = inst_45532__$1);

return statearr_45573;
})();
if(cljs.core.truth_(inst_45533)){
var statearr_45574_45597 = state_45559__$1;
(statearr_45574_45597[(1)] = (8));

} else {
var statearr_45575_45598 = state_45559__$1;
(statearr_45575_45598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (14))){
var inst_45552 = (state_45559[(2)]);
var inst_45553 = cljs.core.async.close_BANG_.call(null,out);
var state_45559__$1 = (function (){var statearr_45577 = state_45559;
(statearr_45577[(13)] = inst_45552);

return statearr_45577;
})();
var statearr_45578_45599 = state_45559__$1;
(statearr_45578_45599[(2)] = inst_45553);

(statearr_45578_45599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (10))){
var inst_45543 = (state_45559[(2)]);
var state_45559__$1 = state_45559;
var statearr_45579_45600 = state_45559__$1;
(statearr_45579_45600[(2)] = inst_45543);

(statearr_45579_45600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45560 === (8))){
var inst_45523 = (state_45559[(8)]);
var inst_45532 = (state_45559[(11)]);
var tmp45576 = inst_45523;
var inst_45523__$1 = tmp45576;
var inst_45524 = inst_45532;
var state_45559__$1 = (function (){var statearr_45580 = state_45559;
(statearr_45580[(7)] = inst_45524);

(statearr_45580[(8)] = inst_45523__$1);

return statearr_45580;
})();
var statearr_45581_45601 = state_45559__$1;
(statearr_45581_45601[(2)] = null);

(statearr_45581_45601[(1)] = (2));


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
});})(c__29333__auto___45587,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45587,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45582[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45582[(1)] = (1));

return statearr_45582;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45559){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45583){if((e45583 instanceof Object)){
var ex__29242__auto__ = e45583;
var statearr_45584_45602 = state_45559;
(statearr_45584_45602[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45603 = state_45559;
state_45559 = G__45603;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45587,out))
})();
var state__29335__auto__ = (function (){var statearr_45585 = f__29334__auto__.call(null);
(statearr_45585[(6)] = c__29333__auto___45587);

return statearr_45585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45587,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45605 = arguments.length;
switch (G__45605) {
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
var c__29333__auto___45675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29333__auto___45675,out){
return (function (){
var f__29334__auto__ = (function (){var switch__29238__auto__ = ((function (c__29333__auto___45675,out){
return (function (state_45647){
var state_val_45648 = (state_45647[(1)]);
if((state_val_45648 === (7))){
var inst_45643 = (state_45647[(2)]);
var state_45647__$1 = state_45647;
var statearr_45649_45676 = state_45647__$1;
(statearr_45649_45676[(2)] = inst_45643);

(statearr_45649_45676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (1))){
var inst_45606 = [];
var inst_45607 = inst_45606;
var inst_45608 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45647__$1 = (function (){var statearr_45650 = state_45647;
(statearr_45650[(7)] = inst_45607);

(statearr_45650[(8)] = inst_45608);

return statearr_45650;
})();
var statearr_45651_45677 = state_45647__$1;
(statearr_45651_45677[(2)] = null);

(statearr_45651_45677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (4))){
var inst_45611 = (state_45647[(9)]);
var inst_45611__$1 = (state_45647[(2)]);
var inst_45612 = (inst_45611__$1 == null);
var inst_45613 = cljs.core.not.call(null,inst_45612);
var state_45647__$1 = (function (){var statearr_45652 = state_45647;
(statearr_45652[(9)] = inst_45611__$1);

return statearr_45652;
})();
if(inst_45613){
var statearr_45653_45678 = state_45647__$1;
(statearr_45653_45678[(1)] = (5));

} else {
var statearr_45654_45679 = state_45647__$1;
(statearr_45654_45679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (15))){
var inst_45637 = (state_45647[(2)]);
var state_45647__$1 = state_45647;
var statearr_45655_45680 = state_45647__$1;
(statearr_45655_45680[(2)] = inst_45637);

(statearr_45655_45680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (13))){
var state_45647__$1 = state_45647;
var statearr_45656_45681 = state_45647__$1;
(statearr_45656_45681[(2)] = null);

(statearr_45656_45681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (6))){
var inst_45607 = (state_45647[(7)]);
var inst_45632 = inst_45607.length;
var inst_45633 = (inst_45632 > (0));
var state_45647__$1 = state_45647;
if(cljs.core.truth_(inst_45633)){
var statearr_45657_45682 = state_45647__$1;
(statearr_45657_45682[(1)] = (12));

} else {
var statearr_45658_45683 = state_45647__$1;
(statearr_45658_45683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (3))){
var inst_45645 = (state_45647[(2)]);
var state_45647__$1 = state_45647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45647__$1,inst_45645);
} else {
if((state_val_45648 === (12))){
var inst_45607 = (state_45647[(7)]);
var inst_45635 = cljs.core.vec.call(null,inst_45607);
var state_45647__$1 = state_45647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45647__$1,(15),out,inst_45635);
} else {
if((state_val_45648 === (2))){
var state_45647__$1 = state_45647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45647__$1,(4),ch);
} else {
if((state_val_45648 === (11))){
var inst_45611 = (state_45647[(9)]);
var inst_45615 = (state_45647[(10)]);
var inst_45625 = (state_45647[(2)]);
var inst_45626 = [];
var inst_45627 = inst_45626.push(inst_45611);
var inst_45607 = inst_45626;
var inst_45608 = inst_45615;
var state_45647__$1 = (function (){var statearr_45659 = state_45647;
(statearr_45659[(7)] = inst_45607);

(statearr_45659[(8)] = inst_45608);

(statearr_45659[(11)] = inst_45627);

(statearr_45659[(12)] = inst_45625);

return statearr_45659;
})();
var statearr_45660_45684 = state_45647__$1;
(statearr_45660_45684[(2)] = null);

(statearr_45660_45684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (9))){
var inst_45607 = (state_45647[(7)]);
var inst_45623 = cljs.core.vec.call(null,inst_45607);
var state_45647__$1 = state_45647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45647__$1,(11),out,inst_45623);
} else {
if((state_val_45648 === (5))){
var inst_45608 = (state_45647[(8)]);
var inst_45611 = (state_45647[(9)]);
var inst_45615 = (state_45647[(10)]);
var inst_45615__$1 = f.call(null,inst_45611);
var inst_45616 = cljs.core._EQ_.call(null,inst_45615__$1,inst_45608);
var inst_45617 = cljs.core.keyword_identical_QMARK_.call(null,inst_45608,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45618 = ((inst_45616) || (inst_45617));
var state_45647__$1 = (function (){var statearr_45661 = state_45647;
(statearr_45661[(10)] = inst_45615__$1);

return statearr_45661;
})();
if(cljs.core.truth_(inst_45618)){
var statearr_45662_45685 = state_45647__$1;
(statearr_45662_45685[(1)] = (8));

} else {
var statearr_45663_45686 = state_45647__$1;
(statearr_45663_45686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (14))){
var inst_45640 = (state_45647[(2)]);
var inst_45641 = cljs.core.async.close_BANG_.call(null,out);
var state_45647__$1 = (function (){var statearr_45665 = state_45647;
(statearr_45665[(13)] = inst_45640);

return statearr_45665;
})();
var statearr_45666_45687 = state_45647__$1;
(statearr_45666_45687[(2)] = inst_45641);

(statearr_45666_45687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (10))){
var inst_45630 = (state_45647[(2)]);
var state_45647__$1 = state_45647;
var statearr_45667_45688 = state_45647__$1;
(statearr_45667_45688[(2)] = inst_45630);

(statearr_45667_45688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45648 === (8))){
var inst_45607 = (state_45647[(7)]);
var inst_45611 = (state_45647[(9)]);
var inst_45615 = (state_45647[(10)]);
var inst_45620 = inst_45607.push(inst_45611);
var tmp45664 = inst_45607;
var inst_45607__$1 = tmp45664;
var inst_45608 = inst_45615;
var state_45647__$1 = (function (){var statearr_45668 = state_45647;
(statearr_45668[(7)] = inst_45607__$1);

(statearr_45668[(8)] = inst_45608);

(statearr_45668[(14)] = inst_45620);

return statearr_45668;
})();
var statearr_45669_45689 = state_45647__$1;
(statearr_45669_45689[(2)] = null);

(statearr_45669_45689[(1)] = (2));


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
});})(c__29333__auto___45675,out))
;
return ((function (switch__29238__auto__,c__29333__auto___45675,out){
return (function() {
var cljs$core$async$state_machine__29239__auto__ = null;
var cljs$core$async$state_machine__29239__auto____0 = (function (){
var statearr_45670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45670[(0)] = cljs$core$async$state_machine__29239__auto__);

(statearr_45670[(1)] = (1));

return statearr_45670;
});
var cljs$core$async$state_machine__29239__auto____1 = (function (state_45647){
while(true){
var ret_value__29240__auto__ = (function (){try{while(true){
var result__29241__auto__ = switch__29238__auto__.call(null,state_45647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29241__auto__;
}
break;
}
}catch (e45671){if((e45671 instanceof Object)){
var ex__29242__auto__ = e45671;
var statearr_45672_45690 = state_45647;
(statearr_45672_45690[(5)] = ex__29242__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45691 = state_45647;
state_45647 = G__45691;
continue;
} else {
return ret_value__29240__auto__;
}
break;
}
});
cljs$core$async$state_machine__29239__auto__ = function(state_45647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29239__auto____1.call(this,state_45647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29239__auto____0;
cljs$core$async$state_machine__29239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29239__auto____1;
return cljs$core$async$state_machine__29239__auto__;
})()
;})(switch__29238__auto__,c__29333__auto___45675,out))
})();
var state__29335__auto__ = (function (){var statearr_45673 = f__29334__auto__.call(null);
(statearr_45673[(6)] = c__29333__auto___45675);

return statearr_45673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29335__auto__);
});})(c__29333__auto___45675,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581079343621
