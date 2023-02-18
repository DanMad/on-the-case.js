# onTheCase.js

_onTheCase.js_ extends JavaScript's native `String` object, including additional
case conversion methods.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Issues](#issues)
- [Contributing](#contributing)

## Getting Started

To use _onTheCase.js_, add it to your project.

```sh
yarn add on-the-case
```

Alternatively, _onTheCase.js_ can be added to your project via CDN.

```html
<script href="https://unpkg.com/on-the-case/index.js"/></script>
```

## Usage

The following case conversion methods are included in _onTheCase.js_.

### Camel Case

The `toCamelCase()` method returns the calling string value converted to camel
case.

#### Examples

```js
'Hello, World!'.toCamelCase();
// => 'helloWorld'

'The quick brown fox jumps over the lazy dog.'.toCamelCase();
// => 'theQuickBrownFoxJumpsOverTheLazyDog'
```

### Kebab Case

The `toKebabCase()` method returns the calling string value converted to kebab
case.

#### Examples

```js
'Hello, World!'.toKebabCase();
// => 'hello-world'

'the-quick-brown-fox-jumps-over-the-lazy-dog.'.toKebabCase();
// => 'the-quick-brown-fox-jumps-over-the-lazy-dog'
```

### Pascal Case

The `toPascalCase()` method returns the calling string value converted to pascal
case.

#### Examples

```js
'Hello, World!'.toPascalCase();
// => 'HelloWorld'

'The quick brown fox jumps over the lazy dog.'.toPascalCase();
// => 'TheQuickBrownFoxJumpsOverTheLazyDog'
```

### Snake Case

The `toSnakeCase()` method returns the calling string value converted to snake
case.

#### Examples

```js
'Hello, World!'.toSnakeCase();
// => 'hello_world'

'The quick brown fox jumps over the lazy dog.'.toSnakeCase();
// => 'the_quick_brown_fox_jumps_over_the_lazy_dog'
```

### Title Case

The `toTitleCase()` method returns the calling string value converted to title
case.

#### Examples

```js
'Hello, World!'.toTitleCase();
// => 'Hello, World!'

'The quick brown fox jumps over the lazy dog.'.toTitleCase();
// => 'The Quick Brown Fox Jumps Over the Lazy Dog.'
```

## Issues

If you encounter any bugs, please
post an issue](https://github.com/DanMad/on-the-case/issues/new).

## Contributing

Contributions are more than welcome. Ensure you read through the
[contributing guidelines](https://github.com/DanMad/on-the-case/blob/main/CONTRIBUTING.md)
before submitting a pull request.
