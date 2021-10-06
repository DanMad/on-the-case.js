function toCamelCase(): string {
  return (
    String(this)
      // '100foo' => '100Foo'
      .replace(
        /(\d)([a-z])/g,
        (_: string, $1: string, $2: string) => $1 + $2.toUpperCase(),
      )
      // 'f  o_o-barBaz' => 'F  O_O-BarBaz'
      .replace(
        /[a-z\d]+[^a-z\d]*/gi,
        (match) => match.charAt(0).toUpperCase() + match.substr(1),
      )
      // 'F  O_O-BarBaz' => 'FOOBarBaz'
      .replace(/([a-z\d]+)[^a-z\d]+(?=[a-z\d])/gi, '$1')
      // ' $*%FooBar@#! ' => ' FooBar '
      .replace(
        /(^[^a-z\d]+(?=[a-z\d])|[^a-z\d]+$)/gi,
        (_: string, $1: string): string => $1.replace(/\S/g, ''),
      )
      // ' FooBar ' => ' fooBar '
      .replace(/^\s*[A-Z]/, (match: string): string => match.toLowerCase())
  );
}

export { toCamelCase as default };
