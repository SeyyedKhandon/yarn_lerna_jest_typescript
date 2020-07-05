import log from "@yarn_lerna_jest_typescript/common";
const mul = (a: number, b: number) => a * b;

log(`mul(2,10): ${mul(2, 10).toString()}`);

export default mul;
export { mul };
