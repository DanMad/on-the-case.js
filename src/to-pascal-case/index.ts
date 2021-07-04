function toPascalCase(): string {
  return String(this)
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map(
      (subStr: string): string =>
        subStr[0].toUpperCase() + subStr.substr(1).toLowerCase(),
    )
    .join('');
}

export { toPascalCase as default };
