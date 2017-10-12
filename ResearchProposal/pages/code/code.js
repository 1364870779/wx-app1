// pages/code/code.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '交流合作',
      success: function (res) {
        // success
      }
    })
  },
  // 分享
  onShareAppMessage: function () {
    return {
      title: '关注我们',
      path: '/page/index?id=123',
      success: function (res) {
        // 分享成功
        // wx.showToast({
        // title: '转发成功！',
        // icon: 'success',
        // duration: 2000
        // });
      },
      fail: function (res) {
        // 分享失败
        // wx.showToast({
        // title: '转发失败！',
        // icon: 'fail',
        // duration: 2000
        // });
      }
    }
  },
  saveImage: function () {
     wx.previewImage({
       current: 'http://oot34wnx6.bkt.clouddn.com/code.jpeg', // 当前显示图片的链接，不填则默认为 urls 的第一张
       urls: ['http://oot34wnx6.bkt.clouddn.com/code.jpeg','http://oot34wnx6.bkt.clouddn.com/people.jpg'],
       success: function(res){
         // success
       },
       fail: function(res) {
         // fail
       },
       complete: function(res) {
         // complete
       }
     })
    // wx.showActionSheet({
    //   itemList: ['保存到本地', '取消'],
    //   success: function (res) {
    //     if (!res.cancel) {
    //       console.log(res.tapIndex)
    //       if (res.tapIndex === 0) {
    //         console.log("yi");
    //         // wx.chooseImage({
    //         //   success: function (res) {
    //         //     var tempFilePaths = res.tempFilePaths
    //         //     console.log(tempFilePaths);
    //         //     wx.saveFile({
    //         //       tempFilePath: tempFilePaths[0],
    //         //       success: function (res) {
    //         //         var savedFilePath = res.savedFilePath
    //         //       }
    //         //     })
    //         //   }
    //         // })
           
    //       }
    //       // else if(res.tapIndex===1){
    //       //   console.log("er");
    //       // }else if(res.tapIndex===2){
    //       //   console.log("san");
    //       // }
    //     }
    //   }
    // });
  },
  previewImage: function () {
      wx.previewImage({
       current: 'http://oot34wnx6.bkt.clouddn.com/people.jpg', // 当前显示图片的链接，不填则默认为 urls 的第一张
       urls: ['http://oot34wnx6.bkt.clouddn.com/code.jpeg','http://oot34wnx6.bkt.clouddn.com/people.jpg'],
       success: function(res){
         // success
       },
       fail: function(res) {
         // fail
       },
       complete: function(res) {
         // complete
       }
     })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})