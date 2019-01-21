module.exports = function VoiceLengthFilter(options, value, fractionSize) {
  return (value) && 0 != value.length ? value.replace(/<span class=.emoji.*?<\/span>/g, _("809bb9d")) : ""

}
