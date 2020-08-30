const arry =[1,2,3,4,5];

const a = arry.reduce(function(accu,curr){
  return curr;
});
console.log(a);

const str = 'animation';
const strArry=str.split('');
console.log(strArry);
const result=strArry.reduce((accu,curr) => {
  return accu+'<'+curr+'>';
},"")
console.log(result);