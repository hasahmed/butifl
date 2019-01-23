"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Butifl {
    static assignDefined(target, source) {
        for (let key in source) {
            if (source[key])
                target[key.toString()] = source[key];
        }
        return target;
    }
    static assignExisting(target, source, skipFalsey = true) {
        for (let key in source) {
            if (target.hasOwnProperty(key)) {
                if (!skipFalsey) {
                    target[key.toString()] = source[key];
                }
                else {
                    if (source[key]) {
                        target[key.toString()] = source[key];
                    }
                }
            }
        }
        return target;
    }
}
exports.Butifl = Butifl;
//# sourceMappingURL=butifl.js.map