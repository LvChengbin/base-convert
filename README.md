# @lvchengbin/base-convert

Convert string in any base.

## Installation

```sh
$ npm i --save @lvchengbin/base-convert
```

## Usage

```js
const convert = require( '@lvchengbin/base-convert' );
convert( 15, 10, 16 ); // f

convert( '8492340923842348230482304823', 10, 62 ) ); // b2LE4AbMjns5UHxZ
convert( 'b2LE4AbMjns5UHxZ', 62, 10 ) ); // 8492340923842348230482304823

convert.bin2hex( '1010' ); // equal to convert( '1010', 2, 16 )
```

## API

**Caveat** the frist argument will be convert to string before converting to other base, this will cause that a number, such as 11001101, will be treated as a `binary` instead of a `decimalism` if the `fromBase` is set to `2`. To set the `fromBase` to `10` if you want to use 11001101 as a decimalism.

### convert( string, fromBase, toBase, characters );

```js
convert( 5, 10, 3 );
convert( 12, 3, 10 );
convert( '@^$%^', 10, 16, '!@#$%^&*()_+|-=`~' );
```

### convert.bin2dec( string );

```js
convert.bin2dec( '101011' ); // 43
convert.bin2dec( 10110101 ); // 181
```

### convert.dec2bin( string );

```js
convert.dec2bin( 43 ); // 101011
convert.dec2bin( 181 ); // 10110101
```

### convert.bin2hex( string );

```js
convert.bin2hex( 101011 ); // 2b
convert.bin2hex( 10110101 ); // b5
```

### convert.hex2bin( string );

```js
convert.hex2bin( '2b' ); // 101011
convert.hex2bin( 'b5' ); // 10110101
```

### convert.dec2hex( string );

```js
convert.dec2hex( 43 ); // 2b
convert.dec2hex( 181 ); // b5
```

### convert.hex2dec( string );

```js
convert.hex2dec( '2b' ); // 43
convert.hex2dec( 'b5' ); // 181
```
