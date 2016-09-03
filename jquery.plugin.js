;(function ($) {
	var settings = {
		
	};

	var priv = {
	
	};

	var methods = {
		init: function (param) {
			settings = $.extend( settings, param );

			return this.each( function () {
				var $this = $( this ); // current object DOM
				var slider = new Plugin( $this );
			} );
		},
	};

	/**
	 * MAIN CONSTRUCTOR
	 * @param $this
	 * @constructor
	 */
	function Plugin($this) {
		
	}

	/**
	 * 
	 */
	Slider.prototype.pluginFunc = function () {
		
	};


	$.fn.slider = function (param) {
		if ( methods[param] ) {
			return methods[param].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		}
		else if ( typeof param === 'object' || !param ) {
			methods.init.apply( this, arguments );
		}
	};

}( jQuery ));

