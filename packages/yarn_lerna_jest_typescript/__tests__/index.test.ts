import { add, mul } from "../src/index";
test("Library test:  add( 1 + 2 ) to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});
test("Library test:  mul( 2 + 2 ) to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
});
