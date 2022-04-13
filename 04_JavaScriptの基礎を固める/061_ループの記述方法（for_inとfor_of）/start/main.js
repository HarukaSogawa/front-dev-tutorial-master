const arry = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arry.length; i++) {
//     console.log(i);
// }

//inの場合は添字が渡ってくる i,j,kは添字の意味合いがある
for (let i in arry) {
  console.log(i, arry[i]);
}

//ofの場合は値が渡ってくる 変数もvalueのv等にするのが一般的
//ofは非対応のブラウザがあるのでwebpack, babelを使う
for (let v of arry) {
  console.log(v);
}
