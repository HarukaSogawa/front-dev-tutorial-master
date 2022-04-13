//配列
// const arry = new Array(1,2,3,4,5,6);
const arry = [1,2,3,4,5,6]; //こちらの書き方のほうが一般的
console.log(arry);
console.log(arry[3]); //特定の値がほしい場合

//配列を書き換える
arry[5] = 8;
console.log(arry[5]);

//constで定義しても配列の中身は変更できる。配列を別の配列で書き換えることはできない

//配列の代入、削除
arry.push('new item'); //末尾に代入
arry.unshift('new item'); //先頭に代入
const val = arry.pop();//末尾を削除。削除された値が取得できる
arry.shift();//先頭を削除。削除された値が取得できる



console.log(val);
console.log(arry);
