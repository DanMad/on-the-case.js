const substringRegexp: RegExp =
  /(^\s+)?[A-Z]{2,}(?=[A-Z][a-z]+|\b)|(^\s+)?[A-Z]?[a-z]+(\s+$)?|(^\s+)?[A-Z](\s+$)?|(^\s+)?[0-9]+(\s+$)?/g;

export { substringRegexp as default };
