function hello (callback) {
  console.log('Hello ' + callback());
}

function getName() {
  return 'Code Mafia';
}
function getFirstName() {
  return 'Code';
}
//↑同じことをやっているが変数化するとわかりやすい
// const getFirstName = function(){
//   return 'Code';
// }

hello(getFirstName);

//よく行われる記法 hello関数の第１引数に無名関数を渡している。
hello(function() {
  return 'Mafia';
});

//さらにアロー関数で書き換える function,波括弧,return,セミコロン,が省略できる。
hello(() =>'arrow');

//第2引数を使う
function hello2 (callback, lastName) {
  console.log('Hello ' + callback(lastName));
}
//※無名関数を第1引数にしていることに注意
hello2(function(name) {
  return 'Code' + name
}, 'Mafia');


//コールバック関数をうまく使うことによって同じ関数でも処理結果を変えることができる
function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, plus);
