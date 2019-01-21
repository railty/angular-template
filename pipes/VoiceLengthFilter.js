module.exports = function VoiceLengthFilter(options, value, fractionSize) {
  return 0 == value.length ? 0 : Math.round(value / 1e3)
}
