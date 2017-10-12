// pages/android/andview.js
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     this.setData({    
      title: options.title,    
      secondtitle: options.secondtitle,
      tool: options.tool,
      skillDetail: options.skillDetail,
      detailFunction: options.detailFunction,
      detailWork: options.detailWork,
      downAddress: options.downAddress,
      imageUrlOne: options.imageUrlOne,
      add: options.downAddress,
    }),
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })   
  },
  priviewImage: function(options){
    var add = options.downAddress;
    wx.previewImage({
      current: add, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [add],
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
  // 分享
    onShareAppMessage: function () {
        return {
            title: '商品详情',
            path: '/pages/home/home',
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
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
