'use strict';

function ShowDirective($, data, options, angularTemplate) {
  /**
   * ht-show expression
   */
  var htShows = $("*[" + options.prefix + "-show]");
  htShows.each(function (i, elem) {

    var expr = $(this).attr(options.prefix + '-show').trim();
    var classes = ($(this).attr('class') || '').trim();
    if (classes) classes += ' ';

    if (!options.keepNg) $(this).removeAttr(options.prefix + '-show');
    //and then clone, not before remove the attribute
    var show = $(this).clone();
    show.attr('class', classes + options.prefix + '-show');

    $(this).attr('class', classes + options.prefix + '-hide');

    $(this).before("&lt;% if (" + expr + ") { %&gt;");
    $(this).before(show);
    $(this).before("&lt;% } else { %&gt;");

    $(this).after("&lt;% } %&gt;");

  });
}

module.exports = ShowDirective
