'use strict';

function SwitchDirective($, data, options, angularTemplate) {
  /**
   * ht-switch expression
   */
  var htSwitchs = $("*[" + options.prefix + "-switch]");
  htSwitchs.each(function (i, elem) {
    //nothing need to do

    if (!options.keepNg) $(this).removeAttr(options.prefix + '-switch');
  });
}

module.exports = SwitchDirective
