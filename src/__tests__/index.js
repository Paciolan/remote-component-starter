import { mount } from "enzyme";
import React from "react";
import Component from "..";

describe("Component", () => {
  test("outputs Hello World!", () => {
    const expected = "Hello World!";
    const actual = mount(<Component />);
    expect(actual.text()).toBe(expected);
  });

  test("when name is given outputs Hello {name}!", () => {
    const expected = "Hello Paciolan!";
    const actual = mount(<Component name="Paciolan" />);
    expect(actual.text()).toBe(expected);
  });
});
