/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("filterable",{mode:"init",defaults:{animationOptions:{duration:750,easing:"linear",queue:!1}},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("filterable"),callback=function(){$("[data-filterable]",context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data(),{filter:"*"});$this.isotope(options)}),$("[data-filter]",context).click(function(e){var $this=$(this),target=$this.data("target"),$li=$this.parent("li");target||(target=$this.attr("href"),target=target&&target.replace(/.*(?=#[^\s]*$)/,"")),$li.siblings(".active").each(function(){$(this).find("a").attr("aria-expanded",!1),$(this).removeClass("active")}),$li.addClass("active"),$this.attr("aria-expanded",!0);var $list=$(target,context),filter=$this.attr("data-filter");"*"!==filter&&(filter='[data-type="'+filter+'"]'),$list.isotope({filter:filter}),e.preventDefault()})};context!==document?callback():$(window).on("load",function(){callback()})}}});
