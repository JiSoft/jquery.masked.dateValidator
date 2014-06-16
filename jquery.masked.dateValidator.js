(function($) {

    var defaults = {
        dateSelector:"#date",
        dateDelimiter:".",
	    	dateFormat:"dmy",
        datePlaceholderChar:"_",
        msgSelector:"#wrong-date-msg",
        startYear:1900,   
        language:'ru'
    };

    var options;
    
     var messages = {
        'en': {
            wrongMonth:'Month is invalid',
            wrongDay:'Day is invalid',
            wrongYear:'Year must be between'
        },
        'ru': {
            wrongMonth:'Не существует такого месяца',
            wrongDay:'День может быть от 01 до 31',
            wrongYear:'Год должен быть '
        }
    };

    var methods = {
        init: function(params) {
            options = $.extend({}, defaults, options, params);
            $(options.dateSelector).keyup(function () {
                var datevalue = $(this).val().trim().replace(new RegExp("[" + options.datePlaceholderChar + "]","g"), "");
                if (datevalue.length == 10) {
                    methods['validate'](datevalue);
                } else
                    $(options.msgSelector).html(''); 
            });
            return this;
        },
        
        validate: function(datevalue) {
           var done = false;           
    		   if (datevalue != null || datevalue != '') {
    				var tmp = datevalue.split(options.dateDelimiter);
    				var day,month,year;
    				if (options.dateFormat.charAt(0)=='d')
    				   day=tmp[0];
    				if (options.dateFormat.charAt(0)=='m')
    				   month=tmp[0];
    				if (options.dateFormat.charAt(0)=='y')
    				   year=tmp[0];
    				if (options.dateFormat.charAt(1)=='d')
    				   day=tmp[1];
    				if (options.dateFormat.charAt(1)=='m')
    				   month=tmp[1];
    				if (options.dateFormat.charAt(1)=='y')
    				   year=tmp[1];
    				if (options.dateFormat.charAt(2)=='d')
    				   day=tmp[2];
    				if (options.dateFormat.charAt(2)=='m')
    				   month=tmp[2];
    				if (options.dateFormat.charAt(2)=='y')
    				   year=tmp[2];
    				var fromYear = options.startYear;
    				var now = new Date();

    				if (day >= 1 && day <= 31) {
    					if (month >= 1 && month <= 12) {
    						if (year >= fromYear && year <= now.getFullYear()) {
    							$(options.msgSelector).html('');
    							done = true;
    						} else {
    							$(options.msgSelector).html(messages[options.language].wrongYear + " " + fromYear + " - " + now.getFullYear());
    						}
    					} else {
    						$(options.msgSelector).html(messages[options.language].wrongMonth);
    					}
    				} else {
    					$(options.msgSelector).html(messages[options.language].wrongDay);
    				}
    			}
    			return done;
        }       
    };
    
    $.fn.dateValidator = function(method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            return this;
        }
    };
})(jQuery);
