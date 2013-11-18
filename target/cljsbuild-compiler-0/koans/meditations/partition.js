// Compiled by ClojureScript 0.0-2014
goog.provide('koans.meditations.partition');
goog.require('cljs.core');
koans.meditations.partition.koans = cljs.core.list("To split a collection you can use the partition function","(= '((0 1) (2 3)) (:__ 2 (range 4)))","But watch out if there are not enough elements to form n sequences",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(new cljs.core.Keyword(null,"__","__",1013907282))),cljs.core.list(new cljs.core.Symbol(null,"partition","partition",854625443,null),3,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"c","c",1013904341),new cljs.core.Keyword(null,"d","d",1013904342),new cljs.core.Keyword(null,"e","e",1013904343)], true))),"You can use partition-all to also get partitions with less than n elements",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Keyword(null,"__","__",1013907282),cljs.core.list(new cljs.core.Symbol(null,"partition-all","partition-all",957281783,null),3,cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),5))),"If you need to, you can start each sequence with an offset","(= '((0 1 2) (5 6 7) (10 11 12)) (partition 3 :__ (range 13)))","Consider padding the last sequence with some default values..",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(cljs.core.list(0,1,2),cljs.core.list(3,4,5),cljs.core.list(6,new cljs.core.Keyword(null,"hello","hello",1113066564)))),cljs.core.list(new cljs.core.Symbol(null,"partition","partition",854625443,null),3,3,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"__","__",1013907282)], true),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),7))),".. but notice that they will only pad up to given sequence length",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",-1532577739,null),cljs.core.list(cljs.core.list(0,1,2),cljs.core.list(3,4,5),new cljs.core.Keyword(null,"__","__",1013907282))),cljs.core.list(new cljs.core.Symbol(null,"partition","partition",854625443,null),3,3,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"this","this",1017463312),new cljs.core.Keyword(null,"are","are",1014001094),"my","words"], true),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1532251402,null),7))));
