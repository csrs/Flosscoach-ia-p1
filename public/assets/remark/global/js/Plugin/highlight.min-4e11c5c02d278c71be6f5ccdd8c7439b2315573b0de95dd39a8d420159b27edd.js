/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/highlight",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginHighlight=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="highlight",Highlight=function(_Plugin){function Highlight(){return babelHelpers.classCallCheck(this,Highlight),babelHelpers.possibleConstructorReturn(this,(Highlight.__proto__||Object.getPrototypeOf(Highlight)).apply(this,arguments))}return babelHelpers.inherits(Highlight,_Plugin),babelHelpers.createClass(Highlight,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){"undefined"!=typeof _jquery2.default.fn.hightlight&&hljs.highlightBlock(block)}}],[{key:"getDefaults",value:function(){return{}}}]),Highlight}(_Plugin3.default);_Plugin3.default.register(NAME,Highlight),exports.default=Highlight});
