
function isString(e) {
  return (typeof e === 'string' || e instanceof String);
}

function clearHtmlStr(e) {
    return e ? e.replace(/<[^>]*>/g, "") : e;
}

function htmlEncode(e) {
    return isString(e) ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
}

function htmlDecode(e) {
    return e && 0 != e.length ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : ""
}

function genCheckURL(e) {
    return n.API_webwxcheckurl + "?requrl=" + encodeURIComponent((0 == e.indexOf("http") ? "" : "http://") + clearHtmlStr(htmlDecode(e))) + o
}

module.exports = function checkurlFilter(options, value, fractionSize) {
  //return value && 0 != value.length ? e.genCheckURL(value) : "";
  return "not imlemented yet";
}
