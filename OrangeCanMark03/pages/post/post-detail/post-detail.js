// pages/post/post-detail/post-detail.js
import { DBPost } from "../../../db/DBPost.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    this.postData=this.dbPost.getPostItemById().data;
    this.setData({
      post:this.postData
    })
    this.addReadingTimes();
    this.setAniation();
  },

  onCollectionTap: function (event) {
    var newData = this.dbPost.collection();
    this.setData({
      'post.collectionStatus': newData.collectionStatus,
      'post.collectionNum': newData.collectionNum
    }),

    wx.showToast({
      title: newData.collectionStatus ? "已收藏" : "取消收藏",
      duration: 1000,
      icon: "success",
      mask: true
    })
  },

  onLikeTap: function (event) {
    var newData = this.dbPost.like();
    this.setData({
      'post.likeStatus': newData.likeStatus,
      'post.likeNum': newData.likeNum
    }),

    wx.showToast({
      title: newData.likeStatus ? "多谢喜欢" : "取消喜欢",
      duration: 1000,
      icon: "success",
      mask: true
    }),

    // 设置点赞动画
      this.animationLike.scale(2).step();
      this.setData({
        animationLike: this.animationLike.export()
    })
    setTimeout(function () {
      this.animationLike.scale(1).step();
      this.setData({
        animationLike: this.animationLike.export()
      })
    }.bind(this), 300);
  },

  onCommentTap:function(event){
    var id=event.currentTarget.dataset.postId;
    wx.navigateTo({
      url:'../post-comment/post-comment?id='+id
    })
  },

  //阅读量+1
  addReadingTimes: function () {
    this.dbPost.addReadingTimes();
  },

  onShareAppMessage: function () {
    return {
      title: this.postData.title,
      desc: this.postData.content,
      path: "/pages/post/post-detail/post-detail?id=" + this.postId
    }
  },

  setAniation: function () {
    //定义动画
    var animationLike = wx.createAnimation({
      timingFunction: 'ease-in-out'
    })

    this.animationLike = animationLike
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title:this.postData.title
    })
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