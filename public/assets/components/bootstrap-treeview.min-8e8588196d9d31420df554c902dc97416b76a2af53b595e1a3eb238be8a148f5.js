/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("treeview",{mode:"init",defaults:{injectStyle:!1,expandIcon:"icon wb-plus",collapseIcon:"icon wb-minus",emptyIcon:"icon",nodeIcon:"icon wb-folder",showBorder:!1,borderColor:$.colors("blue-grey",200),onhoverColor:$.colors("blue-grey",100),selectedColor:"#ffffff",selectedBackColor:$.colors("primary",600),searchResultColor:$.colors("primary",600),searchResultBackColor:"#ffffff"},init:function(context){if($.fn.treeview){var defaults=$.components.getDefaults("treeview");$('[data-plugin="treeview"]',context).each(function(){var $this=$(this),options=$this.data();"string"==typeof options.source&&$.isFunction(window[options.source])?(options.data=window[options.source](),delete options.source):$.isFunction(options.souce)&&(options.data=options.source(),delete options.source),options=$.extend(!0,{},defaults,options),$this.treeview(options)})}}});
