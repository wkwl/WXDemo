//index.js
//获取应用实例
const app = getApp()
var rootUrl = getApp().globalData.rootUrl;
Page({
  data: {
    message: "js数据",
    sliderList: [],
    navList: [],
    picHeader:rootUrl
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: rootUrl + 'web/index/findIndexInfo.action',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },// 设置请求的 header
      success: function (res) {
        //debugger;
        if (res.statusCode == 200) {
          that.setData({
            sliderList: res.data.imgList
          })
        } else {
          console.log("index.js wx.request CheckCallUser statusCode" + res.msg);
        }
      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function () {
        // complete
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
