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
var G__52505 = arguments.length;
switch (G__52505) {
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
var seq__52507 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__52508 = null;
var count__52509 = (0);
var i__52510 = (0);
while(true){
if((i__52510 < count__52509)){
var vec__52521 = chunk__52508.cljs$core$IIndexed$_nth$arity$2(null,i__52510);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52521,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52521,(1),null);
var temp__5735__auto___52531 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___52531)){
var handler_52532 = temp__5735__auto___52531;
(prc[cljs.core.name(processing_name)] = ((function (seq__52507,chunk__52508,count__52509,i__52510,handler_52532,temp__5735__auto___52531,vec__52521,processing_name,quil_name){
return (function() { 
var G__52533__delegate = function (args){
var _STAR_applet_STAR__orig_val__52524 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__52525 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__52525;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_52532,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__52524;
}};
var G__52533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52534__i = 0, G__52534__a = new Array(arguments.length -  0);
while (G__52534__i < G__52534__a.length) {G__52534__a[G__52534__i] = arguments[G__52534__i + 0]; ++G__52534__i;}
  args = new cljs.core.IndexedSeq(G__52534__a,0,null);
} 
return G__52533__delegate.call(this,args);};
G__52533.cljs$lang$maxFixedArity = 0;
G__52533.cljs$lang$applyTo = (function (arglist__52535){
var args = cljs.core.seq(arglist__52535);
return G__52533__delegate(args);
});
G__52533.cljs$core$IFn$_invoke$arity$variadic = G__52533__delegate;
return G__52533;
})()
;})(seq__52507,chunk__52508,count__52509,i__52510,handler_52532,temp__5735__auto___52531,vec__52521,processing_name,quil_name))
);
} else {
}


var G__52536 = seq__52507;
var G__52537 = chunk__52508;
var G__52538 = count__52509;
var G__52539 = (i__52510 + (1));
seq__52507 = G__52536;
chunk__52508 = G__52537;
count__52509 = G__52538;
i__52510 = G__52539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52507);
if(temp__5735__auto__){
var seq__52507__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52507__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52507__$1);
var G__52540 = cljs.core.chunk_rest(seq__52507__$1);
var G__52541 = c__4550__auto__;
var G__52542 = cljs.core.count(c__4550__auto__);
var G__52543 = (0);
seq__52507 = G__52540;
chunk__52508 = G__52541;
count__52509 = G__52542;
i__52510 = G__52543;
continue;
} else {
var vec__52526 = cljs.core.first(seq__52507__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52526,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52526,(1),null);
var temp__5735__auto___52544__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___52544__$1)){
var handler_52545 = temp__5735__auto___52544__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__52507,chunk__52508,count__52509,i__52510,handler_52545,temp__5735__auto___52544__$1,vec__52526,processing_name,quil_name,seq__52507__$1,temp__5735__auto__){
return (function() { 
var G__52546__delegate = function (args){
var _STAR_applet_STAR__orig_val__52529 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__52530 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__52530;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_52545,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__52529;
}};
var G__52546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52547__i = 0, G__52547__a = new Array(arguments.length -  0);
while (G__52547__i < G__52547__a.length) {G__52547__a[G__52547__i] = arguments[G__52547__i + 0]; ++G__52547__i;}
  args = new cljs.core.IndexedSeq(G__52547__a,0,null);
} 
return G__52546__delegate.call(this,args);};
G__52546.cljs$lang$maxFixedArity = 0;
G__52546.cljs$lang$applyTo = (function (arglist__52548){
var args = cljs.core.seq(arglist__52548);
return G__52546__delegate(args);
});
G__52546.cljs$core$IFn$_invoke$arity$variadic = G__52546__delegate;
return G__52546;
})()
;})(seq__52507,chunk__52508,count__52509,i__52510,handler_52545,temp__5735__auto___52544__$1,vec__52526,processing_name,quil_name,seq__52507__$1,temp__5735__auto__))
);
} else {
}


var G__52549 = cljs.core.next(seq__52507__$1);
var G__52550 = null;
var G__52551 = (0);
var G__52552 = (0);
seq__52507 = G__52549;
chunk__52508 = G__52550;
count__52509 = G__52551;
i__52510 = G__52552;
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
var G__52554_52560 = window;
var G__52555_52561 = goog.events.EventType.KEYDOWN;
var G__52556_52562 = ((function (G__52554_52560,G__52555_52561,old_size,adjust_canvas_size){
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
});})(G__52554_52560,G__52555_52561,old_size,adjust_canvas_size))
;
goog.events.listen(G__52554_52560,G__52555_52561,G__52556_52562);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__52557 = document;
var G__52558 = "fullscreenerror";
var G__52559 = ((function (G__52557,G__52558,old_size,adjust_canvas_size){
return (function (p1__52553_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__52553_SHARP_);
});})(G__52557,G__52558,old_size,adjust_canvas_size))
;
return goog.events.listen(G__52557,G__52558,G__52559);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__52565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__52564 = ((function (G__52565){
return (function (p1__52563_SHARP_){
return (p1__52563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52563_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__52563_SHARP_.call(null,options));
});})(G__52565))
;
return fexpr__52564(G__52565);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__52566_52569 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__52566_52569.cljs$core$IFn$_invoke$arity$0 ? fexpr__52566_52569.cljs$core$IFn$_invoke$arity$0() : fexpr__52566_52569.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__52567 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__52567.cljs$core$IFn$_invoke$arity$0 ? fexpr__52567.cljs$core$IFn$_invoke$arity$0() : fexpr__52567.call(null));
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
var G__52568 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__52568) : wheel_handler.call(null,G__52568));
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
var len__4730__auto___52571 = arguments.length;
var i__4731__auto___52572 = (0);
while(true){
if((i__4731__auto___52572 < len__4730__auto___52571)){
args__4736__auto__.push((arguments[i__4731__auto___52572]));

var G__52573 = (i__4731__auto___52572 + (1));
i__4731__auto___52572 = G__52573;
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
quil.sketch.sketch.cljs$lang$applyTo = (function (seq52570){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52570));
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
var add_elem_QMARK__52582 = quil.sketch.empty_body_QMARK_();
var seq__52574_52583 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__52575_52584 = null;
var count__52576_52585 = (0);
var i__52577_52586 = (0);
while(true){
if((i__52577_52586 < count__52576_52585)){
var sk_52587 = chunk__52575_52584.cljs$core$IIndexed$_nth$arity$2(null,i__52577_52586);
if(add_elem_QMARK__52582){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_52587));
} else {
}

var fexpr__52580_52588 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_52587);
(fexpr__52580_52588.cljs$core$IFn$_invoke$arity$0 ? fexpr__52580_52588.cljs$core$IFn$_invoke$arity$0() : fexpr__52580_52588.call(null));


var G__52589 = seq__52574_52583;
var G__52590 = chunk__52575_52584;
var G__52591 = count__52576_52585;
var G__52592 = (i__52577_52586 + (1));
seq__52574_52583 = G__52589;
chunk__52575_52584 = G__52590;
count__52576_52585 = G__52591;
i__52577_52586 = G__52592;
continue;
} else {
var temp__5735__auto___52593 = cljs.core.seq(seq__52574_52583);
if(temp__5735__auto___52593){
var seq__52574_52594__$1 = temp__5735__auto___52593;
if(cljs.core.chunked_seq_QMARK_(seq__52574_52594__$1)){
var c__4550__auto___52595 = cljs.core.chunk_first(seq__52574_52594__$1);
var G__52596 = cljs.core.chunk_rest(seq__52574_52594__$1);
var G__52597 = c__4550__auto___52595;
var G__52598 = cljs.core.count(c__4550__auto___52595);
var G__52599 = (0);
seq__52574_52583 = G__52596;
chunk__52575_52584 = G__52597;
count__52576_52585 = G__52598;
i__52577_52586 = G__52599;
continue;
} else {
var sk_52600 = cljs.core.first(seq__52574_52594__$1);
if(add_elem_QMARK__52582){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_52600));
} else {
}

var fexpr__52581_52601 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_52600);
(fexpr__52581_52601.cljs$core$IFn$_invoke$arity$0 ? fexpr__52581_52601.cljs$core$IFn$_invoke$arity$0() : fexpr__52581_52601.call(null));


var G__52602 = cljs.core.next(seq__52574_52594__$1);
var G__52603 = null;
var G__52604 = (0);
var G__52605 = (0);
seq__52574_52583 = G__52602;
chunk__52575_52584 = G__52603;
count__52576_52585 = G__52604;
i__52577_52586 = G__52605;
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
