/**
 * @param {String} hex 
 * @returns {Number}
 */
export function HighContrastValue (hex) {
  if (hex) {
    return (
      (
        (
          (
            (parseInt(hex.substring(1, 3), 16) * 299) +
            (parseInt(hex.substring(1, 3), 16) * 587) +
            (parseInt(hex.substring(1, 3), 16) * 114)
          ) / 1000
        ) - 128
      ) * -1000
    )
  }
}