// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__55377 = arguments.length;
switch (G__55377) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__55379 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__55380 = null;
var count__55381 = (0);
var i__55382 = (0);
while(true){
if((i__55382 < count__55381)){
var vec__55393 = chunk__55380.cljs$core$IIndexed$_nth$arity$2(null,i__55382);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393,(1),null);
var temp__5735__auto___55403 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___55403)){
var handler_55404 = temp__5735__auto___55403;
(prc[cljs.core.name(processing_name)] = ((function (seq__55379,chunk__55380,count__55381,i__55382,handler_55404,temp__5735__auto___55403,vec__55393,processing_name,quil_name){
return (function() { 
var G__55405__delegate = function (args){
var _STAR_applet_STAR__orig_val__55396 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__55397 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__55397;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_55404,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__55396;
}};
var G__55405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55406__i = 0, G__55406__a = new Array(arguments.length -  0);
while (G__55406__i < G__55406__a.length) {G__55406__a[G__55406__i] = arguments[G__55406__i + 0]; ++G__55406__i;}
  args = new cljs.core.IndexedSeq(G__55406__a,0,null);
} 
return G__55405__delegate.call(this,args);};
G__55405.cljs$lang$maxFixedArity = 0;
G__55405.cljs$lang$applyTo = (function (arglist__55407){
var args = cljs.core.seq(arglist__55407);
return G__55405__delegate(args);
});
G__55405.cljs$core$IFn$_invoke$arity$variadic = G__55405__delegate;
return G__55405;
})()
;})(seq__55379,chunk__55380,count__55381,i__55382,handler_55404,temp__5735__auto___55403,vec__55393,processing_name,quil_name))
);
} else {
}


var G__55408 = seq__55379;
var G__55409 = chunk__55380;
var G__55410 = count__55381;
var G__55411 = (i__55382 + (1));
seq__55379 = G__55408;
chunk__55380 = G__55409;
count__55381 = G__55410;
i__55382 = G__55411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55379);
if(temp__5735__auto__){
var seq__55379__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55379__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55379__$1);
var G__55412 = cljs.core.chunk_rest(seq__55379__$1);
var G__55413 = c__4550__auto__;
var G__55414 = cljs.core.count(c__4550__auto__);
var G__55415 = (0);
seq__55379 = G__55412;
chunk__55380 = G__55413;
count__55381 = G__55414;
i__55382 = G__55415;
continue;
} else {
var vec__55398 = cljs.core.first(seq__55379__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55398,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55398,(1),null);
var temp__5735__auto___55416__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___55416__$1)){
var handler_55417 = temp__5735__auto___55416__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__55379,chunk__55380,count__55381,i__55382,handler_55417,temp__5735__auto___55416__$1,vec__55398,processing_name,quil_name,seq__55379__$1,temp__5735__auto__){
return (function() { 
var G__55418__delegate = function (args){
var _STAR_applet_STAR__orig_val__55401 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__55402 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__55402;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_55417,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__55401;
}};
var G__55418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55419__i = 0, G__55419__a = new Array(arguments.length -  0);
while (G__55419__i < G__55419__a.length) {G__55419__a[G__55419__i] = arguments[G__55419__i + 0]; ++G__55419__i;}
  args = new cljs.core.IndexedSeq(G__55419__a,0,null);
} 
return G__55418__delegate.call(this,args);};
G__55418.cljs$lang$maxFixedArity = 0;
G__55418.cljs$lang$applyTo = (function (arglist__55420){
var args = cljs.core.seq(arglist__55420);
return G__55418__delegate(args);
});
G__55418.cljs$core$IFn$_invoke$arity$variadic = G__55418__delegate;
return G__55418;
})()
;})(seq__55379,chunk__55380,count__55381,i__55382,handler_55417,temp__5735__auto___55416__$1,vec__55398,processing_name,quil_name,seq__55379__$1,temp__5735__auto__))
);
} else {
}


var G__55421 = cljs.core.next(seq__55379__$1);
var G__55422 = null;
var G__55423 = (0);
var G__55424 = (0);
seq__55379 = G__55421;
chunk__55380 = G__55422;
count__55381 = G__55423;
i__55382 = G__55424;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4131__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__55426_55432 = window;
var G__55427_55433 = goog.events.EventType.KEYDOWN;
var G__55428_55434 = ((function (G__55426_55432,G__55427_55433,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__55426_55432,G__55427_55433,old_size,adjust_canvas_size))
;
goog.events.listen(G__55426_55432,G__55427_55433,G__55428_55434);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__55429 = document;
var G__55430 = "fullscreenerror";
var G__55431 = ((function (G__55429,G__55430,old_size,adjust_canvas_size){
return (function (p1__55425_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__55425_SHARP_);
});})(G__55429,G__55430,old_size,adjust_canvas_size))
;
return goog.events.listen(G__55429,G__55430,G__55431);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__55437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__55436 = ((function (G__55437){
return (function (p1__55435_SHARP_){
return (p1__55435_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55435_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__55435_SHARP_.call(null,options));
});})(G__55437))
;
return fexpr__55436(G__55437);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__55438_55441 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__55438_55441.cljs$core$IFn$_invoke$arity$0 ? fexpr__55438_55441.cljs$core$IFn$_invoke$arity$0() : fexpr__55438_55441.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__55439 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__55439.cljs$core$IFn$_invoke$arity$0 ? fexpr__55439.cljs$core$IFn$_invoke$arity$0() : fexpr__55439.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (function (){var temp__5735__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return ((function (wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup){
return (function (evt){
var G__55440 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__55440) : wheel_handler.call(null,G__55440));
});
;})(wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup))
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55443 = arguments.length;
var i__4731__auto___55444 = (0);
while(true){
if((i__4731__auto___55444 < len__4730__auto___55443)){
args__4736__auto__.push((arguments[i__4731__auto___55444]));

var G__55445 = (i__4731__auto___55444 + (1));
i__4731__auto___55444 = G__55445;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4131__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq55442){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55442));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__55454 = quil.sketch.empty_body_QMARK_();
var seq__55446_55455 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__55447_55456 = null;
var count__55448_55457 = (0);
var i__55449_55458 = (0);
while(true){
if((i__55449_55458 < count__55448_55457)){
var sk_55459 = chunk__55447_55456.cljs$core$IIndexed$_nth$arity$2(null,i__55449_55458);
if(add_elem_QMARK__55454){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_55459));
} else {
}

var fexpr__55452_55460 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_55459);
(fexpr__55452_55460.cljs$core$IFn$_invoke$arity$0 ? fexpr__55452_55460.cljs$core$IFn$_invoke$arity$0() : fexpr__55452_55460.call(null));


var G__55461 = seq__55446_55455;
var G__55462 = chunk__55447_55456;
var G__55463 = count__55448_55457;
var G__55464 = (i__55449_55458 + (1));
seq__55446_55455 = G__55461;
chunk__55447_55456 = G__55462;
count__55448_55457 = G__55463;
i__55449_55458 = G__55464;
continue;
} else {
var temp__5735__auto___55465 = cljs.core.seq(seq__55446_55455);
if(temp__5735__auto___55465){
var seq__55446_55466__$1 = temp__5735__auto___55465;
if(cljs.core.chunked_seq_QMARK_(seq__55446_55466__$1)){
var c__4550__auto___55467 = cljs.core.chunk_first(seq__55446_55466__$1);
var G__55468 = cljs.core.chunk_rest(seq__55446_55466__$1);
var G__55469 = c__4550__auto___55467;
var G__55470 = cljs.core.count(c__4550__auto___55467);
var G__55471 = (0);
seq__55446_55455 = G__55468;
chunk__55447_55456 = G__55469;
count__55448_55457 = G__55470;
i__55449_55458 = G__55471;
continue;
} else {
var sk_55472 = cljs.core.first(seq__55446_55466__$1);
if(add_elem_QMARK__55454){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_55472));
} else {
}

var fexpr__55453_55473 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_55472);
(fexpr__55453_55473.cljs$core$IFn$_invoke$arity$0 ? fexpr__55453_55473.cljs$core$IFn$_invoke$arity$0() : fexpr__55453_55473.call(null));


var G__55474 = cljs.core.next(seq__55446_55466__$1);
var G__55475 = null;
var G__55476 = (0);
var G__55477 = (0);
seq__55446_55455 = G__55474;
chunk__55447_55456 = G__55475;
count__55448_55457 = G__55476;
i__55449_55458 = G__55477;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
