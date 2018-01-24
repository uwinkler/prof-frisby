export class Right<T> {
  constructor(protected x: T) {}

  static of<T>(x: T) {
    return new Right(x);
  }

  map(func: Function) {
    return Right.of(func(this.x));
  }

  chain(func: Function) {
    return func(this.x);
  }

  fold(_error: Function, result: Function) {
    return result(this.x);
  }
}
