// pages/maps/gaodeMap.js
var amapFile = require('../../libs/amap-wx.js');
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    imageUrlOne:"http://oot34wnx6.bkt.clouddn.com/rain.gif",
    weather: {}
  },
  makertap: function(e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id);
  },
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'5dd7e89bc06e3165834b31b284e64d6f'});
    myAmapFun.getPoiAround({
      iconPathSelected: '../images/dog_select.png', //如：..­/..­/img/marker_checked.png
      iconPath: '../images/dog.png', //如：..­/..­/img/marker.png
      success: function(data){
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData,0);
      },
      fail: function(info){
        wx.showModal({title:info.errMsg})
      }
    }),
  // 获取天气信息
  myAmapFun.getWeather({
    success: function(data){
        // 成功回调
        that.setData({
          weather: data
        }),
        wx.hideLoading()
    },
    fail: function(info){
      console.log(info)
    }
  }),
   wx.setNavigationBarTitle({
          title: '地图集成类',
          success: function (res) {
            // success
          }
        }),wx.showLoading({
            title: '加载中...',
        })

  },
  showMarkerInfo: function(data,i){
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0; j < data.length; j++){
      if(j==i){
        data[j].iconPath = "../images/dog_select.png"; //如：..­/..­/img/marker_checked.png
      }else{
        data[j].iconPath = "../images/dog.png"; //如：..­/..­/img/marker.png
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})