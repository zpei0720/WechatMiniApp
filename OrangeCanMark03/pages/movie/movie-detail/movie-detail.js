var util = require('../../../utils/util.js')

Page({
  data: {
    goodImg: '../../../images/rating/good.png',
    movie: {},
    starList: [],
    inWordShow: -1,
    photos: [], // 剧照图片列表
  },
  onLoad: function (options) {
    console.log(options)
    this.getDetailMovie(options);
    let _bg = wx.getStorageSync('bg');
    if (_bg) {
      this.setData({
        bg: _bg
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: _bg.hex,
      })
    }
  },
  // 获取电影信息
  getDetailMovie(e) {
    let that = this;
    let starList = this.data.starList;
    let movie_url = `movie/subject/${e.id}`;
    wx.showLoading({
      title: '努力加载中...',
    });
    util.myRequest({
      url: movie_url,
      success(res) {
        console.log(res);
        that.setData({
          movie: res.data
        });
        let _info = res.data;
        let _photos = _info.photos;
        console.log(_info)
        let details = _info.rating.details; // 有用评分人数
        let detailsArr = [];
        for (let i in details) {
          detailsArr.push(details[i])
        }
        let detailSum = 0;
        detailsArr.forEach((item) => {
          detailSum += item
        })
        let strImg = ['☆', '☆☆', '☆☆☆', '☆☆☆☆', '☆☆☆☆☆'];
        detailsArr.forEach((item, index) => {
          let starNum = Math.round(item / detailSum * 100)
          starList.push({
            star: starNum,
            img: strImg[index]
          })
        })
        starList.reverse()
        that.setData({
          starList,
          photos: _photos,
        })
        wx.setNavigationBarTitle({
          title: res.data.title
        });
        wx.hideLoading();
      }
    })
  },
  // 点击展示内容
  bindIntrShow(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    this.setData({
      inWordShow: id
    })
  },
  // 点击查看图片
  lookPic(e) {
    // 注意：当前图片和图片数组都应为同一路径即preview
    let src = e.currentTarget.dataset.src;
    let imgs = this.data.photos;
    let imgUrls = [];
    imgs.forEach((item, index) => {
      imgUrls.push(item.image)
    })

    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgUrls, // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let _path = '/pages/movies/rating/item/item';
    return {
      title: '豆瓣电影',
      path: _path,
      // imageUrl: '/images/an.jpg',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "转发成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})