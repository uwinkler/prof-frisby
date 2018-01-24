import { fromNullable } from "../fromNullable";
import { Right } from "../Right";
import { Left } from "../Left";

describe("fromNullable", () => {
  test("return Right if not null", () => {
    expect(fromNullable(1)).toMatchObject(Right.of(1));
  });

  test("return Left if null", () => {
    expect(fromNullable(null)).toMatchObject(Left.of(null));
  });
});
