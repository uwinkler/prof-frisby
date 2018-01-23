export class Box<T> {
  constructor(private x: T) {}

  static of<T>(x: T) {
    return new Box(x);
  }

  map<Z>(func: (value: T) => Z) {
    return Box.of(func(this.x));
  }

  /**
   * Get the value out of the box
   */
  fold() {
    return this.x;
  }

  /**
   * Another way to fold.
   *
   * @see fold()
   */
  get() {
    return this.fold();
  }
}
