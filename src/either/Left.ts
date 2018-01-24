export class Left<T> {
  constructor(protected x: T) {}

  static of<T>(x: T) {
    return new Left(x);
  }

  map(_func: Function) {
    return Left.of(this.x);
  }

  chain(_func: Function) {
    return Left.of(this.x);
  }

  fold(error: Function, _result: Function) {
    return error(this.x);
  }
}
