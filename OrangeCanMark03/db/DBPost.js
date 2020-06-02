var util = require('../utils/util.js')
// 引用util模块

class DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList';
    this.postId = postId;
  }
  // 文章本地缓存存储

  // 得到全部文章信息
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').postList;
      this.iitPostList(res);
    }
    return res;
  }

  // 本地缓存 保存or更新
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }

  // 获取指定id号的文章数据
  getPostItemById() {
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.postId) {
        return {
          index: i,
          data: postsData[i]
        }
      }
    }
  }

  collection(){
    return this.updatePostData('collection');
  }
  // 收藏操作

  like() {
    return this.updatePostData('like');
  }
  // 点赞操作

  /*发表评论*/
  newComment(newComment) {
    this.updatePostData('comment', newComment);
  }

  //阅读数+1
  addReadingTimes() {
    this.updatePostData('reading');
  }

  updatePostData(category,newComment) {
    var itemData = this.getPostItemById(),
      postData = itemData.data,
      allPostData = this.getAllPostData();
    switch (category) {

      // 处理收藏
      case 'collection':
        if (!postData.collectionStatus) {
          postData.collectionNum++;
          postData.collectionStatus = true;
        } else {
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;

      // 处理点赞
      case 'like':
        if (!postData.likeStatus) {
          postData.likeNum++;
          postData.likeStatus = true;
        } else {
          postData.likeNum--;
          postData.likeStatus = false;
        }
        break;

        // 处理评论
        case 'comment':
          postData.comments.push(newComment);
          postData.commentNum++;
          break;

      // 处理阅读数
      case 'reading':
        postData.readingNum++;
        break;

      defaule:
        break;
    }

    // 更新缓存数据库
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }

  // 获取文章评论
  getCommentData(){
    var itemData=this.getPostItemById().data;
    itemData.comments.sort(this.compareWithTime);
    var len=itemData.comments.length,
      comment;
    for(var i=0;i<len;i++){
      comment=itemData.comments[i];
      comment.create_time=util.getDiffTime(comment.create_time,true);
    }
    return itemData.comments;
  }

  //按事件降序compareWithTime()方法
  compareWithTime(value1, value2) {
    var flag = parseFloat(value1.create_time) - parseFloat(value2.create_time);
    if (flag < 0) {
      return 1;
    } else if (flag > 0) {
      return -1
    } else {
      return 0;
    }
  }

}

export { DBPost }