import substringRegexp from '../substring-regexp';

function toKebabCase(): string {
  if (!String(this).length) {
    return '';
  }

  return String(this)
    .match(substringRegexp)
    .map((subStr: string): string => subStr.toLowerCase())
    .join('-');
}

export { toKebabCase as default };
