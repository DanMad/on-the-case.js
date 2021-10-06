function toSnakeCase(): string {
  return (
    String(this)
      // 'fooBar' => 'foo_Bar'
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      // 'BARBaz' => 'BAR_Baz'
      .replace(/([A-Z]+)([A-Z](?=[a-z]))/g, '$1_$2')
      // 'bar100' => 'bar_100'
      .replace(/([a-z])([\d])/gi, '$1_$2')
      // '100baz' => '100_baz'
      .replace(/([\d])([a-z])/gi, '$1_$2')
      // 'thud, qui & foo' => 'thud_qui_foo'
      .replace(/([a-z\d])[^a-z\d]+(?=[a-z\d])/gi, '$1_')
      // ' $*%foo_Bar@#! ' => ' foo_Bar '
      .replace(
        /(^[^a-z\d]+(?=[a-z\d])|[^a-z\d]+$)/gi,
        (_: string, $1: string): string => $1.replace(/\S/g, ''),
      )
      // ' foo_Bar_Baz ' => ' foo_bar_baz '
      .toLowerCase()
  );
}

export { toSnakeCase as default };
