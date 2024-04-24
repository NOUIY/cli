const colors = {
  // red
  removed: { open: '\x1B[31m', close: '\x1B[39m' },
  // green
  added: { open: '\x1B[32m', close: '\x1B[39m' },
  // blue
  header: { open: '\x1B[34m', close: '\x1B[39m' },
  // cyan
  section: { open: '\x1B[36m', close: '\x1B[39m' },
}

const color = (colorStr, colorId) => {
  const { open, close } = colors[colorId]
  // avoid highlighting the "\n" (would highlight till the end of the line)
  return colorStr.replace(/[^\n\r]+/g, open + '$&' + close)
}

      res += `${filename}\n`
      patch += `${str}\n`
    if (opts.color) {
      // this RegExp will include all the `\n` chars into the lines, easier to join
      const lines = patch.split(/^/m)
      res += color(lines.slice(0, headerLength).join(''), 'header')
      res += lines.slice(headerLength).join('')
        .replace(/^-.*/gm, color('$&', 'removed'))
        .replace(/^\+.*/gm, color('$&', 'added'))
        .replace(/^@@.+@@/gm, color('$&', 'section'))
    } else {
      res += patch
    }