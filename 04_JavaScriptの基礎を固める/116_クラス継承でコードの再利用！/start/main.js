document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        //  this.DOM.el = document.querySelector(el);
        this.chars =  this.DOM.el.innerHTML.trim().split("");
         this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
         this.DOM.el.classList.toggle('inview');
        console.log('test');
    }
}

//sassみたいにextendsで継承できる
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el); //親のconstructorを継承する
    this.DOM.el.chars = this.DOM.el.querySelectorAll('.char');
  }

  animate() { //同じ関数名だとオーバーライドされる
    this.DOM.el.classList.add('inview');
    this.DOM.el.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: {y: '-50%', opacity: 0},
        y: '0%',
        opacity: 1,
      });
    });
    console.log('asdfadsf');
  }
}
