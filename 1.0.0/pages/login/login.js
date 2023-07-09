// pages/login/login.js
const app = getApp()
const AV = require('../../libs/av-core-min.js'); 

Page({
  data: {
    username: '',
    password: '',
  },
  toregister:function(){
    wx.navigateTo({
      url: '/pages/register/register?username='+this.data.username,
    })
  },
    
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },

  login() {
    const {
      username,
      password,
    } = this.data;
    AV.User.logIn(username, password).then(function (loginedUser) {
      wx.redirectTo({
        url: '/pages/message/message',
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      })
      // 登录成功，跳转到message页面
    }, function (error) {
      alert(JSON.stringify(error));
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})