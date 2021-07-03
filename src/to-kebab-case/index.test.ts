import toKebabCase from './index';

describe('toKebabCase', () => {
  it('should transform a string', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case');
  });
});
