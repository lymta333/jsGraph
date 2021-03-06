  define( [ './graph.shape.areaundercurve' ], function( GraphSurfaceUnderCurve ) {

    var GraphRangeX = function( graph ) {};
    $.extend( GraphRangeX.prototype, GraphSurfaceUnderCurve.prototype, {

      createDom: function() {
        this._dom = document.createElementNS( this.graph.ns, 'rect' );
        this._dom.setAttribute( 'class', 'rangeRect' );
        this._dom.setAttribute( 'cursor', 'move' );

        //this._dom.setAttribute( 'pointer-events', 'stroke' );

        var self = this;
        this.nbHandles = 2;
        this.createHandles( this.nbHandles, 'g', {
          'stroke-width': '3',
          'stroke': 'transparent',
          'pointer-events': 'stroke',
          'cursor': 'ew-resize'
        }, function( handle ) {
          self._makeHandle( handle );
        } );

        this.setDom( 'cursor', 'move' );
        this.doDraw = undefined;
      },

      setPosition: function() {

        var posXY = this._getPosition( this.getFromData( 'pos' ) ),
          posXY2 = this._getPosition( this.getFromData( 'pos2' ), this.getFromData( 'pos' ) ),
          w = Math.abs( posXY.x - posXY2.x ),
          x = Math.min( posXY.x, posXY2.x );

        this.reversed = x == posXY2.x;

        if ( w < 2 || x + w < 0 || x > this.graph.getDrawingWidth() ) {
          return false;
        }

        this.setDom( 'x', x );
        this.setDom( 'width', w );
        this.setDom( 'y', 0 );
        this.setDom( 'height', this.graph.getDrawingHeight() - this.graph.shift.bottom );

        this.setHandles( x, w );

        return true;
      },

      setHandles: function( x, w ) {
        /*         this.group.appendChild( this.handle1 );
      this.group.appendChild( this.handle2 );
*/

        var posXY = this._getPosition( this.getFromData( 'pos' ) ),
          posXY2 = this._getPosition( this.getFromData( 'pos2' ), this.getFromData( 'pos' ) ),
          w = Math.abs( posXY.x - posXY2.x ),
          x = Math.min( posXY.x, posXY2.x );

        this.handle1.setAttribute( 'transform', 'translate(' + ( x - 6 ) + " " + ( ( this.graph.getDrawingHeight() - this.graph.shift.bottom ) / 2 - 10 ) + ")" );
        this.handle2.setAttribute( 'transform', 'translate(' + ( x + w - 6 ) + " " + ( ( this.graph.getDrawingHeight() - this.graph.shift.bottom ) / 2 - 10 ) + ")" );

      },

      selectHandles: function() {}, // Cancel areaundercurve

      _makeHandle: function( rangeHandle ) {

        rangeHandle.setAttribute( 'id', "rangeHandle" + this.graph._creation );

        var r = document.createElementNS( this.graph.ns, 'rect' );
        r.setAttribute( 'rx', 0 );
        r.setAttribute( 'ry', 0 );
        r.setAttribute( 'stroke', 'black' );
        r.setAttribute( 'fill', 'white' );

        r.setAttribute( 'width', 10 );
        r.setAttribute( 'height', 20 );
        r.setAttribute( 'x', 0 );
        r.setAttribute( 'y', 0 );
        r.setAttribute( 'shape-rendering', 'crispEdges' );
        r.setAttribute( 'cursor', 'ew-resize' );
        rangeHandle.appendChild( r );

        var l = document.createElementNS( this.graph.ns, 'line' );
        l.setAttribute( 'x1', 4 );
        l.setAttribute( 'x2', 4 );
        l.setAttribute( 'y1', 4 );
        l.setAttribute( 'y2', 18 );
        l.setAttribute( 'stroke', 'black' );
        l.setAttribute( 'shape-rendering', 'crispEdges' );
        l.setAttribute( 'cursor', 'ew-resize' );
        rangeHandle.appendChild( l );

        var l = document.createElementNS( this.graph.ns, 'line' );
        l.setAttribute( 'x1', 6 );
        l.setAttribute( 'x2', 6 );
        l.setAttribute( 'y1', 4 );
        l.setAttribute( 'y2', 18 );
        l.setAttribute( 'stroke', 'black' );
        l.setAttribute( 'shape-rendering', 'crispEdges' );
        l.setAttribute( 'cursor', 'ew-resize' );
        rangeHandle.appendChild( l );

        return rangeHandle;
      }
    } );

    return GraphRangeX;
  } );