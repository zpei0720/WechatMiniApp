var dataObj=require("data/data.js")

App({
  onLaunch: function () {
    // 展示本地存储能力
    var storageData = wx.getStorageSync('postList');
    if(!storageData){
      var dataObj=require("data/data.js")
      wx.clearStorageSync();
      wx.setStorageSync('postList',dataObj.postList);
    }
  },

   globalData: {
    doubanBase: "https://douban.uieee.com",
    // doubanBase: " http://t.yushu.im",
   }
})