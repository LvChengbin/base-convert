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
        var result = '';
        var l = str.length;
        var newlen = 0;
        var value;
        var nibbles = [];

        for( var i = 0; i < l; i += 1 ) {
            nibbles[ i ] = characters.indexOf( str.charAt( i ) );
        }
        do {
            newlen = value = 0;
            for( var i$1 = 0; i$1 < l; i$1 += 1 ) {
                value = value * from + nibbles[ i$1 ];
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

    convert.bin2dec = function (n) { return convert( n, 2, 10 ); };
    convert.dec2bin = function (n) { return convert( n, 10, 2 ); };
    convert.bin2hex = function (n) { return convert( n, 2, 16 ); };
    convert.hex2bin = function (n) { return convert( n, 16, 2 ); };
    convert.dec2hex = function (n) { return convert( n, 10, 16 ); };
    convert.hex2dec = function (n) { return convert( n, 16, 10 ); };

    return convert;

}));
