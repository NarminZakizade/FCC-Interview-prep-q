function sym(...args){
    var arrays=[...new Set(args[0].concat(args[1]))];
    var result=[];
    for(let i=0;i<arrays.length;i++){
      if((args[0].includes(arrays[i])&& !args[1].includes(arrays[i]))|(args[1].includes(arrays[i])&& !args[0].includes(arrays[i]))){
        result.push(arrays[i]);
      }
    }
  args.splice(0,2);
 if(args.length>=1){
   while(args.length>=1){
    var arrays=[...new Set(result.concat(args[0]))];
    var result_=[];
    for(let i=0;i<arrays.length;i++){
      if((args[0].includes(arrays[i])&& !result.includes(arrays[i]))|(result.includes(arrays[i])&& !args[0].includes(arrays[i]))){
        result_.push(arrays[i]);
      }
      
    }
     var result=[...result_]
     args.splice(0,1);
   }
 }
return result;
}