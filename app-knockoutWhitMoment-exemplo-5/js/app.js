moment.locale('en'); //Selected locale

var viewModel = {};

viewModel.title = ko.observable("Exemplo Knockout 5");
viewModel.theme = ko.observable("Knockout Date Bindings");
viewModel.descriptionButton = ko.observable("Set My Birthday to a random date");
viewModel.descriptionBirthDay = ko.observable("My birthday is on");
viewModel.descriptionFormatted = ko.observable("formatted with");
viewModel.descriptionMoment = ko.observable("momentjs");
viewModel.descriptionParty = ko.observable("Party at");
viewModel.urlMoment = ko.observable("https://momentjs.com/");
viewModel.birthDay = ko.observable(new Date());
viewModel.partyTime = ko.observable(new Date());

viewModel.setMyBirthDay = function () {
  randomDate = new Date();
  randomDate.setMonth(9); //October
  randomDate.setDate(21);
  randomDate.setFullYear(1994);
  viewModel.birthDay(randomDate);
}

ko.applyBindings(viewModel);