;(function ($) {
	var settings = {
		
	};
	
	var methods = {
		init: function(param) {
			settings = $.extend(settings, param);
			
			return this.each(function() {
				
			});
		},
	};

	$.fn.pluginName = function (param) {
		if ( methods[param] ) {
			return methods[param].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		}
		else if ( typeof param === 'object' || !param ) {
			methods.init.apply(this, arguments);
		}
	};

}( jQuery ));
