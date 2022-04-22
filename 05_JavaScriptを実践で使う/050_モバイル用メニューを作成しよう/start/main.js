class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    //PCかスマホ（タッチブラウザ）か判定する
    //このコードでは厳密には判定できないらしい
    return window.ontouchstart ? 'touchstart' : 'click';
    // return 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
    // console.log(this.eventType);
  }

  //スマホの場合はtouchstartというイベントで発火させるほうがレスポンスが早い
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
