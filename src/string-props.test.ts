global.String.prototype.toCamelCase = () => 'foo';
global.String.prototype.toKebabCase = () => 'bar';
global.String.prototype.toPascalCase = () => 'baz';
global.String.prototype.toSnakeCase = () => 'qui';
global.String.prototype.toTitleCase = () => 'thud';

describe('When String props do exist.', () => {
  let spyConsole: jest.SpyInstance;

  beforeAll(() => {
    spyConsole = jest.spyOn(console, 'error').mockImplementation(() => jest.fn);
  });

  beforeEach(() => {
    require('./index');
  });

  afterAll(() => {
    spyConsole.mockRestore();
  });

  it("toCamelCase isn't added to JavaScript's String object", () => {
    expect(''.toCamelCase()).toBe('foo');
  });

  it("toKebabCase isn't added to JavaScript's String object", () => {
    expect(''.toKebabCase()).toBe('bar');
  });

  it("toPascalCase isn't added to JavaScript's String object", () => {
    expect(''.toPascalCase()).toBe('baz');
  });

  it("toSnakeCase isn't added to JavaScript's String object", () => {
    expect(''.toSnakeCase()).toBe('qui');
  });

  it("toTitleCase isn't added to JavaScript's String object", () => {
    expect(''.toTitleCase()).toBe('thud');
  });

  it('Throws an error when pre-existing props exist on the String object', () => {
    expect(spyConsole).toBeCalledTimes(5);
  });
});
