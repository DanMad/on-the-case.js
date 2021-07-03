import toCamelCase from './index';

global.String.prototype.toCamelCase = toCamelCase;

describe('toCamelCase', () => {
  it('Supports kebab case transformation', () => {
    expect('foo-bar-baz'.toCamelCase()).toBe('fooBarBaz');
  });

  it('Supports pascal case transformation', () => {
    expect('FooBarBaz'.toCamelCase()).toBe('fooBarBaz');
  });

  it('Supports sentence case transformation', () => {
    expect('Foo bar  baz'.toCamelCase()).toBe('fooBarBaz');
  });

  it('Supports snake case transformation', () => {
    expect('foo_bar_baz'.toCamelCase()).toBe('fooBarBaz');
  });

  it('Supports title case transformation', () => {
    expect('Foo Bar Baz'.toCamelCase()).toBe('fooBarBaz');
  });
});
