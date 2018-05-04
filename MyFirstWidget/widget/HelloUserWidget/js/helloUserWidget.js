/**
	* Hello User Widget
*/

define(
	//DEPENDÊNCIAS
	['knockout'],

	//DEFNIÇÕES DE MÓDULO
	function (ko){
		"use strict"
		var widget;
		return {
				onLoad: function(widgetModel) {
					widget = widgetModel;
					console.log("-- helloUserWidget onLoad callBack");
				},
				beforeAppear: function(page) {
					console("-- helloUserWidget beforeAppear callBack");
				}
		}
	}
);