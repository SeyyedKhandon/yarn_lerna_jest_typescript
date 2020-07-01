"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonFunction2 = exports.myfunc = exports.add = void 0;
const package1_1 = require("@yarn_lerna_jest_typescript/package1");
Object.defineProperty(exports, "myfunc", { enumerable: true, get: function () { return package1_1.myfunc; } });
const package2_1 = __importDefault(require("@yarn_lerna_jest_typescript/package2"));
exports.commonFunction2 = package2_1.default;
const common_1 = require("@yarn_lerna_jest_typescript/common");
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return common_1.add; } });
exports.default = {
    add: common_1.add,
    myfunc: package1_1.myfunc,
    commonFunction2: package2_1.default
};
//# sourceMappingURL=index.js.map