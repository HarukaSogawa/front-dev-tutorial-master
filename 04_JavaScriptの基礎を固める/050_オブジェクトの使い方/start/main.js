//const person = {}; //初期化 オブジェクトリテラル
//person.name = 'Code Mafia'; //キーとバリューを設定

const person = {
  //キーに対しげバリューを設定する（プロパティ）
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano',
  },

  //関数も入れることができる（メソッド）
  getFullName: function() {
    console.log(this.name[0] + this.name[1]); //thisは宣言されたオブジェクトを指す
  }
};
//配列の中にオブジェクトや配列を入れることもできる

console.log(person.name);
console.log(person.name[0]);
console.log(person.interests);
console.log(person.interests.music);

//ドット記法で上書きする
person.age = 12;
console.log(person.age);
//ブラケット記法で上書きする（変数を入れて使える）
person['age'] = 13;
console.log(person.age);

person.getFullName();
