const toKebabCase = (string: string): string => string
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
  .map((word: string): string => word.toLowerCase())
  .join('-');

export { toKebabCase as default };
