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

  test("chain simple values", () => {
    expect(Left.of(1).chain(x => x)).toMatchObject(Left.of(1));
  });

  test("chain nested values", () => {
    expect(Left.of(Left.of(1)).chain(x => x)).toMatchObject(
      Left.of(Left.of(1))
    );
  });
});
