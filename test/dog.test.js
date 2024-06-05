const Dog = require("../src/components/dog");
const { isClass } = require("./utilities");

let dog = null;

describe("Dogs", () => {
  beforeEach(() => {
    dog = new Dog("Xina", 12, "female");
  });

  describe("The Dog class", () => {
   
    test("should be a class", () => {
      expect(isClass(Dog)).toBe(true);
    });

    test("should have properties for name, lang and age", () => {
      expect(dog).toHaveProperty("name");
      expect(dog).toHaveProperty("lang");
      expect(dog).toHaveProperty("age");
    });

    test("should have have preset properties for name(Xina) age(12) and sex (female", () => {
      expect(dog.name).toBe("Xina")
      expect(dog.age).toBe(12)
      expect(dog.sex).toBe("female");
    });
  });

  describe("The getOlder method", () => {
    test("should exist on the Dog prototype", () => {
      expect(dog).toHaveProperty("getOlder");
    });

    test("should increase the age by 7 each time it is called", () => {
      dog.getOlder();
      dog.getOlder();
      dog.getOlder();
      expect(dog.age).toBe(33);
    });
  });

  describe("The sleep method", () => {
    test("should exist on the Dog prototype", () => {
      expect(dog).toHaveProperty("sleep");
    });

    test("should decrease the age count each time it is called", () => {
      dog.age = 5;
      dog.sleep();
      dog.sleep();
      expect(dog.age).toBe(3);
    });
  });
});
