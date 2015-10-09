var MobileNav = (function () {
    'use strict';

    var s;
    
    return {
        settings: {
            text: 'mobile nav',
        },
    
        init: function() {
            s = this.settings;
            this.bindUIActions();
        },
        
        bindUIActions: function () {
            console.log(s.text + ' is running');
            MobileNav.someOtherFunction();
        },
        
        someOtherFunction: function () {
            console.log(s.text + ' other function');
        }
    
    };
})();