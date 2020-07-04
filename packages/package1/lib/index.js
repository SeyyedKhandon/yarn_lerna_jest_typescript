"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myfunc = void 0;
const common_1 = require("@yarn_lerna_jest_typescript/common");
exports.myfunc = (y) => {
    const x = 10;
    console.log("hello package1", common_1.add(x, y));
    return x.toString();
};
//# sourceMappingURL=index.js.map