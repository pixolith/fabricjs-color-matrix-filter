/*
 * fabric.js Color Matrix Filter
 * https://github.com/pixolith/fabricjs-color-matrix-filter
 *
 * Simon Kunz 15.07.2015 for pixolith
 * Licensed under the MIT license.
 */
( function( global ) {

    'use strict';

    var fabric = global.fabric || ( global.fabric = {} );

    fabric.Image.filters.ColorMatrix = fabric.util.createClass( fabric.Image.filters.BaseFilter, {

        type: 'ColorMatrix',

        initialize: function( options ) {
            options || ( options = {} );
            this.matrix = options.matrix || [
                    1, 0, 0, 0, 0,
                    0, 1, 0, 0, 0,
                    0, 0, 1, 0, 0,
                    0, 0, 0, 1, 0
                ];
        },

        applyTo: function( canvasEl ) {
            var context = canvasEl.getContext( '2d' ),
                imageData = context.getImageData( 0, 0, canvasEl.width, canvasEl.height ),
                data = imageData.data,
                iLen = data.length,
                i,
                r,
                g,
                b,
                a,
                m = this.matrix;

            for ( i = 0; i < iLen; i += 4 ) {
                r = data[ i ];
                g = data[ i + 1 ];
                b = data[ i + 2 ];
                a = data[ i + 3 ];

                data[ i ] = r * m[ 0 ] + g * m[ 1 ] + b * m[ 2 ] + a * m[ 3 ] + m[ 4 ];
                data[ i + 1 ] = r * m[ 5 ] + g * m[ 6 ] + b * m[ 7 ] + a * m[ 8 ] + m[ 9 ];
                data[ i + 2 ] = r * m[ 10 ] + g * m[ 11 ] + b * m[ 12 ] + a * m[ 13 ] + m[ 14 ];
                data[ i + 3 ] = r * m[ 15 ] + g * m[ 16 ] + b * m[ 17 ] + a * m[ 18 ] + m[ 19 ];
            }

            context.putImageData( imageData, 0, 0 );
        },

        toJSON: function() {
            return {
                type: this.type,
                matrix: this.matrix
            };
        },

        toObject: function() {
            return fabric.util.object.extend( this.callSuper( 'toObject' ), {
                type: this.type,
                matrix: this.matrix
            } );
        }
    } );

    fabric.Image.filters.ColorMatrix.fromObject = function( object ) {
        return new fabric.Image.filters.ColorMatrix( object );
    };

} )( typeof exports !== 'undefined' ? exports : this );
