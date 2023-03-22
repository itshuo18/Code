//  1、定义格式化时间的方法
function dateFormat(dtStr) {
  const date = new Date(dtStr)
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const strDate = padZero(date.getDate())
  const hh = padZero(date.getHours())
  const mm = padZero(date.getMinutes())
  const ss = padZero(date.getSeconds())

  return `${year}-${month}-${strDate} ${hh}:${mm}:${ss}`
}

function padZero(n) {
  return n > 9 ? n : '0' + n
}

module.exports = {
  dateFormat
}