/**
 * @fileoverview nomeDoArquivo.
 * Option.
 */

define(
  
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------

  function HelloWorldViewModel() {
      // Data
      var self = this;

      self.name = ko.observable('Marcelo');
      self.hello = ko.observable('Olá, meu nome é '+self.name);
  }

  ko.applyBindings(new HelloWorldViewModel());

  );