global.String.prototype.toCamelCase = () => 'foo';
global.String.prototype.toKebabCase = () => 'bar';
global.String.prototype.toPascalCase = () => 'baz';
global.String.prototype.toSnakeCase = () => 'qui';
global.String.prototype.toTitleCase = () => 'thud';

describe('On The Case', () => {
  let spyConsole;

  beforeAll(() => {
    spyConsole = jest.spyOn(console, 'error').mockImplementation(() => jest.fn);
  });

  beforeEach(() => {
    require('./index');
  });

  afterAll(() => {
    spyConsole.mockRestore();
  });

  it('Respects pre-existing toCamelCase prop on the String object', () => {
    expect(''.toCamelCase()).toBe('foo');
  });

  it('Respects pre-existing toKebabCase prop on the String object', () => {
    expect(''.toKebabCase()).toBe('bar');
  });

  it('Respects pre-existing toPascalCase prop on the String object', () => {
    expect(''.toPascalCase()).toBe('baz');
  });

  it('Respects pre-existing toSnakeCase prop on the String object', () => {
    expect(''.toSnakeCase()).toBe('qui');
  });

  it('Respects pre-existing toTitleCase prop on the String object', () => {
    expect(''.toTitleCase()).toBe('thud');
  });

  it('Throws an error when pre-existing props exist on the String object', () => {
    expect(spyConsole).toBeCalledTimes(5);
  });
});
