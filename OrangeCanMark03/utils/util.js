 //时间戳改为可阅读模式getDiffTime()方法
/*
 *根据客户端的时间信息得到发表评论的时间格式
 *多少分钟前，多少小时前，然后是昨天，然后再是月日
 * Para :
 * recordTime - {float} 时间戳
 * yearsFlag -{bool} 是否要年份
 */
function getDiffTime(recordTime, yearsFlag) {
  if (recordTime) {
    recordTime = new Date(parseFloat(recordTime) * 1000);
    var minute = 1000 * 60,
      hour = minute * 60,
      day = hour * 24,
      now = new Date(),
      diff = now - recordTime;
    var result = '';
    if (diff < 0) {
      return result;
    }
    var weekR = diff / (7 * day);
    var dayC = diff / day;
    var hourC = diff / hour;
    var minC = diff / minute;
    if (weekR >= 1) {
      var formate = 'MM-dd hh:mm';
      if (yearsFlag) {
        formate = 'yyyy-MM-dd hh:mm';
      }
      return recordTime.format(formate);
    }
    else if (dayC == 1 || (hourC < 24 && recordTime.getDate() != now.getDate())) {
      result = '昨天' + recordTime.format('hh:mm');
      return result;
    }
    else if (dayC > 1) {
      var formate = 'MM-dd hh:mm';
      if (yearsFlag) {
        formate = 'yyyy-MM-dd hh:mm';
      }
      return recordTime.format(formate);
    }
    else if (hourC >= 1) {
      result = parseInt(hourC) + '小时前';
      return result;
    }
    else if (minC >= 1) {
      result = parseInt(minC) + '分钟前';
      return result;
    } else {
      result = '刚刚';
      return result;
    }
  }
  return '';
}

// 新增format方法
/*
 *拓展Date方法。得到格式化的日期形式
 *date.format('yyyy-MM-dd')，date.format('yyyy/MM/dd'),date.format('yyyy.MM.dd')
 *date.format('dd.MM.yy'), date.format('yyyy.dd.MM'), date.format('yyyy-MM-dd HH:mm')
 *使用方法 如下：
 *                       var date = new Date();
 *                       var todayFormat = date.format('yyyy-MM-dd'); //结果为2015-2-3
 *Parameters:
 *format - {string} 目标格式 类似('yyyy-MM-dd')
 *Returns - {string} 格式化后的日期 2015-2-3
 *
 */
(function initTimeFormat() {
  Date.prototype.format = function (format) {
    var o = {
      "M+": this.getMonth() + 1, //month
      "d+": this.getDate(), //day
      "h+": this.getHours(), //hour
      "m+": this.getMinutes(), //minute
      "s+": this.getSeconds(), //second
      "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
      "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  };
})()

//将50、35、00等形式转化成[1,1,1,1,1]的形式
function convertToStarsArray(stars) {
  var num = stars / 10;
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    }
    else {
      if ((i - num) === 0.5) {
        array.push(0.5)
      }
      else {
        array.push(0);
      }
    }
  }
  return array;
}

//返回从豆瓣传递的数据
function http(url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-type": "json"
      // 'content-type': 'application/xml'
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

// 容错处理
//将数组转换为以 / 分隔的字符串
function convertToCastString(casts) {
  var castsjoin = "";
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

// 容错处理
function convertToCastInfos(casts) {
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}


// 自己封装的请求函数
const myRequest = (options) => {
  let domain = 'https://douban.uieee.com/v2/';
  // let domain = 'http://t.yushu.im/v2/';
  // let domain = 'https://api.douban.com/v2/';

  options.header = {
    'content-type': 'application/xml',
    // 'content-type': 'json'
  };
  options.method = 'GET';
  options.url = domain + options.url;
  let successCB = (res) => {
    successCB(res);
  };
  wx.request(options)
}

// 获取用户信息
const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  })
}

// 获取用户位置
const getLocation = (type) => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: type,
      success: resolve,
      fail: reject
    })
  })
}

// 展示信息
const showMsg = (msg) => {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500,
    mask: true,
  })
}

// 获取城市
const getCity = (latitude, longitude) => {
  let mapUrl = `https://api.map.baidu.com/geocoder/v2/?location=${latitude},${longitude}&output=json&ak=B61195334f65b9e4d02ae75d24fa2c53`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: mapUrl,
      success: resolve,
      fail: reject
    })
  })
}

// 获取当前城市天气
const getWeather = (city) => {
  let weatherUrl = `https://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=B61195334f65b9e4d02ae75d24fa2c53`;
  return new Promise((resolve, reject) => {
    wx.request({
      url: weatherUrl,
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  getDiffTime: getDiffTime,
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos,

  myRequest: myRequest,
  getUserInfo,
  getLocation,
  showMsg,
  getCity,
  getWeather,
}
