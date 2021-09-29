import substringRegexp from '../substring-regexp';

function toPascalCase(): string {
  if (!String(this).length) {
    return '';
  }

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
