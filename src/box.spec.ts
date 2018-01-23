import { Box } from "./box";

describe("Box", () => {
  describe("box", () => {
    test("Should box one value", () => {
      const b = Box.of(1);
      expect(b.fold()).toBe(1);
    });
  });

  describe("mixins", () => {
    test("it should mixins", () => {
      expect(2).toBe(2);
    });
  });
});
