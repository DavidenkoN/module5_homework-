let arr = [1,2,3,4,2,5,1];
let isEqual = true;
let reference = arr[0];
  for(let iteam of arr){
  
console.log( iteam );
 if (iteam !== reference){
    isEqual = false;
  }
}

console.log(isEqual);