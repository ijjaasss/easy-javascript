Array.prototype.countElements=function(){  
    var result={}
    for(let x of this){
        result[x]=(result[x]||0)+1
    }
    return result
    }
    
    String.prototype.countElements=function(){  
      var result={}
      for(let x of this){
          result[x]=(result[x]||0)+1
      }
      return result
    }
    
    var arr=[1,2,3,1,'a',3,4,'f','a']
    
    var str='tyytte'
    
    console.log(arr.countElements())
    console.log(str.countElements())