import { myfunc } from "@yarn_lerna_jest_typescript/package1";
import commonFunction2 from "@yarn_lerna_jest_typescript/package2";
import { add } from "@yarn_lerna_jest_typescript/common";
declare const _default: {
    add: (a: number, b: number) => number;
    myfunc: (y: number) => string;
    commonFunction2: () => void;
};
export default _default;
export { add, myfunc, commonFunction2 };
