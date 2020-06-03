export function time2string(t: number) {
  //将时间转为可读性较好的字符串
  if (t === 0) {
    return "很久以前"
  }
  let d = new Date()
  d.setTime(t)
  let now = new Date()
  let hour = 3600 * 1000

  function sameDay() {
    if (now.getTime() - d.getTime() < 1000 * 5 * 60) {
      return "刚刚"
    }
    return `${d.getHours()}时${d.getMinutes()}分`
  }

  function yesterday() {
    return `昨天${d.getHours()}时${d.getMinutes()}分`
  }

  function lastYesterDay() {
    return `前天${d.getHours()}时${d.getMinutes()}分`
  }

  function thisWeek() {
    return `周${"日一二三四五六"[d.getDay()]}${d.getHours()}时`
  }

  function lastWeek() {
    return `上周${"日一二三四五六"[d.getDay()]}${d.getHours()}时`
  }

  function thisMonth() {
    return `${d.getDate()}日${d.getHours()}时`
  }

  function thisYear() {
    return `${d.getMonth() + 1}月${d.getDate()}日`
  }

  function lastYear() {
    return `去年${d.getMonth() + 1}月${d.getDate()}日`
  }

  function common() {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
  }

  function getTodayBeg() {
    let todayBeg = new Date()
    todayBeg.setHours(0)
    todayBeg.setMinutes(0)
    todayBeg.setMilliseconds(0)
    todayBeg.setSeconds(0)
    return todayBeg
  }

  function getWeekBeg() {
    let ans = getTodayBeg()
    ans.setTime(ans.getTime() - ans.getDay() * 24 * hour)
    return ans
  }

  function getMonthBeg() {
    let ans = getTodayBeg()
    ans.setTime(ans.getTime() - ans.getDate() * 24 * hour)
    return ans
  }

  function getYearBeg() {
    let ans = getTodayBeg()
    ans.setMonth(0)
    ans.setDate(0)
    return ans
  }

  function getLastYearBeg() {
    let ans = getYearBeg()
    ans.setFullYear(ans.getFullYear() - 1)
    return ans
  }

  let todayBeg = getTodayBeg()

  if (d.getTime() > todayBeg.getTime()) {
    return sameDay()
  } else if (todayBeg.getTime() - d.getTime() < 48 * hour) {
    return yesterday()
  } else if (todayBeg.getTime() - d.getTime() < 72 * hour) {
    return lastYesterDay()
  }
  let weekBeg = getWeekBeg()
  if (weekBeg.getTime() < d.getTime()) {
    return thisWeek()
  }
  if (weekBeg.getTime() - 7 * 24 * hour < d.getTime()) {
    return lastWeek()
  }
  let monthBeg = getMonthBeg()
  if (monthBeg.getTime() < d.getTime()) {
    return thisMonth()
  }
  let yearBeg = getYearBeg()
  if (yearBeg.getTime() < d.getTime()) {
    return thisYear()
  }
  if (d.getTime() > getLastYearBeg().getTime()) {
    return lastYear()
  }
  return common()
}

export function size2string(t: number) {
  const ind = Math.floor(Math.log2(t) / 10);
  const sizes = 'B k M G'.split(/\s+/);
  let ans = Math.floor(t / (2 ** (10 * ind))) + sizes[ind + 1];
  if (!ans) return '';
  if (ans.endsWith('B')) return ans;
  return ans + 'B';
}
