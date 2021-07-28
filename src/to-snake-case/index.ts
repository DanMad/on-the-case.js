import substringRegexp from '../substring-regexp';

function toSnakeCase(): string {
  return String(this)
    .match(substringRegexp)
    .map((subStr: string): string => subStr.toLowerCase())
    .join('_');
}

export { toSnakeCase as default };
