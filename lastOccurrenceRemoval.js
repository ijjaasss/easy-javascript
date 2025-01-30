String.prototype.lastOccurrenceRemoval=function(){
   var res=''
for(let i=0;i<this.length;i++){
    if(res[res.length-1]!==this[i]){
        res+=this[i]
    }
}
return res
}
var str='aabaabbbccccddaa'
console.log(str.lastOccurrenceRemoval()) //output is "ababcda"