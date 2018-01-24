import { Box } from "../Box";

describe("Box", () => {
  describe("box", () => {
    test("Should box one value", () => {
      const b = Box.of(1);
      expect(b.fold()).toBe(1);
    });

    test("should map along", () => {
      const res = Box.of(1)
        .map(x => x + 2)
        .map(x => x * 2)
        .fold();
      expect(res).toBe(6);
    });
  });
});
