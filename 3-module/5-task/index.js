function getMinMax(str) {
  let arr = str.split(/[\s,]+/);
let newArr = [];
for(let i = 0; i < arr.length; i++)
{
    arr[i] = arr[i].replace(',', '');
}
for( let i of arr){
if(!isNaN(parseFloat(+i))){
newArr.push(i);
}
}
let res = {};
let max = Math.max.apply( null, newArr );
let min = Math.min.apply( null, newArr );
res.max = max;
res.min = min;
return res;
}
