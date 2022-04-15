const arry = [1,2,3,4,5];

//コールバック関数 引数には値、添字、配列そのものが渡ってくる
arry.forEach(function(v, i, ary){
  console.log(v, i, ary);
})
//アロー関数で書き換えた場合
arry.forEach((v, i, ary) => {
  console.log('arrow ' + v, i, ary);
});
//値しかとらない場合さらに短くできる
arry.forEach(v => console.log('v-arrow ' + v));

//for文で書いた場合
//変数を定義したり、コード自体も長くなってしまうのでforEachを使うのがおすすめ
for(let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log('for ' + v);
}
