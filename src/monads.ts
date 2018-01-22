class Box<T> {
  constructor(private x: T) {}

  static of<T>(x: T) {
    return new Box(x);
  }

  map<Z>(func: (value: T) => Z) {
    return Box.of(func(this.x));
  }

  get() {
    return this.x;
  }
}

let state = 1;

const multiplyByTwo = x => x * 2;

const newState = Box.of(state)
  .map(s => s * 2)
  .map(s => s + 1)
  .get();

state = newState;
