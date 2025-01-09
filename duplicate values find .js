Array.prototype.findDuplicate=function(){
    var result=[]
    for(let i=0;i<this.length;i++){
   if(this.indexOf(this[i])!==i){
    result.push(this[i])

   }
    }
    result=[...new Set(result)]
    return result
}
var arr=[1,2,3,1,4,5,3,3]
console.log(arr.findDuplicate());//answer is [1,3]