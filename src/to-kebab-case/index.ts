function toKebabCase(): string {
  return (
    String(this)
      // 'fooBar' => 'foo-Bar'
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      // 'BARBaz' => 'BAR-Baz'
      .replace(/([A-Z]+)([A-Z](?=[a-z]))/g, '$1-$2')
      // 'bar100' => 'bar-100'
      .replace(/([a-z])([\d])/gi, '$1-$2')
      // '100baz' => '100-baz'
      .replace(/([\d])([a-z])/gi, '$1-$2')
      // 'thud, qui & foo' => 'thud-qui-foo'
      .replace(/([a-z\d])[^a-z\d]+(?=[a-z\d])/gi, '$1-')
      // ' $*%foo-Bar@#! ' => ' foo-Bar '
      .replace(
        /(^[^a-z\d]+(?=[a-z\d])|[^a-z\d]+$)/gi,
        (_: string, $1: string): string => $1.replace(/\S/g, ''),
      )
      // ' foo-Bar-Baz ' => ' foo-bar-baz '
      .toLowerCase()
  );
}

export { toKebabCase as default };
