const { get } = require("../get");

describe("lib/get", () => {
  test("get on undefined returns undefined", () => {
    const expected = undefined;
    const actual = get(["a"], undefined);
    expect(actual).toBe(expected);
  });

  test("get on null returns undefined", () => {
    const expected = undefined;
    const actual = get(["a"], null);
    expect(actual).toBe(expected);
  });

  test("get[] returns object", () => {
    const expected = {};
    const actual = get([], expected);
    expect(actual).toBe(expected);
  });

  test("get[a] returns object[a]", () => {
    const expected = "SUCCESS";
    const actual = get(["a"], { a: expected });
    expect(actual).toBe(expected);
  });

  test("get missing prop returns undefined", () => {
    const expected = undefined;
    const actual = get(["a", "b"], { a: 123 });
    expect(actual).toBe(expected);
  });

  test("get nested returns value", () => {
    const expected = "SUCCESS";
    const actual = get(["a", "b"], { a: { b: expected } });
    expect(actual).toBe(expected);
  });
});
