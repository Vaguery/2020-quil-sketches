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
var G__23762 = arguments.length;
switch (G__23762) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23763 = (function (f,blockable,meta23764){
this.f = f;
this.blockable = blockable;
this.meta23764 = meta23764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23765,meta23764__$1){
var self__ = this;
var _23765__$1 = this;
return (new cljs.core.async.t_cljs$core$async23763(self__.f,self__.blockable,meta23764__$1));
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23765){
var self__ = this;
var _23765__$1 = this;
return self__.meta23764;
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23764","meta23764",-1213524742,null)], null);
});

cljs.core.async.t_cljs$core$async23763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23763";

cljs.core.async.t_cljs$core$async23763.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23763");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23763.
 */
cljs.core.async.__GT_t_cljs$core$async23763 = (function cljs$core$async$__GT_t_cljs$core$async23763(f__$1,blockable__$1,meta23764){
return (new cljs.core.async.t_cljs$core$async23763(f__$1,blockable__$1,meta23764));
});

}

return (new cljs.core.async.t_cljs$core$async23763(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23769 = arguments.length;
switch (G__23769) {
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
var G__23772 = arguments.length;
switch (G__23772) {
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
var G__23775 = arguments.length;
switch (G__23775) {
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
var val_23777 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23777);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23777,ret){
return (function (){
return fn1.call(null,val_23777);
});})(val_23777,ret))
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
var G__23779 = arguments.length;
switch (G__23779) {
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
var n__4607__auto___23781 = n;
var x_23782 = (0);
while(true){
if((x_23782 < n__4607__auto___23781)){
(a[x_23782] = (0));

var G__23783 = (x_23782 + (1));
x_23782 = G__23783;
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

var G__23784 = (i + (1));
i = G__23784;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23785 = (function (flag,meta23786){
this.flag = flag;
this.meta23786 = meta23786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23787,meta23786__$1){
var self__ = this;
var _23787__$1 = this;
return (new cljs.core.async.t_cljs$core$async23785(self__.flag,meta23786__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23787){
var self__ = this;
var _23787__$1 = this;
return self__.meta23786;
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23786","meta23786",-737238635,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23785";

cljs.core.async.t_cljs$core$async23785.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23785");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23785.
 */
cljs.core.async.__GT_t_cljs$core$async23785 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23785(flag__$1,meta23786){
return (new cljs.core.async.t_cljs$core$async23785(flag__$1,meta23786));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23785(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23788 = (function (flag,cb,meta23789){
this.flag = flag;
this.cb = cb;
this.meta23789 = meta23789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23790,meta23789__$1){
var self__ = this;
var _23790__$1 = this;
return (new cljs.core.async.t_cljs$core$async23788(self__.flag,self__.cb,meta23789__$1));
});

cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23790){
var self__ = this;
var _23790__$1 = this;
return self__.meta23789;
});

cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23789","meta23789",-1171330954,null)], null);
});

cljs.core.async.t_cljs$core$async23788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23788";

cljs.core.async.t_cljs$core$async23788.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23788");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23788.
 */
cljs.core.async.__GT_t_cljs$core$async23788 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23788(flag__$1,cb__$1,meta23789){
return (new cljs.core.async.t_cljs$core$async23788(flag__$1,cb__$1,meta23789));
});

}

return (new cljs.core.async.t_cljs$core$async23788(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23791_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23791_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23792_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23792_SHARP_,port], null));
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
var G__23793 = (i + (1));
i = G__23793;
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
var len__4730__auto___23799 = arguments.length;
var i__4731__auto___23800 = (0);
while(true){
if((i__4731__auto___23800 < len__4730__auto___23799)){
args__4736__auto__.push((arguments[i__4731__auto___23800]));

var G__23801 = (i__4731__auto___23800 + (1));
i__4731__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23796){
var map__23797 = p__23796;
var map__23797__$1 = (((((!((map__23797 == null))))?(((((map__23797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23797):map__23797);
var opts = map__23797__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23794){
var G__23795 = cljs.core.first.call(null,seq23794);
var seq23794__$1 = cljs.core.next.call(null,seq23794);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23795,seq23794__$1);
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
var G__23803 = arguments.length;
switch (G__23803) {
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
var c__23702__auto___23849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___23849){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___23849){
return (function (state_23827){
var state_val_23828 = (state_23827[(1)]);
if((state_val_23828 === (7))){
var inst_23823 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
var statearr_23829_23850 = state_23827__$1;
(statearr_23829_23850[(2)] = inst_23823);

(statearr_23829_23850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (1))){
var state_23827__$1 = state_23827;
var statearr_23830_23851 = state_23827__$1;
(statearr_23830_23851[(2)] = null);

(statearr_23830_23851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (4))){
var inst_23806 = (state_23827[(7)]);
var inst_23806__$1 = (state_23827[(2)]);
var inst_23807 = (inst_23806__$1 == null);
var state_23827__$1 = (function (){var statearr_23831 = state_23827;
(statearr_23831[(7)] = inst_23806__$1);

return statearr_23831;
})();
if(cljs.core.truth_(inst_23807)){
var statearr_23832_23852 = state_23827__$1;
(statearr_23832_23852[(1)] = (5));

} else {
var statearr_23833_23853 = state_23827__$1;
(statearr_23833_23853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (13))){
var state_23827__$1 = state_23827;
var statearr_23834_23854 = state_23827__$1;
(statearr_23834_23854[(2)] = null);

(statearr_23834_23854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (6))){
var inst_23806 = (state_23827[(7)]);
var state_23827__$1 = state_23827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23827__$1,(11),to,inst_23806);
} else {
if((state_val_23828 === (3))){
var inst_23825 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23827__$1,inst_23825);
} else {
if((state_val_23828 === (12))){
var state_23827__$1 = state_23827;
var statearr_23835_23855 = state_23827__$1;
(statearr_23835_23855[(2)] = null);

(statearr_23835_23855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (2))){
var state_23827__$1 = state_23827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23827__$1,(4),from);
} else {
if((state_val_23828 === (11))){
var inst_23816 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
if(cljs.core.truth_(inst_23816)){
var statearr_23836_23856 = state_23827__$1;
(statearr_23836_23856[(1)] = (12));

} else {
var statearr_23837_23857 = state_23827__$1;
(statearr_23837_23857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (9))){
var state_23827__$1 = state_23827;
var statearr_23838_23858 = state_23827__$1;
(statearr_23838_23858[(2)] = null);

(statearr_23838_23858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (5))){
var state_23827__$1 = state_23827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23839_23859 = state_23827__$1;
(statearr_23839_23859[(1)] = (8));

} else {
var statearr_23840_23860 = state_23827__$1;
(statearr_23840_23860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (14))){
var inst_23821 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
var statearr_23841_23861 = state_23827__$1;
(statearr_23841_23861[(2)] = inst_23821);

(statearr_23841_23861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (10))){
var inst_23813 = (state_23827[(2)]);
var state_23827__$1 = state_23827;
var statearr_23842_23862 = state_23827__$1;
(statearr_23842_23862[(2)] = inst_23813);

(statearr_23842_23862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23828 === (8))){
var inst_23810 = cljs.core.async.close_BANG_.call(null,to);
var state_23827__$1 = state_23827;
var statearr_23843_23863 = state_23827__$1;
(statearr_23843_23863[(2)] = inst_23810);

(statearr_23843_23863[(1)] = (10));


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
});})(c__23702__auto___23849))
;
return ((function (switch__23607__auto__,c__23702__auto___23849){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_23844 = [null,null,null,null,null,null,null,null];
(statearr_23844[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_23844[(1)] = (1));

return statearr_23844;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_23827){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_23827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e23845){if((e23845 instanceof Object)){
var ex__23611__auto__ = e23845;
var statearr_23846_23864 = state_23827;
(statearr_23846_23864[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23865 = state_23827;
state_23827 = G__23865;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_23827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_23827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___23849))
})();
var state__23704__auto__ = (function (){var statearr_23847 = f__23703__auto__.call(null);
(statearr_23847[(6)] = c__23702__auto___23849);

return statearr_23847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___23849))
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
return (function (p__23866){
var vec__23867 = p__23866;
var v = cljs.core.nth.call(null,vec__23867,(0),null);
var p = cljs.core.nth.call(null,vec__23867,(1),null);
var job = vec__23867;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23702__auto___24038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results){
return (function (state_23874){
var state_val_23875 = (state_23874[(1)]);
if((state_val_23875 === (1))){
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(2),res,v);
} else {
if((state_val_23875 === (2))){
var inst_23871 = (state_23874[(2)]);
var inst_23872 = cljs.core.async.close_BANG_.call(null,res);
var state_23874__$1 = (function (){var statearr_23876 = state_23874;
(statearr_23876[(7)] = inst_23871);

return statearr_23876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else {
return null;
}
}
});})(c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results))
;
return ((function (switch__23607__auto__,c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_23877 = [null,null,null,null,null,null,null,null];
(statearr_23877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__);

(statearr_23877[(1)] = (1));

return statearr_23877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1 = (function (state_23874){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_23874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e23878){if((e23878 instanceof Object)){
var ex__23611__auto__ = e23878;
var statearr_23879_24039 = state_23874;
(statearr_23879_24039[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24040 = state_23874;
state_23874 = G__24040;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results))
})();
var state__23704__auto__ = (function (){var statearr_23880 = f__23703__auto__.call(null);
(statearr_23880[(6)] = c__23702__auto___24038);

return statearr_23880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24038,res,vec__23867,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23881){
var vec__23882 = p__23881;
var v = cljs.core.nth.call(null,vec__23882,(0),null);
var p = cljs.core.nth.call(null,vec__23882,(1),null);
var job = vec__23882;
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
var n__4607__auto___24041 = n;
var __24042 = (0);
while(true){
if((__24042 < n__4607__auto___24041)){
var G__23885_24043 = type;
var G__23885_24044__$1 = (((G__23885_24043 instanceof cljs.core.Keyword))?G__23885_24043.fqn:null);
switch (G__23885_24044__$1) {
case "compute":
var c__23702__auto___24046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24042,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (__24042,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function (state_23898){
var state_val_23899 = (state_23898[(1)]);
if((state_val_23899 === (1))){
var state_23898__$1 = state_23898;
var statearr_23900_24047 = state_23898__$1;
(statearr_23900_24047[(2)] = null);

(statearr_23900_24047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (2))){
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(4),jobs);
} else {
if((state_val_23899 === (3))){
var inst_23896 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23898__$1,inst_23896);
} else {
if((state_val_23899 === (4))){
var inst_23888 = (state_23898[(2)]);
var inst_23889 = process.call(null,inst_23888);
var state_23898__$1 = state_23898;
if(cljs.core.truth_(inst_23889)){
var statearr_23901_24048 = state_23898__$1;
(statearr_23901_24048[(1)] = (5));

} else {
var statearr_23902_24049 = state_23898__$1;
(statearr_23902_24049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (5))){
var state_23898__$1 = state_23898;
var statearr_23903_24050 = state_23898__$1;
(statearr_23903_24050[(2)] = null);

(statearr_23903_24050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (6))){
var state_23898__$1 = state_23898;
var statearr_23904_24051 = state_23898__$1;
(statearr_23904_24051[(2)] = null);

(statearr_23904_24051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23899 === (7))){
var inst_23894 = (state_23898[(2)]);
var state_23898__$1 = state_23898;
var statearr_23905_24052 = state_23898__$1;
(statearr_23905_24052[(2)] = inst_23894);

(statearr_23905_24052[(1)] = (3));


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
});})(__24042,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
;
return ((function (__24042,switch__23607__auto__,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_23906 = [null,null,null,null,null,null,null];
(statearr_23906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__);

(statearr_23906[(1)] = (1));

return statearr_23906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1 = (function (state_23898){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_23898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e23907){if((e23907 instanceof Object)){
var ex__23611__auto__ = e23907;
var statearr_23908_24053 = state_23898;
(statearr_23908_24053[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24054 = state_23898;
state_23898 = G__24054;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__;
})()
;})(__24042,switch__23607__auto__,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
})();
var state__23704__auto__ = (function (){var statearr_23909 = f__23703__auto__.call(null);
(statearr_23909[(6)] = c__23702__auto___24046);

return statearr_23909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(__24042,c__23702__auto___24046,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
);


break;
case "async":
var c__23702__auto___24055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24042,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (__24042,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (1))){
var state_23922__$1 = state_23922;
var statearr_23924_24056 = state_23922__$1;
(statearr_23924_24056[(2)] = null);

(statearr_23924_24056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (2))){
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(4),jobs);
} else {
if((state_val_23923 === (3))){
var inst_23920 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
if((state_val_23923 === (4))){
var inst_23912 = (state_23922[(2)]);
var inst_23913 = async.call(null,inst_23912);
var state_23922__$1 = state_23922;
if(cljs.core.truth_(inst_23913)){
var statearr_23925_24057 = state_23922__$1;
(statearr_23925_24057[(1)] = (5));

} else {
var statearr_23926_24058 = state_23922__$1;
(statearr_23926_24058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (5))){
var state_23922__$1 = state_23922;
var statearr_23927_24059 = state_23922__$1;
(statearr_23927_24059[(2)] = null);

(statearr_23927_24059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (6))){
var state_23922__$1 = state_23922;
var statearr_23928_24060 = state_23922__$1;
(statearr_23928_24060[(2)] = null);

(statearr_23928_24060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (7))){
var inst_23918 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
var statearr_23929_24061 = state_23922__$1;
(statearr_23929_24061[(2)] = inst_23918);

(statearr_23929_24061[(1)] = (3));


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
});})(__24042,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
;
return ((function (__24042,switch__23607__auto__,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_23930 = [null,null,null,null,null,null,null];
(statearr_23930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__);

(statearr_23930[(1)] = (1));

return statearr_23930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1 = (function (state_23922){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e23931){if((e23931 instanceof Object)){
var ex__23611__auto__ = e23931;
var statearr_23932_24062 = state_23922;
(statearr_23932_24062[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24063 = state_23922;
state_23922 = G__24063;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__;
})()
;})(__24042,switch__23607__auto__,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
})();
var state__23704__auto__ = (function (){var statearr_23933 = f__23703__auto__.call(null);
(statearr_23933[(6)] = c__23702__auto___24055);

return statearr_23933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(__24042,c__23702__auto___24055,G__23885_24043,G__23885_24044__$1,n__4607__auto___24041,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23885_24044__$1)].join('')));

}

var G__24064 = (__24042 + (1));
__24042 = G__24064;
continue;
} else {
}
break;
}

var c__23702__auto___24065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24065,jobs,results,process,async){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24065,jobs,results,process,async){
return (function (state_23955){
var state_val_23956 = (state_23955[(1)]);
if((state_val_23956 === (7))){
var inst_23951 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23957_24066 = state_23955__$1;
(statearr_23957_24066[(2)] = inst_23951);

(statearr_23957_24066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (1))){
var state_23955__$1 = state_23955;
var statearr_23958_24067 = state_23955__$1;
(statearr_23958_24067[(2)] = null);

(statearr_23958_24067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (4))){
var inst_23936 = (state_23955[(7)]);
var inst_23936__$1 = (state_23955[(2)]);
var inst_23937 = (inst_23936__$1 == null);
var state_23955__$1 = (function (){var statearr_23959 = state_23955;
(statearr_23959[(7)] = inst_23936__$1);

return statearr_23959;
})();
if(cljs.core.truth_(inst_23937)){
var statearr_23960_24068 = state_23955__$1;
(statearr_23960_24068[(1)] = (5));

} else {
var statearr_23961_24069 = state_23955__$1;
(statearr_23961_24069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (6))){
var inst_23936 = (state_23955[(7)]);
var inst_23941 = (state_23955[(8)]);
var inst_23941__$1 = cljs.core.async.chan.call(null,(1));
var inst_23942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23943 = [inst_23936,inst_23941__$1];
var inst_23944 = (new cljs.core.PersistentVector(null,2,(5),inst_23942,inst_23943,null));
var state_23955__$1 = (function (){var statearr_23962 = state_23955;
(statearr_23962[(8)] = inst_23941__$1);

return statearr_23962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23955__$1,(8),jobs,inst_23944);
} else {
if((state_val_23956 === (3))){
var inst_23953 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23955__$1,inst_23953);
} else {
if((state_val_23956 === (2))){
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23955__$1,(4),from);
} else {
if((state_val_23956 === (9))){
var inst_23948 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23963 = state_23955;
(statearr_23963[(9)] = inst_23948);

return statearr_23963;
})();
var statearr_23964_24070 = state_23955__$1;
(statearr_23964_24070[(2)] = null);

(statearr_23964_24070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (5))){
var inst_23939 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23955__$1 = state_23955;
var statearr_23965_24071 = state_23955__$1;
(statearr_23965_24071[(2)] = inst_23939);

(statearr_23965_24071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (8))){
var inst_23941 = (state_23955[(8)]);
var inst_23946 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23966 = state_23955;
(statearr_23966[(10)] = inst_23946);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23955__$1,(9),results,inst_23941);
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
});})(c__23702__auto___24065,jobs,results,process,async))
;
return ((function (switch__23607__auto__,c__23702__auto___24065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1 = (function (state_23955){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_23955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__23611__auto__ = e23968;
var statearr_23969_24072 = state_23955;
(statearr_23969_24072[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24073 = state_23955;
state_23955 = G__24073;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = function(state_23955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1.call(this,state_23955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24065,jobs,results,process,async))
})();
var state__23704__auto__ = (function (){var statearr_23970 = f__23703__auto__.call(null);
(statearr_23970[(6)] = c__23702__auto___24065);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24065,jobs,results,process,async))
);


var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__,jobs,results,process,async){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__,jobs,results,process,async){
return (function (state_24008){
var state_val_24009 = (state_24008[(1)]);
if((state_val_24009 === (7))){
var inst_24004 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24010_24074 = state_24008__$1;
(statearr_24010_24074[(2)] = inst_24004);

(statearr_24010_24074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (20))){
var state_24008__$1 = state_24008;
var statearr_24011_24075 = state_24008__$1;
(statearr_24011_24075[(2)] = null);

(statearr_24011_24075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (1))){
var state_24008__$1 = state_24008;
var statearr_24012_24076 = state_24008__$1;
(statearr_24012_24076[(2)] = null);

(statearr_24012_24076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (4))){
var inst_23973 = (state_24008[(7)]);
var inst_23973__$1 = (state_24008[(2)]);
var inst_23974 = (inst_23973__$1 == null);
var state_24008__$1 = (function (){var statearr_24013 = state_24008;
(statearr_24013[(7)] = inst_23973__$1);

return statearr_24013;
})();
if(cljs.core.truth_(inst_23974)){
var statearr_24014_24077 = state_24008__$1;
(statearr_24014_24077[(1)] = (5));

} else {
var statearr_24015_24078 = state_24008__$1;
(statearr_24015_24078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (15))){
var inst_23986 = (state_24008[(8)]);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24008__$1,(18),to,inst_23986);
} else {
if((state_val_24009 === (21))){
var inst_23999 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24016_24079 = state_24008__$1;
(statearr_24016_24079[(2)] = inst_23999);

(statearr_24016_24079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (13))){
var inst_24001 = (state_24008[(2)]);
var state_24008__$1 = (function (){var statearr_24017 = state_24008;
(statearr_24017[(9)] = inst_24001);

return statearr_24017;
})();
var statearr_24018_24080 = state_24008__$1;
(statearr_24018_24080[(2)] = null);

(statearr_24018_24080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (6))){
var inst_23973 = (state_24008[(7)]);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24008__$1,(11),inst_23973);
} else {
if((state_val_24009 === (17))){
var inst_23994 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
if(cljs.core.truth_(inst_23994)){
var statearr_24019_24081 = state_24008__$1;
(statearr_24019_24081[(1)] = (19));

} else {
var statearr_24020_24082 = state_24008__$1;
(statearr_24020_24082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (3))){
var inst_24006 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24008__$1,inst_24006);
} else {
if((state_val_24009 === (12))){
var inst_23983 = (state_24008[(10)]);
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24008__$1,(14),inst_23983);
} else {
if((state_val_24009 === (2))){
var state_24008__$1 = state_24008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24008__$1,(4),results);
} else {
if((state_val_24009 === (19))){
var state_24008__$1 = state_24008;
var statearr_24021_24083 = state_24008__$1;
(statearr_24021_24083[(2)] = null);

(statearr_24021_24083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (11))){
var inst_23983 = (state_24008[(2)]);
var state_24008__$1 = (function (){var statearr_24022 = state_24008;
(statearr_24022[(10)] = inst_23983);

return statearr_24022;
})();
var statearr_24023_24084 = state_24008__$1;
(statearr_24023_24084[(2)] = null);

(statearr_24023_24084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (9))){
var state_24008__$1 = state_24008;
var statearr_24024_24085 = state_24008__$1;
(statearr_24024_24085[(2)] = null);

(statearr_24024_24085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (5))){
var state_24008__$1 = state_24008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24025_24086 = state_24008__$1;
(statearr_24025_24086[(1)] = (8));

} else {
var statearr_24026_24087 = state_24008__$1;
(statearr_24026_24087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (14))){
var inst_23986 = (state_24008[(8)]);
var inst_23988 = (state_24008[(11)]);
var inst_23986__$1 = (state_24008[(2)]);
var inst_23987 = (inst_23986__$1 == null);
var inst_23988__$1 = cljs.core.not.call(null,inst_23987);
var state_24008__$1 = (function (){var statearr_24027 = state_24008;
(statearr_24027[(8)] = inst_23986__$1);

(statearr_24027[(11)] = inst_23988__$1);

return statearr_24027;
})();
if(inst_23988__$1){
var statearr_24028_24088 = state_24008__$1;
(statearr_24028_24088[(1)] = (15));

} else {
var statearr_24029_24089 = state_24008__$1;
(statearr_24029_24089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (16))){
var inst_23988 = (state_24008[(11)]);
var state_24008__$1 = state_24008;
var statearr_24030_24090 = state_24008__$1;
(statearr_24030_24090[(2)] = inst_23988);

(statearr_24030_24090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (10))){
var inst_23980 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24031_24091 = state_24008__$1;
(statearr_24031_24091[(2)] = inst_23980);

(statearr_24031_24091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (18))){
var inst_23991 = (state_24008[(2)]);
var state_24008__$1 = state_24008;
var statearr_24032_24092 = state_24008__$1;
(statearr_24032_24092[(2)] = inst_23991);

(statearr_24032_24092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24009 === (8))){
var inst_23977 = cljs.core.async.close_BANG_.call(null,to);
var state_24008__$1 = state_24008;
var statearr_24033_24093 = state_24008__$1;
(statearr_24033_24093[(2)] = inst_23977);

(statearr_24033_24093[(1)] = (10));


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
});})(c__23702__auto__,jobs,results,process,async))
;
return ((function (switch__23607__auto__,c__23702__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_24034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__);

(statearr_24034[(1)] = (1));

return statearr_24034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1 = (function (state_24008){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object)){
var ex__23611__auto__ = e24035;
var statearr_24036_24094 = state_24008;
(statearr_24036_24094[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24095 = state_24008;
state_24008 = G__24095;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__ = function(state_24008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1.call(this,state_24008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__,jobs,results,process,async))
})();
var state__23704__auto__ = (function (){var statearr_24037 = f__23703__auto__.call(null);
(statearr_24037[(6)] = c__23702__auto__);

return statearr_24037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__,jobs,results,process,async))
);

return c__23702__auto__;
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
var G__24097 = arguments.length;
switch (G__24097) {
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
var G__24100 = arguments.length;
switch (G__24100) {
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
var G__24103 = arguments.length;
switch (G__24103) {
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
var c__23702__auto___24152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24152,tc,fc){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24152,tc,fc){
return (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (7))){
var inst_24125 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24131_24153 = state_24129__$1;
(statearr_24131_24153[(2)] = inst_24125);

(statearr_24131_24153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (1))){
var state_24129__$1 = state_24129;
var statearr_24132_24154 = state_24129__$1;
(statearr_24132_24154[(2)] = null);

(statearr_24132_24154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (4))){
var inst_24106 = (state_24129[(7)]);
var inst_24106__$1 = (state_24129[(2)]);
var inst_24107 = (inst_24106__$1 == null);
var state_24129__$1 = (function (){var statearr_24133 = state_24129;
(statearr_24133[(7)] = inst_24106__$1);

return statearr_24133;
})();
if(cljs.core.truth_(inst_24107)){
var statearr_24134_24155 = state_24129__$1;
(statearr_24134_24155[(1)] = (5));

} else {
var statearr_24135_24156 = state_24129__$1;
(statearr_24135_24156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (13))){
var state_24129__$1 = state_24129;
var statearr_24136_24157 = state_24129__$1;
(statearr_24136_24157[(2)] = null);

(statearr_24136_24157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (6))){
var inst_24106 = (state_24129[(7)]);
var inst_24112 = p.call(null,inst_24106);
var state_24129__$1 = state_24129;
if(cljs.core.truth_(inst_24112)){
var statearr_24137_24158 = state_24129__$1;
(statearr_24137_24158[(1)] = (9));

} else {
var statearr_24138_24159 = state_24129__$1;
(statearr_24138_24159[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (3))){
var inst_24127 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
} else {
if((state_val_24130 === (12))){
var state_24129__$1 = state_24129;
var statearr_24139_24160 = state_24129__$1;
(statearr_24139_24160[(2)] = null);

(statearr_24139_24160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (2))){
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(4),ch);
} else {
if((state_val_24130 === (11))){
var inst_24106 = (state_24129[(7)]);
var inst_24116 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24129__$1,(8),inst_24116,inst_24106);
} else {
if((state_val_24130 === (9))){
var state_24129__$1 = state_24129;
var statearr_24140_24161 = state_24129__$1;
(statearr_24140_24161[(2)] = tc);

(statearr_24140_24161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (5))){
var inst_24109 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24110 = cljs.core.async.close_BANG_.call(null,fc);
var state_24129__$1 = (function (){var statearr_24141 = state_24129;
(statearr_24141[(8)] = inst_24109);

return statearr_24141;
})();
var statearr_24142_24162 = state_24129__$1;
(statearr_24142_24162[(2)] = inst_24110);

(statearr_24142_24162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (14))){
var inst_24123 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24143_24163 = state_24129__$1;
(statearr_24143_24163[(2)] = inst_24123);

(statearr_24143_24163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (10))){
var state_24129__$1 = state_24129;
var statearr_24144_24164 = state_24129__$1;
(statearr_24144_24164[(2)] = fc);

(statearr_24144_24164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (8))){
var inst_24118 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
if(cljs.core.truth_(inst_24118)){
var statearr_24145_24165 = state_24129__$1;
(statearr_24145_24165[(1)] = (12));

} else {
var statearr_24146_24166 = state_24129__$1;
(statearr_24146_24166[(1)] = (13));

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
});})(c__23702__auto___24152,tc,fc))
;
return ((function (switch__23607__auto__,c__23702__auto___24152,tc,fc){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_24147 = [null,null,null,null,null,null,null,null,null];
(statearr_24147[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_24147[(1)] = (1));

return statearr_24147;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_24129){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24148){if((e24148 instanceof Object)){
var ex__23611__auto__ = e24148;
var statearr_24149_24167 = state_24129;
(statearr_24149_24167[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24168 = state_24129;
state_24129 = G__24168;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24152,tc,fc))
})();
var state__23704__auto__ = (function (){var statearr_24150 = f__23703__auto__.call(null);
(statearr_24150[(6)] = c__23702__auto___24152);

return statearr_24150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24152,tc,fc))
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__){
return (function (state_24189){
var state_val_24190 = (state_24189[(1)]);
if((state_val_24190 === (7))){
var inst_24185 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24191_24209 = state_24189__$1;
(statearr_24191_24209[(2)] = inst_24185);

(statearr_24191_24209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (1))){
var inst_24169 = init;
var state_24189__$1 = (function (){var statearr_24192 = state_24189;
(statearr_24192[(7)] = inst_24169);

return statearr_24192;
})();
var statearr_24193_24210 = state_24189__$1;
(statearr_24193_24210[(2)] = null);

(statearr_24193_24210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (4))){
var inst_24172 = (state_24189[(8)]);
var inst_24172__$1 = (state_24189[(2)]);
var inst_24173 = (inst_24172__$1 == null);
var state_24189__$1 = (function (){var statearr_24194 = state_24189;
(statearr_24194[(8)] = inst_24172__$1);

return statearr_24194;
})();
if(cljs.core.truth_(inst_24173)){
var statearr_24195_24211 = state_24189__$1;
(statearr_24195_24211[(1)] = (5));

} else {
var statearr_24196_24212 = state_24189__$1;
(statearr_24196_24212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (6))){
var inst_24176 = (state_24189[(9)]);
var inst_24169 = (state_24189[(7)]);
var inst_24172 = (state_24189[(8)]);
var inst_24176__$1 = f.call(null,inst_24169,inst_24172);
var inst_24177 = cljs.core.reduced_QMARK_.call(null,inst_24176__$1);
var state_24189__$1 = (function (){var statearr_24197 = state_24189;
(statearr_24197[(9)] = inst_24176__$1);

return statearr_24197;
})();
if(inst_24177){
var statearr_24198_24213 = state_24189__$1;
(statearr_24198_24213[(1)] = (8));

} else {
var statearr_24199_24214 = state_24189__$1;
(statearr_24199_24214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (3))){
var inst_24187 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24189__$1,inst_24187);
} else {
if((state_val_24190 === (2))){
var state_24189__$1 = state_24189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24189__$1,(4),ch);
} else {
if((state_val_24190 === (9))){
var inst_24176 = (state_24189[(9)]);
var inst_24169 = inst_24176;
var state_24189__$1 = (function (){var statearr_24200 = state_24189;
(statearr_24200[(7)] = inst_24169);

return statearr_24200;
})();
var statearr_24201_24215 = state_24189__$1;
(statearr_24201_24215[(2)] = null);

(statearr_24201_24215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (5))){
var inst_24169 = (state_24189[(7)]);
var state_24189__$1 = state_24189;
var statearr_24202_24216 = state_24189__$1;
(statearr_24202_24216[(2)] = inst_24169);

(statearr_24202_24216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (10))){
var inst_24183 = (state_24189[(2)]);
var state_24189__$1 = state_24189;
var statearr_24203_24217 = state_24189__$1;
(statearr_24203_24217[(2)] = inst_24183);

(statearr_24203_24217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24190 === (8))){
var inst_24176 = (state_24189[(9)]);
var inst_24179 = cljs.core.deref.call(null,inst_24176);
var state_24189__$1 = state_24189;
var statearr_24204_24218 = state_24189__$1;
(statearr_24204_24218[(2)] = inst_24179);

(statearr_24204_24218[(1)] = (10));


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
});})(c__23702__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23608__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23608__auto____0 = (function (){
var statearr_24205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24205[(0)] = cljs$core$async$reduce_$_state_machine__23608__auto__);

(statearr_24205[(1)] = (1));

return statearr_24205;
});
var cljs$core$async$reduce_$_state_machine__23608__auto____1 = (function (state_24189){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24206){if((e24206 instanceof Object)){
var ex__23611__auto__ = e24206;
var statearr_24207_24219 = state_24189;
(statearr_24207_24219[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24220 = state_24189;
state_24189 = G__24220;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23608__auto__ = function(state_24189){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23608__auto____1.call(this,state_24189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23608__auto____0;
cljs$core$async$reduce_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23608__auto____1;
return cljs$core$async$reduce_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__))
})();
var state__23704__auto__ = (function (){var statearr_24208 = f__23703__auto__.call(null);
(statearr_24208[(6)] = c__23702__auto__);

return statearr_24208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__))
);

return c__23702__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__,f__$1){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__,f__$1){
return (function (state_24226){
var state_val_24227 = (state_24226[(1)]);
if((state_val_24227 === (1))){
var inst_24221 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24226__$1 = state_24226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24226__$1,(2),inst_24221);
} else {
if((state_val_24227 === (2))){
var inst_24223 = (state_24226[(2)]);
var inst_24224 = f__$1.call(null,inst_24223);
var state_24226__$1 = state_24226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24226__$1,inst_24224);
} else {
return null;
}
}
});})(c__23702__auto__,f__$1))
;
return ((function (switch__23607__auto__,c__23702__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23608__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23608__auto____0 = (function (){
var statearr_24228 = [null,null,null,null,null,null,null];
(statearr_24228[(0)] = cljs$core$async$transduce_$_state_machine__23608__auto__);

(statearr_24228[(1)] = (1));

return statearr_24228;
});
var cljs$core$async$transduce_$_state_machine__23608__auto____1 = (function (state_24226){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24229){if((e24229 instanceof Object)){
var ex__23611__auto__ = e24229;
var statearr_24230_24232 = state_24226;
(statearr_24230_24232[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24233 = state_24226;
state_24226 = G__24233;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23608__auto__ = function(state_24226){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23608__auto____1.call(this,state_24226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23608__auto____0;
cljs$core$async$transduce_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23608__auto____1;
return cljs$core$async$transduce_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__,f__$1))
})();
var state__23704__auto__ = (function (){var statearr_24231 = f__23703__auto__.call(null);
(statearr_24231[(6)] = c__23702__auto__);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__,f__$1))
);

return c__23702__auto__;
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
var G__24235 = arguments.length;
switch (G__24235) {
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__){
return (function (state_24260){
var state_val_24261 = (state_24260[(1)]);
if((state_val_24261 === (7))){
var inst_24242 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24262_24283 = state_24260__$1;
(statearr_24262_24283[(2)] = inst_24242);

(statearr_24262_24283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (1))){
var inst_24236 = cljs.core.seq.call(null,coll);
var inst_24237 = inst_24236;
var state_24260__$1 = (function (){var statearr_24263 = state_24260;
(statearr_24263[(7)] = inst_24237);

return statearr_24263;
})();
var statearr_24264_24284 = state_24260__$1;
(statearr_24264_24284[(2)] = null);

(statearr_24264_24284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (4))){
var inst_24237 = (state_24260[(7)]);
var inst_24240 = cljs.core.first.call(null,inst_24237);
var state_24260__$1 = state_24260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24260__$1,(7),ch,inst_24240);
} else {
if((state_val_24261 === (13))){
var inst_24254 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24265_24285 = state_24260__$1;
(statearr_24265_24285[(2)] = inst_24254);

(statearr_24265_24285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (6))){
var inst_24245 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24245)){
var statearr_24266_24286 = state_24260__$1;
(statearr_24266_24286[(1)] = (8));

} else {
var statearr_24267_24287 = state_24260__$1;
(statearr_24267_24287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (3))){
var inst_24258 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24260__$1,inst_24258);
} else {
if((state_val_24261 === (12))){
var state_24260__$1 = state_24260;
var statearr_24268_24288 = state_24260__$1;
(statearr_24268_24288[(2)] = null);

(statearr_24268_24288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (2))){
var inst_24237 = (state_24260[(7)]);
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24237)){
var statearr_24269_24289 = state_24260__$1;
(statearr_24269_24289[(1)] = (4));

} else {
var statearr_24270_24290 = state_24260__$1;
(statearr_24270_24290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (11))){
var inst_24251 = cljs.core.async.close_BANG_.call(null,ch);
var state_24260__$1 = state_24260;
var statearr_24271_24291 = state_24260__$1;
(statearr_24271_24291[(2)] = inst_24251);

(statearr_24271_24291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (9))){
var state_24260__$1 = state_24260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24272_24292 = state_24260__$1;
(statearr_24272_24292[(1)] = (11));

} else {
var statearr_24273_24293 = state_24260__$1;
(statearr_24273_24293[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (5))){
var inst_24237 = (state_24260[(7)]);
var state_24260__$1 = state_24260;
var statearr_24274_24294 = state_24260__$1;
(statearr_24274_24294[(2)] = inst_24237);

(statearr_24274_24294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (10))){
var inst_24256 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24275_24295 = state_24260__$1;
(statearr_24275_24295[(2)] = inst_24256);

(statearr_24275_24295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (8))){
var inst_24237 = (state_24260[(7)]);
var inst_24247 = cljs.core.next.call(null,inst_24237);
var inst_24237__$1 = inst_24247;
var state_24260__$1 = (function (){var statearr_24276 = state_24260;
(statearr_24276[(7)] = inst_24237__$1);

return statearr_24276;
})();
var statearr_24277_24296 = state_24260__$1;
(statearr_24277_24296[(2)] = null);

(statearr_24277_24296[(1)] = (2));


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
});})(c__23702__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_24278 = [null,null,null,null,null,null,null,null];
(statearr_24278[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_24278[(1)] = (1));

return statearr_24278;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_24260){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24279){if((e24279 instanceof Object)){
var ex__23611__auto__ = e24279;
var statearr_24280_24297 = state_24260;
(statearr_24280_24297[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24298 = state_24260;
state_24260 = G__24298;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_24260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_24260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__))
})();
var state__23704__auto__ = (function (){var statearr_24281 = f__23703__auto__.call(null);
(statearr_24281[(6)] = c__23702__auto__);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__))
);

return c__23702__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24299 = (function (ch,cs,meta24300){
this.ch = ch;
this.cs = cs;
this.meta24300 = meta24300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24301,meta24300__$1){
var self__ = this;
var _24301__$1 = this;
return (new cljs.core.async.t_cljs$core$async24299(self__.ch,self__.cs,meta24300__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24301){
var self__ = this;
var _24301__$1 = this;
return self__.meta24300;
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24300","meta24300",-1443705157,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24299";

cljs.core.async.t_cljs$core$async24299.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24299");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24299.
 */
cljs.core.async.__GT_t_cljs$core$async24299 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24299(ch__$1,cs__$1,meta24300){
return (new cljs.core.async.t_cljs$core$async24299(ch__$1,cs__$1,meta24300));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24299(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23702__auto___24521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24521,cs,m,dchan,dctr,done){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24521,cs,m,dchan,dctr,done){
return (function (state_24436){
var state_val_24437 = (state_24436[(1)]);
if((state_val_24437 === (7))){
var inst_24432 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24438_24522 = state_24436__$1;
(statearr_24438_24522[(2)] = inst_24432);

(statearr_24438_24522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (20))){
var inst_24335 = (state_24436[(7)]);
var inst_24347 = cljs.core.first.call(null,inst_24335);
var inst_24348 = cljs.core.nth.call(null,inst_24347,(0),null);
var inst_24349 = cljs.core.nth.call(null,inst_24347,(1),null);
var state_24436__$1 = (function (){var statearr_24439 = state_24436;
(statearr_24439[(8)] = inst_24348);

return statearr_24439;
})();
if(cljs.core.truth_(inst_24349)){
var statearr_24440_24523 = state_24436__$1;
(statearr_24440_24523[(1)] = (22));

} else {
var statearr_24441_24524 = state_24436__$1;
(statearr_24441_24524[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (27))){
var inst_24384 = (state_24436[(9)]);
var inst_24304 = (state_24436[(10)]);
var inst_24377 = (state_24436[(11)]);
var inst_24379 = (state_24436[(12)]);
var inst_24384__$1 = cljs.core._nth.call(null,inst_24377,inst_24379);
var inst_24385 = cljs.core.async.put_BANG_.call(null,inst_24384__$1,inst_24304,done);
var state_24436__$1 = (function (){var statearr_24442 = state_24436;
(statearr_24442[(9)] = inst_24384__$1);

return statearr_24442;
})();
if(cljs.core.truth_(inst_24385)){
var statearr_24443_24525 = state_24436__$1;
(statearr_24443_24525[(1)] = (30));

} else {
var statearr_24444_24526 = state_24436__$1;
(statearr_24444_24526[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (1))){
var state_24436__$1 = state_24436;
var statearr_24445_24527 = state_24436__$1;
(statearr_24445_24527[(2)] = null);

(statearr_24445_24527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (24))){
var inst_24335 = (state_24436[(7)]);
var inst_24354 = (state_24436[(2)]);
var inst_24355 = cljs.core.next.call(null,inst_24335);
var inst_24313 = inst_24355;
var inst_24314 = null;
var inst_24315 = (0);
var inst_24316 = (0);
var state_24436__$1 = (function (){var statearr_24446 = state_24436;
(statearr_24446[(13)] = inst_24314);

(statearr_24446[(14)] = inst_24313);

(statearr_24446[(15)] = inst_24354);

(statearr_24446[(16)] = inst_24316);

(statearr_24446[(17)] = inst_24315);

return statearr_24446;
})();
var statearr_24447_24528 = state_24436__$1;
(statearr_24447_24528[(2)] = null);

(statearr_24447_24528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (39))){
var state_24436__$1 = state_24436;
var statearr_24451_24529 = state_24436__$1;
(statearr_24451_24529[(2)] = null);

(statearr_24451_24529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (4))){
var inst_24304 = (state_24436[(10)]);
var inst_24304__$1 = (state_24436[(2)]);
var inst_24305 = (inst_24304__$1 == null);
var state_24436__$1 = (function (){var statearr_24452 = state_24436;
(statearr_24452[(10)] = inst_24304__$1);

return statearr_24452;
})();
if(cljs.core.truth_(inst_24305)){
var statearr_24453_24530 = state_24436__$1;
(statearr_24453_24530[(1)] = (5));

} else {
var statearr_24454_24531 = state_24436__$1;
(statearr_24454_24531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (15))){
var inst_24314 = (state_24436[(13)]);
var inst_24313 = (state_24436[(14)]);
var inst_24316 = (state_24436[(16)]);
var inst_24315 = (state_24436[(17)]);
var inst_24331 = (state_24436[(2)]);
var inst_24332 = (inst_24316 + (1));
var tmp24448 = inst_24314;
var tmp24449 = inst_24313;
var tmp24450 = inst_24315;
var inst_24313__$1 = tmp24449;
var inst_24314__$1 = tmp24448;
var inst_24315__$1 = tmp24450;
var inst_24316__$1 = inst_24332;
var state_24436__$1 = (function (){var statearr_24455 = state_24436;
(statearr_24455[(13)] = inst_24314__$1);

(statearr_24455[(14)] = inst_24313__$1);

(statearr_24455[(18)] = inst_24331);

(statearr_24455[(16)] = inst_24316__$1);

(statearr_24455[(17)] = inst_24315__$1);

return statearr_24455;
})();
var statearr_24456_24532 = state_24436__$1;
(statearr_24456_24532[(2)] = null);

(statearr_24456_24532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (21))){
var inst_24358 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24460_24533 = state_24436__$1;
(statearr_24460_24533[(2)] = inst_24358);

(statearr_24460_24533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (31))){
var inst_24384 = (state_24436[(9)]);
var inst_24388 = done.call(null,null);
var inst_24389 = cljs.core.async.untap_STAR_.call(null,m,inst_24384);
var state_24436__$1 = (function (){var statearr_24461 = state_24436;
(statearr_24461[(19)] = inst_24388);

return statearr_24461;
})();
var statearr_24462_24534 = state_24436__$1;
(statearr_24462_24534[(2)] = inst_24389);

(statearr_24462_24534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (32))){
var inst_24376 = (state_24436[(20)]);
var inst_24377 = (state_24436[(11)]);
var inst_24378 = (state_24436[(21)]);
var inst_24379 = (state_24436[(12)]);
var inst_24391 = (state_24436[(2)]);
var inst_24392 = (inst_24379 + (1));
var tmp24457 = inst_24376;
var tmp24458 = inst_24377;
var tmp24459 = inst_24378;
var inst_24376__$1 = tmp24457;
var inst_24377__$1 = tmp24458;
var inst_24378__$1 = tmp24459;
var inst_24379__$1 = inst_24392;
var state_24436__$1 = (function (){var statearr_24463 = state_24436;
(statearr_24463[(20)] = inst_24376__$1);

(statearr_24463[(22)] = inst_24391);

(statearr_24463[(11)] = inst_24377__$1);

(statearr_24463[(21)] = inst_24378__$1);

(statearr_24463[(12)] = inst_24379__$1);

return statearr_24463;
})();
var statearr_24464_24535 = state_24436__$1;
(statearr_24464_24535[(2)] = null);

(statearr_24464_24535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (40))){
var inst_24404 = (state_24436[(23)]);
var inst_24408 = done.call(null,null);
var inst_24409 = cljs.core.async.untap_STAR_.call(null,m,inst_24404);
var state_24436__$1 = (function (){var statearr_24465 = state_24436;
(statearr_24465[(24)] = inst_24408);

return statearr_24465;
})();
var statearr_24466_24536 = state_24436__$1;
(statearr_24466_24536[(2)] = inst_24409);

(statearr_24466_24536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (33))){
var inst_24395 = (state_24436[(25)]);
var inst_24397 = cljs.core.chunked_seq_QMARK_.call(null,inst_24395);
var state_24436__$1 = state_24436;
if(inst_24397){
var statearr_24467_24537 = state_24436__$1;
(statearr_24467_24537[(1)] = (36));

} else {
var statearr_24468_24538 = state_24436__$1;
(statearr_24468_24538[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (13))){
var inst_24325 = (state_24436[(26)]);
var inst_24328 = cljs.core.async.close_BANG_.call(null,inst_24325);
var state_24436__$1 = state_24436;
var statearr_24469_24539 = state_24436__$1;
(statearr_24469_24539[(2)] = inst_24328);

(statearr_24469_24539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (22))){
var inst_24348 = (state_24436[(8)]);
var inst_24351 = cljs.core.async.close_BANG_.call(null,inst_24348);
var state_24436__$1 = state_24436;
var statearr_24470_24540 = state_24436__$1;
(statearr_24470_24540[(2)] = inst_24351);

(statearr_24470_24540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (36))){
var inst_24395 = (state_24436[(25)]);
var inst_24399 = cljs.core.chunk_first.call(null,inst_24395);
var inst_24400 = cljs.core.chunk_rest.call(null,inst_24395);
var inst_24401 = cljs.core.count.call(null,inst_24399);
var inst_24376 = inst_24400;
var inst_24377 = inst_24399;
var inst_24378 = inst_24401;
var inst_24379 = (0);
var state_24436__$1 = (function (){var statearr_24471 = state_24436;
(statearr_24471[(20)] = inst_24376);

(statearr_24471[(11)] = inst_24377);

(statearr_24471[(21)] = inst_24378);

(statearr_24471[(12)] = inst_24379);

return statearr_24471;
})();
var statearr_24472_24541 = state_24436__$1;
(statearr_24472_24541[(2)] = null);

(statearr_24472_24541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (41))){
var inst_24395 = (state_24436[(25)]);
var inst_24411 = (state_24436[(2)]);
var inst_24412 = cljs.core.next.call(null,inst_24395);
var inst_24376 = inst_24412;
var inst_24377 = null;
var inst_24378 = (0);
var inst_24379 = (0);
var state_24436__$1 = (function (){var statearr_24473 = state_24436;
(statearr_24473[(27)] = inst_24411);

(statearr_24473[(20)] = inst_24376);

(statearr_24473[(11)] = inst_24377);

(statearr_24473[(21)] = inst_24378);

(statearr_24473[(12)] = inst_24379);

return statearr_24473;
})();
var statearr_24474_24542 = state_24436__$1;
(statearr_24474_24542[(2)] = null);

(statearr_24474_24542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (43))){
var state_24436__$1 = state_24436;
var statearr_24475_24543 = state_24436__$1;
(statearr_24475_24543[(2)] = null);

(statearr_24475_24543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (29))){
var inst_24420 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24476_24544 = state_24436__$1;
(statearr_24476_24544[(2)] = inst_24420);

(statearr_24476_24544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (44))){
var inst_24429 = (state_24436[(2)]);
var state_24436__$1 = (function (){var statearr_24477 = state_24436;
(statearr_24477[(28)] = inst_24429);

return statearr_24477;
})();
var statearr_24478_24545 = state_24436__$1;
(statearr_24478_24545[(2)] = null);

(statearr_24478_24545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (6))){
var inst_24368 = (state_24436[(29)]);
var inst_24367 = cljs.core.deref.call(null,cs);
var inst_24368__$1 = cljs.core.keys.call(null,inst_24367);
var inst_24369 = cljs.core.count.call(null,inst_24368__$1);
var inst_24370 = cljs.core.reset_BANG_.call(null,dctr,inst_24369);
var inst_24375 = cljs.core.seq.call(null,inst_24368__$1);
var inst_24376 = inst_24375;
var inst_24377 = null;
var inst_24378 = (0);
var inst_24379 = (0);
var state_24436__$1 = (function (){var statearr_24479 = state_24436;
(statearr_24479[(30)] = inst_24370);

(statearr_24479[(20)] = inst_24376);

(statearr_24479[(11)] = inst_24377);

(statearr_24479[(29)] = inst_24368__$1);

(statearr_24479[(21)] = inst_24378);

(statearr_24479[(12)] = inst_24379);

return statearr_24479;
})();
var statearr_24480_24546 = state_24436__$1;
(statearr_24480_24546[(2)] = null);

(statearr_24480_24546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (28))){
var inst_24376 = (state_24436[(20)]);
var inst_24395 = (state_24436[(25)]);
var inst_24395__$1 = cljs.core.seq.call(null,inst_24376);
var state_24436__$1 = (function (){var statearr_24481 = state_24436;
(statearr_24481[(25)] = inst_24395__$1);

return statearr_24481;
})();
if(inst_24395__$1){
var statearr_24482_24547 = state_24436__$1;
(statearr_24482_24547[(1)] = (33));

} else {
var statearr_24483_24548 = state_24436__$1;
(statearr_24483_24548[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (25))){
var inst_24378 = (state_24436[(21)]);
var inst_24379 = (state_24436[(12)]);
var inst_24381 = (inst_24379 < inst_24378);
var inst_24382 = inst_24381;
var state_24436__$1 = state_24436;
if(cljs.core.truth_(inst_24382)){
var statearr_24484_24549 = state_24436__$1;
(statearr_24484_24549[(1)] = (27));

} else {
var statearr_24485_24550 = state_24436__$1;
(statearr_24485_24550[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (34))){
var state_24436__$1 = state_24436;
var statearr_24486_24551 = state_24436__$1;
(statearr_24486_24551[(2)] = null);

(statearr_24486_24551[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (17))){
var state_24436__$1 = state_24436;
var statearr_24487_24552 = state_24436__$1;
(statearr_24487_24552[(2)] = null);

(statearr_24487_24552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (3))){
var inst_24434 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24436__$1,inst_24434);
} else {
if((state_val_24437 === (12))){
var inst_24363 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24488_24553 = state_24436__$1;
(statearr_24488_24553[(2)] = inst_24363);

(statearr_24488_24553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (2))){
var state_24436__$1 = state_24436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24436__$1,(4),ch);
} else {
if((state_val_24437 === (23))){
var state_24436__$1 = state_24436;
var statearr_24489_24554 = state_24436__$1;
(statearr_24489_24554[(2)] = null);

(statearr_24489_24554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (35))){
var inst_24418 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24490_24555 = state_24436__$1;
(statearr_24490_24555[(2)] = inst_24418);

(statearr_24490_24555[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (19))){
var inst_24335 = (state_24436[(7)]);
var inst_24339 = cljs.core.chunk_first.call(null,inst_24335);
var inst_24340 = cljs.core.chunk_rest.call(null,inst_24335);
var inst_24341 = cljs.core.count.call(null,inst_24339);
var inst_24313 = inst_24340;
var inst_24314 = inst_24339;
var inst_24315 = inst_24341;
var inst_24316 = (0);
var state_24436__$1 = (function (){var statearr_24491 = state_24436;
(statearr_24491[(13)] = inst_24314);

(statearr_24491[(14)] = inst_24313);

(statearr_24491[(16)] = inst_24316);

(statearr_24491[(17)] = inst_24315);

return statearr_24491;
})();
var statearr_24492_24556 = state_24436__$1;
(statearr_24492_24556[(2)] = null);

(statearr_24492_24556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (11))){
var inst_24313 = (state_24436[(14)]);
var inst_24335 = (state_24436[(7)]);
var inst_24335__$1 = cljs.core.seq.call(null,inst_24313);
var state_24436__$1 = (function (){var statearr_24493 = state_24436;
(statearr_24493[(7)] = inst_24335__$1);

return statearr_24493;
})();
if(inst_24335__$1){
var statearr_24494_24557 = state_24436__$1;
(statearr_24494_24557[(1)] = (16));

} else {
var statearr_24495_24558 = state_24436__$1;
(statearr_24495_24558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (9))){
var inst_24365 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24496_24559 = state_24436__$1;
(statearr_24496_24559[(2)] = inst_24365);

(statearr_24496_24559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (5))){
var inst_24311 = cljs.core.deref.call(null,cs);
var inst_24312 = cljs.core.seq.call(null,inst_24311);
var inst_24313 = inst_24312;
var inst_24314 = null;
var inst_24315 = (0);
var inst_24316 = (0);
var state_24436__$1 = (function (){var statearr_24497 = state_24436;
(statearr_24497[(13)] = inst_24314);

(statearr_24497[(14)] = inst_24313);

(statearr_24497[(16)] = inst_24316);

(statearr_24497[(17)] = inst_24315);

return statearr_24497;
})();
var statearr_24498_24560 = state_24436__$1;
(statearr_24498_24560[(2)] = null);

(statearr_24498_24560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (14))){
var state_24436__$1 = state_24436;
var statearr_24499_24561 = state_24436__$1;
(statearr_24499_24561[(2)] = null);

(statearr_24499_24561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (45))){
var inst_24426 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24500_24562 = state_24436__$1;
(statearr_24500_24562[(2)] = inst_24426);

(statearr_24500_24562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (26))){
var inst_24368 = (state_24436[(29)]);
var inst_24422 = (state_24436[(2)]);
var inst_24423 = cljs.core.seq.call(null,inst_24368);
var state_24436__$1 = (function (){var statearr_24501 = state_24436;
(statearr_24501[(31)] = inst_24422);

return statearr_24501;
})();
if(inst_24423){
var statearr_24502_24563 = state_24436__$1;
(statearr_24502_24563[(1)] = (42));

} else {
var statearr_24503_24564 = state_24436__$1;
(statearr_24503_24564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (16))){
var inst_24335 = (state_24436[(7)]);
var inst_24337 = cljs.core.chunked_seq_QMARK_.call(null,inst_24335);
var state_24436__$1 = state_24436;
if(inst_24337){
var statearr_24504_24565 = state_24436__$1;
(statearr_24504_24565[(1)] = (19));

} else {
var statearr_24505_24566 = state_24436__$1;
(statearr_24505_24566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (38))){
var inst_24415 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24506_24567 = state_24436__$1;
(statearr_24506_24567[(2)] = inst_24415);

(statearr_24506_24567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (30))){
var state_24436__$1 = state_24436;
var statearr_24507_24568 = state_24436__$1;
(statearr_24507_24568[(2)] = null);

(statearr_24507_24568[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (10))){
var inst_24314 = (state_24436[(13)]);
var inst_24316 = (state_24436[(16)]);
var inst_24324 = cljs.core._nth.call(null,inst_24314,inst_24316);
var inst_24325 = cljs.core.nth.call(null,inst_24324,(0),null);
var inst_24326 = cljs.core.nth.call(null,inst_24324,(1),null);
var state_24436__$1 = (function (){var statearr_24508 = state_24436;
(statearr_24508[(26)] = inst_24325);

return statearr_24508;
})();
if(cljs.core.truth_(inst_24326)){
var statearr_24509_24569 = state_24436__$1;
(statearr_24509_24569[(1)] = (13));

} else {
var statearr_24510_24570 = state_24436__$1;
(statearr_24510_24570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (18))){
var inst_24361 = (state_24436[(2)]);
var state_24436__$1 = state_24436;
var statearr_24511_24571 = state_24436__$1;
(statearr_24511_24571[(2)] = inst_24361);

(statearr_24511_24571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (42))){
var state_24436__$1 = state_24436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24436__$1,(45),dchan);
} else {
if((state_val_24437 === (37))){
var inst_24304 = (state_24436[(10)]);
var inst_24404 = (state_24436[(23)]);
var inst_24395 = (state_24436[(25)]);
var inst_24404__$1 = cljs.core.first.call(null,inst_24395);
var inst_24405 = cljs.core.async.put_BANG_.call(null,inst_24404__$1,inst_24304,done);
var state_24436__$1 = (function (){var statearr_24512 = state_24436;
(statearr_24512[(23)] = inst_24404__$1);

return statearr_24512;
})();
if(cljs.core.truth_(inst_24405)){
var statearr_24513_24572 = state_24436__$1;
(statearr_24513_24572[(1)] = (39));

} else {
var statearr_24514_24573 = state_24436__$1;
(statearr_24514_24573[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24437 === (8))){
var inst_24316 = (state_24436[(16)]);
var inst_24315 = (state_24436[(17)]);
var inst_24318 = (inst_24316 < inst_24315);
var inst_24319 = inst_24318;
var state_24436__$1 = state_24436;
if(cljs.core.truth_(inst_24319)){
var statearr_24515_24574 = state_24436__$1;
(statearr_24515_24574[(1)] = (10));

} else {
var statearr_24516_24575 = state_24436__$1;
(statearr_24516_24575[(1)] = (11));

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
});})(c__23702__auto___24521,cs,m,dchan,dctr,done))
;
return ((function (switch__23607__auto__,c__23702__auto___24521,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23608__auto__ = null;
var cljs$core$async$mult_$_state_machine__23608__auto____0 = (function (){
var statearr_24517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24517[(0)] = cljs$core$async$mult_$_state_machine__23608__auto__);

(statearr_24517[(1)] = (1));

return statearr_24517;
});
var cljs$core$async$mult_$_state_machine__23608__auto____1 = (function (state_24436){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24518){if((e24518 instanceof Object)){
var ex__23611__auto__ = e24518;
var statearr_24519_24576 = state_24436;
(statearr_24519_24576[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24577 = state_24436;
state_24436 = G__24577;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23608__auto__ = function(state_24436){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23608__auto____1.call(this,state_24436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23608__auto____0;
cljs$core$async$mult_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23608__auto____1;
return cljs$core$async$mult_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24521,cs,m,dchan,dctr,done))
})();
var state__23704__auto__ = (function (){var statearr_24520 = f__23703__auto__.call(null);
(statearr_24520[(6)] = c__23702__auto___24521);

return statearr_24520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24521,cs,m,dchan,dctr,done))
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
var G__24579 = arguments.length;
switch (G__24579) {
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
var len__4730__auto___24591 = arguments.length;
var i__4731__auto___24592 = (0);
while(true){
if((i__4731__auto___24592 < len__4730__auto___24591)){
args__4736__auto__.push((arguments[i__4731__auto___24592]));

var G__24593 = (i__4731__auto___24592 + (1));
i__4731__auto___24592 = G__24593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24585){
var map__24586 = p__24585;
var map__24586__$1 = (((((!((map__24586 == null))))?(((((map__24586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24586):map__24586);
var opts = map__24586__$1;
var statearr_24588_24594 = state;
(statearr_24588_24594[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24586,map__24586__$1,opts){
return (function (val){
var statearr_24589_24595 = state;
(statearr_24589_24595[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24586,map__24586__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24590_24596 = state;
(statearr_24590_24596[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24581){
var G__24582 = cljs.core.first.call(null,seq24581);
var seq24581__$1 = cljs.core.next.call(null,seq24581);
var G__24583 = cljs.core.first.call(null,seq24581__$1);
var seq24581__$2 = cljs.core.next.call(null,seq24581__$1);
var G__24584 = cljs.core.first.call(null,seq24581__$2);
var seq24581__$3 = cljs.core.next.call(null,seq24581__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24582,G__24583,G__24584,seq24581__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24597 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24598){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24598 = meta24598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24599,meta24598__$1){
var self__ = this;
var _24599__$1 = this;
return (new cljs.core.async.t_cljs$core$async24597(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24598__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24599){
var self__ = this;
var _24599__$1 = this;
return self__.meta24598;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24597.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24598","meta24598",1341570009,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24597";

cljs.core.async.t_cljs$core$async24597.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24597");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24597.
 */
cljs.core.async.__GT_t_cljs$core$async24597 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24598){
return (new cljs.core.async.t_cljs$core$async24597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24598));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23702__auto___24761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24701){
var state_val_24702 = (state_24701[(1)]);
if((state_val_24702 === (7))){
var inst_24616 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24703_24762 = state_24701__$1;
(statearr_24703_24762[(2)] = inst_24616);

(statearr_24703_24762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (20))){
var inst_24628 = (state_24701[(7)]);
var state_24701__$1 = state_24701;
var statearr_24704_24763 = state_24701__$1;
(statearr_24704_24763[(2)] = inst_24628);

(statearr_24704_24763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (27))){
var state_24701__$1 = state_24701;
var statearr_24705_24764 = state_24701__$1;
(statearr_24705_24764[(2)] = null);

(statearr_24705_24764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (1))){
var inst_24603 = (state_24701[(8)]);
var inst_24603__$1 = calc_state.call(null);
var inst_24605 = (inst_24603__$1 == null);
var inst_24606 = cljs.core.not.call(null,inst_24605);
var state_24701__$1 = (function (){var statearr_24706 = state_24701;
(statearr_24706[(8)] = inst_24603__$1);

return statearr_24706;
})();
if(inst_24606){
var statearr_24707_24765 = state_24701__$1;
(statearr_24707_24765[(1)] = (2));

} else {
var statearr_24708_24766 = state_24701__$1;
(statearr_24708_24766[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (24))){
var inst_24675 = (state_24701[(9)]);
var inst_24661 = (state_24701[(10)]);
var inst_24652 = (state_24701[(11)]);
var inst_24675__$1 = inst_24652.call(null,inst_24661);
var state_24701__$1 = (function (){var statearr_24709 = state_24701;
(statearr_24709[(9)] = inst_24675__$1);

return statearr_24709;
})();
if(cljs.core.truth_(inst_24675__$1)){
var statearr_24710_24767 = state_24701__$1;
(statearr_24710_24767[(1)] = (29));

} else {
var statearr_24711_24768 = state_24701__$1;
(statearr_24711_24768[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (4))){
var inst_24619 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24619)){
var statearr_24712_24769 = state_24701__$1;
(statearr_24712_24769[(1)] = (8));

} else {
var statearr_24713_24770 = state_24701__$1;
(statearr_24713_24770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (15))){
var inst_24646 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24646)){
var statearr_24714_24771 = state_24701__$1;
(statearr_24714_24771[(1)] = (19));

} else {
var statearr_24715_24772 = state_24701__$1;
(statearr_24715_24772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (21))){
var inst_24651 = (state_24701[(12)]);
var inst_24651__$1 = (state_24701[(2)]);
var inst_24652 = cljs.core.get.call(null,inst_24651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24653 = cljs.core.get.call(null,inst_24651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24654 = cljs.core.get.call(null,inst_24651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24701__$1 = (function (){var statearr_24716 = state_24701;
(statearr_24716[(13)] = inst_24653);

(statearr_24716[(12)] = inst_24651__$1);

(statearr_24716[(11)] = inst_24652);

return statearr_24716;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24701__$1,(22),inst_24654);
} else {
if((state_val_24702 === (31))){
var inst_24683 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24683)){
var statearr_24717_24773 = state_24701__$1;
(statearr_24717_24773[(1)] = (32));

} else {
var statearr_24718_24774 = state_24701__$1;
(statearr_24718_24774[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (32))){
var inst_24660 = (state_24701[(14)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24701__$1,(35),out,inst_24660);
} else {
if((state_val_24702 === (33))){
var inst_24651 = (state_24701[(12)]);
var inst_24628 = inst_24651;
var state_24701__$1 = (function (){var statearr_24719 = state_24701;
(statearr_24719[(7)] = inst_24628);

return statearr_24719;
})();
var statearr_24720_24775 = state_24701__$1;
(statearr_24720_24775[(2)] = null);

(statearr_24720_24775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (13))){
var inst_24628 = (state_24701[(7)]);
var inst_24635 = inst_24628.cljs$lang$protocol_mask$partition0$;
var inst_24636 = (inst_24635 & (64));
var inst_24637 = inst_24628.cljs$core$ISeq$;
var inst_24638 = (cljs.core.PROTOCOL_SENTINEL === inst_24637);
var inst_24639 = ((inst_24636) || (inst_24638));
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24639)){
var statearr_24721_24776 = state_24701__$1;
(statearr_24721_24776[(1)] = (16));

} else {
var statearr_24722_24777 = state_24701__$1;
(statearr_24722_24777[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (22))){
var inst_24660 = (state_24701[(14)]);
var inst_24661 = (state_24701[(10)]);
var inst_24659 = (state_24701[(2)]);
var inst_24660__$1 = cljs.core.nth.call(null,inst_24659,(0),null);
var inst_24661__$1 = cljs.core.nth.call(null,inst_24659,(1),null);
var inst_24662 = (inst_24660__$1 == null);
var inst_24663 = cljs.core._EQ_.call(null,inst_24661__$1,change);
var inst_24664 = ((inst_24662) || (inst_24663));
var state_24701__$1 = (function (){var statearr_24723 = state_24701;
(statearr_24723[(14)] = inst_24660__$1);

(statearr_24723[(10)] = inst_24661__$1);

return statearr_24723;
})();
if(cljs.core.truth_(inst_24664)){
var statearr_24724_24778 = state_24701__$1;
(statearr_24724_24778[(1)] = (23));

} else {
var statearr_24725_24779 = state_24701__$1;
(statearr_24725_24779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (36))){
var inst_24651 = (state_24701[(12)]);
var inst_24628 = inst_24651;
var state_24701__$1 = (function (){var statearr_24726 = state_24701;
(statearr_24726[(7)] = inst_24628);

return statearr_24726;
})();
var statearr_24727_24780 = state_24701__$1;
(statearr_24727_24780[(2)] = null);

(statearr_24727_24780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (29))){
var inst_24675 = (state_24701[(9)]);
var state_24701__$1 = state_24701;
var statearr_24728_24781 = state_24701__$1;
(statearr_24728_24781[(2)] = inst_24675);

(statearr_24728_24781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (6))){
var state_24701__$1 = state_24701;
var statearr_24729_24782 = state_24701__$1;
(statearr_24729_24782[(2)] = false);

(statearr_24729_24782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (28))){
var inst_24671 = (state_24701[(2)]);
var inst_24672 = calc_state.call(null);
var inst_24628 = inst_24672;
var state_24701__$1 = (function (){var statearr_24730 = state_24701;
(statearr_24730[(7)] = inst_24628);

(statearr_24730[(15)] = inst_24671);

return statearr_24730;
})();
var statearr_24731_24783 = state_24701__$1;
(statearr_24731_24783[(2)] = null);

(statearr_24731_24783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (25))){
var inst_24697 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24732_24784 = state_24701__$1;
(statearr_24732_24784[(2)] = inst_24697);

(statearr_24732_24784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (34))){
var inst_24695 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24733_24785 = state_24701__$1;
(statearr_24733_24785[(2)] = inst_24695);

(statearr_24733_24785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (17))){
var state_24701__$1 = state_24701;
var statearr_24734_24786 = state_24701__$1;
(statearr_24734_24786[(2)] = false);

(statearr_24734_24786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (3))){
var state_24701__$1 = state_24701;
var statearr_24735_24787 = state_24701__$1;
(statearr_24735_24787[(2)] = false);

(statearr_24735_24787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (12))){
var inst_24699 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24701__$1,inst_24699);
} else {
if((state_val_24702 === (2))){
var inst_24603 = (state_24701[(8)]);
var inst_24608 = inst_24603.cljs$lang$protocol_mask$partition0$;
var inst_24609 = (inst_24608 & (64));
var inst_24610 = inst_24603.cljs$core$ISeq$;
var inst_24611 = (cljs.core.PROTOCOL_SENTINEL === inst_24610);
var inst_24612 = ((inst_24609) || (inst_24611));
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24612)){
var statearr_24736_24788 = state_24701__$1;
(statearr_24736_24788[(1)] = (5));

} else {
var statearr_24737_24789 = state_24701__$1;
(statearr_24737_24789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (23))){
var inst_24660 = (state_24701[(14)]);
var inst_24666 = (inst_24660 == null);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24666)){
var statearr_24738_24790 = state_24701__$1;
(statearr_24738_24790[(1)] = (26));

} else {
var statearr_24739_24791 = state_24701__$1;
(statearr_24739_24791[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (35))){
var inst_24686 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
if(cljs.core.truth_(inst_24686)){
var statearr_24740_24792 = state_24701__$1;
(statearr_24740_24792[(1)] = (36));

} else {
var statearr_24741_24793 = state_24701__$1;
(statearr_24741_24793[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (19))){
var inst_24628 = (state_24701[(7)]);
var inst_24648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24628);
var state_24701__$1 = state_24701;
var statearr_24742_24794 = state_24701__$1;
(statearr_24742_24794[(2)] = inst_24648);

(statearr_24742_24794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (11))){
var inst_24628 = (state_24701[(7)]);
var inst_24632 = (inst_24628 == null);
var inst_24633 = cljs.core.not.call(null,inst_24632);
var state_24701__$1 = state_24701;
if(inst_24633){
var statearr_24743_24795 = state_24701__$1;
(statearr_24743_24795[(1)] = (13));

} else {
var statearr_24744_24796 = state_24701__$1;
(statearr_24744_24796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (9))){
var inst_24603 = (state_24701[(8)]);
var state_24701__$1 = state_24701;
var statearr_24745_24797 = state_24701__$1;
(statearr_24745_24797[(2)] = inst_24603);

(statearr_24745_24797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (5))){
var state_24701__$1 = state_24701;
var statearr_24746_24798 = state_24701__$1;
(statearr_24746_24798[(2)] = true);

(statearr_24746_24798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (14))){
var state_24701__$1 = state_24701;
var statearr_24747_24799 = state_24701__$1;
(statearr_24747_24799[(2)] = false);

(statearr_24747_24799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (26))){
var inst_24661 = (state_24701[(10)]);
var inst_24668 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24661);
var state_24701__$1 = state_24701;
var statearr_24748_24800 = state_24701__$1;
(statearr_24748_24800[(2)] = inst_24668);

(statearr_24748_24800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (16))){
var state_24701__$1 = state_24701;
var statearr_24749_24801 = state_24701__$1;
(statearr_24749_24801[(2)] = true);

(statearr_24749_24801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (38))){
var inst_24691 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24750_24802 = state_24701__$1;
(statearr_24750_24802[(2)] = inst_24691);

(statearr_24750_24802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (30))){
var inst_24653 = (state_24701[(13)]);
var inst_24661 = (state_24701[(10)]);
var inst_24652 = (state_24701[(11)]);
var inst_24678 = cljs.core.empty_QMARK_.call(null,inst_24652);
var inst_24679 = inst_24653.call(null,inst_24661);
var inst_24680 = cljs.core.not.call(null,inst_24679);
var inst_24681 = ((inst_24678) && (inst_24680));
var state_24701__$1 = state_24701;
var statearr_24751_24803 = state_24701__$1;
(statearr_24751_24803[(2)] = inst_24681);

(statearr_24751_24803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (10))){
var inst_24603 = (state_24701[(8)]);
var inst_24624 = (state_24701[(2)]);
var inst_24625 = cljs.core.get.call(null,inst_24624,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24626 = cljs.core.get.call(null,inst_24624,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24627 = cljs.core.get.call(null,inst_24624,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24628 = inst_24603;
var state_24701__$1 = (function (){var statearr_24752 = state_24701;
(statearr_24752[(7)] = inst_24628);

(statearr_24752[(16)] = inst_24627);

(statearr_24752[(17)] = inst_24626);

(statearr_24752[(18)] = inst_24625);

return statearr_24752;
})();
var statearr_24753_24804 = state_24701__$1;
(statearr_24753_24804[(2)] = null);

(statearr_24753_24804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (18))){
var inst_24643 = (state_24701[(2)]);
var state_24701__$1 = state_24701;
var statearr_24754_24805 = state_24701__$1;
(statearr_24754_24805[(2)] = inst_24643);

(statearr_24754_24805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (37))){
var state_24701__$1 = state_24701;
var statearr_24755_24806 = state_24701__$1;
(statearr_24755_24806[(2)] = null);

(statearr_24755_24806[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24702 === (8))){
var inst_24603 = (state_24701[(8)]);
var inst_24621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24603);
var state_24701__$1 = state_24701;
var statearr_24756_24807 = state_24701__$1;
(statearr_24756_24807[(2)] = inst_24621);

(statearr_24756_24807[(1)] = (10));


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
});})(c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23607__auto__,c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23608__auto__ = null;
var cljs$core$async$mix_$_state_machine__23608__auto____0 = (function (){
var statearr_24757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24757[(0)] = cljs$core$async$mix_$_state_machine__23608__auto__);

(statearr_24757[(1)] = (1));

return statearr_24757;
});
var cljs$core$async$mix_$_state_machine__23608__auto____1 = (function (state_24701){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24758){if((e24758 instanceof Object)){
var ex__23611__auto__ = e24758;
var statearr_24759_24808 = state_24701;
(statearr_24759_24808[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_24701;
state_24701 = G__24809;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23608__auto__ = function(state_24701){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23608__auto____1.call(this,state_24701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23608__auto____0;
cljs$core$async$mix_$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23608__auto____1;
return cljs$core$async$mix_$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23704__auto__ = (function (){var statearr_24760 = f__23703__auto__.call(null);
(statearr_24760[(6)] = c__23702__auto___24761);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24761,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24811 = arguments.length;
switch (G__24811) {
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
var G__24815 = arguments.length;
switch (G__24815) {
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
return (function (p1__24813_SHARP_){
if(cljs.core.truth_(p1__24813_SHARP_.call(null,topic))){
return p1__24813_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24816 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24817){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24817 = meta24817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24818,meta24817__$1){
var self__ = this;
var _24818__$1 = this;
return (new cljs.core.async.t_cljs$core$async24816(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24817__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24818){
var self__ = this;
var _24818__$1 = this;
return self__.meta24817;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24817","meta24817",575322785,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24816";

cljs.core.async.t_cljs$core$async24816.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24816");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24816.
 */
cljs.core.async.__GT_t_cljs$core$async24816 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24817){
return (new cljs.core.async.t_cljs$core$async24816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24817));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24816(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23702__auto___24936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___24936,mults,ensure_mult,p){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___24936,mults,ensure_mult,p){
return (function (state_24890){
var state_val_24891 = (state_24890[(1)]);
if((state_val_24891 === (7))){
var inst_24886 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24892_24937 = state_24890__$1;
(statearr_24892_24937[(2)] = inst_24886);

(statearr_24892_24937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (20))){
var state_24890__$1 = state_24890;
var statearr_24893_24938 = state_24890__$1;
(statearr_24893_24938[(2)] = null);

(statearr_24893_24938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (1))){
var state_24890__$1 = state_24890;
var statearr_24894_24939 = state_24890__$1;
(statearr_24894_24939[(2)] = null);

(statearr_24894_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (24))){
var inst_24869 = (state_24890[(7)]);
var inst_24878 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24869);
var state_24890__$1 = state_24890;
var statearr_24895_24940 = state_24890__$1;
(statearr_24895_24940[(2)] = inst_24878);

(statearr_24895_24940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (4))){
var inst_24821 = (state_24890[(8)]);
var inst_24821__$1 = (state_24890[(2)]);
var inst_24822 = (inst_24821__$1 == null);
var state_24890__$1 = (function (){var statearr_24896 = state_24890;
(statearr_24896[(8)] = inst_24821__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24897_24941 = state_24890__$1;
(statearr_24897_24941[(1)] = (5));

} else {
var statearr_24898_24942 = state_24890__$1;
(statearr_24898_24942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (15))){
var inst_24863 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24899_24943 = state_24890__$1;
(statearr_24899_24943[(2)] = inst_24863);

(statearr_24899_24943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (21))){
var inst_24883 = (state_24890[(2)]);
var state_24890__$1 = (function (){var statearr_24900 = state_24890;
(statearr_24900[(9)] = inst_24883);

return statearr_24900;
})();
var statearr_24901_24944 = state_24890__$1;
(statearr_24901_24944[(2)] = null);

(statearr_24901_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (13))){
var inst_24845 = (state_24890[(10)]);
var inst_24847 = cljs.core.chunked_seq_QMARK_.call(null,inst_24845);
var state_24890__$1 = state_24890;
if(inst_24847){
var statearr_24902_24945 = state_24890__$1;
(statearr_24902_24945[(1)] = (16));

} else {
var statearr_24903_24946 = state_24890__$1;
(statearr_24903_24946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (22))){
var inst_24875 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
if(cljs.core.truth_(inst_24875)){
var statearr_24904_24947 = state_24890__$1;
(statearr_24904_24947[(1)] = (23));

} else {
var statearr_24905_24948 = state_24890__$1;
(statearr_24905_24948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (6))){
var inst_24821 = (state_24890[(8)]);
var inst_24869 = (state_24890[(7)]);
var inst_24871 = (state_24890[(11)]);
var inst_24869__$1 = topic_fn.call(null,inst_24821);
var inst_24870 = cljs.core.deref.call(null,mults);
var inst_24871__$1 = cljs.core.get.call(null,inst_24870,inst_24869__$1);
var state_24890__$1 = (function (){var statearr_24906 = state_24890;
(statearr_24906[(7)] = inst_24869__$1);

(statearr_24906[(11)] = inst_24871__$1);

return statearr_24906;
})();
if(cljs.core.truth_(inst_24871__$1)){
var statearr_24907_24949 = state_24890__$1;
(statearr_24907_24949[(1)] = (19));

} else {
var statearr_24908_24950 = state_24890__$1;
(statearr_24908_24950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (25))){
var inst_24880 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24909_24951 = state_24890__$1;
(statearr_24909_24951[(2)] = inst_24880);

(statearr_24909_24951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (17))){
var inst_24845 = (state_24890[(10)]);
var inst_24854 = cljs.core.first.call(null,inst_24845);
var inst_24855 = cljs.core.async.muxch_STAR_.call(null,inst_24854);
var inst_24856 = cljs.core.async.close_BANG_.call(null,inst_24855);
var inst_24857 = cljs.core.next.call(null,inst_24845);
var inst_24831 = inst_24857;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24910 = state_24890;
(statearr_24910[(12)] = inst_24856);

(statearr_24910[(13)] = inst_24833);

(statearr_24910[(14)] = inst_24831);

(statearr_24910[(15)] = inst_24834);

(statearr_24910[(16)] = inst_24832);

return statearr_24910;
})();
var statearr_24911_24952 = state_24890__$1;
(statearr_24911_24952[(2)] = null);

(statearr_24911_24952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (3))){
var inst_24888 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else {
if((state_val_24891 === (12))){
var inst_24865 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24912_24953 = state_24890__$1;
(statearr_24912_24953[(2)] = inst_24865);

(statearr_24912_24953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (2))){
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24890__$1,(4),ch);
} else {
if((state_val_24891 === (23))){
var state_24890__$1 = state_24890;
var statearr_24913_24954 = state_24890__$1;
(statearr_24913_24954[(2)] = null);

(statearr_24913_24954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (19))){
var inst_24821 = (state_24890[(8)]);
var inst_24871 = (state_24890[(11)]);
var inst_24873 = cljs.core.async.muxch_STAR_.call(null,inst_24871);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24890__$1,(22),inst_24873,inst_24821);
} else {
if((state_val_24891 === (11))){
var inst_24831 = (state_24890[(14)]);
var inst_24845 = (state_24890[(10)]);
var inst_24845__$1 = cljs.core.seq.call(null,inst_24831);
var state_24890__$1 = (function (){var statearr_24914 = state_24890;
(statearr_24914[(10)] = inst_24845__$1);

return statearr_24914;
})();
if(inst_24845__$1){
var statearr_24915_24955 = state_24890__$1;
(statearr_24915_24955[(1)] = (13));

} else {
var statearr_24916_24956 = state_24890__$1;
(statearr_24916_24956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (9))){
var inst_24867 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24917_24957 = state_24890__$1;
(statearr_24917_24957[(2)] = inst_24867);

(statearr_24917_24957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (5))){
var inst_24828 = cljs.core.deref.call(null,mults);
var inst_24829 = cljs.core.vals.call(null,inst_24828);
var inst_24830 = cljs.core.seq.call(null,inst_24829);
var inst_24831 = inst_24830;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24918 = state_24890;
(statearr_24918[(13)] = inst_24833);

(statearr_24918[(14)] = inst_24831);

(statearr_24918[(15)] = inst_24834);

(statearr_24918[(16)] = inst_24832);

return statearr_24918;
})();
var statearr_24919_24958 = state_24890__$1;
(statearr_24919_24958[(2)] = null);

(statearr_24919_24958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (14))){
var state_24890__$1 = state_24890;
var statearr_24923_24959 = state_24890__$1;
(statearr_24923_24959[(2)] = null);

(statearr_24923_24959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (16))){
var inst_24845 = (state_24890[(10)]);
var inst_24849 = cljs.core.chunk_first.call(null,inst_24845);
var inst_24850 = cljs.core.chunk_rest.call(null,inst_24845);
var inst_24851 = cljs.core.count.call(null,inst_24849);
var inst_24831 = inst_24850;
var inst_24832 = inst_24849;
var inst_24833 = inst_24851;
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24924 = state_24890;
(statearr_24924[(13)] = inst_24833);

(statearr_24924[(14)] = inst_24831);

(statearr_24924[(15)] = inst_24834);

(statearr_24924[(16)] = inst_24832);

return statearr_24924;
})();
var statearr_24925_24960 = state_24890__$1;
(statearr_24925_24960[(2)] = null);

(statearr_24925_24960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (10))){
var inst_24833 = (state_24890[(13)]);
var inst_24831 = (state_24890[(14)]);
var inst_24834 = (state_24890[(15)]);
var inst_24832 = (state_24890[(16)]);
var inst_24839 = cljs.core._nth.call(null,inst_24832,inst_24834);
var inst_24840 = cljs.core.async.muxch_STAR_.call(null,inst_24839);
var inst_24841 = cljs.core.async.close_BANG_.call(null,inst_24840);
var inst_24842 = (inst_24834 + (1));
var tmp24920 = inst_24833;
var tmp24921 = inst_24831;
var tmp24922 = inst_24832;
var inst_24831__$1 = tmp24921;
var inst_24832__$1 = tmp24922;
var inst_24833__$1 = tmp24920;
var inst_24834__$1 = inst_24842;
var state_24890__$1 = (function (){var statearr_24926 = state_24890;
(statearr_24926[(13)] = inst_24833__$1);

(statearr_24926[(14)] = inst_24831__$1);

(statearr_24926[(15)] = inst_24834__$1);

(statearr_24926[(16)] = inst_24832__$1);

(statearr_24926[(17)] = inst_24841);

return statearr_24926;
})();
var statearr_24927_24961 = state_24890__$1;
(statearr_24927_24961[(2)] = null);

(statearr_24927_24961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (18))){
var inst_24860 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24928_24962 = state_24890__$1;
(statearr_24928_24962[(2)] = inst_24860);

(statearr_24928_24962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (8))){
var inst_24833 = (state_24890[(13)]);
var inst_24834 = (state_24890[(15)]);
var inst_24836 = (inst_24834 < inst_24833);
var inst_24837 = inst_24836;
var state_24890__$1 = state_24890;
if(cljs.core.truth_(inst_24837)){
var statearr_24929_24963 = state_24890__$1;
(statearr_24929_24963[(1)] = (10));

} else {
var statearr_24930_24964 = state_24890__$1;
(statearr_24930_24964[(1)] = (11));

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
});})(c__23702__auto___24936,mults,ensure_mult,p))
;
return ((function (switch__23607__auto__,c__23702__auto___24936,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_24931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24931[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_24931[(1)] = (1));

return statearr_24931;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_24890){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_24890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e24932){if((e24932 instanceof Object)){
var ex__23611__auto__ = e24932;
var statearr_24933_24965 = state_24890;
(statearr_24933_24965[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24966 = state_24890;
state_24890 = G__24966;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___24936,mults,ensure_mult,p))
})();
var state__23704__auto__ = (function (){var statearr_24934 = f__23703__auto__.call(null);
(statearr_24934[(6)] = c__23702__auto___24936);

return statearr_24934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___24936,mults,ensure_mult,p))
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
var G__24968 = arguments.length;
switch (G__24968) {
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
var G__24971 = arguments.length;
switch (G__24971) {
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
var G__24974 = arguments.length;
switch (G__24974) {
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
var c__23702__auto___25041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25013){
var state_val_25014 = (state_25013[(1)]);
if((state_val_25014 === (7))){
var state_25013__$1 = state_25013;
var statearr_25015_25042 = state_25013__$1;
(statearr_25015_25042[(2)] = null);

(statearr_25015_25042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (1))){
var state_25013__$1 = state_25013;
var statearr_25016_25043 = state_25013__$1;
(statearr_25016_25043[(2)] = null);

(statearr_25016_25043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (4))){
var inst_24977 = (state_25013[(7)]);
var inst_24979 = (inst_24977 < cnt);
var state_25013__$1 = state_25013;
if(cljs.core.truth_(inst_24979)){
var statearr_25017_25044 = state_25013__$1;
(statearr_25017_25044[(1)] = (6));

} else {
var statearr_25018_25045 = state_25013__$1;
(statearr_25018_25045[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (15))){
var inst_25009 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
var statearr_25019_25046 = state_25013__$1;
(statearr_25019_25046[(2)] = inst_25009);

(statearr_25019_25046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (13))){
var inst_25002 = cljs.core.async.close_BANG_.call(null,out);
var state_25013__$1 = state_25013;
var statearr_25020_25047 = state_25013__$1;
(statearr_25020_25047[(2)] = inst_25002);

(statearr_25020_25047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (6))){
var state_25013__$1 = state_25013;
var statearr_25021_25048 = state_25013__$1;
(statearr_25021_25048[(2)] = null);

(statearr_25021_25048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (3))){
var inst_25011 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25013__$1,inst_25011);
} else {
if((state_val_25014 === (12))){
var inst_24999 = (state_25013[(8)]);
var inst_24999__$1 = (state_25013[(2)]);
var inst_25000 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24999__$1);
var state_25013__$1 = (function (){var statearr_25022 = state_25013;
(statearr_25022[(8)] = inst_24999__$1);

return statearr_25022;
})();
if(cljs.core.truth_(inst_25000)){
var statearr_25023_25049 = state_25013__$1;
(statearr_25023_25049[(1)] = (13));

} else {
var statearr_25024_25050 = state_25013__$1;
(statearr_25024_25050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (2))){
var inst_24976 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24977 = (0);
var state_25013__$1 = (function (){var statearr_25025 = state_25013;
(statearr_25025[(9)] = inst_24976);

(statearr_25025[(7)] = inst_24977);

return statearr_25025;
})();
var statearr_25026_25051 = state_25013__$1;
(statearr_25026_25051[(2)] = null);

(statearr_25026_25051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (11))){
var inst_24977 = (state_25013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25013,(10),Object,null,(9));
var inst_24986 = chs__$1.call(null,inst_24977);
var inst_24987 = done.call(null,inst_24977);
var inst_24988 = cljs.core.async.take_BANG_.call(null,inst_24986,inst_24987);
var state_25013__$1 = state_25013;
var statearr_25027_25052 = state_25013__$1;
(statearr_25027_25052[(2)] = inst_24988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (9))){
var inst_24977 = (state_25013[(7)]);
var inst_24990 = (state_25013[(2)]);
var inst_24991 = (inst_24977 + (1));
var inst_24977__$1 = inst_24991;
var state_25013__$1 = (function (){var statearr_25028 = state_25013;
(statearr_25028[(10)] = inst_24990);

(statearr_25028[(7)] = inst_24977__$1);

return statearr_25028;
})();
var statearr_25029_25053 = state_25013__$1;
(statearr_25029_25053[(2)] = null);

(statearr_25029_25053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (5))){
var inst_24997 = (state_25013[(2)]);
var state_25013__$1 = (function (){var statearr_25030 = state_25013;
(statearr_25030[(11)] = inst_24997);

return statearr_25030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25013__$1,(12),dchan);
} else {
if((state_val_25014 === (14))){
var inst_24999 = (state_25013[(8)]);
var inst_25004 = cljs.core.apply.call(null,f,inst_24999);
var state_25013__$1 = state_25013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25013__$1,(16),out,inst_25004);
} else {
if((state_val_25014 === (16))){
var inst_25006 = (state_25013[(2)]);
var state_25013__$1 = (function (){var statearr_25031 = state_25013;
(statearr_25031[(12)] = inst_25006);

return statearr_25031;
})();
var statearr_25032_25054 = state_25013__$1;
(statearr_25032_25054[(2)] = null);

(statearr_25032_25054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (10))){
var inst_24981 = (state_25013[(2)]);
var inst_24982 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25013__$1 = (function (){var statearr_25033 = state_25013;
(statearr_25033[(13)] = inst_24981);

return statearr_25033;
})();
var statearr_25034_25055 = state_25013__$1;
(statearr_25034_25055[(2)] = inst_24982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25014 === (8))){
var inst_24995 = (state_25013[(2)]);
var state_25013__$1 = state_25013;
var statearr_25035_25056 = state_25013__$1;
(statearr_25035_25056[(2)] = inst_24995);

(statearr_25035_25056[(1)] = (5));


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
});})(c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23607__auto__,c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25036[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25036[(1)] = (1));

return statearr_25036;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25013){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25037){if((e25037 instanceof Object)){
var ex__23611__auto__ = e25037;
var statearr_25038_25057 = state_25013;
(statearr_25038_25057[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25058 = state_25013;
state_25013 = G__25058;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23704__auto__ = (function (){var statearr_25039 = f__23703__auto__.call(null);
(statearr_25039[(6)] = c__23702__auto___25041);

return statearr_25039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25041,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25061 = arguments.length;
switch (G__25061) {
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
var c__23702__auto___25115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25115,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25115,out){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (7))){
var inst_25072 = (state_25093[(7)]);
var inst_25073 = (state_25093[(8)]);
var inst_25072__$1 = (state_25093[(2)]);
var inst_25073__$1 = cljs.core.nth.call(null,inst_25072__$1,(0),null);
var inst_25074 = cljs.core.nth.call(null,inst_25072__$1,(1),null);
var inst_25075 = (inst_25073__$1 == null);
var state_25093__$1 = (function (){var statearr_25095 = state_25093;
(statearr_25095[(9)] = inst_25074);

(statearr_25095[(7)] = inst_25072__$1);

(statearr_25095[(8)] = inst_25073__$1);

return statearr_25095;
})();
if(cljs.core.truth_(inst_25075)){
var statearr_25096_25116 = state_25093__$1;
(statearr_25096_25116[(1)] = (8));

} else {
var statearr_25097_25117 = state_25093__$1;
(statearr_25097_25117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (1))){
var inst_25062 = cljs.core.vec.call(null,chs);
var inst_25063 = inst_25062;
var state_25093__$1 = (function (){var statearr_25098 = state_25093;
(statearr_25098[(10)] = inst_25063);

return statearr_25098;
})();
var statearr_25099_25118 = state_25093__$1;
(statearr_25099_25118[(2)] = null);

(statearr_25099_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (4))){
var inst_25063 = (state_25093[(10)]);
var state_25093__$1 = state_25093;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25093__$1,(7),inst_25063);
} else {
if((state_val_25094 === (6))){
var inst_25089 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25100_25119 = state_25093__$1;
(statearr_25100_25119[(2)] = inst_25089);

(statearr_25100_25119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (3))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (2))){
var inst_25063 = (state_25093[(10)]);
var inst_25065 = cljs.core.count.call(null,inst_25063);
var inst_25066 = (inst_25065 > (0));
var state_25093__$1 = state_25093;
if(cljs.core.truth_(inst_25066)){
var statearr_25102_25120 = state_25093__$1;
(statearr_25102_25120[(1)] = (4));

} else {
var statearr_25103_25121 = state_25093__$1;
(statearr_25103_25121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (11))){
var inst_25063 = (state_25093[(10)]);
var inst_25082 = (state_25093[(2)]);
var tmp25101 = inst_25063;
var inst_25063__$1 = tmp25101;
var state_25093__$1 = (function (){var statearr_25104 = state_25093;
(statearr_25104[(10)] = inst_25063__$1);

(statearr_25104[(11)] = inst_25082);

return statearr_25104;
})();
var statearr_25105_25122 = state_25093__$1;
(statearr_25105_25122[(2)] = null);

(statearr_25105_25122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (9))){
var inst_25073 = (state_25093[(8)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25093__$1,(11),out,inst_25073);
} else {
if((state_val_25094 === (5))){
var inst_25087 = cljs.core.async.close_BANG_.call(null,out);
var state_25093__$1 = state_25093;
var statearr_25106_25123 = state_25093__$1;
(statearr_25106_25123[(2)] = inst_25087);

(statearr_25106_25123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (10))){
var inst_25085 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
var statearr_25107_25124 = state_25093__$1;
(statearr_25107_25124[(2)] = inst_25085);

(statearr_25107_25124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25094 === (8))){
var inst_25074 = (state_25093[(9)]);
var inst_25063 = (state_25093[(10)]);
var inst_25072 = (state_25093[(7)]);
var inst_25073 = (state_25093[(8)]);
var inst_25077 = (function (){var cs = inst_25063;
var vec__25068 = inst_25072;
var v = inst_25073;
var c = inst_25074;
return ((function (cs,vec__25068,v,c,inst_25074,inst_25063,inst_25072,inst_25073,state_val_25094,c__23702__auto___25115,out){
return (function (p1__25059_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25059_SHARP_);
});
;})(cs,vec__25068,v,c,inst_25074,inst_25063,inst_25072,inst_25073,state_val_25094,c__23702__auto___25115,out))
})();
var inst_25078 = cljs.core.filterv.call(null,inst_25077,inst_25063);
var inst_25063__$1 = inst_25078;
var state_25093__$1 = (function (){var statearr_25108 = state_25093;
(statearr_25108[(10)] = inst_25063__$1);

return statearr_25108;
})();
var statearr_25109_25125 = state_25093__$1;
(statearr_25109_25125[(2)] = null);

(statearr_25109_25125[(1)] = (2));


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
});})(c__23702__auto___25115,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25115,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25093){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__23611__auto__ = e25111;
var statearr_25112_25126 = state_25093;
(statearr_25112_25126[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25127 = state_25093;
state_25093 = G__25127;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25115,out))
})();
var state__23704__auto__ = (function (){var statearr_25113 = f__23703__auto__.call(null);
(statearr_25113[(6)] = c__23702__auto___25115);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25115,out))
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
var G__25129 = arguments.length;
switch (G__25129) {
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
var c__23702__auto___25174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25174,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25174,out){
return (function (state_25153){
var state_val_25154 = (state_25153[(1)]);
if((state_val_25154 === (7))){
var inst_25135 = (state_25153[(7)]);
var inst_25135__$1 = (state_25153[(2)]);
var inst_25136 = (inst_25135__$1 == null);
var inst_25137 = cljs.core.not.call(null,inst_25136);
var state_25153__$1 = (function (){var statearr_25155 = state_25153;
(statearr_25155[(7)] = inst_25135__$1);

return statearr_25155;
})();
if(inst_25137){
var statearr_25156_25175 = state_25153__$1;
(statearr_25156_25175[(1)] = (8));

} else {
var statearr_25157_25176 = state_25153__$1;
(statearr_25157_25176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (1))){
var inst_25130 = (0);
var state_25153__$1 = (function (){var statearr_25158 = state_25153;
(statearr_25158[(8)] = inst_25130);

return statearr_25158;
})();
var statearr_25159_25177 = state_25153__$1;
(statearr_25159_25177[(2)] = null);

(statearr_25159_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (4))){
var state_25153__$1 = state_25153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25153__$1,(7),ch);
} else {
if((state_val_25154 === (6))){
var inst_25148 = (state_25153[(2)]);
var state_25153__$1 = state_25153;
var statearr_25160_25178 = state_25153__$1;
(statearr_25160_25178[(2)] = inst_25148);

(statearr_25160_25178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (3))){
var inst_25150 = (state_25153[(2)]);
var inst_25151 = cljs.core.async.close_BANG_.call(null,out);
var state_25153__$1 = (function (){var statearr_25161 = state_25153;
(statearr_25161[(9)] = inst_25150);

return statearr_25161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25153__$1,inst_25151);
} else {
if((state_val_25154 === (2))){
var inst_25130 = (state_25153[(8)]);
var inst_25132 = (inst_25130 < n);
var state_25153__$1 = state_25153;
if(cljs.core.truth_(inst_25132)){
var statearr_25162_25179 = state_25153__$1;
(statearr_25162_25179[(1)] = (4));

} else {
var statearr_25163_25180 = state_25153__$1;
(statearr_25163_25180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (11))){
var inst_25130 = (state_25153[(8)]);
var inst_25140 = (state_25153[(2)]);
var inst_25141 = (inst_25130 + (1));
var inst_25130__$1 = inst_25141;
var state_25153__$1 = (function (){var statearr_25164 = state_25153;
(statearr_25164[(10)] = inst_25140);

(statearr_25164[(8)] = inst_25130__$1);

return statearr_25164;
})();
var statearr_25165_25181 = state_25153__$1;
(statearr_25165_25181[(2)] = null);

(statearr_25165_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (9))){
var state_25153__$1 = state_25153;
var statearr_25166_25182 = state_25153__$1;
(statearr_25166_25182[(2)] = null);

(statearr_25166_25182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (5))){
var state_25153__$1 = state_25153;
var statearr_25167_25183 = state_25153__$1;
(statearr_25167_25183[(2)] = null);

(statearr_25167_25183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (10))){
var inst_25145 = (state_25153[(2)]);
var state_25153__$1 = state_25153;
var statearr_25168_25184 = state_25153__$1;
(statearr_25168_25184[(2)] = inst_25145);

(statearr_25168_25184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25154 === (8))){
var inst_25135 = (state_25153[(7)]);
var state_25153__$1 = state_25153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25153__$1,(11),out,inst_25135);
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
});})(c__23702__auto___25174,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25174,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25169[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25169[(1)] = (1));

return statearr_25169;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25153){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25170){if((e25170 instanceof Object)){
var ex__23611__auto__ = e25170;
var statearr_25171_25185 = state_25153;
(statearr_25171_25185[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25186 = state_25153;
state_25153 = G__25186;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25174,out))
})();
var state__23704__auto__ = (function (){var statearr_25172 = f__23703__auto__.call(null);
(statearr_25172[(6)] = c__23702__auto___25174);

return statearr_25172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25174,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25188 = (function (f,ch,meta25189){
this.f = f;
this.ch = ch;
this.meta25189 = meta25189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25190,meta25189__$1){
var self__ = this;
var _25190__$1 = this;
return (new cljs.core.async.t_cljs$core$async25188(self__.f,self__.ch,meta25189__$1));
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25190){
var self__ = this;
var _25190__$1 = this;
return self__.meta25189;
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25191 = (function (f,ch,meta25189,_,fn1,meta25192){
this.f = f;
this.ch = ch;
this.meta25189 = meta25189;
this._ = _;
this.fn1 = fn1;
this.meta25192 = meta25192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25193,meta25192__$1){
var self__ = this;
var _25193__$1 = this;
return (new cljs.core.async.t_cljs$core$async25191(self__.f,self__.ch,self__.meta25189,self__._,self__.fn1,meta25192__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25193){
var self__ = this;
var _25193__$1 = this;
return self__.meta25192;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25187_SHARP_){
return f1.call(null,(((p1__25187_SHARP_ == null))?null:self__.f.call(null,p1__25187_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25189","meta25189",-1099744750,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25188","cljs.core.async/t_cljs$core$async25188",-1026315554,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25192","meta25192",-1259297386,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25191";

cljs.core.async.t_cljs$core$async25191.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25191");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25191.
 */
cljs.core.async.__GT_t_cljs$core$async25191 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25191(f__$1,ch__$1,meta25189__$1,___$2,fn1__$1,meta25192){
return (new cljs.core.async.t_cljs$core$async25191(f__$1,ch__$1,meta25189__$1,___$2,fn1__$1,meta25192));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25191(self__.f,self__.ch,self__.meta25189,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25189","meta25189",-1099744750,null)], null);
});

cljs.core.async.t_cljs$core$async25188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25188";

cljs.core.async.t_cljs$core$async25188.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25188");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25188.
 */
cljs.core.async.__GT_t_cljs$core$async25188 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25188(f__$1,ch__$1,meta25189){
return (new cljs.core.async.t_cljs$core$async25188(f__$1,ch__$1,meta25189));
});

}

return (new cljs.core.async.t_cljs$core$async25188(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25194 = (function (f,ch,meta25195){
this.f = f;
this.ch = ch;
this.meta25195 = meta25195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25196,meta25195__$1){
var self__ = this;
var _25196__$1 = this;
return (new cljs.core.async.t_cljs$core$async25194(self__.f,self__.ch,meta25195__$1));
});

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25196){
var self__ = this;
var _25196__$1 = this;
return self__.meta25195;
});

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25195","meta25195",1529374887,null)], null);
});

cljs.core.async.t_cljs$core$async25194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25194";

cljs.core.async.t_cljs$core$async25194.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25194");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25194.
 */
cljs.core.async.__GT_t_cljs$core$async25194 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25194(f__$1,ch__$1,meta25195){
return (new cljs.core.async.t_cljs$core$async25194(f__$1,ch__$1,meta25195));
});

}

return (new cljs.core.async.t_cljs$core$async25194(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25197 = (function (p,ch,meta25198){
this.p = p;
this.ch = ch;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new cljs.core.async.t_cljs$core$async25197(self__.p,self__.ch,meta25198__$1));
});

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
});

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
});

cljs.core.async.t_cljs$core$async25197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25197";

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25197");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25197.
 */
cljs.core.async.__GT_t_cljs$core$async25197 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25197(p__$1,ch__$1,meta25198){
return (new cljs.core.async.t_cljs$core$async25197(p__$1,ch__$1,meta25198));
});

}

return (new cljs.core.async.t_cljs$core$async25197(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25201 = arguments.length;
switch (G__25201) {
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
var c__23702__auto___25241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25241,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25241,out){
return (function (state_25222){
var state_val_25223 = (state_25222[(1)]);
if((state_val_25223 === (7))){
var inst_25218 = (state_25222[(2)]);
var state_25222__$1 = state_25222;
var statearr_25224_25242 = state_25222__$1;
(statearr_25224_25242[(2)] = inst_25218);

(statearr_25224_25242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (1))){
var state_25222__$1 = state_25222;
var statearr_25225_25243 = state_25222__$1;
(statearr_25225_25243[(2)] = null);

(statearr_25225_25243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (4))){
var inst_25204 = (state_25222[(7)]);
var inst_25204__$1 = (state_25222[(2)]);
var inst_25205 = (inst_25204__$1 == null);
var state_25222__$1 = (function (){var statearr_25226 = state_25222;
(statearr_25226[(7)] = inst_25204__$1);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25205)){
var statearr_25227_25244 = state_25222__$1;
(statearr_25227_25244[(1)] = (5));

} else {
var statearr_25228_25245 = state_25222__$1;
(statearr_25228_25245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (6))){
var inst_25204 = (state_25222[(7)]);
var inst_25209 = p.call(null,inst_25204);
var state_25222__$1 = state_25222;
if(cljs.core.truth_(inst_25209)){
var statearr_25229_25246 = state_25222__$1;
(statearr_25229_25246[(1)] = (8));

} else {
var statearr_25230_25247 = state_25222__$1;
(statearr_25230_25247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (3))){
var inst_25220 = (state_25222[(2)]);
var state_25222__$1 = state_25222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25222__$1,inst_25220);
} else {
if((state_val_25223 === (2))){
var state_25222__$1 = state_25222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25222__$1,(4),ch);
} else {
if((state_val_25223 === (11))){
var inst_25212 = (state_25222[(2)]);
var state_25222__$1 = state_25222;
var statearr_25231_25248 = state_25222__$1;
(statearr_25231_25248[(2)] = inst_25212);

(statearr_25231_25248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (9))){
var state_25222__$1 = state_25222;
var statearr_25232_25249 = state_25222__$1;
(statearr_25232_25249[(2)] = null);

(statearr_25232_25249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (5))){
var inst_25207 = cljs.core.async.close_BANG_.call(null,out);
var state_25222__$1 = state_25222;
var statearr_25233_25250 = state_25222__$1;
(statearr_25233_25250[(2)] = inst_25207);

(statearr_25233_25250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (10))){
var inst_25215 = (state_25222[(2)]);
var state_25222__$1 = (function (){var statearr_25234 = state_25222;
(statearr_25234[(8)] = inst_25215);

return statearr_25234;
})();
var statearr_25235_25251 = state_25222__$1;
(statearr_25235_25251[(2)] = null);

(statearr_25235_25251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25223 === (8))){
var inst_25204 = (state_25222[(7)]);
var state_25222__$1 = state_25222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25222__$1,(11),out,inst_25204);
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
});})(c__23702__auto___25241,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25241,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25236 = [null,null,null,null,null,null,null,null,null];
(statearr_25236[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25236[(1)] = (1));

return statearr_25236;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25222){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25237){if((e25237 instanceof Object)){
var ex__23611__auto__ = e25237;
var statearr_25238_25252 = state_25222;
(statearr_25238_25252[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25253 = state_25222;
state_25222 = G__25253;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25241,out))
})();
var state__23704__auto__ = (function (){var statearr_25239 = f__23703__auto__.call(null);
(statearr_25239[(6)] = c__23702__auto___25241);

return statearr_25239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25241,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25255 = arguments.length;
switch (G__25255) {
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
var c__23702__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto__){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto__){
return (function (state_25318){
var state_val_25319 = (state_25318[(1)]);
if((state_val_25319 === (7))){
var inst_25314 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25320_25358 = state_25318__$1;
(statearr_25320_25358[(2)] = inst_25314);

(statearr_25320_25358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (20))){
var inst_25284 = (state_25318[(7)]);
var inst_25295 = (state_25318[(2)]);
var inst_25296 = cljs.core.next.call(null,inst_25284);
var inst_25270 = inst_25296;
var inst_25271 = null;
var inst_25272 = (0);
var inst_25273 = (0);
var state_25318__$1 = (function (){var statearr_25321 = state_25318;
(statearr_25321[(8)] = inst_25272);

(statearr_25321[(9)] = inst_25270);

(statearr_25321[(10)] = inst_25271);

(statearr_25321[(11)] = inst_25295);

(statearr_25321[(12)] = inst_25273);

return statearr_25321;
})();
var statearr_25322_25359 = state_25318__$1;
(statearr_25322_25359[(2)] = null);

(statearr_25322_25359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (1))){
var state_25318__$1 = state_25318;
var statearr_25323_25360 = state_25318__$1;
(statearr_25323_25360[(2)] = null);

(statearr_25323_25360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (4))){
var inst_25259 = (state_25318[(13)]);
var inst_25259__$1 = (state_25318[(2)]);
var inst_25260 = (inst_25259__$1 == null);
var state_25318__$1 = (function (){var statearr_25324 = state_25318;
(statearr_25324[(13)] = inst_25259__$1);

return statearr_25324;
})();
if(cljs.core.truth_(inst_25260)){
var statearr_25325_25361 = state_25318__$1;
(statearr_25325_25361[(1)] = (5));

} else {
var statearr_25326_25362 = state_25318__$1;
(statearr_25326_25362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (15))){
var state_25318__$1 = state_25318;
var statearr_25330_25363 = state_25318__$1;
(statearr_25330_25363[(2)] = null);

(statearr_25330_25363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (21))){
var state_25318__$1 = state_25318;
var statearr_25331_25364 = state_25318__$1;
(statearr_25331_25364[(2)] = null);

(statearr_25331_25364[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (13))){
var inst_25272 = (state_25318[(8)]);
var inst_25270 = (state_25318[(9)]);
var inst_25271 = (state_25318[(10)]);
var inst_25273 = (state_25318[(12)]);
var inst_25280 = (state_25318[(2)]);
var inst_25281 = (inst_25273 + (1));
var tmp25327 = inst_25272;
var tmp25328 = inst_25270;
var tmp25329 = inst_25271;
var inst_25270__$1 = tmp25328;
var inst_25271__$1 = tmp25329;
var inst_25272__$1 = tmp25327;
var inst_25273__$1 = inst_25281;
var state_25318__$1 = (function (){var statearr_25332 = state_25318;
(statearr_25332[(8)] = inst_25272__$1);

(statearr_25332[(14)] = inst_25280);

(statearr_25332[(9)] = inst_25270__$1);

(statearr_25332[(10)] = inst_25271__$1);

(statearr_25332[(12)] = inst_25273__$1);

return statearr_25332;
})();
var statearr_25333_25365 = state_25318__$1;
(statearr_25333_25365[(2)] = null);

(statearr_25333_25365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (22))){
var state_25318__$1 = state_25318;
var statearr_25334_25366 = state_25318__$1;
(statearr_25334_25366[(2)] = null);

(statearr_25334_25366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (6))){
var inst_25259 = (state_25318[(13)]);
var inst_25268 = f.call(null,inst_25259);
var inst_25269 = cljs.core.seq.call(null,inst_25268);
var inst_25270 = inst_25269;
var inst_25271 = null;
var inst_25272 = (0);
var inst_25273 = (0);
var state_25318__$1 = (function (){var statearr_25335 = state_25318;
(statearr_25335[(8)] = inst_25272);

(statearr_25335[(9)] = inst_25270);

(statearr_25335[(10)] = inst_25271);

(statearr_25335[(12)] = inst_25273);

return statearr_25335;
})();
var statearr_25336_25367 = state_25318__$1;
(statearr_25336_25367[(2)] = null);

(statearr_25336_25367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (17))){
var inst_25284 = (state_25318[(7)]);
var inst_25288 = cljs.core.chunk_first.call(null,inst_25284);
var inst_25289 = cljs.core.chunk_rest.call(null,inst_25284);
var inst_25290 = cljs.core.count.call(null,inst_25288);
var inst_25270 = inst_25289;
var inst_25271 = inst_25288;
var inst_25272 = inst_25290;
var inst_25273 = (0);
var state_25318__$1 = (function (){var statearr_25337 = state_25318;
(statearr_25337[(8)] = inst_25272);

(statearr_25337[(9)] = inst_25270);

(statearr_25337[(10)] = inst_25271);

(statearr_25337[(12)] = inst_25273);

return statearr_25337;
})();
var statearr_25338_25368 = state_25318__$1;
(statearr_25338_25368[(2)] = null);

(statearr_25338_25368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (3))){
var inst_25316 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25318__$1,inst_25316);
} else {
if((state_val_25319 === (12))){
var inst_25304 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25339_25369 = state_25318__$1;
(statearr_25339_25369[(2)] = inst_25304);

(statearr_25339_25369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (2))){
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25318__$1,(4),in$);
} else {
if((state_val_25319 === (23))){
var inst_25312 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25340_25370 = state_25318__$1;
(statearr_25340_25370[(2)] = inst_25312);

(statearr_25340_25370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (19))){
var inst_25299 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25341_25371 = state_25318__$1;
(statearr_25341_25371[(2)] = inst_25299);

(statearr_25341_25371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (11))){
var inst_25284 = (state_25318[(7)]);
var inst_25270 = (state_25318[(9)]);
var inst_25284__$1 = cljs.core.seq.call(null,inst_25270);
var state_25318__$1 = (function (){var statearr_25342 = state_25318;
(statearr_25342[(7)] = inst_25284__$1);

return statearr_25342;
})();
if(inst_25284__$1){
var statearr_25343_25372 = state_25318__$1;
(statearr_25343_25372[(1)] = (14));

} else {
var statearr_25344_25373 = state_25318__$1;
(statearr_25344_25373[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (9))){
var inst_25306 = (state_25318[(2)]);
var inst_25307 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25318__$1 = (function (){var statearr_25345 = state_25318;
(statearr_25345[(15)] = inst_25306);

return statearr_25345;
})();
if(cljs.core.truth_(inst_25307)){
var statearr_25346_25374 = state_25318__$1;
(statearr_25346_25374[(1)] = (21));

} else {
var statearr_25347_25375 = state_25318__$1;
(statearr_25347_25375[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (5))){
var inst_25262 = cljs.core.async.close_BANG_.call(null,out);
var state_25318__$1 = state_25318;
var statearr_25348_25376 = state_25318__$1;
(statearr_25348_25376[(2)] = inst_25262);

(statearr_25348_25376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (14))){
var inst_25284 = (state_25318[(7)]);
var inst_25286 = cljs.core.chunked_seq_QMARK_.call(null,inst_25284);
var state_25318__$1 = state_25318;
if(inst_25286){
var statearr_25349_25377 = state_25318__$1;
(statearr_25349_25377[(1)] = (17));

} else {
var statearr_25350_25378 = state_25318__$1;
(statearr_25350_25378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (16))){
var inst_25302 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25351_25379 = state_25318__$1;
(statearr_25351_25379[(2)] = inst_25302);

(statearr_25351_25379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (10))){
var inst_25271 = (state_25318[(10)]);
var inst_25273 = (state_25318[(12)]);
var inst_25278 = cljs.core._nth.call(null,inst_25271,inst_25273);
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25318__$1,(13),out,inst_25278);
} else {
if((state_val_25319 === (18))){
var inst_25284 = (state_25318[(7)]);
var inst_25293 = cljs.core.first.call(null,inst_25284);
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25318__$1,(20),out,inst_25293);
} else {
if((state_val_25319 === (8))){
var inst_25272 = (state_25318[(8)]);
var inst_25273 = (state_25318[(12)]);
var inst_25275 = (inst_25273 < inst_25272);
var inst_25276 = inst_25275;
var state_25318__$1 = state_25318;
if(cljs.core.truth_(inst_25276)){
var statearr_25352_25380 = state_25318__$1;
(statearr_25352_25380[(1)] = (10));

} else {
var statearr_25353_25381 = state_25318__$1;
(statearr_25353_25381[(1)] = (11));

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
});})(c__23702__auto__))
;
return ((function (switch__23607__auto__,c__23702__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____0 = (function (){
var statearr_25354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25354[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__);

(statearr_25354[(1)] = (1));

return statearr_25354;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____1 = (function (state_25318){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25355){if((e25355 instanceof Object)){
var ex__23611__auto__ = e25355;
var statearr_25356_25382 = state_25318;
(statearr_25356_25382[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25318;
state_25318 = G__25383;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__ = function(state_25318){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____1.call(this,state_25318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto__))
})();
var state__23704__auto__ = (function (){var statearr_25357 = f__23703__auto__.call(null);
(statearr_25357[(6)] = c__23702__auto__);

return statearr_25357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto__))
);

return c__23702__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25385 = arguments.length;
switch (G__25385) {
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
var G__25388 = arguments.length;
switch (G__25388) {
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
var G__25391 = arguments.length;
switch (G__25391) {
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
var c__23702__auto___25438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25438,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25438,out){
return (function (state_25415){
var state_val_25416 = (state_25415[(1)]);
if((state_val_25416 === (7))){
var inst_25410 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25417_25439 = state_25415__$1;
(statearr_25417_25439[(2)] = inst_25410);

(statearr_25417_25439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (1))){
var inst_25392 = null;
var state_25415__$1 = (function (){var statearr_25418 = state_25415;
(statearr_25418[(7)] = inst_25392);

return statearr_25418;
})();
var statearr_25419_25440 = state_25415__$1;
(statearr_25419_25440[(2)] = null);

(statearr_25419_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (4))){
var inst_25395 = (state_25415[(8)]);
var inst_25395__$1 = (state_25415[(2)]);
var inst_25396 = (inst_25395__$1 == null);
var inst_25397 = cljs.core.not.call(null,inst_25396);
var state_25415__$1 = (function (){var statearr_25420 = state_25415;
(statearr_25420[(8)] = inst_25395__$1);

return statearr_25420;
})();
if(inst_25397){
var statearr_25421_25441 = state_25415__$1;
(statearr_25421_25441[(1)] = (5));

} else {
var statearr_25422_25442 = state_25415__$1;
(statearr_25422_25442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (6))){
var state_25415__$1 = state_25415;
var statearr_25423_25443 = state_25415__$1;
(statearr_25423_25443[(2)] = null);

(statearr_25423_25443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (3))){
var inst_25412 = (state_25415[(2)]);
var inst_25413 = cljs.core.async.close_BANG_.call(null,out);
var state_25415__$1 = (function (){var statearr_25424 = state_25415;
(statearr_25424[(9)] = inst_25412);

return statearr_25424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25415__$1,inst_25413);
} else {
if((state_val_25416 === (2))){
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25415__$1,(4),ch);
} else {
if((state_val_25416 === (11))){
var inst_25395 = (state_25415[(8)]);
var inst_25404 = (state_25415[(2)]);
var inst_25392 = inst_25395;
var state_25415__$1 = (function (){var statearr_25425 = state_25415;
(statearr_25425[(7)] = inst_25392);

(statearr_25425[(10)] = inst_25404);

return statearr_25425;
})();
var statearr_25426_25444 = state_25415__$1;
(statearr_25426_25444[(2)] = null);

(statearr_25426_25444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (9))){
var inst_25395 = (state_25415[(8)]);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25415__$1,(11),out,inst_25395);
} else {
if((state_val_25416 === (5))){
var inst_25392 = (state_25415[(7)]);
var inst_25395 = (state_25415[(8)]);
var inst_25399 = cljs.core._EQ_.call(null,inst_25395,inst_25392);
var state_25415__$1 = state_25415;
if(inst_25399){
var statearr_25428_25445 = state_25415__$1;
(statearr_25428_25445[(1)] = (8));

} else {
var statearr_25429_25446 = state_25415__$1;
(statearr_25429_25446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (10))){
var inst_25407 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25430_25447 = state_25415__$1;
(statearr_25430_25447[(2)] = inst_25407);

(statearr_25430_25447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (8))){
var inst_25392 = (state_25415[(7)]);
var tmp25427 = inst_25392;
var inst_25392__$1 = tmp25427;
var state_25415__$1 = (function (){var statearr_25431 = state_25415;
(statearr_25431[(7)] = inst_25392__$1);

return statearr_25431;
})();
var statearr_25432_25448 = state_25415__$1;
(statearr_25432_25448[(2)] = null);

(statearr_25432_25448[(1)] = (2));


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
});})(c__23702__auto___25438,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25438,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25433[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25433[(1)] = (1));

return statearr_25433;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25415){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25434){if((e25434 instanceof Object)){
var ex__23611__auto__ = e25434;
var statearr_25435_25449 = state_25415;
(statearr_25435_25449[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25450 = state_25415;
state_25415 = G__25450;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25438,out))
})();
var state__23704__auto__ = (function (){var statearr_25436 = f__23703__auto__.call(null);
(statearr_25436[(6)] = c__23702__auto___25438);

return statearr_25436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25438,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25452 = arguments.length;
switch (G__25452) {
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
var c__23702__auto___25518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25518,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25518,out){
return (function (state_25490){
var state_val_25491 = (state_25490[(1)]);
if((state_val_25491 === (7))){
var inst_25486 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25492_25519 = state_25490__$1;
(statearr_25492_25519[(2)] = inst_25486);

(statearr_25492_25519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (1))){
var inst_25453 = (new Array(n));
var inst_25454 = inst_25453;
var inst_25455 = (0);
var state_25490__$1 = (function (){var statearr_25493 = state_25490;
(statearr_25493[(7)] = inst_25454);

(statearr_25493[(8)] = inst_25455);

return statearr_25493;
})();
var statearr_25494_25520 = state_25490__$1;
(statearr_25494_25520[(2)] = null);

(statearr_25494_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (4))){
var inst_25458 = (state_25490[(9)]);
var inst_25458__$1 = (state_25490[(2)]);
var inst_25459 = (inst_25458__$1 == null);
var inst_25460 = cljs.core.not.call(null,inst_25459);
var state_25490__$1 = (function (){var statearr_25495 = state_25490;
(statearr_25495[(9)] = inst_25458__$1);

return statearr_25495;
})();
if(inst_25460){
var statearr_25496_25521 = state_25490__$1;
(statearr_25496_25521[(1)] = (5));

} else {
var statearr_25497_25522 = state_25490__$1;
(statearr_25497_25522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (15))){
var inst_25480 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25498_25523 = state_25490__$1;
(statearr_25498_25523[(2)] = inst_25480);

(statearr_25498_25523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (13))){
var state_25490__$1 = state_25490;
var statearr_25499_25524 = state_25490__$1;
(statearr_25499_25524[(2)] = null);

(statearr_25499_25524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (6))){
var inst_25455 = (state_25490[(8)]);
var inst_25476 = (inst_25455 > (0));
var state_25490__$1 = state_25490;
if(cljs.core.truth_(inst_25476)){
var statearr_25500_25525 = state_25490__$1;
(statearr_25500_25525[(1)] = (12));

} else {
var statearr_25501_25526 = state_25490__$1;
(statearr_25501_25526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (3))){
var inst_25488 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25490__$1,inst_25488);
} else {
if((state_val_25491 === (12))){
var inst_25454 = (state_25490[(7)]);
var inst_25478 = cljs.core.vec.call(null,inst_25454);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(15),out,inst_25478);
} else {
if((state_val_25491 === (2))){
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,(4),ch);
} else {
if((state_val_25491 === (11))){
var inst_25470 = (state_25490[(2)]);
var inst_25471 = (new Array(n));
var inst_25454 = inst_25471;
var inst_25455 = (0);
var state_25490__$1 = (function (){var statearr_25502 = state_25490;
(statearr_25502[(10)] = inst_25470);

(statearr_25502[(7)] = inst_25454);

(statearr_25502[(8)] = inst_25455);

return statearr_25502;
})();
var statearr_25503_25527 = state_25490__$1;
(statearr_25503_25527[(2)] = null);

(statearr_25503_25527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (9))){
var inst_25454 = (state_25490[(7)]);
var inst_25468 = cljs.core.vec.call(null,inst_25454);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(11),out,inst_25468);
} else {
if((state_val_25491 === (5))){
var inst_25458 = (state_25490[(9)]);
var inst_25463 = (state_25490[(11)]);
var inst_25454 = (state_25490[(7)]);
var inst_25455 = (state_25490[(8)]);
var inst_25462 = (inst_25454[inst_25455] = inst_25458);
var inst_25463__$1 = (inst_25455 + (1));
var inst_25464 = (inst_25463__$1 < n);
var state_25490__$1 = (function (){var statearr_25504 = state_25490;
(statearr_25504[(11)] = inst_25463__$1);

(statearr_25504[(12)] = inst_25462);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25464)){
var statearr_25505_25528 = state_25490__$1;
(statearr_25505_25528[(1)] = (8));

} else {
var statearr_25506_25529 = state_25490__$1;
(statearr_25506_25529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (14))){
var inst_25483 = (state_25490[(2)]);
var inst_25484 = cljs.core.async.close_BANG_.call(null,out);
var state_25490__$1 = (function (){var statearr_25508 = state_25490;
(statearr_25508[(13)] = inst_25483);

return statearr_25508;
})();
var statearr_25509_25530 = state_25490__$1;
(statearr_25509_25530[(2)] = inst_25484);

(statearr_25509_25530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (10))){
var inst_25474 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25510_25531 = state_25490__$1;
(statearr_25510_25531[(2)] = inst_25474);

(statearr_25510_25531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (8))){
var inst_25463 = (state_25490[(11)]);
var inst_25454 = (state_25490[(7)]);
var tmp25507 = inst_25454;
var inst_25454__$1 = tmp25507;
var inst_25455 = inst_25463;
var state_25490__$1 = (function (){var statearr_25511 = state_25490;
(statearr_25511[(7)] = inst_25454__$1);

(statearr_25511[(8)] = inst_25455);

return statearr_25511;
})();
var statearr_25512_25532 = state_25490__$1;
(statearr_25512_25532[(2)] = null);

(statearr_25512_25532[(1)] = (2));


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
});})(c__23702__auto___25518,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25518,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25513[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25513[(1)] = (1));

return statearr_25513;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25490){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25514){if((e25514 instanceof Object)){
var ex__23611__auto__ = e25514;
var statearr_25515_25533 = state_25490;
(statearr_25515_25533[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25534 = state_25490;
state_25490 = G__25534;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25518,out))
})();
var state__23704__auto__ = (function (){var statearr_25516 = f__23703__auto__.call(null);
(statearr_25516[(6)] = c__23702__auto___25518);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25518,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25536 = arguments.length;
switch (G__25536) {
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
var c__23702__auto___25606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23702__auto___25606,out){
return (function (){
var f__23703__auto__ = (function (){var switch__23607__auto__ = ((function (c__23702__auto___25606,out){
return (function (state_25578){
var state_val_25579 = (state_25578[(1)]);
if((state_val_25579 === (7))){
var inst_25574 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
var statearr_25580_25607 = state_25578__$1;
(statearr_25580_25607[(2)] = inst_25574);

(statearr_25580_25607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (1))){
var inst_25537 = [];
var inst_25538 = inst_25537;
var inst_25539 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25578__$1 = (function (){var statearr_25581 = state_25578;
(statearr_25581[(7)] = inst_25539);

(statearr_25581[(8)] = inst_25538);

return statearr_25581;
})();
var statearr_25582_25608 = state_25578__$1;
(statearr_25582_25608[(2)] = null);

(statearr_25582_25608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (4))){
var inst_25542 = (state_25578[(9)]);
var inst_25542__$1 = (state_25578[(2)]);
var inst_25543 = (inst_25542__$1 == null);
var inst_25544 = cljs.core.not.call(null,inst_25543);
var state_25578__$1 = (function (){var statearr_25583 = state_25578;
(statearr_25583[(9)] = inst_25542__$1);

return statearr_25583;
})();
if(inst_25544){
var statearr_25584_25609 = state_25578__$1;
(statearr_25584_25609[(1)] = (5));

} else {
var statearr_25585_25610 = state_25578__$1;
(statearr_25585_25610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (15))){
var inst_25568 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
var statearr_25586_25611 = state_25578__$1;
(statearr_25586_25611[(2)] = inst_25568);

(statearr_25586_25611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (13))){
var state_25578__$1 = state_25578;
var statearr_25587_25612 = state_25578__$1;
(statearr_25587_25612[(2)] = null);

(statearr_25587_25612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (6))){
var inst_25538 = (state_25578[(8)]);
var inst_25563 = inst_25538.length;
var inst_25564 = (inst_25563 > (0));
var state_25578__$1 = state_25578;
if(cljs.core.truth_(inst_25564)){
var statearr_25588_25613 = state_25578__$1;
(statearr_25588_25613[(1)] = (12));

} else {
var statearr_25589_25614 = state_25578__$1;
(statearr_25589_25614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (3))){
var inst_25576 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25578__$1,inst_25576);
} else {
if((state_val_25579 === (12))){
var inst_25538 = (state_25578[(8)]);
var inst_25566 = cljs.core.vec.call(null,inst_25538);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25578__$1,(15),out,inst_25566);
} else {
if((state_val_25579 === (2))){
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25578__$1,(4),ch);
} else {
if((state_val_25579 === (11))){
var inst_25546 = (state_25578[(10)]);
var inst_25542 = (state_25578[(9)]);
var inst_25556 = (state_25578[(2)]);
var inst_25557 = [];
var inst_25558 = inst_25557.push(inst_25542);
var inst_25538 = inst_25557;
var inst_25539 = inst_25546;
var state_25578__$1 = (function (){var statearr_25590 = state_25578;
(statearr_25590[(7)] = inst_25539);

(statearr_25590[(8)] = inst_25538);

(statearr_25590[(11)] = inst_25558);

(statearr_25590[(12)] = inst_25556);

return statearr_25590;
})();
var statearr_25591_25615 = state_25578__$1;
(statearr_25591_25615[(2)] = null);

(statearr_25591_25615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (9))){
var inst_25538 = (state_25578[(8)]);
var inst_25554 = cljs.core.vec.call(null,inst_25538);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25578__$1,(11),out,inst_25554);
} else {
if((state_val_25579 === (5))){
var inst_25539 = (state_25578[(7)]);
var inst_25546 = (state_25578[(10)]);
var inst_25542 = (state_25578[(9)]);
var inst_25546__$1 = f.call(null,inst_25542);
var inst_25547 = cljs.core._EQ_.call(null,inst_25546__$1,inst_25539);
var inst_25548 = cljs.core.keyword_identical_QMARK_.call(null,inst_25539,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25549 = ((inst_25547) || (inst_25548));
var state_25578__$1 = (function (){var statearr_25592 = state_25578;
(statearr_25592[(10)] = inst_25546__$1);

return statearr_25592;
})();
if(cljs.core.truth_(inst_25549)){
var statearr_25593_25616 = state_25578__$1;
(statearr_25593_25616[(1)] = (8));

} else {
var statearr_25594_25617 = state_25578__$1;
(statearr_25594_25617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (14))){
var inst_25571 = (state_25578[(2)]);
var inst_25572 = cljs.core.async.close_BANG_.call(null,out);
var state_25578__$1 = (function (){var statearr_25596 = state_25578;
(statearr_25596[(13)] = inst_25571);

return statearr_25596;
})();
var statearr_25597_25618 = state_25578__$1;
(statearr_25597_25618[(2)] = inst_25572);

(statearr_25597_25618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (10))){
var inst_25561 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
var statearr_25598_25619 = state_25578__$1;
(statearr_25598_25619[(2)] = inst_25561);

(statearr_25598_25619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (8))){
var inst_25538 = (state_25578[(8)]);
var inst_25546 = (state_25578[(10)]);
var inst_25542 = (state_25578[(9)]);
var inst_25551 = inst_25538.push(inst_25542);
var tmp25595 = inst_25538;
var inst_25538__$1 = tmp25595;
var inst_25539 = inst_25546;
var state_25578__$1 = (function (){var statearr_25599 = state_25578;
(statearr_25599[(7)] = inst_25539);

(statearr_25599[(8)] = inst_25538__$1);

(statearr_25599[(14)] = inst_25551);

return statearr_25599;
})();
var statearr_25600_25620 = state_25578__$1;
(statearr_25600_25620[(2)] = null);

(statearr_25600_25620[(1)] = (2));


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
});})(c__23702__auto___25606,out))
;
return ((function (switch__23607__auto__,c__23702__auto___25606,out){
return (function() {
var cljs$core$async$state_machine__23608__auto__ = null;
var cljs$core$async$state_machine__23608__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25601[(0)] = cljs$core$async$state_machine__23608__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var cljs$core$async$state_machine__23608__auto____1 = (function (state_25578){
while(true){
var ret_value__23609__auto__ = (function (){try{while(true){
var result__23610__auto__ = switch__23607__auto__.call(null,state_25578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23610__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__23611__auto__ = e25602;
var statearr_25603_25621 = state_25578;
(statearr_25603_25621[(5)] = ex__23611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25622 = state_25578;
state_25578 = G__25622;
continue;
} else {
return ret_value__23609__auto__;
}
break;
}
});
cljs$core$async$state_machine__23608__auto__ = function(state_25578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23608__auto____1.call(this,state_25578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23608__auto____0;
cljs$core$async$state_machine__23608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23608__auto____1;
return cljs$core$async$state_machine__23608__auto__;
})()
;})(switch__23607__auto__,c__23702__auto___25606,out))
})();
var state__23704__auto__ = (function (){var statearr_25604 = f__23703__auto__.call(null);
(statearr_25604[(6)] = c__23702__auto___25606);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23704__auto__);
});})(c__23702__auto___25606,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581009602244
