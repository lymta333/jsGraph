
requirejs.config({
	paths: {
		'jquery': './lib/components/jquery/dist/jquery.min'
	}
});

require( [ 'src/graph' ] , function( Graph ) {

	var functions = [

function( domGraph ) {

	var graph = new Graph( domGraph );
	
	graph.newSerie("serieTest")
		.setLabel( "My serie" )
		.autoAxis()
		.setData( [ [1, 2], [2, 5], [3, 10] ] )
		.showMarkers( true )
		.setMarkerType( 1 );

	graph.newSerie("serieTest_2")
		.setLabel( "My serie 2" )
		.autoAxis()
		.setData( [ [2, 4], [3, 1], [5, 20] ] )
		.setLineColor('red');


	graph.makeLegend({
		frame: true,
		frameWidth: 1,
		frameColor: "black",
		backgroundColor: "rgba(100, 100, 100, 0.5)"
	});

	graph.redraw( );
	graph.drawSeries();	
},


function( domGraph ) {

	var graph = new Graph( domGraph, {

		plugins: {
			'./graph.plugin.zoom': { zoomMode: 'x' },
			'./graph.plugin.drag': {}
		},

		keyCombinations: {
			'./graph.plugin.drag': { shift: true, ctrl: false },
			'./graph.plugin.zoom': { shift: false, ctrl: false }
		}
	} );
	
	graph.newSerie("serieTest_2")
		.setLabel( "My serie" )
		.autoAxis()
		.setData( [ [2, 4], [3, 1], [5, 20] ] )
		.setLineColor('red');

	graph.redraw( );
	graph.drawSeries();	
}



	]



	for( var i = 0, l = functions.length ; i < l ; i ++ ) {

		functions[ i ]("example-" + ( i + 1 ) + "-graph");
		$("#example-" + ( i + 1 ) + "-source").html( functions[ i ].toString() );

	}




} );