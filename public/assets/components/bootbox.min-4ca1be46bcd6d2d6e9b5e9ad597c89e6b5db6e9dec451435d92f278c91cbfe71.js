/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("bootbox",{mode:"api",defaults:{message:""},api:function(){if("undefined"!=typeof bootbox){var defaults=$.components.getDefaults("bootbox");$(document).on("click.site.bootbox",'[data-plugin="bootbox"]',function(){var $btn=$(this),options=$btn.data();if(options=$.extend(!0,{},defaults,options),options.classname&&(options.className=options.classname),"string"==typeof options.callback&&$.isFunction(window[options.callback])&&(options.callback=window[options.callback]),options.type)switch(options.type){case"alert":bootbox.alert(options);break;case"confirm":bootbox.confirm(options);break;case"prompt":bootbox.prompt(options);break;default:bootbox.dialog(options)}else bootbox.dialog(options)})}}});
