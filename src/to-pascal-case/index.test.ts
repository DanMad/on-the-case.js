import toPascalCase from './index';

global.String.prototype.toPascalCase = toPascalCase;

describe('toPascalCase', () => {
  it('Supports camel case transformation', () => {
    expect(' fooBarBaz '.toPascalCase()).toBe(' FooBarBaz ');
  });

  it('Supports kebab case transformation', () => {
    expect('  foo-bar-baz'.toPascalCase()).toBe('  FooBarBaz');
  });

  it('Supports sentence case transformation', () => {
    expect('Foo bar  baz  '.toPascalCase()).toBe('FooBarBaz  ');
  });

  it('Supports snake case transformation', () => {
    expect('foo_bar_baz'.toPascalCase()).toBe('FooBarBaz');
  });

  it('Supports title case transformation', () => {
    expect('Foo Bar Baz'.toPascalCase()).toBe('FooBarBaz');
  });
});
