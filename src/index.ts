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
  if (func in String.prototype) {
    if (process.env.NODE_ENV !== 'test') {
      console.error(
        `On The Case:\n${func} could not be written to JavaScript\'s String object because a function with this name already exists.`,
      );
    }
  } else {
    String.prototype[func] = funcs[func];
  }
});
