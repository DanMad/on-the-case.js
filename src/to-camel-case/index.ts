import substringRegexp from '../substring-regexp';

function toCamelCase(): string {
  return String(this)
    .match(substringRegexp)
    .map((subStr: string, i: number): string =>
      i === 0
        ? subStr.toLowerCase()
        : subStr.charAt(0).toUpperCase() + subStr.substr(1).toLowerCase(),
    )
    .join('');
}

export { toCamelCase as default };
