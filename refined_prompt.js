/**
 * Converts a given string to camelCase.
 *
 * Splits the input string by any non-alphanumeric characters (spaces, underscores, hyphens, commas),
 * lowercases the first word, and capitalizes the first letter of each subsequent word.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is not a string, or is null or undefined.
 *
 * @example
 * toCamelCase("first name"); // returns "firstName"
 * toCamelCase("user_id"); // returns "userId"
 * toCamelCase("SCREEN_NAME"); // returns "screenName"
 * toCamelCase("mobile-number"); // returns "mobileNumber"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Split by any non-alphanumeric character(s)
    const words = input
        .split(/[\s_\-,]+/)
        .filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

/**
 * Converts a given string to dot.case.
 *
 * Splits the input string by non-alphanumeric characters or camelCase boundaries,
 * lowercases all words, and joins them with dots.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is not a string, or is null or undefined.
 *
 * @example
 * toDotCase("first name"); // returns "first.name"
 * toDotCase("user_id"); // returns "user.id"
 * toDotCase("SCREEN_NAME"); // returns "screen.name"
 * toDotCase("mobile-number"); // returns "mobile.number"
 * toDotCase("camelCaseString"); // returns "camel.case.string"
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Split by non-alphanumeric characters or camelCase boundaries
    const words = input
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to space
        .split(/[\s_\-,.]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());

    return words.join('.');
}
