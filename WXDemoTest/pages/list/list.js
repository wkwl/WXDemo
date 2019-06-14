// pages/list/list.js
var rootUrl = getApp().globalData.rootUrl;
var picUrl = getApp().globalData.picUrl;
var newlist = [];


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    picurl: picUrl,
    pageIndex: 0,
    pageSize: 5,
    catId: 1,
    // 记录是否还有数据
    hasMore: true
  },
  //自定义函数
  loadMore:function(that){
    if(!this.data.hasMore) return;
    wx.request({
      url: rootUrl + 'website/wzcd/scenic/iyScenicQuery.action',
      data: {
        row:this.data.pageSize,
        page:++this.data.pageIndex
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },// 设置请求的 header
      success: function (res) {
        console.log(res);
         var newlist = that.data.items.concat(res.data.list);
        var count = res.data.totalCount;
        var flag = that.data.pageIndex*that.data.pageSize<count;
        that.setData({
          items: newlist,
          hasMore: flag,
        })

      },
      fail: function () {
        console.log("index.js wx.request CheckCallUser fail");
      },
      complete: function () {
        // complete
      }
    })
  },
  //点击事件
  click: function (event) {
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    // console.log(event);
    /* 路由跳转方式 （ 小程序最多只能打开5个页面，当打开页面的个数达到5个以后，wx.navigateTo不能正常打开新的页面，请避免层级过多的交互方式，或使用wx.redirectTo重定向）
    * 1:wx.navigateTo（object） 保留当前页面，跳转到应用内某个页面，wx.navigateBack可返回
    *
    * 2:wx.redirtTo（object） 关闭当前页面，跳转到应用内某个页面
    *
    *3:wx.reLaunch（object）关闭所有页面，打开应用某个页面
    **/
    
    // 1.wx.navigateTo(页面从属于tabar 将失效，如要切换，需使用wx.switchTab：使用该方法之后将不再有返回按钮)
    // wx.navigateTo({
    //   // url: '../index/index',
    //   url: '../logs/logs',
    // })

    //2.wx.redirtTo（object）关闭当前页面，跳转到应用内某个页面
    // wx.redirectTo({
    //   url: '../logs/logs',
    // })
    //3.wx.reLaunch（object）关闭所有页面，打开应用某个页面
    // wx.reLaunch({
    //   url: '../logs/logs',
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉刷新:先设置数据为空后，重新加载数据
    this.setData({
      items: [],
      pageIndex: 0,
      hasMore: true
    });
    this.loadMore(this);
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore(this);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})