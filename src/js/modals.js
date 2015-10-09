var Modals = (function () {
    'use strict';

    var s;
    
    return {
        settings: {
            text: 'modals'
        },
    
        init: function() {
            s = this.settings;
            this.bindUIActions();
        },
        
        bindUIActions: function () {
            console.log(s.text + ' is running');
            Modals.someOtherFunction();
        },
        
        someOtherFunction: function () {
            console.log(s.text + ' other function');
        }
    
    };
})();