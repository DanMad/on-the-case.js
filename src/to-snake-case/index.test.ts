describe('toSnakeCase', () => {
  beforeAll(() => {
    require('../index');
  });

  it('Supports empty strings', () => {
    expect(''.toSnakeCase()).toBe('');
  });

  it('Supports camel case transformation', () => {
    expect('  fooBarBaz '.toSnakeCase()).toBe('  foo_bar_baz ');
  });

  it('Supports kebab case transformation', () => {
    expect('$ baz-qux-123-  '.toSnakeCase()).toBe(' baz_qux_123  ');
  });

  it('Supports pascal case transformation', () => {
    expect('Thud456Corgy'.toSnakeCase()).toBe('thud_456_corgy');
  });

  it('Supports sentence case transformation', () => {
    expect('Corgy % qui  qux'.toSnakeCase()).toBe('corgy_qui_qux');
  });

  it('Supports title case transformation', () => {
    expect('12,345 Corgies Thudding Foo.'.toSnakeCase()).toBe(
      '12_345_corgies_thudding_foo',
    );
  });
});
