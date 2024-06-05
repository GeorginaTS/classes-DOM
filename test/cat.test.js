import Cat from "../src/components/cat";
import { isClass } from "./utilities";

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat("Pica", 10, "female");
  });

  describe("The Cat class", () => {
    test("should be a class", () => {
      expect(isClass(Cat)).toBe(true);
    });

    test("should have the property name, sound, age...", () => {
      expect(cat).toHaveProperty("name");
      expect(cat).toHaveProperty("lang");
      expect(cat).toHaveProperty("age");
    });
    
    test("should have have preset properties for age and legs", () => {
      expect(cat.age).toBe(10)
      expect(cat.legs).toBe(4);
    });
  });
  describe("The getOlder method", () => {
    test("should exist on the Dog prototype", () => {
      expect(cat).toHaveProperty("getOlder");
    });

    test("should increase the age by 1 each time it is called", () => {
      cat.getOlder();
      cat.getOlder();
      cat.getOlder();
      expect(cat.age).toBe(13);
    });
  });
});
