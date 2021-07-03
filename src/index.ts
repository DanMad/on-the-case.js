import toKebabCase from "./to-kebab-case";

if ('toKebabCase' in String) {
  console.error(
    'Error from onTheCase.js:\n' +
    'toKebabCase could not be written to JavaScript\s String object because' +
    'toKebabCase already exists. Consider using toKebabCase as a global' +
    'function instead.'
  );
} else {
  String.prototype.toKebabCase = toKebabCase;
}

