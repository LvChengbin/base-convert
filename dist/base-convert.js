(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.baseConvert = factory());
}(this, function () { 'use strict';

    /******************************************************************
     * Copyright (C) 2019 LvChengbin
     * 
     * File：index.js
     * Author ：LvChengbin<lvchengbin59@gmail.com>
     * Time ：05/06/2019
     * Description ：
     ******************************************************************/

    function convert( str, from, to, characters ) {
        if( !characters ) {
            characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-+=';
        }
        if( from > characters.length || to > characters.length ) {
            throw new TypeError( 'Cannot convert the string to the target base, because the candidate characters is not enough.' );
        }
        str = String( str );
        let result = '';
        let l = str.length;
        let newlen = 0;
        let value;
        const nibbles = [];

        for( let i = 0; i < l; i += 1 ) {
            nibbles[ i ] = characters.indexOf( str.charAt( i ) );
        }
        do {
            newlen = value = 0;
            for( let i = 0; i < l; i += 1 ) {
                value = value * from + nibbles[ i ];
                if( value >= to ) {
                    nibbles[ newlen++ ] = ~~( value / to );
                    value %= to;
                } else if( newlen > 0 ) {
                    nibbles[ newlen++ ] = 0;
                }
            }
            l = newlen;
            result = characters[ value ] + result;
        } while( newlen != 0 )

        return result;
    }

    convert.bin2dec = n => convert( n, 2, 10 );
    convert.dec2bin = n => convert( n, 10, 2 );
    convert.bin2hex = n => convert( n, 2, 16 );
    convert.hex2bin = n => convert( n, 16, 2 );
    convert.dec2hex = n => convert( n, 10, 16 );
    convert.hex2dec = n => convert( n, 16, 10 );

    return convert;

}));
