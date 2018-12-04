// pages/productsList/productsList.js
Page({
  productsList: function (event) {
    //this.serious = event.target.dataset.type;
    wx.request({
      url: 'http://127.0.0.1:3000/indexdetails?serious='+this.serious,
      success: (res) => {
        this.setData({
          list: res.data.data
        })
        //console.log(res.data.data);
        var pic = []
        var data = res.data.data
        for (var item of data) {
          pic.push("http://127.0.0.1:3000" + item.pic.slice(21));
        }
        this.setData({pic})
      }
    })
  },
  handleJumpDetails:function(event){
    var lid = event.currentTarget.dataset.lid;
    wx.navigateTo({
      url: "/pages/productsDetails/productsDetails?lid="+lid,
    })
    //console.log(lid);
  },

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pic:[],
    serious:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.serious);
    this.serious = options.serious;
    this.productsList();
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})