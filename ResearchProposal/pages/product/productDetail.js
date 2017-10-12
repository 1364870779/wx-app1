// pages/product/productDetail.js
Page({
  data:{},
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
      imageUrlOne: options.imageUrlOne
    }),
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })   
  },
  // 分享
    onShareAppMessage: function () {
        return {
            title: 'E-X详情',
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