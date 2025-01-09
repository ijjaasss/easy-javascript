//this is prototype
Object.prototype.maxValue=function(){
    const value=Object.values(this)
    var temp=value.filter((val)=>typeof val!=='number')
     if(temp.length>0){
     throw 'only number is accept'
     }
  var max=Math.max(...value)
  
    for(let x in this){
     if(this[x]==max){
         return x
     }
    }
 }
 Object.prototype.minValue=function(){
    const value=Object.values(this)
    var temp=value.filter((val)=>typeof val!=='number')
     if(temp.length>0){
     throw 'only number is accept'
     }
  var max=Math.min(...value)
  
    for(let x in this){
     if(this[x]==max){
         return x
     }
    }
 }


 
 //working of my code 
 var obj={
     a:1,
     b:5,
     c:300,
     d:40
 }
 console.log(obj.maxValue());  //answer is object key of maximum value

 