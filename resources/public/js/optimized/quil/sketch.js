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
var G__34101 = arguments.length;
switch (G__34101) {
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
var seq__34103 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__34104 = null;
var count__34105 = (0);
var i__34106 = (0);
while(true){
if((i__34106 < count__34105)){
var vec__34117 = chunk__34104.cljs$core$IIndexed$_nth$arity$2(null,i__34106);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34117,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34117,(1),null);
var temp__5735__auto___34127 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___34127)){
var handler_34128 = temp__5735__auto___34127;
(prc[cljs.core.name(processing_name)] = ((function (seq__34103,chunk__34104,count__34105,i__34106,handler_34128,temp__5735__auto___34127,vec__34117,processing_name,quil_name){
return (function() { 
var G__34129__delegate = function (args){
var _STAR_applet_STAR__orig_val__34120 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__34121 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__34121;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_34128,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__34120;
}};
var G__34129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34130__i = 0, G__34130__a = new Array(arguments.length -  0);
while (G__34130__i < G__34130__a.length) {G__34130__a[G__34130__i] = arguments[G__34130__i + 0]; ++G__34130__i;}
  args = new cljs.core.IndexedSeq(G__34130__a,0,null);
} 
return G__34129__delegate.call(this,args);};
G__34129.cljs$lang$maxFixedArity = 0;
G__34129.cljs$lang$applyTo = (function (arglist__34131){
var args = cljs.core.seq(arglist__34131);
return G__34129__delegate(args);
});
G__34129.cljs$core$IFn$_invoke$arity$variadic = G__34129__delegate;
return G__34129;
})()
;})(seq__34103,chunk__34104,count__34105,i__34106,handler_34128,temp__5735__auto___34127,vec__34117,processing_name,quil_name))
);
} else {
}


var G__34132 = seq__34103;
var G__34133 = chunk__34104;
var G__34134 = count__34105;
var G__34135 = (i__34106 + (1));
seq__34103 = G__34132;
chunk__34104 = G__34133;
count__34105 = G__34134;
i__34106 = G__34135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34103);
if(temp__5735__auto__){
var seq__34103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34103__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34103__$1);
var G__34136 = cljs.core.chunk_rest(seq__34103__$1);
var G__34137 = c__4550__auto__;
var G__34138 = cljs.core.count(c__4550__auto__);
var G__34139 = (0);
seq__34103 = G__34136;
chunk__34104 = G__34137;
count__34105 = G__34138;
i__34106 = G__34139;
continue;
} else {
var vec__34122 = cljs.core.first(seq__34103__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34122,(1),null);
var temp__5735__auto___34140__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___34140__$1)){
var handler_34141 = temp__5735__auto___34140__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__34103,chunk__34104,count__34105,i__34106,handler_34141,temp__5735__auto___34140__$1,vec__34122,processing_name,quil_name,seq__34103__$1,temp__5735__auto__){
return (function() { 
var G__34142__delegate = function (args){
var _STAR_applet_STAR__orig_val__34125 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__34126 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__34126;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_34141,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__34125;
}};
var G__34142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34143__i = 0, G__34143__a = new Array(arguments.length -  0);
while (G__34143__i < G__34143__a.length) {G__34143__a[G__34143__i] = arguments[G__34143__i + 0]; ++G__34143__i;}
  args = new cljs.core.IndexedSeq(G__34143__a,0,null);
} 
return G__34142__delegate.call(this,args);};
G__34142.cljs$lang$maxFixedArity = 0;
G__34142.cljs$lang$applyTo = (function (arglist__34144){
var args = cljs.core.seq(arglist__34144);
return G__34142__delegate(args);
});
G__34142.cljs$core$IFn$_invoke$arity$variadic = G__34142__delegate;
return G__34142;
})()
;})(seq__34103,chunk__34104,count__34105,i__34106,handler_34141,temp__5735__auto___34140__$1,vec__34122,processing_name,quil_name,seq__34103__$1,temp__5735__auto__))
);
} else {
}


var G__34145 = cljs.core.next(seq__34103__$1);
var G__34146 = null;
var G__34147 = (0);
var G__34148 = (0);
seq__34103 = G__34145;
chunk__34104 = G__34146;
count__34105 = G__34147;
i__34106 = G__34148;
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
var G__34150_34156 = window;
var G__34151_34157 = goog.events.EventType.KEYDOWN;
var G__34152_34158 = ((function (G__34150_34156,G__34151_34157,old_size,adjust_canvas_size){
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
});})(G__34150_34156,G__34151_34157,old_size,adjust_canvas_size))
;
goog.events.listen(G__34150_34156,G__34151_34157,G__34152_34158);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__34153 = document;
var G__34154 = "fullscreenerror";
var G__34155 = ((function (G__34153,G__34154,old_size,adjust_canvas_size){
return (function (p1__34149_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__34149_SHARP_);
});})(G__34153,G__34154,old_size,adjust_canvas_size))
;
return goog.events.listen(G__34153,G__34154,G__34155);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__34161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__34160 = ((function (G__34161){
return (function (p1__34159_SHARP_){
return (p1__34159_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34159_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__34159_SHARP_.call(null,options));
});})(G__34161))
;
return fexpr__34160(G__34161);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__34162_34165 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__34162_34165.cljs$core$IFn$_invoke$arity$0 ? fexpr__34162_34165.cljs$core$IFn$_invoke$arity$0() : fexpr__34162_34165.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__34163 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__34163.cljs$core$IFn$_invoke$arity$0 ? fexpr__34163.cljs$core$IFn$_invoke$arity$0() : fexpr__34163.call(null));
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
var G__34164 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__34164) : wheel_handler.call(null,G__34164));
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
var len__4730__auto___34167 = arguments.length;
var i__4731__auto___34168 = (0);
while(true){
if((i__4731__auto___34168 < len__4730__auto___34167)){
args__4736__auto__.push((arguments[i__4731__auto___34168]));

var G__34169 = (i__4731__auto___34168 + (1));
i__4731__auto___34168 = G__34169;
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
quil.sketch.sketch.cljs$lang$applyTo = (function (seq34166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34166));
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
var add_elem_QMARK__34178 = quil.sketch.empty_body_QMARK_();
var seq__34170_34179 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__34171_34180 = null;
var count__34172_34181 = (0);
var i__34173_34182 = (0);
while(true){
if((i__34173_34182 < count__34172_34181)){
var sk_34183 = chunk__34171_34180.cljs$core$IIndexed$_nth$arity$2(null,i__34173_34182);
if(add_elem_QMARK__34178){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_34183));
} else {
}

var fexpr__34176_34184 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_34183);
(fexpr__34176_34184.cljs$core$IFn$_invoke$arity$0 ? fexpr__34176_34184.cljs$core$IFn$_invoke$arity$0() : fexpr__34176_34184.call(null));


var G__34185 = seq__34170_34179;
var G__34186 = chunk__34171_34180;
var G__34187 = count__34172_34181;
var G__34188 = (i__34173_34182 + (1));
seq__34170_34179 = G__34185;
chunk__34171_34180 = G__34186;
count__34172_34181 = G__34187;
i__34173_34182 = G__34188;
continue;
} else {
var temp__5735__auto___34189 = cljs.core.seq(seq__34170_34179);
if(temp__5735__auto___34189){
var seq__34170_34190__$1 = temp__5735__auto___34189;
if(cljs.core.chunked_seq_QMARK_(seq__34170_34190__$1)){
var c__4550__auto___34191 = cljs.core.chunk_first(seq__34170_34190__$1);
var G__34192 = cljs.core.chunk_rest(seq__34170_34190__$1);
var G__34193 = c__4550__auto___34191;
var G__34194 = cljs.core.count(c__4550__auto___34191);
var G__34195 = (0);
seq__34170_34179 = G__34192;
chunk__34171_34180 = G__34193;
count__34172_34181 = G__34194;
i__34173_34182 = G__34195;
continue;
} else {
var sk_34196 = cljs.core.first(seq__34170_34190__$1);
if(add_elem_QMARK__34178){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_34196));
} else {
}

var fexpr__34177_34197 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_34196);
(fexpr__34177_34197.cljs$core$IFn$_invoke$arity$0 ? fexpr__34177_34197.cljs$core$IFn$_invoke$arity$0() : fexpr__34177_34197.call(null));


var G__34198 = cljs.core.next(seq__34170_34190__$1);
var G__34199 = null;
var G__34200 = (0);
var G__34201 = (0);
seq__34170_34179 = G__34198;
chunk__34171_34180 = G__34199;
count__34172_34181 = G__34200;
i__34173_34182 = G__34201;
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
