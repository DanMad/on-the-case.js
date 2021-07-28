import toCamelCase from './to-camel-case';
import toKebabCase from './to-kebab-case';
import toPascalCase from './to-pascal-case';
import toSnakeCase from './to-snake-case';
import toTitleCase from './to-title-case';

describe("When String props don't exist.", () => {
  beforeAll(() => {
    require('./index');
  });

  it("toCamelCase is added to JavaScript's String object", () => {
    expect(global.String.prototype.toCamelCase).toEqual(toCamelCase);
  });

  it("toKebabCase is added to JavaScript's String object", () => {
    expect(global.String.prototype.toKebabCase).toEqual(toKebabCase);
  });

  it("toPascalCase is added to JavaScript's String object", () => {
    expect(global.String.prototype.toPascalCase).toEqual(toPascalCase);
  });

  it("toSnakeCase is added to JavaScript's String object", () => {
    expect(global.String.prototype.toSnakeCase).toEqual(toSnakeCase);
  });

  it("toTitleCase is added to JavaScript's String object", () => {
    expect(global.String.prototype.toTitleCase).toEqual(toTitleCase);
  });
});
