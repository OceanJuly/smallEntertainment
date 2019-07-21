// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'runner and seeker',
    userInfo:{},
    isShow:true,
  },

  handleClick() {
    //点击按钮跳转页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getUserInfo();
  },

  getUserInfo(){
    //判断用户是否授权了
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //用户授权了
          this.setData({
            isShow: false
          })
        } else {
          //用户没有授权
          isShow: true
        }
      }
    })


    wx.getUserInfo({
      success: (data) => {
        //更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        });
      },
      fail: () => {
        console.log('获取数据失败');
      }
    })
  },

  handleGetUserInfo(data){
    //判断用户点击的事都是允许
    if(data.detail.rawData){
      //点击是允许
      this.getUserInfo();
    }
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