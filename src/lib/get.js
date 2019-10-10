/**
 * Safely gets nested properties from an object
 * @param {Array<string>} props List of properties
 * @param {object} object Object to query
 * @returns {*} value
 */
export const get = ([prop, ...rest], object) =>
  prop == null ? object
  : object == null ? undefined
  : get(rest, object[prop]); // prettier-ignore
