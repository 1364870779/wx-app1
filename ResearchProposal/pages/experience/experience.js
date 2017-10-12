// pages/experience/experience.js
Page({
  data: {
    // android
    android: "Android开发",
    androidDetail: "开发工具：Eclipse + Android Studio",
    androidskill1: "1、掌握C、C++、C#、java、OC等开发语言,熟悉面向对象以及封装、多态、继承等编程思想。",
    androidskill2: "2、Android 基本控件的使用与开发。",
    androidskill3: "3、第三方的引入以及实际使用，友盟，Ping++，融云，高德等。",
    androidskill4: "4、普通内容展示类APP，内容效果的复杂性和流畅度。",
    androidskill5: "5、商城类APP业务，交易，订单，客服，支付，朋友圈等。",
    androidskill6: "6、BLE4.0开发，对于手机获取蓝牙信息，读取蓝牙设备数据以及解析数据，写入蓝牙设备控制蓝牙模块。如常见的车载蓝牙模块的控制系统，热门的穿戴设备的运动数据的读取等。",
    androidskill7: "7、人脸识别和门禁系统的开发。通过搭载安卓系统的硬件设备扫描身份证信息，获取身份信息。通过人脸特征的识别，录入检测人的外貌特征，通过请求后端数据库信息进行人脸的比对，进而获取到比对之后的阈值，得出最终的结论。",
    androidskill8: "8、各种SDK的使用和与安卓系统的交互。",
    imageUrlOne: "http://oot34wnx6.bkt.clouddn.com/ANDROID.jpg",


    // iOS
    iOS: "iOS开发",
    iOSDetail: "开发工具：XCode 8.2",
    iOSskill1: "1、掌握C、C++、C#、java、OC等开发语言,熟悉面向对象以及封装、多态、继承等编程思想。",
    iOSskill2: "2、iOS 基本控件的使用与开发。",
    iOSskill3: "3、第三方的引入以及实际使用，友盟，Ping++，融云，高德等。",
    iOSskill4: "4、cocoapods的熟练使用，git，svn等开发工具。Linux/Unix指令。",
    iOSskill5: "5、AFNetWorking的GET、POST，上传下载等操作。",
    iOSskill6: "6、单例设计模式，MVC等设计模式",
    iOSskill7: "7、C、OC、C++的混编，.mm文件的引入与使用。",
    iOSskill8: "8、第三方流媒体的播放，如VLC、FFmpeg的编译和使用。",
    iOSskill9: "9、AppStore上架、TestFlight等的使用。",
    imageUrlTwo: "http://oot34wnx6.bkt.clouddn.com/iOS.png",
    // WeChatApplet
    weChatApplet: "WeChatApplet开发",
    weChatAppletDetail: "开发工具：微信web开发者工具",
    weChatAppletskill1: "1、掌握C、C++、C#、java、OC、javascript、css等开发语言,熟悉面向对象以及封装、多态、继承等编程思想。",
    weChatAppletskill2: "2、微信小程序 基本控件的使用与开发。",
    weChatAppletskill3: "3、第三方的引入以及实际使用，微信支付、高德等。",
    weChatAppletskill4: "4、普通内容展示类APP，内容效果的复杂性和流畅度。",
    weChatAppletskill5: "5、商城类APP业务，交易，订单，客服，支付，分享到朋友等。",
    imageUrlThree: "http://oot34wnx6.bkt.clouddn.com/WeChatApplet.jpg",

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '技术范畴',
      success: function (res) {
        // success
      }
    })
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