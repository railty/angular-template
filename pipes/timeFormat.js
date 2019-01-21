module.exports = function emojiFilter(options, value, fractionSize) {
  var t = [_("562d747"), _("1603b06"), _("b5a6a07"), _("e60725e"), _("170fc8e"), _("eb79cea"), _("2457513")];
  return function(value) {
    var value = 1e3 * value,
    a = new Date,
    n = a.getTime() / 1e3,
    i = a.getDay();

    a.setTime(value);
    var o, r = a.getHours(),
    c = a.getMinutes(),
    s = a.getDay(),
    l = a.getFullYear() % 100,
    d = a.getMonth() + 1,
    f = n - value > 604800,
    u = n - value < 86400 && s == i;

    return c < 10 && (c = "0" + c), o = u ? r + ":" + c : f ? l + "/" + d + "/" + a.getDate() : t[s]
  }
}
