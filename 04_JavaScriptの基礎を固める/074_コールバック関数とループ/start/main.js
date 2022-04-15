const arry = [1, 2, 3, 4, 5];

function forEach(arry2, callback) {
  for(let i = 0; i < arry2.length; i++) {
    callback(arry2[i]);
  }
}

//コールバック関数
function log(val) {
  console.log(val);
}
function double(val) {
  val = val * 2;
  log(val);
}

forEach(arry, double);

//無名関数の場合
forEach(arry, function(val){
  val = val * 3;
  log(val); 
})
