
//この書き方は関数宣言が前にあってもエラーにならない
// function hello(name){
//   console.log('Hello ' + name);
// }

//この書き方だと関数宣言が前だとエラーになる（定義されてないため）
const hello = function(name = 'Tom'){
  console.log('Hello ' + name);
}

//アロー関数を使った書き方 一行の場合は波括弧も省略できる。
const hello2 = (name = 'Tom') => console.log('Hello ' + name);
//引数の初期値を入れないかつ単数の場合は丸括弧も省略できる
const hello3 = name => console.log('Hello ' + name);

hello();
hello2();
hello3('Code Mafia');

//アロー関数の使い所
//配列を出力するときにコードが短くて済むのでよく使われる
const arry = [1, 2, 3, 4, 5, 6];
arry.forEach(value => console.log(value));
//アロー関数じゃない場合
arry.forEach(function(value){
  console.log(value);
})
