/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("editableTable",{mode:"init",init:function(context){if($.fn.editableTableWidget){var defaults=$.components.getDefaults("editableTable");$('[data-plugin="editableTable"]',context).each(function(){var options=$.extend(!0,{},defaults,$(this).data());$(this).editableTableWidget(options)})}}});
