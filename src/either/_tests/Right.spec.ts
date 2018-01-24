import { Right } from "../";

describe("Right", () => {
  const _ = () => null;

  test("map", () => {
    const res = Right.of(1)
      .map(x => x + 1)
      .map(x => x * 2)
      .fold(_, res => res);
    expect(res).toBe(4);
  });

  test("fold", () => {
    const res = new Right(1).fold(_, res => res);
    expect(res).toBe(1);
  });
});
