const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }

    return time + label + 's';
}


/**
 * 分钟转换
 * @param  {Number} num 总分钟数
 * @return {String}     友好时间字符串
 */
export function time(num) {
  num = parseInt(num, 10)

  return parseInt(num / 60) + '小时' + parseInt(num % 60) + '分'
}
