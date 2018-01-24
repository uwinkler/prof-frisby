import { Left, Right } from "../either";

describe("either", () => {
  const _ = () => null;

  test("left", () => {
    const res = Left.of(1)
      .map(x => x + 1)
      .map(x => x * 2)
      .fold(_error => null, res => res);
    expect(res).toBe(null);
  });

  test("right", () => {
    const res = Right.of(1)
      .map(x => x + 1)
      .map(x => x * 2)
      .fold(_error => null, res => res);
    expect(res).toBe(4);
  });

  test("right fold", () => {
    const res = new Right(1).fold(_, res => res);
    expect(res).toBe(1);
  });

  test("left fold", () => {
    const res = new Left(1).fold(_, res => res);
    expect(res).toBe(null);
  });

  test("color test", () => {
    const color = name => {
      const found = { red: "#ff0000", green: "#00ff00", blue: "#0000ff" }[name];
      return found ? Right.of(found) : Left.of("");
    };

    expect(
      color("green")
        .map(color => color.slice(1))
        .fold(_ => "no color", res => res)
    ).toBe("00ff00");

    expect(
      color("yellow")
        .map(color => color.slice(1))
        .fold(_ => "no color", res => res)
    ).toBe("no color");
  });
});
