document.addEventListener('DOMContentLoaded', function () {
  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  setTimeout(() => {
    ta.animate();
    ta2.animate();
  }, 1000);
});

class TextAnimation {
  //classの初期化 constructor関数
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._splitText();
  }
  //プライベートメソッド（class内でのみ使ってくださいという暗黙の了解）
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, '');
  }
  //パブリックメソッド
  animate() {
    this.el.classList.toggle('inview');
  }
  // log(){
  //   console.log(this.el);
  // }
}

//new〜〜で初期化することをインスタンス化という
// const ta = new TextAnimation('.animate-title');
// ta.log();
