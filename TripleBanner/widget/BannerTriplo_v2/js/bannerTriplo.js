define(

  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function (ko) {
    "use strict";

    var widget;
    
    return {
        onLoad: function(widgetModel) {
          widget = widgetModel;
          
          widget.banner1 = ko.observable("/file" + widget.firstBanner.mediaName());
          widget.banner2 = ko.observable("/file" + widget.secondBanner.mediaName());
          widget.banner3 = ko.observable("/file" + widget.thirdBanner.mediaName());
          
          widget.texto1 = ko.observable(widget.firstBannerText());
          widget.texto2 = ko.observable(widget.secondBannerText());
          widget.texto3 = ko.observable(widget.thirdBannerText());
        }
    }
  }
);