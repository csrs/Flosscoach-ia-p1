/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("matchHeight",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.matchHeight){var defaults=$.components.getDefaults("matchHeight");$('[data-plugin="matchHeight"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data()),matchSelector=$this.data("matchSelector");matchSelector?$this.find(matchSelector).matchHeight(options):$this.children().matchHeight(options)})}}});
