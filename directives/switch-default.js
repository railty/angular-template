'use strict';

function SwitchDefaultDirective($, data, options, angularTemplate) {
  /**
   * ht-switch-default expression
   */
  var htSwitchDefaults = $("*[" + options.prefix + "-switch-default]");
  htSwitchDefaults.each(function (i, elem) {
    var expr = $(this).attr(options.prefix + '-switch-default').trim();

    //assume the ng-switch is the parent of this element
    var switchLeft = $(this).parent().attr(options.prefix+'-switch');
    $(this).before("&lt;% else { %&gt;");
    $(this).after("&lt;% } %&gt;");

    if (!options.keepNg) $(this).removeAttr(options.prefix + '-switch-default');
  });
}

module.exports = SwitchDefaultDirective
