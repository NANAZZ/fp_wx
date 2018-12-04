// pages/home/home.js
Page({
  //1.请求轮播图
  getSwiper:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/imagelist',
      success:(res)=>{
        this.setData({
          list:res.data
        })
      }
    })
  },
  //2.1 请求六宫格
  getNavbar:function(){
    wx.request({
      url:'http://127.0.0.1:3000/navbar',
      success:(res)=>{
        this.setData({
          navitems:res.data
        })
      }
    })
  }, 
  //2.2 六宫格跳转对应的商品列表
  handleJumpProductsList:function(event){
    var serious = event.target.dataset.serious;
    wx.navigateTo({
      url: "/pages/productsList/productsList?serious="+serious,
    })
  },
  //3.1 请求首页详情
  getIndexDetails:function(){
    wx.request({
      url:'http://127.0.0.1:3000/indexdetails?serious=new',
      success:(res)=>{
        this.setData({
          newlist:res.data.data
        })
        var newpic=[]
        var data=res.data.data
        for(var item of data){
          newpic.push("http://127.0.0.1:3000" + item.pic.slice(21))
        }
        this.setData({newpic})
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3000/indexdetails?serious=shoes',
      success: (res) => {
        this.setData({
          shoeslist: res.data.data
        })
        var shoespic = []
        var data = res.data.data
        for (var item of data) {
          shoespic.push("http://127.0.0.1:3000" + item.pic.slice(21))
        }
        this.setData({ shoespic })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3000/indexdetails?serious=ornament',
      success: (res) => {
        this.setData({
          ornamentlist: res.data.data
        })
        var ornamentpic = []
        var data = res.data.data
        for (var item of data) {
          ornamentpic.push("http://127.0.0.1:3000" + item.pic.slice(21))
        }
        this.setData({ ornamentpic })
      }
    })
  },
  //3.2 首页详情块的跳转
  handleJumpNew:function(){
    wx.navigateTo({
      url: "/pages/productsList/productsList?serious=new",
    })
  },
  handleJumpShoes: function () {
    wx.navigateTo({
      url: "/pages/productsList/productsList?serious=shoes",
    })
  },
  handleJumpOrnament: function () {
    wx.navigateTo({
      url: "/pages/productsList/productsList?serious=ornament",
    })
  },
  //3.3 跳转商品详情页
  handleJumpDetails:function(event){
    var lid = event.target.dataset.lid;
    wx.navigateTo({
      url: "/pages/productsDetails/productsDetails?lid="+lid,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navitems:[],
    newlist:[],
    shoeslist:[],
    ornamentlist:[],
    newpic:null,
    shoespic:null,
    ornamentpic:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper();
    this.getNavbar();
    this.getIndexDetails();
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