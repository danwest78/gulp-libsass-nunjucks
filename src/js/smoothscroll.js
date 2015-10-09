var SmoothScroll = (function () {
    'use strict';

    var s;
    
    return {
        settings: {
            text: 'smooth scroll'
        },
    
        init: function() {
            s = this.settings;
            this.bindUIActions();
        },
        
        bindUIActions: function () {
            console.log(s.text + ' is running');
            SmoothScroll.someOtherFunction();
        },
        
        someOtherFunction: function () {
            console.log(s.text + ' other function');
        }
    
    };
})();