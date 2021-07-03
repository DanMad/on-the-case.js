function toSnakeCase(): string {
  const str = String(this);

  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((subStr: string): string => subStr.toLowerCase())
    .join('_');
}

export { toSnakeCase as default };
