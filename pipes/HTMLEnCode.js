module.exports = function emojiFilter(options, value, fractionSize) {
  return 0 == value.length ? "" : value = value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}
