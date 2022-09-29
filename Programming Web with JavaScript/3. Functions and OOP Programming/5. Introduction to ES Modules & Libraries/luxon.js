// import luxon
let luxon = require('luxon')
// luxon mainely use for date time formats
const { DateTime } = require('luxon')
// let nowDate = DateTime.now()
// console.log(nowDate)
/*// DateTime {
  ts: 1661184678508,
  _zone: SystemZone {},
  loc: Locale {
    locale: 'en-IN',
    numberingSystem: null,
    outputCalendar: null,
    intl: 'en-IN',
    weekdaysCache: { format: {}, standalone: {} },
    monthsCache: { format: {}, standalone: {} },
    meridiemCache: null,
    eraCache: {},
    specifiedLocale: null,
    fastNumbersCached: null
  },
  invalid: null,
  weekData: null,
  c: {
    year: 2022,
    month: 8,
    day: 22,
    hour: 21,
    minute: 41,
    second: 18,
    millisecond: 508
  },
  o: 330,
  isLuxonDateTime: true
} */

// let nowDate = DateTime.now()
// let dateToString = DateTime.now().toString()
// console.log(dateToString) //  2022-08-22T21:37:52.908+05:30 current time in string format
// console.log(nowDate.zoneName) // Asia/Calcutta
// console.log(nowDate.daysInMonth) // days in current month:- 31
// console.log(nowDate.daysInYear) // days in current years:- 365
// let minusDate = nowDate.minus({ days: 52 }) // its minus 52 days from current days
// console.log(minusDate) //
// let minusHours = nowDate.minus({ hours: 5 })
// console.log(minusHours) // its minus 5 hours from current
