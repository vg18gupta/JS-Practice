/**
 * @param {*} value
 * @return {string}
 */
export default function jsonStringify(value) {
  if (value === null) return "null";

  // Handle primitives
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (typeof value === "string") {
    // Escape quotes and special characters
    return '"' + value.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const arrValues = value.map(item => {
      // JSON.stringify converts undefined, function, or symbol to null in arrays
      if (typeof item === "undefined" || typeof item === "function" || typeof item === "symbol") {
        return "null";
      }
      return jsonStringify(item);
    });
    return `[${arrValues.join(",")}]`;
  }

  // Handle objects
  if (typeof value === "object") {
    const objValues = [];
    for (let key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const v = value[key];
        // JSON.stringify ignores undefined, functions, and symbols in objects
        if (typeof v !== "undefined" && typeof v !== "function" && typeof v !== "symbol") {
          objValues.push(jsonStringify(key) + ":" + jsonStringify(v));
        }
      }
    }
    return `{${objValues.join(",")}}`;
  }

  // For functions or symbols at the top level, return undefined
  return undefined;
}