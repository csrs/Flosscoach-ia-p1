/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("formatter",{mode:"init",defaults:{persistent:!0},init:function(context){if($.fn.formatter){var ieOptions,defaults=$.components.getDefaults("formatter"),browserName=navigator.userAgent.toLowerCase();ieOptions=/msie/i.test(browserName)&&!/opera/.test(browserName)?{persistent:!1}:{},$('[data-plugin="formatter"]',context).each(function(){var options=$.extend({},defaults,ieOptions,$(this).data());options.pattern&&(options.pattern=options.pattern.replace(/\[\[/g,"{{").replace(/\]\]/g,"}}")),$(this).formatter(options)})}}});
