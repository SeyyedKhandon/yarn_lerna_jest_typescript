import { add } from "@yarn_lerna_jest_typescript/common";

export const myfunc = (y: number): string => {
  const x: number = 10;
  console.log("hello package1", add(x, y));
  return x.toString();
};
