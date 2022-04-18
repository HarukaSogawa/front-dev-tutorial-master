const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log(this.first_name);
    console.log(obj.first_name); //同じ結果になる
    const _that = this; //thisを変数化する

    window.setTimeout(function () {
        console.log(this); //階層上がって一番最初にあったオブジェクトがthisとして取得される(この場合はwindow)
    });

    //↑の関数内のthisを使う場合①　変数化して使う
    window.setTimeout(function () {
      console.log(_that);
    });

    //②bindを使う
    window.setTimeout(function () {
      console.log(this);
    }.bind(_that)); //引数で渡した_thatが↑のthisに格納される

    window.setTimeout(function () {
      console.log(this);
    }.bind({test: 'Test'})); //オブジェクトならなんでも好きなように入れられる。それがbind。
  },
};

obj.printFullName();

class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }

  printFullName() {
    console.log(this.last_name);
  }
}
//classを指定しただけではthisは使えない
const obj2 = new MyObj();
//↑これでオブジェクト化される
obj2.printFullName();
