import toCamelCase from './to-camel-case';
import toKebabCase from './to-kebab-case';
import toPascalCase from './to-pascal-case';
import toSnakeCase from './to-snake-case';
import toTitleCase from './to-title-case';

const funcs: Record<string, () => string> = {
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toTitleCase,
};

Object.keys(funcs).map((func: string) => {
  if (`${func}` in String) {
    console.error(
      'Error from onTheCase.js:\n' +
        `${func} could not be written to JavaScript\'s String object because` +
        `${func} already exists. Consider using ${func} as a global` +
        'function instead.',
    );
  } else {
    String.prototype[func] = func;
  }
});
