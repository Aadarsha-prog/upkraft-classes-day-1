class Counter {
  count = 0; // instance field
  static created = 0; // shared by the class

  constructor() {
    // Counter.created++;
  }

  increment() {
    Counter.created++;
    this.count++;
  }

  static displayCreated() {
    console.log(`Created: ${Counter.created}`);
  }
}

const a = new Counter();
const b = new Counter();

a.increment();
a.increment();
a.increment();
a.increment();
a.increment();
a.increment();
a.increment();
a.increment();

b.increment();

// Counter.displayCreated();

// console.log({
//   aCount: a.count,
//   bCount: b.count,
//   created: Counter.created,
// });

// console.log(a.count, b.count, Counter.created);

// Inheritance
class Animal {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }

  eat() {
    console.log(`${this.name} is eating something`);
  }

  makeSound() {}
}

class Dog extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
  }

  makeSound() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
  }
  makeSound() {
    console.log(`${this.name} is meowing`);
  }
}

class Tiger extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
  }

  eat(meatOf) {
    console.log(`${this.name} is eating meat of ${meatOf}`);
  }

  makeSound() {
    console.log(`${this.name} is growling`);
  }
}

class Sheep extends Animal {
  constructor(name, age, species) {
    super(name, age, species);
  }

  eat() {
    console.log(`${this.name} is eating grass`);
  }

  makeSound() {
    console.log(`${this.name} is baa baaa`);
  }
}

class AnimalFactory {
  static createAnimal(type, name, age, species) {
    switch (type) {
      case "dog":
        return new Dog(name, age, species);
      case "cat":
        return new Cat(name, age, species);
      case "tiger":
        return new Tiger(name, age, species);
      case "sheep":
        return new Sheep(name, age, species);
      default:
        throw new Error("Unknown animal type");
    }
  }
}

// const tommy = new Dog("Tommy", 2, "labrador");
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.species);
// tommy.walk();
// tommy.eat();
// tommy.makeSound();

// const kitty = new Cat("Kitty", 1, "persian");
// console.log(kitty.name);
// console.log(kitty.age);
// console.log(kitty.species);
// kitty.walk();
// kitty.makeSound();

// const sheru = new Tiger("Sheru", 3, "bengal");
// console.log(sheru.name);
// console.log(sheru.age);
// console.log(sheru.species);
// sheru.walk();
// sheru.eat("deer");
// sheru.makeSound();

// Dependency Inversion
// A query is reveived from user
// I have a <animal type> and I want to know what sound it makes
// -> I have tiger and I want to know what sound it makes

// 1. Create a factory function that takes animal type
// And returns the corresponding animal object
// const userInput = {
//   type: "tiger",
//   name: "Sheru",
//   age: 3,
//   species: "bengal",
// };
// const animal = AnimalFactory.createAnimal(
//   userInput.type,
//   userInput.name,
//   userInput.age,
//   userInput.species,
// );
// animal.makeSound();

// class Clannel {
//   handleCarousel() {}
// }

// class Facebook extends Clannel {
//   handleCarousel() {
//     console.log("Handling carousel for Facebook");
//   }
// }

// class Instagram extends Clannel {
//   handleCarousel() {
//     console.log("Handling carousel for Instagram");
//   }
// }

// class TikTok extends Clannel {
//   handleCarousel() {
//     console.log("Handling carousel for TikTok");
//   }
// }

// class ChannelFactory {
//   static createChannel(type) {
//     switch (type) {
//       case "facebook":
//         return new Facebook();
//       case "instagram":
//         return new Instagram();
//       case "tiktok":
//         return new TikTok();
//       default:
//         throw new Error("Unknown channel type");
//     }
//   }
// }

// // When some one sends a message
// // based on channel, give me the corresponding channel object and send the message s

// const channeType = "facebook";
// const channel = ChannelFactory.createChannel(channeType);
// // If user has asked for products
// channel.handleCarousel();

// const dog = new Dog("Tommy", 2, "labrador");
// dog.walk();

class User {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set name(name) {
    this.#name = name;
  }

  #getName() {
    return this.#name;
  }

  #getAge() {
    return this.#age;
  }

  displayInfo() {
    const name = this.#getName();
    const age = this.#getAge();
    console.log(`Name: ${name}, Age: ${age}`);
  }
}

const user = new User("Suparth", 25);
user.displayInfo();

console.log(user.name);

user.name = "John";
user.displayInfo();
