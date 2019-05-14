# @lvchengbin/base-convert

Convert string in any base.

## Installation

```sh
$ npm i --save @lvchengbin/base-convert
```

## Usage

```js
const convert = require( '@lvchengbin/base-convert' );
convert( 15, 10, 16 ); // output f
convert.bin2hex( '1010' ); // equal to convert( '1010', 2, 16 )
```
