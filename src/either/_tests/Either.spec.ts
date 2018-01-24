import { fromNullable } from "../";

describe("Either", () => {
  test("color test", () => {
    const color = name =>
      fromNullable({ red: "#ff0000", green: "#00ff00", blue: "#0000ff" }[name]);

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
