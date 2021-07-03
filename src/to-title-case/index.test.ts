import toTitleCase from './index';

global.String.prototype.toTitleCase = toTitleCase;

describe('toTitleCase', () => {
  it('Supports sentence case transformation', () => {
    expect('the foo bar And BAZ'.toTitleCase()).toBe('The Foo Bar and Baz');
  });
});
