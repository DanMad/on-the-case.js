declare global {
  interface String {
    toCamelCase(): string;
    toKebabCase(): string;
    toPascalCase(): string;
    toSnakeCase(): string;
    toTitleCase(): string;
  }
}

export {};
