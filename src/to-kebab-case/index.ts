function toKebabCase(): string {
  return this.match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((subStr: string): string => subStr.toLowerCase())
    .join('-');
}

export { toKebabCase as default };
