describe('toPascalCase', () => {
  beforeAll(() => {
    require('../index');
  });

  it('Supports empty strings', () => {
    expect(''.toPascalCase()).toBe('');
  });

  it('Supports camel case transformation', () => {
    expect('  fooBarBaz '.toPascalCase()).toBe('  FooBarBaz ');
  });

  it('Supports kebab case transformation', () => {
    expect('$ baz-qux-123-  '.toPascalCase()).toBe(' BazQux123  ');
  });

  it('Supports sentence case transformation', () => {
    expect('Corgy % qui  qux'.toPascalCase()).toBe('CorgyQuiQux');
  });

  it('Supports snake case transformation', () => {
    expect('_789_bar_thud_'.toPascalCase()).toBe('789BarThud');
  });

  it('Supports title case transformation', () => {
    expect('12,345 Corgies Thudding Foo.'.toPascalCase()).toBe(
      '12345CorgiesThuddingFoo',
    );
  });
});
