describe('toKebabCase', () => {
  beforeAll(() => {
    require('../index');
  });

  it('Supports empty strings', () => {
    expect(''.toKebabCase()).toBe('');
  });

  it('Supports camel case transformation', () => {
    expect('  fooBarBaz '.toKebabCase()).toBe('  foo-bar-baz ');
  });

  it('Supports pascal case transformation', () => {
    expect('Thud456Corgy'.toKebabCase()).toBe('thud-456-corgy');
  });

  it('Supports sentence case transformation', () => {
    expect('Corgy % qui  qux'.toKebabCase()).toBe('corgy-qui-qux');
  });

  it('Supports snake case transformation', () => {
    expect('_789_bar_thud_'.toKebabCase()).toBe('789-bar-thud');
  });

  it('Supports title case transformation', () => {
    expect('12,345 Corgies Thudding Foo.'.toKebabCase()).toBe(
      '12-345-corgies-thudding-foo',
    );
  });
});
