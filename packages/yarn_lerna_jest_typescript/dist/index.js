"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mul = exports.add = void 0;
const package1_1 = __importDefault(require("@yarn_lerna_jest_typescript/package1"));
exports.add = package1_1.default;
const package2_1 = __importDefault(require("@yarn_lerna_jest_typescript/package2"));
exports.mul = package2_1.default;
// import { add } from "@yarn_lerna_jest_typescript/common";
exports.default = {
    add: package1_1.default,
    mul: package2_1.default
};
//# sourceMappingURL=index.js.map