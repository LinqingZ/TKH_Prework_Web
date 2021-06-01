console.log(4+4)
console.log(17<3)

var num = 7;
if (num > 8){
  console.log("over");
}
else{
  console.log("under");
}

var nums = [1,14,32,5,7];
console.log(nums.length);

for(var i=0; i<nums.length;i++){
  console.log(i)
}

var over_under_array = [1,45,32,21,5,17,43,93];

for(var a=0; a<over_under_array.length; a++){
  if(over_under_array[a]>25){
    console.log("over");
  }
  else{
    console.log("under");
  }
}