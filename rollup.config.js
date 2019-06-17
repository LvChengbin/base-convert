import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

export default [ {
    input : 'src/index.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } )
    ],
    output : [
        { file : 'dist/base-convert.cjs.js', format : 'cjs' },
        { file : 'dist/base-convert.js', format : 'umd', name : 'baseConvert' }
    ]
}, {
    input : 'src/index.js',
    plugins : [
        resolve( {
            module : true,
            jsnext : true
        } ),
        buble( {
            transforms : {
                dangerousForOf : true
            }
        } )
    ],
    output : [
        { file : 'dist/base-convert.bc.js', format : 'umd', name : 'baseConvert' }
    ]
} ];
