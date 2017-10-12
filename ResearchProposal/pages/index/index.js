//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'START',
    welcome: 'Thanks for you visit!',
    userInfo: {}
  },
  // 分享
  onShareAppMessage: function () {
    return {
      title: '他这么帅竟然是因为...',
      path: '/page/index?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  //事件处理函数, 
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jumpToOneDay: function(){
    wx.switchTab({
      url: '../home/home',
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
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
