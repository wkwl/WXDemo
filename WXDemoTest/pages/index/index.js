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
    });
    /* ---- 请求首页导航数据 ---- */
    wx.request({
      url: "https://locally.uieee.com/categories",
      success: (res) => {
        // console.log(res)
        // res.data
        // 1、设置页面的data数据
        // this.data.sliderList = res.data;  这个写法不是微信小程序的标准
        /*
            this.setData 有2个功能:
            1、更新数据
            2、更新视图
        */
        this.setData({
          navList: res.data
        });
      },
    });
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
