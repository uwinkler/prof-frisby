export class Box<T> {
  constructor(protected x: T) {}

  static of<T>(x: T) {
    return new Box(x);
  }

  map<Z>(func: (value: T) => Z) {
    return Box.of(func(this.x));
  }

  /**
   * Returns a string for debuggin purposes
   */
  inspect() {
    return `Box(${this.x})`;
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
