const car = {
  name: {
    firstName: "lamborghini",
    country: "Italy",
  },
  state: 5,
  tank: 7,
  clean: 8,
  color: "red",

  getStatus: function () {
    return `Марка: ${this.name.firstName}, Состоянте: ${this.state}, Бак: ${this.tank}, Чистота: ${this.clean}, Цвет: ${this.color}.`;
  },
  refuel: function () {
    if (this.tank < 9) {
      this.tank += 2;
    }
    this.state--;
  },
  wash: function () {
    if (this.clean < 10) {
      this.clean++;
    }
  },
  repaint: function () {
    this.color = "yellow";
    this.clean = 10;
  },
  repair: function () {
    if (this.state < 6) {
      this.state += 2;
    }
    this.clean--;
  },
};
console.log(car.repaint());

console.log(car.getStatus());
