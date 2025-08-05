class Animal {
  constructor(name, animalType) {
    this.name = name;
    this.animalType = animalType;
  }
  sayName() {
    console.log(this.name);
  }
  sayAnimalType() {
    console.log(this.animalType);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Dog");
  }
}

const myAnimal = new Animal("Ditto", "Pokemon");
myAnimal.sayName();
myAnimal.sayAnimalType();

const myDog = new Dog("candy", "Pitbull");
myDog.sayName();
myDog.sayAnimalType();
