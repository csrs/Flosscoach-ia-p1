/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("nprogress",{mode:"init",defaults:{minimum:.15,trickleRate:.07,trickleSpeed:360,showSpinner:!1,template:'<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'},init:function(){if("undefined"!=typeof NProgress){var defaults=$.components.getDefaults("nprogress");NProgress.configure(defaults)}}});
