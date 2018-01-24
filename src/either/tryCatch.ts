import { Either } from "./either";
import { Right } from "./Right";
import { Left } from "./Left";

export function tryCatch<T>(func: Function): Either<T> {
  try {
    return Right.of(func());
  } catch (e) {
    return Left.of(e);
  }
}
