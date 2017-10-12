// // pages/products/products.js
var app = getApp()
Page({

  data: {
    //默认未获取地址
    hasLocation: false,
    FIRST:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/first.png&title=商城购物类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现商品的购买和租赁等一系列商业活动.商家可以在平台发布商品,买家可以通过手机APP查看商品后进行下单,然后通过第三方的支付进行交易.手机端APP可以实现各种商品的展示和订单的详情的展示以及交易进行的具体步骤和进度.从而实现买家和卖家的正常交易.&detailFunction=卖家在后台或者是在手机端发布要出售的商品,然后通过一些具体的展示方式去展示商品,让用户在手机端看到卖家发布的商品.商品的展示通常以列表的方式展示,点击后可以查看商品详情,一般商品详情页面会有点赞,评论,客服,收藏,分享,购买下单等功能.商品购买后会出现再订单页面,不论是商家还是用户,都可以实现查看订单详情的功能.在订单完成后可以实现收货,发货,退回,查看详情等功能.最终的目的是可以保证商品交易的完整性.从而实现商城的正常运作.&detailWork=啵呗---大型购物租赁商品平台.",
    SECOND:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/second.png&title=智能运动类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现用户可以使用手机蓝牙来读取运动设备蓝牙模块的内部数据.读取方式采用蓝牙4.0读包的方式,解析设备上存储的数据.解析成功后传回手机并同步到后台服务器.用户可以在手机前端界面查看自己一天,一周,一个月,一年的运动数据.同时,前端也包含记录轨迹,分享到朋友圈等功能.&detailFunction=用户通过购买商家的运动蓝牙模块并在手机上安装APP后,打开手机蓝牙并连接自己的蓝牙设备,连接成功后,点击同步数据的按钮.实现数据的本地化同步,同步成功后.用户就可以在前端界面上查看运动数据,运动数据通过一定的算法进行处理,并通过前端的图标库和动画效果展示.用户也可以分享APP到朋友圈或者是其他社交平台.APP也包含高德鹰眼地图记录轨迹等功能.&detailWork=JCS运动---一款可以瘦腿的APP.",
    THREE:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/six.png&title=第三方支付类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现商品的购买和租赁等一系列商业活动可以通过支付宝,微信,银联等一系列第三方支付平台支付订单.&detailFunction=现在常见的第三方支付有微信,支付宝,银联等支付平台,具体可以通过原生的SDK集成到移动APP端或者是采用更为便捷的Ping++第三方集成平台来实现商城的支付功能.&detailWork=啵呗,纸源网等.",
    FOUR:"../map/gaodeMap?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/three.png&title=地图集成类",
    FIVE:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/four.png&title=社交通讯类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现手机APP客户端常见的聊天,单聊,多聊,群聊等一些列操作,以及商户之间或者是商户与客户之间进行的客服聊天等功能.&detailFunction=现在手机APP端常见的聊天第三方有融云,环信,以及美恰客服等第三方即时通讯SDK,可以满足客户之间的正常咨询和交流.&detailWork=啵呗,纸源网等.",
    SIX:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/five.png&title=影音视频类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现播放视频和音频,一般包括本地视频音频和网络视频和音频,以及一些常见的电台端口,在线视频流等多媒体的实现.&detailFunction=常见的音视频播放控件以及一些第三方流媒体播放器的自定义和编译等如FFMPEG和VLC等复杂开源库的编译.&detailWork=百面贊,MU.",
    SEVEN:"../product/productDetail?imageUrlOne=http://oot34wnx6.bkt.clouddn.com/seven.png&title=内容展示类&tool=安卓和iOS手机移动端&skillDetail=通过开发移动端的手机APP,从而实现目标物体的展示和一些列操作.&detailFunction=新闻,购物,咨询等.&detailWork=啵呗,MU,大数据展示平台."
  },
  onLoad: function () {
  },
  // gotoMap: function(){
  //   wx.navigateTo({
  //     url: '../map/location'
  //   })
  // },
  // //获取经纬度
  // getLocation: function (e) {
  //   console.log(e)
  //   var that = this
  //   wx.getLocation({
  //     success: function (res) {
  //       console.log(res)
  //       that.setData({
  //         hasLocation: true,
  //         location: {
  //           longitude: res.longitude,
  //           latitude: res.latitude
  //         }
  //       })
  //     }
  //   })
  // },
  // //根据经纬度在地图上显示
  // openLocation: function (e) {
  //   var value = e.detail.value
  //   wx.openLocation({
  //     longitude: Number(value.longitude),
  //     latitude: Number(value.latitude)
  //   })
  // },
  onShow: function () {
        wx.setNavigationBarTitle({
          title: '业务范围',
          success: function (res) {
            // success
          }
        })
    // var that = this
    // wx.getLocation({
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       hasLocation: true,
    //       location: {
    //         longitude: res.longitude,
    //         latitude: res.latitude
    //       }
    //     }), 
    //     wx.setNavigationBarTitle({
    //       title: '业务范围',
    //       success: function (res) {
    //         // success
    //       }
    //     })
    //   }
    // })
  }

})
