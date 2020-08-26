// function hello(callback,lastname){
//   console.log('hello '+callback(lastname));
// }
// function getName(){
//   return 'Kae';
// }
// function getFirstName(){
//   return 'Code';
// }
// hello(function(name){
//   return 'Code'+name;
// },'Mafia');

function doSomething(a,b,callback){
  console.log(callback);
  const result = callback(a,b);
  console.log(result);
}
function plus(a,b){
  return a+b;
}
function multiply(a,b) {
  return a*b;
}
doSomething(2,2,multiply);
doSomething(3,2,plus);

