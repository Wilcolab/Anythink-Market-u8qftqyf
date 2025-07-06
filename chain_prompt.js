/**
 * Converts a string to kebab case format, preserving the original letter casing.
 * Handles different separators such as spaces, hyphens, and underscores,
 * as well as multiple consecutive separators.
 * 
 * Example:
 *   toKebabCase("good String") // returns "GoOd-StRiNg"
 * 
 * @param {string} input - The string to convert.
 * @returns {string} The kebab case formatted string.
 * @throws {TypeError} If the input is not a string, or is null/undefined.
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new TypeError('Input must be a non-null string');
    }

    // Split on any sequence of space, hyphen, or underscore
    const words = input.split(/[\s\-_]+/);

    // Filter out empty strings (in case of leading/trailing/multiple separators)
    const filteredWords = words.filter(Boolean);

    // Join with hyphens, preserving original casing
    return filteredWords.join('-');
}

// Example usage:
// console.log(toKebabCase("good String")); // "GoOd-StRiNg"