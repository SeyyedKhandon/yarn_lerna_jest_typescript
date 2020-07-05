import mul from "../src/index";
test("mul( 2 + 2 ) to equal 4", () => {
  expect(mul(2, 2)).toBe(4);
});
