import crearAnimal from "../src/components/functions.js";
import showPresentation from "../src/components/showFunction.js";

describe("Index Functions", () => {
  //   beforeEach(() => {
  //     const animal = crearAnimal("dog", "Xina", 12, "female");
  //   });
  describe("crearAnimal Function", () => {
    test("should exist crearAnimal Function", () => {
      expect(crearAnimal).toBeDefined();
    });

    // test("use jsdom in this test file", () => {
    //   const element = document.createElement("div");
    //   expect(element).not.toBeNull();
    // });
  });
  describe("show Presentation function", () => {
    test("should exist crearAnimal Function", () => {
        expect(showPresentation).toBeDefined();
      });test
  })
});
