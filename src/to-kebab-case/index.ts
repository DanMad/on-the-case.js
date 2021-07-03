function toKebabCase(): string {
  const string = String(this);

  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((subString: string): string => subString.toLowerCase())
    .join('-');
}

export { toKebabCase as default };
