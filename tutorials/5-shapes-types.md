<script src="../dist/jquery.min.js"></script>
<script src="../dist/jsgraph.js"></script>

<script>
	
</script>

In the previous tutorial ({@tutorial 4-shapes}) we have shown the basics of shape creation, styling and modifications. Here, we simply showcase the different provided with jsGraph with their specificities.
Let us consider the following graph as a basic:

```
var g = new Graph("example-1") // Creates a new graph
g.resize( 400, 300 ); // Resizes the graph
var s = g.newSerie("employment_nb").setData( [ 1900, 1555, 1910, 1783, 1920, 1872, 1930, 1943, 1941, 1992, 1948, 2378, 1949, 2339, 1950, 2309, 1951, 2437, 1953, 2455, 1954, 2482, 1955, 2533, 1956, 2606, 1957, 2666, 1958, 2644, 1959, 2644, 1960, 2717, 1961, 2644, 1962, 2954, 1963, 2999, 1964, 3046, 1965, 3025, 1966, 3014, 1967, 3030, 1968, 3048, 1969, 3098, 1970, 3143, 1971, 3199, 1972, 3243, 1973, 3277, 1974, 3273, 1975, 3108, 1976, 3019, 1977, 3032, 1978, 3062, 1979, 3095, 1980, 3166, 1981, 3240, 1982, 3256, 1983, 3257, 1984, 3288, 1985, 3354, 1986, 3430, 1987, 3515, 1988, 3607, 1989, 3704, 1990, 3821, 1991, 4136, 1992, 4069, 1993, 4025, 1994, 3999, 1995, 3996, 1996, 3994, 1997, 3991, 1998, 4044, 1999, 4075, 2000, 4116, 2001, 4183, 2002, 4213, 2003, 4198, 2004, 4210, 2005, 4241, 2006, 4328, 2007, 4440, 2008, 4548, 2009, 4588, 2010, 4593, 2011, 4705, 2012, 4776, 2013, 4837, 2014, 4918 ] )
	.autoAxis()
	.setLineColor('purple')
	.setLineWidth( 2 );
	
g.setTitle("Number of employed people in Switzerland (yearly average)");
g.getXAxis().setLabel('Year').gridsOff();
g.getYAxis().setLabel("Number of people (in thousands)").secondaryGridOff();
g.draw();

```

<div id="example-1" class="jsgraph-example"></div>
<script>

function makeGraph( dom ) {

	var g = new Graph( dom ) // Creates a new graph
	g.resize( 400, 300 ); // Resizes the graph
	var s = g.newSerie("employment_nb").setData( [ 1900, 1555, 1910, 1783, 1920, 1872, 1930, 1943, 1941, 1992, 1948, 2378, 1949, 2339, 1950, 2309, 1951, 2437, 1953, 2455, 1954, 2482, 1955, 2533, 1956, 2606, 1957, 2666, 1958, 2644, 1959, 2644, 1960, 2717, 1961, 2644, 1962, 2954, 1963, 2999, 1964, 3046, 1965, 3025, 1966, 3014, 1967, 3030, 1968, 3048, 1969, 3098, 1970, 3143, 1971, 3199, 1972, 3243, 1973, 3277, 1974, 3273, 1975, 3108, 1976, 3019, 1977, 3032, 1978, 3062, 1979, 3095, 1980, 3166, 1981, 3240, 1982, 3256, 1983, 3257, 1984, 3288, 1985, 3354, 1986, 3430, 1987, 3515, 1988, 3607, 1989, 3704, 1990, 3821, 1991, 4136, 1992, 4069, 1993, 4025, 1994, 3999, 1995, 3996, 1996, 3994, 1997, 3991, 1998, 4044, 1999, 4075, 2000, 4116, 2001, 4183, 2002, 4213, 2003, 4198, 2004, 4210, 2005, 4241, 2006, 4328, 2007, 4440, 2008, 4548, 2009, 4588, 2010, 4593, 2011, 4705, 2012, 4776, 2013, 4837, 2014, 4918 ] )
		.autoAxis()
		.setLineColor('purple')
		.setLineWidth( 2 );

	g.setTitle("Number of employed people in Switzerland (yearly average)");
	g.getXAxis().setLabel('Year').gridsOff();
	g.getYAxis().setLabel("Number of people (in thousands)").secondaryGridOff();
	g.draw();

	return g;
}


makeGraph( "example-1" );
</script>



## Lines

The basic line with the type ```line``` and only two positions (the start and the end of the line).


```
var line = graph.newShape( 'line', {
	
	selectable: true,
	handles: true,
	resizable: true,
	movable: true,

	position: [
		{ x: 1950, y: 3000 },
		{ x: 1960, y: "50px" }
	],

	labels: [
		{
			text: "Shape label",
			color: "braun",
			size: 2,
			angle: 10,
			baseline: "hanging",
			anchor: "end",
			position: {
				x: 1950,
				y: 3200
			}
		}
	]
});

line.draw();
```


<div id="example-2" class="jsgraph-example"></div>
<script>

( function() {

	var graph = makeGraph( 'example-2' );
	var line = graph.newShape( 'line', {
		
		selectable: true,
		handles: true,
		resizable: true,
		movable: true,

		strokeWidth: 3,
		strokeColor: "ForestGreen",
		
		position: [
			{ x: 1950, y: 3000 },
			{ x: 1960, y: "50px" }
		],

		labels: [
			{
				text: "Shape label",
				color: "ForestGreen",
				size: 12,
				angle: 20,
				baseline: "hanging",
				anchor: "end",
				position: {
					x: 1950,
					y: 3200
				}
			}
		]
	});

	line.draw();


}) ();

</script>


## Rectangles

Rectangles with the type ```rect``` and only two positions (two opposite corners). 


<div id="example-3" class="jsgraph-example"></div>
<pre id="example-3-pos"></pre>
<script>

( function() {

	var graph = makeGraph( "example-3" );
	var rect = graph.newShape( 'rect', {
		
		selectable: true,
		handles: true,
		resizable: true,
		movable: true,

		strokeWidth: 2,
		strokeColor: "ForestGreen",
		fill: 'GreenSnake',
		fillOpacity: 0.2,
		
		position: [
			{ x: 1950, y: 3000 },
			{ x: 1960, y: "50px" }
		]
	});

	graph.on("shapeChanged", function( shape ) {
		updatePre( shape );
	});

	function updatePre( shape ) {
		$("#example-3-pos").html( JSON.stringify( { position1: shape.getPosition( 0 ), position2: shape.getPosition( 1 ) }, false, "\t") );
	}
	
	updatePre( rect );
	rect.draw();

}) ();

</script>


## Arrows

Arrows with the type ```arrow``` and only two positions (the start and the end position). 


<div id="example-4" class="jsgraph-example"></div>
<script>
( function() {

	var graph = makeGraph( "example-4" );
	var arrow = graph.newShape( 'arrow', {
		
		selectable: true,
		handles: true,
		resizable: true,
		movable: true,

		strokeWidth: 2,
		strokeColor: "ForestGreen",
		fill: 'GreenSnake',
		fillOpacity: 0.2,
		
		position: [
			{ x: 1950, y: 3000 },
			{ x: 1960, y: "50px" }
		]
	});

	arrow.draw();

}) ();

</script>



## Label

The label shape (type ```label```) displays a label without particular shape. It can be used as simply as:

```
graph.newShape( 'label', {
	
	labels: [ {
		text: "Shape label",
		color: "ForestGreen",
		size: 12,
		angle: 20,
		baseline: "hanging",
		anchor: "end",
		position: {
			x: 1950,
			y: 3200
		}
	} ]
} ).draw();
```

<div id="example-5" class="jsgraph-example"></div>
<script>
( function() {

	var graph = makeGraph( "example-5" );
	graph.newShape( 'label', {

		labels: [ {
			text: "Shape label",
			color: "ForestGreen",
			size: 12,
			angle: 20,
			baseline: "hanging",
			anchor: "end",
			position: {
				x: 1950,
				y: 3200
			}
		} ]

	}).draw();


}) ();

</script>


asasdasd