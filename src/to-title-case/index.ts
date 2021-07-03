const lowerCaseWords: string[] = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'in',
  'into',
  'nor',
  'of',
  'on',
  'onto',
  'or',
  'the',
  'to',
  'with',
];

function toTitleCase(): string {
  let str: string = this.replace(
    /([^\W_]+[^\s-]*) */g,
    (subStr: string) =>
      subStr.charAt(0).toUpperCase() + subStr.substr(1).toLowerCase(),
  );

  lowerCaseWords.map((lowerCaseWord: string) => {
    str = str.replace(
      new RegExp(`\\s${lowerCaseWord}\\s`, 'gi'),
      (subStr: string) => subStr.toLowerCase(),
    );
  });

  return str;
}

export { toTitleCase as default };
