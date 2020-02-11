// Compiled by ClojureScript 1.10.520 {}
goog.provide('negative_space_quil.core');
goog.require('cljs.core');
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

negative_space_quil.core.Agent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k66834,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__66838 = k66834;
var G__66838__$1 = (((G__66838 instanceof cljs.core.Keyword))?G__66838.fqn:null);
switch (G__66838__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k66834,else__4388__auto__);

}
});

negative_space_quil.core.Agent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__66839){
var vec__66840 = p__66839;
var k__4408__auto__ = cljs.core.nth.call(null,vec__66840,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__66840,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

negative_space_quil.core.Agent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#negative-space-quil.core.Agent{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),self__.neighbors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"others","others",2084874583),self__.others],null))], null),self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66833){
var self__ = this;
var G__66833__$1 = this;
return (new cljs.core.RecordIter((0),G__66833__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.Keyword(null,"others","others",2084874583)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (6 + cljs.core.count.call(null,self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-991528107 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

negative_space_quil.core.Agent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66835,other66836){
var self__ = this;
var this66835__$1 = this;
return (((!((other66836 == null)))) && ((this66835__$1.constructor === other66836.constructor)) && (cljs.core._EQ_.call(null,this66835__$1.idx,other66836.idx)) && (cljs.core._EQ_.call(null,this66835__$1.hue,other66836.hue)) && (cljs.core._EQ_.call(null,this66835__$1.x,other66836.x)) && (cljs.core._EQ_.call(null,this66835__$1.y,other66836.y)) && (cljs.core._EQ_.call(null,this66835__$1.neighbors,other66836.neighbors)) && (cljs.core._EQ_.call(null,this66835__$1.others,other66836.others)) && (cljs.core._EQ_.call(null,this66835__$1.__extmap,other66836.__extmap)));
});

negative_space_quil.core.Agent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"others","others",2084874583),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),null,new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

negative_space_quil.core.Agent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__66833){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__66843 = cljs.core.keyword_identical_QMARK_;
var expr__66844 = k__4393__auto__;
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__66844))){
return (new negative_space_quil.core.Agent(G__66833,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__66844))){
return (new negative_space_quil.core.Agent(self__.idx,G__66833,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__66844))){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,G__66833,self__.y,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__66844))){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,G__66833,self__.neighbors,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),expr__66844))){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,G__66833,self__.others,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__66843.call(null,new cljs.core.Keyword(null,"others","others",2084874583),expr__66844))){
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,G__66833,self__.__meta,self__.__extmap,null));
} else {
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__66833),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),self__.neighbors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"others","others",2084874583),self__.others,null))], null),self__.__extmap));
});

negative_space_quil.core.Agent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__66833){
var self__ = this;
var this__4384__auto____$1 = this;
return (new negative_space_quil.core.Agent(self__.idx,self__.hue,self__.x,self__.y,self__.neighbors,self__.others,G__66833,self__.__extmap,self__.__hash));
});

negative_space_quil.core.Agent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

negative_space_quil.core.Agent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"others","others",-569561186,null)], null);
});

negative_space_quil.core.Agent.cljs$lang$type = true;

negative_space_quil.core.Agent.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"negative-space-quil.core/Agent",null,(1),null));
});

negative_space_quil.core.Agent.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"negative-space-quil.core/Agent");
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
negative_space_quil.core.map__GT_Agent = (function negative_space_quil$core$map__GT_Agent(G__66837){
var extmap__4424__auto__ = (function (){var G__66846 = cljs.core.dissoc.call(null,G__66837,new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.Keyword(null,"others","others",2084874583));
if(cljs.core.record_QMARK_.call(null,G__66837)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__66846);
} else {
return G__66846;
}
})();
return (new negative_space_quil.core.Agent(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__66837),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__66837),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__66837),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__66837),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(G__66837),new cljs.core.Keyword(null,"others","others",2084874583).cljs$core$IFn$_invoke$arity$1(G__66837),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

negative_space_quil.core.random_neighbors = (function negative_space_quil$core$random_neighbors(idx,how_many,pool_size){
var pool = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([idx]),cljs.core.range.call(null,pool_size));
return cljs.core.take.call(null,how_many,cljs.core.shuffle.call(null,pool));
});
negative_space_quil.core.rand_node = (function negative_space_quil$core$rand_node(idx,connectedness,pool_size){
var neighbors = negative_space_quil.core.random_neighbors.call(null,idx,connectedness,pool_size);
return negative_space_quil.core.__GT_Agent.call(null,idx,cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,quil.core.width.call(null)),cljs.core.rand_int.call(null,quil.core.height.call(null)),neighbors,cljs.core.remove.call(null,cljs.core.conj.call(null,neighbors,idx),cljs.core.range.call(null,pool_size)));
});
negative_space_quil.core.setup = (function negative_space_quil$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.blend_mode.call(null,new cljs.core.Keyword(null,"blend","blend",249565561));

quil.core.ellipse_mode.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258));

quil.core.image_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dudes","dudes",1496571053),cljs.core.map.call(null,(function (p1__66848_SHARP_){
return negative_space_quil.core.rand_node.call(null,p1__66848_SHARP_,(1),(25));
}),cljs.core.range.call(null,(25))),new cljs.core.Keyword(null,"spring-distance","spring-distance",-605198442),(30),new cljs.core.Keyword(null,"hooke-constant","hooke-constant",-571408002),0.1], null);
});
negative_space_quil.core.update_state = (function negative_space_quil$core$update_state(state){
var dudes = new cljs.core.Keyword(null,"dudes","dudes",1496571053).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dudes","dudes",1496571053),cljs.core.map.call(null,((function (dudes){
return (function (p1__66849_SHARP_){
return cljs.core.update.call(null,p1__66849_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),((function (dudes){
return (function (x){
return cljs.core.mod.call(null,((cljs.core.rand_int.call(null,(3)) + (-1)) + x),quil.core.width.call(null));
});})(dudes))
);
});})(dudes))
,dudes));
});
negative_space_quil.core.draw_state = (function negative_space_quil$core$draw_state(state){
var dudes = new cljs.core.Keyword(null,"dudes","dudes",1496571053).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(200));

quil.core.no_stroke.call(null);

var seq__66850 = cljs.core.seq.call(null,dudes);
var chunk__66851 = null;
var count__66852 = (0);
var i__66853 = (0);
while(true){
if((i__66853 < count__66852)){
var dude = cljs.core._nth.call(null,chunk__66851,i__66853);
quil.core.fill.call(null,quil.core.color.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(dude),(255),(255),(150)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),(10),(10));

quil.core.stroke.call(null,(100),(100));

var seq__66862_66870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(dude));
var chunk__66863_66871 = null;
var count__66864_66872 = (0);
var i__66865_66873 = (0);
while(true){
if((i__66865_66873 < count__66864_66872)){
var nb_66874 = cljs.core._nth.call(null,chunk__66863_66871,i__66865_66873);
quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66874)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66874)));


var G__66875 = seq__66862_66870;
var G__66876 = chunk__66863_66871;
var G__66877 = count__66864_66872;
var G__66878 = (i__66865_66873 + (1));
seq__66862_66870 = G__66875;
chunk__66863_66871 = G__66876;
count__66864_66872 = G__66877;
i__66865_66873 = G__66878;
continue;
} else {
var temp__5735__auto___66879 = cljs.core.seq.call(null,seq__66862_66870);
if(temp__5735__auto___66879){
var seq__66862_66880__$1 = temp__5735__auto___66879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66862_66880__$1)){
var c__4550__auto___66881 = cljs.core.chunk_first.call(null,seq__66862_66880__$1);
var G__66882 = cljs.core.chunk_rest.call(null,seq__66862_66880__$1);
var G__66883 = c__4550__auto___66881;
var G__66884 = cljs.core.count.call(null,c__4550__auto___66881);
var G__66885 = (0);
seq__66862_66870 = G__66882;
chunk__66863_66871 = G__66883;
count__66864_66872 = G__66884;
i__66865_66873 = G__66885;
continue;
} else {
var nb_66886 = cljs.core.first.call(null,seq__66862_66880__$1);
quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66886)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66886)));


var G__66887 = cljs.core.next.call(null,seq__66862_66880__$1);
var G__66888 = null;
var G__66889 = (0);
var G__66890 = (0);
seq__66862_66870 = G__66887;
chunk__66863_66871 = G__66888;
count__66864_66872 = G__66889;
i__66865_66873 = G__66890;
continue;
}
} else {
}
}
break;
}


var G__66891 = seq__66850;
var G__66892 = chunk__66851;
var G__66893 = count__66852;
var G__66894 = (i__66853 + (1));
seq__66850 = G__66891;
chunk__66851 = G__66892;
count__66852 = G__66893;
i__66853 = G__66894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66850);
if(temp__5735__auto__){
var seq__66850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66850__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66850__$1);
var G__66895 = cljs.core.chunk_rest.call(null,seq__66850__$1);
var G__66896 = c__4550__auto__;
var G__66897 = cljs.core.count.call(null,c__4550__auto__);
var G__66898 = (0);
seq__66850 = G__66895;
chunk__66851 = G__66896;
count__66852 = G__66897;
i__66853 = G__66898;
continue;
} else {
var dude = cljs.core.first.call(null,seq__66850__$1);
quil.core.fill.call(null,quil.core.color.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(dude),(255),(255),(150)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),(10),(10));

quil.core.stroke.call(null,(100),(100));

var seq__66866_66899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(dude));
var chunk__66867_66900 = null;
var count__66868_66901 = (0);
var i__66869_66902 = (0);
while(true){
if((i__66869_66902 < count__66868_66901)){
var nb_66903 = cljs.core._nth.call(null,chunk__66867_66900,i__66869_66902);
quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66903)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66903)));


var G__66904 = seq__66866_66899;
var G__66905 = chunk__66867_66900;
var G__66906 = count__66868_66901;
var G__66907 = (i__66869_66902 + (1));
seq__66866_66899 = G__66904;
chunk__66867_66900 = G__66905;
count__66868_66901 = G__66906;
i__66869_66902 = G__66907;
continue;
} else {
var temp__5735__auto___66908__$1 = cljs.core.seq.call(null,seq__66866_66899);
if(temp__5735__auto___66908__$1){
var seq__66866_66909__$1 = temp__5735__auto___66908__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66866_66909__$1)){
var c__4550__auto___66910 = cljs.core.chunk_first.call(null,seq__66866_66909__$1);
var G__66911 = cljs.core.chunk_rest.call(null,seq__66866_66909__$1);
var G__66912 = c__4550__auto___66910;
var G__66913 = cljs.core.count.call(null,c__4550__auto___66910);
var G__66914 = (0);
seq__66866_66899 = G__66911;
chunk__66867_66900 = G__66912;
count__66868_66901 = G__66913;
i__66869_66902 = G__66914;
continue;
} else {
var nb_66915 = cljs.core.first.call(null,seq__66866_66909__$1);
quil.core.line.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dude),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66915)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,dudes,nb_66915)));


var G__66916 = cljs.core.next.call(null,seq__66866_66909__$1);
var G__66917 = null;
var G__66918 = (0);
var G__66919 = (0);
seq__66866_66899 = G__66916;
chunk__66867_66900 = G__66917;
count__66868_66901 = G__66918;
i__66869_66902 = G__66919;
continue;
}
} else {
}
}
break;
}


var G__66920 = cljs.core.next.call(null,seq__66850__$1);
var G__66921 = null;
var G__66922 = (0);
var G__66923 = (0);
seq__66850 = G__66920;
chunk__66851 = G__66921;
count__66852 = G__66922;
i__66853 = G__66923;
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
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"20200210-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.update_state))?(function() { 
var G__66924__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.update_state,args);
};
var G__66924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66925__i = 0, G__66925__a = new Array(arguments.length -  0);
while (G__66925__i < G__66925__a.length) {G__66925__a[G__66925__i] = arguments[G__66925__i + 0]; ++G__66925__i;}
  args = new cljs.core.IndexedSeq(G__66925__a,0,null);
} 
return G__66924__delegate.call(this,args);};
G__66924.cljs$lang$maxFixedArity = 0;
G__66924.cljs$lang$applyTo = (function (arglist__66926){
var args = cljs.core.seq(arglist__66926);
return G__66924__delegate(args);
});
G__66924.cljs$core$IFn$_invoke$arity$variadic = G__66924__delegate;
return G__66924;
})()
:negative_space_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.setup))?(function() { 
var G__66927__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.setup,args);
};
var G__66927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66928__i = 0, G__66928__a = new Array(arguments.length -  0);
while (G__66928__i < G__66928__a.length) {G__66928__a[G__66928__i] = arguments[G__66928__i + 0]; ++G__66928__i;}
  args = new cljs.core.IndexedSeq(G__66928__a,0,null);
} 
return G__66927__delegate.call(this,args);};
G__66927.cljs$lang$maxFixedArity = 0;
G__66927.cljs$lang$applyTo = (function (arglist__66929){
var args = cljs.core.seq(arglist__66929);
return G__66927__delegate(args);
});
G__66927.cljs$core$IFn$_invoke$arity$variadic = G__66927__delegate;
return G__66927;
})()
:negative_space_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,negative_space_quil.core.draw_state))?(function() { 
var G__66930__delegate = function (args){
return cljs.core.apply.call(null,negative_space_quil.core.draw_state,args);
};
var G__66930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66931__i = 0, G__66931__a = new Array(arguments.length -  0);
while (G__66931__i < G__66931__a.length) {G__66931__a[G__66931__i] = arguments[G__66931__i + 0]; ++G__66931__i;}
  args = new cljs.core.IndexedSeq(G__66931__a,0,null);
} 
return G__66930__delegate.call(this,args);};
G__66930.cljs$lang$maxFixedArity = 0;
G__66930.cljs$lang$applyTo = (function (arglist__66932){
var args = cljs.core.seq(arglist__66932);
return G__66930__delegate(args);
});
G__66930.cljs$core$IFn$_invoke$arity$variadic = G__66930__delegate;
return G__66930;
})()
:negative_space_quil.core.draw_state));
});
goog.exportSymbol('negative_space_quil.core.negative_space_quil', negative_space_quil.core.negative_space_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),negative_space_quil.core.negative_space_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"20200210-quil"], null));
}
});
goog.exportSymbol('negative_space_quil.core.run_sketch', negative_space_quil.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581381575235
