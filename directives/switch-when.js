'use strict';

function SwitchWhenDirective($, data, options, angularTemplate) {
  /**
   * ht-switch-when expression
   */
  var htSwitchWhens = $("*[" + options.prefix + "-switch-when]");
  htSwitchWhens.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-switch-when').trim();

    //assume the ng-switch is the parent of this element
    var switchLeft = $(this).parent().attr(options.prefix+'-switch');
    $(this).before("&lt;% if (" + switchLeft + "=='" + expr + "') { %&gt;");
    $(this).after("&lt;% } %&gt;");

    if (!options.keepNg) $(this).removeAttr(options.prefix + '-switch-when');
  });
}

module.exports = SwitchWhenDirective
