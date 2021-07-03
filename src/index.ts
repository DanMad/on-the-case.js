import toKebabCase from "./to-kebab-case";
import toTitleCase from "./to-title-case";

const funcs: Record<string, (string: string) => string> = {
  toKebabCase,
  toTitleCase,
}

Object.keys(funcs).map((func) => {
  if (`${func}` in String) {
    console.error(
      'Error from onTheCase.js:\n' +
      `${func} could not be written to JavaScript\s String object because` +
      `${func} already exists. Consider using ${func} as a global` +
      'function instead.'
    );
  } else {
    String.prototype[func] = func;
  };
});
