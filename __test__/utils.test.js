import utils from "../src/utils";

test("utils.areSame", () => {
  expect(true).toEqual(utils.areSame(123, 113));
});

test("utils.range", () => {
  expect(2).toEqual(utils.range(1, 2, 3));
  expect(3).toEqual(utils.range(1, 100, 3));
  expect(1).toEqual(utils.range(1, -100, 3));
});
