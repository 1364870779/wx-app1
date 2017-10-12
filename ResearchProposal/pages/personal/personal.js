// pages/personal/personal.js
var app = getApp()
Page({
  data: {
    imageUrlOne: "http://oot34wnx6.bkt.clouddn.com/mine3.jpg",
    userInfo: {},
    iconOne: "../images/cooperate.png",
    iconTwo: "../images/join.png",
    iconThree: "../images/follow.png",
    iconFour: "../images/share.png",
    iconFive: "../images/clear.png",
    iconSix: "../images/update.png",
    code: "../code/code"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }),
    wx.setNavigationBarTitle({
      title: '我们',
      success: function(res) {
        // success
      }
    })
  },
  openConfirm: function () {
        wx.showModal({
            title: '提示',
            content: '        是否清除缓存？',
            confirmText: "是",
            cancelText: "否",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击主操作')
                     wx.showToast({
                      title: '清理完成',
                      icon: 'success',
                      duration: 2000
                  });
                }else{
                    console.log('用户点击辅助操作')
                }
            }
        });
    },
    openAlert: function () {
        wx.showModal({
            content: 'Copyright © 2015-2017 ki1lt0',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        });
    },
  shareApp: function () {
    wx.showActionSheet({
      itemList: ['拨打电话','取消'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
          if(res.tapIndex===0){
            console.log("yi");
            wx.makePhoneCall({
              phoneNumber: '15539910985' //仅为示例，并非真实的电话号码
            })
          }
          // else if(res.tapIndex===1){
          //   console.log("er");
          // }else if(res.tapIndex===2){
          //   console.log("san");
          // }
        }
      }
    });

  },
  // 分享
    onShareAppMessage: function () {
        return {
            title: '快来关注我们把！！',
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