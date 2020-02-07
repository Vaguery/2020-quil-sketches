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
var G__34435 = arguments.length;
switch (G__34435) {
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
var seq__34437 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__34438 = null;
var count__34439 = (0);
var i__34440 = (0);
while(true){
if((i__34440 < count__34439)){
var vec__34451 = chunk__34438.cljs$core$IIndexed$_nth$arity$2(null,i__34440);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34451,(1),null);
var temp__5735__auto___34461 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___34461)){
var handler_34462 = temp__5735__auto___34461;
(prc[cljs.core.name(processing_name)] = ((function (seq__34437,chunk__34438,count__34439,i__34440,handler_34462,temp__5735__auto___34461,vec__34451,processing_name,quil_name){
return (function() { 
var G__34463__delegate = function (args){
var _STAR_applet_STAR__orig_val__34454 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__34455 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__34455;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_34462,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__34454;
}};
var G__34463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34464__i = 0, G__34464__a = new Array(arguments.length -  0);
while (G__34464__i < G__34464__a.length) {G__34464__a[G__34464__i] = arguments[G__34464__i + 0]; ++G__34464__i;}
  args = new cljs.core.IndexedSeq(G__34464__a,0,null);
} 
return G__34463__delegate.call(this,args);};
G__34463.cljs$lang$maxFixedArity = 0;
G__34463.cljs$lang$applyTo = (function (arglist__34465){
var args = cljs.core.seq(arglist__34465);
return G__34463__delegate(args);
});
G__34463.cljs$core$IFn$_invoke$arity$variadic = G__34463__delegate;
return G__34463;
})()
;})(seq__34437,chunk__34438,count__34439,i__34440,handler_34462,temp__5735__auto___34461,vec__34451,processing_name,quil_name))
);
} else {
}


var G__34466 = seq__34437;
var G__34467 = chunk__34438;
var G__34468 = count__34439;
var G__34469 = (i__34440 + (1));
seq__34437 = G__34466;
chunk__34438 = G__34467;
count__34439 = G__34468;
i__34440 = G__34469;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34437);
if(temp__5735__auto__){
var seq__34437__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34437__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34437__$1);
var G__34470 = cljs.core.chunk_rest(seq__34437__$1);
var G__34471 = c__4550__auto__;
var G__34472 = cljs.core.count(c__4550__auto__);
var G__34473 = (0);
seq__34437 = G__34470;
chunk__34438 = G__34471;
count__34439 = G__34472;
i__34440 = G__34473;
continue;
} else {
var vec__34456 = cljs.core.first(seq__34437__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(1),null);
var temp__5735__auto___34474__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___34474__$1)){
var handler_34475 = temp__5735__auto___34474__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__34437,chunk__34438,count__34439,i__34440,handler_34475,temp__5735__auto___34474__$1,vec__34456,processing_name,quil_name,seq__34437__$1,temp__5735__auto__){
return (function() { 
var G__34476__delegate = function (args){
var _STAR_applet_STAR__orig_val__34459 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__34460 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__34460;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_34475,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__34459;
}};
var G__34476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34477__i = 0, G__34477__a = new Array(arguments.length -  0);
while (G__34477__i < G__34477__a.length) {G__34477__a[G__34477__i] = arguments[G__34477__i + 0]; ++G__34477__i;}
  args = new cljs.core.IndexedSeq(G__34477__a,0,null);
} 
return G__34476__delegate.call(this,args);};
G__34476.cljs$lang$maxFixedArity = 0;
G__34476.cljs$lang$applyTo = (function (arglist__34478){
var args = cljs.core.seq(arglist__34478);
return G__34476__delegate(args);
});
G__34476.cljs$core$IFn$_invoke$arity$variadic = G__34476__delegate;
return G__34476;
})()
;})(seq__34437,chunk__34438,count__34439,i__34440,handler_34475,temp__5735__auto___34474__$1,vec__34456,processing_name,quil_name,seq__34437__$1,temp__5735__auto__))
);
} else {
}


var G__34479 = cljs.core.next(seq__34437__$1);
var G__34480 = null;
var G__34481 = (0);
var G__34482 = (0);
seq__34437 = G__34479;
chunk__34438 = G__34480;
count__34439 = G__34481;
i__34440 = G__34482;
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
var G__34484_34490 = window;
var G__34485_34491 = goog.events.EventType.KEYDOWN;
var G__34486_34492 = ((function (G__34484_34490,G__34485_34491,old_size,adjust_canvas_size){
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
});})(G__34484_34490,G__34485_34491,old_size,adjust_canvas_size))
;
goog.events.listen(G__34484_34490,G__34485_34491,G__34486_34492);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__34487 = document;
var G__34488 = "fullscreenerror";
var G__34489 = ((function (G__34487,G__34488,old_size,adjust_canvas_size){
return (function (p1__34483_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__34483_SHARP_);
});})(G__34487,G__34488,old_size,adjust_canvas_size))
;
return goog.events.listen(G__34487,G__34488,G__34489);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__34495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__34494 = ((function (G__34495){
return (function (p1__34493_SHARP_){
return (p1__34493_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34493_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__34493_SHARP_.call(null,options));
});})(G__34495))
;
return fexpr__34494(G__34495);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__34496_34499 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__34496_34499.cljs$core$IFn$_invoke$arity$0 ? fexpr__34496_34499.cljs$core$IFn$_invoke$arity$0() : fexpr__34496_34499.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__34497 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__34497.cljs$core$IFn$_invoke$arity$0 ? fexpr__34497.cljs$core$IFn$_invoke$arity$0() : fexpr__34497.call(null));
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
var G__34498 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__34498) : wheel_handler.call(null,G__34498));
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
var len__4730__auto___34501 = arguments.length;
var i__4731__auto___34502 = (0);
while(true){
if((i__4731__auto___34502 < len__4730__auto___34501)){
args__4736__auto__.push((arguments[i__4731__auto___34502]));

var G__34503 = (i__4731__auto___34502 + (1));
i__4731__auto___34502 = G__34503;
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
quil.sketch.sketch.cljs$lang$applyTo = (function (seq34500){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34500));
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
var add_elem_QMARK__34512 = quil.sketch.empty_body_QMARK_();
var seq__34504_34513 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__34505_34514 = null;
var count__34506_34515 = (0);
var i__34507_34516 = (0);
while(true){
if((i__34507_34516 < count__34506_34515)){
var sk_34517 = chunk__34505_34514.cljs$core$IIndexed$_nth$arity$2(null,i__34507_34516);
if(add_elem_QMARK__34512){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_34517));
} else {
}

var fexpr__34510_34518 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_34517);
(fexpr__34510_34518.cljs$core$IFn$_invoke$arity$0 ? fexpr__34510_34518.cljs$core$IFn$_invoke$arity$0() : fexpr__34510_34518.call(null));


var G__34519 = seq__34504_34513;
var G__34520 = chunk__34505_34514;
var G__34521 = count__34506_34515;
var G__34522 = (i__34507_34516 + (1));
seq__34504_34513 = G__34519;
chunk__34505_34514 = G__34520;
count__34506_34515 = G__34521;
i__34507_34516 = G__34522;
continue;
} else {
var temp__5735__auto___34523 = cljs.core.seq(seq__34504_34513);
if(temp__5735__auto___34523){
var seq__34504_34524__$1 = temp__5735__auto___34523;
if(cljs.core.chunked_seq_QMARK_(seq__34504_34524__$1)){
var c__4550__auto___34525 = cljs.core.chunk_first(seq__34504_34524__$1);
var G__34526 = cljs.core.chunk_rest(seq__34504_34524__$1);
var G__34527 = c__4550__auto___34525;
var G__34528 = cljs.core.count(c__4550__auto___34525);
var G__34529 = (0);
seq__34504_34513 = G__34526;
chunk__34505_34514 = G__34527;
count__34506_34515 = G__34528;
i__34507_34516 = G__34529;
continue;
} else {
var sk_34530 = cljs.core.first(seq__34504_34524__$1);
if(add_elem_QMARK__34512){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_34530));
} else {
}

var fexpr__34511_34531 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_34530);
(fexpr__34511_34531.cljs$core$IFn$_invoke$arity$0 ? fexpr__34511_34531.cljs$core$IFn$_invoke$arity$0() : fexpr__34511_34531.call(null));


var G__34532 = cljs.core.next(seq__34504_34524__$1);
var G__34533 = null;
var G__34534 = (0);
var G__34535 = (0);
seq__34504_34513 = G__34532;
chunk__34505_34514 = G__34533;
count__34506_34515 = G__34534;
i__34507_34516 = G__34535;
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
