import { Left } from "./Left";
import { Right } from "./Right";

export type Either<T> = Left<T> | Right<T>;
