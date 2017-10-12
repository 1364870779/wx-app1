var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["安卓应用", "苹果应用"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        scrollTop: 0,
        // scrollHeight: 500,
        imgPath: "../images/home_select.png",
        inputShowed: false,
        inputVal: "",
        imgUrls: [
            'http://oot34wnx6.bkt.clouddn.com/apples.jpg', 
            'http://oot34wnx6.bkt.clouddn.com/ANDROID.jpg',                         
            'http://oot34wnx6.bkt.clouddn.com/bannertwo.png',
            'http://oot34wnx6.bkt.clouddn.com/jcs_sport.png',
            'http://oot34wnx6.bkt.clouddn.com/bannerFour.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        boobe:"../android/andview?title=啵呗&secondtitle=啵呗 --- 奢侈品租赁平台。&tool=Android Studio2.2 + Android 4.4 以上安卓手机。&skillDetail=该项目采用MVC的设计模式，可以大大的降低代码的耦合度。该项目提供使用安卓基础控件来实现商品的租赁和买卖。基本控件有swiperefresh、recycleview等一些列安卓中常见的控件。工程通过代码的高度封装和复用，大大的增加了APP的流畅度和效率。项目使用OkhttpUtils作为网络请求框架去向服务器拉取数据，一些常见的POST和GET请求。通过Ping++实现微信、支付宝、银联支付，通过友盟实现APP的第三方登录、分享、常规推送、开屏推送、插屏推送。通过美恰和融云实现客服功能和买卖双方的通信。项目已在360开放平台、Google Play、应用宝上架。&detailFunction=1、商品的租赁发布和寄售发布，以及一些相关养护活动，商品的展示。具体的商品详情页可以查看商品详情、跟卖家聊天、收藏商品、关注卖家、查看商品评论，点击购买后可以购买商品并在我的订单页面找到。2、分类页面可以根据不同的品牌、商标、类型去索引商品、从而快速的查找到自己要购买的商品。3、商品发布按钮页面可以发布寄租、寄售、养护等功能。4、社区页面分模块展示不同的社区，用户可以浏览、发布、点赞、评论不同用户发布的朋友圈。5、我的页面可以实现正常的登录注册、第三方登录等、在我的页面可以查看各种订单和一些商品详情等功能。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/boobecode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/bannertwo.png",
        JCSsport:"../android/andview?title=JCS运动&secondtitle=JCS --- 智能运动丝袜。&tool=Android Studio2.2 + Android 4.4 以上安卓手机。&skillDetail=该项目通过手机APP和线下蓝牙穿戴设备进行交互，可以使手机APP读取设备记录的运动步数。手机获取到步数后同步到服务端。APP可以记录一天、一小时、一周、一个月、一年的运动数据。让用户可以及时的了解自己的运动情况。改项目还具有分享，定制运动，记录轨迹等功能。项目已在360应用市场、小米应用平台、应用宝等平台上架。&detailFunction=该项目采用BLE4.0技术，实现手机连接蓝牙、根据特定的蓝牙协议读取蓝牙模块数据包并解析到手机后台服务端。前端展示采用多种算法进行数据的统计。展示采用HelloChat等第三方图标库进行展示。运动轨迹采用高德鹰眼地图SDK进行集成。支持第三方登录等。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/jcscode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/jcs_sport.png",
        PaperSource:"../android/andview?title=纸源网（买家版）&secondtitle=纸源网 --- 厦门建发集团下属纸业集团。&tool=Elipse + Android 4.4 以上安卓手机。&skillDetail=实现公司旗下正常的纸业的订单的展示、查找以及订单信息的展示。客服聊天等。改项目已经上线。&detailFunction=纯数据展示功能以及订单的管理。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/papercode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/bannerFour.png",
        zhihuiqichen:"../android/andview?title=智慧启辰&secondtitle=TTE --- 智能汽车管家。&tool=Elipse + Android 4.4 以上安卓手机+iOS端维护。&skillDetail=该项目通过手机APP实现对车载蓝牙系统的控制，实现对汽车一些常用的功能模块进行控制，比如空调、车灯、车门、车胎压强等一系列的功能进行控制和读取，同时，记录汽车的运动轨迹，导航等功能以及汽车轨迹的记录。该项目已经在内部使用。&detailFunction=如上&detailWork=二期项目增加功能以及维护&downAddress=http://oot34wnx6.bkt.clouddn.com/zhihuicode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/zhihuiqiche.png",
        wuhuaniu:"../android/andview?title=五花牛&secondtitle=五花牛 --- 股票财经资讯。&tool=Android Studio2.0 + Android 4.0 以上安卓手机以及XCode 7.2+iOS8.0。&skillDetail=财经股票讯息展示。项目已下架。&detailFunction=展示财经讯息。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/wuhuaniu.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/wuhuaniupic.jpg",
        baimianzan:"../android/andview?title=百面贊&secondtitle=百面贊 --- 台湾民俗电台。&tool=Android Studio2.0 + Android 4.4 以上安卓手机以及iOS7.0以上。&skillDetail=该项目具体是播放一个台湾民俗电台广播。需要对VLC进行开发和重新编译。该项目已在谷歌市场和360等平台上架。&detailFunction=重新编译VLC并播放端口请求到的数据流。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/bmzcode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/zhihuiqiche.png",
        aboutUs:"../about/aboutus",
        sanweima:"../android/andview?title=三维码&secondtitle=三维码 --- 大数据分析云平台。&tool=XCode 8.2 + iOS 10 以上苹果手机。&skillDetail=该项目通过集成定制的SDK后进行二次开发，可以生成和扫面三维码，达到相应的展示效果。该项目已在APP Store上架。&detailFunction=接入客户的SDK接口，然后实现扫描和生成的代理方法实现相应的扫码功能。&detailWork=独立开发。&downAddress=http://oot34wnx6.bkt.clouddn.com/bmzcode.png&imageUrlOne=http://oot34wnx6.bkt.clouddn.com/sanweimas.jpg",

    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    }, onShow: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                // success
                var height = res.windowHeight - footerpannelheight;
                that.setData({
                    scrollHeight: height
                });
            }
        }),
        wx.setNavigationBarTitle({
          title: '产品详情',
          success: function(res) {
            // success
          }
        })
    }, clickEvent: function () {
        that.setData({
            scrollTop: that.data.scrollTop + 1000    //为了移到最下方，所以加一个比较大的值
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
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
    // JumpToDetailOne: function(){
    //     wx.navigateTo({
    //       url: '../android/andview',
    //       success: function(res){
    //         // success
    //       },
    //       fail: function(res) {
    //         // fail
    //       },
    //       complete: function(res) {
    //         // complete
    //       }
    //     })
    // }


});