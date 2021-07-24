import toSnakeCase from './index';

global.String.prototype.toSnakeCase = toSnakeCase;

describe('toSnakeCase', () => {
  it('Supports camel case transformation', () => {
    expect('   fooBarBaz'.toSnakeCase()).toBe('   foo_bar_baz');
  });

  it('Supports kebab case transformation', () => {
    expect('foo-bar-baz   '.toSnakeCase()).toBe('foo_bar_baz   ');
  });

  it('Supports pascal case transformation', () => {
    expect('   FooBarBaz   '.toSnakeCase()).toBe('   foo_bar_baz   ');
  });

  it('Supports sentence case transformation', () => {
    expect('Foo bar  baz'.toSnakeCase()).toBe('foo_bar_baz');
  });

  it('Supports title case transformation', () => {
    expect('Foo Bar Baz'.toSnakeCase()).toBe('foo_bar_baz');
  });
});
