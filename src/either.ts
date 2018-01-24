export type Either<T> = Left<T> | Right<T>;

export class Left<T> {
  constructor(protected x: T) {}

  static of<T>(x: T) {
    return new Left(x);
  }

  map(_func: (value: any) => any) {
    return Left.of(this.x);
  }

  fold(error: (x: any) => any, _result: (x: any) => any) {
    return error(this.x);
  }
}

export class Right<T> {
  constructor(protected x: T) {}

  static of<T>(x: T) {
    return new Right(x);
  }

  map(func: (value: any) => any) {
    return Right.of(func(this.x));
  }

  fold(_error: (x: any) => any, result: (x: any) => any) {
    return result(this.x);
  }
}
