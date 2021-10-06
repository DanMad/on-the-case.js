describe('toCamelCase', () => {
  beforeAll(() => {
    require('../index');
  });

  it('Supports empty strings', () => {
    expect(''.toCamelCase()).toBe('');
  });

  it('Supports kebab case transformation', () => {
    expect('$ baz-qux-123-  '.toCamelCase()).toBe(' bazQux123  ');
  });

  it('Supports pascal case transformation', () => {
    expect('Thud456Corgy*'.toCamelCase()).toBe('thud456Corgy');
  });

  it('Supports sentence case transformation', () => {
    expect('Corgy % qui  qux'.toCamelCase()).toBe('corgyQuiQux');
  });

  it('Supports snake case transformation', () => {
    expect('_789_bar_thud_'.toCamelCase()).toBe('789BarThud');
  });

  it('Supports title case transformation', () => {
    expect('12,345 Corgies Thudding Foo.'.toCamelCase()).toBe(
      '12345CorgiesThuddingFoo',
    );
  });
});
