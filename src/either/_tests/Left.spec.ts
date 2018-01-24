import { Left } from "../";

describe("Left", () => {
  const _ = () => null;

  test("map", () => {
    const res = Left.of(1)
      .map(x => x + 1)
      .map(x => x * 2)
      .fold(_error => null, res => res);
    expect(res).toBe(null);
  });

  test("fold", () => {
    const res = new Left(1).fold(_, res => res);
    expect(res).toBe(null);
  });
});
