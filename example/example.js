( function() {

    'use strict';

    var image = document.createElement( 'img' ),
        filters = document.getElementById( 'filter-selector' ),
        canvas,
        width = 1000,
        height = 1000;

    canvas = new fabric.Canvas( 'example', { width: width, height: height } );

    image.src = 'cat.jpg';
    fabric.Image.fromURL( image.src, function( img ) {
        img.set( {
            left: width / 2,
            top: height / 2,
            scaleX: 0.5,
            scaleY: 0.5,
            originX: 'center',
            originY: 'center'
        } );

        canvas.add( img );

        filters.onchange = function() {
            switch ( filters.value ) {
                case 'vintagePinhole':
                    img.filters.splice( 0, 1, new fabric.Image.filters.ColorMatrix( {
                        matrix: [
                            0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123,
                            0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591,
                            0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
                            0, 0, 0, 1, 0
                        ]
                    } ) );
                    break;

                case 'kodachrome':
                    img.filters.splice( 0, 1, new fabric.Image.filters.ColorMatrix( {
                        matrix: [
                            1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
                            -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
                            -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
                            0, 0, 0, 1, 0
                        ]
                    } ) );
                    break;

                case 'technicolor':
                    img.filters.splice( 0, 1, new fabric.Image.filters.ColorMatrix( {
                        matrix: [
                            1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337,
                            -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398,
                            -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138,
                            0, 0, 0, 1, 0
                        ]
                    } ) );
                    break;
                default:
                    img.filters.length = 0;
                    break;
            }
            img.applyFilters( canvas.renderAll.bind( canvas ) );
            console.log( canvas.toJSON() );
        };
    } );

    canvas.renderAll();

} )();
