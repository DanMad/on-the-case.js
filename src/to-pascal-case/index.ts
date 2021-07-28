import substringRegexp from '../substring-regexp';

function toPascalCase(): string {
  return String(this)
    .match(substringRegexp)
    .map((subStr: string): string =>
      subStr
        .toLowerCase()
        .replace(/^(\s+)?[\w\d]/, (match: string): string =>
          match.toUpperCase(),
        ),
    )
    .join('');
}

export { toPascalCase as default };
