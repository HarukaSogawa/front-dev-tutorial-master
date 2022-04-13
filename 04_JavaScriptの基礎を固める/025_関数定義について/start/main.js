
//無名関数
function hello(name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age;
}

//変数に関数を代入
const hello2 = function(name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age;
}

//()は関数の実行を意味する
hello('Code Mafia', 10);
const returnVal = hello('Code Mafia', 20)
console.log(returnVal);
