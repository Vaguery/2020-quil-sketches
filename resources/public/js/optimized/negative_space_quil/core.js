// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('clojure.set');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
negative_space_quil.core.Agent = (function (idx,hue,x,y,neighbors,others,__meta,__extmap,__hash){
this.idx = idx;
this.hue = hue;
this.x = x;
this.y = y;
this.neighbors = neighbors;
this.others = others;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
negative_space_quil.core.Agent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

negative_space_quil.core.Agent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k72241,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__72245 = k72241;
var G__72245__$1 = (((G__72245 instanceof cljs.core.Keyword))?G__72245.fqn:null);
switch (G__72245__$1) {
case "idx":
return self__.idx;

break;
case "hue":
return self__.hue;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "neighbors":
return self__.neighbors;

break;
case "others":
return self__.others;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72241,else__4388__auto__);

}
});

negative_space_quil.core.Agent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__72246){
var vec__72247 = p__72246;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72247,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72247,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

negative_space_quil.core.Agent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#negative-space-quil.core.Agent{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx,self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hue,self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$neighbors,self__.neighbors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$others,self__.others],null))], null),self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72240){
var self__ = this;
var G__72240__$1 = this;
return (new cljs.core.RecordIter((0),G__72240__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idx,cljs.core.cst$kw$hue,cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$neighbors,cljs.core.cst$kw$others], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

negative_space_quil.core.Agent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

negative_space_quil.core.Agent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,self__.__hash));
});

negative_space_quil.core.Agent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__72250 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-991528107 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__72250(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

negative_space_quil.core.Agent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72242,other72243){
var self__ = this;
var this72242__$1 = this;
return (((!((other72243 == null)))) && ((this72242__$1.constructor === other72243.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.idx,other72243.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.hue,other72243.hue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.x,other72243.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.y,other72243.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.neighbors,other72243.neighbors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.others,other72243.others)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72242__$1.__extmap,other72243.__extmap)));
});

negative_space_quil.core.Agent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$hue,null,cljs.core.cst$kw$others,null,cljs.core.cst$kw$x,null,cljs.core.cst$kw$neighbors,null,cljs.core.cst$kw$idx,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

negative_space_quil.core.Agent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__72240){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__72251 = cljs.core.keyword_identical_QMARK_;
var expr__72252 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__72254 = cljs.core.cst$kw$idx;
var G__72255 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72254,G__72255) : pred__72251.call(null,G__72254,G__72255));
})())){
return (new negative_space_quil.core.Agent(G__72240,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__72256 = cljs.core.cst$kw$hue;
var G__72257 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72256,G__72257) : pred__72251.call(null,G__72256,G__72257));
})())){
return (new negative_space_quil.core.Agent(self__.idx,G__72240,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__72258 = cljs.core.cst$kw$x;
var G__72259 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72258,G__72259) : pred__72251.call(null,G__72258,G__72259));
})())){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,G__72240,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__72260 = cljs.core.cst$kw$y;
var G__72261 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72260,G__72261) : pred__72251.call(null,G__72260,G__72261));
})())){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,G__72240,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__72262 = cljs.core.cst$kw$neighbors;
var G__72263 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72262,G__72263) : pred__72251.call(null,G__72262,G__72263));
})())){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,G__72240,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__72264 = cljs.core.cst$kw$others;
var G__72265 = expr__72252;
return (pred__72251.cljs$core$IFn$_invoke$arity$2 ? pred__72251.cljs$core$IFn$_invoke$arity$2(G__72264,G__72265) : pred__72251.call(null,G__72264,G__72265));
})())){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,G__72240,self__.__meta,self__.__extmap,null));
} else {
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__72240),null));
}
}
}
}
}
}
});

negative_space_quil.core.Agent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$idx,self__.idx,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hue,self__.hue,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$x,self__.x,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$y,self__.y,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$neighbors,self__.neighbors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$others,self__.others,null))], null),self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__72240){
var self__ = this;
var this__4384__auto____$1 = this;
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,G__72240,self__.__extmap,self__.__hash));
});

negative_space_quil.core.Agent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

negative_space_quil.core.Agent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$idx,cljs.core.cst$sym$hue,cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$neighbors,cljs.core.cst$sym$others], null);
});

negative_space_quil.core.Agent.cljs$lang$type = true;

negative_space_quil.core.Agent.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"negative-space-quil.core/Agent",null,(1),null));
});

negative_space_quil.core.Agent.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"negative-space-quil.core/Agent");
});

/**
 * Positional factory function for negative-space-quil.core/Agent.
 */
negative_space_quil.core.__GT_Agent = (function negative_space_quil$core$__GT_Agent(idx,hue,x,y,neighbors,others){
return (new negative_space_quil.core.Agent(idx,hue,x,y,neighbors,others,null,null,null));
});

/**
 * Factory function for negative-space-quil.core/Agent, taking a map of keywords to field values.
 */
negative_space_quil.core.map__GT_Agent = (function negative_space_quil$core$map__GT_Agent(G__72244){
var extmap__4424__auto__ = (function (){var G__72266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72244,cljs.core.cst$kw$idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hue,cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$neighbors,cljs.core.cst$kw$others], 0));
if(cljs.core.record_QMARK_(G__72244)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72266);
} else {
return G__72266;
}
})();
return (new negative_space_quil.core.Agent(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(G__72244),cljs.core.cst$kw$hue.cljs$core$IFn$_invoke$arity$1(G__72244),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__72244),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__72244),cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(G__72244),cljs.core.cst$kw$others.cljs$core$IFn$_invoke$arity$1(G__72244),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

negative_space_quil.core.random_neighbors = (function negative_space_quil$core$random_neighbors(idx,how_many,pool_size){
var pool = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([idx]),cljs.core.range.cljs$core$IFn$_invoke$arity$1(pool_size));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(how_many,cljs.core.shuffle(pool));
});
negative_space_quil.core.rand_node = (function negative_space_quil$core$rand_node(idx,connectedness,pool_size){
var neighbors = negative_space_quil.core.random_neighbors(idx,connectedness,pool_size);
return negative_space_quil.core.__GT_Agent(idx,cljs.core.rand_int((256)),cljs.core.rand_int(quil.core.width()),cljs.core.rand_int(quil.core.height()),neighbors,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neighbors,idx),cljs.core.range.cljs$core$IFn$_invoke$arity$1(pool_size)));
});
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

quil.core.blend_mode(cljs.core.cst$kw$blend);

quil.core.ellipse_mode(cljs.core.cst$kw$radius);

quil.core.image_mode(cljs.core.cst$kw$center);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dudes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72268_SHARP_){
return negative_space_quil.core.rand_node(p1__72268_SHARP_,(1),(25));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((25))),cljs.core.cst$kw$spring_DASH_distance,(30),cljs.core.cst$kw$hooke_DASH_constant,0.1], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
var dudes = cljs.core.cst$kw$dudes.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$dudes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dudes){
return (function (p1__72269_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__72269_SHARP_,cljs.core.cst$kw$x,((function (dudes){
return (function (x){
return cljs.core.mod(((cljs.core.rand_int((3)) + (-1)) + x),quil.core.width());
});})(dudes))
);
});})(dudes))
,dudes));
});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var dudes = cljs.core.cst$kw$dudes.cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.cljs$core$IFn$_invoke$arity$1((200));

var seq__72270 = cljs.core.seq(dudes);
var chunk__72271 = null;
var count__72272 = (0);
var i__72273 = (0);
while(true){
if((i__72273 < count__72272)){
var dude = chunk__72271.cljs$core$IIndexed$_nth$arity$2(null,i__72273);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.color.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hue.cljs$core$IFn$_invoke$arity$1(dude),(255),(255),(150)));

quil.core.no_stroke();

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),(10),(10));

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((100),(100));

var seq__72282_72290 = cljs.core.seq(cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(dude));
var chunk__72283_72291 = null;
var count__72284_72292 = (0);
var i__72285_72293 = (0);
while(true){
if((i__72285_72293 < count__72284_72292)){
var nb_72294 = chunk__72283_72291.cljs$core$IIndexed$_nth$arity$2(null,i__72285_72293);
quil.core.line.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72294)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72294)));


var G__72295 = seq__72282_72290;
var G__72296 = chunk__72283_72291;
var G__72297 = count__72284_72292;
var G__72298 = (i__72285_72293 + (1));
seq__72282_72290 = G__72295;
chunk__72283_72291 = G__72296;
count__72284_72292 = G__72297;
i__72285_72293 = G__72298;
continue;
} else {
var temp__5735__auto___72299 = cljs.core.seq(seq__72282_72290);
if(temp__5735__auto___72299){
var seq__72282_72300__$1 = temp__5735__auto___72299;
if(cljs.core.chunked_seq_QMARK_(seq__72282_72300__$1)){
var c__4550__auto___72301 = cljs.core.chunk_first(seq__72282_72300__$1);
var G__72302 = cljs.core.chunk_rest(seq__72282_72300__$1);
var G__72303 = c__4550__auto___72301;
var G__72304 = cljs.core.count(c__4550__auto___72301);
var G__72305 = (0);
seq__72282_72290 = G__72302;
chunk__72283_72291 = G__72303;
count__72284_72292 = G__72304;
i__72285_72293 = G__72305;
continue;
} else {
var nb_72306 = cljs.core.first(seq__72282_72300__$1);
quil.core.line.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72306)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72306)));


var G__72307 = cljs.core.next(seq__72282_72300__$1);
var G__72308 = null;
var G__72309 = (0);
var G__72310 = (0);
seq__72282_72290 = G__72307;
chunk__72283_72291 = G__72308;
count__72284_72292 = G__72309;
i__72285_72293 = G__72310;
continue;
}
} else {
}
}
break;
}


var G__72311 = seq__72270;
var G__72312 = chunk__72271;
var G__72313 = count__72272;
var G__72314 = (i__72273 + (1));
seq__72270 = G__72311;
chunk__72271 = G__72312;
count__72272 = G__72313;
i__72273 = G__72314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72270);
if(temp__5735__auto__){
var seq__72270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72270__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__72270__$1);
var G__72315 = cljs.core.chunk_rest(seq__72270__$1);
var G__72316 = c__4550__auto__;
var G__72317 = cljs.core.count(c__4550__auto__);
var G__72318 = (0);
seq__72270 = G__72315;
chunk__72271 = G__72316;
count__72272 = G__72317;
i__72273 = G__72318;
continue;
} else {
var dude = cljs.core.first(seq__72270__$1);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(quil.core.color.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hue.cljs$core$IFn$_invoke$arity$1(dude),(255),(255),(150)));

quil.core.no_stroke();

quil.core.ellipse(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),(10),(10));

quil.core.stroke.cljs$core$IFn$_invoke$arity$2((100),(100));

var seq__72286_72319 = cljs.core.seq(cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(dude));
var chunk__72287_72320 = null;
var count__72288_72321 = (0);
var i__72289_72322 = (0);
while(true){
if((i__72289_72322 < count__72288_72321)){
var nb_72323 = chunk__72287_72320.cljs$core$IIndexed$_nth$arity$2(null,i__72289_72322);
quil.core.line.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72323)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72323)));


var G__72324 = seq__72286_72319;
var G__72325 = chunk__72287_72320;
var G__72326 = count__72288_72321;
var G__72327 = (i__72289_72322 + (1));
seq__72286_72319 = G__72324;
chunk__72287_72320 = G__72325;
count__72288_72321 = G__72326;
i__72289_72322 = G__72327;
continue;
} else {
var temp__5735__auto___72328__$1 = cljs.core.seq(seq__72286_72319);
if(temp__5735__auto___72328__$1){
var seq__72286_72329__$1 = temp__5735__auto___72328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72286_72329__$1)){
var c__4550__auto___72330 = cljs.core.chunk_first(seq__72286_72329__$1);
var G__72331 = cljs.core.chunk_rest(seq__72286_72329__$1);
var G__72332 = c__4550__auto___72330;
var G__72333 = cljs.core.count(c__4550__auto___72330);
var G__72334 = (0);
seq__72286_72319 = G__72331;
chunk__72287_72320 = G__72332;
count__72288_72321 = G__72333;
i__72289_72322 = G__72334;
continue;
} else {
var nb_72335 = cljs.core.first(seq__72286_72329__$1);
quil.core.line.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(dude),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72335)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dudes,nb_72335)));


var G__72336 = cljs.core.next(seq__72286_72329__$1);
var G__72337 = null;
var G__72338 = (0);
var G__72339 = (0);
seq__72286_72319 = G__72336;
chunk__72287_72320 = G__72337;
count__72288_72321 = G__72338;
i__72289_72322 = G__72339;
continue;
}
} else {
}
}
break;
}


var G__72340 = cljs.core.next(seq__72270__$1);
var G__72341 = null;
var G__72342 = (0);
var G__72343 = (0);
seq__72270 = G__72340;
chunk__72271 = G__72341;
count__72272 = G__72342;
i__72273 = G__72343;
continue;
}
} else {
return null;
}
}
break;
}
});
negative_space_quil.core.run_sketch = (function negative_space_quil$core$run_sketch(){
negative_space_quil.core.negative_space_quil = (function negative_space_quil$core$run_sketch_$_negative_space_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"20200210-quil",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(negative_space_quil.core.update_state))?(function() { 
var G__72344__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.update_state,args);
};
var G__72344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72345__i = 0, G__72345__a = new Array(arguments.length -  0);
while (G__72345__i < G__72345__a.length) {G__72345__a[G__72345__i] = arguments[G__72345__i + 0]; ++G__72345__i;}
  args = new cljs.core.IndexedSeq(G__72345__a,0,null);
} 
return G__72344__delegate.call(this,args);};
G__72344.cljs$lang$maxFixedArity = 0;
G__72344.cljs$lang$applyTo = (function (arglist__72346){
var args = cljs.core.seq(arglist__72346);
return G__72344__delegate(args);
});
G__72344.cljs$core$IFn$_invoke$arity$variadic = G__72344__delegate;
return G__72344;
})()
:negative_space_quil.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(negative_space_quil.core.setup))?(function() { 
var G__72347__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.setup,args);
};
var G__72347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72348__i = 0, G__72348__a = new Array(arguments.length -  0);
while (G__72348__i < G__72348__a.length) {G__72348__a[G__72348__i] = arguments[G__72348__i + 0]; ++G__72348__i;}
  args = new cljs.core.IndexedSeq(G__72348__a,0,null);
} 
return G__72347__delegate.call(this,args);};
G__72347.cljs$lang$maxFixedArity = 0;
G__72347.cljs$lang$applyTo = (function (arglist__72349){
var args = cljs.core.seq(arglist__72349);
return G__72347__delegate(args);
});
G__72347.cljs$core$IFn$_invoke$arity$variadic = G__72347__delegate;
return G__72347;
})()
:negative_space_quil.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(negative_space_quil.core.draw_state))?(function() { 
var G__72350__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(negative_space_quil.core.draw_state,args);
};
var G__72350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72351__i = 0, G__72351__a = new Array(arguments.length -  0);
while (G__72351__i < G__72351__a.length) {G__72351__a[G__72351__i] = arguments[G__72351__i + 0]; ++G__72351__i;}
  args = new cljs.core.IndexedSeq(G__72351__a,0,null);
} 
return G__72350__delegate.call(this,args);};
G__72350.cljs$lang$maxFixedArity = 0;
G__72350.cljs$lang$applyTo = (function (arglist__72352){
var args = cljs.core.seq(arglist__72352);
return G__72350__delegate(args);
});
G__72350.cljs$core$IFn$_invoke$arity$variadic = G__72350__delegate;
return G__72350;
})()
:negative_space_quil.core.draw_state)], 0));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__20916__20917__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,negative_space_quil.core.negative_space_quil,cljs.core.cst$kw$host_DASH_id,"20200210-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);
