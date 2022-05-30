/** @format */

export function isString(value: any): value is string {
    return typeof value === "string";
}

export function isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}

export function isFunction(value: any): value is Function {
    return typeof value === "function";
}

export function isNumber(value: any): value is number {
    return typeof value === "number";
}

export function isObject(value: any): value is object {
    return typeof value === "object";
}

export function isSymbol(value: any): value is symbol {
    return typeof value === "symbol";
}

export function isUndefined(value: any): value is undefined {
    return typeof value === "undefined";
}

export function isArray(value: any): boolean {
    return Array.isArray(value);
}
