const arry = [1,2,3,4,5];

//reduceは前のループの戻り値が渡ってくる
arry.reduce(function(accu, curr){
  console.log(accu, curr);
  return accu + curr;
});
//結果
// 1 2
// 3 3
// 6 4
// 10 5

//第２引数（初期値）を指定した場合は1ループ目のaccuとなる
arry.reduce(function(accu, curr){
  console.log(accu, curr);
  return accu + curr;
}, 10);
//結果
// 10 1
// 11 2
// 13 3
// 16 4
// 20 5

//accu = Accumulation = 蓄積

//実際の使い所
const str = 'animation';
const strArry = str.split('');
console.log(strArry);

//第２引数を空文字にすることで配列の最初から処理することができる
const result = strArry.reduce(function(accu, curr){
  // return accu + '<' + curr + '>';
  return `${accu}<${curr}>`; //テンプレートリテラルで書いた場合
}, '');
console.log(result);
