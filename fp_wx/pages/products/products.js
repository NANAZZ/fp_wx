// pages/products/products.js
Page({
  //1.切换导航栏
  handleChangeType:function(event){
    if(event==undefined) this.serious="new"
    else this.serious = event.target.dataset.type;
    //console.log(this.serious)
    wx.request({
      url: 'http://127.0.0.1:3000/indexdetails?serious='+this.serious,
      success:(res)=>{
        this.setData({
          list: res.data.data,
          serious: this.serious
        })
        var pic = []
        var data = res.data.data
        for (var item of data) {
          pic.push("http://127.0.0.1:3000" + item.pic.slice(21))
        }
        this.setData({pic})
      }
    })
  },
  //2.点击加载更多，跳往商品列表
  getMore:function(){
    //console.log(this.serious);
    wx.navigateTo({
      url: "/pages/productsList/productsList?serious="+this.serious,
    })
  },
  //3.点击图片跳商品详情页
  handleJumpDetails: function (event) {
    var lid = event.target.dataset.lid;
    wx.navigateTo({
      url: "/pages/productsDetails/productsDetails?lid=" + lid,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pic:null,
    show:true,
    serious:'new',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.handleChangeType()
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