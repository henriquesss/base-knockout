define(
    //-------------------------------------------------------------------
    // DEPENDENCIES
    //-------------------------------------------------------------------
    ['knockout'],
    //-------------------------------------------------------------------
    // MODULE DEFINITION
    //-------------------------------------------------------------------
    function(ko) {
        "use strict";
        var widget;
        return {
            onLoad: function(widgetModel) {
                console.log('-- helloWorldPersonalizate onLoad callback');
            },
            beforeAppear: function(page) {
                console.log('-- helloWorldPersonalizate beforeAppear callback');
            }
        };
    }
);