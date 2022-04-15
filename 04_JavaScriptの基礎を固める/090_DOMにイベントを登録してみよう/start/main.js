const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

// const hello = function(){
//   alert('hello');
// }

//こんな書き方もできる
function changeColor(){
  h1.style.color = 'red';
  //そのものを変える場合はthisでやるのが一般的
  // this.style.color = 'red';
};

function changeBgColor(){
  h1.style.backgroundColor = '#eee';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);

//同じ処理をいろんなイベントに使い回せるため関数は変数にしておいたほうがベター
//イベントを解除するときに同じ処理の指定が必要になるのでremoveEventListenerを使うときは変数化必須

// btn.removeEventListener('click', hello);

//無名関数で書く場合
// btn.addEventListener('click', function(){
//   alert('hello');
// });

// btn.onclick = changeColor; //この書き方でも動くが、複数実行できないので一般的には使われない
