var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cache: [
      { iconurl: '/images/icon/wx_app_clear.png', title: '缓存清理', tap: 'clearCache' }
    ],

    // api: [
    //   { iconurl: '', title: '用户登陆', tap: 'login' },
    //   { iconurl: '', title: '校验用户信息', tap: 'check' },
    //   { iconurl: '', title: '获取用户加密信息', tap: 'decrypted' },
    //   { iconurl: '', title: '模板消息', tap: 'tplMessage' },
    //   { iconurl: '', title: '微信支付', tap: 'wxPay' }
    // ],

    hasUserInfo: false, // 是否已授权，默认否
    userInfo: '',
    nowCity: '', // 当前城市
    nowWemp: '', // 当前温度
    nowWeather: '', // 当前天气

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindUserInfo();
    this.getWeather();
  },

  // 获取授权
  bindUserInfo() {
    let self = this;
    wx.getSetting({
      success(res) {
        wx.showLoading({
          title: '努力加载中...',
        })
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success(res) {
              wx.setStorageSync('userInfo', res.userInfo);
              self.setData({
                userInfo: res.userInfo,
                hasUserInfo: true,
              });
              console.log(res)
              wx.hideLoading();
              wx.setNavigationBarTitle({
                title: res.userInfo.nickName
              })
            }
          })
        } else {
          wx.hideLoading();
          self.setData({
            hasUserInfo: false,
          })
        }
      }
    })
  },

  // 获取天气
  getWeather() {
    let that = this;
    // 获取当前城市 暂无合适地址，先注释
    wx.showLoading({
      title: '努力加载中...',
    })
    util.getLocation().then((suc) => {
      util.getCity(suc.latitude, suc.longitude).then((suc) => {
        let city = suc.data.result.addressComponent.city.replace('市', '');
        util.getWeather(city).then((suc) => {
          let _info = suc.data.results[0].weather_data[0];
          // console.log(_info)
          let _nowWemp = _info.date.split('：')[1].split(')')[0];
          let _nowWeather = _info.weather;
          that.setData({
            nowCity: city,
            nowWemp: _nowWemp,
            nowWeather: _nowWeather,
          })
          wx.hideLoading();
        }).catch((err) => {
          console.log(err);
          util.getWeather('北京');
        });
      })
    }).catch((err) => {
      console.log(err);
      util.getWeather('北京').then((suc) => {
        let _info = suc.data.results[0].weather_data[0];
        let _nowWemp = _info.date.split('：')[1].split(')')[0];
        let _nowWeather = _info.weather;
        that.setData({
          nowCity: '北京',
          nowWemp: _nowWemp,
          nowWeather: _nowWeather,
        });
        wx.hideLoading();
      })
    })
  },

  // 更新天气
  bindWeather() {
    this.getWeather();
  },

  //显示模态窗口
  showModal: function (title, content, callback) {
    wx.showModal({
      title: title,
      content: content,
      confirmColor: '#1F4BA5',
      cancelColor: '#7F8389',
      success: function (res) {
        if (res.confirm) {
          callback && callback();
        }
      }
    })
  },

  // 缓存清理
  clearCache: function () {
    this.showModal('缓存清理', '确定要清除本地缓存吗？', function () {
      wx.clearStorage({
        success: function (msg) {
          wx.showToast({
            title: "缓存清理成功",
            duration: 1000,
            mask: true,
            icon: "success"
          })
        },
        fail: function (e) {
          console.log(e)
        }
      })
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})