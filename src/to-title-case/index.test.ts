import toTitleCase from './index';

global.String.prototype.toTitleCase = toTitleCase;

describe('toTitleCase', () => {
  it('Supports camel case transformation', () => {
    expect(' fooBarBaz '.toTitleCase()).toBe(' Foo Bar Baz ');
  });

  it('Supports kebab case transformation', () => {
    expect('  foo-bar-baz'.toTitleCase()).toBe('  Foo Bar Baz');
  });

  it('Supports pascal case transformation', () => {
    expect('FooBarBaz  '.toTitleCase()).toBe('Foo Bar Baz  ');
  });

  it('Supports sentence case transformation', () => {
    expect('Foo bar  baz'.toTitleCase()).toBe('Foo Bar Baz');
  });

  it('Supports snake case transformation', () => {
    expect('foo_bar_baz'.toTitleCase()).toBe('Foo Bar Baz');
  });
});
