import { Left } from "./Left";
import { Right } from "./Right";
import { Either } from "./Either";

export function fromNullable<T>(x: T): Either<T> {
  return x != null ? Right.of(x) : Left.of(x);
}
