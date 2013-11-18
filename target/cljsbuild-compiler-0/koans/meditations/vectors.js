// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.vectors');
goog.require('cljs.core');
koans.meditations.vectors.koans = cljs.core.list("You can use vectors in clojure as array-like structures",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),cljs.core.PersistentVector.fromArray([42], true))),"You can create a vector from a list",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",-1640414899,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(1)))),"Or from some elements",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",1834048252,null),null,null)),"But you can populate it with any number of elements at once",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.PersistentVector.fromArray([1,new cljs.core.Keyword(null,"__","__",1013907282)], true),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",-1640414899,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(1,2)))),"Conjoining to a vector is different than to a list",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1637472031,null),cljs.core.PersistentVector.fromArray([111,222], true),333)),"You can get the first element of a vector like so",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"first","first",-1543091095,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"peanut","peanut",4316643955),new cljs.core.Keyword(null,"butter","butter",3931183474),new cljs.core.Keyword(null,"and","and",1014000969),new cljs.core.Keyword(null,"jelly","jelly",1114913616)], true))),"And the last in a similar fashion",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1637217201,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"peanut","peanut",4316643955),new cljs.core.Keyword(null,"butter","butter",3931183474),new cljs.core.Keyword(null,"and","and",1014000969),new cljs.core.Keyword(null,"jelly","jelly",1114913616)], true))),"Or any index if you wish",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",-1640422117,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"peanut","peanut",4316643955),new cljs.core.Keyword(null,"butter","butter",3931183474),new cljs.core.Keyword(null,"and","and",1014000969),new cljs.core.Keyword(null,"jelly","jelly",1114913616)], true),3)),"You can also slice a vector",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"subvec","subvec",1762908941,null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"peanut","peanut",4316643955),new cljs.core.Keyword(null,"butter","butter",3931183474),new cljs.core.Keyword(null,"and","and",1014000969),new cljs.core.Keyword(null,"jelly","jelly",1114913616)], true),1,3)),"Equality with collections is in terms of values",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1637209513,null),1,2,3),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",1834048252,null),1,2,new cljs.core.Keyword(null,"__","__",1013907282))));
