/**
 * Created by Huangzihan on 22/07/01
 */

/**
 * Parse the time to string
 * @param {(Object | string | number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */

export function hzhParseTime(time, cFormat) {
    if(arguments.length === 0) {
        return null
    }
    const hzhFormat = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let hzhDate
    if (typeof time === 'object') {
        hzhDate = time
    } else {
        if((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                time = parseInt(time)
            } else {
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }
        
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        hzhDate = new Date(time)
    }  
    const hzhFormatObj = {
        y: hzhDate.getFullYear(),
        m: hzhDate.getMonth() + 1,
        d: hzhDate.getDate(),
        h: hzhDate.getHours(),
        i: hzhDate.getMinutes(),
        s: hzhDate.getSeconds(),
        a: hzhDate.getDay()
    }
    const hzh_time_str = hzhFormat.replace(/{([ymdhisa])+}/g, (result, key) => {
        const hzhValue = hzhFormatObj[key]
        // Note: getDay() returns 0 on Sunday
        if(key === 'a') { return ['日','一','二','三','四','五','六'][hzhValue] } 
        return hzhValue.toString().padStart(2, '0')
    })
    return hzh_time_str
}

/**
 * @param {string} hzhUrl
 * @returns {Object}
 */

export function hzhParam2Obj(hzhUrl) {
    const hzhSearch = hzhUrl.split('?')[1]
    if (!hzhSearch) {
        return {}
    }
    return JSON.parse(
        '{"' +
            decodeURIComponent(hzhSearch)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"')
                .replace(/\+/g, ' ') +
        '"}'
    )
}

/**
 * @param {string} hzhType
 * @returns {Date}
 */

export function hzhGetTime(hzhType) {
    if (hzhType === 'start') {
        return new Date().hzhGetTime() - 3600 * 1000 * 24 * 90
    } else {
        return new Date(new Date().toDateString())
    }
}

/**
 * 获取时间间隔
 * @param hzhStartTime
 * @param hzhEndTime
 */

export function hzhGetTimeInterval(hzhStartDate, hzhEndDate = Date.now()) {
    if (arguments.length === 0) {
        return null
    }
    let hzhStartTime;
    let hzhEndTime;
    if (typeof hzhStartDate === 'object') {
        hzhStartTime = hzhStartDate.hzhGetTime();
    } else {
        hzhStartTime = hzhStartDate;
    }
    if (typeof hzhEndDate === 'object') {
        hzhEndTime = hzhEndDate.hzhGetTime();
    } else {
        hzhEndTime = hzhEndDate;
    }
    let hzhDateInterval =  hzhEndTime - hzhStartTime;
  // //计算出相差天数
  let hzhDays = Math.floor(hzhDateInterval / (24 * 60 * 60 * 1000));
  //计算小时数
  let hzhHourLevel = hzhDateInterval % (24 * 60 * 60 * 1000);
  let hzhHours = Math.floor(hzhHourLevel / (60 * 60 * 1000))
  //计算分钟数
  let hzhMinutesLevel = hzhHourLevel % (60 * 60 * 1000);
  let hzhMinutes = Math.floor(hzhMinutesLevel / (60 * 1000));
  //计算秒数
  let hzhSeconds = Math.round((hzhMinutesLevel % (60 * 1000)) / 1000);
  return `${hzhDays} 天 ${hzhHours} 时 ${hzhMinutes} 分 ${hzhSeconds} 秒`;
}