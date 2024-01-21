class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.items[++this.top] = value;
  }

  pop() {
    return this.items[this.top--];
  }
}

// Use 'describe' to define a test suite. [title, callback function]
describe("My Stack", () => {
  // global test stack variable
  let stack;

  // re-initialize the stack variable before each test runs
  beforeEach(() => {
    stack = new Stack();
  });

  // Use 'test' to define a single unit test. [description, callback function]
  // Adding .todo makes the test pass while you implement the feature.
  test("is created empty", () => {
    // Use 'expect' to make sure the code does what is expected.
    // 'toBe' is a 'matcher' that will test if output matches an expected value.
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  test("can push items to the top", () => {
    stack.push("Item");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("Item");
  });

  test("can pop off", () => {
    stack.push("Item1");
    stack.push("Item2");
    // don't write an 'expect top to be Item2' here, as the push method is being tested
    // in a separate unit test.
    expect(stack.pop()).toBe("Item2");
    expect(stack.pop()).toBe("Item1");
    expect(stack.top).toBe(-1);
  });
});
