// pages/productsDetails/productsDetails.js
Page({
  //1.获取商品轮播
  goodsImage: function (event) {
    wx.request({
      url: 'http://127.0.0.1:3000/goodsimage?lid='+this.lid,
      success: (res) => {
        var pic = []
        var data = res.data.data
        for (var item of data) {
          pic.push("http://127.0.0.1:3000" + item.md.slice(21))
        }
        this.setData({spic:pic[0]});
        this.setData({pic})
      }
    })
  },
  //2.获取商品详情
  goodsInfo: function (event) {
    wx.request({
      url: 'http://127.0.0.1:3000/goodsinfo?lid=' + this.lid,
      success: (res) => {
        this.setData({ 
          list:res.data.data
        })
      }
    })
  },
  //3.获取可选择的尺寸
  goodsSize:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/goodssize',
      success:(res)=>{
        this.setData({
          sizelist:res.data
        })
      }
    })
  },
  //4.控制模态框的显示与隐藏
  handleShow:function(){
    this.setData({show:true});
  },
  handleHide:function(){
    this.setData({show:false});
  },
  //5.选择尺码
  handleSelectSize:function(event){
    this.setData({sizeId : event.target.dataset.id})
  },
  //6.携带各参数加入购物车
  handleAddCart:function(){
    //console.log(1)
  },
  //7.携带各参数进行购买
  handlePay:function(){
    //console.log(2)
  },
  /**
   * 页面的初始数据
   */
  data: {
    pic:[],
    lid:'',
    list:[],
    show:false,
    spic:null,
    sizelist:[],
    sizeId:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.lid=options.lid;
    this.goodsImage();
    this.goodsInfo();
    this.goodsSize();
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