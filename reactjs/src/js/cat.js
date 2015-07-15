

export default class Cat {

  constructor(name) {
    this.name = name;
  }
  
  meow() {
    alert(this.name + ': meow!');
  }

  static printMe() {
    return "Cat";
  }

  later() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 5000);
    });
  }
  
};
