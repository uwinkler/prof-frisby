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

  test("chain simple falues", () => {
    expect(Right.of(1).chain(x => x)).toBe(1);
  });

  test("chain nested values", () => {
    expect(Right.of(Right.of(1)).chain(x => x)).toMatchObject(Right.of(1));
  });
});
