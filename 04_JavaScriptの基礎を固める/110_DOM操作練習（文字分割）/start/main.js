document.addEventListener('DOMContentLoaded', function(){
  const str = document.querySelector('.animate-title').innerText;
  const arry = str.split('');
  // console.log(str);
  // console.log(arry);
  
  const result = arry.reduce(function (accu, curr){
    curr = curr.replace(/\s+/, '&nbsp;'); //半角スペースがあったらnbspに変換する。
    return `${accu}<span class="char">${curr}</span>`;
  }, '');
  
  // console.log(result);
  
  const elm = document.querySelector('.animate-title');
  elm.innerHTML = result;
});

