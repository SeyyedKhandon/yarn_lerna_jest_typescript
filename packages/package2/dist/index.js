"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mul = void 0;
const common_1 = __importDefault(require("@yarn_lerna_jest_typescript/common"));
const mul = (a, b) => a * b;
exports.mul = mul;
common_1.default(`mul(2,10): ${mul(2, 10).toString()}`);
exports.default = mul;
//# sourceMappingURL=index.js.map