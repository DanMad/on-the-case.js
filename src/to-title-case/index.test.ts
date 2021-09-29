describe('toTitleCase', () => {
  beforeAll(() => {
    require('../index');
  });

  it('Supports empty strings', () => {
    expect(''.toTitleCase()).toBe('');
  });

  it('Supports sentence case transformation', () => {
    expect('   the foo bar And BAZ   '.toTitleCase()).toBe(
      '   the Foo Bar and Baz   ',
    );
  });
});
