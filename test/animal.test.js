import Animal from "../src/components/animal";
import { isClass } from "./utilities";

let animal = null;

describe("Animals", () => {
  beforeEach(() => {
    animal = new Animal();
  });

  describe("The Animal class", () => {
    test("should be a class", () => {
      expect(isClass(Animal)).toBe(true);
      expect(Animal).toBeTruthy();
      expect(Animal).toBeDefined();
      expect(Animal).not.toBeNull();
    });

    test("should have properties named name, sound, and legs", () => {
      expect(animal).toHaveProperty("name");
      expect(animal).toHaveProperty("lang");
      expect(animal).toHaveProperty("legs");
    });
  });

  describe("The getOlder method", () => {
    test("should exist on the Animal prototype", () => {
      expect(animal).toHaveProperty("getOlder");
    });
    test("should increase the age by one and return the new value", () => {
      expect(animal.age).toBeGreaterThan(0);
      expect(animal.getOlder()).toBe(2);
      expect(animal.getOlder()).toBe(3);
    });
  });

  describe("The speak method", () => {
    test("should exist on the Animal prototype", () => {
      expect(animal).toHaveProperty("speak");
    });
    // test("speak should return ....", () => {
    //   expect(animal.lang) == ""
    // })


  });
});
