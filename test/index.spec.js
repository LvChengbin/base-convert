const convert = require( '../src' );

describe( 'base-convert', () => {

    it( 'convert', () => {
        expect( convert( 5, 10, 3 ) ).toEqual( '12' );    
        expect( convert( 12, 3, 10 ) ).toEqual( '5' );    
    } );

    it( 'custom characters', () => {
        expect( convert( '@^', 10, 16, '!@#$%^&*()_+|-=`~' ) ).toEqual( '`' );    
    } );

    it( 'long strings', () => {
        expect( convert( '8492340923842348230482304823', 10, 16 ) ).toEqual( '1b70b323f4b3fe618d1f9f37' ); 
        expect( convert( '1b70b323f4b3fe618d1f9f37', 16, 10 ) ).toEqual( '8492340923842348230482304823' ); 

        expect( convert( '8492340923842348230482304823', 10, 62 ) ).toEqual( 'b2LE4AbMjns5UHxZ' ); 
        expect( convert( 'b2LE4AbMjns5UHxZ', 62, 10 ) ).toEqual( '8492340923842348230482304823' ); 

        expect( convert( '127399629618101871061164714369415138889690993275437627420444094492320543272307283661358790533838050723166537248941870298278768240542968408532693894495600991462888770154271773743688518108469133360749226067433284253841524878382663213020300439013395051660095465213244114983915020095532593844192661702194876809221', 10, 16 ) ).toEqual( 'b56c4feeef1b045dbe704ad8551d8a770dc14500f53b1a10ddd7f7bb7a65547f60d216bbbd12a57878d6b3504eba1748277a226f2a7c1da23622d859a2ae3a0bd4d21b8a0e5a89a9e49affdb3f04e29b75c18dc58c05a1f3b5925ea1444919e490b4e9efe45db2206df92376b8b2d4afa306f59e038fb88205211125443a8005' );

        expect( convert( '127399629618101871061164714369415138889690993275437627420444094492320543272307283661358790533838050723166537248941870298278768240542968408532693894495600991462888770154271773743688518108469133360749226067433284253841524878382663213020300439013395051660095465213244114983915020095532593844192661702194876809221', 10, 64 ) ).toBe( 'blIj_XL6MhtLD1aS5ktyDsdMkk0ZjIq4dTnZXJWplh-od8mKXQiFnxURHdgjHEni2tW8CYGv1SydybomqaKewLkQxKa3BG9Guiq-ZI-1earts6dNoM5EveRABWxh4ApV92QWu-Anr8wrvAztHyORa_z1Lmu0U_Uwwkx4il4eE05' );

        expect( convert( 'blIj_XL6MhtLD1aS5ktyDsdMkk0ZjIq4dTnZXJWplh-od8mKXQiFnxURHdgjHEni2tW8CYGv1SydybomqaKewLkQxKa3BG9Guiq-ZI-1earts6dNoM5EveRABWxh4ApV92QWu-Anr8wrvAztHyORa_z1Lmu0U_Uwwkx4il4eE05', 64, 10 ) ).toBe( '127399629618101871061164714369415138889690993275437627420444094492320543272307283661358790533838050723166537248941870298278768240542968408532693894495600991462888770154271773743688518108469133360749226067433284253841524878382663213020300439013395051660095465213244114983915020095532593844192661702194876809221' );

        expect( convert( 'b56c4feeef1b045dbe704ad8551d8a770dc14500f53b1a10ddd7f7bb7a65547f60d216bbbd12a57878d6b3504eba1748277a226f2a7c1da23622d859a2ae3a0bd4d21b8a0e5a89a9e49affdb3f04e29b75c18dc58c05a1f3b5925ea1444919e490b4e9efe45db2206df92376b8b2d4afa306f59e038fb88205211125443a8005', 16, 10 ) ).toEqual( '127399629618101871061164714369415138889690993275437627420444094492320543272307283661358790533838050723166537248941870298278768240542968408532693894495600991462888770154271773743688518108469133360749226067433284253841524878382663213020300439013395051660095465213244114983915020095532593844192661702194876809221' );
    } );

    it( 'bin2dec', () => {
        expect( convert.bin2dec( 1 ) ).toEqual( '1' ); 
        expect( convert.bin2dec( 0 ) ).toEqual( '0' ); 
        expect( convert.bin2dec( 10 ) ).toEqual( '2' ); 
        expect( convert.bin2dec( '101011' ) ).toEqual( '43' ); 
    } );

    it( 'dec2bin', () => {
        expect( convert.dec2bin( 1 ) ).toEqual( '1' ); 
        expect( convert.dec2bin( 0 ) ).toEqual( '0' ); 
        expect( convert.dec2bin( 2 ) ).toEqual( '10' ); 
        expect( convert.dec2bin( '43' ) ).toEqual( '101011' ); 
    } );

    it( 'bin2hex', () => {
        expect( convert.bin2hex( '101011' ) ).toEqual( '2b' ); 
    } );

    it( 'hex2bin', () => {
        expect( convert.hex2bin( '2b' ) ).toEqual( '101011' ); 
    } );

    it( 'dec2hex', () => {
        expect( convert.dec2hex( 15 ) ).toEqual( 'f' ); 
        expect( convert.dec2hex( 100 ) ).toEqual( '64' ); 
        expect( convert.dec2hex( 111111 ) ).toEqual( '1b207' ); 
    } );

    it( 'hex2dec', () => {
        expect( convert.hex2dec( 'f' ) ).toEqual( '15' ); 
        expect( convert.hex2dec( 64 ) ).toEqual( '100' ); 
        expect( convert.hex2dec( '1b207' ) ).toEqual( '111111' ); 
    } );
} );
